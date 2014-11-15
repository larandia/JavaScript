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
	"Content": "Project5",
	"Icon": 4
};

frisby.create ('create project todo.ly')
  .post ('https://todo.ly/api/projects.json',newProject)
    .inspectJSON()
    .expectStatus(200)
    .afterJSON(function(data){
			var projectId = data.Id;

			frisby.create('Create item todo.ly')
				.post('https://todo.ly/api/items.json', {
					"Content": "Item4",
					"ProjectId": projectId,
					"Checked":"true"
				})
				.expectStatus(200)
			.toss();
			frisby.create('Create item todo.ly')
				.post('https://todo.ly/api/items.json', {
					"Content": "Item5",
					"ProjectId": projectId
					"Checked":"true"
				})
				.expectStatus(200)
			.toss();
			frisby.create('Create item todo.ly')
				.get('https://todo.ly/api/projects/' + projectId+ '/doneitems.xml')
				.expectStatus(200)
				.expectJSON({
				"Checked": "true"
				})
			.toss();
})		
    .toss();	