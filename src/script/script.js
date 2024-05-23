const capital = (str) => {
   let arr = str.split(' ')
   for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
   }
   console.log(arr.join(' '));
}

// capital('welcome azerbaijan')

// //Task 2
const palindrome = (str) => {
    let text = ""
    for(let i = str.length-1; i >= 0; i--){
        text += str[i]
    }
    if(str === text){
        console.log(true)
    }
    else{
        console.log(false)
    }
    return text
}
// console.log(palindrome("salam"))

const fun = (str, letter, abc) => {
    let text = ''

    for (let i of str) {
        if (i === letter && abc) {
            text += i.toUpperCase()
        } else if (i.toLowerCase() === letter && !abc) {
            text += i.toLowerCase()
        } else {
            text += i
        }
    }

    return(text)
}

console.log(fun('sEE the ecLIPse of moon', 'e', true));