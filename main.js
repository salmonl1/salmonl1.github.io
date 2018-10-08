/*var myVar = setInterval(hideDivs, 5000);

function hideDivs() {
    var random = Math.floor(Math.random() * $('.divgrid').length);
    var i = $('.divgrid').length;
    $('.divgrid').eq(random).css("opacity", "0").addClass("flickerout");
}
*/
$('.divgrid').on('mouseover', function () {     
    playWind();                                  //start wind sound
})
.on('mouseout', function () {                    
    stopWind();                                  //stops the wind sound
});

function playWind () {                           //start wind audio
    $('#beep-one')[0].volume = 0.7;
    $('#beep-one')[0].load();
    $('#beep-one')[0].play();
  }
  function stopWind () {                           //stop the wind audio
    $('#beep-one')[0].pause();
    $('#beep-one')[0].currentTime = 0;           //resets wind to zero/beginning
  }