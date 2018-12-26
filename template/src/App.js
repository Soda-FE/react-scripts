import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './logo.svg';
import 'css/App.less';
import Routes from './Routes';

@withRouter
class App extends PureComponent {
    render() {
        return (
            <div class="App">
                <header class="App-header">
                    <img src={logo} class="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a class="App-link" href="https://github.com/axios/axios">
                        axios
                    </a>
                    <a class="App-link" href="https://cn.mobx.js.org/">
                        MobX
                    </a>
                    <a class="App-link" href="http://stylus-lang.com/">
                        Stylus
                    </a>
                    <a
                        class="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <a
                        class="App-link"
                        href="https://reacttraining.com/react-router/web"
                    >
                        React Router
                    </a>
                    <a
                        class="App-link"
                        href="https://github.com/facebook/create-react-app"
                    >
                        Create React App
                    </a>
                </header>

                <Routes />
            </div>
        );
    }
}

export default App;
