/**
 * @file 统一接口请求
 * @author luwenlong
 */

import axios from 'axios'
import http from './http'
import API from './api'

const apis = {}

Object.keys(API).forEach(it => {
    apis[it] = function (data): Promise<any> {
        return http.post(API[it], data || {})
    }
})

export default apis
