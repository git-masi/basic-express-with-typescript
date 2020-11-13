"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var chalk_1 = __importDefault(require("chalk"));
var loginRoutes_1 = require("./routes/loginRoutes");
var app = express_1.default();
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['superSecret'] }));
app.use(loginRoutes_1.router);
app.get('/', function (req, res) {
    var _a, _b;
    // console.log(req.session);
    res.render('home/home.ejs', {
        pageTitle: 'home',
        loggedIn: (_b = (_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) !== null && _b !== void 0 ? _b : false,
    });
});
app.use('/', function (req, res) {
    res.send('<h1>404 page not found</h1>');
});
var port = 3333;
app.listen(port, function () {
    console.log("server running on " + chalk_1.default.green("http://localhost:" + port));
});
