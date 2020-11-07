import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './theme/globalStyles';

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);