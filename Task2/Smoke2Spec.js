var frisby = require('frisby');

frisby.globalSetup({
	request: {
		headers: {
				 'Token': '6c6ccc8807524c1db83d18e86e32a5ce'
			},
			json: true
	}
});

frisby.create ('Create a user todo.ly')
  .post('https://todo.ly/api/user.json', {
       "Email":"test@mail.com",
	   "FullName":"User01",
	   "Password":"Control123"
	   })
    .inspectJSON()
    .expectStatus(200)

.toss();