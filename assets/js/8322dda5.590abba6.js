"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["276939"], {
516181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_game_service_api_gameservice_c_gameservice_module_gameservice_game_performance_gameservice_game_performance_md_832_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-game-service-api-gameservice-c-gameservice-module-gameservice-game-performance-gameservice-game-performance-md-832.json
var site_docs_ref_game_service_api_gameservice_c_gameservice_module_gameservice_game_performance_gameservice_game_performance_md_832_namespaceObject = JSON.parse('{"id":"game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance","title":"GamePerformance","description":"概述","source":"@site/docs-ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance.md","sourceDirName":"game-service-api/gameservice-c/gameservice-module/gameservice-game-performance","slug":"/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"GamePerformance","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-game-performance","kit":"应用服务","last_updated":"2026-04-22","slug":"gameservice-game-performance"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code"},"next":{"title":"game_performance.h","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h/gameservice-game-performance-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance.md


const frontMatter = {
	title: 'GamePerformance',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-game-performance',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'gameservice-game-performance'
};
const contentTitle = 'GamePerformance';

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
  "value": "GamePerformance_ConfigInfo",
  "id": "gameperformance_configinfo",
  "level": 3
}, {
  "value": "GamePerformance_CpuInfo",
  "id": "gameperformance_cpuinfo",
  "level": 3
}, {
  "value": "GamePerformance_CpuLevel",
  "id": "gameperformance_cpulevel",
  "level": 3
}, {
  "value": "GamePerformance_DdrLevel",
  "id": "gameperformance_ddrlevel",
  "level": 3
}, {
  "value": "GamePerformance_DeviceInfo",
  "id": "gameperformance_deviceinfo",
  "level": 3
}, {
  "value": "GamePerformance_DeviceInfoType",
  "id": "gameperformance_deviceinfotype",
  "level": 3
}, {
  "value": "GamePerformance_EngineType",
  "id": "gameperformance_enginetype",
  "level": 3
}, {
  "value": "GamePerformance_ErrorCode",
  "id": "gameperformance_errorcode",
  "level": 3
}, {
  "value": "GamePerformance_GameType",
  "id": "gameperformance_gametype",
  "level": 3
}, {
  "value": "GamePerformance_GpuInfo",
  "id": "gameperformance_gpuinfo",
  "level": 3
}, {
  "value": "GamePerformance_GpuLevel",
  "id": "gameperformance_gpulevel",
  "level": 3
}, {
  "value": "GamePerformance_InitParameters",
  "id": "gameperformance_initparameters",
  "level": 3
}, {
  "value": "GamePerformance_NetInfo",
  "id": "gameperformance_netinfo",
  "level": 3
}, {
  "value": "GamePerformance_NetLoad",
  "id": "gameperformance_netload",
  "level": 3
}, {
  "value": "GamePerformance_PackageInfo",
  "id": "gameperformance_packageinfo",
  "level": 3
}, {
  "value": "GamePerformance_PictureQualityLevel",
  "id": "gameperformance_picturequalitylevel",
  "level": 3
}, {
  "value": "GamePerformance_PlayerInfo",
  "id": "gameperformance_playerinfo",
  "level": 3
}, {
  "value": "GamePerformance_SceneImportanceLevel",
  "id": "gameperformance_sceneimportancelevel",
  "level": 3
}, {
  "value": "GamePerformance_SceneInfo",
  "id": "gameperformance_sceneinfo",
  "level": 3
}, {
  "value": "GamePerformance_ThermalInfo",
  "id": "gameperformance_thermalinfo",
  "level": 3
}, {
  "value": "GamePerformance_ThermalInfoQueryParameters",
  "id": "gameperformance_thermalinfoqueryparameters",
  "level": 3
}, {
  "value": "GamePerformance_ThermalLevelChangedCallback",
  "id": "gameperformance_thermallevelchangedcallback",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "GamePerformance_CpuLevel",
  "id": "gameperformance_cpulevel-1",
  "level": 3
}, {
  "value": "GamePerformance_DdrLevel",
  "id": "gameperformance_ddrlevel-1",
  "level": 3
}, {
  "value": "GamePerformance_DeviceInfoType",
  "id": "gameperformance_deviceinfotype-1",
  "level": 3
}, {
  "value": "GamePerformance_EngineType",
  "id": "gameperformance_enginetype-1",
  "level": 3
}, {
  "value": "GamePerformance_ErrorCode",
  "id": "gameperformance_errorcode-1",
  "level": 3
}, {
  "value": "GamePerformance_GameType",
  "id": "gameperformance_gametype-1",
  "level": 3
}, {
  "value": "GamePerformance_GpuLevel",
  "id": "gameperformance_gpulevel-1",
  "level": 3
}, {
  "value": "GamePerformance_NetLoad",
  "id": "gameperformance_netload-1",
  "level": 3
}, {
  "value": "GamePerformance_PictureQualityLevel",
  "id": "gameperformance_picturequalitylevel-1",
  "level": 3
}, {
  "value": "GamePerformance_SceneImportanceLevel",
  "id": "gameperformance_sceneimportancelevel-1",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetAntiAliasingEnabled()",
  "id": "hms_gameperformance_configinfo_setantialiasingenabled",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetCurrentFrameRate()",
  "id": "hms_gameperformance_configinfo_setcurrentframerate",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetCurrentPictureQualityLevel()",
  "id": "hms_gameperformance_configinfo_setcurrentpicturequalitylevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetCurrentResolution()",
  "id": "hms_gameperformance_configinfo_setcurrentresolution",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetHdModeEnabled()",
  "id": "hms_gameperformance_configinfo_sethdmodeenabled",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetMaxFrameRate()",
  "id": "hms_gameperformance_configinfo_setmaxframerate",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetMaxPictureQualityLevel()",
  "id": "hms_gameperformance_configinfo_setmaxpicturequalitylevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetMaxResolution()",
  "id": "hms_gameperformance_configinfo_setmaxresolution",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetMultithreadingEnabled()",
  "id": "hms_gameperformance_configinfo_setmultithreadingenabled",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetParticleEnabled()",
  "id": "hms_gameperformance_configinfo_setparticleenabled",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ConfigInfo_SetShadowEnabled()",
  "id": "hms_gameperformance_configinfo_setshadowenabled",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CpuInfo_GetCpuLoadLevel()",
  "id": "hms_gameperformance_cpuinfo_getcpuloadlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CpuInfo_GetSingleThreadLoadLevel()",
  "id": "hms_gameperformance_cpuinfo_getsinglethreadloadlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CreateConfigInfo()",
  "id": "hms_gameperformance_createconfiginfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CreateInitParameters()",
  "id": "hms_gameperformance_createinitparameters",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CreateNetInfo()",
  "id": "hms_gameperformance_createnetinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CreatePackageInfo()",
  "id": "hms_gameperformance_createpackageinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CreatePlayerInfo()",
  "id": "hms_gameperformance_createplayerinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CreateSceneInfo()",
  "id": "hms_gameperformance_createsceneinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_CreateThermalInfoQueryParameters()",
  "id": "hms_gameperformance_createthermalinfoqueryparameters",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyConfigInfo()",
  "id": "hms_gameperformance_destroyconfiginfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyCpuInfo()",
  "id": "hms_gameperformance_destroycpuinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyDeviceInfo()",
  "id": "hms_gameperformance_destroydeviceinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyGpuInfo()",
  "id": "hms_gameperformance_destroygpuinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyInitParameters()",
  "id": "hms_gameperformance_destroyinitparameters",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyNetInfo()",
  "id": "hms_gameperformance_destroynetinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyPackageInfo()",
  "id": "hms_gameperformance_destroypackageinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyPlayerInfo()",
  "id": "hms_gameperformance_destroyplayerinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroySceneInfo()",
  "id": "hms_gameperformance_destroysceneinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyThermalInfo()",
  "id": "hms_gameperformance_destroythermalinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DestroyThermalInfoQueryParameters()",
  "id": "hms_gameperformance_destroythermalinfoqueryparameters",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DeviceInfo_GetCpuInfo()",
  "id": "hms_gameperformance_deviceinfo_getcpuinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DeviceInfo_GetGpuInfo()",
  "id": "hms_gameperformance_deviceinfo_getgpuinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_DeviceInfo_GetThermalInfo()",
  "id": "hms_gameperformance_deviceinfo_getthermalinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_GpuInfo_GetBandwidthLoadLevel()",
  "id": "hms_gameperformance_gpuinfo_getbandwidthloadlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_GpuInfo_GetCurrentFrequency()",
  "id": "hms_gameperformance_gpuinfo_getcurrentfrequency",
  "level": 3
}, {
  "value": "HMS_GamePerformance_GpuInfo_GetFragmentLoadLevel()",
  "id": "hms_gameperformance_gpuinfo_getfragmentloadlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_GpuInfo_GetGpuLoadLevel()",
  "id": "hms_gameperformance_gpuinfo_getgpuloadlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_GpuInfo_GetTextureLoadLevel()",
  "id": "hms_gameperformance_gpuinfo_gettextureloadlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_GpuInfo_GetVertexLoadLevel()",
  "id": "hms_gameperformance_gpuinfo_getvertexloadlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_Init()",
  "id": "hms_gameperformance_init",
  "level": 3
}, {
  "value": "HMS_GamePerformance_InitParameters_SetAppVersion()",
  "id": "hms_gameperformance_initparameters_setappversion",
  "level": 3
}, {
  "value": "HMS_GamePerformance_InitParameters_SetBundleName()",
  "id": "hms_gameperformance_initparameters_setbundlename",
  "level": 3
}, {
  "value": "HMS_GamePerformance_NetInfo_SetDownlinkLatency()",
  "id": "hms_gameperformance_netinfo_setdownlinklatency",
  "level": 3
}, {
  "value": "HMS_GamePerformance_NetInfo_SetNetLoad()",
  "id": "hms_gameperformance_netinfo_setnetload",
  "level": 3
}, {
  "value": "HMS_GamePerformance_NetInfo_SetServerLatency()",
  "id": "hms_gameperformance_netinfo_setserverlatency",
  "level": 3
}, {
  "value": "HMS_GamePerformance_NetInfo_SetTotalLatency()",
  "id": "hms_gameperformance_netinfo_settotallatency",
  "level": 3
}, {
  "value": "HMS_GamePerformance_NetInfo_SetUplinkLatency()",
  "id": "hms_gameperformance_netinfo_setuplinklatency",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PackageInfo_SetAppVersion()",
  "id": "hms_gameperformance_packageinfo_setappversion",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PackageInfo_SetBundleName()",
  "id": "hms_gameperformance_packageinfo_setbundlename",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PackageInfo_SetEngineType()",
  "id": "hms_gameperformance_packageinfo_setenginetype",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PackageInfo_SetEngineVersion()",
  "id": "hms_gameperformance_packageinfo_setengineversion",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PackageInfo_SetGameType()",
  "id": "hms_gameperformance_packageinfo_setgametype",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PackageInfo_SetVulkanSupported()",
  "id": "hms_gameperformance_packageinfo_setvulkansupported",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PlayerInfo_SetGamePlayerId()",
  "id": "hms_gameperformance_playerinfo_setgameplayerid",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PlayerInfo_SetTeamPlayerId()",
  "id": "hms_gameperformance_playerinfo_setteamplayerid",
  "level": 3
}, {
  "value": "HMS_GamePerformance_PlayerInfo_SetThirdOpenId()",
  "id": "hms_gameperformance_playerinfo_setthirdopenid",
  "level": 3
}, {
  "value": "HMS_GamePerformance_QueryCpuInfo()",
  "id": "hms_gameperformance_querycpuinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_QueryGpuInfo()",
  "id": "hms_gameperformance_querygpuinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_QueryThermalInfo()",
  "id": "hms_gameperformance_querythermalinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_RegisterThermalLevelChangedCallback()",
  "id": "hms_gameperformance_registerthermallevelchangedcallback",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetChannelCount()",
  "id": "hms_gameperformance_sceneinfo_setchannelcount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetCurrentFrameRate()",
  "id": "hms_gameperformance_sceneinfo_setcurrentframerate",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetDescription()",
  "id": "hms_gameperformance_sceneinfo_setdescription",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetDrawCallCount()",
  "id": "hms_gameperformance_sceneinfo_setdrawcallcount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetImportanceLevel()",
  "id": "hms_gameperformance_sceneinfo_setimportancelevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetKeyThread()",
  "id": "hms_gameperformance_sceneinfo_setkeythread",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetMaxFrameRate()",
  "id": "hms_gameperformance_sceneinfo_setmaxframerate",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetMeshCount()",
  "id": "hms_gameperformance_sceneinfo_setmeshcount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetParticipantCount()",
  "id": "hms_gameperformance_sceneinfo_setparticipantcount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetRecommendedCpuLevel()",
  "id": "hms_gameperformance_sceneinfo_setrecommendedcpulevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetRecommendedDdrLevel()",
  "id": "hms_gameperformance_sceneinfo_setrecommendedddrlevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetRecommendedGpuLevel()",
  "id": "hms_gameperformance_sceneinfo_setrecommendedgpulevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetSceneFrequency()",
  "id": "hms_gameperformance_sceneinfo_setscenefrequency",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetSceneID()",
  "id": "hms_gameperformance_sceneinfo_setsceneid",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetSceneTime()",
  "id": "hms_gameperformance_sceneinfo_setscenetime",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetShaderCount()",
  "id": "hms_gameperformance_sceneinfo_setshadercount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetSubDescription()",
  "id": "hms_gameperformance_sceneinfo_setsubdescription",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetSubSceneID()",
  "id": "hms_gameperformance_sceneinfo_setsubsceneid",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetTextureCount()",
  "id": "hms_gameperformance_sceneinfo_settexturecount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetTriangleCount()",
  "id": "hms_gameperformance_sceneinfo_settrianglecount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_SceneInfo_SetVertexCount()",
  "id": "hms_gameperformance_sceneinfo_setvertexcount",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfo_GetNowNormalizedCurrent()",
  "id": "hms_gameperformance_thermalinfo_getnownormalizedcurrent",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfo_GetRecommendMaxNormalizedCurrent()",
  "id": "hms_gameperformance_thermalinfo_getrecommendmaxnormalizedcurrent",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfo_GetRecommendNormalizedCurrent()",
  "id": "hms_gameperformance_thermalinfo_getrecommendnormalizedcurrent",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfo_GetThermalLevel()",
  "id": "hms_gameperformance_thermalinfo_getthermallevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfo_GetThermalMargin()",
  "id": "hms_gameperformance_thermalinfo_getthermalmargin",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfo_GetThermalTrend()",
  "id": "hms_gameperformance_thermalinfo_getthermaltrend",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfoQueryParameters_SetNeedsPrediction()",
  "id": "hms_gameperformance_thermalinfoqueryparameters_setneedsprediction",
  "level": 3
}, {
  "value": "HMS_GamePerformance_ThermalInfoQueryParameters_SetTargetThermalLevel()",
  "id": "hms_gameperformance_thermalinfoqueryparameters_settargetthermallevel",
  "level": 3
}, {
  "value": "HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks()",
  "id": "hms_gameperformance_unregisterallthermallevelchangedcallbacks",
  "level": 3
}, {
  "value": "HMS_GamePerformance_UnregisterThermalLevelChangedCallback()",
  "id": "hms_gameperformance_unregisterthermallevelchangedcallback",
  "level": 3
}, {
  "value": "HMS_GamePerformance_UpdateConfigInfo()",
  "id": "hms_gameperformance_updateconfiginfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_UpdateNetInfo()",
  "id": "hms_gameperformance_updatenetinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_UpdatePackageInfo()",
  "id": "hms_gameperformance_updatepackageinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_UpdatePlayerInfo()",
  "id": "hms_gameperformance_updateplayerinfo",
  "level": 3
}, {
  "value": "HMS_GamePerformance_UpdateSceneInfo()",
  "id": "hms_gameperformance_updatesceneinfo",
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
        id: "gameperformance",
        children: "GamePerformance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为游戏场景感知模块提供C接口的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.GameService.GamePerformance"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h/gameservice-game-performance-h",
              children: "game_performance.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明游戏场景感知的基本概念。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
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
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义设备性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义GPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义CPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义温度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义温度信息的查询参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义初始化参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏包信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏场景信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏网络信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏玩家信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_enginetype-1",
              children: "GamePerformance_EngineType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_enginetype",
              children: "GamePerformance_EngineType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gametype-1",
              children: "GamePerformance_GameType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gametype",
              children: "GamePerformance_GameType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_picturequalitylevel",
              children: "GamePerformance_PictureQualityLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义画质等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneimportancelevel-1",
              children: "GamePerformance_SceneImportanceLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneimportancelevel",
              children: "GamePerformance_SceneImportanceLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏场景重要程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpulevel-1",
              children: "GamePerformance_CpuLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpulevel",
              children: "GamePerformance_CpuLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义CPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpulevel-1",
              children: "GamePerformance_GpuLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpulevel",
              children: "GamePerformance_GpuLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义GPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_ddrlevel-1",
              children: "GamePerformance_DdrLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_ddrlevel",
              children: "GamePerformance_DdrLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义DDR等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netload-1",
              children: "GamePerformance_NetLoad"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netload",
              children: "GamePerformance_NetLoad"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义网络负载等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode",
              children: "GamePerformance_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfotype-1",
              children: "GamePerformance_DeviceInfoType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfotype",
              children: "GamePerformance_DeviceInfoType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义设备性能信息类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(*", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, void *userData)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_registerthermallevelchangedcallback",
              children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback"
            }), "中使用的回调函数。当温度等级改变并且温度等级小于3档时，该函数将被调用一次。当温度等级大于或等于3档时，该函数将每10秒调用一次。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_enginetype-1",
              children: "GamePerformance_EngineType"
            }), " {  GAME_PERFORMANCE_ENGINE_TYPE_UNITY = 1,  GAME_PERFORMANCE_ENGINE_TYPE_UNREAL = 2,  GAME_PERFORMANCE_ENGINE_TYPE_MESSIAH = 3,  GAME_PERFORMANCE_ENGINE_TYPE_COCOS = 4,  GAME_PERFORMANCE_ENGINE_TYPE_OTHERS = 200  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gametype-1",
              children: "GamePerformance_GameType"
            }), " {  GAME_PERFORMANCE_GAME_TYPE_MOBA = 1,  GAME_PERFORMANCE_GAME_TYPE_RPG = 2,  GAME_PERFORMANCE_GAME_TYPE_FPS = 3,  GAME_PERFORMANCE_GAME_TYPE_FTG = 4,  GAME_PERFORMANCE_GAME_TYPE_RAC = 5,  GAME_PERFORMANCE_GAME_TYPE_OTHERS = 200  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " {  GAME_PERFORMANCE_PQL_SMOOTH = 1,  GAME_PERFORMANCE_PQL_BALANCED = 2,  GAME_PERFORMANCE_PQL_HD = 3,  GAME_PERFORMANCE_PQL_HDR = 4,  GAME_PERFORMANCE_PQL_UHD = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述画质等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneimportancelevel-1",
              children: "GamePerformance_SceneImportanceLevel"
            }), " {  GAME_PERFORMANCE_SIL_LEVEL1 = 1,  GAME_PERFORMANCE_SIL_LEVEL2 = 2,  GAME_PERFORMANCE_SIL_LEVEL3 = 3,  GAME_PERFORMANCE_SIL_LEVEL4 = 4,  GAME_PERFORMANCE_SIL_LEVEL5 = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述场景重要程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpulevel-1",
              children: "GamePerformance_CpuLevel"
            }), " {  GAME_PERFORMANCE_CPU_LEVEL_LOW = 1,  GAME_PERFORMANCE_CPU_LEVEL_MIDDLE = 2,  GAME_PERFORMANCE_CPU_LEVEL_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述CPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpulevel-1",
              children: "GamePerformance_GpuLevel"
            }), " {  GAME_PERFORMANCE_GPU_LEVEL_LOW = 1,  GAME_PERFORMANCE_GPU_LEVEL_MIDDLE = 2,  GAME_PERFORMANCE_GPU_LEVEL_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述GPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_ddrlevel-1",
              children: "GamePerformance_DdrLevel"
            }), " {  GAME_PERFORMANCE_DDR_LEVEL_LOW = 1,  GAME_PERFORMANCE_DDR_LEVEL_MIDDLE = 2,  GAME_PERFORMANCE_DDR_LEVEL_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述DDR等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netload-1",
              children: "GamePerformance_NetLoad"
            }), " {  GAME_PERFORMANCE_NET_LOAD_LIGHT = 1,  GAME_PERFORMANCE_NET_LOAD_MODERATE = 2,  GAME_PERFORMANCE_NET_LOAD_HEAVY = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述网络负载等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " {  GAME_PERFORMANCE_SUCCESS = 0,  GAME_PERFORMANCE_PARAM_INVALID = 401,  GAME_PERFORMANCE_INTERNAL_ERROR = 1010300001,  GAME_PERFORMANCE_AUTH_FAILED = 1010300002,  GAME_PERFORMANCE_INVALID_REQUEST = 1010300003,  GAME_PERFORMANCE_PARAM_ERROR = 1010300004  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述错误码。  GAME_PERFORMANCE_PARAM_ERROR 从6.0.2(22)开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfotype-1",
              children: "GamePerformance_DeviceInfoType"
            }), " {  GAME_PERFORMANCE_DEVICEINFO_TYPE_THERMAL = 0,  GAME_PERFORMANCE_DEVICEINFO_TYPE_GPU = 1,  GAME_PERFORMANCE_DEVICEINFO_TYPE_CPU = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述设备性能信息类型。  GAME_PERFORMANCE_DEVICEINFO_TYPE_CPU 从6.0.2(22)开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_createinitparameters",
              children: "HMS_GamePerformance_CreateInitParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " **initParameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_init",
              children: "HMS_GamePerformance_Init"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroyinitparameters",
              children: "HMS_GamePerformance_DestroyInitParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " **initParameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_initparameters_setbundlename",
              children: "HMS_GamePerformance_InitParameters_SetBundleName"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " *initParameters, const char *bundleName)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例设置包名。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_initparameters_setappversion",
              children: "HMS_GamePerformance_InitParameters_SetAppVersion"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " *initParameters, const char *appVersion)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例设置版本号。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_init",
              children: "HMS_GamePerformance_Init"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " *initParameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化游戏场景感知。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_Init前，必须已设置bundleName，appVersion。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_createpackageinfo",
              children: "HMS_GamePerformance_CreatePackageInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " **packageInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updatepackageinfo",
              children: "HMS_GamePerformance_UpdatePackageInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroypackageinfo",
              children: "HMS_GamePerformance_DestroyPackageInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " **packageInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_packageinfo_setbundlename",
              children: "HMS_GamePerformance_PackageInfo_SetBundleName"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const char *bundleName)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置包名。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_packageinfo_setappversion",
              children: "HMS_GamePerformance_PackageInfo_SetAppVersion"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const char *appVersion)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置版本号。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_packageinfo_setenginetype",
              children: "HMS_GamePerformance_PackageInfo_SetEngineType"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_enginetype-1",
              children: "GamePerformance_EngineType"
            }), " engineType)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置引擎类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_packageinfo_setengineversion",
              children: "HMS_GamePerformance_PackageInfo_SetEngineVersion"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const char *engineVersion)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置引擎版本号。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_packageinfo_setgametype",
              children: "HMS_GamePerformance_PackageInfo_SetGameType"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gametype-1",
              children: "GamePerformance_GameType"
            }), " gameType)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置游戏类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_packageinfo_setvulkansupported",
              children: "HMS_GamePerformance_PackageInfo_SetVulkanSupported"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const bool vulkanSupported)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置是否支持vulkan。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updatepackageinfo",
              children: "HMS_GamePerformance_UpdatePackageInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新游戏包信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_UpdatePackageInfo前，必须已设置bundleName，appVersion。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_createconfiginfo",
              children: "HMS_GamePerformance_CreateConfigInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " **configInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updateconfiginfo",
              children: "HMS_GamePerformance_UpdateConfigInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroyconfiginfo",
              children: "HMS_GamePerformance_DestroyConfigInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " **configInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setmaxpicturequalitylevel",
              children: "HMS_GamePerformance_ConfigInfo_SetMaxPictureQualityLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " maxPictureQualityLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置最大画质等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setcurrentpicturequalitylevel",
              children: "HMS_GamePerformance_ConfigInfo_SetCurrentPictureQualityLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " currentPictureQualityLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置当前画质等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setmaxframerate",
              children: "HMS_GamePerformance_ConfigInfo_SetMaxFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const int64_t maxFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置最大帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setcurrentframerate",
              children: "HMS_GamePerformance_ConfigInfo_SetCurrentFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const int64_t currentFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置当前帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setmaxresolution",
              children: "HMS_GamePerformance_ConfigInfo_SetMaxResolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const char *maxResolution)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置最大分辨率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setcurrentresolution",
              children: "HMS_GamePerformance_ConfigInfo_SetCurrentResolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const char *currentResolution)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置当前分辨率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setantialiasingenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetAntiAliasingEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool antiAliasingEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置是否开启抗锯齿。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setshadowenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetShadowEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool shadowEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置是否开启阴影。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setmultithreadingenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetMultithreadingEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool multithreadingEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置开启多线程。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_setparticleenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetParticleEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool particleEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置粒子效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_configinfo_sethdmodeenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetHdModeEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool hdModeEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置开启高清模式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updateconfiginfo",
              children: "HMS_GamePerformance_UpdateConfigInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_createsceneinfo",
              children: "HMS_GamePerformance_CreateSceneInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " **sceneInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updatesceneinfo",
              children: "HMS_GamePerformance_UpdateSceneInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroysceneinfo",
              children: "HMS_GamePerformance_DestroySceneInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " **sceneInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setsceneid",
              children: "HMS_GamePerformance_SceneInfo_SetSceneID"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t sceneID)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景ID。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setdescription",
              children: "HMS_GamePerformance_SceneInfo_SetDescription"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *description)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setsubsceneid",
              children: "HMS_GamePerformance_SceneInfo_SetSubSceneID"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *subSceneID)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置子场景ID。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setsubdescription",
              children: "HMS_GamePerformance_SceneInfo_SetSubDescription"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *subDescription)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置子场景描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setimportancelevel",
              children: "HMS_GamePerformance_SceneInfo_SetImportanceLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneimportancelevel-1",
              children: "GamePerformance_SceneImportanceLevel"
            }), " importanceLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景重要程度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setscenefrequency",
              children: "HMS_GamePerformance_SceneInfo_SetSceneFrequency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t sceneFrequency)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置该场景在一局游戏中出现的次数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setscenetime",
              children: "HMS_GamePerformance_SceneInfo_SetSceneTime"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t sceneTime)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景持续时间。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setrecommendedcpulevel",
              children: "HMS_GamePerformance_SceneInfo_SetRecommendedCpuLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpulevel-1",
              children: "GamePerformance_CpuLevel"
            }), " recommendedCpuLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置推荐的CPU等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setrecommendedgpulevel",
              children: "HMS_GamePerformance_SceneInfo_SetRecommendedGpuLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpulevel-1",
              children: "GamePerformance_GpuLevel"
            }), " recommendedGpuLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置推荐的GPU等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setrecommendedddrlevel",
              children: "HMS_GamePerformance_SceneInfo_SetRecommendedDdrLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_ddrlevel-1",
              children: "GamePerformance_DdrLevel"
            }), " recommendedDdrLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置推荐的DDR等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setmaxframerate",
              children: "HMS_GamePerformance_SceneInfo_SetMaxFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t maxFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景最大帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setcurrentframerate",
              children: "HMS_GamePerformance_SceneInfo_SetCurrentFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t currentFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景当前帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setkeythread",
              children: "HMS_GamePerformance_SceneInfo_SetKeyThread"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *keyThread)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置关键线程。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setdrawcallcount",
              children: "HMS_GamePerformance_SceneInfo_SetDrawCallCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t drawCallCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均Drawcall数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setvertexcount",
              children: "HMS_GamePerformance_SceneInfo_SetVertexCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t vertexCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均模型顶点数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_settrianglecount",
              children: "HMS_GamePerformance_SceneInfo_SetTriangleCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t triangleCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均模型三角形数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setshadercount",
              children: "HMS_GamePerformance_SceneInfo_SetShaderCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t shaderCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均shader数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_settexturecount",
              children: "HMS_GamePerformance_SceneInfo_SetTextureCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t textureCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均纹理数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setmeshcount",
              children: "HMS_GamePerformance_SceneInfo_SetMeshCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t meshCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均mesh数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setchannelcount",
              children: "HMS_GamePerformance_SceneInfo_SetChannelCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t channelCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧渲染的通道数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_sceneinfo_setparticipantcount",
              children: "HMS_GamePerformance_SceneInfo_SetParticipantCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t participantCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景下的同屏人数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updatesceneinfo",
              children: "HMS_GamePerformance_UpdateSceneInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新游戏场景信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_UpdateSceneInfo前，必须已设置sceneID，importanceLevel。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_createnetinfo",
              children: "HMS_GamePerformance_CreateNetInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " **netInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updatenetinfo",
              children: "HMS_GamePerformance_UpdateNetInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroynetinfo",
              children: "HMS_GamePerformance_DestroyNetInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " **netInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_netinfo_settotallatency",
              children: "HMS_GamePerformance_NetInfo_SetTotalLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t total)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置总网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_netinfo_setuplinklatency",
              children: "HMS_GamePerformance_NetInfo_SetUplinkLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t up)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置上行网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_netinfo_setdownlinklatency",
              children: "HMS_GamePerformance_NetInfo_SetDownlinkLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t down)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置下行网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_netinfo_setserverlatency",
              children: "HMS_GamePerformance_NetInfo_SetServerLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t server)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置服务器网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_netinfo_setnetload",
              children: "HMS_GamePerformance_NetInfo_SetNetLoad"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netload-1",
              children: "GamePerformance_NetLoad"
            }), " netLoad)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置网络负载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updatenetinfo",
              children: "HMS_GamePerformance_UpdateNetInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新游戏网络信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_UpdateNetInfo前必须已设置totalLatency。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_createplayerinfo",
              children: "HMS_GamePerformance_CreatePlayerInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " **playerInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updateplayerinfo",
              children: "HMS_GamePerformance_UpdatePlayerInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroyplayerinfo",
              children: "HMS_GamePerformance_DestroyPlayerInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " **playerInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_playerinfo_setgameplayerid",
              children: "HMS_GamePerformance_PlayerInfo_SetGamePlayerId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo, const char *gamePlayerId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例设置游戏玩家ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：gamePlayerId、teamPlayerId和thirdOpenId不能同时为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_playerinfo_setteamplayerid",
              children: "HMS_GamePerformance_PlayerInfo_SetTeamPlayerId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo, const char *teamPlayerId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例设置团队玩家ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：gamePlayerId、teamPlayerId和thirdOpenId不能同时为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_playerinfo_setthirdopenid",
              children: "HMS_GamePerformance_PlayerInfo_SetThirdOpenId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo, const char *thirdOpenId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例设置游戏官方账号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：gamePlayerId、teamPlayerId和thirdOpenId不能同时为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_updateplayerinfo",
              children: "HMS_GamePerformance_UpdatePlayerInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏玩家信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_registerthermallevelchangedcallback",
              children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfotype-1",
              children: "GamePerformance_DeviceInfoType"
            }), " *types[], size_t size, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
            }), " callback, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅温度变化事件，注册温度变化回调，当达到触发点时，将调用回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_unregisterthermallevelchangedcallback",
              children: "HMS_GamePerformance_UnregisterThermalLevelChangedCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
            }), " callback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册指定温度变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_unregisterallthermallevelchangedcallbacks",
              children: "HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册所有温度变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_createthermalinfoqueryparameters",
              children: "HMS_GamePerformance_CreateThermalInfoQueryParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " **parameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_querythermalinfo",
              children: "HMS_GamePerformance_QueryThermalInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroythermalinfoqueryparameters",
              children: "HMS_GamePerformance_DestroyThermalInfoQueryParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " **parameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfoqueryparameters_setneedsprediction",
              children: "HMS_GamePerformance_ThermalInfoQueryParameters_SetNeedsPrediction"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " *parameters, const bool needsPrediction)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例设置是否需要预测温升趋势。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfoqueryparameters_settargetthermallevel",
              children: "HMS_GamePerformance_ThermalInfoQueryParameters_SetTargetThermalLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " *parameters, const int32_t targetThermalLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例设置预测温升趋势的目标温度等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_querythermalinfo",
              children: "HMS_GamePerformance_QueryThermalInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " *parameters，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " **thermalInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询温度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroythermalinfo",
              children: "HMS_GamePerformance_DestroyThermalInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " **thermalInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_querygpuinfo",
              children: "HMS_GamePerformance_QueryGpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " **gpuInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询GPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroygpuinfo",
              children: "HMS_GamePerformance_DestroyGpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " **gpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_querycpuinfo",
              children: "HMS_GamePerformance_QueryCpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " **cpuInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询CPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroycpuinfo",
              children: "HMS_GamePerformance_DestroyCpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " **cpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_deviceinfo_getthermalinfo",
              children: "HMS_GamePerformance_DeviceInfo_GetThermalInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " **thermalInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "中获取温度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfo_getthermalmargin",
              children: "HMS_GamePerformance_ThermalInfo_GetThermalMargin"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *thermalMargin)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从温度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取温度时间裕量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfo_getthermaltrend",
              children: "HMS_GamePerformance_ThermalInfo_GetThermalTrend"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *thermalTrend)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取温升趋势。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfo_getthermallevel",
              children: "HMS_GamePerformance_ThermalInfo_GetThermalLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *thermalLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取温度等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfo_getrecommendnormalizedcurrent",
              children: "HMS_GamePerformance_ThermalInfo_GetRecommendNormalizedCurrent"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *recommendCurrent)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取系统建议的工作电流。若当前的工作电流高于此值，温升趋势thermalTrend会大于0，设备有发烫风险。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfo_getnownormalizedcurrent",
              children: "HMS_GamePerformance_ThermalInfo_GetNowNormalizedCurrent"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *nowCurrent)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取当前的工作电流。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfo_getrecommendmaxnormalizedcurrent",
              children: "HMS_GamePerformance_ThermalInfo_GetRecommendMaxNormalizedCurrent"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *recommendMaxCurrent)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取系统建议的最大工作电流。若当前的工作电流高于此值，设备会立即发烫。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_deviceinfo_getgpuinfo",
              children: "HMS_GamePerformance_DeviceInfo_GetGpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " **gpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "中获取GPU性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_gpuinfo_getgpuloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetGpuLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *gpuLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU负载信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_gpuinfo_getvertexloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetVertexLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *vertexLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU顶点处理负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_gpuinfo_getfragmentloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetFragmentLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *fragmentLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU片元处理负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_gpuinfo_gettextureloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetTextureLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *textureLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU纹理处理负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_gpuinfo_getbandwidthloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetBandwidthLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *bandwidthLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU带宽负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_gpuinfo_getcurrentfrequency",
              children: "HMS_GamePerformance_GpuInfo_GetCurrentFrequency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *currentFrequency)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU频点信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_deviceinfo_getcpuinfo",
              children: "HMS_GamePerformance_DeviceInfo_GetCpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " **cpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "中获取CPU性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_cpuinfo_getcpuloadlevel",
              children: "HMS_GamePerformance_CpuInfo_GetCpuLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " *cpuInfo, int32_t *cpuLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "中获取CPU负载整体等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_cpuinfo_getsinglethreadloadlevel",
              children: "HMS_GamePerformance_CpuInfo_GetSingleThreadLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " *cpuInfo, int32_t *singleThreadLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "中获取游戏最重线程的负载整体等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_destroydeviceinfo",
              children: "HMS_GamePerformance_DestroyDeviceInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " **deviceInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_configinfo",
      children: "GamePerformance_ConfigInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_ConfigInfo GamePerformance_ConfigInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_cpuinfo",
      children: "GamePerformance_CpuInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_CpuInfo GamePerformance_CpuInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义CPU性能信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_cpulevel",
      children: "GamePerformance_CpuLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_CpuLevel GamePerformance_CpuLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义CPU等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_ddrlevel",
      children: "GamePerformance_DdrLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_DdrLevel GamePerformance_DdrLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义DDR等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_deviceinfo",
      children: "GamePerformance_DeviceInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_DeviceInfo GamePerformance_DeviceInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义设备性能信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_deviceinfotype",
      children: "GamePerformance_DeviceInfoType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_DeviceInfoType GamePerformance_DeviceInfoType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义设备性能信息类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_enginetype",
      children: "GamePerformance_EngineType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_EngineType GamePerformance_EngineType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏引擎类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_errorcode",
      children: "GamePerformance_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_ErrorCode GamePerformance_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_gametype",
      children: "GamePerformance_GameType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_GameType GamePerformance_GameType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_gpuinfo",
      children: "GamePerformance_GpuInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_GpuInfo GamePerformance_GpuInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义GPU性能信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_gpulevel",
      children: "GamePerformance_GpuLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_GpuLevel GamePerformance_GpuLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义GPU等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_initparameters",
      children: "GamePerformance_InitParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_InitParameters GamePerformance_InitParameters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义初始化参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_netinfo",
      children: "GamePerformance_NetInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_NetInfo GamePerformance_NetInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏网络信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_netload",
      children: "GamePerformance_NetLoad"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_NetLoad GamePerformance_NetLoad\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义网络负载等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_packageinfo",
      children: "GamePerformance_PackageInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_PackageInfo GamePerformance_PackageInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义包信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_picturequalitylevel",
      children: "GamePerformance_PictureQualityLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_PictureQualityLevel GamePerformance_PictureQualityLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义画质等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_playerinfo",
      children: "GamePerformance_PlayerInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_PlayerInfo GamePerformance_PlayerInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏玩家信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_sceneimportancelevel",
      children: "GamePerformance_SceneImportanceLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePerformance_SceneImportanceLevel GamePerformance_SceneImportanceLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义场景重要程度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_sceneinfo",
      children: "GamePerformance_SceneInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_SceneInfo GamePerformance_SceneInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏场景信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_thermalinfo",
      children: "GamePerformance_ThermalInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_ThermalInfo GamePerformance_ThermalInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义温度信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_thermalinfoqueryparameters",
      children: "GamePerformance_ThermalInfoQueryParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePerformance_ThermalInfoQueryParameters GamePerformance_ThermalInfoQueryParameters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义温度信息的查询参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_thermallevelchangedcallback",
      children: "GamePerformance_ThermalLevelChangedCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(*GamePerformance_ThermalLevelChangedCallback) (GamePerformance_DeviceInfo *deviceInfo, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_registerthermallevelchangedcallback",
        children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback"
      }), "中使用的回调函数。当温度等级改变并且温度等级小于3时，该函数将被调用一次。当温度等级大于或等于3级时，该函数将每10秒调用一次。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备详细信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户指定的数据。用户自定义传参。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_cpulevel-1",
      children: "GamePerformance_CpuLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_CpuLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义CPU等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_CPU_LEVEL_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_CPU_LEVEL_MIDDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_CPU_LEVEL_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_ddrlevel-1",
      children: "GamePerformance_DdrLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_DdrLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义DDR等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_DDR_LEVEL_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_DDR_LEVEL_MIDDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_DDR_LEVEL_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_deviceinfotype-1",
      children: "GamePerformance_DeviceInfoType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_DeviceInfoType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义回调返回的设备性能信息类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_DEVICEINFO_TYPE_THERMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_DEVICEINFO_TYPE_GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_DEVICEINFO_TYPE_CPU"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CPU性能信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.2(22)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_enginetype-1",
      children: "GamePerformance_EngineType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_EngineType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏引擎类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_ENGINE_TYPE_UNITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNITY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_ENGINE_TYPE_UNREAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNREAL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_ENGINE_TYPE_MESSIAH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MESSIAH。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_ENGINE_TYPE_COCOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COCOS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_ENGINE_TYPE_OTHERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他引擎类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_errorcode-1",
      children: "GamePerformance_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "GAME_PERFORMANCE_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_PARAM_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_INTERNAL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_AUTH_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鉴权失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_INVALID_REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_PARAM_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误。  起始版本：6.0.2(22)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_gametype-1",
      children: "GamePerformance_GameType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_GameType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "GAME_PERFORMANCE_GAME_TYPE_MOBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多人在线战术竞技。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_GAME_TYPE_RPG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "角色扮演。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_GAME_TYPE_FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一人称射击类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_GAME_TYPE_FTG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格斗游戏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_GAME_TYPE_RAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "竞速游戏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_GAME_TYPE_OTHERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他游戏类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_gpulevel-1",
      children: "GamePerformance_GpuLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_GpuLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义GPU等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_GPU_LEVEL_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_GPU_LEVEL_MIDDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_GPU_LEVEL_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_netload-1",
      children: "GamePerformance_NetLoad"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_NetLoad\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义网络负载等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_NET_LOAD_LIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轻度负载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_NET_LOAD_MODERATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中度负载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_NET_LOAD_HEAVY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重度负载。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_picturequalitylevel-1",
      children: "GamePerformance_PictureQualityLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_PictureQualityLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义画质等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_PQL_SMOOTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流畅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_PQL_BALANCED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "均衡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_PQL_HD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高清。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_PQL_HDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR高清。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_PQL_UHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超高清。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gameperformance_sceneimportancelevel-1",
      children: "GamePerformance_SceneImportanceLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePerformance_SceneImportanceLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏场景重要程度，5个等级，重要程度从1到5递增。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "GAME_PERFORMANCE_SIL_LEVEL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等级1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SIL_LEVEL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等级2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SIL_LEVEL3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等级3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SIL_LEVEL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等级4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SIL_LEVEL5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等级5。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setantialiasingenabled",
      children: "HMS_GamePerformance_ConfigInfo_SetAntiAliasingEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetAntiAliasingEnabled (GamePerformance_ConfigInfo *configInfo, const bool antiAliasingEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置是否开启抗锯齿。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "antiAliasingEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启抗锯齿。  - true：开启  - false：不开启  默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setcurrentframerate",
      children: "HMS_GamePerformance_ConfigInfo_SetCurrentFrameRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetCurrentFrameRate (GamePerformance_ConfigInfo *configInfo, const int64_t currentFrameRate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置当前帧率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentFrameRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前帧率。取值范围为[1, 144]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setcurrentpicturequalitylevel",
      children: "HMS_GamePerformance_ConfigInfo_SetCurrentPictureQualityLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetCurrentPictureQualityLevel (GamePerformance_ConfigInfo *configInfo, const GamePerformance_PictureQualityLevel currentPictureQualityLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置当前画质等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentPictureQualityLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前画质等级", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setcurrentresolution",
      children: "HMS_GamePerformance_ConfigInfo_SetCurrentResolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetCurrentResolution (GamePerformance_ConfigInfo *configInfo, const char *currentResolution)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置当前分辨率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentResolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前分辨率。格式AxB（如1260x1980），字符长度范围：[1, 32]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_sethdmodeenabled",
      children: "HMS_GamePerformance_ConfigInfo_SetHdModeEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetHdModeEnabled (GamePerformance_ConfigInfo *configInfo, const bool hdModeEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置开启高清模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hdModeEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启高清模式。  - true：开启  - false：不开启  默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setmaxframerate",
      children: "HMS_GamePerformance_ConfigInfo_SetMaxFrameRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetMaxFrameRate (GamePerformance_ConfigInfo *configInfo, const int64_t maxFrameRate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置最大帧率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFrameRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大帧率。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setmaxpicturequalitylevel",
      children: "HMS_GamePerformance_ConfigInfo_SetMaxPictureQualityLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetMaxPictureQualityLevel (GamePerformance_ConfigInfo *configInfo, const GamePerformance_PictureQualityLevel maxPictureQualityLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置最大画质等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxPictureQualityLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持的画质最高等级", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setmaxresolution",
      children: "HMS_GamePerformance_ConfigInfo_SetMaxResolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetMaxResolution (GamePerformance_ConfigInfo *configInfo, const char *maxResolution)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置最大分辨率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxResolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大分辨率。格式AxB（如1260x1980），字符长度范围：[1, 32]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setmultithreadingenabled",
      children: "HMS_GamePerformance_ConfigInfo_SetMultithreadingEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetMultithreadingEnabled (GamePerformance_ConfigInfo *configInfo, const bool multithreadingEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置开启多线程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multithreadingEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启多线程。  - true：开启  - false：不开启  默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setparticleenabled",
      children: "HMS_GamePerformance_ConfigInfo_SetParticleEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetParticleEnabled (GamePerformance_ConfigInfo *configInfo, const bool particleEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置粒子效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "particleEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启粒子效果。  - true：开启  - false：不开启  默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_configinfo_setshadowenabled",
      children: "HMS_GamePerformance_ConfigInfo_SetShadowEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ConfigInfo_SetShadowEnabled (GamePerformance_ConfigInfo *configInfo, const bool shadowEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例设置是否开启阴影。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadowEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启阴影。  - true：开启  - false：不开启  默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_cpuinfo_getcpuloadlevel",
      children: "HMS_GamePerformance_CpuInfo_GetCpuLoadLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CpuInfo_GetCpuLoadLevel (GamePerformance_CpuInfo *cpuInfo, int32_t *cpuLoadLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_cpuinfo",
        children: "GamePerformance_CpuInfo"
      }), "中获取CPU负载整体等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
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
            children: "cpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "实例的指针。该值不可以为空，否则将返回错误码1010300004。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpuLoadLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU负载整体等级，取值范围为[1, 10]区间的整数。值越大表示负载越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_cpuinfo_getsinglethreadloadlevel",
      children: "HMS_GamePerformance_CpuInfo_GetSingleThreadLoadLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CpuInfo_GetSingleThreadLoadLevel (GamePerformance_CpuInfo *cpuInfo, int32_t *singleThreadLoadLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_cpuinfo",
        children: "GamePerformance_CpuInfo"
      }), "中获取游戏最重线程的负载整体等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
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
            children: "cpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码1010300004。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleThreadLoadLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏最重线程的负载整体等级，取值范围为[1, 10]区间的整数。值越大表示负载越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_createconfiginfo",
      children: "HMS_GamePerformance_CreateConfigInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CreateConfigInfo (GamePerformance_ConfigInfo **configInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_updateconfiginfo",
        children: "HMS_GamePerformance_UpdateConfigInfo"
      }), "方法中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_createinitparameters",
      children: "HMS_GamePerformance_CreateInitParameters()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CreateInitParameters (GamePerformance_InitParameters **initParameters)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_initparameters",
        children: "GamePerformance_InitParameters"
      }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_init",
        children: "HMS_GamePerformance_Init"
      }), "方法中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "initParameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "初始化参数实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_createnetinfo",
      children: "HMS_GamePerformance_CreateNetInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CreateNetInfo (GamePerformance_NetInfo **netInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_netinfo",
        children: "GamePerformance_NetInfo"
      }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_updatenetinfo",
        children: "HMS_GamePerformance_UpdateNetInfo"
      }), "方法中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_createpackageinfo",
      children: "HMS_GamePerformance_CreatePackageInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CreatePackageInfo (GamePerformance_PackageInfo **packageInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_updatepackageinfo",
        children: "HMS_GamePerformance_UpdatePackageInfo"
      }), "方法中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_createplayerinfo",
      children: "HMS_GamePerformance_CreatePlayerInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CreatePlayerInfo (GamePerformance_PlayerInfo **playerInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_playerinfo",
        children: "GamePerformance_PlayerInfo"
      }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_updateplayerinfo",
        children: "HMS_GamePerformance_UpdatePlayerInfo"
      }), "方法中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "playerInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_createsceneinfo",
      children: "HMS_GamePerformance_CreateSceneInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CreateSceneInfo (GamePerformance_SceneInfo **sceneInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_updatesceneinfo",
        children: "HMS_GamePerformance_UpdateSceneInfo"
      }), "方法中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_createthermalinfoqueryparameters",
      children: "HMS_GamePerformance_CreateThermalInfoQueryParameters()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_CreateThermalInfoQueryParameters (GamePerformance_ThermalInfoQueryParameters **parameters)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfoqueryparameters",
        children: "GamePerformance_ThermalInfoQueryParameters"
      }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_querythermalinfo",
        children: "HMS_GamePerformance_QueryThermalInfo"
      }), "方法中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroyconfiginfo",
      children: "HMS_GamePerformance_DestroyConfigInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyConfigInfo (GamePerformance_ConfigInfo **configInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_configinfo",
        children: "GamePerformance_ConfigInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroycpuinfo",
      children: "HMS_GamePerformance_DestroyCpuInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyCpuInfo (GamePerformance_CpuInfo **cpuInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_cpuinfo",
        children: "GamePerformance_CpuInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
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
            children: "cpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码1010300004。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroydeviceinfo",
      children: "HMS_GamePerformance_DestroyDeviceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyDeviceInfo (GamePerformance_DeviceInfo **deviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_deviceinfo",
        children: "GamePerformance_DeviceInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroygpuinfo",
      children: "HMS_GamePerformance_DestroyGpuInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyGpuInfo (GamePerformance_GpuInfo **gpuInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroyinitparameters",
      children: "HMS_GamePerformance_DestroyInitParameters()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyInitParameters (GamePerformance_InitParameters **initParameters)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_initparameters",
        children: "GamePerformance_InitParameters"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "initParameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroynetinfo",
      children: "HMS_GamePerformance_DestroyNetInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyNetInfo (GamePerformance_NetInfo **netInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_netinfo",
        children: "GamePerformance_NetInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroypackageinfo",
      children: "HMS_GamePerformance_DestroyPackageInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyPackageInfo (GamePerformance_PackageInfo **packageInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroyplayerinfo",
      children: "HMS_GamePerformance_DestroyPlayerInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyPlayerInfo (GamePerformance_PlayerInfo **playerInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_playerinfo",
        children: "GamePerformance_PlayerInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "playerInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroysceneinfo",
      children: "HMS_GamePerformance_DestroySceneInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroySceneInfo (GamePerformance_SceneInfo **sceneInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroythermalinfo",
      children: "HMS_GamePerformance_DestroyThermalInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyThermalInfo (GamePerformance_ThermalInfo **thermalInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_destroythermalinfoqueryparameters",
      children: "HMS_GamePerformance_DestroyThermalInfoQueryParameters()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DestroyThermalInfoQueryParameters (GamePerformance_ThermalInfoQueryParameters **parameters)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfoqueryparameters",
        children: "GamePerformance_ThermalInfoQueryParameters"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_deviceinfo_getcpuinfo",
      children: "HMS_GamePerformance_DeviceInfo_GetCpuInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DeviceInfo_GetCpuInfo (GamePerformance_DeviceInfo *deviceInfo, GamePerformance_CpuInfo **cpuInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_deviceinfo",
        children: "GamePerformance_DeviceInfo"
      }), "中获取CPU性能信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_cpuinfo",
        children: "GamePerformance_CpuInfo"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_cpuinfo",
        children: "GamePerformance_CpuInfo"
      }), "实例不再使用，必须调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_destroycpuinfo",
        children: "HMS_GamePerformance_DestroyCpuInfo"
      }), "销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "实例。该值不可以为空，否则将返回错误码1010300004。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_deviceinfo_getgpuinfo",
      children: "HMS_GamePerformance_DeviceInfo_GetGpuInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DeviceInfo_GetGpuInfo (GamePerformance_DeviceInfo *deviceInfo, GamePerformance_GpuInfo **gpuInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_deviceinfo",
        children: "GamePerformance_DeviceInfo"
      }), "中获取GPU性能信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "实例不再使用，必须调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_destroygpuinfo",
        children: "HMS_GamePerformance_DestroyGpuInfo"
      }), "销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_deviceinfo_getthermalinfo",
      children: "HMS_GamePerformance_DeviceInfo_GetThermalInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_DeviceInfo_GetThermalInfo (GamePerformance_DeviceInfo *deviceInfo, GamePerformance_ThermalInfo **thermalInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_deviceinfo",
        children: "GamePerformance_DeviceInfo"
      }), "中获取温度信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "实例不再使用，必须调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_destroythermalinfo",
        children: "HMS_GamePerformance_DestroyThermalInfo"
      }), "销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_gpuinfo_getbandwidthloadlevel",
      children: "HMS_GamePerformance_GpuInfo_GetBandwidthLoadLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_GpuInfo_GetBandwidthLoadLevel (GamePerformance_GpuInfo *gpuInfo, int32_t *bandwidthLoadLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "中获取GPU带宽负载等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bandwidthLoadLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU带宽负载等级，取值范围为[1, 10]区间的整数。值越大表示负载越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_gpuinfo_getcurrentfrequency",
      children: "HMS_GamePerformance_GpuInfo_GetCurrentFrequency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_GpuInfo_GetCurrentFrequency (GamePerformance_GpuInfo *gpuInfo, int32_t *currentFrequency)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "中获取GPU频点信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentFrequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU频点信息，单位：KHz。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_gpuinfo_getfragmentloadlevel",
      children: "HMS_GamePerformance_GpuInfo_GetFragmentLoadLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_GpuInfo_GetFragmentLoadLevel (GamePerformance_GpuInfo *gpuInfo, int32_t *fragmentLoadLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "中获取GPU片元处理负载等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fragmentLoadLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU片元处理负载等级，取值范围为[1, 10]区间的整数。值越大表示负载越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_gpuinfo_getgpuloadlevel",
      children: "HMS_GamePerformance_GpuInfo_GetGpuLoadLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_GpuInfo_GetGpuLoadLevel (GamePerformance_GpuInfo *gpuInfo, int32_t *gpuLoadLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "中获取GPU负载信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gpuLoadLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU负载信息，取值范围为[1, 10]区间的整数。值越大表示负载越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_gpuinfo_gettextureloadlevel",
      children: "HMS_GamePerformance_GpuInfo_GetTextureLoadLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_GpuInfo_GetTextureLoadLevel (GamePerformance_GpuInfo *gpuInfo, int32_t *textureLoadLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "中获取GPU纹理处理负载等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textureLoadLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU纹理处理负载等级，取值范围为[1, 10]区间的整数。值越高表示负载越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_gpuinfo_getvertexloadlevel",
      children: "HMS_GamePerformance_GpuInfo_GetVertexLoadLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_GpuInfo_GetVertexLoadLevel (GamePerformance_GpuInfo *gpuInfo, int32_t *vertexLoadLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "中获取GPU顶点处理负载等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vertexLoadLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU顶点处理负载等级，取值范围为[1, 10]区间的整数。值越大表示负载越高。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_init",
      children: "HMS_GamePerformance_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_Init (GamePerformance_InitParameters *initParameters)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化游戏场景感知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(552770)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用HMS_GamePerformance_Init前，必须已调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_initparameters_setbundlename",
        children: "HMS_GamePerformance_InitParameters_SetBundleName"
      }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_initparameters_setappversion",
        children: "HMS_GamePerformance_InitParameters_SetAppVersion"
      }), "接口，分别设置bundleName和appVersion。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "initParameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_AUTH_FAILED：认证失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_initparameters_setappversion",
      children: "HMS_GamePerformance_InitParameters_SetAppVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_InitParameters_SetAppVersion (GamePerformance_InitParameters *initParameters,const char *appVersion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_initparameters",
        children: "GamePerformance_InitParameters"
      }), "实例设置版本号。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "initParameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏版本号。字符长度范围：[1, 64]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_initparameters_setbundlename",
      children: "HMS_GamePerformance_InitParameters_SetBundleName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_InitParameters_SetBundleName (GamePerformance_InitParameters *initParameters, const char *bundleName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_initparameters",
        children: "GamePerformance_InitParameters"
      }), "实例设置包名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "initParameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏包名。字符长度范围：[1, 128]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_netinfo_setdownlinklatency",
      children: "HMS_GamePerformance_NetInfo_SetDownlinkLatency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_NetInfo_SetDownlinkLatency (GamePerformance_NetInfo *netInfo, const int64_t down)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_netinfo",
        children: "GamePerformance_NetInfo"
      }), "实例设置下行网络时延。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下行网络时延，单位：毫秒（ms）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_netinfo_setnetload",
      children: "HMS_GamePerformance_NetInfo_SetNetLoad()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_NetInfo_SetNetLoad (GamePerformance_NetInfo *netInfo, const GamePerformance_NetLoad netLoad)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_netinfo",
        children: "GamePerformance_NetInfo"
      }), "实例设置网络负载。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netLoad"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络负载", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netload",
              children: "GamePerformance_NetLoad"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_netinfo_setserverlatency",
      children: "HMS_GamePerformance_NetInfo_SetServerLatency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_NetInfo_SetServerLatency (GamePerformance_NetInfo *netInfo, const int64_t server)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_netinfo",
        children: "GamePerformance_NetInfo"
      }), "实例设置服务器网络时延。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器网络时延，单位：毫秒（ms）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_netinfo_settotallatency",
      children: "HMS_GamePerformance_NetInfo_SetTotalLatency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_NetInfo_SetTotalLatency (GamePerformance_NetInfo *netInfo, const int64_t total)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_netinfo",
        children: "GamePerformance_NetInfo"
      }), "实例设置总网络时延。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "总网络时延，单位：毫秒（ms）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_netinfo_setuplinklatency",
      children: "HMS_GamePerformance_NetInfo_SetUplinkLatency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_NetInfo_SetUplinkLatency (GamePerformance_NetInfo *netInfo, const int64_t up)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_netinfo",
        children: "GamePerformance_NetInfo"
      }), "实例设置上行网络时延。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "up"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上行网络时延，单位：毫秒（ms）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_packageinfo_setappversion",
      children: "HMS_GamePerformance_PackageInfo_SetAppVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PackageInfo_SetAppVersion (GamePerformance_PackageInfo *packageInfo, const char *appVersion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例设置游戏版本号。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏版本号。字符长度范围：[1, 64]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_packageinfo_setbundlename",
      children: "HMS_GamePerformance_PackageInfo_SetBundleName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PackageInfo_SetBundleName (GamePerformance_PackageInfo *packageInfo, const char *bundleName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例设置包名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏包名。字符长度范围：[1, 128]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_packageinfo_setenginetype",
      children: "HMS_GamePerformance_PackageInfo_SetEngineType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PackageInfo_SetEngineType (GamePerformance_PackageInfo *packageInfo, const GamePerformance_EngineType engineType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例设置引擎类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "engineType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["引擎类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_enginetype",
              children: "GamePerformance_EngineType"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_packageinfo_setengineversion",
      children: "HMS_GamePerformance_PackageInfo_SetEngineVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PackageInfo_SetEngineVersion (GamePerformance_PackageInfo *packageInfo, const char *engineVersion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例设置引擎版本号。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "engineVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏引擎版本号。字符长度范围：[0, 64]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_packageinfo_setgametype",
      children: "HMS_GamePerformance_PackageInfo_SetGameType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PackageInfo_SetGameType (GamePerformance_PackageInfo *packageInfo, const GamePerformance_GameType gameType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例设置游戏类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gameType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gametype",
              children: "GamePerformance_GameType"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_packageinfo_setvulkansupported",
      children: "HMS_GamePerformance_PackageInfo_SetVulkanSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PackageInfo_SetVulkanSupported (GamePerformance_PackageInfo *packageInfo, const bool vulkanSupported)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_packageinfo",
        children: "GamePerformance_PackageInfo"
      }), "实例设置是否支持vulkan。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vulkanSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持vulkan。  - true：支持  - false：不支持  默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_playerinfo_setgameplayerid",
      children: "HMS_GamePerformance_PlayerInfo_SetGamePlayerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PlayerInfo_SetGamePlayerId (GamePerformance_PlayerInfo *playerInfo, const char *gamePlayerId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_playerinfo",
        children: "GamePerformance_PlayerInfo"
      }), "实例设置游戏玩家ID。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(312912)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setgameplayerid",
        children: "HMS_GamePerformance_PlayerInfo_SetGamePlayerId"
      }), "设置的gamePlayerId、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setteamplayerid",
        children: "HMS_GamePerformance_PlayerInfo_SetTeamPlayerId"
      }), "设置的teamPlayerId和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setthirdopenid",
        children: "HMS_GamePerformance_PlayerInfo_SetThirdOpenId"
      }), "设置的thirdOpenId不能同时为空。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "playerInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gamePlayerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏玩家ID。字符长度范围：[0, 256]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_playerinfo_setteamplayerid",
      children: "HMS_GamePerformance_PlayerInfo_SetTeamPlayerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PlayerInfo_SetTeamPlayerId (GamePerformance_PlayerInfo *playerInfo, const char *teamPlayerId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_playerinfo",
        children: "GamePerformance_PlayerInfo"
      }), "实例设置团队玩家ID。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435704)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setgameplayerid",
        children: "HMS_GamePerformance_PlayerInfo_SetGamePlayerId"
      }), "设置的gamePlayerId、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setteamplayerid",
        children: "HMS_GamePerformance_PlayerInfo_SetTeamPlayerId"
      }), "设置的teamPlayerId和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setthirdopenid",
        children: "HMS_GamePerformance_PlayerInfo_SetThirdOpenId"
      }), "设置的thirdOpenId不能同时为空。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "playerInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "teamPlayerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "团队玩家ID。字符长度范围：[0, 256]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_playerinfo_setthirdopenid",
      children: "HMS_GamePerformance_PlayerInfo_SetThirdOpenId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_PlayerInfo_SetThirdOpenId (GamePerformance_PlayerInfo *playerInfo, const char *thirdOpenId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_playerinfo",
        children: "GamePerformance_PlayerInfo"
      }), "实例设置游戏官方账号。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(40183)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setgameplayerid",
        children: "HMS_GamePerformance_PlayerInfo_SetGamePlayerId"
      }), "设置的gamePlayerId、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setteamplayerid",
        children: "HMS_GamePerformance_PlayerInfo_SetTeamPlayerId"
      }), "设置的teamPlayerId和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_playerinfo_setthirdopenid",
        children: "HMS_GamePerformance_PlayerInfo_SetThirdOpenId"
      }), "设置的thirdOpenId不能同时为空。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "playerInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thirdOpenId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏官方账号。字符长度范围：[0, 128]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_querycpuinfo",
      children: "HMS_GamePerformance_QueryCpuInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_QueryCpuInfo (GamePerformance_CpuInfo **cpuInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询CPU性能信息。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_cpuinfo",
        children: "GamePerformance_CpuInfo"
      }), "实例不再使用，必须调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_destroycpuinfo",
        children: "HMS_GamePerformance_DestroyCpuInfo"
      }), "销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
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
            children: "cpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。请通过[在线提单](", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/add/101704353566310877?level2=101704353626565886&level3=101704354579010004&keyWord=Game",
              children: "https://developer.huawei.com/consumer/cn/support/feedback/#/add/101704353566310877?level2=101704353626565886&level3=101704354579010004&keyWord=Game"
            }), " Service Kit)系统提交此问题。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。请先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_init",
              children: "HMS_GamePerformance_Init"
            }), "接口。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_querygpuinfo",
      children: "HMS_GamePerformance_QueryGpuInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_QueryGpuInfo (GamePerformance_GpuInfo **gpuInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询GPU性能信息。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_gpuinfo",
        children: "GamePerformance_GpuInfo"
      }), "实例不再使用，必须调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_destroygpuinfo",
        children: "HMS_GamePerformance_DestroyGpuInfo"
      }), "销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(265160)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mali系列GPU不支持采集GPU性能信息，无法获取设备GPU性能信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "gpuInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_querythermalinfo",
      children: "HMS_GamePerformance_QueryThermalInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_QueryThermalInfo (GamePerformance_ThermalInfoQueryParameters *parameters, GamePerformance_ThermalInfo **thermalInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询温度信息。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "实例不再使用，必须调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_destroythermalinfo",
        children: "HMS_GamePerformance_DestroyThermalInfo"
      }), "销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_registerthermallevelchangedcallback",
      children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_RegisterThermalLevelChangedCallback (GamePerformance_DeviceInfoType *types[], size_t size, GamePerformance_ThermalLevelChangedCallback callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅温度变化事件，注册温度变化回调，当达到触发点时，将调用回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当温度等级改变并且温度等级小于3档时，该函数将被调用一次。当温度等级大于或等于3档时，该函数将每10秒调用一次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(860656)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mali系列GPU不支持采集GPU性能信息，无法获取设备GPU性能信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "types[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册回调的设备性能信息类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_deviceinfotype-1",
              children: "GamePerformance_DeviceInfoType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "types数组的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户指定数据。用户自定义任意类型，callback透传返回。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setchannelcount",
      children: "HMS_GamePerformance_SceneInfo_SetChannelCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetChannelCount (GamePerformance_SceneInfo *sceneInfo, const int64_t channelCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置每帧渲染的通道数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧渲染的通道数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setcurrentframerate",
      children: "HMS_GamePerformance_SceneInfo_SetCurrentFrameRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetCurrentFrameRate (GamePerformance_SceneInfo *sceneInfo, const int64_t currentFrameRate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置场景当前帧率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentFrameRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景当前帧率。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setdescription",
      children: "HMS_GamePerformance_SceneInfo_SetDescription()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetDescription (GamePerformance_SceneInfo *sceneInfo, const char *description)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置场景描述。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景描述（自定义描述）。字符长度范围：[0, 128]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setdrawcallcount",
      children: "HMS_GamePerformance_SceneInfo_SetDrawCallCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetDrawCallCount (GamePerformance_SceneInfo *sceneInfo, const int64_t drawCallCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置每帧的平均Drawcall数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drawCallCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧的平均Drawcall数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setimportancelevel",
      children: "HMS_GamePerformance_SceneInfo_SetImportanceLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetImportanceLevel (GamePerformance_SceneInfo *sceneInfo, const GamePerformance_SceneImportanceLevel importanceLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置场景重要程度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "importanceLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["场景重要程度", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneimportancelevel",
              children: "GamePerformance_SceneImportanceLevel"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setkeythread",
      children: "HMS_GamePerformance_SceneInfo_SetKeyThread()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetKeyThread (GamePerformance_SceneInfo *sceneInfo, const char *keyThread)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置关键线程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyThread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该场景下的关键线程。  - render：渲染线程  - logic：逻辑线程  - net：网络线程  按照 render"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setmaxframerate",
      children: "HMS_GamePerformance_SceneInfo_SetMaxFrameRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetMaxFrameRate (GamePerformance_SceneInfo *sceneInfo, const int64_t maxFrameRate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置场景最大帧率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFrameRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景最大帧率。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setmeshcount",
      children: "HMS_GamePerformance_SceneInfo_SetMeshCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetMeshCount (GamePerformance_SceneInfo *sceneInfo, const int64_t meshCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置每帧的平均mesh数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "meshCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧的平均mesh数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setparticipantcount",
      children: "HMS_GamePerformance_SceneInfo_SetParticipantCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetParticipantCount (GamePerformance_SceneInfo *sceneInfo, const int64_t participantCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置场景下的同屏人数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "participantCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景下的同屏人数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setrecommendedcpulevel",
      children: "HMS_GamePerformance_SceneInfo_SetRecommendedCpuLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetRecommendedCpuLevel (GamePerformance_SceneInfo *sceneInfo, const GamePerformance_CpuLevel recommendedCpuLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置推荐的CPU等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recommendedCpuLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["推荐的CPU等级", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_cpulevel",
              children: "GamePerformance_CpuLevel"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setrecommendedddrlevel",
      children: "HMS_GamePerformance_SceneInfo_SetRecommendedDdrLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetRecommendedDdrLevel (GamePerformance_SceneInfo *sceneInfo, const GamePerformance_DdrLevel recommendedDdrLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置推荐的DDR等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recommendedDdrLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["推荐的DDR等级", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_ddrlevel",
              children: "GamePerformance_DdrLevel"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setrecommendedgpulevel",
      children: "HMS_GamePerformance_SceneInfo_SetRecommendedGpuLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetRecommendedGpuLevel (GamePerformance_SceneInfo *sceneInfo, const GamePerformance_GpuLevel recommendedGpuLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置推荐的GPU等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recommendedGpuLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["推荐的GPU等级", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_gpulevel",
              children: "GamePerformance_GpuLevel"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setscenefrequency",
      children: "HMS_GamePerformance_SceneInfo_SetSceneFrequency()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetSceneFrequency (GamePerformance_SceneInfo *sceneInfo, const int64_t sceneFrequency)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置该场景在一局游戏中出现的次数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sceneFrequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该场景在一局游戏中出现的次数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setsceneid",
      children: "HMS_GamePerformance_SceneInfo_SetSceneID()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetSceneID (GamePerformance_SceneInfo *sceneInfo, const int64_t sceneID)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置场景ID。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sceneID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景ID。  0：回切场景标识结束  1：游戏启动  2：游戏内更新  3：登录过程  4：主界面  5：加载一局游戏（自己加载）  6：加载一局游戏（自己加载完毕，等待其他玩家）  7：游戏中  8：观战模式"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setscenetime",
      children: "HMS_GamePerformance_SceneInfo_SetSceneTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetSceneTime (GamePerformance_SceneInfo *sceneInfo, const int64_t sceneTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置场景持续时间。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sceneTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景持续时间，单位：毫秒（ms）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setshadercount",
      children: "HMS_GamePerformance_SceneInfo_SetShaderCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetShaderCount (GamePerformance_SceneInfo *sceneInfo, const int64_t shaderCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置每帧的平均shader数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shaderCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧的平均shader数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setsubdescription",
      children: "HMS_GamePerformance_SceneInfo_SetSubDescription()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetSubDescription (GamePerformance_SceneInfo *sceneInfo, const char *subDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置子场景描述。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏子场景描述（自定义描述）。字符长度范围：[0, 128]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setsubsceneid",
      children: "HMS_GamePerformance_SceneInfo_SetSubSceneID()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetSubSceneID (GamePerformance_SceneInfo *sceneInfo, const char *subSceneID)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置子场景ID。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subSceneID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏子场景ID。字符长度范围：[0, 128]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_settexturecount",
      children: "HMS_GamePerformance_SceneInfo_SetTextureCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetTextureCount (GamePerformance_SceneInfo *sceneInfo, const int64_t textureCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置每帧的平均纹理数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textureCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧的平均纹理数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_settrianglecount",
      children: "HMS_GamePerformance_SceneInfo_SetTriangleCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetTriangleCount (GamePerformance_SceneInfo *sceneInfo, const int64_t triangleCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置每帧的平均模型三角形数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "triangleCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧的平均模型三角形数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_sceneinfo_setvertexcount",
      children: "HMS_GamePerformance_SceneInfo_SetVertexCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_SceneInfo_SetVertexCount (GamePerformance_SceneInfo *sceneInfo, const int64_t vertexCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_sceneinfo",
        children: "GamePerformance_SceneInfo"
      }), "实例设置每帧的平均模型顶点数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vertexCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每帧的平均模型顶点数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfo_getnownormalizedcurrent",
      children: "HMS_GamePerformance_ThermalInfo_GetNowNormalizedCurrent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfo_GetNowNormalizedCurrent (GamePerformance_ThermalInfo *thermalInfo, int32_t *nowCurrent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "中获取当前的工作电流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone中可正常调用，在其他设备类型中无返回值。"]
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
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。该值不可以为空，否则将返回错误码1010300004。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nowCurrent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前的工作电流，单位：mA。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfo_getrecommendmaxnormalizedcurrent",
      children: "HMS_GamePerformance_ThermalInfo_GetRecommendMaxNormalizedCurrent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfo_GetRecommendMaxNormalizedCurrent (GamePerformance_ThermalInfo *thermalInfo, int32_t *recommendMaxCurrent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "中获取系统建议的最大工作电流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone中可正常调用，在其他设备类型中无返回值。"]
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
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。该值不可以为空，否则将返回错误码1010300004。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recommendMaxCurrent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统建议的最大工作电流，单位：mA。  若当前的工作电流高于此值，设备会立即发烫。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfo_getrecommendnormalizedcurrent",
      children: "HMS_GamePerformance_ThermalInfo_GetRecommendNormalizedCurrent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfo_GetRecommendNormalizedCurrent (GamePerformance_ThermalInfo *thermalInfo, int32_t *recommendCurrent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "中获取系统建议的工作电流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone中可正常调用，在其他设备类型中无返回值。"]
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
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。该值不可以为空，否则将返回错误码1010300004。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recommendCurrent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统建议的工作电流，单位：mA。  若当前的工作电流高于此值，温升趋势thermalTrend会大于0，设备有发烫风险。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_ERROR：参数错误。参数不能为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfo_getthermallevel",
      children: "HMS_GamePerformance_ThermalInfo_GetThermalLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfo_GetThermalLevel (GamePerformance_ThermalInfo *thermalInfo, int32_t *thermalLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "中获取温度等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thermalLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温度等级，即温控档位，档位越高表示温度越高。不同档位及其建议如下：  1：无需处理。  2：建议降低无感知业务规格，例如后台更新降速或延迟运行。  3：建议暂停无感知业务，降低游戏非核心业务的规格，例如前台更新降速。  4：建议减少游戏特效，降低分辨率，画质。  5：建议降低全场景规格，进一步降低分辨率、画质等。  6：建议游戏降至最低规格。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfo_getthermalmargin",
      children: "HMS_GamePerformance_ThermalInfo_GetThermalMargin()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfo_GetThermalMargin (GamePerformance_ThermalInfo *thermalInfo, int32_t *thermalMargin)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从温度信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "中获取温度时间裕量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thermalMargin"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["时间裕量，温控到达指定档位的时间，负值表示系统无法预测。单位：秒（s）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  - 该数值超过60时，可信度降低。  - 值为0：表示已达到查询的温控档位。  - 值为-1：表示不能到达。  - 值为-2：表示查询的档位低于当前档位。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfo_getthermaltrend",
      children: "HMS_GamePerformance_ThermalInfo_GetThermalTrend()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfo_GetThermalTrend (GamePerformance_ThermalInfo *thermalInfo, int32_t *thermalTrend)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从温度信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfo",
        children: "GamePerformance_ThermalInfo"
      }), "中获取温升趋势。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "thermalInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thermalTrend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "温升趋势，取值范围为[-100, 100]，负号代表降温，数值越大说明当前温度变化越快。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfoqueryparameters_setneedsprediction",
      children: "HMS_GamePerformance_ThermalInfoQueryParameters_SetNeedsPrediction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfoQueryParameters_SetNeedsPrediction (GamePerformance_ThermalInfoQueryParameters *parameters, const bool needsPrediction)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfoqueryparameters",
        children: "GamePerformance_ThermalInfoQueryParameters"
      }), "实例设置是否需要预测温升趋势。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "needsPrediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否需要预测温升趋势。如果需要预测温升趋势，将返回温度时间裕量和温升趋势。  - true：需要  - false：不需要  默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_thermalinfoqueryparameters_settargetthermallevel",
      children: "HMS_GamePerformance_ThermalInfoQueryParameters_SetTargetThermalLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_ThermalInfoQueryParameters_SetTargetThermalLevel (GamePerformance_ThermalInfoQueryParameters *parameters, const int32_t targetThermalLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gameperformance_thermalinfoqueryparameters",
        children: "GamePerformance_ThermalInfoQueryParameters"
      }), "实例设置预测温升趋势的目标温度等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetThermalLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预测温升趋势的目标温度等级。如果需要预测温升趋势，将根据该目标温度等级计算返回温度时间裕量和温度趋势。取值请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_gameperformance_thermalinfo_getthermallevel",
              children: "温度等级"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_unregisterallthermallevelchangedcallbacks",
      children: "HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册所有温度变化回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_unregisterthermallevelchangedcallback",
      children: "HMS_GamePerformance_UnregisterThermalLevelChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_UnregisterThermalLevelChangedCallback (GamePerformance_ThermalLevelChangedCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册指定温度变化回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_updateconfiginfo",
      children: "HMS_GamePerformance_UpdateConfigInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_UpdateConfigInfo (GamePerformance_ConfigInfo *configInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新游戏配置信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "configInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_updatenetinfo",
      children: "HMS_GamePerformance_UpdateNetInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_UpdateNetInfo (GamePerformance_NetInfo *netInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新游戏网络信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(346041)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用HMS_GamePerformance_UpdateNetInfo前，必须已调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_netinfo_settotallatency",
        children: "HMS_GamePerformance_NetInfo_SetTotalLatency"
      }), "设置totalLatency。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "netInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_updatepackageinfo",
      children: "HMS_GamePerformance_UpdatePackageInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_UpdatePackageInfo (GamePerformance_PackageInfo *packageInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新游戏包信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(800435)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用HMS_GamePerformance_UpdatePackageInfo前，必须已调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_initparameters_setbundlename",
        children: "HMS_GamePerformance_InitParameters_SetBundleName"
      }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_initparameters_setappversion",
        children: "HMS_GamePerformance_InitParameters_SetAppVersion"
      }), "接口，分别设置bundleName和appVersion。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "packageInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_updateplayerinfo",
      children: "HMS_GamePerformance_UpdatePlayerInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_UpdatePlayerInfo (GamePerformance_PlayerInfo *playerInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新游戏玩家信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "playerInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_gameperformance_updatesceneinfo",
      children: "HMS_GamePerformance_UpdateSceneInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ErrorCode HMS_GamePerformance_UpdateSceneInfo (GamePerformance_SceneInfo *sceneInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新游戏场景信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(626563)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用HMS_GamePerformance_UpdateSceneInfo前，必须已调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_sceneinfo_setsceneid",
        children: "HMS_GamePerformance_SceneInfo_SetSceneID"
      }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_gameperformance_sceneinfo_setimportancelevel",
        children: "HMS_GamePerformance_SceneInfo_SetImportanceLevel"
      }), "接口，分别设置sceneID和importanceLevel。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
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
            children: "sceneInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例。该值不可以为空，否则将返回错误码401。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PERFORMANCE_SUCCESS：成功。  GAME_PERFORMANCE_PARAM_INVALID：无效参数。  GAME_PERFORMANCE_INTERNAL_ERROR：系统内部错误。  GAME_PERFORMANCE_INVALID_REQUEST：无效请求。"
          })]
        })
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
626563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
312912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
552770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
40183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
265160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
800435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
435704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
346041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
860656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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