 $("button").click(function(){
     $("p").text("DOUBLE CLICK THESE WORDS!");
 });
$("p").dblclick(function(){
    $(".secret").show();
    $(".clue").text("SLIDE OVER SECRET DOOR");
 });
$(".secret").hover(function(){
        $(".clue").text("CLICK TREASURE CHEST"); 
 });
 $(".treasure").click(function(){
     $(".almost").text("NOW CLICK HEADER TO SEE THE TREASURE");
    $("body").css("background-color","violet");
});
$(".garden").click(function(){
   $("body").css("background-image","url(https://i.imgur.com/0e7gkJN.jpg)"); 
    $(".hunt").hide();
    $(".surprise").text("YOU DID IT!");
});


 