import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';

class App extends Component {

    state = {
        pong: false
    };

    componentDidMount() {
        axios.post('http://localhost:8080/ping')
            .then((result) => {
                setTimeout(() => {
                    this.setState({
                        pong: result.data.message
                    })
                }, 2000);
            })
            .catch((err) => {
                this.setState({
                    pong: err.message
                })
            });
    }

    render() {
        const env = process.env.NODE_ENV;
        return (
            <div>
                Hello world! This app is running in {env} mode!
                Server says: {this.state.pong}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
