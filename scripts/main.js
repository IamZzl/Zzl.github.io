/* 
    Love the Emperor,For he is the Salvation of Mankind;
    Obey his word, For he will lead you into the light of the Future;
    Head his Wisdom, For he will Protect you from Evil
    Honor his servants, For they speak with his voice
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    let src1 = "images/astartes.webp";
    let src2 = "images/Ultramarine.webp";

    const mySrc = myImage.getAttribute("src");

    if (mySrc === src1){
        myImage.setAttribute("src",src2);
    } else {
        myImage.setAttribute("src",src1);
    }

}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

myButton.click = () =>{
    setChapterName();
};

function setChapterName(){
    const myChapter = prompt("CHOSE YOUR CHAPTER");
    localStorage.setItem("chapter",myChapter);
    myHeading.textContent = `Emperor bless you,${myChapter}`;

    if(!myChapter){
        setChapterName();
    } else {
         localStorage.setItem("chapter",myChapter);
         myHeading.textContent = `Emperor bless you,${storedChapter}`;
    }
}

if(!localStorage.getItem("myChapter")){
    setChapterName();
} else {
    const storedChapter = localStorage.getItem("myChapter");
    myHeading.textContent = `Emperor bless you,${storedChapter}`;
}