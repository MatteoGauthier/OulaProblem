var responseCode;
var data = [
  {
    code: "400",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "401",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "403",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "404",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "500",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "501",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "502",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "503",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "520",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
  },
  {
    code: "521",
    desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
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
