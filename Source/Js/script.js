let $ = document 

//////////////////////////////////////

// variables /////////////////////////
const body = $.body
const textInput = $.querySelector("input")
const dotsCalculatorBtn = $.querySelector("button")
const dotsCountDisplayer = $.querySelector(".dots-count")

singleDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"],
doubleDots = ["ت", "ق"],
tripleDots = ["پ", "ث", "چ", "ژ", "ش"],
midLetterDots = ["ی"];

// functions ////////////////////////////
function liveUserScreenHeight () {
    let userScreenHeight = visualViewport.height + "px"
    body.style.minHeight = userScreenHeight
}

function dotsCountCalculator(){
    let inputValue = textInput.value.trim()

    let splitedText = inputValue.split("")

    let dotsCount = 0
 
    for(let i = 0 ; i < splitedText.length ; i++){
        let char = splitedText[i]

        if(singleDots.includes(char)){
            dotsCount += 1
        }

        if(doubleDots.includes(char)){
            dotsCount += 2
        }

        if(tripleDots.includes(char)){
            dotsCount += 3
        }

        if(midLetterDots.includes(char) && i !== splitedText.length - 1){
            if(splitedText[i + 1] !== " "){
                dotsCount += 2
            }
        }
    }

    dotsCountDisplayer.innerHTML = dotsCount
} 

// event listeners ///////////////////////////
window.addEventListener("load" , liveUserScreenHeight)
window.addEventListener("resize" , liveUserScreenHeight)
textInput.addEventListener("input" , dotsCountCalculator)
dotsCalculatorBtn.addEventListener("click" , event => {
    event.preventDefault()
    dotsCountCalculator()
})