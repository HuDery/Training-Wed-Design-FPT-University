function Answer() {
    var name = document.getElementById('name').value;
    var tour = document.getElementById('tour').value;
    var phone = document.getElementById('phone').value;
    var num = document.getElementById('num').value;

    document.getElementById('b1').style.display = "none";
    
    document.getElementById('tt').innerHTML = "Answer Customer"

    document.getElementById('tour1').innerHTML = "Tour : " +tour;
    document.getElementById('name1').innerHTML =  "Your Name : " + name;
    document.getElementById('phone1').innerHTML = "Phone: " +phone;
    document.getElementById('num1').innerHTML = "Number of Travelers :" +num;

    document.getElementById('b2').style.display = "block";
}
