$(document).ready(function () {

  $('form').each(function () {
    const form = $(this);
    const fileLabel = form.find('label[class*="file"]');
    const fileInput = fileLabel.find('input[type="file"]');
    const fileName = fileLabel.find('.name');
    const fileDelete = fileLabel.next('.delete');
    const phone = $(this).find('input[name*="phone"]');
    const privacyLabel = $(this).find('label[class*="privacy"]');
    const privacyInput = privacyLabel.find('input');

    // Для чекбоксов и радио

    privacyLabel.on('click', function () {
      if (privacyInput.attr('type') == 'checkbox') {
        privacyInput.is(':checked')
          ? privacyLabel.addClass('active')
          : privacyLabel.removeClass('active');
      } else if (privacyInput.attr('type') == 'radio') {
        privacyInput.is(':checked')
          ? (privacyLabel.siblings().removeClass('active'), privacyLabel.addClass('active'))
          : privacyLabel.removeClass('active');
      }
    });

    // Для телефонов

    phone.each(function () {
      $(this).inputmask("+7 (999) 999-99-99");
    });

    // Для файла

    function onFileDelete() {
      fileInput.val('');
      fileName.text(fileLabel.data('name'));
      fileDelete.css('display', 'none');
    }

    function onFileChange() {
      const fileVal = $(this).val().replace(/.+[\\\/]/, '');
      if (fileVal !== '') {
        fileName.text(fileVal);
        fileDelete.css('display', 'block');
      } else onFileDelete
    }

    fileName.text(fileLabel.data('name'));
    fileDelete.css('display', 'none');

    fileInput.on('change', onFileChange);
    fileDelete.on('click', onFileDelete);

    // По отправке формы

    form.on('submit', function () {
      privacyLabel.removeClass('active');
    });
  });

  $(window).scroll(function () {
    $(this).scrollTop() > 600
      ? $('#top').addClass('active')
      : $('#top').removeClass('active');
  });

  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });

  $('.quality__item-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    image: {
      verticalFit: true
    }
  });

  $('.portfolio__item-image-part').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true
      }
    });
  });

  $('.quality-items').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
    dots: false,
    items: 2,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      880: {
        items: 2,
      }
    }
  });

  $('.portfolio__item-image-part').owlCarousel({
    loop: false,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"],
    dots: true,
    items: 1
  });

  $(document).on('click', '.goto', function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  $(".tabs").each(function () {
    let tabs = $(this);
    let tabsControls = tabs.find('.tabs__control');
    let tabsContents = tabs.find('.tabs__content');
    $(tabsContents).not(tabsContents[0]).css('display', 'none');
    $(tabsControls[0]).addClass('active');
    $(tabsControls).click(function (event) {
      event.preventDefault();
      tabsControls.removeClass('active');
      $(this).addClass('active');
      let index = $(this).index();
      tabsContents.css('display', 'none');
      tabsContents.eq(index).fadeIn(400);
    });
  });

  $('.accordion').each(function () {
    const $this = $(this);
    const head = $this.find('*[class*="head"]');
    const body = $this.find('*[class*="body"]');

    head.on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next(body).slideUp(200);
      } else {
        head.removeClass('active');
        body.slideUp(200);
        $(this).addClass('active');
        $(this).next(body).slideDown(200);
      }
    });
  });

  // wow = new WOW(
  //   {
  //     boxClass: 'wow',
  //     animateClass: 'animated',
  //     offset: 0,
  //     mobile: true,
  //     live: true
  //   }
  // );
  // wow.init();

});
