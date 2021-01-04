function diamond(num) {
    let temp = ''
    let tinggi = num * 2

    for (let i = num; i > 0; i--) {
        let output = ''
        for (let j = 1; j < tinggi; j++) {
            if (j === num + temp || j === i) {
                output += '$'
            } else {
                output += ' '
            }
        }
        temp++
        console.log(output)
    }
    
    for (let i = 1; i < num; i++) {
        let output = ''
        for (let j = 0; j < tinggi; j++) {
            if (j === num + temp - 3 || j === i) {
                output += '$'
            } else {
                output += ' '
            }
        }
        temp--
        console.log(output)
    }
}

diamond(3)

diamond(4)

diamond(6)

diamond(10)