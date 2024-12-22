import { CONFIG } from "./config"
import { getSessionId, setSessionIdCookie } from "./helpers"
import { SessionMiddleware } from "./middleware"


type SessionConfig = {
    ID_COOKIE_NAME: string
    ID_COOKIE_EXPIRES: number
    ID_LENGTH: number
}

export {
    getSessionId,
    SessionConfig,
    SessionMiddleware,
    setSessionIdCookie,
    CONFIG,
}
