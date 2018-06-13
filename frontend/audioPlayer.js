function audioPlayer(){
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#list of files li a")[0];
    $("#audioPlayer")[0].play();
    $("#list of files li a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#list of files li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#list of files li a").length)
            currentSong = 0;
        $("#list of files li").removeClass("current-song");
        $("#list of files li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#list of files li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}
