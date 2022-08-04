
class build {

    /**
     * add 将数据加入到浏览器localStorage缓存中
     * @param key 存值的标识key
     * @param data 存储数据
     */
    add(key, data = {}) {
        if(data){
            localStorage.setItem(key, data)
        }else{
            localStorage.setItem(key, '')
        }
    }

    /**
     * get 通过key从浏览器localStorage缓存中取相应的数据
     * @param key 存值的标识key
     */
    get(key) {
        if(localStorage.hasOwnProperty(key)){
            let data = localStorage.getItem(key);
            return data;
        }
        return '';
    }

    /**
     * remove 通过key从浏览器localStorage缓存中删除相应的数据
     * @param key 存值的标识key
     */
    remove(key) {
        if(key){
            localStorage.removeItem(key);
        }
    }
    /**
     * remove 通过key从浏览器localStorage缓存中清除所有的缓存数据
     * @param key 存值的标识key
     */
    clear(){
        localStorage.clear()
    }
}

const cacheUtil = new build(); //new生成实例
export const { add, get, remove,clear } = cacheUtil;
export default cacheUtil; // 导出