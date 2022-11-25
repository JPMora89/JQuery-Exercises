// handles the add movie button on click
$("#button-add").on("click", function (event) {

    event.preventDefault();

// creates the movie and stars part of the movie details div that is created when button is clicked
        let movieDetails = `"${$("#movie-title").val()}"`
        movieDetails = movieDetails + `  ${buildStarString($("#movie-rating").val())}`
// creates the new div which corresponds to a newly added movie by the user
// appends the newly created div along with a delete button
        let $movieDiv = $("<div>").html(movieDetails).addClass("movie-details");
        $("<button>").text("Delete").addClass("deleteButton").appendTo($movieDiv);
        $(".movies").append($movieDiv);

        // clear all inputs so user can input other movies
        $('input').val('');

    });
// Creates the stars that correspond to the rating given 0-10(allows to be more, but asks for 0-10)
function buildStarString(rating) {
    let starRating = ("&#x2B50;").repeat(Math.round(rating));
    return starRating;
};
// adjusts css properties using JQuery, in this case changes font-size.
$(".movies").css('font-size', '20px')


// handles the delete button click
$(".movies").on("click", ".deleteButton", function () {

    $(this).parent().remove();

});