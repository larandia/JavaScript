

var frisby = require('frisby');
			
     frisby.globalSetup({
      request: { 
        headers: { Authorization: 'Basic bGltYmVydC5hcmFuZGlhQGdtYWlsLmNvbTpDb250cm9sMTIz'}
      },
	  json:true
    });


frisby.create ('Get all items todo.ly')
  .get('https://todo.ly/api/items.json')
    .inspectJSON()
    .expectStatus(200)

.toss();