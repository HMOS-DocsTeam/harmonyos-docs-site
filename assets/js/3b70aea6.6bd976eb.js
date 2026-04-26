"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["71119"], {
389436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_udmf_h_capi_udmf_h_md_3b7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-udmf-h-capi-udmf-h-md-3b7.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_udmf_h_capi_udmf_h_md_3b7_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h","title":"udmf.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"udmf.h","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-udmf-h"},"sidebar":"ref","previous":{"title":"relational_store_error_code.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h"},"next":{"title":"udmf_err_code.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h.md


const frontMatter = {
	title: 'udmf.h',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-udmf-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-udmf-h'
};
const contentTitle = 'udmf.h';

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
  "value": "结构体",
  "id": "结构体",
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
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Udmf_Intention",
  "id": "udmf_intention",
  "level": 3
}, {
  "value": "Udmf_ShareOption",
  "id": "udmf_shareoption",
  "level": 3
}, {
  "value": "Udmf_FileConflictOptions",
  "id": "udmf_fileconflictoptions",
  "level": 3
}, {
  "value": "Udmf_ProgressIndicator",
  "id": "udmf_progressindicator",
  "level": 3
}, {
  "value": "Udmf_Visibility",
  "id": "udmf_visibility",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_UdmfGetDataParams_SetAcceptableInfo()",
  "id": "oh_udmfgetdataparams_setacceptableinfo",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadParams_Create()",
  "id": "oh_udmfdataloadparams_create",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadParams_Destroy()",
  "id": "oh_udmfdataloadparams_destroy",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadParams_SetLoadHandler()",
  "id": "oh_udmfdataloadparams_setloadhandler",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadParams_SetDataLoadInfo()",
  "id": "oh_udmfdataloadparams_setdataloadinfo",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadInfo_Create()",
  "id": "oh_udmfdataloadinfo_create",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadInfo_Destroy()",
  "id": "oh_udmfdataloadinfo_destroy",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadInfo_GetTypes()",
  "id": "oh_udmfdataloadinfo_gettypes",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadInfo_SetType()",
  "id": "oh_udmfdataloadinfo_settype",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadInfo_GetRecordCount()",
  "id": "oh_udmfdataloadinfo_getrecordcount",
  "level": 3
}, {
  "value": "OH_UdmfDataLoadInfo_SetRecordCount()",
  "id": "oh_udmfdataloadinfo_setrecordcount",
  "level": 3
}, {
  "value": "OH_Udmf_DataLoadHandler()",
  "id": "oh_udmf_dataloadhandler",
  "level": 3
}, {
  "value": "OH_UdmfOptions_GetVisibility()",
  "id": "oh_udmfoptions_getvisibility",
  "level": 3
}, {
  "value": "OH_UdmfOptions_SetVisibility()",
  "id": "oh_udmfoptions_setvisibility",
  "level": 3
}, {
  "value": "UDMF_KEY_BUFFER_LEN()",
  "id": "udmf_key_buffer_len",
  "level": 3
}, {
  "value": "OH_Udmf_DataProgressListener()",
  "id": "oh_udmf_dataprogresslistener",
  "level": 3
}, {
  "value": "OH_UdmfData_Create()",
  "id": "oh_udmfdata_create",
  "level": 3
}, {
  "value": "OH_UdmfData_Destroy()",
  "id": "oh_udmfdata_destroy",
  "level": 3
}, {
  "value": "OH_UdmfData_AddRecord()",
  "id": "oh_udmfdata_addrecord",
  "level": 3
}, {
  "value": "OH_UdmfData_HasType()",
  "id": "oh_udmfdata_hastype",
  "level": 3
}, {
  "value": "OH_UdmfData_GetTypes()",
  "id": "oh_udmfdata_gettypes",
  "level": 3
}, {
  "value": "OH_UdmfData_GetRecords()",
  "id": "oh_udmfdata_getrecords",
  "level": 3
}, {
  "value": "UdmfData_Finalize()",
  "id": "udmfdata_finalize",
  "level": 3
}, {
  "value": "OH_UdmfRecordProvider_Create()",
  "id": "oh_udmfrecordprovider_create",
  "level": 3
}, {
  "value": "OH_UdmfRecordProvider_Destroy()",
  "id": "oh_udmfrecordprovider_destroy",
  "level": 3
}, {
  "value": "OH_UdmfRecordProvider_GetData()",
  "id": "oh_udmfrecordprovider_getdata",
  "level": 3
}, {
  "value": "OH_UdmfRecordProvider_SetData()",
  "id": "oh_udmfrecordprovider_setdata",
  "level": 3
}, {
  "value": "OH_UdmfRecord_Create()",
  "id": "oh_udmfrecord_create",
  "level": 3
}, {
  "value": "OH_UdmfRecord_Destroy()",
  "id": "oh_udmfrecord_destroy",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddGeneralEntry()",
  "id": "oh_udmfrecord_addgeneralentry",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddPlainText()",
  "id": "oh_udmfrecord_addplaintext",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddHyperlink()",
  "id": "oh_udmfrecord_addhyperlink",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddHtml()",
  "id": "oh_udmfrecord_addhtml",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddAppItem()",
  "id": "oh_udmfrecord_addappitem",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddFileUri()",
  "id": "oh_udmfrecord_addfileuri",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddPixelMap()",
  "id": "oh_udmfrecord_addpixelmap",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddArrayBuffer()",
  "id": "oh_udmfrecord_addarraybuffer",
  "level": 3
}, {
  "value": "OH_UdmfRecord_AddContentForm()",
  "id": "oh_udmfrecord_addcontentform",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetTypes()",
  "id": "oh_udmfrecord_gettypes",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetGeneralEntry()",
  "id": "oh_udmfrecord_getgeneralentry",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetPlainText()",
  "id": "oh_udmfrecord_getplaintext",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetHyperlink()",
  "id": "oh_udmfrecord_gethyperlink",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetHtml()",
  "id": "oh_udmfrecord_gethtml",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetAppItem()",
  "id": "oh_udmfrecord_getappitem",
  "level": 3
}, {
  "value": "OH_UdmfRecord_SetProvider()",
  "id": "oh_udmfrecord_setprovider",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetFileUri()",
  "id": "oh_udmfrecord_getfileuri",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetPixelMap()",
  "id": "oh_udmfrecord_getpixelmap",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetArrayBuffer()",
  "id": "oh_udmfrecord_getarraybuffer",
  "level": 3
}, {
  "value": "OH_UdmfRecord_GetContentForm()",
  "id": "oh_udmfrecord_getcontentform",
  "level": 3
}, {
  "value": "OH_UdmfData_GetPrimaryPlainText()",
  "id": "oh_udmfdata_getprimaryplaintext",
  "level": 3
}, {
  "value": "OH_UdmfData_GetPrimaryHtml()",
  "id": "oh_udmfdata_getprimaryhtml",
  "level": 3
}, {
  "value": "OH_UdmfData_GetRecordCount()",
  "id": "oh_udmfdata_getrecordcount",
  "level": 3
}, {
  "value": "OH_UdmfData_GetRecord()",
  "id": "oh_udmfdata_getrecord",
  "level": 3
}, {
  "value": "OH_UdmfData_IsLocal()",
  "id": "oh_udmfdata_islocal",
  "level": 3
}, {
  "value": "OH_UdmfProperty_Create()",
  "id": "oh_udmfproperty_create",
  "level": 3
}, {
  "value": "OH_UdmfProperty_Destroy()",
  "id": "oh_udmfproperty_destroy",
  "level": 3
}, {
  "value": "OH_UdmfProperty_GetTag()",
  "id": "oh_udmfproperty_gettag",
  "level": 3
}, {
  "value": "OH_UdmfProperty_GetTimestamp()",
  "id": "oh_udmfproperty_gettimestamp",
  "level": 3
}, {
  "value": "OH_UdmfProperty_GetShareOption()",
  "id": "oh_udmfproperty_getshareoption",
  "level": 3
}, {
  "value": "OH_UdmfProperty_GetExtrasIntParam()",
  "id": "oh_udmfproperty_getextrasintparam",
  "level": 3
}, {
  "value": "OH_UdmfProperty_GetExtrasStringParam()",
  "id": "oh_udmfproperty_getextrasstringparam",
  "level": 3
}, {
  "value": "OH_UdmfProperty_SetTag()",
  "id": "oh_udmfproperty_settag",
  "level": 3
}, {
  "value": "OH_UdmfProperty_SetShareOption()",
  "id": "oh_udmfproperty_setshareoption",
  "level": 3
}, {
  "value": "OH_UdmfProperty_SetExtrasIntParam()",
  "id": "oh_udmfproperty_setextrasintparam",
  "level": 3
}, {
  "value": "OH_UdmfProperty_SetExtrasStringParam()",
  "id": "oh_udmfproperty_setextrasstringparam",
  "level": 3
}, {
  "value": "OH_UdmfOptions_Create()",
  "id": "oh_udmfoptions_create",
  "level": 3
}, {
  "value": "OH_UdmfOptions_Destroy()",
  "id": "oh_udmfoptions_destroy",
  "level": 3
}, {
  "value": "OH_UdmfOptions_GetKey()",
  "id": "oh_udmfoptions_getkey",
  "level": 3
}, {
  "value": "OH_UdmfOptions_SetKey()",
  "id": "oh_udmfoptions_setkey",
  "level": 3
}, {
  "value": "OH_UdmfOptions_GetIntention()",
  "id": "oh_udmfoptions_getintention",
  "level": 3
}, {
  "value": "OH_UdmfOptions_SetIntention()",
  "id": "oh_udmfoptions_setintention",
  "level": 3
}, {
  "value": "OH_UdmfOptions_Reset()",
  "id": "oh_udmfoptions_reset",
  "level": 3
}, {
  "value": "OH_Udmf_GetUnifiedData()",
  "id": "oh_udmf_getunifieddata",
  "level": 3
}, {
  "value": "OH_Udmf_GetUnifiedDataByOptions()",
  "id": "oh_udmf_getunifieddatabyoptions",
  "level": 3
}, {
  "value": "OH_Udmf_SetUnifiedData()",
  "id": "oh_udmf_setunifieddata",
  "level": 3
}, {
  "value": "OH_Udmf_SetUnifiedDataByOptions()",
  "id": "oh_udmf_setunifieddatabyoptions",
  "level": 3
}, {
  "value": "OH_Udmf_UpdateUnifiedData()",
  "id": "oh_udmf_updateunifieddata",
  "level": 3
}, {
  "value": "OH_Udmf_DeleteUnifiedData()",
  "id": "oh_udmf_deleteunifieddata",
  "level": 3
}, {
  "value": "OH_Udmf_DestroyDataArray()",
  "id": "oh_udmf_destroydataarray",
  "level": 3
}, {
  "value": "OH_UdmfProgressInfo_GetProgress()",
  "id": "oh_udmfprogressinfo_getprogress",
  "level": 3
}, {
  "value": "OH_UdmfProgressInfo_GetStatus()",
  "id": "oh_udmfprogressinfo_getstatus",
  "level": 3
}, {
  "value": "OH_UdmfGetDataParams_Create()",
  "id": "oh_udmfgetdataparams_create",
  "level": 3
}, {
  "value": "OH_UdmfGetDataParams_Destroy()",
  "id": "oh_udmfgetdataparams_destroy",
  "level": 3
}, {
  "value": "OH_UdmfGetDataParams_SetDestUri()",
  "id": "oh_udmfgetdataparams_setdesturi",
  "level": 3
}, {
  "value": "OH_UdmfGetDataParams_SetFileConflictOptions()",
  "id": "oh_udmfgetdataparams_setfileconflictoptions",
  "level": 3
}, {
  "value": "OH_UdmfGetDataParams_SetProgressIndicator()",
  "id": "oh_udmfgetdataparams_setprogressindicator",
  "level": 3
}, {
  "value": "OH_UdmfGetDataParams_SetDataProgressListener()",
  "id": "oh_udmfgetdataparams_setdataprogresslistener",
  "level": 3
}, {
  "value": "OH_UDMF_GetDataElementAt()",
  "id": "oh_udmf_getdataelementat",
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
        id: "udmfh",
        children: "udmf.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供访问统一数据管理框架数据的接口、数据结构、枚举类型。当参数类型为char*时，字符串必须以空字符（'\\0'）结尾。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/udmf/udmf.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libudmf.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.UDMF.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-udmf/capi-udmf",
        children: "UDMF"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义统一数据对象数据结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecord"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义统一数据对象中记录数据的数据结构，称为数据记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecordProvider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义统一数据对象中的数据提供者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义统一数据对象中数据记录的属性结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Udmf_ProgressInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义进度信息的数据结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfGetDataParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义异步获取UDMF数据的请求参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据操作选项，定义数据操作的可选参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfDataLoadParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据加载参数结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfDataLoadInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据加载信息结构体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_intention",
              children: "Udmf_Intention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Udmf_Intention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述UDMF数据通路枚举类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_shareoption",
              children: "Udmf_ShareOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Udmf_ShareOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF支持的设备内使用范围类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_fileconflictoptions",
              children: "Udmf_FileConflictOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Udmf_FileConflictOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义文件拷贝冲突时的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_progressindicator",
              children: "Udmf_ProgressIndicator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Udmf_ProgressIndicator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义进度条指示选项，可选择是否采用系统默认进度显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_visibility",
              children: "Udmf_Visibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Udmf_Visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义数据的可见性等级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_key_buffer_len",
              children: "UDMF_KEY_BUFFER_LEN (512)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统一数据对象唯一标识符最小空间长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_dataprogresslistener",
              children: "typedef void (*OH_Udmf_DataProgressListener)(OH_Udmf_ProgressInfo* progressInfo, OH_UdmfData* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Udmf_DataProgressListener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义获取进度信息和数据的监听回调函数。  使用时需要判断数据是否返回空指针。只有当进度达到100%时，才会返回数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_create",
              children: "OH_UdmfData* OH_UdmfData_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfdata_destroy",
              children: "OH_UdmfData_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_destroy",
              children: "void OH_UdmfData_Destroy(OH_UdmfData* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_addrecord",
              children: "int OH_UdmfData_AddRecord(OH_UdmfData* pThis, OH_UdmfRecord* record)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加一个数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "到统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_hastype",
              children: "bool OH_UdmfData_HasType(OH_UdmfData* pThis, const char* type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中是否存在指定类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_gettypes",
              children: "char** OH_UdmfData_GetTypes(OH_UdmfData* pThis, unsigned int* count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中包含的所有类型结果集。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_getrecords",
              children: "OH_UdmfRecord** OH_UdmfData_GetRecords(OH_UdmfData* pThis, unsigned int* count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中包含的所有记录结果集。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmfdata_finalize",
              children: "typedef void (*UdmfData_Finalize)(void* context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UdmfData_Finalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用于释放上下文的回调函数，统一数据提供者对象销毁时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecordprovider_create",
              children: "OH_UdmfRecordProvider* OH_UdmfRecordProvider_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_destroy",
              children: "OH_UdmfRecordProvider_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecordprovider_destroy",
              children: "int OH_UdmfRecordProvider_Destroy(OH_UdmfRecordProvider* provider)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecordprovider_getdata",
              children: "typedef void* (*OH_UdmfRecordProvider_GetData)(void* context, const char* type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecordProvider_GetData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用于按类型获取数据的回调函数。当从OH_UdmfRecord中获取数据时，会触发此回调函数，得到的数据就是这个回调函数返回的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecordprovider_setdata",
              children: "int OH_UdmfRecordProvider_SetData(OH_UdmfRecordProvider* provider, void* context, const OH_UdmfRecordProvider_GetData callback, const UdmfData_Finalize finalize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置统一数据提供者的数据提供回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_create",
              children: "OH_UdmfRecord* OH_UdmfRecord_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecord_destroy",
              children: "OH_UdmfRecord_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_destroy",
              children: "void OH_UdmfRecord_Destroy(OH_UdmfRecord* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addgeneralentry",
              children: "int OH_UdmfRecord_AddGeneralEntry(OH_UdmfRecord* pThis, const char* typeId, unsigned char* entry, unsigned int count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加用户自定义的通用数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。对于已定义UDS的类型（比如PlainText、Link、Pixelmap等）不可使用该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addplaintext",
              children: "int OH_UdmfRecord_AddPlainText(OH_UdmfRecord* pThis, OH_UdsPlainText* plainText)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addhyperlink",
              children: "int OH_UdmfRecord_AddHyperlink(OH_UdmfRecord* pThis, OH_UdsHyperlink* hyperlink)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加超链接类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
              children: "OH_UdsHyperlink"
            }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addhtml",
              children: "int OH_UdmfRecord_AddHtml(OH_UdmfRecord* pThis, OH_UdsHtml* html)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addappitem",
              children: "int OH_UdmfRecord_AddAppItem(OH_UdmfRecord* pThis, OH_UdsAppItem* appItem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加桌面图标类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
              children: "OH_UdsAppItem"
            }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addfileuri",
              children: "int OH_UdmfRecord_AddFileUri(OH_UdmfRecord* pThis, OH_UdsFileUri* fileUri)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加文件Uri类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
              children: "OH_UdsFileUri"
            }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addpixelmap",
              children: "int OH_UdmfRecord_AddPixelMap(OH_UdmfRecord* pThis, OH_UdsPixelMap* pixelMap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加像素图片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
              children: "OH_UdsPixelMap"
            }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addarraybuffer",
              children: "int OH_UdmfRecord_AddArrayBuffer(OH_UdmfRecord* record, const char* type, OH_UdsArrayBuffer* buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加一个ArrayBuffer类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
              children: "OH_UdsArrayBuffer"
            }), "的数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_addcontentform",
              children: "int OH_UdmfRecord_AddContentForm(OH_UdmfRecord* pThis, OH_UdsContentForm* contentForm)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加一个内容卡片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
              children: "OH_UdsContentForm"
            }), "的数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_gettypes",
              children: "char** OH_UdmfRecord_GetTypes(OH_UdmfRecord* pThis, unsigned int* count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中所有类型的结果集。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_getgeneralentry",
              children: "int OH_UdmfRecord_GetGeneralEntry(OH_UdmfRecord* pThis, const char* typeId, unsigned char** entry, unsigned int* count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中的特定类型的数据结果集。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_getplaintext",
              children: "int OH_UdmfRecord_GetPlainText(OH_UdmfRecord* pThis, OH_UdsPlainText* plainText)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_gethyperlink",
              children: "int OH_UdmfRecord_GetHyperlink(OH_UdmfRecord* pThis, OH_UdsHyperlink* hyperlink)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取超链接类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
              children: "OH_UdsHyperlink"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_gethtml",
              children: "int OH_UdmfRecord_GetHtml(OH_UdmfRecord* pThis, OH_UdsHtml* html)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_getappitem",
              children: "int OH_UdmfRecord_GetAppItem(OH_UdmfRecord* pThis, OH_UdsAppItem* appItem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取桌面图标类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
              children: "OH_UdsAppItem"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_setprovider",
              children: "int OH_UdmfRecord_SetProvider(OH_UdmfRecord* pThis, const char* const* types, unsigned int count, OH_UdmfRecordProvider* provider)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将指定类型的统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "设置至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_getfileuri",
              children: "int OH_UdmfRecord_GetFileUri(OH_UdmfRecord* pThis, OH_UdsFileUri* fileUri)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取文件Uri类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
              children: "OH_UdsFileUri"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_getpixelmap",
              children: "int OH_UdmfRecord_GetPixelMap(OH_UdmfRecord* pThis, OH_UdsPixelMap* pixelMap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取像素图片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
              children: "OH_UdsPixelMap"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_getarraybuffer",
              children: "int OH_UdmfRecord_GetArrayBuffer(OH_UdmfRecord* record, const char* type, OH_UdsArrayBuffer* buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取ArrayBuffer类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
              children: "OH_UdsArrayBuffer"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecord_getcontentform",
              children: "int OH_UdmfRecord_GetContentForm(OH_UdmfRecord* pThis, OH_UdsContentForm* contentForm)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "中获取内容卡片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
              children: "OH_UdsContentForm"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_getprimaryplaintext",
              children: "int OH_UdmfData_GetPrimaryPlainText(OH_UdmfData* data, OH_UdsPlainText* plainText)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中获取第一个纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_getprimaryhtml",
              children: "int OH_UdmfData_GetPrimaryHtml(OH_UdmfData* data, OH_UdsHtml* html)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中获取第一个超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_getrecordcount",
              children: "int OH_UdmfData_GetRecordCount(OH_UdmfData* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中包含的所有记录数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_getrecord",
              children: "OH_UdmfRecord* OH_UdmfData_GetRecord(OH_UdmfData* data, unsigned int index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中指定位置的数据记录。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdata_islocal",
              children: "bool OH_UdmfData_IsLocal(OH_UdmfData* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "是否是来自本端设备的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_create",
              children: "OH_UdmfProperty* OH_UdmfProperty_Create(OH_UdmfData* unifiedData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建统一数据对象中数据记录属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfproperty_destroy",
              children: "OH_UdmfProperty_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_destroy",
              children: "void OH_UdmfProperty_Destroy(OH_UdmfProperty* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_gettag",
              children: "const char* OH_UdmfProperty_GetTag(OH_UdmfProperty* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "中获取用户自定义标签值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_gettimestamp",
              children: "int64_t OH_UdmfProperty_GetTimestamp(OH_UdmfProperty* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "中获取时间戳。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_getshareoption",
              children: "Udmf_ShareOption OH_UdmfProperty_GetShareOption(OH_UdmfProperty* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "中获取设备内适用范围属性。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_getextrasintparam",
              children: "int OH_UdmfProperty_GetExtrasIntParam(OH_UdmfProperty* pThis, const char* key, int defaultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "中获取自定义的附加整型参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_getextrasstringparam",
              children: "const char* OH_UdmfProperty_GetExtrasStringParam(OH_UdmfProperty* pThis, const char* key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "中获取自定义的附加字符串参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_settag",
              children: "int OH_UdmfProperty_SetTag(OH_UdmfProperty* pThis, const char* tag)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "的自定义标签值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_setshareoption",
              children: "int OH_UdmfProperty_SetShareOption(OH_UdmfProperty* pThis, Udmf_ShareOption option)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "的设备内适用范围", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_shareoption",
              children: "Udmf_ShareOption"
            }), "参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_setextrasintparam",
              children: "int OH_UdmfProperty_SetExtrasIntParam(OH_UdmfProperty* pThis, const char* key, int param)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "的附加整型参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfproperty_setextrasstringparam",
              children: "int OH_UdmfProperty_SetExtrasStringParam(OH_UdmfProperty* pThis, const char* key, const char* param)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "的附加字符串参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_create",
              children: "OH_UdmfOptions* OH_UdmfOptions_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfoptions_destroy",
              children: "OH_UdmfOptions_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_destroy",
              children: "void OH_UdmfOptions_Destroy(OH_UdmfOptions* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_getkey",
              children: "const char* OH_UdmfOptions_GetKey(OH_UdmfOptions* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例中获取数据的唯一标识符信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_setkey",
              children: "int OH_UdmfOptions_SetKey(OH_UdmfOptions* pThis, const char* key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例中的数据的唯一标识符内容参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_getintention",
              children: "Udmf_Intention OH_UdmfOptions_GetIntention(OH_UdmfOptions* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例中获取数据通路信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_setintention",
              children: "int OH_UdmfOptions_SetIntention(OH_UdmfOptions* pThis, Udmf_Intention intention)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例中的数据通路内容参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_reset",
              children: "int OH_UdmfOptions_Reset(OH_UdmfOptions* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_getunifieddata",
              children: "int OH_Udmf_GetUnifiedData(const char* key, Udmf_Intention intention, OH_UdmfData* unifiedData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据管理框架数据库中获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_getunifieddatabyoptions",
              children: "int OH_Udmf_GetUnifiedDataByOptions(OH_UdmfOptions* options, OH_UdmfData** dataArray, unsigned int* dataSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过数据通路类型从统一数据管理框架数据库中获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_setunifieddata",
              children: "int OH_Udmf_SetUnifiedData(Udmf_Intention intention, OH_UdmfData* unifiedData, char* key, unsigned int keyLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据管理框架数据库中写入统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_setunifieddatabyoptions",
              children: "int OH_Udmf_SetUnifiedDataByOptions(OH_UdmfOptions* options, OH_UdmfData *unifiedData, char *key, unsigned int keyLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据管理框架数据库中写入统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_updateunifieddata",
              children: "int OH_Udmf_UpdateUnifiedData(OH_UdmfOptions* options, OH_UdmfData* unifiedData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对统一数据管理框架数据库中的统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数据进行数据更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_deleteunifieddata",
              children: "int OH_Udmf_DeleteUnifiedData(OH_UdmfOptions* options, OH_UdmfData** dataArray, unsigned int* dataSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["删除统一数据管理框架数据库中的统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_destroydataarray",
              children: "void OH_Udmf_DestroyDataArray(OH_UdmfData** dataArray, unsigned int dataSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁数据数组内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfprogressinfo_getprogress",
              children: "int OH_UdmfProgressInfo_GetProgress(OH_Udmf_ProgressInfo* progressInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从进度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
            }), "中获取进度百分比数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfprogressinfo_getstatus",
              children: "int OH_UdmfProgressInfo_GetStatus(OH_Udmf_ProgressInfo* progressInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从进度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
            }), "中获取状态信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfgetdataparams_create",
              children: "OH_UdmfGetDataParams* OH_UdmfGetDataParams_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建异步获取UDMF数据的请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "指针及实例对象。  当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfgetdataparams_destroy",
              children: "OH_UdmfGetDataParams_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfgetdataparams_destroy",
              children: "void OH_UdmfGetDataParams_Destroy(OH_UdmfGetDataParams* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfgetdataparams_setdesturi",
              children: "void OH_UdmfGetDataParams_SetDestUri(OH_UdmfGetDataParams* params, const char* destUri)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "中的目标路径。  若设置了目标路径，会将文件类型的数据进行拷贝到指定路径。回调中获取到的文件类型数据会被替换为目标路径的URI。  若不设置目标路径，则不会执行拷贝文件操作。回调中获取到的文件类型数据为源端路径URI。  若应用涉及复杂文件处理策略，或需要将文件拷贝在多个路径下时，建议不设置此参数，由应用自行完成文件拷贝相关处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfgetdataparams_setfileconflictoptions",
              children: "void OH_UdmfGetDataParams_SetFileConflictOptions(OH_UdmfGetDataParams* params, const Udmf_FileConflictOptions options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "中的文件冲突选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfgetdataparams_setprogressindicator",
              children: "void OH_UdmfGetDataParams_SetProgressIndicator(OH_UdmfGetDataParams* params, const Udmf_ProgressIndicator progressIndicator)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "中的进度条指示选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfgetdataparams_setdataprogresslistener",
              children: "void OH_UdmfGetDataParams_SetDataProgressListener(OH_UdmfGetDataParams* params, const OH_Udmf_DataProgressListener dataProgressListener)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "中的监听回调函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_getvisibility",
              children: "Udmf_Visibility OH_UdmfOptions_GetVisibility(OH_UdmfOptions* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例中获取数据可见性等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfoptions_setvisibility",
              children: "int OH_UdmfOptions_SetVisibility(OH_UdmfOptions* pThis, Udmf_Visibility visibility)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例中的数据可见性等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_dataloadhandler",
              children: "typedef OH_UdmfData* (*OH_Udmf_DataLoadHandler)(OH_UdmfDataLoadInfo* acceptableInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Udmf_DataLoadHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于加载数据的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadparams_create",
              children: "OH_UdmfDataLoadParams* OH_UdmfDataLoadParams_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建指向数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadparams_destroy",
              children: "void OH_UdmfDataLoadParams_Destroy(OH_UdmfDataLoadParams* pThis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadparams_setloadhandler",
              children: "void OH_UdmfDataLoadParams_SetLoadHandler(OH_UdmfDataLoadParams* params, const OH_Udmf_DataLoadHandler dataLoadHandler)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "中的数据加载处理函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadparams_setdataloadinfo",
              children: "void OH_UdmfDataLoadParams_SetDataLoadInfo(OH_UdmfDataLoadParams* params, OH_UdmfDataLoadInfo* dataLoadInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "中的数据加载信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadinfo_create",
              children: "OH_UdmfDataLoadInfo* OH_UdmfDataLoadInfo_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadinfo_destroy",
              children: "void OH_UdmfDataLoadInfo_Destroy(OH_UdmfDataLoadInfo* dataLoadInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadinfo_gettypes",
              children: "char** OH_UdmfDataLoadInfo_GetTypes(OH_UdmfDataLoadInfo* dataLoadInfo, unsigned int* count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "中获取数据类型列表。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadinfo_settype",
              children: "void OH_UdmfDataLoadInfo_SetType(OH_UdmfDataLoadInfo* dataLoadInfo, const char* type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "中的数据类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadinfo_getrecordcount",
              children: "int OH_UdmfDataLoadInfo_GetRecordCount(OH_UdmfDataLoadInfo* dataLoadInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "中的记录数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfdataloadinfo_setrecordcount",
              children: "void OH_UdmfDataLoadInfo_SetRecordCount(OH_UdmfDataLoadInfo* dataLoadInfo, unsigned int recordCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "中的记录数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_getdataelementat",
              children: "OH_UdmfData* OH_UDMF_GetDataElementAt(OH_UdmfData** dataArray, unsigned int index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数组中获取指定下标的统一数据对象数据。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udmf_intention",
      children: "Udmf_Intention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Udmf_Intention\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述UDMF数据通路枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_INTENTION_DRAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽数据通路。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_INTENTION_PASTEBOARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪贴板数据通路。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_INTENTION_DATA_HUB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["公共数据通路。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_INTENTION_SYSTEM_SHARE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统分享数据通路。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_INTENTION_PICKER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Picker数据通路。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_INTENTION_MENU"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单数据通路。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udmf_shareoption",
      children: "Udmf_ShareOption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Udmf_ShareOption\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UDMF支持的设备内使用范围类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHARE_OPTIONS_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示不合法的使用范围类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHARE_OPTIONS_IN_APP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示允许在本设备同应用内使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHARE_OPTIONS_CROSS_APP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示允许在本设备内跨应用使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udmf_fileconflictoptions",
      children: "Udmf_FileConflictOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Udmf_FileConflictOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义文件拷贝冲突时的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_OVERWRITE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标路径存在同文件名时覆盖。若不配置策略，默认使用改策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_SKIP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标路径存在同文件名时跳过。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udmf_progressindicator",
      children: "Udmf_ProgressIndicator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Udmf_ProgressIndicator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义进度条指示选项，可选择是否采用系统默认进度显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不采用系统默认进度显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_DEFAULT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采用系统默认进度显示，500ms内获取数据完成将不会拉起默认进度条。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udmf_visibility",
      children: "Udmf_Visibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Udmf_Visibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义数据的可见性等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可见性等级，所有应用可见。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDMF_OWN_PROCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可见性等级，仅数据提供者可见。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfgetdataparams_setacceptableinfo",
      children: "OH_UdmfGetDataParams_SetAcceptableInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfGetDataParams_SetAcceptableInfo(OH_UdmfGetDataParams* params, OH_UdmfDataLoadInfo* acceptableInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
        children: "OH_UdmfGetDataParams"
      }), "中可接收的数据描述信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* acceptableInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadparams_create",
      children: "OH_UdmfDataLoadParams_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfDataLoadParams* OH_UdmfDataLoadParams_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建指向数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
        children: "OH_UdmfDataLoadParams"
      }), "实例的指针。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果创建成功，返回一个指向数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "实例的指针；否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadparams_destroy",
      children: "OH_UdmfDataLoadParams_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfDataLoadParams_Destroy(OH_UdmfDataLoadParams* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
        children: "OH_UdmfDataLoadParams"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadparams_setloadhandler",
      children: "OH_UdmfDataLoadParams_SetLoadHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfDataLoadParams_SetLoadHandler(OH_UdmfDataLoadParams* params, const OH_Udmf_DataLoadHandler dataLoadHandler)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
        children: "OH_UdmfDataLoadParams"
      }), "中的数据加载处理函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "* params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmf_dataloadhandler",
              children: "const OH_Udmf_DataLoadHandler"
            }), " dataLoadHandler"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户定义的数据加载处理函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadparams_setdataloadinfo",
      children: "OH_UdmfDataLoadParams_SetDataLoadInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfDataLoadParams_SetDataLoadInfo(OH_UdmfDataLoadParams* params, OH_UdmfDataLoadInfo* dataLoadInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
        children: "OH_UdmfDataLoadParams"
      }), "中的数据加载信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "* params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadparams/capi-udmf-oh-udmfdataloadparams",
              children: "OH_UdmfDataLoadParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* dataLoadInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadinfo_create",
      children: "OH_UdmfDataLoadInfo_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfDataLoadInfo* OH_UdmfDataLoadInfo_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
        children: "OH_UdmfDataLoadInfo"
      }), "实例的指针。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果创建成功，返回一个指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针；否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadinfo_destroy",
      children: "OH_UdmfDataLoadInfo_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfDataLoadInfo_Destroy(OH_UdmfDataLoadInfo* dataLoadInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
        children: "OH_UdmfDataLoadInfo"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* dataLoadInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadinfo_gettypes",
      children: "OH_UdmfDataLoadInfo_GetTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char** OH_UdmfDataLoadInfo_GetTypes(OH_UdmfDataLoadInfo* dataLoadInfo, unsigned int* count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
        children: "OH_UdmfDataLoadInfo"
      }), "中获取数据类型列表。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* dataLoadInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int* count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回的数据类型数量。"
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
            children: "char**"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数据类型的字符串数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadinfo_settype",
      children: "OH_UdmfDataLoadInfo_SetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfDataLoadInfo_SetType(OH_UdmfDataLoadInfo* dataLoadInfo, const char* type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
        children: "OH_UdmfDataLoadInfo"
      }), "中的数据类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* dataLoadInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据类型的字符串。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadinfo_getrecordcount",
      children: "OH_UdmfDataLoadInfo_GetRecordCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfDataLoadInfo_GetRecordCount(OH_UdmfDataLoadInfo* dataLoadInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
        children: "OH_UdmfDataLoadInfo"
      }), "中的记录数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* dataLoadInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回记录的数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdataloadinfo_setrecordcount",
      children: "OH_UdmfDataLoadInfo_SetRecordCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfDataLoadInfo_SetRecordCount(OH_UdmfDataLoadInfo* dataLoadInfo, unsigned int recordCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
        children: "OH_UdmfDataLoadInfo"
      }), "中的记录数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* dataLoadInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据加载信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int recordCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示记录的数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_dataloadhandler",
      children: "OH_Udmf_DataLoadHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef OH_UdmfData* (*OH_Udmf_DataLoadHandler)(OH_UdmfDataLoadInfo* acceptableInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示用于加载数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdataloadinfo/capi-udmf-oh-udmfdataloadinfo",
              children: "OH_UdmfDataLoadInfo"
            }), "* acceptableInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示接收端可接收的数据类型和数量信息。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* (*OH_Udmf_DataLoadHandler)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回待加载的数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_getvisibility",
      children: "OH_UdmfOptions_GetVisibility()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Udmf_Visibility OH_UdmfOptions_GetVisibility(OH_UdmfOptions* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例中获取数据可见性等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_visibility",
              children: "Udmf_Visibility"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回数据可见性等级", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_visibility",
              children: "Udmf_Visibility"
            }), "的值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_setvisibility",
      children: "OH_UdmfOptions_SetVisibility()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfOptions_SetVisibility(OH_UdmfOptions* pThis, Udmf_Visibility visibility)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例中的数据可见性等级。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_visibility",
              children: "Udmf_Visibility"
            }), " visibility"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据可见性等级", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_visibility",
              children: "Udmf_Visibility"
            }), "参数。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udmf_key_buffer_len",
      children: "UDMF_KEY_BUFFER_LEN()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UDMF_KEY_BUFFER_LEN (512)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一数据对象唯一标识符最小空间长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_dataprogresslistener",
      children: "OH_Udmf_DataProgressListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_Udmf_DataProgressListener)(OH_Udmf_ProgressInfo* progressInfo, OH_UdmfData* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取进度信息和数据的监听回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用时需要判断数据是否返回空指针。只有当进度达到100%时，才会返回数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
            }), "* progressInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度信息，作为出参使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回的统一数据对象，作为出参使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_create",
      children: "OH_UdmfData_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfData* OH_UdmfData_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfdata_destroy",
        children: "OH_UdmfData_Destroy"
      }), "销毁实例对象，否则会导致内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功则返回一个指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例对象的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_UdmfData"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_destroy",
      children: "OH_UdmfData_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfData_Destroy(OH_UdmfData* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_UdmfData"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_addrecord",
      children: "OH_UdmfData_AddRecord()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfData_AddRecord(OH_UdmfData* pThis, OH_UdmfRecord* record)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加一个数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "到统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* record"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_hastype",
      children: "OH_UdmfData_HasType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_UdmfData_HasType(OH_UdmfData* pThis, const char* type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中是否存在指定类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指定类型的字符串指针。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回查找类型的状态。返回false表示不存在指定类型，返回true表示存在指定类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_gettypes",
      children: "OH_UdmfData_GetTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char** OH_UdmfData_GetTypes(OH_UdmfData* pThis, unsigned int* count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中包含的所有类型结果集。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int* count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，结果集中的类型数量会写入该变量。"
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
            children: "char**"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回统一数据对象的类型结果集，否则返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_getrecords",
      children: "OH_UdmfData_GetRecords()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfRecord** OH_UdmfData_GetRecords(OH_UdmfData* pThis, unsigned int* count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中包含的所有记录结果集。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int* count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，结果集中的记录数量会写入该变量。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "**"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "结果集，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "udmfdata_finalize",
      children: "UdmfData_Finalize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*UdmfData_Finalize)(void* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用于释放上下文的回调函数，统一数据提供者对象销毁时触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的上下文指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecordprovider_create",
      children: "OH_UdmfRecordProvider_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfRecordProvider* OH_UdmfRecordProvider_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
        children: "OH_UdmfRecordProvider"
      }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_destroy",
        children: "OH_UdmfRecordProvider_Destroy"
      }), "销毁实例对象，否则会导致内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回一个指向统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "实例对象的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecordprovider_destroy",
      children: "OH_UdmfRecordProvider_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecordProvider_Destroy(OH_UdmfRecordProvider* provider)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
        children: "OH_UdmfRecordProvider"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "* provider"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据提供者对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecordprovider_getdata",
      children: "OH_UdmfRecordProvider_GetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void* (*OH_UdmfRecordProvider_GetData)(void* context, const char* type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用于按类型获取数据的回调函数。当从OH_UdmfRecord中获取数据时，会触发此回调函数，得到的数据就是这个回调函数返回的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_setdata",
              children: "OH_UdmfRecordProvider_SetData"
            }), "设置的上下文指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要获取的数据类型。详细类型信息见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h/capi-udmf-meta-h",
              children: "udmf_meta.h"
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
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要返回一个标准化数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecordprovider_setdata",
      children: "OH_UdmfRecordProvider_SetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecordProvider_SetData(OH_UdmfRecordProvider* provider, void* context, const OH_UdmfRecordProvider_GetData callback, const UdmfData_Finalize finalize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置统一数据提供者的数据提供回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "* provider"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "实例对象的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文指针，将作为第一个参数传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_getdata",
              children: "OH_UdmfRecordProvider_GetData"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmfrecordprovider_getdata",
              children: "OH_UdmfRecordProvider_GetData"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取数据的回调函数。详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_getdata",
              children: "OH_UdmfRecordProvider_GetData"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmfdata_finalize",
              children: "UdmfData_Finalize"
            }), " finalize"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选的回调函数，可以用于统一数据提供者销毁时释放上下文数据。详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmfdata_finalize",
              children: "UdmfData_Finalize"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_create",
      children: "OH_UdmfRecord_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfRecord* OH_UdmfRecord_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecord_destroy",
        children: "OH_UdmfRecord_Destroy"
      }), "销毁实例对象，否则会导致内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功则返回一个指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例对象的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_destroy",
      children: "OH_UdmfRecord_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfRecord_Destroy(OH_UdmfRecord* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addgeneralentry",
      children: "OH_UdmfRecord_AddGeneralEntry()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddGeneralEntry(OH_UdmfRecord* pThis, const char* typeId, unsigned char* entry, unsigned int count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加用户自定义的通用数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。对于已定义UDS的类型（比如PlainText、Link、Pixelmap等）不可使用该接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* typeId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据类型标识，为和系统定义的类型进行区分，建议以'ApplicationDefined'开头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned char* entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户自定义数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户自定义数据的大小。数据大小不超过4KB。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addplaintext",
      children: "OH_UdmfRecord_AddPlainText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddPlainText(OH_UdmfRecord* pThis, OH_UdsPlainText* plainText)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
        children: "OH_UdsPlainText"
      }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "* plainText"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addhyperlink",
      children: "OH_UdmfRecord_AddHyperlink()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddHyperlink(OH_UdmfRecord* pThis, OH_UdsHyperlink* hyperlink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加超链接类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
        children: "OH_UdsHyperlink"
      }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
              children: "OH_UdsHyperlink"
            }), "* hyperlink"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向超链接类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
              children: "OH_UdsHyperlink"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addhtml",
      children: "OH_UdmfRecord_AddHtml()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddHtml(OH_UdmfRecord* pThis, OH_UdsHtml* html)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
        children: "OH_UdsHtml"
      }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "* html"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addappitem",
      children: "OH_UdmfRecord_AddAppItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddAppItem(OH_UdmfRecord* pThis, OH_UdsAppItem* appItem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加桌面图标类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
        children: "OH_UdsAppItem"
      }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
              children: "OH_UdsAppItem"
            }), "* appItem"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向桌面图标类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
              children: "OH_UdsAppItem"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addfileuri",
      children: "OH_UdmfRecord_AddFileUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddFileUri(OH_UdmfRecord* pThis, OH_UdsFileUri* fileUri)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加文件Uri类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
        children: "OH_UdsFileUri"
      }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
              children: "OH_UdsFileUri"
            }), "* fileUri"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向文件Uri类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
              children: "OH_UdsFileUri"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addpixelmap",
      children: "OH_UdmfRecord_AddPixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddPixelMap(OH_UdmfRecord* pThis, OH_UdsPixelMap* pixelMap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加像素图片类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
        children: "OH_UdsPixelMap"
      }), "数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
              children: "OH_UdsPixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向像素图片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
              children: "OH_UdsPixelMap"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addarraybuffer",
      children: "OH_UdmfRecord_AddArrayBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddArrayBuffer(OH_UdmfRecord* record, const char* type, OH_UdsArrayBuffer* buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加一个ArrayBuffer类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
        children: "OH_UdsArrayBuffer"
      }), "的数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* record"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示自定义的ArrayBuffer数据的数据类型标识，不可与已有的数据类型标识重复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
              children: "OH_UdsArrayBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向ArrayBuffer类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
              children: "OH_UdsArrayBuffer"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_addcontentform",
      children: "OH_UdmfRecord_AddContentForm()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_AddContentForm(OH_UdmfRecord* pThis, OH_UdsContentForm* contentForm)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["增加一个内容卡片类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
        children: "OH_UdsContentForm"
      }), "的数据至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
              children: "OH_UdsContentForm"
            }), "* contentForm"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向内容卡片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
              children: "OH_UdsContentForm"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_gettypes",
      children: "OH_UdmfRecord_GetTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char** OH_UdmfRecord_GetTypes(OH_UdmfRecord* pThis, unsigned int* count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中所有类型的结果集。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int* count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，结果集中的类型数量会写入该变量。"
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
            children: "char**"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回类型列表，否则返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_getgeneralentry",
      children: "OH_UdmfRecord_GetGeneralEntry()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetGeneralEntry(OH_UdmfRecord* pThis, const char* typeId, unsigned char** entry, unsigned int* count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中的特定类型的数据结果集。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* typeId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据类型标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned char** entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，结果集中数据的具体信息会写入该变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int* count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，结果集中的数据长度会写入该变量。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_getplaintext",
      children: "OH_UdmfRecord_GetPlainText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetPlainText(OH_UdmfRecord* pThis, OH_UdsPlainText* plainText)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
        children: "OH_UdsPlainText"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "* plainText"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_gethyperlink",
      children: "OH_UdmfRecord_GetHyperlink()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetHyperlink(OH_UdmfRecord* pThis, OH_UdsHyperlink* hyperlink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取超链接类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
        children: "OH_UdsHyperlink"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
              children: "OH_UdsHyperlink"
            }), "* hyperlink"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向超链接类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshyperlink/capi-udmf-oh-udshyperlink",
              children: "OH_UdsHyperlink"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_gethtml",
      children: "OH_UdmfRecord_GetHtml()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetHtml(OH_UdmfRecord* pThis, OH_UdsHtml* html)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
        children: "OH_UdsHtml"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "* html"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_getappitem",
      children: "OH_UdmfRecord_GetAppItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetAppItem(OH_UdmfRecord* pThis, OH_UdsAppItem* appItem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取桌面图标类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
        children: "OH_UdsAppItem"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
              children: "OH_UdsAppItem"
            }), "* appItem"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向桌面图标类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsappitem/capi-udmf-oh-udsappitem",
              children: "OH_UdsAppItem"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_setprovider",
      children: "OH_UdmfRecord_SetProvider()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_SetProvider(OH_UdmfRecord* pThis, const char* const* types, unsigned int count, OH_UdmfRecordProvider* provider)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将指定类型的统一数据提供者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
        children: "OH_UdmfRecordProvider"
      }), "设置至统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* const* types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一组指定的要提供的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指定的数据类型的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "* provider"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据提供者对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecordprovider/capi-udmf-oh-udmfrecordprovider",
              children: "OH_UdmfRecordProvider"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_getfileuri",
      children: "OH_UdmfRecord_GetFileUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetFileUri(OH_UdmfRecord* pThis, OH_UdsFileUri* fileUri)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取文件Uri类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
        children: "OH_UdsFileUri"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
              children: "OH_UdsFileUri"
            }), "* fileUri"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向文件Uri类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
              children: "OH_UdsFileUri"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_getpixelmap",
      children: "OH_UdmfRecord_GetPixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetPixelMap(OH_UdmfRecord* pThis, OH_UdsPixelMap* pixelMap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取像素图片类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
        children: "OH_UdsPixelMap"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
              children: "OH_UdsPixelMap"
            }), "* pixelMap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向像素图片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udspixelmap/capi-udmf-oh-udspixelmap",
              children: "OH_UdsPixelMap"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_getarraybuffer",
      children: "OH_UdmfRecord_GetArrayBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetArrayBuffer(OH_UdmfRecord* record, const char* type, OH_UdsArrayBuffer* buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取ArrayBuffer类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
        children: "OH_UdsArrayBuffer"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* record"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要获取的ArrayBuffer类型数据的数据类型标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
              children: "OH_UdsArrayBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向ArrayBuffer类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsarraybuffer/capi-udmf-oh-udsarraybuffer",
              children: "OH_UdsArrayBuffer"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfrecord_getcontentform",
      children: "OH_UdmfRecord_GetContentForm()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfRecord_GetContentForm(OH_UdmfRecord* pThis, OH_UdsContentForm* contentForm)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
        children: "OH_UdmfRecord"
      }), "中获取内容卡片类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
        children: "OH_UdsContentForm"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
              children: "OH_UdsContentForm"
            }), "* contentForm"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向内容卡片类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udscontentform/capi-udmf-oh-udscontentform",
              children: "OH_UdsContentForm"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_getprimaryplaintext",
      children: "OH_UdmfData_GetPrimaryPlainText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfData_GetPrimaryPlainText(OH_UdmfData* data, OH_UdsPlainText* plainText)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中获取第一个纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
        children: "OH_UdsPlainText"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "* plainText"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向纯文本类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsplaintext/capi-udmf-oh-udsplaintext",
              children: "OH_UdsPlainText"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_getprimaryhtml",
      children: "OH_UdmfData_GetPrimaryHtml()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfData_GetPrimaryHtml(OH_UdmfData* data, OH_UdsHtml* html)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中获取第一个超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
        children: "OH_UdsHtml"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "* html"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示指向超文本标记语言类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udshtml/capi-udmf-oh-udshtml",
              children: "OH_UdsHtml"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_getrecordcount",
      children: "OH_UdmfData_GetRecordCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfData_GetRecordCount(OH_UdmfData* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中包含的所有记录数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "的数量。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_getrecord",
      children: "OH_UdmfData_GetRecord()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfRecord* OH_UdmfData_GetRecord(OH_UdmfData* data, unsigned int index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "中指定位置的数据记录。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要获取的统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "在统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "中的下标。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回统一数据记录", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例对象的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfdata_islocal",
      children: "OH_UdmfData_IsLocal()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_UdmfData_IsLocal(OH_UdmfData* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "是否是来自本端设备的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数据是否是来自本端设备。返回true表示来自本端设备，返回false表示来自远端设备。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_create",
      children: "OH_UdmfProperty_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfProperty* OH_UdmfProperty_Create(OH_UdmfData* unifiedData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建统一数据对象中数据记录属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "指针及实例对象。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfproperty_destroy",
        children: "OH_UdmfProperty_Destroy"
      }), "销毁实例对象，否则会导致内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* unifiedData"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功则返回一个指向属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例对象的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_destroy",
      children: "OH_UdmfProperty_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfProperty_Destroy(OH_UdmfProperty* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_gettag",
      children: "OH_UdmfProperty_GetTag()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* OH_UdmfProperty_GetTag(OH_UdmfProperty* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "中获取用户自定义标签值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
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
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回自定义标签值的字符串指针，否则返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_gettimestamp",
      children: "OH_UdmfProperty_GetTimestamp()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_UdmfProperty_GetTimestamp(OH_UdmfProperty* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "中获取时间戳。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
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
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回时间戳值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_getshareoption",
      children: "OH_UdmfProperty_GetShareOption()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Udmf_ShareOption OH_UdmfProperty_GetShareOption(OH_UdmfProperty* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "中获取设备内适用范围属性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
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
              href: "#udmf_shareoption",
              children: "Udmf_ShareOption"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回设备内适用范围属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_shareoption",
              children: "Udmf_ShareOption"
            }), "值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_getextrasintparam",
      children: "OH_UdmfProperty_GetExtrasIntParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfProperty_GetExtrasIntParam(OH_UdmfProperty* pThis, const char* key, int defaultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "中获取自定义的附加整型参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键值对的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int defaultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于用户自行设置获取值失败时的默认值。"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回指定的键关联的整型值，否则返回用户设置的默认值defaultValue。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_getextrasstringparam",
      children: "OH_UdmfProperty_GetExtrasStringParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* OH_UdmfProperty_GetExtrasStringParam(OH_UdmfProperty* pThis, const char* key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "中获取自定义的附加字符串参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键值对的键。"
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
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回指定的键关联的字符串值的指针，否则返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_settag",
      children: "OH_UdmfProperty_SetTag()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfProperty_SetTag(OH_UdmfProperty* pThis, const char* tag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "的自定义标签值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示自定义标签值。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_setshareoption",
      children: "OH_UdmfProperty_SetShareOption()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfProperty_SetShareOption(OH_UdmfProperty* pThis, Udmf_ShareOption option)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "的设备内适用范围", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_shareoption",
        children: "Udmf_ShareOption"
      }), "参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_shareoption",
              children: "Udmf_ShareOption"
            }), " option"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示设备内适用范围", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_shareoption",
              children: "Udmf_ShareOption"
            }), "参数。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_setextrasintparam",
      children: "OH_UdmfProperty_SetExtrasIntParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfProperty_SetExtrasIntParam(OH_UdmfProperty* pThis, const char* key, int param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "的附加整型参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键值对的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键值对的值。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfproperty_setextrasstringparam",
      children: "OH_UdmfProperty_SetExtrasStringParam()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfProperty_SetExtrasStringParam(OH_UdmfProperty* pThis, const char* key, const char* param)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
        children: "OH_UdmfProperty"
      }), "的附加字符串参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfproperty/capi-udmf-oh-udmfproperty",
              children: "OH_UdmfProperty"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
              children: "OH_UdmfRecord"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键值对的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键值对的值。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_create",
      children: "OH_UdmfOptions_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfOptions* OH_UdmfOptions_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例的指针。当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfoptions_destroy",
        children: "OH_UdmfOptions_Destroy"
      }), "销毁实例对象，否则会导致内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功则返回一个指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_destroy",
      children: "OH_UdmfOptions_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfOptions_Destroy(OH_UdmfOptions* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例的指针。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_getkey",
      children: "OH_UdmfOptions_GetKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* OH_UdmfOptions_GetKey(OH_UdmfOptions* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例中获取数据的唯一标识符信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
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
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入有效入参时返回符串指针，否则返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_setkey",
      children: "OH_UdmfOptions_SetKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfOptions_SetKey(OH_UdmfOptions* pThis, const char* key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例中的数据的唯一标识符内容参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据的唯一标识符的新字符串值。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_getintention",
      children: "OH_UdmfOptions_GetIntention()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Udmf_Intention OH_UdmfOptions_GetIntention(OH_UdmfOptions* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例中获取数据通路信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
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
              href: "#udmf_intention",
              children: "Udmf_Intention"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_intention",
              children: "Udmf_Intention"
            }), "的值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_setintention",
      children: "OH_UdmfOptions_SetIntention()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfOptions_SetIntention(OH_UdmfOptions* pThis, Udmf_Intention intention)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例中的数据通路内容参数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_intention",
              children: "Udmf_Intention"
            }), " intention"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据通路类型参数。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfoptions_reset",
      children: "OH_UdmfOptions_Reset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfOptions_Reset(OH_UdmfOptions* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重置数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
        children: "OH_UdmfOptions"
      }), "实例为空。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_getunifieddata",
      children: "OH_Udmf_GetUnifiedData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Udmf_GetUnifiedData(const char* key, Udmf_Intention intention, OH_UdmfData* unifiedData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据管理框架数据库中获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库存储的唯一标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_intention",
              children: "Udmf_Intention"
            }), " intention"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据通路类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_intention",
              children: "Udmf_Intention"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* unifiedData"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，获取到的统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "会写入该变量。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。可能的原因是服务故障或者内存不足等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_getunifieddatabyoptions",
      children: "OH_Udmf_GetUnifiedDataByOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Udmf_GetUnifiedDataByOptions(OH_UdmfOptions* options, OH_UdmfData** dataArray, unsigned int* dataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过数据通路类型从统一数据管理框架数据库中获取统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "** dataArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "列表。  需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmf_getdataelementat",
              children: "OH_UDMF_GetDataElementAt"
            }), "函数通过下标访问每个元素。  此指针需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmf_destroydataarray",
              children: "OH_Udmf_DestroyDataArray"
            }), "函数释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int* dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，表示获取到的统一数据对象个数。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。可能的原因是服务故障或者内存不足等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_setunifieddata",
      children: "OH_Udmf_SetUnifiedData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Udmf_SetUnifiedData(Udmf_Intention intention, OH_UdmfData* unifiedData, char* key, unsigned int keyLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据管理框架数据库中写入统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_intention",
              children: "Udmf_Intention"
            }), " intention"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据通路类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#udmf_intention",
              children: "Udmf_Intention"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* unifiedData"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示成功将数据设置到数据库后对应数据的唯一标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示唯一标识符参数的空间大小，内存大小不小于512字节。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。可能的原因是服务故障或者内存不足等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_setunifieddatabyoptions",
      children: "OH_Udmf_SetUnifiedDataByOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Udmf_SetUnifiedDataByOptions(OH_UdmfOptions* options, OH_UdmfData *unifiedData, char *key, unsigned int keyLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据管理框架数据库中写入统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), " *unifiedData"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *key"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功将数据设置到数据库后对应数据的唯一标识符，内存大小不小于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_key_buffer_len",
              children: "UDMF_KEY_BUFFER_LEN"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "唯一标识符参数的空间大小。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。可能的原因是服务故障或者内存不足等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_updateunifieddata",
      children: "OH_Udmf_UpdateUnifiedData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Udmf_UpdateUnifiedData(OH_UdmfOptions* options, OH_UdmfData* unifiedData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对统一数据管理框架数据库中的统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "数据进行数据更改。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* unifiedData"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。可能的原因是服务故障或者内存不足等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_deleteunifieddata",
      children: "OH_Udmf_DeleteUnifiedData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Udmf_DeleteUnifiedData(OH_UdmfOptions* options, OH_UdmfData** dataArray, unsigned int* dataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["删除统一数据管理框架数据库中的统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "* options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据操作选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfoptions/capi-udmf-oh-udmfoptions",
              children: "OH_UdmfOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "** dataArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "列表，需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmf_getdataelementat",
              children: "OH_UDMF_GetDataElementAt"
            }), "函数通过下标访问每个元素。此指针需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmf_destroydataarray",
              children: "OH_Udmf_DestroyDataArray"
            }), "函数释放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int* dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，表示获取到的统一数据对象个数。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。请参阅错误码定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-err-code-h/capi-udmf-err-code-h#udmf_errcode",
              children: "Udmf_ErrCode"
            }), "。  若返回UDMF_E_OK，表示执行成功。  若返回UDMF_E_INVALID_PARAM，表示传入了无效参数。  若返回UDMF_ERR，表示内部数据错误。可能的原因是服务故障或者内存不足等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_destroydataarray",
      children: "OH_Udmf_DestroyDataArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Udmf_DestroyDataArray(OH_UdmfData** dataArray, unsigned int dataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁数据数组内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "** dataArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "的指针列表。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列表中的数据大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_UdmfData"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfprogressinfo_getprogress",
      children: "OH_UdmfProgressInfo_GetProgress()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfProgressInfo_GetProgress(OH_Udmf_ProgressInfo* progressInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从进度信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
        children: "OH_Udmf_ProgressInfo"
      }), "中获取进度百分比数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
            }), "* progressInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示进度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回进度百分比数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfprogressinfo_getstatus",
      children: "OH_UdmfProgressInfo_GetStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_UdmfProgressInfo_GetStatus(OH_Udmf_ProgressInfo* progressInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从进度信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
        children: "OH_Udmf_ProgressInfo"
      }), "中获取状态信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
            }), "* progressInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示进度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmf-progressinfo/capi-udmf-oh-udmf-progressinfo",
              children: "OH_Udmf_ProgressInfo"
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回状态信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfgetdataparams_create",
      children: "OH_UdmfGetDataParams_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfGetDataParams* OH_UdmfGetDataParams_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建异步获取UDMF数据的请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
        children: "OH_UdmfGetDataParams"
      }), "指针及实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfgetdataparams_destroy",
        children: "OH_UdmfGetDataParams_Destroy"
      }), "销毁实例对象，否则会导致内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功则返回一个指向属性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "实例对象的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfgetdataparams_destroy",
      children: "OH_UdmfGetDataParams_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfGetDataParams_Destroy(OH_UdmfGetDataParams* pThis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
        children: "OH_UdmfGetDataParams"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "* pThis"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfgetdataparams_setdesturi",
      children: "OH_UdmfGetDataParams_SetDestUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfGetDataParams_SetDestUri(OH_UdmfGetDataParams* params, const char* destUri)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
        children: "OH_UdmfGetDataParams"
      }), "中的目标路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若设置了目标路径，会将文件类型的数据进行拷贝到指定路径。回调中获取到的文件类型数据会被替换为目标路径的URI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若不设置目标路径，则不会执行拷贝文件操作。回调中获取到的文件类型数据为源端路径URI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若应用涉及复杂文件处理策略，或需要将文件拷贝在多个路径下时，建议不设置此参数，由应用自行完成文件拷贝相关处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* destUri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示目标路径地址。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfgetdataparams_setfileconflictoptions",
      children: "OH_UdmfGetDataParams_SetFileConflictOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfGetDataParams_SetFileConflictOptions(OH_UdmfGetDataParams* params, const Udmf_FileConflictOptions options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
        children: "OH_UdmfGetDataParams"
      }), "中的文件冲突选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_fileconflictoptions",
              children: "Udmf_FileConflictOptions"
            }), " options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示文件拷贝冲突时的选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfgetdataparams_setprogressindicator",
      children: "OH_UdmfGetDataParams_SetProgressIndicator()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfGetDataParams_SetProgressIndicator(OH_UdmfGetDataParams* params, const Udmf_ProgressIndicator progressIndicator)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
        children: "OH_UdmfGetDataParams"
      }), "中的进度条指示选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#udmf_progressindicator",
              children: "Udmf_ProgressIndicator"
            }), " progressIndicator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否使用默认进度条选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmfgetdataparams_setdataprogresslistener",
      children: "OH_UdmfGetDataParams_SetDataProgressListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_UdmfGetDataParams_SetDataProgressListener(OH_UdmfGetDataParams* params, const OH_Udmf_DataProgressListener dataProgressListener)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
        children: "OH_UdmfGetDataParams"
      }), "中的监听回调函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向异步请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfgetdataparams/capi-udmf-oh-udmfgetdataparams",
              children: "OH_UdmfGetDataParams"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_udmf_dataprogresslistener",
              children: "OH_Udmf_DataProgressListener"
            }), " dataProgressListener"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的监听回调函数，可用于获取进度信息和数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_udmf_getdataelementat",
      children: "OH_UDMF_GetDataElementAt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfData* OH_UDMF_GetDataElementAt(OH_UdmfData** dataArray, unsigned int index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
        children: "OH_UdmfData"
      }), "数组中获取指定下标的统一数据对象数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "** dataArray"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "的指针数组。  只接受从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmf_getunifieddatabyoptions",
              children: "OH_Udmf_GetUnifiedDataByOptions"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmf_deleteunifieddata",
              children: "OH_Udmf_DeleteUnifiedData"
            }), "接口中获得的指针数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要获取到的统一数据对象的下标。请确保该值不超出数组范围，否则会出现数组越界。"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData*"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功则返回一个指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例对象的指针，如果输入数组为空，则返回空。"]
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