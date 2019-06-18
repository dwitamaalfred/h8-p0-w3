function groupAnimals(animals) {

    var hasil = []
    var indeks = 0
    
    animals.sort()
    
      for(i=0; i<animals.length; i++){
          if (hasil.length === 0){
            hasil.push([animals[i]]) // membuat array hasil yang berisi array dari (animals[i])
          }
          else if(hasil[indeks][0][0] === animals[i][0]){
            hasil[indeks].push(animals[i]) // jika array [index][0][0] sama dengan animals [i][0] (misalkan 'a'yam dan 'a'noa) maka dimasukan kedalam array hasil indeks
          }
          else{
            hasil.push([animals[i]])
            indeks++ // untuk yang tidak sama atau tidak ada pasangan, di push langsung tanpa perlu di gabungkan kedalam array baru (krena sendiri)
            //value indeks ditambahkan untuk fungis mengecek keseluruhan
          }
      }
    return hasil
    }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]