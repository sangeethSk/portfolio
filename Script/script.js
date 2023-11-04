const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  section.forEach(sec => {
    let top = window.scrollY;
    
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top > offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
    }
  }
  
  );

  // create a sticky navbar
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY>100);
  menubar.classList.remove('bx-x')
  navbar.classList.remove('active')
});

// toggle button click event listener
var menubar = document.querySelector('#menu');
var navbar = document.querySelector('.navbar');
menubar.onclick = () => {
  menubar.classList.toggle('bx-x');
  navbar.classList.remove('active');
};
// create a text changer//
var type = new Typed('.textline',{
  strings:['FrontEnd Developer','BackEnd Developer','Developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  lopp:true
})
// email function

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "sangeethiam@gmail.com",
    Password : "B0B223A7BC95D0026F96DF318E09D904387F",
    To : 'sangeethiam@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New Contact Form Enquiry",
    Body : "name:" + document.getElementById("name").value
    + "<br> Email:" +  document.getElementById("email").value
    + "<br> tel:" +  document.getElementById("tel").value
    + "<br> subject" +  document.getElementById("subject").value
    + "<br> Message" +  document.getElementById("message").value
}).then(
  this.window.reload(),
  message => alert("mail sent sucessfully")
);
}


// for toggle tried
// const toggleBtn = document.getElementById("toggle-btn");
// const list = document.getElementById("list");

// toggleBtn.addEventListener("click", function() {
//   list.classList.toggle("hidden");
// });
