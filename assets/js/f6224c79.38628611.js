"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["866197"], {
140745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_framenode_js_apis_arkui_framenode_md_f62_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-ui-interface-arkui-js-apis-arkui-framenode-js-apis-arkui-framenode-md-f62.json
var site_docs_ref_arkui_api_arkui_arkts_ui_ui_interface_arkui_js_apis_arkui_framenode_js_apis_arkui_framenode_md_f62_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode","title":"FrameNode","description":"FrameNode表示组件树的实体节点。NodeController可通过BuilderNode持有的FrameNode将其挂载到NodeContainer上，也可通过FrameNode获取RenderNode，挂载到其他FrameNode上。最佳实践请参考组件动态创建-组件动态添加、更新和删除。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode.md","sourceDirName":"arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode","slug":"/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"FrameNode","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-arkui-framenode"},"sidebar":"ref","previous":{"title":"ComponentContent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent"},"next":{"title":"Graphics","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode.md


const frontMatter = {
	title: 'FrameNode',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-arkui-framenode'
};
const contentTitle = 'FrameNode';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "LayoutConstraint12+",
  "id": "layoutconstraint12",
  "level": 2
}, {
  "value": "CrossLanguageOptions15+",
  "id": "crosslanguageoptions15",
  "level": 2
}, {
  "value": "ExpandMode15+",
  "id": "expandmode15",
  "level": 2
}, {
  "value": "InteractionEventBindingInfo19+",
  "id": "interactioneventbindinginfo19",
  "level": 2
}, {
  "value": "UIState20+",
  "id": "uistate20",
  "level": 2
}, {
  "value": "UIStatesChangeHandler20+",
  "id": "uistateschangehandler20",
  "level": 2
}, {
  "value": "FrameNode",
  "id": "framenode-1",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "getRenderNode",
  "id": "getrendernode",
  "level": 3
}, {
  "value": "isModifiable12+",
  "id": "ismodifiable12",
  "level": 3
}, {
  "value": "appendChild12+",
  "id": "appendchild12",
  "level": 3
}, {
  "value": "insertChildAfter12+",
  "id": "insertchildafter12",
  "level": 3
}, {
  "value": "removeChild12+",
  "id": "removechild12",
  "level": 3
}, {
  "value": "clearChildren12+",
  "id": "clearchildren12",
  "level": 3
}, {
  "value": "getChild12+",
  "id": "getchild12",
  "level": 3
}, {
  "value": "getChild15+",
  "id": "getchild15",
  "level": 3
}, {
  "value": "getFirstChildIndexWithoutExpand15+",
  "id": "getfirstchildindexwithoutexpand15",
  "level": 3
}, {
  "value": "getLastChildIndexWithoutExpand15+",
  "id": "getlastchildindexwithoutexpand15",
  "level": 3
}, {
  "value": "getFirstChild12+",
  "id": "getfirstchild12",
  "level": 3
}, {
  "value": "getNextSibling12+",
  "id": "getnextsibling12",
  "level": 3
}, {
  "value": "getPreviousSibling12+",
  "id": "getprevioussibling12",
  "level": 3
}, {
  "value": "getParent12+",
  "id": "getparent12",
  "level": 3
}, {
  "value": "getChildrenCount12+",
  "id": "getchildrencount12",
  "level": 3
}, {
  "value": "moveTo18+",
  "id": "moveto18",
  "level": 3
}, {
  "value": "getPositionToWindow12+",
  "id": "getpositiontowindow12",
  "level": 3
}, {
  "value": "getPositionToParent12+",
  "id": "getpositiontoparent12",
  "level": 3
}, {
  "value": "getPositionToScreen12+",
  "id": "getpositiontoscreen12",
  "level": 3
}, {
  "value": "getGlobalPositionOnDisplay20+",
  "id": "getglobalpositionondisplay20",
  "level": 3
}, {
  "value": "getPositionToParentWithTransform12+",
  "id": "getpositiontoparentwithtransform12",
  "level": 3
}, {
  "value": "getPositionToWindowWithTransform12+",
  "id": "getpositiontowindowwithtransform12",
  "level": 3
}, {
  "value": "getPositionToScreenWithTransform12+",
  "id": "getpositiontoscreenwithtransform12",
  "level": 3
}, {
  "value": "getMeasuredSize12+",
  "id": "getmeasuredsize12",
  "level": 3
}, {
  "value": "getLayoutPosition12+",
  "id": "getlayoutposition12",
  "level": 3
}, {
  "value": "getUserConfigBorderWidth12+",
  "id": "getuserconfigborderwidth12",
  "level": 3
}, {
  "value": "getUserConfigPadding12+",
  "id": "getuserconfigpadding12",
  "level": 3
}, {
  "value": "getUserConfigMargin12+",
  "id": "getuserconfigmargin12",
  "level": 3
}, {
  "value": "getUserConfigSize12+",
  "id": "getuserconfigsize12",
  "level": 3
}, {
  "value": "getId12+",
  "id": "getid12",
  "level": 3
}, {
  "value": "getUniqueId12+",
  "id": "getuniqueid12",
  "level": 3
}, {
  "value": "getNodeType12+",
  "id": "getnodetype12",
  "level": 3
}, {
  "value": "getOpacity12+",
  "id": "getopacity12",
  "level": 3
}, {
  "value": "isVisible12+",
  "id": "isvisible12",
  "level": 3
}, {
  "value": "isClipToFrame12+",
  "id": "iscliptoframe12",
  "level": 3
}, {
  "value": "isAttached12+",
  "id": "isattached12",
  "level": 3
}, {
  "value": "isDisposed20+",
  "id": "isdisposed20",
  "level": 3
}, {
  "value": "getInspectorInfo12+",
  "id": "getinspectorinfo12",
  "level": 3
}, {
  "value": "getCustomProperty12+",
  "id": "getcustomproperty12",
  "level": 3
}, {
  "value": "dispose12+",
  "id": "dispose12",
  "level": 3
}, {
  "value": "commonAttribute12+",
  "id": "commonattribute12",
  "level": 3
}, {
  "value": "commonEvent12+",
  "id": "commonevent12",
  "level": 3
}, {
  "value": "gestureEvent14+",
  "id": "gestureevent14",
  "level": 3
}, {
  "value": "onDraw12+",
  "id": "ondraw12",
  "level": 3
}, {
  "value": "onMeasure12+",
  "id": "onmeasure12",
  "level": 3
}, {
  "value": "onLayout12+",
  "id": "onlayout12",
  "level": 3
}, {
  "value": "setMeasuredSize12+",
  "id": "setmeasuredsize12",
  "level": 3
}, {
  "value": "setLayoutPosition12+",
  "id": "setlayoutposition12",
  "level": 3
}, {
  "value": "measure12+",
  "id": "measure12",
  "level": 3
}, {
  "value": "layout12+",
  "id": "layout12",
  "level": 3
}, {
  "value": "setNeedsLayout12+",
  "id": "setneedslayout12",
  "level": 3
}, {
  "value": "invalidate12+",
  "id": "invalidate12",
  "level": 3
}, {
  "value": "addComponentContent12+",
  "id": "addcomponentcontent12",
  "level": 3
}, {
  "value": "disposeTree12+",
  "id": "disposetree12",
  "level": 3
}, {
  "value": "setCrossLanguageOptions15+",
  "id": "setcrosslanguageoptions15",
  "level": 3
}, {
  "value": "getCrossLanguageOptions15+",
  "id": "getcrosslanguageoptions15",
  "level": 3
}, {
  "value": "getInteractionEventBindingInfo19+",
  "id": "getinteractioneventbindinginfo19",
  "level": 3
}, {
  "value": "recycle18+",
  "id": "recycle18",
  "level": 3
}, {
  "value": "reuse18+",
  "id": "reuse18",
  "level": 3
}, {
  "value": "addSupportedUIStates20+",
  "id": "addsupporteduistates20",
  "level": 3
}, {
  "value": "removeSupportedUIStates20+",
  "id": "removesupporteduistates20",
  "level": 3
}, {
  "value": "createAnimation20+",
  "id": "createanimation20",
  "level": 3
}, {
  "value": "cancelAnimations20+",
  "id": "cancelanimations20",
  "level": 3
}, {
  "value": "getNodePropertyValue20+",
  "id": "getnodepropertyvalue20",
  "level": 3
}, {
  "value": "invalidateAttributes21+",
  "id": "invalidateattributes21",
  "level": 3
}, {
  "value": "adoptChild22+",
  "id": "adoptchild22",
  "level": 3
}, {
  "value": "removeAdoptedChild22+",
  "id": "removeadoptedchild22",
  "level": 3
}, {
  "value": "convertPosition22+",
  "id": "convertposition22",
  "level": 3
}, {
  "value": "isInRenderState23+",
  "id": "isinrenderstate23",
  "level": 3
}, {
  "value": "isOnMainTree23+",
  "id": "isonmaintree23",
  "level": 3
}, {
  "value": "convertPositionToWindow23+",
  "id": "convertpositiontowindow23",
  "level": 3
}, {
  "value": "convertPositionFromWindow23+",
  "id": "convertpositionfromwindow23",
  "level": 3
}, {
  "value": "TypedFrameNode12+",
  "id": "typedframenode12",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "typeNode12+",
  "id": "typenode12",
  "level": 2
}, {
  "value": "Text12+",
  "id": "text12",
  "level": 3
}, {
  "value": "createNode(&#39;Text&#39;)12+",
  "id": "createnodetext12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Text&#39;)20+",
  "id": "getattributetext20",
  "level": 3
}, {
  "value": "bindController(&#39;Text&#39;)20+",
  "id": "bindcontrollertext20",
  "level": 3
}, {
  "value": "Column12+",
  "id": "column12",
  "level": 3
}, {
  "value": "createNode(&#39;Column&#39;)12+",
  "id": "createnodecolumn12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Column&#39;)20+",
  "id": "getattributecolumn20",
  "level": 3
}, {
  "value": "Row12+",
  "id": "row12",
  "level": 3
}, {
  "value": "createNode(&#39;Row&#39;)12+",
  "id": "createnoderow12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Row&#39;)20+",
  "id": "getattributerow20",
  "level": 3
}, {
  "value": "Stack12+",
  "id": "stack12",
  "level": 3
}, {
  "value": "createNode(&#39;Stack&#39;)12+",
  "id": "createnodestack12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Stack&#39;)20+",
  "id": "getattributestack20",
  "level": 3
}, {
  "value": "GridRow12+",
  "id": "gridrow12",
  "level": 3
}, {
  "value": "createNode(&#39;GridRow&#39;)12+",
  "id": "createnodegridrow12",
  "level": 3
}, {
  "value": "GridCol12+",
  "id": "gridcol12",
  "level": 3
}, {
  "value": "createNode(&#39;GridCol&#39;)12+",
  "id": "createnodegridcol12",
  "level": 3
}, {
  "value": "Flex12+",
  "id": "flex12",
  "level": 3
}, {
  "value": "createNode(&#39;Flex&#39;)12+",
  "id": "createnodeflex12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Flex&#39;)20+",
  "id": "getattributeflex20",
  "level": 3
}, {
  "value": "Swiper12+",
  "id": "swiper12",
  "level": 3
}, {
  "value": "createNode(&#39;Swiper&#39;)12+",
  "id": "createnodeswiper12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Swiper&#39;)20+",
  "id": "getattributeswiper20",
  "level": 3
}, {
  "value": "bindController(&#39;Swiper&#39;)20+",
  "id": "bindcontrollerswiper20",
  "level": 3
}, {
  "value": "Progress12+",
  "id": "progress12",
  "level": 3
}, {
  "value": "createNode(&#39;Progress&#39;)12+",
  "id": "createnodeprogress12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Progress&#39;)20+",
  "id": "getattributeprogress20",
  "level": 3
}, {
  "value": "Scroll12+",
  "id": "scroll12",
  "level": 3
}, {
  "value": "createNode(&#39;Scroll&#39;)12+",
  "id": "createnodescroll12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Scroll&#39;)15+",
  "id": "getattributescroll15",
  "level": 3
}, {
  "value": "getEvent(&#39;Scroll&#39;)19+",
  "id": "geteventscroll19",
  "level": 3
}, {
  "value": "bindController(&#39;Scroll&#39;)15+",
  "id": "bindcontrollerscroll15",
  "level": 3
}, {
  "value": "RelativeContainer12+",
  "id": "relativecontainer12",
  "level": 3
}, {
  "value": "createNode(&#39;RelativeContainer&#39;)12+",
  "id": "createnoderelativecontainer12",
  "level": 3
}, {
  "value": "getAttribute(&#39;RelativeContainer&#39;)20+",
  "id": "getattributerelativecontainer20",
  "level": 3
}, {
  "value": "Divider12+",
  "id": "divider12",
  "level": 3
}, {
  "value": "createNode(&#39;Divider&#39;)12+",
  "id": "createnodedivider12",
  "level": 3
}, {
  "value": "LoadingProgress12+",
  "id": "loadingprogress12",
  "level": 3
}, {
  "value": "createNode(&#39;LoadingProgress&#39;)12+",
  "id": "createnodeloadingprogress12",
  "level": 3
}, {
  "value": "getAttribute(&#39;LoadingProgress&#39;)20+",
  "id": "getattributeloadingprogress20",
  "level": 3
}, {
  "value": "Search12+",
  "id": "search12",
  "level": 3
}, {
  "value": "createNode(&#39;Search&#39;)12+",
  "id": "createnodesearch12",
  "level": 3
}, {
  "value": "Blank12+",
  "id": "blank12",
  "level": 3
}, {
  "value": "createNode(&#39;Blank&#39;)12+",
  "id": "createnodeblank12",
  "level": 3
}, {
  "value": "Image12+",
  "id": "image12",
  "level": 3
}, {
  "value": "createNode(&#39;Image&#39;)12+",
  "id": "createnodeimage12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Image&#39;)20+",
  "id": "getattributeimage20",
  "level": 3
}, {
  "value": "List12+",
  "id": "list12",
  "level": 3
}, {
  "value": "createNode(&#39;List&#39;)12+",
  "id": "createnodelist12",
  "level": 3
}, {
  "value": "getEvent(&#39;List&#39;)19+",
  "id": "geteventlist19",
  "level": 3
}, {
  "value": "getAttribute(&#39;List&#39;)20+",
  "id": "getattributelist20",
  "level": 3
}, {
  "value": "bindController(&#39;List&#39;)20+",
  "id": "bindcontrollerlist20",
  "level": 3
}, {
  "value": "ListItem12+",
  "id": "listitem12",
  "level": 3
}, {
  "value": "createNode(&#39;ListItem&#39;)12+",
  "id": "createnodelistitem12",
  "level": 3
}, {
  "value": "getAttribute(&#39;ListItem&#39;)20+",
  "id": "getattributelistitem20",
  "level": 3
}, {
  "value": "TextInput12+",
  "id": "textinput12",
  "level": 3
}, {
  "value": "createNode(&#39;TextInput&#39;)12+",
  "id": "createnodetextinput12",
  "level": 3
}, {
  "value": "getAttribute(&#39;TextInput&#39;)20+",
  "id": "getattributetextinput20",
  "level": 3
}, {
  "value": "bindController(&#39;TextInput&#39;)20+",
  "id": "bindcontrollertextinput20",
  "level": 3
}, {
  "value": "Button12+",
  "id": "button12",
  "level": 3
}, {
  "value": "createNode(&#39;Button&#39;)12+",
  "id": "createnodebutton12",
  "level": 3
}, {
  "value": "getAttribute(&#39;Button&#39;)20+",
  "id": "getattributebutton20",
  "level": 3
}, {
  "value": "ListItemGroup12+",
  "id": "listitemgroup12",
  "level": 3
}, {
  "value": "createNode(&#39;ListItemGroup&#39;)12+",
  "id": "createnodelistitemgroup12",
  "level": 3
}, {
  "value": "getAttribute(&#39;ListItemGroup&#39;)20+",
  "id": "getattributelistitemgroup20",
  "level": 3
}, {
  "value": "WaterFlow12+",
  "id": "waterflow12",
  "level": 3
}, {
  "value": "createNode(&#39;WaterFlow&#39;)12+",
  "id": "createnodewaterflow12",
  "level": 3
}, {
  "value": "getEvent(&#39;WaterFlow&#39;)19+",
  "id": "geteventwaterflow19",
  "level": 3
}, {
  "value": "getAttribute(&#39;WaterFlow&#39;)20+",
  "id": "getattributewaterflow20",
  "level": 3
}, {
  "value": "bindController(&#39;WaterFlow&#39;)20+",
  "id": "bindcontrollerwaterflow20",
  "level": 3
}, {
  "value": "FlowItem12+",
  "id": "flowitem12",
  "level": 3
}, {
  "value": "createNode(&#39;FlowItem&#39;)12+",
  "id": "createnodeflowitem12",
  "level": 3
}, {
  "value": "getAttribute(&#39;FlowItem&#39;)20+",
  "id": "getattributeflowitem20",
  "level": 3
}, {
  "value": "XComponent12+",
  "id": "xcomponent12",
  "level": 3
}, {
  "value": "createNode(&#39;XComponent&#39;)12+",
  "id": "createnodexcomponent12",
  "level": 3
}, {
  "value": "createNode(&#39;XComponent&#39;)12+",
  "id": "createnodexcomponent12-1",
  "level": 3
}, {
  "value": "createNode(&#39;XComponent&#39;)19+",
  "id": "createnodexcomponent19",
  "level": 3
}, {
  "value": "getAttribute(&#39;XComponent&#39;)20+",
  "id": "getattributexcomponent20",
  "level": 3
}, {
  "value": "QRCode14+",
  "id": "qrcode14",
  "level": 3
}, {
  "value": "createNode(&#39;QRCode&#39;)14+",
  "id": "createnodeqrcode14",
  "level": 3
}, {
  "value": "Badge14+",
  "id": "badge14",
  "level": 3
}, {
  "value": "createNode(&#39;Badge&#39;)14+",
  "id": "createnodebadge14",
  "level": 3
}, {
  "value": "Grid14+",
  "id": "grid14",
  "level": 3
}, {
  "value": "createNode(&#39;Grid&#39;)14+",
  "id": "createnodegrid14",
  "level": 3
}, {
  "value": "getEvent(&#39;Grid&#39;)19+",
  "id": "geteventgrid19",
  "level": 3
}, {
  "value": "getAttribute(&#39;Grid&#39;)20+",
  "id": "getattributegrid20",
  "level": 3
}, {
  "value": "bindController(&#39;Grid&#39;)20+",
  "id": "bindcontrollergrid20",
  "level": 3
}, {
  "value": "GridItem14+",
  "id": "griditem14",
  "level": 3
}, {
  "value": "createNode(&#39;GridItem&#39;)14+",
  "id": "createnodegriditem14",
  "level": 3
}, {
  "value": "getAttribute(&#39;GridItem&#39;)20+",
  "id": "getattributegriditem20",
  "level": 3
}, {
  "value": "TextClock14+",
  "id": "textclock14",
  "level": 3
}, {
  "value": "createNode(&#39;TextClock&#39;)14+",
  "id": "createnodetextclock14",
  "level": 3
}, {
  "value": "TextTimer14+",
  "id": "texttimer14",
  "level": 3
}, {
  "value": "createNode(&#39;TextTimer&#39;)14+",
  "id": "createnodetexttimer14",
  "level": 3
}, {
  "value": "Marquee14+",
  "id": "marquee14",
  "level": 3
}, {
  "value": "createNode(&#39;Marquee&#39;)14+",
  "id": "createnodemarquee14",
  "level": 3
}, {
  "value": "TextArea14+",
  "id": "textarea14",
  "level": 3
}, {
  "value": "createNode(&#39;TextArea&#39;)14+",
  "id": "createnodetextarea14",
  "level": 3
}, {
  "value": "getAttribute(&#39;TextArea&#39;)20+",
  "id": "getattributetextarea20",
  "level": 3
}, {
  "value": "bindController(&#39;TextArea&#39;)20+",
  "id": "bindcontrollertextarea20",
  "level": 3
}, {
  "value": "SymbolGlyph14+",
  "id": "symbolglyph14",
  "level": 3
}, {
  "value": "createNode(&#39;SymbolGlyph&#39;)14+",
  "id": "createnodesymbolglyph14",
  "level": 3
}, {
  "value": "Checkbox18+",
  "id": "checkbox18",
  "level": 3
}, {
  "value": "createNode(&#39;Checkbox&#39;)18+",
  "id": "createnodecheckbox18",
  "level": 3
}, {
  "value": "getAttribute(&#39;Checkbox&#39;)20+",
  "id": "getattributecheckbox20",
  "level": 3
}, {
  "value": "CheckboxGroup18+",
  "id": "checkboxgroup18",
  "level": 3
}, {
  "value": "createNode(&#39;CheckboxGroup&#39;)18+",
  "id": "createnodecheckboxgroup18",
  "level": 3
}, {
  "value": "Rating18+",
  "id": "rating18",
  "level": 3
}, {
  "value": "createNode(&#39;Rating&#39;)18+",
  "id": "createnoderating18",
  "level": 3
}, {
  "value": "Radio18+",
  "id": "radio18",
  "level": 3
}, {
  "value": "createNode(&#39;Radio&#39;)18+",
  "id": "createnoderadio18",
  "level": 3
}, {
  "value": "getAttribute(&#39;Radio&#39;)20+",
  "id": "getattributeradio20",
  "level": 3
}, {
  "value": "Slider18+",
  "id": "slider18",
  "level": 3
}, {
  "value": "createNode(&#39;Slider&#39;)18+",
  "id": "createnodeslider18",
  "level": 3
}, {
  "value": "getAttribute(&#39;Slider&#39;)20+",
  "id": "getattributeslider20",
  "level": 3
}, {
  "value": "Select18+",
  "id": "select18",
  "level": 3
}, {
  "value": "createNode(&#39;Select&#39;)18+",
  "id": "createnodeselect18",
  "level": 3
}, {
  "value": "Toggle18+",
  "id": "toggle18",
  "level": 3
}, {
  "value": "createNode(&#39;Toggle&#39;)18+",
  "id": "createnodetoggle18",
  "level": 3
}, {
  "value": "getAttribute(&#39;Toggle&#39;)20+",
  "id": "getattributetoggle20",
  "level": 3
}, {
  "value": "NodeAdapter12+",
  "id": "nodeadapter12",
  "level": 2
}, {
  "value": "constructor12+",
  "id": "constructor12",
  "level": 3
}, {
  "value": "dispose12+",
  "id": "dispose12-1",
  "level": 3
}, {
  "value": "totalNodeCount12+",
  "id": "totalnodecount12",
  "level": 3
}, {
  "value": "reloadAllItems12+",
  "id": "reloadallitems12",
  "level": 3
}, {
  "value": "reloadItem12+",
  "id": "reloaditem12",
  "level": 3
}, {
  "value": "removeItem12+",
  "id": "removeitem12",
  "level": 3
}, {
  "value": "insertItem12+",
  "id": "insertitem12",
  "level": 3
}, {
  "value": "moveItem12+",
  "id": "moveitem12",
  "level": 3
}, {
  "value": "getAllAvailableItems12+",
  "id": "getallavailableitems12",
  "level": 3
}, {
  "value": "onAttachToNode12+",
  "id": "onattachtonode12",
  "level": 3
}, {
  "value": "onDetachFromNode12+",
  "id": "ondetachfromnode12",
  "level": 3
}, {
  "value": "onGetChildId12+",
  "id": "ongetchildid12",
  "level": 3
}, {
  "value": "onCreateChild12+",
  "id": "oncreatechild12",
  "level": 3
}, {
  "value": "onDisposeChild12+",
  "id": "ondisposechild12",
  "level": 3
}, {
  "value": "onUpdateChild12+",
  "id": "onupdatechild12",
  "level": 3
}, {
  "value": "attachNodeAdapter12+",
  "id": "attachnodeadapter12",
  "level": 3
}, {
  "value": "detachNodeAdapter12+",
  "id": "detachnodeadapter12",
  "level": 3
}, {
  "value": "isDisposed20+",
  "id": "isdisposed20-1",
  "level": 3
}, {
  "value": "自定义具体类型节点示例",
  "id": "自定义具体类型节点示例",
  "level": 2
}, {
  "value": "节点操作示例",
  "id": "节点操作示例",
  "level": 2
}, {
  "value": "LazyForEach场景节点操作示例",
  "id": "lazyforeach场景节点操作示例",
  "level": 2
}, {
  "value": "基础事件示例",
  "id": "基础事件示例",
  "level": 2
}, {
  "value": "LazyForEach场景基础事件使用示例",
  "id": "lazyforeach场景基础事件使用示例",
  "level": 2
}, {
  "value": "手势事件示例",
  "id": "手势事件示例",
  "level": 2
}, {
  "value": "节点自定义示例",
  "id": "节点自定义示例",
  "level": 2
}, {
  "value": "NodeAdapter使用示例",
  "id": "nodeadapter使用示例",
  "level": 2
}, {
  "value": "节点复用回收使用示例",
  "id": "节点复用回收使用示例",
  "level": 2
}, {
  "value": "组件设置和删除多态样式状态示例",
  "id": "组件设置和删除多态样式状态示例",
  "level": 2
}, {
  "value": "动画创建与取消示例",
  "id": "动画创建与取消示例",
  "level": 2
}, {
  "value": "滚动事件示例",
  "id": "滚动事件示例",
  "level": 2
}, {
  "value": "检验FrameNode是否有效示例",
  "id": "检验framenode是否有效示例",
  "level": 2
}, {
  "value": "检验NodeAdapter是否有效示例",
  "id": "检验nodeadapter是否有效示例",
  "level": 2
}, {
  "value": "获取根节点示例",
  "id": "获取根节点示例",
  "level": 2
}, {
  "value": "接纳为附属节点示例",
  "id": "接纳为附属节点示例",
  "level": 2
}, {
  "value": "局部与窗口坐标转化示例",
  "id": "局部与窗口坐标转化示例",
  "level": 2
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
    p: "p",
    pre: "pre",
    strong: "strong",
    t: "t",
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
        id: "framenode",
        children: "FrameNode"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FrameNode表示组件树的实体节点。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "持有的FrameNode将其挂载到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), "上，也可通过FrameNode获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "，挂载到其他FrameNode上。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-ui-dynamic-operations#section153921947151012",
        children: "组件动态创建-组件动态添加、更新和删除"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64220)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前不支持在预览器中使用FrameNode节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FrameNode节点暂不支持拖拽。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FrameNode对象不支持使用JSON序列化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
          children: "UI上下文不明确"
        }), "的场景中调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#framenode-1",
          children: "FrameNode"
        }), "对象的接口时，建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
          children: "UIContext"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#runscopedtask",
          children: "runScopedTask"
        }), "接口明确UI上下文，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#%E6%89%A7%E8%A1%8C%E7%BB%91%E5%AE%9Aui%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%97%AD%E5%8C%85",
          children: "执行绑定UI实例的闭包"
        }), "示例。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, LayoutConstraint, ExpandMode, typeNode, NodeAdapter } from \"@kit.ArkUI\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutconstraint12",
      children: "LayoutConstraint12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述组件的布局约束。"
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
            children: "maxSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "percentReference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子节点计算百分比时的尺寸基准。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "crosslanguageoptions15",
      children: "CrossLanguageOptions15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口用于配置或查询FrameNode的跨语言访问权限。例如，针对ArkTS语言创建的节点，可通过该接口控制是否允许通过非ArkTS语言进行属性访问或修改。"
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
            children: "attributeSetting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode是否支持跨ArkTS语言进行属性设置。  true表示支持跨ArkTS语言进行属性设置，false表示不支持跨ArkTS语言进行属性设置。  默认为false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandmode15",
      children: "ExpandMode15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子节点展开模式枚举。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NOT_EXPAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示不展开当前FrameNode的子节点。如果FrameNode包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
              children: "LazyForEach"
            }), "子节点，获取在主节点树上的子节点时，不展开当前FrameNode的子节点。子节点序列号按在主节点树上的子节点计算。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示展开当前FrameNode的子节点。如果FrameNode包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
              children: "LazyForEach"
            }), "子节点，获取所有子节点时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAZY_EXPAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示按需展开当前FrameNode的子节点。如果FrameNode包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
              children: "LazyForEach"
            }), "子节点，获取在主树上的子节点时，不展开当前FrameNode的子节点；获取不在主树上的子节点时，展开当前FrameNode的子节点。子节点序列号按所有子节点计算。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interactioneventbindinginfo19",
      children: "InteractionEventBindingInfo19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件的交互事件绑定状态信息。如果当前节点上绑定了所要查询的交互事件，调用查询接口时返回一个InteractionEventBindingInfo对象，指示事件绑定详细信息。"
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
            children: "baseEventRegistered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否以声明方式绑定事件。  true表示以声明方式绑定事件，false表示没有以声明方式绑定事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeEventRegistered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否以自定义组件节点的方式绑定事件，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%9F%BA%E7%A1%80%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
              children: "基础事件示例"
            }), "  true表示以自定义组件节点的方式绑定事件，false表示没有以自定义组件节点的方式绑定事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nativeEventRegistered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否以注册节点事件（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent",
              children: "registerNodeEvent"
            }), "）的方式绑定事件。  true表示以注册节点事件的方式绑定事件，false表示没有以注册节点事件的方式绑定事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "builtInEventRegistered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件是否绑定内置事件(组件内部定义的事件, 无需开发者手动绑定)。  true表示组件绑定内置事件，false表示组件没有绑定内置事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uistate20",
      children: "UIState20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多态样式状态枚举，用于处理多态样式。"
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
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRESSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获焦状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁用状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 << 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中状态。  仅特定的组件支持此状态：Checkbox、Radio、Toggle、List、Grid、MenuItem。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uistateschangehandler20",
      children: "UIStatesChangeHandler20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type UIStatesChangeHandler = (node: FrameNode, currentUIStates: number) => void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当UI状态发生变化时触发的回调。接收回调触发时的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#uistate20",
        children: "UIState"
      }), "状态，该参数的取值为UIState状态枚举值或其运算结果。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发UI状态变化的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentUIStates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调触发时当前的UI状态。  可以通过位与运算判断当前包含哪些", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uistate20",
              children: "UIState"
            }), "状态。  位与运算方法：if (currentState & UIState.PRESSED == UIState.PRESSED)。  一般的UIState状态检查可以直接判断：if (currentState == UIState.PRESSED)。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framenode-1",
      children: "FrameNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(uiContext: UIContext)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode的构造函数。"
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
            children: "uiContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getrendernode",
      children: "getRenderNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRenderNode(): RenderNode | null"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取FrameNode中持有的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
              children: "RenderNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    // 获取rootNode持有的RenderNode\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode !== null) {\n      renderNode.size = { width: 100, height: 100 };\n      renderNode.backgroundColor = 0XFFFF0000;\n    }\n\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ismodifiable12",
      children: "isModifiable12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isModifiable(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前节点是否可修改。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["判断当前节点是否可修改。  true表示当前节点可修改，false表示当前节点不可修改。  当节点为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E8%8A%82%E7%82%B9-framenode",
              children: "自定义组件节点"
            }), "中的系统组件代理节点或节点已经", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dispose12",
              children: "dispose"
            }), "时返回false。  当返回false时，当前FrameNode不支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#appendchild12",
              children: "appendChild"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#insertchildafter12",
              children: "insertChildAfter"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#removechild12",
              children: "removeChild"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clearchildren12",
              children: "clearChildren"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#createanimation20",
              children: "createAnimation"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cancelanimations20",
              children: "cancelAnimations"
            }), "的操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "appendchild12",
      children: "appendChild12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "appendChild(node: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在FrameNode最后一个子节点后添加新的子节点。当前FrameNode如果不可修改，抛出异常信息。", (0,jsx_runtime.jsx)(_components.a, {
        href: "#typenode12",
        children: "typeNode"
      }), "在appendChild时会校验子组件类型或个数，不满足时抛出异常信息，限制情况请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "#typenode12",
        children: "typeNode"
      }), "描述。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的FrameNode。  node节点不可以为声明式创建的节点，即不可修改的FrameNode。仅有从BuilderNode中获取的声明式节点可以作为子节点。若子节点不符合规格，则抛出异常信息。  node节点不可以拥有父节点，否则抛出异常信息。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: \"The parameter 'node' is invalid: it cannot be adopted.\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insertchildafter12",
      children: "insertChildAfter12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "insertChildAfter(child: FrameNode, sibling: FrameNode | null): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在FrameNode指定子节点之后添加新的子节点。当前FrameNode如果不可修改，抛出异常信息。"
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
            children: "child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要添加的子节点。  child节点不可以为声明式创建的节点，即不可修改的FrameNode。仅有从BuilderNode中获取的声明式节点可以作为子节点。若子节点不符合规格，则抛出异常信息。  child节点不可以拥有父节点，否则抛出异常信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sibling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: \"The parameter 'child' is invalid: it cannot be adopted.\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removechild12",
      children: "removeChild12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeChild(node: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从FrameNode中删除指定的子节点。当前FrameNode如果不可修改，抛出异常信息。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要删除的子节点。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
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
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clearchildren12",
      children: "clearChildren12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearChildren(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除当前FrameNode的所有子节点。当前FrameNode如果不可修改，抛出异常信息。"
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
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
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
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getchild12",
      children: "getChild12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getChild(index: number): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点指定位置的子节点。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要查询的子节点的序列号。  index取值范围为[0, +∞)，若当前节点有n个子节点，index取值有效范围为[0, n-1]。"
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
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getchild15",
      children: "getChild15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getChild(index: number, expandMode?: ExpandMode): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点指定位置的子节点，支持指定子节点展开模式。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要查询的子节点的序列号。  index取值范围为[0, +∞)，若当前节点有n个子节点，index取值有效范围为[0, n-1]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expandMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#expandmode15",
              children: "ExpandMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定子节点展开模式。  默认值：ExpandMode.EXPAND"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lazyforeach%E5%9C%BA%E6%99%AF%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "LazyForEach场景节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getfirstchildindexwithoutexpand15",
      children: "getFirstChildIndexWithoutExpand15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFirstChildIndexWithoutExpand(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点第一个在主节点树上的子节点的序列号。子节点序列号按所有子节点计算。"
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
            children: "当前节点第一个在主节点树上的子节点的序列号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lazyforeach%E5%9C%BA%E6%99%AF%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "LazyForEach场景节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getlastchildindexwithoutexpand15",
      children: "getLastChildIndexWithoutExpand15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLastChildIndexWithoutExpand(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前节点最后一个在主节点树上的子节点的序列号。子节点序列号按所有子节点计算。"
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
            children: "当前节点最后一个在主节点树上的子节点的序列号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lazyforeach%E5%9C%BA%E6%99%AF%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "LazyForEach场景节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getfirstchild12",
      children: "getFirstChild12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFirstChild(): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前FrameNode的第一个子节点。"
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
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnextsibling12",
      children: "getNextSibling12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNextSibling(): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前FrameNode的下一个同级节点。"
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
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getprevioussibling12",
      children: "getPreviousSibling12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPreviousSibling(): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前FrameNode的上一个同级节点。"
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
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getparent12",
      children: "getParent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getParent(): FrameNode | null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前FrameNode的父节点。"
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
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E6%A0%B9%E8%8A%82%E7%82%B9%E7%A4%BA%E4%BE%8B",
        children: "获取根节点示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getchildrencount12",
      children: "getChildrenCount12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getChildrenCount(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前FrameNode的子节点数量。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前FrameNode的子节点数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moveto18",
      children: "moveTo18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "moveTo(targetParent: FrameNode, index?: number): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将当前FrameNode移动到目标FrameNode的指定位置。当前FrameNode如果不可修改，抛出异常信息。targetParent为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#typenode12",
        children: "typeNode"
      }), "时会校验子组件类型或个数，不满足时抛出异常信息，限制情况请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "#typenode12",
        children: "typeNode"
      }), "描述。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45997)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持以下类型的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#typedframenode12",
        children: "TypedFrameNode"
      }), "进行移动操作：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stack12",
        children: "Stack"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xcomponent12",
        children: "XComponent"
      }), "。对于其他类型的节点，移动操作不会生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持根节点为以下类型组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildernode-1",
        children: "BuilderNode"
      }), "进行移动操作：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
        children: "EmbeddedComponent"
      }), "。对于其他类型的组件，移动操作不会生效。"]
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
            children: "targetParent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标父节点。  targetParent节点不可以为声明式创建的节点，即不可修改的FrameNode。若目标父节点不符合规格，则抛出异常信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子节点序列号。当前FrameNode将被添加到目标FrameNode对应序列号的子节点之前，若目标FrameNode有n个节点，index取值范围为[0, n-1]。  若参数无效或不指定，则添加到目标FrameNode的最后。  默认值：-1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current node has been adopted."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpositiontowindow12",
      children: "getPositionToWindow12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPositionToWindow(): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode相对于窗口的位置偏移，单位为VP。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点相对于窗口的位置偏移，单位为VP。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \";\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.rootNode.appendChild(this.frameNode);\n    return this.rootNode;\n  }\n\n  getPositionToWindow() {\n    // 获取FrameNode相对于窗口的位置偏移\n    let positionToWindow = this.rootNode?.getPositionToWindow();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToWindow)}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"getPositionToWindow\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToWindow();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpositiontoparent12",
      children: "getPositionToParent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPositionToParent(): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode相对于父组件的位置偏移，单位为VP。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点相对于父组件的位置偏移，单位为VP。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \";\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.rootNode.appendChild(this.frameNode);\n    return this.rootNode;\n  }\n\n  getPositionToParent() {\n    // 获取FrameNode相对于父组件的位置偏移\n    let positionToParent = this.rootNode?.getPositionToParent();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToParent)}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"getPositionToParent\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToParent();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpositiontoscreen12",
      children: "getPositionToScreen12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPositionToScreen(): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode相对于屏幕的位置偏移，单位为VP。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点相对于屏幕的位置偏移，单位为VP。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \";\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.rootNode.appendChild(this.frameNode);\n    return this.rootNode;\n  }\n\n  getPositionToScreen() {\n    // 获取FrameNode相对于屏幕的位置偏移\n    let positionToScreen = this.rootNode?.getPositionToScreen();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToScreen)}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"getPositionToScreen\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToScreen();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getglobalpositionondisplay20",
      children: "getGlobalPositionOnDisplay20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getGlobalPositionOnDisplay(): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode相对于全局屏幕的位置偏移，单位为VP。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点相对于全局屏幕的位置偏移，单位为VP。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpositiontoparentwithtransform12",
      children: "getPositionToParentWithTransform12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPositionToParentWithTransform(): Position"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取FrameNode相对于父组件带有绘制属性的位置偏移，单位为VP，绘制属性比如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#transform",
        children: "transform"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#translate",
        children: "translate"
      }), "等，返回的坐标是组件布局时左上角变换后的坐标。"]
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点相对于父组件的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \";\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.rootNode.appendChild(this.frameNode);\n    return this.rootNode;\n  }\n\n  getPositionToParentWithTransform() {\n    // 获取FrameNode相对于父组件带有绘制属性的位置偏移\n    let positionToParentWithTransform = this.rootNode?.getPositionToParentWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToParentWithTransform)}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"getPositionToParentWithTransform\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToParentWithTransform();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpositiontowindowwithtransform12",
      children: "getPositionToWindowWithTransform12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPositionToWindowWithTransform(): Position"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取FrameNode相对于窗口带有绘制属性的位置偏移，单位为VP，绘制属性比如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#transform",
        children: "transform"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#translate",
        children: "translate"
      }), "等，返回的坐标是组件布局时左上角变换后的坐标。"]
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点相对于窗口的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \";\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.rootNode.appendChild(this.frameNode);\n    return this.rootNode;\n  }\n\n  getPositionToWindowWithTransform() {\n    // 获取FrameNode相对于窗口带有绘制属性的位置偏移\n    let positionToWindowWithTransform = this.rootNode?.getPositionToWindowWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToWindowWithTransform)}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n        Button(\"getPositionToWindowWithTransform\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToWindowWithTransform();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getpositiontoscreenwithtransform12",
      children: "getPositionToScreenWithTransform12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPositionToScreenWithTransform(): Position"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取FrameNode相对于屏幕带有绘制属性的位置偏移，单位为VP，绘制属性比如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#transform",
        children: "transform"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#translate",
        children: "translate"
      }), "等，返回的坐标是组件布局时左上角变换后的坐标。"]
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点相对于屏幕的位置偏移，单位为VP。 当设置了其他（比如：transform, translate等）绘制属性，由于浮点数精度的影响，返回值会有微小偏差。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \";\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  private rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.rootNode.appendChild(this.frameNode);\n    return this.rootNode;\n  }\n\n  getPositionToScreenWithTransform() {\n    // 获取FrameNode相对于屏幕带有绘制属性的位置偏移\n    let positionToScreenWithTransform = this.rootNode?.getPositionToScreenWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToScreenWithTransform)}`);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"getPositionToScreenWithTransform\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToScreenWithTransform();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmeasuredsize12",
      children: "getMeasuredSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMeasuredSize(): Size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode测量后的大小，单位为PX。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点测量后的大小，单位为PX。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getlayoutposition12",
      children: "getLayoutPosition12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLayoutPosition(): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode布局后相对于父组件的位置偏移，单位为PX。该偏移是父容器对该节点进行布局之后的结果，因此布局之后生效的offset属性和不参与布局的position属性不影响该偏移值。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点布局后相对于父组件的位置偏移，单位为PX。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getuserconfigborderwidth12",
      children: "getUserConfigBorderWidth12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUserConfigBorderWidth(): Edges<LengthMetrics>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用户设置的边框宽度。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户设置的边框宽度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getuserconfigpadding12",
      children: "getUserConfigPadding12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUserConfigPadding(): Edges<LengthMetrics>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用户设置的内边距。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户设置的内边距。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getuserconfigmargin12",
      children: "getUserConfigMargin12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUserConfigMargin(): Edges<LengthMetrics>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用户设置的外边距。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#edgest12",
              children: "Edges"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户设置的外边距。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getuserconfigsize12",
      children: "getUserConfigSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUserConfigSize(): SizeT<LengthMetrics>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用户设置的宽高。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#sizett12",
              children: "SizeT"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户设置的宽高。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getid12",
      children: "getId12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getId(): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取用户设置的节点ID（通用属性设置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id",
        children: "组件标识"
      }), "）。"]
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
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户设置的节点ID（通用属性设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id",
              children: "组件标识"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getuniqueid12",
      children: "getUniqueId12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUniqueId(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取系统分配的唯一标识的节点UniqueID。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统分配的唯一标识的节点UniqueID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodetype12",
      children: "getNodeType12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodeType(): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取节点的类型。系统组件类型为组件名称，例如，按钮组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
        children: "Button"
      }), "的类型为Button。而对于自定义组件，若其有渲染内容，则其类型为__Common__。"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getopacity12",
      children: "getOpacity12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOpacity(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取节点的不透明度，最小值为0，最大值为1。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的不透明度。范围是[0, 1]，值越大透明度越低。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isvisible12",
      children: "isVisible12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isVisible(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取节点是否可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721480)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据组件设置的visibility属性值判断该节点是否可见。"
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
            children: "节点是否可见。  true表示节点可见，false表示节点不可见。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iscliptoframe12",
      children: "isClipToFrame12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isClipToFrame(): boolean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取节点是否是剪裁到组件区域。当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dispose12",
        children: "dispose"
      }), "解除对实体FrameNode节点的引用关系之后，返回值为true。"]
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
            children: "节点是否是剪裁到组件区域。  true表示节点剪裁到组件区域，false表示节点不是剪裁到组件区域。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isattached12",
      children: "isAttached12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isAttached(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取节点是否被挂载到主节点树上。"
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
            children: "节点是否被挂载到主节点树上。  true表示节点被挂载到主节点树上，false表示节点不是被挂载到主节点树上。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisposed20",
      children: "isDisposed20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDisposed(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前FrameNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。"
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
            children: "后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%A3%80%E9%AA%8Cframenode%E6%98%AF%E5%90%A6%E6%9C%89%E6%95%88%E7%A4%BA%E4%BE%8B",
        children: "检验FrameNode是否有效示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getinspectorinfo12",
      children: "getInspectorInfo12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getInspectorInfo(): Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取节点的结构信息，该信息和DevEco Studio内置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-debug-app/ide-arkui-inspector",
        children: "ArkUI Inspector"
      }), "工具里面的一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956891)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getInspectorInfo接口用于获取所有节点的信息，作为调试接口使用，频繁调用会导致性能下降。"
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
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点的结构信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
        children: "Button"
      }), "组件节点为例获取到的Object结果部分值如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"$type\": \"Button\",\n    \"$ID\": 44,\n    \"type\": \"build-in\",\n    \"$rect\": \"[498.00, 468.00],[718.00,598.00]\",\n    \"$debugLine\": \"\",\n    \"$attrs\": {\n        \"borderStyle\": \"BorderStyle.Solid\",\n        \"borderColor\": \"#FF000000\",\n        \"borderWidth\": \"0.00vp\",\n        \"borderRadius\": {\n            \"topLeft\": \"65.00px\",\n            \"topRight\": \"65.00px\",\n            \"bottomLeft\": \"65.00px\",\n            \"bottomRight\": \"65.00px\"\n        },\n        \"border\": \"{\\\"style\\\":\\\"BorderStyle.Solid\\\",\\\"color\\\":\\\"#FF000000\\\",\\\"width\\\":\\\"0.00vp\\\",\\\"radius\\\":{\\\"topLeft\\\":\\\"65.00px\\\",\\\"topRight\\\":\\\"65.00px\\\",\\\"bottomLeft\\\":\\\"65.00px\\\",\\\"bottomRight\\\":\\\"65.00px\\\"},\\\"dashGap\\\":\\\"0.00vp\\\",\\\"dashWidth\\\":\\\"0.00vp\\\"}\",\n        \"outlineStyle\": \"OutlineStyle.SOLID\",\n        \"outlineColor\": \"#FF000000\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcustomproperty12",
      children: "getCustomProperty12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCustomProperty(name: string): Object | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过名称获取组件的自定义属性。"
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义属性的名称。"
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
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispose12",
      children: "dispose12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dispose(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "立即解除当前FrameNode对象对实体FrameNode节点的引用关系。"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(724681)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FrameNode对象调用dispose后，由于不对应任何实体FrameNode节点，在调用部分查询接口(", (0,jsx_runtime.jsx)(_components.a, {
          href: "#getmeasuredsize12",
          children: "getMeasuredSize"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#getlayoutposition12",
          children: "getLayoutPosition"
        }), ")的时候会导致应用出现jscrash。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#getuniqueid12",
          children: "getUniqueId"
        }), "可以判断当前FrameNode是否对应一个实体FrameNode节点。当UniqueId大于0时表示该对象对应一个实体FrameNode节点。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, BuilderNode } from '@kit.ArkUI';\n\n@Component\nstruct TestComponent {\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    this.builderNode.build(new WrappedBuilder(buildComponent));\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 200, height: 200 };\n      rootRenderNode.backgroundColor = 0xffd5d5d5;\n      rootRenderNode.appendChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n\n    return this.rootNode;\n  }\n\n  disposeFrameNode() {\n    if (this.rootNode !== null && this.builderNode !== null) {\n      // 解除rootNode对实体FrameNode节点的引用关系前，移除rootNode的所有子节点\n      this.rootNode.removeChild(this.builderNode.getFrameNode());\n      // 解除builderNode对实体FrameNode节点的引用关系\n      this.builderNode.dispose();\n      // 解除rootNode对实体FrameNode节点的引用关系\n      this.rootNode.dispose();\n    }\n  }\n\n  removeBuilderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('FrameNode dispose')\n        .onClick(() => {\n          this.myNodeController.disposeFrameNode();\n        })\n        .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(217090)/* ["default"] */.A) + "",
        width: "400",
        height: "286"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commonattribute12",
      children: "commonAttribute12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get commonAttribute(): CommonAttribute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取FrameNode中持有的CommonAttribute接口，用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅可以修改自定义节点的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446795)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FrameNode的效果参考对齐方式为顶部起始端的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
        children: "Stack"
      }), "容器组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FrameNode的属性支持情况参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier#%E5%B1%9E%E6%80%A7%E6%88%96%E4%BA%8B%E4%BB%B6%E5%AF%B9attributemodifier%E7%9A%84%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5",
        children: "属性或事件对attributemodifier的支持情况"
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
            children: "CommonAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取FrameNode中持有的CommonAttribute接口，用于设置通用属性和通用事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
        children: "基础事件示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commonevent12",
      children: "commonEvent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get commonEvent(): UICommonEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode中持有的UICommonEvent对象，用于设置基础事件。设置的基础事件与声明式定义的事件平行，参与事件竞争；设置的基础事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LazyForEach场景下，由于存在节点的销毁重建，对于重建的节点需要重新设置事件回调才能保证监听事件正常响应。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-uicommonevent/ts-uicommonevent#uicommonevent",
              children: "UICommonEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UICommonEvent对象，用于设置基础事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E7%A1%80%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
        children: "基础事件示例"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lazyforeach%E5%9C%BA%E6%99%AF%E5%9F%BA%E7%A1%80%E4%BA%8B%E4%BB%B6%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "LazyForEach场景基础事件使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gestureevent14",
      children: "gestureEvent14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get gestureEvent(): UIGestureEvent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取FrameNode中持有的UIGestureEvent对象，用于设置组件绑定的手势事件。通过gestureEvent接口设置的手势不会覆盖通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings",
        children: "声明式手势接口"
      }), "绑定的手势，两者同时设置了手势时，优先回调声明式接口设置的手势事件。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-uigestureevent/ts-uigestureevent#uigestureevent",
              children: "UIGestureEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIGestureEvent对象，用于设置组件绑定的手势。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%89%8B%E5%8A%BF%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
        children: "手势事件示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondraw12",
      children: "onDraw12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDraw?(context: DrawContext): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode的自绘制方法，该方法会重写默认绘制方法，在FrameNode进行内容绘制时被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
        children: "DrawContext"
      }), "中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode#%E8%B0%83%E6%95%B4%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%98%E5%88%B6canvas%E7%9A%84%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5",
        children: "调整自定义绘制Canvas的变换矩阵"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
              children: "DrawContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图形绘制上下文。自绘制区域无法超出组件自身大小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onmeasure12",
      children: "onMeasure12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onMeasure(constraint: LayoutConstraint): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode的自定义测量方法，该方法会重写默认测量方法，在FrameNode进行测量时被调用，测量FrameNode及其内容的大小。"
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
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutconstraint12",
              children: "LayoutConstraint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件进行测量时使用的布局约束。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onlayout12",
      children: "onLayout12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onLayout(position: Position): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode的自定义布局方法，该方法会重写默认布局方法，在FrameNode进行布局时被调用，为FrameNode及其子节点指定位置。"
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
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件进行布局时使用的位置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setmeasuredsize12",
      children: "setMeasuredSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setMeasuredSize(size: Size): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置FrameNode的测量后的尺寸，默认单位PX。若设置的宽高为负数，自动取零。"
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
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#size",
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode的测量后的尺寸。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setlayoutposition12",
      children: "setLayoutPosition12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setLayoutPosition(position: Position): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置FrameNode的布局后的位置，默认单位PX。"
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
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode的布局后的位置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "measure12",
      children: "measure12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "measure(constraint: LayoutConstraint): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用FrameNode的测量方法，根据父容器的布局约束，对FrameNode进行测量，计算出尺寸，如果测量方法被重写，则调用重写的方法。建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmeasure12",
        children: "onMeasure"
      }), "方法中调用。"]
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
            children: "constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutconstraint12",
              children: "LayoutConstraint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件进行测量时使用的父容器布局约束。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layout12",
      children: "layout12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layout(position: Position): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用FrameNode的布局方法，为FrameNode及其子节点指定布局位置，如果布局方法被重写，则调用重写的方法。建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onlayout12",
        children: "onLayout"
      }), "方法中调用。"]
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
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件进行布局时使用的位置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setneedslayout12",
      children: "setNeedsLayout12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setNeedsLayout(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法会将FrameNode标记为需要布局的状态，下一帧将会进行重新布局。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A4%BA%E4%BE%8B",
        children: "节点自定义示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invalidate12",
      children: "invalidate12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invalidate(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法会触发FrameNode自绘制内容的重新渲染。"
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
      id: "addcomponentcontent12",
      children: "addComponentContent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent<T>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持添加ComponentContent类型的组件内容。要求当前节点是一个可修改的节点，即", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ismodifiable12",
        children: "isModifiable"
      }), "的返回值为true，否则抛出异常信息。"]
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
            children: "content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
              children: "ComponentContent"
            }), (0,jsx_runtime.jsx)(_components.t, {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#reactivecomponentcontent22",
              children: "ReactiveComponentContent"
            }), (0,jsx_runtime.jsx)(_components.t, {
              children: "22+"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
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
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, ComponentContent, typeNode } from '@kit.ArkUI';\n\n@Builder\nfunction buildText() {\n  Column() {\n    Text('hello')\n      .width(50)\n      .height(50)\n      .backgroundColor(Color.Yellow)\n  }\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute.width(300).height(300).backgroundColor(Color.Red)\n    let col = typeNode.createNode(uiContext, \"Column\")\n    col.initialize({ space: 10 })\n    node.appendChild(col)\n    let row4 = typeNode.createNode(uiContext, \"Row\")\n    row4.attribute.width(200)\n      .height(200)\n      .borderWidth(1)\n      .borderColor(Color.Black)\n      .backgroundColor(Color.Green)\n    // 创建组件内容\n    let component = new ComponentContent<Object>(uiContext, wrapBuilder(buildText))\n    if (row4.isModifiable()) {\n      // 添加新创建的builderText至row4中\n      row4.addComponentContent(component)\n      col.appendChild(row4)\n    }\n    return node\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disposetree12",
      children: "disposeTree12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disposeTree(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下树并递归释放当前节点为根的子树。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, BuilderNode } from '@kit.ArkUI';\n\n// 自定义挂载事件的自定义组件，作为自定义组件树的入口\n@Component\nstruct TestComponent {\n  private myNodeController: MyNodeController = new MyNodeController(wrapBuilder(buildComponent2));\n\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n      NodeContainer(this.myNodeController)\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('BuilderNode aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('BuilderNode aboutToDisappear');\n  }\n}\n\n// 自定义挂载事件的自定义组件，作为TestComponent1的子组件与TestComponent3、TestComponent4的父组件\n@Component\nstruct TestComponent2 {\n  private myNodeController: MyNodeController = new MyNodeController(wrapBuilder(buildComponent3));\n  private myNodeController2: MyNodeController = new MyNodeController(wrapBuilder(buildComponent4));\n\n  build() {\n    Column() {\n      Text('This is a BuilderNode 2.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n      NodeContainer(this.myNodeController)\n      NodeContainer(this.myNodeController2)\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('BuilderNode 2 aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('BuilderNode 2 aboutToDisappear');\n  }\n}\n\n// 自定义挂载事件的自定义组件，作为buildComponent2的子组件\n@Component\nstruct TestComponent3 {\n  build() {\n    Column() {\n      Text('This is a BuilderNode 3.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('BuilderNode 3 aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('BuilderNode 3 aboutToDisappear');\n  }\n}\n\n// 自定义挂载事件的自定义组件，作为buildComponent2的子组件\n@Component\nstruct TestComponent4 {\n  build() {\n    Column() {\n      Text('This is a BuilderNode 4.')\n        .fontSize(16)\n        .fontWeight(FontWeight.Bold)\n\n    }\n    .width('100%')\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('BuilderNode 4 aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('BuilderNode 4 aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\n@Builder\nfunction buildComponent2() {\n  TestComponent2()\n}\n\n@Builder\nfunction buildComponent3() {\n  TestComponent3()\n}\n\n@Builder\nfunction buildComponent4() {\n  TestComponent4()\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n  private wrappedBuilder: WrappedBuilder<[]>;\n\n  constructor(builder: WrappedBuilder<[]>) {\n    super();\n    this.wrappedBuilder = builder;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    this.builderNode.build(this.wrappedBuilder);\n\n    return this.builderNode.getFrameNode();\n  }\n\n  dispose() {\n    if (this.builderNode !== null) {\n      // 下树并递归释放当前节点为根的子树\n      this.builderNode.getFrameNode()?.disposeTree()\n    }\n  }\n\n  removeBuilderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController(wrapBuilder(buildComponent));\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('BuilderNode dispose')\n        .onClick(() => {\n          this.myNodeController.dispose();\n        })\n        .width('100%')\n      Button('BuilderNode rebuild')\n        .onClick(() => {\n          this.myNodeController.rebuild();\n        })\n        .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(750855)/* ["default"] */.A) + "",
        width: "400",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setcrosslanguageoptions15",
      children: "setCrossLanguageOptions15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCrossLanguageOptions(options: CrossLanguageOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前FrameNode的跨ArkTS语言访问选项。例如ArkTS语言创建的节点，设置该节点是否可通过非ArkTS语言进行属性设置。当前FrameNode如果不可修改或不可设置跨ArkTS语言访问选项，抛出异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(341610)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scroll12",
        children: "Scroll"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#swiper12",
        children: "Swiper"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#list12",
        children: "List"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#listitem12",
        children: "ListItem"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#listitemgroup12",
        children: "ListItemGroup"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#waterflow12",
        children: "WaterFlow"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#flowitem12",
        children: "FlowItem"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#grid14",
        children: "Grid"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#griditem14",
        children: "GridItem"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textinput12",
        children: "TextInput"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textarea14",
        children: "TextArea"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#column12",
        children: "Column"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#row12",
        children: "Row"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stack12",
        children: "Stack"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#flex12",
        children: "Flex"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#relativecontainer12",
        children: "RelativeContainer"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#progress12",
        children: "Progress"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#loadingprogress12",
        children: "LoadingProgress"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#image12",
        children: "Image"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#button12",
        children: "Button"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#checkbox18",
        children: "CheckBox"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#radio18",
        children: "Radio"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#slider18",
        children: "Slider"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#toggle18",
        children: "Toggle"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xcomponent12",
        children: "XComponent"
      }), "类型的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#typedframenode12",
        children: "TypedFrameNode"
      }), "设置跨ArkTS语言访问选项。"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#crosslanguageoptions15",
              children: "CrossLanguageOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨ArkTS语言访问选项。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
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
            children: "100022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode cannot be set whether to support cross-language common attribute setting."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcrosslanguageoptions15",
      children: "getCrossLanguageOptions15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCrossLanguageOptions(): CrossLanguageOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前FrameNode的跨ArkTS语言访问选项。例如ArkTS语言创建的节点，返回该节点是否可通过非ArkTS语言进行属性设置。"
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
              href: "#crosslanguageoptions15",
              children: "CrossLanguageOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨ArkTS语言访问选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getinteractioneventbindinginfo19",
      children: "getInteractionEventBindingInfo19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取目标节点的事件绑定信息，如果该组件节点上没有绑定要查询的交互事件类型时，返回 undefined。"
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
            children: "eventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#eventquerytype19",
              children: "EventQueryType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要查询的交互事件类型。"
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
              href: "#interactioneventbindinginfo19",
              children: "InteractionEventBindingInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",
        children: "节点操作示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recycle18",
      children: "recycle18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "recycle(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局复用场景下，触发子组件回收，彻底释放FrameNode后端资源，以便于资源的重新复用，确保后端资源能够被有效回收并再次使用。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E5%A4%8D%E7%94%A8%E5%9B%9E%E6%94%B6%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "节点复用回收使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reuse18",
      children: "reuse18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reuse(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局复用场景下，触发子组件复用，实现FrameNode后端资源的复用，提升资源利用效率。为保证资源充足，可以在recycle之后使用。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8A%82%E7%82%B9%E5%A4%8D%E7%94%A8%E5%9B%9E%E6%94%B6%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "节点复用回收使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addsupporteduistates20",
      children: "addSupportedUIStates20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addSupportedUIStates(uiStates: number, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件支持的多态样式状态。"
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
            children: "uiStates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要处理目标节点的UI状态。  可以通过位或计算同时指定设置多个状态，如：targetUIStates = UIState.PRESSED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statesChangeHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#uistateschangehandler20",
              children: "UIStatesChangeHandler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "状态变化时的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludeInner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止内部默认状态样式处理的标志，默认值为false。  true表示禁止内部默认状态样式处理，false不禁止内部默认状态样式处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%E5%92%8C%E5%88%A0%E9%99%A4%E5%A4%9A%E6%80%81%E6%A0%B7%E5%BC%8F%E7%8A%B6%E6%80%81%E7%A4%BA%E4%BE%8B",
        children: "组件设置和删除多态样式状态示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removesupporteduistates20",
      children: "removeSupportedUIStates20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeSupportedUIStates(uiStates: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除组件当前注册的状态处理。"
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
            children: "uiStates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要删除的UI状态。  可以通过位或计算同时指定删除多个状态，如：removeUIStates = UIState.PRESSED"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%E5%92%8C%E5%88%A0%E9%99%A4%E5%A4%9A%E6%80%81%E6%A0%B7%E5%BC%8F%E7%8A%B6%E6%80%81%E7%A4%BA%E4%BE%8B",
        children: "组件设置和删除多态样式状态示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createanimation20",
      children: "createAnimation20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createAnimation(property: AnimationPropertyType, startValue: Optional<number[]>, endValue: number[], param: AnimateParam): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建FrameNode上属性的动画。"
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
            children: "property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#animationpropertytype20",
              children: "AnimationPropertyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画属性枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional<number[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画属性的起始值。取值为undefined或数组，取值为数组时数组长度需要和属性枚举匹配。如果为undefined则表示不显式指定动画初值，节点上一次设置的属性终值为此次动画的起点值。如果取值为数组，  - 对于AnimationPropertyType.ROTATION，取值格式为[rotationX, rotationY, rotationZ]，单位为度（°），表示绕x、y、z轴的旋转角。  - 对于AnimationPropertyType.TRANSLATION，取值格式为[translateX, translateY]，单位为px，表示沿x、y轴的平移量。  - 对于AnimationPropertyType.SCALE，取值格式为[scaleX, scaleY]，表示x、y方向的缩放比例。  - 对于AnimationPropertyType.OPACITY，取值格式为[opacity]，表示不透明度。opacity的取值范围为[0, 1]。  当节点上从未设置过该属性时，需要显式指定startValue才能正常创建动画。当节点上已经设置过属性（如第二次及之后创建动画），则推荐不显式指定startValue或者显式指定startValue为上一次的终值，表示使用上一次的终值作为新的动画起点，避免起始值跳变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画属性的终止值。取值为数组，数组长度需要和属性枚举匹配。  - 对于AnimationPropertyType.ROTATION，取值格式为[rotationX, rotationY, rotationZ]，单位为度（°），表示绕x、y、z轴的旋转角。  - 对于AnimationPropertyType.TRANSLATION，取值格式为[translateX, translateY]，单位为px，表示沿x、y轴的平移量。  - 对于AnimationPropertyType.SCALE，取值格式为[scaleX, scaleY]，表示x、y方向的缩放比例。  - 对于AnimationPropertyType.OPACITY，取值格式为[opacity]，表示不透明度。opacity的取值范围为[0, 1]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#animateparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AnimateParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画参数。包含时长、动画曲线、结束回调等参数。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示动画是否创建成功。  返回值为true：动画创建成功，如果动画参数中设置结束回调，动画结束后会调用结束回调。  返回值为false：动画创建失败，即使动画参数中设置结束回调，结束回调也不会被调用。  可能导致动画创建失败的原因：  1. 节点已经释放，调用过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dispose12",
              children: "dispose"
            }), "方法。  2. 对于系统组件的代理节点，即对于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ismodifiable12",
              children: "isModifiable"
            }), "为false的节点，调用该接口会失败。  3. 属性枚举非法，或属性枚举需要的长度与startValue或endValue的长度不匹配。  4. 该属性在第一次创建动画时没有显式指定startValue导致没有动画起点值，或设置的动画终值和动画起始值（当startValue为undefined时动画起始值为上一次的终值）相同，此时无动画产生。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8A%A8%E7%94%BB%E5%88%9B%E5%BB%BA%E4%B8%8E%E5%8F%96%E6%B6%88%E7%A4%BA%E4%BE%8B",
        children: "动画创建与取消示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cancelanimations20",
      children: "cancelAnimations20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancelAnimations(properties: AnimationPropertyType[]): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求取消FrameNode上指定属性上的所有动画，该方法需在节点所处线程中调用，会阻塞当前线程以等待取消结果。如果动画成功取消，节点上的属性值会被恢复为取消时的显示值（即当前状态）。"
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
            children: "properties"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#animationpropertytype20",
              children: "AnimationPropertyType"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待取消的动画属性枚举数组。可以一次取消一个节点上的多个属性的动画。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示动画是否取消成功。  返回值为true：动画取消成功。  返回值为false：动画取消失败。  可能导致动画取消失败的原因：  1. 节点已经释放，调用过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dispose12",
              children: "dispose"
            }), "方法。  2. 对于系统组件的代理节点，即对于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ismodifiable12",
              children: "isModifiable"
            }), "为false的节点，调用该接口会失败。  3. 属性枚举数组存在非法枚举值。  4. 系统异常。如发生ipc异常导致动画取消失败。  1. 即使属性上没有动画，尝试取消该属性的动画，在无系统异常情况下调用取消接口也会返回true。  2. 如果开发者保证传入参数合法且节点正常，返回false时表明发生了系统异常。此时开发者可隔一段时间后再次尝试取消，或通过调用duration为0的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#createanimation20",
              children: "createAnimation"
            }), "接口停止属性上的动画。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8A%A8%E7%94%BB%E5%88%9B%E5%BB%BA%E4%B8%8E%E5%8F%96%E6%B6%88%E7%A4%BA%E4%BE%8B",
        children: "动画创建与取消示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnodepropertyvalue20",
      children: "getNodePropertyValue20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNodePropertyValue(property: AnimationPropertyType): number[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FrameNode上的属性值。"
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
            children: "property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#animationpropertytype20",
              children: "AnimationPropertyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画属性枚举。"
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
            children: "number[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示渲染节点上的属性值，返回的数组长度与属性枚举相关，异常时返回空数组。  对不同属性枚举的返回值格式：  - 当节点已经释放，调用过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dispose12",
              children: "dispose"
            }), "方法，或者属性枚举非法时，返回长度为0的空数组。  - 对于AnimationPropertyType.ROTATION，返回值为[rotationX, rotationY, rotationZ]，单位为度（°），表示绕x、y、z轴的旋转角。  - 对于AnimationPropertyType.TRANSLATION，返回值为[translateX, translateY]，单位为px，表示沿x、y轴的平移量。  - 对于AnimationPropertyType.SCALE，返回值为[scaleX, scaleY]，表示x、y方向的缩放比例。  - 对于AnimationPropertyType.OPACITY，返回值为[opacity]，表示不透明度。  1. 动画正常取消后，节点上的属性值被恢复为取消时的值，通过该接口可以获取取消后的显示值。  2. 动画期间该接口的返回值为该属性的终值，而不是动画过程的实时值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8A%A8%E7%94%BB%E5%88%9B%E5%BB%BA%E4%B8%8E%E5%8F%96%E6%B6%88%E7%A4%BA%E4%BE%8B",
        children: "动画创建与取消示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invalidateattributes21",
      children: "invalidateAttributes21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invalidateAttributes(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前帧触发节点属性更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前节点的属性在构建阶段后被修改，这些改动不会立即生效，而是延迟到下一帧统一处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此功能强制当前帧内即时节点更新，确保同步应用渲染效果。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，通过if else动态切换两个节点，并且在节点创建时调用invalidateAttributes即时触发节点属性更新，避免组件切换过程中出现闪烁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.ets\nimport { FrameNode, NodeController, typeNode, NodeContent } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义NodeAdapter控制器\nclass MyNodeAdapterController extends NodeController {\n  rootNode: FrameNode | null = null;\n  imageUrl: string = \"\";\n\n  constructor(imageUrl: string) {\n    super();\n    this.imageUrl = imageUrl;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let imageNode = typeNode.createNode(uiContext, \"Image\");\n    imageNode.initialize($r(this.imageUrl))\n    imageNode.attribute.syncLoad(true).width(100).height(100);\n    // 强制当前帧内即时节点更新，避免出现切换闪烁\n    imageNode.invalidateAttributes();\n    return imageNode;\n  }\n}\n\n// 自定义挂载事件的自定义组件，挂载前加载样例图片\n@Component\nstruct NodeComponent3 {\n  private rootSlot: NodeContent = new NodeContent();\n\n  aboutToAppear(): void {\n    const uiContext = this.getUIContext();\n    let imageNode = typeNode.createNode(uiContext, \"Image\");\n    imageNode.initialize($r('app.media.startIcon'))\n    imageNode.attribute.syncLoad(true).width(100).height(100);\n    imageNode.invalidateAttributes();\n    this.rootSlot.addFrameNode(imageNode);\n  }\n\n  build() {\n    ContentSlot(this.rootSlot)\n  }\n}\n\n// 自定义挂载事件的自定义组件，挂载前加载样例图片\n@Component\nstruct NodeComponent4 {\n  private rootSlot: NodeContent = new NodeContent();\n\n  aboutToAppear(): void {\n    const uiContext = this.getUIContext();\n    let imageNode = typeNode.createNode(uiContext, \"Image\");\n    imageNode.initialize($r('app.media.startIcon'))\n    imageNode.attribute.syncLoad(true).width(100).height(100);\n    imageNode.invalidateAttributes();\n    this.rootSlot.addFrameNode(imageNode);\n  }\n\n  build() {\n    ContentSlot(this.rootSlot)\n  }\n}\n\n@Entry\n@Component\nstruct ListNodeTest {\n  @State flag: boolean = true;\n  adapterController: MyNodeAdapterController = new MyNodeAdapterController('app.media.startIcon');\n\n  build() {\n    Column() {\n      Text(\"ListNode Adapter\");\n      if (this.flag) {\n        NodeComponent3()\n      } else {\n        NodeComponent4()\n      }\n      if (this.flag) {\n        NodeContainer(this.adapterController)\n          .width(300).height(300)\n          .borderWidth(1).borderColor(Color.Black)\n      } else {\n        NodeContainer(this.adapterController)\n          .width(300).height(300)\n          .borderWidth(1).borderColor(Color.Black)\n      }\n      if (this.flag) {\n        Image($r('app.media.startIcon')).width(100).height(100).syncLoad(true)\n      } else {\n        Image($r('app.media.startIcon')).width(100).height(100).syncLoad(true)\n      }\n      Button('change').onClick(() => {\n        this.flag = !this.flag;\n      })\n    }\n    .borderWidth(1)\n    .width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adoptchild22",
      children: "adoptChild22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "adoptChild(child: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前节点接纳目标节点为附属节点。被接纳的附属节点不能已有父节点。调用该接口实际上不会将其添加为子节点，而是仅允许其接收对应子节点的生命周期回调。"
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
            children: "child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定待被接纳的节点。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode is not modifiable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: \"The parameter 'child' is invalid: it cannot be disposed.\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode has been disposed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8E%A5%E7%BA%B3%E4%B8%BA%E9%99%84%E5%B1%9E%E8%8A%82%E7%82%B9%E7%A4%BA%E4%BE%8B",
        children: "接纳为附属节点示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removeadoptedchild22",
      children: "removeAdoptedChild22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeAdoptedChild(child: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除被接纳的目标附属节点。"
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
            children: "child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在被接纳的节点。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode is not modifiable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: \"The parameter 'child' is invalid: it cannot be null.\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode has been disposed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8E%A5%E7%BA%B3%E4%B8%BA%E9%99%84%E5%B1%9E%E8%8A%82%E7%82%B9%E7%A4%BA%E4%BE%8B",
        children: "接纳为附属节点示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convertposition22",
      children: "convertPosition22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertPosition(position: Position, targetNode: FrameNode): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将点的坐标从当前节点的坐标系转换为目标节点的坐标系。"
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
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前节点坐标系中的相对坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#framenode-1",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次坐标转换的目标节点，转换得到的点坐标就是该节点坐标系中的相对坐标。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标节点局部坐标系中的转换坐标。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode and the target FrameNode do not have a common ancestor node."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The parameter is invalid. Details about the invalid parameter and the reason are included in the error message. For example: \"The parameter 'targetNode' is invalid: it cannot be disposed.\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ConvertPositionTestOnly {\n  private uiContext: UIContext = this.getUIContext();\n  @State message: string = 'Hello World';\n  @State nodeAOk: boolean = false;\n  @State nodeBOK: boolean = false;\n\n  build() {\n    Column() {\n      Text(this.message)\n        .id('testNodeA')\n        .fontSize($r('app.float.page_text_font_size'))\n        .fontWeight(FontWeight.Bold)\n        .onAppear(() => {\n          this.nodeAOk = true\n        })\n      Column() {\n        Text('testNodeB')\n          .id('testNodeB')\n          .fontSize($r('app.float.page_text_font_size'))\n          .fontWeight(FontWeight.Bold)\n          .onAppear(() => {\n            this.nodeBOK = true\n          })\n\n      }\n\n      Button('运行convertPosition测试')\n        .onClick(() => {\n          this.runBasicTest();\n        })\n        .margin(20)\n\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  private runBasicTest() {\n    if (!this.nodeAOk || !this.nodeBOK) {\n      return\n    }\n\n    // 等待UI渲染完成\n    if (!this.uiContext) {\n      return\n    }\n    const nodeA = this.uiContext.getAttachedFrameNodeById('testNodeA');\n    const nodeB = this.uiContext.getAttachedFrameNodeById('testNodeB');\n\n    if (!nodeA || !nodeB) {\n      console.info('无法获取测试节点');\n      return;\n    }\n\n    const testPoint: Position = { x: 10, y: 10 };\n    const result: Position | undefined = nodeA.convertPosition({ x: 30, y: 10 }, nodeB); // 显式声明可能返回undefined\n    if (result === undefined) {\n      console.info(\"convertPosition 转换失败，返回 undefined\");\n      return;\n    }\n    console.info(`输出: (${result.x}, ${result.y})`);\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isinrenderstate23",
      children: "isInRenderState23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isInRenderState(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取节点是否处于渲染状态，如果一个节点的对应RenderNode在渲染树上，则处于渲染状态。"
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
            children: "节点是否处于渲染状态。  true：处于渲染状态；false：不处于渲染状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'is on render tree';\n  @State @Watch('change') isShow: boolean = true;\n  data: Array<string> = ['hello1', 'hello2', 'hello3', 'hello4', 'hello5', 'hello6', 'hello7', 'hello8'];\n\n  // 监听状态变化后打印是否处于渲染状态\n  change() {\n    let buttonNode = this.getUIContext().getFrameNodeById(\"testButton\");\n    if (buttonNode == null) {\n      return;\n    }\n    let isOnRenderTree = buttonNode!.isInRenderState();\n    if (isOnRenderTree) {\n      hilog.info(1, 'frameNode', 'is on render tree');\n    } else {\n      hilog.info(1, 'frameNode', 'is not on render tree');\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change button visibility').onClick(() => {\n        // 修改button的visibility状态\n        this.isShow = !this.isShow;\n      })\n        .margin({ top: 20 })\n      Button('test button')\n        .visibility(this.isShow ? Visibility.Visible : Visibility.Hidden)\n        .margin(20).id('testButton')\n\n      List() {\n        ForEach(this.data, (item: string, index: number) => {\n          ListItem() {\n            Text(item).id(item)\n          }.alignSelf(ItemAlign.Center).width('100%')\n        })\n      }\n      .width('30%')\n      .alignSelf(ItemAlign.Center)\n      .height(\"10%\")\n      .onReachEnd(() => {\n        let textNode8 = this.getUIContext().getFrameNodeById(\"hello8\");\n        if (textNode8 != null) {\n          let isOnRenderTree = textNode8!.isInRenderState();\n          hilog.info(1, 'frameNode', 'is hello8 on RenderTree: %{public}s', isOnRenderTree);\n        }\n        let textNode1 = this.getUIContext().getFrameNodeById(\"hello1\");\n        if (textNode1 != null) {\n          let isOnRenderTree = textNode1!.isInRenderState();\n          isOnRenderTree ? this.message = 'is on render tree' : 'is not on render tree'\n          hilog.info(1, 'frameNode', 'is hello1 on RenderTree: %{public}s', isOnRenderTree);\n        }\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isonmaintree23",
      children: "isOnMainTree23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isOnMainTree(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询节点是否被挂载到主节点树上。"
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
            children: "节点是否被挂载到主节点树上。  true表示节点被挂载到主节点树上，false表示节点没有被挂载到主节点树上。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
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
            children: "100026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode has been disposed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext, typeNode } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TEST_TAG: string = 'FrameNode '\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  public childList: Array<FrameNode> = new Array<FrameNode>();\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n  private childrenCount: number = 0;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.uiContext = uiContext;\n\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.addCommonEvent(this.frameNode)\n    this.rootNode.appendChild(this.frameNode);\n    this.childrenCount = this.childrenCount + 1;\n    for (let i = 0; i < 10; i++) {\n      let childNode = new FrameNode(uiContext);\n      this.childList.push(childNode);\n      this.frameNode.appendChild(childNode);\n    }\n    let stackNode = typeNode.createNode(uiContext, 'Stack');\n    this.frameNode.appendChild(stackNode);\n    return this.rootNode;\n  }\n\n  addCommonEvent(frameNode: FrameNode) {\n    frameNode.commonEvent.setOnClick((event: ClickEvent) => {\n      console.info(`Click FrameNode: ${JSON.stringify(event)}`)\n    })\n  }\n\n  createFrameNode() {\n    let frameNode = new FrameNode(this.uiContext!);\n    frameNode.commonAttribute.backgroundColor(Color.Pink);\n    frameNode.commonAttribute.size({ width: 100, height: 100 });\n    frameNode.commonAttribute.position({ x: this.childrenCount * 120, y: 0 });\n\n    return frameNode;\n  }\n\n  appendChild() {\n    const childNode = this.createFrameNode();\n    this.rootNode!.appendChild(childNode);\n    this.childrenCount = this.childrenCount + 1;\n  }\n\n  insertChildAfter(index: number) {\n    let insertNode = this.createFrameNode();\n    let childNode = this.rootNode!.getChild(index);\n    this.rootNode!.insertChildAfter(insertNode, childNode);\n    this.childrenCount = this.childrenCount + 1;\n  }\n\n  removeChild(index: number) {\n    let childNode = this.rootNode!.getChild(index);\n    if (childNode == null) {\n      console.info(`${TEST_TAG} getchild at index {${index}} : fail`);\n      return;\n    }\n    this.rootNode!.removeChild(childNode);\n    this.childrenCount = this.childrenCount - 1;\n  }\n\n  getChildNumber() {\n    console.info(`${TEST_TAG} getChildNumber ${this.rootNode!.getChildrenCount()}`)\n    console.info(`${TEST_TAG} children count is ${this.childrenCount}`);\n  }\n\n  clearChildren() {\n    this.rootNode!.clearChildren();\n  }\n\n  searchFrameNode() {\n    if (this.rootNode!.getFirstChild() === null) {\n      console.info(`${TEST_TAG} the rootNode does not have child node.`)\n    }\n    if (this.rootNode!.getFirstChild() === this.frameNode) {\n      console.info(`${TEST_TAG} getFirstChild  result: success. The first child of the rootNode is equals to frameNode.`);\n    } else {\n      console.info(`${TEST_TAG} getFirstChild  result: fail. The first child of the rootNode is not equals to frameNode.`);\n    }\n    if (this.frameNode!.getChild(5) === this.frameNode!.getChild(4)!.getNextSibling()) {\n      console.info(`${TEST_TAG} getNextSibling  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getNextSibling  result: fail.`);\n    }\n    if (this.frameNode!.getChild(3) === this.frameNode!.getChild(4)!.getPreviousSibling()) {\n      console.info(`${TEST_TAG} getPreviousSibling  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getPreviousSibling  result: fail.`);\n    }\n    if (this.rootNode!.getFirstChild() !== null && this.rootNode!.getFirstChild()!.getParent() === this.rootNode) {\n      console.info(`${TEST_TAG} getParent  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getParent  result: fail.`);\n    }\n    if (this.rootNode!.getParent() !== undefined || this.rootNode!.getParent() !== null) {\n      console.info(`${TEST_TAG} get ArkTsNode success.`)\n      console.info(`${TEST_TAG} check rootNode whether is modifiable ${this.rootNode!.isModifiable()}`)\n      console.info(`${TEST_TAG} check getParent whether is modifiable ${this.rootNode!.getParent()!.isModifiable()}`)\n    } else {\n      console.info(`${TEST_TAG} get ArkTsNode fail.`);\n    }\n  }\n\n  moveFrameNode() {\n    const currentNode = this.frameNode!.getChild(10);\n    try {\n      currentNode!.moveTo(this.rootNode, 0);\n      if (this.rootNode!.getChild(0) === currentNode) {\n        console.info(`${TEST_TAG} moveTo  result: success.`);\n      } else {\n        console.info(`${TEST_TAG} moveTo  result: fail.`);\n      }\n    } catch (err) {\n      console.info(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n      console.info(`${TEST_TAG} moveTo  result: fail.`);\n    }\n  }\n\n  getPositionToWindow() {\n    let positionToWindow = this.rootNode?.getPositionToWindow();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToWindow)}`);\n  }\n\n  getPositionToParent() {\n    let positionToParent = this.rootNode?.getPositionToParent();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToParent)}`);\n  }\n\n  getPositionToScreen() {\n    let positionToScreen = this.rootNode?.getPositionToScreen();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToScreen)}`);\n  }\n\n  getGlobalPositionOnDisplay() {\n    let positionOnGlobalDisplay = this.rootNode?.getGlobalPositionOnDisplay();\n    console.info(`${TEST_TAG}${JSON.stringify(positionOnGlobalDisplay)}`);\n  }\n\n  getPositionToWindowWithTransform() {\n    let positionToWindowWithTransform = this.rootNode?.getPositionToWindowWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToWindowWithTransform)}`);\n  }\n\n  getPositionToParentWithTransform() {\n    let positionToParentWithTransform = this.rootNode?.getPositionToParentWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToParentWithTransform)}`);\n  }\n\n  getPositionToScreenWithTransform() {\n    let positionToScreenWithTransform = this.rootNode?.getPositionToScreenWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToScreenWithTransform)}`);\n  }\n\n  getMeasuredSize() {\n    let measuredSize = this.frameNode?.getMeasuredSize();\n    console.info(`${TEST_TAG}${JSON.stringify(measuredSize)}`);\n  }\n\n  getLayoutPosition() {\n    let layoutPosition = this.frameNode?.getLayoutPosition();\n    console.info(`${TEST_TAG}${JSON.stringify(layoutPosition)}`);\n  }\n\n  getUserConfigBorderWidth() {\n    let userConfigBorderWidth = this.frameNode?.getUserConfigBorderWidth();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigBorderWidth)}`);\n  }\n\n  getUserConfigPadding() {\n    let userConfigPadding = this.frameNode?.getUserConfigPadding();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigPadding)}`);\n  }\n\n  getUserConfigMargin() {\n    let userConfigMargin = this.frameNode?.getUserConfigMargin();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigMargin)}`);\n  }\n\n  getUserConfigSize() {\n    let userConfigSize = this.frameNode?.getUserConfigSize();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigSize)}`);\n  }\n\n  getId() {\n    let id = this.frameNode?.getId();\n    console.info(`${TEST_TAG}${id}`);\n  }\n\n  getUniqueId() {\n    let uniqueId = this.frameNode?.getUniqueId();\n    console.info(`${TEST_TAG}${uniqueId}`);\n  }\n\n  getNodeType() {\n    let nodeType = this.frameNode?.getNodeType();\n    console.info(`${TEST_TAG}${nodeType}`);\n  }\n\n  getOpacity() {\n    let opacity = this.frameNode?.getOpacity();\n    console.info(`${TEST_TAG}${JSON.stringify(opacity)}`);\n  }\n\n  isVisible() {\n    let visible = this.frameNode?.isVisible();\n    console.info(`${TEST_TAG}${JSON.stringify(visible)}`);\n  }\n\n  isClipToFrame() {\n    let clipToFrame = this.frameNode?.isClipToFrame();\n    console.info(`${TEST_TAG}${JSON.stringify(clipToFrame)}`);\n  }\n\n  isAttached() {\n    let attached = this.frameNode?.isAttached();\n    console.info(`${TEST_TAG}${JSON.stringify(attached)}`);\n  }\n\n  isOnMainTree() {\n    let attached = this.frameNode?.isOnMainTree();\n    console.info(`${TEST_TAG}${JSON.stringify(attached)}`);\n  }\n\n  getInspectorInfo() {\n    let inspectorInfo = this.frameNode?.getInspectorInfo();\n    console.info(`${TEST_TAG}${JSON.stringify(inspectorInfo)}`);\n  }\n\n  setCrossLanguageOptions() {\n    console.info(`${TEST_TAG} getCrossLanguageOptions ${JSON.stringify(this.frameNode?.getCrossLanguageOptions())}`);\n    try {\n      this.frameNode?.setCrossLanguageOptions({\n        attributeSetting: true\n      });\n      console.info(`${TEST_TAG} setCrossLanguageOptions success.`);\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n      console.error(`${TEST_TAG} setCrossLanguageOptions fail.`);\n    }\n    console.info(`${TEST_TAG} getCrossLanguageOptions ${JSON.stringify(this.frameNode?.getCrossLanguageOptions())}`);\n  }\n\n  getInteractionEventBindingInfo() {\n    let bindingInfo = this.frameNode?.getInteractionEventBindingInfo(EventQueryType.ON_CLICK);\n    console.info(`${TEST_TAG}${bindingInfo?.baseEventRegistered}`);\n    console.info(`${TEST_TAG}${bindingInfo?.nodeEventRegistered}`);\n    console.info(`${TEST_TAG}${bindingInfo?.nativeEventRegistered}`);\n    console.info(`${TEST_TAG}${bindingInfo?.builtInEventRegistered}`);\n    console.info(`${TEST_TAG}${JSON.stringify(bindingInfo)}`);\n  }\n\n  throwError() {\n    try {\n      this.rootNode!.getParent()!.clearChildren();\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n    }\n    try {\n      this.rootNode!.getParent()!.appendChild(new FrameNode(this.uiContext));\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n    }\n    try {\n      this.rootNode!.getParent()!.removeChild(this.rootNode!.getParent()!.getChild(0));\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Row() {\n            Button('ADD')\n              .onClick(() => {\n                this.index++;\n              })\n            Button('DEC')\n              .onClick(() => {\n                this.index--;\n              })\n          }\n\n          Text('Current index is ' + this.index)\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n        }\n\n        Column() {\n          Text('This is a NodeContainer.')\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button('appendChild')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.appendChild();\n          })\n        Button('insertChildAfter')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.insertChildAfter(this.index);\n          })\n        Button('removeChild')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.removeChild(this.index);\n          })\n        Button('clearChildren')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.clearChildren();\n          })\n        Button('getChildNumber')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildNumber();\n          })\n        Button('searchFrameNode')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.searchFrameNode();\n          })\n        Button('moveFrameNode')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.moveFrameNode();\n          })\n        Button('getPositionToWindow')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToWindow();\n          })\n        Button('getPositionToParent')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToParent();\n          })\n        Button('getPositionToScreen')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToScreen();\n          })\n        Button('getGlobalPositionOnDisplay')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getGlobalPositionOnDisplay();\n          })\n        Button('getPositionToParentWithTransform')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToParentWithTransform();\n          })\n        Button('getPositionToWindowWithTransform')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToWindowWithTransform();\n          })\n        Button('getPositionToScreenWithTransform')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToScreenWithTransform();\n          })\n        Button('getMeasuredSize')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getMeasuredSize();\n          })\n        Button('getLayoutPosition')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getLayoutPosition();\n          })\n        Button('getUserConfigBorderWidth')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigBorderWidth();\n          })\n        Button('getUserConfigPadding')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigPadding();\n          })\n        Button('getUserConfigMargin')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigMargin();\n          })\n        Button('getUserConfigSize')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigSize();\n          })\n        Button('getId')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getId();\n          })\n        Button('getUniqueId')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUniqueId();\n          })\n        Button('getNodeType')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getNodeType();\n          })\n        Button('getOpacity')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getOpacity();\n          })\n        Button('isVisible')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.isVisible();\n          })\n        Button('isClipToFrame')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.isClipToFrame();\n          })\n        Button('isAttached')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.isAttached();\n          })\n        Button('isOnMainTree')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.isOnMainTree();\n          })\n        Button('getInspectorInfo')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getInspectorInfo();\n          })\n        Button('getCustomProperty')\n          .width(300)\n          .onClick(() => {\n            const uiContext: UIContext = this.getUIContext();\n            if (uiContext) {\n              const node: FrameNode | null = uiContext.getFrameNodeById('Test_Button') || null;\n              if (node) {\n                for (let i = 1; i < 4; i++) {\n                  const key = 'customProperty' + i;\n                  const property = node.getCustomProperty(key);\n                  console.info(`${TEST_TAG}${key}`, JSON.stringify(property));\n                }\n              }\n            }\n          })\n          .id('Test_Button')\n          .customProperty('customProperty1', {\n            'number': 10,\n            'string': 'this is a string',\n            'bool': true,\n            'object': {\n              'name': 'name',\n              'value': 100\n            }\n          })\n          .customProperty('customProperty2', {})\n          .customProperty('customProperty2', undefined)\n        Button('setCrossLanguageOptions')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.setCrossLanguageOptions();\n          })\n        Button('getInteractionEventBindingInfo')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getInteractionEventBindingInfo();\n          })\n        Button('throwError')\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.throwError();\n          })\n      }\n      .width('100%')\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向为纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convertpositiontowindow23",
      children: "convertPositionToWindow23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertPositionToWindow(positionByLocal: Position): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将点的坐标从当前节点的坐标系转换为当前节点所在窗口的坐标系。"
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
            children: "positionByLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前节点坐标系中的相对坐标。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前节点所在窗口的坐标系中的转换坐标。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode has been disposed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode is not on the main tree."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%80%E9%83%A8%E4%B8%8E%E7%AA%97%E5%8F%A3%E5%9D%90%E6%A0%87%E8%BD%AC%E5%8C%96%E7%A4%BA%E4%BE%8B",
        children: "局部与窗口坐标转化示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convertpositionfromwindow23",
      children: "convertPositionFromWindow23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertPositionFromWindow(positionByWindow: Position): Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将点的坐标从当前节点所在窗口的坐标系转换为当前节点的坐标系。"
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
            children: "positionByWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前节点所在窗口的坐标系中的相对坐标。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前节点坐标系中的转换坐标。"
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode has been disposed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current FrameNode is not on the main tree."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%80%E9%83%A8%E4%B8%8E%E7%AA%97%E5%8F%A3%E5%9D%90%E6%A0%87%E8%BD%AC%E5%8C%96%E7%A4%BA%E4%BE%8B",
        children: "局部与窗口坐标转化示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typedframenode12",
      children: "TypedFrameNode12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypedFrameNode继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#framenode-1",
        children: "FrameNode"
      }), "，用于声明具体类型的FrameNode。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
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
            children: "initialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口用于创建对应组件的构造参数，用于设置/更新组件的初始值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口用于获取对应组件的属性设置对象，用于设置/更新组件的通用、私有属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855185)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#commonattribute12",
        children: "commonAttribute"
      }), "仅在CustomFrameNode上生效，TypedFrameNode上commonAttribute行为未定义。建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B1%9E%E6%80%A7",
        children: "attribute"
      }), "接口而非", (0,jsx_runtime.jsx)(_components.a, {
        href: "#commonattribute12",
        children: "commonAttribute"
      }), "接口进行通用属性设置，如node.attribute.backgroundColor(Color.Pink)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typenode12",
      children: "typeNode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "typeNode提供创建具体类型的FrameNode能力，可通过FrameNode的基础接口进行自定义的挂载，使用占位容器进行显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用typeNode创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
        children: "Select"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
        children: "Toggle"
      }), "节点时，当传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "对应的UI实例销毁后，调用该接口会返回一个无效的FrameNode节点，无法正常挂载和显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%B7%E4%BD%93%E7%B1%BB%E5%9E%8B%E8%8A%82%E7%82%B9%E7%A4%BA%E4%BE%8B",
        children: "自定义具体类型节点示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text12",
      children: "Text12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Text = TypedFrameNode<TextInterface, TextAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text类型的FrameNode节点类型。不允许添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E6%8E%A5%E5%8F%A3",
              children: "TextInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E5%B1%9E%E6%80%A7",
              children: "TextAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Text类型FrameNode节点。  TextInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Text组件的构造函数类型。  TextAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Text组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodetext12",
      children: "createNode('Text')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Text'): Text"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Text类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Text类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#text12",
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Text\n    let text = typeNode.createNode(uiContext, 'Text');\n    text.initialize(\"Hello\").fontColor(Color.Blue).fontSize(14);\n    typeNode.getAttribute(text, 'Text')?.fontWeight(FontWeight.Bold);\n    col.appendChild(text);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Text sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributetext20",
      children: "getAttribute('Text')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Text'): TextAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Text节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Text节点类型的属性。"
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
            children: "TextAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Text\n    let text = typeNode.createNode(uiContext, 'Text');\n    text.initialize(\"Hello\");\n    // 获取Text的属性\n    typeNode.getAttribute(text, 'Text')?.fontColor(Color.Red)\n    col.appendChild(text);\n    // 创建另一个Text用于对比\n    let text2 = typeNode.createNode(uiContext, 'Text');\n    text2.initialize(\"world\");\n    col.appendChild(text2);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Text sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollertext20",
      children: "bindController('Text')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: TextController, nodeType: 'Text'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将文本控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textcontroller11",
        children: "TextController"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#text12",
        children: "Text"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定文本控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textcontroller11",
              children: "TextController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定输入框控制器的目标节点的节点类型为Text。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  // 设置TextController，可以在外部获取\n  controller: TextController = new TextController()\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Text\n    let text = typeNode.createNode(uiContext, 'Text');\n    text.initialize(\"Hello\").fontColor(Color.Blue).fontSize(14);\n    typeNode.getAttribute(text, 'Text')?.fontWeight(FontWeight.Bold)\n    // 绑定TextController\n    typeNode.bindController(text, this.controller, 'Text');\n    col.appendChild(text);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  @State line: number = 0\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Text bindController Sample')\n      NodeContainer(this.myNodeController)\n      Text(`Text的行数, ${this.line}`)\n      Button(`点击获取行数`)\n        .onClick(() => {\n          this.line = this.myNodeController.controller.getLayoutManager().getLineCount()\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "column12",
      children: "Column12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Column = TypedFrameNode<ColumnInterface, ColumnAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Column类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column#%E6%8E%A5%E5%8F%A3",
              children: "ColumnInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column#%E5%B1%9E%E6%80%A7",
              children: "ColumnAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Column类型FrameNode节点。  ColumnInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Column组件的构造函数类型。  ColumnAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Column组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodecolumn12",
      children: "createNode('Column')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Column'): Column"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Column类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Column'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Column类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#column12",
              children: "Column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Column控制器\nclass MyColumnController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    // 创建Column\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Gray)\n    node.appendChild(col)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myColumnController: MyColumnController = new MyColumnController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ColumnSample')\n      NodeContainer(this.myColumnController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributecolumn20",
      children: "getAttribute('Column')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Column'): ColumnAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Column节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Column'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Column节点类型的属性。"
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
            children: "ColumnAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Column\n    let col1 = typeNode.createNode(uiContext, 'Column');\n    col1.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    // 获取Column的属性\n    typeNode.getAttribute(col1, 'Column')?.backgroundColor(Color.Blue).width(\"100%\")\n    col.appendChild(col1);\n    // 创建另一个Column用于对比\n    let col2 = typeNode.createNode(uiContext, 'Column');\n    col2.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    col.appendChild(col2);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Column sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "row12",
      children: "Row12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Row = TypedFrameNode<RowInterface, RowAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Row类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row#%E6%8E%A5%E5%8F%A3",
              children: "RowInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row#%E5%B1%9E%E6%80%A7",
              children: "RowAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Row类型FrameNode节点。  RowInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Row组件的构造函数类型。  RowAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Row组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnoderow12",
      children: "createNode('Row')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Row'): Row"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Row类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Row'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Row类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#row12",
              children: "Row"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Row控制器\nclass MyRowController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    // 创建row\n    let row = typeNode.createNode(uiContext, 'Row')\n    row.initialize({ space: 5 })\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Gray)\n    node.appendChild(row)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myRowController: MyRowController = new MyRowController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('RowSample')\n      NodeContainer(this.myRowController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributerow20",
      children: "getAttribute('Row')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Row'): RowAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Row节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Row'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Row节点类型的属性。"
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
            children: "RowAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Row\n    let row1 = typeNode.createNode(uiContext, 'Row');\n    row1.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    // 获取Row的属性\n    typeNode.getAttribute(row1, 'Row')?.backgroundColor(Color.Blue).width(\"100%\")\n    col.appendChild(row1);\n    // 创建另一个Row用于对比\n    let row2 = typeNode.createNode(uiContext, 'Row');\n    row2.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    col.appendChild(row2);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Row sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack12",
      children: "Stack12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Stack = TypedFrameNode<StackInterface, StackAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack#%E6%8E%A5%E5%8F%A3",
              children: "StackInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack#%E5%B1%9E%E6%80%A7",
              children: "StackAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Stack类型FrameNode节点。  StackInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Stack组件的构造函数类型。  StackAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Stack组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodestack12",
      children: "createNode('Stack')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Stack'): Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Stack类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Stack'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Stack类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#stack12",
              children: "Stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Stack控制器\nclass MyStackController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    // 创建Stack\n    let stack = typeNode.createNode(uiContext, 'Stack')\n    stack.initialize({ alignContent: Alignment.Top })\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Gray)\n    node.appendChild(stack)\n    let text = typeNode.createNode(uiContext, 'Text')\n    text.initialize(\"This is Text\")\n    // 向stack添加text\n    stack.appendChild(text)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myStackController: MyStackController = new MyStackController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('StackSample')\n      NodeContainer(this.myStackController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributestack20",
      children: "getAttribute('Stack')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Stack'): StackAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Stack节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Stack'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Stack节点类型的属性。"
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
            children: "StackAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Stack\n    let stack1 = typeNode.createNode(uiContext, 'Stack');\n    stack1.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    // 获取Stack的属性\n    typeNode.getAttribute(stack1, 'Stack')?.backgroundColor(Color.Blue).width(\"100%\")\n    col.appendChild(stack1);\n    // 创建另一个Stack用于对比\n    let stack2 = typeNode.createNode(uiContext, 'Stack');\n    stack2.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    col.appendChild(stack2);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Row sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gridrow12",
      children: "GridRow12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type GridRow = TypedFrameNode<GridRowInterface, GridRowAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridRow类型的FrameNode节点类型。只允许添加GridCol类型子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#%E6%8E%A5%E5%8F%A3",
              children: "GridRowInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#%E5%B1%9E%E6%80%A7",
              children: "GridRowAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供GridRow类型FrameNode节点。  GridRowInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为GridRow组件的构造函数类型。  GridRowAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回GridRow组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodegridrow12",
      children: "createNode('GridRow')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'GridRow'): GridRow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建GridRow类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'GridRow'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建GridRow类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridrow12",
              children: "GridRow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GridRow类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义GridRow控制器\nclass MyGridRowController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    // 创建GridRow\n    let gridRow = typeNode.createNode(uiContext, 'GridRow')\n    gridRow.initialize({ columns: 12 })\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Gray)\n    node.appendChild(gridRow)\n    // 创建GridCol\n    let gridCol = typeNode.createNode(uiContext, 'GridCol')\n    gridCol.initialize({ span: 2, offset: 4 })\n      .height(\"100%\")\n      .backgroundColor(Color.Red)\n    // 向gridRow添加gridCol\n    gridRow.appendChild(gridCol)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myGridRowController: MyGridRowController = new MyGridRowController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('GridRowSample')\n      NodeContainer(this.myGridRowController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gridcol12",
      children: "GridCol12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type GridCol = TypedFrameNode<GridColInterface, GridColAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridCol类型的FrameNode节点类型。不允许添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol#%E6%8E%A5%E5%8F%A3",
              children: "GridColInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol#%E5%B1%9E%E6%80%A7",
              children: "GridColAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供GridCol类型FrameNode节点。  GridColInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为GridCol组件的构造函数类型。  GridColAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回GridCol组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodegridcol12",
      children: "createNode('GridCol')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'GridCol'): GridCol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建GridCol类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'GridCol'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建GridCol类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gridcol12",
              children: "GridCol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GridCol类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义GridRow控制器\nclass MyGridRowController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    // 创建GridRow\n    let gridRow = typeNode.createNode(uiContext, 'GridRow')\n    gridRow.initialize({ columns: 12 })\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Gray)\n    node.appendChild(gridRow)\n    // 创建GridCol\n    let gridCol = typeNode.createNode(uiContext, 'GridCol')\n    gridCol.initialize({ span: 2, offset: 4 })\n      .height(\"100%\")\n      .backgroundColor(Color.Red)\n    // 向gridRow添加gridCol\n    gridRow.appendChild(gridCol)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myGridRowController: MyGridRowController = new MyGridRowController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('GridColSample')\n      NodeContainer(this.myGridRowController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flex12",
      children: "Flex12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Flex = TypedFrameNode<FlexInterface, FlexAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flex类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex#%E6%8E%A5%E5%8F%A3",
              children: "FlexInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex#%E5%B1%9E%E6%80%A7",
              children: "FlexAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Flex类型FrameNode节点。  FlexInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Flex组件的构造函数类型。  FlexAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Flex组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeflex12",
      children: "createNode('Flex')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Flex'): Flex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Flex类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Flex'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Flex类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#flex12",
              children: "Flex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flex类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Flex控制器\nclass MyFlexController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    // 创建Flex\n    let flex = typeNode.createNode(uiContext, 'Flex')\n    flex.initialize()\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Gray)\n    node.appendChild(flex)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myFlexController: MyFlexController = new MyFlexController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('FlexSample')\n      NodeContainer(this.myFlexController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeflex20",
      children: "getAttribute('Flex')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Flex'): FlexAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Flex节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Flex'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Flex节点类型的属性。"
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
            children: "FlexAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Flex\n    let flex1 = typeNode.createNode(uiContext, 'Flex');\n    flex1.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    // 获取Flex的属性\n    typeNode.getAttribute(flex1, 'Flex')?.backgroundColor(Color.Blue).width(\"100%\")\n    col.appendChild(flex1);\n    // 创建另一个Flex用于对比\n    let flex2 = typeNode.createNode(uiContext, 'Flex');\n    flex2.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    col.appendChild(flex2);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Flex sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "swiper12",
      children: "Swiper12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Swiper = TypedFrameNode<SwiperInterface, SwiperAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swiper类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#%E6%8E%A5%E5%8F%A3",
              children: "SwiperInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#%E5%B1%9E%E6%80%A7",
              children: "SwiperAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Swiper类型FrameNode节点。  SwiperInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Swiper组件的构造函数类型。  SwiperAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Swiper组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeswiper12",
      children: "createNode('Swiper')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Swiper'): Swiper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Swiper类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Swiper'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Swiper类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#swiper12",
              children: "Swiper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swiper类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Swiper控制器\nclass MySwiperController extends NodeController {\n  swiperController: SwiperController = new SwiperController()\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    // 创建Swiper\n    let swiperNode = typeNode.createNode(uiContext, 'Swiper')\n\n    // 创建Text\n    let text0 = typeNode.createNode(uiContext, 'Text')\n    text0.initialize(\"0\")\n      .width('100%')\n      .height('100%')\n      .textAlign(TextAlign.Center)\n    // 向swiper添加text0\n    swiperNode.appendChild(text0)\n    // 创建另一个Text用于切换\n    let text1 = typeNode.createNode(uiContext, 'Text')\n    text1.initialize(\"1\")\n      .width('100%')\n      .height('100%')\n      .textAlign(TextAlign.Center)\n    // 向swiper添加text1\n    swiperNode.appendChild(text1)\n    swiperNode.commonAttribute.width('100%')\n      .height('20%')\n      .backgroundColor(0xAFEEEE)\n    // 向swiper绑定控制器\n    typeNode.bindController(swiperNode, this.swiperController, 'Swiper')\n    typeNode.getAttribute(swiperNode, 'Swiper')?.loop(false)\n    return swiperNode;\n\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private mySwiperController: MySwiperController = new MySwiperController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('SwiperSample')\n      NodeContainer(this.mySwiperController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeswiper20",
      children: "getAttribute('Swiper')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Swiper'): SwiperAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Swiper节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Swiper'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Swiper节点类型的属性。"
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
            children: "SwiperAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodeswiper12",
        children: "createNode('Swiper')12+示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollerswiper20",
      children: "bindController('Swiper')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: SwiperController, nodeType: 'Swiper'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#swipercontroller",
        children: "SwiperController"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#swiper12",
        children: "Swiper"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#swipercontroller",
              children: "SwiperController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swiper容器组件的控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Swiper'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定控制器的目标节点的节点类型为Swiper。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodeswiper12",
        children: "createNode('Swiper')12+示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "progress12",
      children: "Progress12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Progress = TypedFrameNode<ProgressInterface, ProgressAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Progress类型的FrameNode节点类型。不允许添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress#%E6%8E%A5%E5%8F%A3",
              children: "ProgressInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress#%E5%B1%9E%E6%80%A7",
              children: "ProgressAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Progress类型FrameNode节点。  ProgressInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Progress组件的构造函数类型。  ProgressAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Progress组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeprogress12",
      children: "createNode('Progress')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Progress'): Progress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Progress类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Progress'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Progress类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progress12",
              children: "Progress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Progress类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Progress控制器\nclass MyProgressNodeController extends NodeController {\n  public uiContext: UIContext | null = null;\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    // 创建Progress\n    let node = typeNode.createNode(uiContext, 'Progress');\n    node.initialize({\n      value: 15,\n      total: 200,\n      type: ProgressType.ScaleRing\n    }).width(100)\n      .height(100)\n    this!.rootNode!.appendChild(node);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Sample {\n  build() {\n    Column({ space: 10 }) {\n      NodeContainer(new MyProgressNodeController()).margin(5)\n    }.width('100%').height('100%')\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeprogress20",
      children: "getAttribute('Progress')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Progress'): ProgressAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Progress节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Progress'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Progress节点类型的属性。"
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
            children: "ProgressAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Progress控制器\nclass MyProgressNodeController extends NodeController {\n  public uiContext: UIContext | null = null;\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    let node = typeNode.createNode(uiContext, 'Progress');\n    node.initialize({\n      value: 15,\n      total: 200,\n      type: ProgressType.ScaleRing\n    }).width(100)\n      .height(100)\n    // 获取Progress的属性\n    typeNode.getAttribute(node, 'Progress');\n    this!.rootNode!.appendChild(node);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Sample {\n  build() {\n    Column({ space: 10 }) {\n      NodeContainer(new MyProgressNodeController()).margin(5)\n    }.width('100%').height('100%')\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scroll12",
      children: "Scroll12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Scroll = TypedFrameNode<ScrollInterface, ScrollAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scroll类型的FrameNode节点类型。允许添加一个子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#%E6%8E%A5%E5%8F%A3",
              children: "ScrollInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#%E5%B1%9E%E6%80%A7",
              children: "ScrollAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Scroll类型FrameNode节点。  ScrollInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Scroll组件的构造函数类型。  ScrollAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Scroll组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodescroll12",
      children: "createNode('Scroll')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Scroll'): Scroll"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Scroll类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Scroll'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Scroll类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scroll12",
              children: "Scroll"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scroll类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Scroll控制器\nclass MyScrollController extends NodeController {\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    // 创建Scroll\n    let scroller: Scroller = new Scroller();\n    // 创建Scroll并设置属性\n    let scrollNode = typeNode.createNode(uiContext, 'Scroll');\n    scrollNode.initialize(scroller).size({ width: '100%', height: 500 });\n    typeNode.getAttribute(scrollNode, \"Scroll\")?.friction(0.6);\n\n    let colNode = typeNode.createNode(uiContext, 'Column');\n    // 向scroll添加column\n    scrollNode.appendChild(colNode);\n\n    for (let i = 0; i < 10; i++) {\n      let text = typeNode.createNode(uiContext, 'Text');\n      text.initialize('item' + i)\n        .size({ width: '90%', height: 100 })\n        .textAlign(TextAlign.Center)\n        .backgroundColor(0xF9CF93);\n      colNode.appendChild(text);\n    }\n\n    this!.rootNode!.appendChild(scrollNode);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myScrollController: MyScrollController = new MyScrollController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ScrollSample')\n      NodeContainer(this.myScrollController)\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributescroll15",
      children: "getAttribute('Scroll')15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Scroll'): ScrollAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Scroll节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Scroll'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Scroll节点类型的属性。"
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
            children: "ScrollAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodescroll12",
        children: "createNode('Scroll')"
      }), "的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geteventscroll19",
      children: "getEvent('Scroll')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEvent(node: FrameNode, nodeType: 'Scroll'): UIScrollEvent | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Scroll节点中持有的UIScrollEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Scroll'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Scroll节点类型的滚动事件。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#uiscrollevent19",
              children: "UIScrollEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
        children: "滚动事件示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollerscroll15",
      children: "bindController('Scroll')15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将滚动控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#scroll12",
        children: "Scroll"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Scroll'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点的节点类型为Scroll。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. the type of the node is error. 2. the node is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.bindController(node, scroller, 'Scroll');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relativecontainer12",
      children: "RelativeContainer12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RelativeContainer = TypedFrameNode<RelativeContainerInterface, RelativeContainerAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RelativeContainer类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E6%8E%A5%E5%8F%A3",
              children: "RelativeContainerInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E5%B1%9E%E6%80%A7",
              children: "RelativeContainerAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供RelativeContainer类型FrameNode节点。  RelativeContainerInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为RelativeContainer组件的构造函数类型。  RelativeContainerAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回RelativeContainer组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnoderelativecontainer12",
      children: "createNode('RelativeContainer')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'RelativeContainer'): RelativeContainer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建RelativeContainer类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'RelativeContainer'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建RelativeContainer类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#relativecontainer12",
              children: "RelativeContainer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RelativeContainer类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Relative控制器\nclass MyRelativeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    // 创建RelativeContainer\n    let relative = typeNode.createNode(uiContext, 'RelativeContainer')\n    relative.initialize()\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Gray)\n    node.appendChild(relative)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myRelativeController: MyRelativeController = new MyRelativeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('RelativeContainerSample')\n      NodeContainer(this.myRelativeController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributerelativecontainer20",
      children: "getAttribute('RelativeContainer')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'RelativeContainer'): RelativeContainerAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取RelativeContainer节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'RelativeContainer'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取RelativeContainer节点类型的属性。"
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
            children: "RelativeContainerAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建RelativeContainer\n    let relative1 = typeNode.createNode(uiContext, 'RelativeContainer');\n    relative1.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    // 获取RelativeContainer的属性\n    typeNode.getAttribute(relative1, 'RelativeContainer')?.backgroundColor(Color.Blue).width(\"100%\")\n    col.appendChild(relative1);\n    // 创建另一个RelativeContainer用于对比\n    let relative2 = typeNode.createNode(uiContext, 'RelativeContainer');\n    relative2.initialize().width(\"50%\").height(\"20%\").backgroundColor(Color.Pink);\n    col.appendChild(relative2);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('RelativeContainer sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "divider12",
      children: "Divider12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Divider = TypedFrameNode<DividerInterface, DividerAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divider类型的FrameNode节点类型。不允许添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider#%E6%8E%A5%E5%8F%A3",
              children: "DividerInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider#%E5%B1%9E%E6%80%A7",
              children: "DividerAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Divider类型FrameNode节点。  DividerInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为RelativeContainer组件的构造函数类型。  DividerAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Divider组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodedivider12",
      children: "createNode('Divider')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Divider'): Divider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Divider类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Divider'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Divider类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#divider12",
              children: "Divider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divider类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Divider控制器\nclass MyDividerController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建divider\n    let divider = typeNode.createNode(uiContext, 'Divider')\n    divider.initialize()\n      .strokeWidth(1)\n    // 向col添加divider\n    col.appendChild(divider)\n\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myDividerController: MyDividerController = new MyDividerController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('DividerSample')\n      NodeContainer(this.myDividerController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loadingprogress12",
      children: "LoadingProgress12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type LoadingProgress = TypedFrameNode<LoadingProgressInterface, LoadingProgressAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LoadingProgress类型的FrameNode节点类型。不允许添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress#%E6%8E%A5%E5%8F%A3",
              children: "LoadingProgressInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress#%E5%B1%9E%E6%80%A7",
              children: "LoadingProgressAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供LoadingProgress类型FrameNode节点。  LoadingProgressInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为LoadingProgress组件的构造函数类型。  LoadingProgressAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回LoadingProgress组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeloadingprogress12",
      children: "createNode('LoadingProgress')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'LoadingProgress'): LoadingProgress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建LoadingProgress类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'LoadingProgress'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建LoadingProgress类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#loadingprogress12",
              children: "LoadingProgress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoadingProgress类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义LoadingProgress控制器\nclass MyLoadingProgressNodeController extends NodeController {\n  public uiContext: UIContext | null = null;\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    // 创建LoadingProgress\n    let node = typeNode.createNode(uiContext, 'LoadingProgress');\n    node.initialize()\n      .width(100)\n      .height(100)\n      .color(Color.Red)\n      .enableLoading(true)\n    this!.rootNode!.appendChild(node);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Sample {\n  build() {\n    Column({ space: 10 }) {\n      NodeContainer(new MyLoadingProgressNodeController()).margin(5)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeloadingprogress20",
      children: "getAttribute('LoadingProgress')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'LoadingProgress'): LoadingProgressAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
        children: "LoadingProgress"
      }), "节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'LoadingProgress'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取LoadingProgress节点类型的属性。"
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
            children: "LoadingProgressAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义LoadingProgress控制器\nclass MyLoadingProgressNodeController extends NodeController {\n  public uiContext: UIContext | null = null;\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    let node = typeNode.createNode(uiContext, 'LoadingProgress');\n    node.initialize()\n      .width(100)\n      .height(100)\n      .color(Color.Red)\n      .enableLoading(true)\n    // 获取LoadingProgress的属性\n    typeNode.getAttribute(node, 'LoadingProgress');\n    this!.rootNode!.appendChild(node);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Sample {\n  build() {\n    Column({ space: 10 }) {\n      NodeContainer(new MyLoadingProgressNodeController()).margin(5)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "search12",
      children: "Search12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Search = TypedFrameNode<SearchInterface, SearchAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#%E6%8E%A5%E5%8F%A3",
              children: "SearchInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#%E5%B1%9E%E6%80%A7",
              children: "SearchAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Search类型FrameNode节点。  SearchInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Search组件的构造函数类型。  SearchAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Search组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodesearch12",
      children: "createNode('Search')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Search'): Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Search类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Search'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Search类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#search12",
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建Search\n    let search = typeNode.createNode(uiContext, 'Search');\n    search.initialize({ value: \"Search\" })\n      .searchButton('SEARCH')\n      .textFont({ size: 14, weight: 400 })\n    col.appendChild(search);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Search sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blank12",
      children: "Blank12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Blank = TypedFrameNode<BlankInterface, BlankAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blank类型的FrameNode节点类型。不允许添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank#%E6%8E%A5%E5%8F%A3",
              children: "BlankInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank#%E5%B1%9E%E6%80%A7",
              children: "BlankAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Blank类型FrameNode节点。  BlankInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Blank组件的构造函数类型。  BlankAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Blank组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeblank12",
      children: "createNode('Blank')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Blank'): Blank"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Blank类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Blank'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Blank类型的FrameNode节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#blank12",
              children: "Blank"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blank类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Blank控制器\nclass MyBlankController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Blank\n    let blank = typeNode.createNode(uiContext, 'Blank')\n    blank.initialize()\n      .width('50%')\n      .height('50%')\n      .backgroundColor(Color.Blue)\n    col.appendChild(blank)\n\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myBlankController: MyBlankController = new MyBlankController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('BlankSample')\n      NodeContainer(this.myBlankController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image12",
      children: "Image12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Image = TypedFrameNode<ImageInterface, ImageAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image类型的FrameNode节点类型。不允许添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#%E6%8E%A5%E5%8F%A3",
              children: "ImageInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#%E5%B1%9E%E6%80%A7",
              children: "ImageAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Image类型FrameNode节点。  ImageInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Image组件的构造函数类型。  ImageAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Image组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeimage12",
      children: "createNode('Image')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Image'): Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Image类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Image类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#image12",
              children: "Image"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Image控制器\nclass MyImageController extends NodeController {\n  public uiContext: UIContext | null = null;\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    // 创建Image\n    let imageNode = typeNode.createNode(uiContext, 'Image');\n    imageNode\n      // $r('app.media.img')需要替换为开发者所需的图像资源文件\n      .initialize($r('app.media.img'))\n      .width(100)\n      .height(100)\n      .fillColor(Color.Red)\n      .objectFit(ImageFit.Contain)\n      .renderMode(ImageRenderMode.Template)\n      .fitOriginalSize(true)\n      .matchTextDirection(true)\n      .objectRepeat(ImageRepeat.X)\n      .autoResize(true)\n\n    this!.rootNode!.appendChild(imageNode);\n    return this.rootNode;\n\n  }\n}\n\n@Entry\n@Component\nstruct Sample {\n  build() {\n    Column({ space: 10 }) {\n      NodeContainer(new MyImageController()).margin(5)\n    }.width('100%').height('100%')\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeimage20",
      children: "getAttribute('Image')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Image'): ImageAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Image节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Image节点类型的属性。"
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
            children: "ImageAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Image控制器\nclass MyImageController extends NodeController {\n  public uiContext: UIContext | null = null;\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    let imageNode = typeNode.createNode(uiContext, 'Image');\n    imageNode\n      // $r('app.media.img')需要替换为开发者所需的图像资源文件\n      .initialize($r('app.media.img'))\n      .width(100)\n      .height(100)\n      .fillColor(Color.Red)\n      .objectFit(ImageFit.Contain)\n      .renderMode(ImageRenderMode.Template)\n      .fitOriginalSize(true)\n      .matchTextDirection(true)\n      .objectRepeat(ImageRepeat.X)\n      .autoResize(true)\n    // 获取Image的属性\n    typeNode.getAttribute(imageNode, 'Image');\n    this!.rootNode!.appendChild(imageNode);\n    return this.rootNode;\n\n  }\n}\n\n@Entry\n@Component\nstruct Sample {\n  build() {\n    Column({ space: 10 }) {\n      NodeContainer(new MyImageController()).margin(5)\n    }.width('100%').height('100%')\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "list12",
      children: "List12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type List = TypedFrameNode<ListInterface, ListAttribute>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List类型的FrameNode节点类型。只允许添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "#listitem12",
        children: "ListItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#listitemgroup12",
        children: "ListItemGroup"
      }), "类型子组件。"]
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#%E6%8E%A5%E5%8F%A3",
              children: "ListInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#%E5%B1%9E%E6%80%A7",
              children: "ListAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供List类型FrameNode节点。  ListInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为List组件的构造函数类型。  ListAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回List组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodelist12",
      children: "createNode('List')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'List'): List"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建List类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'List'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建List类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#list12",
              children: "List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义List控制器\nclass MyListController extends NodeController {\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    // 创建list节点\n    this.rootNode = new FrameNode(uiContext);\n    // 创建List\n    let listNode = typeNode.createNode(uiContext, 'List');\n    listNode.initialize({ space: 3 }).size({ width: '100%', height: '100%' });\n    typeNode.getAttribute(listNode, \"List\")?.friction(0.6);\n\n    // 在list下创建ListItemGroup节点\n    let listItemGroupNode = typeNode.createNode(uiContext, 'ListItemGroup');\n    listItemGroupNode.initialize({ space: 3 });\n    listNode.appendChild(listItemGroupNode);\n\n    // 在ListItemGroup中放入ListItem节点\n    let listItemNode1 = typeNode.createNode(uiContext, 'ListItem');\n    listItemNode1.initialize({ style: ListItemStyle.NONE }).height(100).borderWidth(1).backgroundColor('#FF00FF');\n    let text1 = typeNode.createNode(uiContext, 'Text');\n    text1.initialize('ListItem1');\n    listItemNode1.appendChild(text1);\n    listItemGroupNode.appendChild(listItemNode1);\n\n    // 创建ListItem，添加Text至ListItem，添加至listItemGroup\n    let listItemNode2 = typeNode.createNode(uiContext, 'ListItem');\n    listItemNode2.initialize({ style: ListItemStyle.CARD }).borderWidth(1).backgroundColor('#FF00FF');\n    typeNode.getAttribute(listItemNode2, \"ListItem\")?.height(100);\n    let text2 = typeNode.createNode(uiContext, 'Text');\n    text2.initialize('ListItem2');\n    listItemNode2.appendChild(text2);\n    listItemGroupNode.appendChild(listItemNode2);\n\n    this!.rootNode!.appendChild(listNode);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myListController: MyListController = new MyListController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ListSample')\n      NodeContainer(this.myListController)\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geteventlist19",
      children: "getEvent('List')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEvent(node: FrameNode, nodeType: 'List'): UIListEvent | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取List节点中持有的UIListEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'List'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取List节点类型的滚动事件。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#uilistevent19",
              children: "UIListEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
        children: "滚动事件示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributelist20",
      children: "getAttribute('List')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'List'): ListAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取List节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'List'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取List节点类型的属性。"
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
            children: "ListAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodelist12",
        children: "createNode('List')"
      }), "的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollerlist20",
      children: "bindController('List')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: Scroller, nodeType: 'List'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将滚动控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#list12",
        children: "List"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'List'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点的节点类型为List。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.bindController(node, scroller, 'List');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listitem12",
      children: "ListItem12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ListItem = TypedFrameNode<ListItemInterface, ListItemAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ListItem类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#%E6%8E%A5%E5%8F%A3",
              children: "ListItemInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#%E5%B1%9E%E6%80%A7",
              children: "ListItemAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供ListItem类型FrameNode节点。  ListItemInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为ListItem组件的构造函数类型。  ListItemAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回ListItem组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodelistitem12",
      children: "createNode('ListItem')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'ListItem'): ListItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建ListItem类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'ListItem'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建ListItem类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#listitem12",
              children: "ListItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItem类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodelist12",
        children: "createNode('List')"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributelistitem20",
      children: "getAttribute('ListItem')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'ListItem'): ListItemAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ListItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'ListItem'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ListItem节点类型的属性。"
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
            children: "ListItemAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodelist12",
        children: "createNode('List')"
      }), "的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textinput12",
      children: "TextInput12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TextInput = TypedFrameNode<TextInputInterface, TextInputAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextInput类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#%E6%8E%A5%E5%8F%A3",
              children: "TextInputInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#%E5%B1%9E%E6%80%A7",
              children: "TextInputAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供TextInput类型FrameNode节点。  TextInputInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为TextInput组件的构造函数类型。  TextInputAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回TextInput组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodetextinput12",
      children: "createNode('TextInput')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'TextInput'): TextInput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建TextInput类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextInput'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建TextInput类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textinput12",
              children: "TextInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TextInput类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建TextInput\n    let textInput = typeNode.createNode(uiContext, 'TextInput');\n    textInput.initialize({ text: \"TextInput\" });\n    col.appendChild(textInput);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('TextInput sample')\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributetextinput20",
      children: "getAttribute('TextInput')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'TextInput'): TextInputAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取TextInput节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextInput'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取TextInput节点类型的属性。"
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
            children: "TextInputAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建TextInput\n    let textInput = typeNode.createNode(uiContext, 'TextInput');\n    textInput.initialize({ placeholder: 'TextInput placeholderColor' });\n    // 获取TextInput的属性\n    typeNode.getAttribute(textInput, 'TextInput')?.placeholderColor(Color.Red);\n    col.appendChild(textInput);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('TextInput getAttribute sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollertextinput20",
      children: "bindController('TextInput')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: TextInputController, nodeType: 'TextInput'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将输入框控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputcontroller8",
        children: "TextInputController"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textinput12",
        children: "TextInput"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定输入框控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textinputcontroller8",
              children: "TextInputController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextInput'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定输入框控制器的目标节点的节点类型为TextInput。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建、初始化TextInput，默认获焦\n    let textInput = typeNode.createNode(uiContext, 'TextInput');\n    textInput.initialize({ text: \"TextInput\" })\n      .defaultFocus(true)\n    col.appendChild(textInput);\n    // 绑定TextInputController，设置光标位置\n    let controller: TextInputController = new TextInputController();\n    typeNode.bindController(textInput, controller, 'TextInput');\n    controller.caretPosition(3);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('TextInput bindController sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "button12",
      children: "Button12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Button = TypedFrameNode<ButtonInterface, ButtonAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Button类型的FrameNode节点类型。以子组件模式创建允许添加一个子组件。以label模式创建不可以添加子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E6%8E%A5%E5%8F%A3",
              children: "ButtonInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E5%B1%9E%E6%80%A7",
              children: "ButtonAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Button类型FrameNode节点。  ButtonInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Button组件的构造函数类型。  ButtonAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Button组件的属性设置对象。  接口入参label不为空时，以label模式创建Button组件，以此模式创建无法包含子组件，并且不允许再设置子组件，否则会抛出异常。且label模式和子组件模式在第一次initialize创建之后无法在后续的initialize进行动态修改，如需要包含子组件，第一次initialize时不要设置label参数。  以子组件模式创建时，只能包含一个子组件，不能设置多个子组件，否则会抛出异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodebutton12",
      children: "createNode('Button')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Button'): Button"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Button类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Button'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Button类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#button12",
              children: "Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Button类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Button控制器\nclass MyButtonController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Button\n    let button = typeNode.createNode(uiContext, 'Button')\n    button.initialize(\"This is Button\")\n      .onClick(() => {\n        uiContext.getPromptAction().showToast({ message: \"Button clicked\" })\n      })\n    col.appendChild(button)\n\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myButtonController: MyButtonController = new MyButtonController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ButtonSample')\n      NodeContainer(this.myButtonController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributebutton20",
      children: "getAttribute('Button')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Button'): ButtonAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Button节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Button'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Button节点类型的属性。"
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
            children: "ButtonAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Button控制器\nclass MyButtonController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    let button = typeNode.createNode(uiContext, 'Button')\n    button.initialize(\"This is Button\")\n      .onClick(() => {\n        uiContext.getPromptAction().showToast({ message: \"Button clicked\" })\n      })\n    // 获取Button属性\n    typeNode.getAttribute(button,'Button')?.buttonStyle(ButtonStyleMode.TEXTUAL)\n    col.appendChild(button)\n\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myButtonController: MyButtonController = new MyButtonController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ButtonSample')\n      NodeContainer(this.myButtonController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listitemgroup12",
      children: "ListItemGroup12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ListItemGroup = TypedFrameNode<ListItemGroupInterface, ListItemGroupAttribute>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ListItemGroup类型的FrameNode节点类型。只允许添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
        children: "ListItem"
      }), "类型子组件。"]
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#%E6%8E%A5%E5%8F%A3",
              children: "ListItemGroupInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#%E5%B1%9E%E6%80%A7",
              children: "ListItemGroupAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供ListItemGroup类型FrameNode节点。  ListItemGroupInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为ListItemGroup组件的构造函数类型。  ListItemGroupAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回ListItemGroup组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodelistitemgroup12",
      children: "createNode('ListItemGroup')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'ListItemGroup'): ListItemGroup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建ListItemGroup类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'ListItemGroup'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建ListItemGroup类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#listitemgroup12",
              children: "ListItemGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListItemGroup类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodelist12",
        children: "createNode('List')"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributelistitemgroup20",
      children: "getAttribute('ListItemGroup')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'ListItemGroup'): ListItemGroupAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ListItemGroup节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'ListItemGroup'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ListItemGroup节点类型的属性。"
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
            children: "ListItemGroupAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.getAttribute(node, 'ListItemGroup');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "waterflow12",
      children: "WaterFlow12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type WaterFlow = TypedFrameNode<WaterFlowInterface, WaterFlowAttribute>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WaterFlow类型的FrameNode节点类型。只允许添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem",
        children: "FlowItem"
      }), "类型子组件。"]
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#%E6%8E%A5%E5%8F%A3",
              children: "WaterFlowInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#%E5%B1%9E%E6%80%A7",
              children: "WaterFlowAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供", (0,jsx_runtime.jsx)(_components.a, {
              href: "#waterflow12",
              children: "WaterFlow"
            }), "类型FrameNode节点。  WaterFlowInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为WaterFlow组件的构造函数类型。  WaterFlowAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回WaterFlow组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodewaterflow12",
      children: "createNode('WaterFlow')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'WaterFlow'): WaterFlow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建WaterFlow类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'WaterFlow'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建WaterFlow类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#waterflow12",
              children: "WaterFlow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WaterFlow类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义WaterFlow控制器\nclass MyWaterFlowController extends NodeController {\n  public rootNode: FrameNode | null = null;\n  private minHeight: number = 80;\n  private maxHeight: number = 180;\n\n  // 计算FlowItem高\n  private getHeight() {\n    let ret = Math.floor(Math.random() * this.maxHeight);\n    return (ret > this.minHeight ? ret : this.minHeight);\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    // 创建WaterFlow并设置属性\n    let waterFlowNode = typeNode.createNode(uiContext, 'WaterFlow');\n    waterFlowNode.attribute.size({ width: '100%', height: '100%' })\n      .columnsTemplate('1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(5);\n    typeNode.getAttribute(waterFlowNode, \"WaterFlow\")?.friction(0.6);\n\n    // 创建FlowItem并设置属性\n    for (let i = 0; i < 20; i++) {\n      let flowItemNode = typeNode.createNode(uiContext, 'FlowItem');\n      flowItemNode.attribute.size({ height: this.getHeight() });\n      typeNode.getAttribute(flowItemNode, \"FlowItem\")?.width('100%');\n      waterFlowNode.appendChild(flowItemNode);\n\n      let text = typeNode.createNode(uiContext, 'Text');\n      text.initialize('N' + i)\n        .size({ width: '100%', height: '100%' })\n        .textAlign(TextAlign.Center)\n        .backgroundColor(0xF9CF93);\n      flowItemNode.appendChild(text);\n    }\n\n    this!.rootNode!.appendChild(waterFlowNode);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myWaterFlowController: MyWaterFlowController = new MyWaterFlowController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('WaterFlowSample')\n      NodeContainer(this.myWaterFlowController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geteventwaterflow19",
      children: "getEvent('WaterFlow')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEvent(node: FrameNode, nodeType: 'WaterFlow'): UIWaterFlowEvent | undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "#waterflow12",
        children: "WaterFlow"
      }), "节点中持有的UIWaterFlowEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'WaterFlow'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取WaterFlow节点类型的滚动事件。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#uiwaterflowevent19",
              children: "UIWaterFlowEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
        children: "滚动事件示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributewaterflow20",
      children: "getAttribute('WaterFlow')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'WaterFlow'): WaterFlowAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WaterFlow节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'WaterFlow'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取WaterFlow节点类型的属性。"
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
            children: "WaterFlowAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodewaterflow12",
        children: "createNode('WaterFlow')"
      }), "的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollerwaterflow20",
      children: "bindController('WaterFlow')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: Scroller, nodeType: 'WaterFlow'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将滚动控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#waterflow12",
        children: "WaterFlow"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'WaterFlow'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点的节点类型为WaterFlow。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.bindController(node, scroller, 'WaterFlow');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flowitem12",
      children: "FlowItem12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type FlowItem = TypedFrameNode<FlowItemInterface, FlowItemAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FlowItem类型的FrameNode节点类型。允许添加一个子组件。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem#%E6%8E%A5%E5%8F%A3",
              children: "FlowItemInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem#%E5%B1%9E%E6%80%A7",
              children: "FlowItemAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供FlowItem类型FrameNode节点。  FlowItemInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为FlowItem组件的构造函数类型。  FlowItemAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回FlowItem组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeflowitem12",
      children: "createNode('FlowItem')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'FlowItem'): FlowItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建FlowItem类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'FlowItem'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建FlowItem类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#flowitem12",
              children: "FlowItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FlowItem类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodewaterflow12",
        children: "createNode('WaterFlow')"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeflowitem20",
      children: "getAttribute('FlowItem')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'FlowItem'): FlowItemAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取FlowItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'FlowItem'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取FlowItem节点类型的属性。"
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
            children: "FlowItemAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodewaterflow12",
        children: "createNode('WaterFlow')"
      }), "的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xcomponent12",
      children: "XComponent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type XComponent = TypedFrameNode<XComponentInterface, XComponentAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XComponent类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#%E6%8E%A5%E5%8F%A3",
              children: "XComponentInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#%E5%B1%9E%E6%80%A7",
              children: "XComponentAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供XComponent类型FrameNode节点。  XComponentInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为XComponent组件的构造函数类型。  XComponentAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回XComponent组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodexcomponent12",
      children: "createNode('XComponent')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'XComponent'): XComponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建XComponent类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'XComponent'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XComponent类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#xcomponent12",
              children: "XComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XComponent类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col);\n    // 创建XComponent\n    let xcomponent = typeNode.createNode(uiContext, 'XComponent');\n    xcomponent.attribute.backgroundColor(Color.Red);\n    col.appendChild(xcomponent);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('XComponentSample')\n      NodeContainer(this.myNodeController)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodexcomponent12-1",
      children: "createNode('XComponent')12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'XComponent', options: XComponentOptions): XComponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照options中的配置参数创建XComponent类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'XComponent'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XComponent类型的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#xcomponentoptions12",
              children: "XComponentOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义XComponent的具体配置参数。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#xcomponent12",
              children: "XComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XComponent类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  controller: XComponentController = new XComponentController();\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col);\n    // 设置XComponent参数对象\n    let options: XComponentOptions = {\n      type: XComponentType.SURFACE,\n      controller: this.controller\n    };\n    // 创建XComponent\n    let xcomponent = typeNode.createNode(uiContext, 'XComponent', options);\n    xcomponent.attribute.backgroundColor(Color.Red);\n    col.appendChild(xcomponent);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('XComponentSample')\n      NodeContainer(this.myNodeController)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodexcomponent19",
      children: "createNode('XComponent')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'XComponent', parameters: NativeXComponentParameters): XComponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照parameters中的配置参数创建XComponent类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'XComponent'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建XComponent类型的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#nativexcomponentparameters19",
              children: "NativeXComponentParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义XComponent的具体配置参数。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#xcomponent12",
              children: "XComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XComponent类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  controller: XComponentController = new XComponentController();\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col);\n    let parameters: NativeXComponentParameters = {\n      type: XComponentType.SURFACE\n    };\n    // 创建XComponent\n    let xcomponent = typeNode.createNode(uiContext, 'XComponent', parameters);\n    xcomponent.attribute.backgroundColor(Color.Red);\n    col.appendChild(xcomponent);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('XComponentSample')\n      NodeContainer(this.myNodeController)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributexcomponent20",
      children: "getAttribute('XComponent')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'XComponent'): XComponentAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取XComponent节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'XComponent'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取XComponent节点类型的属性。"
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
            children: "XComponentAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.getAttribute(node, 'XComponent');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qrcode14",
      children: "QRCode14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type QRCode = TypedFrameNode<QRCodeInterface, QRCodeAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRCode类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode#%E6%8E%A5%E5%8F%A3",
              children: "QRCodeInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode#%E5%B1%9E%E6%80%A7",
              children: "QRCodeAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供QRCode类型FrameNode节点。  QRCodeInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为QRCode组件的构造函数类型。  QRCodeAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回QRCode组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeqrcode14",
      children: "createNode('QRCode')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'QRCode'): QRCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建QRCode类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'QRCode'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建QRCode类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#qrcode14",
              children: "QRCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QRCode类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.createNode(uiContext, 'QRCode');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "badge14",
      children: "Badge14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Badge = TypedFrameNode<BadgeInterface, BadgeAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Badge类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge#%E6%8E%A5%E5%8F%A3",
              children: "BadgeInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge#%E5%B1%9E%E6%80%A7",
              children: "BadgeAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Badge类型FrameNode节点。  BadgeInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Badge组件的构造函数类型。  BadgeAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Badge组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodebadge14",
      children: "createNode('Badge')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Badge'): Badge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Badge类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Badge'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Badge类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#badge14",
              children: "Badge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Badge类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.createNode(uiContext, 'Badge');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grid14",
      children: "Grid14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Grid = TypedFrameNode<GridInterface, GridAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#%E6%8E%A5%E5%8F%A3",
              children: "GridInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#%E5%B1%9E%E6%80%A7",
              children: "GridAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Grid类型FrameNode节点。  GridInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Grid组件的构造函数类型。  GridAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Grid组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodegrid14",
      children: "createNode('Grid')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Grid'): Grid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Grid类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Grid'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Grid类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#grid14",
              children: "Grid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Grid控制器\nclass MyGridController extends NodeController {\n  public rootNode: FrameNode | null = null;\n  private scroller: Scroller = new Scroller();\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n\n    // 创建Grid设置属性\n    let gridNode = typeNode.createNode(uiContext, 'Grid');\n    gridNode.initialize(this.scroller, { regularSize: [1, 1] })\n      .size({ width: '90%', height: 300 })\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10);\n    typeNode.getAttribute(gridNode, \"Grid\")?.friction(0.6);\n\n    // 创建GridItem并设置属性\n    for (let i = 0; i < 25; i++) {\n      let gridItemNode = typeNode.createNode(uiContext, 'GridItem');\n      gridItemNode.initialize({ style: GridItemStyle.NONE }).size({ height: '100%' });\n      typeNode.getAttribute(gridItemNode, \"GridItem\")?.width('100%');\n\n      let text = typeNode.createNode(uiContext, 'Text');\n      text.initialize((i % 5).toString())\n        .size({ width: '100%', height: '100%' })\n        .textAlign(TextAlign.Center)\n        .backgroundColor(0xF9CF93);\n      gridItemNode.appendChild(text);\n      gridNode.appendChild(gridItemNode);\n    }\n\n    this!.rootNode!.appendChild(gridNode);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myGridController: MyGridController = new MyGridController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('GridSample')\n      NodeContainer(this.myGridController)\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geteventgrid19",
      children: "getEvent('Grid')19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEvent(node: FrameNode, nodeType: 'Grid'): UIGridEvent | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Grid节点中持有的UIGridEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Grid'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Grid节点类型的滚动事件。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#uigridevent19",
              children: "UIGridEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6%E7%A4%BA%E4%BE%8B",
        children: "滚动事件示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributegrid20",
      children: "getAttribute('Grid')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Grid'): GridAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Grid节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Grid'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Grid节点类型的属性。"
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
            children: "GridAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodegrid14",
        children: "createNode('Grid')"
      }), "的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollergrid20",
      children: "bindController('Grid')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: Scroller, nodeType: 'Grid'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将滚动控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#grid14",
        children: "Grid"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
              children: "Scroller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Grid'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定滚动控制器的目标节点的节点类型为Grid。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.bindController(node, scroller, 'Grid');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "griditem14",
      children: "GridItem14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type GridItem = TypedFrameNode<GridItemInterface, GridItemAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GridItem类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem#%E6%8E%A5%E5%8F%A3",
              children: "GridItemInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem#%E5%B1%9E%E6%80%A7",
              children: "GridItemAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供GridItem类型FrameNode节点。  GridItemInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为GridItem组件的构造函数类型。  GridItemAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回GridItem组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodegriditem14",
      children: "createNode('GridItem')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'GridItem'): GridItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建GridItem类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'GridItem'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建GridItem类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#griditem14",
              children: "GridItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GridItem类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodegrid14",
        children: "createNode('Grid')"
      }), "示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributegriditem20",
      children: "getAttribute('GridItem')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'GridItem'): GridItemAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取GridItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'GridItem'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取GridItem节点类型的属性。"
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
            children: "GridItemAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createnodegrid14",
        children: "createNode('Grid')"
      }), "的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textclock14",
      children: "TextClock14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TextClock = TypedFrameNode<TextClockInterface, TextClockAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextClock类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock#%E6%8E%A5%E5%8F%A3",
              children: "TextClockInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock#%E5%B1%9E%E6%80%A7",
              children: "TextClockAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供TextClock类型FrameNode节点。  TextClockInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为TextClock组件的构造函数类型。  TextClockAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回TextClock组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodetextclock14",
      children: "createNode('TextClock')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'TextClock'): TextClock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建TextClock类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextClock'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建TextClock类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textclock14",
              children: "TextClock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TextClock类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.createNode(uiContext, 'TextClock');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "texttimer14",
      children: "TextTimer14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TextTimer = TypedFrameNode<TextTimerInterface, TextTimerAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextTimer类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer#%E6%8E%A5%E5%8F%A3",
              children: "TextTimerInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer#%E5%B1%9E%E6%80%A7",
              children: "TextTimerAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供TextTimer类型FrameNode节点。  TextTimerInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为TextTimer组件的构造函数类型。  TextTimerAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回TextTimer组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodetexttimer14",
      children: "createNode('TextTimer')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'TextTimer'): TextTimer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建TextTimer类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextTimer'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建TextTimer类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#texttimer14",
              children: "TextTimer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TextTimer类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typeNode.createNode(uiContext, 'TextTimer');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "marquee14",
      children: "Marquee14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Marquee = TypedFrameNode<MarqueeInterface, MarqueeAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marquee类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee#%E6%8E%A5%E5%8F%A3",
              children: "MarqueeInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee#%E5%B1%9E%E6%80%A7",
              children: "MarqueeAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Marquee类型FrameNode节点。  MarqueeInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Marquee组件的构造函数类型。  MarqueeAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Marquee组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodemarquee14",
      children: "createNode('Marquee')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Marquee'): Marquee"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Marquee类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Marquee'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Marquee类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#marquee14",
              children: "Marquee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marquee类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 })\n    node.appendChild(col);\n    // 创建marquee\n    let marquee = typeNode.createNode(uiContext, 'Marquee');\n    marquee.initialize({start:true,src:'Marquee, if need display, src shall be long'})\n      .width(100);\n    col.appendChild(marquee);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Marquee createNode sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textarea14",
      children: "TextArea14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TextArea = TypedFrameNode<TextAreaInterface, TextAreaAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextArea类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#%E6%8E%A5%E5%8F%A3",
              children: "TextAreaInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#%E5%B1%9E%E6%80%A7",
              children: "TextAreaAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供TextArea类型FrameNode节点。  TextAreaInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为TextArea组件的构造函数类型。  TextAreaAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回TextArea组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodetextarea14",
      children: "createNode('TextArea')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'TextArea'): TextArea"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建TextArea类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextArea'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建TextArea类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textarea14",
              children: "TextArea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TextArea类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 })\n    node.appendChild(col);\n    // 创建textArea\n    let textArea = typeNode.createNode(uiContext, 'TextArea');\n    textArea.initialize({ text: \"TextArea\" });\n    col.appendChild(textArea);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('TextArea create sample')\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributetextarea20",
      children: "getAttribute('TextArea')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'TextArea'): TextAreaAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取TextArea节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextArea'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取TextArea节点类型的属性。"
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
            children: "TextAreaAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建TextArea\n    let textArea = typeNode.createNode(uiContext, 'TextArea');\n    textArea.initialize({ placeholder: 'TextArea placeholderColor' });\n    col.appendChild(textArea);\n    // 获取TextArea节点的属性\n    typeNode.getAttribute(textArea, 'TextArea')?.placeholderColor(Color.Red);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('TextArea getAttribute sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindcontrollertextarea20",
      children: "bindController('TextArea')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindController(node: FrameNode, controller: TextAreaController, nodeType: 'TextArea'): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将输入框控制器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#textareacontroller8",
        children: "TextAreaController"
      }), "绑定到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textarea14",
        children: "TextArea"
      }), "节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。"]
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定输入框控制器的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#textareacontroller8",
              children: "TextAreaController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'TextArea'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定输入框控制器的目标节点的节点类型为TextArea。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-node/errorcode-node",
        children: "自定义节点错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. The component type of the node is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The FrameNode is not modifiable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建、初始化TextArea，默认获焦\n    let textArea = typeNode.createNode(uiContext, 'TextArea');\n    textArea.initialize({ text: \"TextArea\" })\n      .defaultFocus(true)\n    col.appendChild(textArea);\n    // 绑定TextAreaController，设置光标位置\n    let controller: TextAreaController = new TextAreaController()\n    typeNode.bindController(textArea, controller, 'TextArea');\n    controller.caretPosition(3);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('TextArea bindController sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "symbolglyph14",
      children: "SymbolGlyph14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type SymbolGlyph = TypedFrameNode<SymbolGlyphInterface, SymbolGlyphAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SymbolGlyph类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#%E6%8E%A5%E5%8F%A3",
              children: "SymbolGlyphInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#%E5%B1%9E%E6%80%A7",
              children: "SymbolGlyphAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供SymbolGlyph类型FrameNode节点。  SymbolGlyphInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为SymbolGlyph组件的构造函数类型。  SymbolGlyphAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回SymbolGlyph组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodesymbolglyph14",
      children: "createNode('SymbolGlyph')14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'SymbolGlyph'): SymbolGlyph"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建SymbolGlyph类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'SymbolGlyph'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建SymbolGlyph类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#symbolglyph14",
              children: "SymbolGlyph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SymbolGlyph类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute;\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 });\n    node.appendChild(col);\n    // 创建SymbolGlyph\n    let symbolGlyph = typeNode.createNode(uiContext, 'SymbolGlyph');\n    symbolGlyph.initialize($r('sys.symbol.ohos_trash'));\n    col.appendChild(symbolGlyph);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('SymbolGlyph sample');\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkbox18",
      children: "Checkbox18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Checkbox = TypedFrameNode<CheckboxInterface, CheckboxAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checkbox类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox#%E6%8E%A5%E5%8F%A3",
              children: "CheckboxInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox#%E5%B1%9E%E6%80%A7",
              children: "CheckboxAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Checkbox类型FrameNode节点。  CheckboxInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Checkbox组件的构造函数类型。  CheckboxAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Checkbox组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodecheckbox18",
      children: "createNode('Checkbox')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Checkbox'): Checkbox"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Checkbox类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Checkbox'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Checkbox类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#checkbox18",
              children: "Checkbox"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkbox类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Checkbox控制器\nclass MyCheckboxController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Checkbox\n    let checkbox = typeNode.createNode(uiContext, 'Checkbox')\n    checkbox.initialize({ name: 'checkbox1', group: 'checkboxGroup1' })\n\n    // 创建另一个Checkbox\n    let checkbox1 = typeNode.createNode(uiContext, 'Checkbox')\n    checkbox1.initialize({ name: 'checkbox2', group: 'checkboxGroup1' })\n\n    // 将两个checkbox添加至col进行比较\n    col.appendChild(checkbox)\n    col.appendChild(checkbox1)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myCheckboxController: MyCheckboxController = new MyCheckboxController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('CheckboxSample')\n      NodeContainer(this.myCheckboxController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributecheckbox20",
      children: "getAttribute('Checkbox')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Checkbox'): CheckboxAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Checkbox节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Checkbox'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Checkbox节点类型的属性。"
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
            children: "CheckboxAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Checkbox控制器\nclass MyCheckboxController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Checkbox\n    let checkbox = typeNode.createNode(uiContext, 'Checkbox')\n    checkbox.initialize({ name: 'checkbox1', group: 'checkboxGroup1' })\n\n    // 创建另一个Checkbox\n    let checkbox1 = typeNode.createNode(uiContext, 'Checkbox')\n    checkbox1.initialize({ name: 'checkbox2', group: 'checkboxGroup1' })\n    // 给首个Checkbox设置形状属性\n    typeNode.getAttribute(checkbox1,'Checkbox')?.shape(CheckBoxShape.ROUNDED_SQUARE)\n    // 将两个checkbox添加至col进行比较\n    col.appendChild(checkbox)\n    col.appendChild(checkbox1)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myCheckboxController: MyCheckboxController = new MyCheckboxController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('CheckboxSample')\n      NodeContainer(this.myCheckboxController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkboxgroup18",
      children: "CheckboxGroup18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type CheckboxGroup = TypedFrameNode<CheckboxGroupInterface, CheckboxGroupAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CheckboxGroup类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup#%E6%8E%A5%E5%8F%A3",
              children: "CheckboxGroupInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup#%E5%B1%9E%E6%80%A7",
              children: "CheckboxGroupAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供CheckboxGroup类型FrameNode节点。  CheckboxGroupInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为CheckboxGroup组件的构造函数类型。  CheckboxGroupAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回CheckboxGroup组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodecheckboxgroup18",
      children: "createNode('CheckboxGroup')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'CheckboxGroup'): CheckboxGroup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建CheckboxGroup类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'CheckboxGroup'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建CheckboxGroup类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#checkboxgroup18",
              children: "CheckboxGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CheckboxGroup类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义CheckboxGroup控制器\nclass MyCheckboxGroupController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    let checkbox = typeNode.createNode(uiContext, 'Checkbox')\n    checkbox.initialize({ name: 'checkbox1', group: 'checkboxGroup1' })\n\n    let checkbox1 = typeNode.createNode(uiContext, 'Checkbox')\n    checkbox1.initialize({ name: 'checkbox2', group: 'checkboxGroup1' })\n\n    // 创建checkboxGroup\n    let checkboxGroup = typeNode.createNode(uiContext, 'CheckboxGroup')\n    checkboxGroup.initialize({ group: 'checkboxGroup1' })\n\n    col.appendChild(checkbox)\n    col.appendChild(checkbox1)\n    col.appendChild(checkboxGroup)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myCheckboxGroupController: MyCheckboxGroupController = new MyCheckboxGroupController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('CheckboxGroupSample')\n      NodeContainer(this.myCheckboxGroupController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rating18",
      children: "Rating18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Rating = TypedFrameNode<RatingInterface, RatingAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rating类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating#%E6%8E%A5%E5%8F%A3",
              children: "RatingInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating#%E5%B1%9E%E6%80%A7",
              children: "RatingAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Rating类型FrameNode节点。  RatingInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Rating组件的构造函数类型。  RatingAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Rating组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnoderating18",
      children: "createNode('Rating')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Rating'): Rating"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Rating类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Rating'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Rating类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rating18",
              children: "Rating"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rating类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Rating控制器\nclass MyRatingController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建rating\n    let rating = typeNode.createNode(uiContext, 'Rating')\n    rating.initialize({ rating: 0 })\n    col.appendChild(rating)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myRatingController: MyRatingController = new MyRatingController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('RatingSample')\n\n      NodeContainer(this.myRatingController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radio18",
      children: "Radio18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Radio = TypedFrameNode<RadioInterface, RadioAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Radio类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio#%E6%8E%A5%E5%8F%A3",
              children: "RadioInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio#%E5%B1%9E%E6%80%A7",
              children: "RadioAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Radio类型FrameNode节点。  RadioInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Radio组件的构造函数类型。  RadioAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Radio组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnoderadio18",
      children: "createNode('Radio')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Radio'): Radio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Radio类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Radio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Radio类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#radio18",
              children: "Radio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radio类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Radio控制器\nclass MyRadioController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Radio\n    let radio1 = typeNode.createNode(uiContext, 'Radio')\n    radio1.initialize({ value: 'radio1', group: 'radioGroup' })\n\n    // 创建另一个Radio用于对比\n    let radio2 = typeNode.createNode(uiContext, 'Radio')\n    radio2.initialize({ value: 'radio2', group: 'radioGroup' })\n\n    col.appendChild(radio1)\n    col.appendChild(radio2)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myRadioController: MyRadioController = new MyRadioController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('RadioSample')\n      NodeContainer(this.myRadioController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeradio20",
      children: "getAttribute('Radio')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Radio'): RadioAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Radio节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Radio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Radio节点类型的属性。"
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
            children: "RadioAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Radio控制器\nclass MyRadioController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建radio\n    let radio1 = typeNode.createNode(uiContext, 'Radio')\n    radio1.initialize({ value: 'radio1', group: 'radioGroup' })\n    typeNode.getAttribute(radio1,'Radio')?.checked(true)\n    // 创建另一个radio用于对比\n    let radio2 = typeNode.createNode(uiContext, 'Radio')\n    radio2.initialize({ value: 'radio2', group: 'radioGroup' })\n\n\n    col.appendChild(radio1)\n    col.appendChild(radio2)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myRadioController: MyRadioController = new MyRadioController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('RadioSample')\n      NodeContainer(this.myRadioController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "slider18",
      children: "Slider18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Slider = TypedFrameNode<SliderInterface, SliderAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slider类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider#%E6%8E%A5%E5%8F%A3",
              children: "SliderInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider#%E5%B1%9E%E6%80%A7",
              children: "SliderAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Slider类型FrameNode节点。  SliderInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Slider组件的构造函数类型。  SliderAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Slider组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeslider18",
      children: "createNode('Slider')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Slider'): Slider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Slider类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Slider'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Slider类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#slider18",
              children: "Slider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slider类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Slider控制器\nclass MySliderController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Slider\n    let slider = typeNode.createNode(uiContext, 'Slider')\n    slider.initialize({value:50})\n    col.appendChild(slider)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private mySliderController: MySliderController = new MySliderController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('SliderSample')\n      NodeContainer(this.mySliderController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributeslider20",
      children: "getAttribute('Slider')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Slider'): SliderAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Slider节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Slider'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Slider节点类型的属性。"
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
            children: "SliderAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Slider控制器\nclass MySliderController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Slider\n    let slider = typeNode.createNode(uiContext, 'Slider')\n    slider.initialize({value:50})\n    typeNode.getAttribute(slider,'Slider')?.selectedColor(Color.Pink)\n    col.appendChild(slider)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private mySliderController: MySliderController = new MySliderController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('SliderSample')\n      NodeContainer(this.mySliderController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "select18",
      children: "Select18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Select = TypedFrameNode<SelectInterface, SelectAttribute>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select类型的FrameNode节点类型。"
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#%E6%8E%A5%E5%8F%A3",
              children: "SelectInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#%E5%B1%9E%E6%80%A7",
              children: "SelectAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Select类型FrameNode节点。  SelectInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Select组件的构造函数类型。  SelectAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Select组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodeselect18",
      children: "createNode('Select')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Select'): Select"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Select类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Select'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Select类型的节点。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#select18",
              children: "Select"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Select控制器\nclass MySelectController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Select并设置选项\n    let select = typeNode.createNode(uiContext, 'Select')\n    select.initialize([{ value: \"option one\" }, { value: \"option two\" }, { value: \"option three\" }])\n    col.appendChild(select)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private mySelectController: MySelectController = new MySelectController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('SelectSample')\n      NodeContainer(this.mySelectController);\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toggle18",
      children: "Toggle18+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["type Toggle = TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#%E6%8E%A5%E5%8F%A3",
        children: "ToggleInterface"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#%E5%B1%9E%E6%80%A7",
        children: "ToggleAttribute"
      }), ">"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
        children: "Toggle"
      }), "类型的FrameNode节点类型。"]
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
            children: ["TypedFrameNode<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#%E6%8E%A5%E5%8F%A3",
              children: "ToggleInterface"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#%E5%B1%9E%E6%80%A7",
              children: "ToggleAttribute"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供Toggle类型FrameNode节点。  ToggleInterface用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#typedframenode12",
              children: "TypedFrameNode"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "initialize"
            }), "接口的入参，入参为Toggle组件的构造函数类型。  ToggleAttribute用于TypedFrameNode的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%B1%9E%E6%80%A7",
              children: "attribute"
            }), "接口的返回值，返回Toggle组件的属性设置对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createnodetoggle18",
      children: "createNode('Toggle')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createNode(context: UIContext, nodeType: 'Toggle', options?: ToggleOptions): Toggle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Toggle类型的FrameNode节点。"
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建对应节点时所需的UI上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Toggle'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Toggle类型的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#toggleoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ToggleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Toggle节点的接口参数，仅可通过ToggleOptions中的type属性设置开关样式。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#toggle18",
              children: "Toggle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toggle类型的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Toggle控制器\nclass MyToggleController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Toggle\n    let toggleSwitch = typeNode.createNode(uiContext, 'Toggle')\n    toggleSwitch.initialize({ type: ToggleType.Switch })\n    col.appendChild(toggleSwitch)\n\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myToggleController: MyToggleController = new MyToggleController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ToggleSample')\n      NodeContainer(this.myToggleController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getattributetoggle20",
      children: "getAttribute('Toggle')20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAttribute(node: FrameNode, nodeType: 'Toggle'): ToggleAttribute | undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Toggle节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
              children: "FrameNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取属性时所需的目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Toggle'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Toggle节点类型的属性。"
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
            children: "ToggleAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义Toggle控制器\nclass MyToggleController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext)\n    node.commonAttribute\n    let col = typeNode.createNode(uiContext, 'Column')\n    col.initialize({ space: 5 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(col)\n    // 创建Toggle\n    let toggleSwitch = typeNode.createNode(uiContext, 'Toggle')\n    toggleSwitch.initialize({ type: ToggleType.Switch })\n    typeNode.getAttribute(toggleSwitch,'Toggle')?.selectedColor(Color.Orange)\n    col.appendChild(toggleSwitch)\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myToggleController: MyToggleController = new MyToggleController();\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ToggleSample')\n      NodeContainer(this.myToggleController);\n\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nodeadapter12",
      children: "NodeAdapter12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NodeAdapter提供FrameNode的数据懒加载能力，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "实现接口功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(759579)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入参不能为负数，入参为负数时不做处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nodeadapter%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "NodeAdapter使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor12",
      children: "constructor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NodeAdapter的构造函数。"
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
      id: "dispose12-1",
      children: "dispose12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dispose(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "立即释放当前的NodeAdapter。如果是已绑定的状态，会先进行解绑操作，再释放当前的NodeAdapter。"
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
      id: "totalnodecount12",
      children: "totalNodeCount12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set totalNodeCount(count: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置数据节点总数。"
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
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据节点总数。  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get totalNodeCount(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数据节点总数。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据节点总数。  取值范围：[0, +∞)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reloadallitems12",
      children: "reloadAllItems12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reloadAllItems(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重新加载全部数据操作。实际调用了LazyForEach中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#ondatareloaded",
        children: "OnDataReloaded"
      }), "接口通知组件重新加载所有数据。"]
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
      id: "reloaditem12",
      children: "reloadItem12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reloadItem(start: number, count: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从索引值开始重新加载指定数量的节点数据。"
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
            children: "重新加载的节点开始索引值。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重新加载数据节点的数量。  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removeitem12",
      children: "removeItem12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "removeItem(start: number, count: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从索引值开始删除指定数量的节点数据。"
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
            children: "删除的节点开始索引值。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除数据节点的数量。  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insertitem12",
      children: "insertItem12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "insertItem(start: number, count: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从索引值开始新增指定数量的节点数据。"
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
            children: "新增的节点开始索引值。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增数据节点的数量。  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moveitem12",
      children: "moveItem12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "moveItem(from: number, to: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将数据从原始索引移动到目的索引。"
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
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据移动的原始索引值。  取值范围：[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据移动的目的索引值。  取值范围：[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallavailableitems12",
      children: "getAllAvailableItems12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllAvailableItems(): Array<FrameNode>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取所有有效数据。有效节点数据包括显示在屏幕上的节点以及预加载的节点。其中预加载节点的数量可依照LazyForEach的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6",
        children: "使用限制"
      }), "，调整父容器的cachedCount属性进行设置。"]
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
            children: "Array<FrameNode>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode数据节点集合。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onattachtonode12",
      children: "onAttachToNode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAttachToNode?(target: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FrameNode绑定NodeAdapter时回调。"
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
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定NodeAdapter的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondetachfromnode12",
      children: "onDetachFromNode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDetachFromNode?(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解除绑定时回调。"
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
      id: "ongetchildid12",
      children: "onGetChildId12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onGetChildId?(index: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "节点首次加载或新节点滑入时回调。传入的index参数用于自定义生成Id，需要开发者自行保证根据不同index生成Id的唯一性。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载节点索引值。  取值范围：[0, +∞)"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回开发者自定义生成的Id，需要开发者自行保证Id的唯一性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncreatechild12",
      children: "onCreateChild12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onCreateChild?(index: number): FrameNode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "节点首次加载或新节点滑入时回调。建议开发者在添加子组件时，遵循声明式组件中子组件的约束。例如，WaterFlow支持添加FlowItem子节点。父节点根据子节点的索引与key值判断是否触发了节点首次加载或新节点滑入。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载节点索引值。  取值范围：[0, +∞)"
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
            children: "FrameNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回开发者创建的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondisposechild12",
      children: "onDisposeChild12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDisposeChild?(id: number, node: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子节点即将销毁时回调。既不显示在屏幕上，也不处于预加载范围内的节点都属于即将销毁的节点。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将销毁的子节点id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将销毁的FrameNode节点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onupdatechild12",
      children: "onUpdateChild12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onUpdateChild?(id: number, node: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新加载的数据节点被复用时回调。已缓存节点的key值与被复用节点一致时进行节点复用。"
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复用节点的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被复用的FrameNode节点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attachnodeadapter12",
      children: "attachNodeAdapter12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static attachNodeAdapter(adapter: NodeAdapter, node: FrameNode): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给FrameNode绑定一个NodeAdapter。一个节点只能绑定一个NodeAdapter。已经绑定NodeAdapter的再次绑定会失败并返回false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523077)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持绑定的组件：Column、Row、Stack、GridRow、Flex、Swiper、RelativeContainer、List、ListItemGroup、WaterFlow、Grid。"
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
            children: "adapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#nodeadapter12",
              children: "NodeAdapter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义懒加载的NodeAdapter类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定的FrameNode节点。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定结果，返回true绑定成功，false绑定失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detachnodeadapter12",
      children: "detachNodeAdapter12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static detachNodeAdapter(node: FrameNode): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解除绑定操作，解除FrameNode节点绑定的NodeAdapter。"
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
            children: "node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FrameNode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要解除绑定的FrameNode节点。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisposed20-1",
      children: "isDisposed20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDisposed(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前NodeAdapter对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。"
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
            children: "后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%A3%80%E9%AA%8Cnodeadapter%E6%98%AF%E5%90%A6%E6%9C%89%E6%95%88%E7%A4%BA%E4%BE%8B",
        children: "检验NodeAdapter是否有效示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义具体类型节点示例",
      children: "自定义具体类型节点示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以Text节点为例，创建Text类型节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  makeNode(uiContext: UIContext): FrameNode | null {\n    let node = new FrameNode(uiContext);\n    node.commonAttribute.width(100)\n      .height(50)\n      .borderColor(Color.Gray)\n      .borderWidth(1)\n      .margin({ left: 10 });\n    let col = typeNode.createNode(uiContext, 'Column');\n    col.initialize({ space: 5 })\n      .width('100%').height('100%').margin({ top: 5 });\n    node.appendChild(col);\n    let text = typeNode.createNode(uiContext, 'Text');\n    text.initialize(\"Hello\").fontColor(Color.Blue).fontSize(14);\n    col.appendChild(text);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(988174)/* ["default"] */.A) + "",
        width: "166",
        height: "94"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点操作示例",
      children: "节点操作示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext, typeNode } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TEST_TAG: string = \"FrameNode \"\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  public childList: Array<FrameNode> = new Array<FrameNode>();\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n  private childrenCount: number = 0;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.uiContext = uiContext;\n\n    this.frameNode = new FrameNode(uiContext);\n    this.frameNode.commonAttribute.backgroundColor(Color.Pink);\n    this.frameNode.commonAttribute.size({ width: 100, height: 100 });\n    this.addCommonEvent(this.frameNode)\n    this.rootNode.appendChild(this.frameNode);\n    this.childrenCount = this.childrenCount + 1;\n\n    // 批量创建10个子节点并挂载到主节点\n    for (let i = 0; i < 10; i++) {\n      let childNode = new FrameNode(uiContext);\n      this.childList.push(childNode);\n      this.frameNode.appendChild(childNode);\n    }\n\n    // 创建Stack容器节点\n    let stackNode = typeNode.createNode(uiContext, \"Stack\");\n    this.frameNode.appendChild(stackNode);\n    return this.rootNode;\n  }\n\n  // 为节点添加点击事件\n  addCommonEvent(frameNode: FrameNode) {\n    frameNode.commonEvent.setOnClick((event: ClickEvent) => {\n      console.info(`Click FrameNode: ${JSON.stringify(event)}`)\n    })\n  }\n\n  createFrameNode() {\n    let frameNode = new FrameNode(this.uiContext!);\n    frameNode.commonAttribute.backgroundColor(Color.Pink);\n    frameNode.commonAttribute.size({ width: 100, height: 100 });\n    frameNode.commonAttribute.position({ x: this.childrenCount * 120, y: 0 });\n\n    return frameNode;\n  }\n\n  // 追加子节点到根节点的末尾\n  appendChild() {\n    const childNode = this.createFrameNode();\n    this.rootNode!.appendChild(childNode);\n    this.childrenCount = this.childrenCount + 1;\n  }\n\n  // 在指定索引节点后插入新节点\n  insertChildAfter(index: number) {\n    let insertNode = this.createFrameNode();\n    let childNode = this.rootNode!.getChild(index);\n    this.rootNode!.insertChildAfter(insertNode, childNode);\n    this.childrenCount = this.childrenCount + 1;\n  }\n\n  // 移除指定索引的子节点\n  removeChild(index: number) {\n    let childNode = this.rootNode!.getChild(index);\n    if (childNode == null) {\n      console.info(`${TEST_TAG} getchild at index {${index}} : fail`);\n      return;\n    }\n    this.rootNode!.removeChild(childNode);\n    this.childrenCount = this.childrenCount - 1;\n  }\n\n  // 打印节点计数\n  getChildNumber() {\n    console.info(`${TEST_TAG} getChildNumber ${this.rootNode!.getChildrenCount()}`)\n    console.info(`${TEST_TAG} children count is ${this.childrenCount}`);\n  }\n\n  // 清空所有子节点\n  clearChildren() {\n    this.rootNode!.clearChildren();\n  }\n\n  // 节点关系校验\n  searchFrameNode() {\n    if (this.rootNode!.getFirstChild() === null) {\n      console.info(`${TEST_TAG} the rootNode does not have child node.`)\n    }\n    if (this.rootNode!.getFirstChild() === this.frameNode) {\n      console.info(`${TEST_TAG} getFirstChild  result: success. The first child of the rootNode is equals to frameNode.`);\n    } else {\n      console.info(`${TEST_TAG} getFirstChild  result: fail. The first child of the rootNode is not equals to frameNode.`);\n    }\n    if (this.frameNode!.getChild(5) === this.frameNode!.getChild(4)!.getNextSibling()) {\n      console.info(`${TEST_TAG} getNextSibling  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getNextSibling  result: fail.`);\n    }\n    if (this.frameNode!.getChild(3) === this.frameNode!.getChild(4)!.getPreviousSibling()) {\n      console.info(`${TEST_TAG} getPreviousSibling  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getPreviousSibling  result: fail.`);\n    }\n    if (this.rootNode!.getFirstChild() !== null && this.rootNode!.getFirstChild()!.getParent() === this.rootNode) {\n      console.info(`${TEST_TAG} getParent  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getParent  result: fail.`);\n    }\n    if (this.rootNode!.getParent() !== undefined || this.rootNode!.getParent() !== null) {\n      console.info(`${TEST_TAG} get ArkTsNode success.`)\n      console.info(`${TEST_TAG} check rootNode whether is modifiable ${this.rootNode!.isModifiable()}`)\n      console.info(`${TEST_TAG} check getParent whether is modifiable ${this.rootNode!.getParent()!.isModifiable()}`)\n    } else {\n      console.info(`${TEST_TAG} get ArkTsNode fail.`);\n    }\n  }\n\n  // 将指定节点移动到根节点的第一个位置\n  moveFrameNode() {\n    const currentNode = this.frameNode!.getChild(10);\n    try {\n      currentNode!.moveTo(this.rootNode, 0);\n      if (this.rootNode!.getChild(0) === currentNode) {\n        console.info(`${TEST_TAG} moveTo  result: success.`);\n      } else {\n        console.info(`${TEST_TAG} moveTo  result: fail.`);\n      }\n    } catch (err) {\n      console.info(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n      console.info(`${TEST_TAG} moveTo  result: fail.`);\n    }\n  }\n\n  getPositionToWindow() {\n    let positionToWindow = this.rootNode?.getPositionToWindow();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToWindow)}`);\n  }\n\n  getPositionToParent() {\n    let positionToParent = this.rootNode?.getPositionToParent();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToParent)}`);\n  }\n\n  getPositionToScreen() {\n    let positionToScreen = this.rootNode?.getPositionToScreen();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToScreen)}`);\n  }\n\n  getGlobalPositionOnDisplay() {\n    let positionOnGlobalDisplay = this.rootNode?.getGlobalPositionOnDisplay();\n    console.info(`${TEST_TAG}${JSON.stringify(positionOnGlobalDisplay)}`);\n  }\n\n  getPositionToWindowWithTransform() {\n    let positionToWindowWithTransform = this.rootNode?.getPositionToWindowWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToWindowWithTransform)}`);\n  }\n\n  getPositionToParentWithTransform() {\n    let positionToParentWithTransform = this.rootNode?.getPositionToParentWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToParentWithTransform)}`);\n  }\n\n  getPositionToScreenWithTransform() {\n    let positionToScreenWithTransform = this.rootNode?.getPositionToScreenWithTransform();\n    console.info(`${TEST_TAG}${JSON.stringify(positionToScreenWithTransform)}`);\n  }\n\n  getMeasuredSize() {\n    let measuredSize = this.frameNode?.getMeasuredSize();\n    console.info(`${TEST_TAG}${JSON.stringify(measuredSize)}`);\n  }\n\n  getLayoutPosition() {\n    let layoutPosition = this.frameNode?.getLayoutPosition();\n    console.info(`${TEST_TAG}${JSON.stringify(layoutPosition)}`);\n  }\n\n  getUserConfigBorderWidth() {\n    let userConfigBorderWidth = this.frameNode?.getUserConfigBorderWidth();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigBorderWidth)}`);\n  }\n\n  getUserConfigPadding() {\n    let userConfigPadding = this.frameNode?.getUserConfigPadding();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigPadding)}`);\n  }\n\n  getUserConfigMargin() {\n    let userConfigMargin = this.frameNode?.getUserConfigMargin();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigMargin)}`);\n  }\n\n  getUserConfigSize() {\n    let userConfigSize = this.frameNode?.getUserConfigSize();\n    console.info(`${TEST_TAG}${JSON.stringify(userConfigSize)}`);\n  }\n\n  getId() {\n    let id = this.frameNode?.getId();\n    console.info(`${TEST_TAG}${id}`);\n  }\n\n  getUniqueId() {\n    let uniqueId = this.frameNode?.getUniqueId();\n    console.info(`${TEST_TAG}${uniqueId}`);\n  }\n\n  getNodeType() {\n    let nodeType = this.frameNode?.getNodeType();\n    console.info(`${TEST_TAG}${nodeType}`);\n  }\n\n  getOpacity() {\n    let opacity = this.frameNode?.getOpacity();\n    console.info(`${TEST_TAG}${JSON.stringify(opacity)}`);\n  }\n\n  isVisible() {\n    let visible = this.frameNode?.isVisible();\n    console.info(`${TEST_TAG}${JSON.stringify(visible)}`);\n  }\n\n  isClipToFrame() {\n    let clipToFrame = this.frameNode?.isClipToFrame();\n    console.info(`${TEST_TAG}${JSON.stringify(clipToFrame)}`);\n  }\n\n  isAttached() {\n    let attached = this.frameNode?.isAttached();\n    console.info(`${TEST_TAG}${JSON.stringify(attached)}`);\n  }\n\n  getInspectorInfo() {\n    let inspectorInfo = this.frameNode?.getInspectorInfo();\n    console.info(`${TEST_TAG}${JSON.stringify(inspectorInfo)}`);\n  }\n\n  // 设置跨语言交互选项\n  setCrossLanguageOptions() {\n    console.info(`${TEST_TAG} getCrossLanguageOptions ${JSON.stringify(this.frameNode?.getCrossLanguageOptions)}`);\n    try {\n      this.frameNode?.setCrossLanguageOptions({\n        attributeSetting: true\n      });\n      console.info(`${TEST_TAG} setCrossLanguageOptions success.`);\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n      console.error(`${TEST_TAG} setCrossLanguageOptions fail.`);\n    }\n    console.info(`${TEST_TAG} getCrossLanguageOptions ${JSON.stringify(this.frameNode?.getCrossLanguageOptions)}`);\n  }\n\n  getInteractionEventBindingInfo() {\n    let bindingInfo = this.frameNode?.getInteractionEventBindingInfo(EventQueryType.ON_CLICK);\n    console.info(`${TEST_TAG}${bindingInfo?.baseEventRegistered}`);\n    console.info(`${TEST_TAG}${bindingInfo?.nodeEventRegistered}`);\n    console.info(`${TEST_TAG}${bindingInfo?.nativeEventRegistered}`);\n    console.info(`${TEST_TAG}${bindingInfo?.builtInEventRegistered}`);\n    console.info(`${TEST_TAG}${JSON.stringify(bindingInfo)}`);\n  }\n\n  throwError() {\n    try {\n      this.rootNode!.getParent()!.clearChildren();\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n    }\n    try {\n      this.rootNode!.getParent()!.appendChild(new FrameNode(this.uiContext));\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n    }\n    try {\n      this.rootNode!.getParent()!.removeChild(this.rootNode!.getParent()!.getChild(0));\n    } catch (err) {\n      console.error(`${TEST_TAG} ${(err as BusinessError).code} : ${(err as BusinessError).message}`);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n  @State index: number = 0;\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Row() {\n            Button(\"ADD\")\n              .onClick(() => {\n                this.index++;\n              })\n            Button(\"DEC\")\n              .onClick(() => {\n                this.index--;\n              })\n          }\n\n          // 显示当前索引值\n          Text(\"Current index is \" + this.index)\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n        }\n\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n\n          // 自定义节点容器\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"appendChild\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.appendChild();\n          })\n        Button(\"insertChildAfter\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.insertChildAfter(this.index);\n          })\n        Button(\"removeChild\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.removeChild(this.index);\n          })\n        Button(\"clearChildren\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.clearChildren();\n          })\n        Button(\"getChildNumber\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildNumber();\n          })\n        Button(\"searchFrameNode\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.searchFrameNode();\n          })\n        Button(\"moveFrameNode\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.moveFrameNode();\n          })\n        Button(\"getPositionToWindow\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToWindow();\n          })\n        Button(\"getPositionToParent\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToParent();\n          })\n        Button(\"getPositionToScreen\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToScreen();\n          })\n        Button(\"getGlobalPositionOnDisplay\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getGlobalPositionOnDisplay();\n          })\n        Button(\"getPositionToParentWithTransform\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToParentWithTransform();\n          })\n        Button(\"getPositionToWindowWithTransform\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToWindowWithTransform();\n          })\n        Button(\"getPositionToScreenWithTransform\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getPositionToScreenWithTransform();\n          })\n        Button(\"getMeasuredSize\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getMeasuredSize();\n          })\n        Button(\"getLayoutPosition\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getLayoutPosition();\n          })\n        Button(\"getUserConfigBorderWidth\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigBorderWidth();\n          })\n        Button(\"getUserConfigPadding\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigPadding();\n          })\n        Button(\"getUserConfigMargin\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigMargin();\n          })\n        Button(\"getUserConfigSize\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUserConfigSize();\n          })\n        Button(\"getId\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getId();\n          })\n        Button(\"getUniqueId\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getUniqueId();\n          })\n        Button(\"getNodeType\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getNodeType();\n          })\n        Button(\"getOpacity\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getOpacity();\n          })\n        Button(\"isVisible\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.isVisible();\n          })\n        Button(\"isClipToFrame\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.isClipToFrame();\n          })\n        Button(\"isAttached\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.isAttached();\n          })\n        Button(\"getInspectorInfo\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getInspectorInfo();\n          })\n        Button(\"getCustomProperty\")\n          .width(300)\n          .onClick(() => {\n            const uiContext: UIContext = this.getUIContext();\n            if (uiContext) {\n              // 通过组件ID获取对应的FrameNode节点\n              const node: FrameNode | null = uiContext.getFrameNodeById(\"Test_Button\") || null;\n              if (node) {\n                for (let i = 1; i < 4; i++) {\n                  const key = 'customProperty' + i;\n                  const property = node.getCustomProperty(key);\n                  console.info(`${TEST_TAG}${key}`, JSON.stringify(property));\n                }\n              }\n            }\n          })\n          .id('Test_Button')\n          .customProperty('customProperty1', {\n            'number': 10,\n            'string': 'this is a string',\n            'bool': true,\n            'object': {\n              'name': 'name',\n              'value': 100\n            }\n          })\n          .customProperty('customProperty2', {})\n          .customProperty('customProperty2', undefined)\n        Button(\"setCrossLanguageOptions\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.setCrossLanguageOptions();\n          })\n        Button(\"getInteractionEventBindingInfo\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getInteractionEventBindingInfo();\n          })\n        Button(\"throwError\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.throwError();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lazyforeach场景节点操作示例",
      children: "LazyForEach场景节点操作示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext, BuilderNode, ExpandMode, LengthUnit } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \"\n\n// BasicDataSource实现了IDataSource接口，用于管理listener监听，以及通知LazyForEach数据更新\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.ADD, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.CHANGE, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.DELETE, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.EXCHANGE, index: {start: from, end: to}}]);\n    })\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    })\n  }\n}\n\n// 自定义数据管理类管理string数组\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = []\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\nclass Params {\n  data: MyDataSource | null = null;\n  scroller: Scroller | null = null;\n\n  constructor(data: MyDataSource, scroller: Scroller) {\n    this.data = data;\n    this.scroller = scroller;\n  }\n}\n\n@Builder\nfunction buildData(params: Params) {\n  List({ scroller: params.scroller }) {\n    LazyForEach(params.data, (item: string) => {\n      ListItem() {\n        Column() {\n          Text(item)\n            .fontSize(20)\n            .onAppear(() => {\n              console.info(`${TEST_TAG} node appear: ${item}`)\n            })\n            .backgroundColor(Color.Pink)\n            .margin({\n              top: 30,\n              bottom: 30,\n              left: 10,\n              right: 10\n            })\n        }\n      }\n      .id(item)\n    }, (item: string) => item)\n  }\n  .cachedCount(5)\n  .listDirection(Axis.Horizontal)\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n  private data: MyDataSource = new MyDataSource();\n  private scroller: Scroller = new Scroller();\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`N${i}`);\n    }\n    const params: Params = new Params(this.data, this.scroller);\n    const dataNode: BuilderNode<[Params]> = new BuilderNode(uiContext);\n    dataNode.build(wrapBuilder<[Params]>(buildData), params);\n    this.rootNode = dataNode.getFrameNode();\n    const scrollToIndexOptions: ScrollToIndexOptions = {\n      extraOffset: {\n        value: 20, unit: LengthUnit.VP\n      }\n    };\n    this.scroller.scrollToIndex(6, true, ScrollAlign.START, scrollToIndexOptions);\n    return this.rootNode;\n  }\n\n  getFirstChildIndexWithoutExpand() {\n    console.info(`${TEST_TAG} getFirstChildIndexWithoutExpand: ${this.rootNode!.getFirstChildIndexWithoutExpand()}`);\n  }\n\n  getLastChildIndexWithoutExpand() {\n    console.info(`${TEST_TAG} getLastChildIndexWithoutExpand: ${this.rootNode!.getLastChildIndexWithoutExpand()}`);\n  }\n\n  getChildWithNotExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.NOT_EXPAND);\n    console.info(`${TEST_TAG} getChild(3, ExpandMode.NOT_EXPAND): ${childNode!.getId()}`);\n    if (childNode!.getId() === \"N9\") {\n      console.info(`${TEST_TAG} getChild(3, ExpandMode.NOT_EXPAND)  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getChild(3, ExpandMode.NOT_EXPAND)  result: fail.`);\n    }\n  }\n\n  getChildWithExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.EXPAND);\n    console.info(`${TEST_TAG} getChild(3, ExpandMode.EXPAND): ${childNode!.getId()}`);\n    if (childNode!.getId() === \"N3\") {\n      console.info(`${TEST_TAG} getChild(3, ExpandMode.EXPAND)  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getChild(3, ExpandMode.EXPAND)  result: fail.`);\n    }\n  }\n\n  getChildWithLazyExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.LAZY_EXPAND);\n    console.info(`${TEST_TAG} getChild(3, ExpandMode.LAZY_EXPAND): ${childNode!.getId()}`);\n    if (childNode!.getId() === \"N3\") {\n      console.info(`${TEST_TAG} getChild(3, ExpandMode.LAZY_EXPAND)  result: success.`);\n    } else {\n      console.info(`${TEST_TAG} getChild(3, ExpandMode.LAZY_EXPAND)  result: fail.`);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"getFirstChildIndexWithoutExpand\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getFirstChildIndexWithoutExpand();\n          })\n        Button(\"getLastChildIndexWithoutExpand\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getLastChildIndexWithoutExpand();\n          })\n        Button(\"getChildWithNotExpand\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildWithNotExpand();\n          })\n        Button(\"getChildWithExpand\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildWithExpand();\n          })\n        Button(\"getChildWithLazyExpand\")\n          .width(300)\n          .onClick(() => {\n            this.myNodeController.getChildWithLazyExpand();\n          })\n      }\n      .width(\"100%\")\n    }\n    .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础事件示例",
      children: "基础事件示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100)\n      .height(100)\n      .backgroundColor(Color.Pink);\n    this.addCommonEvent(this.rootNode);\n    return this.rootNode;\n  }\n\n  // 为FrameNode绑定交互事件\n  addCommonEvent(frameNode: FrameNode) {\n\n    // 悬浮事件\n    frameNode.commonEvent.setOnHover(((isHover: boolean, event: HoverEvent): void => {\n      console.info(`isHover FrameNode: ${isHover}`);\n      console.info(`isHover FrameNode: ${JSON.stringify(event)}`);\n      event.stopPropagation();\n    }))\n\n    // 点击事件\n    frameNode.commonEvent.setOnClick((event: ClickEvent) => {\n      console.info(`Click FrameNode: ${JSON.stringify(event)}`)\n    })\n\n    // 触摸事件\n    frameNode.commonEvent.setOnTouch((event: TouchEvent) => {\n      console.info(`touch FrameNode: ${JSON.stringify(event)}`)\n    })\n\n    // 显示事件\n    frameNode.commonEvent.setOnAppear(() => {\n      console.info(`on Appear FrameNode`)\n    })\n\n    // 消失事件\n    frameNode.commonEvent.setOnDisappear(() => {\n      console.info(`onDisAppear FrameNode`)\n    })\n\n    // 获焦事件\n    frameNode.commonEvent.setOnFocus(() => {\n      console.info(`onFocus FrameNode`)\n    })\n\n    // 失焦事件\n    frameNode.commonEvent.setOnBlur(() => {\n      console.info(`onBlur FrameNode`)\n    })\n\n    // 键盘事件\n    frameNode.commonEvent.setOnKeyEvent((event: KeyEvent) => {\n      console.info(`Key FrameNode: ${JSON.stringify(event)}`)\n    })\n\n    // 鼠标事件\n    frameNode.commonEvent.setOnMouse((event: MouseEvent) => {\n      console.info(`Mouse FrameNode: ${JSON.stringify(event)}`)\n    })\n\n    // 组件区域变化事件\n    frameNode.commonEvent.setOnSizeChange((oldValue: SizeOptions, newValue: SizeOptions) => {\n      console.info(`onSizeChange FrameNode: oldValue is ${JSON.stringify(oldValue)} value is ${JSON.stringify(newValue)}`)\n    })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      Button(\"add CommonEvent to Text\")\n        .onClick(() => {\n          this.myNodeController!.addCommonEvent(this.myNodeController!.rootNode!.getParent()!.getPreviousSibling() !)\n        })\n      Text(\"this is a Text\")\n        .fontSize(16)\n        .borderWidth(1)\n        .onHover(((isHover: boolean, event: HoverEvent): void => {\n          console.info(`isHover Text: ${isHover}`);\n          console.info(`isHover Text: ${JSON.stringify(event)}`);\n          event.stopPropagation();  // 阻止事件冒泡\n        }))\n        .onClick((event: ClickEvent) => {\n          console.info(`Click Text    : ${JSON.stringify(event)}`)\n        })\n        .onTouch((event: TouchEvent) => {\n          console.info(`touch Text    : ${JSON.stringify(event)}`)\n        })\n        .onAppear(() => {\n          console.info(`on Appear Text`)\n        })\n        .onDisAppear(() => {\n          console.info(`onDisAppear Text`)\n        })\n        .onFocus(() => {\n          console.info(`onFocus Text`)\n        })\n        .onBlur(() => {\n          console.info(`onBlur Text`)\n        })\n        .onKeyEvent((event: KeyEvent) => {\n          console.info(`Key Text    : ${JSON.stringify(event)}`)\n        })\n        .onMouse((event: MouseEvent) => {\n          console.info(`Mouse Text : ${JSON.stringify(event)}`)\n        })\n        .onSizeChange((oldValue: SizeOptions, newValue: SizeOptions) => {\n          console.info(`onSizeChange Text: oldValue is ${JSON.stringify(oldValue)} value is ${JSON.stringify(newValue)}`)\n        })\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n        .width(300)\n        .height(100)\n    }.width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lazyforeach场景基础事件使用示例",
      children: "LazyForEach场景基础事件使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.ets\nimport {Track, TrackManager, TrackNode} from \"./track\"\n\n@Builder\nfunction page1() {\n  Column() {\n    Text(\"Page1\")\n    PageList().height(\"90%\")\n    Button(\"DumpMessage\")\n      .onClick(() => {\n        TrackManager.get().dump()\n      })\n\n  }.width(\"100%\").height(\"100%\")\n}\n\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    })\n  }\n}\n\n// 自定义数据管理类管理string数组\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Component\nstruct PageList {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 100; i++) {\n      this.data.pushData(`Hello ${i}`)\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          // 通过TrackNode对组件进行封装埋点\n          TrackNode({track: new Track().tag(\"xxx\"+ item).id(index + 30000)}) {\n            Row() {\n              Text(item).fontSize(30)\n                .onClick(() => {\n                })\n            }.margin({ left: 10, right: 10 })\n          }\n        }\n      }, (item: string) => item)\n    }.cachedCount(5)\n  }\n}\n\n\n@Entry\n@Component\nstruct TrackTest {\n  pageInfos: NavPathStack = new NavPathStack()\n  build() {\n    Row() {\n      TrackNode({ track: new Track().tag(\"root\").id(10000)}) {\n        page1()\n      }\n    }\n  }\n\n  aboutToAppear(): void {\n    TrackManager.get().startListenClick(this.getUIContext())\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ./track.ets\nimport { FrameNode, Rect } from '@kit.ArkUI';\n\n@Component\nexport struct TrackNode {\n  @BuilderParam closer: VoidCallback = this.defaultBuilder\n  track: Track | null = null\n  trackShadow: TrackShadow = new TrackShadow()\n\n  @Builder defaultBuilder() {\n  }\n\n  build() {\n    this.closer()\n  }\n\n  aboutToAppear(): void {\n    // 稍后使用onDidBuild\n  }\n\n  aboutToDisappear(): void {\n    TrackManager.get().removeTrack(this.trackShadow.id)\n    console.info(`Track disappear:${this.trackShadow.id}`)\n  }\n\n  onDidBuild(): void {\n    // 构建埋点的虚拟树，获取的node为当前页面的根节点（用例中为Row）\n    let uid = this.getUniqueId()\n    let node: FrameNode | null = this.getUIContext().getFrameNodeByUniqueId(uid);\n    console.info(`Track onDidBuild node:${node?.getNodeType()}`);\n    if (node === null) {\n      return\n    }\n    this.trackShadow.node = node\n    this.trackShadow.id = node?.getUniqueId()\n    this.trackShadow.track = this.track;\n    TrackManager.get().addTrack(this.trackShadow.id, this.trackShadow)\n    // 通过setOnVisibleAreaApproximateChange监听记录埋点组件的可视区域\n    node?.commonEvent.setOnVisibleAreaApproximateChange(\n      { ratios: [0, 0.1, 0.2, 0.5, 0.8, 1], expectedUpdateInterval: 500 },\n      (ratioInc: boolean, ratio: number) => {\n        console.info(`Node ${node?.getUniqueId()}:${node?.getNodeType()} is visibleRatio is ${ratio}`);\n        this.trackShadow.visibleRatio = ratio\n      })\n\n    let parent: FrameNode | null = node?.getParent()\n\n    let attachTrackToParent: (parent: FrameNode | null) => boolean =\n      (parent: FrameNode | null) => {\n        while (parent !== null) {\n          let parentTrack = TrackManager.get().getTrackById(parent.getUniqueId())\n          if (parentTrack !== undefined) {\n            parentTrack.childIds.add(this.trackShadow.id)\n            this.trackShadow.parentId = parentTrack.id\n            return true;\n          }\n          parent = parent.getParent()\n        }\n        return false;\n      }\n    let attached = attachTrackToParent(parent);\n\n    if (!attached) {\n      node?.commonEvent.setOnAppear(() => {\n        let attached = attachTrackToParent(parent);\n        if (attached) {\n          console.info(`Track lazy attached:${this.trackShadow.id}`)\n        }\n      })\n    }\n  }\n}\n\nexport class Track {\n  public areaPercent: number = 0\n  private trackTag: string = \"\"\n  private trackId: number = 0\n\n  constructor() {\n  }\n\n  tag(newTag: string): Track {\n    this.trackTag = newTag;\n    return this;\n  }\n\n  id(newId: number): Track {\n    this.trackId = newId;\n    return this;\n  }\n}\n\nexport class TrackShadow {\n  public node: FrameNode | null = null\n  public id: number = -1\n  public track: Track | null = null\n  public childIds: Set<number> = new Set()\n  public parentId: number = -1\n  public visibleRect: Rect = { left: 0, top: 0, right: 0, bottom: 0 }\n  public area: number = 0\n  public visibleRatio: number = 0\n\n  // 通过全局dump输出埋点树的信息\n  dump(depth: number = 0): void {\n    console.info(`Track DP:${depth} id:${this.id} areaPer:${this.track?.areaPercent} visibleRatio:${this.visibleRatio}`)\n    this.childIds.forEach((value: number) => {\n      TrackManager.get().getTrackById(value)?.dump(depth + 1)\n    })\n  }\n}\n\nexport class TrackManager {\n  static instance: TrackManager\n  private trackMap: Map<number, TrackShadow> = new Map()\n  private rootTrack: TrackShadow | null = null\n\n  static get(): TrackManager {\n    if (TrackManager.instance !== undefined) {\n      return TrackManager.instance\n    }\n    TrackManager.instance = new TrackManager()\n    return TrackManager.instance\n  }\n\n  addTrack(id: number, track: TrackShadow) {\n    if (this.trackMap.size == 0) {\n      this.rootTrack = track\n    }\n    console.info(`Track add id:${id}`)\n    this.trackMap.set(id, track)\n  }\n\n  removeTrack(id: number) {\n    let current = this.getTrackById(id)\n    if (current !== undefined) {\n      this.trackMap.delete(id)\n      let parent = this.getTrackById(current?.parentId)\n      parent?.childIds.delete(id)\n    }\n  }\n\n  getTrackById(id: number): TrackShadow | undefined {\n    return this.trackMap.get(id)\n  }\n\n  startListenClick(context: UIContext) {\n    // 通过无感监听获取FrameNode查找埋点信息\n    context.getUIObserver().on(\"willClick\", (event: ClickEvent, node?: FrameNode) => {\n      console.info(`Track clicked:${node}`)\n      if (node == undefined) {\n        return\n      }\n      let track = this.getTrackById(node.getUniqueId())\n      track?.dump(0);\n    })\n  }\n\n  updateVisibleInfo(track: TrackShadow): void {\n    // 更新埋点信息\n  }\n\n  dump(): void {\n    this.rootTrack?.dump(0)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手势事件示例",
      children: "手势事件示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100)\n      .overlay('This is a FrameNode')\n      .backgroundColor(Color.Pink)\n      .width('100%')\n      .height('100%');\n    this.addGestureEvent(this.rootNode);\n    return this.rootNode;\n  }\n\n  addGestureEvent(frameNode: FrameNode) {\n    frameNode.gestureEvent.addGesture(new PanGestureHandler()\n        .onActionStart((event: GestureEvent) => {\n            console.info(`Pan start: ${JSON.stringify(event)}`);\n        })\n        .onActionUpdate((event: GestureEvent) => {\n            console.info(`Pan update: ${JSON.stringify(event)}`);\n        })\n        .onActionEnd((event: GestureEvent) => {\n            console.info(`Pan end: ${JSON.stringify(event)}`);\n        })\n        .onActionCancel(() => {\n            console.info('Pan cancel');\n        })\n    )\n    frameNode.gestureEvent.addGesture(new LongPressGestureHandler()\n        .onAction((event: GestureEvent) => {\n            console.info(`Long press action: ${JSON.stringify(event)}`);\n        })\n        .onActionEnd((event: GestureEvent) => {\n            console.info(`Long press action end: ${JSON.stringify(event)}`);\n        })\n        .onActionCancel(() => {\n            console.info('Long press cancel');\n        })\n    )\n    frameNode.gestureEvent.addGesture(new TapGestureHandler()\n        .onAction((event: GestureEvent) => {\n            console.info(`Tap action: ${JSON.stringify(event)}`);\n        })\n    )\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n        .borderWidth(1)\n        .width(300)\n        .height(300)\n    }.width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点自定义示例",
      children: "节点自定义示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIContext, DrawContext, FrameNode, NodeController, LayoutConstraint, Size, Position } from '@kit.ArkUI';\nimport { drawing } from '@kit.ArkGraphics2D';\n\nfunction GetChildLayoutConstraint(constraint: LayoutConstraint, child: FrameNode): LayoutConstraint {\n  const size = child.getUserConfigSize();\n  const width = Math.max(\n    Math.min(constraint.maxSize.width, size.width.value),\n    constraint.minSize.width\n  );\n  const height = Math.max(\n    Math.min(constraint.maxSize.height, size.height.value),\n    constraint.minSize.height\n  );\n  const finalSize: Size = { width, height };\n  const res: LayoutConstraint = {\n    maxSize: finalSize,\n    minSize: finalSize,\n    percentReference: finalSize\n  };\n\n  return res;\n}\n\n// 自定义FrameNode实现自定义布局函数\nclass MyFrameNode extends FrameNode {\n  public width: number = 10;\n  private space: number = 1;\n\n  onMeasure(constraint: LayoutConstraint): void {\n    let sizeRes: Size = { width: 100, height: 100 };\n    for (let i = 0; i < this.getChildrenCount(); i++) {\n      let child = this.getChild(i);\n      if (child) {\n        let childConstraint = GetChildLayoutConstraint(constraint, child);\n        child.measure(childConstraint);\n        let size = child.getMeasuredSize();\n        sizeRes.height += size.height + this.space;\n        sizeRes.width = Math.max(sizeRes.width, size.width);\n      }\n    }\n    this.setMeasuredSize(sizeRes);\n  }\n\n  onLayout(position: Position): void {\n    let y = 0;\n    for (let i = 0; i < this.getChildrenCount(); i++) {\n      let child = this.getChild(i);\n      if (child) {\n        child.layout({\n          x: 20,\n          y: y\n        });\n        y += child.getMeasuredSize().height + this.space;\n      }\n    }\n    this.setLayoutPosition(position);\n  }\n\n  onDraw(context: DrawContext) {\n    const canvas = context.canvas;\n    const pen = new drawing.Pen();\n    pen.setStrokeWidth(5);\n    pen.setColor({\n      alpha: 255,\n      red: 255,\n      green: 0,\n      blue: 0\n    });\n    canvas.attachPen(pen);\n    canvas.drawRect({\n      left: 0,\n      right: this.width,\n      top: 0,\n      bottom: this.width\n    });\n    canvas.detachPen();\n  }\n\n  addWidth() {\n    this.width += 10;\n  }\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public rootNode: MyFrameNode | null = null;\n\n  makeNode(context: UIContext): FrameNode | null {\n    this.rootNode = new MyFrameNode(context);\n    this.rootNode?.commonAttribute?.size({ width: 100, height: 100 }).backgroundColor(Color.Green);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private nodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      Column() {\n        NodeContainer(this.nodeController)\n          .width('100%')\n          .height(100)\n          .backgroundColor('#FFF0F0F0')\n        Button('Invalidate')\n          .onClick(() => {\n            this.nodeController?.rootNode?.addWidth();\n            this.nodeController?.rootNode?.invalidate();\n          })\n        Button('UpdateLayout')\n          .onClick(() => {\n            this.nodeController?.rootNode?.setNeedsLayout();\n          })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nodeadapter使用示例",
      children: "NodeAdapter使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, NodeAdapter, typeNode } from '@kit.ArkUI';\n\n// 自定义NodeAdapter管理数据\nclass MyNodeAdapter extends NodeAdapter {\n  uiContext: UIContext\n  cachePool: Array<FrameNode> = new Array();\n  changed: boolean = false\n  reloadTimes: number = 0;\n  data: Array<string> = new Array();\n  hostNode?: FrameNode\n\n  constructor(uiContext: UIContext, count: number) {\n    super();\n    this.uiContext = uiContext;\n    this.totalNodeCount = count;\n    this.loadData();\n  }\n\n  reloadData(count: number): void {\n    this.reloadTimes++;\n    NodeAdapter.attachNodeAdapter(this, this.hostNode);\n    this.totalNodeCount = count;\n    this.loadData();\n    this.reloadAllItems();\n  }\n\n  refreshData(): void {\n    let items = this.getAllAvailableItems()\n    console.info(`UINodeAdapter get All items:${items.length}`);\n    this.reloadAllItems();\n  }\n\n  detachData(): void {\n    NodeAdapter.detachNodeAdapter(this.hostNode);\n    this.reloadTimes = 0;\n  }\n\n  loadData(): void {\n    for (let i = 0; i < this.totalNodeCount; i++) {\n      this.data[i] = \"Adapter ListItem \" + i + \" r:\" + this.reloadTimes;\n    }\n  }\n\n  changeData(from: number, count: number): void {\n    this.changed = !this.changed;\n    for (let i = 0; i < count; i++) {\n      let index = i + from;\n      this.data[index] = \"Adapter ListItem \" + (this.changed ? \"changed:\" : \"\") + index + \" r:\" + this.reloadTimes;\n    }\n    this.reloadItem(from, count);\n  }\n\n  insertData(from: number, count: number): void {\n    for (let i = 0; i < count; i++) {\n      let index = i + from;\n      this.data.splice(index, 0, \"Adapter ListItem \" + from + \"-\" + i);\n    }\n    this.insertItem(from, count);\n    this.totalNodeCount += count;\n    console.info(`UINodeAdapter after insert count:${this.totalNodeCount}`);\n  }\n\n  removeData(from: number, count: number): void {\n    let arr = this.data.splice(from, count);\n    this.removeItem(from, count);\n    this.totalNodeCount -= arr.length;\n    console.info(`UINodeAdapter after remove count:${this.totalNodeCount}`);\n  }\n\n  moveData(from: number, to: number): void {\n    let tmp = this.data.splice(from, 1);\n    this.data.splice(to, 0, tmp[0]);\n    this.moveItem(from, to);\n  }\n\n  onAttachToNode(target: FrameNode): void {\n    console.info(`UINodeAdapter onAttachToNode id:${target.getUniqueId()}`);\n    this.hostNode = target;\n  }\n\n  onDetachFromNode(): void {\n    console.info(\"UINodeAdapter onDetachFromNode\");\n  }\n\n  onGetChildId(index: number): number {\n    console.info(`UINodeAdapter onGetChildId:${index}`);\n    return index;\n  }\n\n  onCreateChild(index: number): FrameNode {\n    console.info(`UINodeAdapter onCreateChild:${index}`);\n    if (this.cachePool.length > 0) {\n      let cacheNode = this.cachePool.pop();\n      if (cacheNode !== undefined) {\n        console.info(`UINodeAdapter onCreateChild reused id:${cacheNode.getUniqueId()}`);\n        let text = cacheNode?.getFirstChild();\n        let textNode = text as typeNode.Text;\n        textNode?.initialize(this.data[index]).fontSize(20);\n        return cacheNode;\n      }\n    }\n    console.info(\"UINodeAdapter onCreateChild createNew\");\n    let itemNode = typeNode.createNode(this.uiContext, \"ListItem\");\n    let textNode = typeNode.createNode(this.uiContext, \"Text\");\n    textNode.initialize(this.data[index]).fontSize(20);\n    itemNode.appendChild(textNode);\n    return itemNode;\n  }\n\n  onDisposeChild(id: number, node: FrameNode): void {\n    console.info(`UINodeAdapter onDisposeChild:${id}`);\n    if (this.cachePool.length < 10) {\n      if (!this.cachePool.includes(node)) {\n        console.info(`UINodeAdapter caching node id:${node.getUniqueId()}`);\n        this.cachePool.push(node);\n      }\n    } else {\n      node.dispose();\n    }\n  }\n\n  onUpdateChild(id: number, node: FrameNode): void {\n    let index = id;\n    let text = node.getFirstChild();\n    let textNode = text as typeNode.Text;\n    textNode?.initialize(this.data[index]).fontSize(20);\n  }\n}\n\n// 继承NodeController实现自定义NodeAdapter控制器\nclass MyNodeAdapterController extends NodeController {\n  rootNode: FrameNode | null = null;\n  nodeAdapter: MyNodeAdapter | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    let listNode = typeNode.createNode(uiContext, \"List\");\n    listNode.initialize({ space: 3 }).borderWidth(2).borderColor(Color.Black);\n    this.rootNode.appendChild(listNode);\n    this.nodeAdapter = new MyNodeAdapter(uiContext, 100);\n    NodeAdapter.attachNodeAdapter(this.nodeAdapter, listNode);\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct ListNodeTest {\n  adapterController: MyNodeAdapterController = new MyNodeAdapterController();\n\n  build() {\n    Column() {\n      Text(\"ListNode Adapter\");\n      NodeContainer(this.adapterController)\n        .width(300).height(300)\n        .borderWidth(1).borderColor(Color.Black);\n      Row() {\n        Button(\"Reload\")\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.reloadData(50);\n          })\n        Button(\"Change\")\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.changeData(5, 10)\n          })\n        Button(\"Insert\")\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.insertData(10, 10);\n          })\n      }\n\n      Row() {\n        Button(\"Remove\")\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.removeData(10, 10);\n          })\n        Button(\"Move\")\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.moveData(2, 5);\n          })\n        Button(\"Refresh\")\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.refreshData();\n          })\n        Button(\"Detach\")\n          .onClick(() => {\n            this.adapterController.nodeAdapter?.detachData();\n          })\n      }\n    }.borderWidth(1)\n    .width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点复用回收使用示例",
      children: "节点复用回收使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';\n\nclass Params {\n  text: string = \"this is a text\"\n}\n\n@Builder\nfunction buttonBuilder(params: Params) {\n  Column() {\n    Button(params.text)\n      .fontSize(20)\n      .borderRadius(8)\n      .borderWidth(2)\n      .backgroundColor(Color.Grey)\n  }\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private buttonNode: BuilderNode<[Params]> | null = null;\n  private rootNode: FrameNode | null = null;\n  private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);\n\n  makeNode(uiContext: UIContext): FrameNode {\n    if (this.rootNode == null) {\n      this.rootNode = new FrameNode(uiContext);\n      this.buttonNode = new BuilderNode(uiContext);\n      this.buttonNode.build(this.wrapBuilder, { text: \"This is a Button\" });\n      this.rootNode.appendChild(this.buttonNode.getFrameNode());\n    }\n    return this.rootNode;\n  }\n\n  onAttach(): void {\n    console.info(\"myButton on attach\");\n  }\n\n  onDetach(): void {\n    console.info(\"myButton on detach\");\n  }\n\n  // onBind时，子节点已经重新上树，此时调用reuse，保证子组件的能重新被复用\n  onBind(containerId: number): void {\n    // 该方法触发子组件复用，全局复用场景下，复用FrameNode后端资源\n    this.rootNode?.reuse();\n    console.info(\"myButton reuse\");\n  }\n\n  // onUnbind时，子节点已经完全下树，此时调用recycle，保证子组件的能完全被回收\n  onUnbind(containerId: number): void {\n    // 该方法触发子组件的回收，全局复用场景下，回收FrameNode后端资源用于重新利用\n    this.rootNode?.recycle();\n    console.info(\"myButton recycle\");\n  }\n\n  getButtonNode(): BuilderNode<[Params]> | null {\n    return this.buttonNode;\n  }\n\n  getFrameNode(): FrameNode | null {\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State buttonShow: boolean = true\n  @State buttonIndex: number = 0\n  public buttonController: MyNodeController = new MyNodeController();\n  private buttonNull: null = null;\n  private buttonControllerArray: Array<MyNodeController | null> = [this.buttonController, this.buttonNull]\n\n  build() {\n    Column() {\n      Row() {\n        Button(\"Bind/Unbind\")\n          .onClick(() => {\n            this.buttonIndex++;\n          }).margin(5)\n        Button(\"onAttach/onDetach\")\n          .onClick(() => {\n            this.buttonShow = !this.buttonShow\n          }).margin(5)\n      }\n\n      if (this.buttonShow) {\n        NodeContainer(this.buttonControllerArray[this.buttonIndex % this.buttonControllerArray.length])\n      }\n    }\n    .padding({ left: 35, right: 35 })\n    .width(\"100%\")\n    .height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件设置和删除多态样式状态示例",
      children: "组件设置和删除多态样式状态示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode, UIState } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private isEnable: boolean = true;\n  private theStatesToBeSupported =\n    UIState.NORMAL | UIState.PRESSED | UIState.FOCUSED | UIState.DISABLED | UIState.SELECTED;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    // 创建并组织节点关系\n    let node = new FrameNode(uiContext);\n    node.commonAttribute.width('100%')\n      .height('100%')\n      .borderColor(Color.Gray)\n      .borderWidth(1)\n      .margin({ left: 10 })\n\n    let column = typeNode.createNode(uiContext, 'Column');\n    column.initialize({ space: 20 })\n      .width('100%')\n      .height('100%')\n    node.appendChild(column);\n\n    let styleText = typeNode.createNode(uiContext, 'Text');\n    styleText.initialize(\"StyleTarget\")\n      .width('50%')\n      .height('5%')\n      .margin({ top: 5, bottom: 5 })\n      .fontSize(14)\n      .fontColor(Color.White)\n      .textAlign(TextAlign.Center)\n      .backgroundColor(Color.Green)\n      .borderWidth(2)\n      .borderColor(Color.Black)\n      .focusable(true)\n\n    // 为Text组件添加多态样式处理能力\n    styleText.addSupportedUIStates(this.theStatesToBeSupported, (node: FrameNode, currentState: number) => {\n      if (currentState == UIState.NORMAL) { // 判断是否normal要使用等于\n        // normal状态，刷normal的UI效果\n        console.info('Callback UIState.NORMAL')\n        node.commonAttribute.backgroundColor(Color.Green)\n        node.commonAttribute.borderWidth(2)\n        node.commonAttribute.borderColor(Color.Black)\n      }\n      if ((currentState & UIState.PRESSED) == UIState.PRESSED) {\n        // press状态，刷press的UI效果\n        console.info('Callback UIState.PRESSED')\n        node.commonAttribute.backgroundColor(Color.Brown)\n      }\n      if ((currentState & UIState.FOCUSED) == UIState.FOCUSED) {\n        // focused状态，刷focused的UI效果\n        console.info('Callback UIState.FOCUSED')\n        node.commonAttribute.borderWidth(5)\n        node.commonAttribute.borderColor(Color.Yellow)\n      }\n      if ((currentState & UIState.DISABLED) == UIState.DISABLED) {\n        // disabled状态，刷disabled的UI效果\n        console.info('Callback UIState.DISABLED')\n        node.commonAttribute.backgroundColor(Color.Gray)\n        node.commonAttribute.borderWidth(0)\n      }\n      if ((currentState & UIState.SELECTED) == UIState.SELECTED) {\n        // selected状态，刷selected的UI效果\n        console.info('Callback UIState.SELECTED')\n        node.commonAttribute.backgroundColor(Color.Pink)\n      }\n    }, false)\n\n    column.appendChild(styleText);\n\n    // 为Text组件删除多态样式处理能力\n    let buttonRemove = typeNode.createNode(uiContext, 'Button');\n    buttonRemove.initialize(\"RemoveUIStatus\")\n      .width('50%')\n      .height('5%')\n      .fontSize(14)\n      .margin({ top: 5, bottom: 5 })\n      .onClick(() => {\n        styleText.removeSupportedUIStates(this.theStatesToBeSupported);\n      });\n    column.appendChild(buttonRemove);\n\n    // 改变多态样式目标节点的使能状态\n    let buttonEnable = typeNode.createNode(uiContext, 'Button');\n    buttonEnable.initialize(\"DisableText\")\n      .width('50%')\n      .height('5%')\n      .fontSize(14)\n      .margin({ top: 5, bottom: 5 })\n      .onClick(() => {\n        this.isEnable = !this.isEnable;\n        buttonEnable.initialize(this.isEnable ? 'DisableText' : 'EnableText');\n        styleText.attribute.enabled(this.isEnable)\n      });\n    column.appendChild(buttonEnable);\n    return node;\n  }\n}\n\n@Entry\n@Component\nstruct FrameNodeTypeTest {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Row() {\n      NodeContainer(this.myNodeController);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动画创建与取消示例",
      children: "动画创建与取消示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例说明在FrameNode上", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createanimation20",
        children: "createAnimation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cancelanimations20",
        children: "cancelAnimations"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getnodepropertyvalue20",
        children: "getNodePropertyValue"
      }), "接口的用法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, UIContext } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private isRunning: boolean = false; // 表示节点上动画是否在运行\n\n  private startInitAnimation() {\n    if (this.rootNode) {\n      let result: boolean = this.rootNode.createAnimation(AnimationPropertyType.ROTATION, [0, 0, 0], [0, 0, 360],\n        { duration: 3000, curve: Curve.Linear, iterations: -1 }); // 创建动画，第一次创建时显式指定初值，旋转角从[0,0,0]变成[0,0,360]，无限循环\n      if (result) {\n        this.isRunning = true;\n      } else {\n        console.warn('create rotation animation failed');\n      }\n    }\n  }\n\n  cancelAnimation(cnt: number) {\n    if (this.rootNode && this.isRunning) {\n      let result: boolean = this.rootNode.cancelAnimations([AnimationPropertyType.ROTATION]);\n      if (result) {\n        this.isRunning = false;\n      } else {\n        console.warn('cancel rotation animation failed');\n        if (cnt < 2) { // cnt为尝试取消的次数\n          // 如果取消失败，500ms后再次尝试取消\n          setTimeout(() => {\n            this.cancelAnimation(cnt + 1);\n          }, 500);\n        }\n      }\n    }\n  }\n\n  continueAnimation() {\n    if (this.rootNode && !this.isRunning) {\n      let currentProperty: number[] =\n        this.rootNode.getNodePropertyValue(AnimationPropertyType.ROTATION); // 获取当前节点上的旋转属性终值\n      if (currentProperty.length == 3) { // 获取属性正常，旋转属性对应的数组长度为3，分别是x、y、z方向的旋转角\n        let endValue: number[];\n        let startValue: number[] | undefined = undefined;\n        if (currentProperty[2] >= 360) {\n          startValue = [currentProperty[0], currentProperty[1],\n            currentProperty[2] - 360]; // 当旋转属性过大时使z方向少转360度，避免z方向角度由于多次启停动画一直增加\n          endValue = [currentProperty[0], currentProperty[1], currentProperty[2]];\n        } else {\n          endValue = [currentProperty[0], currentProperty[1], currentProperty[2] + 360]; // 此时旋转属性小于360度，可以从上次旋转角再多旋转一圈\n        }\n        let result: boolean = this.rootNode.createAnimation(AnimationPropertyType.ROTATION, startValue, endValue,\n          { duration: 3000, curve: Curve.Linear, iterations: -1 });\n        console.info(`create rotation animation from ${startValue ? String(startValue[2]) :\n          \"undefined\"} to ${endValue[2]}`);\n        if (result) {\n          this.isRunning = true;\n        } else {\n          console.warn('create rotation animation failed when continue');\n        }\n      }\n    }\n  }\n  \n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.rootNode) {\n      return this.rootNode;\n    }\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100)\n      .height(100)\n      .backgroundColor(Color.Blue); // 设置节点属性\n    this.startInitAnimation();\n    this.rootNode.commonEvent.setOnClick(() => {\n      if (this.isRunning) {\n        this.cancelAnimation(1);\n      } else {\n        this.continueAnimation();\n      }\n    });\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct CreateAnimationExample {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column() {\n      NodeContainer(this.myNodeController)\n    }.width('100%').padding({ top: 50 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(194272)/* ["default"] */.A) + "",
        width: "413",
        height: "332"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滚动事件示例",
      children: "滚动事件示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, typeNode } from '@kit.ArkUI';\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(100)\n    return this.rootNode;\n  }\n\n  addCommonEvent(frameNode: FrameNode) {\n    let gridEvent: UIGridEvent | undefined = typeNode.getEvent(frameNode, \"Grid\");\n    gridEvent?.setOnWillScroll((scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => {\n      console.info(`onWillScroll scrollOffset = ${scrollOffset}, scrollState = ${scrollState}, scrollSource = ${scrollSource}`)\n    })\n    gridEvent?.setOnDidScroll((scrollOffset: number, scrollState: ScrollState) => {\n      console.info(`onDidScroll scrollOffset = ${scrollOffset}, scrollState = ${scrollState}`)\n    })\n    gridEvent?.setOnReachStart(() => {\n      console.info(`onReachStart`)\n    })\n    gridEvent?.setOnReachEnd(() => {\n      console.info(`onReachEnd`)\n    })\n    gridEvent?.setOnScrollStart(() => {\n      console.info(`onScrollStart`)\n    })\n    gridEvent?.setOnScrollStop(() => {\n      console.info(`onScrollStop`)\n    })\n    gridEvent?.setOnScrollFrameBegin((offset: number, state: ScrollState) => {\n      console.info(`onScrollFrameBegin offset = ${offset}, state = ${state}`)\n      return undefined;\n    })\n    gridEvent?.setOnScrollIndex((first: number, last: number) => {\n      console.info(`onScrollIndex start = ${first}, end = ${last}`)\n    })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State index: number = 0;\n  private myNodeController: MyNodeController = new MyNodeController();\n  @State numbers: string[] = []\n\n  aboutToAppear() {\n    for (let i = 0; i < 5; i++) {\n      for (let j = 0; j < 5; j++) {\n        this.numbers.push(j.toString());\n      }\n    }\n  }\n\n  build() {\n    Column() {\n      Button(\"add CommonEvent to Grid\")\n        .onClick(() => {\n          this.myNodeController!.addCommonEvent(this.myNodeController!.rootNode!.getParent()!.getPreviousSibling()!)\n        })\n      Grid() {\n        ForEach(this.numbers, (day: string, index: number) => {\n          GridItem() {\n            Text(day)\n              .fontSize(16)\n              .backgroundColor(0xF9CF93)\n              .width('100%')\n              .height(80)\n              .textAlign(TextAlign.Center)\n          }\n        }, (day: string, index: number) => index.toString() + day)\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .enableScrollInteraction(true)\n      .width('90%')\n      .backgroundColor(0xFAEEE0)\n      .height(300)\n\n      NodeContainer(this.myNodeController)\n    }.width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检验framenode是否有效示例",
      children: "检验FrameNode是否有效示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了FrameNode释放节点前后分别使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#isdisposed20",
        children: "isDisposed"
      }), "接口验证节点的状态，释放节点前节点调用isDisposed接口返回true，释放节点后节点调用isDisposed接口返回false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, BuilderNode } from '@kit.ArkUI';\n\n@Component\nstruct TestComponent {\n  build() {\n    Column() {\n      Text('This is a BuilderNode.')\n        .fontSize(25)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width('100%')\n    .height(30)\n    .backgroundColor(Color.Gray)\n  }\n\n  aboutToAppear() {\n    console.info('aboutToAppear');\n  }\n\n  aboutToDisappear() {\n    console.info('aboutToDisappear');\n  }\n}\n\n@Builder\nfunction buildComponent() {\n  TestComponent()\n}\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private builderNode: BuilderNode<[]> | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.builderNode = new BuilderNode(uiContext, { selfIdealSize: { width: 200, height: 100 } });\n    this.builderNode.build(new WrappedBuilder(buildComponent));\n\n    const rootRenderNode = this.rootNode.getRenderNode();\n    if (rootRenderNode !== null) {\n      rootRenderNode.size = { width: 300, height: 300 };\n      rootRenderNode.backgroundColor = 0xffd5d5d5;\n      rootRenderNode.appendChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n\n    return this.rootNode;\n  }\n\n  disposeFrameNode() {\n    if (this.rootNode !== null && this.builderNode !== null) {\n      this.rootNode.removeChild(this.builderNode.getFrameNode());\n      this.builderNode.dispose();\n\n      this.rootNode.dispose();\n    }\n  }\n\n  isDisposed(): string {\n    if (this.rootNode !== null) {\n      if (this.rootNode.isDisposed()) {\n        return 'frameNode isDisposed is true';\n      } else {\n        return 'frameNode isDisposed is false';\n      }\n    }\n    return 'frameNode is null';\n  }\n\n  removeBuilderNode() {\n    const rootRenderNode = this.rootNode!.getRenderNode();\n    if (rootRenderNode !== null && this.builderNode !== null && this.builderNode.getFrameNode() !== null) {\n      rootRenderNode.removeChild(this.builderNode!.getFrameNode()!.getRenderNode());\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State text: string = ''\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 4 }) {\n      NodeContainer(this.myNodeController)\n      Button('FrameNode dispose')\n        .onClick(() => {\n          this.myNodeController.disposeFrameNode();\n          this.text = '';\n        })\n        .width(200)\n        .height(50)\n      Button('FrameNode isDisposed')\n        .onClick(() => {\n          this.text = this.myNodeController.isDisposed();\n        })\n        .width(200)\n        .height(50)\n      Text(this.text)\n        .fontSize(25)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(504694)/* ["default"] */.A) + "",
        width: "430",
        height: "579"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检验nodeadapter是否有效示例",
      children: "检验NodeAdapter是否有效示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nodeadapter12",
        children: "NodeAdapter"
      }), "释放节点前后分别使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#isdisposed20",
        children: "isDisposed"
      }), "接口验证节点的状态，释放节点前节点调用isDisposed接口返回true，释放节点后节点调用isDisposed接口返回false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FrameNode, NodeController, NodeAdapter, typeNode } from '@kit.ArkUI';\n\n// 自定义NodeAdapter管理数据\nclass MyNodeAdapter extends NodeAdapter {\n  uiContext: UIContext\n  cachePool: Array<FrameNode> = new Array();\n  changed: boolean = false\n  reloadTimes: number = 0;\n  data: Array<string> = new Array();\n  hostNode?: FrameNode\n\n  constructor(uiContext: UIContext, count: number) {\n    super();\n    this.uiContext = uiContext;\n    this.totalNodeCount = count;\n    this.loadData();\n  }\n\n  loadData(): void {\n    for (let i = 0; i < this.totalNodeCount; i++) {\n      this.data[i] = \"Adapter ListItem \" + i + \" r:\" + this.reloadTimes;\n    }\n  }\n\n  onCreateChild(index: number): FrameNode {\n    console.info(`UINodeAdapter onCreateChild:${index}`);\n    if (this.cachePool.length > 0) {\n      let cacheNode = this.cachePool.pop();\n      if (cacheNode !== undefined) {\n        console.info(`UINodeAdapter onCreateChild reused id:${cacheNode.getUniqueId()}`);\n        let text = cacheNode?.getFirstChild();\n        let textNode = text as typeNode.Text;\n        textNode?.initialize(this.data[index]).fontSize(20);\n        return cacheNode;\n      }\n    }\n    console.info(\"UINodeAdapter onCreateChild createNew\");\n    let itemNode = typeNode.createNode(this.uiContext, \"ListItem\");\n    let textNode = typeNode.createNode(this.uiContext, \"Text\");\n    textNode.initialize(this.data[index]).fontSize(20);\n    itemNode.appendChild(textNode);\n    return itemNode;\n  }\n}\n\n// 继承NodeController实现自定义NodeAdapter控制器\nclass MyNodeAdapterController extends NodeController {\n  rootNode: FrameNode | null = null;\n  nodeAdapter: MyNodeAdapter | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    let listNode = typeNode.createNode(uiContext, \"List\");\n    listNode.initialize({ space: 3 }).borderColor(Color.Black);\n    this.rootNode.appendChild(listNode);\n    this.nodeAdapter = new MyNodeAdapter(uiContext, 20);\n    NodeAdapter.attachNodeAdapter(this.nodeAdapter, listNode);\n    return this.rootNode;\n  }\n\n  dispose() {\n    if (this.nodeAdapter !== null) {\n      this.nodeAdapter.dispose();\n    }\n  }\n\n  isDisposed(): string {\n    if (this.nodeAdapter !== null) {\n      if (this.nodeAdapter.isDisposed()) {\n        return 'nodeAdapter isDisposed is true';\n      } else {\n        return 'nodeAdapter isDisposed is false';\n      }\n    }\n    return 'nodeAdapter is null';\n  }\n}\n\n@Entry\n@Component\nstruct ListNodeTest {\n  @State text: string = ''\n  adapterController: MyNodeAdapterController = new MyNodeAdapterController();\n\n  build() {\n    Column() {\n      Text(\"ListNode Adapter\");\n      NodeContainer(this.adapterController)\n        .width(300).height(300)\n        .borderWidth(1).borderColor(Color.Black);\n      Button(\"NodeAdapter dispose\")\n        .onClick(() => {\n          this.adapterController.dispose();\n          this.text = '';\n        })\n        .width(200)\n        .height(50)\n        .margin({ top: 10, bottom: 10 })\n      Button(\"NodeAdapter isDisposed\")\n        .onClick(() => {\n          this.text = this.adapterController.isDisposed();\n        })\n        .width(200)\n        .height(50)\n      Text(this.text)\n        .fontSize(25)\n    }\n    .width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(403557)/* ["default"] */.A) + "",
        width: "440",
        height: "572"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取根节点示例",
      children: "获取根节点示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了如何通过FrameNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getparent12",
        children: "getParent"
      }), "接口获取当前页面根节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ChildView {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize($r('app.float.page_text_font_size'))\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 通过id查询获得Text节点的FrameNode对象。不建议设置多个相同的id的节点\n          let node = this.getUIContext().getFrameNodeById(\"HelloWorld\");\n          console.info(`Find HelloWorld Tag:${node!.getNodeType()} id:${node!.getUniqueId()}`);\n          // 通过while循环遍历查询页面的根节点。如果当前节点为自定义组件，则会继续遍历其父节点\n          while (node && node.getParent() && node.getParent()!.getUniqueId() > 0) {\n            node = node.getParent();\n            console.info(`Find FrameNode Tag:${node!.getNodeType()} id:${node!.getUniqueId()}`);\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      ChildView({ message: this.message })\n        .height('100%')\n        .width('100%')\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接纳为附属节点示例",
      children: "接纳为附属节点示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，该示例演示了如何通过FrameNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#adoptchild22",
        children: "adoptChild"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#removeadoptedchild22",
        children: "removeAdoptedChild"
      }), "接口进行接纳为附属节点的相关操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { NodeController, FrameNode, UIContext } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \"\n\n// 继承NodeController实现自定义UI控制器\nclass MyNodeController extends NodeController {\n  public frameNode: FrameNode | null = null;\n  public rootNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new FrameNode(uiContext);\n    this.frameNode = new FrameNode(uiContext);\n    this.addCommonEvent(this.frameNode);\n    return this.rootNode;\n  }\n\n  addCommonEvent(frameNode: FrameNode) {\n    frameNode.commonEvent.setOnClick((event: ClickEvent) => {\n      console.info(`${TEST_TAG} Click FrameNode: ${JSON.stringify(event)}`);\n    })\n  }\n\n  adoptChild() {\n    try {\n      this.rootNode?.adoptChild(this.frameNode);\n      console.info(`${TEST_TAG} adoptChild success`);\n    } catch (e) {\n      console.info(`${TEST_TAG} adoptChild fail: ${JSON.stringify(e)}`);\n    }\n  }\n\n  removeAdoptedChild() {\n    try {\n      this.rootNode?.removeAdoptedChild(this.frameNode);\n      console.info(`${TEST_TAG} removeAdoptedChild success`);\n    } catch (e) {\n      console.info(`${TEST_TAG} removeAdoptedChild fail: ${JSON.stringify(e)}`);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n\n  build() {\n    Column({ space: 8 }) {\n      Column() {\n        Text(`This is a NodeContainer.`)\n          .textAlign(TextAlign.Center)\n          .borderRadius(10)\n          .backgroundColor(0xFFFFFF)\n          .width(`100%`)\n          .fontSize(16)\n        NodeContainer(this.myNodeController)\n          .borderWidth(1)\n          .width(300)\n          .height(100)\n      }\n\n      Button(`adoptChild`)\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.adoptChild();\n        })\n      Button(`removeAdoptedChild`)\n        .width(300)\n        .onClick(() => {\n          this.myNodeController.removeAdoptedChild();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "局部与窗口坐标转化示例",
      children: "局部与窗口坐标转化示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了如何通过FrameNode的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#convertpositiontowindow23",
        children: "convertPositionToWindow"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#convertpositionfromwindow23",
        children: "convertPositionFromWindow"
      }), "接口进行局部与窗口坐标转化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增convertPositionToWindow和convertPositionFromWindow接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Position } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ConvertPositionWithWindow {\n  private uiContext: UIContext = this.getUIContext();\n  @State message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .id('testNodeA')\n        .fontSize($r('app.float.page_text_font_size')) // 请开发者替换为实际的资源文件\n        .fontWeight(FontWeight.Bold)\n      Button('运行convertPositionToWindow和convertPositionFromWindow测试')\n        .onClick(() => {\n          this.runBasicTest();\n        })\n        .margin(20)\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  private runBasicTest() {\n    // 等待UI渲染完成\n    if (!this.uiContext) {\n      return;\n    }\n    const nodeA = this.uiContext.getAttachedFrameNodeById('testNodeA');\n\n    if (!nodeA) {\n      console.info('无法获取测试节点');\n      return;\n    }\n\n    const testPoint: Position = { x: 10, y: 10 };\n    try {\n      const result: Position = nodeA.convertPositionToWindow(testPoint); // 显式声明可能返回undefined\n      console.info(`相对于节点的(10, 10)坐标转换到相对于窗口的坐标为(${result.x}, ${result.y})`);\n    } catch (e) {\n      const exception = e as BusinessError<void>;\n      console.error(`convertPositionToWindow throw error! code: ${exception.code}, message: ${exception.message}`);\n    }\n\n    try {\n      const result: Position = nodeA.convertPositionFromWindow(testPoint); // 显式声明可能返回undefined\n      console.info(`相对于窗口的(10, 10)坐标转换到相对于该节点的坐标为(${result.x}, ${result.y})`);\n    } catch (e) {\n      const exception = e as BusinessError<void>;\n      console.error(`convertPositionFromWindow throw error! code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n}\n"
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
446795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
721480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
759579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
855185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
956891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
988174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAF4ApgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP38orz/APaw/wCTWfiV/wBirqn/AKSS1wvw3/YU+EOrfDvQbq58A6DNcXWnW8ssjRtl3aJSSfm7kk0Ae9UV4/8A8MB/Bv8A6J74f/79t/8AFUf8MB/Bv/onvh//AL9t/wDFUAewUV4//wAMB/Bv/onvh/8A79t/8VR/wwH8G/8Aonvh/wD79t/8VQB7BRXj/wDwwH8G/wDonvh//v23/wAVR/wwH8G/+ie+H/8Av23/AMVQB7BRXj//AAwH8G/+ie+H/wDv23/xVH/DAfwb/wCie+H/APv23/xVAHsFFeP/APDAfwb/AOie+H/+/bf/ABVH/DAfwb/6J74f/wC/bf8AxVAHsFFeP/8ADAfwb/6J74f/AO/bf/FUf8MB/Bv/AKJ74f8A+/bf/FUAewUV4/8A8MB/Bv8A6J74f/79t/8AFUf8MB/Bv/onvh//AL9t/wDFUAewUV4//wAMB/Bv/onvh/8A79t/8VR/wwH8G/8Aonvh/wD79t/8VQB7BRXj/wDwwH8G/wDonvh//v23/wAVXLfD34I+E/gj+3VY2vhPQ7HQ7e+8B30s8dspAlcahZgE5J7cUAfRNFFFAHn/AO1h/wAms/Er/sVdU/8ASSWug+E3/JK/DP8A2CrX/wBEpXP/ALWH/JrPxK/7FXVP/SSWug+E3/JK/DP/AGCrX/0SlAHQUUUUAFFFFABXkB/bA0kft2r8Bv7J1D+3D4GPjr+0tyfZPs4vxZeRjO/zN53Zxt29816/X5q/tTH4vL/wXysf+FML8PG8Uf8ACiB9p/4TFrxbH7J/wkD7tn2UF/N8zysZ+Xbv74r6Dh3K6ePq1aVRqPLTlJNuyTVrXZlWqOKTXc+zf2u/2vtJ/ZB07wDc6tpeoaqvj/xrpfgm1FoyKba4v5GSOZ9xH7tSpJAyfQGvWw42g+tflL/wUYb9qA6z+zr/AMLkX4Fr4V/4Xh4S8o+EH1U6h9p+1tsz9qAj8vb5mcfNnbjvWh+2V+07rnx1/wCCj/xB+Fur3n7Rdj8OfhDpWkg2Hwh068a81fUb+3+1ede3dqPNjhSMqiRAqHZXbJ2kV9Jh+B3icPTnRqRdoTqVJRbklGM4QSS015pxVtN7tmLxVm011SX3XPuT/goP+13/AMMI/sieLPit/wAI/wD8JT/wi/2P/iWfbvsX2nz7yC2/1vlybdvnbvuHO3HGciJP2xt//BQpfgP/AMI7974ff8J3/bn27/qIiy+y/Z/L99/meZ/s7P4q/Mz9ob4k/E7X/wDgjf8AtS+FPHVn8VLrwz4Q1vQh4K1/4haNNp2uatpk+p2T+VOZVUzyQSKyGU8sHUnsB9X+NvFcXgT/AILuaprk8ck0Oj/s4TXskcYy7rHrxcge5C11V+D6GGwNp2nV5q65oydmo08NOn1smvayut7tqW2kLEOUtNtPzd/yPvDevrSivzQ/Zf8A2Xfih/wUC/ZK0/8AaA1j9oL4reEvib46tZtd8PWPh/XDa+GPDMe9zaWjWG0xXMYVUEpmBZ+cnI3H6z/4Je/tU6n+2v8AsEfDX4m61aw2uteJdMb+0EiTZG1zBNJbyui/wo8kTOoycBgMnrXzWc8LywFKpVjVjU9lUVKokmuWbUmkrpcyfJNJr+XazTfRTrczSta6uvT+me+UUUV8sbBRRRQAV4/qP/J/Wj/9k/v/AP042dewV4/qP/J/Wj/9k/v/AP042dAHsFFFFAHn/wC1h/yaz8Sv+xV1T/0klroPhN/ySvwz/wBgq1/9EpXP/tYf8ms/Er/sVdU/9JJa6D4Tf8kr8M/9gq1/9EpQB0FFFFABRRRQAV4ef2NM/wDBRpfj/wD8JH0+Hh8Bf2F9g9dSF99r+0eZ7bPL8v8A2t/8Ne4UZrow+Kq0Ob2TtzJxfmnuiZRT3PEP23v2OP8AhsfSvhtbf8JF/wAI7/wr3x9o/jjd9g+1/b/7PkZ/suPMTy/M3Y8z5tuPuNXEftE/8E/PFeuftJTfGL4M/E7/AIVb491fS4dG8RR3mhprWkeJLaEkwNNbtJGyTxbiFlR87flxgnP1NRXo4DiDHYNRjRkuVKS5XGMotSabUoyTUk2k7NOzSas0mTKjGW58i/Fn/gmv4y/aB/YH8efCHx58atU8T+KPiBqNvqV14nutDiW20zyrq1nW2tLCORBHbgW20KZmbdI7ljnbXpE37GEdz/wUCb45Ta+skLfDs+AX0BtPyHB1D7abkz+Z0/5Z+V5f+1v/AIa9yop1eIcfODpOaUW5uyjGKTqKClZJJJNQirKyVtEtbiowWvp+B8I23/BJj4o/DHwbq/wz+F/7RmqeB/gfrM1wY/D7eGYL/VtAtrh2ee0sNRaQGONi7hC8bvEGyCx5r6++AfwN8O/s0/Bjw34B8I2f9n+HPClhFp1hCW3sI0GNzMeWdjlmY8lmJ712FGavNeJMwzGmqeLmmr8ztGMXKVrc03FJzlb7Um3q9bt3KdGEHeP9enYM0UUV4RoFFFFABXj+o/8AJ/Wj/wDZP7//ANONnXsFeP6j/wAn9aP/ANk/v/8A042dAHsFFFFAHn/7WH/JrPxK/wCxV1T/ANJJa6D4Tf8AJK/DP/YKtf8A0Slc/wDtYf8AJrPxK/7FXVP/AEklroPhN/ySvwz/ANgq1/8ARKUAdBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFeP6j/yf1o//AGT+/wD/AE42dewV4/qP/J/Wj/8AZP7/AP8ATjZ0AewUUUUAef8A7WH/ACaz8Sv+xV1T/wBJJa6D4Tf8kr8M/wDYKtf/AESlc/8AtYf8ms/Er/sVdU/9JJa6D4Tf8kr8M/8AYKtf/RKUAdBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFeP6j/yf1o//ZP7/wD9ONnXsFeP6j/yf1o//ZP7/wD9ONnQB7BRRRQBj/ELwVa/ErwDrnhy+kuIbHxBp8+m3DwMFlSOaNo2KFgQGAY4JBGex6V5jp37IF3pOnwWtv8AF34vQ29tGsUUa6lY4RFGAB/onYACvZqKAPH/APhlDUf+iw/GD/wZWP8A8iUf8Moaj/0WH4wf+DKx/wDkSvYKKAPH/wDhlDUf+iw/GD/wZWP/AMiUf8Moaj/0WH4wf+DKx/8AkSvYKKAPH/8AhlDUf+iw/GD/AMGVj/8AIlH/AAyhqP8A0WH4wf8Agysf/kSvYKKAPH/+GUNR/wCiw/GD/wAGVj/8iUf8Moaj/wBFh+MH/gysf/kSvYKKAPH/APhlDUf+iw/GD/wZWP8A8iUf8Moaj/0WH4wf+DKx/wDkSvYKKAPH/wDhlDUf+iw/GD/wZWP/AMiUf8Moaj/0WH4wf+DKx/8AkSvYKKAPH/8AhlDUf+iw/GD/AMGVj/8AIlH/AAyhqP8A0WH4wf8Agysf/kSvYKKAPH/+GUNR/wCiw/GD/wAGVj/8iUf8Moaj/wBFh+MH/gysf/kSvYKKAPH/APhlDUf+iw/GD/wZWP8A8iVpfDL9mO3+HXxOPi258YeNvFWrDS5NIj/tu6t5o4YJJYpW2iOCM7t0S9SRgnj09OooAKKKKAP/2Q==");

},
64220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
724681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
194272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799798-d115554a54faa0ae5b33b523bdebb22a.gif");

},
341610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
523077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
217090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439491-e4e4b4f9e81b4e4419a21a742adac726.gif");

},
45997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
750855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959446-2484f7de209261f96cdbc8415b025a06.gif");

},
403557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959448-244dabcfce4d568eaf50b9376a688e68.gif");

},
504694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439493-de50ecfcf9c0f4f6f6a301a17f0251a3.gif");

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