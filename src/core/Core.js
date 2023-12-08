/**
 * 注册全局组件
 * @param app
 */
export function registCoreComponent(app) {
    // 加载组件
    const Components = import.meta.globEager('./**/*.vue')
    for (let key in Components) {
        const item = Components[key]
        if (item.default.name && item.default.name !== 'Layouts') {
            app.component(item.default.name, item.default)
        }
    }
}
