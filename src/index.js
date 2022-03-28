window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function toggleNavbar() {
  let mobileNav = $("#mobile-nav");
  let state = mobileNav.css("display");
  let icon = $("#fa-icon");

  if (state === "block") {
    icon.removeClass("fa-xmark").addClass("fa-bars");

    anime({
      targets: "#fa-icon",
      rotate: -180,
      easing: "spring(1, 80, 10, 0)",
    });

    anime({
      targets: "#mobile-nav",
      translateX: 250,
      opacity: 0,
      duration: 300,
      easing: "easeOutCubic",
      complete: () => {
        return mobileNav.css({ display: "none" });
      },
    });
  } else if (state === "none") {
    mobileNav.css({ display: "block" });

    icon.removeClass("fa-bars").addClass("fa-xmark");

    anime({
      targets: "#fa-icon",
      rotate: 180,
      easing: "spring(1, 80, 10, 0)",
    });

    anime({
      targets: "#mobile-nav",
      opacity: 100,
      translateX: 0,
      duration: 300,
      easing: "easeInCubic",
    });
  }
}

function staggerNavItems() {
  anime({
    targets: "#nav-list .nav-link",
    opacity: [0, 100],
    translateY: [-50, 0],
    easing: "easeOutQuint",
    delay: anime.stagger(250),
  });

  anime({
    targets: "#main-body .main-item",
    opacity: [0, 100],
    translateY: [50, 0],
    easing: "easeOutCirc",
    delay: anime.stagger(400),
  });
}

/**
 * On-load Logo animation
 */
window.onload = () => {
  /**
   * Make logo visible, this code was added to avoid
   * the logo appearing before the animation
   */
  $("#logo-container").css({ display: "block" });

  //Animate Stroke
  anime({
    targets: "#logo-container #line-logo path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    complete: () => {
      //fill strokes
      anime({
        targets: "#filled-logo",
        opacity: "100%",
        complete: () => {
          //Hide logo before opacity animation
          $("#filled-logo").css({ display: "none" });
          $("#line-logo").css({ display: "none" });

          staggerNavItems();

          //Fade container
          anime({
            targets: "#first-load",
            scale: 2,
            opacity: 0,
            duration: 500,
            complete: () => {
              //Remove container from the dom
              $("#first-load").css({ display: "none" });
            },
          });
        },
      });
    },
  });
};

window.onscroll = () => {

  //Change navbar background if scroll position is at the very top
  if(document.documentElement.scrollTop < 80){
    $("#navbar").removeClass('bg-background-100').addClass('bg-background-200');
  }
  else {
    $("#navbar").removeClass('bg-background-200').addClass('bg-background-100');
  }

  //Hide navbar when scrolling down
  if (this.oldScroll > this.scrollY) {
    $("#navbar").css({ transform: "translateY(0)" });
  } else {
    $("#navbar").css({ transform: "translateY(-100px)" });
  }

  this.oldScroll = this.scrollY;
};
