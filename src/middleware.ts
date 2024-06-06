import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)" , "/", "/api/webhooks(.*)"]);

 export default clerkMiddleware((auth, request) => {
  //publicRoutes: ["/api/:path*"];
 if (!isPublicRoute(request)) {
 auth().protect();
}
});

export const config = {
 matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};











// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes: [
//     '/',
//     '/api/clerk-webhook',
//     '/api/drive-activity/notification',
//     '/api/payment/success',
//     '/images(.*)',
//   ],
//   ignoredRoutes: [
//     '/api/auth/callback/discord',
//     '/api/auth/callback/notion',
//     '/api/auth/callback/slack',
//     '/api/flow',
//     '/api/cron/wait',
//     '/api/settings/domain',
//     '/api/settings/integrations',
//     '/api/settings/integrations/discord',
//     '/api/settings/integrations/notion',
//     '/api/settings/integrations/slack',
//     '/dashboard'
//   ],
// })

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly