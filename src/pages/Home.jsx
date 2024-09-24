import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blog');
      setBlogs(response.data.data); 
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex flex-wrap px-[10%]">
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
