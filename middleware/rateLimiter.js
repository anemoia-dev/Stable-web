const rateLimitMap = new Map()

function rateLimitMiddleware(handler) {
    return async (req, res) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
        const limit = 5 // 5 requests per minute
        const windowMs = 1000 * 60 // 1 minute

        if (!rateLimitMap.has(ip)) {
            rateLimitMap.set(ip, {
                count: 0,
                lastReset: Date.now()
            })
        }

        const ipData = rateLimitMap.get(ip)
        if (Date.now() - ipData.lastReset >= windowMs) {
            ipData.count = 0
            ipData.lastReset = Date.now()
        }

        if (ipData.count >= limit) {
            res.status(429).send('Too many requests')
        }

        ipData.count++
        return handler(req, res)
    }
}

module.exports = rateLimitMiddleware