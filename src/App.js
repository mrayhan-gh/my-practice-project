import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";
import Service from './Components/Service/Service'
import About from './Components/About/About';


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
