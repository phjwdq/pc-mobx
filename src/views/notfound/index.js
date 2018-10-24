/**
 * @file 404
 * @author luwenlong(zuiwosuifeng@gmail.com)
 */

/* eslint-disable */
import React, {Component} from 'react'
/* eslint-enable */
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './index.styl'

export default class NotFound extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div styleName='notfound'>
                <div styleName="nf-info">
                    <p>您来到一个不存在的页面</p>
                    <Link to={window.urlPrefix}>返回首页</Link>
                </div>
            </div>
        )
    }
}
