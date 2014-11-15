var frisby = require('frisby');

frisby.globalSetup({
	request: {
		headers: {
				  Authorization: 'Basic bGltYmVydC5hcmFuZGlhQGdtYWlsLmNvbTpDb250cm9sMTIz'
			},
			json: true
	}
});

var userData = {
       "Email":"test7@mail.com",
	   "FullName":"User07",
	   "Password":"Control123"
	   };
frisby.create ('Create a user todo.ly')
  .post('https://todo.ly/api/user.json', userData)
    .inspectJSON()
    .expectStatus(200)
	.expectJSON(userData)

.toss();