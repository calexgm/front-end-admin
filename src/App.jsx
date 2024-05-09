import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { RouterProvider, Routes } from 'react-router-dom';

// project import
import Login from 'pages/authentication/login';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeCustomization>
        <Login> </Login>
    </ThemeCustomization>
  );
}

export default App
