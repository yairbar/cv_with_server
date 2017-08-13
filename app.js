var express = require('express'); //Load the web server module

var app = express(); //Create a new instance of the server

var port = 5000; //This is the port server - we'll use it later

app.use(express.static('public')); //Serve all the files under /public directly. This will return all the files under /public when you go to /.


app.get('/', function(req, res) { //Create a new route - this will be ignored because of the previous line!
    res.send('Hello World');
});

app.get('/yair', function(req, res) { //Create a new route '/arik' and execute this code when someone goes to /arik
    res.json({ //res.json simply returns whatever json is passed to it. We return a simple object with basic info and social networks
    	basicInfo: {
    		firstName:'yair', lastName: 'baroch', title:'Fullstack developer'
    	},
    	socialNetworks: [
	        {
	            name: 'Facebook',
	            link: '#',
	            'iconName': 'facebook'
	        },
	        {
	            name: 'twitter',
	            link: '#',
	            'iconName': 'twitter'
	        },
	        {
	            name: 'instegram',
	            link: '#',
	            'iconName': 'instegram'
	        },
	        {
	            name: 'skypee',
	            link: '#',
	            'iconName': 'skypee'
	        }
	     
		],
        experice:[
            {
                title:'senior',
               years:'2015-2017'
        
                
            },
                {
                title:'senior',
               years:'2015-2017'
        
                
            },
            
            {
                title:'senior',
               years:'2015-2017'
        
                
            },
            
            {
                title:'senior',
               years:'2015-2017'
        
                
            },
        
            {
                title:'senior',
               years:'2015-2017'
        
                
            },],
        proSkills:[
            {
             name:'photoShop',
            progress:'80%'
            },
            
            {
             name:'javaScript',
             progress:'80%'
            },
            
            {
             name:'html/css',
            progress:'80%'
            },],
        preSkills:[
             {
             name:'photoShop',
           progress:'80%'
            },
            
            {
             name:'javaScript',
             progress:'80%'
            },
            
            {
             name:'html/css',
             progress:'80%'
            },
        ],
        hobbies:[
            {
                name:'Photography',
                icon:'camera'
            },
             {
                name:'football',
                icon:'football'
            },
              {
                name:'music',
                icon:'music'
            },
            
            {
                name:'cycling',
                icon:'bicycle'
            },
        
            {
                name:'reading',
                icon:'book'
            },
             {
                name:'video game',
                icon:'video'
            },],
        language:[
            
            {
                lange:'English',
                progress:'80%'
            },
               {
                lange:'spanish',
                progress:'80%'
            },
               {
                lange:'french',
                progress:'80%'
            },]
    });
});

app.listen(port, function(err){ //Start the server on port 5000
    console.log('running server on port ' + port); //This code is exectued when server it up and running. We just print a message
});
