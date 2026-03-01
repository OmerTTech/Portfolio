// src/components/ContactSection.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import toast from "react-hot-toast";
import ContactData from "./ContactData.jsx"
import { useSelector } from "react-redux";
import translations from "../../Utils/translations";

const ContactMe = () => {
  const {MyPhone, MyPhoneLink, MyEmail, MyEmailLink, MyLocation} = ContactData
  const lang = useSelector((state) => state.language.lang);
  const t = translations[lang];
  
  const initialValues = {
    name: "",
    email: "",
    project: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(lang === "az" ? "Ad boş qala bilməz" : "Name field cannot be left blank"),
    email: Yup.string()
      .email(lang === "az" ? "Düzgün email daxil edin" : "Please enter a valid email address")
      .required(lang === "az" ? "Email boş qala bilməz" : "Email field cannot be left blank"),
    project: Yup.string().required(
      lang === "az" ? "Mövzu boş qala bilməz" : "Project/Subject field cannot be left blank"
    ),
    message: Yup.string()
      .min(10, lang === "az" ? "Mesaj ən az 10 simvol olmalıdır" : "Message must be at least 10 characters")
      .required(lang === "az" ? "Mesaj boş qala bilməz" : "Message field cannot be left blank"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form verileri:", values);
    toast.success(lang === "az" ? "Mesaj göndərildi!" : "Message sent successfully!");
    resetForm();
  };

  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 text-gray-800 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <h1 className="text-4xl font-[600]">{t.contact.title}</h1>
        <p className="text-sm text-dark-hover dark:text-morelight-hover">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-12 max-w-6xl mx-auto rounded-lg p-6 md:p-10">
        <div className="lg:w-1/3 flex flex-col gap-6 mb-8 lg:mb-0">
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-main" />
            <div>
              <h3 className="text-lg font-medium">{lang === "az" ? "Zəng et" : "Call Me"}</h3>
              <a
                href={MyPhoneLink}
                className="text-sm/1 !text-supdark-hover dark:!text-suplight-hover"
              >
                {MyPhone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-main" />
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <a
                href={MyEmailLink}
                className="text-sm !text-supdark-hover dark:!text-suplight-hover"
              >
                {MyEmail}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-main" />
            <div>
              <h3 className="text-lg font-medium">{lang === "az" ? "Ünvan" : "Location"}</h3>
              <p className="text-sm text-supdark-hover dark:text-suplight-hover">
                {MyLocation}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(
              { isSubmitting, errors, touched }
            ) => (
              <Form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder={t.contact.name}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-morelight-hover
                        ${
                          touched.name && errors.name
                            ? "border-red-500"
                            : "border-gray-400 dark:border-gray-600"
                        }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm pt-2"
                    />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder={t.contact.email}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-morelight-hover
                        ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-400 dark:border-gray-600"
                        }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm pt-2"
                    />
                  </div>
                </div>
                <div>
                  <Field
                    type="text"
                    name="project"
                    placeholder={lang === "az" ? "Mövzu" : "Project"}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-morelight-hover
                        ${
                          touched.project && errors.project
                            ? "border-red-500"
                            : "border-gray-400 dark:border-gray-600"
                        }`}
                  />
                  <ErrorMessage
                    name="project"
                    component="div"
                    className="text-red-500 text-sm pt-2"
                  />
                </div>
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder={t.contact.message}
                    rows="6"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-morelight-hover resize-y
                        ${
                          touched.message && errors.message
                            ? "border-red-500"
                            : "border-gray-400 dark:border-gray-600"
                        }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm pt-2"
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  className="!capitalize !p-4 !rounded-lg !text-lg !font-[500] !bg-light-hover hover:!bg-dark-hover ease transition-colors duration-300"
                  endIcon={<FaPaperPlane />}
                  disabled={isSubmitting}
                >
                  {t.contact.send}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
