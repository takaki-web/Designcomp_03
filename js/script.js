// ハンバーガーメニュー
$(function () {
  $('.js-l-header__burger-btn').click(function () {
    $(this).toggleClass('active')

    if ($(this).hasClass('active')) {
      $('.js-l-header__burger-menu').addClass('active')
      $('.js-l-header').addClass('height')
    } else {
      $('.js-l-header__burger-menu').removeClass('active')
      $('.js-l-header').removeClass('height')
    }
  })
})
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$('.l-header__burger-menu-link').on('click', function (event) {
  $('.js-l-header__burger-btn').trigger('click')
})

// ハンバーガーメニューfooter-ver
$(function () {
  $('.js-l-footer__burger-btn').click(function () {
    $(this).toggleClass('active')

    if ($(this).hasClass('active')) {
      $('.js-l-footer__burger-menu').addClass('active')
      $('.js-l-footer__wrapper').addClass('height')
    } else {
      $('.js-l-footer__burger-menu').removeClass('active')
      $('.js-l-footer__wrapper').removeClass('height')
    }
  })
})
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるようにfooter-ver
$('.l-footer__burger-menu-link').on('click', function (event) {
  $('.js-l-footer__burger-btn').trigger('click')
})
