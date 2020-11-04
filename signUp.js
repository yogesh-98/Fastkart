
function signUp(){
	 var email = document.getElementById("email_fiel").value;
  var pass = document.getElementById("password_fiel").value;

if(email.length!=0 && pass.length!=0){
firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
location.href="index.html";
    // firebase.auth().createUserWithEmailAndPassword(email, pass.then(function(user){
    //     console.log('everything went fine');
    //     console.log('user object:' + user);
    //     alert('Sign in');
    //     //you can save the user data here.
    // }).catch(function(error) {
    //     console.log('there was an error');
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorCode + ' - ' + errorMessage);
    // }));

} else {
    console.log('fill in both fields');
}  

}

