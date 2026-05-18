import nodemailer
  from "nodemailer";

/*
=====================================
SEND CONTACT ENQUIRY
=====================================
*/

export const sendContactEnquiry =
  async (req, res) => {

    try {

      /*
      =====================================
      GET DATA
      =====================================
      */

      const {

        name,

        email,

        phone,

        message

      } = req.body;

      /*
      =====================================
      VALIDATION
      =====================================
      */

      if (

        !name ||

        !email ||

        !phone ||

        !message

      ) {

        return res.status(400).json({

          success: false,

          message:
            "All fields are required"
        });
      }

      /*
      =====================================
      TRANSPORTER
      =====================================
      */

      const transporter =
        nodemailer.createTransport({

          service: "gmail",

          auth: {

            user:
              process.env
                .EMAIL_USER,

            pass:
              process.env
                .EMAIL_PASS
          }
        });

      /*
      =====================================
      SEND EMAIL
      =====================================
      */

      await transporter.sendMail({

        from:
          process.env
            .EMAIL_USER,

        to:
          process.env
            .EMAIL_USER,

        subject:
          "New Contact Enquiry - EstateHub",

        html: `

          <div
            style="
              font-family: Arial;
              padding: 20px;
            "
          >

            <h2>
              New Contact Enquiry
            </h2>

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone}
            </p>

            <p>
              <strong>Message:</strong>
              ${message}
            </p>

          </div>
        `
      });

      /*
      =====================================
      RESPONSE
      =====================================
      */

      res.status(200).json({

        success: true,

        message:
          "Message sent successfully"
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Failed to send message"
      });
    }
  };