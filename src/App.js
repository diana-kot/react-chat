import { Auth, Home } from "@pages";

import { Route, Routes } from "react-router-dom";

import { LoginForm, RegisterForm } from "@modules";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h2>404</h2>} />
        </Route>
      </Routes>
      <Auth />
    </div>
  );
}

export default App;
