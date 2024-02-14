const router = require('express').Router();

router.get('/', (req, res) => {
    res.json("Users");
});

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     res.json(`User ${id}`);
// });

router.post('/', (req, res) => {
    res.json(req.body);
});


router.route('/:id')
    .get((req, res) => { res.json(`User ${req.params.id}`); })

    .patch((req, res) => { res.json(`User ${req.params.id} has been updated`); })

    .delete((req, res) => { res.json(`User ${req.params.id} has been deleted`); });




// router.patch('/:id', (req, res, next) => {
//     let id = req.params.id;
//     // let name = req.body.name;
//     // let age = req.body.age;
//     res.json(`User ${id} has been updated`);
// });

// router.delete('/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.json(`User ${id} has been deleted`);
// });

module.exports = router;