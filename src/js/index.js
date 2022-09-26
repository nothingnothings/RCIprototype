//bootstrap defaults editing
import '../assets/scss/main.scss';

//project styles
import '../assets/scss/index.scss';
import '../assets/scss/common.scss';
import '../assets/scss/form.scss';
import '../assets/scss/footer.scss';
import '../assets/scss/quem-somos.scss';

//background images
import '../assets/images/background-images/Retangulo98.png';
import '../assets/images/background-images/Retangulo99.png';
import '../assets/images/background-images/Retangulo100.png';
import '../assets/images/background-images/Retangulo101.png';

//image objects
import '../assets/images/page-objects/Grupo117.png';
import '../assets/images/page-objects/Grupo113.png';
import '../assets/images/page-objects/Grupo109.png';
import '../assets/images/page-objects/Grupo14.png';
import '../assets/images/page-objects/RCI_POSTS_DE_ATIVAÇÃO_DA_MARCA_04.png';
import '../assets/images/page-objects/RCI_POSTS_DE_ATIVAÇÃO_DA_MARCA_07.png';
import '../assets/images/page-objects/RCI_POSTS_DE_ATIVAÇÃO_DA_MARCA_08.png';
import '../assets/images/page-objects/Retangulo9.png';
import '../assets/images/page-objects/Retangulo10.png';
import '../assets/images/page-objects/Retangulo11.png';
import '../assets/images/page-objects/Grupo28.png';
import '../assets/images/page-objects/Imagem3.png';
import '../assets/images/page-objects/Imagem4.png';
import '../assets/images/page-objects/Imagem6.png';

//logos
import '../assets/images/logos/RCI_ASSETS_Logos_CLOUDERA.png';
import '../assets/images/logos/RCI_ASSETS_Logos_DELL.png';
import '../assets/images/logos/RCI_ASSETS_Logos_IBM.png';
import '../assets/images/logos/RCI_ASSETS_Logos_INGRAM.png';
import '../assets/images/logos/RCI_ASSETS_Logos_OUTSYSTEMS.png';
import '../assets/images/logos/RCI_ASSETS_Logos_SQREAM.png';
import '../assets/images/logos/RCI_ASSETS_Logos_TABLEAU.png';
import '../assets/images/logos/RCI_ASSETS_Logos_Varicent.png';

//fonts
import '../assets/fonts/ProductSansMedium.ttf';
import '../assets/fonts/SprintSansMedium.otf';

import favIcon16 from '../assets/images/favicon-16x16.png';
import favIcon32 from '../assets/images/favicon-32x32.png';
import favIcon from '../assets/images/favicon.ico';
import favIconApple from '../assets/images/apple-touch-icon.png';
import android192 from '../assets/images/android-chrome-192x192.png';
import android512 from '../assets/images/android-chrome-512x512.png';
import webManifest from '../assets/images/site.webmanifest';
import mstTile from '../assets/images/mstile-150x150.png';
import safariPinned from '../assets/images/safari-pinned-tab.svg';
import browserConfig from '../assets/images/browserconfig.xml';

$('#carousel-multi').carousel({
  interval: false,
});

// $('.carousel.carousel-multi .item').each(function (index, object) {

//     console.log('TEST', index, object);
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next
//     .children(':first-child')
//     .clone()
//     .attr('aria-hidden', 'true')
//     .appendTo($(this));

//   if (next.next().length > 0) {
//     next
//       .next()
//       .children(':first-child')
//       .clone()
//       .attr('aria-hidden', 'true')
//       .appendTo($(this));
//   } else {
//     $(this)
//       .siblings(':first')
//       .children(':first-child')
//       .clone()
//       .appendTo($(this));
//   }
// });

$(document).ready(function () {
  // var itemsMainDiv = ('.carousel-container'); ///experimental
  //   var itemsMainDiv = ('.multi-carousel');
  //   var itemsDiv = ('.multi-carousel-inner');
  var itemsMainDiv = '.multi-carousel';
  var itemsDiv = '.multi-carousel-inner';
  var itemWidth = '';

  //   $('#btn-left-carousel, #btn-right-carousel').click(function () {
  $('.leftLst, .rightLst').click(function () {
    // var condition = $(this).is('#btn-left-carousel');
    var condition = $(this).hasClass('leftLst');
    if (condition) click(0, this);
    else click(1, this);
  });

  ResCarouselSize();

  $(window).resize(function () {
    ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
    var incno = 0;
    var dataItems = 'data-items';
    var itemClass = '.item';
    var id = 1;
    var btnParentSb = '';
    var itemsSplit = '';
    var sampwidth = $(itemsMainDiv).width();
    var bodyWidth = $('body').width();
    $(itemsDiv).each(function () {
      id = id + 1;
      var itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(',');
      //   $(this).parent().attr("id", "multi-carousel" + id);
      $(this)
        .parent()
        .attr('id', 'multi-carousel' + id);

      if (bodyWidth >= 1200) {
        incno = itemsSplit[3];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 992) {
        incno = itemsSplit[2];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 768) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else {
        incno = itemsSplit[0];
        itemWidth = sampwidth / incno;
      }
      $(this).css({
        transform: 'translateX(0px)',
        width: itemWidth * itemNumbers,
      });
      $(this)
        .find(itemClass)
        .each(function () {
          $(this).outerWidth(itemWidth);
        });

      $('.leftLst').addClass('over');
      $('.rightLst').removeClass('over');
      // $("#btn-left-carousel").addClass("over");
      // $("#btn-right-carousel").removeClass("over");
    });
  }

  //this function used to move the items

  function ResCarousel(e, el, s) {
    var leftBtn = '.leftLst';
    var rightBtn = '.rightLst';
    // var leftBtn = ('#btn-left-carousel');
    // var rightBtn = ('#btn-right-carousel');
    var translateXval = '';
    var divStyle = $(el + ' ' + itemsDiv).css('transform');
    console.log(divStyle, 'DIVSTYLE');
    var values = divStyle.match(/-?[\d\.]+/g);
    var xds = Math.abs(values[4]);
    if (e == 0) {
      translateXval = parseInt(xds) - parseInt(itemWidth * s);
      $(el + ' ' + rightBtn).removeClass('over');

      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(el + ' ' + leftBtn).addClass('over');
      }
    } else if (e == 1) {
      var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * s);
      $(el + ' ' + leftBtn).removeClass('over');

      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(el + ' ' + rightBtn).addClass('over');
      }
    }
    $(el + ' ' + itemsDiv).css(
      'transform',
      'translateX(' + -translateXval + 'px)'
    );
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
    console.log(ell, ee, 'LINE', $(ee).parent());
    var Parent = '#' + $(ee).parent().attr('id');
    console.log(Parent, 'Parent');
    var slide = $(Parent).attr('data-slide');
    console.log(ell, Parent, slide);
    ResCarousel(ell, Parent, slide);
  }
});
