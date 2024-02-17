const fMsg = async (res, msg="Success", result=[]) => {
    res.status(200).json({
        con: true,
        msg,
        results: result
    })
}

module.exports = {
    fMsg
}