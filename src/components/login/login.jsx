 import { render } from "@testing-library/react";
import React from "react";
import LoginImg from "../../Login.svg";

export class Login extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Welcome</div>
                <div className="content">
                    <div className="image">
                        <img src={LoginImg} alt="loginimage"/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">username</label>
                            <input type="text" name="username"  placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"  placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Login</button>
                </div>
            </div>
        )
    }
}


