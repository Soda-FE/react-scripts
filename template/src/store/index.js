/**
 * @file 全局 Store
 * @author  chris<wfsr@foxmail.com>
 */

import View from './View';
import Read from './Read';
import User from './User';

// Store Map
export default {
    user: new User(),
    read: new Read(),
    view: new View(),
};
