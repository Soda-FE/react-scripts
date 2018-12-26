/**
 * @file Home
 * @author chris<wfsr@foxmail.com>
 */
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import 'css/page/Home';

export default inject('user', 'read')(
    observer(props => (
        <main class="home">
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
                {props.user.name} 正在阅读 {props.read.book}
            </div>
        </main>
    ))
);
