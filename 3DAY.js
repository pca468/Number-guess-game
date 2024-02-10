
if(number > 0) {
    if(number == 0){
        console.log("숫자가 0입니다.")
    }
    console.log("양성입니다.")
} else {
    console.log("음성입니다.")
}

if(score >= 90){
    console.log("A등급입니다.")
} else if (score >= 80 && score < 90){
    console.log ("B등급입니다.")
} else if (score >= 70 && score < 80){
    console.log ("C등급입니다.")
} else if (score >= 60 && score < 70){
    console.log ("D등급입니다.")
} else {
    console.log("F입니다.")
}

let skills = ["HTML", "CSS" , "JavaScript" , "React"]

if(skills.includes("javaScript") && skills.includes("React")){
    console.log("합격입니다.")
} else if(skills.includes("JavaScript") || skills.includes("React")) { 
    console.log("예비입니다.")
} else {
    console.log("탈락입니다.")
}