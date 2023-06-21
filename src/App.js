import './App.css';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Service from './Components/Service/Service'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Visit from './Components/Visit/Visit';
import DarkMode from './Components/DarkMode/DarkMode';
import Links from './Components/Links/Links';
import Friends from './Components/Friends/Friends';
import MyElement from './Components/MyElement/MyElement'
import FriendDetail from './FriendDetail/FriendDetail';

function App() {
// Route setting for different routes:
      const router = createBrowserRouter([ 
                  {
                    path: "/",
                    element: <Home></Home>,
                    children: [
                      {
                        path: "/Friends",
                        element: <Friends></Friends>,
                        loader: async () => {
                          return fetch('https://jsonplaceholder.typicode.com/users/1/users')
                        }
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
                      },   {
                        path: "/About",
                        element: <About></About>,
                      },
                      {
                        path: '/friend/:friendId',
                        loader: async ({params}) => {
                              console.log(params);
                              return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
                        },
                        element: <FriendDetail></FriendDetail>
                      },
                      
                    ]
                  },
                  {
                    path: '*',
                    element: <div>404</div>
                  }
                  
               
            ]);

  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
