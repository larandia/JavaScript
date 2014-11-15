var frisby = require ('frisby');
frisby.globalSetup({
    request:{
	        headers:{
	          Authorization: 'Basic bGltYmVydC5hcmFuZGlhQGdtYWlsLmNvbTpDb250cm9sMTIz' 
			  },
			  json:true
			  }

});

var newProyect = {"Content":"project1"};
frisby.create ('create project todo.ly')
  .post ('https://todo.ly/api/projects.json',newProyect)
    .inspectJSON()
    .expectStatus(200)

.toss();