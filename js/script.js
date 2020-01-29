document.getElementById('ham-button').addEventListener('click', function () {
    toggleClass(document.getElementById('ham-menu'), "active")
});

document.getElementById('close').addEventListener('click', function () {
    toggleClass(document.getElementById('ham-menu'), "active")
});


function toggleClass(element, className) {
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    } else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
}