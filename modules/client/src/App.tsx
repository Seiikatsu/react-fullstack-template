import React, {Component} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {getCurrentMode} from 'env-utils';

interface State {
    serverEnv: string;
}

class App extends Component<{}, State> {
    public state: State = {
        serverEnv: '',
    };

    public componentDidMount() {
        axios
            .post('http://localhost:8080/getEnv')
            .then((response: AxiosResponse) => {
                this.setState({
                    serverEnv: response.data.env,
                });
            })
            .catch((err: AxiosError) => {
                this.setState({
                    serverEnv: err.message,
                });
            });
    }

    public render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <h2>Client is running in {getCurrentMode()} mode!</h2>
                <h2>Server is running in {this.state.serverEnv || 'unknown'} mode!</h2>
            </div>
        );
    }
}

export default App;
