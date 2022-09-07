import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Posts from "./containers/Posts/Posts";
import Todos from "./containers/Todos/Todos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Todos />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
