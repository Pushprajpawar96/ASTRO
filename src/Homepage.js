import React, { useEffect, useState } from 'react';
import { Box, Center, Skeleton, SkeletonText, SimpleGrid } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import './Homepage.css'


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  

  // Simulating data fetching from an API
  useEffect(() => {
    setTimeout(() => {
      const dummyData = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
      ];
      setData(dummyData);
      setLoading(false);
    }, 2000);
  }, []);

  return (

           < >
      <header>
    <h1>Welcome to Astrology World</h1>
  </header>
  
  <nav>
    <ul>
      <li><Link to="#">Home</Link></li>
      <li><Link to="#">About</Link></li>
      <li><Link to="#">Services</Link></li>
      <li><Link to="#">Horoscopes</Link></li>
      <li><Link to="#">Contact</Link></li>
    </ul>
  </nav>


    <section id="about">
      <h2>About Us</h2>
      <p>Welcome to Astrology World, the place where you can explore the secrets of the stars and uncover your destiny. Our team of experienced astrologers is here to guide you on your journey.</p>
    </section>
    
    <section id="services">
      <h2>Our Services</h2>
      <ul>
        <li>Personalized Birth Charts</li>
        <li>Daily Horoscope Readings</li>
        <li>Compatibility Analysis</li>
        <li>Relationship Guidance</li>
        <li>Career Advice</li>
      </ul>
    </section>
    
    <section id="horoscopes">
      <h2>Horoscopes</h2>
      <div class="horoscope-card">
        <h3>Aries</h3>
        <p>Today, you will encounter unexpected opportunities. Take advantage of them and trust your instincts.</p>
      </div>
      <div class="horoscope-card">
        <h3>Taurus</h3>
        <p>It's a good day for making financial decisions. Use your practical sense to secure your future.</p>
      </div>
      {/* <!-- Add more horoscope cards for other zodiac signs --> */}
    </section>
    
  
      <h2>Contact Us</h2>
      
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      <form/>
    
  
  
  <footer>
    <p>&copy; 2023 Astrology World. All rights reserved.</p>
  </footer>



   
    
</>
  
  );
          };

export default HomePage;
