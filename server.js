// Purpose: server for portfolio website

// define dependencies & variables

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;
const prompt = require("./prompt");
const apiKey = process.env.API_KEY;
const email = process.env.MAIL;
const password = process.env.MAIL_PW;
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
console.log(prompt);

//define transporter for mail sending with nodemailer

let transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: email,
    pass: password,
  },
});

// define api request for chatbot & frontend communication

app.get("/ask", async (req, res) => {
  const standardPrompt = prompt;
  const question = req.query.q;

  try {
    const gpt3Response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `${standardPrompt}: ${question}`,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(gpt3Response.data);

    res.json(gpt3Response.data.choices[0].text.trim());
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in processing request");
  }
});

// sending mail from contact form

app.post("/form", async (req, res) => {
  console.log(req.body);

  let mailOptions = {
    from: email,
    to: email,
    subject: `New message from your portfolio from ${req.body.name}`,
    text: `Name: ${req.body.name}
           Email: ${req.body.email}
           Subject: ${req.body.select}
           Message: ${req.body.message}
           Checkbox: ${req.body.checkbox}`,
  };

  let mailRedirect = {
    from: email,
    to: req.body.email,
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
        height: 40px;
        width: 40px;
        
      }
    </style>
  </head>
  <body>
    <h2>Hello ${req.body.name}, thanks for reaching out!</h2>
    <p>I've received your email and will get back to you as soon as possible. Enjoy your day!</p>
    <p>Best regards, Carlo</p>

    <br />

    <img src="https://i.ibb.co/yBT69K7/carlo-1.png" alt="carlo-1" border="0">
    


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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Error, email not sent" });
    } else {
      console.log("Email sent: " + info.response);
      if (req.body.checkbox === true) {
        transporter.sendMail(mailRedirect, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).json({ message: "Error, email not sent" });
          } else {
            console.log("Email sent: " + info.response);
            res.json({ message: "Success, emails sent!" });
          }
        });
      }
    }
  });
});

// start server & check if it's working

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
//   console.log("everything is working fine just like it should be");
// });

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  console.log("everything is working fine just like it should be");
});
