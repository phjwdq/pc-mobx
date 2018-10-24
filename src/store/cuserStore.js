/**
 * @file 收集用户信息
 * @author luwenlong
 */

import {observable, action, runInAction} from 'mobx'
import {BaseStore} from '@utils/BaseStore'

class UserStore extends BaseStore {
    @observable cuserdata = {}
    @observable startid = 0
    @observable fetchcuser = ''

    @observable fcuser = ''
    @observable errmsg = ''

    @observable fphone = ''
    @observable phonemsg = ''

    @observable fexcel = ''
    @observable fexcelmsg = ''

    @action
    getusers = async function (params) {
        this.fetchcuser = 'start'

        try {
            let res = await this.apis.getusers(params)

            runInAction(() => {
                this.fetchcuser = 'done'
                this.startid = this.startid || res.id
                this.cuserdata = res
            })
        }
        catch (err) {
            runInAction(() => {
                this.fetchcuser = 'fail'
            })
        }
    }

    // 收集用户信息
    @action
    cuser = async function (params) {
        this.fcuser = 'start'

        try {
            let res = await this.apis.cuser(params)

            runInAction(() => {
                this.fcuser = 'done'
                this.errmsg = '提交成功'

                if (params.type === 'sem') {
                    this.sendsms({
                        mobile: params.phone,
                        sendMsg: '叮当保已接收到您的信息！我们会在48小时内致电联系您进行保险产品介绍及精准价格，联系电话是010-82576772，请注意接听电话。感谢您对叮当保的支持，祝您生活愉快！'
                    })
                }
                else {
                    this.sendsms({
                        mobile: params.phone,
                        sendMsg: '叮当保恭喜您已经成功预约叮当保保险咨询服务！为了更好的为您服务，叮当规划师会先与您电话联系，收集相关信息，联系电话是010-82576772，请注意接听电话。感谢您对叮当保的支持，祝您生活愉快！'
                    })
                }
            })
        }
        catch (err) {
            runInAction(() => {
                this.fcuser = 'fail'
                this.errmsg = '提交失败，请重试'
            })
        }
    }

    @action
    sendsms = async function (params) {
        this.fphone = 'start'

        try {
            let res = await this.apis.phone(params)

            runInAction(() => {
                this.fphone = 'done'
                this.phonemsg = '短信发送成功'
            })
        }
        catch (err) {
            runInAction(() => {
                this.fphone = 'fail'
                this.phonemsg = '短信发送失败，请重试'
            })
        }
    }

    @action
    excel = async function (params) {
        this.fexcel = 'start'

        try {
            let res = await this.apis.excel(params)

            runInAction(() => {
                this.fexcel = 'done'
                this.fexcelmsg = '获取excel文件成功'
            })
        }
        catch (err) {
            runInAction(() => {
                this.fexcel = 'fail'
                this.fexcelmsg = '获取excel文件失败'
            })
        }
    }
}

const cuserStore = new UserStore()

export default cuserStore
