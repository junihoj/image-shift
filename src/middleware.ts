import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    // matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
    matcher: [
        '/((?!.*\\..*|_next|api/webhooks).*)', // Exclude static files, _next, and api/webhooks routes
        '/',
        '/(api|trpc)(.*)',
    ],
};