import React, {useEffect, useState} from "react";
import ContactForm from "../components/ContactForm";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";

export default function Contact(props) {

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const res = await axios.get(apiUrl + "contact/");
    setContacts(res.data);
  };

  const Contact =contacts.map( (item) => {
    return (
      <div  key={item.id} className={`px-3  d-flex flex-column justify-content-center align-items-center `}>
        <a href={item.value} target="_blank">
          <i className={item.icon_class}>{item.title}</i>
        </a>
      </div>
    );
  });


  return (
    <div
      id="contact"
      className="d-flex flex-column align-items-center justify-content-center mt-5"
    >
      <ScrollAnimation animateIn="slide-in-right">
        <p className="text text-center mb-5 fs-2">Contact Information</p>

        <p className="text text-center mb-5 fs-5">
          Feel free to fontact with me
        </p>
      </ScrollAnimation>

      <div>
        <div className="d-flex justify-content-center ">
          <ContactForm theme={props}></ContactForm>
        </div>

        <div
          style={{ width: "fit-content" }}
          className={`d-flex sun-size flex-row  flex-wrap justify-content-start align-items-start m-5 ${
            props.theme ? "opposite-color" : ""
          }`}
        >
          {/* <i class={`ri-github-line ease-in-out mx-3`}>Github</i>
          <i class={`ri-linkedin-box-fill ease-in-out mx-3`}>Linkedin</i>
          <i class="ri-instagram-fill mx-3">Instagram</i>
          <i class="ri-facebook-box-fill mx-3">Facebook</i>
          <i class="ri-smartphone-fill mx-3">Mobile Phone</i>
          <i class="ri-mail-fill mx-3">Mail</i> */}
          {Contact}
        </div>
      </div>
      <p></p>

      <hr></hr>
    </div>
  );
}
