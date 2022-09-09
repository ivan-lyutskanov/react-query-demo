import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import CustomLoadingSpinner from "./components/shared/CustomLoadingSpinner/CustomLoadingSpinner";
import Posts from "./pages/Posts/Posts";
import Todos from "./pages/Todos/Todos";

import { useLoadingSpinner } from "./utils/hooks/useLoadingSpinner";

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { isLoading } = useLoadingSpinner();

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index element={<Todos />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </MainLayout>
      {isLoading && <CustomLoadingSpinner />}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
