// var express = require('express');
// var app = express();
// var nodeMailer = require('nodemailer');
// var _ = require('underscore');
// var bodyParser = require('body-parser');

// const PORT = process.env.PORT || 3000;
// const env = process.env.NODE_ENV || 'develop';

// const path = require("path");
// var envFile = require('node-env-file');



// process.env.NODE_ENV = process.env.NODE_ENV || 'develop';

//   try {
//     envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
//   } catch (e) {

//   }


// app.use(bodyParser.json());

// app.post('/contact/email', function(req, res) {
// 	var body = _.pick(req.body, 'name', 'email', 'subject', 'message');

//  	let transporter = nodeMailer.createTransport({
// 		  service: 'gmail',
//           secure: false,
//           auth: {
//               user: process.env.SEND_EMAIL_ACCOUNT,
//               pass: process.env.SEND_EMAIL_ACCOUNT_PASSWORD
//           }
//       });

//  	console.log(body.email);
//  	const from = body.name + ' <' + body.email + '>';

// 	let mailOptions = {
// 	  from: body.email,
// 	  to: process.env.TO_EMAIL_ADDRESS,
// 	  subject: body.subject, 
// 	  html: '<p><b>Email From:</b> '+ body.email +'</p><p>'+ body.message +'</p>'
// 	};

// 	transporter.sendMail(mailOptions, (error, info) => {
// 	  if (error) {
// 	      return console.log(error);
// 	  }
// 	  console.log('Message %s sent: %s', info.messageId, info.response);
// 	      res.render('index');
// 	  });

//  	res.status(200).send();

// });

// app.use(express.static('public'));

// app.listen(PORT, function() {
// 			console.log('express listening on port ' + PORT + '!');
// 		});