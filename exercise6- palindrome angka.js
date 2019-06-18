function angkaPalindrome(num){
  if (num<10) {//1. untuk jumlah dibawah 10 (pasti palindrome)
    return num + 1//2.ditambahkan 1
  }
  else {
    for (var i=num; i<2000; i++){//3.anggap saja nilai i dibawah 1000, buat fungsi 1-1000
      var x = i.toString()//4.mengubah nilai tersebut menjadi string
      x = x.split('')//5.split string tersebut(a,b,c,d,e)
      x = x.reverse()//6.reverse (e,d,c,b,a)
      x = x.join('')//7.join sebagai kombinasi baru(edcba)
      x = Number(x)
      if (x == i){//8.apabila abcde === edcba (berarti palindrome)
        return x//9.return nilainya
      }
    }
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

