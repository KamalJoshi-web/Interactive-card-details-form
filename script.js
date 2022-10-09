// Here i selected all the input elements
const form =document.getElementById('form');
const name1 =document.getElementById('name');
const num = document.getElementById('number');
const month =document.querySelector('.mm');
const year= document.getElementById('expYY');
const cvc =document.getElementById('cvc');
const thanksContainer =document.querySelector('.thanks-container');

const inputBtns = document.querySelectorAll(".inputs");
// console.log(inputBtns);

// Select all the element and added a event listener key up
inputBtns.forEach((eachInputs) => {
  eachInputs.addEventListener("keyup", (e) => {
    // console.log(e.target.value);

    // Here slected the name input and taken all the keys and added into the name section
    if (e.target.matches("#name")) {
      if(e.target.value===""){
        document.querySelector('.error-card-name').classList.add('error-style-aval');
        e.target.style.outlineColor = "hsl(0, 100%, 66%)";
      }
      else{
        document
        .querySelector(".error-card-name")
        .classList.remove("error-style-aval");
      e.target.style.outlineColor = "hsl(249, 99%, 64%)";
      }
      document.getElementById("holder-name").innerHTML = e.target.value;
    }

    // Here slected the number input and taken all the keys and added into the number section using ibm style number input
    else if (e.target.matches("#number")) {
      // here i checked does key contains any letter
      if (/[a-zA-Z]/.test(e.target.value)) {
        document
          .querySelector(".error-card-number")
          .classList.add("error-style-aval");
        e.target.style.outlineColor = "hsl(0, 100%, 66%)";
        
        
      } else {
        document
          .querySelector(".error-card-number")
          .classList.remove("error-style-aval");
        e.target.style.outlineColor = "hsl(249, 99%, 64%)";
       
      }

      e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      document.getElementById("card-number").innerHTML = e.target.value;
      
    }
    // Here slected the month-expire input and taken all the keys and added into the month-expire section
    else if (e.target.matches(".mm")) {
      if (e.target.value === "") {
        // Here i check does input key is blank
        document
          .querySelector(".error-month")
          .classList.add("error-style-aval");
        e.target.style.outlineColor = "hsl(0, 100%, 66%)";
        
      } else {
        document
          .querySelector(".error-month")
          .classList.remove("error-style-aval");
        e.target.style.outlineColor = "hsl(249, 99%, 64%)";
        
      }
      document.getElementById("month").innerHTML = `${e.target.value} /`;
      
    }
    // Here slected the year-expire input and taken all the keys and added into the year-expire section
    else if (e.target.matches("#expYY")) {
      if (e.target.value === "") {
        // Here i check does input key is blank
        document.querySelector(".error-year").classList.add("error-style-aval");
        e.target.style.outlineColor = "hsl(0, 100%, 66%)";
        
      } else {
        document
          .querySelector(".error-year")
          .classList.remove("error-style-aval");
        e.target.style.outlineColor = "hsl(249, 99%, 64%)";
        
      }
      document.getElementById("year").innerHTML = e.target.value;
      
    }
    // Here slected the cvc input and taken all the keys and added into the cvc section
    else if (e.target.matches("#cvc")) {
      if (e.target.value === "") {
        // Here i check does input key is blank
        document.querySelector(".error-cvc").classList.add("error-style-aval");
        
        e.target.style.outlineColor = "hsl(0, 100%, 66%)";
        
       
      } else {
        document
          .querySelector(".error-cvc")
          .classList.remove("error-style-aval");
        e.target.style.outlineColor = "hsl(249, 99%, 64%)";
        
      }
      document.getElementById("change-cvc").innerHTML = e.target.value;
     
    }
    
    


  });
 
});

// form submmiting logic



form.addEventListener('submit',(e)=>{
    e.preventDefault();
   if(
    num.value==="" || month.value==="" || year.value===""|| cvc.value==="" || name1.value=== ""||
    num.nextElementSibling.classList.contains('error-style-aval') || 
    month.nextElementSibling.nextElementSibling.firstElementChild.classList.contains('error-style-aval') ||
    year.nextElementSibling.lastElementChild.classList.contains('error-style-aval') ||
    cvc.nextElementSibling.classList.contains('error-style-aval') ||
    name1.nextElementSibling.classList.contains('error-style-aval')
   ){
    num.nextElementSibling.classList.add('error-style-aval');
    
    month.nextElementSibling.nextElementSibling.firstElementChild.classList.add('error-style-aval');
    year.nextElementSibling.lastElementChild.classList.add('error-style-aval');
    cvc.nextElementSibling.classList.add('error-style-aval');
    name1.nextElementSibling.classList.add('error-style-aval');


    
   }
   else{
    num.nextElementSibling.classList.remove('error-style-aval');
    month.nextElementSibling.nextElementSibling.firstElementChild.classList.remove('error-style-aval');
    year.nextElementSibling.lastElementChild.classList.remove('error-style-aval');
    cvc.nextElementSibling.classList.remove('error-style-aval');
    
    
    
    name1.nextElementSibling.classList.remove('error-style-aval');
    thanksContainer.style.display='flex';
    form.replaceWith(thanksContainer)
    

   } 
})
