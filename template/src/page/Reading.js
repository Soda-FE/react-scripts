/**
 * @file Reading
 * @author chris<wfsr@foxmail.com>
 */
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import 'css/page/Reading';

@inject('read')
@observer
export default class Reading extends Component {
    constructor(props) {
        super(props);
        this.props.read.update({ book: '老人与海', chapter: '第二章' });
    }

    render() {
        const { read } = this.props;

        return (
            <main class="reading">
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
                    正在阅读的书：
                    {read.book}
                    ，章节：
                    {read.chapter}
                </div>
            </main>
        );
    }
}
