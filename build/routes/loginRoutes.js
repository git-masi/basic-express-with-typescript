"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.render('login/login.ejs', { pageTitle: 'Login' });
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email === 'fake@fake.com' && password === 'testing') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.status(400).send('error');
    }
});
