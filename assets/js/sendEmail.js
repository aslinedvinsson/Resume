
function sendMail(contactForm) {
    var templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    };

    emailjs.init("QnVCzoo1nVYM2sRIN");
    console.log('function run');

    emailjs.send('service_odtlaxd', 'template_vrtj1dt', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

    return false;  // To block from loading a new page
}