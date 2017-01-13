$(document).ready(function() {

	object2 = {Frontend: [{name: "CSS", url: "css.com", data: "markdown text"}, 
			  			  {name: "JavaScript", url: "javascript.com"},
			  			  {name: "FontAwsome", url: "fontawsome.com"}],

			   Linux: [{name: "Bash", url: "tldp.com"},
			   		   {name: "Basic servers", url: "server.com"}],

			   Backend: [{name: "DataBase", url: "db.com"}, 
			   			 {name: "Servers", url: "aws.com"}]
			   }

	Object.keys(object2).map(function(tech){
		$('#syllabus').append('<li data-toggle="collapse" data-target="#' + tech +'" class="collapsed">\
					<a href="#"><i class="fa fa-lg ">' +  tech +'</i></a>\
					<ul class="sub-menu collapse ' +  tech + '" id="' + tech + '"></ul>\
		')

		object2[tech].map(function(value) {
			$('.' + tech).append('<li class="subheading" data-url=' + value.url + '>' + value.name + '</li>');
		});

	});

    $('.subheading').on('click', function(){
        $('#lesson').html("marked data will go here.");
    })
});
