// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "<yourApiKey>",
  authDomain: "<yourAuthDomain>",
  projectId: "<yourProjectId>",
  storageBucket: "<yourStorageBucket>",
  messagingSenderId: "<yourMessagingSenderId>",
  appId: "<yourAppId>",
  measurementId: "<yourMeasurementId>",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for submit click
document
  .getElementById("contactForm")
  .addEventListener("submit", submitClicked);

// This Function submits the form
function submitClicked(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  saveMessage(name, email, phone, message);

  document.querySelector(".alert").style.display = "block"; // Tell user message was sent

  setTimeout(function () {
    // Hide alert after 2 seconds
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  document.getElementById("contactForm").reset(); // Clear Form
}

// Save Message to Firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}
