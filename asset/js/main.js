const { createElement } = require("react");

let navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();


        navlinks.forEach(l => l.classList.remove('active'));

        this.classList.add('active');

        link.addEventListener('blur', function() {
            this.classList.remove('active');

        });

    });
});

function allnavlink() {
    document.querySelectorAll('.nav-link').addEventListener('click', function() {
        navlinks.style.display = 'block';
    });
}
allnavlink();



function login() {
    let user=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    if (user ==="admin" && email === "n" ) {
        alert ("login successful");
  
    } else {
        alert ("Invalid username or email.");

    }
    
}


function DownloadCV() {
   const link=document.createElement("a");
   link.href="assets/Nada Nasr.pdf";
   link.download="Nada Nasr.pdf";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
}
DownloadCV();