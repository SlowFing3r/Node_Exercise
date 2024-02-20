const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    user: {type: Schema.Types.ObjectId, required: true, ref: 'user'},
    title: {type: String, required: true},
    desc: {type: String, required: true},
    create: {type: Date, default: Date.now}
});

const post = mongoose.model('post', postSchema);

module.exports = post;