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

window.onload = () => {
  anime({
    targets: "#logo-container #line-logo path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    complete: () => {
      anime({
        targets: "#filled-logo",
        opacity: "100%",
        complete: () => {
          $("#filled-logo").css({ display: "none" });
          $("#line-logo").css({ display: "none" });

          anime({
            targets: "#first-load",
            opacity: 0,
            complete: () => {
              return $("#first-load").css({ display: "none" });
            },
          });
        },
      });
    },
  });
};
