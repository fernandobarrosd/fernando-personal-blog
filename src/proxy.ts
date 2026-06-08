import { NextRequest, NextResponse, ProxyConfig } from "next/server";

const routes = [
    {
        path: "/",
        isPublic: true,
        redirect: false
    },
    {
        path: "/login",
        isPublic: true,
        redirect: true
    },
    {
        path: "/create-post",
        isPublic: false,
        redirect: true
    },
    {
        path: /^\/posts\/[^/]+$/,
        isPublic: true,
        redirect: false
    }
] as const;
 
export default async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    console.log(pathname);
    const route = routes.find(route => {
        if (typeof route.path === "string") {
            return route.path === pathname;
        }
        return route.path.test(pathname)
    });
    const isAuthenticated = request.cookies.get("isAuthenticated");

    if (!isAuthenticated && route?.isPublic) {
        return NextResponse.next();
    }

    if (isAuthenticated && !route?.isPublic) {
        return NextResponse.next();
    }

    if (!isAuthenticated && !route?.isPublic) {
        const redirectURL = request.nextUrl.clone();
        redirectURL.pathname = "/login";

        return NextResponse.redirect(redirectURL);
    }

    if (isAuthenticated && route?.path == "/login" && route?.redirect) {
        const redirectURL = request.nextUrl.clone();
        redirectURL.pathname = "/";

        return NextResponse.redirect(redirectURL);
    }
}

export const config : ProxyConfig = {
    matcher: "/((?!api|_next/static|_next/image|.*\\.jpg$).*)"
}