"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["286341"], {
453930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_cann_api_hiai_foundation_c_cannkit_index_cannkit_cannkit_md_add_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-cann-api-hiai-foundation-c-cannkit-index-cannkit-cannkit-md-add.json
var site_docs_ref_cann_api_hiai_foundation_c_cannkit_index_cannkit_cannkit_md_add_namespaceObject = JSON.parse('{"id":"cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit","title":"CANN","description":"概述","source":"@site/docs-ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit.md","sourceDirName":"cann-api/hiai-foundation-c/cannkit-index/cannkit","slug":"/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"CANN","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit","kit":"AI","last_updated":"2026-04-22","slug":"cannkit"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/harmony-agent-framework-api/hmaf-error-code/hmaf-error-code"},"next":{"title":"hiai_aipp_param.h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit.md


const frontMatter = {
	title: 'CANN',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'cannkit'
};
const contentTitle = 'CANN';

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
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "HiAI_AippParam",
  "id": "hiai_aippparam",
  "level": 3
}, {
  "value": "HiAI_SingleOpBuffer",
  "id": "hiai_singleopbuffer",
  "level": 3
}, {
  "value": "HiAI_SingleOpDescriptor",
  "id": "hiai_singleopdescriptor",
  "level": 3
}, {
  "value": "HiAISingleOpDescriptor_ConvolutionParam",
  "id": "hiaisingleopdescriptor_convolutionparam",
  "level": 3
}, {
  "value": "HiAI_SingleOpExecutor",
  "id": "hiai_singleopexecutor",
  "level": 3
}, {
  "value": "HiAI_SingleOpExecutorConvolutionParam",
  "id": "hiai_singleopexecutorconvolutionparam",
  "level": 3
}, {
  "value": "HiAI_SingleOpExecutorFusedConvolutionActivationParam",
  "id": "hiai_singleopexecutorfusedconvolutionactivationparam",
  "level": 3
}, {
  "value": "HiAI_SingleOpOptions",
  "id": "hiai_singleopoptions",
  "level": 3
}, {
  "value": "HiAI_SingleOpTensor",
  "id": "hiai_singleoptensor",
  "level": 3
}, {
  "value": "HiAI_SingleOpTensorDesc",
  "id": "hiai_singleoptensordesc",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "HiAI_BandMode",
  "id": "hiai_bandmode",
  "level": 3
}, {
  "value": "HiAI_Compatibility",
  "id": "hiai_compatibility",
  "level": 3
}, {
  "value": "HiAI_DeviceMemoryReusePlan",
  "id": "hiai_devicememoryreuseplan",
  "level": 3
}, {
  "value": "HiAI_DynamicShapeCacheMode",
  "id": "hiai_dynamicshapecachemode",
  "level": 3
}, {
  "value": "HiAI_DynamicShapeStatus",
  "id": "hiai_dynamicshapestatus",
  "level": 3
}, {
  "value": "HiAI_ExecuteDevice",
  "id": "hiai_executedevice",
  "level": 3
}, {
  "value": "HiAI_FallbackMode",
  "id": "hiai_fallbackmode",
  "level": 3
}, {
  "value": "HiAI_FormatMode",
  "id": "hiai_formatmode",
  "level": 3
}, {
  "value": "HiAI_ImageColorSpace",
  "id": "hiai_imagecolorspace",
  "level": 3
}, {
  "value": "HiAI_ImageFormat",
  "id": "hiai_imageformat",
  "level": 3
}, {
  "value": "HiAI_OmType",
  "id": "hiai_omtype",
  "level": 3
}, {
  "value": "HiAI_SingleOpActivationType",
  "id": "hiai_singleopactivationtype",
  "level": 3
}, {
  "value": "HiAI_SingleOpConvMode",
  "id": "hiai_singleopconvmode",
  "level": 3
}, {
  "value": "HiAI_SingleOpDataType",
  "id": "hiai_singleopdatatype",
  "level": 3
}, {
  "value": "HiAI_SingleOpFormat",
  "id": "hiai_singleopformat",
  "level": 3
}, {
  "value": "HiAI_SingleOpPadMode",
  "id": "hiai_singleoppadmode",
  "level": 3
}, {
  "value": "HiAI_SingleOpSupportStatus",
  "id": "hiai_singleopsupportstatus",
  "level": 3
}, {
  "value": "HiAI_TuningMode",
  "id": "hiai_tuningmode",
  "level": 3
}, {
  "value": "HiAI_TuningStrategy",
  "id": "hiai_tuningstrategy",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_HiAI_GetVersion()",
  "id": "hms_hiai_getversion",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_Create()",
  "id": "hms_hiaiaippparam_create",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_Destroy()",
  "id": "hms_hiaiaippparam_destroy",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetBatchCount()",
  "id": "hms_hiaiaippparam_getbatchcount",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetChannelPadding()",
  "id": "hms_hiaiaippparam_getchannelpadding",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetChannelSwapConfig()",
  "id": "hms_hiaiaippparam_getchannelswapconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetCropConfig()",
  "id": "hms_hiaiaippparam_getcropconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetCscConfig()",
  "id": "hms_hiaiaippparam_getcscconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetData()",
  "id": "hms_hiaiaippparam_getdata",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetDataSize()",
  "id": "hms_hiaiaippparam_getdatasize",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetDtcMeanPixel()",
  "id": "hms_hiaiaippparam_getdtcmeanpixel",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetDtcMinPixel()",
  "id": "hms_hiaiaippparam_getdtcminpixel",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetDtcVarReciPixel()",
  "id": "hms_hiaiaippparam_getdtcvarrecipixel",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetInputAippIndex()",
  "id": "hms_hiaiaippparam_getinputaippindex",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetInputFormat()",
  "id": "hms_hiaiaippparam_getinputformat",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetInputIndex()",
  "id": "hms_hiaiaippparam_getinputindex",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetInputShape()",
  "id": "hms_hiaiaippparam_getinputshape",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetPadConfig()",
  "id": "hms_hiaiaippparam_getpadconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetResizeConfig()",
  "id": "hms_hiaiaippparam_getresizeconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetRotationAngle()",
  "id": "hms_hiaiaippparam_getrotationangle",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_GetSingleBatchMultiCrop()",
  "id": "hms_hiaiaippparam_getsinglebatchmulticrop",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetChannelPadding()",
  "id": "hms_hiaiaippparam_setchannelpadding",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetChannelSwapConfig()",
  "id": "hms_hiaiaippparam_setchannelswapconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetCropConfig()",
  "id": "hms_hiaiaippparam_setcropconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetCscConfig()",
  "id": "hms_hiaiaippparam_setcscconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetDtcMeanPixel()",
  "id": "hms_hiaiaippparam_setdtcmeanpixel",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetDtcMinPixel()",
  "id": "hms_hiaiaippparam_setdtcminpixel",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetDtcVarReciPixel()",
  "id": "hms_hiaiaippparam_setdtcvarrecipixel",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetInputAippIndex()",
  "id": "hms_hiaiaippparam_setinputaippindex",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetInputFormat()",
  "id": "hms_hiaiaippparam_setinputformat",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetInputIndex()",
  "id": "hms_hiaiaippparam_setinputindex",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetInputShape()",
  "id": "hms_hiaiaippparam_setinputshape",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetPadConfig()",
  "id": "hms_hiaiaippparam_setpadconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetResizeConfig()",
  "id": "hms_hiaiaippparam_setresizeconfig",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetRotationAngle()",
  "id": "hms_hiaiaippparam_setrotationangle",
  "level": 3
}, {
  "value": "HMS_HiAIAippParam_SetSingleBatchMultiCrop()",
  "id": "hms_hiaiaippparam_setsinglebatchmulticrop",
  "level": 3
}, {
  "value": "HMS_HiAICompatibility_CheckFromBuffer()",
  "id": "hms_hiaicompatibility_checkfrombuffer",
  "level": 3
}, {
  "value": "HMS_HiAICompatibility_CheckFromFile()",
  "id": "hms_hiaicompatibility_checkfromfile",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetBandMode()",
  "id": "hms_hiaioptions_getbandmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetDeviceMemoryReusePlan()",
  "id": "hms_hiaioptions_getdevicememoryreuseplan",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetDynamicShapeCacheMode()",
  "id": "hms_hiaioptions_getdynamicshapecachemode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetDynamicShapeMaxCache()",
  "id": "hms_hiaioptions_getdynamicshapemaxcache",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetDynamicShapeStatus()",
  "id": "hms_hiaioptions_getdynamicshapestatus",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetFallbackMode()",
  "id": "hms_hiaioptions_getfallbackmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetFormatMode()",
  "id": "hms_hiaioptions_getformatmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetInputTensorShape()",
  "id": "hms_hiaioptions_getinputtensorshape",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetInputTensorShapeSize()",
  "id": "hms_hiaioptions_getinputtensorshapesize",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetModelDeviceCount()",
  "id": "hms_hiaioptions_getmodeldevicecount",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetModelDeviceOrder()",
  "id": "hms_hiaioptions_getmodeldeviceorder",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetOperatorDeviceCount()",
  "id": "hms_hiaioptions_getoperatordevicecount",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetOperatorDeviceOrder()",
  "id": "hms_hiaioptions_getoperatordeviceorder",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetQuantConfigData()",
  "id": "hms_hiaioptions_getquantconfigdata",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetQuantConfigSize()",
  "id": "hms_hiaioptions_getquantconfigsize",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetTuningCacheDir()",
  "id": "hms_hiaioptions_gettuningcachedir",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetTuningMode()",
  "id": "hms_hiaioptions_gettuningmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_GetTuningStrategy()",
  "id": "hms_hiaioptions_gettuningstrategy",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetBandMode()",
  "id": "hms_hiaioptions_setbandmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetDeviceMemoryReusePlan()",
  "id": "hms_hiaioptions_setdevicememoryreuseplan",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetDynamicShapeCacheMode()",
  "id": "hms_hiaioptions_setdynamicshapecachemode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetDynamicShapeMaxCache()",
  "id": "hms_hiaioptions_setdynamicshapemaxcache",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetDynamicShapeStatus()",
  "id": "hms_hiaioptions_setdynamicshapestatus",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetFallbackMode()",
  "id": "hms_hiaioptions_setfallbackmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetFormatMode()",
  "id": "hms_hiaioptions_setformatmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetInputTensorShapes()",
  "id": "hms_hiaioptions_setinputtensorshapes",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetModelDeviceOrder()",
  "id": "hms_hiaioptions_setmodeldeviceorder",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetOmOptions()",
  "id": "hms_hiaioptions_setomoptions",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetOperatorDeviceOrder()",
  "id": "hms_hiaioptions_setoperatordeviceorder",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetQuantConfig()",
  "id": "hms_hiaioptions_setquantconfig",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetTuningCacheDir()",
  "id": "hms_hiaioptions_settuningcachedir",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetTuningMode()",
  "id": "hms_hiaioptions_settuningmode",
  "level": 3
}, {
  "value": "HMS_HiAIOptions_SetTuningStrategy()",
  "id": "hms_hiaioptions_settuningstrategy",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpBuffer_Create()",
  "id": "hms_hiaisingleopbuffer_create",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpBuffer_Destroy()",
  "id": "hms_hiaisingleopbuffer_destroy",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpBuffer_GetData()",
  "id": "hms_hiaisingleopbuffer_getdata",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpBuffer_GetSize()",
  "id": "hms_hiaisingleopbuffer_getsize",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpDescriptor_CreateActivation()",
  "id": "hms_hiaisingleopdescriptor_createactivation",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpDescriptor_CreateConvolution()",
  "id": "hms_hiaisingleopdescriptor_createconvolution",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpDescriptor_Destroy()",
  "id": "hms_hiaisingleopdescriptor_destroy",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_CreateConvolution()",
  "id": "hms_hiaisingleopexecutor_createconvolution",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation()",
  "id": "hms_hiaisingleopexecutor_createfusedconvolutionactivation",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_Destroy()",
  "id": "hms_hiaisingleopexecutor_destroy",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_Execute()",
  "id": "hms_hiaisingleopexecutor_execute",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_GetWorkspaceSize()",
  "id": "hms_hiaisingleopexecutor_getworkspacesize",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_Init()",
  "id": "hms_hiaisingleopexecutor_init",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_PreCheckConvolution()",
  "id": "hms_hiaisingleopexecutor_precheckconvolution",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_PreCheckFusedConvolutionActivation()",
  "id": "hms_hiaisingleopexecutor_precheckfusedconvolutionactivation",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc()",
  "id": "hms_hiaisingleopexecutor_updateoutputtensordesc",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpOptions_Create()",
  "id": "hms_hiaisingleopoptions_create",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpOptions_Destroy()",
  "id": "hms_hiaisingleopoptions_destroy",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensor_CreateFromConst()",
  "id": "hms_hiaisingleoptensor_createfromconst",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensor_CreateFromSingleOpBuffer()",
  "id": "hms_hiaisingleoptensor_createfromsingleopbuffer",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensor_CreateFromTensorDesc()",
  "id": "hms_hiaisingleoptensor_createfromtensordesc",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensor_Destroy()",
  "id": "hms_hiaisingleoptensor_destroy",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensor_GetBuffer()",
  "id": "hms_hiaisingleoptensor_getbuffer",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensor_GetTensorDesc()",
  "id": "hms_hiaisingleoptensor_gettensordesc",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_Create()",
  "id": "hms_hiaisingleoptensordesc_create",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_Destroy()",
  "id": "hms_hiaisingleoptensordesc_destroy",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_GetByteSize()",
  "id": "hms_hiaisingleoptensordesc_getbytesize",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_GetDataType()",
  "id": "hms_hiaisingleoptensordesc_getdatatype",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_GetDimension()",
  "id": "hms_hiaisingleoptensordesc_getdimension",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_GetDimensionCount()",
  "id": "hms_hiaisingleoptensordesc_getdimensioncount",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_GetFormat()",
  "id": "hms_hiaisingleoptensordesc_getformat",
  "level": 3
}, {
  "value": "HMS_HiAISingleOpTensorDesc_IsVirtual()",
  "id": "hms_hiaisingleoptensordesc_isvirtual",
  "level": 3
}, {
  "value": "HMS_HiAITensor_GetSizeWithImageFormat()",
  "id": "hms_hiaitensor_getsizewithimageformat",
  "level": 3
}, {
  "value": "HMS_HiAITensor_SetAippParams()",
  "id": "hms_hiaitensor_setaippparams",
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
        id: "cann",
        children: "CANN"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供CANN Kit模型推理的相关接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.HiAIFoundation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(434584)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CANN Kit的模型编译、加载、推理等基础功能接口已抽取放在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h",
        children: "neural_network_core.h"
      }), "中，此处重点描述高阶功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-aipp-param-8h/cannkit-hiai-aipp-param-8h",
              children: "hiai_aipp_param.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理时动态AIPP对象创建，参数设置和查询的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-helper-8h/cannkit-hiai-helper-8h",
              children: "hiai_helper.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询CANN Kit版本以及检查模型支持情况的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h/cannkit-hiai-options-8h",
              children: "hiai_options.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选项参数的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h",
              children: "hiai_single_op.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义CANN Kit单算子接口，用于单算子的创建、计算以及Tensor和Buffer的管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h/cannkit-hiai-tensor-8h",
              children: "hiai_tensor.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理时使用的输入输出内存相关的辅助接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam",
              children: "HiAISingleOpDescriptor_ConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopdescriptor_createconvolution",
              children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_createconvolution",
              children: "HMS_HiAISingleOpExecutor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
            }), "输入参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIPP参数对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子Tensor描述的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子Buffer句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子Tensor句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子选项句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子的算子描述句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam",
              children: "HiAISingleOpDescriptor_ConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopdescriptor_createconvolution",
              children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_createconvolution",
              children: "HMS_HiAISingleOpExecutor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子执行器句柄。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " {  HIAI_YUV420SP_U8 = 0,  HIAI_XRGB8888_U8 = 1,  HIAI_YUV400_U8 = 2,  HIAI_ARGB8888_U8 = 3,  HIAI_YUYV_U8 = 4,  HIAI_YUV422SP_U8 = 5,  HIAI_AYUV444_U8 = 6,  HIAI_RGB888_U8 = 7,  HIAI_BGR888_U8 = 8,  HIAI_YUV444SP_U8 = 9,  HIAI_YVU444SP_U8 = 10,  HIAI_IMAGE_FORMAT_INVALID = 255  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CANN Kit推理支持的输入和输出Tensor的图片格式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), " {  HIAI_JPEG = 0,  HIAI_BT_601_NARROW = 1,  HIAI_BT_601_FULL = 2,  HIAI_BT_709_NARROW = 3,  HIAI_IMAGE_COLOR_SPACE_INVALID = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像色域空间类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_compatibility",
              children: "HiAI_Compatibility"
            }), " {  HIAI_COMPATIBILITY_COMPATIBLE = 0,  HIAI_COMPATIBILITY_INCOMPATIBLE = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译后模型兼容性结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_formatmode",
              children: "HiAI_FormatMode"
            }), " {  HIAI_FORMAT_MODE_NCHW = 0,  HIAI_FORMAT_MODE_ORIGIN = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型编译时数据的排列格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapestatus",
              children: "HiAI_DynamicShapeStatus"
            }), " {  HIAI_DYNAMIC_SHAPE_DISABLED = 0,  HIAI_DYNAMIC_SHAPE_ENABLED = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能编译前可变shape。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapecachemode",
              children: "HiAI_DynamicShapeCacheMode"
            }), " {  HIAI_DYNAMIC_SHAPE_CACHE_BUILT_MODEL = 0,  HIAI_DYNAMIC_SHAPE_CACHE_LOADED_MODEL = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译前可变shape支持的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " {  HIAI_EXECUTE_DEVICE_NPU = 0,  HIAI_EXECUTE_DEVICE_CPU = 1,  HIAI_EXECUTE_DEVICE_GPU = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型运行时支持的设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_fallbackmode",
              children: "HiAI_FallbackMode"
            }), " {  HIAI_FALLBACK_ENABLED = 0,  HIAI_FALLBACK_DISABLED = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的硬件设备无法编译模型时，是否允许CANN Kit选择其他硬件设备，例如CPU。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_devicememoryreuseplan",
              children: "HiAI_DeviceMemoryReusePlan"
            }), " { HIAI_DEVICE_MEMORY_REUSE_PLAN_UNSET = 0,  HIAI_DEVICE_MEMORY_REUSE_PLAN_LOW = 1,  HIAI_DEVICE_MEMORY_REUSE_PLAN_HIGH = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备内存复用配置选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningstrategy",
              children: "HiAI_TuningStrategy"
            }), " {  HIAI_TUNING_STRATEGY_OFF = 0,  HIAI_TUNING_STRATEGY_ON_DEVICE_TUNING = 1,  HIAI_TUNING_STRATEGY_ON_DEVICE_PREPROCESS_TUNING = 2,  HIAI_TUNING_STRATEGY_ON_CLOUD_TUNING = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型优化策略配置选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningmode",
              children: "HiAI_TuningMode"
            }), " {  HIAI_TUNING_MODE_UNSET = 0,  HIAI_TUNING_MODE_AUTO = 1,  HIAI_TUNING_MODE_HETER = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助调优模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_bandmode",
              children: "HiAI_BandMode"
            }), " {  HIAI_BANDMODE_UNSET = 0,  HIAI_BANDMODE_LOW = 1,  HIAI_BANDMODE_NORMAL = 2,  HIAI_BANDMODE_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义硬件之间带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_omtype",
              children: "HiAI_OmType"
            }), " {  HIAI_OM_TYPE_OFF = 0,  HIAI_OM_TYPE_PROFILING = 1,  HIAI_OM_TYPE_DUMP = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维测类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdatatype",
              children: "HiAI_SingleOpDataType"
            }), " {  HIAI_SINGLEOP_DT_FLOAT = 0,  HIAI_SINGLEOP_DT_FLOAT16 = 1,  HIAI_SINGLEOP_DT_UNDEFINED = 17  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子张量数据类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopformat",
              children: "HiAI_SingleOpFormat"
            }), " {  HIAI_SINGLEOP_FORMAT_NCHW = 0,  HIAI_SINGLEOP_FORMAT_NHWC = 1,  HIAI_SINGLEOP_FORMAT_ND = 2,  HIAI_SINGLEOP_FORMAT_NC1HWC0 = 3,  HIAI_SINGLEOP_FORMAT_NC4HW4 = 28,  HIAI_SINGLEOP_FORMAT_NC8HW8 = 31,  HIAI_SINGLEOP_FORMAT_RESERVED = 255  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子张量排布格式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopconvmode",
              children: "HiAI_SingleOpConvMode"
            }), " {  HIAI_SINGLEOP_CONV_MODE_COMMON = 0,  HIAI_SINGLEOP_CONV_MODE_TRANSPOSED = 1,  HIAI_SINGLEOP_CONV_MODE_DEPTHWISE = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子卷积模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoppadmode",
              children: "HiAI_SingleOpPadMode"
            }), " {  HIAI_SINGLEOP_PAD_MODE_SPECIFIC = 0,  HIAI_SINGLEOP_PAD_MODE_SAME = 1,  HIAI_SINGLEOP_PAD_MODE_SAME_UPPER = 2,  HIAI_SINGLEOP_PAD_MODE_SAME_LOWER = 3,  HIAI_SINGLEOP_PAD_MODE_VALID = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子填充模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopactivationtype",
              children: "HiAI_SingleOpActivationType"
            }), " {  HIAI_SINGLEOP_ACTIVATION_TYPE_RELU = 0,  HIAI_SINGLEOP_ACTIVATION_TYPE_RELU6 = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子激活模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopsupportstatus",
              children: "HiAI_SingleOpSupportStatus"
            }), " {  HIAI_SINGLEOP_OPTIMIZED = 0,  HIAI_SINGLEOP_COMMON = 1,  HIAI_SINGLEOP_UNSUPPORTED = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子支持状态枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_create",
              children: "HMS_HiAIAippParam_Create"
            }), " (uint32_t batchNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据batchNum创建动态AippParam对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getdata",
              children: "HMS_HiAIAippParam_GetData"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取AippParam申请的内存地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getdatasize",
              children: "HMS_HiAIAippParam_GetDataSize"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取AippParam申请的内存大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getinputindex",
              children: "HMS_HiAIAippParam_GetInputIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象所在输入的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setinputindex",
              children: "HMS_HiAIAippParam_SetInputIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t inputIndex)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam在输入上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getinputaippindex",
              children: "HMS_HiAIAippParam_GetInputAippIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象在该输入的多个输出分支上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setinputaippindex",
              children: "HMS_HiAIAippParam_SetInputAippIndex"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t inputAippIndex)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象作用于该输入的多个输出分支上的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_destroy",
              children: "HMS_HiAIAippParam_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " **aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放AippParam对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setinputformat",
              children: "HMS_HiAIAippParam_SetInputFormat"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " inputFormat)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的输入图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getinputformat",
              children: "HMS_HiAIAippParam_GetInputFormat"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的输入图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setinputshape",
              children: "HMS_HiAIAippParam_SetInputShape"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t srcImageW, uint32_t srcImageH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的输入图像宽高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getinputshape",
              children: "HMS_HiAIAippParam_GetInputShape"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t *srcImageW, uint32_t *srcImageH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的输入图像宽高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getbatchcount",
              children: "HMS_HiAIAippParam_GetBatchCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的图像数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setcscconfig",
              children: "HMS_HiAIAippParam_SetCscConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " inputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " outputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), " space)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的CSC色域转换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getcscconfig",
              children: "HMS_HiAIAippParam_GetCscConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " *inputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " *outputFormat, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), " *space)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的CSC色域转换相关参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setchannelswapconfig",
              children: "HMS_HiAIAippParam_SetChannelSwapConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, bool rbuvSwapSwitch, bool axSwapSwitch)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的ChannelSwap通道交换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getchannelswapconfig",
              children: "HMS_HiAIAippParam_GetChannelSwapConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, bool *rbuvSwapSwitch, bool *axSwapSwitch)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的ChannelSwap通道交换参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setsinglebatchmulticrop",
              children: "HMS_HiAIAippParam_SetSingleBatchMultiCrop"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, bool singleBatchMultiCrop)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的SingleBatchMultiCrop标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getsinglebatchmulticrop",
              children: "HMS_HiAIAippParam_GetSingleBatchMultiCrop"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的SingleBatchMultiCrop标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setcropconfig",
              children: "HMS_HiAIAippParam_SetCropConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t startPosW, uint32_t startPosH, uint32_t croppedW, uint32_t croppedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的裁剪参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getcropconfig",
              children: "HMS_HiAIAippParam_GetCropConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t *startPosW, uint32_t *startPosH, uint32_t *croppedW, uint32_t *croppedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的裁剪参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setresizeconfig",
              children: "HMS_HiAIAippParam_SetResizeConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t resizedW, uint32_t resizedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的图像缩放参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getresizeconfig",
              children: "HMS_HiAIAippParam_GetResizeConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t *resizedW, uint32_t *resizedH)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的图像缩放参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setpadconfig",
              children: "HMS_HiAIAippParam_SetPadConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t leftPadSize, uint32_t rightPadSize, uint32_t topPadSize, uint32_t bottomPadSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的输入图像的填充像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getpadconfig",
              children: "HMS_HiAIAippParam_GetPadConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t *leftPadSize, uint32_t *rightPadSize, uint32_t *topPadSize, uint32_t *bottomPadSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的输入图像的填充像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setchannelpadding",
              children: "HMS_HiAIAippParam_SetChannelPadding"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t paddingValues[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的通道padding填充值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getchannelpadding",
              children: "HMS_HiAIAippParam_GetChannelPadding"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t paddingValues[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的通道padding填充值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setrotationangle",
              children: "HMS_HiAIAippParam_SetRotationAngle"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float rotationAngle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getrotationangle",
              children: "HMS_HiAIAippParam_GetRotationAngle"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float *rotationAngle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的图像旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setdtcmeanpixel",
              children: "HMS_HiAIAippParam_SetDtcMeanPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t meanPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的数据类型转换通道像素平均值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getdtcmeanpixel",
              children: "HMS_HiAIAippParam_GetDtcMeanPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, uint32_t meanPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的数据类型转换通道像素平均值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setdtcminpixel",
              children: "HMS_HiAIAippParam_SetDtcMinPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float minPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的数据类型转换通道像素最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getdtcminpixel",
              children: "HMS_HiAIAippParam_GetDtcMinPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float minPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的数据类型转换通道像素最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_setdtcvarrecipixel",
              children: "HMS_HiAIAippParam_SetDtcVarReciPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float varReciPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置AippParam对象的数据类型转换通道像素方差。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaiaippparam_getdtcvarrecipixel",
              children: "HMS_HiAIAippParam_GetDtcVarReciPixel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParam, uint32_t batchIndex, float varReciPixel[], uint32_t channelCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询AippParam对象的数据类型转换通道像素方差。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiai_getversion",
              children: "HMS_HiAI_GetVersion"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取CANN Kit版本号，并通过返回模板hiaiversion A1A2A3.X1X2X3.Y1Y2Y3.Z1Z2Z3指定X1是否为0来区分是否支持NPU。若X1为0，则表示不支持NPU；若X1为非0，则表示支持NPU。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_compatibility",
              children: "HiAI_Compatibility"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaicompatibility_checkfromfile",
              children: "HMS_HiAICompatibility_CheckFromFile"
            }), " (const char *file)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译后储存在文件中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_compatibility",
              children: "HiAI_Compatibility"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaicompatibility_checkfrombuffer",
              children: "HMS_HiAICompatibility_CheckFromBuffer"
            }), " (const void *data, size_t size)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译后储存在内存中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setinputtensorshapes",
              children: "HMS_HiAIOptions_SetInputTensorShapes"
            }), " (OH_NNCompilation *compilation, NN_TensorDesc *inputTensorDescs[], size_t shapeCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译时更新模型输入shape。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getinputtensorshapesize",
              children: "HMS_HiAIOptions_GetInputTensorShapeSize"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询选项参数中shape描述的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["NN_TensorDesc * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getinputtensorshape",
              children: "HMS_HiAIOptions_GetInputTensorShape"
            }), " (const OH_NNCompilation *compilation, size_t index)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询选项参数中指定索引的shape描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setformatmode",
              children: "HMS_HiAIOptions_SetFormatMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_formatmode",
              children: "HiAI_FormatMode"
            }), " formatMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型编译时的数据排列格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_formatmode",
              children: "HiAI_FormatMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getformatmode",
              children: "HMS_HiAIOptions_GetFormatMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型编译参数中的数据排列格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setdynamicshapestatus",
              children: "HMS_HiAIOptions_SetDynamicShapeStatus"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapestatus",
              children: "HiAI_DynamicShapeStatus"
            }), " status)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编译前可变shape配置中的EnableMode参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setdynamicshapemaxcache",
              children: "HMS_HiAIOptions_SetDynamicShapeMaxCache"
            }), " (OH_NNCompilation *compilation, size_t maxCacheCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编译前可变shape配置中的最大缓存编译后模型数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setdynamicshapecachemode",
              children: "HMS_HiAIOptions_SetDynamicShapeCacheMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapecachemode",
              children: "HiAI_DynamicShapeCacheMode"
            }), " mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编译前可变shape配置中的缓存模式参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapestatus",
              children: "HiAI_DynamicShapeStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getdynamicshapestatus",
              children: "HMS_HiAIOptions_GetDynamicShapeStatus"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译前可变shape配置中的状态参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getdynamicshapemaxcache",
              children: "HMS_HiAIOptions_GetDynamicShapeMaxCache"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译前可变shape配置中的最大缓存数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapecachemode",
              children: "HiAI_DynamicShapeCacheMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getdynamicshapecachemode",
              children: "HMS_HiAIOptions_GetDynamicShapeCacheMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询编译前可变shape配置中的cacheMode参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setoperatordeviceorder",
              children: "HMS_HiAIOptions_SetOperatorDeviceOrder"
            }), " (OH_NNCompilation *compilation, const char *operatorName, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " *executeDevices, size_t deviceCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置算子级调优配置中算子执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getoperatordevicecount",
              children: "HMS_HiAIOptions_GetOperatorDeviceCount"
            }), " (const OH_NNCompilation *compilation, const char *operatorName)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询算子级调优配置中指定算子的执行设备个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getoperatordeviceorder",
              children: "HMS_HiAIOptions_GetOperatorDeviceOrder"
            }), " (const OH_NNCompilation *compilation, const char *operatorName)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询算子级调优配置中指定算子的执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setmodeldeviceorder",
              children: "HMS_HiAIOptions_SetModelDeviceOrder"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " *executeDevices, size_t deviceCount)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型级调优配置中模型执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getmodeldevicecount",
              children: "HMS_HiAIOptions_GetModelDeviceCount"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型级调优配置中模型的执行设备个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getmodeldeviceorder",
              children: "HMS_HiAIOptions_GetModelDeviceOrder"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型级调优配置中模型的执行设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setfallbackmode",
              children: "HMS_HiAIOptions_SetFallbackMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_fallbackmode",
              children: "HiAI_FallbackMode"
            }), " fallbackMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置调优配置中的回滚模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_fallbackmode",
              children: "HiAI_FallbackMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getfallbackmode",
              children: "HMS_HiAIOptions_GetFallbackMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询调优配置中的回滚模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setdevicememoryreuseplan",
              children: "HMS_HiAIOptions_SetDeviceMemoryReusePlan"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_devicememoryreuseplan",
              children: "HiAI_DeviceMemoryReusePlan"
            }), " deviceMemoryReusePlan)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置调优配置中的设备内存复用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_devicememoryreuseplan",
              children: "HiAI_DeviceMemoryReusePlan"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getdevicememoryreuseplan",
              children: "HMS_HiAIOptions_GetDeviceMemoryReusePlan"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询调优配置中的设备内存复用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_settuningstrategy",
              children: "HMS_HiAIOptions_SetTuningStrategy"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningstrategy",
              children: "HiAI_TuningStrategy"
            }), " tuningStrategy)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型编译时的模型优化策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningstrategy",
              children: "HiAI_TuningStrategy"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_gettuningstrategy",
              children: "HMS_HiAIOptions_GetTuningStrategy"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询模型优化策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setquantconfig",
              children: "HMS_HiAIOptions_SetQuantConfig"
            }), " (OH_NNCompilation *compilation, void *data, size_t size)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型编译时量化配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getquantconfigdata",
              children: "HMS_HiAIOptions_GetQuantConfigData"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询量化配置的数据地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getquantconfigsize",
              children: "HMS_HiAIOptions_GetQuantConfigSize"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询量化配置的数据大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_settuningmode",
              children: "HMS_HiAIOptions_SetTuningMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningmode",
              children: "HiAI_TuningMode"
            }), " tuningMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择辅助调优模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_settuningcachedir",
              children: "HMS_HiAIOptions_SetTuningCacheDir"
            }), " (OH_NNCompilation *compilation, const char *cacheDir)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置辅助调优的缓存目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningmode",
              children: "HiAI_TuningMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_gettuningmode",
              children: "HMS_HiAIOptions_GetTuningMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询辅助调优模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_gettuningcachedir",
              children: "HMS_HiAIOptions_GetTuningCacheDir"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询辅助调优的缓存目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setbandmode",
              children: "HMS_HiAIOptions_SetBandMode"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_bandmode",
              children: "HiAI_BandMode"
            }), " bandMode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置NPU与周边硬件IO资源的带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_bandmode",
              children: "HiAI_BandMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getbandmode",
              children: "HMS_HiAIOptions_GetBandMode"
            }), " (const OH_NNCompilation *compilation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_setomoptions",
              children: "HMS_HiAIOptions_SetOmOptions"
            }), " (OH_NNCompilation *compilation, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_omtype",
              children: "HiAI_OmType"
            }), " type, const char *outputDir)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型加载时的维测选项信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_create",
              children: "HMS_HiAISingleOpTensorDesc_Create"
            }), " (const int64_t *dims, size_t dimNum, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdatatype",
              children: "HiAI_SingleOpDataType"
            }), " dataType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopformat",
              children: "HiAI_SingleOpFormat"
            }), " format, bool isVirtual)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_getdimensioncount",
              children: "HMS_HiAISingleOpTensorDesc_GetDimensionCount"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的维度数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int64_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_getdimension",
              children: "HMS_HiAISingleOpTensorDesc_GetDimension"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc, size_t index)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "指定索引的维度长度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdatatype",
              children: "HiAI_SingleOpDataType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_getdatatype",
              children: "HMS_HiAISingleOpTensorDesc_GetDataType"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的数据类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopformat",
              children: "HiAI_SingleOpFormat"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_getformat",
              children: "HMS_HiAISingleOpTensorDesc_GetFormat"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的排布格式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_isvirtual",
              children: "HMS_HiAISingleOpTensorDesc_IsVirtual"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "是否为虚拟张量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_getbytesize",
              children: "HMS_HiAISingleOpTensorDesc_GetByteSize"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询基于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的维度和数据类型计算的数据占用字节数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensordesc_destroy",
              children: "HMS_HiAISingleOpTensorDesc_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " **tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopbuffer_create",
              children: "HMS_HiAISingleOpBuffer_Create"
            }), " (size_t dataSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照指定的内存大小创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopbuffer_getsize",
              children: "HMS_HiAISingleOpBuffer_GetSize"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " *buffer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "的字节大小。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopbuffer_getdata",
              children: "HMS_HiAISingleOpBuffer_GetData"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " *buffer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "的内存地址。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopbuffer_destroy",
              children: "HMS_HiAISingleOpBuffer_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " **buffer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensor_createfromtensordesc",
              children: "HMS_HiAISingleOpTensor_CreateFromTensorDesc"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *desc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensor_createfromsingleopbuffer",
              children: "HMS_HiAISingleOpTensor_CreateFromSingleOpBuffer"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *desc, void *data, size_t dataSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "的内存地址和数据大小创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensor_createfromconst",
              children: "HMS_HiAISingleOpTensor_CreateFromConst"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *desc, void *data, size_t dataSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "、常量数据（如卷积权重、偏置等）的内存地址和数据大小创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensor_gettensordesc",
              children: "HMS_HiAISingleOpTensor_GetTensorDesc"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *tensor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "的Tensor描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensor_getbuffer",
              children: "HMS_HiAISingleOpTensor_GetBuffer"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *tensor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "的Buffer。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleoptensor_destroy",
              children: "HMS_HiAISingleOpTensor_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " **tensor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopoptions_create",
              children: "HMS_HiAISingleOpOptions_Create"
            }), " (void)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopoptions_destroy",
              children: "HMS_HiAISingleOpOptions_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), " **options)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopdescriptor_createconvolution",
              children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam",
              children: "HiAISingleOpDescriptor_ConvolutionParam"
            }), " param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建卷积类（普通卷积、转置卷积、深度卷积）的描述符对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopdescriptor_createactivation",
              children: "HMS_HiAISingleOpDescriptor_CreateActivation"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopactivationtype",
              children: "HiAI_SingleOpActivationType"
            }), " activationType, float coef)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建激活函数类的描述符对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopdescriptor_destroy",
              children: "HMS_HiAISingleOpDescriptor_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " **opDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopsupportstatus",
              children: "HiAI_SingleOpSupportStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_precheckconvolution",
              children: "HMS_HiAISingleOpExecutor_PreCheckConvolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            }), " param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预查询卷积算子的支持状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopsupportstatus",
              children: "HiAI_SingleOpSupportStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_precheckfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_PreCheckFusedConvolutionActivation"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            }), " param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预查询卷积和激活融合算子的支持状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_createconvolution",
              children: "HMS_HiAISingleOpExecutor_CreateConvolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            }), " param)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建卷积类算子对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            }), " param)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建卷积和激活融合算子对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_updateoutputtensordesc",
              children: "HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor, uint32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *output)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "的输出tensor描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_getworkspacesize",
              children: "HMS_HiAISingleOpExecutor_GetWorkspaceSize"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "所需的ION内存工作空间的字节大小。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_init",
              children: "HMS_HiAISingleOpExecutor_Init"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor, void *workspace, size_t workspaceSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加载", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_execute",
              children: "HMS_HiAISingleOpExecutor_Execute"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *input[], int32_t inputNum, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *output[], int32_t outputNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行同步运算推理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_destroy",
              children: "HMS_HiAISingleOpExecutor_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " **executor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象，释放执行器占用的内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaitensor_getsizewithimageformat",
              children: "HMS_HiAITensor_GetSizeWithImageFormat"
            }), " (NN_TensorDesc *desc, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " format)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据NN_TensorDesc和HiAI_ImageFormat计算申请tensor的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaitensor_setaippparams",
              children: "HMS_HiAITensor_SetAippParams"
            }), " (NN_Tensor *tensor, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParams[], size_t aippNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给NN_Tensor设置AippParams。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_aippparam",
      children: "HiAI_AippParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_AippParam HiAI_AippParam\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP参数对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopbuffer",
      children: "HiAI_SingleOpBuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpBuffer HiAI_SingleOpBuffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子Buffer句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopdescriptor",
      children: "HiAI_SingleOpDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpDescriptor HiAI_SingleOpDescriptor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子的算子描述句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiaisingleopdescriptor_convolutionparam",
      children: "HiAISingleOpDescriptor_ConvolutionParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAISingleOpDescriptor_ConvolutionParam\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopdescriptor_createconvolution",
        children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
      }), "输入参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopexecutor",
      children: "HiAI_SingleOpExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpExecutor HiAI_SingleOpExecutor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子执行器句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopexecutorconvolutionparam",
      children: "HiAI_SingleOpExecutorConvolutionParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpExecutorConvolutionParam\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_createconvolution",
        children: "HMS_HiAISingleOpExecutor_CreateConvolution"
      }), "输入参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopexecutorfusedconvolutionactivationparam",
      children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpExecutorFusedConvolutionActivationParam\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
        children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
      }), "输入参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopoptions",
      children: "HiAI_SingleOpOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpOptions HiAI_SingleOpOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子选项句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleoptensor",
      children: "HiAI_SingleOpTensor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpTensor HiAI_SingleOpTensor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子Tensor句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleoptensordesc",
      children: "HiAI_SingleOpTensorDesc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAI_SingleOpTensorDesc HiAI_SingleOpTensorDesc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子Tensor描述的句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_bandmode",
      children: "HiAI_BandMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_BandMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义硬件之间带宽模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_BANDMODE_UNSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不设置，由系统调节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_BANDMODE_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低级带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_BANDMODE_NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中级带宽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_BANDMODE_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高级带宽模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_compatibility",
      children: "HiAI_Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_Compatibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译后模型兼容性结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_COMPATIBILITY_COMPATIBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_COMPATIBILITY_INCOMPATIBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型不兼容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_devicememoryreuseplan",
      children: "HiAI_DeviceMemoryReusePlan"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_DeviceMemoryReusePlan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备内存复用配置选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_DEVICE_MEMORY_REUSE_PLAN_UNSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使用，默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_DEVICE_MEMORY_REUSE_PLAN_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低内存复用率，模型申请的内存较多但模型推理性能相对较优。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_DEVICE_MEMORY_REUSE_PLAN_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高内存复用率，模型申请的内存较少但模型推理性能相对较差。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_dynamicshapecachemode",
      children: "HiAI_DynamicShapeCacheMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_DynamicShapeCacheMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译前可变shape支持的模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_DYNAMIC_SHAPE_CACHE_BUILT_MODEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存编译后的模型，内存占用较小，默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_DYNAMIC_SHAPE_CACHE_LOADED_MODEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存加载后的模型，性能较优。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_dynamicshapestatus",
      children: "HiAI_DynamicShapeStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_DynamicShapeStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是否使能编译前可变shape。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_DYNAMIC_SHAPE_DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使能编译前可变shape，默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_DYNAMIC_SHAPE_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能编译前可变shape。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_executedevice",
      children: "HiAI_ExecuteDevice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_ExecuteDevice\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型运行时支持的设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_EXECUTE_DEVICE_NPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPU，默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_EXECUTE_DEVICE_CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_EXECUTE_DEVICE_GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_fallbackmode",
      children: "HiAI_FallbackMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_FallbackMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的硬件设备无法编译模型时，是否允许CANN Kit选择其他硬件设备，例如CPU。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_FALLBACK_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许，默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_FALLBACK_DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_formatmode",
      children: "HiAI_FormatMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_FormatMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型编译时数据的排列格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_FORMAT_MODE_NCHW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式为NCHW，默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_FORMAT_MODE_ORIGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式为原始模型格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_imagecolorspace",
      children: "HiAI_ImageColorSpace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_ImageColorSpace\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像色域空间类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HIAI_JPEG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG色域空间类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_BT_601_NARROW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT.601 video range色域空间类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_BT_601_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT.601 full range色域空间类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_BT_709_NARROW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT.709 video range色域空间类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_IMAGE_COLOR_SPACE_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效图像色域类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_imageformat",
      children: "HiAI_ImageFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_ImageFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CANN Kit推理支持的输入和输出Tensor的图片格式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HIAI_YUV420SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV420SP_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_XRGB8888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XRGB8888_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_YUV400_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV400_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_ARGB8888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARGB8888_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_YUYV_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUYV_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_YUV422SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV422SP_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_AYUV444_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AYUV444_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_RGB888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB888_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_BGR888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGR888_U8格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_YUV444SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV444SP格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_YVU444SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YVU444SP格式的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_IMAGE_FORMAT_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的图片格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_omtype",
      children: "HiAI_OmType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_OmType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "维测类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
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
            children: "HIAI_OM_TYPE_OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭维测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_OM_TYPE_PROFILING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profiling维测类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_OM_TYPE_DUMP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dump维测类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopactivationtype",
      children: "HiAI_SingleOpActivationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_SingleOpActivationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子激活模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "HIAI_SINGLEOP_ACTIVATION_TYPE_RELU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU激活函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_ACTIVATION_TYPE_RELU6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU6激活函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopconvmode",
      children: "HiAI_SingleOpConvMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_SingleOpConvMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子卷积模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "HIAI_SINGLEOP_CONV_MODE_COMMON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通卷积。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_CONV_MODE_TRANSPOSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转置卷积。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_CONV_MODE_DEPTHWISE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度卷积。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopdatatype",
      children: "HiAI_SingleOpDataType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_SingleOpDataType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子张量数据类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "HIAI_SINGLEOP_DT_FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量数据类型为float。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_DT_FLOAT16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量数据类型为float16。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_DT_UNDEFINED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量数据类型未定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopformat",
      children: "HiAI_SingleOpFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_SingleOpFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子张量排布格式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HIAI_SINGLEOP_FORMAT_NCHW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量按照NCHW格式排布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_FORMAT_NHWC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量按照NHWC格式排布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_FORMAT_ND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量按照ND格式排布。暂不支持用户使用ND格式排布的单算子Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_FORMAT_NC1HWC0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量按照NC1HWC0格式排布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_FORMAT_NC4HW4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量按照NC4HW4格式排布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_FORMAT_NC8HW8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量按照NC8HW8格式排布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_FORMAT_RESERVED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量排布格式未定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleoppadmode",
      children: "HiAI_SingleOpPadMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_SingleOpPadMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子填充模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HIAI_SINGLEOP_PAD_MODE_SPECIFIC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果填充算法未设置，将根据参数", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "pads"
              })
            }), "采用显示填充。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_PAD_MODE_SAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对输入进行填充使输出维度与输入维度相同。输出维度由ceil(输入维度 / 步长)确定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_PAD_MODE_SAME_UPPER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SAME_UPPER填充模式，当填充长度为奇数时，起始的填充长度小于等于末尾的填充长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_PAD_MODE_SAME_LOWER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用SAME_LOWER填充模式，当填充长度为奇数时，起始的填充长度大于等于末尾的填充长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_PAD_MODE_VALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不填充，输出维度由ceil((输入维度 - 滤波器维度 + 1) / 步长)确定。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_singleopsupportstatus",
      children: "HiAI_SingleOpSupportStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_SingleOpSupportStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单算子支持状态枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "HIAI_SINGLEOP_OPTIMIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用单算子性能已优化。推荐用户使用单算子执行器，执行单算子推理计算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_COMMON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用单算子性能普通。支持该算子，但使用单算子可能性能收益小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_SINGLEOP_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持该单算子。若创建该单算子执行器将会失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_tuningmode",
      children: "HiAI_TuningMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_TuningMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助调优模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_TUNING_MODE_UNSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭调优模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_TUNING_MODE_AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动调优模式，推荐选择的模式，内部算法控制调优。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_TUNING_MODE_HETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异构调优模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiai_tuningstrategy",
      children: "HiAI_TuningStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HiAI_TuningStrategy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型优化策略配置选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "HIAI_TUNING_STRATEGY_OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持深度融合场景，也不支持编译前可变shape，默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_TUNING_STRATEGY_ON_DEVICE_TUNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持编译前可变shape场景深度融合优化模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_TUNING_STRATEGY_ON_DEVICE_PREPROCESS_TUNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPU算子库动态升级场景深度融合优化模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIAI_TUNING_STRATEGY_ON_CLOUD_TUNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未来场景的预留，目前不使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiai_getversion",
      children: "HMS_HiAI_GetVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* HMS_HiAI_GetVersion (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取CANN Kit版本号，并通过返回模板hiaiversion A1A2A3.X1X2X3.Y1Y2Y3.Z1Z2Z3指定X1是否为0来区分是否支持NPU。若X1为0，则表示不支持NPU；若X1为非0，则表示支持NPU。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功返回CANN Kit版本号，失败返回空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_create",
      children: "HMS_HiAIAippParam_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_AippParam* HMS_HiAIAippParam_Create (uint32_t batchNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据batchNum创建动态AippParam对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于创建动态AippParam对象，根据传入的batchNum申请相应的内存，用于存储动态AIPP参数。 不需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "指针实例时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_destroy",
        children: "HMS_HiAIAippParam_Destroy"
      }), "进行释放，否则会出现内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "batchNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入的batch大小，取值范围为(0, 127]。"
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
      children: ["成功时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "指针实例，失败返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_destroy",
      children: "HMS_HiAIAippParam_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_HiAIAippParam_Destroy (HiAI_AippParam ** aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放AippParam对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于释放通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_create",
        children: "HMS_HiAIAippParam_Create"
      }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getbatchcount",
      children: "HMS_HiAIAippParam_GetBatchCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_HiAIAippParam_GetBatchCount (HiAI_AippParam * aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的图像数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询推理AippParam设置图像数量。 在单batch多crop场景为一张图像多个crop的子图像的数量。在多batch单crop场景为输入的batch值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功返回图像数量，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getchannelpadding",
      children: "HMS_HiAIAippParam_GetChannelPadding()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetChannelPadding (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t paddingValues[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的通道padding填充值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的通道padding的填充值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paddingValues[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道填充值数组，填充值范围[-65504, 65504]，默认填充值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道填充数，当前支持[1, 4]，例如channelCount=3则对应查询通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getchannelswapconfig",
      children: "HMS_HiAIAippParam_GetChannelSwapConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetChannelSwapConfig (HiAI_AippParam * aippParam, bool * rbuvSwapSwitch, bool * axSwapSwitch)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的ChannelSwap通道交换参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询通道交换参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rbuvSwapSwitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回真为RB/UV通道交换已使能，返回假为RB/UV通道交换未使能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axSwapSwitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回真为AX通道交换已使能，返回假为AX通道交换未使能。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getcropconfig",
      children: "HMS_HiAIAippParam_GetCropConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetCropConfig (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t * startPosW, uint32_t * startPosH, uint32_t * croppedW, uint32_t * croppedH)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的裁剪参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的裁剪参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应即将crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startPosW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪起始位置水平方向坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startPosH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪起始位置垂直方向坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "croppedW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪出的图像宽度，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "croppedH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪出的图像高度，单位为像素。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getcscconfig",
      children: "HMS_HiAIAippParam_GetCscConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetCscConfig (HiAI_AippParam * aippParam, HiAI_ImageFormat * inputFormat, HiAI_ImageFormat * outputFormat, HiAI_ImageColorSpace * space)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的CSC色域转换相关参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询推理AippParam色域转换参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像输入格式，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outputFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像输出格式，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "space"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像颜色空间类型，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getdata",
      children: "HMS_HiAIAippParam_GetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* HMS_HiAIAippParam_GetData (HiAI_AippParam * aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取AippParam申请的内存地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_create",
        children: "HMS_HiAIAippParam_Create"
      }), "申请的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "的data内存地址。 data指向申请的AIPP参数的内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功时返回AippParam申请的内存地址，失败返回空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getdatasize",
      children: "HMS_HiAIAippParam_GetDataSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_HiAIAippParam_GetDataSize (HiAI_AippParam * aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取AippParam申请的内存大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_create",
        children: "HMS_HiAIAippParam_Create"
      }), "申请的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "的size大小。 size为申请的AIPP参数的内存大小。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功时返回AippParam申请的内存大小，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getdtcmeanpixel",
      children: "HMS_HiAIAippParam_GetDtcMeanPixel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetDtcMeanPixel (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t meanPixel[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的数据类型转换通道像素平均值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的数据类型转换像素平均值。 该方法需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_getdtcminpixel",
        children: "HMS_HiAIAippParam_GetDtcMinPixel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_getdtcvarrecipixel",
        children: "HMS_HiAIAippParam_GetDtcVarReciPixel"
      }), "共同使用，来获取所有数据类型转换参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "meanPixel[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道像素平均值数组，数组size为channelCount。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道数量，取值范围为[1, 4]，对应从chn0开始。例如channelCount等于3则对应查询通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getdtcminpixel",
      children: "HMS_HiAIAippParam_GetDtcMinPixel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetDtcMinPixel (HiAI_AippParam * aippParam, uint32_t batchIndex, float minPixel[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的数据类型转换通道像素最小值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的数据类型转换像素最小值。 该方法需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_getdtcmeanpixel",
        children: "HMS_HiAIAippParam_GetDtcMeanPixel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_getdtcvarrecipixel",
        children: "HMS_HiAIAippParam_GetDtcVarReciPixel"
      }), "共同使用，来获取所有数据类型转换参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minPixel[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道像素最小值数组，数组size为channelCount。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道数量，取值范围为[1, 4]，对应从chn0开始。例如channelCount等于3则对应查询通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getdtcvarrecipixel",
      children: "HMS_HiAIAippParam_GetDtcVarReciPixel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetDtcVarReciPixel (HiAI_AippParam * aippParam, uint32_t batchIndex, float varReciPixel[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的数据类型转换通道像素方差。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的数据类型转换像素方差值。 该方法需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_getdtcmeanpixel",
        children: "HMS_HiAIAippParam_GetDtcMeanPixel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_getdtcminpixel",
        children: "HMS_HiAIAippParam_GetDtcMinPixel"
      }), "共同使用，来获取所有数据类型转换参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "varReciPixel[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道像素方差数组，数组size为channelCount。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道数量，取值范围为[1, 4]，对应从chn0开始。例如channelCount等于3则对应查询通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getinputaippindex",
      children: "HMS_HiAIAippParam_GetInputAippIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int HMS_HiAIAippParam_GetInputAippIndex (HiAI_AippParam * aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象在该输入的多个输出分支上的索引。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法用于在data节点有多个索引时，查询AippParam对象在data节点上的索引。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回-1。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功时返回该AippParam对象在data节点上的索引，失败返回-1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getinputformat",
      children: "HMS_HiAIAippParam_GetInputFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_ImageFormat HMS_HiAIAippParam_GetInputFormat (HiAI_AippParam * aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的输入图像格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询输入图像格式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回HIAI_IMAGE_FORMAT_INVALID。"]
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
      children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_imageformat",
        children: "HiAI_ImageFormat"
      }), "，失败返回HIAI_IMAGE_FORMAT_INVALID。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getinputindex",
      children: "HMS_HiAIAippParam_GetInputIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int HMS_HiAIAippParam_GetInputIndex (HiAI_AippParam * aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象所在输入的索引。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法用于在多个输入情况下，查询AippParam对象所在输入的索引。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回-1。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功时返回该AippParam对象所在输入的索引，失败返回-1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getinputshape",
      children: "HMS_HiAIAippParam_GetInputShape()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetInputShape (HiAI_AippParam * aippParam, uint32_t * srcImageW, uint32_t * srcImageH)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的输入图像宽高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询输入图像宽高。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcImageW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入图像的宽度，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcImageH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入图像的高度，单位为像素。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getpadconfig",
      children: "HMS_HiAIAippParam_GetPadConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetPadConfig (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t * leftPadSize, uint32_t * rightPadSize, uint32_t * topPadSize, uint32_t * bottomPadSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的输入图像的填充像素数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的对输入图像的填充像素数。 当需要查询channel上的填充值时，需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_getchannelpadding",
        children: "HMS_HiAIAippParam_GetChannelPadding"
      }), "一起使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leftPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像左侧Padding像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rightPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像右侧Padding像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "topPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像上侧Padding像素数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottomPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像下侧Padding像素数。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getresizeconfig",
      children: "HMS_HiAIAippParam_GetResizeConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetResizeConfig (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t * resizedW, uint32_t * resizedH)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的图像缩放参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的缩放后图像宽高值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resizedW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放后图像宽度，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resizedH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放后图像高度，单位为像素。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getrotationangle",
      children: "HMS_HiAIAippParam_GetRotationAngle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_GetRotationAngle (HiAI_AippParam * aippParam, uint32_t batchIndex, float * rotationAngle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的图像旋转角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询对应索引的图像旋转角度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotationAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_getsinglebatchmulticrop",
      children: "HMS_HiAIAippParam_GetSingleBatchMultiCrop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool HMS_HiAIAippParam_GetSingleBatchMultiCrop (HiAI_AippParam * aippParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询AippParam对象的SingleBatchMultiCrop标识。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象查询是否为单batch多crop场景。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回真为单batch多crop场景，返回假为非单batch多crop场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setchannelpadding",
      children: "HMS_HiAIAippParam_SetChannelPadding()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetChannelPadding (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t paddingValues[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的通道padding填充值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置AIPP通道padding的填充值到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paddingValues[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道填充值数组，填充值范围[-65504, 65504]，默认填充值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道填充数，当前支持[1, 4]，例如channelCount=3则对应配置通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setchannelswapconfig",
      children: "HMS_HiAIAippParam_SetChannelSwapConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetChannelSwapConfig (HiAI_AippParam * aippParam, bool rbuvSwapSwitch, bool axSwapSwitch)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的ChannelSwap通道交换参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置AippParam通道交换参数到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 AIPP支持两种类型的通道交换：RB/UV通道交换和AX通道交换。 RB/UV通道交换丰富了输入图像的格式，开启RB/UV通道交换后，AIPP支持的图像输入格式比可配置的输入类型丰富了一倍。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可接受图像类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YUV420SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV420SP_U8，YVU420 + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XRGB8888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XRGB8888_U8，XBGR + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARGB8888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARGB8888_U8，ABGR + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RGB888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BGR888_U8 + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BGR888_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB888_U8 + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YUYV_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUYV_U8，YVYU_U8 + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YUV422SP_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV422SP_U8，YVU422_U8 + rbuv_swap_switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AYUV444_U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AYUV444_U8 + rbuv_swap_switch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YUV400_U8是灰度图，不支持通道交换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当配置的图像输入格式为XRGB、ARGB或AYUV时，支持开启AX通道交换。开启后，图像第一个通道的输入被搬移到第四个通道上，即当XRGB、ARGB和AYUV开启AX通道交换后，转变为RGBX、RGBA和YUVA。 当模型训练集为RGB格式的图像，而推理时的图像输入为XRGB或者ARGB时，可以通过使能AX通道交换，将RGB通道前移，实现兼容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rbuvSwapSwitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数真为使能RB/UV通道交换，参数假为不使能RB/UV通道交换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axSwapSwitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数真为使能AX通道交换，参数假为不使能AX通道交换。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setcropconfig",
      children: "HMS_HiAIAippParam_SetCropConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetCropConfig (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t startPosW, uint32_t startPosH, uint32_t croppedW, uint32_t croppedH)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的裁剪参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置裁剪参数到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 YUV类型的图像受图像自身类型的限制，当输入图像类型为YUV420SP、YUYV、YUV422SP和AYUV444时，裁剪的起始坐标和裁剪的宽高需为是偶数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应即将crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startPosW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪起始位置水平方向坐标，startPosW小于输入图像的宽度，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startPosH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪起始位置垂直方向坐标，startPosH小于输入图像的高度，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "croppedW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪出的图像宽度，startPosW与cropSizeW之和小于等于输入图像的宽度，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "croppedH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪出的图像高度，startPosH与cropSizeH之和小于等于输入图像的高度，单位为像素。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setcscconfig",
      children: "HMS_HiAIAippParam_SetCscConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetCscConfig (HiAI_AippParam * aippParam, HiAI_ImageFormat inputFormat, HiAI_ImageFormat outputFormat, HiAI_ImageColorSpace space)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的CSC色域转换参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置AippParam色域转换参数到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 色域转换（Color Space Conversion，以下简称CSC），特指在YUV444和RGB888两种图像格式之间进行转换。 输入为YUV格式图像(YUV420/YUYV/YUV422SP/AYUV444)，模型训练集可为RGB,BGR，灰度图（YUV400_U8）。 输入为RGB格式图像(XRGB8888/ARGB8888)，模型训练集可为YUV444SP，YVU444SP，灰度图（YUV400_U8）。 不支持从YUV400到RGB或BGR的转换。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像输入格式，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outputFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像输出格式，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "space"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像颜色空间类型，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imagecolorspace",
              children: "HiAI_ImageColorSpace"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setdtcmeanpixel",
      children: "HMS_HiAIAippParam_SetDtcMeanPixel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetDtcMeanPixel (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t meanPixel[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的数据类型转换通道像素平均值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据类型转换（Data Type Conversion，简称DTC），用于将输入图像中像素值转换为模型训练时的数据类型。设置DTC参数，使得转换之后的数据在一个预期的范围，避免强制转换。 数据类型转化功能，将输入的图像数据类型通过转化公式转换为FP16类型送给后续模块计算，实际为依次执行减均值、减最小值和乘方差操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算公式为：U8->FP16: pixelOutChn(i) = [pixelInChn(i)–meanChn(i)–minChn(i)] * varReciChn(i), i ∈ [0, 4) 其中：pixelOutChn(i)为DTC模块的每个通道的输出值，pixelInChn(i)为DTC模块的每个通道的输入值，meanChn(i)为用户输入的每个通道的均值， minChn(i)为用户输入的每个通道的最小值， varReciChn(i)为用户输入的每个通道的方差。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法用于动态AIPP推理时，设置DTC数据类型转换像素平均值到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 该方法需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_setdtcminpixel",
        children: "HMS_HiAIAippParam_SetDtcMinPixel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_setdtcvarrecipixel",
        children: "HMS_HiAIAippParam_SetDtcVarReciPixel"
      }), "共同使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "meanPixel[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道像素平均值数组，数组size为channelCount，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道数量，取值范围为[1, 4]，例如channelCount=3则对应配置通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setdtcminpixel",
      children: "HMS_HiAIAippParam_SetDtcMinPixel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetDtcMinPixel (HiAI_AippParam * aippParam, uint32_t batchIndex, float minPixel[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的数据类型转换通道像素最小值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法用于动态AIPP推理时，设置DTC数据类型转换像素最小值到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 该方法需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_setdtcmeanpixel",
        children: "HMS_HiAIAippParam_SetDtcMeanPixel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_setdtcvarrecipixel",
        children: "HMS_HiAIAippParam_SetDtcVarReciPixel"
      }), "共同使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minPixel[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道像素最小值数组，数组size为channelCount，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道数量，取值范围为[1, 4]，例如channelCount=3则对应配置通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setdtcvarrecipixel",
      children: "HMS_HiAIAippParam_SetDtcVarReciPixel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetDtcVarReciPixel (HiAI_AippParam * aippParam, uint32_t batchIndex, float varReciPixel[], uint32_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的数据类型转换通道像素方差。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法用于动态AIPP推理时，设置DTC数据类型转换像素方差到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 该方法需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_setdtcmeanpixel",
        children: "HMS_HiAIAippParam_SetDtcMeanPixel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_setdtcminpixel",
        children: "HMS_HiAIAippParam_SetDtcMinPixel"
      }), "共同使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "varReciPixel[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道像素方差数组，数组size为channelCount，默认值为1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通道数量，取值范围为[1, 4]，例如channelCount=3则对应配置通道chn0, chn1, chn2的数据。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setinputaippindex",
      children: "HMS_HiAIAippParam_SetInputAippIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputAippIndex (HiAI_AippParam * aippParam, uint32_t inputAippIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象作用于该输入的多个输出分支上的索引。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法用于在data有多个输出分支时，设置AippParam对象作用域该输入的第几个输出分支。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputAippIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识AIPP配置参数在输入Data有多个输出分支时作用于第几个分支，从0开始计数。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setinputformat",
      children: "HMS_HiAIAippParam_SetInputFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputFormat (HiAI_AippParam * aippParam, HiAI_ImageFormat inputFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的输入图像格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置AIPP的输入图像格式到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 AIPP可配置的图像格式为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_imageformat",
        children: "HiAI_ImageFormat"
      }), "所支持的范围。 图像像素点为Uint8类型，范围为0到255。当图像的输入为YUV类型时，无论是YUV420还是YUV422或者YUYV，AIPP自动将图像数据补齐为YUV444格式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入图像的格式", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setinputindex",
      children: "HMS_HiAIAippParam_SetInputIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputIndex (HiAI_AippParam * aippParam, uint32_t inputIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam在输入上的索引。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法用于在多个输入情况下，设置索引以确定该AippParam对象作用于第几个输入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识此AIPP参数作用于模型的第几个输入，从0开始计数。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setinputshape",
      children: "HMS_HiAIAippParam_SetInputShape()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetInputShape (HiAI_AippParam * aippParam, uint32_t srcImageW, uint32_t srcImageH)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的输入图像宽高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置输入图像宽高到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcImageW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入图像的宽度，单位为像素，取值范围[16, 4096]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcImageH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入图像的高度，单位为像素，取值范围[16, 4096]。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setpadconfig",
      children: "HMS_HiAIAippParam_SetPadConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetPadConfig (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t leftPadSize, uint32_t rightPadSize, uint32_t topPadSize, uint32_t bottomPadSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的输入图像的填充像素数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置对输入图像的填充像素数到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。包含图像左右上下侧的Padding像素数。 当需要设置channel上的填充值时，需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_setchannelpadding",
        children: "HMS_HiAIAippParam_SetChannelPadding"
      }), "一起使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leftPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像左侧Padding像素数，经过padding后的图像宽度，需与原始模型维度中宽度保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rightPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像右侧Padding像素数，经过padding后的图像宽度，需与原始模型维度中宽度保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "topPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像上侧Padding像素数，经过padding后的图像高度，需与原始模型维度中高度保持一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottomPadSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像下侧Padding像素数，经过padding后的图像高度，需与原始模型维度中高度保持一致。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setresizeconfig",
      children: "HMS_HiAIAippParam_SetResizeConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetResizeConfig (HiAI_AippParam * aippParam, uint32_t batchIndex, uint32_t resizedW, uint32_t resizedH)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的图像缩放参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置图像缩放参数到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。Resize的类型为双线性插值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resizedW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放后图像宽度，单位为像素，取值范围[16, 448]，图像宽度缩放倍数的范围[1/16, 16]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resizedH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放后图像高度，单位为像素，取值范围[16, 4096]，图像高度缩放倍数的范围[1/16, 16]。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setrotationangle",
      children: "HMS_HiAIAippParam_SetRotationAngle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetRotationAngle (HiAI_AippParam * aippParam, uint32_t batchIndex, float rotationAngle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的旋转角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置旋转角度到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于多batch单crop场景，对应输入的图像索引；对于单batch多crop场景，对应crop出来的图像索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotationAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度，仅支持0, 90, 180, 270。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaiaippparam_setsinglebatchmulticrop",
      children: "HMS_HiAIAippParam_SetSingleBatchMultiCrop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIAippParam_SetSingleBatchMultiCrop (HiAI_AippParam * aippParam, bool singleBatchMultiCrop)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置AippParam对象的SingleBatchMultiCrop标识。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于动态AIPP推理时，设置AippParam单batch多crop标识到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_aippparam",
        children: "HiAI_AippParam"
      }), "对象。 对于单个batch的图像输入的场景，支持一次性传入多组crop等AIPP参数，一次推理即能得到全部人脸等的关键点信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "aippParam"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_aippparam",
              children: "HiAI_AippParam"
            }), "指针实例，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleBatchMultiCrop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数真为单batch多crop场景，参数假为非单batch多crop场景。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaicompatibility_checkfrombuffer",
      children: "HMS_HiAICompatibility_CheckFromBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_Compatibility HMS_HiAICompatibility_CheckFromBuffer (const void * data, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询编译后储存在内存中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译后模型数据地址，非空，否则返回不兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译后模型数据大小，非空，否则返回不兼容。"
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
      children: ["成功返回 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_compatibility",
        children: "HiAI_Compatibility"
      }), "，失败返回不兼容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaicompatibility_checkfromfile",
      children: "HMS_HiAICompatibility_CheckFromFile()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_Compatibility HMS_HiAICompatibility_CheckFromFile (const char * file)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询编译后储存在文件中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译后模型文件路径及名称，要求用户进程对文件有访问权限，非空，否则返回不兼容。"
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
      children: ["成功返回 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_compatibility",
        children: "HiAI_Compatibility"
      }), "，失败返回不兼容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getbandmode",
      children: "HMS_HiAIOptions_GetBandMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_BandMode HMS_HiAIOptions_GetBandMode (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询带宽模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["成功返回带宽模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_bandmode",
        children: "HiAI_BandMode"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getdevicememoryreuseplan",
      children: "HMS_HiAIOptions_GetDeviceMemoryReusePlan()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_DeviceMemoryReusePlan HMS_HiAIOptions_GetDeviceMemoryReusePlan (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询调优配置中的设备内存复用参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["成功时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_devicememoryreuseplan",
        children: "HiAI_DeviceMemoryReusePlan"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getdynamicshapecachemode",
      children: "HMS_HiAIOptions_GetDynamicShapeCacheMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_DynamicShapeCacheMode HMS_HiAIOptions_GetDynamicShapeCacheMode (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询编译前可变shape配置中的cacheMode参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["成功时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_dynamicshapecachemode",
        children: "HiAI_DynamicShapeCacheMode"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getdynamicshapemaxcache",
      children: "HMS_HiAIOptions_GetDynamicShapeMaxCache()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAIOptions_GetDynamicShapeMaxCache (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询编译前可变shape配置中的最大缓存数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功时返回最大缓存数量，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getdynamicshapestatus",
      children: "HMS_HiAIOptions_GetDynamicShapeStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_DynamicShapeStatus HMS_HiAIOptions_GetDynamicShapeStatus (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询编译前可变shape配置中的状态参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["成功时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_dynamicshapestatus",
        children: "HiAI_DynamicShapeStatus"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getfallbackmode",
      children: "HMS_HiAIOptions_GetFallbackMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_FallbackMode HMS_HiAIOptions_GetFallbackMode (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询调优配置中的回滚模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["成功时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_fallbackmode",
        children: "HiAI_FallbackMode"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getformatmode",
      children: "HMS_HiAIOptions_GetFormatMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_FormatMode HMS_HiAIOptions_GetFormatMode (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询模型编译参数中的数据排列格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_formatmode",
        children: "HiAI_FormatMode"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getinputtensorshape",
      children: "HMS_HiAIOptions_GetInputTensorShape()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NN_TensorDesc* HMS_HiAIOptions_GetInputTensorShape (const OH_NNCompilation * compilation, size_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询选项参数中指定索引的shape描述。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入shape的索引，取值为[0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaioptions_getinputtensorshapesize",
              children: "HMS_HiAIOptions_GetInputTensorShapeSize"
            }), ")。"]
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
      children: "成功返回选项参数中的shape描述，失败返回空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getinputtensorshapesize",
      children: "HMS_HiAIOptions_GetInputTensorShapeSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAIOptions_GetInputTensorShapeSize (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询选项参数中shape描述的个数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功返回选项参数中shape描述的个数，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getmodeldevicecount",
      children: "HMS_HiAIOptions_GetModelDeviceCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAIOptions_GetModelDeviceCount (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询模型级调优配置中模型的执行设备个数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功时返回执行设备的个数，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getmodeldeviceorder",
      children: "HMS_HiAIOptions_GetModelDeviceOrder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_ExecuteDevice* HMS_HiAIOptions_GetModelDeviceOrder (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询模型级调优配置中模型的执行设备列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回空指针。"
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
      children: ["成功时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_executedevice",
        children: "HiAI_ExecuteDevice"
      }), "执行设备列表，失败返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getoperatordevicecount",
      children: "HMS_HiAIOptions_GetOperatorDeviceCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAIOptions_GetOperatorDeviceCount (const OH_NNCompilation * compilation, const char * operatorName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询算子级调优配置中指定算子的执行设备个数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operatorName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子名称，非空，否则返回0。"
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
      children: "成功时返回执行设备的个数，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getoperatordeviceorder",
      children: "HMS_HiAIOptions_GetOperatorDeviceOrder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_ExecuteDevice* HMS_HiAIOptions_GetOperatorDeviceOrder (const OH_NNCompilation * compilation, const char * operatorName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询算子级调优配置中指定算子的执行设备列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operatorName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子名称，非空，否则返回空指针。"
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
      children: ["成功时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_executedevice",
        children: "HiAI_ExecuteDevice"
      }), "执行设备列表，失败返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getquantconfigdata",
      children: "HMS_HiAIOptions_GetQuantConfigData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* HMS_HiAIOptions_GetQuantConfigData (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询量化配置的数据地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功返回量化配置的数据地址，失败返回空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_getquantconfigsize",
      children: "HMS_HiAIOptions_GetQuantConfigSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAIOptions_GetQuantConfigSize (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询量化配置的数据大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功返回量化配置的数据大小，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_gettuningcachedir",
      children: "HMS_HiAIOptions_GetTuningCacheDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* HMS_HiAIOptions_GetTuningCacheDir (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询辅助调优的缓存目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "成功返回缓存目录，失败返回空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_gettuningmode",
      children: "HMS_HiAIOptions_GetTuningMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_TuningMode HMS_HiAIOptions_GetTuningMode (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询辅助调优模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["返回辅助调优模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_tuningmode",
        children: "HiAI_TuningMode"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_gettuningstrategy",
      children: "HMS_HiAIOptions_GetTuningStrategy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_TuningStrategy HMS_HiAIOptions_GetTuningStrategy (const OH_NNCompilation * compilation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询模型优化策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回默认值。"
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
      children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_tuningstrategy",
        children: "HiAI_TuningStrategy"
      }), "，失败返回默认值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setbandmode",
      children: "HMS_HiAIOptions_SetBandMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetBandMode (OH_NNCompilation * compilation, HiAI_BandMode bandMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置NPU与周边硬件IO资源的带宽模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据需要设置合适的值，带宽与功耗成正比，高带宽也意味着高功耗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bandMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["带宽模式", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_bandmode",
              children: "HiAI_BandMode"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setdevicememoryreuseplan",
      children: "HMS_HiAIOptions_SetDeviceMemoryReusePlan()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetDeviceMemoryReusePlan (OH_NNCompilation * compilation, HiAI_DeviceMemoryReusePlan deviceMemoryReusePlan)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置调优配置中的设备内存复用参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效。用于在调优时，指定设备内存复用方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceMemoryReusePlan"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备内存复用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_devicememoryreuseplan",
              children: "HiAI_DeviceMemoryReusePlan"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setdynamicshapecachemode",
      children: "HMS_HiAIOptions_SetDynamicShapeCacheMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetDynamicShapeCacheMode (OH_NNCompilation * compilation, HiAI_DynamicShapeCacheMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置编译前可变shape配置中的缓存模式参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法仅在模型编译阶段生效，用于在推理阶段期望变更shape，且模型的shape变化数量不超过10个场景。 本方法需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_setdynamicshapestatus",
        children: "HMS_HiAIOptions_SetDynamicShapeStatus"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_setdynamicshapemaxcache",
        children: "HMS_HiAIOptions_SetDynamicShapeMaxCache"
      }), "搭配使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编译前可变shape的缓存模式", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapecachemode",
              children: "HiAI_DynamicShapeCacheMode"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setdynamicshapemaxcache",
      children: "HMS_HiAIOptions_SetDynamicShapeMaxCache()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetDynamicShapeMaxCache (OH_NNCompilation * compilation, size_t maxCacheCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置编译前可变shape配置中的最大缓存编译后模型数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法仅在模型编译阶段生效，用于在推理阶段期望变更shape，且模型的shape变化数量不超过10个场景。 本方法需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_setdynamicshapestatus",
        children: "HMS_HiAIOptions_SetDynamicShapeStatus"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_setdynamicshapecachemode",
        children: "HMS_HiAIOptions_SetDynamicShapeCacheMode"
      }), "搭配使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxCacheCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大档位，取值范围[1, 10]。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setdynamicshapestatus",
      children: "HMS_HiAIOptions_SetDynamicShapeStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetDynamicShapeStatus (OH_NNCompilation * compilation, HiAI_DynamicShapeStatus status)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置编译前可变shape配置中的EnableMode参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法仅在模型编译阶段生效，用于在推理阶段期望变更shape，且模型的shape变化数量不超过10个场景。 本方法需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_setdynamicshapemaxcache",
        children: "HMS_HiAIOptions_SetDynamicShapeMaxCache"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_setdynamicshapecachemode",
        children: "HMS_HiAIOptions_SetDynamicShapeCacheMode"
      }), "搭配使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否使能编译前可变shape", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_dynamicshapestatus",
              children: "HiAI_DynamicShapeStatus"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setfallbackmode",
      children: "HMS_HiAIOptions_SetFallbackMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetFallbackMode (OH_NNCompilation * compilation, HiAI_FallbackMode fallbackMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置调优配置中的回滚模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效。用于在模型级或算子级调优时，指定的执行设备列表出现不支持时，是否可回滚到其他硬件执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fallbackMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否使能回滚模式", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_fallbackmode",
              children: "HiAI_FallbackMode"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setformatmode",
      children: "HMS_HiAIOptions_SetFormatMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetFormatMode (OH_NNCompilation * compilation, HiAI_FormatMode formatMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置模型编译时的数据排列格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效，用于模型中的数据排列格式与默认值不匹配时的场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "formatMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据排列格式", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_formatmode",
              children: "HiAI_FormatMode"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setinputtensorshapes",
      children: "HMS_HiAIOptions_SetInputTensorShapes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetInputTensorShapes (OH_NNCompilation * compilation, NN_TensorDesc * inputTensorDescs[], size_t shapeCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译时更新模型输入shape。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效，用于模型结构及权重不变，模型输入shape需要变化的场景。数组的大小需要与模型的输入数量保持一致。 模型编译后，模型的输入shape将变更为新设置的shape，推理时输入输出数据需符合新的模型输入输出描述。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputTensorDescs[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入shape列表数组NN_TensorDesc，非空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shapeCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入shape的个数，需与模型输入个数对应。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setmodeldeviceorder",
      children: "HMS_HiAIOptions_SetModelDeviceOrder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetModelDeviceOrder (OH_NNCompilation * compilation, HiAI_ExecuteDevice * executeDevices, size_t deviceCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置模型级调优配置中模型执行设备列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效，不可与其他调优混用。用于指定模型的执行设备列表，按照优先级顺序排列。默认NPU优先。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "executeDevices"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持的设备类型列表", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), "，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的执行硬件个数。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setomoptions",
      children: "HMS_HiAIOptions_SetOmOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetOmOptions (OH_NNCompilation * compilation, HiAI_OmType type, const char * outputDir)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置模型加载时的维测选项信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法属于可选接口，在模型加载阶段生效，用于模型的性能调试。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["维测类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_omtype",
              children: "HiAI_OmType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outputDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维测输出目录，用于生产profiling相关文件。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setoperatordeviceorder",
      children: "HMS_HiAIOptions_SetOperatorDeviceOrder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetOperatorDeviceOrder (OH_NNCompilation * compilation, const char * operatorName, HiAI_ExecuteDevice * executeDevices, size_t deviceCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置算子级调优配置中算子执行设备列表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效，不可与其他调优混用。用于指定模型中算子的执行设备列表，按照优先级顺序排列，算子名称不可重复。 模型中的算子可以部分指定，不指定的算子以NPU优先，可以使用开源工具Netron查看模型中的算子名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operatorName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子名称，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "executeDevices"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持的设备类型列表", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_executedevice",
              children: "HiAI_ExecuteDevice"
            }), "，非空，否则返回失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的执行硬件个数。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_setquantconfig",
      children: "HMS_HiAIOptions_SetQuantConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetQuantConfig (OH_NNCompilation * compilation, void * data, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置模型编译时量化配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效。用于模型编译时进行量化的场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "量化配置的数据地址，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "量化配置的数据大小，大于0，否则返回失败。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_settuningcachedir",
      children: "HMS_HiAIOptions_SetTuningCacheDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetTuningCacheDir (OH_NNCompilation * compilation, const char * cacheDir)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置辅助调优的缓存目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要求用户进程对缓存目录有读写权限。本方法需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_settuningmode",
        children: "HMS_HiAIOptions_SetTuningMode"
      }), "搭配使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cacheDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存目录，非空，否则返回失败。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_settuningmode",
      children: "HMS_HiAIOptions_SetTuningMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetTuningMode (OH_NNCompilation * compilation, HiAI_TuningMode tuningMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择辅助调优模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法仅在模型编译阶段生效，不可与其他调优混用。用于指定CANN Kit协助进行调优的场景。 本方法需与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaioptions_settuningcachedir",
        children: "HMS_HiAIOptions_SetTuningCacheDir"
      }), "搭配使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tuningMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助调优模式", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningmode",
              children: "HiAI_TuningMode"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaioptions_settuningstrategy",
      children: "HMS_HiAIOptions_SetTuningStrategy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAIOptions_SetTuningStrategy (OH_NNCompilation * compilation, HiAI_TuningStrategy tuningStrategy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置模型编译时的模型优化策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方法仅在模型编译阶段生效。用于模型算子深度融合的场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation指针实例，非空，否则返回失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tuningStrategy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型优化策略配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_tuningstrategy",
              children: "HiAI_TuningStrategy"
            }), "。"]
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopbuffer_create",
      children: "HMS_HiAISingleOpBuffer_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpBuffer* HMS_HiAISingleOpBuffer_Create (size_t dataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按照指定的内存大小创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于根据指定的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dataSize"
        })
      }), "申请对应大小的ION内存，并创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象。当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象时， 调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopbuffer_destroy",
        children: "HMS_HiAISingleOpBuffer_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
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
            children: "dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要申请的内存字节大小。该值不能为0，否则返回空指针。"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象的指针，如果创建失败则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopbuffer_destroy",
      children: "HMS_HiAISingleOpBuffer_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAISingleOpBuffer_Destroy (HiAI_SingleOpBuffer ** buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于释放调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopbuffer_create",
        children: "HMS_HiAISingleOpBuffer_Create"
      }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
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
            children: "buffer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "对象的二级指针。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "buffer"
              })
            }), "和 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "*buffer"
              })
            }), "不能是空指针，否则返回错误码。"]
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
      children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopbuffer_getdata",
      children: "HMS_HiAISingleOpBuffer_GetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* HMS_HiAISingleOpBuffer_GetData (const HiAI_SingleOpBuffer * buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "的内存地址。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象的内存地址。"]
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
            children: "buffer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "对象的指针。该值不能为空指针，否则返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Buffer的内存地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopbuffer_getsize",
      children: "HMS_HiAISingleOpBuffer_GetSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAISingleOpBuffer_GetSize (const HiAI_SingleOpBuffer * buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "的字节大小。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象的字节大小。"]
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
            children: "buffer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "对象的指针。该值不能为空指针，否则返回0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Buffer的字节大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopdescriptor_createactivation",
      children: "HMS_HiAISingleOpDescriptor_CreateActivation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpDescriptor* HMS_HiAISingleOpDescriptor_CreateActivation (HiAI_SingleOpActivationType activationType, float coef)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建激活函数类的描述符对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于根据传入的参数创建激活函数类的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象。当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopdescriptor_destroy",
        children: "HMS_HiAISingleOpDescriptor_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
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
            children: "activationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果激活模式为带系数的激活类型，该值表示系数。否则，该值不会生效。"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象的指针，如果创建失败则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopdescriptor_createconvolution",
      children: "HMS_HiAISingleOpDescriptor_CreateConvolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpDescriptor* HMS_HiAISingleOpDescriptor_CreateConvolution (HiAISingleOpDescriptor_ConvolutionParam param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建卷积类（普通卷积、转置卷积、深度卷积）的描述符对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于根据传入的参数创建卷积类的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象。当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopdescriptor_destroy",
        children: "HMS_HiAISingleOpDescriptor_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
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
            children: "param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["详细输入参数参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam",
              children: "HiAISingleOpDescriptor_ConvolutionParam"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象的指针，如果创建失败则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopdescriptor_destroy",
      children: "HMS_HiAISingleOpDescriptor_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_HiAISingleOpDescriptor_Destroy (HiAI_SingleOpDescriptor ** opDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopdescriptor",
        children: "HiAI_SingleOpDescriptor"
      }), "对象时，调用该接口销毁，否则会造成内存泄漏。"]
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
            children: "opDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), "对象的二级指针。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "opDesc"
              })
            }), "和 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "*opDesc"
              })
            }), "不能是空指针，否则销毁失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_createconvolution",
      children: "HMS_HiAISingleOpExecutor_CreateConvolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpExecutor* HMS_HiAISingleOpExecutor_CreateConvolution (HiAI_SingleOpExecutorConvolutionParam param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建卷积类算子对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_destroy",
        children: "HMS_HiAISingleOpExecutor_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于输出Tensor描述，其数据类型和排布格式可以同时为HIAI_SINGLEOP_DT_UNDEFINED和HIAI_SINGLEOP_FORMAT_RESERVED。在这种情况下，执行器会将输出的数据类型和排布格式设置为适配硬件的类型。该接口执行成功后，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_updateoutputtensordesc",
        children: "HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc"
      }), "更新输出Tensor描述的数据类型和排布格式。"]
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
            children: "param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["详细输入参数参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象的指针，如果创建失败，则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_createfusedconvolutionactivation",
      children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpExecutor* HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation (HiAI_SingleOpExecutorFusedConvolutionActivationParam param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建卷积和激活融合算子对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_destroy",
        children: "HMS_HiAISingleOpExecutor_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于输出Tensor描述，其数据类型和排布格式可以为HIAI_SINGLEOP_DT_UNDEFINED和HIAI_SINGLEOP_FORMAT_RESERVED。在这种情况下，执行器会将输出的数据类型和排布格式设置为适配硬件的类型。该接口执行成功后，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_updateoutputtensordesc",
        children: "HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc"
      }), "更新输出Tensor描述的数据类型和排布格式。"]
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
            children: "param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["详细输入参数参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象的指针，如果创建失败，则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_destroy",
      children: "HMS_HiAISingleOpExecutor_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAISingleOpExecutor_Destroy (HiAI_SingleOpExecutor ** executor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象，释放执行器占用的内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "对象时，调用该接口销毁，否则会造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：该接口不会释放传递给", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_init",
        children: "HMS_HiAISingleOpExecutor_Init"
      }), "的工作空间内存，工作空间所属的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "需要单独释放。"]
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
            children: "executor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象的二级指针。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "executor"
              })
            }), "和 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "*executor"
              })
            }), "不能是空指针，否则返回错误码。"]
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
      children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_execute",
      children: "HMS_HiAISingleOpExecutor_Execute()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAISingleOpExecutor_Execute (HiAI_SingleOpExecutor * executor, HiAI_SingleOpTensor * input[], int32_t inputNum, HiAI_SingleOpTensor * output[], int32_t outputNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行同步运算推理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用该接口前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_createfromtensordesc",
        children: "HMS_HiAISingleOpTensor_CreateFromTensorDesc"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_createfromsingleopbuffer",
        children: "HMS_HiAISingleOpTensor_CreateFromSingleOpBuffer"
      }), "接口创建输入和输出Tensor并填充输入Tensor数据。执行器会通过执行推理产生推理结果，并将结果写入输出Tensor中。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "executor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象的指针。该值不能为空指针，否则返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "input[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入Tensor的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入Tensor的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "output[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出Tensor的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outputNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出Tensor的数量。"
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
      children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_getworkspacesize",
      children: "HMS_HiAISingleOpExecutor_GetWorkspaceSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAISingleOpExecutor_GetWorkspaceSize (const HiAI_SingleOpExecutor * executor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "所需的ION内存工作空间的字节大小。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在成功创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "后，调用该接口获取执行器所需的ION内存工作空间的字节大小，然后需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopbuffer_create",
        children: "HMS_HiAISingleOpBuffer_Create"
      }), "申请足够的工作空间内存，将分配的工作空间传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_init",
        children: "HMS_HiAISingleOpExecutor_Init"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意：同一个执行器的工作空间内存和输入、输出Tensor内存不能复用，不同执行器的工作空间内存可以复用。"
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
            children: "executor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象的指针。该值不能为空指针，否则返回0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工作空间的字节大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_init",
      children: "HMS_HiAISingleOpExecutor_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAISingleOpExecutor_Init (HiAI_SingleOpExecutor * executor, void * workspace, size_t workspaceSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["加载", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调用该接口之前，需要申请执行器所需的工作空间内存。"
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
            children: "executor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象的指针。该值不能为空指针，否则返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workspace"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["工作空间地址。当", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "workspaceSize"
              })
            }), "不为0时，该值必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "中的内存地址，否则返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workspaceSize"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "workspace"
              })
            }), "的字节大小。该值必须大于等于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_hiaisingleopexecutor_getworkspacesize",
              children: "HMS_HiAISingleOpExecutor_GetWorkspaceSize"
            }), "获取的所需工作空间大小， 否则返回错误码。"]
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
      children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_precheckconvolution",
      children: "HMS_HiAISingleOpExecutor_PreCheckConvolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpSupportStatus HMS_HiAISingleOpExecutor_PreCheckConvolution (HiAI_SingleOpExecutorConvolutionParam param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预查询卷积算子的支持状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据该接口的返回值确定是否调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_createconvolution",
        children: "HMS_HiAISingleOpExecutor_CreateConvolution"
      }), "来创建卷积执行器，也可以不调用本方法，直接调用创建卷积执行器。"]
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
            children: "param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["详细输入参数参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
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
      children: ["支持状态。具体状态请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopsupportstatus",
        children: "HiAI_SingleOpSupportStatus"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_precheckfusedconvolutionactivation",
      children: "HMS_HiAISingleOpExecutor_PreCheckFusedConvolutionActivation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpSupportStatus HMS_HiAISingleOpExecutor_PreCheckFusedConvolutionActivation (HiAI_SingleOpExecutorFusedConvolutionActivationParam param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预查询卷积和激活融合算子的支持状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据该接口的返回值确定是否调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
        children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
      }), "来创建卷积激活融合执行器，也可以不调用本方法，直接创建卷积激活融合执行器。"]
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
            children: "param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["详细输入参数参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
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
      children: ["支持状态。具体状态请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopsupportstatus",
        children: "HiAI_SingleOpSupportStatus"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopexecutor_updateoutputtensordesc",
      children: "HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc (const HiAI_SingleOpExecutor * executor, uint32_t index, HiAI_SingleOpTensorDesc * output)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "的输出tensor描述。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果在创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "时，输入参数", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "output"
        })
      }), "数据类型为HIAI_SINGLEOP_DT_UNDEFINED，且排布格式为HIAI_SINGLEOP_FORMAT_RESERVED，那么在成功创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopexecutor",
        children: "HiAI_SingleOpExecutor"
      }), "后，调用该接口将输出Tensor描述更新为硬件适配的数据类型和排布格式。"]
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
            children: "executor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象的指针。该值不能为空指针，否则返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出Tensor描述的索引，与创建executor时的输出顺序一致。索引值从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "output"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要更新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。"]
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
      children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopoptions_create",
      children: "HMS_HiAISingleOpOptions_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpOptions* HMS_HiAISingleOpOptions_Create (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopoptions",
        children: "HiAI_SingleOpOptions"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopoptions",
        children: "HiAI_SingleOpOptions"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopoptions_destroy",
        children: "HMS_HiAISingleOpOptions_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopoptions",
        children: "HiAI_SingleOpOptions"
      }), "对象的指针，如果创建失败则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleopoptions_destroy",
      children: "HMS_HiAISingleOpOptions_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_HiAISingleOpOptions_Destroy (HiAI_SingleOpOptions ** options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopoptions",
        children: "HiAI_SingleOpOptions"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于释放调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopoptions_create",
        children: "HMS_HiAISingleOpOptions_Create"
      }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopoptions",
        children: "HiAI_SingleOpOptions"
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
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), "对象的二级指针。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "options"
              })
            }), "和 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "*options"
              })
            }), "不能是空指针，否则销毁失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensor_createfromconst",
      children: "HMS_HiAISingleOpTensor_CreateFromConst()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensor* HMS_HiAISingleOpTensor_CreateFromConst (const HiAI_SingleOpTensorDesc * desc, void * data, size_t dataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "、常量数据（如卷积权重、偏置等）的内存地址和数据大小创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "和常量数据（如卷积权重、偏置等）的内存地址和数据大小创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法直接复用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "data"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dataSize"
        })
      }), "对应的常量数据，不会进行数据的拷贝。因此，在本方法创建的Tensor仍要被使用时，不要释放该Tensor对应的常量数据内存。本方法仅读取", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "data"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dataSize"
        })
      }), "对应的常量数据，不会修改其数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：该接口会将", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "拷贝到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "中。因此，当", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "不再使用时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensordesc_destroy",
        children: "HMS_HiAISingleOpTensorDesc_Destroy"
      }), "销毁", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_destroy",
        children: "HMS_HiAISingleOpTensor_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
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
            children: "desc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回空指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常量数据地址。该值不能为空指针，否则返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常量数据大小。该值不能为0，否则返回空指针。"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象的指针，如果创建失败则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensor_createfromsingleopbuffer",
      children: "HMS_HiAISingleOpTensor_CreateFromSingleOpBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensor* HMS_HiAISingleOpTensor_CreateFromSingleOpBuffer (const HiAI_SingleOpTensorDesc * desc, void * data, size_t dataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "的内存地址和数据大小创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法复用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "的ION内存，所复用的内存地址和大小由", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "data"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dataSize"
        })
      }), "确定。", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dataSize"
        })
      }), "必须等于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensordesc_getbytesize",
        children: "HMS_HiAISingleOpTensorDesc_GetByteSize"
      }), "计算得到的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "的字节大小。当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_destroy",
        children: "HMS_HiAISingleOpTensor_Destroy"
      }), "接口销毁该接口创建的Tensor时，不会释放该Tensor数据的内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：该接口会将", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "拷贝到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "中。因此，当", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "不再使用时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensordesc_destroy",
        children: "HMS_HiAISingleOpTensorDesc_Destroy"
      }), "销毁", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_destroy",
        children: "HMS_HiAISingleOpTensor_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
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
            children: "desc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回空指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tensor数据地址。该值必须是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "中的内存地址，否则返回空指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor数据大小。该值不能为0，否则返回空指针。"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象的指针，如果创建失败则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensor_createfromtensordesc",
      children: "HMS_HiAISingleOpTensor_CreateFromTensorDesc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensor* HMS_HiAISingleOpTensor_CreateFromTensorDesc (const HiAI_SingleOpTensorDesc * desc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensordesc_getbytesize",
        children: "HMS_HiAISingleOpTensorDesc_GetByteSize"
      }), "计算Tensor数据的字节数， 并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleopbuffer_create",
        children: "HMS_HiAISingleOpBuffer_Create"
      }), "为Tensor数据分配ION内存。设备驱动将通过“零拷贝”的方式直接获取张量数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：该接口会将", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "拷贝到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "中。因此，当", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "不再使用时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensordesc_destroy",
        children: "HMS_HiAISingleOpTensorDesc_Destroy"
      }), "销毁", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "desc"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_destroy",
        children: "HMS_HiAISingleOpTensor_Destroy"
      }), "销毁，否则会造成内存泄漏。"]
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
            children: "desc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回空指针。"]
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象的指针，如果创建失败则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensor_destroy",
      children: "HMS_HiAISingleOpTensor_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAISingleOpTensor_Destroy (HiAI_SingleOpTensor ** tensor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象时，需要调用该接口销毁该对象，否则会造成内存泄漏。"]
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
            children: "tensor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象的二级指针。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "tensor"
              })
            }), "和 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "*tensor"
              })
            }), "不能是空指针，否则返回错误码。"]
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
      children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensor_getbuffer",
      children: "HMS_HiAISingleOpTensor_GetBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpBuffer* HMS_HiAISingleOpTensor_GetBuffer (const HiAI_SingleOpTensor * tensor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "的Buffer。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "。"]
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
            children: "tensor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象的指针。该值不能为空指针，否则返回空指针。"]
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleopbuffer",
        children: "HiAI_SingleOpBuffer"
      }), "对象的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensor_gettensordesc",
      children: "HMS_HiAISingleOpTensor_GetTensorDesc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensorDesc* HMS_HiAISingleOpTensor_GetTensorDesc (const HiAI_SingleOpTensor * tensor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "的Tensor描述。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "。"]
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
            children: "tensor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象的指针。该值不能为空指针，否则返回空指针。"]
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_create",
      children: "HMS_HiAISingleOpTensorDesc_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpTensorDesc* HMS_HiAISingleOpTensorDesc_Create (const int64_t * dims, size_t dimNum, HiAI_SingleOpDataType dataType, HiAI_SingleOpFormat format, bool isVirtual)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于根据传入的维度、数据类型、排布格式等参数创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用以下接口，基于传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "指针创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "对象： ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_createfromtensordesc",
        children: "HMS_HiAISingleOpTensor_CreateFromTensorDesc"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_createfromsingleopbuffer",
        children: "HMS_HiAISingleOpTensor_CreateFromSingleOpBuffer"
      }), "、 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensor_createfromconst",
        children: "HMS_HiAISingleOpTensor_CreateFromConst"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意：这些接口会将", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象复制到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensor",
        children: "HiAI_SingleOpTensor"
      }), "中。 当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象不再使用时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensordesc_destroy",
        children: "HMS_HiAISingleOpTensorDesc_Destroy"
      }), "接口销毁，否则会造成内存泄漏。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "dims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量维度列表。该值不能为空指针，否则返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dimNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量维度数量。该值不能为0，否则返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量排布格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isVirtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示张量是否是虚拟张量。true表示该张量为虚拟张量，false表示该张量为非虚拟张量。虚拟张量是相连的CANN Kit单算子之间的中间张量，其中的数据仅暂时存在，不经非CANN Kit单算子内存读取或写入。例如， 若CANN Kit单算子A的输出张量T1仅作为CANN Kit单算子B的输入张量，且用户只读取单算子B的输出张量T2，不会读取或写入T1，那么T1需要被设置为虚拟张量，而T2则是非虚拟张量。"
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
      children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象的指针，如果创建失败，则返回空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_destroy",
      children: "HMS_HiAISingleOpTensorDesc_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_HiAISingleOpTensorDesc_Destroy (HiAI_SingleOpTensorDesc ** tensorDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于释放调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaisingleoptensordesc_create",
        children: "HMS_HiAISingleOpTensorDesc_Create"
      }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
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
            children: "tensorDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的二级指针。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "tensorDesc"
              })
            }), "和 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "*tensorDesc"
              })
            }), "不能为空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_getbytesize",
      children: "HMS_HiAISingleOpTensorDesc_GetByteSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAISingleOpTensorDesc_GetByteSize (const HiAI_SingleOpTensorDesc * tensorDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "的维度和数据类型计算的数据占用字节数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "的维度和数据类型计算得到的数据占用字节数。"]
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
            children: "tensorDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "张量的数据字节数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_getdatatype",
      children: "HMS_HiAISingleOpTensorDesc_GetDataType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpDataType HMS_HiAISingleOpTensorDesc_GetDataType (const HiAI_SingleOpTensorDesc * tensorDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "的数据类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象的数据类型。"]
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
            children: "tensorDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回HIAI_SINGLEOP_DT_UNDEFINED。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "张量的数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_getdimension",
      children: "HMS_HiAISingleOpTensorDesc_GetDimension()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t HMS_HiAISingleOpTensorDesc_GetDimension (const HiAI_SingleOpTensorDesc * tensorDesc, size_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "指定索引的维度长度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象的某个维度的长度。"]
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
            children: "tensorDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "维度的索引值。索引从0开始。"
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
      children: ["张量的索引为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "index"
        })
      }), "的维度的长度，如果执行失败，则返回0。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_getdimensioncount",
      children: "HMS_HiAISingleOpTensorDesc_GetDimensionCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAISingleOpTensorDesc_GetDimensionCount (const HiAI_SingleOpTensorDesc * tensorDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "的维度数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象的维度数量。"]
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
            children: "tensorDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "张量的维度数量，如果执行失败，则返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_getformat",
      children: "HMS_HiAISingleOpTensorDesc_GetFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAI_SingleOpFormat HMS_HiAISingleOpTensorDesc_GetFormat (const HiAI_SingleOpTensorDesc * tensorDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "的排布格式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本方法用于获取指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "对象的排布格式。"]
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
            children: "tensorDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回HIAI_SINGLEOP_FORMAT_RESERVED。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "张量的排布格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaisingleoptensordesc_isvirtual",
      children: "HMS_HiAISingleOpTensorDesc_IsVirtual()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool HMS_HiAISingleOpTensorDesc_IsVirtual (const HiAI_SingleOpTensorDesc * tensorDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hiai_singleoptensordesc",
        children: "HiAI_SingleOpTensorDesc"
      }), "是否为虚拟张量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "虚拟张量是相连的CANN Kit单算子之间的中间张量，其中的数据仅暂时存在，不经非CANN Kit单算子内存读取或写入。例如，若CANN Kit单算子A的输出张量T1仅作为CANN Kit单算子B的输入张量，且用户只读取单算子B的输出张量T2，不会读取或写入T1， 那么T1需要被设置为虚拟张量，而T2则是非虚拟张量。"
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
            children: "tensorDesc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象的指针。该值不能为空指针，否则返回false。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果张量是虚拟张量，则返回true，否则返回false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaitensor_getsizewithimageformat",
      children: "HMS_HiAITensor_GetSizeWithImageFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t HMS_HiAITensor_GetSizeWithImageFormat (NN_TensorDesc * desc, HiAI_ImageFormat format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据NN_TensorDesc和HiAI_ImageFormat计算申请tensor的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "desc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NN_TensorDesc指针实例，非空，否则返回0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "format"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的格式", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), "。"]
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
      children: "成功时返回计算后需要申请的tensor的大小，失败返回0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_hiaitensor_setaippparams",
      children: "HMS_HiAITensor_SetAippParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode HMS_HiAITensor_SetAippParams (NN_Tensor * tensor, HiAI_AippParam * aippParams[], size_t aippNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给NN_Tensor设置AippParams。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AIPP参数设置给NN_Tensor后，其内存在tensor使用完成后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_hiaiaippparam_destroy",
        children: "HMS_HiAIAippParam_Destroy"
      }), "释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
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
            children: "tensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NN_Tensor指针实例，非空，否则返回空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aippParams[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIPP参数数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aippNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIPP参数数量。"
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
      children: ["函数执行结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_ReturnCode"
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
434584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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