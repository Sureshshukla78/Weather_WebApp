const express  = require('express');
const path = require('path')
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;


// public static path
const staticPath = path.join(__dirname, '../public')
//paths 
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath)

// routing
app.get('/', (req, res)=>{
    // res.send("hello from myweather app home")
    res.render('index')
});

app.get('/about', (req, res)=>{
    // res.send("hello from myweather app about us")
    res.render('about')
});

app.get('/weather', (req, res)=>{
    // res.send("hello from myweather app about us")
    res.render('weather')
});

app.get('*', (req, res)=>{
    res.render('404error', {
        errormsg: 'Opps! Page Not Found'
    })
});

app.listen(port, (req,  res)=>{
    console.log(`Listening to the port at ${8000}`)
});