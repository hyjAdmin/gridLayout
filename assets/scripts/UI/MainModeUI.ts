/*
 * @Author: HanYaJun
 * @Date: 2023-12-07 20:43:26
 * @Email: hanyajun@wedobest.com.cn
 * @Description: 主玩法界面
 */

import * as cc from 'cc';
import { prefabPathEnum } from '../globalConfig/prefabPathConfig';

const trace = function (...args) {
    console.log('MainModeUI', ...args);
}

const traceError = function (...args) {
    console.error('MainModeUI', ...args);
}

const { ccclass, property } = cc._decorator;

@ccclass('MainModeUI')
export class MainModeUI extends cc.Component {
    /**
     * @description: 当附加到一个激活的节点上或者其节点第一次激活时候调用
     * @return {*}
     */
    protected onLoad(): void {
        // 加载主玩法画板
        this.node.getChildByName('middle').removeAllChildren();
        cc.resources.load(prefabPathEnum.MAIN_MODE_GRAPHIC, cc.Prefab, (error: Error, asset: cc.Prefab) => {
            if (!error && asset) {
                trace('主玩法画板预制加载成功!!!');
                const item: cc.Node = cc.instantiate(asset);
                this.node.getChildByName('middle').addChild(item);
            } else {
                traceError('主玩法画板预制加载失败!!!');
            }
        });
    }

    /**
     * @description: 当该组件被销毁时调用 该方法为生命周期方法
     * @return {*}
     */
    protected onDestroy(): void {

    }
}

