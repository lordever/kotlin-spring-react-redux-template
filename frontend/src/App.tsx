import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <Provider store={store}>
                    <RouterProvider router={router}/>
                </Provider>
            </React.StrictMode>
        </div>
    );
}

export default App;
