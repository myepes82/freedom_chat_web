// App.js

import React from 'react';
import Footer from './layouts/footer/Footer';
import Sidenav from './layouts/sidenav/Sidenav';
import './App.css';
import Navbar from './layouts/navbar/Navbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen content w-100">
      <div className='mt-5 flex flex-row shadow-lg rounded-lg flex-grow main-content max-w-[1700px] max-h-[800px] mx-auto'>
        <main className="flex-grow w-3/5">
          <Navbar/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe impedit vero explicabo doloribus
            blanditiis quos, obcaecati voluptatum laboriosam laudantium molestias dolore optio,
            minus, repudiandae quo! Illum ipsa molestias quia accusantium.</p>
        </main>
        <Sidenav/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
