import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'styles/index.css';
import App from './App';
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>
);