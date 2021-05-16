/* eslint-disable @typescript-eslint/no-var-requires */
const pino = require("pino")

const isServer = !(global.window && global.fetch)

const logger = isServer
  ? pino({})
  : pino({
      browser: {
        asObject: true,
      },
    })

const stream = {
  write: (message) => {
    logger.info(message)
  },
}

const streamErr = {
  write: (message) => {
    logger.error(message)
  },
}

module.exports.logger = logger
module.exports.stream = stream
module.exports.streamErr = streamErr
