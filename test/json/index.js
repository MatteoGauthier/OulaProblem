var data = [{
  code: "400",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "401",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "403",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "404",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "500",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "501",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "502",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "503",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "520",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}, {
  code: "521",
  desc: "Désolé du dérangement, mais en général c’est vous qui êtes égarés 😬"
}]; 


function findTheFineErrorMessage(code) {
  return data.filter(
    function(data) {
      return data.code == code
    }
  );
}

var found = findTheFineErrorMessage('502');

document.getElementById('output').innerHTML = found[0].desc;
