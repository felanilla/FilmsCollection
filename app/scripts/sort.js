var SORT = {
  openDropdown: () => {
    var sortEl = document.getElementById("sort");
    var sortDropdown = document.getElementsByClassName("sort__dropdown")[0];

    sortEl.addEventListener("click", function() {
      sortDropdown.classList.toggle("sort__dropdown--active");
    });
    sortDropdown.addEventListener("click", function() {
      sortDropdown.classList.remove("sort__dropdown--active");
    });
  },

  init: function() {
    SORT.openDropdown();
  }
};

module.exports = {
  init: SORT.init
};
