$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $("nav").addClass("nav__white");
  } else {
    $("nav").removeClass("nav__white");
  };
});
