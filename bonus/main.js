//variabili utilizzate

var nextButton = $(".slider-wrapper .next");
var prevButton = $(".slider-wrapper .prev");


//prima carico document/poi faccio partire js
$(document).ready(function () {

//se premo il tasto che corrisponde al numero 37 (sinistra)=>prevImage , 39=destra =>nextImage

    $(document).keydown(function (e) {
        if (e.which == 37) {
            prevImage();
            prevPallino();
        } else if (e.which == 39) {
            nextImage();
            nextPallino();
        }
    });

//BONUS:se clicco su un pallino specifico lo slider ritorna sull'immagine corrispondente

    $("#i_1").click(function () {
        pallinoCliccato("#img_1" , "#i_1");
    });
    $("#i_2").click(function () {
        pallinoCliccato("#img_2" , "#i_2");
    });
    $("#i_3").click(function () {
        pallinoCliccato("#img_3" , "#i_3");
    });
    $("#i_4").click(function () {
        pallinoCliccato("#img_4" , "#i_4");
    });

//se premo i bottone a destra o a sinistra dello slider =>Modifica del display di pallini e immagini tramite funzioni
    

    nextButton.click(function () {
        nextImage();
        nextPallino();
    });

    prevButton.click(function () {
        prevImage();
        prevPallino();
    });
});

//funzione che cambia il diplay delle img successive

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

//funzione che cambia il diplay delle img precedenti

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

//funzione che cambia il diplay dei pallini successivi

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

//funzione che cambia il diplay dei pallini precedenti

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

//BONUS:funzione che a id di immagine e pallino cambia il display degli elementi in modo che corrispondano.

function pallinoCliccato (iDimg,idPallino) {
    $("img.active").removeClass("active");
    $(iDimg).addClass("active");
    $("i.active").removeClass("active");
    $(idPallino).addClass("active");
};


