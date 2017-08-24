$(document).ready(function() {

  //get route linked to the backend - that gives us the bootcamps json
  $.get('/api/bootcamp', function(data) {
    //data is the bootcamps json
    console.log(data);
    //looping through each object
    for (var i = 0; i < data.length; i++) {
      //Dynamically creating html by concatenating data from the json
      var bootcamp_html =
        '<div class="row bootcamp">' +
        '<a href="' + data[i].url + '" target="_blank">' +
        '<div class="col-md-4 bootcamp_image">' +
        '<img class="logos" src="' + data[i].logo + '" alt="">' +
        '</div>' +
        '<div class="col-md-8">' +
        '<h3>Name: ' + data[i].name + '</h3>' +
        '<h4>Outcomes: ' + data[i].outcomes + '%</h4>' +
        '<h4>Location: ' + data[i].location + '</h4>' +
        '<h4>Rating: ' + data[i].rating + '/5</h4>' +
        '<h4>Technology: ' + data[i].technology + '</h4>' +
        '<h4>Duration: ' + data[i].duration + ' months</h4>' +
        '<h4>Costs: $' + data[i].costs + '</h4>' +
        '<h4>Comments: ' + data[i].comments + '</h4>' +
        '</div>' +
        '</a>' +
        '</div>';
//appending Dynamically created HTML in the #bootcamp_list id that lives in our
//bootcamp.html file
      $("#bootcamp_list").append(bootcamp_html);
    }
  })


});
