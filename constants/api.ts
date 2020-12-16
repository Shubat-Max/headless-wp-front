const API_PROTOCOL = "http"
const API_HOST = "130.193.62.187"
const API_PORT = "80"
const DEVELOPMENT_ENDPOINT = "wp-json/api/v1"
const PRODUCTION_ENDPOINT = "wp-json/api/v2"
const INITIAL_ENDPOINT = "wp-json/rest/v1"

// http://130.193.62.187/wp-json/rest/v1
export const APIUrl = `${API_PROTOCOL}://${API_HOST}/${INITIAL_ENDPOINT}`
export const API_DEVELOPMENT = `${API_PROTOCOL}://${API_HOST}/${DEVELOPMENT_ENDPOINT}`
export const API_PRODUCTION = `${API_PROTOCOL}://${API_HOST}/${PRODUCTION_ENDPOINT}`