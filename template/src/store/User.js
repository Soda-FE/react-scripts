/**
 * @file 形态详情 Store
 * @author  chris<wfsr@foxmail.com>
 */
import { observable, action } from 'mobx';

export default class User {
    @observable
    name = 'N/A';
    @observable
    gender = 'N/A';

    @action
    fill({ name, gender }) {
        this.name = name;
        this.gender = gender;
    }
}
