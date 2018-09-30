
/*
* SLICK SLIDER1
*/
function rsdTestmonialslider() {
        $('#custom-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

$(document).ready(function() {
    rsdTestmonialslider();
});