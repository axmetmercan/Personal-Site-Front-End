import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function WorkExperincesCard(props) {
  const [date, setDate] = useState({})

  useEffect(()=>{
   const a = dateConverter(props.experience.start_date)
    const b = dateConverter(props.experience.end_date)

    setDate({
      "start":a,
      "end":b,
    })

  },[])


  const dateConverter = (date)=>{
    const originalDateString = date;
    const originalDate = new Date(originalDateString);
    
    const day = originalDate.getDate();
    const month = originalDate.getMonth() + 1; // Months are zero-based, so add 1
    const year = originalDate.getFullYear();
    
    // Format day and month with leading zeros if needed
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');
    
    // Create the formatted date string in the desired format (e.g., "dd/mm/yyyy")
    return `${formattedDay}/${formattedMonth}/${year}`;
  }
  
  return (
    <div className="mx-4 col-5 my-4 work-experince">
      <ScrollAnimation animateIn="slide-in-fwd-top">
        <div className="card shadow-lg card-color ">
          <div className="card-header fw-bold">
            {props.experience.company_title}
            <a href={props.experience.company_website} target="_blank">
              <span class="ri-external-link-line text-decoration-none"></span>
            </a>
          </div>
          <div className="p-3 bold">
            <div className="card-title fw-normal">{props.experience.position}</div>
            <div className="card-text fw-light">{props.experience.description}</div>
          </div>
          <div className="card-footer fw-bold text text-center">
          {date.start} - {date.end}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
