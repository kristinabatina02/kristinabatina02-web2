//header
// let href=["shop.html", "aboutus.html", "contact.html", "author.html"];
// let nameLinks = ["Shop", "About us", "Contact", "Author"];

// let divNav = document.querySelector("#menu");
// let formatZaIspisNavMenu = `<ul>`;

// for(let i = 0; i < href.length; i++){
//     formatZaIspisNavMenu += `<li><a href="${href[i]}">${nameLinks[i]}</a>
//     <li><a href="${href[i]}">${nameLinks[i]}</a></li>
//     <li><a href="${href[i]}">${nameLinks[i]}</a></li>`;
// }
// formatZaIspisNavMenu = `</ul>`;
// divNav.innerHTML = formatZaIspisNavMenu;

//forma
// var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// var reName = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,11}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,11})*$/;
// var reSubject = /(.{3})+/
// var reMessage = /(.{10})+/

// var objName = document.querySelector("#name");
//     objName.addEventListener("blur",function(){
//         checkingRegex(reName,objName);
//     })
// var objEmail = document.querySelector("#email");
//     objEmail.addEventListener("blur",function(){
//         checkingRegex(reEmail,objEmail);
//     })    
// var objSubject = document.querySelector("#subject");
//     objSubject.addEventListener("blur",function(){
//         checkingRegex(reSubject,objSubject);
//     })

//     var objMessage = document.querySelector("#message");
//     objMessage.addEventListener("blur",function(){
//         checkingRegex(reMessage,objMessage);
//     })
// var button = document.getElementById("submitForm");
// button.addEventListener("click", contactProcessing);
// function contactProcessing(){
//     var error = 0;
//     error += checkingRegex(reName,objName);
//     error += checkingRegex(reEmail,objEmail);
//     error += checkingRegex(reSubject,objSubject);
//     error += checkingRegex(reMessage,objMessage);
    
//     if(!error){
//         button.nextElementSibling.classList.remove("hideSuccess");
//         button.nextElementSibling.classList.add("success");
//     }
//     else{
//         button.nextElementSibling.classList.remove("success");
//         button.nextElementSibling.classList.add("hideSuccess");
//     }
// }




// function checkingRegex(re, obj){
//     if(re.test(obj.value)){
//         obj.nextElementSibling.classList.remove("showError");
//         obj.nextElementSibling.classList.add("hideError");
//         return 0;
//     }
//     else{
//         obj.nextElementSibling.classList.remove("hideError");
//         obj.nextElementSibling.classList.add("showError");
//         return 1;
//     }
    
// }
