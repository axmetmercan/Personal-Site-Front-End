import React from "react";

export default function NavbarUrls(props) {
  //Api can feed this

  const pageTitles = [
    {
      id: "1",
      name: "Home",
      icon: "ri-home-line",
      url: "#home",
    },
    {
      id: "2",
      name: "My Projects",
      icon: "ri-folder-4-line",
      url: "#my-projects",
    },
    {
      id: "5",
      name: "Blog",
      icon: "ri-book-3-line",
      url: "#blog",
    },
    {
      id: "3",
      name: "About",
      icon: "ri-profile-line",
      url: "#about",
    },
    {
      id: "4",
      name: "Contact",
      icon: "ri-customer-service-line",
      url: "#contact",
    },
  ];

  const title = pageTitles.map((e) => {
    return (
      <a
        href={e.url}
        key={e.id}
        className={`text-decoration-none  ${props.theme ? "text-light":"text-dark"} my-2 mx-2 fs-5 text-decoration-none`}
      >
        <i className={e.icon}> </i>
        {e.name}
      </a>
    );
  });

  return <div className="d-flex flex-wrap">{title}</div>;
}
