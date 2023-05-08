import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='flex justify-center mt-20'>
        <div className='w-[80%] bg-white'>
            <div>
              <Header />
            </div>
            {children}
        </div>
    </div>
  )
}

export default Layout