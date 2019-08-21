const {User} = require('../db/models')

module.exports = (function() {
  return async function(req, res, next) {
    const currUser = await User.findOne({
      where: {email: req.email}
    })
    if (currUser) {
      return next()
    }

    if (req.user) {
      const user = await User.findByPk(req.user.id)
      if (user.admin) {
        return next()
      }
    }
    var err = new Error(`No Access, not admin`)
    err.status = 401
    next(err)
  }
})()
