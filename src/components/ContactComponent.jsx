import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ContactComponent(props) {
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
      <div  key={item.id} className={`bounce-in-bottom-1 px-3 sun-size  d-flex flex-column justify-content-center align-items-center `}>
        <a href={item.value} target="_blank">
          <i className={item.icon_class}></i>
        </a>
      </div>
    );
  });

  return (
    <div>
      <div
        className={`d-flex flex-row flex-wrap justify-content-center align-items-center ${
          props.theme ? "opposite-color" : ""
        }`}
      >
       {Contact}

        </div>
      <br></br>
    </div>
  );
}
