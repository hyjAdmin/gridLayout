/*
 * @Author: HanYaJun
 * @Date: 2023-12-07 21:00:29
 * @Email: hanyajun@wedobest.com.cn
 * @Description: 单例
 */

export default function Singleton<T>() {
    class Singleton {
        protected constructor() { }

        protected static _Instance: Singleton = null;

        public static get ins(): T {
            if (null == Singleton._Instance) {
                Singleton._Instance = new this();
                this.init();
            }
            return Singleton._Instance as T;
        }

        public static set ins(v) {
            if (!v) {
                delete Singleton._Instance;
            }
            Singleton._Instance = v;
        }

        public static init() { }
    }
    return Singleton;
}

