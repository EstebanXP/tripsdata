import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Login from "./views/login/index";
import Protected from "./views/ProtectedRoutes/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<Protected token="asasdasd"></Protected>}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
