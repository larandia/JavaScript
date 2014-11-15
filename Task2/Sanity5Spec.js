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
	"Content": "Project with item1",
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
					"Content": "Item5",
					"ProjectId": projectId
			})
			.expectStatus(200)
            .afterJSON(function(data){
			 var itemId = data.Id;
			 var itemName = data.Content;
			   frisby.create('Get item by Id todo.ly')
				.get('https://todo.ly/api/items/' + itemId +'.json')
				.expectStatus(200)
				.expectJSON({
				"Content": itemName
				})
				.expectJSONTypes({
			      "Content": String,
			      "Id": Number
				  })
              .toss();
			  })
		.toss();
        })			
    .toss();	