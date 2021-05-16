import nodeFetch from "node-fetch"
import Agent, { HttpsAgent } from "agentkeepalive"
import fetchRetry from "fetch-retry"
import { logger } from "./logger"

const httpAgent = new Agent({
  maxSockets: 100,
  maxFreeSockets: 10,
  timeout: 60000,
  freeSocketTimeout: 30000,
})

const httpsAgent = new HttpsAgent({
  maxSockets: 100,
  maxFreeSockets: 10,
  timeout: 60000,
  freeSocketTimeout: 30000,
})

export const isServer = !(global as any).window?.fetch

export const nodejsFetch = (url: string, init?: RequestInit): Promise<Response> => {
  const initParam = {
    ...init,
    agent: (_parsedURL: URL): Agent => {
      if (_parsedURL.protocol === "http:") {
        return httpAgent
      }
      return httpsAgent
    },
    retryDelay: (attempt: number): number => {
      return 2 ** attempt * 1000 // 1000, 2000
    },
    retryOn: (attempt: number, error: Error, response: Response): boolean => {
      if (attempt > 2) {
        return false
      }
      // NOTE - Retry on any network error, or 5xx status codes
      if (error !== null || response.status >= 500) {
        logger.error(error)
        logger.info(`Retrying ${url} request, attempt number ${attempt + 1}.`)
        return true
      }

      return false
    },
  }
  const fetchRetryClient = fetchRetry(nodeFetch as any)
  return fetchRetryClient(url, initParam as RequestInit)
}

export const fetch = isServer ? nodejsFetch : window.fetch.bind(window)
