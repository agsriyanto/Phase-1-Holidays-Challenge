// keterangan :
// 1 ton = 10 kw = 1000 kg
// 1 kw = 100 kg
// 1 kg = 1000 g
// 1 kg = 10 ons    
// 1 ons  = 1 hg

// Buatlah sebuah function bernama 'convertWeight' (NAMA FUNCTION HARUS SAMA) yang akan menerima 2 parameter. Parameter tsb adalah :
// soal pertambahan satuan berat berupa string, contoh : '1 ton +10 ons+2 kwintal'
// tujuan akhir konversi yang diinginkan, contoh : 'kg'

// DILARANG hardcode ! misalnya : 
// di-hardcode satu per satu konversinya, ton ke kwintal dikali 10, ton ke kg dikali 1000, ton ke gr dikali 10000, dll. pikirkan cara agar bisa dinamis tanpa di hardcode. 

function convertWeight(summation, unitWeight) {
//your code here

    let satuanBerat = ['ton', 'kwintal', '', 'kg', 'ons', 'dag', 'g', 'dg', 'cg', 'mg']
    let unitWeightIndex = satuanBerat.indexOf(unitWeight)
    let total = 0
    let temp = []
    let tampung = {
        total : '',
        satuan : ''
    }

    for (let i = 0; i <= summation.length; i++) {
        if (summation[i] === '+' || i === summation.length) {
            temp.push({...tampung, total: Number(tampung.total), indexSatuan: satuanBerat.indexOf(tampung.satuan)})
            tampung.total = ''
            tampung.satuan = ''
        } else {
            if (Number(summation[i]) || summation[i] === '0') {
                // console.log(summation[i]);
                tampung.total += summation[i]
            } else if (summation[i] !== ' ') {
                tampung.satuan += summation[i]
            } 
        }
    }
    
    for (let i = 0; i < temp.length; i++) {
        let tempNilai = '1'
        for (let j = 0; j < Math.abs(unitWeightIndex - temp[i].indexSatuan); j++) {
            tempNilai += '0'
        }
        if (unitWeightIndex < temp[i].indexSatuan) {
            total += temp[i].total / Number(tempNilai)
        } else {
            total += temp[i].total * Number(tempNilai)
        }
        // console.log(total);
    }
    return `${total} ${unitWeight}`
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg
