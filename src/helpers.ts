import { randomBytes } from "crypto"

import { Request, types as FHStypes } from "@fehujs/http-server"

import { CONFIG } from "./config"


type HttpContext = FHStypes.HttpContext

export function getSessionId(request: Request) {
    let sessionId = request.cookieHandler.getCookie(CONFIG.ID_COOKIE_NAME)

    if (!sessionId) sessionId = randomBytes(CONFIG.ID_LENGTH).toString('hex')
    
    return sessionId
}

export function setSessionIdCookie({ request, response }: HttpContext) {
    return request.cookieHandler.setCookie(response, {
        name: CONFIG.ID_COOKIE_NAME,
        value: getSessionId(request),
        secure: true,
        sameSite: "Strict",
        httpOnly: true,
        maxAge: CONFIG.ID_COOKIE_EXPIRES,
        path: '/'
    })
}
