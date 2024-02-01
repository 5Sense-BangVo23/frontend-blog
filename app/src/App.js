import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes';
import { AuthProvider } from './Components/Provider/AuthProvider/AuthProvider';

function App() {
  return (
  <AuthProvider> {/* Wrap with AuthProvider */}
      <div>
        <RouterProvider router={router} />
      </div>
  </AuthProvider>
  );
}

export default App;
