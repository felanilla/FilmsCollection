var utilities = require("./utilities");

var UI = {
  toggleCheckbox: () => {
    $(".checkbox-container__checkbox").click(function() {
      $(this).toggleClass("checked");
    });
  },

  changeFilmTitle: () => {
    $(".films__film__title").each(function() {
      $(this).html(
        $(this)
          .html()
          .substr(0, $(this).html().length - 6) +
          "<span class='text-light'>" +
          $(this)
            .html()
            .substr(-6) +
          "</span>"
      );
    });
  },

  init: function() {
    UI.toggleCheckbox();
    UI.changeFilmTitle();
  }
};

module.exports = {
  init: UI.init
};
