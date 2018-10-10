var hideTime = setInterval(hideDivs, 5000);

function hideDivs() {
    var random = Math.floor(Math.random() * $('.divgrid').length);
    var i = $('.divgrid').length;
    $('.divgrid').eq(random).css("opacity", "0").addClass("flickerout");
}


function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

var alertTime = setInterval(fixAlert, 15000);

function fixAlert() {
    var codeFix = prompt("Please complete the missing segment\n.divgrid {\n     display:       ;\n}");
    if (codeFix != "flex") {
        alert("Sorry, I can't do that");
        $('body').css("filter","grayscale(100)");
    }
    else {
        alert("Acceptable.");
        $('.divgrid').css("opacity", "1").removeClass("flickerout");
        $('body').css("filter","grayscale(0)");
    }
}