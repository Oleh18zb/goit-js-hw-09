import"./assets/styles-dvnwswZ3.js";let t={email:"",message:""};const a=document.querySelector(".feedback-form");function d(){localStorage.setItem("feedback-form-state",JSON.stringify(t))}function u(){const e=localStorage.getItem("feedback-form-state");e&&(t=JSON.parse(e),a.elements.email.value=t.email,a.elements.message.value=t.message)}a.addEventListener("input",function(e){t[e.target.name]=e.target.value,d()});document.addEventListener("DOMContentLoaded",function(e){u()});a.addEventListener("submit",function(e){e.preventDefault(),!t.email.trim()||!t.message.trim()?alert("Fill please all fields"):(console.log(t),localStorage.removeItem("feedback-form-state"),t={email:"",message:""},a.reset())});const m={email:"user@mail.com",password:"secret"},i=document.querySelector("#login-form"),r=document.querySelector(".login-btn"),g=document.querySelector('[name="email"]'),f=document.querySelector('[name="password"]');i.addEventListener("submit",S);function S(e){e.preventDefault();const{email:o,password:l}=e.target.elements;if(r.textContent==="Logout"){i.reset(),localStorage.removeItem("login-form"),o.removeAttribute("readonly"),l.removeAttribute("readonly"),r.textContent="Login";return}const s=o.value.trim(),n=l.value.trim();if(s===""||n===""){alert("Fill all fields");return}if(s!==m.email||n!==m.password){alert("Wrong email or password!");return}localStorage.setItem("login-form",JSON.stringify({email:s,password:n})),r.textContent="Logout",o.setAttribute("readonly",!0),l.setAttribute("readonly",!0)}v();function v(){const e=localStorage.getItem("login-form");if(e){const o=JSON.parse(e);g.value=o.email??"",f.value=o.password??"",r.textContent="Logout",email.setAttribute("readonly",!0),password.setAttribute("readonly",!0)}}const c=document.querySelector(".switcher-toggle");c.addEventListener("change",b);function b(e){console.log(e.target.checked),e.target.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark"),document.body.classList.remove("light")):(document.body.classList.remove("dark"),document.body.classList.add("light"),localStorage.setItem("theme","light"))}localStorage.getItem("theme")==="dark"&&(console.log("dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),c.checked=!0);
//# sourceMappingURL=2-form.js.map
