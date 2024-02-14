const router = require('express').Router();

router.get('/', (req, res) => {
    res.json("Posts");
});

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     res.json(`Post ${id}`);
// });

router.post('/', (req, res) => {
    res.json(`Post Detail`);
});


router.route('/:id')
    .get((req, res) => { res.json(`Post ${req.params.id}`);})

    .patch((req, res) => { res.json(`Post ${req.params.id} has been updated`); })
    
    .delete((req, res) => { res.json(`Post ${req.params.id} has been deleted`); });



// router.patch('/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.json(`Post ${id} has been updated`);
// });

// router.delete('/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.json(`Post ${id} has been deleted`);
// });

module.exports = router;