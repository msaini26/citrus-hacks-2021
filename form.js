// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAkFFUaC0X4KgS8k7gW-H-wBKQlqUlbsWQ",
  authDomain: "citrushacks-2021.firebaseapp.com",
  projectId: "citrushacks-2021",
  storageBucket: "citrushacks-2021.appspot.com",
  messagingSenderId: "34424341717",
  appId: "1:34424341717:web:00459e511ec24f110e0e5c",
  measurementId: "G-8TN8238QXC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("Signed Up");
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
  alert("Signed In");
    window.location.pathname = "http://127.0.0.1:5500/random.html";
    // Fix path after website
}

function signOut() {
  auth.signOut();
  alert("Signed Out");
}
