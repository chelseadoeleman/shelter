var express = require ('express');
var bodyParser = require ('body-parser');
// var http = require ('http');
var mime = require('mime-types');
var fs = require('fs');
var path = require ('path');
var find = require ('array-find');
var mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.png': 'image/png'
  //'.jepg': 'image/jepg'
}
var data = [
  {
    id: '1',
    name: 'Finn',
    fur: 'Brown-gray',
    description: 'Bengal'
  },
  {
    id: '2',
    name: 'Mojo',
    fur: 'Red',
    description: 'Maincoon'
  }
]

var app = express();

//GET
  app.get('/', movies);
  app.get('/:id', movie);

//USE
  app.use(express.static('static'));
  app.use(notFound);
  // https://stackoverflow.com/questions/24582338/how-can-i-include-css-files-using-node-express-and-ejs
  app.use(express.static(__dirname + 'static'));

// SET
  app.set('view engine', 'ejs');
  app.set('views', 'view');

  app.listen(8000);

  function movies (request, response) {
    res.render('list_animals.ejs', {data: data})
    /*var doc = '<!doctype html>';
    var length = data.length
    var index = -1
    var movie

    doc += '<link rel="stylesheet" href="/style.css"/>'
    doc += '<title>My movie website</title>';
    doc += '<h1>Movies</h1>';

    while(++index < length) {
      movie = data[index];
      doc += '<h2><a href="/' + movie.id + '">' + movie.title + '</a></h2>'
      doc += '<p>' +  movie.plot + '</p>';*/
    }

    response.send(doc);
  }

  function movie(request, response, next) {
    res.render('detail.ejs', {data: movie})
    /*var id = request.params.id;
    var doc = '<!doctype html>';

    var movie = find(data, function (value){
      return value.id === id;*/
    })

    if (!movie) {
      next();
      return;
    }
    /*
    doc += '<title>' + movie.title + ' - My movie website</title>';
    doc += '<h1>' + movie.title + '<h1>';
    doc += '<p>' + movie.description + '</p>';*/

    response.send(doc);
  }

  function notFound (request, response) {
    response.status(404).render('404.ejs');
    /*var doc = '<!doctype html>'

    doc += '<link rel="stylesheet" href="/style.css"/>'
    doc += '<title>Not found - My movie website</title>';
    doc += '<h1>Not found</h1>';
    doc += "<p>Uh oh! We couldn't find this page!</p>";

    response.status(404).send(doc);/*
  }


/*var routes = {
  '/about': 'This is my website\n',
  '/': 'Hello World!\n'
}*/
/*var routes = {
  '.html': 'text/html'
}*/

// express().use(express.static('static')).listen(8000);




/*

function onrequest(request, response) {
  var route = request.url;

if (route === '/'){
    route = /index.html;
  }
  fs.readFile(path.join('/assets', route), onread);

  function onread(error, buffer) {
    response.setHeader('Content-type', 'text/html');
    if(error){
      response.statusCode = 404;
      response.end('Page not found\n');
    }
    else{
      response.statusCode = 200;
      //var ext = path.extname(route);
      response.end(buffer);
    }
  }
}
  /*res.setHeader('Content-type', 'text/html');
  res.setHeader('Content-type', 'image/png');
    if (req.url in routes) {
      res.statusCode = 200;
      res.end(routes[req.url])
    }
  else {
  res.statusCode = 404;
  res.end('Page not found...\n');
  }
}*/
