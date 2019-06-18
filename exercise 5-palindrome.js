function palindrome(kata) {
  var tampung =''
  for(i=kata.length-1; i>=0; i--){//1.buat fungsi looping terbalik
  tampung = tampung + kata[i]//2. susun indeks terbalik
  }
  return tampung === kata//3. apabila index terbalik === index kata -> true
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
