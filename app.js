const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//importing admin file
const adminRoutes = require('./routes/admin');

//importing shop file
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));


//importing admin and shop file
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//adding error page
app.use((req,res,next) =>{
  res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3000);