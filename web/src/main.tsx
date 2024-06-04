import ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Router>
      <App />
    </Router>
  );
}
