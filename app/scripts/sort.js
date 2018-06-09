var SORT = {
  openDropdown: () => {
    var sortEl = document.getElementById("sort");
    var sortDropdown = document.getElementsByClassName("sort__dropdown")[0];
    var arrow = document.getElementsByClassName("sort__title__arrow")[0];

    //detect click inside and outside element
    document.addEventListener("click", function() {
      var hasParent = false;
      for (
        var node = event.target;
        node != document.body;
        node = node.parentNode
      ) {
        if (node.id == "sort") {
          hasParent = true;
          break;
        }
      }
      if (hasParent) {
        sortDropdown.classList.toggle("sort__dropdown--active");
        sortEl.classList.toggle("u-box-shadow");
        arrow.classList.toggle("rotate");
      } else {
        sortDropdown.classList.remove("sort__dropdown--active");
        sortEl.classList.remove("u-box-shadow");
        arrow.classList.remove("rotate");
      }
    });
  },

  init: function() {
    SORT.openDropdown();
  }
};

module.exports = {
  init: SORT.init
};
