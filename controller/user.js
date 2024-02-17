const DB = require('../dbs/user');
const helper = require('../utilities/helper');

const all = async (req, res, next) => {
    // res.json(`All Users`);
    let users = await DB.find();
    helper.fMsg(res, "All Users", users);
}

const get = async (req, res, next) => {
    // res.json(`Single User`);
    let id = req.params.id;
    let userData = await DB.findById(id);
    helper.fMsg(res, "Selected User", userData);
}

const post = async (req, res, next) => {
    // res.json(req.body);
    let userData = new DB(req.body);
    let results = await userData.save();
    helper.fMsg(res, "User Added!", results);
}

const patch = async (req, res, next) => {
    // res.json(req.body);
    let user = await DB.findById(req.params.id);
    if (user) {
        await DB.findByIdAndUpdate(user._id, req.body);
        let returnUser = await DB.findById(user._id);
        helper.fMsg(res, "User Updated!", returnUser);
    } else {
        next(new Error("User Not Found!"));
    }
}

const drop = async (req, res, next) => {
    // res.json(`User has been deleted`);
    await DB.findByIdAndDelete(req.params.id);
    helper.fMsg(res, "User Deleted!");
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}