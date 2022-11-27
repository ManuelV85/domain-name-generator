let pronoum = ["the", "our", "we", "they"];
let adj = ["great", "awesom", "big"];
let noum = ["nakama", "goingmerry", "slayer", "jocker"];
let com = [".com", ".cl", ".net", ".OP"];

let domainName = (arrPro, arrAdj, arrNoum, arrCom) => {
  for (i = 0; i < arrPro.length; i++) {
    for (m = 0; m < arrAdj.length; m++) {
      for (n = 0; n < arrNoum.length; n++) {
        for (x = 0; x < arrCom.length; x++) {
          let domainFinal = arrPro[i] + arrAdj[m] + arrNoum[n] + arrCom[x];
          console.log(domainFinal);
        }
      }
    }
  }
};
domainName(pronoum, adj, noum, com);