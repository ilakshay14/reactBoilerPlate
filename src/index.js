import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './theme/globalStyles';

import Amplify from 'aws-amplify';
import AWSCONFIG from './aws-exports';

import { Provider } from 'react-redux';
import store from './reducers/store';


Amplify.configure(AWSCONFIG);

ReactDOM.render(
    <>
        <GlobalStyle />
        <Provider store={store} >
            <App />
        </Provider>
    </>,
    document.getElementById('root')
);