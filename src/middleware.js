import { NextResponse } from "next/server";
import { dataSlugPostVi } from "../utils/dataSlugPostVi";
import { dataSlugServiceAndServiceParent } from "../utils/dataSlugServiceAndServiceParent";
import { dataSlugServiceOldAndRedirectUrl } from "../utils/dataSlugRedirect";
import { dataListslugOld } from "../utils/dataListslugOld";
import { dataListSlugEn } from "../utils/dataSlugPostEn";
import { urlRedirects } from "../utils/urlRedirects";

export async function middleware(request) {
  const targetHost = "ondigitals.com";
  const urlMain = "https://ondigitals.com";
  const stringsToCheck = ["vi", "zh", "jp", "kr"];
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") || "http"; // Sử dụng header "x-forwarded-proto" để xác định giao thức nếu bạn đang sử dụng proxy
  // Kiểm tra nếu giao thức không phải HTTPS hoặc host có tiền tố www
  if (protocol !== "https" || host.startsWith("www.")) {
    const redirectUrl = `https://${targetHost}${request.nextUrl.pathname}`;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }
  // Kiểm tra nếu cookie "hasRedirected" đã tồn tại
  const cookie = request.cookies.get("hasRedirected");
  if (!cookie) {
    // Lấy thông tin địa lý từ GeoJS API
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.ip ||
      "8.8.8.8";
    const languageMap = {
      vn: "vi", // Việt Nam -> Tiếng Việt
      cn: "zh", // Trung Quốc -> Tiếng Trung
      jp: "jp", // Nhật Bản -> Tiếng Nhật
      kr: "kr", // Hàn Quốc -> Tiếng Hàn
    };

    try {
      const geoRes = await fetch(
        `https://get.geojs.io/v1/ip/country/${ip}.json`
      );
      const geoData = await geoRes.json();
      const countryCode = geoData?.country?.toLowerCase();
      if (languageMap[countryCode]) {
        const language = languageMap[countryCode]; // Gán ngôn ngữ theo quốc gia
        const redirectUrl = new URL(
          `${urlMain}/${language}${request.nextUrl.pathname}${request.nextUrl.search}`
        );

        const response = NextResponse.redirect(redirectUrl);
        response.cookies.set("hasRedirected", "true", { path: "/" });
        return response;
      } else {
        // Nếu không phải các quốc gia trên, giữ nguyên URL mà không cần mã ngôn ngữ
        const redirectUrl = new URL(
          `${urlMain}${request.nextUrl.pathname}${request.nextUrl.search}`
        );

        const response = NextResponse.redirect(redirectUrl);
        response.cookies.set("hasRedirected", "true", { path: "/" });
        return response;
      }
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
    }
  }
  // function chuyển 301 các url bài viết tiếng việt
  function modifySlugItem(item, urlMain, language) {
    const slugPrefix = language === "vi" ? "/vi/" : "/";
    return {
      slug: `/${item.slug}/`,
      slugNew: `${urlMain}${slugPrefix}${item.slug}/`,
    };
  }

  const modifiedData = dataSlugPostVi.map((item) =>
    modifySlugItem(item, urlMain, "vi")
  );
  const modifiedDataEn = dataListSlugEn.map((item) =>
    modifySlugItem(item, urlMain, "en")
  );

  const matchedItem = modifiedData.find((item) => {
    return (
      request.nextUrl.pathname === item.slug && request.nextUrl.locale !== "vi"
    );
  });

  // function chuyển 301 các url bài viết tiếng anh
  const matchedItemEn = modifiedDataEn.find((item) => {
    return (
      request.nextUrl.pathname === item.slug && request.nextUrl.locale !== "en"
    );
  });
  if (matchedItem) {
    return NextResponse.redirect(matchedItem.slugNew, {
      status: 301,
    });
  }

  if (matchedItemEn) {
    return NextResponse.redirect(matchedItemEn.slugNew, {
      status: 301,
    });
  }
  // fuction 301 các services cho các ngôn ngữ
  const matchedItemService = dataSlugServiceAndServiceParent.find((item) => {
    if (
      request.nextUrl.pathname === `/${encodeURIComponent(item.slug)}/` &&
      request.nextUrl.locale === "en"
    )
      return null;
    else {
      return (
        request.nextUrl.pathname === `/${encodeURIComponent(item.slug)}/` &&
        !stringsToCheck.some((str) => request.nextUrl.locale.includes(str))
      );
    }
  });
  if (matchedItemService) {
    return NextResponse.redirect(
      `${urlMain}/${matchedItemService.language.code}/${encodeURIComponent(
        matchedItemService.slug
      )}/`,
      {
        status: 301,
      }
    );
  }

  // fuction 301 các services website cũ cho các ngôn ngữ
  const matchedItemServiceOld = dataSlugServiceOldAndRedirectUrl.find(
    (item) => {
      return (
        request.nextUrl.pathname === `/${encodeURIComponent(item.slugOld)}/` &&
        !stringsToCheck.some((str) => request.nextUrl.locale.includes(str))
      );
    }
  );
  if (matchedItemServiceOld) {
    const redirectUrl =
      matchedItemServiceOld.locale === "en"
        ? `${urlMain}/${encodeURIComponent(matchedItemServiceOld.slugNew)}/`
        : `${urlMain}/${matchedItemServiceOld.locale}/${encodeURIComponent(
            matchedItemServiceOld.slugNew
          )}/`;

    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // fuction 301 các url của web cũ qua web mới không còn nữa chuyển về trang chủ
  const matchedSlugWebOld = dataListslugOld.find((item) => {
    return request.nextUrl.pathname === `/${encodeURIComponent(item.slug)}/`;
  });
  if (matchedSlugWebOld) {
    return NextResponse.redirect(
      `${urlMain}/${
        request.nextUrl.locale === "en" ? "" : request.nextUrl.locale
      }`,
      {
        status: 301,
      }
    );
  }

  const urlRedirects301 = urlRedirects.find((item) => {
    return request.nextUrl.pathname === `/${encodeURIComponent(item.slug)}/`;
  });
  if (urlRedirects301) {
    const redirectUrl301 =
      urlRedirects301.locale === "en"
        ? `${urlMain}/${encodeURIComponent(urlRedirects301.slug)}/`
        : `${urlMain}/${urlRedirects301.locale}/${encodeURIComponent(
            urlRedirects301?.slugNew || urlRedirects301.slug
          )}/`;

    return NextResponse.redirect(redirectUrl301, { status: 301 });
  }
  return NextResponse.next();
}
