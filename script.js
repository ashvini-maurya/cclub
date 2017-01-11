$(document).ready(function() {
	object = {algo: [{name: 101, url: "algo1.com"}, {name: 102, url: "algo2.com"}], ds: [{name: 201, url: "ds1.com"}, {name: 202, url: "ds2.com"}], linux: [{name: 301, url: "linux3.com"}, {name: 302, url: "linux3.com"}]}

	Object.keys(object).map(function(level){
		$('#jack').append('<div class="row-xs-4">\
						<div class=\"panel panel-info">\
							<div class="panel-heading">' + level +'</div>\
								<div class="panel-body">\
									<div class="list-group list-group-horizontal ' + level +'">\
									</div>\
								</div>\
							</div>\
						</div>\
			')
		object[level].map(function(hash){	
			$('.'+ level).append('<div class="list-group-item"> ' + hash.name +'</div>');
		})
	})



	object2 = {Frontend: [{name: "CSS", url: "css.com"}, 
			  			  {name: "JavaScript", url: "javascript.com"},
			  			  {name: "FontAwsome", url: "fontawsome.com"}],

			   Linux: [{name: "Bash", url: "tldp.com"},
			   		   {name: "Basic servers", url: "server.com"}],

			   Backend: [{name: "DataBase", url: "db.com"}, 
			   			 {name: "Servers", url: "aws.com"}]
			   }



	//console.log(Object.keys(object2));
	

	Object.keys(object2).map(function(tech){
		//console.log(tech);
		$('#syllabus').append('<li data-toggle="collapse" data-target="#' + tech +'" class="collapsed">\
					<a href="#"><i class="fa fa-lg ">' +  tech +'</i></a>\
					<ul class="sub-menu collapse ' +  tech + '" id="' + tech + '"></ul>\
		')

		object2[tech].map(function(value) {
			//console.log(value.name);
			$('.' + tech).append('<li><a href=' + value.url + '>' + value.name + '</li>');
		});

	});


});
