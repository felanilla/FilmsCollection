var CHECKBOX = {
  toggleCheckbox: () => {
    //using Vanilla
    var checkbox = document.getElementsByClassName(
      "checkbox-container__checkbox"
    );

    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener("click", function() {
        this.classList.toggle("checked");
      });
    }

    //using jQuery
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

    document.getElementById("sort").addEventListener("click", function() {
      CHECKBOX.toggleCheckbox();
    });
  }
};

module.exports = {
  init: CHECKBOX.init
};
