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
	"Content": "Project3",
	"Icon": 4
};

frisby.create ('create project todo.ly')
  .post ('https://todo.ly/api/projects.json',newProject)
    .inspectJSON()
    .expectStatus(200)
    .afterJSON(function(data){
			var projectId = data.Id;
			var projectIcon = data.Icon;
			var projectName = data.Content;
			frisby.create('update project todo.ly')
				.delete('https://todo.ly/api/projects/'+ projectId+ '.json')
			.expectStatus(200)
			.expectJSON({
			    "Content": projectName,
				"Icon": projectIcon
				})
			.expectJSONTypes({
			      "Content": String,
			      "Icon": Number
				  })
		.toss();
        })			
    .toss();	