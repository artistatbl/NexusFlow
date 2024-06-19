import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define the routes that require authentication
const isProtectedRoute = createRouteMatcher([" '/dashboard(.*)'"]);

export default clerkMiddleware (async (auth, req) => {
     if (isProtectedRoute(req)) auth().protect();



  const url = req.nextUrl;
  const pathname = url.pathname;
  const hostname = req.headers.get("host");
  let currentHost;

  if (process.env.NODE_ENV === "production") {
    const baseDomain = process.env.BASE_DOMAIN;
    currentHost = hostname?.replace(`.${baseDomain}`, "");
  } else {
    currentHost = hostname?.replace(`.localhost:3000`, "");
  }

  if (!currentHost) {
    return NextResponse.next();
  }

  console.log("hostname", hostname);
  console.log("currentHost", currentHost);
 


  try {
    const res = await fetch(`${req.nextUrl.origin}/api/getdomain?domain=${currentHost}`);
    const response = await res.json();

    if (!response || !Array.isArray(response) || response.length === 0) {
      console.log("Subdomain not found, serving root domain content");
      return NextResponse.next();
    }

    const tenantSubdomain = response[0]?.subdomain;

    console.log("Tenant Subdomain:", tenantSubdomain);

    return NextResponse.rewrite(
      new URL(`/${tenantSubdomain}${pathname}`, req.url)
    );
  } catch (error) {
    console.error("Error fetching domain data:", error);
    return NextResponse.next();
  
}
})

// Define which paths the middleware should run for
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
