var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage

components = {
	'my-component': {
		id : 1,
		dep: [2],
		component: `<template>
    <div>
    	<div class="hello">Hello {{who}}</div>
    	<othercomponent></othercomponent>
    </div>
</template>

<script>

module.exports = {
		// components: {othercomponent},
		// components: ['OtherComponent': httpVueLoader('OtherComponent.vue')},
    data: function() {
        return {
            who: 'world'
        }
    }
}
</script>

<style scoped>
.hello {
    background-color: green;
}
</style>`
	},
	'othercomponent': {
		id: 2,
		component: `<template>
    <div class="hello">GoodBye {{who}}</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'MF'
        }
    }
}
</script>

<style scoped>
.hello {
    background-color: blue;
}
</style>`
	}
}

hashComponents = {
	1: 'my-component',
	2: 'othercomponent'
}



app.get('/components/', function(req, res) {
  var response = {};
  response[req.query.name] = components[req.query.name]
  components[req.query.name].dep.forEach((dep) => {
  	response[hashComponents[dep]] = components[hashComponents[dep]]
  })
  res.send(response);
});

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
// app.use('/server', express.static('public'));
app.use(express.static(__dirname + '/server'));

// app.use(express.static('public', options))

app.listen(3000);
console.log('listening on port 3000');