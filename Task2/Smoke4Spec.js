var frisby = require('frisby');

frisby.globalSetup({
	request: {
		headers: {
				Authorization: 'Basic bGltYmVydC5hcmFuZGlhQGdtYWlsLmNvbTpDb250cm9sMTIz'
			},
			json: true
	}
});
var newProject = {
	"Content": "Project with 1 item",
	"Icon": 4
};

var newProyect = {"Content":"project2"};

frisby.create ('create project todo.ly')
  .post ('https://todo.ly/api/projects.json',newProyect)
    .inspectJSON()
    .expectStatus(200)
    .afterJSON(function(data){
			var projectId = data.Id;

			frisby.create('Create item todo.ly')
				.post('https://todo.ly/api/items.json', {
					"Content": "New Item",
					"ProjectId": projectId
				})
				.expectStatus(200)
			.toss();
        })			
    .toss();	
