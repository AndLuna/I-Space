$('.index-carrossel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
  
    arrows:false,
    // dots: true,
    // dotsClass: 'slick-dots slick-thumb'
    });


// Adiciona os dots ao carrossel
// Obtém a quantidade de imagens do carrossel
var numSlides = $('.index-carrossel .slick-slide').length;

// Cria os dots dinamicamente
for (var i = 0; i < 3; i++) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    $('.dots').append(dot);
  }
// Adiciona a ação de clique nos dots
$('.dot').on('click', function() {
    var index = $(this).index();
    $('.index-carrossel').slick('slickGoTo', index);
  });
  
  $('.index-carrossel').on('afterChange', function(event, slick, currentSlide) {
    // Remove a classe "active" de todos os dots
    $('.dot').removeClass('active');
  
    // Adiciona a classe "active" apenas ao dot correspondente à imagem atual
    $('.dot').eq(currentSlide).addClass('active');
  });
  