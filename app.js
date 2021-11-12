const clickBtn = document.getElementById("click-me")
const colorName = document.getElementById("color-name")
const bodyBg = document.getElementsByTagName('body')[0]
const colors = ["blue", "red", "green", "yellow", "violet","grey"]
const colorsLength = colors.length
// clickBtn.addEventListener('click',console.log('helllo'))




function changeColor(){
    let randomNumBg = Math.floor(Math.random()*colorsLength)
    let randomNumBtn = Math.floor(Math.random()*colorsLength)
    let randomNumBorder = Math.floor(Math.random()*colorsLength)
    let colorRandomBg = colors[randomNumBg]
    let colorRandomBtn = colors[randomNumBtn]
    let colorRandomBorder = colors[randomNumBorder]
    // colorName.innerText =  colorRandomBg
    bodyBg.style.backgroundColor = colorRandomBg;
    clickBtn.style.backgroundColor = colorRandomBtn;
    colorName.style.borderColor = colorRandomBorder;
    clickBtn.style.borderColor = colorRandomBorder;
}