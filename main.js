var nextButton = $(".slider-wrapper .next");
var prevButton = $(".slider-wrapper .prev");


$(document).ready(function () {

    nextButton.click(function () {
        nextImage();
        nextPallino();
    });

    prevButton.click(function () {
        prevImage();
        prevPallino();
    });
});



function nextImage() {
    
    var imgActive = $("img.active");
        
    if (imgActive.hasClass("last")) {
        imgActive.removeClass("active");
        $("img.first").addClass("active");

    } else {
        imgActive.removeClass("active");
        imgActive.next("img").addClass("active");
    }
};


function prevImage() {
    
    var imgActive = $("img.active");
    
    if (imgActive.hasClass("first")) {
        imgActive.removeClass("active");
        $("img.last").addClass("active");

    } else {
        imgActive.removeClass("active");
        imgActive.prev("img").addClass("active");
    }
};

function nextPallino() {
    
    var pallinoActive = $("i.active");
        
    if (pallinoActive.hasClass("last")) {
        pallinoActive.removeClass("active");
        $("i.first").addClass("active");

    } else {
        pallinoActive.removeClass("active");
        pallinoActive.next("i").addClass("active");
    }
};

function prevPallino() {
    
    var pallinoActive = $("i.active");
    
    if (pallinoActive.hasClass("first")) {
        pallinoActive.removeClass("active");
        $("i.last").addClass("active");

    } else {
        pallinoActive.removeClass("active");
        pallinoActive.prev("i").addClass("active");
    }
};
