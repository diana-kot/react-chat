import { Auth, Home } from "@pages";

import { Route, Routes } from "react-router-dom";
import CheckEmailInfo from './pages/Auth/components/CheckEmailInfo'
import { LoginForm, RegisterForm } from "@modules";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/signup/verify" element={<CheckEmailInfo/>} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h2>404</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
