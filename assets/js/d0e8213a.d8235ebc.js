"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["224700"], {
689091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_bm_tool_bm_tool_md_d0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-bm-tool-bm-tool-md-d0e.json
var site_docs_system_debug_optimize_debugging_commands_bm_tool_bm_tool_md_d0e_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/bm-tool/bm-tool","title":"bm工具","description":"Bundle Manager（包管理工具，简称bm）是实现应用安装、卸载、更新、查询等功能的工具，bm为开发者提供基本的应用安装包的调试能力。","source":"@site/docs/system-debug-optimize/debugging-commands/bm-tool/bm-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/bm-tool","slug":"/system-debug-optimize/debugging-commands/bm-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/bm-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"bm工具","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bm-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"aa工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/aa-tool/"},"next":{"title":"打包工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/bm-tool/bm-tool.md


const frontMatter = {
	title: 'bm工具',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bm-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'bm工具';

const assets = {

};



const toc = [{
  "value": "环境要求（hdc工具）",
  "id": "环境要求hdc工具",
  "level": 2
}, {
  "value": "bm工具命令列表",
  "id": "bm工具命令列表",
  "level": 2
}, {
  "value": "帮助命令（help）",
  "id": "帮助命令help",
  "level": 2
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 2
}, {
  "value": "userId",
  "id": "userid",
  "level": 3
}, {
  "value": "安装命令（install）",
  "id": "安装命令install",
  "level": 2
}, {
  "value": "卸载命令（uninstall）",
  "id": "卸载命令uninstall",
  "level": 2
}, {
  "value": "查询应用信息命令（dump）",
  "id": "查询应用信息命令dump",
  "level": 2
}, {
  "value": "清理命令（clean）",
  "id": "清理命令clean",
  "level": 2
}, {
  "value": "获取udid命令（get）",
  "id": "获取udid命令get",
  "level": 2
}, {
  "value": "快速修复命令（quickfix）",
  "id": "快速修复命令quickfix",
  "level": 2
}, {
  "value": "共享库查询命令（dump-shared）",
  "id": "共享库查询命令dump-shared",
  "level": 2
}, {
  "value": "共享库依赖关系查询命令（dump-dependencies）",
  "id": "共享库依赖关系查询命令dump-dependencies",
  "level": 2
}, {
  "value": "应用执行编译AOT命令（compile）",
  "id": "应用执行编译aot命令compile",
  "level": 2
}, {
  "value": "拷贝ap文件命令（copy-ap）",
  "id": "拷贝ap文件命令copy-ap",
  "level": 2
}, {
  "value": "查询overlay应用信息命令（dump-overlay）",
  "id": "查询overlay应用信息命令dump-overlay",
  "level": 2
}, {
  "value": "查询应用的overlay相关信息命令（dump-target-overlay）",
  "id": "查询应用的overlay相关信息命令dump-target-overlay",
  "level": 2
}, {
  "value": "安装插件命令（install-plugin）",
  "id": "安装插件命令install-plugin",
  "level": 2
}, {
  "value": "卸载插件命令（uninstall-plugin）",
  "id": "卸载插件命令uninstall-plugin",
  "level": 2
}, {
  "value": "bm工具错误码",
  "id": "bm工具错误码",
  "level": 2
}, {
  "value": "301 系统账号不存在",
  "id": "301-系统账号不存在",
  "level": 3
}, {
  "value": "304 当前系统账号没有安装HAP包",
  "id": "304-当前系统账号没有安装hap包",
  "level": 3
}, {
  "value": "9568319 签名文件异常",
  "id": "9568319-签名文件异常",
  "level": 3
}, {
  "value": "9568320 签名文件不存在",
  "id": "9568320-签名文件不存在",
  "level": 3
}, {
  "value": "9568321 签名文件解析失败",
  "id": "9568321-签名文件解析失败",
  "level": 3
}, {
  "value": "9568323 签名摘要验证未通过",
  "id": "9568323-签名摘要验证未通过",
  "level": 3
}, {
  "value": "9568324 签名完整性校验未通过",
  "id": "9568324-签名完整性校验未通过",
  "level": 3
}, {
  "value": "9568326 签名公钥存在异常",
  "id": "9568326-签名公钥存在异常",
  "level": 3
}, {
  "value": "9568327 签名获取异常",
  "id": "9568327-签名获取异常",
  "level": 3
}, {
  "value": "9568328 未找到配置文件区块",
  "id": "9568328-未找到配置文件区块",
  "level": 3
}, {
  "value": "9568330 初始化签名源失败",
  "id": "9568330-初始化签名源失败",
  "level": 3
}, {
  "value": "9568257 签名文件Pkcs7校验失败",
  "id": "9568257-签名文件pkcs7校验失败",
  "level": 3
}, {
  "value": "9568344 解析配置文件失败",
  "id": "9568344-解析配置文件失败",
  "level": 3
}, {
  "value": "9568305 依赖的模块不存在",
  "id": "9568305-依赖的模块不存在",
  "level": 3
}, {
  "value": "9568259 安装解析配置文件缺少字段",
  "id": "9568259-安装解析配置文件缺少字段",
  "level": 3
}, {
  "value": "9568258 安装应用的releaseType与已安装应用的releaseType不相同",
  "id": "9568258-安装应用的releasetype与已安装应用的releasetype不相同",
  "level": 3
}, {
  "value": "9568260 安装内部错误",
  "id": "9568260-安装内部错误",
  "level": 3
}, {
  "value": "9568261 安装器对象构造失败",
  "id": "9568261-安装器对象构造失败",
  "level": 3
}, {
  "value": "9568262 插件安装命令错误",
  "id": "9568262-插件安装命令错误",
  "level": 3
}, {
  "value": "9568265 安装过程中内部参数有误",
  "id": "9568265-安装过程中内部参数有误",
  "level": 3
}, {
  "value": "9568270 安装包名称不正确",
  "id": "9568270-安装包名称不正确",
  "level": 3
}, {
  "value": "9568276 安装应用已存在",
  "id": "9568276-安装应用已存在",
  "level": 3
}, {
  "value": "9568267 entry模块已存在",
  "id": "9568267-entry模块已存在",
  "level": 3
}, {
  "value": "9568268 安装状态错误",
  "id": "9568268-安装状态错误",
  "level": 3
}, {
  "value": "9568269 文件路径无效",
  "id": "9568269-文件路径无效",
  "level": 3
}, {
  "value": "9568322 由于应用来源不可信，签名验证失败",
  "id": "9568322-由于应用来源不可信签名验证失败",
  "level": 3
}, {
  "value": "9568286 安装应用的签名证书profile文件中的类型与已安装应用的不相同",
  "id": "9568286-安装应用的签名证书profile文件中的类型与已安装应用的不相同",
  "level": 3
}, {
  "value": "9568288 磁盘空间不足导致安装失败",
  "id": "9568288-磁盘空间不足导致安装失败",
  "level": 3
}, {
  "value": "9568289 权限请求失败导致安装失败",
  "id": "9568289-权限请求失败导致安装失败",
  "level": 3
}, {
  "value": "9568290 更新HAP token失败导致安装失败",
  "id": "9568290-更新hap-token失败导致安装失败",
  "level": 3
}, {
  "value": "9568291 singleton不一致导致安装失败",
  "id": "9568291-singleton不一致导致安装失败",
  "level": 3
}, {
  "value": "9568293 SysCap不一致导致安装失败",
  "id": "9568293-syscap不一致导致安装失败",
  "level": 3
}, {
  "value": "9568297 由于设备sdk版本较低导致安装失败",
  "id": "9568297-由于设备sdk版本较低导致安装失败",
  "level": 3
}, {
  "value": "9568299 安装信息异常",
  "id": "9568299-安装信息异常",
  "level": 3
}, {
  "value": "9568300 应用模块名不唯一导致安装失败",
  "id": "9568300-应用模块名不唯一导致安装失败",
  "level": 3
}, {
  "value": "9568332 签名不一致导致安装失败",
  "id": "9568332-签名不一致导致安装失败",
  "level": 3
}, {
  "value": "9568329 签名信息验证失败",
  "id": "9568329-签名信息验证失败",
  "level": 3
}, {
  "value": "9568266 安装权限拒绝",
  "id": "9568266-安装权限拒绝",
  "level": 3
}, {
  "value": "9568337 安装解析失败",
  "id": "9568337-安装解析失败",
  "level": 3
}, {
  "value": "9568316 数据代理中APL权限字段描述权限低",
  "id": "9568316-数据代理中apl权限字段描述权限低",
  "level": 3
}, {
  "value": "9568315 数据代理URI错误",
  "id": "9568315-数据代理uri错误",
  "level": 3
}, {
  "value": "9568318 签名文件无效",
  "id": "9568318-签名文件无效",
  "level": 3
}, {
  "value": "9568325 由于文件过大，签名验证失败",
  "id": "9568325-由于文件过大签名验证失败",
  "level": 3
}, {
  "value": "9568336 应用调试类型与已安装应用不一致",
  "id": "9568336-应用调试类型与已安装应用不一致",
  "level": 3
}, {
  "value": "9568296 包类型错误",
  "id": "9568296-包类型错误",
  "level": 3
}, {
  "value": "9568292 UserID为0的用户只能安装singleton应用",
  "id": "9568292-userid为0的用户只能安装singleton应用",
  "level": 3
}, {
  "value": "9568263 无法降级安装",
  "id": "9568263-无法降级安装",
  "level": 3
}, {
  "value": "9568264 安装检验签名一致性失败",
  "id": "9568264-安装检验签名一致性失败",
  "level": 3
}, {
  "value": "9568301 模块类型不一致",
  "id": "9568301-模块类型不一致",
  "level": 3
}, {
  "value": "9568303 企业设备管理禁止安装",
  "id": "9568303-企业设备管理禁止安装",
  "level": 3
}, {
  "value": "9568304 应用不支持当前设备类型",
  "id": "9568304-应用不支持当前设备类型",
  "level": 3
}, {
  "value": "9568308 应用包类型不一致",
  "id": "9568308-应用包类型不一致",
  "level": 3
}, {
  "value": "9568317 应用的多进程配置与系统配置不匹配",
  "id": "9568317-应用的多进程配置与系统配置不匹配",
  "level": 3
}, {
  "value": "9568310 兼容策略不同",
  "id": "9568310-兼容策略不同",
  "level": 3
}, {
  "value": "9568391 包管理服务已停止",
  "id": "9568391-包管理服务已停止",
  "level": 3
}, {
  "value": "9568393 验证代码签名失败",
  "id": "9568393-验证代码签名失败",
  "level": 3
}, {
  "value": "9568399 拷贝文件失败",
  "id": "9568399-拷贝文件失败",
  "level": 3
}, {
  "value": "9568401 调试包仅支持运行在开发者模式设备",
  "id": "9568401-调试包仅支持运行在开发者模式设备",
  "level": 3
}, {
  "value": "9568404 传递签名配置文件失败",
  "id": "9568404-传递签名配置文件失败",
  "level": 3
}, {
  "value": "9568405 删除签名配置文件失败",
  "id": "9568405-删除签名配置文件失败",
  "level": 3
}, {
  "value": "9568381 应用进程删除失败",
  "id": "9568381-应用进程删除失败",
  "level": 3
}, {
  "value": "9568382 卸载应用时包名或者模块名称为空",
  "id": "9568382-卸载应用时包名或者模块名称为空",
  "level": 3
}, {
  "value": "9568384 卸载应用时bm工具进程权限异常",
  "id": "9568384-卸载应用时bm工具进程权限异常",
  "level": 3
}, {
  "value": "9568385 卸载服务异常",
  "id": "9568385-卸载服务异常",
  "level": 3
}, {
  "value": "9568386 卸载的应用不存在",
  "id": "9568386-卸载的应用不存在",
  "level": 3
}, {
  "value": "9568388 企业设备管理不允许卸载该应用",
  "id": "9568388-企业设备管理不允许卸载该应用",
  "level": 3
}, {
  "value": "9568389 未知错误导致安装失败",
  "id": "9568389-未知错误导致安装失败",
  "level": 3
}, {
  "value": "9568284 安装版本不匹配",
  "id": "9568284-安装版本不匹配",
  "level": 3
}, {
  "value": "9568287 安装包entry模块数量不合规",
  "id": "9568287-安装包entry模块数量不合规",
  "level": 3
}, {
  "value": "9568281 安装包vendor不一致",
  "id": "9568281-安装包vendor不一致",
  "level": 3
}, {
  "value": "9568272 安装包体积大小无效",
  "id": "9568272-安装包体积大小无效",
  "level": 3
}, {
  "value": "9568273 应用生成UID失败，导致安装失败",
  "id": "9568273-应用生成uid失败导致安装失败",
  "level": 3
}, {
  "value": "9568274 安装服务错误",
  "id": "9568274-安装服务错误",
  "level": 3
}, {
  "value": "9568275 包管理服务错误",
  "id": "9568275-包管理服务错误",
  "level": 3
}, {
  "value": "9568277 包名不一致，导致安装失败",
  "id": "9568277-包名不一致导致安装失败",
  "level": 3
}, {
  "value": "9568279 版本不一致，导致安装失败",
  "id": "9568279-版本不一致导致安装失败",
  "level": 3
}, {
  "value": "9568280 minCompatibleVersionCode不一致，导致安装失败",
  "id": "9568280-mincompatibleversioncode不一致导致安装失败",
  "level": 3
}, {
  "value": "9568282 targetAPIVersion不一致，导致安装失败",
  "id": "9568282-targetapiversion不一致导致安装失败",
  "level": 3
}, {
  "value": "9568314 安装应用间共享库失败",
  "id": "9568314-安装应用间共享库失败",
  "level": 3
}, {
  "value": "9568349 操作文件时传入参数异常",
  "id": "9568349-操作文件时传入参数异常",
  "level": 3
}, {
  "value": "9568351 创建文件目录异常导致安装失败",
  "id": "9568351-创建文件目录异常导致安装失败",
  "level": 3
}, {
  "value": "9568354 删除文件目录异常导致安装失败",
  "id": "9568354-删除文件目录异常导致安装失败",
  "level": 3
}, {
  "value": "9568355 安装包中提取文件失败",
  "id": "9568355-安装包中提取文件失败",
  "level": 3
}, {
  "value": "9568356 安装过程中重命名目录名失败",
  "id": "9568356-安装过程中重命名目录名失败",
  "level": 3
}, {
  "value": "9568357 清理文件失败",
  "id": "9568357-清理文件失败",
  "level": 3
}, {
  "value": "9568359 安装设置selinux失败",
  "id": "9568359-安装设置selinux失败",
  "level": 3
}, {
  "value": "9568360 安装overlay应用出现错误",
  "id": "9568360-安装overlay应用出现错误",
  "level": 3
}, {
  "value": "9568361 overlay应用中目标包名为空导致安装失败",
  "id": "9568361-overlay应用中目标包名为空导致安装失败",
  "level": 3
}, {
  "value": "9568362 overlay应用中目标模块名称为空导致安装失败",
  "id": "9568362-overlay应用中目标模块名称为空导致安装失败",
  "level": 3
}, {
  "value": "9568398 企业MDM应用/普通企业应用不允许安装",
  "id": "9568398-企业mdm应用普通企业应用不允许安装",
  "level": 3
}, {
  "value": "9568402 禁止安装签名证书profile文件中的类型为app_gallery的release应用",
  "id": "9568402-禁止安装签名证书profile文件中的类型为app_gallery的release应用",
  "level": 3
}, {
  "value": "9568403 安装加密校验失败",
  "id": "9568403-安装加密校验失败",
  "level": 3
}, {
  "value": "9568407 安装失败，native软件包安装失败",
  "id": "9568407-安装失败native软件包安装失败",
  "level": 3
}, {
  "value": "9568408 卸载应用失败，native软件包卸载失败",
  "id": "9568408-卸载应用失败native软件包卸载失败",
  "level": 3
}, {
  "value": "9568409 安装失败，native软件包提取失败",
  "id": "9568409-安装失败native软件包提取失败",
  "level": 3
}, {
  "value": "9568410 安装失败，设备受管控",
  "id": "9568410-安装失败设备受管控",
  "level": 3
}, {
  "value": "9568412 卸载请求被应用程序拒绝",
  "id": "9568412-卸载请求被应用程序拒绝",
  "level": 3
}, {
  "value": "9568413 应用设备类型不支持当前设备",
  "id": "9568413-应用设备类型不支持当前设备",
  "level": 3
}, {
  "value": "9568415 禁止安装签名证书为debug或者配置文件debug为true的加密应用",
  "id": "9568415-禁止安装签名证书为debug或者配置文件debug为true的加密应用",
  "level": 3
}, {
  "value": "9568416 加密应用不允许安装",
  "id": "9568416-加密应用不允许安装",
  "level": 3
}, {
  "value": "9568417 签名校验失败",
  "id": "9568417-签名校验失败",
  "level": 3
}, {
  "value": "9568418 应用设置了卸载处置规则，不允许直接卸载",
  "id": "9568418-应用设置了卸载处置规则不允许直接卸载",
  "level": 3
}, {
  "value": "9568420 禁止通过bm安装release的预置应用",
  "id": "9568420-禁止通过bm安装release的预置应用",
  "level": 3
}, {
  "value": "9568278 安装包的版本号不一致",
  "id": "9568278-安装包的版本号不一致",
  "level": 3
}, {
  "value": "9568421 签名证书profile文件中的类型被限制，不允许安装到当前设备中，导致安装失败",
  "id": "9568421-签名证书profile文件中的类型被限制不允许安装到当前设备中导致安装失败",
  "level": 3
}, {
  "value": "9568423 签名证书profile文件中缺少当前设备的udid配置，不允许安装到当前设备中",
  "id": "9568423-签名证书profile文件中缺少当前设备的udid配置不允许安装到当前设备中",
  "level": 3
}, {
  "value": "9568380 卸载系统应用失败",
  "id": "9568380-卸载系统应用失败",
  "level": 3
}, {
  "value": "9568387 卸载未安装的模块，导致卸载失败",
  "id": "9568387-卸载未安装的模块导致卸载失败",
  "level": 3
}, {
  "value": "9568432 插件与应用之间的 pluginDistributionIDs 校验失败，导致安装失败",
  "id": "9568432-插件与应用之间的-plugindistributionids-校验失败导致安装失败",
  "level": 3
}, {
  "value": "9568433 应用缺少ohos.permission.kernel.SUPPORT_PLUGIN权限",
  "id": "9568433-应用缺少ohospermissionkernelsupport_plugin权限",
  "level": 3
}, {
  "value": "9568333 模块名称为空",
  "id": "9568333-模块名称为空",
  "level": 3
}, {
  "value": "9568331 签名信息不一致",
  "id": "9568331-签名信息不一致",
  "level": 3
}, {
  "value": "9568334 模块名称重复",
  "id": "9568334-模块名称重复",
  "level": 3
}, {
  "value": "9568340 配置文件缺失",
  "id": "9568340-配置文件缺失",
  "level": 3
}, {
  "value": "9568341 安装时解析配置文件失败",
  "id": "9568341-安装时解析配置文件失败",
  "level": 3
}, {
  "value": "9568342 配置文件数据类型错误",
  "id": "9568342-配置文件数据类型错误",
  "level": 3
}, {
  "value": "9568345 配置文件中的字符串长度或者数组大小过大",
  "id": "9568345-配置文件中的字符串长度或者数组大小过大",
  "level": 3
}, {
  "value": "9568346 解析安装包获取SysCap信息失败",
  "id": "9568346-解析安装包获取syscap信息失败",
  "level": 3
}, {
  "value": "9568347 解析本地so文件失败",
  "id": "9568347-解析本地so文件失败",
  "level": 3
}, {
  "value": "9568348 解析 ark native SO文件失败",
  "id": "9568348-解析-ark-native-so文件失败",
  "level": 3
}, {
  "value": "9568350 安装时获取代理对象失败",
  "id": "9568350-安装时获取代理对象失败",
  "level": 3
}, {
  "value": "9568434 设备不具备插件能力",
  "id": "9568434-设备不具备插件能力",
  "level": 3
}, {
  "value": "9568435 应用包名不存在",
  "id": "9568435-应用包名不存在",
  "level": 3
}, {
  "value": "9568436 多个HSP包信息不一致",
  "id": "9568436-多个hsp包信息不一致",
  "level": 3
}, {
  "value": "9568437 插件的 pluginDistributionIDs 解析失败",
  "id": "9568437-插件的-plugindistributionids-解析失败",
  "level": 3
}, {
  "value": "9568438 插件包名不存在",
  "id": "9568438-插件包名不存在",
  "level": 3
}, {
  "value": "9568439 插件与应用包名一致",
  "id": "9568439-插件与应用包名一致",
  "level": 3
}, {
  "value": "9568441 应用不能变更U1Enabled",
  "id": "9568441-应用不能变更u1enabled",
  "level": 3
}, {
  "value": "9568442 U1Enable配置不一致",
  "id": "9568442-u1enable配置不一致",
  "level": 3
}, {
  "value": "9568445 一次仅支持安装一个APP包",
  "id": "9568445-一次仅支持安装一个app包",
  "level": 3
}, {
  "value": "9568446 解压APP失败",
  "id": "9568446-解压app失败",
  "level": 3
}, {
  "value": "9568447 APP中没有能在当前设备安装的包",
  "id": "9568447-app中没有能在当前设备安装的包",
  "level": 3
}, {
  "value": "9568448 验证APP签名失败",
  "id": "9568448-验证app签名失败",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bm工具",
        children: "bm工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bundle Manager（包管理工具，简称bm）是实现应用安装、卸载、更新、查询等功能的工具，bm为开发者提供基本的应用安装包的调试能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求hdc工具",
      children: "环境要求（hdc工具）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用本工具前，开发者需要先获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
        children: "hdc工具"
      }), "，执行hdc shell。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bm工具命令列表",
      children: "bm工具命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令，用于查询bm支持的命令信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装命令，用于安装应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uninstall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卸载命令，用于卸载应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询命令，用于查询应用的相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理命令，用于清理应用的缓存和数据。在user版本下打开开发者模式可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "get"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取udid命令，用于获取设备的udid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "quickfix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快速修复相关命令，用于执行补丁相关操作，如补丁安装、补丁查询。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用执行编译AOT命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copy-ap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "把应用的ap文件拷贝到/data/local/pgo目录下，供shell用户读取文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump-dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询应用依赖的模块信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump-shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询应用间HSP应用信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump-overlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印overlay应用的overlayModuleInfo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump-target-overlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印目标应用的所有关联overlay应用的overlayModuleInfo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "install-plugin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装插件命令，用于安装插件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uninstall-plugin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卸载插件命令，用于卸载插件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "帮助命令help",
      children: "帮助命令（help）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\nbm help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userid",
      children: "userId"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示当前系统账号的编号，系统账号的相关接口请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-osaccount/js-apis-osaccount",
        children: "系统账号管理模块"
      }), "，下面给出几种常见的系统账号。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "userId = 100，表示编号为100的系统账号，系统默认账号，在设备出厂首次启动时由系统账号管理模块创建，且创建完成后会在100账号下安装所有的预置应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "userId = 102，表示编号为102的系统账号，由系统账号管理模块创建，仅支持系统应用创建账号。在100账号下安装的应用，在102账号下不会显示，如有需求，需要在102账号下重新安装。在创建102账号过程中，系统会在102账号下安装预置系统应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "userId = 0，表示共有系统账号，也叫账号0，该共有系统账号和系统账号编号不同，不是系统账号管理模块创建的。在账号0下安装的应用，所有系统账号共享，会在每个系统账号下都会显示。所有三方应用都不能安装到账号0下。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安装命令install",
      children: "安装命令（install）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm install [-h] [-p filePath] [-r] [-w waitingTime] [-s hspDirPath] [-u userId] [-d]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "安装命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定待安装的HAP/HSP路径，多HAP/HSP应用可指定多HAP/HSP所在文件夹路径。从API version 22开始，支持指定待安装的APP路径，也可指定只存在一个APP的文件夹路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，覆盖安装一个HAP/HSP。默认缺省，缺省时表示覆盖安装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["安装应用间HSP时为必选参数，其他场景为可选参数。用于指定待安装应用间HSP的路径。指定目录的时候，每个路径目录下只能存在一个HSP。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  应用间HSP不对三方应用开放，三方无法安装应用间HSP。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，安装HAP时指定bm工具等待时间，最小的等待时长为180s，最大的等待时长为600s, 默认缺省为180s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userid",
              children: "用户"
            }), "，默认在当前活跃用户下安装应用。仅支持在当前活跃用户或0用户下安装。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果当前活跃用户是100，使用命令bm install -p /data/local/tmp/ohos.app.hap -u 102安装时，只会在当前活跃用户100下安装应用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，允许应用降级安装，即设备已安装较高版本的应用，也可以覆盖安装较低版本的应用。仅支持签名证书分发类型为app_gallery或者签名证书类型为debug的三方应用降级安装。从API version 23开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 安装一个hap\nbm install -p /data/local/tmp/ohos.app.hap\n# 在100用户下安装一个hap\nbm install -p /data/local/tmp/ohos.app.hap -u 100\n# 覆盖安装一个hap\nbm install -p /data/local/tmp/ohos.app.hap -r\n# 安装一个应用间共享库\nbm install -s xxx.hsp\n# 同时安装使用方应用和其依赖的应用间共享库\nbm install -p aaa.hap -s xxx.hsp yyy.hsp\n# 同时安装HAP和应用内共享库\nbm install -p /data/local/tmp/hapPath/\n# 安装一个hap,等待时间为180s\nbm install -p /data/local/tmp/ohos.app.hap -w 180\n# 设备已安装了一个高版本的应用，覆盖安装一个同包名低版本的hap\nbm install -p /data/local/tmp/ohos.app.hap -d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卸载命令uninstall",
      children: "卸载命令（uninstall）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm uninstall [-h] [-n bundleName] [-m moduleName] [-k] [-s] [-v versionCode] [-u userId]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卸载命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定Bundle名称卸载应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，应用模块名称，指定卸载应用的一个模块。默认卸载所有模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，卸载应用时保存应用数据。默认卸载应用时不保存应用数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据场景判断，卸载应用间HSP时必选参数，其他场景为可选参数。卸载指定的共享库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，指定共享包的版本号。默认卸载同包名的所有共享包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userid",
              children: "用户"
            }), "，默认在当前活跃用户下卸载应用。仅支持在当前活跃用户或0用户下卸载应用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果当前活跃用户是100，使用命令bm uninstall -n com.ohos.app -u 102卸载时，只会在当前活跃用户100下卸载应用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 卸载一个应用\nbm uninstall -n com.ohos.app\n# 在用户100下卸载一个应用\nbm uninstall -n com.ohos.app -u 100\n# 卸载应用的一个模块\nbm uninstall -n com.ohos.app -m entry\n# 卸载一个shared bundle\nbm uninstall -n com.ohos.example -s\n# 卸载一个shared bundle的指定版本\nbm uninstall -n com.ohos.example -s -v 100001\n# 卸载一个应用，并保留用户数据\nbm uninstall -n com.ohos.app -k\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询应用信息命令dump",
      children: "查询应用信息命令（dump）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm dump [-h] [-a] [-g] [-n bundleName] [-s shortcutInfo] [-d deviceId] [-l label] [-u userId]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查询命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询系统已经安装的所有应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询系统中签名为调试类型的应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询指定Bundle名称的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询指定Bundle名称下的快捷方式信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询指定设备中的包信息。默认查询当前设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，用于查询指定Bundle名称的label值（应用的名称），需要与-n或-a参数组合使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  从API version 20开始支持该命令。如果在Windows环境下输出结果包含特殊字符或中文乱码，需在cmd控制台中手动执行命令chcp 65001，将cmd控制台编码修改为UTF-8。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，查询指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userid",
              children: "用户"
            }), "下的应用信息，默认在当前活跃用户下查询应用信息。仅支持在当前活跃用户或0用户下查询。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果当前活跃用户是100，使用命令bm dump -n com.ohos.app -u 102查询时，只会在当前活跃用户100下查询应用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示所有已安装的Bundle名称\nbm dump -a\n# 查询系统中签名为调试类型的应用包名\nbm dump -g\n# 查询该应用的详细信息\nbm dump -n com.ohos.app\n# 在用户100下查询该应用的详细信息\nbm dump -n com.ohos.app -u 100\n# 查询该应用的快捷方式信息\nbm dump -s -n com.ohos.app\n# 查询跨设备应用信息\nbm dump -n com.ohos.app -d xxxxx\n# 查询该应用的label值（应用的名称）\nbm dump -n com.ohos.app -l\n# 显示所有已安装应用的bundle名称和label值（应用的名称）\nbm dump -a -l\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "清理命令clean",
      children: "清理命令（clean）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm clean [-h] [-c] [-n bundleName] [-d] [-i appIndex] [-u userId]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "清理命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c -n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-n为必选参数，-c为可选参数。清除指定Bundle名称的缓存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d -n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-n为必选参数，-d为可选参数。清除指定Bundle名称的数据目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，清除分身应用的数据目录。默认为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，清理指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userid",
              children: "用户"
            }), "下的数据，默认在当前活跃用户下清理数据。仅支持在当前活跃用户或0用户下清理数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果当前活跃用户是100，使用命令bm clean -c -n com.ohos.app -u 102清理数据时，只会在当前活跃用户100下清理。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 清理该应用下的缓存数据\nbm clean -c -n com.ohos.app\n# 在用户100下清理该应用下的缓存数据\nbm clean -c -n com.ohos.app -u 100\n# 清理该应用下的用户数据\nbm clean -d -n com.ohos.app\n# 执行结果\nclean bundle data files successfully.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取udid命令get",
      children: "获取udid命令（get）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm get [-h] [-u]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "获取udid命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，获取设备的udid。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 获取设备的udid\nbm get -u\n# 执行结果\nudid of current device is :\n23CADE0C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速修复命令quickfix",
      children: "快速修复命令（quickfix）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm quickfix [-h] [-a -f filePath [-t targetPath] [-d] [-o]] [-q -b bundleName] [-r -b bundleName]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注：hqf文件制作方式可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool#hqf%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "HQF打包指令"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "快速修复命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a -f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-a为可选参数，指定-a后，-f为必选参数。执行快速修复补丁安装命令，file-path对应hqf文件，支持传递1个或多个hqf文件，或传递hqf文件所在的目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-q -b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-q为可选参数，指定-q后，-b为必选参数。根据包名查询补丁信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r -b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-r为可选参数，指定-r后，-b为必选参数。根据包名卸载未使能的补丁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，快速修复应用到指定目标路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，应用快速修复调试模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，应用快速修复覆盖模式，该模式下so将被解压覆盖到应用的so目录中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 根据包名查询补丁包信息\nbm quickfix -q -b com.ohos.app\n# 执行结果\n# Information as follows:\n# ApplicationQuickFixInfo:\n#  bundle name: com.ohos.app\n#  bundle version code: xxx\n#  bundle version name: xxx\n#  patch version code: x\n#  patch version name:\n#  cpu abi:\n#  native library path:\n#  type:\n\n# 快速修复补丁安装\nbm quickfix -a -f /data/app/\n# 执行结果\napply quickfix succeed.\n# 快速修复补丁卸载\nbm quickfix -r -b com.ohos.app\n# 执行结果\ndelete quick fix successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "共享库查询命令dump-shared",
      children: "共享库查询命令（dump-shared）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm dump-shared [-h] [-a] [-n bundleName]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "共享库查询命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询系统中所有已安装的共享库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询指定包名的共享库详细信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示所有已安装共享库包名\nbm dump-shared -a\n# 显示该共享库的详细信息\nbm dump-shared -n com.ohos.lib\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "共享库依赖关系查询命令dump-dependencies",
      children: "共享库依赖关系查询命令（dump-dependencies）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm dump-dependencies [-h] [-n bundleName] [-m moduleName]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "共享库依赖关系查询命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，查询指定应用依赖的共享库信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，查询指定应用指定模块依赖的共享库信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 查询指定应用指定模块依赖的共享库信息\nbm dump-dependencies -n com.ohos.app -m entry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用执行编译aot命令compile",
      children: "应用执行编译AOT命令（compile）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm compile [-h] [-m mode] [-r bundleName] [-a]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "compile命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，编译所有应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，可选值为partial或者full。根据包名编译应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，移除应用的结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 根据包名编译应用\nbm compile -m partial com.example.myapplication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拷贝ap文件命令copy-ap",
      children: "拷贝ap文件命令（copy-ap）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拷贝ap文件到指定应用的/data/local/pgo路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm copy-ap [-h] [-a] [-n bundleName]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "copy-ap命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，默认所有包相关ap文件。拷贝所有包相关ap文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，默认当前应用包名。根据包名拷贝对应包相关的ap文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 根据包名移动对应包相关的ap文件\nbm copy-ap -n com.example.myapplication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询overlay应用信息命令dump-overlay",
      children: "查询overlay应用信息命令（dump-overlay）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm dump-overlay [-h] [-b bundleName] [-m moduleName] [-t targetModuleName] [-u userId]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dump-overlay命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，获取指定Overlay应用的所有OverlayModuleInfo信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，根据指定Overlay特征module的名称查询OverlayModuleInfo信息，默认当前Overlay应用主模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，根据指定目标module的名称查询OverlayModuleInfo信息，默认参数为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，在指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userid",
              children: "用户"
            }), "下查询OverlayModuleInfo信息，默认在当前活跃用户下查询。仅支持在当前活跃用户或0用户下查询。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果当前活跃用户是100，使用命令bm dump-overlay -b com.ohos.app -u 102查询OverlayModuleInfo信息，只会返回当前活跃用户100下的OverlayModuleInfo信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 根据包名来获取overlay应用com.ohos.app中的所有OverlayModuleInfo信息\nbm dump-overlay -b com.ohos.app\n\n# 在用户100下，根据包名来获取overlay应用com.ohos.app中的所有OverlayModuleInfo信息\nbm dump-overlay -b com.ohos.app -u 100\n\n# 根据包名和module来获取overlay应用com.ohos.app中overlay module为libraryModuleName的所有OverlayModuleInfo信息\nbm dump-overlay -b com.ohos.app -m libraryModuleName\n\n# 根据目标包名和module来获取overlay应用com.ohos.app中目标module为entryModuleName的所有OverlayModuleInfo信息\nbm dump-overlay -b com.ohos.app -t entryModuleName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询应用的overlay相关信息命令dump-target-overlay",
      children: "查询应用的overlay相关信息命令（dump-target-overlay）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询目标应用的所有关联overlay应用的overlayModuleInfo信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm dump-target-overlay [-h] [-b bundleName] [-m moduleName] [-u userId]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dump-target-overlay命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，获取指定应用的所有OverlayBundleInfo信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，默认当前应用主模块名。根据指定的包名和module名查询OverlayModuleInfo信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-u"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，在指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userid",
              children: "用户"
            }), "下查询OverlayModuleInfo信息，默认在当前活跃用户下查询。仅支持在当前活跃用户或0用户下查询。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如果当前活跃用户是100，使用命令bm dump-target-overlay -b com.ohos.app -u 102查询目标应用com.ohos.app中的所有关联的OverlayBundleInfo信息，只会返回当前活跃用户100下的OverlayModuleInfo信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 根据包名来获取目标应用com.ohos.app中的所有关联的OverlayBundleInfo信息\nbm dump-target-overlay -b com.ohos.app\n\n# 在用户100下，根据包名来获取目标应用com.ohos.app中的所有关联的OverlayBundleInfo信息\nbm dump-target-overlay -b com.ohos.app -u 100\n\n# 根据包名和module来获取目标应用com.ohos.app中目标module为entry的所有关联的OverlayModuleInfo信息\nbm dump-target-overlay -b com.ohos.app -m entry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安装插件命令install-plugin",
      children: "安装插件命令（install-plugin）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm install-plugin [-h] [-n hostBundleName] [-p filePath]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "install-plugin命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定待安装插件的应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定插件文件路径。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 安装一个插件\nbm install-plugin -n com.ohos.app -p /data/plugin.hsp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654513)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在同一个应用中安装同一个插件，则视作插件版本更新，插件不支持降级安装；插件版本更新后，需要重启应用插件才能生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不推荐安装与宿主应用模块同名的插件，目前运行态暂不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卸载插件命令uninstall-plugin",
      children: "卸载插件命令（uninstall-plugin）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bm uninstall-plugin [-h] [-n hostBundleName] [-p pluginBundleName]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "uninstall-plugin命令参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，指定插件的包名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 卸载一个插件\nbm uninstall-plugin -n com.ohos.app -p com.ohos.plugin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bm工具错误码",
      children: "bm工具错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "301-系统账号不存在",
      children: "301 系统账号不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: user not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统账号不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装应用时，系统账号ID不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "304-当前系统账号没有安装hap包",
      children: "304 当前系统账号没有安装HAP包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: user does not install the hap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载操作时，当前系统账号没有安装HAP包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统账号下未安装任何HAP包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统账号下未安装任何HAP包，请不要执行卸载应用操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568319-签名文件异常",
      children: "9568319 签名文件异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: cannot open signature file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装应用过程中，出现签名文件打开异常，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名文件存在异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568320-签名文件不存在",
      children: "9568320 签名文件不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: no signature file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装未签名的HAP/HSP包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP/HSP包没有签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请开发者根据实际场景选择自动签名或者手动签名，例如无法连接互联网的情况下推荐使用手动签名方式，详情参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section54361623194519",
        children: "使用场景说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法三. 如果安装APP时报这个错误码，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
        children: "工程级build-profile.json5文件"
      }), "里配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section03812484215",
        children: "packOptions"
      }), "的appWithSignedPkg属性为true，保证APP里的HAP/HSP有签名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568321-签名文件解析失败",
      children: "9568321 签名文件解析失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: fail to parse signature file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装时签名文件解析失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名文件存在异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568323-签名摘要验证未通过",
      children: "9568323 签名摘要验证未通过"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to not bad digest."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装时签名验证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568324-签名完整性校验未通过",
      children: "9568324 签名完整性校验未通过"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to out of integrity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装时签名验证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568326-签名公钥存在异常",
      children: "9568326 签名公钥存在异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to bad public key."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装时签名验证失败，签名公钥存在异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568327-签名获取异常",
      children: "9568327 签名获取异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to bad bundle signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装时签名验证失败，签名获取异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568328-未找到配置文件区块",
      children: "9568328 未找到配置文件区块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to no profile block."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装时签名验证失败，未找到配置文件区块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568330-初始化签名源失败",
      children: "9568330 初始化签名源失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to init source failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装时签名验证失败，初始化签名源失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包签名不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568257-签名文件pkcs7校验失败",
      children: "9568257 签名文件Pkcs7校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: fail to verify pkcs7 file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装应用时签名Pkcs7校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书链不完整或不受信任。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签名算法不匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据被篡改或签名文件损坏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签名格式不匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "私钥不匹配。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568344-解析配置文件失败",
      children: "9568344 解析配置文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install parse profile prop check error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804848)/* ["default"] */.A) + "",
        width: "858",
        height: "213"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install parse profile prop check error”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "app.json5配置文件"
        }), "中的bundleName、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "module.json5配置文件"
        }), "中name不符合命名规则。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据命名规则调整app.json5配置文件中bundleName、module.json5文件中的name字段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568305-依赖的模块不存在",
      children: "9568305 依赖的模块不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HAP or HSP because the dependent module does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: Failed to install the HAP or HSP because the dependent module does not exist.”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行/调试的应用依赖的动态共享包（HSP）模块未安装导致安装报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景一：依赖的HSP与HAP在同一工程内："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方法一：先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4install",
            children: "bm install -p"
          }), "命令安装依赖的动态共享包（HSP）模块，再在应用运行配置页勾选Keep Application Data，点击OK保存配置，再运行/调试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(278301)/* ["default"] */.A) + "",
            width: "1039",
            height: "667"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法二：在运行配置页，选择Deploy Multi Hap标签页，勾选Deploy Multi Hap Packages，选择依赖的模块，点击OK保存配置，再进行运行/调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(303130)/* ["default"] */.A) + "",
            width: "1041",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法三：单击Run > Edit Configurations，在General中，勾选Auto Dependencies。点击OK保存配置，再运行/调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(318216)/* ["default"] */.A) + "",
            width: "1035",
            height: "669"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景二：依赖的HSP与HAP不在同一工程内："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在安装HAP前，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4install",
        children: "bm install"
      }), "命令安装依赖的HSP。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景三：依赖集成态HSP："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果依赖集成态HSP，通过hdc工具安装应用时，需要同时或提前安装集成态HSP编译后的包。是否依赖集成态HSP，可以通过如下方法查询："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio自动安装运行应用时，查看Run中的日志，如果存在remote_hsp目录，说明依赖集成态HSP，remote_hsp目录下的HSP文件就是集成态HSP编译后的包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(232794)/* ["default"] */.A) + "",
        width: "1903",
        height: "268"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568259-安装解析配置文件缺少字段",
      children: "9568259 安装解析配置文件缺少字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install parse profile missing prop."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153957)/* ["default"] */.A) + "",
        width: "619",
        height: "108"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install parse profile missing prop”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置文件app.json5和module.json5中必填字段缺失。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方法1：请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
            children: "app.json5配置文件"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "查看并补充必填字段。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法2：通过hilog日志判断缺失字段。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启落盘命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hilog -w start\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "落盘位置：/data/log/hilog。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开日志查看“profile prop %{public}s is missing”。如“profile prop icon is missing”表示“icon”字段缺失。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568258-安装应用的releasetype与已安装应用的releasetype不相同",
      children: "9568258 安装应用的releaseType与已安装应用的releaseType不相同"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install releaseType target not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193475)/* ["default"] */.A) + "",
        width: "620",
        height: "112"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install releaseType target not same”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：设备上已安装的旧HAP和现在要安装的新HAP所使用的SDK中的releaseType值不一样。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：安装的应用为多HAP时，每个HAP所使用的SDK中的releaseType值不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：请先卸载设备上已安装的HAP（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再安装新的HAP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：使用相同版本的SDK对HAP重新打包，保证多HAP的releaseType值一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568260-安装内部错误",
      children: "9568260 安装内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install internal error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中，内部服务异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请尝试重启设备后重新安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568261-安装器对象构造失败",
      children: "9568261 安装器对象构造失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install host installer failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取安装器对象失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中，内部服务异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请尝试重启设备后重新安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568262-插件安装命令错误",
      children: "9568262 插件安装命令错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install parse failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件安装使用的命令不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装插件用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4install",
        children: "bm install"
      }), "命令。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装插件请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6%E5%91%BD%E4%BB%A4install-plugin",
        children: "bm install-plugin"
      }), "命令。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568265-安装过程中内部参数有误",
      children: "9568265 安装过程中内部参数有误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install param error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部参数不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中后台服务出现异常，导致参数发生变化，不符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请尝试重启设备后重新安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568270-安装包名称不正确",
      children: "9568270 安装包名称不正确"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install invalid hap name."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包名称后缀不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包名称后缀不正确，非.hap、.hsp、.hqf结尾。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查安装包的名称后缀是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568276-安装应用已存在",
      children: "9568276 安装应用已存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install already exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用已存在，bundleName重复导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bundleName重复导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请更换应用的bundleName。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568267-entry模块已存在",
      children: "9568267 entry模块已存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install entry already exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待安装应用的entry模块已存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多模块应用安装要求entry模块唯一。由于待安装的模块包和已安装的模块包名称不同，但均为entry类型，违反了entry唯一性，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请先卸载设备上已安装的HAP（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再安装新的HAP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查并确保待安装包的entry模块名称与已安装的entry模块名相同，或把待安装模块的类型改为feature后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568268-安装状态错误",
      children: "9568268 安装状态错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install state error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用安装状态更新失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于上一个应用安装包过大耗时长，应用安装时上一个应用安装任务未结束，导致安装状态更新失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请等待上一个应用安装完成后再重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568269-文件路径无效",
      children: "9568269 文件路径无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install file path invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装时传入的安装包路径无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装包路径不存在，如拼写有误等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装包路径长度超过256字节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查安装包的路径是否存在且有访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查安装包路径长度不超过256字节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568322-由于应用来源不可信签名验证失败",
      children: "9568322 由于应用来源不可信，签名验证失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to not trusted app source."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315125)/* ["default"] */.A) + "",
        width: "865",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: signature verification failed due to not trusted app source”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景一：签名时使用了", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
          children: "发布profile文件"
        }), "。发布证书签名的应用不能启动调试或运行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景二：在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section153288223224",
          children: "build-profile.json5"
        }), "文件中，配置的profile文件与.cer文件不匹配。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景三：签名中未包含该调试设备的UDID。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景一：使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
          children: "调试profile文件"
        }), "重新签名应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景二：请确保profile文件是由配置中的.cer文件生成的，可以登录", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/",
          children: "AppGallery Connect"
        }), "，选择“证书、APP ID和Profile”，在左侧导航栏选择“证书、APP ID和Profile > Profile”，进入“Profile”页面，选择配置的profile文件，右侧操作点击“查看”，确认“查看Profile”页面中“归属证书”是否与配置的.cer文件一致。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景三："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section18815157237",
          children: "自动签名"
        }), "。在连接设备后，重新为应用进行签名。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568286-安装应用的签名证书profile文件中的类型与已安装应用的不相同",
      children: "9568286 安装应用的签名证书profile文件中的类型与已安装应用的不相同"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install provision type not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在启动调试或运行应用/服务时，由于安装应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中的类型与已安装应用的不相同，导致安装HAP出现错误。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备上已安装应用的签名证书profile文件中的类型与待安装应用不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保设备上已安装应用签名证书profile文件中的类型与待安装应用的类型一致，使用相同类型的profile文件签名，再安装新的HAP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卸载设备上已安装的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再安装新的HAP。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568288-磁盘空间不足导致安装失败",
      children: "9568288 磁盘空间不足导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to insufficient disk memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用安装时会新建文件或目录，由于设备存储空间不足，创建文件或目录失败，导致应用安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备存储空间不足，创建文件或目录失败，导致应用安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看设备存储空间并清理，保证满足安装所需空间，再重试安装应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568289-权限请求失败导致安装失败",
      children: "9568289 权限请求失败导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to grant request permissions failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(330168)/* ["default"] */.A) + "",
        width: "764",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示授予请求权限失败。从API version 18开始，会在请求失败信息后打印具体的权限名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用APL等级为normal，只能使用APL等级为normal的权限，如果使用了system_basic或system_core等级的权限，将导致报错，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E6%9C%BA%E5%88%B6%E4%B8%AD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "权限机制中的基本概念"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据报错描述中的权限名称在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
        children: "应用权限列表"
      }), "中排查权限是否存在。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果不存在，需要查看需要该权限的API接口的文档说明，以确保权限支持申请。例如：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectionsetdevicepairingconfirmation",
          children: "setDevicePairingConfirmation"
        }), "接口所需权限中，ohos.permission.MANAGE_BLUETOOTH仅系统应用支持申请，此时请更换为ohos.permission.ACCESS_BLUETOOTH权限。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果存在，请查看对应的权限文档的要求，申请权限，同时请关注权限是否支持申请。例如：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
          children: "受限开放权限"
        }), "请参考文档", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
          children: "申请受限权限"
        }), "。", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps",
          children: "企业类应用可用权限"
        }), "仅企业类应用支持申请，三方应用不支持。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568290-更新hap-token失败导致安装失败",
      children: "9568290 更新HAP token失败导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to update hap token failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用安装过程中，更新HAP时，应用token授权失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用安装或更新时，调用元能力的更新token接口，接口返回失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568291-singleton不一致导致安装失败",
      children: "9568291 singleton不一致导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to singleton not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新时，应用已安装的HAP包和更新包app.json5配置文件中singleton配置（从API version 9开始废弃）不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用已安装的HAP包和更新包app.json5配置文件中singleton配置（从API version 9开始废弃）不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案1：卸载已安装的应用包（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再安装新的应用包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案2：更新包调整singleton配置，与已安装包配置一致，重新打包，再更新应用包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568293-syscap不一致导致安装失败",
      children: "9568293 SysCap不一致导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to check syscap filed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SysCap不一致导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多个HAP/HSP中配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/syscap/syscap",
        children: "SysCap"
      }), "不一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查多HAP/HSP中配置的SysCap，请保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568297-由于设备sdk版本较低导致安装失败",
      children: "9568297 由于设备sdk版本较低导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to older sdk version in the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(560507)/* ["default"] */.A) + "",
        width: "853",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install failed due to older sdk version in the device”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该问题是由于编译打包所使用的SDK版本与设备镜像版本不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景一：设备上的镜像版本低于编译打包的SDK版本，请更新设备镜像版本。查询设备镜像版本命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell param get const.ohos.apiversion\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果镜像提供的api版本为10，且应用编译所使用的SDK版本也为10，仍出现该报错，可能是由于镜像版本较低，未兼容新版本SDK校验规则，请将镜像版本更新为最新版本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景二：对于需要运行在HarmonyOS设备上的应用，请确认runtimeOS已改为HarmonyOS。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568299-安装信息异常",
      children: "9568299 安装信息异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to ark native file is incompatible."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装信息异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装信息为空或者出现异常导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备重启之后再重新安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568300-应用模块名不唯一导致安装失败",
      children: "9568300 应用模块名不唯一导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: moduleName is not unique."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多模块应用安装过程中，由于模块命名冲突，模块唯一性校验失败，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多模块应用安装过程中，存在模块名称冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看当前应用所有模块名，与各个模块的module.json5中的name进行比较，保证不一致后，重新打包，进行应用安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568332-签名不一致导致安装失败",
      children: "9568332 签名不一致导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install sign info inconsistent."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397296)/* ["default"] */.A) + "",
        width: "859",
        height: "211"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行应用/服务时，安装HAP出现错误，提示“error: install sign info inconsistent”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设备上已安装的应用与新安装的应用中签名不一致或者多个包（HAP和HSP）之间的签名存在差异。若两个应用的签名", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section462703710326",
          children: "密钥"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section16423184171915",
          children: "APP ID"
        }), "中至少有一项相同，则认为它们的签名一致。如果在DevEco Studio的“Edit Configurations”中勾选了“Keep Application Data”（即不卸载应用，直接覆盖安装），并且重新进行了签名，将导致该报错。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果某个应用被卸载但是保留了数据，那么后面安装相同包名的应用时，需要校验其签名信息的一致性。如果两者签名信息中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section462703710326",
          children: "密钥"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section16423184171915",
          children: "APP ID"
        }), "都不一致，则会导致该报错。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请卸载设备上已安装的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），或取消勾选“Keep Application Data”后，重新安装新的应用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果是因不同团队提供的HSP导致签名不一致问题，可以采用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-typical-scenarios/integrated-hsp",
          children: "集成态HSP"
        }), "的方式统一提供HSP；在多HAP包的情况下，必须确保所有HAP包的签名一致。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果某个应用被卸载但是保留了数据，后面安装相同包名但签名信息不一致的应用时，安装失败。如果出现这种情况，则需要把之前已卸载掉的应用重新安装之后，执行不保留数据地卸载，这样相同包名但签名信息不一致的应用才能安装成功。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568329-签名信息验证失败",
      children: "9568329 签名信息验证失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: verify signature failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(511021)/* ["default"] */.A) + "",
        width: "803",
        height: "137"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名信息中的包名与应用的包名（bundleName）不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景一：用户导入了三方提供的HSP模块，且该HSP既非", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-typical-scenarios/integrated-hsp",
          children: "集成态HSP"
        }), "，又非同包名的HSP，造成包名不一致。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：用户使用了错误的签名文件（后缀为.p7b）进行签名，造成包名不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：HSP只能给同包名的应用使用，只有集成态HSP可以给不同包名的应用使用。需要用户与三方开发者确认，三方开发者应提供集成态HSP、或同包名的HSP给用户使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["场景二：检查签名流程和签名证书，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing",
          children: "应用/元服务签名"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568266-安装权限拒绝",
      children: "9568266 安装权限拒绝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install permission denied."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925755)/* ["default"] */.A) + "",
        width: "894",
        height: "91"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hdc install安装HAP时出现错误，提示“code:9568266 error: install permission denied”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc install不能安装release签名的企业应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请使用hdc install指令安装调试debug签名的企业应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568337-安装解析失败",
      children: "9568337 安装解析失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install parse unexpected."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用推送到设备安装时，报错包管理打开HAP文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：设备存储空间已满，导致hdc file send文件后，因存储空间不足导致设备中文件损坏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：推送HAP包到设备过程HAP包损坏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：查看设备存储空间，若已满，清理存储满足安装所需空间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：查看本地HAP与推送到设备上HAP的md5值，若不一致则表示推送过程HAP损毁，请尝试重传。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568316-数据代理中apl权限字段描述权限低",
      children: "9568316 数据代理中APL权限字段描述权限低"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: apl of required permission in proxy data is too low."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "proxyData标签requiredReadPermission和requiredWritePermission属性验证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户工程module.json中，proxyData标签requiredReadPermission和requiredWritePermission属性验证失败，这两个属性要求system_basic或system_core权限等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查应用定义的proxyData内容是否符合要求，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#proxydata%E6%A0%87%E7%AD%BE",
          children: "proxyData标签"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568315-数据代理uri错误",
      children: "9568315 数据代理URI错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uri in proxy data is wrong."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "proxyData标签uri属性验证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户工程module.json中，proxyData标签uri属性验证失败，不满足uri格式要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查应用定义的proxyData内容是否符合要求，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#proxydata%E6%A0%87%E7%AD%BE",
          children: "proxyData标签"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568318-签名文件无效",
      children: "9568318 签名文件无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature file path is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名文件无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名文件异常或者安装包损坏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "重新签名后安装调试。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568325-由于文件过大签名验证失败",
      children: "9568325 由于文件过大，签名验证失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: signature verification failed due to oversize file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于文件过大，签名验证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名文件大小超过限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "或者重新申请签名证书，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "重新签名后安装调试。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568336-应用调试类型与已安装应用不一致",
      children: "9568336 应用调试类型与已安装应用不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install debug type not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用调试类型（app.json的debug字段）与已安装应用不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用DevEco Studio的debug按钮安装了应用，后面打包之后又通过hdc install方式安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卸载已安装的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），重新安装新应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568296-包类型错误",
      children: "9568296 包类型错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to error bundle type."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bundleType错误导致应用安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新安装应用的bundleType与已安装的有相同bundleName应用不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方法一：卸载已安装的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），重新安装新应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方法二：修改应用的bundleType，与已安装应用保持一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568292-userid为0的用户只能安装singleton应用",
      children: "9568292 UserID为0的用户只能安装singleton应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to zero user can only install singleton app."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UserID 0用户只允许安装singleton权限应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UserID 0用户安装了非singleton权限的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用是非singleton权限的，不需要指定用户，直接安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm install -p /data/hap名.hap\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568263-无法降级安装",
      children: "9568263 无法降级安装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install version downgrade."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正在安装应用的VersionCode小于系统中已安装应用的VersionCode，安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正在安装应用的VersionCode小于系统中已安装应用的VersionCode。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卸载已安装的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），重新安装新应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于已安装的证书分发类型为app_gallery或者签名证书类型为debug的三方应用，当新安装的版本低于当前版本时，支持降级安装，可以使用-d命令实现降级安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm install -p /data/example.hap -d\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568264-安装检验签名一致性失败",
      children: "9568264 安装检验签名一致性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install verification failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装时，校验签名一致性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["校验唯一标识", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/common-problem-of-application#%E4%BB%80%E4%B9%88%E6%98%AFappidentifier",
        children: "appIdentifier"
      }), "不一样，导致安装失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法一：如果应用可以卸载，可以先卸载应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再重新安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法二：签名文件Profile可以用文本编辑器打开，搜索app-identifier字段，调整安装参数中的appIdentifier，需要和签名文件Profile保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568301-模块类型不一致",
      children: "9568301 模块类型不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: moduleName is inconsistent."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正在安装的模块名称在系统中已经存在，但模块名称不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待安装应用模块名称在系统中已存在，但模块类型不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查系统中已安装应用的模块名是否与待安装的模块名重复，若模块名称一致但类型不一致，修改对应模块module.json5中type属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568303-企业设备管理禁止安装",
      children: "9568303 企业设备管理禁止安装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HAP because the installation is forbidden by enterprise device management."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存在应用管控策略，安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存在应用管控策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于企业管控，暂无解决方案。请提", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
        children: "在线工单"
      }), "获取帮助。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568304-应用不支持当前设备类型",
      children: "9568304 应用不支持当前设备类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: device type is not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正在安装的应用不支持当前设备类型，安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正在安装的应用不支持当前设备类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如需要适配当前设备，请在应用设备类型配置中增加当前设备类型。应用deviceTypes配置包含phone（手机）、tablet（平板）、2in1（2合1设备）、tv（智慧屏）、wearable（智能手表）和car（车机）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568308-应用包类型不一致",
      children: "9568308 应用包类型不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install bundleType not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用包类型不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装多HAP应用时，存在两个模块的bundleType属性不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查并确保多HAP应用中各模块app.json5的bundleType属性一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568317-应用的多进程配置与系统配置不匹配",
      children: "9568317 应用的多进程配置与系统配置不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: isolationMode does not match the system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装应用时，设置的isolationMode与系统配置项允许的系统配置不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景一：设备支持隔离模式，即persist.bms.supportIsolationMode为true时，HAP配置的isolationMode为nonisolationOnly。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景二：设备不支持隔离模式，即persist.bms.supportIsolationMode为false时，HAP配置的isolationMode为isolationOnly。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照设备的隔离模式配置HAP配置文件isolationMode属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 查询设备persist.bms.supportIsolationMode值，若返回errNum is:106说明没配置\nhdc shell\nparam get persist.bms.supportIsolationMode\n# 配置设备persist.bms.supportIsolationMode值\nhdc shell\nparam set persist.bms.supportIsolationMode [true|false]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568310-兼容策略不同",
      children: "9568310 兼容策略不同"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: compatible policy not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新包与已安装包兼容策略不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用已安装，再安装一个同包名的应用间共享库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用间共享库已安装，再安装一个同包名的应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卸载已安装的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成）或应用间共享库，再安装新包。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568391-包管理服务已停止",
      children: "9568391 包管理服务已停止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: bundle manager service is died."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包管理服务已停止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统出现未知的异常，导致包管理服务已停止或者异常退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重复上述步骤3到5次后依旧安装失败，请查询设备的/data/log/faultlog/faultlogger/目录下是否存在包含foundation字样的crash文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell\ncd /data/log/faultlog/faultlogger/\nls -ls\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导出crash文件和日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/faultlog/faultlogger/\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568393-验证代码签名失败",
      children: "9568393 验证代码签名失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: verify code signature failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验证代码签名失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包没有代码签名信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装最新版本DevEco Studio，重新签名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用当前使用的签名不符合HarmonyOS应用签名的要求，应该替换为HarmonyOS应用的签名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568399-拷贝文件失败",
      children: "9568399 拷贝文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: copy file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装应用过程中，拷贝文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拷贝源文件路径或目标路径为无效路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "源文件打开失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取源文件状态失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "源文件的大小无效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "源文件拷贝失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "源文件没有访问权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更改文件权限失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568401-调试包仅支持运行在开发者模式设备",
      children: "9568401 调试包仅支持运行在开发者模式设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: debug bundle can only be installed in developer mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试包仅支持运行在开发者模式设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终端设备未开启“开发者模式”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端系统查看“设置 > 系统”中是否有“开发者选项”，如果不存在，可在“设置 > 关于本机”连续七次单击“版本号”，直到提示“开启开发者模式”，点击“确认开启”后输入PIN码（如果已设置），设备将自动重启。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USB数据线连接终端和PC，在“设置 > 系统 > 开发者选项”中，打开“USB调试”开关，弹出的“允许USB调试”的弹框，点击“允许”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动调试或运行应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568404-传递签名配置文件失败",
      children: "9568404 传递签名配置文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: delivery sign profile failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中，传递代码签名配置文件出现异常，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件路径不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建文件路径失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更改文件目录模式失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "写配置文件数据失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更改配置文件模式失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "添加配置文件数据失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568405-删除签名配置文件失败",
      children: "9568405 删除签名配置文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: remove sign profile failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用卸载过程中，删除签名配置文件出现异常，导致卸载应用失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件路径不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "加载配置文件数据失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件权限不是可写的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试卸载应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧卸载失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568381-应用进程删除失败",
      children: "9568381 应用进程删除失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uninstall killing app error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载应用时应用进程删除失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程号错误导致应用进程删除失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备重启之后再尝试卸载应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568382-卸载应用时包名或者模块名称为空",
      children: "9568382 卸载应用时包名或者模块名称为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uninstall invalid name."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载应用时bundleName为空或者moduleName为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载应用时，参数bundleName和moduleName异常为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备重启之后再尝试卸载应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568384-卸载应用时bm工具进程权限异常",
      children: "9568384 卸载应用时bm工具进程权限异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uninstall permission denied."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载应用时bm工具进程权限异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bm工具进程异常或者权限丢失，导致卸载应用时无权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备重启之后再尝试卸载应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568385-卸载服务异常",
      children: "9568385 卸载服务异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uninstall bundle mgr service error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载服务异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统出现未知的异常，导致卸载服务已停止或者异常退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试卸载应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重复上述步骤3到5次后依旧安装失败，请查询设备的/data/log/faultlog/faultlogger/目录下是否存在包含foundation字样的crash文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell\ncd /data/log/faultlog/faultlogger/\nls -ls\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导出crash文件和日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv /data/log/faultlog/faultlogger/\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568386-卸载的应用不存在",
      children: "9568386 卸载的应用不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uninstall missing installed bundle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载的应用不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要卸载的应用没有安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认要卸载的应用是否已经安装。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568388-企业设备管理不允许卸载该应用",
      children: "9568388 企业设备管理不允许卸载该应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to uninstall the HAP because the uninstall is forbidden by enterprise device management."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "企业设备管理不允许卸载该应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用被设置为不允许被卸载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由设置方取消该应用的卸载管控。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568389-未知错误导致安装失败",
      children: "9568389 未知错误导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: unknown."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未知的错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统未知的错误导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568284-安装版本不匹配",
      children: "9568284 安装版本不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install version not compatible."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装版本不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前安装HSP的版本信息与已安装HAP的版本信息不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装HSP时会做如下校验："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bundleName和HAP的一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "version和HAP的一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签名和HAP的一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卸载版本信息不匹配的HAP（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再安装HSP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改HSP版本信息与HAP一致，再安装HSP。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568287-安装包entry模块数量不合规",
      children: "9568287 安装包entry模块数量不合规"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install invalid number of entry hap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包entry模块数量不合规。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包中entry模块有多个。一个应用只能有一个entry模块，可以有多个feature模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "保留一个entry模块，其余entry模块修改为feature（修改module.json5中type字段）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568281-安装包vendor不一致",
      children: "9568281 安装包vendor不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install vendor not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包vendor不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "app.json5文件中app的vendor字段配置不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若只有一个HAP，要求与已安装应用vendor字段一致，卸载重装即可（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若包含集成态HSP，要求集成态HSP与使用方HAP的vendor字段保持一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568272-安装包体积大小无效",
      children: "9568272 安装包体积大小无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install invalid hap size."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包大小超出限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包体积超过4GB大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拆分包，保证每个安装包体积不超过4GB。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568273-应用生成uid失败导致安装失败",
      children: "9568273 应用生成UID失败，导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install generate uid error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用生成UID失败，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该设备上已安装的应用数量已超过65535，导致应用安装时分配UID失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载不必要的应用后重试（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568274-安装服务错误",
      children: "9568274 安装服务错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install installd service error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装服务错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装服务异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "清除缓存，重启设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568275-包管理服务错误",
      children: "9568275 包管理服务错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install bundle mgr service error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包管理服务错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包管理服务异常，如出现空指针导致异常等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重启设备或稍后重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568277-包名不一致导致安装失败",
      children: "9568277 包名不一致，导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install bundle name not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包名不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待安装的路径下的多个安装包包名不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查待安装路径下的安装包包名，确保所有安装包的app.json5配置文件中bundleName一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568279-版本不一致导致安装失败",
      children: "9568279 版本不一致，导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install version name not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本（versionName字段）不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待安装的路径下的多个安装包的versionName不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查待安装路径下的安装包版本，确保所有安装包的app.json5配置文件中versionName一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568280-mincompatibleversioncode不一致导致安装失败",
      children: "9568280 minCompatibleVersionCode不一致，导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install min compatible version code not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minCompatibleVersionCode字段不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待安装的路径下的多个安装包的minCompatibleVersionCode不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查待安装路径下的安装包，确保所有安装包的app.json5配置文件中minCompatibleVersionCode一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568282-targetapiversion不一致导致安装失败",
      children: "9568282 targetAPIVersion不一致，导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install releaseType target not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "targetAPIVersion字段不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待安装的路径下的多个安装包的targetAPIVersion不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查待安装路径下的安装包，确保所有安装包的app.json5配置文件中targetAPIVersion一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568314-安装应用间共享库失败",
      children: "9568314 安装应用间共享库失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HSP because installing a shared bundle specified by hapFilePaths is not allowed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装应用间共享库失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装应用间共享HSP时使用“hdc app install ***”指令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装应用间HSP时使用“hdc install -s ***”指令。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568349-操作文件时传入参数异常",
      children: "9568349 操作文件时传入参数异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: installd param error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作文件时传入参数异常，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中，传入参数无效或者传入目录路径为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568351-创建文件目录异常导致安装失败",
      children: "9568351 创建文件目录异常导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: installd create dir failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建文件目录异常，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建文件目录时没有写权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568354-删除文件目录异常导致安装失败",
      children: "9568354 删除文件目录异常导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: installd remove dir failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除文件目录失败，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除文件目录不存在，或者当前目录没有可写权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568355-安装包中提取文件失败",
      children: "9568355 安装包中提取文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: installd extract files failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装包中提取文件失败，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中，解压so的目录创建失败，导致HAP包中提取so失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568356-安装过程中重命名目录名失败",
      children: "9568356 安装过程中重命名目录名失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: installd rename dir failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重命名目录名失败，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中，重命名目录，目录名称超出260字符，或者当前目录没有可写权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568357-清理文件失败",
      children: "9568357 清理文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: installd clean dir failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理文件失败，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装过程中，待清理的文件无可写权限导致清理文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568359-安装设置selinux失败",
      children: "9568359 安装设置selinux失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: installd set selinux label failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装设置selinux失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名配置文件中APL字段错误。APL有“normal”、“system_basic”和“system_core”三种等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确认签名文件p7b中apl字段是否有误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(455584)/* ["default"] */.A) + "",
            width: "507",
            height: "111"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若apl字段有误，修改UnsgnedReleasedProfileTemplate.json文件中apl字段，并重新签名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(197562)/* ["default"] */.A) + "",
            width: "584",
            height: "259"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568360-安装overlay应用出现错误",
      children: "9568360 安装overlay应用出现错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: internal error of overlay installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装overlay应用出现错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析overlay安装包失败或者安装内部出现异常导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法一：重新编译overlay应用再尝试安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法二：设备重启之后，再尝试安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568361-overlay应用中目标包名为空导致安装失败",
      children: "9568361 overlay应用中目标包名为空导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: invalid bundle name of overlay installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "overlay应用中目标包名为空导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "overlay应用中targetBundleName为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查overlay应用中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5配置文件"
      }), "的targetBundleName字段是否配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568362-overlay应用中目标模块名称为空导致安装失败",
      children: "9568362 overlay应用中目标模块名称为空导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: invalid module name of overlay installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "overlay应用中目标模块名称为空导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "overlay应用中targetModuleName为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查overlay应用中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "的targetModuleName字段是否配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568398-企业mdm应用普通企业应用不允许安装",
      children: "9568398 企业MDM应用/普通企业应用不允许安装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HAP because an enterprise normal/MDM bundle cannot be installed on non-enterprise device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备禁止安装企业MDM应用或普通企业应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前设备不允许安装", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中如下两种类型的应用：enterprise_mdm（企业MDM应用）、enterprise_normal（普通企业应用）。Profile签名文件类型的取值及含义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-applicationinfo/js-apis-bundlemanager-applicationinfo#applicationinfo-1",
        children: "ApplicationInfo.appDistributionType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更换Profile签名文件中的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568402-禁止安装签名证书profile文件中的类型为app_gallery的release应用",
      children: "9568402 禁止安装签名证书profile文件中的类型为app_gallery的release应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Release bundle can not be installed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["禁止通过bm命令安装", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中的类型为app_gallery并且签名证书类型为release的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中的类型为app_gallery并且签名证书类型为release。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
          children: "Profile签名文件"
        }), "中的类型非app_gallery的文件对应用重新签名。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用debug类型证书对应用重新签名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568403-安装加密校验失败",
      children: "9568403 安装加密校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: check encryption failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装加密校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能是镜像版本较老；或者HAP包lib目录内非so文件导致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装新版本镜像。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除HAP工程中lib目录内非so文件，重新签名打包。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568407-安装失败native软件包安装失败",
      children: "9568407 安装失败，native软件包安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HAP because installing the native package failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装HAP时，native软件包安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包中需要安装的native软件包损坏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查HAP包中的native软件包，替换正确的native软件包并重新签名打包。参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/startup_appspawn/blob/master/service/hnp/README_zh.md",
          children: "Native软件包开发指南"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568408-卸载应用失败native软件包卸载失败",
      children: "9568408 卸载应用失败，native软件包卸载失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to uninstall the HAP because uninstalling the native package failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载应用时，native软件包卸载失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用对应的需要卸载的native软件包被占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查是否存在进程占用相应的native软件包，若存在则结束进程后重新卸载。参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/startup_appspawn/blob/master/service/hnp/README_zh.md",
          children: "Native软件包开发指南"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568409-安装失败native软件包提取失败",
      children: "9568409 安装失败，native软件包提取失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HAP because the extract of the native package failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装HAP时，提取native软件包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包中native软件包目录下不存在module.json5中配置的native软件包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查HAP包中的native软件包目录，重新打入需要安装的native软件包并完成签名或删除module.json5中缺失的native软件包配置信息。参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/startup_appspawn/blob/master/service/hnp/README_zh.md",
          children: "Native软件包开发指南"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568410-安装失败设备受管控",
      children: "9568410 安装失败，设备受管控"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: failed to install because the device be controlled."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为设备受管控导致HAP安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备通过非法渠道激活等原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认设备是否是非法渠道获取的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "走正常设备激活流程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568412-卸载请求被应用程序拒绝",
      children: "9568412 卸载请求被应用程序拒绝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: The uninstall request is rejected by the application."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载请求被应用程序拒绝。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标应用不允许卸载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["暂无处理方案，可以提", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
        children: "在线工单"
      }), "获取帮助。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568413-应用设备类型不支持当前设备",
      children: "9568413 应用设备类型不支持当前设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: check syscap filed and device type is not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
        children: "设备类型"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#requireddevicefeatures%E6%A0%87%E7%AD%BE",
        children: "requiredDeviceFeatures标签"
      }), "配置的设备特性不支持安装。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用配置的设备类型或者requiredDeviceFeatures标签配置的设备特性和安装设备不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调整正确的设备类型，如果设备类型配置准确，请确保requiredDeviceFeatures标签符合设置要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568415-禁止安装签名证书为debug或者配置文件debug为true的加密应用",
      children: "9568415 禁止安装签名证书为debug或者配置文件debug为true的加密应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: debug encrypted bundle is not allowed to install."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止安装签名证书为debug类型或者配置文件debug属性值为true的加密应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装了签名证书为debug类型的加密应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装了配置文件中debug属性值为true的加密应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持安装签名证书为debug类型或者配置文件debug属性值为true的加密应用，可以修改为非加密应用进行安装调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568416-加密应用不允许安装",
      children: "9568416 加密应用不允许安装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Encrypted bundle cannot be installed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加密应用不允许通过bm命令安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装的应用为加密应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section18815157237",
          children: "自动签名"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section297715173233",
          children: "手动签名"
        }), "重新签名后安装调试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568417-签名校验失败",
      children: "9568417 签名校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: bundle cannot be installed because the appId is not same with preinstalled bundle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预置应用卸载后安装同bundleName的应用，由于应用的签名信息不一致禁止安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["虽然已卸载预置应用，但在安装新应用之前，系统仍会先安装预置应用包，随后再安装新应用包。这是因为预置应用的安装签名信息中的密钥和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section16423184171915",
        children: "APP ID"
      }), "，与新安装的应用对应信息不一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法一：重新签名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过重新签名，确保应用签名信息中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section462703710326",
        children: "密钥"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section16423184171915",
        children: "APP ID"
      }), "至少有一项与预置应用保持一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果直接使用DevEco Studio自动签名，由于生成的签名信息均为随机值，与预置应用不匹配，将导致应用安装失败。因此，您需要用之前", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
        children: "申请发布Profile"
      }), "的账号，重新", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
        children: "申请调试Profile"
      }), "或直接使用发布Profile对应用重新签名，完成签名后，重新安装应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法二：更换bundleName。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["修改安装应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
        children: "bundleName"
      }), "，确保与预置应用的bundleName不一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568418-应用设置了卸载处置规则不允许直接卸载",
      children: "9568418 应用设置了卸载处置规则，不允许直接卸载"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to uninstall the app because the app is locked."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载应用时，应用存在卸载处置规则，不允许直接卸载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用存在卸载处置规则，不允许直接卸载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查应用是否设置了卸载处置规则，由设置方取消卸载处置规则。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568420-禁止通过bm安装release的预置应用",
      children: "9568420 禁止通过bm安装release的预置应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: os_integration Bundle is not allowed to install for shell."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止通过bm安装release的预置应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过bm安装release的预置应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查应用是否为预置的release版本。如果是，需要替换应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "的类型，重新签名并安装。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568278-安装包的版本号不一致",
      children: "9568278 安装包的版本号不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install version code not same."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备上安装的应用和安装报错的应用包版本号（versionCode）不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安装多个包中存在版本号（versionCode）不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调整安装包的版本和设备中已存在的应用包的版本号（versionCode）一致，或者卸载设备中的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再去安装新的应用包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调整安装的多个包的版本号（versionCode），所有的包都需要保持版本号（versionCode）一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568421-签名证书profile文件中的类型被限制不允许安装到当前设备中导致安装失败",
      children: "9568421 签名证书profile文件中的类型被限制，不允许安装到当前设备中，导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HAP or HSP because the app distribution type is not allowed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名证书profile文件中的类型被限制，不允许安装到当前设备中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中的类型被限制，禁止安装到当前设备中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更换签名证书profile文件中的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568423-签名证书profile文件中缺少当前设备的udid配置不允许安装到当前设备中",
      children: "9568423 签名证书profile文件中缺少当前设备的udid配置，不允许安装到当前设备中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the HAP because the device is unauthorized, make sure the UDID of your device is configured in the signing profile."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名证书profile文件中缺少当前设备的UDID配置，不允许安装到当前设备中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "为调试类型，且未配置当前设备的UDID。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方式一：根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
        children: "指导"
      }), "将当前设备添加到调试类型证书或使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
        children: "发布类型证书"
      }), "重新签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方式二：重新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568380-卸载系统应用失败",
      children: "9568380 卸载系统应用失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uninstall system app error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载系统应用失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分系统应用设置为不可卸载，不支持卸载此类应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不能卸载不可卸载的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568387-卸载未安装的模块导致卸载失败",
      children: "9568387 卸载未安装的模块，导致卸载失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: uninstall missing installed module."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载未安装的模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卸载未安装的模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%9F%A5%E8%AF%A2%E5%BA%94%E7%94%A8%E4%BF%A1%E6%81%AF%E5%91%BD%E4%BB%A4dump",
        children: "bm dump -n"
      }), "命令查看应用配置，确认要卸载的模块已经安装。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568432-插件与应用之间的-plugindistributionids-校验失败导致安装失败",
      children: "9568432 插件与应用之间的 pluginDistributionIDs 校验失败，导致安装失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Check pluginDistributionID between plugin and host application failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用与插件的 pluginDistributionIDs 之间校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用与插件的 pluginDistributionIDs 没有共同值，导致校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重新配置应用或者插件", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中的 pluginDistributionIDs。配置格式如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app-services-capabilities\":{\n    \"ohos.permission.kernel.SUPPORT_PLUGIN\":{\n        \"pluginDistributionIDs\":\"value-1,value-2,···\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568433-应用缺少ohospermissionkernelsupport_plugin权限",
      children: "9568433 应用缺少ohos.permission.kernel.SUPPORT_PLUGIN权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the plugin because host application check permission failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用安装插件时，应用的权限校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用缺少ohos.permission.kernel.SUPPORT_PLUGIN权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "权限申请指导"
        }), "申请", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionkernelsupport_plugin",
          children: "ohos.permission.kernel.SUPPORT_PLUGIN权限"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568333-模块名称为空",
      children: "9568333 模块名称为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install failed due to hap moduleName is empty."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块名称为空，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块名称为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "的name字段是否为空。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568331-签名信息不一致",
      children: "9568331 签名信息不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install incompatible signature info."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名信息不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装多HAP包的应用时，HAP包的签名信息不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重新签名，使多个HAP包签名信息一致。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing",
        children: "应用/元服务签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568334-模块名称重复",
      children: "9568334 模块名称重复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install failed due to hap moduleName duplicate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块名称重复，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个应用同时安装多个模块时，模块名称存在重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一个应用多个模块的名称要保证唯一性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568340-配置文件缺失",
      children: "9568340 配置文件缺失"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install parse no profile."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP包没有配置文件，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-compile-build#section43931054115513",
        children: "pack.info"
      }), "等配置文件缺失。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DevEco Studio重新构建、打包、安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568341-安装时解析配置文件失败",
      children: "9568341 安装时解析配置文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install parse bad profile."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装时解析配置文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-compile-build#section43931054115513",
        children: "pack.info"
      }), "等配置文件格式异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DevEco Studio重新构建、打包、安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568342-配置文件数据类型错误",
      children: "9568342 配置文件数据类型错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install parse profile prop type error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装解析配置文件时，数据类型错误，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-compile-build#section43931054115513",
        children: "pack.info"
      }), "等配置文件存在数据类型错误的字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DevEco Studio重新构建、打包、安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568345-配置文件中的字符串长度或者数组大小过大",
      children: "9568345 配置文件中的字符串长度或者数组大小过大"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: too large size of string or array type element in the profile."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装解析配置文件时，字符串长度或者数组大小过大，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-compile-build#section43931054115513",
        children: "pack.info"
      }), "等配置文件存在字符串长度或者数组大小过大的字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DevEco Studio重新构建、打包、安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568346-解析安装包获取syscap信息失败",
      children: "9568346 解析安装包获取SysCap信息失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install parse syscap error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装过程中，解析安装包获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/syscap/syscap",
        children: "SysCap"
      }), "信息失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP/HSP包损坏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试重新安装，如果还是失败，请重新编译签名打包出新的包，再安装新编译的HAP/HSP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568347-解析本地so文件失败",
      children: "9568347 解析本地so文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install parse native so failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在启动调试或运行C++应用/服务时，安装HAP包出现错误，提示“error: install parse native so failed”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备支持的Abi类型与C++工程中配置的Abi类型不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(317527)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果工程有依赖HSP或者HAR模块，请确保所有包含C++代码的模块配置的Abi类型包含设备支持的Abi类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果工程依赖的三方库包含so文件，请确保oh_modules/三方库/libs目录包含有设备支持的Abi目录，如libs/arm64-v8a、/libs/x86_64。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于HarmonyOS应用，在DevEco Studio NEXT Developer Beta1（5.0.3.200）及以上版本不支持编译armeabi-v7a架构的so文件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将设备或模拟器与DevEco Studio进行连接，具体指导及要求可查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "运行应用/元服务"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在命令行执行如下", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82hdc%E5%B7%A5%E5%85%B7",
            children: "hdc命令"
          }), "，查询设备支持的Abi列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell\nparam get const.product.cpu.abilist\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据查询返回结果，检查", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile",
            children: "模块级build-profile.json5"
          }), "文件中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/hardware-compatibility/ohos-abi#%E5%9C%A8%E7%BC%96%E8%AF%91%E6%9E%B6%E6%9E%84%E4%B8%AD%E6%8C%87%E5%AE%9Aabi",
            children: "“abiFilters”参数"
          }), "中的配置，规则如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若返回结果为armeabi-v7a/armeabi/arm64-v8a/x86/x86_64中的一个或多个，需要在“abiFilters”参数中至少包含返回结果中的一个Abi类型。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568348-解析-ark-native-so文件失败",
      children: "9568348 解析 ark native SO文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install parse ark native file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装时，解析 ark native SO文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装多HAP时，存在Abi不一致，且与当前设备支持的Abi不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查多HAP的Abi是否一致，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section9568347-%E8%A7%A3%E6%9E%90%E6%9C%AC%E5%9C%B0so%E6%96%87%E4%BB%B6%E5%A4%B1%E8%B4%A5",
        children: "错误码9568347"
      }), "的处理步骤。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568350-安装时获取代理对象失败",
      children: "9568350 安装时获取代理对象失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Installd get proxy error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装时获取代理对象失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包管理或其他服务异常，导致获取代理失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重启手机后再次尝试安装应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重复上述步骤3到5次后依旧安装失败，请导出日志文件提", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
            children: "在线工单"
          }), "获取帮助。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 导出日志文件\nhdc file recv /data/log/hilog/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568434-设备不具备插件能力",
      children: "9568434 设备不具备插件能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the plugin because current device does not support plugin."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备不具备插件能力，导致安装插件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备不具备插件能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/param-tool",
        children: "param工具"
      }), "设置const.bms.support_plugin的值为true，即执行hdc shell param set const.bms.support_plugin true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568435-应用包名不存在",
      children: "9568435 应用包名不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Host application is not found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入的应用包名不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用没有安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查传入的应用是否存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568436-多个hsp包信息不一致",
      children: "9568436 多个HSP包信息不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the plugin because they have different configuration information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多HSP之间的包信息不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装的插件为多HSP时，多个HSP文件的包信息不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查多HSP之间的包信息是否一致，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
        children: "app.json5配置文件"
      }), "中bundleName、bundleType、versionCode、apiReleaseType字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568437-插件的-plugindistributionids-解析失败",
      children: "9568437 插件的 pluginDistributionIDs 解析失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Failed to install the plugin because the plugin id failed to be parsed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件的 pluginDistributionIDs 解析失败，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件签名信息中的 pluginDistributionIDs 配置不符合规范，导致解析失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考如下格式，重新配置插件", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中的\"app-services-capabilities\"字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app-services-capabilities\":{\n    \"ohos.permission.kernel.SUPPORT_PLUGIN\":{\n        \"pluginDistributionIDs\":\"value-1,value-2,···\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568438-插件包名不存在",
      children: "9568438 插件包名不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: The plugin is not found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前应用没有安装该插件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%9F%A5%E8%AF%A2%E5%BA%94%E7%94%A8%E4%BF%A1%E6%81%AF%E5%91%BD%E4%BB%A4dump",
        children: "bm dump -n 命令"
      }), "查询应用的信息，检查传入的插件是否安装。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568439-插件与应用包名一致",
      children: "9568439 插件与应用包名一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: The plugin name is same as host bundle name."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件的包名与应用包名相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件包名与应用包名一致，导致插件安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新配置插件的包名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568441-应用不能变更u1enabled",
      children: "9568441 应用不能变更U1Enabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: install failed due to U1Enabled can not change."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名信息中U1Enabled变更导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "中allowed-acls字段的U1Enabled配置发生变更，例如："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已安装应用在allowed-acls中配置了U1Enabled，待安装应用在allowed-acls中没有配置U1Enabled。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已安装应用在allowed-acls中没有配置U1Enabled，待安装应用在allowed-acls中配置了U1Enabled。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方案一：重新签名，签名过程中，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "的支持ACL权限、或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "的使用ACL的签名配置指导进行配置，确保待安装应用与已安装应用配置一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案二：先卸载设备上已安装的应用（PC/2in1设备需要确保所有用户下都卸载完成，手机/平板侧需要关注隐私空间和主用户下是否卸载完成），再尝试安装待安装应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568442-u1enable配置不一致",
      children: "9568442 U1Enable配置不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: Install failed due to the U1Enabled is not same in all haps."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名信息中U1Enabled配置不一致，导致安装失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多HAP包签名时使用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-overview-0000002283260125",
        children: "Profile签名文件"
      }), "不一致导致签名信息中allowed-acls的U1Enabled配置不一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重新签名，签名过程中，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "的支持ACL权限、或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "的使用ACL的签名配置指导进行配置，使多个HAP包签名信息中allowed-acls的U1Enabled信息一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568445-一次仅支持安装一个app包",
      children: "9568445 一次仅支持安装一个APP包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: only one app can be installed at a time."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装APP时，每次只允许安装一个APP，安装多个APP会导致安装失败，且不允许HAP/HSP和APP一起安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过bm install -p命令安装应用时，"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-p指定了多个APP路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-p传入的路径下包含多个APP包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-p传入的路径下既包含APP包又包含了HAP/HSP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-p指定了APP包路径的同时，又通过-s指定了应用间HSP路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每次只指定一个APP路径，或传入路径下仅包含一个APP。如果通过-p指定了APP包路径，不再使用-s。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568446-解压app失败",
      children: "9568446 解压APP失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: decompress app failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装APP时，解压APP失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APP包的格式不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool#app%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "打包APP"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568447-app中没有能在当前设备安装的包",
      children: "9568447 APP中没有能在当前设备安装的包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: no suitable haps or hsps in the app."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要安装的APP包不适用于当前设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APP中没有适合当前设备的HAP包或者HSP包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需要适配当前设备，请在应用设备类型配置中增加当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
        children: "设备类型"
      }), "，然后重新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool#app%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "打包APP"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9568448-验证app签名失败",
      children: "9568448 验证APP签名失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "error: verify app signature failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户安装APP时签名验证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APP包签名不正确或没有签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法一. 使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section18815157237",
        children: "自动签名"
      }), "。在连接设备后，重新为应用进行签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二. 使用手动签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
