import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/route';
import './css/bootstrap.css';
import './css/fonts.css';
import './css/login-register.css';
import './css/main.css';
import './css/nice-select2.css';
import './css/normalize.css';
import './css/swiper-bundle.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
      /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;