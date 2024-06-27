import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { readSiteDomain } from "@/actions/domain/readdomain";

  
//Define the routes that require authentication
const isProtectedRoute = createRouteMatcher(["/dash(.*)"]);

// Main middleware function
export default clerkMiddleware(async (auth, req) => {
  // Check if the route is protected and enforce authentication if it is
  if (!auth().userId && isProtectedRoute(req)) {

    // Add custom logic to run before redirecting

    return auth().redirectToSignIn();
  }


  
    





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
  console.log("currentHost", currentHost);
  console.log("hostname", hostname);

  // If there's no currentHost, likely accessing the root domain, handle accordingly
  if (!currentHost) {
    // Continue to the next middleware or serve the root content
    return NextResponse.next();
  }

  // Fetch tenant-specific data based on the subdomain
  const response = await readSiteDomain(currentHost);

  // Handle the case where no subdomain data is found
  if (!response || !response.length) {
    console.log("No response found", response);
    // Continue to the next middleware or serve the root content
    return NextResponse.next();
  }

  const domainId = response?.[0]?.id;
  // Get the tenant's subdomain from the response
  const tenantSubdomain = response[0]?.subdomain;

  if (tenantSubdomain) {
    return NextResponse.rewrite(
      new URL(`/${domainId}${pathname}`, req.url)
    );
  }

  // Rewrite the URL to the tenant-specific path
  return NextResponse.rewrite(
    new URL(tenantSubdomain === "/" ? "" : `tsafi.xyz`, req.url)
  );
});

// Define which paths the middleware should run for
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};