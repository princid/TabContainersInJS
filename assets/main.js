// var tabButtons = document.querySelectorAll("button");
// var tabContent = document.querySelectorAll(".tabContent");

// function showContent(contentIndex, colorCode){
//     tabButtons.forEach((item) => {
//         item.style.backgroundColor = "";
//         item.style.color = "";
//     });
//     tabButtons[contentIndex].style.backgroundColor = colorCode;
//     tabButtons[contentIndex].style.color = '#fff';
    
//     // if(tabButtons[contentIndex]){
//     //     tabButtons.disabled = "true";
//     // }
//     // else{
//     //     tabButtons.disabled = "false";
//     // }

//     tabContent.forEach((item) => {
//         item.style.display = "none";
//     });
//     tabContent[contentIndex].style.display = "block";
//     tabContent[contentIndex].style.backgroundColor = colorCode;
// }

// showContent(0, '#f44336');



var tabButtons = document.querySelectorAll("button");
var tabContent = document.querySelectorAll(".tabContent");

function showContent(contentIndex, colorCode) {
    tabButtons.forEach((item, index) => {
        item.style.backgroundColor = "";
        item.style.color = "";
        item.disabled = false; // Re-enable all buttons
        if (index === contentIndex) {
            item.disabled = true; // Disable the active button
        }
    });
    tabButtons[contentIndex].style.backgroundColor = colorCode;
    tabButtons[contentIndex].style.color = '#fff';

    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabContent[contentIndex].style.display = "block";
    tabContent[contentIndex].style.backgroundColor = colorCode;
}

showContent(0, '#f44336');