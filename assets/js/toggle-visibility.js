
// Toggles Menu Visibility
function toggleVisibility() 
{
    var element = document.getElementById("mobile-dropdown-content");
    if ( element.style.display === "block" ) {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}