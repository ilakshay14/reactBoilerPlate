import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyle from './theme/globalStyles';
import store from './reducers/store';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <Router>
            <App />
        </Router>

    </Provider>,
    document.getElementById('root'),
);
