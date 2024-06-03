import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./Components/Navigation";
import {Home, Facilities, Rooms, Contact, Error} from "./Pages/pageImporter"
const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/facilities",
        element: <Facilities />
      },
      {
        path: "/rooms",
        element: <Rooms />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
