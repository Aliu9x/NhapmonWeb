// hader theo ys muoons
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-menu');
    if (window.scrollY >= 770) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });

const showPopupBtn= document.querySelector(".login-btn");
const hidePopupBtn= document.querySelector(".login-form .close-btn");


showPopupBtn.addEventListener("click", ()=> {
  document.body.classList.toggle("show-popup");
});
hidePopupBtn.addEventListener("click",()=> showPopupBtn.click());

// hide form popup

const formPopup= document.querySelector(".login-form");
const loginSignupLinh=document.querySelectorAll(".form-box .bottom-link a")


loginSignupLinh.forEach(link=> {
  link.addEventListener("click",(e)=>{
    e.preventDefault();
    formPopup.classList[link.id==="signup-link"? 'add':'remove']("show-signup")
  })
})

