import BaseDialog from '@/components/BaseDialog/index.js'
import { registCoreComponent } from './Core.js'


class Base {
    init(app) {
        // registCoreComponent(app)
        app.config.globalProperties.$baseDialog1 = '333232'
        app.config.globalProperties.$baseDialog = this.Dialog
    }
    Dialog(component, data = {}, width = '50%', className = '') {
        let dialog = new BaseDialog(component)
        dialog.data(data)
        dialog.width(width)
        dialog.className(className)
        return dialog
    }
}

export default new Base()
