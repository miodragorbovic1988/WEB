function createSelect(options, node) {

    var selectString="<select>";

    for (var i =0; i<options.length; i++); {
        selectString += "<option>" + options[i] + "</option>";
        }

    node.innerHTML += selectString + "</select>";
}




var specialDiv = document.querySelector(".special");
createSelect([1,2,3,4,5], specialDiv);
createSelect([9,6,7], document.querySelector("div:last-child"));



function createSelectWithDom(options, dome) {

    var selectString="<select>";
    
}