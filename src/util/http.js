import axios from 'axios'
import {startLoading,endLoading} from './loading'
import {Message} from 'element-ui';



let err = () => {
    Message({
        message: '出错了',
        type: 'warning',
        duration: 3000,
        center: true

    })
}


let http = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000,
});


http.interceptors.request.use(function (config) {
    startLoading()
    return config;
    console.log(config + '请求');

}, function (error) {
    endLoading()
    err()
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    endLoading()
    return response;
    console.log(response + '回复');

}, function (error) {
    endLoading()
    err()
    return Promise.reject(error);
});

export default http