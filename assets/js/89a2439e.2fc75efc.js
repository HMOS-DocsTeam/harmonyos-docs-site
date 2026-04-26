"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["418151"], {
899238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_richeditor_ts_basic_components_richeditor_md_89a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-text-and-input-ts-basic-components-richeditor-ts-basic-components-richeditor-md-89a.json
var site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_richeditor_ts_basic_components_richeditor_md_89a_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor","title":"RichEditor","description":"支持图文混排和文本交互式编辑的组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor.md","sourceDirName":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor","slug":"/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"RichEditor","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-richeditor"},"sidebar":"ref","previous":{"title":"TextInput","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput"},"next":{"title":"Search","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor.md


const frontMatter = {
	title: 'RichEditor',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-richeditor'
};
const contentTitle = 'RichEditor';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "RichEditor",
  "id": "richeditor-1",
  "level": 3
}, {
  "value": "RichEditor12+",
  "id": "richeditor12",
  "level": 3
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "customKeyboard",
  "id": "customkeyboard",
  "level": 3
}, {
  "value": "bindSelectionMenu",
  "id": "bindselectionmenu",
  "level": 3
}, {
  "value": "copyOptions",
  "id": "copyoptions",
  "level": 3
}, {
  "value": "enableDataDetector11+",
  "id": "enabledatadetector11",
  "level": 3
}, {
  "value": "dataDetectorConfig11+",
  "id": "datadetectorconfig11",
  "level": 3
}, {
  "value": "enableSelectedDataDetector22+",
  "id": "enableselecteddatadetector22",
  "level": 3
}, {
  "value": "enablePreviewText12+",
  "id": "enablepreviewtext12",
  "level": 3
}, {
  "value": "placeholder12+",
  "id": "placeholder12",
  "level": 3
}, {
  "value": "caretColor12+",
  "id": "caretcolor12",
  "level": 3
}, {
  "value": "selectedBackgroundColor12+",
  "id": "selectedbackgroundcolor12",
  "level": 3
}, {
  "value": "editMenuOptions12+",
  "id": "editmenuoptions12",
  "level": 3
}, {
  "value": "enterKeyType12+",
  "id": "enterkeytype12",
  "level": 3
}, {
  "value": "enableKeyboardOnFocus12+",
  "id": "enablekeyboardonfocus12",
  "level": 3
}, {
  "value": "barState13+",
  "id": "barstate13",
  "level": 3
}, {
  "value": "maxLength18+",
  "id": "maxlength18",
  "level": 3
}, {
  "value": "maxLines18+",
  "id": "maxlines18",
  "level": 3
}, {
  "value": "enableHapticFeedback13+",
  "id": "enablehapticfeedback13",
  "level": 3
}, {
  "value": "keyboardAppearance15+",
  "id": "keyboardappearance15",
  "level": 3
}, {
  "value": "stopBackPress18+",
  "id": "stopbackpress18",
  "level": 3
}, {
  "value": "undoStyle20+",
  "id": "undostyle20",
  "level": 3
}, {
  "value": "enableAutoSpacing20+",
  "id": "enableautospacing20",
  "level": 3
}, {
  "value": "scrollBarColor21+",
  "id": "scrollbarcolor21",
  "level": 3
}, {
  "value": "includeFontPadding23+",
  "id": "includefontpadding23",
  "level": 3
}, {
  "value": "fallbackLineSpacing23+",
  "id": "fallbacklinespacing23",
  "level": 3
}, {
  "value": "compressLeadingPunctuation23+",
  "id": "compressleadingpunctuation23",
  "level": 3
}, {
  "value": "selectedDragPreviewStyle23+",
  "id": "selecteddragpreviewstyle23",
  "level": 3
}, {
  "value": "singleLine23+",
  "id": "singleline23",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onReady",
  "id": "onready",
  "level": 3
}, {
  "value": "onSelect",
  "id": "onselect",
  "level": 3
}, {
  "value": "aboutToIMEInput",
  "id": "abouttoimeinput",
  "level": 3
}, {
  "value": "onDidIMEInput12+",
  "id": "ondidimeinput12",
  "level": 3
}, {
  "value": "onIMEInputComplete",
  "id": "onimeinputcomplete",
  "level": 3
}, {
  "value": "aboutToDelete",
  "id": "abouttodelete",
  "level": 3
}, {
  "value": "onDeleteComplete",
  "id": "ondeletecomplete",
  "level": 3
}, {
  "value": "onPaste11+",
  "id": "onpaste11",
  "level": 3
}, {
  "value": "onSelectionChange12+",
  "id": "onselectionchange12",
  "level": 3
}, {
  "value": "onEditingChange12+",
  "id": "oneditingchange12",
  "level": 3
}, {
  "value": "onSubmit12+",
  "id": "onsubmit12",
  "level": 3
}, {
  "value": "onWillChange12+",
  "id": "onwillchange12",
  "level": 3
}, {
  "value": "onDidChange12+",
  "id": "ondidchange12",
  "level": 3
}, {
  "value": "onCut12+",
  "id": "oncut12",
  "level": 3
}, {
  "value": "onCopy12+",
  "id": "oncopy12",
  "level": 3
}, {
  "value": "onWillAttachIME22+",
  "id": "onwillattachime22",
  "level": 3
}, {
  "value": "RichEditorInsertValue",
  "id": "richeditorinsertvalue",
  "level": 2
}, {
  "value": "RichEditorDeleteValue",
  "id": "richeditordeletevalue",
  "level": 2
}, {
  "value": "RichEditorDeleteDirection",
  "id": "richeditordeletedirection",
  "level": 2
}, {
  "value": "RichEditorTextSpanResult",
  "id": "richeditortextspanresult",
  "level": 2
}, {
  "value": "RichEditorSpanPosition",
  "id": "richeditorspanposition",
  "level": 2
}, {
  "value": "RichEditorSpanType",
  "id": "richeditorspantype",
  "level": 2
}, {
  "value": "RichEditorResponseType11+",
  "id": "richeditorresponsetype11",
  "level": 2
}, {
  "value": "UndoStyle20+",
  "id": "undostyle20-1",
  "level": 2
}, {
  "value": "RichEditorTextStyleResult",
  "id": "richeditortextstyleresult",
  "level": 2
}, {
  "value": "RichEditorSymbolSpanStyleResult11+",
  "id": "richeditorsymbolspanstyleresult11",
  "level": 2
}, {
  "value": "RichEditorImageSpanResult",
  "id": "richeditorimagespanresult",
  "level": 2
}, {
  "value": "RichEditorImageSpanStyleResult",
  "id": "richeditorimagespanstyleresult",
  "level": 2
}, {
  "value": "RichEditorLayoutStyle11+",
  "id": "richeditorlayoutstyle11",
  "level": 2
}, {
  "value": "RichEditorOptions",
  "id": "richeditoroptions",
  "level": 2
}, {
  "value": "RichEditorStyledStringOptions12+",
  "id": "richeditorstyledstringoptions12",
  "level": 2
}, {
  "value": "RichEditorChangeValue12+",
  "id": "richeditorchangevalue12",
  "level": 2
}, {
  "value": "RichEditorBaseController12+",
  "id": "richeditorbasecontroller12",
  "level": 2
}, {
  "value": "getCaretOffset10+",
  "id": "getcaretoffset10",
  "level": 3
}, {
  "value": "setCaretOffset10+",
  "id": "setcaretoffset10",
  "level": 3
}, {
  "value": "closeSelectionMenu10+",
  "id": "closeselectionmenu10",
  "level": 3
}, {
  "value": "getTypingStyle11+",
  "id": "gettypingstyle11",
  "level": 3
}, {
  "value": "setTypingStyle11+",
  "id": "settypingstyle11",
  "level": 3
}, {
  "value": "setTypingParagraphStyle20+",
  "id": "settypingparagraphstyle20",
  "level": 3
}, {
  "value": "setSelection11+",
  "id": "setselection11",
  "level": 3
}, {
  "value": "isEditing12+",
  "id": "isediting12",
  "level": 3
}, {
  "value": "stopEditing12+",
  "id": "stopediting12",
  "level": 3
}, {
  "value": "getLayoutManager12+",
  "id": "getlayoutmanager12",
  "level": 3
}, {
  "value": "getPreviewText12+",
  "id": "getpreviewtext12",
  "level": 3
}, {
  "value": "getCaretRect18+",
  "id": "getcaretrect18",
  "level": 3
}, {
  "value": "deleteBackward23+",
  "id": "deletebackward23",
  "level": 3
}, {
  "value": "RichEditorController",
  "id": "richeditorcontroller",
  "level": 2
}, {
  "value": "导入对象",
  "id": "导入对象",
  "level": 3
}, {
  "value": "addTextSpan",
  "id": "addtextspan",
  "level": 3
}, {
  "value": "addImageSpan",
  "id": "addimagespan",
  "level": 3
}, {
  "value": "addBuilderSpan11+",
  "id": "addbuilderspan11",
  "level": 3
}, {
  "value": "addSymbolSpan11+",
  "id": "addsymbolspan11",
  "level": 3
}, {
  "value": "updateSpanStyle",
  "id": "updatespanstyle",
  "level": 3
}, {
  "value": "updateParagraphStyle11+",
  "id": "updateparagraphstyle11",
  "level": 3
}, {
  "value": "getSpans",
  "id": "getspans",
  "level": 3
}, {
  "value": "deleteSpans",
  "id": "deletespans",
  "level": 3
}, {
  "value": "getParagraphs11+",
  "id": "getparagraphs11",
  "level": 3
}, {
  "value": "getSelection11+",
  "id": "getselection11",
  "level": 3
}, {
  "value": "fromStyledString12+",
  "id": "fromstyledstring12",
  "level": 3
}, {
  "value": "toStyledString12+",
  "id": "tostyledstring12",
  "level": 3
}, {
  "value": "RichEditorStyledStringController12+",
  "id": "richeditorstyledstringcontroller12",
  "level": 2
}, {
  "value": "导入对象",
  "id": "导入对象-1",
  "level": 3
}, {
  "value": "getSelection12+",
  "id": "getselection12",
  "level": 3
}, {
  "value": "setStyledString12+",
  "id": "setstyledstring12",
  "level": 3
}, {
  "value": "getStyledString12+",
  "id": "getstyledstring12",
  "level": 3
}, {
  "value": "onContentChanged12+",
  "id": "oncontentchanged12",
  "level": 3
}, {
  "value": "RichEditorSelection",
  "id": "richeditorselection",
  "level": 2
}, {
  "value": "RichEditorRange",
  "id": "richeditorrange",
  "level": 2
}, {
  "value": "RichEditorSpanStyleOptions",
  "id": "richeditorspanstyleoptions",
  "level": 2
}, {
  "value": "RichEditorUpdateTextSpanStyleOptions",
  "id": "richeditorupdatetextspanstyleoptions",
  "level": 2
}, {
  "value": "RichEditorUpdateImageSpanStyleOptions",
  "id": "richeditorupdateimagespanstyleoptions",
  "level": 2
}, {
  "value": "RichEditorUpdateSymbolSpanStyleOptions11+",
  "id": "richeditorupdatesymbolspanstyleoptions11",
  "level": 2
}, {
  "value": "RichEditorParagraphStyleOptions11+",
  "id": "richeditorparagraphstyleoptions11",
  "level": 2
}, {
  "value": "RichEditorParagraphStyle11+",
  "id": "richeditorparagraphstyle11",
  "level": 2
}, {
  "value": "LeadingMarginPlaceholder11+",
  "id": "leadingmarginplaceholder11",
  "level": 2
}, {
  "value": "RichEditorParagraphResult11+",
  "id": "richeditorparagraphresult11",
  "level": 2
}, {
  "value": "RichEditorTextSpanOptions",
  "id": "richeditortextspanoptions",
  "level": 2
}, {
  "value": "RichEditorTextStyle",
  "id": "richeditortextstyle",
  "level": 2
}, {
  "value": "PlaceholderStyle12+",
  "id": "placeholderstyle12",
  "level": 2
}, {
  "value": "RichEditorImageSpanOptions",
  "id": "richeditorimagespanoptions",
  "level": 2
}, {
  "value": "RichEditorImageSpanStyle",
  "id": "richeditorimagespanstyle",
  "level": 2
}, {
  "value": "RichEditorSymbolSpanOptions11+",
  "id": "richeditorsymbolspanoptions11",
  "level": 2
}, {
  "value": "RichEditorSymbolSpanStyle11+",
  "id": "richeditorsymbolspanstyle11",
  "level": 2
}, {
  "value": "RichEditorBuilderSpanOptions11+",
  "id": "richeditorbuilderspanoptions11",
  "level": 2
}, {
  "value": "RichEditorSpan12+",
  "id": "richeditorspan12",
  "level": 2
}, {
  "value": "SelectionMenuOptions",
  "id": "selectionmenuoptions",
  "level": 2
}, {
  "value": "PreviewMenuOptions18+",
  "id": "previewmenuoptions18",
  "level": 2
}, {
  "value": "PasteEvent11+",
  "id": "pasteevent11",
  "level": 2
}, {
  "value": "CutEvent12+",
  "id": "cutevent12",
  "level": 2
}, {
  "value": "CopyEvent12+",
  "id": "copyevent12",
  "level": 2
}, {
  "value": "RichEditorGesture11+",
  "id": "richeditorgesture11",
  "level": 2
}, {
  "value": "KeyboardOptions12+",
  "id": "keyboardoptions12",
  "level": 2
}, {
  "value": "SubmitCallback12+",
  "id": "submitcallback12",
  "level": 2
}, {
  "value": "MenuOnAppearCallback12+",
  "id": "menuonappearcallback12",
  "level": 2
}, {
  "value": "MenuCallback15+",
  "id": "menucallback15",
  "level": 2
}, {
  "value": "PasteEventCallback12+",
  "id": "pasteeventcallback12",
  "level": 2
}, {
  "value": "OnHoverCallback14+",
  "id": "onhovercallback14",
  "level": 2
}, {
  "value": "RichEditorTextSpan",
  "id": "richeditortextspan",
  "level": 2
}, {
  "value": "RichEditorImageSpan",
  "id": "richeditorimagespan",
  "level": 2
}, {
  "value": "RichEditorUrlStyle19+",
  "id": "richeditorurlstyle19",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（更新文本样式）",
  "id": "示例1更新文本样式",
  "level": 3
}, {
  "value": "示例2（绑定自定义键盘）",
  "id": "示例2绑定自定义键盘",
  "level": 3
}, {
  "value": "示例3（绑定自定义菜单）",
  "id": "示例3绑定自定义菜单",
  "level": 3
}, {
  "value": "示例4（更新图片样式）",
  "id": "示例4更新图片样式",
  "level": 3
}, {
  "value": "示例5（Span绑定手势事件）",
  "id": "示例5span绑定手势事件",
  "level": 3
}, {
  "value": "示例6（更新和获取段落样式）",
  "id": "示例6更新和获取段落样式",
  "level": 3
}, {
  "value": "示例7（更新预设样式与缩进）",
  "id": "示例7更新预设样式与缩进",
  "level": 3
}, {
  "value": "示例8（设置文本字重与阴影）",
  "id": "示例8设置文本字重与阴影",
  "level": 3
}, {
  "value": "示例9（添加用户自定义布局Span）",
  "id": "示例9添加用户自定义布局span",
  "level": 3
}, {
  "value": "示例10（使用和管理组件内的BuilderSpan）",
  "id": "示例10使用和管理组件内的builderspan",
  "level": 3
}, {
  "value": "示例11（设置文本识别配置）",
  "id": "示例11设置文本识别配置",
  "level": 3
}, {
  "value": "示例12（设置光标、手柄和底板颜色）",
  "id": "示例12设置光标手柄和底板颜色",
  "level": 3
}, {
  "value": "示例13（设置行高和字符间距）",
  "id": "示例13设置行高和字符间距",
  "level": 3
}, {
  "value": "示例14（自定义粘贴事件）",
  "id": "示例14自定义粘贴事件",
  "level": 3
}, {
  "value": "示例15（配置文字特性效果）",
  "id": "示例15配置文字特性效果",
  "level": 3
}, {
  "value": "示例16（自定义键盘避让）",
  "id": "示例16自定义键盘避让",
  "level": 3
}, {
  "value": "示例17（查看编辑状态）",
  "id": "示例17查看编辑状态",
  "level": 3
}, {
  "value": "示例18（配置文本变化回调）",
  "id": "示例18配置文本变化回调",
  "level": 3
}, {
  "value": "示例19（配置输入法enter键功能）",
  "id": "示例19配置输入法enter键功能",
  "level": 3
}, {
  "value": "示例20（设置段落折行规则）",
  "id": "示例20设置段落折行规则",
  "level": 3
}, {
  "value": "示例21（属性字符串基本功能）",
  "id": "示例21属性字符串基本功能",
  "level": 3
}, {
  "value": "示例22（获取布局信息）",
  "id": "示例22获取布局信息",
  "level": 3
}, {
  "value": "示例23（设置系统默认菜单扩展项）",
  "id": "示例23设置系统默认菜单扩展项",
  "level": 3
}, {
  "value": "示例24（组件部分常用属性）",
  "id": "示例24组件部分常用属性",
  "level": 3
}, {
  "value": "示例25（获取光标相对组件位置的矩形）",
  "id": "示例25获取光标相对组件位置的矩形",
  "level": 3
}, {
  "value": "示例26（设置最大行数和最大字符数）",
  "id": "示例26设置最大行数和最大字符数",
  "level": 3
}, {
  "value": "示例27（文本设置Url样式）",
  "id": "示例27文本设置url样式",
  "level": 3
}, {
  "value": "示例28（开启带样式的撤销还原能力）",
  "id": "示例28开启带样式的撤销还原能力",
  "level": 3
}, {
  "value": "示例29（文本设置预设段落样式）",
  "id": "示例29文本设置预设段落样式",
  "level": 3
}, {
  "value": "示例30（设置装饰线粗细和多装饰线）",
  "id": "示例30设置装饰线粗细和多装饰线",
  "level": 3
}, {
  "value": "示例31（设置开启中西文自动间距）",
  "id": "示例31设置开启中西文自动间距",
  "level": 3
}, {
  "value": "示例32（设置文本选择的AI菜单）",
  "id": "示例32设置文本选择的ai菜单",
  "level": 3
}, {
  "value": "示例33（设置监听输入法绑定事件）",
  "id": "示例33设置监听输入法绑定事件",
  "level": 3
}, {
  "value": "示例34（删除输入框文本尾部字符）",
  "id": "示例34删除输入框文本尾部字符",
  "level": 3
}, {
  "value": "示例35（优化小语种文字显示）",
  "id": "示例35优化小语种文字显示",
  "level": 3
}, {
  "value": "示例36（设置开启行首标点符号压缩）",
  "id": "示例36设置开启行首标点符号压缩",
  "level": 3
}, {
  "value": "示例37（设置拖动预览样式）",
  "id": "示例37设置拖动预览样式",
  "level": 3
}, {
  "value": "示例38（设置单行模式）",
  "id": "示例38设置单行模式",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    number: "number",
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
        id: "richeditor",
        children: "RichEditor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持图文混排和文本交互式编辑的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(360705)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 10开始支持。后续版本新增内容，采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不包含子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "richeditor-1",
      children: "RichEditor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichEditor(value: RichEditorOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditoroptions",
              children: "RichEditorOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本组件初始化选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "richeditor12",
      children: "RichEditor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichEditor(options: RichEditorStyledStringOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorstyledstringoptions12",
              children: "RichEditorStyledStringOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本组件初始化选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(899291)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "align属性只支持上方、中间和下方位置的对齐方式。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border-image/ts-universal-attributes-border-image#borderimage",
          children: "borderImage"
        }), "属性。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件水平方向默认padding为16vp，竖直方向默认padding为8vp。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "customkeyboard",
      children: "customKeyboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义键盘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设置自定义键盘时，输入框激活后不会打开系统输入法，而是加载指定的自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义键盘的高度可以通过自定义组件根节点的height属性设置，宽度不可设置，使用系统默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义键盘无法获取焦点，但是会拦截手势事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认在输入控件失去焦点时，关闭自定义键盘。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义键盘支持接续功能，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#setcustomkeyboardcontinuefeature23",
        children: "setCustomKeyboardContinueFeature"
      }), "接口，可以设置自定义键盘之间切换时是否接续。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545941)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#componentcontent-1",
              children: "ComponentContent"
            }), "23+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined23+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#keyboardoptions12",
              children: "KeyboardOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindselectionmenu",
      children: "bindSelectionMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindSelectionMenu(spanType: RichEditorSpanType, content: CustomBuilder, responseType: ResponseType | RichEditorResponseType, options?: SelectionMenuOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置自定义选择菜单。自定义菜单超长时，建议内部嵌套", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "组件使用，避免键盘被遮挡。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorspantype",
              children: "RichEditorSpanType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单的类型。  默认值：  RichEditorSpanType.TEXT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#responsetype8",
              children: "ResponseType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorresponsetype11",
              children: "RichEditorResponseType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#selectionmenuoptions",
              children: "SelectionMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单的选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copyoptions",
      children: "copyOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyOptions(value: CopyOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件是否支持文本内容可复制粘贴。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，RichEditor组件在执行复制或剪切操作时，会将HTML格式的内容添加到剪贴板中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持TextSpan和ImageSpan向剪贴板中添加HTML内容，其他Span类型（如BuilderSpan、SymbolSpan、CustomSpan）则不能添加。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置RichEditor组件的属性字符串时，请参考属性字符串", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#tohtml14",
          children: "toHtml"
        }), "接口文档，以了解支持转换为HTML的范围。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyOptions不为CopyOptions.None时，长按组件内容，会弹出文本选择菜单。如果通过bindSelectionMenu等方式自定义文本选择菜单，则会弹出自定义的菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置copyOptions为CopyOptions.None时，禁用复制、剪切、翻译、分享、搜索、帮写功能，且不支持拖拽操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#copyoptions9",
              children: "CopyOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件支持文本内容是否可复制粘贴。  默认值：CopyOptions.LocalDevice"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enabledatadetector11",
      children: "enableDataDetector11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableDataDetector(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否进行文本特殊实体识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口依赖设备底层应具有文本识别能力，否则设置不会生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当enableDataDetector设置为true且未指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#datadetectorconfig11",
        children: "dataDetectorConfig"
      }), "属性时，系统将默认识别所有类型的实体，并将这些实体的color和decoration更改为预设样式："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "color: '#ff007dff'\ndecoration:{\n  type: TextDecorationType.Underline,\n  color: '#ff007dff',\n  style: TextDecorationStyle.SOLID\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触摸点击或鼠标右键点击实体时，会根据实体类型弹出对应的实体操作菜单，鼠标左键点击实体会直接响应菜单的第一个选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对addBuilderSpan的节点文本，该功能不会生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当copyOptions设置为CopyOptions.None时，点击实体弹出的菜单没有选择文本和复制功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，组件文本选择菜单支持显示AI菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当enableDataDetector设置为true，并且", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoptions",
        children: "copyOptions"
      }), "设置为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE，组件在非编辑态选中内容，选中区包含单个AI实体时，根据AI实体的类型，在文本选择菜单中显示AI菜单选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI菜单选项包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitemid12",
        children: "TextMenuItemId"
      }), "中的url（打开链接）、email（新建邮件）、phoneNumber（呼叫）、address（导航至该位置）、dateTime（新建日程提醒）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，组件文本选择菜单支持显示问问小艺。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件在编辑态下，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoptions",
        children: "copyOptions"
      }), "设置为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE，组件内选中任意文本内容时，文本选择菜单与鼠标右键菜单中都可以显示问问小艺选项。组件在非编辑态下，enableDataDetector设置为true，并且", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoptions",
        children: "copyOptions"
      }), "设置为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE，组件内选中文本，文本选择菜单与鼠标右键菜单中不显示其他AI菜单时，显示问问小艺选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能文本识别。  true表示使能文本特殊实体识别，false表示不使能文本特殊实体识别。  默认值： false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datadetectorconfig11",
      children: "dataDetectorConfig11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dataDetectorConfig(config: TextDataDetectorConfig)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本特殊实体识别配置，可配置识别类型、实体显示样式，并可选择是否开启长按预览功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enabledatadetector11",
        children: "enableDataDetector"
      }), "一起使用，设置enableDataDetector为true时，dataDetectorConfig的配置才能生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当有两个实体A、B重叠时，按以下规则保留实体："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若A ⊂ B，则保留B，反之则保留A。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当A ⊄ B且B ⊄ A时，若A.start < B.start，则保留A，反之则保留B。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdatadetectorconfig11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextDataDetectorConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本识别配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableselecteddatadetector22",
      children: "enableSelectedDataDetector22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableSelectedDataDetector(enable: boolean | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否启用文本选择的AI菜单功能。启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI菜单功能启用时，在组件中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitemid12",
        children: "TextMenuItemId"
      }), "中的url（打开连接）、email（新建邮件）、phoneNumber（呼叫）、address（导航前往）、dateTime（新建日程）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI菜单生效时，选中范围内需包括且仅包括一个完整的AI实体，才能展示对应的选项。该菜单项与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitemid12",
        children: "TextMenuItemId"
      }), "中的askAI菜单项不同时出现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本功能仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoptions",
        children: "copyOptions"
      }), "为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口依赖设备底层具有文本识别能力，否则设置不会生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablepreviewtext12",
      children: "enablePreviewText12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enablePreviewText(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启预上屏功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(374110)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能预上屏功能。  true表示开启，false表示不开启。  默认值： true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口在CAPI场景使用时默认关闭。可以在工程的module.json5中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/module-structure#metadata%E5%AF%B9%E8%B1%A1%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84",
        children: "metadata"
      }), "字段控制是否启用预上屏，配置如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"metadata\": [\n  {\n    \"name\": \"can_preview_text\",\n    \"value\": \"true\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "placeholder12",
      children: "placeholder12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "placeholder(value: ResourceStr, style?: PlaceholderStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置无输入时的提示文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(517266)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无输入时的提示文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#placeholderstyle12",
              children: "PlaceholderStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示文本的字体样式。  缺省时默认跟随主题。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caretcolor12",
      children: "caretColor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "caretColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入框光标、手柄颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框光标、手柄颜色。  默认值：'#007DFF'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedbackgroundcolor12",
      children: "selectedBackgroundColor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedBackgroundColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本选中的底板颜色。如果未设置不透明度，默认为20%不透明度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选中的底板颜色。  默认为20%不透明度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editmenuoptions12",
      children: "editMenuOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "editMenuOptions(editMenu: EditMenuOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置系统默认菜单的扩展项，允许配置扩展项的文本内容、图标和回调方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablemenuitems20",
        children: "disableMenuItems"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablesystemservicemenuitems20",
        children: "disableSystemServiceMenuItems"
      }), "接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#oncreatemenu12",
        children: "onCreateMenu"
      }), "的入参列表中不包含被屏蔽的菜单选项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775193)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "editMenu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#editmenuoptions",
              children: "EditMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展菜单选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterkeytype12",
      children: "enterKeyType12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enterKeyType(value: EnterKeyType)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置软键盘输入法回车键类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#enterkeytype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "EnterKeyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘输入法回车键类型。  默认为EnterKeyType.NEW_LINE。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablekeyboardonfocus12",
      children: "enableKeyboardOnFocus12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableKeyboardOnFocus(isEnabled: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置RichEditor通过点击以外的方式获焦时，是否主动拉起软键盘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(363788)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过点击以外的方式获焦时，是否主动拉起软键盘。  true表示主动拉起软键盘，false表示不主动拉起软键盘。  默认值： true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barstate13",
      children: "barState13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "barState(state: BarState)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置RichEditor滚动条的显示模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(73420)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#barstate",
              children: "BarState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框滚动条的显示模式。  默认值：BarState.Auto"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxlength18",
      children: "maxLength18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxLength(maxLength: Optional<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件内容的最大长度。当内容（包含文本、图片、Symbol和Builder）的总长度达到此值时，将无法继续添加内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxLength"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本的最大输入字符数。  默认值：Infinity，可以无限输入，支持undefined类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当不设置该属性或设置异常值时，取默认值，设置小数时，取整数部分。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxlines18",
      children: "maxLines18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxLines(maxLines: Optional<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置富文本可显示的最大行数。maxLines为可显示行数，当设置maxLines时，超出内容可滚动显示。同时设置组件高度和最大行数，组件高度优先生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxLines"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置富文本可显示的最大行数。maxLines为可显示行数，当设置maxLines时，超出内容可滚动显示。同时设置组件高度和最大行数，组件高度优先生效。  默认值：UINT32_MAX，可以无限输入，支持undefined类型。  取值范围：(0, UINT32_MAX]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablehapticfeedback13",
      children: "enableHapticFeedback13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableHapticFeedback(isEnabled: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置RichEditor是否支持触感反馈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(266907)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制触感反馈的开关。  默认值：true。true表示开启触感反馈，false表示关闭触感反馈。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  触感反馈需应用具备ohos.permission.VIBRATE权限，用户已启用触感反馈，且系统硬件支持时才会生效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keyboardappearance15",
      children: "keyboardAppearance15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "keyboardAppearance(appearance: Optional<KeyboardAppearance>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置键盘外观。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appearance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#keyboardappearance15%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "KeyboardAppearance"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘外观。  默认值：KeyboardAppearance.NONE_IMMERSIVE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stopbackpress18",
      children: "stopBackPress18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopBackPress(isStopped: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否阻止返回键传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isStopped"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否阻止返回键。  true表示阻止，false表示不阻止。  默认值：true。异常值取默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undostyle20",
      children: "undoStyle20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "undoStyle(style: Optional<UndoStyle>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置撤销还原时是否保留原内容的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建RichEditor组件时，撤销还原时默认保留原内容样式，不受该接口设置的属性影响。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#undostyle20-1",
              children: "UndoStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤销还原是否保留原样式选项。默认值：UndoStyle.CLEAR_STYLE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableautospacing20",
      children: "enableAutoSpacing20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableAutoSpacing(enable: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启中文与西文的自动间距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启中文与西文的自动间距。  true为开启自动间距，false为不开启。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scrollbarcolor21",
      children: "scrollBarColor21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scrollBarColor(color: Optional<ColorMetrics>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件滚动条颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置组件滚动条颜色。  默认值：'#66182431'，显示为灰色。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 设置异常值时按默认值处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "includefontpadding23",
      children: "includeFontPadding23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "includeFontPadding(include: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "include"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否在首行和尾行增加间距以避免文字截断。  true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fallbacklinespacing23",
      children: "fallbackLineSpacing23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fallbackLineSpacing(enabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对多行文字叠加，支持行高基于文字实际高度自适应。不通过该接口设置，默认行高不基于文字实际高度自适应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditortextstyle",
        children: "RichEditorTextStyle"
      }), "的lineHeight属性。当lineHeight设置值小于当前字号下文本渲染出的实际高度时，fallbackLineSpacing属性将生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行高是否基于文字实际高度自适应。  true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compressleadingpunctuation23",
      children: "compressLeadingPunctuation23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "compressLeadingPunctuation(enabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启行首标点符号压缩。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(295976)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "行首标点符号默认不压缩。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持压缩的标点符号，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraphstyle",
        children: "ParagraphStyle"
      }), "的行首压缩的标点范围。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启行首标点符号压缩。  true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selecteddragpreviewstyle23",
      children: "selectedDragPreviewStyle23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置拖动预览样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#selecteddragpreviewstyle23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SelectedDragPreviewStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "singleline23",
      children: "singleLine23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "singleLine(isEnable: boolean | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否启用单行模式。未通过该接口设置时，默认不启用单行模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(492635)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单行模式不显示滚动条。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单行模式下换行符会显示为空格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#ondidchangecallback12",
        children: "OnDidChangeCallback"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#styledstringchangedlistener12",
        children: "StyledStringChangedListener"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#styledstringchangevalue12",
        children: "StyledStringChangeValue"
      }), "和以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onready",
      children: "onReady"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onReady(callback:Callback<void>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "富文本组件初始化完成后触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅富文本组件初始化完成的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onselect",
      children: "onSelect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onSelect(callback:Callback<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorselection",
        children: "RichEditorSelection"
      }), ">)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标左键双击选中内容触发回调；松开鼠标左键再次触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手指长按选中内容触发回调；松开手指再次触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过手指或鼠标连续修改选中区、三击选段场景，不回调onSelect。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要实时感知选中区变化的场景和使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件，请使用onSelectionChange接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorselection",
              children: "RichEditorSelection"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorselection",
              children: "RichEditorSelection"
            }), "为选中的所有span信息。  选择时触发的回调。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttoimeinput",
      children: "aboutToIMEInput"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["aboutToIMEInput(callback:Callback<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorinsertvalue",
        children: "RichEditorInsertValue"
      }), ", boolean>)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法输入内容前触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorinsertvalue",
              children: "RichEditorInsertValue"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorinsertvalue",
              children: "RichEditorInsertValue"
            }), "为输入法将要输入内容信息。  true:组件执行添加内容操作。  false:组件不执行添加内容操作。  输入法输入内容前的回调。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondidimeinput12",
      children: "onDidIMEInput12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDidIMEInput(callback:Callback<TextRange>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法输入完成后，触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持该回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614451)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textrange12",
              children: "TextRange"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TextRange为输入法本次输入内容的范围。  输入法完成输入时的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onimeinputcomplete",
      children: "onIMEInputComplete"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onIMEInputComplete(callback:Callback<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditortextspanresult",
        children: "RichEditorTextSpanResult"
      }), ">)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法输入完成后，触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口仅支持返回一个文本span的信息，当编辑操作涉及返回多个文本span信息时，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondidimeinput12",
        children: "onDidIMEInput"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            }), "为输入法完成输入后的文本Span信息。  输入法完成输入后的回调。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abouttodelete",
      children: "aboutToDelete"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["aboutToDelete(callback:Callback<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditordeletevalue",
        children: "RichEditorDeleteValue"
      }), ", boolean>)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法删除内容前，触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditordeletevalue",
              children: "RichEditorDeleteValue"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditordeletevalue",
              children: "RichEditorDeleteValue"
            }), "为准备删除的内容所在的文本或者图片Span信息。  true:组件执行删除操作。  false:组件不执行删除操作。  输入法删除内容前的回调，英文预上屏点击候选词时会执行该回调。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondeletecomplete",
      children: "onDeleteComplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDeleteComplete(callback:Callback<void>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法删除内容后，触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅输入法完成删除内容的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onpaste11",
      children: "onPaste11+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onPaste(callback: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pasteeventcallback12",
        children: "PasteEventCallback"
      }), " )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粘贴时，触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的粘贴。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteeventcallback12",
              children: "PasteEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅粘贴时的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onselectionchange12",
      children: "onSelectionChange12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onSelectionChange(callback:Callback<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorrange",
        children: "RichEditorRange"
      }), ">)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容选择区域或编辑状态下的光标位置发生变化时，将触发该回调。光标位置变化时，回调中选择区域的起始和终止位置相等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorrange",
              children: "RichEditorRange"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorrange",
              children: "RichEditorRange"
            }), "为所有内容的选择区域起始和终止位置。  订阅文本选择区域发生变化或编辑状态下光标位置发生变化时触发的回调。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oneditingchange12",
      children: "onEditingChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onEditingChange(callback: Callback<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件内容的编辑状态发生变化时触发该回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true表示编辑态，false表示非编辑态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onsubmit12",
      children: "onSubmit12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSubmit(callback: SubmitCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按下软键盘输入法回车键时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#submitcallback12",
              children: "SubmitCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅事件的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillchange12",
      children: "onWillChange12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onWillChange(callback: Callback<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorchangevalue12",
        children: "RichEditorChangeValue"
      }), " , boolean>)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在组件执行增删操作前，触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持该回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(734661)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorchangevalue12",
              children: "RichEditorChangeValue"
            }), " , boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorchangevalue12",
              children: "RichEditorChangeValue"
            }), "为图文变化信息；boolean表示当前图文是否允许被更改，true：允许图文被更改；false：不允许图文被更改。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondidchange12",
      children: "onDidChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDidChange(callback: OnDidChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在组件执行增删操作后，触发回调。如果文本实际未发生增删，则不触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持该回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(224695)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#ondidchangecallback12",
              children: "OnDidChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图文变化前后的内容范围。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncut12",
      children: "onCut12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onCut(callback: Callback<CutEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "剪切时触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的剪切。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件，默认支持图文的剪切。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cutevent12",
              children: "CutEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用户剪切事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncopy12",
      children: "onCopy12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onCopy(callback: Callback<CopyEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复制时触发回调。开发者可以通过该方法，覆盖系统默认行为，实现图文的复制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件，默认支持图文的复制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#copyevent12",
              children: "CopyEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用户复制事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillattachime22",
      children: "onWillAttachIME22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillAttachIME(callback: Callback<IMEClient> | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在组件绑定输入法前，触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#imeclient20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "IMEClient"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#setextraconfig22",
        children: "setExtraConfig"
      }), "方法设置输入法扩展信息。在绑定输入法成功后，输入法会收到扩展信息，输入法可以依据此信息实现自定义功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#imeclient20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IMEClient"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorinsertvalue",
      children: "RichEditorInsertValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插入文本的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insertOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["插入的文本偏移位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insertValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["插入的文本内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "previewText12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["插入的预上屏文本内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditordeletevalue",
      children: "RichEditorDeleteValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除操作和被删除内容的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除内容的偏移位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditordeletedirection",
              children: "RichEditorDeleteDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除操作的方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除内容长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "richEditorDeleteSpans"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanresult",
              children: "RichEditorImageSpanResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditordeletedirection",
      children: "RichEditorDeleteDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACKWARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向后删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FORWARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向前删除。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditortextspanresult",
      children: "RichEditorTextSpanResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本Span信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorspanposition",
              children: "RichEditorSpanPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本Span内容或Symbol的id。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextstyleresult",
              children: "RichEditorTextStyleResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本Span样式信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offsetInSpan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本Span内容里有效内容的起始和结束位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "valueResource11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件SymbolSpan内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolSpanStyle11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorsymbolspanstyle11",
              children: "RichEditorSymbolSpanStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件SymbolSpan样式信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paragraphStyle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorparagraphstyle11",
              children: "RichEditorParagraphStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["段落样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "previewText12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本Span预上屏内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "urlStyle19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorurlstyle19",
              children: "RichEditorUrlStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["url信息。  默认值：undefined  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorspanposition",
      children: "RichEditorSpanPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Span位置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span内容在RichEditor内的起始和结束位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorspantype",
      children: "RichEditorSpanType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Span类型信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span类型为文字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span类型为图像。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span类型为图文混合。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUILDER12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span类型为BuilderSpan。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册此类型的菜单，但未注册TEXT、IMAGE、MIXED、BUILDER菜单时，文字类型、图像类型、图文混合类型、BuilderSpan类型都会触发并显示此类型对应的菜单。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorresponsetype11",
      children: "RichEditorResponseType11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单的响应类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_CLICK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过鼠标右键触发菜单弹出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LONG_PRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过长按触发菜单弹出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过鼠标选中触发菜单弹出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册此响应类型的菜单，但未注册RIGHT_CLICK、LONG_PRESS、SELECT响应类型的菜单时，通过鼠标右键、长按、鼠标选中都会触发菜单弹出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "undostyle20-1",
      children: "UndoStyle20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "撤销还原是否保留原样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLEAR_STYLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤销还原内容不保留原样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEEP_STYLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤销还原内容保留原样式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditortextstyleresult",
      children: "RichEditorTextStyleResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后端返回的文本样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字体大小，默认单位为fp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
              children: "FontStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字体样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字体粗细。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFamily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字体列表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "decoration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#decorationstyleresult12",
              children: "DecorationStyleResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本装饰线样式信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textShadow12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文字阴影效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅支持查询阴影模糊半径、颜色和偏移量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineHeight12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本行高，默认单位为fp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "letterSpacing12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本字符间距，默认单位为fp。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFeature12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文字特性效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "halfLeading18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本是否将行间距平分至行的顶部与底部。  true表示将行间距平分至行的顶部与底部，false则不平分。  默认值：false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textBackgroundStyle18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#textbackgroundstyle11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextBackgroundStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本背景样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeWidth23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本描边宽度。  单位为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
              children: "vp"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeColor23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本描边颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RichEditorTextStyle中，fontWeight是设置字体粗细的输入参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "而在RichEditorTextStyleResult中，会将之前设置的字体粗细转换为数字后返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换关系如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RichEditorTextStyle中的fontWeight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RichEditorTextStyleResult中的fontWeight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "700"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "900"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lighter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bolder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichEditorSymbolSpanStyle和RichEditorSymbolSpanStyleResult中fontWeight的转换关系，与RichEditorTextStyle和RichEditorTextStyleResult中fontWeight的转换关系一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorsymbolspanstyleresult11",
      children: "RichEditorSymbolSpanStyleResult11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后端返回的SymbolSpan样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SymbolSpan组件颜色。  默认值：不同渲染策略下默认值不同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renderingStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symbolrenderingstrategy11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SymbolRenderingStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SymbolSpan组件渲染策略。  默认值：SymbolRenderingStrategy.SINGLE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "effectStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symboleffectstrategy11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SymbolEffectStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SymbolSpan组件动效策略。  默认值：SymbolEffectStrategy.NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorimagespanresult",
      children: "RichEditorImageSpanResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后端返回的图片信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorspanposition",
              children: "RichEditorSpanPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "valuePixelMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "valueResourceStr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片资源id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanstyleresult",
              children: "RichEditorImageSpanStyleResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offsetInSpan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span里图片的起始和结束位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorimagespanstyleresult",
      children: "RichEditorImageSpanStyleResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后端返回的图片样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片的宽度和高度，单位为px。默认值：size的默认值与objectFit的值有关，不同的objectFit值对应的size默认值也不同。objectFit的值为Cover时，图片高度为组件高度减去组件上下内边距，图片宽度为组件宽度减去组件左右内边距。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "verticalAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagespanalignment10",
              children: "ImageSpanAlignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片垂直对齐方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "objectFit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
              children: "ImageFit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片缩放类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutStyle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorlayoutstyle11",
              children: "RichEditorLayoutStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片布局风格。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorlayoutstyle11",
      children: "RichEditorLayoutStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片布局信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
              children: "Margin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditoroptions",
      children: "RichEditorOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichEditor初始化参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorcontroller",
              children: "RichEditorController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本控制器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorstyledstringoptions12",
      children: "RichEditorStyledStringOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichEditor初始化参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorstyledstringcontroller12",
              children: "RichEditorStyledStringController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本控制器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorchangevalue12",
      children: "RichEditorChangeValue12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图文变化信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rangeBefore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textrange12",
              children: "TextRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将被替换内容的开始和结束索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "replacedSpans"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "替换后文本Span的具体信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "replacedImageSpans"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanresult",
              children: "RichEditorImageSpanResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "替换后ImageSpan的具体信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "replacedSymbolSpans"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "替换后SymbolSpan的具体信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorbasecontroller12",
      children: "RichEditorBaseController12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichEditor组件控制器基类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcaretoffset10",
      children: "getCaretOffset10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCaretOffset(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回当前光标所在位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当无法获取光标位置时（例如controller未与组件绑定时），该接口返回-1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前光标所在位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcaretoffset10",
      children: "setCaretOffset10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCaretOffset(offset: number): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置光标位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标偏移位置。超出所有内容范围时，设置失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标是否设置成功。  true表示光标位置设置成功，false表示未成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closeselectionmenu10",
      children: "closeSelectionMenu10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "closeSelectionMenu(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭自定义选择菜单或系统默认选择菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gettypingstyle11",
      children: "getTypingStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getTypingStyle(): RichEditorTextStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用户预设的文本样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextstyle",
              children: "RichEditorTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户预设样式。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settypingstyle11",
      children: "setTypingStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTypingStyle(value: RichEditorTextStyle): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用户预设的文本样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextstyle",
              children: "RichEditorTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预设样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settypingparagraphstyle20",
      children: "setTypingParagraphStyle20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTypingParagraphStyle(style: RichEditorParagraphStyle): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用户预设的段落样式。仅在组件内容为空或组件末尾换行后，输入文本生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorparagraphstyle11",
              children: "RichEditorParagraphStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预设段落样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setselection11",
      children: "setSelection11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持设置组件内的内容选中，选中部分背板高亮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectionStart和selectionEnd均为-1时表示全选，均为0时可以清空选中区。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未获焦时调用该接口不产生选中效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，在2in1设备中，无论options取何值，调用setSelection接口都不会弹出菜单，此外，如果组件中已经存在菜单，调用setSelection接口会关闭菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在非2in1设备中，options取值为MenuPolicy.DEFAULT时，遵循以下规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件内有手柄菜单时，接口调用后不关闭菜单，并且调整菜单位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件内有不带手柄的菜单时，接口调用后不关闭菜单，并且菜单位置不变。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件内无菜单时，接口调用后也无菜单显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectionStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中开始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectionEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中结束位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#selectionoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SelectionOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择项配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isediting12",
      children: "isEditing12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isEditing(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前富文本的编辑状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true为编辑态，false为非编辑态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stopediting12",
      children: "stopEditing12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopEditing(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "退出编辑态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getlayoutmanager12",
      children: "getLayoutManager12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLayoutManager(): LayoutManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取布局管理器对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#layoutmanager12",
              children: "LayoutManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布局管理器对象。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpreviewtext12",
      children: "getPreviewText12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPreviewText(): PreviewText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取预上屏信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#previewtext12",
              children: "PreviewText"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预上屏信息。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcaretrect18",
      children: "getCaretRect18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCaretRect(): RectResult | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回当前光标与RichEditor组件的相对位置。如果光标不闪烁，返回undefined。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/event-dispatch-control/ts-universal-attributes-on-child-touch-test/ts-universal-attributes-on-child-touch-test#rectresult",
              children: "RectResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deletebackward23",
      children: "deleteBackward23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteBackward(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供删除字符能力。没有内容被选中时，删除当前光标位置前的1个字符。有内容被选中时，删除选中内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口不支持预上屏场景使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorcontroller",
      children: "RichEditorController"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RichEditor组件的控制器，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorbasecontroller12",
        children: "RichEditorBaseController"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(154766)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当内容的长度超过组件显示区域的高度时，调用插入接口（例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addtextspan",
        children: "addTextSpan"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addimagespan",
        children: "addImageSpan"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addbuilderspan11",
        children: "addBuilderSpan"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addsymbolspan11",
        children: "addSymbolSpan"
      }), "），组件会自动滚动内容使得插入内容末尾可见。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入对象",
      children: "导入对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addtextspan",
      children: "addTextSpan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加文本内容，如果组件光标闪烁，插入后光标位置更新为新插入文本的后面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本内容。  从API version 20开始，支持Resource类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanoptions",
              children: "RichEditorTextSpanOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加完成的TextSpan在所有Span中的索引位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addimagespan",
      children: "addImageSpan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加图片内容，如果组件光标闪烁，插入后光标位置更新为新插入图片的后面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口为同步接口，在弱网环境下，直接添加网络图片可能会阻塞UI线程造成冻屏问题。不建议直接添加网络图片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanoptions",
              children: "RichEditorImageSpanOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加完成的ImageSpan在所有Span中的索引位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addbuilderspan11",
      children: "addBuilderSpan11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RichEditor中添加用户自定义布局（BuilderSpan）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(796597)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RichEditor组件添加占位Span，占位Span调用系统的measure方法计算真实的长宽和位置。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#richeditorbuilderspanoptions11",
          children: "RichEditorBuilderSpanOptions"
        }), "设置此builder在RichEditor中的index（一个文字为一个单位）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此占位Span不可获焦，支持拖拽，支持部分通用属性，占位、删除等能力等同于ImageSpan，长度视为一个文字。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#bindselectionmenu",
          children: "bindSelectionMenu"
        }), "设置自定义菜单。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#getspans",
          children: "getSpans"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "#getselection11",
          children: "getSelection"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "#onselect",
          children: "onSelect"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "#abouttodelete",
          children: "aboutToDelete"
        }), "获取builderSpan信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#updatespanstyle",
          children: "updateSpanStyle"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "#updateparagraphstyle11",
          children: "updateParagraphStyle"
        }), "等方式更新builder。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对此builder节点进行复制或粘贴不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "builder的布局约束由RichEditor传入，如果builder里最外层组件不设置大小，则会用RichEditor的大小作为maxSize。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "builder的手势相关事件机制与通用手势事件相同，如果builder中未设置透传，则仅有builder中的子组件响应。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果组件光标闪烁，插入后光标位置更新为新插入builder的后面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通用属性仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#size",
        children: "size"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#padding",
        children: "padding"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
        children: "margin"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-layout-constraints/ts-universal-attributes-layout-constraints#aspectratio",
        children: "aspectRatio"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderstyle",
        children: "borderStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderwidth",
        children: "borderWidth"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#bordercolor",
        children: "borderColor"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderradius",
        children: "borderRadius"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "backgroundColor"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyle9",
        children: "backgroundBlurStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-opacity/ts-universal-attributes-opacity",
        children: "opacity"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#blur",
        children: "blur"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backdropblur",
        children: "backdropBlur"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadow",
        children: "shadow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#grayscale",
        children: "grayscale"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#brightness",
        children: "brightness"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#saturate",
        children: "saturate"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#contrast",
        children: "contrast"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#invert",
        children: "invert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#sepia",
        children: "sepia"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#huerotate",
        children: "hueRotate"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#colorblend",
        children: "colorBlend"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#lineargradientblur12",
        children: "linearGradientBlur"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#mask12",
        children: "mask"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#foregroundblurstyle",
        children: "foregroundBlurStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitygroup",
        children: "accessibilityGroup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitytext",
        children: "accessibilityText"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitydescription",
        children: "accessibilityDescription"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitylevel",
        children: "accessibilityLevel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#sphericaleffect12",
        children: "sphericalEffect"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#lightupeffect12",
        children: "lightUpEffect"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#pixelstretcheffect12",
        children: "pixelStretchEffect"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorbuilderspanoptions11",
              children: "RichEditorBuilderSpanOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "builder选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加完成的builderSpan在所有Span中的索引位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addsymbolspan11",
      children: "addSymbolSpan11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RichEditor中添加图标小符号（SymbolSpan），如果组件光标闪烁，插入后光标位置更新为新插入SymbolSpan的后面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂不支持手势、复制、拖拽处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "symbol资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorsymbolspanoptions11",
              children: "RichEditorSymbolSpanOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "symbol选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加完成的SymbolSpan在所有Span中的索引位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updatespanstyle",
      children: "updateSpanStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新文本、图片或SymbolSpan样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若只更新了一个Span的部分内容，则会根据更新部分、未更新部分将该Span拆分为多个Span。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用该接口更新文本、图片或SymbolSpan样式时默认不会关闭自定义文本选择菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorupdatetextspanstyleoptions",
              children: "RichEditorUpdateTextSpanStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorupdateimagespanstyleoptions",
              children: "RichEditorUpdateImageSpanStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorupdatesymbolspanstyleoptions11",
              children: "RichEditorUpdateSymbolSpanStyleOptions"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753733)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当start大于end时为异常情况，此时start为0，end为无穷大。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updateparagraphstyle11",
      children: "updateParagraphStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateParagraphStyle(value: RichEditorParagraphStyleOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新段落的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorparagraphstyleoptions11",
              children: "RichEditorParagraphStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "段落的样式选项信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getspans",
      children: "getSpans"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取span信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorrange",
              children: "RichEditorRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要获取span范围。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanresult",
              children: "RichEditorImageSpanResult"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            }), ">"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deletespans",
      children: "deleteSpans"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteSpans(value?: RichEditorRange): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除指定范围内的文本和图片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorrange",
              children: "RichEditorRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除范围。省略时，删除所有文本和图片。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getparagraphs11",
      children: "getParagraphs11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定范围的段落信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorrange",
              children: "RichEditorRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要获取段落的范围。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorparagraphresult11",
              children: "RichEditorParagraphResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中段落的信息。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getselection11",
      children: "getSelection11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSelection(): RichEditorSelection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取选中内容的范围和span信息。未选中时，返回光标所在span信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorselection",
              children: "RichEditorSelection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中内容信息。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fromstyledstring12",
      children: "fromStyledString12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fromStyledString(value: StyledString): Array<RichEditorSpan>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将属性字符串转换为span信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#styledstring",
              children: "StyledString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转换前的属性字符串。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorspan12",
              children: "RichEditorSpan"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本和图片Span信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tostyledstring12",
      children: "toStyledString12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toStyledString(value: RichEditorRange): StyledString"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将给定范围的组件内容转换成属性字符串，SymbolSpan和BuilderSpan不支持转换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorrange",
              children: "RichEditorRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要获取的范围。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#styledstring",
              children: "StyledString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转换后的属性字符串"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter check failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorstyledstringcontroller12",
      children: "RichEditorStyledStringController12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用属性字符串构建的RichEditor组件的控制器，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorbasecontroller12",
        children: "RichEditorBaseController"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入对象-1",
      children: "导入对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorStyledStringController = new RichEditorStyledStringController();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getselection12",
      children: "getSelection12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSelection(): RichEditorRange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取富文本当前的选中区域范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorrange",
              children: "RichEditorRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中区域范围。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setstyledstring12",
      children: "setStyledString12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setStyledString(styledString: StyledString): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置富文本组件显示的属性字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(823327)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用该接口时，会全量替换富文本组件的StyledString，并重新渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当内容超过组件本身区域时，组件会自动向上滚动内容直到末尾处可见。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "styledString"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#styledstring",
              children: "StyledString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["属性字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  StyledString的子类", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#mutablestyledstring",
              children: "MutableStyledString"
            }), "也可以作为入参值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getstyledstring12",
      children: "getStyledString12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getStyledString(): MutableStyledString"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取富文本组件显示的属性字符串。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#mutablestyledstring",
              children: "MutableStyledString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本组件显示的属性字符串。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncontentchanged12",
      children: "onContentChanged12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onContentChanged(listener: StyledStringChangedListener): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注册文本内容变化回调，该回调仅在后端程序导致文本内容变更时触发，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setstyledstring12",
        children: "setStyledString"
      }), "时不会触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#styledstringchangedlistener12",
              children: "StyledStringChangedListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本内容变化回调监听器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorselection",
      children: "RichEditorSelection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选中内容信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spans"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanresult",
              children: "RichEditorImageSpanResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorrange",
      children: "RichEditorRange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义RichEditor的范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要更新样式的文本起始位置，省略或者设置负值时表示从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要更新样式的文本结束位置，省略或者超出文本范围时表示无穷大。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorspanstyleoptions",
      children: "RichEditorSpanStyleOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorrange",
        children: "RichEditorRange"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorupdatetextspanstyleoptions",
      children: "RichEditorUpdateTextSpanStyleOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorspanstyleoptions",
        children: "RichEditorSpanStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextstyle",
              children: "RichEditorTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "urlStyle19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorurlstyle19",
              children: "RichEditorUrlStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["url信息。  默认值：undefined  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorupdateimagespanstyleoptions",
      children: "RichEditorUpdateImageSpanStyleOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片的样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorspanstyleoptions",
        children: "RichEditorSpanStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanstyle",
              children: "RichEditorImageSpanStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorupdatesymbolspanstyleoptions11",
      children: "RichEditorUpdateSymbolSpanStyleOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SymbolSpan样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorspanstyleoptions",
        children: "RichEditorSpanStyleOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorsymbolspanstyle11",
              children: "RichEditorSymbolSpanStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorparagraphstyleoptions11",
      children: "RichEditorParagraphStyleOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "段落样式选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorrange",
        children: "RichEditorRange"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorparagraphstyle11",
              children: "RichEditorParagraphStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "段落样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(939175)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口作用的范围：设定的区间所涉及的段落。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorparagraphstyle11",
      children: "RichEditorParagraphStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "段落样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textalign",
              children: "TextAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置文本段落在水平方向的对齐方式。默认值：TextAlign.START  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leadingMargin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#leadingmarginplaceholder11",
              children: "LeadingMarginPlaceholder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wordBreak12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#wordbreak11",
              children: "WordBreak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置断行规则。  默认值：WordBreak.BREAK_WORD  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineBreakStrategy12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#linebreakstrategy12",
              children: "LineBreakStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置折行规则。  默认值：LineBreakStrategy.GREEDY  在wordBreak不等于breakAll的时候生效，不支持连字符。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paragraphSpacing19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置段落间距大小。  单位：fp  段落间距默认大小为0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textVerticalAlign20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textverticalalign20",
              children: "TextVerticalAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置文本段落在垂直方向的对齐方式。  默认值：TextVerticalAlign.BASELINE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textDirection23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdirection22",
              children: "TextDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置文本方向。  默认值：TextDirection.DEFAULT  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "leadingmarginplaceholder11",
      children: "LeadingMarginPlaceholder11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前导边距占位符，用于表示文本段落左侧与组件边缘之间的距离。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pixelMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片大小，不支持设置百分比。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorparagraphresult11",
      children: "RichEditorParagraphResult11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后端返回的段落信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorparagraphstyle11",
              children: "RichEditorParagraphStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "段落样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[number, number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "段落起始和结束位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditortextspanoptions",
      children: "RichEditorTextSpanOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加文本的偏移位置和文本样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加文本的位置。省略时，添加到所有内容的最后。  当值小于0时，放在所有内容最前面；当值大于所有内容长度时，放在所有内容最后面。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextstyle",
              children: "RichEditorTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本样式信息。省略时，使用系统默认文本信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paragraphStyle11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorparagraphstyle11",
              children: "RichEditorParagraphStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["段落样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gesture11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorgesture11",
              children: "RichEditorGesture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["行为触发回调。省略时，仅使用系统默认行为。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "urlStyle19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorurlstyle19",
              children: "RichEditorUrlStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["url信息。  默认值：undefined  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditortextstyle",
      children: "RichEditorTextStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本颜色。  默认值：$r('sys.color.font_primary')。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
              children: "FontStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字体样式。  默认值：FontStyle.Normal。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFamily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置字体列表。默认字体'HarmonyOS Sans'，当前支持'HarmonyOS Sans'字体和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-font/js-apis-font",
              children: "注册自定义字体"
            }), "。  默认字体:'HarmonyOS Sans'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "decoration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationstyleinterface",
              children: "DecorationStyleInterface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置文本装饰线的样式、颜色和粗细。  type默认值：TextDecorationType.None  color默认值：跟随字体颜色。  style默认值：TextDecorationStyle.SOLID  thicknessScale默认值：1.0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textShadow11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineHeight12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "letterSpacing12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFeature12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文字特性效果，比如数字等宽的特性。如果未设置，默认为变宽数字。设置无效字符保持默认。  格式为：normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "halfLeading18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本是否将行间距平分至行的顶部与底部。  true表示将行间距平分至行的顶部与底部，false则不平分。  默认值：false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textBackgroundStyle18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#textbackgroundstyle11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextBackgroundStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本背景样式。  默认值：  {  color: Color.Transparent,  radius: 0  }  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeWidth23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeColor23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本描边颜色。  默认值：跟随字体颜色。  设置异常值时跟随字体颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placeholderstyle12",
      children: "PlaceholderStyle12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置提示文本的字体样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置placeholder文本样式。  默认值遵循主题设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置placeholder文本颜色。  默认值遵循主题设置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorimagespanoptions",
      children: "RichEditorImageSpanOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片的偏移位置和图片样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加图片的位置。省略时，添加到所有内容的末尾。  当值小于0时，设置在所有内容最前面；当值大于所有内容长度时，设置在所有内容最后面。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanstyle",
              children: "RichEditorImageSpanStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片样式信息。省略时，使用系统默认图片信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gesture11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorgesture11",
              children: "RichEditorGesture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["行为触发回调。省略时，仅使用系统默认行为。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onHover14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onhovercallback14",
              children: "OnHoverCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标悬停触发回调。省略时，不执行相关行为。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorimagespanstyle",
      children: "RichEditorImageSpanStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片宽度和高度。默认值：与objectFit的值相关，不同的objectFit值有不同的默认尺寸。objectFit的值为Cover时，图片高度为组件高度减去组件上下内边距，宽度为组件宽度减去组件左右内边距。不支持以Percentage形式设置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "verticalAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagespanalignment10",
              children: "ImageSpanAlignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片垂直对齐方式。  默认值:ImageSpanAlignment.BOTTOM  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "objectFit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
              children: "ImageFit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片缩放类型。  默认值:ImageFit.Cover。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutStyle11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorlayoutstyle11",
              children: "RichEditorLayoutStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片布局风格。默认值：{\"borderRadius\":\"\",\"margin\":\"\"}  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorsymbolspanoptions11",
      children: "RichEditorSymbolSpanOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置SymbolSpan组件的偏移位置和样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加组件的位置。省略时，添加到所有内容的最后。  如果值小于0，添加到所有内容的最前面；如果值大于所有内容的长度，添加到所有内容的最后面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorsymbolspanstyle11",
              children: "RichEditorSymbolSpanStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件样式信息。省略时，使用系统默认样式信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorsymbolspanstyle11",
      children: "RichEditorSymbolSpanStyle11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件SymbolSpan样式信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置SymbolSpan组件颜色。  默认值：不同渲染策略下默认值不同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renderingStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symbolrenderingstrategy11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SymbolRenderingStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置SymbolSpan组件渲染策略。  默认值：SymbolRenderingStrategy.SINGLE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "effectStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symboleffectstrategy11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SymbolEffectStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置SymbolSpan组件动效策略。  默认值：SymbolEffectStrategy.NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorbuilderspanoptions11",
      children: "RichEditorBuilderSpanOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置builder的偏移位置和样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加builder的位置。省略或者为异常值时，添加到所有内容的最后。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilitySpanOptions23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#accessibilityspanoptions23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AccessibilitySpanOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无障碍朗读功能属性。缺省时，取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#accessibilityspanoptions23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AccessibilitySpanOptions"
            }), "的默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorspan12",
      children: "RichEditorSpan12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RichEditorSpan = RichEditorImageSpanResult | RichEditorTextSpanResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RichEditor span信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanresult",
              children: "RichEditorImageSpanResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后端返回的图片信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextspanresult",
              children: "RichEditorTextSpanResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后端返回的文本信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectionmenuoptions",
      children: "SelectionMenuOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menuonappearcallback12",
              children: "MenuOnAppearCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义选择菜单弹出时回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义选择菜单关闭时回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "menuType13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#menutype13%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "MenuType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义选择菜单类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 13开始，该接口支持在元服务中使用。  默认值：MenuType.SELECTION_MENU。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onMenuShow15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menucallback15",
              children: "MenuCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义选择菜单显示时回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onMenuHide15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#menucallback15",
              children: "MenuCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义选择菜单隐藏时回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "previewMenuOptions18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#previewmenuoptions18",
              children: "PreviewMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预览菜单的选项。该参数只在RichEditor中生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewmenuoptions18",
      children: "PreviewMenuOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预览菜单的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hapticFeedbackMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#hapticfeedbackmode18",
              children: "HapticFeedbackMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单弹出时振动效果，当ImageSpan或BuilderSpan绑定预览菜单时生效。  默认值：HapticFeedbackMode.DISABLED，菜单弹出时不振动。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 仅当应用具备ohos.permission.VIBRATE权限，且用户启用了触感反馈时才会生效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pasteevent11",
      children: "PasteEvent11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用户粘贴事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preventDefault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻止系统默认粘贴事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cutevent12",
      children: "CutEvent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用户剪切事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preventDefault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻止系统默认剪切事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "copyevent12",
      children: "CopyEvent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用户复制事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preventDefault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻止组件的默认复制操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorgesture11",
      children: "RichEditorGesture11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户手势事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onClick"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#clickevent",
              children: "ClickEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#clickevent",
              children: "ClickEvent"
            }), "为用户点击事件。  点击完成时回调事件。  双击时，第一次点击触发回调事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onLongPress"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GestureEvent"
            }), "为用户长按事件。  长按完成时回调事件。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "keyboardoptions12",
      children: "KeyboardOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义键盘是否支持避让功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportAvoidance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自定义键盘是否支持避让功能。默认值为 false，表示不支持避让；true 表示支持避让。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "submitcallback12",
      children: "SubmitCallback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "软键盘按下回车键时的回调事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enterKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#enterkeytype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "EnterKeyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘输入法回车键类型。具体类型见EnterKeyType枚举说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#submitevent11",
              children: "SubmitEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当提交的时候，提供保持组件编辑状态的方法。EnterKeyType指定为NEW_LINE时，默认保持编辑态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menuonappearcallback12",
      children: "MenuOnAppearCallback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type MenuOnAppearCallback = (start: number, end: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义选择菜单弹出时触发的回调事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中内容的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中内容的终止位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "menucallback15",
      children: "MenuCallback15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type MenuCallback = (start: number, end: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义选择菜单显示或隐藏时触发的回调事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中内容的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中内容的终止位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pasteeventcallback12",
      children: "PasteEventCallback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PasteEventCallback = (event?: PasteEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粘贴完成前，触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteevent11",
              children: "PasteEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用户粘贴事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onhovercallback14",
      children: "OnHoverCallback14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnHoverCallback = (status: boolean, event: HoverEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标悬浮触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示鼠标是否悬浮在组件上，鼠标进入组件时为true，离开组件时为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#hoverevent10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "HoverEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置悬浮事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditortextspan",
      children: "RichEditorTextSpan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本Span信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorspanposition",
              children: "RichEditorSpanPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本Span内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditortextstyle",
              children: "RichEditorTextStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本Span样式信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorimagespan",
      children: "RichEditorImageSpan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片Span信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spanPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorspanposition",
              children: "RichEditorSpanPosition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#richeditorimagespanstyle",
              children: "RichEditorImageSpanStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片样式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richeditorurlstyle19",
      children: "RichEditorUrlStyle19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Url信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "url地址。  默认值：undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1更新文本样式",
      children: "示例1（更新文本样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updatespanstyle",
        children: "updateSpanStyle"
      }), "接口更新已有文本样式，更改样式后，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getspans",
        children: "getSpans"
      }), "获取文本新的样式信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  private start: number = -1;\n  private end: number = -1;\n  @State message: string = \"[-1, -1]\";\n  @State content: string = \"\";\n\n  build() {\n    Column() {\n      Column() {\n        Text(\"selection range:\").width(\"100%\")\n        Text() {\n          Span(this.message)\n        }.width(\"100%\")\n        Text(\"selection content:\").width(\"100%\")\n        Text() {\n          Span(this.content)\n        }.width(\"100%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"20%\")\n\n      Row() {\n        Button(\"更新样式:加粗\").onClick(() => {\n          this.controller.updateSpanStyle({\n            start: this.start,\n            end: this.end,\n            textStyle:\n            {\n              fontWeight: FontWeight.Bolder\n            }\n          })\n        })\n        Button(\"获取选择内容\").onClick(() => {\n          this.content = \"\";\n          this.controller.getSpans({\n            start: this.start,\n            end: this.end\n          }).forEach(item => {\n            if(typeof(item as RichEditorImageSpanResult)['imageStyle'] != 'undefined'){\n              this.content += (item as RichEditorImageSpanResult).valueResourceStr;\n              this.content += \"\\n\";\n            } else {\n              if(typeof(item as RichEditorTextSpanResult)['symbolSpanStyle'] != 'undefined') {\n                this.content += (item as RichEditorTextSpanResult).symbolSpanStyle?.fontSize;\n                this.content += \"\\n\";\n              }else {\n                this.content += (item as RichEditorTextSpanResult).value;\n                this.content += \"\\n\";\n              }\n            }\n          })\n        })\n        Button(\"删除选择内容\").onClick(() => {\n          this.controller.deleteSpans({\n            start: this.start,\n            end: this.end\n          })\n          this.start = -1;\n          this.end = -1;\n          this.message = \"[\" + this.start + \", \" + this.end + \"]\";\n        })\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"10%\")\n\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan(\"012345\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30\n                }\n              })\n            this.controller.addSymbolSpan($r(\"sys.symbol.ohos_trash\"),\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"57px\", \"57px\"]\n                }\n              })\n            this.controller.addTextSpan(\"56789\",\n              {\n                style:\n                {\n                  fontColor: Color.Black,\n                  fontSize: 30\n                }\n              })\n          })\n          .onSelect((value: RichEditorSelection) => {\n            this.start = value.selection[0];\n            this.end = value.selection[1];\n            this.message = \"[\" + this.start + \", \" + this.end + \"]\";\n          })\n          .aboutToIMEInput((value: RichEditorInsertValue) => {\n            console.info(\"---------------------- aboutToIMEInput ----------------------\");\n            console.info(\"insertOffset:\" + value.insertOffset);\n            console.info(\"insertValue:\" + value.insertValue);\n            return true;\n          })\n          .onIMEInputComplete((value: RichEditorTextSpanResult) => {\n            console.info(\"---------------------- onIMEInputComplete ---------------------\");\n            console.info(\"spanIndex:\" + value.spanPosition.spanIndex);\n            console.info(\"spanRange:[\" + value.spanPosition.spanRange[0] + \",\" + value.spanPosition.spanRange[1] + \"]\");\n            console.info(\"offsetInSpan:[\" + value.offsetInSpan[0] + \",\" + value.offsetInSpan[1] + \"]\");\n            console.info(\"value:\" + value.value);\n          })\n          .aboutToDelete((value: RichEditorDeleteValue) => {\n            console.info(\"---------------------- aboutToDelete --------------------------\");\n            console.info(\"offset:\" + value.offset);\n            console.info(\"direction:\" + value.direction);\n            console.info(\"length:\" + value.length);\n            value.richEditorDeleteSpans.forEach(item => {\n              console.info(\"---------------------- item --------------------------\");\n              console.info(\"spanIndex:\" + item.spanPosition.spanIndex);\n              console.info(\"spanRange:[\" + item.spanPosition.spanRange[0] + \",\" + item.spanPosition.spanRange[1] + \"]\");\n              console.info(\"offsetInSpan:[\" + item.offsetInSpan[0] + \",\" + item.offsetInSpan[1] + \"]\");\n              if (typeof(item as RichEditorImageSpanResult)['imageStyle'] != 'undefined') {\n                console.info(\"image:\" + (item as RichEditorImageSpanResult).valueResourceStr);\n              } else {\n                console.info(\"text:\" + (item as RichEditorTextSpanResult).value);\n              }\n            })\n            return true;\n          })\n          .onDeleteComplete(() => {\n            console.info(\"---------------------- onDeleteComplete ------------------------\");\n          })\n          .placeholder(\"input...\", {\n            fontColor: Color.Gray,\n            font: {\n              size: 16,\n              weight: FontWeight.Normal,\n              family: \"HarmonyOS Sans\",\n              style: FontStyle.Normal\n            }\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"30%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29787)/* ["default"] */.A) + "",
        width: "512",
        height: "537"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2绑定自定义键盘",
      children: "示例2（绑定自定义键盘）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customkeyboard",
        children: "customKeyboard"
      }), "给组件绑定自定义键盘。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n\n  // 自定义键盘组件\n  @Builder\n  CustomKeyboardBuilder() {\n    Column() {\n      Grid() {\n        ForEach(['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'], (item: string) => {\n          GridItem() {\n            Button(item).width(110).onClick(() => {\n              this.controller.addTextSpan(item + '', {\n                offset: this.controller.getCaretOffset(),\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30\n                }\n              })\n            })\n          }\n        })\n      }.maxCount(3).columnsGap(10).rowsGap(10).padding(5)\n    }.backgroundColor(Color.Gray)\n  }\n\n  build() {\n    Column() {\n      RichEditor({ controller: this.controller })// 绑定自定义键盘\n        .customKeyboard(this.CustomKeyboardBuilder())\n        .border({ width: 1 })\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .margin(10)\n        .height(200)\n        .width(\"100%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(652022)/* ["default"] */.A) + "",
        width: "480",
        height: "900"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3绑定自定义菜单",
      children: "示例3（绑定自定义菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindselectionmenu",
        children: "bindSelectionMenu"
      }), "给组件绑定自定义菜单。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例中的粘贴菜单项涉及读取剪贴板数据，因此需按规范", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
        children: "申请访问剪贴板权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { BusinessError, pasteboard } from '@kit.BasicServicesKit';\n\nexport interface SelectionMenuTheme {\n  imageSize: number;\n  buttonSize: number;\n  menuSpacing: number;\n  editorOptionMargin: number;\n  expandedOptionPadding: number;\n  defaultMenuWidth: number;\n  imageFillColor: Resource;\n  backGroundColor: Resource;\n  iconBorderRadius: Resource;\n  containerBorderRadius: Resource;\n  cutIcon: Resource;\n  copyIcon: Resource;\n  pasteIcon: Resource;\n  selectAllIcon: Resource;\n  shareIcon: Resource;\n  translateIcon: Resource;\n  searchIcon: Resource;\n  arrowDownIcon: Resource;\n  iconPanelShadowStyle: ShadowStyle;\n  iconFocusBorderColor: Resource;\n}\n\nexport const defaultTheme: SelectionMenuTheme = {\n  imageSize: 24,\n  buttonSize: 48,\n  menuSpacing: 8,\n  editorOptionMargin: 1,\n  expandedOptionPadding: 3,\n  defaultMenuWidth: 256,\n  imageFillColor: $r('sys.color.ohos_id_color_primary'),\n  backGroundColor: $r('sys.color.ohos_id_color_dialog_bg'),\n  iconBorderRadius: $r('sys.float.ohos_id_corner_radius_default_m'),\n  containerBorderRadius: $r('sys.float.ohos_id_corner_radius_card'),\n  cutIcon: $r(\"sys.media.ohos_ic_public_cut\"),\n  copyIcon: $r(\"sys.media.ohos_ic_public_copy\"),\n  pasteIcon: $r(\"sys.media.ohos_ic_public_paste\"),\n  selectAllIcon: $r(\"sys.media.ohos_ic_public_select_all\"),\n  shareIcon: $r(\"sys.media.ohos_ic_public_share\"),\n  translateIcon: $r(\"sys.media.ohos_ic_public_translate_c2e\"),\n  searchIcon: $r(\"sys.media.ohos_ic_public_search_filled\"),\n  arrowDownIcon: $r(\"sys.media.ohos_ic_public_arrow_down\"),\n  iconPanelShadowStyle: ShadowStyle.OUTER_DEFAULT_MD,\n  iconFocusBorderColor: $r('sys.color.ohos_id_color_focused_outline')\n}\n\n@Entry\n@Component\nstruct SelectionMenu {\n  @State message: string = 'Hello World';\n  @State textSize: number = 40;\n  @State sliderShow: boolean = false;\n  @State start: number = -1;\n  @State end: number = -1;\n  @State colorTransparent: Color = Color.Transparent;\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n  private iconArr: Array<Resource> =\n    [$r('app.media.startIcon'), $r('app.media.startIcon'), $r('app.media.startIcon'),\n    $r('app.media.startIcon'), $r('app.media.startIcon')];\n  @State iconBgColor: ResourceColor[] = new Array(this.iconArr.length).fill(this.colorTransparent);\n  @State pasteEnable: boolean = false;\n  @State visibilityValue: Visibility = Visibility.Visible;\n  @State textStyle: RichEditorTextStyle = {};\n  private fontWeightTable: string[] = [\"100\", \"200\", \"300\", \"400\", \"500\", \"600\", \"700\", \"800\", \"900\", \"bold\", \"normal\", \"bolder\", \"lighter\", \"medium\", \"regular\"];\n  private theme: SelectionMenuTheme = defaultTheme;\n\n  aboutToAppear() {\n    if (this.controller) {\n      let richEditorSelection = this.controller.getSelection();\n      if (richEditorSelection) {\n        let start = richEditorSelection.selection[0];\n        let end = richEditorSelection.selection[1];\n        if (start === 0 && this.controller.getSpans({ start: end + 1, end: end + 1 }).length === 0) {\n          this.visibilityValue = Visibility.None;\n        } else {\n          this.visibilityValue = Visibility.Visible;\n        }\n      }\n    }\n    let sysBoard = pasteboard.getSystemPasteboard()\n    try {\n      if (sysBoard && sysBoard.hasDataSync()) {\n        this.pasteEnable = true\n      } else {\n        this.pasteEnable = false\n      }\n    } catch (err) {\n      console.error('Failed to check the PasteData. Cause:' + err.message)\n    }\n  }\n\n  build() {\n    Column() {\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan(this.message, { style: { fontColor: Color.Orange, fontSize: 30 } })\n          })\n          .onSelect((value: RichEditorSelection) => {\n            if (value.selection[0] == -1 && value.selection[1] == -1) {\n              return;\n            }\n            this.start = value.selection[0];\n            this.end = value.selection[1];\n          })\n          .bindSelectionMenu(RichEditorSpanType.TEXT, this.panel, ResponseType.LongPress, { onDisappear: () => {\n            this.sliderShow = false;\n          }})\n          .bindSelectionMenu(RichEditorSpanType.TEXT, this.panel, ResponseType.RightClick, { onDisappear: () => {\n            this.sliderShow = false;\n          }})\n          .bindSelectionMenu(RichEditorSpanType.IMAGE, this.panel, ResponseType.LongPress, {\n            menuType : MenuType.PREVIEW_MENU,\n            previewMenuOptions : {\n              hapticFeedbackMode : HapticFeedbackMode.ENABLED\n            }\n          })\n          .borderWidth(1)\n          .borderColor(Color.Red)\n          .width(200)\n          .height(200)\n      }.width('100%').backgroundColor(Color.White)\n    }.height('100%')\n  }\n\n  PushDataToPasteboard(richEditorSelection: RichEditorSelection) {\n    let sysBoard = pasteboard.getSystemPasteboard();\n    let pasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, '');\n    if (richEditorSelection.spans && richEditorSelection.spans.length > 0) {\n      let count = richEditorSelection.spans.length;\n      for (let i = count - 1; i >= 0; i--) {\n        let item = richEditorSelection.spans[i]\n        if ((item as RichEditorTextSpanResult)?.textStyle) {\n          let span = item as RichEditorTextSpanResult;\n          let style = span.textStyle;\n          let data = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_PLAIN, span.value.substring(span.offsetInSpan[0], span.offsetInSpan[1]));\n          let prop = pasteData.getProperty();\n          let temp: Record<string, Object> = {\n            'color': style.fontColor,\n            'size': style.fontSize,\n            'style': style.fontStyle,\n            'weight': this.fontWeightTable[style.fontWeight],\n            'fontFamily': style.fontFamily,\n            'decorationType': style.decoration.type,\n            'decorationColor': style.decoration.color\n          };\n          prop.additions[i] = temp;\n          pasteData.addRecord(data)\n          pasteData.setProperty(prop)\n        }\n      }\n    }\n    sysBoard.clearData()\n    sysBoard.setData(pasteData).then(() => {\n      console.info('SelectionMenu copy option, Succeeded in setting PasteData.');\n      this.pasteEnable = true;\n    }).catch((err: BusinessError) => {\n      console.error('SelectionMenu copy option, Failed to set PasteData. Cause:' + err.message);\n    })\n  }\n\n  PopDataFromPasteboard(richEditorSelection: RichEditorSelection) {\n    let start = richEditorSelection.selection[0];\n    let end = richEditorSelection.selection[1];\n    if (start == end && this.controller) {\n      start = this.controller.getCaretOffset();\n      end = this.controller.getCaretOffset();\n    }\n    let moveOffset = 0;\n    let sysBoard = pasteboard.getSystemPasteboard();\n    sysBoard.getData((err, data) => {\n      if (err) {\n        return;\n      }\n      let count = data.getRecordCount();\n      for (let i = 0; i < count; i++) {\n        const element = data.getRecord(i);\n        let tex: RichEditorTextStyle = {\n          fontSize: 16,\n          fontColor: Color.Black,\n          fontWeight: FontWeight.Normal,\n          fontFamily: \"HarmonyOS Sans\",\n          fontStyle: FontStyle.Normal,\n          decoration: { type: TextDecorationType.None, color: \"#FF000000\", style: TextDecorationStyle.SOLID }\n        }\n        if (data.getProperty() && data.getProperty().additions[i]) {\n          const tmp = data.getProperty().additions[i] as Record<string, Object | undefined>;\n          if (tmp.color) {\n            tex.fontColor = tmp.color as ResourceColor;\n          }\n          if (tmp.size) {\n            tex.fontSize = tmp.size as Length | number;\n          }\n          if (tmp.style) {\n            tex.fontStyle = tmp.style as FontStyle;\n          }\n          if (tmp.weight) {\n            tex.fontWeight = tmp.weight as number | FontWeight | string;\n          }\n          if (tmp.fontFamily) {\n            tex.fontFamily = tmp.fontFamily as ResourceStr;\n          }\n          if (tmp.decorationType && tex.decoration) {\n            tex.decoration.type = tmp.decorationType as TextDecorationType;\n          }\n          if (tmp.decorationColor && tex.decoration) {\n            tex.decoration.color = tmp.decorationColor as ResourceColor;\n          }\n          if (tex.decoration) {\n            tex.decoration = { type: tex.decoration.type, color: tex.decoration.color };\n          }\n        }\n        if (element && element.plainText && element.mimeType === pasteboard.MIMETYPE_TEXT_PLAIN && this.controller) {\n          this.controller.addTextSpan(element.plainText,\n            {\n              style: tex,\n              offset: start + moveOffset\n            }\n          )\n          moveOffset += element.plainText.length;\n        }\n      }\n      if (this.controller) {\n        this.controller.setCaretOffset(start + moveOffset)\n        this.controller.closeSelectionMenu()\n      }\n      if (start != end && this.controller) {\n        this.controller.deleteSpans({ start: start + moveOffset, end: end + moveOffset })\n      }\n    })\n  }\n\n  @Builder\n  panel() {\n    Column() {\n      this.iconPanel()\n      if (!this.sliderShow) {\n        this.SystemMenu()\n      } else {\n        this.sliderPanel()\n      }\n    }.width(256)\n  }\n\n  @Builder iconPanel() {\n    Column() {\n      Row({ space: 2 }) {\n        ForEach(this.iconArr, (item:Resource, index ?: number) => {\n          Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n            Image(item).fillColor(this.theme.imageFillColor).width(24).height(24).focusable(true).draggable(false)\n          }\n          .borderRadius(this.theme.iconBorderRadius)\n          .width(this.theme.buttonSize)\n          .height(this.theme.buttonSize)\n          .onClick(() => {\n            if (index as number == 0) {\n              this.sliderShow = false;\n              if (this.controller) {\n                let selection = this.controller.getSelection();\n                let spans = selection.spans;\n                spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n                  if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                    let span = item as RichEditorTextSpanResult;\n                    this.textStyle = span.textStyle;\n                    let start = span.offsetInSpan[0];\n                    let end = span.offsetInSpan[1];\n                    let offset = span.spanPosition.spanRange[0];\n                    if (this.textStyle.fontWeight != 11) {\n                      this.textStyle.fontWeight = FontWeight.Bolder;\n                    } else {\n                      this.textStyle.fontWeight = FontWeight.Normal;\n                    }\n                    this.controller.updateSpanStyle({\n                      start: offset + start,\n                      end: offset + end,\n                      textStyle: this.textStyle\n                    })\n                  }\n                })\n              }\n            } else if (index as number == 1) {\n              this.sliderShow = false;\n              if (this.controller) {\n                let selection = this.controller.getSelection();\n                let spans = selection.spans;\n                spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n                  if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                    let span = item as RichEditorTextSpanResult;\n                    this.textStyle = span.textStyle;\n                    let start = span.offsetInSpan[0];\n                    let end = span.offsetInSpan[1];\n                    let offset = span.spanPosition.spanRange[0];\n                    if (this.textStyle.fontStyle == FontStyle.Italic) {\n                      this.textStyle.fontStyle = FontStyle.Normal;\n                    } else {\n                      this.textStyle.fontStyle = FontStyle.Italic;\n                    }\n                    this.controller.updateSpanStyle({\n                      start: offset + start,\n                      end: offset + end,\n                      textStyle: this.textStyle\n                    })\n                  }\n                })\n              }\n            } else if (index as number == 2) {\n              this.sliderShow = false;\n              if (this.controller) {\n                let selection = this.controller.getSelection();\n                let spans = selection.spans;\n                spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n                  if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                    let span = item as RichEditorTextSpanResult;\n                    this.textStyle = span.textStyle;\n                    let start = span.offsetInSpan[0];\n                    let end = span.offsetInSpan[1];\n                    let offset = span.spanPosition.spanRange[0];\n                    if (this.textStyle.decoration) {\n                      if (this.textStyle.decoration.type == TextDecorationType.Underline) {\n                        this.textStyle.decoration.type = TextDecorationType.None;\n                      } else {\n                        this.textStyle.decoration.type = TextDecorationType.Underline;\n                      }\n                    } else {\n                      this.textStyle.decoration = { type: TextDecorationType.Underline, color: Color.Black, style: TextDecorationStyle.SOLID };\n                    }\n                    this.controller.updateSpanStyle({\n                      start: offset + start,\n                      end: offset + end,\n                      textStyle: this.textStyle\n                    })\n                  }\n                })\n              }\n            } else if (index as number == 3) {\n              this.sliderShow = !this.sliderShow;\n            } else if (index as number == 4) {\n              this.sliderShow = false;\n              if (this.controller) {\n                let selection = this.controller.getSelection();\n                let spans = selection.spans;\n                spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n                  if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                    let span = item as RichEditorTextSpanResult;\n                    this.textStyle = span.textStyle;\n                    let start = span.offsetInSpan[0];\n                    let end = span.offsetInSpan[1];\n                    let offset = span.spanPosition.spanRange[0];\n                    if (this.textStyle.fontColor == Color.Orange || this.textStyle.fontColor == '#FFFFA500') {\n                      this.textStyle.fontColor = Color.Black;\n                    } else {\n                      this.textStyle.fontColor = Color.Orange;\n                    }\n                    this.controller.updateSpanStyle({\n                      start: offset + start,\n                      end: offset + end,\n                      textStyle: this.textStyle\n                    })\n                  }\n                })\n              }\n            }\n          })\n          .onTouch((event?: TouchEvent | undefined) => {\n            if(event != undefined){\n              if (event.type === TouchType.Down) {\n                this.iconBgColor[index as number] = $r('sys.color.ohos_id_color_click_effect');\n              }\n              if (event.type === TouchType.Up) {\n                this.iconBgColor[index as number] = this.colorTransparent;\n              }\n            }\n          })\n          .onHover((isHover?: boolean, event?: HoverEvent) => {\n            this.iconBgColor.forEach((icon:ResourceColor, index1) => {\n              this.iconBgColor[index1] = this.colorTransparent;\n            })\n            if(isHover != undefined) {\n              this.iconBgColor[index as number] = $r('sys.color.ohos_id_color_hover');\n            }\n          })\n          .backgroundColor(this.iconBgColor[index as number])\n        })\n      }\n    }\n    .clip(true)\n    .width(this.theme.defaultMenuWidth)\n    .padding(this.theme.expandedOptionPadding)\n    .borderRadius(this.theme.containerBorderRadius)\n    .margin({ bottom: this.theme.menuSpacing })\n    .backgroundColor(this.theme.backGroundColor)\n    .shadow(this.theme.iconPanelShadowStyle)\n  }\n\n  @Builder\n  SystemMenu() {\n    Column() {\n      Menu() {\n        if (this.controller) {\n          MenuItemGroup() {\n            MenuItem({ startIcon: this.theme.cutIcon, content: \"剪切\", labelInfo: \"Ctrl+X\" })\n              .onClick(() => {\n                if (!this.controller) {\n                  return\n                }\n                let richEditorSelection = this.controller.getSelection();\n                this.PushDataToPasteboard(richEditorSelection);\n                this.controller.deleteSpans({\n                  start: richEditorSelection.selection[0],\n                  end: richEditorSelection.selection[1]\n                })\n              })\n            MenuItem({ startIcon: this.theme.copyIcon, content: \"复制\", labelInfo: \"Ctrl+C\" })\n              .onClick(() => {\n                if (!this.controller) {\n                  return;\n                }\n                let richEditorSelection = this.controller.getSelection();\n                this.PushDataToPasteboard(richEditorSelection)\n                this.controller.closeSelectionMenu()\n              })\n            MenuItem({ startIcon: this.theme.pasteIcon, content: \"粘贴\", labelInfo: \"Ctrl+V\" })\n              .enabled(this.pasteEnable)\n              .onClick(() => {\n                if (!this.controller) {\n                  return;\n                }\n                let richEditorSelection = this.controller.getSelection();\n                this.PopDataFromPasteboard(richEditorSelection)\n              })\n            MenuItem({ startIcon: this.theme.selectAllIcon, content: \"全选\", labelInfo: \"Ctrl+A\" })\n              .visibility(this.visibilityValue)\n              .onClick(() => {\n                if (!this.controller) {\n                  return;\n                }\n                this.controller.setSelection(-1, -1)\n                this.visibilityValue = Visibility.None;\n              })\n            MenuItem({ startIcon: this.theme.shareIcon, content: \"分享\", labelInfo: \"\" })\n              .enabled(false)\n            MenuItem({ startIcon: this.theme.translateIcon, content: \"翻译\", labelInfo: \"\" })\n              .enabled(false)\n            MenuItem({ startIcon: this.theme.searchIcon, content: \"搜索\", labelInfo: \"\" })\n              .enabled(false)\n          }\n        }\n      }\n      .onVisibleAreaChange([0.0, 1.0], () => {\n        if (!this.controller) {\n          return;\n        }\n        let richEditorSelection = this.controller.getSelection();\n        let start = richEditorSelection.selection[0];\n        let end = richEditorSelection.selection[1];\n        if (start === 0 && this.controller.getSpans({ start: end + 1, end: end + 1 }).length === 0) {\n          this.visibilityValue = Visibility.None;\n        } else {\n          this.visibilityValue = Visibility.Visible;\n        }\n      })\n      .radius(this.theme.containerBorderRadius)\n      .clip(true)\n      .backgroundColor(Color.White)\n      .width(this.theme.defaultMenuWidth)\n    }\n    .width(this.theme.defaultMenuWidth)\n  }\n\n  @Builder sliderPanel() {\n    Column() {\n      Flex({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n        Text('A').fontSize(15)\n        Slider({ value: this.textSize, step: 10, style: SliderStyle.InSet })\n          .width(210)\n          .onChange((value: number, mode: SliderChangeMode) => {\n            if (this.controller) {\n              let selection = this.controller.getSelection();\n              if (mode == SliderChangeMode.End) {\n                if (this.textSize == undefined) {\n                  this.textSize = 0;\n                }\n                let spans = selection.spans;\n                spans.forEach((item: RichEditorTextSpanResult | RichEditorImageSpanResult, index) => {\n                  if (typeof (item as RichEditorTextSpanResult)['textStyle'] != 'undefined') {\n                    this.textSize = Math.max(this.textSize, (item as RichEditorTextSpanResult).textStyle.fontSize);\n                  }\n                })\n              }\n              if (mode == SliderChangeMode.Moving || mode == SliderChangeMode.Click) {\n                this.start = selection.selection[0];\n                this.end = selection.selection[1];\n                this.textSize = value;\n                this.controller.updateSpanStyle({\n                  start: this.start,\n                  end: this.end,\n                  textStyle: { fontSize: this.textSize }\n                })\n              }\n            }\n          })\n        Text('A').fontSize(20).fontWeight(FontWeight.Medium)\n      }.borderRadius(this.theme.containerBorderRadius)\n    }\n    .shadow(ShadowStyle.OUTER_DEFAULT_MD)\n    .backgroundColor(Color.White)\n    .borderRadius(this.theme.containerBorderRadius)\n    .padding(15)\n    .height(48)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(354800)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统暂未预置加粗、斜体等图标，示例代码使用系统默认图标，开发者使用时需自行替换iconArr中的资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(31698)/* ["default"] */.A) + "",
        width: "537",
        height: "625"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4更新图片样式",
      children: "示例4（更新图片样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updatespanstyle",
        children: "updateSpanStyle"
      }), "接口更新图片样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  private start: number = -1;\n  private end: number = -1;\n  @State message: string = \"[-1, -1]\";\n  @State content: string = \"\";\n  @State paddingVal: number = 5;\n  @State borderRad: number = 4;\n\n  build() {\n    Column() {\n      Column() {\n        Text(\"selection range:\").width(\"100%\")\n        Text() {\n          Span(this.message)\n        }.width(\"100%\")\n        Text(\"selection content:\").width(\"100%\")\n        Text() {\n          Span(this.content)\n        }.width(\"100%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"20%\")\n\n      Row() {\n        Button(\"updateSpanStyle1\")\n          .fontSize(12)\n          .onClick(() => {\n            this.controller.updateSpanStyle({\n              start: this.start,\n              textStyle:\n              {\n                fontWeight: FontWeight.Bolder,\n                fontSize:15\n              },\n              imageStyle: {\n                size: [\"80px\", \"80px\"],\n                layoutStyle: {\n                  borderRadius: undefined,\n                  margin: undefined\n                }\n              }\n            })\n          })\n\n        Button(\"updateSpanStyle2\")\n          .fontSize(12)\n          .onClick(() => {\n            this.controller.updateSpanStyle({\n              start: this.start,\n              textStyle:\n              {\n                fontWeight: FontWeight.Bolder,\n                fontSize:15\n              },\n              imageStyle: {\n                size: [\"70px\", \"70px\"],\n                layoutStyle: {\n                  borderRadius: { topLeft: '100px', topRight: '20px', bottomLeft: '100px', bottomRight: '20px' },\n                  margin: { left: '30px', top: '20px', right: '20px', bottom: '20px' }\n                }\n              }\n            })\n          })\n\n        Button(\"updateSpanStyle3\")\n          .fontSize(12)\n          .onClick(() => {\n            this.controller.updateSpanStyle({\n              start: this.start,\n              textStyle:\n              {\n                fontWeight: FontWeight.Bolder,\n                fontSize:15\n              },\n              imageStyle: {\n                size: [\"60px\", \"60px\"],\n                layoutStyle: {\n                  borderRadius: '-10px',\n                  margin: '-10px'\n                }\n              }\n            })\n          })\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"10%\")\n\n      Row() {\n        Button('addImageSpan1')\n          .fontSize(12)\n          .onClick(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'), {\n              imageStyle: {\n                size: [\"80px\", \"80px\"],\n                layoutStyle: {\n                  borderRadius: '50px',\n                  margin: '40px'\n                }\n              }\n            })\n          })\n\n        Button('addImageSpan2')\n          .fontSize(12)\n          .onClick(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'), {\n              imageStyle: {\n                size: [\"100px\", \"100px\"],\n                verticalAlign: ImageSpanAlignment.BOTTOM,\n                layoutStyle: {\n                  borderRadius: undefined,\n                  margin: undefined\n                }\n              }\n            })\n          })\n\n        Button('addImageSpan3')\n          .fontSize(12)\n          .onClick(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'), {\n              imageStyle: {\n                size: [\"60px\", \"60px\"],\n                verticalAlign: ImageSpanAlignment.BOTTOM,\n                layoutStyle: {\n                  borderRadius: { topLeft: '10px', topRight: '20px', bottomLeft: '30px', bottomRight: '40px' },\n                  margin: { left: '10px', top: '20px', right: '30px', bottom: '40px' }\n                }\n              }\n            })\n          })\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"10%\")\n\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan(\"0123456789\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30\n                }\n              })\n\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"60px\", \"60px\"],\n                  verticalAlign: ImageSpanAlignment.BOTTOM,\n                  layoutStyle: {\n                    borderRadius: { topLeft: '10px', topRight: '20px', bottomLeft: '30px', bottomRight: '40px' },\n                    margin: { left: '10px', top: '20px', right: '30px', bottom: '40px' }\n                  }\n                }\n              })\n\n            this.controller.addTextSpan(\"0123456789\",\n              {\n                style:\n                {\n                  fontColor: Color.Black,\n                  fontSize: 30\n                }\n              })\n          })\n          .onSelect((value: RichEditorSelection) => {\n            this.start = value.selection[0];\n            this.end = value.selection[1];\n            this.message = \"[\" + this.start + \", \" + this.end + \"]\";\n          })\n          .aboutToIMEInput((value: RichEditorInsertValue) => {\n            console.info(\"---------------------- aboutToIMEInput ----------------------\");\n            console.info(\"insertOffset:\" + value.insertOffset);\n            console.info(\"insertValue:\" + value.insertValue);\n            return true;\n          })\n          .onIMEInputComplete((value: RichEditorTextSpanResult) => {\n            console.info(\"---------------------- onIMEInputComplete ---------------------\");\n            console.info(\"spanIndex:\" + value.spanPosition.spanIndex);\n            console.info(\"spanRange:[\" + value.spanPosition.spanRange[0] + \",\" + value.spanPosition.spanRange[1] + \"]\");\n            console.info(\"offsetInSpan:[\" + value.offsetInSpan[0] + \",\" + value.offsetInSpan[1] + \"]\");\n            console.info(\"value:\" + value.value);\n          })\n          .aboutToDelete((value: RichEditorDeleteValue) => {\n            console.info(\"---------------------- aboutToDelete --------------------------\");\n            console.info(\"offset:\" + value.offset);\n            console.info(\"direction:\" + value.direction);\n            console.info(\"length:\" + value.length);\n            value.richEditorDeleteSpans.forEach(item => {\n              console.info(\"---------------------- item --------------------------\");\n              console.info(\"spanIndex:\" + item.spanPosition.spanIndex);\n              console.info(\"spanRange:[\" + item.spanPosition.spanRange[0] + \",\" + item.spanPosition.spanRange[1] + \"]\");\n              console.info(\"offsetInSpan:[\" + item.offsetInSpan[0] + \",\" + item.offsetInSpan[1] + \"]\");\n              if (typeof (item as RichEditorImageSpanResult)['imageStyle'] != 'undefined') {\n                console.info(\"image:\" + (item as RichEditorImageSpanResult).valueResourceStr);\n              } else {\n                console.info(\"text:\" + (item as RichEditorTextSpanResult).value);\n              }\n            })\n            return true;\n          })\n          .onDeleteComplete(() => {\n            console.info(\"---------------------- onDeleteComplete ------------------------\");\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height('80.00%')\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(807916)/* ["default"] */.A) + "",
        width: "451",
        height: "458"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5span绑定手势事件",
      children: "示例5（Span绑定手势事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为Span绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorgesture11",
        children: "gesture"
      }), "回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State textFlag: string = \"TextFlag\";\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.textFlag)\n          .copyOption(CopyOptions.InApp)\n          .fontSize(50)\n          .height(150)\n      }\n      Divider()\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan('Area1\\n', {\n              style:\n              {\n                fontColor: Color.Orange,\n                fontSize: 50,\n              },\n              gesture:\n              {\n                onClick: () => {\n                  this.textFlag = \"Area1 is onClick.\";\n                },\n                onLongPress: () => {\n                  this.textFlag = \"Area1 is onLongPress.\";\n                }\n              }\n            })\n\n            this.controller.addTextSpan('Area2\\n', {\n              style:\n              {\n                fontColor: Color.Blue,\n                fontSize: 50\n              },\n              gesture:\n              {\n                onClick: () => {\n                  this.textFlag = \"Area2 is onClick.\";\n                },\n                onLongPress: () => {\n                  this.textFlag = \"Area2 is onLongPress.\";\n                }\n              }\n            })\n\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"100px\", \"100px\"],\n                  layoutStyle: {\n                    margin: 5,\n                    borderRadius: 15\n                  }\n                },\n                gesture:\n                {\n                  onClick: () => {\n                    this.textFlag = \"ImageSpan is onClick.\";\n                  },\n                  onLongPress: () => {\n                    this.textFlag = \"ImageSpan is onLongPress.\";\n                  }\n                },\n                onHover : (status) => {\n                  this.textFlag = \"ImageSpan is onHover :\" + status;\n                }\n              })\n          })\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(232641)/* ["default"] */.A) + "",
        width: "432",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6更新和获取段落样式",
      children: "示例6（更新和获取段落样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updateparagraphstyle11",
        children: "updateParagraphStyle"
      }), "接口更新段落样式，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getparagraphs11",
        children: "getParagraphs"
      }), "接口获取指定范围段落的信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  private spanParagraphs: RichEditorParagraphResult[] = [];\n\n  build() {\n    Column() {\n      RichEditor({ controller: this.controller })\n        .onReady(() => {\n          this.controller.addTextSpan(\"0123456789\\n\", {\n            style: {\n              fontColor: Color.Pink,\n              fontSize: \"32\"\n            },\n            paragraphStyle: {\n              textAlign: TextAlign.Start,\n              textVerticalAlign: TextVerticalAlign.BASELINE,\n              leadingMargin: 16\n            }\n          })\n          this.controller.addTextSpan(\"0123456789\")\n        })\n        .width(\"80%\")\n        .height(\"30%\")\n        .border({ width: 1, radius: 5 })\n        .draggable(false)\n\n      Column({ space: 5 }) {\n        Button(\"段落左对齐\").onClick(() => {\n          this.controller.updateParagraphStyle({ start: -1, end: -1,\n            style: {\n              textAlign: TextAlign.Start\n            }\n          })\n        })\n\n        Button(\"段落右对齐\").onClick(() => {\n          this.controller.updateParagraphStyle({ start: -1, end: -1,\n            style: {\n              textAlign: TextAlign.End\n            }\n          })\n        })\n\n        Button(\"段落居中\").onClick(() => {\n          this.controller.updateParagraphStyle({ start: -1, end: -1,\n            style: {\n              textAlign: TextAlign.Center\n            }\n          })\n        })\n\n        Button(\"段落间距设置50\").onClick(() => {\n          this.controller.updateParagraphStyle({ start: -1, end: -1,\n            style: {\n              paragraphSpacing: 50\n            }\n          })\n        })\n        Divider()\n        Button(\"getParagraphs\").onClick(() => {\n          this.spanParagraphs = this.controller.getParagraphs({ start: -1, end: -1 });\n          console.info(\"RichEditor getParagraphs:\" + JSON.stringify(this.spanParagraphs));\n        })\n\n        Button(\"UpdateSpanStyle1\").onClick(() => {\n          this.controller.updateSpanStyle({ start: -1, end: -1,\n            textStyle: {\n              fontColor: Color.Brown,\n              fontSize: 20\n            }\n          })\n        })\n\n        Button(\"UpdateSpanStyle2\").onClick(() => {\n          this.controller.updateSpanStyle({ start: -1, end: -1,\n            textStyle: {\n              fontColor: Color.Green,\n              fontSize: 30\n            }\n          })\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(657849)/* ["default"] */.A) + "",
        width: "364",
        height: "604"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7更新预设样式与缩进",
      children: "示例7（更新预设样式与缩进）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#settypingstyle11",
        children: "setTypingStyle"
      }), "接口更新文本预设样式，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updateparagraphstyle11",
        children: "updateParagraphStyle"
      }), "接口设置段落缩进。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\nconst canvasWidth = 1000;\nconst canvasHeight = 100;\nconst Indentation = 40;\nclass LeadingMarginCreator {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private offscreenCanvas: OffscreenCanvas = new OffscreenCanvas(canvasWidth, canvasHeight);\n  private offContext: OffscreenCanvasRenderingContext2D = this.offscreenCanvas.getContext(\"2d\", this.settings);\n  public static instance: LeadingMarginCreator = new LeadingMarginCreator();\n\n  // 获得字体字号级别，分别是从0到4级\n  public getFontSizeLevel(fontSize: number) {\n    const fontScaled: number = Number(fontSize) / 16;\n\n    enum FontSizeScaleThreshold {\n      SMALL = 0.9,\n      NORMAL = 1.1,\n      LEVEL_1_LARGE = 1.2,\n      LEVEL_2_LARGE = 1.4,\n      LEVEL_3_LARGE = 1.5\n    }\n\n    let fontSizeLevel: number = 1;\n\n    if (fontScaled < FontSizeScaleThreshold.SMALL) {\n      fontSizeLevel = 0;\n    } else if (fontScaled < FontSizeScaleThreshold.NORMAL) {\n      fontSizeLevel = 1;\n    } else if (fontScaled < FontSizeScaleThreshold.LEVEL_1_LARGE) {\n      fontSizeLevel = 2;\n    } else if (fontScaled < FontSizeScaleThreshold.LEVEL_2_LARGE) {\n      fontSizeLevel = 3;\n    } else if (fontScaled < FontSizeScaleThreshold.LEVEL_3_LARGE) {\n      fontSizeLevel = 4;\n    } else {\n      fontSizeLevel = 1;\n    }\n\n    return fontSizeLevel;\n  }\n  // 获得字体字号级别，分别是从0到4级\n  public getmarginLevel(Width: number) {\n    let marginlevel: number = 1;\n    if (Width == 40) {\n      marginlevel = 2.0;\n    } else if (Width == 80) {\n      marginlevel = 1.0;\n    } else if (Width == 120) {\n      marginlevel = 2/3;\n    } else if (Width == 160) {\n      marginlevel = 0.5;\n    } else if (Width == 200) {\n      marginlevel = 0.4;\n    }\n    return marginlevel;\n  }\n\n  public genStrMark(fontSize: number, str: string): PixelMap {\n    this.offContext = this.offscreenCanvas.getContext(\"2d\", this.settings);\n    this.clearCanvas()\n    this.offContext.font = fontSize + 'vp sans-serif';\n    this.offContext.fillText(str + '.', 0, fontSize * 0.9)\n    return this.offContext.getPixelMap(0, 0, fontSize * (str.length + 1) / 1.75, fontSize)\n  }\n\n  public genSquareMark(fontSize: number): PixelMap {\n    this.offContext = this.offscreenCanvas.getContext(\"2d\", this.settings);\n    this.clearCanvas()\n    const coordinate = fontSize * (1 - 1 / 1.5) / 2;\n    const sideLength = fontSize / 1.5;\n    this.offContext.fillRect(coordinate, coordinate, sideLength, sideLength)\n    return this.offContext.getPixelMap(0, 0, fontSize, fontSize)\n  }\n\n  // 生成圆圈符号\n  public genCircleMark(fontSize: number, width: number, level?: number ): PixelMap {\n    const indentLevel = level ?? 1;\n    const offsetLevel = [22, 28, 32, 34, 38];\n    const fontSizeLevel = this.getFontSizeLevel(fontSize);\n    const marginlevel = this.getmarginLevel(width);\n    const newCanvas = new OffscreenCanvas(canvasWidth, canvasHeight);\n    const newOffContext: OffscreenCanvasRenderingContext2D = newCanvas.getContext(\"2d\", this.settings);\n    const centerCoordinate = 50;\n    const radius = 10;\n    this.clearCanvas()\n    newOffContext.ellipse(100 * (indentLevel + 1) - centerCoordinate * marginlevel, offsetLevel[fontSizeLevel], radius * marginlevel, radius, 0, 0, 2 * Math.PI)\n    newOffContext.fillStyle = '66FF0000';\n    newOffContext.fill()\n    return newOffContext.getPixelMap(0, 0, 100 + 100 * indentLevel, 100)\n  }\n\n  private clearCanvas() {\n    this.offContext.clearRect(0, 0, canvasWidth, canvasHeight)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  private leadingMarkCreatorInstance = LeadingMarginCreator.instance;\n  private fontNameRawFile: string = 'MiSans-Bold';\n  @State fs: number = 30;\n  @State cl: number = Color.Black;\n  private leftMargin: Dimension = 0;\n  private richEditorTextStyle: RichEditorTextStyle = {};\n\n  aboutToAppear() {\n    this.getUIContext().getFont().registerFont({\n      familyName: 'MiSans-Bold',\n      familySrc: '/font/MiSans-Bold.ttf'\n    })\n  }\n\n  build() {\n    Scroll() {\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan(\"0123456789\\n\",\n              {\n                style:\n                {\n                  fontWeight: 'medium',\n                  fontFamily: this.fontNameRawFile,\n                  fontColor: Color.Red,\n                  fontSize: 50,\n                  fontStyle: FontStyle.Italic,\n                  decoration: { type: TextDecorationType.Underline, color: Color.Green }\n                }\n              })\n\n            this.controller.addTextSpan(\"abcdefg\",\n              {\n                style:\n                {\n                  fontWeight: FontWeight.Lighter,\n                  fontFamily: 'HarmonyOS Sans',\n                  fontColor: 'rgba(0,128,0,0.5)',\n                  fontSize: 30,\n                  fontStyle: FontStyle.Normal,\n                  decoration: { type: TextDecorationType.Overline, color: 'rgba(169, 26, 246, 0.50)' }\n                }\n              })\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"50%\")\n\n        Row({ space: 5 }) {\n          Button('setTypingStyle1')\n            .fontSize(10)\n            .onClick(() => {\n              this.controller.setTypingStyle(\n                {\n                  fontWeight: 'medium',\n                  fontFamily: this.fontNameRawFile,\n                  fontColor: Color.Blue,\n                  fontSize: 50,\n                  fontStyle: FontStyle.Italic,\n                  decoration: { type: TextDecorationType.Underline, color: Color.Green }\n                })\n            })\n\n          Button('setTypingStyle2')\n            .fontSize(10)\n            .onClick(() => {\n              this.controller.setTypingStyle(\n                {\n                  fontWeight: FontWeight.Lighter,\n                  fontFamily: 'HarmonyOS Sans',\n                  fontColor: Color.Green,\n                  fontSize: '30',\n                  fontStyle: FontStyle.Normal,\n                  decoration: { type: TextDecorationType.Overline, color: 'rgba(169, 26, 246, 0.50)' }\n                })\n            })\n        }\n        Divider()\n        Button(\"getTypingStyle\").onClick(() => {\n          this.richEditorTextStyle = this.controller.getTypingStyle();\n          console.info(\"RichEditor getTypingStyle:\" + JSON.stringify(this.richEditorTextStyle));\n        })\n        Divider()\n        Row({ space: 5 }) {\n          Button(\"向右列表缩进\").onClick(() => {\n            let margin = Number(this.leftMargin);\n            if (margin < 200) {\n              margin += Indentation;\n              this.leftMargin = margin;\n            }\n            this.controller.updateParagraphStyle({\n              start: -10,\n              end: -10,\n              style: {\n                leadingMargin : {\n                  pixelMap : this.leadingMarkCreatorInstance.genCircleMark(100, margin, 1),\n                  size: [margin, 40]\n                }\n              }\n            })\n          })\n\n          Button(\"向左列表缩进\").onClick(() => {\n            let margin = Number(this.leftMargin);\n            if (margin > 0) {\n              margin -= Indentation;\n              this.leftMargin = margin;\n            }\n            this.controller.updateParagraphStyle({\n              start: -10,\n              end: -10,\n              style: {\n                leadingMargin : {\n                  pixelMap : this.leadingMarkCreatorInstance.genCircleMark(100, margin, 1),\n                  size: [margin, 40]\n                }\n              }\n            })\n          })\n        }\n        Divider()\n        Row({ space: 5 }) {\n          Button(\"向右空白缩进\").onClick(() => {\n            let margin = Number(this.leftMargin);\n            if (margin < 200) {\n              margin += Indentation;\n              this.leftMargin = margin;\n            }\n            this.controller.updateParagraphStyle({\n              start: -10,\n              end: -10,\n              style: {\n                leadingMargin: margin\n              }\n            })\n          })\n\n          Button(\"向左空白缩进\").onClick(() => {\n            let margin = Number(this.leftMargin)\n            if (margin > 0) {\n              margin -= Indentation;\n              this.leftMargin = margin;\n            }\n            this.controller.updateParagraphStyle({\n              start: -10,\n              end: -10,\n              style: {\n                leadingMargin: margin\n              }\n            })\n          })\n        }\n      }.borderWidth(1).borderColor(Color.Red)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(735681)/* ["default"] */.A) + "",
        width: "394",
        height: "502"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置文本字重与阴影",
      children: "示例8（设置文本字重与阴影）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updateparagraphstyle11",
        children: "updateParagraphStyle"
      }), "接口设置文本字重与阴影。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  private start: number = -1;\n  private end: number = -1;\n  @State message: string = \"[-1, -1]\"\n  @State content: string = \"\"\n  @State textShadows : Array<ShadowOptions> = [\n    { radius: 10, color: Color.Red, offsetX: 10, offsetY: 0 },\n    { radius: 10, color: Color.Black, offsetX: 20, offsetY: 0 },\n    { radius: 10, color: Color.Brown, offsetX: 30, offsetY: 0 },\n    { radius: 10, color: Color.Green, offsetX: 40, offsetY: 0 },\n    { radius: 10, color: Color.Yellow, offsetX: 100, offsetY: 0 }\n  ];\n\n  build() {\n    Column() {\n      Column() {\n        Text(\"selection range:\").width(\"100%\")\n        Text() {\n          Span(this.message)\n        }.width(\"100%\")\n        Text(\"selection content:\").width(\"100%\")\n        Text() {\n          Span(this.content)\n        }.width(\"100%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"20%\")\n      Row() {\n        Button(\"更新样式: 加粗 & 文本阴影\").onClick(() => {\n          this.controller.updateSpanStyle({\n            start: this.start,\n            end: this.end,\n            textStyle:\n            {\n              fontWeight: FontWeight.Bolder,\n              textShadow: this.textShadows\n            }\n          })\n        })\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"10%\")\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan(\"0123456789\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30,\n                  textShadow: { radius: 10, color: Color.Blue, offsetX: 10, offsetY: 0 }\n                }\n              })\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"30%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(199448)/* ["default"] */.A) + "",
        width: "451",
        height: "349"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9添加用户自定义布局span",
      children: "示例9（添加用户自定义布局Span）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addbuilderspan11",
        children: "addBuilderSpan"
      }), "接口添加用户自定义布局Span。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction placeholderBuilder2() {\n  Row({ space: 2 }) {\n    // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n    Image($r('app.media.startIcon')).width(24).height(24).margin({ left: -5 })\n    Text('okokokok').fontSize(10)\n  }.width('20%').height(50).padding(10).backgroundColor(Color.Red)\n}\n\n// xxx.ets\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  option: RichEditorOptions = { controller: this.controller };\n  private start: number = 2;\n  private end: number = 4;\n  @State message: string = \"[-1, -1]\";\n  @State content: string = \"\";\n  private my_offset: number | undefined = undefined;\n  private my_builder: CustomBuilder = undefined;\n  @BuilderParam my_builder2:() => void = placeholderBuilder2;\n\n  @Builder\n  placeholderBuilder() {\n    Row({ space: 2 }) {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.startIcon')).width(24).height(24).margin({ left: -5 })\n      Text('Custom Popup').fontSize(10)\n    }.width(100).height(50).padding(5)\n  }\n\n  @Builder\n  placeholderBuilder3() {\n    Text(\"hello\").padding('20').borderWidth(1).width('100%')\n  }\n\n  @Builder\n  placeholderBuilder4() {\n    Column() {\n      Column({ space: 5 }) {\n        Text('direction:Row').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.Row }) { // 子组件在容器主抽上行布局\n          Text('1').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(50).backgroundColor(0xD2B48C)\n          Text('1').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(50).backgroundColor(0xD2B48C)\n        }\n        .height(70)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('direction:RowReverse').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.RowReverse }) { // 子组件在容器主抽上反向行布局\n          Text('1').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(50).backgroundColor(0xD2B48C)\n          Text('1').width('20%').height(50).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(50).backgroundColor(0xD2B48C)\n        }\n        .height(70)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('direction:Column').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.Column }) { // 子组件在容器主抽上列布局\n          Text('1').width('20%').height(40).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(40).backgroundColor(0xD2B48C)\n          Text('1').width('20%').height(40).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(40).backgroundColor(0xD2B48C)\n        }\n        .height(160)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n\n        Text('direction:ColumnReverse').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Flex({ direction: FlexDirection.ColumnReverse }) { // 子组件在容器主抽上反向列布局\n          Text('1').width('20%').height(40).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(40).backgroundColor(0xD2B48C)\n          Text('1').width('20%').height(40).backgroundColor(0xF5DEB3)\n          Text('1').width('20%').height(40).backgroundColor(0xD2B48C)\n        }\n        .height(160)\n        .width('90%')\n        .padding(10)\n        .backgroundColor(0xAFEEEE)\n      }.width('100%').margin({ top: 5 })\n    }.width('100%')\n  }\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      MenuItem({ startIcon: $r('app.media.startIcon'), content: \"菜单选项1\" })\n      MenuItem({ startIcon: $r('app.media.startIcon'), content: \"菜单选项2\" })\n        .enabled(false)\n    }\n  }\n\n  build() {\n    Column() {\n      Column() {\n        Text(\"selection range:\").width(\"100%\")\n        Text() {\n          Span(this.message)\n        }.width(\"100%\")\n\n        Text(\"selection content:\").width(\"100%\")\n        Text() {\n          Span(this.content)\n        }.width(\"100%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"20%\")\n\n      Row() {\n        Button(\"获取选择内容 getSpans\").onClick(() => {\n          console.info('getSpans='+JSON.stringify(this.controller.getSpans({ start:1, end:5 })));\n          console.info('getParagraphs='+JSON.stringify(this.controller.getParagraphs({ start:1, end:5 })));\n          this.content = \"\";\n          this.controller.getSpans({\n            start: this.start,\n            end: this.end\n          }).forEach(item => {\n            if (typeof (item as RichEditorImageSpanResult)['imageStyle'] != 'undefined') {\n              if ((item as RichEditorImageSpanResult).valueResourceStr == \"\") {\n                console.info(\"builder span index \" + (item as RichEditorImageSpanResult).spanPosition.spanIndex + \", range : \" + (item as RichEditorImageSpanResult).offsetInSpan[0] + \", \" +\n                  (item as RichEditorImageSpanResult).offsetInSpan[1] + \", size : \" + (item as RichEditorImageSpanResult).imageStyle[0] + \", \" + (item as RichEditorImageSpanResult).imageStyle[1])\n              } else {\n                console.info(\"image span \" + (item as RichEditorImageSpanResult).valueResourceStr + \", index : \" + (item as RichEditorImageSpanResult).spanPosition.spanIndex + \", range: \" +\n                  (item as RichEditorImageSpanResult).offsetInSpan[0] + \", \" + (item as RichEditorImageSpanResult).offsetInSpan[1] + \", size : \" +\n                  (item as RichEditorImageSpanResult).imageStyle.size[0] + \", \" + (item as RichEditorImageSpanResult).imageStyle.size[1])\n              }\n            } else {\n              this.content += (item as RichEditorTextSpanResult).value;\n              this.content += \"\\n\";\n              console.info(\"text span: \" + (item as RichEditorTextSpanResult).value);\n            }\n          })\n        })\n        Button(\"获取选择内容 getSelection\").onClick(() => {\n          this.content = \"\";\n          let select = this.controller.getSelection();\n          console.info(\"selection start \" + select.selection[0] + \" end \" + select.selection[1]);\n          select.spans.forEach(item => {\n            if (typeof (item as RichEditorImageSpanResult)['imageStyle'] != 'undefined') {\n              if ((item as RichEditorImageSpanResult).valueResourceStr == \"\") {\n                console.info(\"builder span index \" + (item as RichEditorImageSpanResult).spanPosition.spanIndex + \", range : \" + (item as RichEditorImageSpanResult).offsetInSpan[0] + \", \" +\n                  (item as RichEditorImageSpanResult).offsetInSpan[1] + \", size : \" + (item as RichEditorImageSpanResult).imageStyle[0] + \", \" + (item as RichEditorImageSpanResult).imageStyle[1])\n              } else {\n                console.info(\"image span \" + (item as RichEditorImageSpanResult).valueResourceStr + \", index : \" + (item as RichEditorImageSpanResult).spanPosition.spanIndex + \", range: \" +\n                  (item as RichEditorImageSpanResult).offsetInSpan[0] + \", \" + (item as RichEditorImageSpanResult).offsetInSpan[1] + \", size : \" +\n                  (item as RichEditorImageSpanResult).imageStyle.size[0] + \", \" + (item as RichEditorImageSpanResult).imageStyle.size[1])\n              }\n            } else {\n              this.content += (item as RichEditorTextSpanResult).value;\n              this.content += \"\\n\";\n              console.info(\"text span: \" + (item as RichEditorTextSpanResult).value);\n            }\n          })\n        })\n        Button(\"删除选择内容\").onClick(() => {\n          this.controller.deleteSpans({\n            start: this.start,\n            end: this.end\n          })\n        })\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"10%\")\n\n      Column() {\n        RichEditor(this.option)\n          .onReady(() => {\n            this.controller.addTextSpan(\"0123456789\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30\n                }\n              })\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"57px\", \"57px\"]\n                }\n              })\n          })\n          .onSelect((value: RichEditorSelection) => {\n            this.start = value.selection[0];\n            this.end = value.selection[1];\n            this.message = \"[\" + this.start + \", \" + this.end + \"]\";\n            console.info(\"onSelect=\"+JSON.stringify(value));\n          })\n          .aboutToIMEInput((value: RichEditorInsertValue) => {\n            console.info(\"---------------------- aboutToIMEInput --------------------\");\n            console.info(\"aboutToIMEInput=\"+JSON.stringify(value));\n            console.info(\"insertOffset:\" + value.insertOffset);\n            console.info(\"insertValue:\" + value.insertValue);\n            return true;\n          })\n          .onIMEInputComplete((value: RichEditorTextSpanResult) => {\n            console.info(\"---------------------- onIMEInputComplete --------------------\");\n            console.info(\"onIMEInputComplete=\"+JSON.stringify(value));\n            console.info(\"spanIndex:\" + value.spanPosition.spanIndex);\n            console.info(\"spanRange:[\" + value.spanPosition.spanRange[0] + \",\" + value.spanPosition.spanRange[1] + \"]\");\n            console.info(\"offsetInSpan:[\" + value.offsetInSpan[0] + \",\" + value.offsetInSpan[1] + \"]\");\n            console.info(\"value:\" + value.value);\n          })\n          .aboutToDelete((value: RichEditorDeleteValue) => {\n            value.richEditorDeleteSpans.forEach(item => {\n              console.info(\"---------------------- item --------------------\");\n              console.info(\"spanIndex=\" + item.spanPosition.spanIndex);\n              console.info(\"spanRange:[\" + item.spanPosition.spanRange[0] + \",\" + item.spanPosition.spanRange[1] + \"]\");\n              console.info(\"offsetInSpan:[\" + item.offsetInSpan[0] + \",\" + item.offsetInSpan[1] + \"]\");\n              if (typeof (item as RichEditorImageSpanResult)['imageStyle'] != 'undefined') {\n                if ((item as RichEditorImageSpanResult).valueResourceStr == \"\") {\n                  console.info(\"builder span index \" + (item as RichEditorImageSpanResult).spanPosition.spanIndex + \", range : \" + (item as RichEditorImageSpanResult).offsetInSpan[0] + \", \" +\n                  (item as RichEditorImageSpanResult).offsetInSpan[1] + \", size : \" + (item as RichEditorImageSpanResult).imageStyle[0] + \", \" + (item as RichEditorImageSpanResult).imageStyle[1])\n                } else {\n                  console.info(\"image span \" + (item as RichEditorImageSpanResult).valueResourceStr + \", index : \" + (item as RichEditorImageSpanResult).spanPosition.spanIndex + \", range: \" +\n                  (item as RichEditorImageSpanResult).offsetInSpan[0] + \", \" + (item as RichEditorImageSpanResult).offsetInSpan[1] + \", size : \" +\n                  (item as RichEditorImageSpanResult).imageStyle.size[0] + \", \" + (item as RichEditorImageSpanResult).imageStyle.size[1])\n                }\n              } else {\n                console.info(\"delete text: \" + (item as RichEditorTextSpanResult).value);\n              }\n            })\n            return true;\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"30%\")\n\n        Button(\"add span\")\n          .onClick(() => {\n            let num = this.controller.addBuilderSpan(this.my_builder,\n              {\n                offset: this.my_offset,\n                accessibilitySpanOptions: { accessibilityText:\"hello\", accessibilityDescription:\"world\", accessibilityLevel:\"yes\" }\n              });\n            console.info('addBuilderSpan return ' + num);\n          })\n        Button(\"add image\")\n          .onClick(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            let num = this.controller.addImageSpan($r('app.media.startIcon'), {\n              imageStyle: {\n                size: [\"50px\", \"50px\"],\n                verticalAlign: ImageSpanAlignment.BOTTOM,\n                layoutStyle: {\n                  borderRadius: undefined,\n                  margin: undefined\n                }\n              }\n            })\n            console.info('addImageSpan return' + num);\n          })\n        Row() {\n          Button('builder1').onClick(() => {\n            this.my_builder = () => {\n              this.placeholderBuilder()\n            };\n          })\n          Button('builder2').onClick(() => {\n            this.my_builder = () => {\n              this.my_builder2()\n            };\n          })\n          Button('builder3').onClick(() => {\n            this.my_builder = () => {\n              this.placeholderBuilder3()\n            };\n          })\n          Button('builder4').onClick(() => {\n            this.my_builder = () => {\n              this.placeholderBuilder4()\n            };\n          })\n        }\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(404364)/* ["default"] */.A) + "",
        width: "451",
        height: "418"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10使用和管理组件内的builderspan",
      children: "示例10（使用和管理组件内的BuilderSpan）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addbuilderspan11",
        children: "addBuilderSpan"
      }), "接口添加的自定义布局Span，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getspans",
        children: "getSpans"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillchange12",
        children: "onWillChange"
      }), "等API不会返回BuilderSpan内部的信息。开发者需要自行维护BuilderSpan的状态，并且在组件内容发生变化时同步更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const TAG = 'BuilderSpanDemo';\n\nclass BuilderObject {\n  content: string\n  imageUri?: string\n  type: string\n  id?: string\n\n  constructor(content: string, type: string, imageUri?: string, id?: string) {\n    this.content = content\n    this.imageUri = imageUri\n    this.type = type\n    this.id = id\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController()\n  option: RichEditorOptions = { controller: this.controller }\n  @State content: string = \"\";\n  @State start: number = 0;\n  @State end: number = 0;\n  private customBuilder: CustomBuilder = undefined;\n  private builderArray: BuilderObject[] = [];\n  private indicesToRemove: number[] = [];\n  private builderId: number = 0;\n\n  @Builder\n  imageTextBuilder(builder: BuilderObject) {\n    Row({ space: 2 }) {\n      Image($r(builder.imageUri)).width(24).height(24).margin({ left: -5 })\n      Text(builder.content).fontSize(10)\n    }.width(110).height(50).padding(5)\n  }\n\n  @Builder\n  chipBuilder(builder: BuilderObject) {\n    Row() {\n      Text(builder.content)\n        .fontSize(14)\n        .fontColor(Color.Black)\n        .fontFamily('HarmonyHeiTi')\n        .margin({ right: 4 })\n\n      SymbolGlyph($r('sys.symbol.xmark'))\n        .width(16)\n        .height(16)\n        .id(builder.id)\n        .onClick((event: ClickEvent) => {\n          this.deleteChipBuilder(event.target.id)\n        })\n    }\n    .width('auto')\n    .height(28)\n    .backgroundColor(Color.Gray)\n    .borderRadius(10)\n    .padding({\n      top: 4,\n      bottom: 4,\n      left: 12,\n      right: 12\n    })\n  }\n\n  private deleteChipBuilder(builderId?: string) {\n    if (builderId == null || builderId == \"\") {\n      console.info(TAG, \"delete chipBuilder error\");\n      return\n    }\n    let deleteRange: number[] = this.getTargetBuilderSpanRange(builderId)\n    if (deleteRange.length == 0) {\n      console.error(TAG, \"getTargetBuilderSpanRange failed\" + builderId);\n      return\n    }\n    this.builderArray = this.builderArray.filter(item => item.id !== builderId);\n    this.controller.deleteSpans({ start: deleteRange[0], end: deleteRange[1] });\n    console.info(TAG, `deleteChipBuilder start = ${deleteRange[0]}, end = ${deleteRange[1]}`);\n    console.info(TAG, `deleteChipBuilder builderArray + ${this.builderArray.length}`);\n  }\n\n  private getTargetBuilderSpanRange(builderId: string): number[] {\n    let allSpans = this.controller.getSpans();\n    let result: number[] = [];\n    let chitBuilderIndex = 0;\n    for (let spanIndex = 0; spanIndex < allSpans.length; spanIndex++) {\n      if (!this.isBuilderSpanResult(allSpans[spanIndex])) {\n        continue;\n      }\n      if (this.builderArray.length <= chitBuilderIndex) {\n        break;\n      }\n      if (this.builderArray[chitBuilderIndex].id === builderId) {\n        result = allSpans[spanIndex].spanPosition.spanRange;\n        break;\n      }\n      chitBuilderIndex++;\n    }\n    return result;\n  }\n\n  private isTextSpanResult(item: RichEditorImageSpanResult | RichEditorTextSpanResult): boolean {\n    return typeof (item as RichEditorImageSpanResult)['imageStyle'] == 'undefined';\n  }\n\n  private isBuilderSpanResult(item: RichEditorImageSpanResult | RichEditorTextSpanResult): boolean {\n    return typeof (item as RichEditorImageSpanResult)['imageStyle'] != 'undefined'\n      && ((item as RichEditorImageSpanResult).valueResourceStr == \" \"\n        || (item as RichEditorImageSpanResult).valueResourceStr == \"\");\n  }\n\n  build() {\n    Column() {\n      Scroll() {\n        Column() {\n          Text(\"Builder Info:\").width(\"100%\")\n          Text() {\n            Span(this.content)\n          }.width(\"100%\")\n        }\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"20%\")\n\n      // 添加Builder时，记录builder的相对顺序，以及builder信息\n      // getSpans接口valueResourceStr == \" \"或\"\"的Span是builderSpan，并且会按顺序返回builder\n      // 可以根据上面两点，在查询时还原builder信息\n      Button(\"addImageTextBuilder\")\n        .onClick(() => {\n          let insertOffset = this.controller.getCaretOffset();\n          // 'app.media.startIcon'需要替换为开发者所需的图像资源文件。\n          let builder = new BuilderObject('Custom PopUP ' + this.builderId, 'imageTextBuilder', 'app.media.startIcon');\n          this.customBuilder = () => {\n            this.imageTextBuilder(builder);\n          }\n          let addIndex = this.addBuilderByIndex(insertOffset);\n          console.info(TAG, \"add imageTextBuilder index = \" + addIndex);\n          this.builderArray.splice(addIndex, 0, builder);\n          this.controller.addBuilderSpan(this.customBuilder, { offset: insertOffset });\n          this.builderId++;\n          console.info(TAG, \"add imageTextBuilder success\");\n        })\n      Button(\"addChipBuilder\")\n        .onClick(() => {\n          let insertOffset = this.controller.getCaretOffset();\n          let builder = new BuilderObject('Hello World ' + this.builderId, 'chipBuilder', '',\n            'chipBuilder' + this.builderId);\n          this.customBuilder = () => {\n            this.chipBuilder(builder);\n          }\n          let addIndex = this.addBuilderByIndex(insertOffset);\n          console.info(TAG, \"add addChipBuilder index = \" + addIndex);\n          this.builderArray.splice(addIndex, 0, builder);\n          this.controller.addBuilderSpan(this.customBuilder, { offset: insertOffset });\n          this.builderId++;\n          console.info(TAG, \"add chipBuilder success\");\n        })\n\n      Row() {\n        Button(\"getSpans\").onClick(() => {\n          console.info(TAG, \"getSpans = \" + JSON.stringify(this.controller.getSpans()));\n          this.content = \"\";\n          let allSpans = this.controller.getSpans();\n          let builderSpanIndex = 0;\n          allSpans.forEach(item => {\n            if (this.isTextSpanResult(item)) {\n              console.info(TAG, \"text span value: \" + (item as RichEditorTextSpanResult).value);\n            } else if (this.isBuilderSpanResult(item)) {\n              let builderOrder = \"This is builderSpan \" + builderSpanIndex + \":\"\n              console.info(TAG, builderOrder);\n              this.content += builderOrder + \"\\n\";\n              let builderResult = (item as RichEditorImageSpanResult);\n              let builderIndex = \"index: \" + builderResult.spanPosition.spanIndex\n                + \", range: \" + builderResult.spanPosition.spanRange[0] + \", \"\n                + builderResult.spanPosition.spanRange[1];\n              console.info(TAG, builderIndex);\n              this.content += builderIndex + \"\\n\";\n              if (builderSpanIndex >= this.builderArray.length) {\n                console.error(TAG, \"getSpans error,  builderSpanIndex = \" + builderSpanIndex\n                  + \", builderArray.length = \" + this.builderArray.length);\n                return;\n              }\n              let builderInfo = \"content: \" + this.builderArray[builderSpanIndex].content\n                + \", image uri: \" + this.builderArray[builderSpanIndex].imageUri\n                + \", id: \" + this.builderArray[builderSpanIndex].id + \"\\n\\n\";\n              console.info(TAG, builderInfo);\n              this.content += builderInfo;\n              builderSpanIndex++;\n            } else {\n              let imageResult = (item as RichEditorImageSpanResult);\n              console.info(TAG, \"image span \" + imageResult.valueResourceStr + \", index: \" +\n              imageResult.spanPosition.spanIndex + \", range: \" +\n              imageResult.offsetInSpan[0] + \", \" + imageResult.offsetInSpan[1] + \", size: \" +\n              imageResult.imageStyle.size[0] + \", \" + imageResult.imageStyle.size[1]);\n            }\n          })\n        })\n        Button(\"deleteSelectedSpans\")\n          .onClick(() => {\n            this.start = this.controller.getSelection().selection[0];\n            this.end = this.controller.getSelection().selection[1];\n            if (this.start == this.end) {\n              return;\n            }\n            let allSpans = this.controller.getSpans();\n            let needRemoveIndex = 0;\n            for (let i = 0; i < allSpans.length; i++) {\n              if (!this.isBuilderSpanResult(allSpans[i])) {\n                continue;\n              }\n              let builderIndex = (allSpans[i] as RichEditorImageSpanResult).spanPosition.spanRange[0];\n              if (builderIndex < this.start || builderIndex >= this.end) {\n                needRemoveIndex++;\n                continue;\n              }\n              this.indicesToRemove.push(needRemoveIndex);\n              needRemoveIndex++;\n            }\n            console.info(TAG, \"deleteSpans indicesToRemove = \" + this.indicesToRemove.toString());\n            this.deleteBuilderByIndices();\n            console.info(TAG, \"deleteSpans builderArray = \" + this.builderArray.length);\n            this.controller.deleteSpans({ start: this.start, end: this.end });\n          })\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"5%\")\n\n      Column() {\n        RichEditor(this.option)\n          .onReady(() => {\n            this.controller.addTextSpan(\"0123456789\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30\n                }\n              })\n          })\n          .aboutToDelete((value: RichEditorDeleteValue) => {\n            console.info(TAG, \"aboutToDelete = \" + JSON.stringify(value));\n            let isBuilderAboutToDelete = this.isBuilderAboutToDelete(value);\n            console.info(TAG, \"aboutToDelete isBuilderAboutToDelete = \" + isBuilderAboutToDelete);\n            this.getIndicesToRemove(value, isBuilderAboutToDelete);\n            console.info(TAG, \"indicesToRemove = \" + this.indicesToRemove.toString());\n            this.deleteBuilderByIndices();\n            console.info(TAG, \"builderArray = \" + this.builderArray.length);\n            return true;\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"30%\")\n      }\n      .margin({ top: 60 })\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"70%\")\n    }\n  }\n\n  private isBuilderAboutToDelete(value: RichEditorDeleteValue): boolean {\n    let flag = false;\n    for (let i = 0; i < value.richEditorDeleteSpans.length; i++) {\n      if (this.isBuilderSpanResult(value.richEditorDeleteSpans[i])) {\n        flag = true;\n        break;\n      }\n    }\n    return flag;\n  }\n\n  private getIndicesToRemove(value: RichEditorDeleteValue, isBuilderAboutToDelete: boolean): void {\n    if (!isBuilderAboutToDelete) {\n      return\n    }\n    let allSpans = this.controller.getSpans();\n    for (let i = 0; i < value.richEditorDeleteSpans.length; i++) {\n      let needRemoveIndex = 0;\n      let item = value.richEditorDeleteSpans[i];\n      if (!this.isBuilderSpanResult(item)) {\n        continue;\n      }\n      let aboutToDeleteBuilderIndex = (item as RichEditorImageSpanResult).spanPosition.spanIndex\n      for (let j = 0; j < allSpans.length; j++) {\n        if (!this.isBuilderSpanResult(allSpans[j])) {\n          continue;\n        }\n        let builderIndex = (allSpans[j] as RichEditorImageSpanResult).spanPosition.spanIndex\n        if (builderIndex == aboutToDeleteBuilderIndex) {\n          this.indicesToRemove.push(needRemoveIndex)\n          break;\n        }\n        needRemoveIndex++;\n      }\n    }\n  }\n\n  private deleteBuilderByIndices(): void {\n    let indicesSet: Set<number> = new Set(this.indicesToRemove);\n    let newLength = 0;\n    for (let i = 0; i < this.builderArray.length; i++) {\n      if (!indicesSet.has(i)) {\n        this.builderArray[newLength] = this.builderArray[i];\n        newLength++;\n      }\n    }\n    this.builderArray.length = newLength;\n    this.indicesToRemove.length = 0;\n  }\n\n  private addBuilderByIndex(insertOffset: number): number {\n    if (insertOffset == 0 || this.builderArray.length == 0) {\n      return 0;\n    }\n    let allSpans = this.controller.getSpans();\n    let addIndex = 0;\n    for (let i = 0; i < allSpans.length; i++) {\n      if (!this.isBuilderSpanResult(allSpans[i])) {\n        continue;\n      }\n      let builderIndex = (allSpans[i] as RichEditorImageSpanResult).spanPosition.spanRange[0];\n      if (builderIndex < insertOffset) {\n        addIndex++;\n        continue;\n      }\n      break;\n    }\n    return addIndex;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(73736)/* ["default"] */.A) + "",
        width: "247",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11设置文本识别配置",
      children: "示例11（设置文本识别配置）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enabledatadetector11",
        children: "enableDataDetector"
      }), "为true时，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#datadetectorconfig11",
        children: "dataDetectorConfig"
      }), "接口设置文本识别配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TextExample7 {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State phoneNumber: string = '(86) (755) ********';\n  @State url: string = 'www.********.com';\n  @State email: string = '***@example.com';\n  @State address: string = 'XX省XX市XX区XXXX';\n  @State enableDataDetector: boolean = true;\n  @State enablePreviewText: boolean = false;\n  @State types: TextDataDetectorType[] = [];\n\n  build() {\n    Row() {\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan('电话号码：' + this.phoneNumber + '\\n',\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n            this.controller.addTextSpan('链接：' + this.url + '\\n',\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n            this.controller.addTextSpan('邮箱：' + this.email + '\\n',\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n            this.controller.addTextSpan('地址：' + this.address,\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n          })\n          .copyOptions(CopyOptions.InApp)\n          .enableDataDetector(this.enableDataDetector)\n          .dataDetectorConfig({types : this.types, onDetectResultUpdate: (result: string)=>{}})\n          .enablePreviewText(this.enablePreviewText)\n          .borderWidth(1)\n          .padding(10)\n          .width('100%')\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12设置光标手柄和底板颜色",
      children: "示例12（设置光标、手柄和底板颜色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#caretcolor12",
        children: "caretColor"
      }), "属性设置输入框光标、手柄颜色，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectedbackgroundcolor12",
        children: "selectedBackgroundColor"
      }), "属性设置文本选中底板颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorDemo {\n  @State color: Color = Color.Black;\n  controller: RichEditorController = new RichEditorController();\n\n  build() {\n    Column() {\n      Row() {\n        Button(\"改为红色\").onClick(() => {\n          this.color = Color.Red;\n        })\n      }.margin({ top: 50 })\n\n      RichEditor({ controller: this.controller })\n        .onReady(() => {\n          this.controller.addTextSpan('通过caretColor和selectedBackgroundColor属性设置光标和选中背景色');\n        })\n        .width(\"100%\")\n        .border({ width: 1, radius: 5 })\n        .key('RichEditor')\n        .caretColor(this.color)// 光标颜色\n        .selectedBackgroundColor(this.color)// 选中背景色\n        .margin({ top: 50 })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(820551)/* ["default"] */.A) + "",
        width: "792",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13设置行高和字符间距",
      children: "示例13（设置行高和字符间距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updatespanstyle",
        children: "updateSpanStyle"
      }), "接口配置文本行高（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditortextstyle",
        children: "lineHeight"
      }), "）和字符间距（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditortextstyle",
        children: "letterSpacing"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorDemo03 {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State start: number = -1;\n  @State end: number = -1;\n  @State LH:number = 50;\n  @State LS:number = 20;\n\n  build() {\n    Column() {\n      Scroll(){\n        Column(){\n          Row() {\n            Button(\"行高++\").onClick(()=>{\n              this.LH = this.LH + 5;\n              this.controller.updateSpanStyle({\n                start: this.start,\n                end: this.end,\n                textStyle:\n                {\n                  lineHeight: this.LH\n                }\n              })\n            })\n            Button(\"行高--\").onClick(()=>{\n              this.LH = this.LH - 5;\n              this.controller.updateSpanStyle({\n                start: this.start,\n                end: this.end,\n                textStyle:\n                {\n                  lineHeight: this.LH\n                }\n              })\n            })\n            Button(\"字符间距++\").onClick(()=>{\n              this.LS = this.LS + 5\n              this.controller.updateSpanStyle({\n                start: this.start,\n                end: this.end,\n                textStyle:\n                {\n                  letterSpacing: this.LS\n                }\n              })\n            })\n            Button(\"字符间距--\").onClick(()=>{\n              this.LS = this.LS - 5\n              this.controller.updateSpanStyle({\n                start: this.start,\n                end: this.end,\n                textStyle:\n                {\n                  letterSpacing: this.LS\n                }\n              })\n            })\n          }\n        }\n      }.borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"20%\")\n      .margin({top: 20})\n\n      Scroll(){\n        Column() {\n          Text(\"LineHeight:\" + this.LH).width(\"100%\")\n          Text(\"LetterSpacing:\" + this.LS).width(\"100%\")\n        }\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"20%\")\n      .margin({bottom: 20})\n\n      Column() {\n        RichEditor(this.options).clip(true).padding(10)\n          .onReady(() => {\n            this.controller.addTextSpan(\"012345\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30,\n                  lineHeight: this.LH,\n                  letterSpacing: this.LS\n                }\n              })\n            this.controller.addTextSpan(\"6789\",\n              {\n                style:\n                {\n                  fontColor: Color.Black,\n                  fontSize: 30,\n                  lineHeight: this.LH,\n                  letterSpacing: this.LS\n                }\n              })\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(400)\n          .height(400)\n      }\n      .borderWidth(1)\n      .borderColor(Color.Red)\n      .width(\"100%\")\n      .height(\"60%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(899109)/* ["default"] */.A) + "",
        width: "431",
        height: "450"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14自定义粘贴事件",
      children: "示例14（自定义粘贴事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onpaste11",
        children: "onPaste"
      }), "事件，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pasteevent11",
        children: "PasteEvent"
      }), "自定义用户粘贴事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorDemo {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  build() {\n    Column({ space: 2 }) {\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan('RichEditor preventDefault')\n        })\n        .onPaste((event?: PasteEvent) => {\n          if (event != undefined && event.preventDefault) {\n            event.preventDefault();\n          }\n        })\n        .borderWidth(1)\n        .borderColor(Color.Green)\n        .width('100%')\n        .height('40%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(743135)/* ["default"] */.A) + "",
        width: "442",
        height: "127"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15配置文字特性效果",
      children: "示例15（配置文字特性效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#addtextspan",
        children: "addTextSpan"
      }), "接口设置文字特性效果（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditortextstyle",
        children: "fontFeature"
      }), "）。当添加“ss01”特性的FontFeature属性时，数字“0”由原来的椭圆形改变为带有倒圆角形。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State enableDataDetector: boolean = true;\n  @State types: TextDataDetectorType[] = [];\n  build() {\n    Row() {\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan('This is ss01 off :' + '0000' + '\\n',\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n            this.controller.addTextSpan('This is ss01 on :' + '0000' + '\\n',\n              {\n                style:\n                {\n                  fontSize: 30,\n                  fontFeature: \"\\\"ss01\\\" 1\"\n                }\n              })\n          })\n          .copyOptions(CopyOptions.InApp)\n          .enableDataDetector(this.enableDataDetector)\n          .dataDetectorConfig({types : this.types, onDetectResultUpdate: (result: string)=>{}})\n          .borderWidth(1)\n          .padding(10)\n          .width('100%')\n      }\n      .width('100%')\n      .margin({top:150})\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(320069)/* ["default"] */.A) + "",
        width: "529",
        height: "157"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16自定义键盘避让",
      children: "示例16（自定义键盘避让）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customkeyboard",
        children: "customKeyboard"
      }), "属性绑定自定义键盘，通过参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#keyboardoptions12",
        children: "KeyboardOptions"
      }), "设置自定义键盘是否支持避让功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n  @State height1: string | number = '80%';\n  @State height2: number = 100;\n  @State supportAvoidance: boolean = true;\n\n  // 自定义键盘组件\n  @Builder\n  CustomKeyboardBuilder() {\n    Column() {\n      Row() {\n        Button('增加特表情包').onClick(() => {\n          this.controller.addTextSpan(\"\\uD83D\\uDE0A\",\n            {\n              style:\n              {\n                fontColor: Color.Orange\n              }\n            })\n        })\n      }\n\n      Grid() {\n        ForEach(['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'], (item: string) => {\n          GridItem() {\n            Button(item).width(110).onClick(() => {\n              this.controller.addTextSpan(item, {\n                offset: this.controller.getCaretOffset(),\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 30\n                }\n              })\n              this.controller.setCaretOffset(this.controller.getCaretOffset() + item.toString().length)\n            })\n          }\n        })\n      }.maxCount(3).columnsGap(10).rowsGap(10).padding(5)\n    }.backgroundColor(Color.Gray)\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button(\"20%\")\n          .fontSize(24)\n          .onClick(() => {\n            this.height1 = \"20%\";\n          })\n        Button(\"80%\")\n          .fontSize(24)\n          .margin({ left: 20 })\n          .onClick(() => {\n            this.height1 = \"80%\";\n          })\n      }\n      .justifyContent(FlexAlign.Center)\n      .alignItems(VerticalAlign.Bottom)\n      .height(this.height1)\n      .width(\"100%\")\n      .padding({ bottom: 50 })\n\n      RichEditor({ controller: this.controller })// 绑定自定义键盘\n        .customKeyboard(this.CustomKeyboardBuilder(), { supportAvoidance: this.supportAvoidance })\n        .margin(10)\n        .border({ width: 1 })\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(\"100%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(316847)/* ["default"] */.A) + "",
        width: "294",
        height: "479"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17查看编辑状态",
      children: "示例17（查看编辑状态）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#isediting12",
        children: "isEditing"
      }), "接口获取当前富文本的编辑状态。为组件添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oneditingchange12",
        children: "onEditingChange"
      }), "事件，可通过打印日志，获取当前组件是否在编辑态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditor_onEditingChange {\n  controller: RichEditorController = new RichEditorController();\n  @State controllerIsEditing: boolean = false;\n  @Builder\n\n  build() {\n    Column() {\n      Row() {\n        Button(\"点击查看编辑状态isEditing()：\").onClick(() => {\n          this.controllerIsEditing = this.controller.isEditing();\n        })\n          .padding(5)\n        Text('' + this.controllerIsEditing)\n          .width('100%')\n          .padding(5)\n          .fontColor(Color.Orange)\n          .fontSize(20)\n      }\n      RichEditor({ controller: this.controller })\n        .onEditingChange((isEditing: boolean) => {\n          console.info(\"Current Editing Status:\" + isEditing);\n        })\n        .height(400)\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(\"100%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(839310)/* ["default"] */.A) + "",
        width: "277",
        height: "575"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例18配置文本变化回调",
      children: "示例18（配置文本变化回调）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为组件添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillchange12",
        children: "onWillChange"
      }), "事件，能够在组件执行增删操作前，触发回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n  build() {\n    Column() {\n      RichEditor({ controller: this.controller })\n        .height(200)\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(\"100%\")\n        .onReady(() => {\n          this.controller.addTextSpan('测试文字TestWord', { style: { fontColor: Color.Orange, fontSize: 30 } })\n          this.controller.updateSpanStyle({\n            start: -1,\n            end: -1,\n            textStyle:\n            {\n              fontWeight: FontWeight.Bolder\n            }\n          })\n        })\n        .onWillChange((value: RichEditorChangeValue) => {\n          console.info('测试log: onWillChange');\n          console.info('rangeBefore: ' + JSON.stringify(value.rangeBefore));\n          console.info('print replacedSpans');\n          value.replacedSpans.forEach((item: RichEditorTextSpanResult) => {\n            console.info('spanPosition:' + JSON.stringify(item.spanPosition));\n            console.info('value:' + item.value);\n            console.info('textStyle:' + JSON.stringify(item.textStyle));\n            console.info('offsetInSpan:' + item.offsetInSpan);\n            console.info('valueResource:' + item.valueResource);\n            console.info('paragraphStyle:' + JSON.stringify(item.paragraphStyle));\n          })\n          console.info('print replacedImageSpans');\n          value.replacedImageSpans.forEach((item: RichEditorImageSpanResult) => {\n            console.info('spanPosition:' + JSON.stringify(item.spanPosition));\n            console.info('valuePixelMap:' + JSON.stringify(item.valuePixelMap));\n            console.info('valueResourceStr:' + item.valueResourceStr);\n            console.info('imageStyle:' + JSON.stringify(item.imageStyle));\n            console.info('offsetInSpan:' + item.offsetInSpan);\n          })\n          console.info('print replacedSymbolSpans');\n          value.replacedSymbolSpans.forEach((item: RichEditorTextSpanResult) => {\n            console.info('spanPosition:' + JSON.stringify(item.spanPosition));\n            console.info('value:' + item.value);\n            console.info('offsetInSpan:' + item.offsetInSpan);\n            console.info('symbolSpanStyle:' + JSON.stringify(item.symbolSpanStyle));\n            console.info('valueResource:' + item.valueResource);\n            console.info('paragraphStyle:' + JSON.stringify(item.paragraphStyle));\n          })\n          return true;\n        })\n        .onDidChange((rangeBefore: TextRange, rangeAfter: TextRange) => {\n          console.info('测试log: onDidChange');\n          console.info('rangeBefore:' + JSON.stringify(rangeBefore));\n          console.info('rangeAfter:' + JSON.stringify(rangeAfter));\n        })\n        .onCut((event:CutEvent) => {\n          event.preventDefault!()\n          console.info('测试log：onCut');\n        })\n        .onCopy((event:CopyEvent) => {\n          event.preventDefault!()\n          console.info('测试log：onCopy');\n        })\n        .onPaste(()=>{\n          console.info('测试log：onPaste');\n        })\n      Text('测试文字Hello')\n        .lineHeight(50)\n        .fontSize(24)\n        .draggable(true)\n        .onDragStart(()=>{})\n      TextInput({text:'测试文字NiHao'})\n        .draggable(true)\n        .margin(20)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例19配置输入法enter键功能",
      children: "示例19（配置输入法enter键功能）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enterkeytype12",
        children: "enterKeyType"
      }), "属性设置软键盘输入法回车键类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SoftKeyboardEnterTypeExample {\n  controller: RichEditorController = new RichEditorController();\n\n    build() {\n    Column() {\n      Button(\"停止编辑\").onClick(()=>{\n        this.controller.stopEditing()\n      })\n      RichEditor({ controller: this.controller })\n        .margin(10)\n        .border({ width: 1 })\n        .height(200)\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(\"100%\")\n        .enterKeyType(EnterKeyType.Search)\n        .onSubmit((enterKey: EnterKeyType, event: SubmitEvent) => {\n          console.info(\"trigger richeditor onsubmit\" + enterKey);\n          this.controller.addTextSpan(\" type[\"+ enterKey +\"] triggered\")\n          event.keepEditableState()\n        })\n    }.height(\"100%\").justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(881252)/* ["default"] */.A) + "",
        width: "478",
        height: "440"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例20设置段落折行规则",
      children: "示例20（设置段落折行规则）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updateparagraphstyle11",
        children: "updateParagraphStyle"
      }), "接口设置折行类型（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorparagraphstyle11",
        children: "lineBreakStrategy"
      }), "），通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getparagraphs11",
        children: "getParagraphs"
      }), "接口获取当前段落的折行类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LineBreakStrategyExample {\n  controller: RichEditorController = new RichEditorController();\n  private spanParagraphs: RichEditorParagraphResult[] = [];\n  @State lineBreakOptionStr: string[] = ['GREEDY', 'HIGH_QUALITY', 'BALANCED'];\n  @State attributeValue: string = \"\";\n  @State testStr: string = \"0123456789,0123456789,0123456789,0123456789,0123456789.\";\n  build() {\n    Column() {\n      RichEditor({ controller: this.controller })\n        .onReady(() => {\n          this.controller.addTextSpan(this.testStr, {\n            style: {\n              fontColor: Color.Black,\n              fontSize: \"32\"\n            },\n            paragraphStyle: {\n              textAlign: TextAlign.Start,\n              lineBreakStrategy: LineBreakStrategy.GREEDY\n            }\n          })\n        })\n        .width(400)\n        .height(300)\n        .margin({bottom:20})\n        .draggable(false)\n      Column(){\n        Text('linebreak属性值为：' + this.attributeValue).fontSize(20).fontColor(Color.Black)\n      }.margin({bottom: 10})\n      Column({ space: 10 }) {\n        Button(\"设置折行类型GREEDY\").onClick(() => {\n          this.controller.updateParagraphStyle({ start: -1, end: -1,\n            style: {\n              lineBreakStrategy: LineBreakStrategy.GREEDY\n            }\n          })\n        })\n        Button(\"设置折行类型HIGH_QUALITY\").onClick(() => {\n          this.controller.updateParagraphStyle({ start: -1, end: -1,\n            style: {\n              lineBreakStrategy: LineBreakStrategy.HIGH_QUALITY\n            }\n          })\n        })\n        Button(\"设置折行类型BALANCED\").onClick(() => {\n          this.controller.updateParagraphStyle({ start: -1, end: -1,\n            style: {\n              lineBreakStrategy: LineBreakStrategy.BALANCED\n            }\n          })\n        })\n        Divider()\n        Row(){\n          Button(\"获取linebreak属性值\").onClick(() => {\n            this.spanParagraphs = this.controller.getParagraphs({ start: -1, end: -1 });\n            console.info(\"RichEditor getParagraphs:\" + JSON.stringify(this.spanParagraphs));\n            this.spanParagraphs.forEach(item => {\n              if(typeof(item as RichEditorParagraphResult)['style'] != 'undefined'){\n                this.attributeValue = \"\";\n                console.info('lineBreakStrategy:'+ JSON.stringify((item as RichEditorParagraphResult)['style']));\n                this.attributeValue += this.lineBreakOptionStr[Number((item as RichEditorParagraphResult)['style'].lineBreakStrategy)];\n              }\n            })\n          })\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(266476)/* ["default"] */.A) + "",
        width: "320",
        height: "586"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例21属性字符串基本功能",
      children: "示例21（属性字符串基本功能）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string",
        children: "属性字符串"
      }), "通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorstyledstringcontroller12",
        children: "RichEditorStyledStringController"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setstyledstring12",
        children: "setStyledString"
      }), "方法与RichEditor组件绑定。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getstyledstring12",
        children: "getStyledString"
      }), "接口获取富文本组件显示的属性字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct Index {\n  stringLength: number = 0;\n  @State selection: string = \"\";\n  @State content: string = \"\";\n  @State range: string = \"\";\n  @State replaceString: string = \"\";\n  @State rangeBefore: string = \"\";\n  @State rangeAfter: string = \"\";\n  richEditorStyledString: MutableStyledString = new MutableStyledString(\"\");\n  textStyle: TextStyle = new TextStyle({\n    fontWeight: FontWeight.Lighter,\n    fontFamily: 'HarmonyOS Sans',\n    fontColor: Color.Green,\n    fontSize: LengthMetrics.vp(30),\n    fontStyle: FontStyle.Normal\n  })\n  fontStyle1: TextStyle = new TextStyle({ fontColor: Color.Blue });\n  fontStyle2: TextStyle = new TextStyle({\n    fontWeight: FontWeight.Bolder,\n    fontFamily: 'Arial',\n    fontColor: Color.Orange,\n    fontSize: LengthMetrics.vp(30),\n    fontStyle: FontStyle.Italic\n  })\n\n  controller1: RichEditorController = new RichEditorController();\n  options1: RichEditorOptions = { controller: this.controller1 };\n  // 创建属性字符串对象\n  mutableStyledString: MutableStyledString = new MutableStyledString(\"初始属性字符串\",\n    [{ start: 0, length: 5, styledKey: StyledStringKey.FONT, styledValue: this.fontStyle1 }]);\n  styledString: StyledString = new StyledString(\"插入属性字符串\",\n    [{ start: 2, length: 4, styledKey: StyledStringKey.FONT, styledValue: this.fontStyle2 }]);\n  controller: RichEditorStyledStringController = new RichEditorStyledStringController();\n  options: RichEditorStyledStringOptions = {controller: this.controller};\n  // 文本内容变化回调\n  contentChangedListener: StyledStringChangedListener = {\n    onWillChange: (value: StyledStringChangeValue) => {\n      this.range = '[ ' + value.range.start + ' , ' + value.range.end + ' ]';\n      this.replaceString = value.replacementString.getString();\n      return true;\n    },\n    onDidChange: (rangeBefore, rangeAfter) => {\n      this.rangeBefore = '[ ' + rangeBefore.start + ' , ' + rangeBefore.end + ' ]';\n      this.rangeAfter = '[ ' + rangeAfter.start + ' , ' + rangeAfter.end + ' ]';\n    }\n  }\n\n  build() {\n    Column({space:6}) {\n      Column() {\n        Text(\"选中区信息\")\n          .fontSize(20)\n          .width(\"100%\")\n        Text(\"selection range: \" + this.selection).width(\"100%\")\n        Text(\"selection content: \" + this.content).width(\"100%\")\n      }\n      .width(\"100%\")\n      .height(\"10%\")\n\n      Column() {\n        Text(\"onWillChange回调信息\")\n          .fontSize(20)\n          .width(\"100%\")\n        Text(\"range: \" + this.range).width(\"100%\")\n        Text(\"replacementString: \" + this.replaceString).width(\"100%\")\n        Text(\"onWillChange回调信息\")\n          .fontSize(20)\n          .width(\"100%\")\n        Text(\"rangeBefore: \" + this.rangeBefore).width(\"100%\")\n        Text(\"rangeAfter: \" + this.rangeAfter).width(\"100%\")\n      }\n      .borderWidth(1)\n      .borderColor(Color.Black)\n      .width(\"100%\")\n      .height(\"20%\")\n\n      RichEditor(this.options)\n        .onReady(() => {\n          // 注册文本变化回调\n          this.controller.onContentChanged(this.contentChangedListener);\n          // 设定组件展示的属性字符串\n          this.controller.setStyledString(this.mutableStyledString);\n        })\n        .height(\"20%\")\n        .width(\"100%\")\n\n      RichEditor(this.options1)\n        .onReady(() => {\n        this.controller1.addTextSpan(\"把这些文字转换成属性字符串\");\n      })\n        .height(\"10%\")\n        .width(\"100%\")\n        .borderWidth(1)\n        .borderColor(Color.Black)\n\n        Row({space:2}) {\n          Button(\"插入图片\")\n            .stateEffect(true)\n            .onClick(() => {\n              // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n              let imageStyledString = new MutableStyledString(new ImageAttachment({\n                resourceValue: $r('app.media.startIcon'),\n                size: { width: 50, height: 50 },\n                layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n                verticalAlign: ImageSpanAlignment.BASELINE,\n                objectFit: ImageFit.Contain,\n                syncLoad: true\n              }));\n              // 获取组件展示的属性字符串\n              this.richEditorStyledString = this.controller.getStyledString();\n              this.richEditorStyledString.appendStyledString(imageStyledString)\n              // 使插入图片后的属性字符串展示在组件上\n              this.controller.setStyledString(this.richEditorStyledString)\n              this.controller.setCaretOffset(this.richEditorStyledString.length)\n          })\n          Button(\"插入文本\").onClick(() => {\n            // 获取组件展示的属性字符串\n            this.richEditorStyledString = this.controller.getStyledString();\n            this.richEditorStyledString.appendStyledString(this.styledString)\n            // 使插入文本后的属性字符串展示在组件上\n            this.controller.setStyledString(this.richEditorStyledString)\n            this.controller.setCaretOffset(this.richEditorStyledString.length)\n          })\n          Button(\"删除选中内容\").onClick(() => {\n            // 获取选中范围\n            let richEditorSelection = this.controller.getSelection();\n            let start = richEditorSelection.start ? richEditorSelection.start : 0;\n            let end = richEditorSelection.end ? richEditorSelection.end : 0;\n            if (start < 0 || end <= start) {\n              return;\n            }\n            // 获取组件展示的属性字符串\n            this.richEditorStyledString = this.controller.getStyledString();\n            this.richEditorStyledString.removeString(start, end - start)\n            // 使删除内容后的属性字符串展示在组件上\n            this.controller.setStyledString(this.richEditorStyledString)\n          })\n        }\n        Row({space:2}) {\n          Button(\"获取选中内容\").onClick(() => {\n            // 获取选中范围\n            let richEditorSelection = this.controller.getSelection();\n            let start = richEditorSelection.start ? richEditorSelection.start : 0;\n            let end = richEditorSelection.end ? richEditorSelection.end : 0;\n            // 获取组件展示的属性字符串\n            this.richEditorStyledString = this.controller.getStyledString();\n            this.selection = '[ ' + start + ' , ' + end + ' ]';\n            if (start == end) {\n              this.content = \"\";\n            } else {\n              this.content = this.richEditorStyledString.subStyledString(start, end - start).getString();\n            }\n          })\n          Button(\"更新选中样式\").onClick(() => {\n            // 获取选中范围\n            let richEditorSelection = this.controller.getSelection();\n            let start = richEditorSelection.start ? richEditorSelection.start : 0;\n            let end = richEditorSelection.end ? richEditorSelection.end : 0;\n            if (start < 0 || end <= start) {\n              return;\n            }\n            // 获取组件展示的属性字符串\n            this.richEditorStyledString = this.controller.getStyledString();\n            this.richEditorStyledString.setStyle({\n              start: start,\n              length: end - start,\n              styledKey: StyledStringKey.FONT,\n              styledValue: this.textStyle\n            })\n            // 使变更样式后的属性字符串展示在组件上\n            this.controller.setStyledString(this.richEditorStyledString)\n          })\n        }\n        Row({space:2}){\n          // 将属性字符串转换成span信息\n          Button(\"调用fromStyledString\").onClick(() => {\n            this.controller1.addTextSpan(\"调用fromStyledString：\" +JSON.stringify(this.controller1.fromStyledString(this.mutableStyledString)))\n          })\n          // 将给定范围的组件内容转换成属性字符串\n          Button(\"调用toStyledString\").onClick(() => {\n            this.controller.setStyledString(this.controller1.toStyledString({start:0,end:13}))\n          })\n        }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(424547)/* ["default"] */.A) + "",
        width: "649",
        height: "830"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例22获取布局信息",
      children: "示例22（获取布局信息）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getlayoutmanager12",
        children: "getLayoutManager"
      }), "接口获取布局管理器对象，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#getlinecount12",
        children: "getLineCount"
      }), "接口获取组件内容或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#placeholder12",
        children: "placeholder"
      }), "的总行数，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#getglyphpositionatcoordinate12",
        children: "getGlyphPositionAtCoordinate"
      }), "接口获取较为接近给定坐标的字形的位置信息，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#getlinemetrics12",
        children: "getLineMetrics"
      }), "接口获取指定行的行信息、文本样式信息、以及字体属性信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Index {\n  @State lineCount: string = \"\"\n  @State glyphPositionAtCoordinate: string = \"\"\n  @State lineMetrics: string = \"\"\n  controller: RichEditorController = new RichEditorController();\n  @State textStr: string =\n    'Hello World! 你好，世界！'\n\n  build() {\n    Scroll() {\n      Column() {\n        Text('RichEditor组件getLayoutManager接口获取相对于组件的布局信息')\n          .fontSize(9)\n          .fontColor(0xCCCCCC)\n          .width('90%')\n          .padding(10)\n        RichEditor({ controller: this.controller })\n          .borderColor(Color.Red)\n          .borderWidth(1)\n          .onReady(() => {\n            this.controller.addTextSpan(this.textStr)\n          })\n          .onAreaChange(() => {\n            let layoutManager = this.controller.getLayoutManager();\n            this.lineCount = \"LineCount: \" + layoutManager.getLineCount();\n          })\n\n        Text('LineCount').fontSize(9).fontColor(0xCCCCCC).width('90%').padding(10)\n        Text(this.lineCount)\n\n        Text('GlyphPositionAtCoordinate').fontSize(9).fontColor(0xCCCCCC).width('90%').padding(10)\n        Button(\"相对组件坐标[150,50]字形信息\")\n          .onClick(() => {\n            let layoutManager: LayoutManager = this.controller.getLayoutManager();\n            let position = layoutManager.getGlyphPositionAtCoordinate(150, 50);\n            this.glyphPositionAtCoordinate =\n            \"相对组件坐标[150,50] glyphPositionAtCoordinate position: \" + position.position + \" affinity: \" +\n            position.affinity;\n          })\n          .margin({ bottom: 20, top: 10 })\n        Text(this.glyphPositionAtCoordinate)\n\n        Text('LineMetrics').fontSize(9).fontColor(0xCCCCCC).width('90%').padding(10)\n        Button(\"首行行信息、文本样式信息、以及字体属性信息\")\n          .onClick(() => {\n            let layoutManager: LayoutManager = this.controller.getLayoutManager();\n            let lineMetrics = layoutManager.getLineMetrics(0);\n            this.lineMetrics = \"lineMetrics is \" + JSON.stringify(lineMetrics) + '\\n\\n';\n            let runMetrics = lineMetrics.runMetrics;\n            runMetrics.forEach((value, key) => {\n              this.lineMetrics += \"runMetrics key is \" + key + \" \" + JSON.stringify(value) + \"\\n\\n\";\n            });\n          })\n          .margin({ bottom: 20, top: 10 })\n        Text(this.lineMetrics)\n      }\n      .margin({ top: 100, left: 8, right: 8 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648164)/* ["default"] */.A) + "",
        width: "424",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例23设置系统默认菜单扩展项",
      children: "示例23（设置系统默认菜单扩展项）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editmenuoptions12",
        children: "editMenuOptions"
      }), "属性设置系统默认菜单的扩展项，允许配置扩展项的文本内容、图标和回调方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State endIndex: number | undefined = 0;\n  onCreateMenu = (menuItems: Array<TextMenuItem>) => {\n    const idsToFilter: TextMenuItemId[] = [\n      TextMenuItemId.TRANSLATE,\n      TextMenuItemId.SHARE,\n      TextMenuItemId.SEARCH,\n      TextMenuItemId.AI_WRITER,\n      // 从API version 23开始支持TextMenuItemId.autoFill\n      TextMenuItemId.autoFill\n    ]\n    const items = menuItems.filter(item => !idsToFilter.some(id => id.equals(item.id)))\n    // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n    let item1: TextMenuItem = {\n      content: 'create1',\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('create1'),\n    };\n    let item2: TextMenuItem = {\n      content: 'create2',\n      id: TextMenuItemId.of('create2'),\n      icon: $r('app.media.startIcon'),\n    };\n    items.push(item1);\n    items.unshift(item2);\n    return items;\n  }\n  onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {\n    if (menuItem.id.equals(TextMenuItemId.of(\"create2\"))) {\n      console.info(\"拦截 id: create2 start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.of(\"prepare1\"))) {\n      console.info(\"拦截 id: prepare1 start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.COPY)) {\n      console.info(\"拦截 COPY start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {\n      console.info(\"不拦截 SELECT_ALL start:\" + textRange.start + \"; end:\" + textRange.end);\n      return false;\n    }\n    return false;\n  }\n  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n  onPrepareMenu = (menuItems: Array<TextMenuItem>) => {\n    let item1: TextMenuItem = {\n      content: 'prepare1_' + this.endIndex,\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('prepare1'),\n    };\n    menuItems.unshift(item1);\n    return menuItems;\n  }\n  @State editMenuOptions: EditMenuOptions = {\n    onCreateMenu: this.onCreateMenu,\n    onMenuItemClick: this.onMenuItemClick,\n    onPrepareMenu: this.onPrepareMenu\n  };\n\n  build() {\n    Column() {\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan(\"RichEditor editMenuOptions\")\n        })\n        .editMenuOptions(this.editMenuOptions)\n        .onSelectionChange((range: RichEditorRange) => {\n          console.info(\"onSelectionChange, (\" + range.start + \",\" + range.end + \")\");\n          this.endIndex = range.end\n        })\n        .height(50)\n        .margin({ top: 100 })\n        .borderWidth(1)\n        .borderColor(Color.Red)\n    }\n    .width(\"90%\")\n    .margin(\"5%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233314)/* ["default"] */.A) + "",
        width: "301",
        height: "225"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例24组件部分常用属性",
      children: "示例24（组件部分常用属性）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#barstate13",
        children: "barState"
      }), "属性设置组件滚动条的显示模式。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enablekeyboardonfocus12",
        children: "enableKeyboardOnFocus"
      }), "属性设置组件通过点击以外的方式获焦时，是否主动拉起软键盘。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enablehapticfeedback13",
        children: "enableHapticFeedback"
      }), "属性设置组件是否支持触感反馈。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getpreviewtext12",
        children: "getPreviewText"
      }), "接口获取组件预上屏信息。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stopbackpress18",
        children: "stopBackPress"
      }), "属性设置是否阻止返回键向其它组件或应用侧传递。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scrollbarcolor21",
        children: "scrollBarColor"
      }), "属性设置RichEditor组件滚动条颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { JSON } from '@kit.ArkTS';\nimport { ColorMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct RichEditor_example {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  controller1: RichEditorController = new RichEditorController();\n  options1: RichEditorOptions = { controller: this.controller1 };\n\n  @State e: boolean = true;\n  @State bs_num: number = 0;\n  @State bs: (BarState | undefined)[] = [BarState.Auto, BarState.On, BarState.Off, undefined];\n  @State bs_string: string[] = [\"Auto\", \"On\", \"Off\", \"undefined\"];\n\n  build() {\n    Column({space: 3}) {\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan('文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本', {\n            style: {\n              fontColor: Color.Black,\n              fontSize: 20\n            }\n          });\n        })\n        .onDidIMEInput((value: TextRange) => {\n          this.controller1.addTextSpan(\"\\n\" + \"触发了onDidIMEInput回调,输入法本次输入内容范围为：(\" + value.start + \",\" + value.end + \")\", {\n            style: {\n              fontColor: Color.Gray,\n              fontSize: 10\n            }\n          });\n        })\n        .onSelectionChange((value: RichEditorRange) => {\n          this.controller1.addTextSpan(\"\\n\" + \"触发了onSelectionChange回调，起始范围信息为：(\" + value.start + \",\" + value.end + \")\", {\n            style: {\n              fontColor: Color.Gray,\n              fontSize: 10\n            }\n          });\n        })\n        .width(300)\n        .height(100)\n        .margin(20)\n        .barState(this.bs[this.bs_num])\n        .enableKeyboardOnFocus(this.e)\n        .enableHapticFeedback(true)\n        .stopBackPress(false)\n        .scrollBarColor(ColorMetrics.resourceColor(\"#2787D9\"));\n\n      RichEditor(this.options1).width(300)\n\n      Button('设置barState为：' + this.bs_string[this.bs_num])\n        .height(30)\n        .fontSize(13)\n        .onClick(() => {\n          this.bs_num++;\n          if (this.bs_num > (this.bs.length - 1)) {\n            this.bs_num = 0;\n          }\n        })\n\n      Button('设置enableKeyboardOnFocus为：' + this.e)\n        .height(30)\n        .fontSize(13)\n        .onClick(() => {\n          this.e = !this.e;\n        })\n\n      Button('获取预上屏信息')\n        .height(30)\n        .fontSize(13)\n        .onClick(() => {\n          this.controller1.addTextSpan(\"\\n获取预上屏信息:\" + JSON.stringify(this.controller.getPreviewText()))\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970265)/* ["default"] */.A) + "",
        width: "518",
        height: "581"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例25获取光标相对组件位置的矩形",
      children: "示例25（获取光标相对组件位置的矩形）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该示例通过RichEditorBaseController的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getcaretrect18",
        children: "getCaretRect"
      }), "方法来获取当前光标相对于组件位置的Rect。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State caretRect: string = \"not found\";\n\n  build() {\n    Column() {\n      Button('get caret rect')\n        .onClick(() => {\n          let rectCaret = this.controller.getCaretRect();\n          if(rectCaret == undefined) {\n            this.caretRect = 'undefined';\n          } else {\n            this.caretRect = 'X: ' + rectCaret.x + '\\nY: ' + rectCaret.y\n              + '\\nWidth: ' + rectCaret.width + '\\nHeight: ' + rectCaret.height;\n          }\n        })\n        .fontSize(24)\n        .width(\"60%\")\n        .height(\"10%\")\n\n      Text(this.caretRect)\n        .margin(12)\n        .fontSize(24)\n\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan('12345678901234567890', {\n            style:\n            {\n              fontColor: Color.Orange,\n              fontSize: 50\n            }\n          })\n        })\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(\"100%\")\n        .height(\"60%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844128)/* ["default"] */.A) + "",
        width: "399",
        height: "339"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例26设置最大行数和最大字符数",
      children: "示例26（设置最大行数和最大字符数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxlength18",
        children: "maxLength"
      }), "设置可输入的最大字符数，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxlines18",
        children: "maxLines"
      }), "设置可输入的最大行数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorExample {\n  @State text: string = \"As the sun begins to set, casting a warm golden hue across the sky,\" +\n    \"the world seems to slow down and breathe a sigh of relief. The sky is painted with hues of orange, \" +\n    \" pink, and lavender, creating a breathtaking tapestry that stretches as far as the eye can see.\" +\n    \"The air is filled with the sweet scent of blooming flowers, mingling with the earthy aroma of freshly turned soil.\" +\n    \"it casts a warm,\" +\n    \"golden hue that spreads like liquid amber across the vast expanse of the sky.\" +\n    \"The once-blue heavens gradually transform, \" +\n    \"now painted in a breathtaking palette of soft oranges, pinks, \" +\n    \"and purples, each color blending seamlessly into the next. Wisps of clouds, tinged with fiery edges, \" +\n    \"float lazily amidst this celestial canvas,\" +\n    \"creating a scene so serene and beautiful that it almost seems to pause time itself.\" +\n    \"As the sun begins to set, casting a warm golden hue across the sky,\" +\n    \"the world seems to slow down and breathe a sigh of relief. The sky is painted with hues of orange, \" +\n    \" pink, and lavender, creating a breathtaking tapestry that stretches as far as the eye can see.\" +\n    \"The air is filled with the sweet scent of blooming flowers, mingling with the earthy aroma of freshly turned soil.\" +\n    \"it casts a warm,\" +\n    \"golden hue that spreads like liquid amber across the vast expanse of the sky.\" +\n    \"The once-blue heavens gradually transform, \";\n  @State maxLineList: (number | undefined)[] = [2, 6, undefined];\n  @State maxLineIndex: number = 0;\n  @State maxLineStringList: (string)[] = [\"2\", \"6\", \"undefined\"];\n  richEditorStyledString: MutableStyledString = new MutableStyledString(\"\");\n  controller1: RichEditorController = new RichEditorController();\n  controller2: TextInputController = new TextInputController();\n  controller3: RichEditorController = new RichEditorController();\n  controller4: RichEditorStyledStringController = new RichEditorStyledStringController();\n  controller: RichEditorController = new RichEditorController();\n  option: RichEditorOptions = { controller: this.controller };\n\n  build() {\n    Column() {\n      Text(\"当前的maxLength为7 \")\n        .margin(10)\n        .fontSize(25)\n      Row() {\n        Button(\"插入占1字符数的图片\")\n          .onClick(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller1.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"57px\", \"57px\"]\n                }\n              })\n          })\n        Button(\"插入占2字符数图片\")\n          .onClick(() => {\n            this.controller1.addSymbolSpan($r(\"sys.symbol.ohos_trash\"),\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n          })\n          .margin({ left: 20 })\n      }\n\n      RichEditor({ controller: this.controller1 })\n        .width('95%')\n        .margin(10)\n        .height(60)\n        .maxLength(7)\n        .backgroundColor('rgb(240,250,255)')\n      Text(\"当前的maxLine为 \" + this.maxLineStringList[this.maxLineIndex]).margin(10)\n        .fontSize(25)\n      Button(\"更改maxLines\").onClick(() => {\n        this.maxLineIndex++;\n        if (this.maxLineIndex > this.maxLineList.length - 1) {\n          this.maxLineIndex = 0;\n        }\n      })\n      RichEditor({ controller: this.controller3 })\n        .onReady(() => {\n          this.controller3.addTextSpan(this.text,\n            {\n              style:\n              {\n                fontColor: 'rgb(0,74,175)'\n              }\n            })\n        })\n        .margin(10)\n        .width('95%')\n        .maxLines(this.maxLineList[this.maxLineIndex])\n        .backgroundColor('rgb(240,250,255)')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462704)/* ["default"] */.A) + "",
        width: "510",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例27文本设置url样式",
      children: "示例27（文本设置Url样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，该示例通过在addTextSpan和UpdateSpanStyle接口中加入", (0,jsx_runtime.jsx)(_components.a, {
        href: "#richeditorurlstyle19",
        children: "UrlStyle"
      }), "，来实现文本点击时跳转到指定链接的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  build() {\n    Column() {\n      Row() {\n        Button(\"Add Example Url\").onClick(() => {\n          this.controller.addTextSpan(\"示例网址\", {\n            urlStyle: { url: \"https://www.example.com\" }\n          })\n        })\n        Button(\"Clear Url\").onClick(() => {\n          this.controller.updateSpanStyle({\n            start: 0,\n            textStyle: {},\n            urlStyle: { url: \"\" }\n          })\n        })\n      }\n\n      Row() {\n        RichEditor(this.options)\n          .height('35%')\n          .border({ width: 1, color: Color.Blue })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(915842)/* ["default"] */.A) + "",
        width: "367",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例28开启带样式的撤销还原能力",
      children: "示例28（开启带样式的撤销还原能力）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例对于不使用属性字符串的富文本组件，可以通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#undostyle20",
        children: "undoStyle"
      }), "属性为UndoStyle.KEEP_STYLE，以支持撤销还原时保留原内容的样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct StyledUndo {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  private start: number = 0;\n  private end: number = 0;\n  @State undoStyle: UndoStyle = UndoStyle.KEEP_STYLE;\n  build() {\n    Column() {\n      Column() {\n        Row({space:2}) {\n          Button(\"插入文本\").onClick(() => {\n            this.controller.addTextSpan(\"插入文本\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 32\n                }\n              })\n          })\n          Button(\"插入图片\").onClick(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"100px\", \"100px\"]\n                }\n              });\n          })\n          Button(\"插入Symbol\").onClick(() => {\n            this.controller.addSymbolSpan($r(\"sys.symbol.ohos_trash\"),\n              {\n                style:\n                {\n                  fontSize: 32\n                }\n              });\n          })\n        }\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .justifyContent(FlexAlign.Center)\n        .width(\"100%\")\n        .height(\"10%\")\n        Row({space:2}) {\n          Button(\"更新选中范围样式\").onClick(() => {\n            if (this.start < this.end) {\n              this.controller.updateSpanStyle({\n                start: this.start,\n                end: this.end,\n                textStyle:\n                {\n                  fontColor: Color.Red,\n                  fontWeight: FontWeight.Bolder\n                }\n              });\n            }\n          })\n          Button(\"删除选中范围内容\").onClick(() => {\n            if (this.start < this.end) {\n              this.controller.deleteSpans({\n                start: this.start,\n                end: this.end\n              })\n            }\n          })\n        }\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .justifyContent(FlexAlign.Center)\n        .width(\"100%\")\n        .height(\"10%\")\n        Row({space:2}) {\n          Button(\"撤销时不还原样式\").onClick(() => {\n            this.undoStyle = UndoStyle.CLEAR_STYLE;\n          })\n          Button(\"撤销时还原样式\").onClick(() => {\n            this.undoStyle = UndoStyle.KEEP_STYLE;\n          })\n        }\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .justifyContent(FlexAlign.Center)\n        .width(\"100%\")\n        .height(\"10%\")\n      }\n      Column() {\n        RichEditor(this.options)\n          .onReady(()=>{\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n            {\n              imageStyle:\n              {\n                size: [\"100px\", \"100px\"]\n              }\n            });\n            this.controller.addTextSpan(\"初始化图文混排内容\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 32\n                }\n              })\n            this.controller.addSymbolSpan($r(\"sys.symbol.ohos_trash\"),\n              {\n                style:\n                {\n                  fontSize: 32\n                }\n              });\n          })\n          .undoStyle(this.undoStyle)\n          .onSelect((value: RichEditorSelection) => {\n            this.start = value.selection[0];\n            this.end = value.selection[1];\n          })\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"50%\")\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315326)/* ["default"] */.A) + "",
        width: "434",
        height: "458"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例29文本设置预设段落样式",
      children: "示例29（文本设置预设段落样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#settypingparagraphstyle20",
        children: "setTypingParagraphStyle"
      }), "接口设置预设段落样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController()\n  options: RichEditorOptions = { controller: this.controller }\n  ssController: RichEditorStyledStringController = new RichEditorStyledStringController()\n  ssOptions: RichEditorStyledStringOptions = { controller: this.ssController }\n  contentChangedListener: StyledStringChangedListener = {\n    onWillChange: (value: StyledStringChangeValue) => {\n      let range = '[ ' + value.range.start + ' , ' + value.range.end + ' ]';\n      let replaceString = value.replacementString.getString();\n      console.info('styledString, onWillChange, range=' + range);\n      console.info('styledString, onWillChange, replaceString=' + replaceString);\n      let styles: Array<SpanStyle> = []\n      if (replaceString.length != 0) {\n        styles = value.replacementString.getStyles(0, replaceString.length, StyledStringKey.PARAGRAPH_STYLE)\n      }\n      styles.forEach((style) => {\n        let value = style.styledValue\n        let paraStyle: ParagraphStyle = value as ParagraphStyle\n        if (paraStyle != undefined) {\n          console.info('styledString, onWillChange, textAlign=' + JSON.stringify(paraStyle.textAlign)\n            + ', textIndent=' + JSON.stringify(paraStyle.textIndent)\n            + ', maxLines=' + JSON.stringify(paraStyle.maxLines)\n            + ', overflow=' + JSON.stringify(paraStyle.overflow)\n            + ', wordBreak=' + JSON.stringify(paraStyle.wordBreak)\n            + ', leadingMargin=' + JSON.stringify(paraStyle.leadingMargin)\n            + ', paragraphSpacing=' + JSON.stringify(paraStyle.paragraphSpacing)\n          );\n        }\n      })\n      return true;\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Text('ParaStyle')\n        // 设置预设段落样式为居中对齐\n        Button('setStyle1').onClick(() => {\n          let paragraphStyle: RichEditorParagraphStyle = {\n            textAlign: TextAlign.Center\n          }\n          this.controller.setTypingParagraphStyle(paragraphStyle)\n          this.ssController.setTypingParagraphStyle(paragraphStyle)\n        })\n        // 设置预设段落样式为左对齐、带有缩进\n        Button('setStyle2').onClick(() => {\n          let paragraphStyle: RichEditorParagraphStyle = {\n            textAlign: TextAlign.Start,\n            leadingMargin: 80\n          }\n          this.controller.setTypingParagraphStyle(paragraphStyle)\n          this.ssController.setTypingParagraphStyle(paragraphStyle)\n        })\n        // 清除预设段落样式\n        Button('clearParaStyle').onClick(() => {\n          this.controller.setTypingParagraphStyle(undefined)\n          this.ssController.setTypingParagraphStyle(undefined)\n        })\n      }\n\n      Row() {\n        Column() {\n          RichEditor(this.options)\n            .height('25%')\n            .width('100%')\n            .border({ width: 1, color: Color.Blue })\n            .onWillChange((value: RichEditorChangeValue) => {\n              console.info('controller, onWillChange, rangeBefore=' + JSON.stringify(value.rangeBefore))\n              value.replacedSpans.forEach((item: RichEditorTextSpanResult) => {\n                console.info('controller, onWillChange, replacedTextSpans=' + JSON.stringify(item))\n              })\n              return true\n            })\n          RichEditor(this.ssOptions)\n            .height('25%')\n            .width('100%')\n            .onReady(() => {\n              this.ssController.onContentChanged(this.contentChangedListener);\n            })\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例30设置装饰线粗细和多装饰线",
      children: "示例30（设置装饰线粗细和多装饰线）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationstyle",
        children: "thicknessScale"
      }), "设置装饰线粗细，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationoptions20",
        children: "enableMultiType"
      }), "设置多装饰线。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  private controller: RichEditorController = new RichEditorController();\n  private styledStringController: RichEditorStyledStringController = new RichEditorStyledStringController();\n\n  build() {\n    Column({ space: 20 }) {\n      RichEditor({ controller: this.controller })\n        .onReady(() => {\n          // 预置一段文本\n          this.controller.addTextSpan('一段预置的文本', {\n            style: {\n              fontSize: 25,\n              decoration: {\n                type: TextDecorationType.LineThrough,\n                // 设置装饰线粗细比例为2\n                thicknessScale: 2\n              }\n            }\n          })\n        })\n\n      // 设置富文本多装饰线\n      RichEditor({ controller: this.styledStringController })\n\n      Button('追加粗细比例为8的文本')\n        .fontSize(20)\n        .onClick(() => {\n          this.controller.addTextSpan('追加的文本', {\n            style: {\n              fontSize: 25,\n              decoration: {\n                type: TextDecorationType.LineThrough,\n                // 设置装饰线粗细比例为8\n                thicknessScale: 8\n              }\n            }\n          })\n        })\n\n      Button('修改全段文本的粗细比例为4')\n        .fontSize(20)\n        .onClick(() => {\n          this.controller.updateSpanStyle({\n            start: 0,\n            end: 1000, // 下标超过文本长度时，会更新整段文本\n            textStyle: {\n              decoration: {\n                type: TextDecorationType.LineThrough,\n                // 设置装饰线粗细比例为4\n                thicknessScale: 4\n              }\n            }\n          })\n        })\n\n      Button('多装饰线文本')\n        .fontSize(20)\n        .onClick(() => {\n          let mutString: MutableStyledString = new MutableStyledString('设置富文本多装饰线', [\n            {\n              start: 0,\n              length: 9,\n              styledKey: StyledStringKey.FONT,\n              styledValue: new TextStyle({ fontSize: LengthMetrics.vp(25) })\n            },\n            {\n              start: 0,\n              length: 5,\n              styledKey: StyledStringKey.DECORATION,\n              styledValue: new DecorationStyle(\n                {\n                  type: TextDecorationType.Underline,\n                },\n                {\n                  // 开启多装饰线\n                  enableMultiType: true\n                }\n              )\n            },\n            {\n              start: 2,\n              length: 4,\n              styledKey: StyledStringKey.DECORATION,\n              styledValue: new DecorationStyle(\n                {\n                  type: TextDecorationType.LineThrough,\n                },\n                {\n                  // 开启多装饰线\n                  enableMultiType: true\n                }\n              )\n            },\n            {\n              start: 4,\n              length: 5,\n              styledKey: StyledStringKey.DECORATION,\n              styledValue: new DecorationStyle(\n                {\n                  type: TextDecorationType.Overline,\n                },\n                {\n                  // 开启多装饰线\n                  enableMultiType: true\n                }\n              )\n            },\n          ])\n          this.styledStringController.setStyledString(mutString);\n        })\n    }\n    .height('100%')\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711773)/* ["default"] */.A) + "",
        width: "523",
        height: "385"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例31设置开启中西文自动间距",
      children: "示例31（设置开启中西文自动间距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enableautospacing20",
        children: "enableAutoSpacing"
      }), "属性设置中西文自动间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct AutoSpacing {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State enableAutoSpace: boolean = false;\n\n  build() {\n    Column() {\n      Column() {\n        Row({ space: 2 }) {\n          Button(\"插入中西文内容\").onClick(() => {\n            this.controller.addTextSpan(\"Add文本Span\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 20\n                }\n              })\n          })\n          Button(\"插入图片\").onClick(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"100px\", \"100px\"]\n                }\n              });\n          })\n          Button(\"插入Symbol\").onClick(() => {\n            this.controller.addSymbolSpan($r(\"sys.symbol.ohos_trash\"),\n              {\n                style:\n                {\n                  fontSize: 32\n                }\n              });\n          })\n        }\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .justifyContent(FlexAlign.Center)\n        .width(\"100%\")\n        .height(\"10%\")\n\n        Row({ space: 2 }) {\n          Button(\"开启中西文自动间距\").onClick(() => {\n            this.enableAutoSpace = true;\n          })\n          Button(\"关闭中西文自动间距\").onClick(() => {\n            this.enableAutoSpace = false;\n          })\n        }\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .justifyContent(FlexAlign.Center)\n        .width(\"100%\")\n        .height(\"10%\")\n      }\n\n      Column() {\n        RichEditor(this.options)\n          .onReady(() => {\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            this.controller.addImageSpan($r('app.media.startIcon'),\n              {\n                imageStyle:\n                {\n                  size: [\"100px\", \"100px\"]\n                }\n              });\n            this.controller.addTextSpan(\"中西文Auto Spacing自动间距\",\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 20\n                }\n              })\n            this.controller.addSymbolSpan($r(\"sys.symbol.ohos_trash\"),\n              {\n                style:\n                {\n                  fontSize: 20\n                }\n              });\n          })\n          .enableAutoSpacing(this.enableAutoSpace)\n          .borderWidth(1)\n          .borderColor(Color.Green)\n          .width(\"100%\")\n          .height(\"50%\")\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(38983)/* ["default"] */.A) + "",
        width: "504",
        height: "260"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例32设置文本选择的ai菜单",
      children: "示例32（设置文本选择的AI菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enableselecteddatadetector22",
        children: "enableSelectedDataDetector"
      }), "，配置文本选择AI菜单功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Demo32 {\n  controller: RichEditorController = new RichEditorController();\n  textSpanOptions: RichEditorTextSpanOptions = { style: { fontSize: 20 } };\n  exampleText: string = '示例网址：www.example.com';\n\n  build() {\n    Column() {\n      Row() {\n        RichEditor({ controller: this.controller })\n          .onReady(() => {\n            this.controller.addTextSpan(this.exampleText, this.textSpanOptions)\n          })\n          .copyOptions(CopyOptions.LocalDevice)\n          .enableSelectedDataDetector(true)\n          .border({ width: 1, color: Color.Black })\n          .height(300)\n          .margin(10)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(837795)/* ["default"] */.A) + "",
        width: "499",
        height: "357"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例33设置监听输入法绑定事件",
      children: "示例33（设置监听输入法绑定事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillattachime22",
        children: "onWillAttachIME"
      }), "事件监听输入法绑定事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SetOnWillAttachIME {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State message: string = \"RichEditor未绑定输入法\"\n\n  build() {\n    Column() {\n     Text(this.message)\n       .fontSize(24)\n       .width(\"100%\")\n       .textAlign(TextAlign.Center)\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan(\"RichEditor组件\",\n            {\n              style:\n              {\n                fontColor: Color.Orange,\n                fontSize: 30\n              }\n            })\n        })\n        .onWillAttachIME((value:IMEClient) => {\n          // 给输入法传递自定义消息\n          const inputConfig: InputMethodExtraConfig = {\n            customSettings: {\n              component: 'RichEditor',\n              id: 8 as number,\n              isEnable: true\n            }\n          };\n          value.setExtraConfig(inputConfig);\n          this.message = \"RichEditor已绑定输入法\"\n        })\n        .borderWidth(1)\n        .borderColor(Color.Green)\n        .width(\"100%\")\n        .height(\"20%\")\n    }\n    .height(\"100%\")\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(121059)/* ["default"] */.A) + "",
        width: "430",
        height: "459"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例34删除输入框文本尾部字符",
      children: "示例34（删除输入框文本尾部字符）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deletebackward23",
        children: "deleteBackward"
      }), "事件在编辑态用自定义键盘删除光标前字符。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n\n  // 自定义键盘删除键\n  @Builder\n  CustomKeyboardBuilder() {\n    Column() {\n      Button('DELETE')\n        .width(200)\n        .height(60)\n        .backgroundColor(Color.Blue)\n        .fontColor(Color.White)\n        .fontSize(16)\n        .onClick(() => {\n          // 调用deleteBackward接口删除字符\n          this.controller.deleteBackward()\n        })\n    }\n    .padding(10)\n    .backgroundColor(Color.Gray)\n  }\n\n  build() {\n    Column() {\n      Blank()\n        .height(400)\n      RichEditor({ controller: this.controller })\n        .customKeyboard(this.CustomKeyboardBuilder())\n        .margin(10)\n        .border({ width: 1 })\n        .height(150)\n        .borderWidth(1)\n        .borderColor(Color.Blue)\n        .width(\"100%\")\n        .onReady(() => {\n          // 设置初始文本用于测试\n          this.controller.addTextSpan('点击DELETE键测试删除功能', {\n            style: {\n              fontColor: Color.Black,\n              fontSize: 16\n            }\n          })\n        })\n    }.margin(90)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959702)/* ["default"] */.A) + "",
        width: "409",
        height: "301"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例35优化小语种文字显示",
      children: "示例35（优化小语种文字显示）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#includefontpadding23",
        children: "includeFontPadding"
      }), "属性，在首行文字顶部和尾行文字底部添加文字内边距，同时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fallbacklinespacing23",
        children: "fallbackLineSpacing"
      }), "属性实现行高自适应，基于文字实际高度动态调整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增includeFontPadding、fallbackLineSpacing属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorExample {\n  controller: RichEditorController = new RichEditorController();\n  @State fallbackLineSpacing: boolean = true;\n  @State includeFontPadding: boolean = true;\n\n  build() {\n    Column() {\n      RichEditor({ controller: this.controller })\n        .onReady(() => {\n          this.controller.addTextSpan('བོད་ཀྱི་སྐད་ཡིག་ནི་བོད་མིའི་རྒྱུན་ལྡན་པའི་སྐད་ཡིག་དང་།\\n འཇིག་རྟེན་གྱི་ཆོས་ལུགས་དང་རྒྱུན་ལྡན་པའི་ཆོས་ལུགས་ཀྱི་དོན་ཚན་གྱི་སྐད་ཡིག་རེད།\\n',\n            {\n              style: {\n                fontColor: Color.Black,\n                fontSize: \"30\",\n                lineHeight: 10\n              },\n              paragraphStyle: {\n                textAlign: TextAlign.Start,\n              }\n            })\n          this.controller.addTextSpan('བོད་ཀྱི་སྐད་ཡིག་ནི་བོད་མིའི་རྒྱུན་ལྡན་པའི་སྐད་ཡིག་དང་།\\n འཇིག་རྟེན་གྱི་ཆོས་ལུགས་དང་རྒྱུན་ལྡན་པའི་ཆོས་ལུགས་ཀྱི་དོན་ཚན་གྱི་སྐད་ཡིག་རེད།',\n            {\n              style: {\n                fontColor: Color.Black,\n                fontSize: \"30\",\n              },\n              paragraphStyle: {\n                textAlign: TextAlign.Start,\n              }\n            })\n        })\n        .width(\"100%\")\n        .height(\"35%\")\n        .border({ width: 1, radius: 5 })\n        .draggable(false)\n        .includeFontPadding(this.includeFontPadding)\n        .fallbackLineSpacing(this.fallbackLineSpacing)\n      Row() {\n        Button('开启文字行间自适应')\n          .onClick(() => {\n            this.fallbackLineSpacing = true\n          })\n          .width(\"45%\")\n          .height(\"10%\")\n          .margin({ right: 10 })\n        Button('关闭文字行间自适应')\n          .onClick(() => {\n            this.fallbackLineSpacing = false\n          })\n          .width(\"45%\")\n          .height(\"10%\")\n          .margin({ left: 5 })\n      }\n      .margin({ top: 20 })\n\n      Row() {\n        Button('开启段落首行尾行边距增高')\n          .onClick(() => {\n            this.includeFontPadding = true\n          })\n          .width(\"45%\")\n          .height(\"10%\")\n          .margin({ right: 10 })\n        Button('关闭段落首行尾行边距增高')\n          .onClick(() => {\n            this.includeFontPadding = false\n          })\n          .width(\"45%\")\n          .height(\"10%\")\n          .margin({ left: 5 })\n      }\n      .margin({ top: 20 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545456)/* ["default"] */.A) + "",
        width: "406",
        height: "420"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例36设置开启行首标点符号压缩",
      children: "示例36（设置开启行首标点符号压缩）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#compressleadingpunctuation23",
        children: "compressLeadingPunctuation"
      }), "属性设置行首标点符号压缩。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增compressLeadingPunctuation属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct CompressLeadingPunctuationDemo {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  @State compressLeadingPunctuation: boolean = false;\n  @State text: string = '「0123456789\\n『0123456789\\n（0123456789\\n《0123456789\\n〈0123456789\\n【0123456789\\n〖0123456789\\n〔0123456789\\n［0123456789\\n｛0123456789';\n\n  build() {\n    Column() {\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan(this.text)\n        })\n        .compressLeadingPunctuation(this.compressLeadingPunctuation)\n        .borderWidth(1)\n        .borderColor(Color.Green)\n        .align(Alignment.Center)\n        .height(\"30%\")\n        .width(\"50%\")\n\n      Column() {\n        Button(\"开启行首标点符号压缩\").onClick(() => {\n          this.compressLeadingPunctuation = true\n        }).margin({ top: 10 })\n        Button(\"关闭行首标点符号压缩\").onClick(() => {\n          this.compressLeadingPunctuation = false\n        }).margin({ top: 10 })\n      }\n    }.width(\"100%\").padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220964)/* ["default"] */.A) + "",
        width: "247",
        height: "353"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例37设置拖动预览样式",
      children: "示例37（设置拖动预览样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selecteddragpreviewstyle23",
        children: "selectedDragPreviewStyle"
      }), "接口设置拖动预览样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增selectedDragPreviewStyle接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct RichEditorDemo {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  build() {\n    Column({ space: 2 }) {\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan('RichEditor selectedDragPreviewStyle')\n        })\n        .borderWidth(1)\n        .borderColor(Color.Green)\n        .draggable(true)\n        .selectedDragPreviewStyle({ color: Color.Gray })\n        .width('100%')\n        .height('20%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(940823)/* ["default"] */.A) + "",
        width: "313",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例38设置单行模式",
      children: "示例38（设置单行模式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#singleline23",
        children: "singleLine"
      }), "接口设置单行模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增singleLine接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SingleLineDemo {\n  controller: RichEditorController = new RichEditorController();\n  textSpanOptions: RichEditorTextSpanOptions = { style: { fontSize: 30 } };\n  exampleText: string = '这是一段示例文本\\n这是一段示例文本\\n这是一段示例文本';\n  @State enableSingleLine: boolean = false;\n\n  build() {\n    Column() {\n      Row() {\n        RichEditor({ controller: this.controller })\n          .onReady(() => {\n            this.controller.addTextSpan(this.exampleText, this.textSpanOptions)\n          })\n          .singleLine(this.enableSingleLine)\n          .border({ width: 1, color: Color.Black })\n          .margin(10)\n      }\n      Row() {\n        Button('切换单行模式').onClick((event: ClickEvent) => {\n          this.enableSingleLine = true\n        }).margin(5)\n        Button('切换多行模式').onClick((event: ClickEvent) => {\n          this.enableSingleLine = false\n        }).margin(5)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(597400)/* ["default"] */.A) + "",
        width: "467",
        height: "241"
      })
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
233314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800138-b539b9357d82c3f34b4df3908d11c1b0.gif");

},
295976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
220964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800144-7a0e20de8d5afe78740d49ac35894450.gif");

},
354800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
545456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479793-3bc5100f5c996d00f6c2172aad4c41a4.gif");

},
492635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
881252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800136-e940ba30cf697b28712e76b22518d9a5.gif");

},
154766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959788-bf462499ee880a4f6cbfced821dbf00d.gif");

},
517266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
796597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
404364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800132-a8e7034ebdb0c0bc201743f2eba2c1d0.gif");

},
648164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479787-6d65e39ee0401da5966c414ecf89a724.gif");

},
224695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
232641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800130-00a21a2119d951145e888945055207c4.gif");

},
753733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
462704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479789-919252a4f3e53f3c48bdd1713351705e.gif");

},
970265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439833-36fcdc2a63fb5bb3141488b57226f00e.gif");

},
899291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
899109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479783-936fa7d89323a62b4bd180db8a153ac8.png");

},
711773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959790-86294b3325afedfe68755a20bcf5947d.gif");

},
121059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439837-dd70eca959c1b92ac12072739878c264.gif");

},
839310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479785-078c8b59a5184b35aa456d426292a775.gif");

},
38983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479791-37841ce1b4521a13e2fab3ed0d393c60.gif");

},
657849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439825-3320d3db12d33ca1d249c495813c410a.gif");

},
940823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439839-5b467d6218c7c8769313f5337d95cc87.gif");

},
614451(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
545941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
73736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439827-34a36bb078cfa7f330e5ae209312216e.gif");

},
959702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,R0lGODlhmQEtAXcAACH5BABKAQAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAmQEtAab4+Ph7dbAaDHfx8fHs5vT27f2podFhXaARERH48f/5+/UJCQkeG27Z2dnR0dEhISHh4eHp6enQxeXTwOeZmZnBwcFZWVkpKSmhoaEZGRkAAADJyclycnK5ubkxMTGxsbF4eHhRUVFJSUmBgYGRkZE5OTmJiYlBQUFpaWmpqalhYWH4++/r4vZ7dLj0+fliU66ko8kZC34cCIt7eaPq6f/Tv+nz+PHMyeJdWZ03L4kcCIn57v9cXJNaV5j7/eenpcoZEG3EweTQwubSwOjr4v8aC3zDuOby9fsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0M4KCtHV1sLT14Q2g9PU2uDhtSvZAArc0S7i6+y56urN3wBBDAwCMTIyRfYC/P4C/QD+C0hwoEGBCAsmPKiwIcOHCyM6lAhxosWKGClqvLgxI8ePHkN2XIhPRwwBQBjQECSv2Q0YhBK0m0lzVAKZg3CwjPayps+fpXhckwATqNGjmw7gjCbBwE6kUKMukqfUnDRqNZyaaym1q9RyL2SWW0YOQFavaNMSerEDQFlm3/+aqp3rNaw1uXRvDcjL6sBQrXwD+6xaDa+lvZA+QEjmAFGDUB8iTEKsacBiQ4gfE5I8kzBTwJVOgICEIAWyESUWQ1g9YEADDxgAUDbRAQCEDRU26B4UwQJiByAoD3KQgYKF2oM+dPiwYYDyDo0FmTgxqMLzDYMoPEAhPJEKC4k2IKAw/AF22ZfBeYY2ATSlEhdAjJhvAgTyQwtMHxqAAQMFDB1wRkgHFBSIAQkkpCCZA5Ed8kGBEP4HQAX+9WchgABsEKGBl11QQgcVqOBBCRiIcAICF5goyAAcFEdBBjA+cAEADlQQwQW/bWeIA+OZkEFsgiwA44cLPIAAChBw0AD/CBkI8pqQC1AHwGshXACkkyBwoCUHQFqAAiIDWHCBAxzU1kAG2JUIXjh+3WUAV5KIICQCdCKwAAeC9GZBCHtasEAJIQTKZ3QR2GnnAncKCEAIGtiZwQJ27qVdeoSUAOmlRQKgAqIIaHDpkQBw4GmdQlZAo6EeRNABAh2k4GMIHCxACAoeqPAABA1s8AAAI3BwI2UkLGDCIK05sAAJA1DwwSAIHOhBBxpAYIEFDSBQAQi7TnnBY4DKRisAICxwn3idQqpCayKc25pwGCDwmAW3VotCBgicQOk16z3THiYlqLDavxBwpmefjAI67bTnNXCsAxt8gG0J0QFg4gYOVNxA/3STHuKBBxVc7EADj0FQ8QYZlEDxBouhIG7FLMs2QgYgNjBAuhWkQEIGKKhs6iAbkPBAiK/x6iuOxKKAgQkllHACfI2ecIIIiC1wtAcfLNBbCDxem20DYzbwMwQomAdAbw8sO9wCI4xtQaeNGlmcICQgIAIJJjCqwgZ/jmCqgmwuBU1TcDJi2Wq6WoDrahETu9deC5C3OCEQIGC2IMSVMIgIIiCSsSFKK2qI3MKh4K4hEXhAwoodLOAABlU2eoEGw1IQHAAmlL2tB7T76oFwe21goc31/qcfAPkhXXUD02bNpJMXVNDBAw2caOri8F7ZgAan2+ZACdTmisCwAJSQgf8HFnBgAgXisjpIBjtrk68z+0qCPp301nlo4oZIjUjk9wnSrtkiCEF3BLG5QnjgBJ4rBOgIEat7yQYEnXpACjhwAgdEIAIbMB36BJECnEXAZx8oQdB69SsAUAAFFiBPIQaAgNEUQmojeNYCpGUB5W1tTCNQAdJCQCdElQxel4EA9gghGmaBbwC6SWJuSEaBimEATX1zU+AWAcLlKOcDynlRdAZAghGAQD7zWUAI5vPF+ZgqcpNz0gNCIIgThCCBJoTeITqniAxkjoGjMwQEakcB5F3ASiXwQJEusADEdCADHAChB0Y4tL2YQAQXYGMEQIarCDwAT8TCwAIscIIHqED/AzG8QAqstTxtOUAFI7AMg6qGghRsIALtEyL4BOGBWY4nTxl4gC51aZoTwQgBFojAAKHxvmbELxIkmNEhqnUeS3pKA9CMZjQRBTvbLCCNthGfIBi1gGmarYCEECQ0u6k/QsitECjwVDehickMbQsxDwgQ1yjQms004GYfWOSMvFhCQYAAPKJapwVqRSyvRbNc0RSd1pi3gUO+UIWFuF72BGGlQTQOl5Mrp2za0abCvEkSJNjdAIQ50pESJ2IlXdcAGqfSetpGcoWIAHy2+YAsZYkDGJOjITywHQ7YFH8LHESsUOBTLS2Li2tTAQZweoEP9AoBY5xlhiAAQhHujp9E//MneCpAAviQoAOYi+l4QAAbDTQAc8prkilvNB9BaeACewpB+xQm1WtaFEgD0MAYvdi415yHQsMkpt/05R5HmGABf0zsBTxwgQdoIHEn1Azx8GoC7ggCAuIqhAMesCY3au5WGjtBYAVxTjw60IQh2GQHtOSBDZjgZSEgAQYQcyMK1C4FJ+Ca0PoZqnMJYgRrGoFoN3NN1HxAA2Gi1gI20CIncUxiIaDACF67ABHQJz0KO91jKmCtFeUnT3r1YqwwsFmKhSADAoyiR6eoiAr49Is3vSkKFJVMyZZmECO440v7BwBNIiesh9COZCs13ESUdhCiO22GFskfDaTGAR24AP8JGIYY7nYAAyUwgQcckDkSZhVcUNvLPwnogcVoBrMd0DAGNACA5CGAuVt7QGOcFirTHOsDHKAMBjWwSweEIDWXhWmQSACyalFAiEY6wZXUM1j4FbYR/ZmQ2UiwLLCdB26LvKtQ2RjkNOpKSgB42mdPq7TRAuDAgkgwIjLYAFzZkQRLg5SJdnazkW6AhyowlfMgsLtBgEAEKDgdCM71sQxYUASLwZtrTberaUHAZNhiHgZehoKqmQYBX/0ZB+G1AA9waVVfEoSFV8TjxV5gPA7QgAUaZAL8VaOYzABcJAYgYXApM1AQmBnuBqFh+w4PBAikXLMu+zIZXy69hvCZqwH/MCI4MgtqDDT0mj2AghOsytgOgI1LNcXlFHCshYPwmoAg2LwOnAgBGRjAAzBQusVoJwIaRkHmprXRSE+plg8QAYe5fMs/7yWGJhCmbESQxzheuVkjxSx5Ycas4eGrycZ88iJGIMd2JdrYVYPozVSgJRBoANBayvcgItdDBNRqwIyqH73YBwASaOBRnIKppeiH7gxQCs2hern9MqAfCmjAAxSAFa2+yoEPtOxGH0jWRTfQ1AHU6AGIGcB5PyAm7oEg6RzwQH4lw8kNiEkETTwBeFqDAmV6rTEDGMEF/qU/r0GUNxwY9siqpBkWmmaSUovchH3HcPX8hb2H4G6ouXtU/20P4Gmc6QCfDsb48+oXACACUce6A+EKOE/ykoGA5S/vvAVtfvPYzA0hnL75DkSeM3X7mAgHkAIR7LKxX6rABVTF80F0IFedLMFsTHUxSjmAkMPyWgdEJ6YInKBxG1gaAjDJtfNwKcyW+qbDZbMpZIVJlwhIW55gioLoD6AECHgAvUIwYGvAehnHdAQEQCCZkVaAtiO/8iKOlgkzgyLqiptkAwQ+NtmUn3IVoGCH4AApUGG8YRoOsBgRYFvD4wAogD8fYALTZwgd4EJjoxv3YgKPkQIjkHSUczEyIw7npwyyJhjEogpmZn8maAkjmAzpFxgqiAox6An4JxUtiAwluP+COshk1vCCO/iDxPR3QDiEgtWDEkeESFgMN3gMOZiETqiEEMcMPviEVPgLS2gMTViFWsgLV1gMU7iFYGgLHfUZgBeGZugKXUgMX3iGbNgKaTgMWdiGcrgKbygMaziHeEgKdRgMcZiHfigKewgMd/iHhJgUQliIiPgJgfgLg5iIjigJi+gLffiIlBgJkdgLjViJmpgIl8gLk7iJoIgInbgLmRiKpjiGf/NRpriKnBiF6HeErLiKo6gLnxiLoTiLuVCKtkiJuIgLtbiLmtiLt6CLwJiIqPgMv1iMjyiMtkCMykiIzFgLyfiMiBiNtOCM1JiH1jgL05iNf7iNsoCN3ij/h8foDN04jngIjrEgjuh4huoIC+fYjm34jq/AjvIIhvToCvF4j2aYj61gj/xYheXYDPsYkFvoj6wAkAbphAi5CgW5kFTYkKqgkBBJhBKZCg9ZkUl4kahAkRr5gwMZa6r4kenoisrgkSS5ghx5ChmZkiBpki4Iiy6phStpCi05kyoJk8iAkjiZFyG5DDfZk4FRk6XAk0KpFkRJCkF5lHSRlKNglEzpFU4pCksZlWkxlaEAlVYZFT9JgiO5lU+IlaCglWB5FGL5CVVZllypk8dAlmr5E2fpCWn5lmbJlsbglnRJE12ZDHOZl3Bpl14ok37JF3HZCX05mHoJmGoomIg5/xeFyQmH2Zjs8JibgJeS6XdSdJk6SJmaYJmaaX6KCYdf+Zk+GZp2yJikuZaZmZqEaZrB4Jms6Qx7iYOjGZtowZmZAJu2uQy4iQmRuZvP0JuXoJvAiQzCaQm/WZzMcJyVQJzKqYSH+Jw26JqCiJrSyVHU+QvJeZ3HwJyU4JzcCQzeOQnbGZ7EMJ6SAJ7m2QuzyYS1uZ6JaYTwWZerOZ+DkZ2+oJ72iQvoGQnluZ/siZ+YaJ0AGoT1WaCTKaC8oJ8IOgv9CQn/2aD8qaCkSKASypsUSovveaGvlqG5aKEcapzRGaIPJ58kyoPrdaLu46G4wKAqqgoP+ggR+qKvEKOO4P+iNHoK7YmFG5qjyWCjjYCjPqqHLHoLMzqkMFqkzQiiSBqgB9qkP6qktSCkUKqII1ql3Sml18ikWDqhT9ql56mls0ClYKoJQMoIR1qmoXCmi0CmanoJO1oMafqmnsCmiuCmdEoJdpoIc5qnSSGm4cilflqjgBoLfTqomLCniICniPoIcUoMh9qolaCoh8CoksoIlGoIkXqpkFiosGCpnNqKXxqqtZCphQCqpGoIproThpGqt2AXZTgM2TAEguqqpPACBeAW0rACACAEPzANK/AWtsoKChCsgoADMiGsyhCsLhA/YzGsxDoISuECypoMxmoEPTADARAALdCt2/qt4Br/ruI6ruRaruZ6ruiaruq6ruzaru76rvAar/I6r/R6rt3aAts6AzlABADgA7y6DMWqAEeQAARAACxwsAdbAAWrsAxLAA37sA4bsRA7sRJbsRR7sRabsRi7sRrbsRz7sR4bsiA7siJbsiR7siabsih7sghLADRgsMn6r3ABrTRbsza7irF6s5zAFTlrDD2rs6Ugs9Dws0A7CkRbtEibtEq7tEzbtE77tFAbtVI7tVRbtVZ7tVibtVq7tVzbtV77tWAbtmI7tmRbtmZ7tmibtmq7tmzbtm77tnAbt3I7t3Rbt3Z7t3ibt3q7t3zbt377t4AbuII7uIRbuIZ7uIibuIq7c7iM27iO+7iQG7mSO7mUW7mWe7mYm7mau7mc27me+7mgG7qiO7qkW7qme7qom7qqu7qs27qu+7qwG7uyO7u0W7u2e7u4m7u6u7u827u++7vAG7zCO7zEW7zGe7zIm7zKu7zM27zO+7zQG73SO73UW72lEAgAIfkEANIA/AAsAADKAJkBVwCngICAAAD9fYCCgIB8AQLsgn6C5+bmgn58foF8BATaen2UeH6jRUfAVFPCAgnrgoGLgH2JCwrUDArNfICJCQTrAQPj9ff/EQn4CgLiVFrD6/j+fX6DCgPSgoF0CgPbAwjl09f8vdDyCwnrJiXXEgnXfH18SUvFfYJ0qKj/JiTIdnyrfHyr0sn/xcn5ytb5aW25CwvbvMj1GBXkeoGYd3q1fX2KIxziBATUCgvjBAnbgYKTiH+HgnyUFxbGiZTqV1P2h4r7CATOtrf6IhrYJyPyeoGl2Of9UVLKGhu+DRDJVlnngX51dn2eeoP1cnuDBAjCqrX+san/Bge5dHujVlm2a3K5aGn1BQnQiZP4AwjLU03TbHbnJyTnfH1zeH2eHCTMIhvGPTrVCgrENzvpFAvsgXuyppr8BgXNGxjWgoJuCgXENzj1gX76ICC6aWuyXFzFk5nnfIh2Oje7Qzrng4KdgoCsCxL0bHPEDRK9Wl2tMSy6ExO79e3/4+n+cnbCbXX+anHJUlTXdHHlSVHITE3MeHr3dIC4HCLVFhX1ERSxZGqoBATCICSzDRPZSka4Z225ZGi0MSX5mqX5iIJ6SU+0S0u9UUqocHXWc3zAOjfGZ2ftdWfnVF2rWVSlPUHtRz/UmZvagIRkgn6mQzvEiI3lLzDElZf8b4COOkTETkasEQnKaXHVWlvJHyerZWKkTEnzVE3jSFPySVLnbHGme3arcHepQ0DNVU/OS1Ldbm6ivMbvYlvkvtDuaGfIU0vzHCG6hYiWEwy1g4e1GSPgLiu5CwyfJCq7Ih+7KB3zDxSrFgyfGR2sw9fuNzGsLBuuoJbhwMXvnabhipTbiIbXgpCprbDjGBi0GBe+ZG7cd3aGXmDMYFj6cWn0RlC0YVu2en3GdHWSSkbHYme0cHChQUrJd32RcnWbaWutZWqigHV+g36sfYfrRkqvTT/6QS7jU1SdREaeS0a2P1boPkOygIRfQD6vTUyoR0a+RUS0AAAAAAAAAAAAAAAAAAAAAAAAAAAACP8ADQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyHEggI8gQ4ocSbKkyZMoU6pcCaCAS5cHDgyY2SGmzZs4c+rcybOnz59AgwodSrTozQ4dZg448NIly6dQo0qdSrWq1atRlzb9ONOo169gw4odC3Zpy5cxB2Bdy7at27dwnyrV2hQCBAACBODdq7cv379+AwMeLLgw4cOGEyNerLgx48eO8+q1C8Fpgblq42rezLmzZ5BzD3wsQBnCg7wTUKsWkJr16tawX8t2TTt27dm2c+Pefbu3bt+8fwsPrrq0ZcyfkytfzjwlcpECEEifTr369AHWs2vfzr07d+zew4v/H28dPPns4NU+CIk5c/P38ONvvtweQIn2+PPr38+/v///AAYo4IAD3leffAgmqGBVBQAw0wldnDDTDgAw1dSFMGGIloYXWshhhh+CqKGFHmJYIocnjhiiiCay2OGKBaS41Q5KnXBCUu4tqOOOPILUGnZKSSdAgzAWaeSRSCap5JJMNnnhR9EhMJOUma3X45VYxhdkCQIowIMCVmYp5oJ68fBlDRuUMB1eeo3p5ptuUSfAAzrQUUcZZaywwJ589unnn4AGKuighBZq6KGIJqroogusgGcddOgQ5XVwVmqpSm1yBR5rCniRiyudWJKKIwyUauqpqJpqQqqstqpqqavC/5pqrLGeWqurt7qqKwO0vrqrrb/mOqusxALLgCPxpGJJJ66M44UCk87E5rSXVitmU3khAMAGBaRBDwJOFOFHJYzsIYEEQXBwQwLstuvuu/DGK++89NZr77345qvvvvwmcAMH5yaxBzEZYMKEE3GE0sEGG2CX10d3WSvxgqRVVsDDaToIwBSPzJPMEx8QEMDIJJds8skop6zyyiy37PLLMMcs88wsE4CDFMtQUsUUDka3gWSTNTjx0PGhlRQENeiAgADq9BLGNU/AIDLJBExN89VYZ6311lzLXHXJBDhwgxRt2HJHEdLpUEN0HQAQMdFwN+fSAEgVwEM2TqzAChoJVP9t9ch+dy344IQXbngAgYNddQIp9FKEE0kDgFSOcVf+mV50L3HABl7QYEIPfav89+Gkl2766aOXTEECSGRAgwIlHIDjw5bXvlmUA8SYFA1hcFBBBVOnfvrwxBdvuNUE/C5BOCvQnTt4tkcfl3QtzURHPSRU7cD2fgtv/Pfgh7+yA9pvzz0BPdgDTO4NUi/9+2vNVIIODM8ADxLBa++9+Pz333/3I6PAMd6hgA3U4AH3gZ8CrzKADejACTPgRCIS4L8KWvCCoksAIxQxgwOWYIEgpIpMNsCEO7ShAoDbHwZXyELSfY0AEZCDIRTgIMqF8IYnWQp2VICKLPxNhS0MohD/aZY6AiQhA1MowSRkgsMm5nAJAxAAIJBAPpMlbohYzCLMqkYBsDGuCkoUjRPHOBLnFSEMOUAh2LTIxjbOLHkwGIQCnEfGOnKlAw+YBRJE8AGTOcCNgAzkGqlWARGUggkas6Md55cHMYRtkIKMZBtHRwARIOEcD2CiIslYAC/gQ2qUlKQos0hJAqiCCgXcZB0LQAs9YABxkBylLFkoPBjIQRRCU2UTC1ADGoABiLMMphAxkIIy5FKXN2SYH7InzGa6kQBgoEGmkHlDAbiBBM7MphYJQIIV0I6aIUQAJDxAsipq85z/++PISDCFpYEznAhQBA7KCUx02vN46gwACZgg/6V3ghABcZBnOe9JUOM9cp1MOIG2/KlA7LjhlSPLJxtDuboi2iF4FzgZATIKOMBVoItUA9sHgIeyK9aTjfnkANqmydDoRacKEIXlM0u2PX2mIAUjsAEaSPBROySAfDIYwSG+8IURjIAIF8XBEBDxtYgSIKhGNSoauCADEtx0BEMYglEPMQwRiMCoNtBqCr5gAzUGkwMqcGdL3ycdmIZ0plTr4xxaEIMYtEAIcNiFDDaagBwAgQUtCAEzXMACIXiiAttgwRoOijgR/CEEIWiBCwjLgh/sogWYZYFmAduCHxChBZudrAtMEQGR/fCkFUxpWlm6VstF5wUxDeQPPyCCQP9YwAUoEAIINKABH5SVAjeIggWigILiosAMY8AANyzwA/IlT2QJwIIFhGAG45rBFz+IghCEwAILsIC4UHhFOywAAjMQFwWSaIIDLnABB4Sso2wE6cg4sAK1ttZ2r42pCABJAPn6jRAaYEO6gkEIXWgACCTAAAaEOwIKUIADalBDAkSgCeaiMGyLw4IGPoEBD3AgXRiowM2KAQgLwIIEi+gBB9ZgAVAoQw0e8EAOLmBa7o2Svva9r+WkA9u3joyjQyziEQLsgQtQwANgiIEGAqEuFFjgC1ULcdgSsAUNKOHCsIQBEDQQBgp0r8Y3wIYFZNG9NWgADlLAAGqzKN8A4Jj/tTomWn4l2dSSHcECTVCDaTlwCQ0I4QwwgIIFfrE9HIggozfYggWUAFEuegAIFpCDBypgBxykUZ0EsIIGcNFHxI1BA9LYAw7Yy17Ele+KWlRtjuMMNx7HdM0VFJ4WLLCOJ0wtAYTogwsacQZBR8MHWPABEF7hgBwIgrnICwAGNFwNUsDBBz6wwhnUiQErWAAXFPT0bUFBCmADIQJ/DKUbOfpmVrsWAW4NIH9RNusmXMHUOfiErmWQAydbgLcWsAAbROCBY/+gzgEQwZbvfW8NoIAEIPXAJkwMUQzMId/55q0ReqBGxsL6fyQrt7nj5upI5jOfF2g3CslXAS30oQUk/7gCCvjQjB7IQAY2IIOy/e3lwGFgy1rI6svJMLULcGDhvugiBRxugWc4AwxDsEFZAfeBHEg0viXT+MbljIAewzcAQBZiPjEsslmzgYJ/hME0+GAGD0hB0D34Y00DUIFCWDhwBMgCHCyQAhob2cF+w0CFYxHuCozBAj4IQs0LSTVzShKtq566tV5LzlFyPQC30DcHkneFVoCAD+7AwCIEnQTofuCPH1C0Em5g2v5KwQcayISaCy+yClhbHubze2/VXDXgFTGQ5PYmnBVvqby8wAPibqN7P3qByJtiBJEIwx2MYIQ/YIACZ0CBBkZhAyKMgAuIIAMHqgwI5BOBCyOQgf8aNEwFMCCj+kRABMkWUWVZhAx4ZpbETZXOBSJ4maOoFqKDrSgBFXyT94snAL83Om02ROrkABVAPhdgW0YAAg6oAUZgBXtFAU8gaC7ggA4YA0qAB6sAgRjogIXAAVsGAhfogC7QBNkmBn0WCyKDgJ4AgSXogC2AB2YFSAVIAUHgfwA4NL4HfFaEUuUkAiIzB9AQAjEQAkJQCKBjWo3QBJgFWZClgRKgBHXFC1AYA1bgAY8FhVDYBPNEABxAhWvgUVzAC7pghGgYAz2AAwAHdWCTg/+3g70ngD6oOhOVbAGAA2LgAQqWACRFNUNHBh2WA35YSQSQAGdwBesCA33jYM//V0k/9XlU018/lAU3QAZeBjyG14ZBRoBwKIcS04PBh0V1hml4lz9NlVGo9kIypTois19YZ2pYl3X01HNARmNhs3ay1X+7B4pjkhePUIckU4D6h4q0iDi4mEJf1orBA0vd42WyaEVWc4zPOIn510L9RTKqSALS1Iu+iCXACAMFeHHh8zeGF0sB8AGf5ze6qDi3V1LP1YpW9DsApz1a1GZVQwL+543f2CN5MU6jOEnCc471yFhb5zLudY6mZlrq6FzouE38t4/9WCn/CAMaxV+mlUI1ozJbl2xteI1NRQBNF5BuSDWqIJET+SZ5UQXMZIcC6UcKaU7t6EfNqJGcqDhX/7c4eBhI50hj3BiHKQmOAnAHexWLV7dNT1eKmwhE74WTD2mPGvWHKXOTpIQGKBmUYpIXNDAEUimE9gRMH1lP3kOVD9lC+xdRFZACdYCVb7IUrQQDmMZYBTWXg1NnMGQLPMCWbrIUXuAIEfCDdBmYXEOQSfAGEGBDerkjA7AED9BIagc4TyeYkhkzVaR2F4AEbpBIiXkli5lHbQCLkxmaXVNJcoBIiLmZCyIaM3APpSWarqk1FCAGqFRDqHklG7AtNNAGNReZr9mbJcNRVeQBerACt3lMtUkxG/AAG8ADlYBwGOab0FlSzoUG3lBAD2Ccx5kgLnGdEEADKTBpvBmd0P85UhIwCnWwndl5JSUAAQcgCnmQCFdAjuJZUBWQBYzgBjpQADvwQempIzPRBTuQDgWgAN1wCPI5n+jUgl/ACZmkn11wmv3ZHAMgIS7RAXEgDKjQCMSHoL5JAR8QAYNADWlgIdgRoWRynQeQBmmAAFPADnvQeLfIofdEiw9mDVQwAyegMEwxASaqIJLRIB2QBifQS0eABI2nOOZzoDIaa9xDPm32YCmgDcR5I+wDlD3aHEIyNw1kDt/ACm0AA7ZXY2HTlEsqSEmaPxQgAhGgB6tgCODQMBYSJfx4pZwhADYiABDAAxCQnBOgAEVQC+TwC3gAA145UGUaTGFzBXhgDIP/UAtFcEDcaRcIoFAQSqedMakngKd6WgAlAEUIMAGnYAiUkAg3AGRkeaikaHgXEAStQAUqcArRMQBdsJ5mAgGYWqmWuhlrQhk0sgRIIR154wdHUAop0ANJIAFPkAUSEAERcC7MuqzO2qzMKq3RuqzNaq3Qiq3Pqq3Vuq3Peq3fCq7Uqq3f2q3imq3h2q3mqq7kOq7pyq3kyq7h6q7QmgVPkARJ0AMpkAlvgAlTgDA30gVLsAMVY6vuk6vMISRnESNpoRYFcBqcwgTokAcZcAQNcLEYm7Eau7Ec27EemwEXC7INILIkG7ImO7InK7JvcLEri7IuW7IomwEgK7MjO7M2//uyKZuzHruzPNuzGXsER0AF4pAL5aAAqQEAD3AXXRETToEXiYewn3G0SiETaCE7SoG0dDADWqsAXNu1Xvu1YBu2Yju2ZFu2Znu2aJu2aru2bKsAWjsDOrAeU8sUlVFD0vIRPAq1zWEXmjITFRMjO5AWBfAze9EaQHO4iNsXibu4tNMmjcsmjLu4kCu5UDK5kXu5mCu5mGu5mRu5ICEZxamfgUsa1XO1D1AD2Km3nZG0eHG3tEMXD/sAyskwkCq7SSu7pnG7upu7ttu7vvu7vZu7dpG0pjG8xlu8yEu8ynu8y5u8zFsa0Bu9z+u8xQu8u4u72Hu92iu82cu9ssswt4mJtBiCt6ARRW6juvGBGq3RTyGRJoT7uQ+juNMSv517udQCZ4p7uJV7Eo67vyEhv/Q7v/lbv/oLwAYswAgcwAosAEGCAB+0FULCGke7UOi7HMcENNJxmlNCIBzcwR6sFh8cwiIsIBnsHnlxMQy8NJJRualbwS78wjAcwzI8wzRcwzZ8wzicw2sVEAAh+QQByAABACz/ABEAGAAZAKb4+vsA/wDz+fr7+/Xr+Pjj+//B4v/b+/++6/8aeOC44v9BifAlGhpBitg6jt4gd845i+Mti+TF5P/Pz8338/fS+f+sr6+Dj5HExcWNwugSfdoLCA0SERAMFwUZe9SKl56Uk47Ly7/Q2NsRGQvHyMwSGROzubign6OQnZ2my+W+xseQmp8NCw3g8Prr7fLo8fDx6+sEAggACQDe397f2tvb298TFAvg1NbR8P7M4vcuLC80gMkRcdAagOMfd9d9e4A7gu0VfdUxjd359Po0juk0g+JFiMgdd+BOTUsicr0dedRPicV3vOoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4YAAAAGChYaDAYmKi4YDAwAEhY+Eh4OWkpAVmJWchikZLYKPnZ0ESzs4AgKklIarBA0PCpGFraSqBRBBCLSkggEUMBQvBAdFCQirvoUcDDYlHwcLCQrKywA0NyEjFwXTydeCQwADHd3f4YcdKAVAR9XphTIr3tTWvq0xJwUOPgbxglxssFCggRIJAAHMYGHhgAMP/+INwMDBxAEhENMFcASCgYoDETQgEHVtwgQkOkSA1BAxXAAGG34IqECkR8trGEjUEJSLB8J41go+uAmQgJEkOa61WuVIQAYmvRJCinotEAAh+QQByAABACz0ABEAGAAZAKD9/f0A/wACKYyPAaDrv1qUsEaLM9O6UW594EiW5ommoKi2bAvH8kzX5mtzOGlMF1kAACH5BAGCAAEALOMAEgASABgAoP/+/wD/AAIiRAKpm8iv3IHLMUuz3hrzD3bhSDbliabqypoh4onvMV1PAQA7");

},
363788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
939175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
775193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
652022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439823-d52216c3d43ed266e2cd9116c67669bc.gif");

},
915842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800140-e8c587aade7bb7fa461e9dfc94321010.gif");

},
29787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800128-86c5836c4e17f52e7df36d39e9588bfb.gif");

},
266476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439831-8ce89689a7d8f0bfe4d810d2709fefbf.gif");

},
807916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479779-1872c6ee02a501cbc8da19929f82329d.gif");

},
374110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
837795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800142-59ddb59eda24d9ed5c0525b8d0d2cc8f.gif");

},
820551(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959782-be46d51a994474325887d2c54ac2044a.gif");

},
734661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
73420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
315326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439835-0eeb9e997ceb6f4e90a78a691df55794.gif");

},
316847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959784-63f5dcd6703cc944bba8ef139077a062.gif");

},
735681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959780-ba6ab05cb8424c62d46fe532d297a34d.gif");

},
424547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959786-89de47c7021914feba8c75b62032cc35.gif");

},
320069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439829-063b1b78a9ae1b93c02d6951aab02262.png");

},
360705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
266907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
199448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479781-fd788de41d997ef2b03a0da84aecc3cb.gif");

},
823327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
743135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800134-0bb59c47ed611d1178da547bbaa0fa25.gif");

},
31698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959778-4709a7b2359f852cb8a8b8520160e36c.png");

},
597400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959794-351507e178283af23d8f585d2de1e9f9.gif");

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