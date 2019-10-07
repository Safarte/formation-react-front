import React, { useState, useEffect }  from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Header } from 'semantic-ui-react';   

const API_URL = 'http://138.195.142.10';

const getBoardList = async () => {
    const request_options = {
        method: 'GET',
        url: `${API_URL}/boards`
    }
    return axios.request(request_options).then(resp => resp.data);
};

const BoardsList = () => {
    const [boards, setBoards] = useState([]);

    useEffect(
        () => {
        getBoardList().then(data => setBoards(data, []));
        },
        []
    );

    return (
        <div style={{ margin: 'auto', maxWidth: '50%', textAlign: 'center', marginTop: '2%' }}>
            <Header as='h1'>Boards</Header>
            <Form style={{ marginTop: '8%' }}>
                {boards.map(board => (
                    <Link style={{ margin: '1%' }} to={`/board/${board.id}`}>
                        <Form.Button fluid content={board.name} />
                    </Link>
                ))}
            </Form>
        </div>
    );
};

export default withRouter(BoardsList);
