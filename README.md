# Phase-1-Holidays-Challenge

NO. 1 > MONEY CHANGER

Buatlah sebuah fungsi bernama `getMoneyChange` yang bertujuan untuk mendapatkan total kembalian dari suatu pembayaran.

Fungsi akan menerima satu input berupa uang yang dibayarkan dan akan menampilkan pesan dengan format `<uang> <jumlah lembaran> lembar`.

Rules
Untuk stok uang kembalian sudah disediakan dalam bentuk `object literal`.
Urutan nilai uang yang ditampilkan adalah dari yang terbesar ke yang terkecil.
Apabila stock uang kembalian tidak mencukupi atau tidak tersedia maka tampilkan `Maaf uang kembalian tidak cukup` dan value dari variabel moneyStocks tidak berkurang.

Notes
Pastikan kode yang kamu buat dinamis sehingga program kamu dapat mengatasi stok uang dan jenis uang kembalian yang dapat diubah nilainya.

----------------------------------------------SALINLAH CODE DIBAWAH INI---------------------------------

function getMoneyChange(money) {
  //your code here
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


NO. 2 > Satuan Berat

Satuan berat adalah ukuran yang dipakai untuk mengukur berat, jenus satuan berat tsb adalah sbb :



keterangan :
1 ton = 10 kw = 1000 kg
1 kw = 100 kg
1 kg = 1000 g
1 kg = 10 ons    
1 ons  = 1 hg

Buatlah sebuah function bernama 'convertWeight' (NAMA FUNCTION HARUS SAMA) yang akan menerima 2 parameter. Parameter tsb adalah :
soal pertambahan satuan berat berupa string, contoh : '1 ton +10 ons+2 kwintal'
tujuan akhir konversi yang diinginkan, contoh : 'kg'

DILARANG hardcode ! misalnya : 
di-hardcode satu per satu konversinya, ton ke kwintal dikali 10, ton ke kg dikali 1000, ton ke gr dikali 10000, dll. pikirkan cara agar bisa dinamis tanpa di hardcode. 


----------------------------------------------SALINLAH CODE DIBAWAH INI---------------------------------

function convertWeight(summation, unitWeight) {
  //your code here
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg

NO. 3 > SHINE BRIGHT LIKE A DIAMOND

Buatlah sebuah function bernama `diamond` yang menerima satu parameter berupa number.
function `diamond` akan membuat sebuah belah ketupat dengan simbol `$` dimana tinggi dari belah ketupat ditentukan berdasarkan parameter number yang diterima.

NOTE: Perhatikan pola untuk menentukan tinggi belah ketupat!!

Contoh untuk input 3:
```javascript
  $
 $ $
$   $
 $ $
  $
```

Contoh untuk input 4:
```javascript
   $   
  $ $
 $   $  
$     $
 $   $
  $ $  
   $   
```

Contoh untuk input 6:
```javascript
     $     
    $ $    
   $   $   
  $     $  
 $       $
$         $
 $       $
  $     $  
   $   $   
    $ $    
     $     
```

contoh untuk input 10:
```javascript
         $       
        $ $      
       $   $     
      $     $    
     $       $   
    $         $  
   $           $
  $             $
 $               $
$                 $
 $               $
  $             $
   $           $
    $         $  
     $       $   
      $     $    
       $   $     
        $ $      
         $        
```



