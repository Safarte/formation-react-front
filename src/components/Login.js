import React, { useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Form, Image } from 'semantic-ui-react';

const API_URL = 'http://138.195.142.10';

const handleLogin = async (username, password) => {
    const request_options = {
        method: 'POST',
        url: `${API_URL}/login`,
        data: {
            username,
            password
        }
    }
    return axios.request(request_options).then(resp => {
        const res = resp.data;
        if (res.length > 0) {
            localStorage.setItem('userId', res[0].id);
            return window.location.replace('/boards');
        }
    });
};

const handleRegister = async (username, password) => {
    const request_options = {
        method: 'POST',
        url: `${API_URL}/users`,
        data: {
            username,
            password
        }
    }
    if (username && password) {
        return axios.request(request_options).then(resp => {
            if (resp.status === 200) {
                console.log(resp);
                localStorage.setItem('userId', resp.data.id);
                return window.location.replace('/boards');
            }
        });
    }
};

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={{ margin: 'auto', maxWidth: '40%', textAlign: 'left' }}>
            <Image
                style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20%', marginBottom: '10%' }}
                src='https://gitlab.viarezo.fr/uploads/-/system/project/avatar/1987/react_round_red.png' size='medium'
            />
            <Form>
                <Form.Input
                    label='Username'
                    placeholder='Username'
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <Form.Input
                    label='Password'
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Form.Group widths={2}>
                    <Form.Button
                        fluid
                        content='Login'
                        onClick={() => handleLogin(username, password)}
                    />
                    <Form.Button
                        fluid
                        content='Register'
                        onClick={() => handleRegister(username, password)}
                    />
                </Form.Group>
            </Form>
        </div>
    );
};

export default withRouter(Login);
