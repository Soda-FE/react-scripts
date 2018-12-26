/**
 * @file 形态详情 Store
 * @author  chris<wfsr@foxmail.com>
 */
import { observable, action } from 'mobx';

export default class User {
    @observable
    book = '-';
    @observable
    chapter = '-';

    @action
    update({ book, chapter }) {
        this.book = book;
        this.chapter = chapter;
    }
}
