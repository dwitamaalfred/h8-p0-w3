function pasanganTerbesar(num) {
    var x = num.toString()//1. menjadikan num -> string
    var arrAngka = [];//5A. buat variabel untuk menampung array
    x = x.split('')//2. split stringnya
        for (i=0; i<x.length-1; i++){//3.buat looping untuk mengambil nilai index dari string
            var gabungan = x[i]+x[i+1];//4.membuat looping kombinasi antara index i + (i+1)
            arrAngka.push(gabungan);//5B.kembalikan ke dalam array untuk di sort
            arrAngka.sort(function(kecil,besar){//6.sort angka didalam array untuk menemukan yang paling besar
                return besar-kecil});
            }
        return arrAngka[0]//ambil array yang udah di sortir berdasarkan besar->kecil, ambil index[0] sebagai angka paling besar
    }
    
    
    console.log(pasanganTerbesar(641573)); // 73
    console.log(pasanganTerbesar(12783456)); // 83
    console.log(pasanganTerbesar(910233)); // 91
    console.log(pasanganTerbesar(71856421)); // 85
    console.log(pasanganTerbesar(79918293)); // 99