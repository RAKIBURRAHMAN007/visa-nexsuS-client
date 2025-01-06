import React, { useContext } from 'react';
import { ThemeContext } from '../../provider/ThemeProvider';
import Banner from '../Banner/Banner';
import LatestVisa from '../LatestVisa/LatestVisa';
import AboutUs from '../AboutUs/AboutUs';
import Countrys from '../Countrys/Countrys';
import Success from '../OurSuccess/Success';
import Review from '../Review/Review';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
   
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
    
      <div className="flex justify-end pt-1 pr-3 pb-0 md:pr-9 lg:pr-12">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            />
          </svg>

          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleTheme}
            className="toggle theme-controller"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </div>

     
      <Banner />
      <LatestVisa />
      <AboutUs />
      <Countrys />
      <Success />
      <Review></Review>
    </div>
  );
};

export default Home;
