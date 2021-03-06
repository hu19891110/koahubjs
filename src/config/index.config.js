export default {

    //启动端口
    port: 3000,

    //默认模块，控制器，操作
    default_module: 'home',
    default_controller: 'index',
    default_action: 'index',

    //favicon设置
    favicon: 'www/favicon.ico',

    //hook中间件
    hook: true,

    //http日志
    logger: true,

    //自动加载配置
    loader: {
        "controllers": [{
            root: 'controller',
            suffix: '.controller.js',
            prefix: '/',
        }, {
            root: 'addon',
            suffix: '.controller.js',
            prefix: '/addon/',
            filter: [/\/controller/]
        }],
        "models": [{
            root: 'model',
            suffix: '.model.js'
        }, {
            root: 'addon',
            suffix: '.model.js',
            filter: [/\/model/]
        }],
        "services": [{
            root: 'service',
            suffix: '.service.js'
        }, {
            root: 'addon',
            suffix: '.service.js',
            filter: [/\/service/]
        }],
        "configs": [{
            root: 'config',
            suffix: '.config.js'
        }, {
            root: 'addon',
            suffix: '.config.js',
            filter: [/\/config/]
        }]
    }
}