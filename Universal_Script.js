const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#main-footer');
mainHeader.innerHTML = `

<div id="Nav_Bar">
  <div class="Drop_Menu">
  <button onclick="myFunction()" class="fa fa-bars" id="Icons1"></i></button>
    <div id="Menu" class="dropdown-content">
    <a href="Home_page.html">Home Page</a>
    <a href="Products.html">Products</a>
    <a href="Contact_us.html">Contact us</a>
    <a href="About_us.html">About us</a>
    </div>
  </div>
  <div>
    <a href="#" id="Icons2" class="fa fa-facebook"></a>
    <a href="#" id="Icons2" class="fa fa-twitter"></a>
    <a href="#" id="Icons2" class="fa fa-linkedin"></a>
    <a href="#" id="Icons2" class="fa fa-github"></a>
    <a href="#" id="Icons1" class="fa fa-cart-arrow-down"></a>
  </div> 
 
</div>
`;  

mainFooter.innerHTML = `
<div class="Page_Info">

  <div class="Contact">
    <p><i class="fa fa-map-marker"></i>1146 Anna Maria, <br>Innisfil ON L9S 4X5</p>
    <p><i class="fa fa-phone"></i>(705) 431-5950</p>
    <p><i class="fa fa-envelope"></i><a href="mailto:info@timelesstoys.com">info@timelesstoys.com</a></p>
  </div>

  <div class="Links">
    <a href="#">Home Page</a>
    <a href="#">Products</a>
    <a href="#">Contact us</a>
    <a href="#">About us</a>
  </div>
</div>

<div class="Social">

  <div id="Information">
    <a href="#">Join Our Team!</a>
    <a href="#">What's New?</a>
    <a href="#">Our Policy</a>
    <a href="#">Terms And Conditions</a>
  </div>

  <div>
    <a href="#" id="Icons2" class="fa fa-facebook"></a>
    <a href="#" id="Icons2" class="fa fa-twitter"></a>
    <a href="#" id="Icons2" class="fa fa-linkedin"></a>
    <a href="#" id="Icons2" class="fa fa-github"></a>
    <p class="Company_Name">Timeless Toys Name © 2023</p>  
  </div>

</div>
`;
function myFunction() {
  // Toggle function will trigger when clicked
  document.getElementById("Menu").classList.toggle("show");
}

// Attach a click event handler to the window
window.onclick = function(event) {
  // Check if the clicked element does not have the class '.fa-bars'
  if (!event.target.matches('.fa-bars')) {
    // Get all elements with the class 'dropdown-content' (dropdown menus)
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    // Iterate through each dropdown menu
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      // Get the current dropdown
      var openDropdown = dropdowns[i];
      
      // Check if the dropdown has the class 'show' (i.e., it is visible)
      if (openDropdown.classList.contains('show')) {
        // If the dropdown is visible, hide it by removing the 'show' class
        openDropdown.classList.remove('show');
      }
    }
  }
}
