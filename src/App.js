import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import Posts from "./pages/Posts/Posts";
import Todos from "./pages/Todos/Todos";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index element={<Todos />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
