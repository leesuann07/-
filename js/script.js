/* Navigation */
$('.menu li').mouseenter(function(){
    $('.sub-menu, .sub-back').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $('.sub-menu, .sub-back').stop().slideUp()
})

/* Modal */

function openPop() {
    $("#pop").show("slow");
}

function closePop() {
    $("#pop").hide("fast");
}