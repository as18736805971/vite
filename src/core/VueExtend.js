import { createApp, toRaw, markRaw } from 'vue/dist/vue.esm-bundler.js'
import Base from './Base.js'
import 'element-plus/dist/index.css'
import ElementPlus from "element-plus";

const removeAndCleanDom = (dom) => {
    if (!dom) return
    for (let k in dom) {
        if (k.indexOf('_') === 0 || k.indexOf('$') === 0) {
            delete dom[k]
        }
    }
    dom.remove()
    dom = null
}

export function VueExtend(App, data = null) {
    const app = createApp(App, data)
    Base.init(app)
    app.use(ElementPlus)
    app.mixin({
        beforeCreate() {
            this.$children = new Set()
            if (this?.$parent?.$children) {
                this.$parent.$children.add(this)
            }
        },
        created() {
            this._uid = this.$.uid
        },
        beforeUnmount() {
            if (this?.$parent?.$children && this.$parent.$children.has(this)) {
                this.$parent.$children.delete(this)
            }
            this.$children.clear()
            this.$children = null
        },
        unmounted() {
            removeAndCleanDom(this.$el)
        },
        methods: {
            markRaw,
            toRaw
        }
    })
    return app
}
