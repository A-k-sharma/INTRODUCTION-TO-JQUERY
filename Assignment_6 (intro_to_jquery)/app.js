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