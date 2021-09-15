import React, {useReducer} from 'react';
import {Header} from "antd/es/layout/layout";
import {Menu, Row} from "antd";
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";

const NavBar: React.FC = () => {
    const history = useHistory();
    const auth = true;
    const auth1 = useSelector(state => state);
    console.log(auth1)
    return (
        <Header>
            <Row justify='end'>
                {auth ?
                    <>
                        <div style={{color: 'white'}}>Name</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key={1} onClick={() => history.push('/login')}>Log out</Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item key={1} onClick={() => history.push('/login')}>Login</Menu.Item>
                    </Menu>
                }
            </Row>

        </Header>
    );
};

export default NavBar;