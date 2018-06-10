var CHECKBOX = {
  toggleCheckbox: () => {
    $(".checkbox-container__checkbox").click(function() {
      $(this).toggleClass("checked");
    });

    $(".watch-checkbox").click(function() {
      $(this).toggleClass("watched");
      $(this)
        .children(".watch-checkbox__add")
        .toggleClass("hide");
      $(this)
        .children(".watch-checkbox__checked")
        .toggleClass("show");
    });
  },

  init: function() {
    CHECKBOX.toggleCheckbox();

    $("#sort").click(function() {
      CHECKBOX.toggleCheckbox();
    });
  }
};

module.exports = {
  init: CHECKBOX.init
};
