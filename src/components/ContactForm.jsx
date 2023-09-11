import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function ContactForm(props) {


  const submitForm = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    window.alert("Your Messsage has been sent! Thanks for your interesting.")
  }

  return (
    <ScrollAnimation animateIn="slide-in-blurred-top">
      <form onSubmit={submitForm} className="d-flex flex-row ">
        <div className=" form-group mb-3 me-3" style={{ width: "350px" }}>
          <div className="">
            <label for="name">Name Surname:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="name"
              name="name"
              placeholder="John Doe"
            ></input>
            <label className="" for="email">
              e-mail address:
            </label>
            <input
              placeholder="blabla@gmail.com"
              type="email"
              className="form-control mb-3
            "
              id="email"
              name="email"
            ></input>
            <label for="lname">Your Message:</label>
            <textarea
              rows="4"
              type="text"
              className="form-control"
              id="message"
              name="message"
              placeholder="Do not hestitate to contact with me :)"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-info my-3">
          Send
        </button>
      </form>
    </ScrollAnimation>
  );
}
