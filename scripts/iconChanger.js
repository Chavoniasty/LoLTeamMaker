function imgChanger(tempString) {
    let checkbox = document.getElementById(`${tempString}Checkbox`);
    let image = document.querySelector(`#${tempString}Checkbox + img`);
    tempString = tempString.slice(0, 3);
    if(checkbox.checked == true){
        image.src = "icons/" + tempString + "On.png";
    }
    else{
        image.src = "icons/" + tempString + "Off.png";
    }
}
