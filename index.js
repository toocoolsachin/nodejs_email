const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '', // your username
       pass: ''  // your password
    }
});

const message = {
    from: 'from@test.com', // Sender address
    to: 'to@test.com',         // List of recipients
    subject: 'Subject', // Subject line
    text: 'Hi, How are you?' // Plain text body
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});