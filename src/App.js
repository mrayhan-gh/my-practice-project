import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";
import Service from './Components/Service/Service'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Visit from './Components/Visit/Visit';
import DarkMode from './Components/DarkMode/DarkMode';
import Links from './Components/Links/Links';

function App() {
// Route setting for different routes:
      const router = createBrowserRouter([ 
                  {
                    path: "/",
                    element: <Home></Home>,
                  },
                  {
                    path: "/Service",
                    element: <Service></Service>,
                  },
                  {
                    path: '/Contact',
                    element: <Contact></Contact>
                  },
                  {
                    path: '/Visit',
                    element: <Visit></Visit>
                  },
                  {
                    path: '/DarkMode',
                    element: <DarkMode></DarkMode>
                  },
                  {
                    path: '/Links',
                    element: <Links></Links>
                  },
                  {
                    path: "/About",
                    element: <About></About>,
                  },
            ]);

  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
        <NavBar></NavBar>
  </div>
  );
}

export default App;
