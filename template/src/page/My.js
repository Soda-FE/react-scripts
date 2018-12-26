/**
 * @file My
 * @author chris<wfsr@foxmail.com>
 */
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import 'css/page/My';

@inject('user')
@observer
export default class My extends Component {
    constructor(props) {
        super(props);
        this.props.user.fill({ name: '小明', gender: '男' });
    }

    render() {
        const { user } = this.props;

        return (
            <main class="my">
                <NavLink to="/home" activeClassName="active">
                    首页
                </NavLink>
                <NavLink to="/my" activeClassName="active">
                    我的
                </NavLink>
                <NavLink to="/reading" activeClassName="active">
                    阅读
                </NavLink>
                <div>
                    {user.name} {user.sex}
                </div>
            </main>
        );
    }
}
