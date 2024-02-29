import { NextResponse } from "next/server";
export default function middleware(req) {
    const host = req.headers.get("host");
    const protocol = req.headers.get("x-forwarded-proto") || "http"; // Sử dụng header "x-forwarded-proto" để xác định giao thức nếu bạn đang sử dụng proxy
    const targetHost = "ondigitals.com"; // Domain mà bạn muốn chuyển hướng
    if (protocol !== "https" || host.startsWith("www.")) {
      // Kiểm tra nếu giao thức không phải HTTPS hoặc host có tiền tố www
      const redirectUrl = `https://${targetHost}${req.nextUrl.pathname}`;
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }
    return NextResponse.next();
}
