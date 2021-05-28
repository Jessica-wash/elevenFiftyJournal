const Express = require('express');
const validateJWT = require('../middleware/vslidate-jwt');
const router = Express.Router();
let va;idateJWT = require("../middleware/vslidate-jwt");

router.get("/practice", validateJWT, (req,res) => {
    res.send('Hey!! This is a practice route!')
});

router.get('/about', (req, res) => {
    res.send('This is the about route!')
});


module.exports = router;