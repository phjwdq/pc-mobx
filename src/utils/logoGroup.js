/* eslint-disable */
const logoAll = [
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png',
    '30.png',
    '31.png',
    '32.png',
    '33.png',
    '34.png',
    '35.png',
    '36.png',
    '37.png',
    '38.png',
    '39.png',
    '40.png',
    '41.png',
    '42.png',
    '43.png',
    '44.png',
    '45.png',
    '46.png',
    '47.png',
    '48.png',
    '49.png',
    '50.png',
    '51.png',
    '52.png',
    '53.png',
    '54.png',
    '55.png',
    '56.png',
    '57.png',
    '58.png',
    '59.png',
    '60.png',
    '61.png',
    '62.png',
    '63.png',
    '64.png',
    '65.png',
    '66.png',
    '67.png',
    '68.png',
    '69.png',
    '70.png',
    '71.png',
    '72.png',
    '73.png',
    '74.png',
    '75.png',
    '76.png',
    '77.png',
    '78.png',
    '79.png',
    '80.png',
    '81.png',
    '82.png',
    '83.png',
    '84.png',
    '85.png',
    '86.png',
    '87.png',
    '88.png',
    '89.png',
    '90.png',
    '91.png'
]

// 分组
function newGroup(logoAll, num) {
    // 100
    const len = logoAll.length || 0

    const groupNum = len % num ? parseInt(len / num) + 1 : len / num
    const logoArr = []

    for (let i = 0; i < groupNum; i++) {
        let tempArr = []
        const start = i * num
        const end = (i + 1) * num

        if (i === groupNum - 1) {
            tempArr = logoAll.slice(start, len)
            logoArr.push(tempArr)
            break
        }

        tempArr = logoAll.slice(start, end)
        logoArr.push(tempArr)
    }

    return logoArr
}

const homeLogo = newGroup(newGroup(logoAll, 4), 4)
const planLogo = newGroup(newGroup(logoAll, 3), 4)

export {
    homeLogo,
    planLogo
}