317527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
232794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958516-69056c0fe01d8025f24aa47668ef2d68.png");

},
197562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798872-bb6374b923929b4c09cda65f6bde1af5.png");

},
303130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798866-eab741ec5a0c8d6220f6e88eb41059db.png");

},
315125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438563-a62581004ce536d11ff6a4bccc87bca4.png");

},
397296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798870-adfd1a709a9902bc8bce278e1522db5a.png");

},
318216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438561-6be47a13f87a67ae40bc379e11e4f273.png");

},
455584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfsAAABvCAYAAADrC2kzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABkVSURBVHhe7Z3frx3Vdcf9N/CAoBTcqg+mBqqStirCRkhtEY6RXFs1FRAnhUaAdUOQWqHIfbBjU4RAyLpChV7LkUkvEpGNyQOylDyBZCXmyUF5h78gb37Ow+7sX7PXWnvtPTP3nDnnzDnfI33Endm/1l5r7fWdOb7G+/bv328AAP146KGHzD333AMAAJMCYg/AACD2AIApArEHYAAQewDAFIHYAzAAiD0AYIpA7AEYAMQeADBFIPYADABiDwCYIrnYP/mKOfvOu+adIufMy0+KMQBsCBB7AMAUycX+xH+bn39+w3xeZNe8eUKM6clbX90x5turatsUcfu5c8u8pbRFrn5rVmTPV8035o659abWttpYH9756i21rR+Hzes/flG573nxx6+bw8p9DYg9AGCKLPRr/HUT+2mxymJvbVM+4UFqZrH/6ZfmD3+8Y353KRf8Fy/9ztz54x/Mlz/l90tA7AEAUyQX++9/aL74+vfma8IXOy/wPnsEYr9MpvRm/5a51aTKN5/669nf7KOoN/u/eLS9d/TiLXdPewgoAbEHAEyRXOwPHjZPnzhmjhGePnyQ96ki3tKIuEexd19th08s6F1jeVtdtLrW8eJxy88Xv4Z/syn8rqf/tOLyadNLfFVvx9v55MMLXS+O92sloaJ9mlnM1XC/FeNPiR1s/wrO5m/MLWtH86HiGD9p7Vzs9X5hX+1H2hg/dK4esQm2XrX+jJ/S/mwf4dc7X111DwD+U49/CSr4exF6C8QeADBFeok954g5fFCMafFvZFLc4nUUkShK7roV0tpY/qbXhVzHC00SCC9yuYil+el6UiTttR9LxZ7+TMn2Tx8c2INEEExxXd1zeEChPuN2lPdR7tf8/G2y0fnK9SvFQNyPos76xPtxLnvPj6O2p/tczH28yD33wKCs0QMv8s1w8ZbfF4g9AGCK9Poan/Ol+eD7YkxEeQt2RT7cywSRCkPHWCqaXWjCS8fLubT+9O3S9m/FjNxn4zT7G9Ja8qHBQoUtb+/ccyas+RzWxnz9Wr90zyH8kPXJ9p2LtSOztUHzmXIvX1c8YAwAYg8A2ETm+wt6RBgSVlh8kc9FNbV1jY0F3n6qAtigiTcVMykeqtCRB41kGxcyuY67dgYmseJiL8QutHvRGiDAEVXslY+zkc5f69e02/3ST7tHJQayb/hkQqyJPfVxIPmD35N+0Pp1ga/xAQCbSi72xb9696H5kewrsYVfvqmRgi7FkQlgx9g0pvutLl+Hi4MUD61/Enh7HewU9qjjxP20FhXbCH14yNvtPMPFXggqa6NrFfrJODA/REgM1HaFzNaGbKxuVy72/KGrD/gFPQDAJpOLffF/qvOf5qTsm2GLNS/MtFDn4kiLe30spXQ/4tahwmlFhYhINt4JEX2AyB8o7Jhvvm3kkowriT0VTLqW/TkT0vba7n9WsQ9rqOLL5y/1k3sq9Uv78nFTH76ofcHHaT/KuMKDg7OB7NPZSP3YBf7qHQBgw5nv1/gOX8Tjpy6Oti8Vq9JYL77tRxEEil/nFhnDRTQJFRkXxCh+MvFyDwy5GEdb3M/tp/xg4YUrfJhg2b3PLvaZr9o55fylfvy+fcDxe6zEQPiu3Vcm9ulvDtiP3Jsal/Z++NsT7iP33AX+pzoAgM1mBLFfPvlDBVg66oPJ9IDYAwCmyITFnn8LED/2jXzdxJ59GxA/U9sfxB4AAJYG3uzBYoDYAwDA0lhLsQdgLCD2AIApArEHYAAQewDAFIHYAzAAiD0AYIpA7AEYAMQeADBFIPYADABiDwCYIhB7AAYAsQcATBGIPQADgNgDAKYIxB6AAUDsAQBTBGIPwACs2AMAwNSA2AMAAABrDsQeAAAAWHMg9gAAAMCaA7EHAAAA1hyIPQAAALDmQOwBAACANWf+Yn/kDfM//3vWnDygtM2Z4+d3zbVr18y1jy6Y40r7cnnavPH+jjl78oDSBpbBo6feNjsXt8wTSltftrabfNveUtuWx5bZvrZrLpzQ2izzysXD5uXz75p33ilz9uXDyrgenLhgdq9tmy2tbYq4/dRislq5ZG3ZPX9cbVtlnAas3HlcTYTYHzcXPmoS0AooYfs12qeLA+bk2Svmk8s9Bd8dCrJe78CJAreCxeLAybPmyidXBhTZ3P+LOYDWl4rvrE9X8kFqrzxhti7umt0ZBX8uzDVfu8R+L7moccy8+fEN8/nnZX7+5jFlXA9W8PxuEqsr9romXQu5ArHvjyL2smjYQtI4d5BDveDvXjpTF3x3wPl6W+f7iosQqBUtFq7I7u6YM51F1vuZH7iQ6KMn86aIvSUI/nuvLFfwFyz2lv65uAQg9ktlSm/21FaIfX96iL2FFJPeh7IR/P/aqQt+l5i4tdLTXJuM8v7H/9f+HPvZhEjfSHjRTMlM9inmSmPCns9vt3Pa++0fHVh6JtmBk2fMzkf1Ils+bLSQh59fIzZL/7H9pDjFQ2HX8W1xToudt1vs2d5pf7fmduMr32596PdzoZk39He+suvQ6zA+m1vaJvYcx4Z1qd39Dv8T5pX3ugU/+SrFRsaJ9tl+jfqxYvdrPqci7XwiF2U+dPqovS7TJxfLvGA++OL35uuvCV98aJ5X++pQf2k5tEV9I+JYHCva9HMU6FjHxzfkbcz9UlwK+efaRZtmn18r2bqnM1AirE/PpL3P1sj2nWwp+lP4gn7rWxpTnKtF2V9JF+z6siY1+6BrUJtAoqfYk2RQErxMEnw1cNU3V5sANHC+b7q27cQOaZc9zO28Td9mX7vxmiTM8UbM2/26AhDn8Osz22w7SbTWJ7G9Qltk1YIckr1QrNM6wSZhA9snnYfYGw85O/TtPHacElN2sBr/bxfWdb7XDrjwpbhuY8n83sBiKfdMx8qcKOdvThD8d//d/J3SHouIvE9jLvuoe1btbpD5Ktvl3jp91HffXblY46A5/Mwxc+wE4ZnD5qDaN4fnXAM9TyGHeE6lPdXGlmKlItcJfo4x5TG01OJSyT8Snz65tPczUCDsk55J5u8Gun45r/keS/WytMfaXAm5vxCHgs/oeDc/9YXIG5DoLfbWqSxxehHE/vLZdEgVXGBtsElw1eSxydXeswlSOhziuhnnn9bptbYXOqf9mfpCSVRmTx1XYHevmLNqEoq9CJLvpU0NZJ+5z9K8WRvzl+0XYiChBZZC9y5930CLR/1aLwDpUOd7pnOxvLR2lOzNCGJ/cUsVe7c/Za60thIL4u8uu6XP6vk+3Ec16rlYQxF7wdOHDyrjLJqNpN5kOUT33DG2ECsVJVfpeBajhnpcKvlH1+nMpdnOgErVnwGyjzRfvhbbI8P2re2x71xKfLU4Kfe0+HT6ZkMZ9GYvk7GOF/pPrlzo/Zv5do2YMGpS0MNEEy22Zcnt97K1Lf9L92LnoQIX55AJ6A8LE0JLY49vL+OK68dXzIXiV6dKshOSvVq/5AeX+NK+0D8/FGkc/5nA/N1gDzSdO86nHEJ54MrXes6l+Od7ZrlBbFRzRsUL/SeN/bWv8Vt/Eh8kuzWfSZ922E3Gq7a3exvuoxLduVhD+Rpf8MXOC8o4i+YvktuFHEp5Xxnb/KzFSkVZh+ZQiq9vq8clH9vWFbGOZl9aa8YzoJHts1y/+L7tWkq/tnbI9toeu+aK5Pvz93ictD27NcV8nb7ZUPqJfZY4XQwXek9aXwsifRLNkkGx0Qd9q/36ub3+KPaTSUbnlG0F33TQt7jKIpOgdkibGkixqSV57k+5V+47B5k7e3KnsVB8L/dTvvZFqC2SpD0Ver5nuU//ENc3Pv2EnkJ9l+wuxKKYP8Ju4bM8Pg2tj4f7SGM2oZ8VzUYSs0IOlfenx1v1I0VZh+Zyiq9vq8fFXkc7rI1kXm2dBj2XhseX5ZJGtr7ur0iyReyDIe3Q+6Y91uai5Ptz9tN6MyDeyW+A0i32LmmI8wpJnBgg9M2hYUFxc4f15brZgRCJpNllD2WzH/5n9eKajrH92+s8AV1isQSsM6i4hv3yA2xtoPf8NS80pN3NkR8IS34oqP+ELyPOX+lBgo63B6q9ln4M7XQvtWs3Nx3P5tPjQOeycdvdttD9aQwXeofLI+8HajfzQbzua7f0mbsu5/tQH0nmI/Tlv3r3wY+0/hznH/nAGK8LORT3Xx1LKd2PBD+n/LG+4+uw3OqIi8XFVeafsh9HIZdmPgMSZX23RsE31Bbna+0syTntXnrssXsuH4PUT9S12F+x3fuN+KZkE9DEvnG6dXyLcJySRIxnmqJyue8bvVxPFCy3VmqnB8wnCLfDJVbTLyUJP8haEvlkCWs0B5YLYF5A4xoRbhPlGXPm0tDiGpK+OH+wKfwNAYc8SC7ZyRyh3e2T9aX+oz8T2AHjsdpufNXOp+QELR59rlkc2Fx5HGxfOjb6rRwLz6M/fM9caWzuI/Qle7jdwifab+NX7I651N6r5vswH3H2kosa5f+pzn+c1PrnxD07aPEu5BD1QWls2S8KYZ34W+oWGROeW3FMnF/Js9DO7pP99MulYfGVuZSh+NPCfNgQbea2lOsys5HUy7LthbmYfWF/lbrm5hf30v0LZI3aOdhshNiD1aarqG8q1i95YVs4toApbx9ghSiIIFgmqGuLAGI/KXAoNDrfchZC/q0RWB7yDbZ9W1wzsedv1IHJPXCiri0CiP2kwKFguMK9vOKWCYryNSNYMfBmv4Kgri0CiD0AAACw5kDsAQAAgDUHYg8AAACsOfvuuusuM3/+1Bw49F3z5D8eMn8W7/35oeb6H8yBP6H9AAAAADA2++6++24zf/7C/PWRF8yhB7vuAQAAAGBs9t17771mDB55+lVz7NCD5N6D5u//5VXzT3/F+wEAAABgXPbdd999ZhT+5nvmpdPfM4+WrgEAAACwEPbdf//9Ziz+8qnXzKuvnwm8ZP5W6QMAAACAcdn3wAMPGAAAAACsL/irdyuO2bcPgLmj5RoAYH2B2K84WqEGYFa0XAMArC8Q+xUHxRnME+QTAJsJxH7FQXEG8wT5BMBmArFfcfoW5yNHjpjv/vO/mqMn/80cffbF2WnmsfPZebX1wDSB2AOwmUDsV5y+xdkJvSbaM2Ln1dYD0wRiD8BmArFfcfoW57m90UuaebX1wDSB2AOwmUDsV5zeYq8J9ZzQ1gPTBGIPwGYCsV8056+b27dvmss/2G9O7dxsfr5uzmn9Arw4nzKXv7xtbn92rvn5nLl++7a5uXPKtWkiPYyfmRvNfLcdt8wvzqc2vzZZ7weXzc3m5+vnua016F7Pfdas8eVlc0r0AXOkkGf9xL6cZyuD21/MV79Ptd9EmO181M6mbZu+fzaJai6E+O4l50cS+1As2sMYmUrSCftd0aPt/nDFdr0QxjnEnldW7CNW9NdM7J29dT+vHWst9t6mIfnXF5uby9grxH4v+DwdIw+WSa9csOd7YA1d3Ju9Kz7TKLjOwa3Ay2LnE6y9LgifC9hn1/ODRoWnR8BkcU7FiCc6F+xZKIk9XW8PBYTs1ftGPkCNyCaKfSHP+ol9Oc9WghHjmfatt4/GTOejdjYh9pOjVy7YuA47AwsT+2UcovbNXIixdaC1xYm6bHeFhB8O5/AoyjYQwsluHhqQdo7ZD1rf4hyF+czVW+2e+NfxVsR/bd4//0vz29j+m1+aM2FcoiT2fbD7Fb7oifNxazeJh+Lv/F5YNxJjJe+3KPFt29K8Pk8uhzma+27d5udB+yvZ1tHWChrpw8aW7a7RN5/q+CKr2u3sbWxx9ivt1oeN/6jtg+uClhOsLayrnD3us9TO7xPaWNt98flYTeuMl/DZns/I0HoS7D5fiEeD3LsUz672OsQflnZtf5/PJe8Jn5GY09pNYblUzAW7znVzOezr5s65sM4A37K5+T6sv4r64vZk16F+6Xd2OX4PQ8YtRuzbg6C0jUi7ngtMCmRM3pgY7jomoe0rixMJiOtLDmp7ENoxPkH93DYgAxJIYZDYN0J+4+rbrUg74W8FPf6ZfCP47vpt84vf3Da/Jf09SxD7an74Oelhkg9XrOhq1OZ38U1tNBd8bG38QtGx9wflsrddt43mSbpu9+XWsfGK+SP8ULHbz6czD7E/tdMUyjan5T5CDrS2ifZ4ntg++52R9qxJSnMJH9n26yQWms/KuWT3xe1kfTvixXNW+qwfKR/1dh0Zj3oe+WuyhtsXaR9I7WxynzRoOU3bM7wfaW1oqeZC8Imd2933c9Rs5TTju+xu5mznYu3hnBPbMj/0wu5hWFwWIvb9nTge1IYsiWhC28C0RT0eEutYH5x2bEiSTADieDd3GteuNZBBYi9xb/FR3HMRdw8Dv/pZ6l/op603V4Kv1UPbwOOV+9QdlprQ0fgI7Fi+rhJrWlQqc0nc+JJdokA46NyKT2gO1+xO93LmIfaSrviwdnY+LJWCXULzXYNdh9eZjrmVWFIfc/S8a/tW42XHCnszP4xFzW7vH7nfrn0Nwc5V3KfwP1u3weWNEudEOb71XCA+IXGQ6/eH+5ifB9mu2LynXOjIbYXxxd4FlCfbMqCBzIJBk84VkijyebtPQJHAbbDkwcoP2lCGib1/W/f2RzrEPvsqfwlib2n93iATX8aHHSSLT/w4PjsAoqgk+LiEj1nKE3KwinPluEKX2RrQDjidu7pO3e68f2IuYu9sE2u3+8xz3vkx7jXbt99LKrL53rJ4ulzJfeP8Tcbl4zW/8XnKBT/fF+tbi5fmL4uM/yjU7CZ5TcZkPqidzU64z/ladH1rZz2meVx0+y10HCWtFXxC8jHbd4V8/uRjXezj2orNhXzuJvq239jRxd45pVTwFoZ3SgxkVezdz/xwsAKlBKadjx4KyR59METs3/9Vsw4V76m82QtcziiCYA+IbdMOd0sorKxPsRCXi4VlVrHPDz1BO+D0XnWdut01Zhd7X7hoUeT7zMWFtdOz5NjDXjTfNXQV6yyvFB+X58j3xfrW4jUgZ+ZPzW7ve75f7V4i8+EQnB94rFntLJ0VR553tdwpx9FCfELysT4m4Wxm8eQ+zs89bVdszs5EH/K4djGu2LvgDjNonrTBEMUhCwY7jD4Yyfky+X3SpfH+Wi9WwwPicPb6NQaLfSve8S2/IPbhF/VuXArXLbOIvfTN3nDxkcnvDsRNc7PzUGjxKMcoP7iize2FHNAhhVspbglvU8orkWcd69TsrsHyieSZ7FdG+DLskZ8HkvPSB6Kw7Wkf4jzz++Xz5oSqtTOcczGPmnsOvm9vd994hbXmcS4G1xMRjwYqapn/S74NlP3TB5E77T17rrv2Jeuwh8eUUM0F4hOSj4PEnvjA2UDWcu3EJtfe9ie1xF17n/RZl2PHFeIUz6SI04hiP58En4X2rVoEXQYjP6ixEHjyQPgAxXaevBSSVGp7iTB/E6whYh8FPNp146p8s09trp0K/aVfszaPF31tPZ1g98CY+4JD19WS2M/dFQuLenDc4Y99lHwg4+MhSXlCDmi1qCvEgyfm9u3C9mpO5pTs1vpGeD6lPOsaR+Hrht9qbm3P48HOB4uDZYAvIzVBqs0vYnF9R/MxP/ssJnTu5j4Th854iXkbhhZ47/eh9cTGg4+Rosbj2XE2BsWr39nkYhjJ/cVi0cLXYPMXc4H4xPYJa0u/lJFr2r+xk/xWP5ez54HH2lCKRVyDty/kF/TAUEKwmuQeJPZV8jf2vmjrLR5yQNV20AeeTynPZL+90xEnUlzVdrBx9BfZaeDEvnim/JkrvyD2pSb2+gMUxH7FaJ8KQ7JA7D0ueecqSptJzCeZZ/MDYg8G4N6+h3xbsPosROxL58j5Mxd6C8R+xekt9p3/6t0exX7J/+qdE/lC8i6T7Ks6xup+A9E3n/YOxH4zsHHWcj/Q9RAZRWnVzor8YzdBn28gRhV7Yt/QOSD2K07f4ox/zx70YXyxBwCsIhD7FadvcT5y5IgX/Hn9u/bNPHY+O6+2HpgmEHsANhOI/YqD4gzmCfIJgM0EYr/ioDiDeYJ8AmAzgdivOCjOYJ4gnwDYTCD2Kw6KM5gnyCcANhOI/YoTizMA80TLNQDA+jKq2D/2/AXz+k8Szz6u9wNltEINwKxouQYAWF9GE/uHj75hXn/+qXTv8dON4J82j5E+AAAAABif0cTevtW/dPQ76d4jz5mXIPYAAADAwhnva3z3Jh+/uv+Oeer0Bf6mDwAAAICFMPIv6D1lng1/Xs/e8gEAAACwMEZ+s3/DPPWIvQ6if/o587DWFwAAAACjMZLY+6/t+du8F3z8Rj4AAACwWEYV+/y38eObPgAAAAAWxYh/Zp/+vN4DoQcAAACWwci/oAcAAACAZQOxBwAAANYciD0AAACw5kDsAQAAgDUHYg8AAACsORB7AAAAYM2B2AMAAABrDsQeAAAAWHMg9gAAAMCaA7EHAAAA1pxRxf6x58n/Lhf/4h0AAACwFEYT+4ePvsEE3gk//YdxAAAAALAQRhJ75Z+zfeQ589JPTpvHWD8AAAAAjM2IYi//lTvtHgAAAADGZrSv8eXX9v7P7yH2AAAAwKIZ8Rf0+L9n/+zj9hpf4wMAAACLZkSxF9g/s8dv5AMAAAALZr/5f0xOADwNYc7AAAAAAElFTkSuQmCC");

},
560507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478519-5d766f0af2ca600819936ba97037fe44.png");

},
153957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478517-a09c85d0d487123a72dd7580f3ed2f6b.png");

},
193475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798868-1c9aa3ff62b358c79e68b54f2bbbab05.png");

},
804848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958514-fc1b100d380d0d31c87d82e4badb8a6d.png");

},
278301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478515-81e8efb2067ffd378602acad3044e12d.png");

},
654513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
925755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958520-86694eaf8f9b3d4dcc453bb624b579af.png");

},
330168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958518-beea7004abc8a05548e267b773c6e0a6.png");

},
511021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438565-7adf8014005877efc3555c4fa802362f.png");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);