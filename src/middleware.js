import { NextResponse } from "next/server";
import { dataSlugPostVi } from "../utils/dataSlugPostVi";

export function middleware(request) {
  const targetHost = "ondigitals.com";
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") || "http"; // Sử dụng header "x-forwarded-proto" để xác định giao thức nếu bạn đang sử dụng proxy
  // Kiểm tra nếu giao thức không phải HTTPS hoặc host có tiền tố www
  if (protocol !== "https" || host.startsWith("www.")) {
    const redirectUrl = `https://${targetHost}${request.nextUrl.pathname}`;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }
  const urlMain = "https://ondigitals.com";
  const modifiedData = dataSlugPostVi.map((item) => ({
    slug: `${urlMain}/${item.slug}/`,
    slugNewVi: `${urlMain}/vi/${item.slug}/`,
  }));
  // Tìm phần tử trong modifiedData có slug trùng với request.nextUrl.href
  const matchedItem = modifiedData.find(
    (item) => request.nextUrl.href === item.slug
  );
  // Nếu tìm thấy phần tử
  if (matchedItem) {
    // Thực hiện chuyển hướng đến slugNewVi của phần tử đó
    return NextResponse.redirect(matchedItem.slugNewVi, {
      status: 301,
    });
  }
  return NextResponse.next();
}
