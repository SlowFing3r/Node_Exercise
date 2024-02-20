const e = require('express');
const DB = require('../dbs/post');
const helper = require('../utilities/helper');

const all = async (req, res, next) => {
    let posts = await DB.find().populate('user', '-password -__v');
    helper.fMsg(res, "All Posts", posts);
}

const get = async (req, res, next) => {
    let post = await DB.findById(req.params.id).populate('user');
    if (post) {
        helper.fMsg(res, "Selected Post", post);
    } else {
        next(new Error("Post Not Found!"));
    }
}

const post = async (req, res, next) => {
    let result = await new DB(req.body).save();
    helper.fMsg(res, "Post Added!", result);
}

const patch = async (req, res, next) => {
    res.json(req.body);
}

const drop = async (req, res, next) => {
    res.json(`Post has been deleted`);
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}