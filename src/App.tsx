import React from 'react';
import AppRouter from "./component/AppRouter";
import {Layout} from "antd";
import NavBar from "./component/NavBar";
import './App.css'

const App: React.FC = () => {
    return (
        <>
            <Layout className="layout">
                <NavBar/>
                <Layout.Content>
                    <AppRouter/>
                </Layout.Content>
            </Layout>
        </>
    );
};

export default App;