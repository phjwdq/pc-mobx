/**
 * @file PageLoading
 * @author luwenlong
 * @description loading
 */

/* eslint-disable */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './PageLoading.styl'

export default class PageLoading extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='pageloading'>
                {/*<span>数据获取中...</span>
                <div className="loading-banner"></div>
                <div className="loading-namebox">
                    <div className="loading-name">
                        <div className="loading-nametit"></div>
                        <div className="loading-nametit"></div>
                        <div className="loading-nametit"></div>
                    </div>
                    <div className="loading-logo"></div>
                </div>
                <div className="loading-scrollnotice"></div>
                <div className="loading-product-con"></div>
                <div className="loading-product-con2"></div>
                <div className="loading-product-con"></div>
                <div className="loading-product-con2"></div>
                <div className="loading-product-con"></div>
                <div className="loading-product-con2"></div>*/}
            </div>
        )
    }
}
