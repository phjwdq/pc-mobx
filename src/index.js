/**
 * @file dingdangbao
 * @author luwenlong(zuiwosuifeng@gmail.com)
 */

/* eslint-disable */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import AppRouter from './router'
import store from './store'
import './styles/global.styl'

window.PHONEREGEXP = /^1(3[0-9]|4[0-9]|5[0-9]|8[0-9]|7[0-9])\d{8}$/

render(
    <Provider {...store}>
        {AppRouter}
    </Provider>,
    document.getElementById('app')
)
