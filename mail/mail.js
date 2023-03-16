$("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxGXGoU6gO6LfSqenbcFwHdA5JQiGgf_4HOoHi9UBSmZQZ0HG_lGtSA2wxqe8vfn7Y7Jw/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
             },
             error:function (err){
                 alert("Something Error"+err.err)
             }
    })
})


// function validateForm(){
//    var errors =  document.querySelectorAll(".error-area");

//    var nameInp = document.getElementById('name');
//    var emailInp = document.getElementById('email')
//    var subInp = document.getElementById('subject');
//    var mesInp = document.getElementById('message');

//    if(nameInp.value.length <=3){
//     errors[0].innerHTML = "Minimum 4 Letter requred"
//     return false;
//    }
//    if(emailInp.value.length < 1){
//     errors[1].innerHTML = "Email is encorrect"
//     return false;
//    }
//    if(subInp.value.length < 1){
//     errors[2].innerHTML = "Subject is short"
//     return false;
//    }
//    if(mesInp.value.length < 5){
//     errors[3].innerHTML = "Message is short is short"
//     return false;
//    }
//    return true
// }