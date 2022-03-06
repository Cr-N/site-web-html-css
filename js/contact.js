// Selectam butonul de send
const sendButton = document.getElementById("send-button")
const Name = document.getElementById("Name")
const Phone = document.getElementById("Phone")
const Subject = document.getElementById("Subject")
const Message = document.getElementById("Message")
// sendButton.addEventListener("submit", function() { 
    // console.log("Test");
// })
const emailLink = "mailto:cristeanicolaeandrei@gmail.com" ;
const form =document.getElementsByTagName("form")[0];
form.addEventListener("submit" ,sendMessage)

function sendMessage (event) {
    event.preventDefault();
    const url = emailLink + "?subject=" + Subject.value + "&body=" + `New message form ${Name.value} - ${Phone.value} ` + Message.value;
    window.location.href = url;
}