import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Helper to safely get env variables and split by comma
function getPathsFromEnv(envVar?: string): string[] {
  if (!envVar) return [];
  return envVar.split(',').map(path => path.trim().toLowerCase());
}

export function middleware(req: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === "true";
  const developmentMode = true;
  const pathname = req.nextUrl.pathname.toLowerCase();
  
  const pathUnderMaintenance = getPathsFromEnv(process.env.PATH_UNDER_MAINTENANCE);
  const pathUnderDevelopment = getPathsFromEnv(process.env.PATH_UNDER_DEVELOPMENT);

  // Prevent this page from being blocked. Also skip any static asset (a path with a
  // file extension, e.g. .mp4, .jpg, .css) so media streaming / range requests are
  // never intercepted — that is what stops the intro video from playing.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/error_code/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/announcement') ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

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

// Only run middleware on real pages — never on framework internals or static assets
// (anything with a file extension). This keeps /public media (the .mp4) streaming
// normally so the video can play.
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};