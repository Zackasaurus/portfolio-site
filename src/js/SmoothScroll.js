import $ from 'jquery';

// Smooth Scroll
export default function SmoothScroll() {
  $(document).ready(() => {
    let scrollLink = $('.scroll');

    // Smooth Scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      });
    });
    // Active Link Switching
    $(window).scroll(function() {
      let scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {
        let sectionOffset = $(this.hash).offset().top - 100;

        if (sectionOffset <= scrollbarLocation) {
          $(this).addClass('active');
          $(this)
            .siblings()
            .removeClass('active');
        }
      });
    });
  });
}
