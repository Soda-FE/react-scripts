/**
 * @file 封装异步 Route，可用于代码分割，其他实现见 react-loadable
 * @author  chris<wfsr@foxmail.com>
 */
import { PureComponent } from 'react';
import { Route } from 'react-router-dom';

function isComponent(component) {
    return /^[A-Z].+/.test(String(component.name));
}

export default function AsyncRoute(props) {
    class AsyncRoute extends PureComponent {
        state = {
            Component:
                props.sync || isComponent(props.component)
                    ? props.component
                    : null,
        };

        constructor(props) {
            super(props);
            if (this.state.Component) {
                return;
            }

            const { component, ...routeProps } = this.props;

            this.routeProps = routeProps;

            component().then(({ default: Component }) =>
                this.setState({ Component })
            );
        }

        render() {
            const { Component } = this.state;

            return <Route {...this.routeProps} component={Component} />;
        }
    }

    return <AsyncRoute {...props} />;
}
