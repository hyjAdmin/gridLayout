/*
 * @Author: HanYaJun
 * @Date: 2023-12-07 20:52:28
 * @Email: hanyajun@wedobest.com.cn
 * @Description: 主玩法画板
 */

import * as cc from 'cc';

const trace = function (...args) {
    console.log('MainModeGraphic', ...args);
}

const traceError = function (...args) {
    console.error('MainModeGraphic', ...args);
}

const { ccclass, property } = cc._decorator;

@ccclass('MainModeGraphic')
export class MainModeGraphic extends cc.Component {
    /**
     * @description: 当附加到一个激活的节点上或者其节点第一次激活时候调用
     * @return {*}
     */
    protected onLoad(): void {

    }

    /**
     * @description: 当该组件被销毁时调用 该方法为生命周期方法
     * @return {*}
     */
    protected onDestroy(): void {

    }
}

