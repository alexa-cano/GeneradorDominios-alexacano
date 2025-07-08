import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'developer', 'nation'];
  let extensions = ['.com', '.net', '.us', '.io', '.es'];

  function domainHack(word, tld) {
    if (word.endsWith(tld)) {
      let base = word.slice(0, word.length - tld.length);
      return base + '.' + tld;
    }
    return null;
  }

  // Seleccionamos el contenedor donde se mostrarán los dominios
  const domainList = document.getElementById('domain-list');

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let base = p + a + n;
        for (let ext of extensions) {
          // Dominio normal
          let normalDomain = base + ext;
          let normalItem = document.createElement('p');
          normalItem.textContent = normalDomain;
          domainList.appendChild(normalItem);

          // Domain hack
          let hacked = domainHack(base, ext.slice(1));
          if (hacked) {
            let hackItem = document.createElement('p');
            hackItem.textContent = hacked;
            domainList.appendChild(hackItem);
          }
        }
      }
    }
  }

};
