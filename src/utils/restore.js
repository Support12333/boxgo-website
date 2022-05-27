export default (selector) => {
  let winTop = $(window).height();
  let winScrolled = $(window).scrollTop();
  let selectorTop = $(selector).offset().top;
  if (winScrolled + winTop > selectorTop + 30) {
    $(selector).css("animation", "bottomShow 1.5s forwards")
  }
}
