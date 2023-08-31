const nodemailer = require("nodemailer");

const email = process.env.MAIL;
const password = process.env.MAIL_PW;

let transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: email,
    pass: password,
  },
});

module.exports = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, email: userEmail, select, message, checkbox } = req.body;

      // Sending mail to yourself
      let mailOptions = {
        from: email,
        to: email,
        subject: `New message from your portfolio from ${name}`,
        text: `Name: ${name}
        Email: ${userEmail}
        Subject: ${select}
        Message: ${message}
        Checkbox: ${checkbox}`,
      };

      await transporter.sendMail(mailOptions);

      // Sending mail back to the sender, if they opted for it
      if (checkbox) {
        let mailRedirect = {
          from: email,
          to: userEmail,
          subject: `Thank you for reaching out!`,
          text: `Hello ${req.body.name}, thanks for reaching out! 
          I've received your email and will get back to you as soon as possible. Enjoy your day!. 
      Best regards, Carlo
                   
      
      Your message:
                   ${req.body.message}
      
      Your email:
                    ${req.body.email}
                   `,
          html: ` 
    <html lang="en">
  <head>
    <style>
      h2 {
        font-size: 1.1rem;
        font-weight: bold;
      }

      h3 {
        font-size: 0.8rem;
        font-style: italic;
        font-weight: bold;
      }

      p {
        font-size: 0.9rem;
        font-weight: regular;
      }

      .text-below { 
        font-size: 0.7rem;
      }

      .img {
        height: 40px !important;
        width: 40px !important;
        
      }
    </style>
  </head>
  <body>
    <h2>Hello ${req.body.name}, thanks for reaching out!</h2>
    <p>I've received your email and will get back to you as soon as possible. Enjoy your day!</p>
    <p>Best regards, Carlo</p>

    <br />

    <img src="https://i.ibb.co/yBT69K7/carlo-1.png" alt="carlo-1">
    


    <br/>
    <br/>
    <h3>Your email:</h3>
    <p class="text-below">${req.body.email}</p>

    <h3>Your message:</h3>
    <p class="text-below">${req.body.message}</p>

    </body>
</html>
    `,
        };

        await transporter.sendMail(mailRedirect);
      }

      res.status(200).json({ message: "Success, emails sent!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error, email not sent" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
