import React, {Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component {

    render() {
        const env = process.env.NODE_ENV;
        return (
            <div>
                Hello world! This app is running in {env} mode!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
