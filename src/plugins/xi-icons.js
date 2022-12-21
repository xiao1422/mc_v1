/*
 * @Author: xiao
 * @Date: 2022-12-21 18:09:40
 * @LastEditTime: 2022-12-21 18:52:43
 * @LastEditors: xiao
 * @Description: xiao
 * @FilePath: \WWW\study\mc_v1\src\plugins\xi-icons.js
 */
import svgIcons from '@/plugins/xi-icons/xi-icons'

const svgIconsRequired = require.context('@/icons/svg', false, /\.svg$/)
svgIconsRequired.keys().forEach(item => {
    svgIconsRequired(item)
})

export default (app) => {
    app.component('svg-icons', svgIcons)
}
