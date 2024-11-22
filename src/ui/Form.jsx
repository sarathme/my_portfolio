import toast from "react-hot-toast";
import styles from "./Form.module.css";
import InputGroup from "./InputGroup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";
import { useState } from "react";

function validate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "*Please provide a name";
  }
  if (!values.email) {
    errors.email = "*Please provide an email";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = "*Please provide a valid email";
  }
  if (!values.message) {
    errors.message = "*Please write a message to me";
  }

  return errors;
}

function Form() {
  const [isSending, setIsSending] = useState(false);
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validate,
    onSubmit: (values) => {
      setIsSending(true);
      const formData = {
        user_name: values.name,
        user_email: values.email,
        message: values.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(() => toast.success("Email sent successfully"))
        .catch(() => toast.error("Error while sending email. Please try again"))
        .finally(() => setIsSending(false));
    },
  });

  return (
    <form
      className={styles.contact_form}
      noValidate
      onSubmit={formik.handleSubmit}>
      <InputGroup
        label="Your Name"
        id="name"
        error={formik.errors.name}
        isTouched={formik.touched.name}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </InputGroup>
      <InputGroup
        label="Email Address"
        id="email"
        error={formik.errors.email}
        isTouched={formik.touched.email}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@email.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </InputGroup>
      <InputGroup
        label="Your Message"
        id="msg"
        error={formik.errors.message}
        isTouched={formik.touched.message}>
        <textarea
          type="text"
          id="msg"
          name="message"
          placeholder="Your message"
          rows={5}
          cols={20}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
      </InputGroup>
      <button
        type="submit"
        disabled={
          !formik.isValid ||
          isSending ||
          !(formik.values.name && formik.values.email && formik.values.message)
        }>
        {isSending ? <Spinner /> : "Send"}
      </button>
    </form>
  );
}

export default Form;
