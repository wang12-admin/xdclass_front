// 引入创建的request服务请求文件
import axios from "../request";
// 这里就可以进行访问java的接口啦！！！
// 注册接口
export const registerApi = (name, phone, pwd) => axios.post("/api/v1/pri/user/register", {
    "name": name,
    "phone": phone,
    "pwd": pwd
})
//登录接口
export const logiApi = (pwd, phone) => axios.post("/api/v1/pri/user/login", {
    pwd,
    phone
})

//轮播图接口
export const getBanner = () => axios.post("/api/v1/pub/video/list_banner")

//视频接口

export const getVideoList = () => axios.post("/api/v1/pub/video/list")

//视频详情接口
export const getVideoDetail = (vid) => axios.get("/api/v1/pub/video/find_detail_by_id", {
    params: {
        "video_id": vid
    }
})

//下单接口
export const saveOrder = (token, vid) => axios.post("/api/v1/pri/videoOrder/save", {
    "video_id": vid

}, {
    headers: {
        "token": token
    }
})

// 订单列表
export const getOrderList = (token) => axios.get("/api/v1/pri/videoOrder/list", {
    headers: {
        token
    }
})

// 用户信息
export const getUserInfo = (token) => axios.get("/api/v1/pri/user/findByUserInfoToken", {
    headers: {
        "token":token
    }
})


