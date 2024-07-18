const add = (req, res, next) => {
    req.send(req.body.a+req.body.b+"")
}

const subtract = (req, res, next) => {
    req.send(req.body.a-req.body.b+"")
}


module.exports = {
    add,
    subtract
}
