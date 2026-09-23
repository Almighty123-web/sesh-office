import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/docs/:path*', '/sheets/:path*', '/slides/:path*', '/settings/:path*'],
};
