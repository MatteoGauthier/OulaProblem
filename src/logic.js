var responseCode;
var data = [
  {
    code: "400",
    desc: "Attention c'est pas la bonne URL"
  },
  {
    code: "401",
    desc: "Désolé tu n'es pas authorisé 🤭"
  },
  {
    code: "403",
    desc: "Interdit, pas le droit de passer déso 🤪"
  },
  {
    code: "404",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "500",
    desc: "La par contre c'est vraiment nous 😱"
  },
  {
    code: "501",
    desc: "On connait pas ça, non pas du tout 😐"
  },
  {
    code: "502",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "503",
    desc: "On peut pas vous ramenez le café pour l'instant mais ça ne saurait tarder"
  },
  {
    code: "520",
    desc: "Je donne ma langue au chat"
  },
  {
    code: "521",
    desc: "Oula c'est vraiment cassé"
  },
  {
    code: "200",
    desc: "c bon tranquille"
  }
];

function findTheFineErrorMessage(code) {
  return data.filter(function(data) {
    return data.code == code;
  });
}

fetch(window.location.href)
  .then(response => {
    if (!response.ok) {
      oldTownRoad(response.status);
      throw response;
    }

    return response.status; //we only get here if there is no error
  })
  .then(code => {
    oldTownRoad(code);
  });

function oldTownRoad(errorResponse) {
  var found = findTheFineErrorMessage(errorResponse)
  // document.getElementById("couscous").innerHTML = found[0].desc;
  window.onload = function() {
    console.log(window);
    var template = document.getElementById("template").innerHTML;

    var compiled_template = Handlebars.compile(template);
    console.log(found);
    var rendered = compiled_template({
      error_code: found[0].code,
      error_desc: found[0].desc
    });
    document.title = 'Error ' + found[0].code + ' - Semoule.fr' 
    document.getElementById("target").innerHTML = rendered;
  };
}
