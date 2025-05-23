import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("new request (middleware)");
  return withAuth(request);
}

export const config = {
  matcher: "/dashboard/:path*",
};
