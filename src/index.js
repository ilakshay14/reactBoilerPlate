import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './theme/globalStyles';

import { Provider } from 'react-redux';
import store from './reducers/store';


ReactDOM.render(
    <>
        <GlobalStyle />
        <Provider store={store} >
            <App />
        </Provider>
    </>,
    document.getElementById('root')
);