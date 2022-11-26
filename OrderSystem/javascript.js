function myFunction(x) {
    x.classList.toggle("change");


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it // 
//window.onclick = function(event) {
    //if (!event.target.matches('.menucontainer')) {
      //var dropdowns = document.getElementsByClassName("dropdown-content");
      //var i;
      //for (i = 0; i < dropdowns.length; i++) {
        //var openDropdown = dropdowns[i];
        //if (openDropdown.classList.contains('show')) {
          //openDropdown.classList.remove('show');
        //}}}}
		var specialMessage = "Due to the outbreak of epidemic and increasing delivery order, HK$100 delivery charges will be applied when an order amount is less than HK$1,000 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDue to the outbreak of epidemic and increasing delivery order, HK$100 delivery charges will be applied when an order amount is less than the HK$1,000.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

		function greeting(name) {
			document.getElementById('greeting').innerHTML = "Welcome, " + name;
		} 

		function postAnnoucement() {
			if (specialMessage.length != 0) {
				document.getElementById('specialAnnouncement').innerHTML = specialMessage;

				repeatPostMessage()
			}
		} function repeatPostMessage() {
			var speed = 95;
			specialMessage = specialMessage.substring(1, specialMessage.length) +
				specialMessage.substring(0, 1);
			document.getElementById('specialAnnouncement').innerHTML = specialMessage;

			setTimeout("repeatPostMessage()", speed); // required speed variable


		}
		var specialMessage2 = "Due to the outbreak of epidemic and increasing delivery order, HK$100 delivery charges will be applied when an order amount is less than HK$1,000.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

		function postAnnoucement2() {
			if (specialMessage2.length != 0) {
				document.getElementById('specialAnnouncement2').innerHTML = specialMessage2;

				repeatPostMessage2()
			}
		} function repeatPostMessage2() {
			var speed = 120;
			specialMessage2 = specialMessage2.substring(1, specialMessage2.length) +
				specialMessage2.substring(0, 1);
			document.getElementById('specialAnnouncement2').innerHTML = specialMessage2;

			setTimeout("repeatPostMessage2()", speed); // required speed variable


		}