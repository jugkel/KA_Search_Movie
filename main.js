console.log('connected');
$('#search').click(fetchMovie)

function fetchMovie() {
  event.preventDefault();
  var movieName = $('#movie-name').val()
  $.ajax({
    method:"get",
    url: "http://www.omdbapi.com",
    data: { s: movieName, apikey: '2f6435d9' }
}).done(function(data) {
  var movies = data.Search
  $('#results').empty();
  movies.forEach(function(movie)
  {

    movies.forEach(function(movie) {
    var $h2 = $('<h2>').text(movie.Title)
    var $img = $('<img>').attr('src', movie.Poster)
    var $li = $('<li>').append($h2).append($img)
    $('#results').append($li)

})
})
})
}

//  .each(function(data){


  // console.log(data.Search);
  // $('#results').html('')
  // $('#results').append('<p>' + data.Title + '</p>')




//   $.ajax({
//     method: "get",
//     url: "http://www.omdbapi.com",
//     data: { t: movieName, apikey: '2f6435d9' }
//   }).done(function(data) {
//     $('#results').html('')
//     $('#results').empty()
//     $('#results').append('<p>' + data.Title + '</p>')
//     $('#results').append('<p>' + data.Year + '</p>')
//     $('#results').append('<p>' + data.Actors + '</p>')
//   })
// }
