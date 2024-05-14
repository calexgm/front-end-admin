import { useState } from 'react'

import { RouterProvider, BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

// project import

import router from 'routes';


import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
      {/* <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        {!isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes> */}
    </ThemeCustomization>
  );
}

export default App
