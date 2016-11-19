var nodemailer = require('nodemailer');
var smtpConfig = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USERNAME,
		pass: process.env.EMAIL_PASSWORD
	}
};
var transporter = nodemailer.createTransport(smtpConfig);

module.exports = {
  send_email: function(req, res, status){
		User.find({notification: true}).exec(function(err, users) {
			if (err){
				console.log("There are no users to be notified");
        console.log(err);
			}else{
				try{
					users.forEach(function(user){
							var mailOptions = {
								from: '"Jemuran Server" <server@jemuran.com>',
								to: user.email,
								subject: "Notification for your Jemuran",
								text: "Your jemuran has been set to ",
								html: "<h3>Hello " + user.nama +"</h3><p>Your Jemuran has been set to " + status + "</p>"
							};

							transporter.sendMail(mailOptions, function(error, info){
								if (error){
									console.log("Message to " + user.email +" error");
                  console.log(error);
								}else{
									console.log("Email to " + user.email + " successful");
                  console.log(error);
								}
							});
					});
				}catch(error){
					  console.log("Error happened in sending process");
            console.log(error);
				}
			}
		});
	}
};
