$(".link").mouseover(function(event){
    $("#"+ event.target.id).addClass("enlarge");
    // $("#"+ event.target.id).addClass("underline");

    console.log(event);
});
$(".link").mouseout(function(event){
    $("#"+ event.target.id).removeClass("enlarge");
    // $("#"+ event.target.id).removeClass("underline");
})
