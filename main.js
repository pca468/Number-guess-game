// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면 맞췄습니다!
// 랜덤번호가 유저번호보다 작으면 Down!!
// 랜덤번호가 유저번호보다 높으면 Up!!
// Reset번호를 누르면 게임이 리셋된다.
// 기회는 총 5번이 주어지며 다 사용하면 개임이 끝난다.(더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.


console.log(20 + 30) // 50
console.log("20" + "30") // 2030
console.log("Hello" + " " + 2021) // Hello 2021
console.log(1 + 2 * 3) // 7
console.log(1 / 0) // Infinity
console.log(6 % 2) // 0
console.log(7.5 % 2) // 1.5
console.log(5 == 5) //true
console.log(5 === 5) // true
console.log(5 == "5") // true
console.log(5 === "5") // false
console.log(5 != 5.0) //false
console.log(5 !== 5.0) // flase
console.log("true" === true) // false
console.log(5 <= 5.0) // true
console.log(5 >= 5) // true
console.log(true || true) // true
console.log(true || false) // true
console.log(true && true) // true
console.log(true && false) // false
console.log(!true) // false
console.log(!false) // true


let computerNum = 0
let playButton = document.getElementById("play-button")
console.log(playButton);
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history=[]

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("fouse",function(){userInput.value=""}) // fouse = 어떠한 커서를 누르면 event 발생
// 로직이 단순하거나 잠깐 사용할 함수라면 안에다 바로 함수사용 가능

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답 : " , computerNum)
}

pickRandomNum()

function play() {
    let userValue = userInput.value

    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100 사이 숫자를 입력해주세요."
        return;
    }
    
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chances --;
    chanceArea.textContent = `남은기회: ${chances} 번`
    console.log(chances)
    
    if(userValue < computerNum){
        resultArea.textContent = "Up!!!!!!!!"
    } else if(userValue > computerNum){
        resultArea.textContent = "Down!!!!!!"
    } else{
        resultArea.textContent = "정답입니다~"
        gameOver = true;
    }

    history.push(userValue)
    console.log(history)
    if(chances < 1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    // user input 창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();

    resultArea.textContent = "결과값이 여기에 나옵니다."
}

