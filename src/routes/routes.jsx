import LoginPage from "../pages/Login";

const router = [

  // Login & Register
  { path: '/', element: <h1 className="text-xl">Welcome KneeCheck App</h1>},
  { path: '/login', element: <LoginPage />},

  
];

export default router;