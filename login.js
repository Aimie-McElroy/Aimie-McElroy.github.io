function checkCreds() {
    //collect the data
    var fstName = document.getElementById("fName").value;
    var lstName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    //work the data
    var fullName = fstName + " " + lstName;
    console.log("the full name is " + fullName);
    console.log("the badge number is " + badgeNumb);
    var fullLength = fullName.length;
    console.log("The name length is " + fullLength);

    //Check the Input
    if (fullLength > 20 || fullLength < 2){
        document.getElementById("loginStatus").innerHTML = "invalid name entry please try again";
    } else if (badgeNumb > 999|| badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "invalid Badge Number please try again";
    } else {
        alert("Access Granted, welcome " + fullName);
        location.replace("./UATSpace.html");
    }
}