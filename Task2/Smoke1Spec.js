

var frisby = require('frisby');
			
     frisby.globalSetup({
      request: { 
        headers: { Authorization: 'Basic bGltYmVydC5hcmFuZGlhQGdtYWlsLmNvbTpDb250cm9sMTIz'}
      },
	  json:true
    });


frisby.create ('Get all projects todo.ly')
  .get('https://todo.ly/api/projects.json')
    .inspectJSON()
    .expectStatus(200)

.toss();