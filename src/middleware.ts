import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { readSiteDomain } from "@/actions/settings/index";

// Define the routes that require authentication
const isProtectedRoute = createRouteMatcher([""]);

// Main middleware function
export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Get hostname (e.g., 'mike.com', 'test.mike.com')
  const hostname = req.headers.get("host");

  let currentHost;
  if (process.env.NODE_ENV === "production") {
    // In production, use the custom base domain from environment variables
    const baseDomain = process.env.BASE_DOMAIN;
    currentHost = hostname?.replace(`.${baseDomain}`, "");
  } else {
    // In development, handle localhost case
    currentHost = hostname?.replace(`.localhost:3000`, "");
  }

  console.log("hostname", hostname);

  // If there's no currentHost, likely accessing the root domain, handle accordingly
  if (!currentHost) {
    console.log("No subdomain, serving root domain content");
    // Continue to the next middleware or serve the root content
    return NextResponse.next();
  }

  console.log("currentHost", currentHost);

  // Fetch tenant-specific data based on the subdomain
  const response = await readSiteDomain(currentHost);

  // Handle the case where no subdomain data is found
  if (!response || !Array.isArray(response) || response.length === 0) {
    console.log("Subdomain not found, serving root domain content");
    // Continue to the next middleware or serve the root content
    return NextResponse.next();
  }

  const siteId = response[0]?.id;  // Corrected property name
  const tenantSubdomain = response[0]?.subdomain;  // Corrected property name

  console.log("Tenant Subdomain:", tenantSubdomain);

  // Check if the route is protected and enforce authentication if it is
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  // Rewrite the URL to the tenant-specific path
  return NextResponse.rewrite(
    new URL(`/${tenantSubdomain}${pathname}`, req.url)
  );
});

// Define which paths the middleware should run for
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
