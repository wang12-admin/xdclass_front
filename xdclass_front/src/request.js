// axios相当于一个可以访问的协议对象，通过axios就可以进行访问网络了
import axios from "axios"
const service = axios.create({
    baseURL: "http://localhost:80",
    
    // baseURL: "http://hou.tom.com",
    // 配置请求时间
    timeout: 5000
})
// 可以吧export理解为java的访问修饰符，开启外部访问的权限
export default service