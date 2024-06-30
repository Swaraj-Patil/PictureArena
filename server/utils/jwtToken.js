// Creating a token and saving it in cookie
const sendToken = (user, statusCode, res) => {
    const token = user.getJWT()

    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process?.env?.COOKIE_EXPIRE * 86400000             // 24h X 60m X 60s X 1000ms
        ),
        httpOnly: true,
    }

    res.status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            user,
            token
        })
}

module.exports = sendToken