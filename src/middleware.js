import { NextResponse } from "next/server";

export default function middleware(req) {
  const host = req.headers.get("host");
  if (host && host.startsWith("www.")) {
    // Remove 'www.' from the beginning of the host
    const nonWwwHost = host.replace(/^www\./, "");
    const redirectUrl = `https://${nonWwwHost}${req.nextUrl.pathname}`;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }
  // Không cần chuyển hướng nếu không có tiền tố 'www.'
  return NextResponse.next();
}
