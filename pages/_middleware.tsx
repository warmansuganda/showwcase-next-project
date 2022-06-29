import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest): NextResponse | Response {
  const domain = process.env.APP_DOMAIN;

  if (!domain) {
    return new Response('Please set "APP_DOMAIN" in your env');
  }

  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    pathname.includes('.') // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  const hostname = req?.headers?.get('host');
  const whitelistDomain = [domain, `www.${domain}`];

  if (hostname && !whitelistDomain.includes(hostname)) {
    const subdomain = hostname?.split('.');
    const url = req.nextUrl.clone();

    req.nextUrl.pathname = `/store/${[subdomain[0], url.pathname].join('')}`;
    return NextResponse.rewrite(req.nextUrl);
  }

  return NextResponse.next();
}
