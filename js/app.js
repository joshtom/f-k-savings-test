const handleOpen = document.querySelector("#handleOpen");
const mobileNavbar = document.querySelector(".header__menu");
const links = document.querySelectorAll(".header__menu--links li a");
const html = document.querySelector("html");
let count = 0;

const handleMobileOpen = () => {
    if(count > 0) mobileNavbar.classList.toggle("slide-out");
    mobileNavbar.style.display = "flex";
    mobileNavbar.classList.toggle("slide-in");
    html.classList.toggle("prevent-scroll");
    count += 1;

}

const handleMobileClose = () => {
	mobileNavbar.classList.toggle('slide-in');
	mobileNavbar.classList.toggle('slide-out');
	setTimeout(function() {
		mobileNavbar.style.display = 'none';
		html.classList.toggle('prevent-scroll');
	}, 500)
}

links.forEach(link => {
	link.addEventListener('click', handleMobileClose)
})
handleOpen.addEventListener('click', handleMobileOpen);
handleClose.addEventListener('click', handleMobileClose);

