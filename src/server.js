

const { db } = require('./db/dbconnect');
// Connect
// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySql Connected...');
// });


const cookieParser = require('cookie-parser');
const express = require("express"),
    path = require('path'),
    hbs = require('hbs'),
    mainRouter = require('./routers/main'),
    customer = require('./routers/customer'),
    program = require('./routers/program'),
    company = require('./routers/company'),
    service = require('./routers/service'),
    port = process.env.PORT || 5000;
const app = express();
app.listen(port)


app.use(express.json())
app.use(cookieParser())
// app.use(bodyParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../assets')))


app.use(mainRouter)
app.use('/company', company)
app.use('/customer', customer)
app.use('/program', program)
app.use('/service', service)



//project paths
const assets = path.join(__dirname, '../assets')
const views = path.join(__dirname, './templates/views')
const partials = path.join(__dirname, './templates/partials')

//template engine settings
app.set('view engine', 'hbs')
app.set('views', views)
hbs.registerPartials(partials)
hbs.registerHelper('json', function (context) {
    return JSON.stringify(context);
});




app.get("/*", (req, res) => {
    res.render('404')
});

