firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
//window.location("index.html");
    //document.getElementById("user_div").style.display = "block";
   // document.getElementById("login_div").style.display = "none";
    document.getElementById("login_div").style.display="none";
    // var anchor=document.getElementById("login_an");
    // anchor.innerHTML="LogOut";


    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
     // document.getElementById("login_an").innerHTML=email_id;
     // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

//document.getElementById("user_para").
// document.getElementById("user_para").onclick = function () {
//         location.href = "index.html";
//     };
//window.location("index.html");
//location.href="index.html";
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
