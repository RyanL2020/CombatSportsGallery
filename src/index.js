import React from "react";
import ReactDOM from 'react-dom';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider  store={store}>,    
    <App />, 
    </Provider>, 
    document.querySelector('#root'));
