var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title:'article one|mukesh',
    heading:'article one',
    date:'aug 2 2017',
    content: `
    <h1>SRM University - where you have the freedom to take wings.</h1>
<p>
SRM University is one of the top ranking universities in India with over 38000 students and more than 2600 faculty across all the campus, offering a wide range of undergraduate, postgraduate and doctoral programs in Engineering Management Medicine and Health sciences,and Science and Humanities 
</p>`
};
function createhtmltemplate(data){
    var title=data.title;
var htmltemplate=`<html>
<head>
<title>  
${title}
</title>
	<meta name="viewport" content="width=device-width,initial-scale=1"/>
	<link href="/ui/style.css" rel="stylesheet"/>
</head>
<body>
<div class="container">
	<div>
		<a href="/">Home</a>
	</div>
	<hr/>
	<h3> ${heading}</h3>
	<div>${data}</div>
	<div>
		${content}
	</div>
</div>
</body>
</html>
`;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
