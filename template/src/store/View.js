/**
 * @file 页面视图状态 Store
 * @author  chris<wfsr@foxmail.com>
 */

import { observable, action } from 'mobx';

export default class View {
    @observable
    bannerVisible = false;
    @observable
    navtabVisible = false;

    @action
    show(key) {
        this[key] = true;
    }

    @action
    hide(key) {
        this[key] = false;
    }
}
