function circleMouse() {
    let circle = document.querySelector("#circle");
    window.addEventListener('mousemove', function (details) {
        const x = details.pageX;
        const y = details.pageY;
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
}

circleMouse();

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        circle.style.mixBlendMode = 'normal';
    });
    img.addEventListener('mouseleave', () => {
        circle.style.mixBlendMode = 'difference';
    });
});




document.addEventListener("DOMContentLoaded", () => {
    let box1 = document.querySelector(".pre-box1")
    let box2 = document.querySelector(".pre-box2")
    let box3 = document.querySelector(".pre-box3")
    let box4 = document.querySelector(".pre-box4")
    let preloader = document.querySelector("#proloader")


    setTimeout(() => {
        box1.style.top = "-100%"

    }, 1000)
    setTimeout(() => {
        box2.style.top = "-100%"
    }, 1200)
    setTimeout(() => {
        box3.style.top = "-100%"
    }, 1300)
    setTimeout(() => {
        box4.style.top = "-100%"
    }, 1400)
    setTimeout(() => {
        preloader.style.display = "none"
    }, 3000)

});



let nav = document.querySelector("#HEADER");

let name = localStorage.getItem("username")

// nav set karo
nav.innerHTML = `
<nav>
    <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Collection</a>
        <a href="#">Service</a>
        <a href="#">About Us</a>
    </div>

    <div class="logo">Heritage.</div>

    <div class="user-profile">
        <img src="files/assets/user.png">
        <span id="NullName">${name || ""}</span>
        <i class="arrow-down"></i>
    </div>
</nav>
`;


if (!name || name === "Null" || name === "") {
    window.location.href = "files/createAcc.html";
}


let footer = document.querySelector("footer");
footer.innerHTML=` <div class="footer-container">
            <div class="footer-column brand-info">
                <h2 class="footer-logo">Heritage</h2>
                <p>Driving excellence since 1998. We provide the finest selection of luxury and performance vehicles to
                    suit your lifestyle.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>

            <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">New Inventory</a></li>
                    <li><a href="#">Used Cars</a></li>
                    <li><a href="#">Sell Your Car</a></li>
                    <li><a href="#">Service Center</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Categories</h3>
                <ul>
                    <li><a href="#">Electric & Hybrid</a></li>
                    <li><a href="#">Sports Cars</a></li>
                    <li><a href="#">Luxury SUVs</a></li>
                    <li><a href="#">Classic Collection</a></li>
                </ul>
            </div>

            <div class="footer-column newsletter">
                <h3>Stay Updated</h3>
                <p>Subscribe for latest arrivals and exclusive offers.</p>
                <form>
                    <input type="email" placeholder="Your Email" required>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 AutoDrive. All rights reserved. | <a href="#">Privacy Policy</a></p>
        </div>`





let logoSlide = document.querySelector(".logos-slide");
logoSlide.innerHTML=`
  <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />
            <img src="files/assets/honda-motorcycles-logo-11.png" alt="Honda" />
            <img src="files/assets/toyota-logo-png-25.png" alt="Honda" />
            <img src="files/assets/logo3.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/logo5.png" alt="Honda" />
            <img src="files/assets/logo4.png" alt="Honda" style="height: 70px;" />
            <img src="files/assets/gmc-logo-png_seeklogo-252337.png" alt="Honda" />
            <img src="files/assets/lambo.png" alt="Honda" style="height: 150px;" />`
