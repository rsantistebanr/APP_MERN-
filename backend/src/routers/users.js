const {Router} = require('express');
const { route } = require('./notes');
const router = Router();

router.route('/')
    .get((req,res)=>res.send('Hello, I am users'))


module.exports = router;