import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { readSiteDomain } from "@/actions/domain/readdomain";

// Define the routes that require authentication
const isProtectedRoute = createRouteMatcher([]);

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
    // Adjust the subdomain extraction logic to handle local development hostname correctly
    currentHost = hostname?.replace(`.localhost:3000`, "");
  }

  if (!currentHost) {
    return NextResponse.next();
  }
  console.log("Request URL:", req.url);
  console.log("hostname", hostname);
  console.log("currentHost", currentHost);
 


  
    const response = await readSiteDomain(currentHost);

    if (!response || !response.domain || response.domain.length === 0) {
      console.log("Subdomain not found or invalid response, serving root domain content");
      return NextResponse.next();
    }

    console.log("Domain data:", response.domain);
    const domainId = response.domain[0]?.id;
    console.log("Domain ID:", domainId);
    const tenantSubdomain = response.domain[0]?.subdomain;
    console.log("Tenant Subdomain:", tenantSubdomain);

    if(tenantSubdomain){
        return NextResponse.rewrite(
            new URL(`/${domainId}${pathname}`, req.url)
          );
    }
    return NextResponse.rewrite(
     new URL(`/${pathname}`, req.url)
    );


});

// Define which paths the middleware should run for
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

