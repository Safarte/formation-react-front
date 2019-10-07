import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import { Container, Message, TextArea, Button, Grid, Divider } from 'semantic-ui-react';

const API_URL = 'http://138.195.142.10';

const postMessage = (message, board) => {
    const request_options = {
        url : `${API_URL}/messages`,
        method : 'POST',
        data: {
            userId: parseInt(localStorage.getItem('userId')) || 1,
            content: message,
            boardId: parseInt(board)
        }
    };
    return axios.request(request_options);
};

const getMessagesList = async (board) => {
    const request_options = {
        method: 'GET',
        url: `${API_URL}/messages`,
        params: {
            board: board
        }
    };
    return axios.request(request_options).then(resp => resp.data);
};

const getUserList = async () => {
    const request_options = {
        method: 'GET',
        url: `${API_URL}/users`
    };
    return axios.request(request_options).then(resp => resp.data);
};

const getBoard = async (id) => {
    const request_options = {
        method: 'GET',
        url: `${API_URL}/boards`,
        params: {
            id: id
        }
    };
    return axios.request(request_options).then(resp => resp.data);
};

const Board = (props) => {
    const [id, setId] = useState(-1);
    const [board, setBoard] = useState([]);

    useEffect(
        () => {
            const boardId = props.location.pathname.split('/')[props.location.pathname.split('/').length-1] || 1;
            setId(boardId);
        },
        [props.location.pathname]
    );

    useEffect(
        () => {
            getBoard(id).then(data => setBoard(data))
        },
        [id]
    );

    return (
        <div>
            <Container  textAlign='left'>
                <Container textAlign='center'><h1>{board[id-1] ? board[id-1].name : ''}</h1></Container>
                <Divider/>
                <Container>
                    <MessageWriter board={id}/>
                    <Divider/>
                </Container>
                <Container>
                    <MessageList board={id}/>
                </Container>
            </Container>
        </div>
    );
};

const MessageList = (props) => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            getMessagesList(props.board).then(data => setMessages(data));
            getUserList().then(data => setUsers(data));
        },
        [props.board]
    );

    useEffect(
        () => {
            const timer = setTimeout(() => {
                getMessagesList(props.board).then(data => setMessages(data));
              }, 1000);
            return () => clearTimeout(timer);
        },
        [messages, props.board]
    );
    return (
        <div>
            {messages.map(message => (
                <MessageDisplay message={message} user={users[message.userId-1]}/>
            ))}
        </div>
    );
};

const MessageDisplay = (props) => {
    return(
        <Container>
            <Message 
                key={props.message.id} 
                header={(props.user ? props.user.username : '') + '@' + props.message.updatedAt.split('T')[1].split('.')[0]} 
                content={props.message.content}
            />
            <Divider/>
        </Container>
    );
};

const MessageWriter = (props) => {
    const [message, setMessage] = useState('');

    return (
    <div>
        <Container textAlign='center'> 
            <Grid>
                <Grid.Column width='16'>
                    <Grid.Row>
                        <TextArea style={{width: '100%'}}onChange={(e) => {setMessage(e.target.value)}} value={message}/>   
                    </Grid.Row>
                    <Grid.Row>
                        <Button
                        style={{width: '100%'}}
                        onClick={() => {if (message.length) {
                            setMessage('');
                            postMessage(message, props.board);
                        }}}
                        >
                            Send
                        </Button>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
    );
};

export default withRouter(Board);
