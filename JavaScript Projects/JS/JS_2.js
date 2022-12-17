function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["email"].value;
 
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    if (y == "") {
        alert("Last name must be filled out");
        return false;
      }

    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
  }