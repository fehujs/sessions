import { cwd } from "process"
import { join } from "path"
import { pathToFileURL } from "url"

let _config
try {
    const configPath = pathToFileURL(join(cwd(), "config", "sessions.js")).href
    _config = (await import(configPath))
} catch (e: any) {
    console.log(`[sessions] config: config file not found, applying default config.`, e)
    _config = {
        ID_COOKIE_NAME: "session_id",
        ID_COOKIE_EXPIRES: 1800000,
        ID_LENGTH: 16,
    }
}

export const CONFIG = { ..._config }
