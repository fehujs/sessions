import { Middleware, types as FHStypes } from "@fehujs/http-server"

import { setSessionIdCookie } from "./helpers"


export class SessionMiddleware extends Middleware {
    public async handle(httpContext: FHStypes.HttpContext): Promise<FHStypes.HttpContext> {
        const sessionId = httpContext.request.cookieHandler.getCookie("session_id")
        if (!sessionId) {
            httpContext.response = setSessionIdCookie(httpContext)
        }

        return super.handle(httpContext)
    }
}
