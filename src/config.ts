import { cwd } from "process"

let _config
try {
    _config = await import(cwd() + "/config/sessions.js")
} catch (e: any) {
    console.log(`[sessions] config: config file not found, applying default config.`)
    _config = {
        ID_COOKIE_NAME: "session_id",
        ID_COOKIE_EXPIRES: 1800000,
        ID_LENGTH: 16,
    }
}

export const CONFIG = { ..._config }
