var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

input.splice(1,2,'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');//1.menghapus lampung,dst // dan menambahkan provinsi bandar lampung
input.splice(4,1, 'Pria', 'SMA Internasional Metro');//2.mengapus membaca dan menambahkan array

console.log(input)

console.log ('-----------------------------------')

var ttl = input[3].split('/')//3.melakukan split pada tanggal
console.log(ttl[1])

console.log ('-----------------------------------')

switch (ttl[1]){//4.mengganti angka menjadi nama bulan menggunakan switch-case
  case '01':
  console.log('Januari');break;
  case '02':
  console.log('Februari');break;
  case '03':
  console.log('Maret');break;
  case '04':
  console.log('April');break;
  case '05':
  console.log('Mei');break;
  case '06':
  console.log('Juni');break;
  case '07':
  console.log('juli');break;
  case '08':
  console.log('Agustus');break;
  case '09':
  console.log('September');break;
  case '10':
  console.log('Oktober');break;
  case '11':
  console.log('November');break;
  case '12':
  console.log('Desember');break;
}
console.log ('-----------------------------------')

var sorting = ttl.sort(function(kecil,besar){ return besar-kecil});//5.sortir dari besar->kecil
console.log(sorting)

console.log ('-----------------------------------')


var ttl = ttl.join('-');//8. join dengan tujuan mengganti 'space' dengan '-'
console.log(ttl)

console.log ('-----------------------------------')

var irisan1 = input[1].slice(0,15)//membatasi input[1] (nama) hanya memiliki 15 huruf
console.log(irisan1)

