import React, { Component } from 'react';

import styled from 'styled-components';

const HomeStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .card {
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 20px;
        text-align: center;

        img {
            width: 100%;
            max-width: 300px;
            margin-bottom: 20px;
        }

        div.bio {
            text-align: left;
            :before {
                content: " ";
                display: inline-block;
                width: 40px;
            }
        }

        .content {
            padding: 30px 40px;
        }
    }

    @media all and (max-width: 1000px) {
        flex-wrap: wrap;
    }
`;

const SpanAnchor = styled.div`
    cursor: pointer;
    display: inline-block;
    text-decoration: underline;
    
    &:hover {
        color: #AAA;
    }
`;

class HomePage extends Component {

    componentWillMount() {
        this.props.setBgColor('#F1F1F1');
    }

    render() {
        if (this.props.store.isLogin) {
            return (
                <HomeStyle>
                    <div className="w3-card-4 card" style={{ 'minWidth': '300px' }}>
                        <div className="w3-container w3-blue">
                            <h1>Welcome!</h1>
                        </div>
                        <div className="w3-container content w3-white">
                            
                            <div className="bio">
                            This is the first prototype of Elonson Project. 
                            </div>
                        </div>
                    </div>
                </HomeStyle>
            );
        }
        return (
            <HomeStyle>
                <div className="w3-card-4 card" style={{ 'minWidth': '300px' }}>
                    <div className="w3-container w3-blue">
                        <h1>Login</h1>
                    </div>
                    <div className="w3-container content w3-white">
                        <form onSubmit={(e) => e.preventDefault() && false}>
                            <div>
                                <label>Username</label>
                                <input className="w3-input" type="text" value="Admin" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input className="w3-input" type="password" value="password" />
                            </div>
                        </form>
                    </div>
                    <div className="w3-container w3-green w3-card-2 w3-hover-shadow active-shadow-none" style={{ 'padding': '10px 20px', 'textAlign': 'center' }} onClick={this.props.onLogin}>
                        Login
                    </div>
                </div>
                <div className="w3-card-4 card" style={{ 'minWidth': '300px' }}>
                    <div className="w3-container w3-blue">
                        <h1>Welcome!</h1>
                    </div>
                    <div className="w3-container content w3-white">
                        
                        <div className="bio">
                        This is the first prototype of Elonson Project.
                        </div>
                    </div>
                </div>
            </HomeStyle>
        );
    }
}

export default HomePage;