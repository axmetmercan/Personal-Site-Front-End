import React, { useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

export default function ProjectCategories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const res = await axios.get(apiUrl + "project-categories/");
    setCategories(res.data);
  };

  const Categories = categories.map((item) => {
    return <p key={item.id} className='text-center px-2 border rounded-5 mx-2  py-3 button-hover'> {item.title}</p>
  });
  return (
    <ScrollAnimation animateIn="puff-in-center" className='fs-6 d-flex flex-row flex-wrap justify-content-center'>
        {Categories}
    </ScrollAnimation>
  )
}
