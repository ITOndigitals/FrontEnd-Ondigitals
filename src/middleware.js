import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") || "http"; // Sử dụng header "x-forwarded-proto" để xác định giao thức nếu bạn đang sử dụng proxy
  const targetHost = "ondigitals.com"; // Domain mà bạn muốn chuyển hướng

  // Kiểm tra nếu giao thức không phải HTTPS hoặc host có tiền tố www
  if (protocol !== "https" || host.startsWith("www.")) {
    const redirectUrl = `https://${targetHost}${request.nextUrl.pathname}`;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // Kiểm tra nếu đường dẫn bắt đầu bằng "/spam-mail-la-gi/"
  if (request.nextUrl.pathname.startsWith("/spam-mail-la-gi/")) {
    // Thực hiện redirect 301
    return NextResponse.redirect(
      new URL("/vi/spam-mail-la-gi/", request.url),
      { permanent: true }
    );
  }

  return NextResponse.next();
}
