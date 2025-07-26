//your JS code here. If required.
window.onload = function() {
    // Get the element with id 'level'
    var element = document.getElementById("level");

    // Initialize level counter
    var level = 0;

    // Traverse up the DOM tree to count parent elements
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Display the result
    alert("The level of the element is: " + level);
};
