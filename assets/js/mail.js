const firebaseConfig = {
  apiKey: "AIzaSyDft2XPyTBxw8Cm_GE14K0Kg9s-cpq-ikk",
  authDomain: "contactform-f7188.firebaseapp.com",
  databaseURL: "https://contactform-f7188-default-rtdb.firebaseio.com",
  projectId: "contactform-f7188",
  storageBucket: "contactform-f7188.appspot.com",
  messagingSenderId: "671019388303",
  appId: "1:671019388303:web:3eae79348df746c2accffa",
  measurementId: "G-LC2P8MGL1L",
};

firebase.initializeApp(firebaseConfig);

// reference your database

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("ContactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var mobile = getElementVal("mobile");
  var subject = getElementVal("subject");
  var comment = getElementVal("comment");

  console.log(name, email, mobile, subject, comment);

  saveMessages(name, email, mobile, subject, comment);
  alert("Your form was submitted successfully.");
}

const saveMessages = (name, email, mobile, subject, comment) => {
  var newContact = contactFormDB.push();

  newContact.set({
    name: name,
    email: email,
    mobile: mobile,
    subject: subject,
    comment: comment,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
