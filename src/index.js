import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import GlobalStyle from './theme/globalStyles';

ReactDOM.render(
    <>
        <GlobalStyle />
        <Router>
            <App />
        </Router>

    </>,
    document.getElementById('root'),
);
