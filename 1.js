// Buatlah sebuah fungsi bernama `getMoneyChange` yang bertujuan untuk mendapatkan total kembalian dari suatu pembayaran.

// Fungsi akan menerima satu input berupa uang yang dibayarkan dan akan menampilkan pesan dengan format `<uang> <jumlah lembaran> lembar`.

// Rules
// Untuk stok uang kembalian sudah disediakan dalam bentuk `object literal`.
// Urutan nilai uang yang ditampilkan adalah dari yang terbesar ke yang terkecil.
// Apabila stock uang kembalian tidak mencukupi atau tidak tersedia maka tampilkan `Maaf uang kembalian tidak cukup` dan value dari variabel moneyStocks tidak berkurang.

// Notes
// Pastikan kode yang kamu buat dinamis sehingga program kamu dapat mengatasi stok uang dan jenis uang kembalian yang dapat diubah nilainya.

function getMoneyChange(money) {
//your code here

    let stokArr = Object.entries(moneyStocks)
    let total = 0
    for (let i = 0; i < stokArr.length; i++) {
        if (stokArr[i][0]) {
            total += Number(stokArr[i][0]) * stokArr[i][1]
        }
    }

    if (money > total) {
        console.log('Maaf uang kembalian tidak cukup')
        return
    }

    console.log(total);

    let objStok = {}
    while (money >= 500) {
        for (let i = stokArr.length - 1; i >= 0; i--) {
            // console.log(stokArr[i][0]);
            if (money >= stokArr[i][0] && stokArr[i][1] > 0) {
                if (objStok[stokArr[i][0]] === undefined) {
                    objStok[stokArr[i][0]] = 0
                }
                objStok[stokArr[i][0]]++
                money -= stokArr[i][0]
                stokArr[i][1]--
                break
            }   
        }
    }

    let temp = Object.entries(objStok)
    if (temp.length == 0) {
        console.log('Maaf uang kembalian tidak cukup')
        return
    }

    for(let i = temp.length - 1 ; i >= 0 ; i--){
        let arrIndex = temp[i]
        arrIndex[1] > 0 ? console.log(`${arrIndex[0]} ${arrIndex[1]} lembar`) : {}
        moneyStocks[arrIndex[0]] -= arrIndex[1] 
    }
}


const moneyStocks = {
100000: 1,
50000: 2,
20000: 4,
10000: 5,
5000: 5,
1000: 10,
500: 5
}

getMoneyChange(75000)
/*
50000 1 lembar
20000 1 lembar
5000 1 lembar
*/

getMoneyChange(190000)
/*
100000 1 lembar
50000 1 lembar
20000 2 lembar
*/

getMoneyChange(190000)
/*
Maaf uang kembalian tidak cukup
*/

getMoneyChange(100000)
/*
20000 1 lembar
10000 5 lembar
5000 4 lembar
1000 10 lembar
*/

getMoneyChange(400)
/*
Maaf uang kembalian tidak cukup
*/

console.log(moneyStocks)
/*
{ '500': 5,
'1000': 0,
'5000': 0,
'10000': 0,
'20000': 0,
'50000': 0,
'100000': 0 }
*/
