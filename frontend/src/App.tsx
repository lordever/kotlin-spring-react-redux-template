import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {AppRouter} from "./routes/app-router";


function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <Provider store={store}>
                    <RouterProvider router={AppRouter}/>
                </Provider>
            </React.StrictMode>
        </div>
    );
}

export default App;
