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
		$("#main>.target").css("color","DodgerBlue")
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




$(document).ready(function () 
{
	var imageArray = ["https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	"https://ak.picdn.net/assets/cms/14c40a5a7a7f50788cf9e346071ab49ad1201b12-17d705f0349ed08f5387b39c7644054a59affe52-LOHP_vector_module_shutterstock_307324316-min.jpg",
	"https://i.pinimg.com/originals/5a/e5/8f/5ae58f5036997cfd4636917403c3c951.jpg"]
	$("#slider").hover(function () 
	{
		var image = $("#slide-img");
		image.animate(500, function () 
		{
			var random = imageArray[Math.floor(Math.random() * imageArray.length)];
			image.attr("src", random);
			$("#slider").html(image);
		})
	})
});