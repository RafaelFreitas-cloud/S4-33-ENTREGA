let string=""

function snapCrackle (maxValue) {
    for (i=1; i<=maxValue; i++) {
        if(i == 1){
            string+="Snap,"
        }else if(i == maxValue){

        }    
            else if (i % 2 !== 0 && i % 5 == 0){
                string+=" SnapCrackle,"} else if (i % 5 == 0){
                    string+=" Crackle,"} else if (i % 2 !== 0){
                        string+=" Snap,"
                    }else{
                        string+= ` ${i},`
                    }
    }
    return string
}

console.log(snapCrackle(12))



// function snapCrackle(maxValue) {
//     let array = []
//     for (i = 1; i <= maxValue; i++) {
//         if (i % 2 !== 0 && i % 5 == 0) {
//             array.push ("SnapCrackle")
//         } else if (i % 5 == 0) {
//             array.push ("Crackle")
//         } else if (i % 2 !== 0) {
//             array.push ("Snap")
//         } else {
//             array.push (`${i}`)
//         }
//     }
//     return array.join(", ")

// }

snapCrackle(12)