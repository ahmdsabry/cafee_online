var exit=document.getElementById("exit");
exit.addEventListener("click",()=> {
location.replace("login.html");
});
//  nav to section 
var link=document.querySelectorAll('.nav-links');
link.forEach((items)=> {
    items.addEventListener("click",()=> {
var el=document.getElementById(items.getAttribute("data-link"));
el.scrollIntoView({behavior:"smooth", block:"start"});
})
});


//var ok=document.getElementById("ok");
//var contact=document.getElementById("contact");

function reviews() {
    var user=document.getElementById("user").value;
    var email=document.getElementById("email").value;
 var home=document.getElementById("home");
    if ((user=="") || (email=="")) {
            swal("failed"," your reviewed is not send  try again ","error");
    }
     else{
  swal("great job"," your reviewed is send successfully","success");
 home.scrollIntoView({behavior:"smooth",block:"start"});   
}
}

var breakfast=document.getElementById("breakfast");
breakfast.addEventListener("click",()=> {
    window.open("breakfast.html");
});



var hotdrinks=document.getElementById("hotdrinks");
hotdrinks.addEventListener("click",()=> {
window.open("hot drinks.html");
});

var colddrinks=document.getElementById("colddrinks");
colddrinks.addEventListener("click",()=> {
window.open("cold drinks.html");
});


    function btn1() {
        var but1=document.getElementById("but1");
        but1.addEventListener("click",()=> {
        Swal.fire({
        imageUrl: "images/offer.png",
        title: "french toast roll + cappuccino",
        text: "Do you buy this offer ?",
        imageWidth: 350,
        imageHeight: 200,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true,
        icon: "question",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "your offer has been  submitted",
            "We will send you all the details via gmail ",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(" your order has been  Canceled", "", "error");
        }
      });
    });    
}


//ofer2
function btn2() {
    var but2=document.getElementById("but2");
    but2.addEventListener("click",()=> {
    Swal.fire({
    imageUrl: "images/offer1.jpg",
    title: "Halloumi and Zaatar sandwich + mocha coffee",
    text: "Do you buy this offer ?",
    imageWidth: 350,
    imageHeight: 200,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    showCancelButton: true,
    showCloseButton: true,
    icon: "question",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "your offer has been  submitted",
        "We will send you all the details via gmail ",
        "success"
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(" your order has been  Canceled", "", "error");
    }
  });
});    
}






function btn3() {
    var but3=document.getElementById("but3");
    but3.addEventListener("click",()=> {
    Swal.fire({
    imageUrl: "images/offer2.jpg",
    title: "Oats with berries + Strawberry milkshake",
    text: "Do you buy this offer ?",
    imageWidth: 350,
    imageHeight: 200,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    showCancelButton: true,
    showCloseButton: true,
    icon: "question",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("your offer has been  submitted",   "We will send you all the details via gmail ",  "success" );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(" your order has been  Canceled", "", "error");
    }
  });
});    
}





