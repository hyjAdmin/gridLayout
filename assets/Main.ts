/*
 * @Author: HanYaJun
 * @Date: 2023-12-07 20:12:45
 * @Email: hanyajun@wedobest.com.cn
 * @Description: 游戏开始逻辑
 */

import * as cc from 'cc';

const trace = function (...args) {
    console.log('Main', ...args);
}

const traceError = function (...args) {
    console.error('Main', ...args);
}

const { ccclass, property } = cc._decorator;

@ccclass('Main')
export class Main extends cc.Component {
    /**
     * @description: 当附加到一个激活的节点上或者其节点第一次激活时候调用
     * @return {*}
     */
    protected onLoad(): void {
        this.node.getChildByName('startBg').active = true;
        this.node.getChildByName('mainMode').active = false;
    }

    /**
     * @description: 开始游戏
     * @param {cc} event
     * @return {*}
     */
    public onClick(event: cc.EventTouch): void {
        const name: string = event.target.name;
        this.node.getChildByName('startBg').active = false;
        this.node.getChildByName('mainMode').active = true;
    }

    /**
     * @description: 当该组件被销毁时调用 该方法为生命周期方法
     * @return {*}
     */
    protected onDestroy(): void {

    }
}

