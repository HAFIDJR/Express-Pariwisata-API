var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
// import mongose
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/wisataBlitar');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://hafidnurfirmansyah10:f7Z9CpyrxNsXUXUZ@cluster0.punhd9c.mongodb.net/pariwisata");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
connectDB()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter  =require('./routes/admin');
var pageRouter = require('./routes/page')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/sb-admin-2',express.static(path.join(__dirname, '/node_modules/startbootstrap-sb-admin-2')));
app.use('/admin/sb-admin-2',express.static(path.join(__dirname, '/node_modules/startbootstrap-sb-admin-2')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// admin
app.use('/admin',adminRouter)
// admin end

//page
app.use('/page',pageRouter)
//page end

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ErorrMessage :err.message})
});

module.exports = app;
