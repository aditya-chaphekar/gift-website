$("#btn-click-me").click(function () {
  $(".wrapper").toggleClass("clicked");
  $(this).css("display", "none");
});
