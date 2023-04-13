
async function cookieValidator(cookies) {
    try {
        await externallyValidateCookie(cookies.testCookie)
    } catch (error) {
        throw new Error(`Invaid Cookie: ${error}`)
    }
}

module.exports = {
    cookieValidator
}