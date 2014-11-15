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
	"Content": "Project 02",
	"Icon": 4
};

frisby.create ('create project todo.ly')
  .post ('https://todo.ly/api/projects.json',newProject)
    .inspectJSON()
    .expectStatus(200)
    .afterJSON(function(data){
			var projectId = data.Id;
            var projectName = data.Content;
			frisby.create('Get project by id todo.ly')
				.get('https://todo.ly/api/projects/' + projectId + '.json')
				.expectStatus(200)
				.expectJSON({
				"Content": projectName
				})
				.expectJSONTypes({
			      "Content": String,
			      "Icon": Number
				  })

			.toss();
        })			
    .toss();	