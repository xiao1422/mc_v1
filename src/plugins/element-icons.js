import * as ElIcon from '@element-plus/icons-vue'

export default (app) => {
    for (const iconName in ElIcon) {
        app.component(iconName, ElIcon[iconName])
    }
}
