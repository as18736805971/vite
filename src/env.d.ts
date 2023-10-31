interface ImportMetaEnv {
    readonly VITE_BASE_NAME: '项目名称'
    readonly VITE_BASE_URL: '项目请求地址'
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
