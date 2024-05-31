import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
	publicRoutes: ["/", "/auth(.*)", "/portal(.*)"],

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};