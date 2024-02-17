const all = async (req, res) => {
    res.json("All Posts");
}

const get = async (req, res) => {
    res.json(`Single Post`);
}

const post = async (req, res) => {
    res.json(req.body);
}

const patch = async (req, res) => {
    res.json(req.body);
}

const drop = async (req, res) => {
    res.json(`Post has been deleted`);
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}