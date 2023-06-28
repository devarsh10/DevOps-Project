//Download PDF code.

document.getElementById('downloadBrochure').addEventListener('click', function() {
  // Replace "path_to_your_pdf.pdf" with the actual path to your PDF file
  var pdfFile = '/images/S Square Technologies Brochure.pdf';

  var link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Brochure.pdf';
  link.target = '_blank';

  // Dispatching a click event on the link
  var event = new MouseEvent('click');
  link.dispatchEvent(event);
});

document.getElementById('downloadResumeForm').addEventListener('click', function() {
  // Replace "path_to_your_pdf.pdf" with the actual path to your PDF file
  var pdfFile = '/images/RESUME_CHECKLIST.pdf';

  var link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Resume Form.pdf';
  link.target = '_blank';

  // Dispatching a click event on the link
  var event = new MouseEvent('click');
  link.dispatchEvent(event);
});

document.getElementById('downloadCredentialForm').addEventListener('click', function() {
  // Replace "path_to_your_pdf.pdf" with the actual path to your PDF file
  var pdfFile = '/images/Credential.pdf';

  var link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Credentials.pdf';
  link.target = '_blank';

  // Dispatching a click event on the link
  var event = new MouseEvent('click');
  link.dispatchEvent(event);
});




//Database Code.
const firebaseConfig = {
    apiKey: "AIzaSyBI1GxKCGPO-2lDRQOo4Li0Nd2UEirEcfo",
    authDomain: "contactform-s2tech.firebaseapp.com",
    databaseURL: "https://contactform-s2tech-default-rtdb.firebaseio.com",
    projectId: "contactform-s2tech",
    storageBucket: "contactform-s2tech.appspot.com",
    messagingSenderId: "209762313566",
    appId: "1:209762313566:web:30a9437365f18e4a5ddbcf"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("candidateDB");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("message");
    
    console.log(name, emailid, msgContent);
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };