var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

for (i=0;i<input.length;i++){//membuat looping untuk array 1-4(kebawah)
console.log('nomer ID : '+ input[i][0])//masukan informasi sesuai string
console.log('nama lengkap : '+ input[i][1])
console.log('TTL : '+ input[i][2])
console.log('Hobi : '+ input[i][3])
console.log('')
}