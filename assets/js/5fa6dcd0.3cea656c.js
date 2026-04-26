"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["432709"], {
625595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_packing_unpacking_packing_tool_packing_tool_md_5fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-packing-unpacking-packing-tool-packing-tool-md-5fa.json
var site_docs_system_debug_optimize_debugging_commands_packing_unpacking_packing_tool_packing_tool_md_5fa_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/packing-unpacking/packing-tool/packing-tool","title":"打包工具","description":"打包工具用于在程序编译完成后，对编译出的文件等进行打包，以供安装发布。开发者可以使用DevEco Studio进行打包，也可使用打包工具的JAR包进行打包，JAR包通常存放在SDK路径下的toolchains目录中。","source":"@site/docs/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool/packing-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/packing-unpacking/packing-tool","slug":"/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"打包工具","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/packing-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"bm工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/bm-tool/"},"next":{"title":"拆包工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/packing-unpacking/unpacking-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool/packing-tool.md


const frontMatter = {
	title: '打包工具',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/packing-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '打包工具';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "HAP打包指令",
  "id": "hap打包指令",
  "level": 2
}, {
  "value": "HSP打包指令",
  "id": "hsp打包指令",
  "level": 2
}, {
  "value": "App打包指令",
  "id": "app打包指令",
  "level": 2
}, {
  "value": "多工程打包指令",
  "id": "多工程打包指令",
  "level": 2
}, {
  "value": "HQF打包指令",
  "id": "hqf打包指令",
  "level": 2
}, {
  "value": "APPQF打包指令",
  "id": "appqf打包指令",
  "level": 2
}, {
  "value": "版本归一指令（versionNormalize）",
  "id": "版本归一指令versionnormalize",
  "level": 2
}, {
  "value": "包名归一指令（packageNormalize）",
  "id": "包名归一指令packagenormalize",
  "level": 2
}, {
  "value": "通用归一指令（generalNormalize）",
  "id": "通用归一指令generalnormalize",
  "level": 2
}, {
  "value": "res模式打包指令",
  "id": "res模式打包指令",
  "level": 2
}, {
  "value": "fastApp模式打包指令",
  "id": "fastapp模式打包指令",
  "level": 2
}, {
  "value": "扫描重复so文件",
  "id": "扫描重复so文件",
  "level": 2
}, {
  "value": "打包工具错误码",
  "id": "打包工具错误码",
  "level": 2
}, {
  "value": "10010001 执行打包工具失败",
  "id": "10010001-执行打包工具失败",
  "level": 3
}, {
  "value": "10010002 打包参数解析失败",
  "id": "10010002-打包参数解析失败",
  "level": 3
}, {
  "value": "10010003 --force参数值校验失败",
  "id": "10010003---force参数值校验失败",
  "level": 3
}, {
  "value": "10011001 打包HAP时参数校验失败",
  "id": "10011001-打包hap时参数校验失败",
  "level": 3
}, {
  "value": "10011002 打包HSP时参数校验失败",
  "id": "10011002-打包hsp时参数校验失败",
  "level": 3
}, {
  "value": "10011003 打包App时参数校验失败",
  "id": "10011003-打包app时参数校验失败",
  "level": 3
}, {
  "value": "10011004 多工程打包时参数校验失败",
  "id": "10011004-多工程打包时参数校验失败",
  "level": 3
}, {
  "value": "10011005 res模式打包时参数校验失败",
  "id": "10011005-res模式打包时参数校验失败",
  "level": 3
}, {
  "value": "10011006 打包HQF时参数校验失败",
  "id": "10011006-打包hqf时参数校验失败",
  "level": 3
}, {
  "value": "10011007 打包APPQF时参数校验失败",
  "id": "10011007-打包appqf时参数校验失败",
  "level": 3
}, {
  "value": "10011008 包名归一化时参数校验失败",
  "id": "10011008-包名归一化时参数校验失败",
  "level": 3
}, {
  "value": "10011009 版本归一化时参数校验失败",
  "id": "10011009-版本归一化时参数校验失败",
  "level": 3
}, {
  "value": "10011011 --mode参数值校验失败",
  "id": "10011011---mode参数值校验失败",
  "level": 3
}, {
  "value": "10011012 校验bundleType是否为shared时失败",
  "id": "10011012-校验bundletype是否为shared时失败",
  "level": 3
}, {
  "value": "10011016 检查HSP是否包含入口UIAbility失败",
  "id": "10011016-检查hsp是否包含入口uiability失败",
  "level": 3
}, {
  "value": "10011017 检查HSP是否包含入口ExtensionAbility失败",
  "id": "10011017-检查hsp是否包含入口extensionability失败",
  "level": 3
}, {
  "value": "10011018 检查--out-path参数失败",
  "id": "10011018-检查--out-path参数失败",
  "level": 3
}, {
  "value": "10011020 版本归一化打包模式参数校验失败",
  "id": "10011020-版本归一化打包模式参数校验失败",
  "level": 3
}, {
  "value": "10011021 通用归一化打包模式参数校验失败",
  "id": "10011021-通用归一化打包模式参数校验失败",
  "level": 3
}, {
  "value": "10011022 检查元服务大小限制参数失败",
  "id": "10011022-检查元服务大小限制参数失败",
  "level": 3
}, {
  "value": "10012001 执行压缩操作失败",
  "id": "10012001-执行压缩操作失败",
  "level": 3
}, {
  "value": "10012002 HAP包压缩失败",
  "id": "10012002-hap包压缩失败",
  "level": 3
}, {
  "value": "10012003 校验HAP信息失败",
  "id": "10012003-校验hap信息失败",
  "level": 3
}, {
  "value": "10012004 检查参数asanEnabled失败",
  "id": "10012004-检查参数asanenabled失败",
  "level": 3
}, {
  "value": "10012005 检查参数hwasanEnabled失败",
  "id": "10012005-检查参数hwasanenabled失败",
  "level": 3
}, {
  "value": "10012006 检查atomicService失败",
  "id": "10012006-检查atomicservice失败",
  "level": 3
}, {
  "value": "10012007 检查continueBundleName无效",
  "id": "10012007-检查continuebundlename无效",
  "level": 3
}, {
  "value": "10012008 检查overlay失败",
  "id": "10012008-检查overlay失败",
  "level": 3
}, {
  "value": "10012009 执行压缩操作时异常",
  "id": "10012009-执行压缩操作时异常",
  "level": 3
}, {
  "value": "10012010 校验模块generateBuildHash属性失败",
  "id": "10012010-校验模块generatebuildhash属性失败",
  "level": 3
}, {
  "value": "10012011 设置generateBuildHash属性失败",
  "id": "10012011-设置generatebuildhash属性失败",
  "level": 3
}, {
  "value": "10012012 检查应用的ubsanEnabled属性失败",
  "id": "10012012-检查应用的ubsanenabled属性失败",
  "level": 3
}, {
  "value": "10012013 解析module.json文件失败",
  "id": "10012013-解析modulejson文件失败",
  "level": 3
}, {
  "value": "10012014 打包--lib-path指定目录失败",
  "id": "10012014-打包--lib-path指定目录失败",
  "level": 3
}, {
  "value": "10012015 构建App包失败",
  "id": "10012015-构建app包失败",
  "level": 3
}, {
  "value": "10012016 打包指定的HAP或HSP文件无效",
  "id": "10012016-打包指定的hap或hsp文件无效",
  "level": 3
}, {
  "value": "10012017 检查SharedAPP无效",
  "id": "10012017-检查sharedapp无效",
  "level": 3
}, {
  "value": "10012018 检查应用的Bundle类型无效",
  "id": "10012018-检查应用的bundle类型无效",
  "level": 3
}, {
  "value": "10012019 检查元服务包大小失败",
  "id": "10012019-检查元服务包大小失败",
  "level": 3
}, {
  "value": "10012020 解析FA应用config.json文件失败",
  "id": "10012020-解析fa应用configjson文件失败",
  "level": 3
}, {
  "value": "10012021 打包App时抛I/O异常",
  "id": "10012021-打包app时抛io异常",
  "level": 3
}, {
  "value": "10012022 校验Stage HSP失败",
  "id": "10012022-校验stage-hsp失败",
  "level": 3
}, {
  "value": "10012023 json文件格式化失败",
  "id": "10012023-json文件格式化失败",
  "level": 3
}, {
  "value": "10012024 校验元服务大小失败",
  "id": "10012024-校验元服务大小失败",
  "level": 3
}, {
  "value": "10012025 多工程打包失败",
  "id": "10012025-多工程打包失败",
  "level": 3
}, {
  "value": "10012028 打包--app-list参数失败",
  "id": "10012028-打包--app-list参数失败",
  "level": 3
}, {
  "value": "10012029 APP/HAP/HSP不包含pack.info文件",
  "id": "10012029-apphaphsp不包含packinfo文件",
  "level": 3
}, {
  "value": "10012034 解析moduleName失败",
  "id": "10012034-解析modulename失败",
  "level": 3
}, {
  "value": "10012035 APPQF模式打包失败",
  "id": "10012035-appqf模式打包失败",
  "level": 3
}, {
  "value": "10012037 HQF一致性校验失败",
  "id": "10012037-hqf一致性校验失败",
  "level": 3
}, {
  "value": "10012038 检查HQF的moduleName失败",
  "id": "10012038-检查hqf的modulename失败",
  "level": 3
}, {
  "value": "10012039 版本归一化模式打包失败",
  "id": "10012039-版本归一化模式打包失败",
  "level": 3
}, {
  "value": "10012040 校验模块的版本信息失败",
  "id": "10012040-校验模块的版本信息失败",
  "level": 3
}, {
  "value": "10012041 计算SHA-256值失败",
  "id": "10012041-计算sha-256值失败",
  "level": 3
}, {
  "value": "10012042 HAP或HSP包重复",
  "id": "10012042-hap或hsp包重复",
  "level": 3
}, {
  "value": "10012046 解析config.json文件失败",
  "id": "10012046-解析configjson文件失败",
  "level": 3
}, {
  "value": "10012047 解析module.json文件失败",
  "id": "10012047-解析modulejson文件失败",
  "level": 3
}, {
  "value": "10012050 检查插件宿主失败",
  "id": "10012050-检查插件宿主失败",
  "level": 3
}, {
  "value": "10012052 检查--pkg-context-path参数失败",
  "id": "10012052-检查--pkg-context-path参数失败",
  "level": 3
}, {
  "value": "10012053 检查插件属性失败",
  "id": "10012053-检查插件属性失败",
  "level": 3
}, {
  "value": "10012054 校验HAR去重属性失败",
  "id": "10012054-校验har去重属性失败",
  "level": 3
}, {
  "value": "10013001 解析module.json或config.json文件异常",
  "id": "10013001-解析modulejson或configjson文件异常",
  "level": 3
}, {
  "value": "10013002 解析module.json或config.json文件失败",
  "id": "10013002-解析modulejson或configjson文件失败",
  "level": 3
}, {
  "value": "10013003 检查atomicService属性无效",
  "id": "10013003-检查atomicservice属性无效",
  "level": 3
}, {
  "value": "10013004 解析module.json文件失败",
  "id": "10013004-解析modulejson文件失败",
  "level": 3
}, {
  "value": "10013005 检查模块bundleType失败",
  "id": "10013005-检查模块bundletype失败",
  "level": 3
}, {
  "value": "10013006 检查entry模块中的ability失败",
  "id": "10013006-检查entry模块中的ability失败",
  "level": 3
}, {
  "value": "10013007 检查installationFree错误",
  "id": "10013007-检查installationfree错误",
  "level": 3
}, {
  "value": "10013008 获取bundleName属性失败",
  "id": "10013008-获取bundlename属性失败",
  "level": 3
}, {
  "value": "10013009 解析proxyData属性失败",
  "id": "10013009-解析proxydata属性失败",
  "level": 3
}, {
  "value": "10013010 检查bundleType一致性失败",
  "id": "10013010-检查bundletype一致性失败",
  "level": 3
}, {
  "value": "10013011 解析patch.json中模块名失败",
  "id": "10013011-解析patchjson中模块名失败",
  "level": 3
}, {
  "value": "10013012 获取FA模型模块的config.json文件失败",
  "id": "10013012-获取fa模型模块的configjson文件失败",
  "level": 3
}, {
  "value": "10013013 解析FA模型模块的config.json文件失败",
  "id": "10013013-解析fa模型模块的configjson文件失败",
  "level": 3
}, {
  "value": "10013014 合并pack.info文件失败",
  "id": "10013014-合并packinfo文件失败",
  "level": 3
}, {
  "value": "10013015 校验pack.info文件失败",
  "id": "10013015-校验packinfo文件失败",
  "level": 3
}, {
  "value": "10013016 合并pack.info文件时校验失败",
  "id": "10013016-合并packinfo文件时校验失败",
  "level": 3
}, {
  "value": "10013017 校验pack.info文件的bundleType失败",
  "id": "10013017-校验packinfo文件的bundletype失败",
  "level": 3
}, {
  "value": "10013018 解析pack.info文件forms标签失败",
  "id": "10013018-解析packinfo文件forms标签失败",
  "level": 3
}, {
  "value": "10013019 合并pack.info文件失败",
  "id": "10013019-合并packinfo文件失败",
  "level": 3
}, {
  "value": "10013020 合并pack.info文件失败",
  "id": "10013020-合并packinfo文件失败",
  "level": 3
}, {
  "value": "10013022 解析pack.info文件的forms属性失败",
  "id": "10013022-解析packinfo文件的forms属性失败",
  "level": 3
}, {
  "value": "10014001 未找到可用文件",
  "id": "10014001-未找到可用文件",
  "level": 3
}, {
  "value": "10014002 关闭.zip归档输出流异常",
  "id": "10014002-关闭zip归档输出流异常",
  "level": 3
}, {
  "value": "10014003 关闭I/O输入流异常",
  "id": "10014003-关闭io输入流异常",
  "level": 3
}, {
  "value": "10014004 获取文件内容失败",
  "id": "10014004-获取文件内容失败",
  "level": 3
}, {
  "value": "10014005 文件不存在",
  "id": "10014005-文件不存在",
  "level": 3
}, {
  "value": "10014006 获取文件大小失败",
  "id": "10014006-获取文件大小失败",
  "level": 3
}, {
  "value": "10014007 文件I/O异常",
  "id": "10014007-文件io异常",
  "level": 3
}, {
  "value": "10014008 压缩文件异常",
  "id": "10014008-压缩文件异常",
  "level": 3
}, {
  "value": "10014009 删除文件失败",
  "id": "10014009-删除文件失败",
  "level": 3
}, {
  "value": "10015001 文件I/O异常",
  "id": "10015001-文件io异常",
  "level": 3
}, {
  "value": "10015002 空指针异常",
  "id": "10015002-空指针异常",
  "level": 3
}, {
  "value": "10016001 校验应用属性失败",
  "id": "10016001-校验应用属性失败",
  "level": 3
}, {
  "value": "10016002 HAP或HSP属性不同",
  "id": "10016002-hap或hsp属性不同",
  "level": 3
}, {
  "value": "10016003 分发策略相交校验失败",
  "id": "10016003-分发策略相交校验失败",
  "level": 3
}, {
  "value": "10016004 校验模块名失败",
  "id": "10016004-校验模块名失败",
  "level": 3
}, {
  "value": "10016005 校验应用包名失败",
  "id": "10016005-校验应用包名失败",
  "level": 3
}, {
  "value": "10016006 检查HAP包无效",
  "id": "10016006-检查hap包无效",
  "level": 3
}, {
  "value": "10016007 检查entry模块无效",
  "id": "10016007-检查entry模块无效",
  "level": 3
}, {
  "value": "10016008 检查dependency属性无效",
  "id": "10016008-检查dependency属性无效",
  "level": 3
}, {
  "value": "10016009 检查依赖错误",
  "id": "10016009-检查依赖错误",
  "level": 3
}, {
  "value": "10016010 检查元服务无效",
  "id": "10016010-检查元服务无效",
  "level": 3
}, {
  "value": "10016011 检查元服务预加载无效",
  "id": "10016011-检查元服务预加载无效",
  "level": 3
}, {
  "value": "10016012 目标模块不存在",
  "id": "10016012-目标模块不存在",
  "level": 3
}, {
  "value": "10016013 校验compileSdkType属性不一致",
  "id": "10016013-校验compilesdktype属性不一致",
  "level": 3
}, {
  "value": "10016014 代理数据不唯一",
  "id": "10016014-代理数据不唯一",
  "level": 3
}, {
  "value": "10016015 ContinueType配置无效",
  "id": "10016015-continuetype配置无效",
  "level": 3
}, {
  "value": "10016016 文件大小检查错误",
  "id": "10016016-文件大小检查错误",
  "level": 3
}, {
  "value": "10016017 HapVerifyInfos集合为空",
  "id": "10016017-hapverifyinfos集合为空",
  "level": 3
}, {
  "value": "10016018 元服务模块大小检查错误",
  "id": "10016018-元服务模块大小检查错误",
  "level": 3
}, {
  "value": "10016019 检查分发策略无效",
  "id": "10016019-检查分发策略无效",
  "level": 3
}, {
  "value": "10017001 包名归一化模式校验HSP包的bundleName和versionCode属性失败",
  "id": "10017001-包名归一化模式校验hsp包的bundlename和versioncode属性失败",
  "level": 3
}, {
  "value": "10017002 更新module.json文件失败",
  "id": "10017002-更新modulejson文件失败",
  "level": 3
}, {
  "value": "10017003 更新pack.info文件失败",
  "id": "10017003-更新packinfo文件失败",
  "level": 3
}, {
  "value": "10018001 fastApp模式打包校验失败",
  "id": "10018001-fastapp模式打包校验失败",
  "level": 3
}, {
  "value": "10018002 检查bundleType一致性失败",
  "id": "10018002-检查bundletype一致性失败",
  "level": 3
}, {
  "value": "10018003 检查pack.info文件无效",
  "id": "10018003-检查packinfo文件无效",
  "level": 3
}, {
  "value": "10018004 向压缩包中添加文件或目录条目失败",
  "id": "10018004-向压缩包中添加文件或目录条目失败",
  "level": 3
}, {
  "value": "10018005 打包libs目录异常",
  "id": "10018005-打包libs目录异常",
  "level": 3
}, {
  "value": "10018006 fastApp模式重打包HSP异常",
  "id": "10018006-fastapp模式重打包hsp异常",
  "level": 3
}, {
  "value": "10019001 增量打包HAP异常",
  "id": "10019001-增量打包hap异常",
  "level": 3
}, {
  "value": "10019002 增量打包HSP异常",
  "id": "10019002-增量打包hsp异常",
  "level": 3
}, {
  "value": "10011021 通用归一化命令失败",
  "id": "10011021-通用归一化命令失败",
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
        id: "打包工具",
        children: "打包工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包工具用于在程序编译完成后，对编译出的文件等进行打包，以供安装发布。开发者可以使用DevEco Studio进行打包，也可使用打包工具的JAR包进行打包，JAR包通常存放在SDK路径下的toolchains目录中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包工具支持生成：Ability类型的模块包（HAP）、动态共享包（HSP）、应用程序包（App）、快速修复模块包（HQF）、快速修复包（APPQF）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打包指令中的文件来源于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-compile-build",
        children: "DevEco Studio编译构建产物"
      }), "，文件路径查看操作如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在DevEco Studio工程根目录下的/hvigor/hvigor-config.json5文件中，修改\"logging\"下的\"level\"字段为\"debug\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在DevEco Studio菜单栏，依次选择\"构建 -> 清理项目\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在DevEco Studio菜单栏，依次选择\"构建 -> 构建APP(s)\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在DevEco Studio底部\"构建\"窗口，搜索\"app_packing_tool.jar\"，确认打包参数中文件的路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包工具会对module.json文件属性进行合法性校验。module.json文件是编译构建产物，其属性值在编译构建时自动生成，与配置文件中配置项对应关系如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " module.json与配置文件属性的对照表"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "module.json属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "module.json5"
            }), "配置项"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "配置项"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
              children: "工程级build-profile.json5"
            }), "配置项"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的Bundle名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的Bundle类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bundleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的版本号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用是否可调试。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "module/name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Module的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "module/name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minCompatibleVersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用能够兼容的最低历史版本号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "minCompatibleVersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用运行所需的最小API版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "minAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "compatibleSdkVersion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用运行需要的API目标版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "targetAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "targetSdkVersion/compileSdkVersion  说明：targetSdkVersion存在时，targetAPIVersion由targetSdkVersion决定；  否则，targetAPIVersion由compileSdkVersion决定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "querySchemes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许应用进行跳转查询的URL schemes。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "querySchemes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "generateBuildHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前HAP或HSP是否由打包工具生成哈希值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "generateBuildHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "generateBuildHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的构建版本号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包工具需要运行在Java8及其以上环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包指令中参数和参数值需成对出现。例如，HAP打包指令中--resources-path <path>，其中--resources-path为指令参数，path为参数值，两者需要同时出现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议使用JDK 20版本运行打包工具。JDK 20对zip64扩展数据字段的校验规则存在已知缺陷，当zip包（如HAP、HSP或任何zip64文件）的目录中zip64扩展字段长度异常时，解析会抛出Invalid CEN header (invalid zip64 extra data field size)异常。建议使用JDK 17（LTS）或JDK 21（LTS）等长期支持版本。若必须使用JDK 20，可在JVM启动参数中添加-Djdk.util.zip.disableZip64ExtraFieldValidation=true规避此问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hap打包指令",
      children: "HAP打包指令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用打包工具的JAR包对模块进行打包，通过传入打包选项、文件路径，生成所需的HAP包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HAP打包时合法性校验"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 21开始，在打包entry类型的HAP时，如果module.json文件中querySchemes配置了超过50个URL scheme，则要求minAPIVersion大于等于21。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打包HAP时的压缩规则："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用配置compressNativeLibs为true时，会按照--compress-level设置的压缩等级对--lib-path指定目录下的文件进行压缩。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出于运行时性能等考量，--lib-path指定目录外的文件不会进行压缩。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/application-models#%E5%BA%94%E7%94%A8%E6%A8%A1%E5%9E%8B%E6%A6%82%E5%86%B5",
            children: "Stage模型"
          }), "示例："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -jar app_packing_tool.jar --mode hap --json-path <path> [--resources-path <path>] [--ets-path <path>] [--index-path <path>] [--pack-info-path <path>] [--lib-path <path>] --out-path <path> [--force true] [--compress-level 5] [--pkg-context-path <path>] [--hnp-path <path>] [--pkg-sdk-info-path <path>]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/application-models#%E5%BA%94%E7%94%A8%E6%A8%A1%E5%9E%8B%E6%A6%82%E5%86%B5",
            children: "FA模型"
          }), "示例："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -jar app_packing_tool.jar --mode hap --json-path <path> [--maple-so-path <path>] [--profile-path <path>] [--maple-so-dir <path>] [--dex-path <path>] [--lib-path <path>] [--resources-path <path>] [--index-path <path>] --out-path <path> [--force true] [--compress-level 5]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " HAP打包指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--json-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".json文件路径。FA模型文件名必须为config.json；Stage模型文件名必须为module.json。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--profile-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPABILITY.profile文件路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--maple-so-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "maple so文件输入路径，so文件路径，文件名必须以.so为后缀。如果是多个so需要用“，”分隔。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--maple-so-dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "maple so目录输入路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dex-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dex文件路径，文件名必须以.dex为后缀。如果是多个dex需要用“，”分隔。  dex文件路径也可以为目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--lib-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lib库文件路径。从API version 22开始，--exist-src-path配置有效且--lib-path-retain配置为true时，对libs目录做增量打包，直接拷贝--exist-src-path配置的源HAP包中的libs目录，不再打包--lib-path配置的libs目录，--lib-path参数无效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--resources-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resources资源包路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--index-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".index文件路径，文件名必须为resources.index。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pack-info-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pack.info文件路径，文件名必须为pack.info。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--rpcid-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rpcid.sc文件路径，文件名必须为rpcid.sc。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--js-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放js文件目录路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Stage模型生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ets-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放ets文件目录路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Stage模型生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.hap为后缀。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--an-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["存放", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs-V5/faqs-arkts-52-V5",
              children: "an文件"
            }), "的路径。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅stage模型生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ap-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["存放", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs-V5/faqs-arkts-52-V5",
              children: "ap文件"
            }), "的路径。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅stage模型生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dir-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可指定目标文件夹列表，将其打入HAP包内。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--compress-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lib库下文件压缩等级，默认值1。可选等级1-9。在应用配置compressNativeLibs参数为true的情况下生效，数值越大压缩率越高、压缩速度越慢。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pkg-context-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可指定语境信息表文件路径，文件名必须为pkgContextInfo.json。当app.json5配置文件中bundleType取值不是appPlugin，且module.json5配置文件中requestPermissions取值包含\"ohos.permission.kernel.SUPPORT_PLUGIN\"时，该参数必填。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Stage模型生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hnp-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定native软件包文件路径，将native软件包打入HAP包内。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--exist-src-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定增量打包时的源HAP包路径，该路径必须指向一个已存在的、有效的.hap文件。当--lib-path-retain配置为true时，打包工具会直接拷贝源HAP包中的libs目录，不再打包--lib-path指定的libs目录，该特性称为增量打包。当--lib-path-retain配置为false时，正常打包--lib-path指定的libs目录，该参数无效。当libs目录中so文件压缩耗时比较久时，使用增量打包可以提升打包速度。  从API version 22开始支持该参数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Stage模型生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--lib-path-retain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否对libs目录做增量打包。为true时表示对libs目录做增量打包，直接拷贝--exist-src-path指向的源HAP中的libs目录，不再打包--lib-path指定的libs目录；为false时表示不做增量打包，打包--lib-path指向的目录。默认值为false。此参数必须与--exist-src-path配套使用，单独设置不生效。  从API version 22开始支持该参数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Stage模型生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pkg-sdk-info-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pkgSdkInfo.json（构建产物中依赖的HAR的基本信息，包括模块名和版本）文件路径，文件名必须为pkgSdkInfo.json。  从API version 23开始支持该参数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Stage模型生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hsp打包指令",
      children: "HSP打包指令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HSP包实现了多个HAP对文件的共享，开发者可以使用打包工具的jar包对应用进行打包，通过传入打包选项、文件路径，生成所需的HSP包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打包HSP时的压缩规则："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用配置compressNativeLibs为true时，会按照--compress-level设置的压缩等级对--lib-path指定目录下的文件进行压缩。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "出于运行时性能等考量，--lib-path指定目录外的文件不会进行压缩。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode hsp --json-path <path> [--resources-path <path>] [--ets-path <path>] [--index-path <path>] [--pack-info-path <path>] [--lib-path <path>] --out-path <path> [--force true] [--compress-level 5] [--pkg-context-path <path>] [--pkg-sdk-info-path <path>]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " HSP打包指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--json-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".json文件路径，文件名必须为module.json。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--profile-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAPABILITY.profile文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dex-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. dex文件路径，文件名必须以.dex为后缀。如果是多个dex需要用“，”分隔。  2. dex文件路径也可以为目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--lib-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lib库文件路径。从API version 22开始，--exist-src-path配置有效且--lib-path-retain配置为true时，对libs目录做增量打包，直接拷贝--exist-src-path配置的源HAP包中的libs目录，不再打包--lib-path配置的libs目录，--lib-path参数无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--resources-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resources资源包路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--index-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".index文件路径，文件名必须为resources.index。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pack-info-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pack.info文件路径，文件名必须为pack.info。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--js-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放js文件目录路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ets-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放ets文件目录路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.hsp为后缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--compress-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lib库下文件压缩等级，默认值1，可选等级1-9。在应用配置compressNativeLibs参数为true的情况下生效，数值越大压缩率越高、压缩速度越慢。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pkg-context-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可指定语境信息表文件路径，文件名必须为pkgContextInfo.json。当app.json5配置文件中bundleType取值不是appPlugin，且module.json5配置文件中requestPermissions取值包含\"ohos.permission.kernel.SUPPORT_PLUGIN\"时，该参数必填。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--exist-src-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定增量打包时的源HSP包路径，该路径必须指向一个已存在的、有效的.hsp文件。当--lib-path-retain配置为true时，打包工具会直接拷贝源HSP包中的libs目录，不再打包--lib-path指定的libs目录，该特性称为增量打包。当--lib-path-retain配置为false时，正常打包--lib-path指定的libs目录，该参数无效。当libs目录中so文件压缩耗时比较久时，使用增量打包可以提升打包速度。  从API version 22开始支持该参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--lib-path-retain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否对libs目录做增量打包。为true时表示对libs目录做增量打包，直接拷贝--exist-src-path指向的源HSP中的libs目录，不再打包--lib-path指定的libs目录；为false时表示不做增量打包，打包--lib-path指向的目录。默认值为false。此参数必须与--exist-src-path配套使用，单独设置不生效。  从API version 22开始支持该参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pkg-sdk-info-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pkgSdkInfo.json（构建产物中依赖的HAR的基本信息，包括模块名和版本）文件路径，文件名必须为pkgSdkInfo.json。  从API version 23开始支持该参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "app打包指令",
      children: "App打包指令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用打包工具的jar包对应用进行打包，通过传入打包选项、文件路径，生成所需的App包。App包用于上架应用市场。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " App打包合法性校验规则"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HAP或HSP的module.json中的被校验字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "校验规则"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "module下的name字段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的name字段值均不相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的bundleName字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的bundleType字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的versionCode字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 20开始，要求所有HAP的debug字段值均保持一致，如果HAP的debug字段值为false，HSP的debug字段值也必须为false。如果HAP的debug字段值为true，对HSP的debug字段值无要求。  对于API version 19及之前版本，要求所有HAP或HSP的debug字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 20开始，要求所有HAP的minAPIVersion字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 19及之前版本，要求所有HAP或HSP的minAPIVersion字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minCompatibleVersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 16开始，要求所有HAP的minCompatibleVersionCode字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 15及之前版本，要求所有HAP或HSP的minCompatibleVersionCode字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 16开始，要求所有HAP的targetAPIVersion字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 15及之前版本，要求所有HAP或HSP的targetAPIVersion字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 12开始，不再对versionName校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 23，要求所有HAP或HSP的buildVersion字段值均保持一致。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(240845)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["module.json文件为DevEco Studio编译构建产物，其中的字段与配置文件的对应关系，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool",
          children: "表1 module.json与配置文件属性的对照表"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打包APP时的压缩规则："
        })
      }), " 打包APP时，对release模式的HAP、HSP包会进行压缩，对debug模式的HAP、HSP包不会压缩。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693558)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若HAP或HSP中已压缩的so文件，在打包APP时再次压缩，将不会有明显体积缩减。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode app [--hap-path <path>] [--hsp-path <path>] --out-path <path> [--signature-path <path>] [--certificate-path <path>] --pack-info-path <path> [--pack-res-path <path>] [--force true] [--encrypt-path <path>] [--pac-json-path <path>] [--atomic-service-entry-size-limit <size>] [--atomic-service-non-entry-size-limit <size>] [--replace-pack-info false]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " App打包指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多个HAP需满足HAP的合法性校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hap-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP包文件路径，文件名必须以.hap为后缀。如果是多个HAP包需要用“,”分隔。  HAP包文件路径也可以是目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hsp-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP包文件路径，文件名必须以.hsp为后缀。如果是多个HSP包需要用“,”分隔。  HSP包文件路径也可以是目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pack-info-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名必须为pack.info。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.app为后缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--signature-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--certificate-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pack-res-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pack.res快照文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--encrypt-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名必须为encrypt.json 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pac-json-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-appendix/agc-pac",
              children: "pac.json"
            }), "文件路径，文件名必须为pac.json。  从API version 20开始支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--atomic-service-entry-size-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置元服务entry包大小（包含其依赖包的大小）限制，仅Stage模型应用且bundleType为atomicService时生效。取值范围为[0,4194304]的整数，取值为0表示不限制大小，单位KB。不设置该参数时默认值为2048KB。如果entry包是release模式（module.json5文件中type字段值为entry，且app.json5中debug字段的值为false），该限制作用于打包app时压缩后的entry包大小（包含其依赖包的大小）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--atomic-service-non-entry-size-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置元服务非entry包大小（包含其依赖包的大小）限制，仅Stage模型应用且bundleType为atomicService时生效。取值范围为[0,4194304]的整数，取值为0表示不限制大小，单位KB。不设置该参数时默认值为2048KB。如果非entry包是release模式（module.json5文件中type字段值不是entry，且app.json5中debug字段的值为false），该限制作用于打包app时压缩后的非entry包大小（包含其依赖包的大小）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--replace-pack-info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包APP时，是否使用由--pack-info-path参数指定的pack.info文件替换HAP、HSP包中的pack.info文件。如果为true表示替换，false表示不替换，默认值为true。  从API version 22开始支持该参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--stat-duplicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["打包完成后，是否扫描重复so文件，该参数可用于识别重复so，以减小包大小。取值为true时，执行扫描，扫描完成会在--out-path参数指定的输出文件所在目录下生成scan_report目录，其中包含文件名为scan_result的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%89%AB%E6%8F%8F%E9%87%8D%E5%A4%8Dso%E6%96%87%E4%BB%B6",
              children: "重复so文件扫描报告"
            }), "，并在告警中打印scan_report目录路径。取值为false时，不执行扫描。默认值为false。  从API version 23开始支持该参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多工程打包指令",
      children: "多工程打包指令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多工程打包适用于多个团队开发同一个应用，但不方便共享代码的情况。开发者通过传入已经打好的HAP、HSP和App包，将多个包打成一个最终的App包，并上架应用市场。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " 多工程打包合法性校验规则"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HAP或HSP的module.json中的被校验字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "校验规则"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "module下的name字段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的name字段值均不相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的bundleName字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的bundleType字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的versionCode字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 20开始，要求所有HAP的debug字段值均保持一致，如果HAP的debug字段值为false，HSP的debug字段值也必须为false。如果HAP的debug字段值为true，对HSP的debug字段值无要求。  对于API version 19及之前版本，要求所有HAP或HSP的debug字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 20开始，要求所有HAP的minAPIVersion字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 19及之前版本，要求所有HAP或HSP的minAPIVersion字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minCompatibleVersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 16开始，要求所有HAP的minCompatibleVersionCode字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 15及之前版本，要求所有HAP或HSP的minCompatibleVersionCode字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 16开始，要求所有HAP的targetAPIVersion字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 15及之前版本，要求所有HAP或HSP的targetAPIVersion字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 12开始，不再对versionName校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 23开始，要求所有HAP或HSP的buildVersion字段值均保持一致。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3406)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["module.json文件为DevEco Studio编译构建产物，其中的字段与配置文件的对应关系，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool",
          children: "表1 module.json与配置文件属性的对照表"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode multiApp [--hap-list <path>] [--hsp-list <path>] [--app-list <path>] --out-path <option> [--force true] [--encrypt-path <path>] [--pac-json-path <path>] [--atomic-service-entry-size-limit <size>] [--atomic-service-non-entry-size-limit <size>]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " 多工程打包指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "multiApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包类型，在将多个HAP打入同一个App时，需保证每个HAP满足合法性校验规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hap-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP的路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP包文件路径，文件名必须以.hap为后缀。如果是多个HAP包需要“,”分隔。  HAP文件路径也可以是目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hsp-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP的路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP包文件路径，文件名必须以.hsp为后缀。如果是多个HSP包需要“,”分隔。  HSP文件路径也可以是目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--app-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App的路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App文件路径，文件名必须以.app为后缀。如果是多个App包需要用“,”分隔。  App文件路径也可以是目录。  --hap-list，--hsp-list，--app-list不可以都不传。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.app为后缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--encrypt-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "encrypt.json的路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名必须为encrypt.json。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pac-json-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-appendix/agc-pac",
              children: "pac.json"
            }), "文件路径，文件名必须为pac.json。  最终app产物中pac.json文件只来源于该参数，不配置的话，最终app产物不包含该文件。  --app-list参数指定的app包中的pac.json不会打包进最终app。  从API version 20开始支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--atomic-service-entry-size-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置元服务entry包大小（包含其依赖包的大小）限制，仅Stage模型应用且bundleType为atomicService时生效。取值范围为[0,4194304]的整数，取值为0表示不限制大小，单位KB。不设置该参数时默认值为2048KB。如果entry包是release模式（module.json5文件中type字段值为entry，且app.json5中debug字段的值为false），该限制作用于打包app时压缩后的entry包大小（包含其依赖包的大小）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--atomic-service-non-entry-size-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置元服务非entry包大小（包含其依赖包的大小）限制，仅Stage模型应用且bundleType为atomicService时生效。取值范围为[0,4194304]的整数，取值为0表示不限制大小，单位KB。不设置该参数时默认值为2048KB。如果非entry包是release模式（module.json5文件中type字段值不是entry，且app.json5中debug字段的值为false），该限制作用于打包app时压缩后的非entry包大小（包含其依赖包的大小）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--stat-duplicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["打包完成后，是否扫描重复so文件，该参数可用于识别重复so，以减小包大小。取值为true时，执行扫描，扫描完成会在--out-path参数指定的输出文件所在目录下生成scan_report目录，其中包含文件名为scan_result的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%89%AB%E6%8F%8F%E9%87%8D%E5%A4%8Dso%E6%96%87%E4%BB%B6",
              children: "重复so文件扫描报告"
            }), "，并在告警中打印scan_report目录路径。取值为false时，不执行扫描。默认值为false。  从API version 23开始支持该参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hqf打包指令",
      children: "HQF打包指令"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HQF包适用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-debug-app/ide-code-debugging/ide-incremental-debugging",
        children: "增量调试"
      }), "场景。开发者可以使用打包工具的jar包对应用进行打包，通过传入打包选项、文件路径，生成所需的HQF包。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(727050)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HQF包不支持上架应用市场，仅用于增量调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode hqf --json-path <path> [--lib-path <path>] [--ets-path <path>] [--resources-path <path>] --out-path <path> [--force true]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表8"
        })
      }), " HQF打包指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hqf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--json-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [".json文件路径，文件名必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-debug-app/ide-code-debugging/ide-incremental-debugging#section28031446182019",
              children: "patch.json"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--lib-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lib库文件的路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--ets-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放ets文件目录路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--resources-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resources资源包路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.hqf为后缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appqf打包指令",
      children: "APPQF打包指令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APPQF包由一个或多个HQF文件组成。这些HQF包在应用市场会从APPQF包中拆分出来，再被分发到具体的设备上。开发者可以使用打包工具的jar包对应用进行打包，通过传入打包选项、文件路径，生成所需的APPQF包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "APPQF打包合法性校验"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在打包生成APPQF包时，确保每个HQF的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-code-debugging/ide-incremental-debugging#section28031446182019",
          children: "patch.json文件"
        }), "中的versionName、versionCode、patchVersionName、patchVersionCode保持一致。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["所有HQF不得重复。HQF重复是指同时满足以下两个条件：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "两个HQF的patch.json文件中module下的name字段相同。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "两个HQF的patch.json文件中module下的deviceTypes属性相交（至少存在一个相同的设备类型）。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode appqf --hqf-list <path> --out-path <path> [--force true]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表9"
        })
      }), " APPQF打包指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "appqf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hqf-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool#hqf%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
              children: "HQF文件"
            }), "路径，多个HQF以英文逗号隔开。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.appqf为后缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "版本归一指令versionnormalize",
      children: "版本归一指令（versionNormalize）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同一个App中，所有HAP、HSP包的versionName和versionCode需要保持一致。当只有一个HAP或HSP需要修改升级时，可以调用此命令，将多个HAP、HSP的版本统一。本命令会修改所传入的HAP、HSP的版本号和版本名称，并在指定目录生成修改后的同名HAP、HSP，以及一个version_record.json文件，用于记录所有HAP、HSP原有的版本号、版本名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode versionNormalize --input-list 1.hap,2.hsp --version-code 1000001 --version-name 1.0.1 --out-path out\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表10"
        })
      }), " versionNormalize指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "versionNormalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--input-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP或HSP的路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. HAP或HSP包文件路径，文件名必须以.HAP或.HSP为后缀。如果是多个HAP或HSP包需要“,”分隔。  2. 传入目录时，会读取目录下所有的HAP和HSP文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的版本号，HAP、HSP的版本号会被修改为该版本。需要为整数，且不小于所有传入的HAP、HSP的版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的版本名称，HAP、HSP的版本名称会被修改为该版本名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，需要为一个目录。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "包名归一指令packagenormalize",
      children: "包名归一指令（packageNormalize）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令可以修改传入的HSP的包名和版本号，并在指定目录生成修改后的同名HSP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode packageNormalize --hsp-list 1.hsp,2.hsp --bundle-name com.example.myapplication --version-code 1000001 --out-path out\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表11"
        })
      }), " 参数含义及规范"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "packageNormalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hsp-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP的路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. HSP包文件路径，文件名必须以.hsp为后缀。如果是多个HSP包需要“,”分隔。  2. HSP包目录。仅处理目录内以.hsp为后缀的文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--bundle-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的包名，HSP的包名会被修改为指定的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的版本号，HSP的版本号会被修改为该版本号。需要为整数，且大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，需要为一个目录。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用归一指令generalnormalize",
      children: "通用归一指令（generalNormalize）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令可以修改传入的HAP或HSP的deviceType/bundleName/versionName/versionCode/minCompatibleVersionCode/minAPIVersion/targetAPIVersion/"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "apiReleaseType/bundleTypes/installationFree/deliveryWithInstall参数，并在指定目录生成修改后的同名HAP或HSP，以及一个general_record.json文件，用于记录所有HAP、HSP原有的参数名称和moduleName。上述设置的参数应符合正确打包规范，否则会在指定目录生成HAP或HSP失败，指定目录不会有文件生成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(335981)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 20开始支持通用归一化指令。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode generalNormalize --input-list 1.hsp,2.hsp --bundle-name com.example.myapplication --version-code 1000001 --version-name 1.0.1 --min-compatible-version-code 14 --min-api-version 14 --target-api-version 14 --api-release-type Release1 --bundle-type app --installation-free false --delivery-with-install true --device-types default,tablet --out-path out\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表12"
        })
      }), " 参数含义及规范"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "generalNormalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指令类型，表示通用归一化指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--input-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP或HSP的路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. HAP或HSP包文件路径，文件名必须以.hap或.hsp为后缀。多个HAP或HSP包文件路径之间使用“,”分隔。  2. 传入目录时，会读取目录下所有的HAP和HSP文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--bundle-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的Bundle名称，传入的包的Bundle名称会被修改为该Bundle名称。指定的值不能为空，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的bundleName字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本号"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的版本号，传入的包的版本号会被修改为该版本号。取值范围为0~2147483647的整数，指定的值不能为空值，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的versionCode字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本名称"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的版本名称，传入的包的版本名称会被修改为该版本名称。指定的值不能为空，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的versionName字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--min-compatible-version-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能够兼容的最低历史版本号"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的最低历史版本号，传入的包的最低历史版本号会被修改为该版本号。取值范围为0~2147483647的整数，指定的值不能为空值，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的minCompatibleVersionCode字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--min-api-version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK的API最小版本"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的SDK的API最小版本，传入的包的SDK的API最小版本会被修改为该版本。取值范围为0~2147483647的整数，指定的值不能为空值，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的minAPIVersion字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--target-api-version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API目标版本"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的API目标版本，传入的包的API目标版本会被修改为该版本。取值范围为0~2147483647的整数，指定的值不能为空值，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的targetAPIVersion字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--api-release-type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API目标版本的类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的API目标版本的类型，传入的包的API目标版本的类型会被修改为该类型。指定的值不能为空，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的apiReleaseType字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--bundle-type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的Bundle类型，传入的包的Bundle类型会被修改为该类型。指定的值不能为空，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的bundleType字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--installation-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持免安装特性"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的免安装特性，传入的包的免安装特性会被修改为该类型。指定的值不能为空，该字段的详细定义和规格请参考Stage模型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "module.json5"
            }), "/FA模型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
              children: "config.json"
            }), "中的installationFree字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--delivery-with-install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前HAP是否在用户主动安装HAP所在应用的时候一起安装"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的HAP是否需要一起安装，传入的包的deliveryWithInstall会被修改为该类型。指定的值不能为空，该字段的详细定义和规格参考Stage模型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "module.json5"
            }), "/FA模型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
              children: "config.json"
            }), "中的deliveryWithInstall字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--device-types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许Ability运行的设备类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的设备类型，传入的包的设备类型会被修改为该类型。指定的值不能为空，该字段的详细定义和规格请参考Stage模型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "module.json5"
            }), "/FA模型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
              children: "config.json"
            }), "中的deviceTypes字段，传入值的形式为字符串格式，多个设备类型之间使用“,”分隔。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，需要为一个有读写权限的目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--build-version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建版本号"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的构建版本号，传入的包的构建版本号会被修改为该版本号。指定的值不能为空值，该字段的详细定义和规格请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "中的buildVersion字段。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "res模式打包指令",
      children: "res模式打包指令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令用于打包元服务快照资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode res --entrycard-path <path> --pack-info-path <path> --out-path <path> [--force true]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表13"
        })
      }), " 参数含义及规范"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--entrycard-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快照目录的路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pack-info-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pack.info文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.res为后缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fastapp模式打包指令",
      children: "fastApp模式打包指令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用打包工具的jar包对应用进行打包，通过传入打包选项、HAP、HSP包文件目录路径，生成所需的App包。App包用于上架应用市场。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表14"
        })
      }), " fastApp打包合法性校验规则"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HAP或HSP的module.json中的被校验字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "校验规则"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "module下的name字段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的name字段值均不相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的bundleName字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的bundleType字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "versionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求所有HAP或HSP的versionCode字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 20开始，要求所有HAP的debug字段值均保持一致，如果HAP的debug字段值为false，HSP的debug字段值也必须为false。如果HAP的debug字段值为true，对HSP的debug字段值无要求。  对于API version 19及之前版本，要求所有HAP或HSP的debug字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 20开始，要求所有HAP的minAPIVersion字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 19及之前版本，要求所有HAP或HSP的minAPIVersion字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minCompatibleVersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 16开始，要求所有HAP的minCompatibleVersionCode字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 15及之前版本，要求所有HAP或HSP的minCompatibleVersionCode字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetAPIVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 16开始，要求所有HAP的targetAPIVersion字段值均保持一致，且均不低于所有HSP对应字段的最大值。  对于API version 15及之前版本，要求所有HAP或HSP的targetAPIVersion字段值均保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 23开始，要求所有HAP或HSP的buildVersion字段值均保持一致。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(215402)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["module.json文件为DevEco Studio编译构建产物，其中的字段与配置文件的对应关系，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool",
          children: "表1 module.json与配置文件属性的对照表"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "打包App时的压缩规则："
        })
      }), " 打包App时，对release模式的HAP、HSP包会进行压缩，对debug模式的HAP、HSP包不会压缩。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24182)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若HAP或HSP中已压缩的so文件，在打包APP时再次压缩，将不会有明显体积缩减。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar app_packing_tool.jar --mode fastApp [--hap-path <path>] [--hsp-path <path>] --out-path <path> [--signature-path <path>] [--certificate-path <path>] --pack-info-path <path> [--pack-res-path <path>] [--force true] [--encrypt-path <path>] [--pac-json-path <path>] [--atomic-service-entry-size-limit <size>] [--atomic-service-non-entry-size-limit <size>]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表15"
        })
      }), " 参数含义及规范"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "指令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fastApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多个HAP需满足HAP的合法性校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hap-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP包文件目录路径，目录内要包含一个完整的HAP包的所有文件。允许传入多个路径，多个路径需要用英文“,”分隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hsp-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. HSP包文件路径，文件名必须以.hsp为后缀。如果是多个HSP包需要用英文“,”分隔。  2. HSP包文件目录路径，目录内要包含一个完整的HSP包的所有文件。允许传入多个路径，多个路径需要用英文“,”分隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pack-info-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名必须为pack.info。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--out-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标文件路径，文件名必须以.app为后缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--signature-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--certificate-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pack-res-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pack.res快照文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当目标文件路径已存在时，控制是否强制执行覆盖。当--out-path目标文件打包前已存在，该参数为true时，覆盖写入；为false时，终止打包过程并报错。当--out-path目标文件打包前不存在，正常打包，该参数无效。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--encrypt-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名必须为encrypt.json。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pac-json-path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-appendix/agc-pac",
              children: "pac.json"
            }), "文件路径，文件名必须为pac.json。  从API version 20开始支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--atomic-service-entry-size-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置元服务entry包大小（包含其依赖包的大小）限制，仅Stage模型应用且bundleType为atomicService时生效。取值范围为[0,4194304]的整数，取值为0表示不限制大小，单位KB。不设置该参数时默认值为2048KB。如果entry包是release模式（module.json5文件中type字段值为entry，且app.json5中debug字段的值为false），该限制作用于打包app时压缩后的entry包大小（包含其依赖包的大小）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--atomic-service-non-entry-size-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置元服务非entry包大小（包含其依赖包的大小）限制，仅Stage模型应用且bundleType为atomicService时生效。取值范围为[0,4194304]的整数，取值为0表示不限制大小，单位KB。不设置该参数时默认值为2048KB。如果非entry包是release模式（module.json5文件中type字段值不是entry，且app.json5中debug字段的值为false），该限制作用于打包app时压缩后的非entry包大小（包含其依赖包的大小）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--stat-duplicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["打包完成后，是否扫描重复so文件，该参数可用于识别重复so，以减小包大小。取值为true时，执行扫描，扫描完成会在--out-path参数指定的输出文件所在目录下生成scan_report目录，其中包含文件名为scan_result的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%89%AB%E6%8F%8F%E9%87%8D%E5%A4%8Dso%E6%96%87%E4%BB%B6",
              children: "重复so文件扫描报告"
            }), "，并在告警中打印scan_report目录路径。取值为false时，不执行扫描。默认值为false。  从API version 23开始支持该参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "扫描重复so文件",
      children: "扫描重复so文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#app%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "app打包指令"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fastapp%E6%A8%A1%E5%BC%8F%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "fastApp打包指令"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A4%9A%E5%B7%A5%E7%A8%8B%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "多工程打包指令"
      }), "打包生成App包时，设置--stat-duplicate为true开启扫描重复so文件，系统将在打包成功后生成扫描报告。识别重复so后，开发者可根据实际需求减小包大小。扫描报告将存放在打包生成的App包所在目录下的scan_report目录中。扫描报告的内容结构如表16所示，重复so文件的特征信息结构如表17所示。扫描报告的示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "json统计结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[{\n    \"result\":[{\n        \"md5\":\"975c41f5727b416b1ffefa5bb0f073b2\",\n        \"size\":1108880,\n        \"files\":[\n            \"/application-entry-default.hap/libs/armeabi-v7a/example.so\",\n            \"/entry-default.hap/libs/armeabi-v7a/example.so\"\n        ]\n    }],\n    \"startTime\": \"2025-11-13 16:02:48.381\",\n    \"stopTime\": \"2025-11-13 16:02:48.381\",\n    \"taskDesc\": \"find the duplicated so\"\n}]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表16 重复so文件扫描报告字段信息"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复so文件的特征信息，包含MD5值、文件大小和文件路径，具体内容参考表17。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务开始时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务结束时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务描述，输出\"find the duplicated so\"。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表17 重复so文件的特征字段信息"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "md5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复so文件的MD5值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复so文件的大小。单位为Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector<String>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复so文件的路径。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "打包工具错误码",
      children: "打包工具错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10010001-执行打包工具失败",
      children: "10010001 执行打包工具失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Execute packing tool failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行打包工具失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包文件合法性校验失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要打包的文件正在被其他程序使用，例如压缩软件或文件管理器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据报错信息检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的配置项是否准确。当有多条报错信息时，优先根据第一条报错信息进行排查。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有程序（如压缩软件、文件管理器）占用打包文件，关闭相关进程后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10010002-打包参数解析失败",
      children: "10010002 打包参数解析失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command parser failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包参数解析失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必填参数缺失或传入空值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10010003---force参数值校验失败",
      children: "10010003 --force参数值校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command verify failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--force参数值校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--force参数值不是布尔类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数值不在取值范围内，仅支持取值为true或false。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数值大小写或格式错误，如True、FALSE、1、yes等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查参数值，确保明确指定为true或false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011001-打包hap时参数校验失败",
      children: "10011001 打包HAP时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in hap mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确，如路径为空、文件类型不匹配、非法字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011002-打包hsp时参数校验失败",
      children: "10011002 打包HSP时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in hsp mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HSP时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011003-打包app时参数校验失败",
      children: "10011003 打包App时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in app mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包App时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011004-多工程打包时参数校验失败",
      children: "10011004 多工程打包时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in multiApp mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多工程打包时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011005-res模式打包时参数校验失败",
      children: "10011005 res模式打包时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in res mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "res模式打包时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011006-打包hqf时参数校验失败",
      children: "10011006 打包HQF时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in hqf mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HQF时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011007-打包appqf时参数校验失败",
      children: "10011007 打包APPQF时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in appqf mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包APPQF时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011008-包名归一化时参数校验失败",
      children: "10011008 包名归一化时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in packageNormalize mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包名归一化时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011009-版本归一化时参数校验失败",
      children: "10011009 版本归一化时参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in versionNormalize mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本归一化时参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数值格式不正确（如路径为空、文件类型不匹配、非法字符）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011011---mode参数值校验失败",
      children: "10011011 --mode参数值校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command verify mode is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--mode参数值校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--mode参数值不是有效的打包模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数值拼写错误或大小写不符合规范。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用了当前工具版本尚未支持的打包模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--mode参数取值，确保使用打包资料中列举的合法打包模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "核对参数拼写及大小写是否与文档保持一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认所使用的打包工具版本是否支持该打包模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011012-校验bundletype是否为shared时失败",
      children: "10011012 校验bundleType是否为shared时失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check bundleType is shared failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验bundleType是否为shared时失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析--json-path指定的module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--json-path指定的module.json文件，确保文件格式符合JSON格式规则。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011016-检查hsp是否包含入口uiability失败",
      children: "10011016 检查HSP是否包含入口UIAbility失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check hsp has entry ability failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查HSP是否包含入口UIAbility失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析--json-path指定的module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--json-path指定的module.json文件，确保文件格式符合JSON格式规则。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011017-检查hsp是否包含入口extensionability失败",
      children: "10011017 检查HSP是否包含入口ExtensionAbility失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check hsp has entry extensionAbility failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查HSP是否包含入口ExtensionAbility失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析--json-path指定的module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--json-path指定的module.json文件，确保文件格式符合JSON格式规则。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011018-检查--out-path参数失败",
      children: "10011018 检查--out-path参数失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid output path."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查--out-path参数失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--force参数值为false，且--out-path指定的文件已存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前为HAP打包模式，但--out-path指定的文件后缀不是.hap。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前为HSP打包模式，但--out-path指定的文件后缀不是.hsp。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前为app打包模式，但--out-path指定的文件后缀不是.app。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前为res打包模式，但--out-path指定的文件后缀不是.res。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当--out-path指定的目标文件已存在时，请将--force参数设置为true以允许覆盖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据当前打包模式，确认--out-path指定的输出文件后缀正确。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011020-版本归一化打包模式参数校验失败",
      children: "10011020 版本归一化打包模式参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Handle hap and hsp input failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本归一化打包模式校验--input-list参数失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--input-list参数指向的文件既不是HAP也不是HSP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认--input-list参数中列出的文件均为有效的.hap或.hsp包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011021-通用归一化打包模式参数校验失败",
      children: "10011021 通用归一化打包模式参数校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in generalNormalize mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用归一化打包模式参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包归一化后的pack.info文件失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通用归一化打包模式下的参数配置不正确。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011022-检查元服务大小限制参数失败",
      children: "10011022 检查元服务大小限制参数失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse atomicService size limit failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查元服务大小限制参数失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--atomic-service-entry-size-limit参数值不在[0, 4194304]范围内（单位KB）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--atomic-service-non-entry-size-limit参数值不在[0, 4194304]范围内（单位KB）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--atomic-service-entry-size-limit参数值为[0, 4194304]范围内的整数（单位KB）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--atomic-service-non-entry-size-limit参数值为[0, 4194304]范围内的整数（单位KB）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012001-执行压缩操作失败",
      children: "10012001 执行压缩操作失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Execute compress process failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行打包操作时，例如打包HAP或App，执行压缩操作失败，导致打包中断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包文件合法性校验失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要打包的文件正在被其他程序使用，例如压缩软件或文件管理器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据报错信息检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的配置项是否准确。当有多条报错信息时，优先根据第一条报错信息进行排查。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有程序（如压缩软件、文件管理器）占用打包文件，关闭相关进程后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012002-hap包压缩失败",
      children: "10012002 HAP包压缩失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compress Stage Hap failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP时，执行压缩Stage模型的HAP包操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage模型HAP包打包文件合法性校验失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要打包的文件正在被其他程序使用，例如压缩软件或文件管理器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据报错信息检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的配置项是否准确。当有多条报错信息时，优先根据第一条报错信息进行排查。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有程序（如压缩软件、文件管理器）占用打包文件，关闭相关进程后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012003-校验hap信息失败",
      children: "10012003 校验HAP信息失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify stage hap info failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包Stage模型HAP包时，配置信息校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5中atomicService或continueBundleName存在配置错误，或app.json5中asanEnabled或hwasanEnabled存在配置错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section10012004-%E6%A3%80%E6%9F%A5%E5%8F%82%E6%95%B0asanenabled%E5%A4%B1%E8%B4%A5",
        children: "asanEnabled配置错误码"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section10012005-%E6%A3%80%E6%9F%A5%E5%8F%82%E6%95%B0hwasanenabled%E5%A4%B1%E8%B4%A5",
        children: "hwasanEnabled配置错误码"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section10012006-%E6%A3%80%E6%9F%A5atomicservice%E5%A4%B1%E8%B4%A5",
        children: "atomicService配置错误码"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section10012007-%E6%A3%80%E6%9F%A5continuebundlename%E6%97%A0%E6%95%88",
        children: "continueBundleName配置错误码"
      }), "，更改配置项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012004-检查参数asanenabled失败",
      children: "10012004 检查参数asanEnabled失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check asanEnabled failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP或HSP时，app.json5中asanEnabled配置错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "asanEnabled和tsanEnabled被同时设置为true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5"
      }), "，修改asanEnabled和tsanEnabled，确保二者不会同时为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012005-检查参数hwasanenabled失败",
      children: "10012005 检查参数hwasanEnabled失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check hwasanEnabled failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP或HSP时，app.json5中hwasanEnabled配置错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hwasanEnabled和asanEnabled被同时配置为true。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hwasanEnabled和tsanEnabled被同时配置为true。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hwasanEnabled和GWPAsanEnabled被同时配置为true。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5"
      }), "，确保asanEnabled、tsanEnabled、GWPAsanEnabled三项的中任一项与hwasanEnabled，不会同时配置为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012006-检查atomicservice失败",
      children: "10012006 检查atomicService失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check atomicService failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP或HSP时，atomicService配置检查失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json5中entry模块未配置ability，导致atomicService配置检查失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当app.json5中bundleType配置为atomicService时，但module.json5中installationFree为false。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "，确保module.json5文件中正确配置了abilities标签，并且至少包含一个ability，详细请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
          children: "abilities标签"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查module.json5和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "，当bundleType为atomicService时，确保installationFree配置为true，反之，需要配置为false。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012007-检查continuebundlename无效",
      children: "10012007 检查continueBundleName无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check continueBundleName invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP或HSP时，continueBundleName配置检查失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5中的continueBundleName与app.json5中bundleName相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["修改continueBundleName，确保其与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5"
      }), "中的bundleName不同。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012008-检查overlay失败",
      children: "10012008 检查overlay失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check whether is an overlay hsp failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否是overlay特性HSP包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在module.json5中同时配置了targetModuleName与requestPermissions。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json5中的targetModuleName和module.json5中的name相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在module.json5中配置了targetPriority时，未配置targetModuleName。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在app.json5中配置了targetBundleName时，module.json5中未配置targetModuleName。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在app.json5中的targetBundleName与bundleName配置相同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "，确保targetModuleName和requestPermissions不会同时出现。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json5，确保targetModuleName和name不同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json5，确保配置targetPriority时，同时配置了targetModuleName。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "和module.json5，确保配置targetBundleName时，同时配置了targetModuleName。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查app.json5，确保targetBundleName与bundleName不同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012009-执行压缩操作时异常",
      children: "10012009 执行压缩操作时异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Process compress exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行压缩HAP或HSP/App操作时存在异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包文件合法性校验失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要打包的文件正在被其他程序使用，例如压缩软件或文件管理器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据报错信息检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的配置项是否准确。当有多条报错信息时，优先根据第一条报错信息进行排查。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有程序（如压缩软件、文件管理器）占用打包文件，关闭相关进程后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012010-校验模块generatebuildhash属性失败",
      children: "10012010 校验模块generateBuildHash属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify has generate build hash failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验模块generateBuildHash属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析--json-path指定的module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查--json-path指定的module.json文件，确保文件格式符合JSON格式规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012011-设置generatebuildhash属性失败",
      children: "10012011 设置generateBuildHash属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set generate build hash failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置generateBuildHash属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析--json-path指定的module.json文件失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在对module.json进行格式化或写入时发生I/O异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--json-path指定的module.json文件，确保文件格式符合JSON格式规则。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据日志中“Error Message:”信息，定位具体的I/O或格式化异常原因。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012012-检查应用的ubsanenabled属性失败",
      children: "10012012 检查应用的ubsanEnabled属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check ubsanEnabled failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查应用的ubsanEnabled属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在app.json5中同时将ubsanEnabled和asanEnabled设置为true。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在app.json5中同时将ubsanEnabled和tsanEnabled设置为true。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在app.json5中同时将ubsanEnabled和hwasanEnabled设置为true。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改app.json5配置，确保ubsanEnabled不与asanEnabled、tsanEnabled或hwasanEnabled中的任一属性同时为true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012013-解析modulejson文件失败",
      children: "10012013 解析module.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read Stage hap verify info exist exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析module.json时发生I/O异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JDK 20对zip64扩展数据字段校验存在已知缺陷，当zip包（如HAP、HSP或任何zip64文件）的目录中zip64扩展字段长度异常时，解析会抛出Invalid CEN header (invalid zip64 extra data field size)异常。"
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
          children: "根据日志中“Error Message:”信息，定位具体的I/O或格式化异常原因。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若“Error Message:”中包含Invalid CEN header (invalid zip64 extra data field size)，请检查当前JDK版本是否为JDK 20。建议更换为JDK 17（LTS）或JDK 21（LTS）等长期支持版本。若无法更换JDK版本，可在JVM启动参数中添加-Djdk.util.zip.disableZip64ExtraFieldValidation=true规避此问题。在打包指令中添加JVM启动参数的示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -Djdk.util.zip.disableZip64ExtraFieldValidation=true -jar app_packing_tool.jar --mode app --hap-path <path> --out-path <path> --pack-info-path <path>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012014-打包--lib-path指定目录失败",
      children: "10012014 打包--lib-path指定目录失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parallel compress exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包--lib-path指定目录失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "待压缩文件在压缩过程中被删除。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "读取文件时发生I/O错误（坏盘、网络文件系统异常）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件路径过长、包含不支持的字符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认待压缩文件存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更换待压缩文件存储位置，重试打包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查并修改文件路径和文件名，重试打包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "清理磁盘，确认充足磁盘空间。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012015-构建app包失败",
      children: "10012015 构建App包失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compress app file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建App包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App打包文件合法性校验失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要打包的文件正在被其他程序使用，例如压缩软件或文件管理器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据报错信息检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的配置项是否准确。当有多条报错信息时，优先根据第一条报错信息进行排查。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有程序（如压缩软件、文件管理器）占用打包文件，关闭相关进程后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012016-打包指定的hap或hsp文件无效",
      children: "10012016 打包指定的HAP或HSP文件无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check input hap or hsp file is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包指定的HAP或HSP文件无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包参数中指定的HAP或HSP文件名为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包参数中HAP文件名后缀不是.hap或者HSP文件名后缀不是.hsp。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认打包参数中HAP或HSP文件名不为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认打包参数中HAP文件名后缀是.hap或者HSP文件名后缀是.hsp。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012017-检查sharedapp无效",
      children: "10012017 检查SharedAPP无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check shared App mode invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
        children: "bundleType"
      }), "为shared的App包时，检查HSP包无效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["存在两个以上的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
            children: "HSP包"
          }), "。例如下图使用DevEco Studio构建App时，工程中包含了两个HSP包library和library1，此时打包APP包失败。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(788193)/* ["default"] */.A) + "",
            width: "1694",
            height: "616"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HSP包在module.json5中配置了dependencies。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查打包文件，确保bundleType为shared的App包中，HSP包不超过一个。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查打包文件，删除HSP包中", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "配置的dependencies。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012018-检查应用的bundle类型无效",
      children: "10012018 检查应用的Bundle类型无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check bundleType is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查应用的Bundle类型无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参与打包的HAP和HSP的bundleType不相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查所有参与打包的HAP和HSP的app.json5配置文件，确认bundleType配置完全一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012019-检查元服务包大小失败",
      children: "10012019 检查元服务包大小失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check app atomicservice compress size failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查元服务包大小失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析元服务包时抛I/O异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元服务应用内没有HAP（module.json5文件中type字段值为entry或feature）和HSP（module.json5文件中type字段值为shared）包。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据日志中“Error Message:”信息，定位具体的I/O或格式化异常原因。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查元服务应用，确认包含HAP（module.json5文件中type字段值为entry或feature）和HSP（module.json5文件中type字段值为shared）包。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012020-解析fa应用configjson文件失败",
      children: "10012020 解析FA应用config.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read FA hap verify info exist exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析FA应用config.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析FA应用的HAP或HSP包的config.json文件抛I/O异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，定位具体的I/O或格式化异常原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012021-打包app时抛io异常",
      children: "10012021 打包App时抛I/O异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IO exception when compress app."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包App时抛I/O异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打包App时，应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section03812484215",
        children: "pack.info"
      }), "文件覆盖HAP或HSP包内pack.info文件时抛I/O异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，定位具体的I/O或格式化异常原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012022-校验stage-hsp失败",
      children: "10012022 校验Stage HSP失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify stage hsp info failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HSP时，校验Stage模型HSP包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json5中的atomicService、continueBundleName存在配置错误，或app.json5中的asanEnabled、hwasanEnabled存在配置错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overlay配置出错。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section10012004-%E6%A3%80%E6%9F%A5%E5%8F%82%E6%95%B0asanenabled%E5%A4%B1%E8%B4%A5",
          children: "asanEnabled配置错误码"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section10012005-%E6%A3%80%E6%9F%A5%E5%8F%82%E6%95%B0hwasanenabled%E5%A4%B1%E8%B4%A5",
          children: "hwasanEnabled配置错误码"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section10012006-%E6%A3%80%E6%9F%A5atomicservice%E5%A4%B1%E8%B4%A5",
          children: "atomicService配置错误码"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section10012007-%E6%A3%80%E6%9F%A5continuebundlename%E6%97%A0%E6%95%88",
          children: "continueBundleName配置错误码"
        }), "，更改配置项。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section10012008-%E6%A3%80%E6%9F%A5overlay%E5%A4%B1%E8%B4%A5",
          children: "检查overlay失败"
        }), "，更改配置项。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012023-json文件格式化失败",
      children: "10012023 json文件格式化失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Json special process exist exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "json文件格式化失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "json文件格式化时抛异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，定位具体的I/O或格式化异常原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012024-校验元服务大小失败",
      children: "10012024 校验元服务大小失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check atomicService size failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包App时，元服务包的大小超出了限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["元服务包及依赖的共享库或资源文件大小超出了限制。具体限制请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#app%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "表5 App打包指令参数说明"
      }), "中--atomic-service-entry-size-limit和--atomic-service-non-entry-size-limit参数描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化并减少包的大小，例如删除不必要的资源、精简代码或减少依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012025-多工程打包失败",
      children: "10012025 多工程打包失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compress in app mode for multi project failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多工程打包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multiApp打包文件合法性校验失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要打包的文件正在被其他程序使用，例如压缩软件或文件管理器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据报错信息检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的配置项是否准确。当有多条报错信息时，优先根据第一条报错信息进行排查。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有程序（如压缩软件、文件管理器）占用打包文件，关闭相关进程后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012028-打包--app-list参数失败",
      children: "10012028 打包--app-list参数失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dispose app failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理app失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多工程打包时，--app-list指定的app不包含pack.info文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认--app-list指定的app包含pack.info文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012029-apphaphsp不包含packinfo文件",
      children: "10012029 APP/HAP/HSP不包含pack.info文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pack.info does not find in hap or app."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多工程打包模式下，参与打包的APP/HAP/HSP不包含pack.info文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多工程打包模式下，参与打包的APP/HAP/HSP包中缺失pack.info文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认多工程打包模式下，所有参与打包的APP/HAP/HSP包均包含有效的pack.info文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012034-解析modulename失败",
      children: "10012034 解析moduleName失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Get module name from line string failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "res打包模式下，解析moduleName失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["res打包模式下，--pack-info-path指定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section03812484215",
        children: "pack.info"
      }), "文件缺失moduleName标签或moduleName标签值为空。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认--pack-info-path指定的pack.info文件包含moduleName标签且moduleName标签值不为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012035-appqf模式打包失败",
      children: "10012035 APPQF模式打包失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compress in appqf mode failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APPQF模式打包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APPQF打包模式下，校验--hqf-list参数失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012037-hqf一致性校验失败",
      children: "10012037 HQF一致性校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check hqf has same app fields failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在APPQF打包模式下，打包工具对--hqf-list参数指定的多个HQF包进行一致性校验时失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "APPQF打包模式下，--hqf-list指定的HQF集合中，存在两个及以上HQF的bundleName不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "APPQF打包模式下，--hqf-list指定的HQF集合中，存在两个及以上HQF的versionCode不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "APPQF打包模式下，--hqf-list指定的HQF集合中，存在两个及以上HQF的versionName不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "APPQF打包模式下，--hqf-list指定的HQF集合中，存在两个及以上HQF的patchVersionCode不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "APPQF打包模式下，--hqf-list指定的HQF集合中，存在两个及以上HQF的patchVersionName不相同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--hqf-list指定的所有HQF的bundleName相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--hqf-list指定的所有HQF的versionCode相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--hqf-list指定的所有HQF的versionName相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--hqf-list指定的所有HQF的patchVersionCode相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--hqf-list指定的所有HQF的patchVersionName相同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012038-检查hqf的modulename失败",
      children: "10012038 检查HQF的moduleName失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check hqf module is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在APPQF打包模式下，--hqf-list参数指定的多个HQF包的moduleName校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APPQF打包模式下，--hqf-list指定的HQF集合中，存在两个HQF的moduleName相同且deviceTypes属性集合相交。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认--hqf-list指定的所有HQF的moduleName不相同或deviceTypes属性集合不相交。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012039-版本归一化模式打包失败",
      children: "10012039 版本归一化模式打包失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Version normalize failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本归一化模式打包失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "版本归一化打包模式下，参与打包的HAP或HSP包同时存在module.json和config.json文件，导致冲突。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "版本归一化打包模式下，参与打包的HAP或HSP包既不包含module.json也不包含config.json文件，缺失必要配置文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对pack.info、module.json或config.json文件解析失败，文件格式不合法或内容缺失。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认参与打包的HAP或HSP包中仅包含module.json或者config.json中的一个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012040-校验模块的版本信息失败",
      children: "10012040 校验模块的版本信息失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify module version failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本归一化打包模式下，校验模块的版本信息失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本归一化打包模式下，--version-code参数值小于--input-list参数中某个HAP或HSP包的versionCode值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认--version-code参数值大于等于--input-list参数中HAP或HSP包的versionCode值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012041-计算sha-256值失败",
      children: "10012041 计算SHA-256值失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SHA-256 hash calculation failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP或HSP时，计算SHA-256值失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算HAP或HSP包的SHA-256时抛I/O异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，定位具体的异常原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012042-hap或hsp包重复",
      children: "10012042 HAP或HSP包重复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select haps find duplicated hap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参与打包的HAP或HSP包中存在两个HAP包或两个HSP包文件名相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多工程打包模式下，--app-list、--hap-list和--hsp-list参数值中存在两个HAP包或HSP包文件名相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认--app-list、--hap-list和--hsp-list参数值中的HAP或HSP包文件名不相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012046-解析configjson文件失败",
      children: "10012046 解析config.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and modify config.json failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本归一化模式或通用归一化模式下，解析config.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件不包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件中app标签下不包含version标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件中app/version标签下不包含code标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件中app/version标签下不包含name标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件中module标签下不包含name标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保app标签下包含version标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保app/version标签下包含code标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保app/version标签下包含name标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保module标签下包含name标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012047-解析modulejson文件失败",
      children: "10012047 解析module.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and modify module.json failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "版本归一化模式或通用归一化模式下，解析module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件不包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件中app标签下不包含versionCode标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件中app标签下不包含versionName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件中app标签下不包含bundleName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件中module标签下不包含name标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保app标签下包含versionCode标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保app标签下包含versionName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保app标签下包含bundleName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保module标签下包含name标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012050-检查插件宿主失败",
      children: "10012050 检查插件宿主失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check is plugin host failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HSP时，检查插件宿主失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--json-path指定的module.json文件中不包含module标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查--json-path指定的module.json文件，确保包含module标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012052-检查--pkg-context-path参数失败",
      children: "10012052 检查--pkg-context-path参数失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check pkg context failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP或HSP时，检查--pkg-context-path参数失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--pkg-context-path参数值为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--pkg-context-path指定的不是pkgContextInfo.json文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--pkg-context-path参数值不为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--pkg-context-path指定的是pkgContextInfo.json文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012053-检查插件属性失败",
      children: "10012053 检查插件属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check app plugin failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HSP时，检查插件属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--json-path指定的module.json文件不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--json-path指定的module.json文件不包含module标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--pkg-context-path参数失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--json-path指定的module.json文件包含非embeddedUI类型的extensionAbilities。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["--json-path指定的module.json文件中bundleType是appPlugin时，module.json文件不包含", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionkernelsupport_plugin",
          children: "ohos.permission.kernel.SUPPORT_PLUGIN"
        }), "权限。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--json-path指定的module.json文件存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--json-path指定的module.json文件包含module标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--json-path指定的module.json文件不包含非embeddedUI类型的extensionAbilities。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认--json-path指定的module.json文件中bundleType是appPlugin时，module.json文件包含ohos.permission.kernel.SUPPORT_PLUGIN权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10012054-校验har去重属性失败",
      children: "10012054 校验HAR去重属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check deduplicateHar field failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打包HSP/HAP时，校验", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section03812484215",
        children: "deduplicateHar"
      }), "属性失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HSP/HAP模块module.json文件中minAPIVersion小于21，且deduplicateHar的值为true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HSP/HAP时，如果deduplicateHar的属性值为true时，则要求minAPIVersion大于等于21。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013001-解析modulejson或configjson文件异常",
      children: "10013001 解析module.json或config.json文件异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse json object exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析module.json或config.json文件异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "json文本语法错误，例如括号未闭合、引号使用不当、非法转义字符等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认json文本语法正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013002-解析modulejson或configjson文件失败",
      children: "10013002 解析module.json或config.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse json profile failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析json配置失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json或config.json文件不包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json或config.json文件不包含module标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析module.json或config.json文件时抛异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json或config.json文件，确保包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json或config.json文件，确保包含module标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json或config.json文件，确保文件格式符合json格式规则。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013003-检查atomicservice属性无效",
      children: "10013003 检查atomicService属性无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check module atomicService invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查atomicService属性无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP或HSP的bundleType不是atomicService，但module.json中配置了atomicService标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP或HSP的bundleType不是atomicService，更改module.json中配置的atomicService标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013004-解析modulejson文件失败",
      children: "10013004 解析module.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse module.json for the Stage module."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件内不包含versionCode标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件内不包含versionName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json文件内module标签内不包含name标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保包含versionCode标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保包含versionName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json文件，确保module标签内包含name标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013005-检查模块bundletype失败",
      children: "10013005 检查模块bundleType失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse module.json and bundleType."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查模块bundleType失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不符合配置要求，例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["模块的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "配置文件中bundleType为app，但", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的installationFree属性值为true。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块的app.json5配置文件中bundleType为atomicService，但module.json5中的installationFree属性值为false。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块的app.json5配置文件中bundleType为shared，但module.json5中的type属性值不是shared。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保app.json5配置文件中bundleType为app时，module.json5中的installationFree属性值为false。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保app.json5配置文件中bundleType为atomicService时，module.json5中的installationFree属性值为true。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保app.json5配置文件中bundleType为shared时，module.json5中的type属性值也是shared。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当有多条报错信息时，优先根据第一条报错信息进行排查。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013006-检查entry模块中的ability失败",
      children: "10013006 检查entry模块中的ability失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "check entry module at least one ability failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entry类型包中没有ability。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entry类型包中不存在ability，该错误可能是由于module.json5未配置abilities或者abilities配置为空引起。"
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
      }), "，确保Entry类型包abilities正确配置了ability。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013007-检查installationfree错误",
      children: "10013007 检查installationFree错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check module atomicService installationFree invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HAP或HSP时，检查atomicService和installationFree配置出错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "app.json5中的bundleType配置了无效值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当bundleType为shared时，module.json5中installationFree未设置为false。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当installationFree为true时，bundleType未设置为atomicService。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "，确保bundleType设置为app，atomicService，shared之一。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果bundleType为shared，确保", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的installationFree设置为false。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果installationFree为true，确保bundleType设置为atomicService。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013008-获取bundlename属性失败",
      children: "10013008 获取bundleName属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Get the bundleName from json file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取bundleName属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json文件内app标签内不包含bundleName属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查module.json文件，确保app标签内包含bundleName属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013009-解析proxydata属性失败",
      children: "10013009 解析proxyData属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse module.json and proxyData object."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析proxyData属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json文件中module标签下的proxyData标签中某个元素不包含uri标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查module.json文件，确保module标签下的proxyData标签各元素包含uri标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013010-检查bundletype一致性失败",
      children: "10013010 检查bundleType一致性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to check the consistency of bundleType."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查bundleType一致性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "各HAP模块的module.json文件中bundleType配置不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "各HSP模块的module.json文件中bundleType配置不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查各HAP模块的module.json文件，确保bundleType配置一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查各HSP模块的module.json文件，确保bundleType配置一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013011-解析patchjson中模块名失败",
      children: "10013011 解析patch.json中模块名失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse patch module name from patch.json."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析patch.json中模块名失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "patch.json文件内module标签内不包含name属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查patch.json文件，确保module标签内包含name属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013012-获取fa模型模块的configjson文件失败",
      children: "10013012 获取FA模型模块的config.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse FA hap verify info from config.json."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FA模型模块的config.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包FA模型app时，有HAP/HSP不包含config.json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包FA模型app时，确保所有HAP/HSP包含config.json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013013-解析fa模型模块的configjson文件失败",
      children: "10013013 解析FA模型模块的config.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse config.json for the FA module."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析FA模型模块的config.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件的app标签内不包含version标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件的app标签内version标签不包含code标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件的app标签内version标签不包含name标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件的app标签内不包含apiVersion标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件的module标签内不包含distro标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件的module标签内distro标签不包含moduleName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "config.json文件的module标签内不包含package标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保app标签内包含version标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保app标签内version标签包含code标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保app标签内version标签包含name标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保app标签内包含apiVersion标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保module标签内包含distro标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保module标签内distro标签包含moduleName标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查config.json文件，确保module标签内包含package标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013014-合并packinfo文件失败",
      children: "10013014 合并pack.info文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Merge two pack.info into one pack.info file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "合并pack.info文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "校验pack.info文件失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "合并pack.info文件抛异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据日志中“Error Message:”确认异常信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013015-校验packinfo文件失败",
      children: "10013015 校验pack.info文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify pack.info file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验pack.info文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件其中一个不包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件其中一个不包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "校验pack.info文件中app标签失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确认均包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确认均包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013016-合并packinfo文件时校验失败",
      children: "10013016 合并pack.info文件时校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify app in pack.info failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "合并pack.info文件时校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件的bundleName不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件的bundleType不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件其中一个app标签内不包含version标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件app标签内code标签值不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确保bundleName一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确保bundleType一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确保app标签内包含version标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确保app标签内code标签值一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013017-校验packinfo文件的bundletype失败",
      children: "10013017 校验pack.info文件的bundleType失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify bundleType in pack.info file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验pack.info文件的bundleType失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参与合并的两个pack.info文件的bundleType不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查参与合并的两个pack.info文件，确保bundleType一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013018-解析packinfo文件forms标签失败",
      children: "10013018 解析pack.info文件forms标签失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse forms name in pack.info file failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析pack.info文件forms标签对应的模块名失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件不包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件中summary标签内不包含modules标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件中summary标签内modules标签中某个元素不包含distro标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件中summary/modules/distro标签不包含moduleName标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保summary标签内包含modules标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保summary标签内modules标签中各元素均包含distro标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保summary/modules/distro标签包含moduleName标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013019-合并packinfo文件失败",
      children: "10013019 合并pack.info文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to merge pack.info objects."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "multiApp打包模式下，合并HAP或HSP包的pack.info文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件其中一个不包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件其中一个summary标签内不包含modules标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与合并的两个pack.info文件其中一个不包含packages标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确保均包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确保summary标签内包含modules标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与合并的两个pack.info文件，确保均包含packages标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013020-合并packinfo文件失败",
      children: "10013020 合并pack.info文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to merge two pack.info files into one pack.info file by packagePair."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "multiApp打包模式下，合并app包的pack.info文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "校验pack.info文件失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "合并pack.info文件抛异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看报错日志中第一条错误码，确认具体错误信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据日志中“Error Message:”确认异常信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10013022-解析packinfo文件的forms属性失败",
      children: "10013022 解析pack.info文件的forms属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to parse pack.info forms."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析pack.info文件的forms属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件中forms标签内某元素不包含defaultDimension标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件中forms标签内某元素defaultDimension标签值包含多个*。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件中forms标签内存在一个或多个元素不包含supportDimensions标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保forms标签内各元素均包含defaultDimension标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保forms标签内各元素defaultDimension标签值均只包含1个*。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保forms标签各元素均包含supportDimensions标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014001-未找到可用文件",
      children: "10014001 未找到可用文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File available not found exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用打包工具打包时，需要打包的文件不可使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定的文件路径错误或文件不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件正在被其他程序使用，例如压缩软件或文件管理器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前用户没有访问该文件的权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认提供的文件路径正确，并检查该文件是否存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有程序（如压缩软件、文件管理器）占用文件，关闭相关进程后重试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查并调整文件的访问权限，例如当前用户可以读取、修改、删除文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014002-关闭zip归档输出流异常",
      children: "10014002 关闭.zip归档输出流异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Close zip output stream exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭.zip归档输出流异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘I/O失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息确认具体错误信息，下面列举可能原因对应的处理措施。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保磁盘正常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保磁盘空间剩余配额充足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014003-关闭io输入流异常",
      children: "10014003 关闭I/O输入流异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IO exception when closing stream."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭I/O输入流异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "底层文件描述符异常失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据日志中“Error Message:”确认异常信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查系统日志，确保文件系统和磁盘正常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014004-获取文件内容失败",
      children: "10014004 获取文件内容失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Get file content failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件内容失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件I/O操作抛异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”，确认异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014005-文件不存在",
      children: "10014005 文件不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse file not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，确保文件路径正确且文件存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014006-获取文件大小失败",
      children: "10014006 获取文件大小失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Get file size failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件大小失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "路径指向的不是文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息确认文件路径，确保文件存在且是文件类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014007-文件io异常",
      children: "10014007 文件I/O异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File IO exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件I/O异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "操作文件权限不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息确认文件路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保文件存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前用户拥有操作文件权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保磁盘空间剩余配额充足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014008-压缩文件异常",
      children: "10014008 压缩文件异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compress file exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "压缩文件异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包压缩文件时抛异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”，确认异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查系统日志，确保文件系统和磁盘正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10014009-删除文件失败",
      children: "10014009 删除文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File delete failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件被其它进程占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息确认文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保文件当前不被其它进程占用，手动删除文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10015001-文件io异常",
      children: "10015001 文件I/O异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IO exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件I/O异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "操作文件权限不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统内部错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息确认文件路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保文件存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前用户拥有操作文件权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保磁盘空间剩余配额充足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看相关错误信息确认具体异常原因。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10015002-空指针异常",
      children: "10015002 空指针异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Null pointer exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空指针异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "程序类对象未初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”，确认异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016001-校验应用属性失败",
      children: "10016001 校验应用属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App fields is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包App时，校验应用属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有两个HAP的minCompatibleVersionCode属性值不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有两个HAP的targetAPIVersion属性值不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有两个HAP的minAPIVersion属性值不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有两个HAP的debug属性值不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAP的minCompatibleVersionCode/targetAPIVersion/minAPIVersion属性值小于某HSP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAP的debug属性值为false时，存在HSP的debug属性值为true。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，确认错误信息及存在问题的HAP或HSP名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保参与打包的HAP的minCompatibleVersionCode属性值相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保参与打包的HAP的targetAPIVersion属性值相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保参与打包的HAP的minAPIVersion属性值相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保参与打包的HAP的debug属性值相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保HAP的minCompatibleVersionCode/targetAPIVersion/minAPIVersion属性值大于等于所有HSP的对应属性值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保HAP的debug属性值为false时，所有HSP的debug属性值为false。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016002-hap或hsp属性不同",
      children: "10016002 HAP或HSP属性不同"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some app variable is different."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包App时，HAP或HSP属性不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前参与打包的HAP或HSP中，存在模块的bundleName与其他模块不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前参与打包的HAP或HSP中，存在模块的bundleType与其他模块不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前参与打包的HAP或HSP中，存在模块的versionCode与其他模块不一致。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前参与打包的HAP或HSP中，存在模块的apiReleaseType（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
          children: "app.json5"
        }), "配置文件中的属性）与其他模块不一致。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前参与打包的HAP或HSP中，存在模块的targetBundleName（app.json5配置文件中的属性）与其他模块不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前参与打包的HAP或HSP中，存在模块的targetPriority（app.json5配置文件中的属性）与其他模块不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前参与打包的HAP中，存在模块的multiAppMode（app.json5配置文件中的属性）与其他模块不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前参与打包的HAP或HSP的bundleName一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前参与打包的HAP或HSP的bundleType一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前参与打包的HAP或HSP的versionCode一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前参与打包的HAP或HSP的apiReleaseType一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前参与打包的HAP或HSP的targetBundleName一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前参与打包的HAP或HSP的targetPriority一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保当前参与打包的HAP的multiAppMode一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016003-分发策略相交校验失败",
      children: "10016003 分发策略相交校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check two distroFilter policy disjoint invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-verification-rule",
        children: "HAP唯一性校验"
      }), "需要判断分发策略是否相交，由于分发策略配置错误，导致无法判断分发策略是否相交。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分发策略policy、value标签为空或为无效值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查分发策略相关配置，确保policy的值为include或exclude，value取值参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#distributionfilter%E6%A0%87%E7%AD%BE",
        children: "distributionFilter标签"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016004-校验模块名失败",
      children: "10016004 校验模块名失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check module name is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包app时校验模块名失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAP或HSP的module.json文件module标签不包含name标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在参与打包的HAP或HSP中，存在两个或以上module.json文件，其中module/name标签值相同，并且module/deviceType属性值有交集，同时module/metadata/resource/distributionFilter属性值也有交集。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查HAP或HSP的module.json文件，确保module标签包含name标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与打包的HAP或HSP的module.json文件，确保module/name标签值不相同或者module/deviceType属性值集合不相交或者module/metadata/resource/distributionFilter属性值集合不相交。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016005-校验应用包名失败",
      children: "10016005 校验应用包名失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check packageName invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验应用包名失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在参与打包的HAP或HSP中，存在两个或以上module.json文件，其中module/package标签值相同，并且module/deviceType属性值有交集，同时module/metadata/resource/distributionFilter属性值也有交集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，确认存在问题的HAP或HSP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查参与打包的HAP或HSP的module.json文件，确保module/package标签值不相同或者module/deviceType属性值集合不相交或者module/metadata/resource/distributionFilter属性值集合不相交。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016006-检查hap包无效",
      children: "10016006 检查HAP包无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify hap info is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建App包时，校验用于打包的HAP或HSP失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个HAP或HSP包配置之间存在冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据报错信息检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "中的配置项是否准确。当有多条报错信息时，优先根据第一条报错信息进行排查。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016007-检查entry模块无效",
      children: "10016007 检查entry模块无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check entry module invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建App包时，当工程中存在多个Entry类型HAP包时，检查配置信息失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不符合HAP唯一性校验规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-verification-rule",
        children: "HAP唯一性校验"
      }), "，调整工程中的Entry类型HAP配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016008-检查dependency属性无效",
      children: "10016008 检查dependency属性无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check dependency is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查dependency属性无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参与打包的HAP或HSP的module.json文件中module/installationFree属性值不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查参与打包的HAP或HSP的module.json文件，确保module/installationFree属性值一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016009-检查依赖错误",
      children: "10016009 检查依赖错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check dependency list is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建App包时，模块依赖关系检查失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块间存在循环依赖，例如：模块library1的module.json5中dependencies配置了library2，同时模块library2中的dependencies配置了library1，则这两个模块之间构成循环依赖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json5配置中依赖的模块对应的module.json5中的type为entry或feature。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5"
        }), "中的dependencies，删除循环依赖，确保App中不存在循环依赖。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查module.json5中的dependencies的配置，删除对entry或feature类型模块的依赖。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016010-检查元服务无效",
      children: "10016010 检查元服务无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check atomicservice is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建App包时，检查元服务无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5中preloads配置的moduleName错误。"
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
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#atomicservice%E6%A0%87%E7%AD%BE",
        children: "preloads属性"
      }), "下的moduleName，不能配置为自身模块module.json5中的name，且moduleName对应的模块必须存在。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016011-检查元服务预加载无效",
      children: "10016011 检查元服务预加载无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Atomicservice preloads is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建bundleType为atomicService类型的App包时，检查元服务包预加载的模块无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元服务包module.json5中的preloads配置了重复的moduleName。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元服务包preloads配置的moduleName，和其他元服务包中module.json5中的name不匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元服务包preloads配置的moduleName，和自身module.json5中的name相同。"
      }), "\n"]
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
      }), "中元服务", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#atomicservice%E6%A0%87%E7%AD%BE",
        children: "preloads属性"
      }), "，确保没有配置重复的模块，配置所有的模块都存在且不能配置自身的模块名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016012-目标模块不存在",
      children: "10016012 目标模块不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TargetModuleName is not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建App时，模块中配置了目标模块，但未找到该模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5中配置了targetModuleName，但和其他模块对应module.json5中的name均不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查targetModuleName配置项，确保其正确配置（详细请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
        children: "module.json5配置文件标签"
      }), "及targetModuleName属性），必要时创建目标模块。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016013-校验compilesdktype属性不一致",
      children: "10016013 校验compileSdkType属性不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CompileSdkType is different."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验compileSdkType属性不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参与打包的HAP或HSP的module.json文件中app/compileSdkType标签值不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查参与打包的HAP或HSP的module.json文件，确保app/compileSdkType标签值一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016014-代理数据不唯一",
      children: "10016014 代理数据不唯一"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proxy data uri is not unique."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据代理uri不唯一，存在重复项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json5中的proxyData配置的uri存在重复。"
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
      }), "，删除proxyData中重复的uri，确保每个uri都是唯一的（详细请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#proxydata%E6%A0%87%E7%AD%BE",
        children: "proxyData标签"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016015-continuetype配置无效",
      children: "10016015 ContinueType配置无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check continueType is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建App时，检查continueType配置错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json5不同的ability存在重复的continueType配置项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同的module.json5中同时存在重复的deviceType配置项和continueType配置项。"
      }), "\n"]
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
      }), "，删除continueType或deviceType重复的配置项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016016-文件大小检查错误",
      children: "10016016 文件大小检查错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check file size failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建元服务类型App时，单个包大小超过限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单个包大小超过限制。具体限制请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#app%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "表5 App打包指令参数说明"
      }), "中--atomic-service-entry-size-limit和--atomic-service-non-entry-size-limit参数描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化并减少对应单个包文件的大小，例如删除不必要的资源、精简代码或压缩文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016017-hapverifyinfos集合为空",
      children: "10016017 HapVerifyInfos集合为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The provided list of HapVerifyInfos is empty."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HapVerifyInfos集合为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包APP时，--hap-path和--hsp-path参数值均为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包APP时，确保--hap-path和--hsp-path参数值不能均为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016018-元服务模块大小检查错误",
      children: "10016018 元服务模块大小检查错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check the atomicService module size failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建元服务类型App时，单个包和其依赖的共享库大小超过限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单个包和其依赖的共享库总大小超过限制。具体限制请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#app%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
        children: "表5 App打包指令参数说明"
      }), "中--atomic-service-entry-size-limit和--atomic-service-non-entry-size-limit参数描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化并减少相应包的大小，例如删除不必要的资源、精简代码或减少依赖项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10016019-检查分发策略无效",
      children: "10016019 检查分发策略无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check the entry module distributionFilter is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查Entry类型模块分发策略错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entry类型模块分发策略配置存在错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查Entry模块分发策略是否正确配置，例如policy的值应为exclude或include，详细请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#distributionfilter%E6%A0%87%E7%AD%BE",
        children: "distributionFilter标签"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10017001-包名归一化模式校验hsp包的bundlename和versioncode属性失败",
      children: "10017001 包名归一化模式校验HSP包的bundleName和versionCode属性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Normalize HSP bundleName and versionCode failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包名归一化模式校验HSP包的bundleName和versionCode属性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP包的module.json文件不包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP包的pack.info文件不包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP包的pack.info文件不包含summary/app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP包的pack.info文件不包含summary/version标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查HSP包的module.json文件，确保包含app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查HSP包的pack.info文件，确保包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查HSP包的pack.info文件，确保包含summary/app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查HSP包的pack.info文件，确保包含summary/version标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10017002-更新modulejson文件失败",
      children: "10017002 更新module.json文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update module.json failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新module.json文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "module.json文件不包含app标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保module.json文件包含app标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10017003-更新packinfo文件失败",
      children: "10017003 更新pack.info文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update pack.info failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新pack.info文件失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件不包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件不包含summary/app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pack.info文件不包含summary/version标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保包含summary标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保包含summary/app标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查pack.info文件，确保包含summary/version标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10018001-fastapp模式打包校验失败",
      children: "10018001 fastApp模式打包校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in fast app mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fastApp模式打包校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包参数校验失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看报错日志中第一条错误码，确认具体错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10018002-检查bundletype一致性失败",
      children: "10018002 检查bundleType一致性失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check bundleType consistency failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fastApp模式打包检查bundleType一致性失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与打包的HAP包的bundleType属性值不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参与打包的HSP包的bundleType属性值不一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与打包的HAP包，确保bundleType属性值一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查参与打包的HSP包，确保bundleType属性值一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10018003-检查packinfo文件无效",
      children: "10018003 检查pack.info文件无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pack.info is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fastApp模式打包检查pack.info文件无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--pack-info-path参数指向的pack.info文件的packages标签中有两个元素的name标签值相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--pack-info-path参数指向的pack.info文件不包含packages标签或packages标签内容为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--hap-path参数指向的HAP包的pack.info文件的packages标签中元素个数大于1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--pack-info-path参数指向的pack.info文件的packages标签不包含--hap-path参数指向的HAP包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--hap-path参数指向的HAP包中存在两个或以上HAP包的pack.info文件的packages/name标签值相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--hsp-path参数指向的HSP包的pack.info文件的packages标签中元素个数大于1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--pack-info-path参数指向的pack.info文件的packages标签不包含--hsp-path参数指向的HSP包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "--hsp-path参数指向的HSP包中存在两个或以上HSP包的pack.info文件的packages/name标签值相同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”信息，确认存在问题文件的路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--pack-info-path参数指向的pack.info文件。确保packages标签中各元素的name标签值均不相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--pack-info-path参数指向的pack.info文件，确保包含packages标签并且packages标签内容不为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--hap-path参数指向的HAP包的pack.info文件，确保packages标签中仅存在1个元素内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--pack-info-path参数指向的pack.info文件，确保packages标签包含--hap-path参数指向的HAP包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--hap-path参数指向的HAP包中每个pack.info文件，确保packages/name的标签值唯一。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--hsp-path参数指向的HSP包的pack.info文件，确保packages标签中仅存在1个元素内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--pack-info-path参数指向的pack.info文件，确保packages标签包含--hsp-path参数指向的HSP包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查--hsp-path参数指向的HSP包中每个pack.info文件，确保packages/name的标签值唯一。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10018004-向压缩包中添加文件或目录条目失败",
      children: "10018004 向压缩包中添加文件或目录条目失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add archive entry failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向压缩包中添加文件或目录条目失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待打包文件夹为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅作告警提示，无需处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据“Error Message:”信息获取待打包空文件目录，确认该空文件符合打包预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10018005-打包libs目录异常",
      children: "10018005 打包libs目录异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Packing with multiple threads exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包libs目录异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包libs目录异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”，确认异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10018006-fastapp模式重打包hsp异常",
      children: "10018006 fastApp模式重打包HSP异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repack hsp exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fastApp模式重打包HSP异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重打包HSP异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”，确认异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10019001-增量打包hap异常",
      children: "10019001 增量打包HAP异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Incremental pack hap exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增量打包HAP异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增量打包HAP时抛I/O异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”，确认异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10019002-增量打包hsp异常",
      children: "10019002 增量打包HSP异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Incremental pack hsp exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增量打包HSP异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增量打包HSP时抛I/O异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据日志中“Error Message:”，确认异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10011021-通用归一化命令失败",
      children: "10011021 通用归一化命令失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse and check args invalid in generalNormalize mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用归一化命令失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的参数类型错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入参数范围错误。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["传入HAP或HSP包不完整，缺少json文件（json文件配置请参考Stage模型", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
          children: "module.json5"
        }), "/FA模型", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
          children: "config.json"
        }), "）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查并传入正确的命令参数和有效的包文件。"
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
240845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
3406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
693558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
788193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438567-7632b5c4b60d7d97e97b2d51875479e0.png");

},
215402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
335981(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
24182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
727050(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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