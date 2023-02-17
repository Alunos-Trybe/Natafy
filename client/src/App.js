import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import {Routes} from './routes/index'


const router = createBrowserRouter(Routes);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;