function CheckData() {
    var tour = document.getElementById('tour').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var num = document.getElementById('num').value;

    if(tour == "" || name == "" ||phone == "" ||  num == "") {
    if (tour == "")
        alert("The Tour is require");
    if (name == "")
        alert("The name is require");
    if (phone == "")
        alert("The phone is require");
    if (num == "")
        alert("The number of travelers is require");
    }
    else 
        alert("Welcome to book a tour")    ;
}