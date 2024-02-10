
// 문제 1

let sum = 0
for(i = 0; i <= 100; i++) {
    sum += i
    
}
console.log("1~100까지 더한 값은? " + sum)

// 문제 2

for(i = 1; i <= 100; i +=2){
    console.log(i)
}


//문제3
for(i =1; i <= 50; i++){
    let stringValue = i.toString()
    let result = ""
    for(j = 0; j < stringValue.length; j++){
        if(stringValue[j] === "3" || stringValue[j] === "6" ||
        stringValue[j] === "9"){
            result += "짝"
        }
    }
    console.log(result.length > 0 ? result : i)
}



//문제 4

let num = 13;
let prime = true;

for(i = 2; i < num; i++){
    if(num % i == 0){
        prinme = false
    } 
}
console.log(prime)