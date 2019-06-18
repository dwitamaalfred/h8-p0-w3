function balikString(kata){
    var kalimat = '';
    for(var i=kata[0].length-1; i>=0; i--){//1. menggunakan metode fungsi looping 
      kalimat = kalimat + kata[0][i]//2.mengganti yang tadinya menggunakan string jadi array
    }
    return kalimat;
  }
  console.log (balikString(['Hello World']))