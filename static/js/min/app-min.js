!function($,i,e)
{$(i).ready(function()
	{$(".mobile-navigation").append($(".main-navigation .menu").clone()),
	$(".menu-toggle").click(function(){$(".mobile-navigation").slideToggle()}),
	$(".search-form button").click(function(){$(this).toggleClass("active");
		var i=$(this).parent(".search-form");
		i.find("input").toggleClass("active").focus()}),
	$(".slider").flexslider({controlNav:!1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>'}),
	$(".map").length&&$(".map").gmap3({map:{options:{maxZoom:14}},marker:{address:"40 Sibley St, Detroit"}},"autofit")}),
    $(e).load(function(){})}
    (jQuery,document,window);