// スクロールするとheader文字の色変更 site-logo
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".js-c-fv").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-l-header__site-title").addClass("headerColorScroll");
    } else {
      $(".js-l-header__site-title").removeClass("headerColorScroll");
    }
  });
});

// ハンバーガーメニュー
$(function () {
  $('.js-burger-btn').click(function () {
    $(this).toggleClass('active')

    if ($(this).hasClass('active')) {
      $('.js-burger-menu').addClass('active')
    } else {
      $('.js-burger-menu').removeClass('active')
    }
  })
})
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$('#menu a[href]').on('click', function (event) {
  $('.js-burger-btn').trigger('click')
})
// ×ボタン押したらハンバーガーメニューが閉じるように
$('.js-burger-menu').on('click', function (event) {
  $('.js-burger-btn').trigger('click')
})

// ハンバーガーボタン押したらヘッダ－高さを変える
$(function () {
  $('.js-burger-btn').click(function () {
    $(this).toggleClass('height')

    if ($(this).hasClass('height')) {
      $('.js-l-header').addClass('height')
    } else {
      $('.js-l-header').removeClass('height')
    }
  })
})
// フッター版ハンバーガーメニュー---------------
// ハンバーガーメニュー
$(function () {
  $('.js-burger-btn--footer').click(function () {
    $(this).toggleClass('active')

    if ($(this).hasClass('active')) {
      $('.js-burger-menu').addClass('active')
    } else {
      $('.js-burger-menu').removeClass('active')
    }
  })
})
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$('#menu a[href]').on('click', function (event) {
  $('.js-burger-btn--footer').trigger('click')
})
// ×ボタン押したらハンバーガーメニューが閉じるように
$('.js-burger-menu').on('click', function (event) {
  $('.js-burger-btn--footer').trigger('click')
})


// ハンバーガーボタン押したらフッター高さを変える
$(function () {
  $('.js-burger-btn--footer').click(function () {
    $(this).toggleClass('height')

    if ($(this).hasClass('height')) {
      $('.js-l-footer__wrapper').addClass('height')
    } else {
      $('.js-l-footer__wrapper').removeClass('height')
    }
  })
})

