import React from 'react';
import ReactDom from 'react-dom';

function Greeting(){
    return(
        <div>
            <Person/>
            <p>this is my message</p>
        </div>
    );
}

const Person = () => <h2>Hello world</h2>;

ReactDom.render(<Greeting/>,document.getElementById('root'));




// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
