'use strict'
{

  $(function () {

    $('.an').hide();



    $.fn.clickToggle = function (a, b) {
      return this.each(function () {
        var clicked = false;
        $(this).on('click', function () {
          clicked = !clicked;
          if (clicked) {
            return a.apply(this, arguments);
          }
          return b.apply(this, arguments);
        });
      });
    };


    $('.q').clickToggle(function () {
      // １回目のクリック
      $(this).next().show('slow');
      $(this).css('text-decoration', 'underline');

    }, function () {
      // ２回目のクリック
      $(this).next().hide('slow');
      $(this).css('text-decoration', 'none');

    });


    $('a[href^="#home"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    });

    $('a[href^="#top"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    });

    $('#topJamp').hide();

    $(window).on("scroll", function () {

      if ($(this).scrollTop()  > 100) {
        // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
        $('#topJamp').fadeIn("slow");
        // ↑ (100より小さい時は)ページトップボタンをスライドダウン
      } else {
        $('#topJamp').fadeOut("slow");
        // ↑ それ以外の場合の場合はスライドアップする。
      }

    });

  });
} 














