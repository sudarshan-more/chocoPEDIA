import signup from "./Signup";



export default function signupvalidation(){
  return(
    document.forms[signup].addEventListener("submit", async function submitForm(e) { 
      console.log(e)
      e.preventDefault();
        let firstName = document.querySelector("#firstName").value;
                if (document.getElementById('firstName').value === ""||null) {
                    document.getElementById('firstname_errors').innerHTML="first name is required";
                    return false;
                 } else {
                      document.getElementById('firstname_errors').innerHTML = null;   
                       }
        let lastName = document.querySelector("#lastName").value;
        let email = document.querySelector("#email").value;
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
            if((document.getElementById("email").value)===""||(!re.test(document.getElementById("email").value))){
              document.getElementById("email_errors").innerHTML="invalid email"
              return false;
              }
              else {
              document.getElementById('email_errors').innerHTML = null;   
            }
        let password = document.querySelector("#password").value;
               if ((document.getElementById('password').value).length!==10||null) {
               document.getElementById('password_errors').innerHTML="valid password is required";
               return false;
               } else {
               document.getElementById('password_errors').innerHTML = null;   
               }
        let body = { firstName, lastName, email, password };
        let createdPost = await saveCustomers(body);
        let { id } = createdPost;
        let message = `customer successfully with id ${id}`;
        alert(message);    
      })
  )}


  
