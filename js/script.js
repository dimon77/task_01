$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $("nav").addClass("nav__white");
  } else {
    $("nav").removeClass("nav__white");
  };
});


$(".btnright").click(function(e) {
    e.preventDefault();
    $(".about").addClass("about--act");
});

$(".select1text2").click(function(e) {
    e.preventDefault();
    // $(".options").toggleClass("options--act");
    $(".options").slideToggle( "slow" );
});

// var copyTextBtn = document.querySelector('.js-copybtn');
// copyTextBtn.addEventListener('click', function(event) {
//   // Выборка ссылки с электронной почтой
//   var copyText = document.querySelector('.js-copytext');
//   var range = document.createRange();
//   range.selectNode(copyText);
//   window.getSelection().addRange(range);
//
//   try {
//     // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'successful' : 'unsuccessful';
//     console.log('Copy email command was ' + msg);
//   } catch(err) {
//     console.log('Oops, unable to copy');
//   }
//
//   // Снятие выделения - ВНИМАНИЕ: вы должны использовать
//   // removeRange(range) когда это возможно
//   window.getSelection().removeAllRanges();
// });

// $(".js-copybtn").click(function(e) {
//     e.preventDefault();
//     var txtCit = $(".js-copytext").html();
//     console.log(txtCit);
//     document.execCommand("copy");
// });
