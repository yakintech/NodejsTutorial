var nodemailer = require('nodemailer');
const express = require('express')
const app = express()
 
app.post('/signup',function(req,res){
    var email = req.query.email;
    var code = "568253";

    SendActivicationCode(email,code);

    res.status(200).send("EMail başarılı");
});




var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bilgebatman19@gmail.com',
      pass: 'Superman!35'
    }
  });
  

  
  //cajecol702@reptech.org
  function SendActivicationCode(toemail,code){

    var mailOptions = {
        from: 'bilgebatman19@gmail.com',
        to: toemail,
        subject: 'Aktivasyon Mail',
        text: 'Aktivasyon kodunuz: ' + code
      };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  }

  app.listen(1925);
