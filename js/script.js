// ハンバーガーメニューの機能作成
$(function () {
  $('.menu-trigger').click(function () { //メニューボタンタップ後の処理
    $(this).toggleClass('active'); //クリックした要素に「.active」要素を付与
    $('.gnavi').css('display', 'block');//「.gnavi」要素の非表示を表示する
    if ($(this).hasClass('active')) { //クリックした要素に「.active」があれば
      $('.gnavi').addClass('active');　 //「.active」要素を付与
    } else {                            //「.active」要素が無ければ
      $('.gnavi').removeClass('active'); //「.active」要素を外す
    }
  });
});

// スタッフ紹介のスライド表示切り替え
//(１)スライド1枚目が表示されている時、左矢印の「.prev」ボタンを非表示(２)最後のスライドが表示される時は、右矢印の「.next」ボタンを非表示
$(function () {
  function toggleChangeBtn() {
    var slideIndex = $(`.staff-box`).index($(`.active`));
    $(`.button`).show();
    if (slideIndex == 0) {
      $(`.prev`).hide();
    } else if (slideIndex == 3) {
      $(`.next`).hide();
    }
  }
  //(３)右矢印を押すと次のスライドが表示される(４)左矢印を押すと前のスライドが表示されるを設定
  toggleChangeBtn();

  $(`.next`).click(function () {
    var $displaySlide = $(`.active`);
    /*現在表示中のスライドを取得 */
    $displaySlide.removeClass(`active box-design`);
    /*そのスライドからアクティブクラスを除くので表示されない*/
    $displaySlide.next().addClass(`active box-design`);
    /*そのスライドからアクティブクラスを加えて表示*/
    toggleChangeBtn();/*nextボタンを隠すか判断*/
  });

  $(`.prev`).click(function () {
    var $displaySlide = $(`.active`);
    /*現在表示中のスライドを取得 */
    $displaySlide.removeClass(`active box-design`);
    /*そのスライドからアクティブクラスを除くので表示されない*/
    $displaySlide.prev().addClass(`active box-design`);
    /*そのスライドからアクティブクラスを加えて表示*/
    toggleChangeBtn();/*prevボタンを隠すか判断*/
  });
});


// モーダル部分
$(function () {
  $('.modalopen').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(modal);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.modalClose,.modal-main,.modal-bg').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});

// ====ラインナップのタブの切り替え設定====
$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.product-wrapper [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.filter('[data-category = "' + $filterTime + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });
});
