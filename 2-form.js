import"./assets/styles-DiDpJt3Z.js";let e={email:"",message:""};const a=document.querySelector(".feedback-form");function o(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function l(){const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),a.elements.email.value=e.email,a.elements.message.value=e.message)}a.addEventListener("input",function(t){e[t.target.name]=t.target.value,o()});document.addEventListener("DOMContentLoaded",function(t){l()});a.addEventListener("submit",function(t){t.preventDefault(),!e.email.trim()||!e.message.trim()?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},a.reset())});
//# sourceMappingURL=2-form.js.map
