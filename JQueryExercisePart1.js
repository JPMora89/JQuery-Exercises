
// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// 3. Remove the last paragraph in the article.
// 4. Set the font size of the title to be a random pixel size from 0 to 100.
// 5. Add an item to the list; it can say whatever you want.
// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// 8. Add an event listener so that when you click on the image, it is removed from the DOM.

1. $(function(){
    console.log("Let's get ready to party with JQuery!")
});

2. $('article img').addClass('image-center');

3. $('article p:last-child').remove();

4. $(".title").css('font-size', (Math.random() * 100));

5. $('ol').append("<li>Hey here's that text, cool!</li>");

6. $('#col-sm-4').empty().append($("<p>Woah paragraph appeared!</p>"));

7. $(".form-control").on('click', function(){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $('body').css('background-color', "rgb(" + red + "," + green + "," + blue + ")")
})

8. $('img').on('click', function(){
    $(this).remove()
});