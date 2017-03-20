$('#app').html(`
	<div class="loader">Loading...</div>
`);

setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?t=arrow+"
}).done(function(res){
	console.log(res);
	let html = `
		<style> body{
		color: red;
	}</style>
	<center>
		<h1>${res.Title}</h1>
		<h4>Year: ${res.Year}</h4>
		<h3>Plot: ${res.Plot}</h3>
		<div id="container">
    	<div id="left">
		<img src="${res.Poster}"/>
		<h3>Released: ${res.Released}</h3>
		<h3>Runtime: ${res.Runtime}</h3>
		<h3>Genre: ${res.Genre}</h3>
		<h3>Director: ${res.Director}</h3>
		<h3>Writer: ${res.Writer}</h3>
		<h3>Actors: ${res.Actors}</h3>
		
		<h3>Language: ${res.Language}</h3>
		<h3>Country: ${res.Country}</h3>
		</div>
		<div id="right">
		<h3>Awards: ${res.Awards}</h3>
		<h3>Type: ${res.Type}</h3>
		
		<h3>Metascore: ${res.Metascore}</h3>
		<h3>imdbRating: ${res.imdbRating}</h3>
		<h3>imdbVotes: ${res.imdbVotes}</h3> 
		<h3>imdbID: ${res.imdbID}</h3>
		<h3>Response: ${res.Response}</h3>
	</center>
	</div>
	`;
	$('#app').html(html);

});
}
