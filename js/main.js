// sticky navigation

let navbar = $(".navbar");

$(window).scroll(function () {
    /* 
    returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.
        console.log(window.innerHeight);
    This method returns the offset coordinates of the FIRST matched element. It returns an object with properties; the top positions in pixels.
        console.log($(".section-2").offset().top); 
    Get the current vertical position of the scroll bar for the first element in the set of matched elements
        .scrollTop()
    */
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass('sticky');
    } else {
        navbar.removeClass('sticky');
    }
});
// counter animation for number at section 2

let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text() // An object of CSS properties and values that the animation will move toward.
        }, {
            duration: 4000, // A string or number determining how long the animation will run.
            easing: "swing",
            step: function (value) { //A function to be called for each animated property of each animated element.
                $(this).text(Math.ceil(value)); // round the number passed as parameter to its nearest integer in Upward direction of rounding
            }
        });
    });
};

// run above function with this
let b = 0;
$(window).scroll(function () {
    let oTop = $(".number").offset().top - window.innerHeight;
    if (b == 0 && $(window).scrollTop() >= oTop) {
        b++;
        nCount(".rect > h1");
    }
})