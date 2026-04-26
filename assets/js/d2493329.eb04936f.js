"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["744954"], {
588581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_index_xengine_kit_xengine_xengine_kit_xengine_md_d24_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-index-xengine-kit-xengine-xengine-kit-xengine-md-d24.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_index_xengine_kit_xengine_xengine_kit_xengine_md_d24_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine","title":"XEngine","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine","slug":"/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"XEngine","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xengine"},"sidebar":"ref","previous":{"title":"AREngine_ARFrame","permalink":"/harmonyos-docs-site/ref/spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-arengine-arframe/capi-spatialrecon-arengine-arframe"},"next":{"title":"xeg_extension_defs.h","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-extension-defs-8h/xengine-kit-xeg-extension-defs-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine.md


const frontMatter = {
	title: 'XEngine',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xengine'
};
const contentTitle = 'XEngine';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "文件",
  "id": "文件",
  "level": 3
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "宏定义说明",
  "id": "宏定义说明",
  "level": 2
}, {
  "value": "XEG_adaptive_vrs",
  "id": "xeg_adaptive_vrs",
  "level": 3
}, {
  "value": "XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY",
  "id": "xeg_adaptive_vrs_error_sensitivity",
  "level": 3
}, {
  "value": "XEG_ADAPTIVE_VRS_EXTENSION_NAME",
  "id": "xeg_adaptive_vrs_extension_name",
  "level": 3
}, {
  "value": "XEG_ADAPTIVE_VRS_FLIP",
  "id": "xeg_adaptive_vrs_flip",
  "level": 3
}, {
  "value": "XEG_ADAPTIVE_VRS_INPUT_REGION",
  "id": "xeg_adaptive_vrs_input_region",
  "level": 3
}, {
  "value": "XEG_ADAPTIVE_VRS_INPUT_SIZE",
  "id": "xeg_adaptive_vrs_input_size",
  "level": 3
}, {
  "value": "XEG_ADAPTIVE_VRS_TEXEL_SIZE",
  "id": "xeg_adaptive_vrs_texel_size",
  "level": 3
}, {
  "value": "XEG_ADAPTIVE_VRS_VERSION",
  "id": "xeg_adaptive_vrs_version",
  "level": 3
}, {
  "value": "XEG_EXTENSIONS",
  "id": "xeg_extensions",
  "level": 3
}, {
  "value": "XEG_HPS_RADIX_SORT_EXTENSION_NAME",
  "id": "xeg_hps_radix_sort_extension_name",
  "level": 3
}, {
  "value": "XEG_MAX_EXTENSION_NAME_SIZE",
  "id": "xeg_max_extension_name_size",
  "level": 3
}, {
  "value": "XEG_neural_upscale",
  "id": "xeg_neural_upscale",
  "level": 3
}, {
  "value": "XEG_NEURAL_UPSCALE_EXTENSION_NAME",
  "id": "xeg_neural_upscale_extension_name",
  "level": 3
}, {
  "value": "XEG_NEURAL_UPSCALE_INPUT_HANDLE",
  "id": "xeg_neural_upscale_input_handle",
  "level": 3
}, {
  "value": "XEG_NEURAL_UPSCALE_SCISSOR",
  "id": "xeg_neural_upscale_scissor",
  "level": 3
}, {
  "value": "XEG_NEURAL_UPSCALE_SHARPNESS",
  "id": "xeg_neural_upscale_sharpness",
  "level": 3
}, {
  "value": "XEG_NEURAL_UPSCALE_VERSION",
  "id": "xeg_neural_upscale_version",
  "level": 3
}, {
  "value": "XEG_RT_REFLECTION_EXTENSION_NAME",
  "id": "xeg_rt_reflection_extension_name",
  "level": 3
}, {
  "value": "XEG_RT_SHADOW_AO_EXTENSION_NAME",
  "id": "xeg_rt_shadow_ao_extension_name",
  "level": 3
}, {
  "value": "XEG_RTGI_EXTENSION_NAME",
  "id": "xeg_rtgi_extension_name",
  "level": 3
}, {
  "value": "XEG_spatial_upscale",
  "id": "xeg_spatial_upscale",
  "level": 3
}, {
  "value": "XEG_SPATIAL_UPSCALE_EXTENSION_NAME",
  "id": "xeg_spatial_upscale_extension_name",
  "level": 3
}, {
  "value": "XEG_SPATIAL_UPSCALE_SCISSOR",
  "id": "xeg_spatial_upscale_scissor",
  "level": 3
}, {
  "value": "XEG_SPATIAL_UPSCALE_SHARPNESS",
  "id": "xeg_spatial_upscale_sharpness",
  "level": 3
}, {
  "value": "XEG_SPATIAL_UPSCALE_VERSION",
  "id": "xeg_spatial_upscale_version",
  "level": 3
}, {
  "value": "XEG_temporal_upscale",
  "id": "xeg_temporal_upscale",
  "level": 3
}, {
  "value": "XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED",
  "id": "xeg_temporal_upscale_depth_reversed",
  "level": 3
}, {
  "value": "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME",
  "id": "xeg_temporal_upscale_extension_name",
  "level": 3
}, {
  "value": "XEG_TEMPORAL_UPSCALE_INPUT_SIZE",
  "id": "xeg_temporal_upscale_input_size",
  "level": 3
}, {
  "value": "XEG_TEMPORAL_UPSCALE_JITTER_NUM",
  "id": "xeg_temporal_upscale_jitter_num",
  "level": 3
}, {
  "value": "XEG_TEMPORAL_UPSCALE_RESET_HISTORY",
  "id": "xeg_temporal_upscale_reset_history",
  "level": 3
}, {
  "value": "XEG_TEMPORAL_UPSCALE_STEADY_LEVEL",
  "id": "xeg_temporal_upscale_steady_level",
  "level": 3
}, {
  "value": "XEG_TEMPORAL_UPSCALE_VERSION",
  "id": "xeg_temporal_upscale_version",
  "level": 3
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "PFN_HMS_XEG_ADAPTIVEVRSPARAMETER",
  "id": "pfn_hms_xeg_adaptivevrsparameter",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_APPLYADAPTIVEVRS",
  "id": "pfn_hms_xeg_applyadaptivevrs",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdDispatchAdaptiveVRS",
  "id": "pfn_hms_xeg_cmddispatchadaptivevrs",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdRadixSortHPS",
  "id": "pfn_hms_xeg_cmdradixsorthps",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdRenderRTGI",
  "id": "pfn_hms_xeg_cmdrenderrtgi",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdRenderRTReflection",
  "id": "pfn_hms_xeg_cmdrenderrtreflection",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdRenderRTVisibleMask",
  "id": "pfn_hms_xeg_cmdrenderrtvisiblemask",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdRenderSpatialUpscale",
  "id": "pfn_hms_xeg_cmdrenderspatialupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdRenderTemporalUpscale",
  "id": "pfn_hms_xeg_cmdrendertemporalupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CmdSetSynchronization",
  "id": "pfn_hms_xeg_cmdsetsynchronization",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CreateAdaptiveVRS",
  "id": "pfn_hms_xeg_createadaptivevrs",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CreateHPS",
  "id": "pfn_hms_xeg_createhps",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CreateRTGI",
  "id": "pfn_hms_xeg_creatertgi",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CreateRTReflection",
  "id": "pfn_hms_xeg_creatertreflection",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CreateRTVisibleMask",
  "id": "pfn_hms_xeg_creatertvisiblemask",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CreateSpatialUpscale",
  "id": "pfn_hms_xeg_createspatialupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_CreateTemporalUpscale",
  "id": "pfn_hms_xeg_createtemporalupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DestroyAdaptiveVRS",
  "id": "pfn_hms_xeg_destroyadaptivevrs",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DestroyHPS",
  "id": "pfn_hms_xeg_destroyhps",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DestroyRTGI",
  "id": "pfn_hms_xeg_destroyrtgi",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DestroyRTReflection",
  "id": "pfn_hms_xeg_destroyrtreflection",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DestroyRTVisibleMask",
  "id": "pfn_hms_xeg_destroyrtvisiblemask",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DestroySpatialUpscale",
  "id": "pfn_hms_xeg_destroyspatialupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DestroyTemporalUpscale",
  "id": "pfn_hms_xeg_destroytemporalupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_DISPATCHADAPTIVEVRS",
  "id": "pfn_hms_xeg_dispatchadaptivevrs",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_EnumerateDeviceExtensionProperties",
  "id": "pfn_hms_xeg_enumeratedeviceextensionproperties",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_GETSTRING",
  "id": "pfn_hms_xeg_getstring",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_NEURALUPSCALEPARAMETER",
  "id": "pfn_hms_xeg_neuralupscaleparameter",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_RENDERNEURALUPSCALE",
  "id": "pfn_hms_xeg_renderneuralupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_RENDERSPATIALUPSCALE",
  "id": "pfn_hms_xeg_renderspatialupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_RenderTemporalUpscale",
  "id": "pfn_hms_xeg_rendertemporalupscale",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_SPATIALUPSCALEPARAMETER",
  "id": "pfn_hms_xeg_spatialupscaleparameter",
  "level": 3
}, {
  "value": "PFN_HMS_XEG_TemporalUpscaleParameter",
  "id": "pfn_hms_xeg_temporalupscaleparameter",
  "level": 3
}, {
  "value": "XEG_AdaptiveVRS",
  "id": "xeg_adaptivevrs",
  "level": 3
}, {
  "value": "XEG_AdaptiveVRSCreateInfo",
  "id": "xeg_adaptivevrscreateinfo",
  "level": 3
}, {
  "value": "XEG_AdaptiveVRSDescription",
  "id": "xeg_adaptivevrsdescription",
  "level": 3
}, {
  "value": "XEG_DenoiseQualityMode",
  "id": "xeg_denoisequalitymode",
  "level": 3
}, {
  "value": "XEG_ExtensionProperties",
  "id": "xeg_extensionproperties",
  "level": 3
}, {
  "value": "XEG_HPS",
  "id": "xeg_hps",
  "level": 3
}, {
  "value": "XEG_HPSCreateInfo",
  "id": "xeg_hpscreateinfo",
  "level": 3
}, {
  "value": "XEG_HPSRadixSort",
  "id": "xeg_hpsradixsort",
  "level": 3
}, {
  "value": "XEG_HPSRadixSortDescription",
  "id": "xeg_hpsradixsortdescription",
  "level": 3
}, {
  "value": "XEG_RTGI",
  "id": "xeg_rtgi",
  "level": 3
}, {
  "value": "XEG_RTGIQualityMode",
  "id": "xeg_rtgiqualitymode",
  "level": 3
}, {
  "value": "XEG_RTReflection",
  "id": "xeg_rtreflection",
  "level": 3
}, {
  "value": "XEG_RTReflectionCreateInfo",
  "id": "xeg_rtreflectioncreateinfo",
  "level": 3
}, {
  "value": "XEG_RTReflectionDescription",
  "id": "xeg_rtreflectiondescription",
  "level": 3
}, {
  "value": "XEG_RTVisibleMask",
  "id": "xeg_rtvisiblemask",
  "level": 3
}, {
  "value": "XEG_SpatialUpscale",
  "id": "xeg_spatialupscale",
  "level": 3
}, {
  "value": "XEG_SpatialUpscaleCreateInfo",
  "id": "xeg_spatialupscalecreateinfo",
  "level": 3
}, {
  "value": "XEG_SpatialUpscaleDescription",
  "id": "xeg_spatialupscaledescription",
  "level": 3
}, {
  "value": "XEG_StructureType",
  "id": "xeg_structuretype",
  "level": 3
}, {
  "value": "XEG_TemporalUpscale",
  "id": "xeg_temporalupscale",
  "level": 3
}, {
  "value": "XEG_TemporalUpscaleCreateInfo",
  "id": "xeg_temporalupscalecreateinfo",
  "level": 3
}, {
  "value": "XEG_TemporalUpscaleDescription",
  "id": "xeg_temporalupscaledescription",
  "level": 3
}, {
  "value": "XEG_TraversalMode",
  "id": "xeg_traversalmode",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "XEG_DenoiseQualityMode",
  "id": "xeg_denoisequalitymode-1",
  "level": 3
}, {
  "value": "XEG_RTGIQualityMode",
  "id": "xeg_rtgiqualitymode-1",
  "level": 3
}, {
  "value": "XEG_StructureType",
  "id": "xeg_structuretype-1",
  "level": 3
}, {
  "value": "XEG_TraversalMode",
  "id": "xeg_traversalmode-1",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_XEG_AdaptiveVRSParameter()",
  "id": "hms_xeg_adaptivevrsparameter",
  "level": 3
}, {
  "value": "HMS_XEG_ApplyAdaptiveVRS()",
  "id": "hms_xeg_applyadaptivevrs",
  "level": 3
}, {
  "value": "HMS_XEG_CmdDispatchAdaptiveVRS()",
  "id": "hms_xeg_cmddispatchadaptivevrs",
  "level": 3
}, {
  "value": "HMS_XEG_CmdRadixSortHPS()",
  "id": "hms_xeg_cmdradixsorthps",
  "level": 3
}, {
  "value": "HMS_XEG_CmdRenderRTGI()",
  "id": "hms_xeg_cmdrenderrtgi",
  "level": 3
}, {
  "value": "HMS_XEG_CmdRenderRTReflection()",
  "id": "hms_xeg_cmdrenderrtreflection",
  "level": 3
}, {
  "value": "HMS_XEG_CmdRenderRTVisibleMask()",
  "id": "hms_xeg_cmdrenderrtvisiblemask",
  "level": 3
}, {
  "value": "HMS_XEG_CmdRenderSpatialUpscale()",
  "id": "hms_xeg_cmdrenderspatialupscale",
  "level": 3
}, {
  "value": "HMS_XEG_CmdRenderTemporalUpscale()",
  "id": "hms_xeg_cmdrendertemporalupscale",
  "level": 3
}, {
  "value": "HMS_XEG_CmdSetSynchronization()",
  "id": "hms_xeg_cmdsetsynchronization",
  "level": 3
}, {
  "value": "HMS_XEG_CreateAdaptiveVRS()",
  "id": "hms_xeg_createadaptivevrs",
  "level": 3
}, {
  "value": "HMS_XEG_CreateHPS()",
  "id": "hms_xeg_createhps",
  "level": 3
}, {
  "value": "HMS_XEG_CreateRTGI()",
  "id": "hms_xeg_creatertgi",
  "level": 3
}, {
  "value": "HMS_XEG_CreateRTReflection()",
  "id": "hms_xeg_creatertreflection",
  "level": 3
}, {
  "value": "HMS_XEG_CreateRTVisibleMask()",
  "id": "hms_xeg_creatertvisiblemask",
  "level": 3
}, {
  "value": "HMS_XEG_CreateSpatialUpscale()",
  "id": "hms_xeg_createspatialupscale",
  "level": 3
}, {
  "value": "HMS_XEG_CreateTemporalUpscale()",
  "id": "hms_xeg_createtemporalupscale",
  "level": 3
}, {
  "value": "HMS_XEG_DestroyAdaptiveVRS()",
  "id": "hms_xeg_destroyadaptivevrs",
  "level": 3
}, {
  "value": "HMS_XEG_DestroyHPS()",
  "id": "hms_xeg_destroyhps",
  "level": 3
}, {
  "value": "HMS_XEG_DestroyRTGI()",
  "id": "hms_xeg_destroyrtgi",
  "level": 3
}, {
  "value": "HMS_XEG_DestroyRTReflection()",
  "id": "hms_xeg_destroyrtreflection",
  "level": 3
}, {
  "value": "HMS_XEG_DestroyRTVisibleMask()",
  "id": "hms_xeg_destroyrtvisiblemask",
  "level": 3
}, {
  "value": "HMS_XEG_DestroySpatialUpscale()",
  "id": "hms_xeg_destroyspatialupscale",
  "level": 3
}, {
  "value": "HMS_XEG_DestroyTemporalUpscale()",
  "id": "hms_xeg_destroytemporalupscale",
  "level": 3
}, {
  "value": "HMS_XEG_DispatchAdaptiveVRS()",
  "id": "hms_xeg_dispatchadaptivevrs",
  "level": 3
}, {
  "value": "HMS_XEG_EnumerateDeviceExtensionProperties()",
  "id": "hms_xeg_enumeratedeviceextensionproperties",
  "level": 3
}, {
  "value": "HMS_XEG_GetString()",
  "id": "hms_xeg_getstring",
  "level": 3
}, {
  "value": "HMS_XEG_NeuralUpscaleParameter()",
  "id": "hms_xeg_neuralupscaleparameter",
  "level": 3
}, {
  "value": "HMS_XEG_RenderNeuralUpscale()",
  "id": "hms_xeg_renderneuralupscale",
  "level": 3
}, {
  "value": "HMS_XEG_RenderSpatialUpscale()",
  "id": "hms_xeg_renderspatialupscale",
  "level": 3
}, {
  "value": "HMS_XEG_RenderTemporalUpscale()",
  "id": "hms_xeg_rendertemporalupscale",
  "level": 3
}, {
  "value": "HMS_XEG_SpatialUpscaleParameter()",
  "id": "hms_xeg_spatialupscaleparameter",
  "level": 3
}, {
  "value": "HMS_XEG_TemporalUpscaleParameter()",
  "id": "hms_xeg_temporalupscaleparameter",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "xengine",
        children: "XEngine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供XEngine图形相关能力接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.XEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-extension-defs-8h/xengine-kit-xeg-extension-defs-8h",
              children: "xeg_extension_defs.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供XEngine扩展特性宏定义信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-gles-adaptive-vrs-8h/xengine-kit-xeg-gles-adaptive-vrs-8h",
              children: "xeg_gles_adaptive_vrs.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine VRS特性接口。使用此头文件的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_extension_name",
              children: "XEG_ADAPTIVE_VRS_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-gles-extension-8h/xengine-kit-xeg-gles-extension-8h",
              children: "xeg_gles_extension.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine扩展特性查询接口（OpenGL ES）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-gles-neural-upscale-8h/xengine-kit-xeg-gles-neural-upscale-8h",
              children: "xeg_gles_neural_upscale.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine空域AI超分特性OpenGL ES接口，推荐超分倍率为[1.0, 1.5]。使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_extension_name",
              children: "XEG_NEURAL_UPSCALE_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-gles-spatial-upscale-8h/xengine-kit-xeg-gles-spatial-upscale-8h",
              children: "xeg_gles_spatial_upscale.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine空域GPU超分特性OpenGL ES接口。使用此头文件的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_extension_name",
              children: "XEG_SPATIAL_UPSCALE_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-gles-temporal-upscale-8h/xengine-kit-xeg-gles-temporal-upscale-8h",
              children: "xeg_gles_temporal_upscale.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine时域AI超分特性OpenGL ES接口。推荐超分倍率为[1.25, 2.0]，使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_extension_name",
              children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-adaptive-vrs-8h/xengine-kit-xeg-vulkan-adaptive-vrs-8h",
              children: "xeg_vulkan_adaptive_vrs.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine Adaptive VRS特性Vulkan接口。使用此头文件的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_extension_name",
              children: "XEG_ADAPTIVE_VRS_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-common-8h/xengine-kit-xeg-vulkan-common-8h",
              children: "xeg_vulkan_common.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含XEngine中Vulkan相关的通用类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-extension-8h/xengine-kit-xeg-vulkan-extension-8h",
              children: "xeg_vulkan_extension.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine 扩展特性查询接口（Vulkan）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-hps-8h/xengine-kit-xeg-vulkan-hps-8h",
              children: "xeg_vulkan_hps.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine 高性能着色器接口。使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-reflection-8h/xengine-kit-xeg-vulkan-rt-reflection-8h",
              children: "xeg_vulkan_rt_reflection.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine RT Reflection特性接口。使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rt_reflection_extension_name",
              children: "XEG_RT_REFLECTION_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h",
              children: "xeg_vulkan_rt_visible_mask.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine RT VisibleMask特性接口。使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rt_shadow_ao_extension_name",
              children: "XEG_RT_SHADOW_AO_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rtgi-8h/xengine-kit-xeg-vulkan-rtgi-8h",
              children: "xeg_vulkan_rtgi.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine光线追踪全局光照特性Vulkan接口，提供动态漫反射全局光照（DDGI）及神经网络全局光照（NNGI）两种特性。使用此头文件的接口前，需要先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询扩展", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi_extension_name",
              children: "XEG_RTGI_EXTENSION_NAME"
            }), "可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-spatial-upscale-8h/xengine-kit-xeg-vulkan-spatial-upscale-8h",
              children: "xeg_vulkan_spatial_upscale.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine空域GPU超分特性Vulkan接口。使用此头文件的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_extension_name",
              children: "XEG_SPATIAL_UPSCALE_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h",
              children: "xeg_vulkan_temporal_upscale.h"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEngine时域AI超分特性接口，推荐超分倍率为[1.25, 2.0]。使用此头文件中的接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_extension_name",
              children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
            }), "扩展可用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrscreateinfo/xengine-kit-xeg-adaptivevrscreateinfo",
              children: "XEG_AdaptiveVRSCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象的参数信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrsdescription/xengine-kit-xeg-adaptivevrsdescription",
              children: "XEG_AdaptiveVRSDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-extensionproperties/xengine-kit-xeg-extensionproperties",
              children: "XEG_ExtensionProperties"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询到的XEngine扩展特性集合。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo",
              children: "XEG_HPSCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象的信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsort/xengine-kit-xeg-hpsradixsort",
              children: "XEG_HPSRadixSort"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述HPS基数排序扩展结构信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), "扩展进行排序时所需的信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectioncreateinfo/xengine-kit-xeg-rtreflectioncreateinfo",
              children: "XEG_RTReflectionCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription",
              children: "XEG_RTReflectionDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发光线求交命令时的输入信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo",
              children: "XEG_RTShadowAOCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建支持光线追踪阴影和环境光遮蔽效果", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "实例的初始化信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters",
              children: "XEG_RTShadowParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线追踪阴影（Shadow）算法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtaoparameters/xengine-kit-xeg-rtaoparameters",
              children: "XEG_RTAOParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线追踪环境光遮蔽（AO）算法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters",
              children: "XEG_RTShadowAODenoiserParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线追踪阴影和环境光遮蔽算法去噪参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription",
              children: "XEG_RTShadowAODescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述光线追踪阴影和环境光遮蔽算法渲染命令的输入信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgivolumeentryparameters/xengine-kit-xeg-ddgivolumeentryparameters",
              children: "XEG_DDGIVolumeEntryParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述每一个DDGI体积的必要参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建具有DDGI特性的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象的信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription",
              children: "XEG_DDGIDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述更新DDGI探针辐照度及渲染输出GI图像所需的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建具有NNGI特性的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象的信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription",
              children: "XEG_NNGIDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述更新NNGI用于计算光线追踪全局光照的所需的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo",
              children: "XEG_SpatialUpscaleCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象的信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription",
              children: "XEG_SpatialUpscaleDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发空域GPU超分渲染命令时需要的图像信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发时域AI超分渲染命令时的输入信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale",
              children: "XEG_spatial_upscale"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine空域GPU超分扩展特性宏定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_version",
              children: "XEG_SPATIAL_UPSCALE_VERSION"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine空域GPU超分扩展特性版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_extension_name",
              children: "XEG_SPATIAL_UPSCALE_EXTENSION_NAME"
            }), " \"XEG_spatial_upscale\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine空域GPU超分扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale",
              children: "XEG_neural_upscale"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine空域AI超分扩展特性宏定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_version",
              children: "XEG_NEURAL_UPSCALE_VERSION"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine空域AI超分扩展特性版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_extension_name",
              children: "XEG_NEURAL_UPSCALE_EXTENSION_NAME"
            }), " \"XEG_neural_upscale\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine空域AI超分扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale",
              children: "XEG_temporal_upscale"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine时域AI超分扩展特性宏定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_version",
              children: "XEG_TEMPORAL_UPSCALE_VERSION"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine时域AI超分扩展特性版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_extension_name",
              children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
            }), " \"XEG_temporal_upscale\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine时域AI超分扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs",
              children: "XEG_adaptive_vrs"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine自适应VRS扩展特性宏定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_version",
              children: "XEG_ADAPTIVE_VRS_VERSION"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine自适应VRS扩展特性版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_extension_name",
              children: "XEG_ADAPTIVE_VRS_EXTENSION_NAME"
            }), " \"XEG_adaptive_vrs\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine自适应VRS扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi_extension_name",
              children: "XEG_RTGI_EXTENSION_NAME"
            }), " \"XEG_rtgi\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine光线追踪全局光照扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rt_shadow_ao_extension_name",
              children: "XEG_RT_SHADOW_AO_EXTENSION_NAME"
            }), " \"XEG_rt_shadow_ao\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine光线追踪阴影和环境光遮蔽扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rt_reflection_extension_name",
              children: "XEG_RT_REFLECTION_EXTENSION_NAME"
            }), " \"XEG_rt_reflection\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine光线追踪反射扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), " \"XEG_hps_radix_sort\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine 高性能基数排序扩展特性名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_input_size",
              children: "XEG_ADAPTIVE_VRS_INPUT_SIZE"
            }), " 0x1U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_adaptivevrsparameter",
              children: "HMS_XEG_AdaptiveVRSParameter"
            }), "接口的INPUT_SIZE参数，表示上一帧渲染管线最终渲染的图像宽度和高度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_input_region",
              children: "XEG_ADAPTIVE_VRS_INPUT_REGION"
            }), " 0x2U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_adaptivevrsparameter",
              children: "HMS_XEG_AdaptiveVRSParameter"
            }), "接口的INPUT_REGION参数，表示上一帧渲染管线最终渲染的图像区域。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_texel_size",
              children: "XEG_ADAPTIVE_VRS_TEXEL_SIZE"
            }), " 0x3U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_adaptivevrsparameter",
              children: "HMS_XEG_AdaptiveVRSParameter"
            }), "接口的TEXEL_SIZE参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_error_sensitivity",
              children: "XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY"
            }), " 0x4U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_adaptivevrsparameter",
              children: "HMS_XEG_AdaptiveVRSParameter"
            }), "接口的ERROR_SENSITIVITY参数，表示控制生成着色率图像的阈值。该值越大，平均着色率越小，即性能会越好但画质会劣化。建议取值范围为[0, 1]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_flip",
              children: "XEG_ADAPTIVE_VRS_FLIP"
            }), " 0x5U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_adaptivevrsparameter",
              children: "HMS_XEG_AdaptiveVRSParameter"
            }), "接口的FLIP参数，该参数用于控制是否执行图像上下翻转。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_extensions",
              children: "XEG_EXTENSIONS"
            }), " 0x01U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), "接口的入参，以获取XEngine支持的OpenGL ES扩展特性。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_scissor",
              children: "XEG_NEURAL_UPSCALE_SCISSOR"
            }), " 0x1U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_neuralupscaleparameter",
              children: "HMS_XEG_NeuralUpscaleParameter"
            }), "接口设置超分的裁剪窗口参数，裁剪窗口用于确定对输入图像采样的区域。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_sharpness",
              children: "XEG_NEURAL_UPSCALE_SHARPNESS"
            }), " 0x2U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_neuralupscaleparameter",
              children: "HMS_XEG_NeuralUpscaleParameter"
            }), "接口设置超分的锐化度参数，锐化度的建议取值范围为[0, 1]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_input_handle",
              children: "XEG_NEURAL_UPSCALE_INPUT_HANDLE"
            }), " 0x4U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_neuralupscaleparameter",
              children: "HMS_XEG_NeuralUpscaleParameter"
            }), "接口设置与超分输入纹理关联的OH_NativeBuffer handle。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_scissor",
              children: "XEG_SPATIAL_UPSCALE_SCISSOR"
            }), " 0x1U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_spatialupscaleparameter",
              children: "HMS_XEG_SpatialUpscaleParameter"
            }), "接口的SCISSOR参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_sharpness",
              children: "XEG_SPATIAL_UPSCALE_SHARPNESS"
            }), " 0x2U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_spatialupscaleparameter",
              children: "HMS_XEG_SpatialUpscaleParameter"
            }), "接口的SHARPNESS参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_input_size",
              children: "XEG_TEMPORAL_UPSCALE_INPUT_SIZE"
            }), " 0x1U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_temporalupscaleparameter",
              children: "HMS_XEG_TemporalUpscaleParameter"
            }), "接口设置超分输入纹理的真实宽高。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_jitter_num",
              children: "XEG_TEMPORAL_UPSCALE_JITTER_NUM"
            }), " 0x2U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_temporalupscaleparameter",
              children: "HMS_XEG_TemporalUpscaleParameter"
            }), "接口设置相机抖动的周期数，取值范围为[4, 16]，推荐8。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_depth_reversed",
              children: "XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED"
            }), " 0x3U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_temporalupscaleparameter",
              children: "HMS_XEG_TemporalUpscaleParameter"
            }), "接口设置是否存在深度反转。true表示存在深度反转，false表示不存在深度反转。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_reset_history",
              children: "XEG_TEMPORAL_UPSCALE_RESET_HISTORY"
            }), " 0x4U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_temporalupscaleparameter",
              children: "HMS_XEG_TemporalUpscaleParameter"
            }), "接口设置是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，并且当前帧开始使用超分的情况下建议设置为true。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_steady_level",
              children: "XEG_TEMPORAL_UPSCALE_STEADY_LEVEL"
            }), " 0x5U"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_temporalupscaleparameter",
              children: "HMS_XEG_TemporalUpscaleParameter"
            }), "接口设置画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_max_extension_name_size",
              children: "XEG_MAX_EXTENSION_NAME_SIZE"
            }), " 256"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine扩展特性名称支持的最大长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_adaptivevrsparameter",
              children: "PFN_HMS_XEG_ADAPTIVEVRSPARAMETER"
            }), ") (GLenum pname, GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自适应VRS输入参数的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_dispatchadaptivevrs",
              children: "PFN_HMS_XEG_DISPATCHADAPTIVEVRS"
            }), ") (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算着色率图像的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_applyadaptivevrs",
              children: "PFN_HMS_XEG_APPLYADAPTIVEVRS"
            }), ") (GLuint shadingRateImage)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将着色率图像应用到渲染目标中的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef const GLubyte *(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_getstring",
              children: "PFN_HMS_XEG_GETSTRING"
            }), ") (GLenum name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine OpenGL ES扩展特性查询接口函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_neuralupscaleparameter",
              children: "PFN_HMS_XEG_NEURALUPSCALEPARAMETER"
            }), ") (GLenum pname, GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空域AI超分输入参数的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_renderneuralupscale",
              children: "PFN_HMS_XEG_RENDERNEURALUPSCALE"
            }), ") (GLuint inputTexture)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域AI超分渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_spatialupscaleparameter",
              children: "PFN_HMS_XEG_SPATIALUPSCALEPARAMETER"
            }), ") (GLenum pname, GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空域GPU超分输入参数的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_renderspatialupscale",
              children: "PFN_HMS_XEG_RENDERSPATIALUPSCALE"
            }), ") (GLuint inputTexture)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域GPU超分渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_temporalupscaleparameter",
              children: "PFN_HMS_XEG_TemporalUpscaleParameter"
            }), ") (GLenum pname, GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置时域AI超分输入参数的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(GL_APIENTRYP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_rendertemporalupscale",
              children: "PFN_HMS_XEG_RenderTemporalUpscale"
            }), ") (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行时域AI超分渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "的句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrscreateinfo/xengine-kit-xeg-adaptivevrscreateinfo",
              children: "XEG_AdaptiveVRSCreateInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrscreateinfo",
              children: "XEG_AdaptiveVRSCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象的参数信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrsdescription/xengine-kit-xeg-adaptivevrsdescription",
              children: "XEG_AdaptiveVRSDescription"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrsdescription",
              children: "XEG_AdaptiveVRSDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_createadaptivevrs",
              children: "PFN_HMS_XEG_CreateAdaptiveVRS"
            }), ") (VkDevice device, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrscreateinfo/xengine-kit-xeg-adaptivevrscreateinfo",
              children: "XEG_AdaptiveVRSCreateInfo"
            }), " *pXegAdaptiveVRSCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), " *pXegAdaptiveVRS)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmddispatchadaptivevrs",
              children: "PFN_HMS_XEG_CmdDispatchAdaptiveVRS"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), " xegAdaptiveVRS, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrsdescription/xengine-kit-xeg-adaptivevrsdescription",
              children: "XEG_AdaptiveVRSDescription"
            }), " *pXegAdaptiveVRSDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行计算自适应可变着色率命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_destroyadaptivevrs",
              children: "PFN_HMS_XEG_DestroyAdaptiveVRS"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), " xegAdaptiveVRS)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_structuretype",
              children: "XEG_StructureType"
            }), " XEG_StructureType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine结构体类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmdsetsynchronization",
              children: "PFN_HMS_XEG_CmdSetSynchronization"
            }), ") (VkCommandBuffer commandBuffer, const void *xegHandle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置同步信号，等待渲染结果写入指定图像的函数指针定义。使用RTGI特性时，为等待GI渲染结果到写入指定图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-extensionproperties/xengine-kit-xeg-extensionproperties",
              children: "XEG_ExtensionProperties"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_extensionproperties",
              children: "XEG_ExtensionProperties"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询到的XEngine扩展特性集合。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_enumeratedeviceextensionproperties",
              children: "PFN_HMS_XEG_EnumerateDeviceExtensionProperties"
            }), ") (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-extensionproperties/xengine-kit-xeg-extensionproperties",
              children: "XEG_ExtensionProperties"
            }), " *pProperties)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine Vulkan扩展特性查询接口函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "的句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo",
              children: "XEG_HPSCreateInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hpscreateinfo",
              children: "XEG_HPSCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象的信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsort/xengine-kit-xeg-hpsradixsort",
              children: "XEG_HPSRadixSort"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hpsradixsort",
              children: "XEG_HPSRadixSort"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述HPS基数排序扩展结构信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), "扩展进行排序时所需的信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_createhps",
              children: "PFN_HMS_XEG_CreateHPS"
            }), ") (VkDevice device, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo",
              children: "XEG_HPSCreateInfo"
            }), " *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), " *pHps)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_destroyhps",
              children: "PFN_HMS_XEG_DestroyHPS"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), " hps)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmdradixsorthps",
              children: "PFN_HMS_XEG_CmdRadixSortHPS"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), " hps, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            }), " *pDescription)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["录制HPS排序命令的函数指针定义，使用此接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询是否支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), "扩展。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "的句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectioncreateinfo/xengine-kit-xeg-rtreflectioncreateinfo",
              children: "XEG_RTReflectionCreateInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflectioncreateinfo",
              children: "XEG_RTReflectionCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription",
              children: "XEG_RTReflectionDescription"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflectiondescription",
              children: "XEG_RTReflectionDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发光线求交命令时的输入信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_creatertreflection",
              children: "PFN_HMS_XEG_CreateRTReflection"
            }), ") (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), " *pRtReflection)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmdrenderrtreflection",
              children: "PFN_HMS_XEG_CmdRenderRTReflection"
            }), "(VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), " rtReflection, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制计算RT反射命中信息命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_destroyrtreflection",
              children: "PFN_HMS_XEG_DestroyRTReflection"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), " rtReflection)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_denoisequalitymode",
              children: "XEG_DenoiseQualityMode"
            }), " XEG_DenoiseQualityMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去噪质量模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_traversalmode",
              children: "XEG_TraversalMode"
            }), " XEG_TraversalMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_creatertvisiblemask",
              children: "PFN_HMS_XEG_CreateRTVisibleMask"
            }), ") (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " *pRTVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmdrenderrtvisiblemask",
              children: "PFN_HMS_XEG_CmdRenderRTVisibleMask"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制光线追踪VisibleMask渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_destroyrtvisiblemask",
              children: "PFN_HMS_XEG_DestroyRTVisibleMask"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "的句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgiqualitymode",
              children: "XEG_RTGIQualityMode"
            }), " XEG_RTGIQualityMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出图像质量模式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_creatertgi",
              children: "PFN_HMS_XEG_CreateRTGI"
            }), ") (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), " *pRtGI)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_destroyrtgi",
              children: "PFN_HMS_XEG_DestroyRTGI"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), " rtGI)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmdrenderrtgi",
              children: "PFN_HMS_XEG_CmdRenderRTGI"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), " rtGI, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "的句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo",
              children: "XEG_SpatialUpscaleCreateInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscalecreateinfo",
              children: "XEG_SpatialUpscaleCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象的信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription",
              children: "XEG_SpatialUpscaleDescription"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscaledescription",
              children: "XEG_SpatialUpscaleDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发空域GPU超分渲染命令时需要的图像信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_createspatialupscale",
              children: "PFN_HMS_XEG_CreateSpatialUpscale"
            }), ") (VkDevice device, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo",
              children: "XEG_SpatialUpscaleCreateInfo"
            }), " *pXegSpatialUpscaleCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), " *pXegSpatialUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmdrenderspatialupscale",
              children: "PFN_HMS_XEG_CmdRenderSpatialUpscale"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), " xegSpatialUpscale, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription",
              children: "XEG_SpatialUpscaleDescription"
            }), " *pXegSpatialUpscaleDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域GPU超分渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_PTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_destroyspatialupscale",
              children: "PFN_HMS_XEG_DestroySpatialUpscale"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), " xegSpatialUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VK_DEFINE_HANDLE(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "的句柄。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此结构体描述下发时域AI超分渲染命令时的输入信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef VkResult(VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_createtemporalupscale",
              children: "PFN_HMS_XEG_CreateTemporalUpscale"
            }), ") (VkDevice device, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), " *pTemporalUpscaleInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " *pTemporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的函数指针定义。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_cmdrendertemporalupscale",
              children: "PFN_HMS_XEG_CmdRenderTemporalUpscale"
            }), ") (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), " *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制时域AI超分渲染命令的函数指针定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(VKAPI_ATTR * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pfn_hms_xeg_destroytemporalupscale",
              children: "PFN_HMS_XEG_DestroyTemporalUpscale"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象的函数指针定义。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_structuretype",
              children: "XEG_StructureType"
            }), " {  XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO = 0, XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION = 1, XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO = 2, XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION = 3,  XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO = 4, XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION = 5, XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO = 6, XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION = 7,  XEG_STRUCTURE_TYPE_HPS_CREATE_INFO = 1001, XEG_STRUCTURE_TYPE_HPS_RADIX_SORT = 1002, XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION = 1003  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine结构体类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_denoisequalitymode",
              children: "XEG_DenoiseQualityMode"
            }), " { XEG_DENOISE_QUALITY_MODE_NONE = 0, XEG_DENOISE_QUALITY_MODE_QUALITY = 1, XEG_DENOISE_QUALITY_MODE_BALANCED = 2, XEG_DENOISE_QUALITY_MODE_PERFORMANCES = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去噪质量模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_traversalmode",
              children: "XEG_TraversalMode"
            }), " { XEG_TRAVERSAL_MODE_DEFAULT = 0, XEG_TRAVERSAL_MODE_PERFORMANCES = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgiqualitymode",
              children: "XEG_RTGIQualityMode"
            }), " { XEG_RTGI_QUALITY_MODE_QUALITY = 0, XEG_RTGI_QUALITY_MODE_BALANCED = 1, XEG_RTGI_QUALITY_MODE_PERFORMANCE = 2 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出图像质量模式的枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_adaptivevrsparameter",
              children: "HMS_XEG_AdaptiveVRSParameter"
            }), " (GLenum pname, GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自适应VRS的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_dispatchadaptivevrs",
              children: "HMS_XEG_DispatchAdaptiveVRS"
            }), " (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算着色率图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_applyadaptivevrs",
              children: "HMS_XEG_ApplyAdaptiveVRS"
            }), " (GLuint shadingRateImage)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将着色率图像应用到渲染目标中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const GLubyte * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), " (GLenum name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine OpenGL ES扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_neuralupscaleparameter",
              children: "HMS_XEG_NeuralUpscaleParameter"
            }), " (GLenum pname, GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空域AI超分输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_renderneuralupscale",
              children: "HMS_XEG_RenderNeuralUpscale"
            }), " (GLuint inputTexture)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域AI超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_spatialupscaleparameter",
              children: "HMS_XEG_SpatialUpscaleParameter"
            }), " (GLenum pname, GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置空域GPU超分输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_renderspatialupscale",
              children: "HMS_XEG_RenderSpatialUpscale"
            }), " (GLuint inputTexture)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域GPU超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_temporalupscaleparameter",
              children: "HMS_XEG_TemporalUpscaleParameter"
            }), " (GLenum pname, const GLvoid *param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置时域AI超分输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["GL_APICALL void GL_APIENTRY ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_rendertemporalupscale",
              children: "HMS_XEG_RenderTemporalUpscale"
            }), " (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行时域AI超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_createadaptivevrs",
              children: "HMS_XEG_CreateAdaptiveVRS"
            }), " (VkDevice device, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrscreateinfo/xengine-kit-xeg-adaptivevrscreateinfo",
              children: "XEG_AdaptiveVRSCreateInfo"
            }), " *pXegAdaptiveVRSCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), " *pXegAdaptiveVRS)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmddispatchadaptivevrs",
              children: "HMS_XEG_CmdDispatchAdaptiveVRS"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), " xegAdaptiveVRS, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrsdescription/xengine-kit-xeg-adaptivevrsdescription",
              children: "XEG_AdaptiveVRSDescription"
            }), " *pXegAdaptiveVRSDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行计算自适应可变着色率命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_destroyadaptivevrs",
              children: "HMS_XEG_DestroyAdaptiveVRS"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), " xegAdaptiveVRS)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmdsetsynchronization",
              children: "HMS_XEG_CmdSetSynchronization"
            }), " (VkCommandBuffer commandBuffer, const void *xegHandle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置同步信号，等待渲染结果写入指定图像。使用RTGI特性时，为等待GI渲染结果写入指定图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), " (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-extensionproperties/xengine-kit-xeg-extensionproperties",
              children: "XEG_ExtensionProperties"
            }), " *pProperties)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XEngine Vulkan扩展特性查询接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_createhps",
              children: "HMS_XEG_CreateHPS"
            }), " (VkDevice device, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo",
              children: "XEG_HPSCreateInfo"
            }), " *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), " *pHps)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_destroyhps",
              children: "HMS_XEG_DestroyHPS"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), " hps)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmdradixsorthps",
              children: "HMS_XEG_CmdRadixSortHPS"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), " hps, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            }), " *pDescription)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["录制HPS排序命令，使用此接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "接口查询是否支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), "扩展。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_creatertreflection",
              children: "HMS_XEG_CreateRTReflection"
            }), " (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), " *pRtReflection)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmdrenderrtreflection",
              children: "HMS_XEG_CmdRenderRTReflection"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), " rtReflection, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制计算RT反射命中信息命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_destroyrtreflection",
              children: "HMS_XEG_DestroyRTReflection"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), " rtReflection)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_creatertvisiblemask",
              children: "HMS_XEG_CreateRTVisibleMask"
            }), " (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " *pRTVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmdrenderrtvisiblemask",
              children: "HMS_XEG_CmdRenderRTVisibleMask"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制光线追踪VisibleMask渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_destroyrtvisiblemask",
              children: "HMS_XEG_DestroyRTVisibleMask"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), " rtVisibleMask)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_creatertgi",
              children: "HMS_XEG_CreateRTGI"
            }), " (VkDevice device, const void *pCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), " *pRtGI)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_destroyrtgi",
              children: "HMS_XEG_DestroyRTGI"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), " rtGI)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmdrenderrtgi",
              children: "HMS_XEG_CmdRenderRTGI"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), " rtGI, const void *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_createspatialupscale",
              children: "HMS_XEG_CreateSpatialUpscale"
            }), " (VkDevice device, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo",
              children: "XEG_SpatialUpscaleCreateInfo"
            }), " *pXegSpatialUpscaleCreateInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), " *pXegSpatialUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmdrenderspatialupscale",
              children: "HMS_XEG_CmdRenderSpatialUpscale"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), " xegSpatialUpscale, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription",
              children: "XEG_SpatialUpscaleDescription"
            }), " *pXegSpatialUpscaleDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行空域GPU超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_destroyspatialupscale",
              children: "HMS_XEG_DestroySpatialUpscale"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), " xegSpatialUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_createtemporalupscale",
              children: "HMS_XEG_CreateTemporalUpscale"
            }), " (VkDevice device, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), " *pTemporalUpscaleInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " *pTemporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_cmdrendertemporalupscale",
              children: "HMS_XEG_CmdRenderTemporalUpscale"
            }), " (VkCommandBuffer commandBuffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), " *pDescription)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制时域AI超分渲染命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VKAPI_ATTR void VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_destroytemporalupscale",
              children: "HMS_XEG_DestroyTemporalUpscale"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), " temporalUpscale)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "宏定义说明",
      children: "宏定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs",
      children: "XEG_adaptive_vrs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_adaptive_vrs   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine自适应VRS扩展特性宏定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs_error_sensitivity",
      children: "XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY   0x4U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口的ERROR_SENSITIVITY参数，表示控制生成着色率图像的阈值。该值越大，平均着色率越小，即性能会越好但画质会劣化。建议取值范围为[0, 1]。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口设置ERROR_SENSITIVITY参数，向接口传递的param必须是GLfloat指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为0.5。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs_extension_name",
      children: "XEG_ADAPTIVE_VRS_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_ADAPTIVE_VRS_EXTENSION_NAME   \"XEG_adaptive_vrs\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine自适应VRS扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs_flip",
      children: "XEG_ADAPTIVE_VRS_FLIP"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_ADAPTIVE_VRS_FLIP   0x5U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口的FLIP参数，该参数用于控制是否执行图像上下翻转。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口设置FLIP参数，向接口传递的param必须是GLboolean指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为false。true表示执行上下翻转，false表示不执行上下翻转。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs_input_region",
      children: "XEG_ADAPTIVE_VRS_INPUT_REGION"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_ADAPTIVE_VRS_INPUT_REGION   0x2U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口的INPUT_REGION参数，表示上一帧渲染管线最终渲染的图像区域。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口设置INPUT_REGION参数，向接口传递的param必须是长度为4的GLuint类型数组，依次为渲染图像区域左下角的坐标和渲染图像区域的宽高，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为[0, 0, INPUT_SIZE[0], INPUT_SIZE[1]]。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs_input_size",
      children: "XEG_ADAPTIVE_VRS_INPUT_SIZE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_ADAPTIVE_VRS_INPUT_SIZE   0x1U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口的INPUT_SIZE参数，表示上一帧渲染管线最终渲染的图像宽度和高度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口设置INPUT_SIZE参数，向接口传递的param必须是长度为2的GLsizei类型数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 必填参数，且需要保证和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_dispatchadaptivevrs",
        children: "HMS_XEG_DispatchAdaptiveVRS"
      }), "的inputColorImage宽高相同。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs_texel_size",
      children: "XEG_ADAPTIVE_VRS_TEXEL_SIZE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_ADAPTIVE_VRS_TEXEL_SIZE   0x3U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口的TEXEL_SIZE参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_adaptivevrsparameter",
        children: "HMS_XEG_AdaptiveVRSParameter"
      }), "接口设置TEXEL_SIZE参数，向接口传递的param必须是长度为2的GLsizei类型数组，依次为TEXEL_WIDTH和TEXEL_HEIGHT，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为[8, 8]，支持[8, 8]和[16, 16]。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptive_vrs_version",
      children: "XEG_ADAPTIVE_VRS_VERSION"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_ADAPTIVE_VRS_VERSION   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine自适应VRS扩展特性版本号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_extensions",
      children: "XEG_EXTENSIONS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_EXTENSIONS   0x01U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_getstring",
        children: "HMS_XEG_GetString"
      }), "接口的入参，以获取XEngine支持的OpenGL ES扩展特性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_hps_radix_sort_extension_name",
      children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_HPS_RADIX_SORT_EXTENSION_NAME   \"XEG_hps_radix_sort\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine 高性能基数排序扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_max_extension_name_size",
      children: "XEG_MAX_EXTENSION_NAME_SIZE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_MAX_EXTENSION_NAME_SIZE   256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine扩展特性名称支持的最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_neural_upscale",
      children: "XEG_neural_upscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_neural_upscale   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine空域AI超分扩展特性宏定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_neural_upscale_extension_name",
      children: "XEG_NEURAL_UPSCALE_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_NEURAL_UPSCALE_EXTENSION_NAME   \"XEG_neural_upscale\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine空域AI超分扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_neural_upscale_input_handle",
      children: "XEG_NEURAL_UPSCALE_INPUT_HANDLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_NEURAL_UPSCALE_INPUT_HANDLE   0x4U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_neuralupscaleparameter",
        children: "HMS_XEG_NeuralUpscaleParameter"
      }), "接口设置与超分输入纹理关联的OH_NativeBuffer handle。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义设置超分输入参数时，向接口传递的param值必须是与向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_renderneuralupscale",
        children: "HMS_XEG_RenderNeuralUpscale"
      }), "接口传递的inputTexture纹理参数对应的合法的OH_NativeBuffer handle，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 必选参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_neural_upscale_scissor",
      children: "XEG_NEURAL_UPSCALE_SCISSOR"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_NEURAL_UPSCALE_SCISSOR   0x1U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_neuralupscaleparameter",
        children: "HMS_XEG_NeuralUpscaleParameter"
      }), "接口设置超分的裁剪窗口参数，裁剪窗口用于确定对输入图像采样的区域。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此宏定义设置裁剪窗口参数时，向接口传递的param值必须是长度为4的无符号整数数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。数组中的值依次为：x， y， width， height，其中x、y确定裁剪窗口的左下角，width、height分别确定裁剪窗口的宽和高。 可选参数，不设置裁剪窗口参数时的默认值为（0， 0， 输入纹理的宽， 输入纹理的高）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_neural_upscale_sharpness",
      children: "XEG_NEURAL_UPSCALE_SHARPNESS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_NEURAL_UPSCALE_SHARPNESS   0x2U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_neuralupscaleparameter",
        children: "HMS_XEG_NeuralUpscaleParameter"
      }), "接口设置超分的锐化度参数，锐化度的建议取值范围为[0, 1]。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此宏定义设置超分的锐化度参数时，向接口传递的param值必须是指向一个float值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，不设置锐化度参数时的默认值为0.2。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_neural_upscale_version",
      children: "XEG_NEURAL_UPSCALE_VERSION"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_NEURAL_UPSCALE_VERSION   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine空域AI超分扩展特性版本号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rt_reflection_extension_name",
      children: "XEG_RT_REFLECTION_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_RT_REFLECTION_EXTENSION_NAME   \"XEG_rt_reflection\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine光线追踪反射扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rt_shadow_ao_extension_name",
      children: "XEG_RT_SHADOW_AO_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_RT_SHADOW_AO_EXTENSION_NAME   \"XEG_rt_shadow_ao\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine光线追踪阴影和环境光遮蔽扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtgi_extension_name",
      children: "XEG_RTGI_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_RTGI_EXTENSION_NAME   \"XEG_rtgi\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine光线追踪全局光照扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatial_upscale",
      children: "XEG_spatial_upscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_spatial_upscale   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine空域GPU超分扩展特性宏定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatial_upscale_extension_name",
      children: "XEG_SPATIAL_UPSCALE_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_SPATIAL_UPSCALE_EXTENSION_NAME   \"XEG_spatial_upscale\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine空域GPU超分扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatial_upscale_scissor",
      children: "XEG_SPATIAL_UPSCALE_SCISSOR"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_SPATIAL_UPSCALE_SCISSOR   0x1U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_spatialupscaleparameter",
        children: "HMS_XEG_SpatialUpscaleParameter"
      }), "接口的SCISSOR参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_spatialupscaleparameter",
        children: "HMS_XEG_SpatialUpscaleParameter"
      }), "接口设置SCISSOR参数，向接口传递的param值必须是指向长度为4的无符号整数数组的指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 SCISSOR四个值依次为裁剪窗口的左下角点的x与y的值和裁剪窗口的宽高。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatial_upscale_sharpness",
      children: "XEG_SPATIAL_UPSCALE_SHARPNESS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_SPATIAL_UPSCALE_SHARPNESS   0x2U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_spatialupscaleparameter",
        children: "HMS_XEG_SpatialUpscaleParameter"
      }), "接口的SHARPNESS参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用此宏定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_spatialupscaleparameter",
        children: "HMS_XEG_SpatialUpscaleParameter"
      }), "接口设置SHARPNESS参数，向接口传递的param值必须是指向float类型的指针。SHARPNESS参数建议取值范围为[0, 1]，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 SHARPNESS参数越大锐化效果越强，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatial_upscale_version",
      children: "XEG_SPATIAL_UPSCALE_VERSION"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_SPATIAL_UPSCALE_VERSION   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine空域GPU超分扩展特性版本号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale",
      children: "XEG_temporal_upscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_temporal_upscale   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine时域AI超分扩展特性宏定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale_depth_reversed",
      children: "XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED   0x3U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_temporalupscaleparameter",
        children: "HMS_XEG_TemporalUpscaleParameter"
      }), "接口设置是否存在深度反转。true表示存在深度反转，false表示不存在深度反转。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此宏定义设置是否存在深度反转时，向接口传递的param值必须是指向一个GLboolean值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale_extension_name",
      children: "XEG_TEMPORAL_UPSCALE_EXTENSION_NAME"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_TEMPORAL_UPSCALE_EXTENSION_NAME   \"XEG_temporal_upscale\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine时域AI超分扩展特性名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale_input_size",
      children: "XEG_TEMPORAL_UPSCALE_INPUT_SIZE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_TEMPORAL_UPSCALE_INPUT_SIZE   0x1U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_temporalupscaleparameter",
        children: "HMS_XEG_TemporalUpscaleParameter"
      }), "接口设置超分输入纹理的真实宽高。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此宏定义设置输入宽高时，向接口传递的param值必须是长度为2的无符号整数数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。数组中的值依次为：width, height。width和height分别确定输入纹理的宽和高。必选参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale_jitter_num",
      children: "XEG_TEMPORAL_UPSCALE_JITTER_NUM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_TEMPORAL_UPSCALE_JITTER_NUM   0x2U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_temporalupscaleparameter",
        children: "HMS_XEG_TemporalUpscaleParameter"
      }), "接口设置相机抖动的周期数，取值范围为[4, 16]，推荐8。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此宏定义设置相机抖动的周期数时，向接口传递的param值必须是指向一个GLuint值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale_reset_history",
      children: "XEG_TEMPORAL_UPSCALE_RESET_HISTORY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_TEMPORAL_UPSCALE_RESET_HISTORY   0x4U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_temporalupscaleparameter",
        children: "HMS_XEG_TemporalUpscaleParameter"
      }), "接口设置是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，并且当前帧开始使用超分的情况下建议设置为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此宏定义设置是否重置历史帧数据时，向接口传递的param值必须是指向一个GLboolean值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale_steady_level",
      children: "XEG_TEMPORAL_UPSCALE_STEADY_LEVEL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_TEMPORAL_UPSCALE_STEADY_LEVEL   0x5U\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_temporalupscaleparameter",
        children: "HMS_XEG_TemporalUpscaleParameter"
      }), "接口设置画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此宏定义设置平衡程度时，向接口传递的param值必须是指向一个GLfloat值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。可选参数，默认值是0.5。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporal_upscale_version",
      children: "XEG_TEMPORAL_UPSCALE_VERSION"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define XEG_TEMPORAL_UPSCALE_VERSION   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine时域AI超分扩展特性版本号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_adaptivevrsparameter",
      children: "PFN_HMS_XEG_ADAPTIVEVRSPARAMETER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_ADAPTIVEVRSPARAMETER) (GLenum pname, GLvoid *param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自适应VRS输入参数的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_input_size",
              children: "XEG_ADAPTIVE_VRS_INPUT_SIZE"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_input_region",
              children: "XEG_ADAPTIVE_VRS_INPUT_REGION"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_texel_size",
              children: "XEG_ADAPTIVE_VRS_TEXEL_SIZE"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_error_sensitivity",
              children: "XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_flip",
              children: "XEG_ADAPTIVE_VRS_FLIP"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_applyadaptivevrs",
      children: "PFN_HMS_XEG_APPLYADAPTIVEVRS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_APPLYADAPTIVEVRS) (GLuint shadingRateImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将着色率图像应用到渲染目标中的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadingRateImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算得到的着色率图像，传入0表示关闭自适应VRS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmddispatchadaptivevrs",
      children: "PFN_HMS_XEG_CmdDispatchAdaptiveVRS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_PTR * PFN_HMS_XEG_CmdDispatchAdaptiveVRS) (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription *pXegAdaptiveVRSDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行计算自适应可变着色率命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegAdaptiveVRS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegAdaptiveVRSDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下发命令的参数结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrsdescription/xengine-kit-xeg-adaptivevrsdescription",
              children: "XEG_AdaptiveVRSDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmdradixsorthps",
      children: "PFN_HMS_XEG_CmdRadixSortHPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdRadixSortHPS) (VkCommandBuffer commandBuffer, XEG_HPS hps, const XEG_HPSRadixSortDescription *pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["录制HPS排序命令的函数指针定义，使用此接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_enumeratedeviceextensionproperties",
        children: "HMS_XEG_EnumerateDeviceExtensionProperties"
      }), "接口查询是否支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps_radix_sort_extension_name",
        children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
      }), "扩展。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), "扩展输入信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmdrenderrtgi",
      children: "PFN_HMS_XEG_CmdRenderRTGI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdRenderRTGI) (VkCommandBuffer commandBuffer, XEG_RTGI rtGI, const void *pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行渲染命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtGI"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行渲染命令的信息结构体的指针，若使用DDGI渲染，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription",
              children: "XEG_DDGIDescription"
            }), "的指针，若使用NNGI渲染，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription",
              children: "XEG_NNGIDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmdrenderrtreflection",
      children: "PFN_HMS_XEG_CmdRenderRTReflection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult VKAPI_ATTR* PFN_HMS_XEG_CmdRenderRTReflection(VkCommandBuffer commandBuffer, XEG_RTReflection rtReflection, const void *pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制计算RT反射命中信息命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象，需要是Primary类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtReflection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["反射渲染输入信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription",
              children: "XEG_RTReflectionDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmdrenderrtvisiblemask",
      children: "PFN_HMS_XEG_CmdRenderRTVisibleMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdRenderRTVisibleMask) (VkCommandBuffer commandBuffer, XEG_RTVisibleMask rtVisibleMask, const void *pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制光线追踪VisibleMask渲染命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtVisibleMask"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行渲染命令的输入参数结构体指针，当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription",
              children: "XEG_RTShadowAODescription"
            }), "类型的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VkResult类型的错误码，值为VK_SUCCESS时表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmdrenderspatialupscale",
      children: "PFN_HMS_XEG_CmdRenderSpatialUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_PTR * PFN_HMS_XEG_CmdRenderSpatialUpscale) (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription *pXegSpatialUpscaleDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行空域GPU超分渲染命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行超分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegSpatialUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegSpatialUpscaleDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["渲染命令的参数结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription",
              children: "XEG_SpatialUpscaleDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmdrendertemporalupscale",
      children: "PFN_HMS_XEG_CmdRenderTemporalUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_ATTR * PFN_HMS_XEG_CmdRenderTemporalUpscale) (VkCommandBuffer commandBuffer, XEG_TemporalUpscale temporalUpscale, XEG_TemporalUpscaleDescription *pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制时域AI超分渲染命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象，需要是Primary类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temporalUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分渲染输入信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_cmdsetsynchronization",
      children: "PFN_HMS_XEG_CmdSetSynchronization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CmdSetSynchronization) (VkCommandBuffer commandBuffer, const void *xegHandle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置同步信号，等待渲染结果写入指定图像的函数指针定义。使用RTGI特性时，为等待GI渲染结果到写入指定图像。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegHandle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建句柄对象。使用RTGI特性时，为已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_createadaptivevrs",
      children: "PFN_HMS_XEG_CreateAdaptiveVRS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateAdaptiveVRS) (VkDevice device, const XEG_AdaptiveVRSCreateInfo *pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS *pXegAdaptiveVRS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_adaptivevrs",
        children: "XEG_AdaptiveVRS"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegAdaptiveVRSCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrscreateinfo/xengine-kit-xeg-adaptivevrscreateinfo",
              children: "XEG_AdaptiveVRSCreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegAdaptiveVRS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_createhps",
      children: "PFN_HMS_XEG_CreateHPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateHPS) (VkDevice device, const XEG_HPSCreateInfo *pCreateInfo, XEG_HPS *pHps)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps",
        children: "XEG_HPS"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "实例句柄创建信息结构体的指针。不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pHps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向HPS实例句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_creatertgi",
      children: "PFN_HMS_XEG_CreateRTGI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateRTGI) (VkDevice device, const void *pCreateInfo, XEG_RTGI *pRtGI)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtgi",
        children: "XEG_RTGI"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象的信息结构体的指针，若创建DDGI句柄，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "的指针，若创建NNGI句柄，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pRtGI"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_creatertreflection",
      children: "PFN_HMS_XEG_CreateRTReflection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_ATTR * PFN_HMS_XEG_CreateRTReflection) (VkDevice device, const void *pCreateInfo, XEG_RTReflection *pRtReflection)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtreflection",
        children: "XEG_RTReflection"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["反射实例句柄创建信息结构体的指针，当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectioncreateinfo/xengine-kit-xeg-rtreflectioncreateinfo",
              children: "XEG_RTReflectionCreateInfo"
            }), "类型的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pRtReflection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向反射实例句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_creatertvisiblemask",
      children: "PFN_HMS_XEG_CreateRTVisibleMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateRTVisibleMask) (VkDevice device, const void *pCreateInfo, XEG_RTVisibleMask *pRTVisibleMask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtvisiblemask",
        children: "XEG_RTVisibleMask"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建VisibleMask实例句柄所需描述信息的结构体的指针，当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo",
              children: "XEG_RTShadowAOCreateInfo"
            }), "类型的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pRTVisibleMask"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向VisibleMask实例句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VkResult类型的错误码，值为VK_SUCCESS时表示创建成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_createspatialupscale",
      children: "PFN_HMS_XEG_CreateSpatialUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_CreateSpatialUpscale) (VkDevice device, const XEG_SpatialUpscaleCreateInfo *pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale *pXegSpatialUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegSpatialUpscaleCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo",
              children: "XEG_SpatialUpscaleCreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegSpatialUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_createtemporalupscale",
      children: "PFN_HMS_XEG_CreateTemporalUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_ATTR * PFN_HMS_XEG_CreateTemporalUpscale) (VkDevice device, XEG_TemporalUpscaleCreateInfo *pTemporalUpscaleInfo, XEG_TemporalUpscale *pTemporalUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_temporalupscale",
        children: "XEG_TemporalUpscale"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pTemporalUpscaleInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分实例句柄创建信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pTemporalUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_destroyadaptivevrs",
      children: "PFN_HMS_XEG_DestroyAdaptiveVRS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyAdaptiveVRS) (XEG_AdaptiveVRS xegAdaptiveVRS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_adaptivevrs",
        children: "XEG_AdaptiveVRS"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegAdaptiveVRS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_destroyhps",
      children: "PFN_HMS_XEG_DestroyHPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyHPS) (XEG_HPS hps)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps",
        children: "XEG_HPS"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_destroyrtgi",
      children: "PFN_HMS_XEG_DestroyRTGI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyRTGI) (XEG_RTGI rtGI)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtgi",
        children: "XEG_RTGI"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtGI"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_destroyrtreflection",
      children: "PFN_HMS_XEG_DestroyRTReflection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void VKAPI_ATTR* PFN_HMS_XEG_DestroyRTReflection(XEG_RTReflection rtReflection)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtreflection",
        children: "XEG_RTReflection"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtReflection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_destroyrtvisiblemask",
      children: "PFN_HMS_XEG_DestroyRTVisibleMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroyRTVisibleMask) (XEG_RTVisibleMask rtVisibleMask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtvisiblemask",
        children: "XEG_RTVisibleMask"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtVisibleMask"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_destroyspatialupscale",
      children: "PFN_HMS_XEG_DestroySpatialUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_PTR * PFN_HMS_XEG_DestroySpatialUpscale) (XEG_SpatialUpscale xegSpatialUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegSpatialUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_destroytemporalupscale",
      children: "PFN_HMS_XEG_DestroyTemporalUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(VKAPI_ATTR * PFN_HMS_XEG_DestroyTemporalUpscale) (XEG_TemporalUpscale temporalUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_temporalupscale",
        children: "XEG_TemporalUpscale"
      }), "对象的函数指针定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temporalUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_dispatchadaptivevrs",
      children: "PFN_HMS_XEG_DISPATCHADAPTIVEVRS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_DISPATCHADAPTIVEVRS) (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算着色率图像的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reprojectionMatrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧和上一帧进行计算的结果矩阵的指针，计算公式为：（上一帧投影矩阵* 上一帧的观察矩阵）* （（当前帧的投影矩阵* 当前帧的观察矩阵）的逆矩阵），矩阵必须是4*4列主序的矩阵。可选参数，非空时画质较优。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputColorImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一帧渲染管线最终渲染结果颜色附件纹理ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputDepthImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧渲染管线最终渲染结果深度附件纹理ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadingRateImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于生成着色率图信息的纹理ID，需用户创建并输入。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(659521)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纹理类型需要是GL_TEXTURE_2D且mipLevels为1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_enumeratedeviceextensionproperties",
      children: "PFN_HMS_XEG_EnumerateDeviceExtensionProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef VkResult(VKAPI_PTR * PFN_HMS_XEG_EnumerateDeviceExtensionProperties) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, XEG_ExtensionProperties *pProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Vulkan扩展特性查询接口函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "physicalDevice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前使用的Vulkan物理设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pPropertyCount"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询或传入扩展特性的数量，当", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "pProperties"
              })
            }), "为nullptr时返回当前支持的XEngine扩展特性数量。 当传入的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "propertyCount"
              })
            }), "大于或等于真实支持的XEngine扩展特性数量时，通过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "pProperties"
              })
            }), "返回查询信息，返回结果为VK_SUCCESS。 当传入的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "propertyCount"
              })
            }), "小于真实支持的XEngine扩展特性数量时，通过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "pProperties"
              })
            }), "返回查询信息，但返回结果为VK_INCOMPLETE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pProperties"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询到的XEngine扩展特性，通过结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-extensionproperties/xengine-kit-xeg-extensionproperties",
              children: "XEG_ExtensionProperties"
            }), "指针返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["返回VkResult类型错误码，查询成功时返回值为VK_SUCCESS。 当", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "pProperties"
        })
      }), "不为nullptr且传入的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "propertyCount"
        })
      }), "小于实际支持的XEngine扩展特性数量时返回值为VK_INCOMPLETE，表示查询特性不完整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_getstring",
      children: "PFN_HMS_XEG_GETSTRING"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef const GLubyte *(GL_APIENTRYP PFN_HMS_XEG_GETSTRING) (GLenum name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine OpenGL ES扩展特性查询接口函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_extensions",
              children: "XEG_EXTENSIONS"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_extensions",
        children: "XEG_EXTENSIONS"
      }), "时，返回XEngine支持的空格分隔的扩展列表，注意扩展名不包含空格字符。查询结果异常则返回空。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_neuralupscaleparameter",
      children: "PFN_HMS_XEG_NEURALUPSCALEPARAMETER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_NEURALUPSCALEPARAMETER) (GLenum pname, GLvoid *param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置空域AI超分输入参数的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_scissor",
              children: "XEG_NEURAL_UPSCALE_SCISSOR"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_sharpness",
              children: "XEG_NEURAL_UPSCALE_SHARPNESS"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_input_handle",
              children: "XEG_NEURAL_UPSCALE_INPUT_HANDLE"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数的值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_renderneuralupscale",
      children: "PFN_HMS_XEG_RENDERNEURALUPSCALE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_RENDERNEURALUPSCALE) (GLuint inputTexture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行空域AI超分渲染命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputTexture"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，纹理的宽度取值范围是[448, 1728]，否则可能会引起AI推理结果错误。此输入纹理必须是由OH_NativeBuffer创建的，并需要在调用此接口前将OH_NativeBuffer对应的handle设置为超分的输入参数，详见接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_neuralupscaleparameter",
              children: "HMS_XEG_NeuralUpscaleParameter"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_renderspatialupscale",
      children: "PFN_HMS_XEG_RENDERSPATIALUPSCALE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_RENDERSPATIALUPSCALE) (GLuint inputTexture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行空域GPU超分渲染命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。此纹理必须在调用此接口前创建好，否则会导致渲染失败，如黑屏问题。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_rendertemporalupscale",
      children: "PFN_HMS_XEG_RenderTemporalUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_RenderTemporalUpscale) (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行时域AI超分渲染命令的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，支持的最大尺寸为2048 * 1024。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "depthTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度纹理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "motionVectorTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dynamicMaskTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "物体的动态遮罩图像，格式需要是GL_RED或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jitterX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机在X方向上的抖动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jitterY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机在Y方向上的抖动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_spatialupscaleparameter",
      children: "PFN_HMS_XEG_SPATIALUPSCALEPARAMETER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_SPATIALUPSCALEPARAMETER) (GLenum pname, GLvoid *param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置空域GPU超分输入参数的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_scissor",
              children: "XEG_SPATIAL_UPSCALE_SCISSOR"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_sharpness",
              children: "XEG_SPATIAL_UPSCALE_SHARPNESS"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pfn_hms_xeg_temporalupscaleparameter",
      children: "PFN_HMS_XEG_TemporalUpscaleParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(GL_APIENTRYP PFN_HMS_XEG_TemporalUpscaleParameter) (GLenum pname, GLvoid *param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置时域AI超分输入参数的函数指针定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_input_size",
              children: "XEG_TEMPORAL_UPSCALE_INPUT_SIZE"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_jitter_num",
              children: "XEG_TEMPORAL_UPSCALE_JITTER_NUM"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_depth_reversed",
              children: "XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_reset_history",
              children: "XEG_TEMPORAL_UPSCALE_RESET_HISTORY"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_steady_level",
              children: "XEG_TEMPORAL_UPSCALE_STEADY_LEVEL"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数的值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptivevrs",
      children: "XEG_AdaptiveVRS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VK_DEFINE_HANDLE(XEG_AdaptiveVRS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_adaptivevrs",
        children: "XEG_AdaptiveVRS"
      }), "的句柄。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptivevrscreateinfo",
      children: "XEG_AdaptiveVRSCreateInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_AdaptiveVRSCreateInfo XEG_AdaptiveVRSCreateInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_adaptivevrs",
        children: "XEG_AdaptiveVRS"
      }), "对象的参数信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_adaptivevrs",
        children: "XEG_AdaptiveVRS"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_adaptivevrsdescription",
      children: "XEG_AdaptiveVRSDescription"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_AdaptiveVRSDescription XEG_AdaptiveVRSDescription\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_denoisequalitymode",
      children: "XEG_DenoiseQualityMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum XEG_DenoiseQualityMode XEG_DenoiseQualityMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去噪质量模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_extensionproperties",
      children: "XEG_ExtensionProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_ExtensionProperties XEG_ExtensionProperties\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_enumeratedeviceextensionproperties",
        children: "HMS_XEG_EnumerateDeviceExtensionProperties"
      }), "接口查询到的XEngine扩展特性集合。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_hps",
      children: "XEG_HPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VK_DEFINE_HANDLE(XEG_HPS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps",
        children: "XEG_HPS"
      }), "的句柄。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_hpscreateinfo",
      children: "XEG_HPSCreateInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_HPSCreateInfo XEG_HPSCreateInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps",
        children: "XEG_HPS"
      }), "对象的信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_hpsradixsort",
      children: "XEG_HPSRadixSort"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_HPSRadixSort XEG_HPSRadixSort\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述HPS基数排序扩展结构信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_hpsradixsortdescription",
      children: "XEG_HPSRadixSortDescription"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_HPSRadixSortDescription XEG_HPSRadixSortDescription\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps_radix_sort_extension_name",
        children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
      }), "扩展进行排序时所需的信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtgi",
      children: "XEG_RTGI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VK_DEFINE_HANDLE(XEG_RTGI)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtgi",
        children: "XEG_RTGI"
      }), "的句柄。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtgiqualitymode",
      children: "XEG_RTGIQualityMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum XEG_RTGIQualityMode XEG_RTGIQualityMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出图像质量模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtreflection",
      children: "XEG_RTReflection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VK_DEFINE_HANDLE(XEG_RTReflection)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtreflection",
        children: "XEG_RTReflection"
      }), "的句柄。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtreflectioncreateinfo",
      children: "XEG_RTReflectionCreateInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_RTReflectionCreateInfo XEG_RTReflectionCreateInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtreflection",
        children: "XEG_RTReflection"
      }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtreflection",
        children: "XEG_RTReflection"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtreflectiondescription",
      children: "XEG_RTReflectionDescription"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_RTReflectionDescription XEG_RTReflectionDescription\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述下发光线求交命令时的输入信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtvisiblemask",
      children: "XEG_RTVisibleMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VK_DEFINE_HANDLE(XEG_RTVisibleMask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtvisiblemask",
        children: "XEG_RTVisibleMask"
      }), "的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatialupscale",
      children: "XEG_SpatialUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VK_DEFINE_HANDLE(XEG_SpatialUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "的句柄。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatialupscalecreateinfo",
      children: "XEG_SpatialUpscaleCreateInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_SpatialUpscaleCreateInfo XEG_SpatialUpscaleCreateInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象的信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_spatialupscaledescription",
      children: "XEG_SpatialUpscaleDescription"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_SpatialUpscaleDescription XEG_SpatialUpscaleDescription\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述下发空域GPU超分渲染命令时需要的图像信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_structuretype",
      children: "XEG_StructureType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum XEG_StructureType XEG_StructureType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine结构体类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporalupscale",
      children: "XEG_TemporalUpscale"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VK_DEFINE_HANDLE(XEG_TemporalUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_temporalupscale",
        children: "XEG_TemporalUpscale"
      }), "的句柄。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporalupscalecreateinfo",
      children: "XEG_TemporalUpscaleCreateInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_TemporalUpscaleCreateInfo XEG_TemporalUpscaleCreateInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_temporalupscale",
        children: "XEG_TemporalUpscale"
      }), "对象的信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_temporalupscale",
        children: "XEG_TemporalUpscale"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_temporalupscaledescription",
      children: "XEG_TemporalUpscaleDescription"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct XEG_TemporalUpscaleDescription XEG_TemporalUpscaleDescription\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述下发时域AI超分渲染命令时的输入信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_traversalmode",
      children: "XEG_TraversalMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum XEG_TraversalMode XEG_TraversalMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "遍历模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_denoisequalitymode-1",
      children: "XEG_DenoiseQualityMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum XEG_DenoiseQualityMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去噪质量模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_DENOISE_QUALITY_MODE_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不进行去噪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_DENOISE_QUALITY_MODE_QUALITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成高质量的无噪声结果，但速度可能较慢。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_DENOISE_QUALITY_MODE_BALANCED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成较高质量的无噪声结果，速度适中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_DENOISE_QUALITY_MODE_PERFORMANCES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高性能地生成无噪声结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_rtgiqualitymode-1",
      children: "XEG_RTGIQualityMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum XEG_RTGIQualityMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出图像质量模式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_RTGI_QUALITY_MODE_QUALITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "质量模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_RTGI_QUALITY_MODE_BALANCED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平衡模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_RTGI_QUALITY_MODE_PERFORMANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性能模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_structuretype-1",
      children: "XEG_StructureType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum XEG_StructureType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine结构体类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo",
              children: "XEG_RTShadowAOCreateInfo"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription",
              children: "XEG_RTShadowAODescription"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectioncreateinfo/xengine-kit-xeg-rtreflectioncreateinfo",
              children: "XEG_RTReflectionCreateInfo"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription",
              children: "XEG_RTReflectionDescription"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription",
              children: "XEG_NNGIDescription"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription",
              children: "XEG_DDGIDescription"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_HPS_CREATE_INFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpscreateinfo/xengine-kit-xeg-hpscreateinfo",
              children: "XEG_HPSCreateInfo"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_HPS_RADIX_SORT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsort/xengine-kit-xeg-hpsradixsort",
              children: "XEG_HPSRadixSort"
            }), "的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            }), "的类型。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xeg_traversalmode-1",
      children: "XEG_TraversalMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum XEG_TraversalMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "遍历模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_TRAVERSAL_MODE_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逐像素进行光线追踪场景遍历。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XEG_TRAVERSAL_MODE_PERFORMANCES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过算法进行场景遍历，性能更好，画质可能有细微的差别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_adaptivevrsparameter",
      children: "HMS_XEG_AdaptiveVRSParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_AdaptiveVRSParameter (GLenum pname, GLvoid * param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自适应VRS的参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_input_size",
              children: "XEG_ADAPTIVE_VRS_INPUT_SIZE"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_input_region",
              children: "XEG_ADAPTIVE_VRS_INPUT_REGION"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_texel_size",
              children: "XEG_ADAPTIVE_VRS_TEXEL_SIZE"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_error_sensitivity",
              children: "XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptive_vrs_flip",
              children: "XEG_ADAPTIVE_VRS_FLIP"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_applyadaptivevrs",
      children: "HMS_XEG_ApplyAdaptiveVRS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_ApplyAdaptiveVRS (GLuint shadingRateImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将着色率图像应用到渲染目标中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadingRateImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算得到的着色率图像，传入0表示关闭自适应VRS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmddispatchadaptivevrs",
      children: "HMS_XEG_CmdDispatchAdaptiveVRS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdDispatchAdaptiveVRS (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription * pXegAdaptiveVRSDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行计算自适应可变着色率命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegAdaptiveVRS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegAdaptiveVRSDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下发命令的参数结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrsdescription/xengine-kit-xeg-adaptivevrsdescription",
              children: "XEG_AdaptiveVRSDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmdradixsorthps",
      children: "HMS_XEG_CmdRadixSortHPS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRadixSortHPS (VkCommandBuffer commandBuffer, XEG_HPS hps, const XEG_HPSRadixSortDescription * pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["录制HPS排序命令，使用此接口前需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_xeg_enumeratedeviceextensionproperties",
        children: "HMS_XEG_EnumerateDeviceExtensionProperties"
      }), "接口查询是否支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps_radix_sort_extension_name",
        children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
      }), "扩展。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps_radix_sort_extension_name",
              children: "XEG_HPS_RADIX_SORT_EXTENSION_NAME"
            }), "扩展输入信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-hpsradixsortdescription/xengine-kit-xeg-hpsradixsortdescription",
              children: "XEG_HPSRadixSortDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmdrenderrtgi",
      children: "HMS_XEG_CmdRenderRTGI()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTGI (VkCommandBuffer commandBuffer, XEG_RTGI rtGI, const void * pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行渲染命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtGI"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行渲染命令的信息结构体的指针，若使用DDGI渲染，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgidescription/xengine-kit-xeg-ddgidescription",
              children: "XEG_DDGIDescription"
            }), "的指针，若使用NNGI渲染，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngidescription/xengine-kit-xeg-nngidescription",
              children: "XEG_NNGIDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmdrenderrtreflection",
      children: "HMS_XEG_CmdRenderRTReflection()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTReflection (VkCommandBuffer commandBuffer, XEG_RTReflection rtReflection, const void * pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制计算RT反射命中信息命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象，需要是Primary类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtReflection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["反射渲染输入信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription",
              children: "XEG_RTReflectionDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmdrenderrtvisiblemask",
      children: "HMS_XEG_CmdRenderRTVisibleMask()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTVisibleMask (VkCommandBuffer commandBuffer, XEG_RTVisibleMask rtVisibleMask, const void * pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制光线追踪VisibleMask渲染命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtVisibleMask"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行渲染命令的输入参数结构体指针，当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription",
              children: "XEG_RTShadowAODescription"
            }), "类型的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VkResult类型的错误码，值为VK_SUCCESS时表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmdrenderspatialupscale",
      children: "HMS_XEG_CmdRenderSpatialUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderSpatialUpscale (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription * pXegSpatialUpscaleDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行空域GPU超分渲染命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行超分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegSpatialUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegSpatialUpscaleDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["渲染命令的参数结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription",
              children: "XEG_SpatialUpscaleDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmdrendertemporalupscale",
      children: "HMS_XEG_CmdRenderTemporalUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderTemporalUpscale (VkCommandBuffer commandBuffer, XEG_TemporalUpscale temporalUpscale, XEG_TemporalUpscaleDescription * pDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制时域AI超分渲染命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulkan命令缓冲对象，需要是Primary类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temporalUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pDescription"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分渲染输入信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription",
              children: "XEG_TemporalUpscaleDescription"
            }), "的指针，不允许为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_cmdsetsynchronization",
      children: "HMS_XEG_CmdSetSynchronization()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdSetSynchronization (VkCommandBuffer commandBuffer, const void * xegHandle )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置同步信号，等待渲染结果写入指定图像。使用RTGI特性时，为等待GI渲染结果写入指定图像。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commandBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegHandle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建句柄对象。使用RTGI特性时，为已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_createadaptivevrs",
      children: "HMS_XEG_CreateAdaptiveVRS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateAdaptiveVRS (VkDevice device, XEG_AdaptiveVRSCreateInfo * pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS * pXegAdaptiveVRS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_adaptivevrs",
        children: "XEG_AdaptiveVRS"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegAdaptiveVRSCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-adaptivevrscreateinfo/xengine-kit-xeg-adaptivevrscreateinfo",
              children: "XEG_AdaptiveVRSCreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegAdaptiveVRS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_createhps",
      children: "HMS_XEG_CreateHPS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateHPS (VkDevice device, const XEG_HPSCreateInfo * pCreateInfo, XEG_HPS * pHps )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps",
        children: "XEG_HPS"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "实例句柄创建信息结构体的指针。不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pHps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向HPS实例句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_creatertgi",
      children: "HMS_XEG_CreateRTGI()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTGI (VkDevice device, const void * pCreateInfo, XEG_RTGI * pRtGI )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtgi",
        children: "XEG_RTGI"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象的信息结构体的指针，若创建DDGI句柄，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-ddgicreateinfo/xengine-kit-xeg-ddgicreateinfo",
              children: "XEG_DDGICreateInfo"
            }), "的指针，若创建NNGI句柄，为结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-nngicreateinfo/xengine-kit-xeg-nngicreateinfo",
              children: "XEG_NNGICreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pRtGI"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_creatertreflection",
      children: "HMS_XEG_CreateRTReflection()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTReflection (VkDevice device, const void * pCreateInfo, XEG_RTReflection * pRtReflection )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtreflection",
        children: "XEG_RTReflection"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["反射实例句柄创建信息结构体的指针，当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectioncreateinfo/xengine-kit-xeg-rtreflectioncreateinfo",
              children: "XEG_RTReflectionCreateInfo"
            }), "类型的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pRtReflection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向反射实例句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_creatertvisiblemask",
      children: "HMS_XEG_CreateRTVisibleMask()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTVisibleMask (VkDevice device, const void * pCreateInfo, XEG_RTVisibleMask * pRTVisibleMask )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtvisiblemask",
        children: "XEG_RTVisibleMask"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建VisibleMask实例句柄所需描述信息的结构体的指针，当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo",
              children: "XEG_RTShadowAOCreateInfo"
            }), "类型的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pRTVisibleMask"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向VisibleMask实例句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VkResult类型的错误码，值为VK_SUCCESS时表示创建成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_createspatialupscale",
      children: "HMS_XEG_CreateSpatialUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateSpatialUpscale (VkDevice device, const XEG_SpatialUpscaleCreateInfo * pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale * pXegSpatialUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegSpatialUpscaleCreateInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo",
              children: "XEG_SpatialUpscaleCreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pXegSpatialUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_createtemporalupscale",
      children: "HMS_XEG_CreateTemporalUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateTemporalUpscale (VkDevice device, XEG_TemporalUpscaleCreateInfo * pTemporalUpscaleInfo, XEG_TemporalUpscale * pTemporalUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_temporalupscale",
        children: "XEG_TemporalUpscale"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须是当前使用的VkDevice。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pTemporalUpscaleInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分实例句柄创建信息结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo",
              children: "XEG_TemporalUpscaleCreateInfo"
            }), "的指针，不允许为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pTemporalUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向句柄的指针，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "在此句柄中返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_destroyadaptivevrs",
      children: "HMS_XEG_DestroyAdaptiveVRS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyAdaptiveVRS (XEG_AdaptiveVRS xegAdaptiveVRS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_adaptivevrs",
        children: "XEG_AdaptiveVRS"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegAdaptiveVRS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_adaptivevrs",
              children: "XEG_AdaptiveVRS"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_destroyhps",
      children: "HMS_XEG_DestroyHPS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyHPS (XEG_HPS hps)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_hps",
        children: "XEG_HPS"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_hps",
              children: "XEG_HPS"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_destroyrtgi",
      children: "HMS_XEG_DestroyRTGI()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTGI (XEG_RTGI rtGI)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtgi",
        children: "XEG_RTGI"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtGI"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtgi",
              children: "XEG_RTGI"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_destroyrtreflection",
      children: "HMS_XEG_DestroyRTReflection()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTReflection (XEG_RTReflection rtReflection)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtreflection",
        children: "XEG_RTReflection"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtReflection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtreflection",
              children: "XEG_RTReflection"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_destroyrtvisiblemask",
      children: "HMS_XEG_DestroyRTVisibleMask()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTVisibleMask (XEG_RTVisibleMask rtVisibleMask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_rtvisiblemask",
        children: "XEG_RTVisibleMask"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtVisibleMask"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_rtvisiblemask",
              children: "XEG_RTVisibleMask"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_destroyspatialupscale",
      children: "HMS_XEG_DestroySpatialUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroySpatialUpscale (XEG_SpatialUpscale xegSpatialUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xegSpatialUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatialupscale",
              children: "XEG_SpatialUpscale"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_destroytemporalupscale",
      children: "HMS_XEG_DestroyTemporalUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyTemporalUpscale (XEG_TemporalUpscale temporalUpscale)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_temporalupscale",
        children: "XEG_TemporalUpscale"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temporalUpscale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporalupscale",
              children: "XEG_TemporalUpscale"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_dispatchadaptivevrs",
      children: "HMS_XEG_DispatchAdaptiveVRS()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_DispatchAdaptiveVRS (GLfloat * reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算着色率图像。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reprojectionMatrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧和上一帧进行计算的结果矩阵的指针，计算公式为：（上一帧投影矩阵* 上一帧的观察矩阵）* （（当前帧的投影矩阵* 当前帧的观察矩阵）的逆矩阵），矩阵必须是4*4列主序的矩阵。可选参数，非空时画质较优。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputColorImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一帧渲染管线最终渲染结果颜色附件纹理ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputDepthImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧渲染管线最终渲染结果深度附件纹理ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadingRateImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于生成着色率图信息的纹理ID，需用户创建并输入。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386797)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纹理类型需要是GL_TEXTURE_2D且mipLevels为1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_enumeratedeviceextensionproperties",
      children: "HMS_XEG_EnumerateDeviceExtensionProperties()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t * pPropertyCount, XEG_ExtensionProperties * pProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Vulkan扩展特性查询接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "physicalDevice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前使用的Vulkan物理设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pPropertyCount"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询或传入扩展特性的数量，当", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "pProperties"
              })
            }), "为nullptr时返回当前支持的XEngine扩展特性数量。 当传入的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "propertyCount"
              })
            }), "大于或等于真实支持的XEngine扩展特性数量时，通过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "pProperties"
              })
            }), "返回查询信息，返回结果为VK_SUCCESS。 当传入的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "propertyCount"
              })
            }), "小于真实支持的XEngine扩展特性数量时，通过", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "pProperties"
              })
            }), "返回查询信息，但返回结果为VK_INCOMPLETE。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pProperties"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询到的XEngine扩展特性，通过结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-extensionproperties/xengine-kit-xeg-extensionproperties",
              children: "XEG_ExtensionProperties"
            }), "指针返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["返回VkResult类型错误码，查询成功时返回值为VK_SUCCESS。 当", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "pProperties"
        })
      }), "不为nullptr且传入的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "propertyCount"
        })
      }), "小于实际支持的XEngine扩展特性数量时返回值为VK_INCOMPLETE，表示查询特性不完整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_getstring",
      children: "HMS_XEG_GetString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const GLubyte* HMS_XEG_GetString (GLenum name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine OpenGL ES扩展特性查询接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_extensions",
              children: "XEG_EXTENSIONS"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当参数为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#xeg_extensions",
        children: "XEG_EXTENSIONS"
      }), "时，返回XEngine支持的空格分隔的扩展列表，注意扩展名不包含空格字符。查询结果异常则返回空。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_neuralupscaleparameter",
      children: "HMS_XEG_NeuralUpscaleParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_NeuralUpscaleParameter (GLenum pname, GLvoid * param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置空域AI超分输入参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_scissor",
              children: "XEG_NEURAL_UPSCALE_SCISSOR"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_sharpness",
              children: "XEG_NEURAL_UPSCALE_SHARPNESS"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_neural_upscale_input_handle",
              children: "XEG_NEURAL_UPSCALE_INPUT_HANDLE"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_renderneuralupscale",
      children: "HMS_XEG_RenderNeuralUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_RenderNeuralUpscale (GLuint inputTexture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行空域AI超分渲染命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputTexture"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，纹理的宽度取值范围是[448, 1728]，否则可能会引起AI推理结果错误。此输入纹理必须是由OH_NativeBuffer创建的，并需要在调用此接口前将OH_NativeBuffer对应的handle设置为超分的输入参数，详见接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_xeg_neuralupscaleparameter",
              children: "HMS_XEG_NeuralUpscaleParameter"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_renderspatialupscale",
      children: "HMS_XEG_RenderSpatialUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_RenderSpatialUpscale (GLuint inputTexture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行空域GPU超分渲染命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。此纹理必须在调用此接口前创建好，否则会导致渲染失败，如黑屏问题。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_rendertemporalupscale",
      children: "HMS_XEG_RenderTemporalUpscale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_RenderTemporalUpscale (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行时域AI超分渲染命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，支持的最大尺寸为2048 * 1024。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "depthTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度纹理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "motionVectorTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dynamicMaskTexture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "物体的动态遮罩图像，格式需要是GL_RED或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jitterX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机在X方向上的抖动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jitterY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机在Y方向上的抖动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_spatialupscaleparameter",
      children: "HMS_XEG_SpatialUpscaleParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_SpatialUpscaleParameter (GLenum pname, GLvoid * param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置空域GPU超分输入参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_scissor",
              children: "XEG_SPATIAL_UPSCALE_SCISSOR"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_spatial_upscale_sharpness",
              children: "XEG_SPATIAL_UPSCALE_SHARPNESS"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_xeg_temporalupscaleparameter",
      children: "HMS_XEG_TemporalUpscaleParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GL_APICALL void GL_APIENTRY HMS_XEG_TemporalUpscaleParameter (GLenum pname, const GLvoid * param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置时域AI超分输入参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pname"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数的枚举名，取值范围为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_input_size",
              children: "XEG_TEMPORAL_UPSCALE_INPUT_SIZE"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_jitter_num",
              children: "XEG_TEMPORAL_UPSCALE_JITTER_NUM"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_depth_reversed",
              children: "XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_reset_history",
              children: "XEG_TEMPORAL_UPSCALE_RESET_HISTORY"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#xeg_temporal_upscale_steady_level",
              children: "XEG_TEMPORAL_UPSCALE_STEADY_LEVEL"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数的值，取值详见输入参数枚举名的说明。"
          })]
        })]
      })]
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
386797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
659521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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