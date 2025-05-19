import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === "true";
  const developmentMode = true;
  const pathname = req.nextUrl.pathname.toLowerCase();

  const pathUnderMaintenance = ['/empty'];
  const pathUnderDevelopment = ['/about','/announcement', '/testimonials', '/contacts'];

  if (shouldRedirectToMaintenance(pathname, maintenanceMode, pathUnderMaintenance)) {
    return NextResponse.redirect(new URL('/error_code/503', req.url));
  }

  if (shouldRedirectToDevelopment(pathname, developmentMode, pathUnderDevelopment)) {
    return NextResponse.redirect(new URL('/error_code/403', req.url));
  }

  return NextResponse.next();
}

function shouldRedirectToMaintenance(pathname: string, isEnabled: boolean, protectedPaths: string[]) {
  return isEnabled && protectedPaths.some(path => pathname.startsWith(path));
}

function shouldRedirectToDevelopment(pathname: string, isEnabled: boolean, protectedPaths: string[]) {
  return isEnabled && protectedPaths.some(path => pathname.startsWith(path));
}