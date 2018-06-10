var utilities = require("./utilities");

var DATA = {
  loadData: () => {
    var filmTemplate = Handlebars.compile($("#films-template").html());

    function updateTemplate() {
      $("#films").html(filmTemplate(films));
    }

    var data = {
      films: [
        { id: 17, posterId: 7039523, title: "Blues Brothers (1980)" },
        { id: 702, posterId: 6900923, title: "Seven (1995)" },
        { id: 4531, posterId: 6934127, title: "Cherry model 2000 (1987)" },
        { id: 133186, posterId: 6954503, title: "Carlito's Angels (2003)" },
        {
          id: 156803,
          posterId: 7078754,
          title: "Dziś nikt nie wraca do domu (1996)"
        },
        { id: 299113, posterId: 7277535, title: "Avatar (2009)" },
        { id: 299244, posterId: 7421911, title: "Yatarô gasa (1960)" },
        {
          id: 583446,
          posterId: 7841201,
          title: 'Tajna historia "Archipelagu GUŁag" (2008)'
        },
        { id: 594358, posterId: 7792940, title: "Pantera Negra (2018)" },
        { id: 612477, posterId: 7402365, title: "Flamenco, flamenco (2010)" },
        {
          id: 661321,
          posterId: 7528419,
          title: "Simple 2000 Series Vol. 120 (2007)"
        },
        {
          id: 693758,
          posterId: 7817576,
          title: "Avengers: Infinity War (2018)"
        },
        {
          id: 749238,
          posterId: 7718035,
          title: "Sylvester & Tweety: Breakfast on the Run (1998)"
        },
        { id: 803161, posterId: 7830596, title: "Cargo (2017)" },
        { id: 804821, posterId: 7838017, title: "Book Club (2018)" },
        { id: 474646, posterId: 7187428, title: "After Shave (2005)" },
        { id: 652224, posterId: 7451127, title: "Steel Panthers III (1997)" },
        { id: 199948, posterId: 7361288, title: "Chronique d'un été (1961)" }
      ],
      posters: [
        { id: 7039523, url: "http://1.fwcdn.pl/po/00/17/17/7581123.6.jpg" },
        { id: 6900923, url: "http://1.fwcdn.pl/po/07/02/702/6967799.6.jpg" },
        { id: 6934127, url: "http://1.fwcdn.pl/po/45/31/4531/7190053.6.jpg" },
        { id: 6954503, url: "http://1.fwcdn.pl/po/31/86/133186/6954503.6.jpg" },
        { id: 7078754, url: "http://1.fwcdn.pl/po/68/03/156803/7078754.6.jpg" },
        { id: 7277535, url: "http://1.fwcdn.pl/po/91/13/299113/7332755.6.jpg" },
        { id: 7421911, url: "http://1.fwcdn.pl/po/92/44/299244/7421911.6.jpg" },
        { id: 7841201, url: "http://1.fwcdn.pl/po/34/46/583446/7841201.6.jpg" },
        { id: 7792940, url: "http://1.fwcdn.pl/po/43/58/594358/7816401.6.jpg" },
        { id: 7402365, url: "http://1.fwcdn.pl/po/24/77/612477/7444792.6.jpg" },
        { id: 7528419, url: "http://1.fwcdn.pl/po/13/21/661321/7528419.6.jpg" },
        { id: 7817576, url: "http://1.fwcdn.pl/po/37/58/693758/7839647.6.jpg" },
        { id: 7718035, url: "http://1.fwcdn.pl/po/92/38/749238/7718035.6.jpg" },
        { id: 7830596, url: "http://1.fwcdn.pl/po/31/61/803161/7830596.6.jpg" },
        { id: 7838017, url: "http://1.fwcdn.pl/po/48/21/804821/7841071.6.jpg" },
        { id: 7187428, url: "http://1.fwcdn.pl/po/46/46/474646/7187428.6.jpg" },
        { id: 7451127, url: "http://1.fwcdn.pl/po/22/24/652224/7451127.6.jpg" },
        { id: 7361288, url: "http://1.fwcdn.pl/po/99/48/199948/7361288.6.jpg" }
      ]
    };

    var films = data.films.map(function(filmInfo) {
      return $.extend({}, filmInfo, {
        poster: data.posters.find(function(p) {
          return p.id === filmInfo.posterId;
        })
      });
    });

    films.sort(function(a, b) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });

    updateTemplate();

    document.getElementById("sort-title").addEventListener("click", function() {
      films.sort(function(a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
      updateTemplate();
      DATA.changeFilmTitle();
    });

    // document.getElementById("sort-year").addEventListener("click", function() {
    //   films.sort(function(a, b) {
    //     a.title - b.title;
    //   });
    //   $("#films").html(filmTemplate(films));
    //   DATA.changeFilmTitle();
    // });

    document.getElementById("sort-id").addEventListener("click", function() {
      films.sort(function(a, b) {
        return a.id - b.id;
      });
      updateTemplate();
      DATA.changeFilmTitle();
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
    DATA.loadData();
    DATA.changeFilmTitle();
  }
};

module.exports = {
  init: DATA.init
};
