

async function apiTimeoutHandler(req, res, next) {
    try {
        const timeout = parseInt(req.query.timeout, 10)
        const maxAllowedTimeout = ['5000'];
        if (!isNaN(timeout) && timeout > 0 && timeout <= maxAllowedTimeout) {
            const timeoutid = setTimeout(() => {
                clearTimeout(timeoutid);
                res.status(408).json({ error: 'FAIL_SYS_TOKEN_EXOIRED::令牌过期' });
            }, timeout)
        } else {
            next();
        }
    } catch (error) {
        res.status(500)
    }
}

module.exports = apiTimeoutHandler;
