$(document).ready(function() {

    url = 'http://localhost:3000/'

    init = ''
    $.getJSON(url + 'init', function(data){ 
    	Object.keys(data).map(function(tech){
            $('#syllabus').append('<li data-toggle="collapse" data-target="#' + tech +'" class="collapsed">\
                        <a href="#"><i class="fa fa-lg ">' +  tech +'</i></a>\
                        <ul class="sub-menu collapse ' +  tech + '" id="' + tech + '"></ul>\
            ')

            data[tech].map(function(value) {
                $('.' + tech).append('<li class="subheading" data-url=' + value.url + '>' + value.name + '</li>');
            });

	    });
        $('.subheading').on('click', function(){
            end_point = $(this).data('url');
            $.getJSON(url + end_point, function(data){
                $('#lesson').html(marked(data['lesson']));
            })
        })
    });
});

