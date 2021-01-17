import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// styles
import './styles/font.styles.css';
import './styles/color.styles.css';
import './styles/index.css';
import './styles/custom-components.css';
import './styles/checkbox.styles.css';
import './styles/calendar.styles.css';
import './styles/chat.styles.css';
import './styles/ratings-statistic.styles.css';
import './styles/button.styles.css';
import './styles/sidebar.styles.css';
import './styles/footer.styles.css';
import './styles/scroll.styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
