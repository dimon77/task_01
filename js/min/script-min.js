$(window).scroll(function(){$(this).scrollTop()>30?$("nav").addClass("nav__white"):$("nav").removeClass("nav__white")}),$(".btnright").click(function(a){a.preventDefault(),$(".about").addClass("about--act")});