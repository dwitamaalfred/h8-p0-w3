function mengelompokkanAngka(arr) {
    var genap = []
    var ganjil = []
    var kelipatan = []
    var kelompok = []
    
      for(i=0; i<arr.length; i++){ //1. buat looping untuk mendefinisikan 'i'
        
        if(arr[i]%3 === 0){ 
        kelipatan.push(arr[i])//2. jika arr[i] habis dibagi 3, masukan kedalam array kelipatan,
        }                     //5. karena susunannya jadi salah pada angka 6 (merupakan keliatan 2 dan kelipatan 3)
                              //    mengurutkan 
        else if(arr[i]%2 === 0){ //3. jika arr[i] habis dibagi 2 (kelipatan2), masukan kedalam array kelipatan
        genap.push(arr[i])
        }
  
        else{
          ganjil.push(arr[i]) //4. sisanya masukan kedalam array ganjil
        }
      }
        
        kelompok.push(genap)
        kelompok.push(ganjil)
        kelompok.push(kelipatan)
        return kelompok
  }
    
    
    // TEST CASES
    console.log(mengelompokkanAngka([2, 4, 6])); 
    // [ [2, 4], [], [6] ]
    console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
    // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
    console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); 
    // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
    console.log(mengelompokkanAngka([])); 
    // [ [], [], [] ]