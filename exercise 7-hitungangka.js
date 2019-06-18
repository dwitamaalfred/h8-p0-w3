function hitungJumlahKata(kalimat) {
    var x = kalimat.split(' ')//1.split stringnya
    x = x.length//2.temukan jumlah kalimatnya
    return x//3. return angkanya
  }

  console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5