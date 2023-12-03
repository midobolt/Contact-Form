function emailSend() {
  var userName = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var messageBody =
    "Name: " + userName + "<br/> Phone: " + phone + "<br/> Email: " + email;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hejhej6857@gmail.com",
    Password: "B52EB63A9BBDB2027663F63B20CDC14AF101",
    To: "midobolt@yahoo.com",
    From: "hejhej6857@gmail.com",
    Subject: "This is the subject",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal("Successful", "Your message was successfully sent!", "success");
    } else {
      swal("Error", "You clicked the button!", "error");
    }
  });
}
