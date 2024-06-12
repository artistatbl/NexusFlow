import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)", 
  "/sign-up(.*)", 
  "/", 
  "/api/webhooks(.*)"
]);

// Middleware function
const middleware = clerkMiddleware(async (auth, req: NextRequest) => {
  // If the request matches a public route, allow it through
  if (isPublicRoute(req)) {
    return;
  }

  // Protect all other routes
  const authResult = await auth();
  if (!authResult.sessionId) {
    return new Response('Unauthorized', { status: 401 });
  }
});

export default middleware;

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", 
    "/", 
    "/(api|trpc)(.*)"
  ],
};







