import emailjs from "emailjs-com";
import React from "react";
import { useFormik } from "formik";

export default function ContactUs() {

    const validate = values => {
        const errors = {};
    
        if (!values.name) {
          errors.name = "Required";
        } else if (values.name.length < 1) {
          errors.name = "Must be 2 characters or more";
        } else if (values.name.includes("@" || [1 - 9])) {
          errors.name = "can not contain @";
        }
        // problem on 12
    
        if (!values.email) {
          errors.email = "Required";
        } else if (values.email.length < 4) {
          errors.email = "Must be 5 characters or more";
        }
        if (!values.message) {
          errors.message = "Required";
        } else if (values.message.length < 10) {
          errors.message = "Must be 5 characters or more";
        }
    
        function sendEmail(e) {
          e.preventDefault();
          emailjs
            .sendForm(
              "gmail",
              "template_cg0nbbd",
              e.target,
              "ar-bqNSgRqL0fMb5t",
              "service_h4kwafi"
            )
            .then(
              result => {
                console.log(result.text);
              },
              error => {
                console.log(error.text);
              }
            );
          e.target.reset();
        }
    
        // return errors;
      };

      const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          subject: "",
          message: ""
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });
      console.log("Form values", formik.values);
  function sendEmail(e) {
    emailjs.init("ar-bqNSgRqL0fMb5t");
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_cg0nbbd",
        e.target,
        "ar-bqNSgRqL0fMb5t",
        "service_h4kwafi"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
              />
            </div>
            {formik.touched.subject && formik.errors.subject ? (
          <div className="error">{formik.errors.subject}</div>
        ) : null}
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                rows={4}
              ></textarea>
            </div>
            {formik.touched.message && formik.errors.message ? (
          <div className="error">{formik.errors.message}</div>
        ) : null}
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info button"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}