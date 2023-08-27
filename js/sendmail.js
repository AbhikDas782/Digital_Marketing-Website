let button=document.getElementById("sendmail");
button.addEventListener("click",(e)=>{
    e.preventDefault();
})
button.addEventListener("click",()=>{
        
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    let message=document.getElementById("message").value;
    
    $.ajax({
        type: "POST",
        url: "_sendmail.php",
        data: {
        submit:true,
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
    
        success: function (response) {
          if(response.match("success")){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Message Send Successfully'
              })
        }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Try Again'
              })
        }
    }
      });


});
