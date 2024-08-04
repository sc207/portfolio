// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar .nav-link");
    
    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });
        
        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.getAttribute("href").includes(current)) {
                li.classList.add("active");
            }
        });
    });
});


function sendEmail(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var projectdetails = document.getElementById('projectdetails').value;

  // Create the message body with a table and formatted text
  var messageBody = `
    <table style="width: 100%; border: 1px solid #ccc; border-collapse: collapse;">
      <tr>
        <th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Name</th>
        <td style="padding: 8px; text-align: left; border: 1px solid #ccc;">${name}</td>
      </tr>
      <tr>
        <th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Email</th>
        <td style="padding: 8px; text-align: left; border: 1px solid #ccc;">${email}</td>
      </tr>
      <tr>
        <th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Subject</th>
        <td style="padding: 8px; text-align: left; border: 1px solid #ccc;">${subject}</td>
      </tr>
      <tr>
        <th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Project Details</th>
        <td style="padding: 8px; text-align: left; border: 1px solid #ccc;">${projectdetails}</td>
      </tr>
    </table>
  `;

  var thankYouMessage = `
    <p>Dear ${name},</p>
    <p>Thank you for reaching out to me through my contact page. I have received your message and appreciate you taking the time to contact me.</p>
    <p>My team will review your inquiry and get back to you within the next 24 hours. If your message is urgent, please let me know, and my team will prioritize it accordingly.</p>
    <p>If you need immediate assistance or have any additional questions, feel free to contact us directly at chauhansunny207@gmail.com or WhatsApp me at (437) 602-0701.</p>
    <p>Thank you once again for your interest. We look forward to assisting you.</p>
    <p>Best regards,</p>
    <p>Sunny Chauhan<br>
       Software Developer<br>
       Toronto, ON, CA<br>
       Contact: +1 (437) 602-0701</p>
  `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "s7674477@gmail.com", // Replace with your email
    Password: "6D1CE4CD04DC5451A1498BF8A3A953D72D70", // Replace with your password
    To: "s7674477@gmail.com", // Replace with receiver's email
    From: "s7674477@gmail.com" , // Replace with your email
    Subject: `${name} sent you a message: ${subject}`,
    Body: messageBody, // Combine the thank you message and the message body
  })
  .then(function (message) {
    swal("Secussful", "You clicked the button!", "success");
  })
  .catch(function (error) {
    console.error("Error sending email:", error);
    swal("Error", "You clicked the button!", "error");
  });
}

function showPopup() {
    swal("Coming Soon!", "The data will be uploaded to GitHub soon.", "info");
}

