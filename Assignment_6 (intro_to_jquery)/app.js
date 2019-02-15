var a=function()
{
	$(document).ready(function()
	{
		console.log("Hello World")
	});
}

var b=function()
{
	$(document).ready(function()
	{
		$('test').addClass('load');
	});
}

var c=function()
{
	$(document).ready(function()
	{
		$('p[id$="-new"]').css("color","DodgerBlue")
	});
}

var d=function()
{
	$(document).ready(function()
	{
		$("#btn").prop('disabled',true);
	});
}

var e=function()
{
	$(document).ready(function()
	{
		$("#main>.target").css("font-size","45px")
	});
}

var f=function()
{
	$(document).ready(function()
	{
		$("div.container").replaceWith("<p>HI</p>")
	});
}

$(document).ready(function()
{
	$("#btn-1").click(function()
	{
		$("#test1").append("<b>sbjssggs dfsodh</b>");
	})
});

$(document).ready(function()
{
	$("#btn-2").on("click",function()
	{
		alert("You clicked button");
	})
});

$( "a" ).click(function( event ) {
  event.preventDefault();
});



$(document).ready(function () 
{
	$(".btn-3").click(function()
	{
	    bid=$(this).attr("id");
	    bid="#row"+bid;
	    $(bid).remove();	    
	});
});

$("#btn-5").click(function()
{
	$('#table1 td').each(function() 
	   {
	   	 var td = $(this).text(); 
	   	 if(td>10)
	   	 {
	   	 	$(this).css("background-color", "slateBlue");
	   	 }
	   });    
});


$(document).ready(function(){
  $("#btn-4").click(function(){
    alert("Height of div: " + $("div").height());
  });
});


$(document).ready(function()
{
	$("#btn-6").click(function()
	{
		$.ajax(
		{
	        url: "https://api.myjson.com/bins/1gnq6u",
	        type: 'GET',
	        dataType: 'json',
	        success: function(res) 
	        {
	            console.log(res);
	        }
	    });
	})
});


$(function(){
$('select').on('change',function()
{
$("#main-2").append(this.value); 
});
});	


$(function(){
$('ul#open').hide();
$(".dropdown").hover(function() {
$('ul#open').show();
},
function() {
$('ul#open').hide();
});
});	



$(function(){
$("#parent").click(function(e){
$("#parent").append("from click function parent");
});
$("#child").click(function(e){
$("#child").append("from click function child");
e.stopPropagation();
});
});	




$(document).ready(function () {

var imageArray = ["https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"]

$("#slider"). click(function () {
var image = $("#slide-img");
image.animate({ opacity: 0 }, 500, function () {
var random = imageArray[Math.floor(Math.random() * imageArray.length)];
image.attr("src", random);
image.css('opacity', 1);
$("#slider").html(image);
})
})
});