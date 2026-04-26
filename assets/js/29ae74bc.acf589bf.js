"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["128227"], {
181201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_cross_app_data_share_many_to_many_data_share_unified_data_channels_c_unified_data_channels_c_md_29a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-cross-app-data-share-many-to-many-data-share-unified-data-channels-c-unified-data-channels-c-md-29a.json
var site_docs_arkdata_cross_app_data_share_many_to_many_data_share_unified_data_channels_c_unified_data_channels_c_md_29a_namespaceObject = JSON.parse('{"id":"arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c/unified-data-channels-c","title":"通过标准化数据通路实现数据共享 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c/unified-data-channels-c.md","sourceDirName":"arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c","slug":"/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c/","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过标准化数据通路实现数据共享 (C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unified-data-channels-c","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过标准化数据通路实现数据共享 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels/"},"next":{"title":"应用数据向量化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/aip-data-intelligence-embedding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c/unified-data-channels-c.md


const frontMatter = {
	title: '通过标准化数据通路实现数据共享 (C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unified-data-channels-c',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过标准化数据通路实现数据共享 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "标准化数据通路的定义和实现",
  "id": "标准化数据通路的定义和实现",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "添加动态链接库",
  "id": "添加动态链接库",
  "level": 2
}, {
  "value": "引用头文件",
  "id": "引用头文件",
  "level": 2
}, {
  "value": "使用UDMF写入UDS数据",
  "id": "使用udmf写入uds数据",
  "level": 2
}, {
  "value": "使用UDMF获取UDS数据",
  "id": "使用udmf获取uds数据",
  "level": 2
}, {
  "value": "使用UDMF更新UDS数据",
  "id": "使用udmf更新uds数据",
  "level": 2
}, {
  "value": "使用UDMF删除UDS数据",
  "id": "使用udmf删除uds数据",
  "level": 2
}, {
  "value": "使用UDMF延迟写入UDS数据",
  "id": "使用udmf延迟写入uds数据",
  "level": 2
}, {
  "value": "定义UDS数据提供函数",
  "id": "定义uds数据提供函数",
  "level": 3
}, {
  "value": "延迟写入UDS数据",
  "id": "延迟写入uds数据",
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
        id: "通过标准化数据通路实现数据共享-cc",
        children: "通过标准化数据通路实现数据共享 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多对多跨应用数据共享的场景下，需要提供一条数据通路，能够写入多个不同应用的数据，并共享给其他应用进行读取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UDMF针对多对多跨应用数据共享的不同业务场景，提供了标准化的数据通路和数据写入与读取接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准化数据通路的定义和实现",
      children: "标准化数据通路的定义和实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据通路是为各种业务场景提供的跨应用数据写入与读取通路。它能够暂存应用需要共享的、符合标准化数据定义的统一数据对象，并提供给其他应用访问。同时，它按照一定策略对暂存数据的修改、删除权限及生命周期进行管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据通路通过UDMF提供的系统服务实现。应用（数据提供方）需要共享公共数据时，可以通过UDMF提供的插入接口将数据写入UDMF的数据通路中，并且可以通过UDMF提供的更新和删除接口对已存入的数据进行更新和删除操作。目标应用（数据访问方）可以通过UDMF提供的读取接口访问数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据通路相关接口应不推荐多线程调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一数据对象UnifiedData在UDMF数据通路中具有全局唯一URI标识，其定义为udmf://intention/bundleName/groupId，其中各组成部分的含义分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "udmf:"
          })
        }), " 协议名，表示使用UDMF提供的数据通路。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "intention:"
          })
        }), " UDMF已经支持的数据通路类型枚举值，对应不同的业务场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "bundleName:"
          })
        }), " 数据来源应用的包名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "groupId:"
          })
        }), " 分组名称，支持批量数据分组管理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前UDMF中的跨应用数据共享通路有：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "公共数据通路"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "公共数据通路"
        })
      }), "：应用共享的公用数据通路，所有应用均可向通路中写入数据。写入方可以根据写入数据时生成的数据唯一标识符进行数据的更新、删除、查询指定数据标识符或全量查询。数据读取方可以通过唯一标识符读取指定数据，也可以设置Intention枚举类型为DATA_HUB来读取当前数据通路中的全量数据。公共数据通路仅用于传输应用间的过程数据，不能用于传输沙箱目录下文件等有权限管控的数据。UDMF会统一对数据的生命周期进行管理，每小时定期清理存入时长超过一小时的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h",
        children: "UDMF接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdsHyperlink* OH_UdsHyperlink_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建超链接类型对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdsHyperlink_SetDescription(OH_UdsHyperlink* pThis, const char* description)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置超链接类型实例中的描述参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecord* OH_UdmfRecord_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指向统一数据记录OH_UdmfRecord的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecord_AddHyperlink(OH_UdmfRecord* pThis, OH_UdsHyperlink* hyperlink)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OH_UdmfRecord添加超链接类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfData* OH_UdmfData_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指向统一数据对象OH_UdmfData的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfData_AddRecord(OH_UdmfData* pThis, OH_UdmfRecord* record)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OH_UdmfData中增加一条OH_UdmfRecord数据记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Udmf_SetUnifiedDataByOptions(OH_UdmfOptions* options, OH_UdmfData *unifiedData, char *key, unsigned int keyLen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从统一数据管理框架数据库中写入统一数据对象OH_UdmfData数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_UdsHyperlink_Destroy(OH_UdsHyperlink* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁超链接类型指针指向的实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_UdmfRecord_Destroy(OH_UdmfRecord* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁指向统一数据记录OH_UdmfRecord的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_UdmfData_Destroy(OH_UdmfData* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁指向统一数据对象OH_UdmfData的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char** OH_UdmfRecord_GetTypes(OH_UdmfRecord* pThis, unsigned int* count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_UdmfRecord中全部的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecord_GetHyperlink(OH_UdmfRecord* pThis, OH_UdsHyperlink* hyperlink)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_UdmfRecord中超链接类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Udmf_GetUnifiedDataByOptions(OH_UdmfOptions* options, OH_UdmfData** dataArray, unsigned int* dataSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过数据通路类型从统一数据管理框架数据库中获取统一数据对象数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Udmf_UpdateUnifiedData(OH_UdmfOptions* options, OH_UdmfData* unifiedData)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对统一数据管理框架数据库中的统一数据对象数据进行数据更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Udmf_DeleteUnifiedData(OH_UdmfOptions* options, OH_UdmfData** dataArray, unsigned int* dataSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除统一数据管理框架数据库中的统一数据对象数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_UdmfData_HasType(OH_UdmfData* pThis, const char* type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断统一数据对象OH_UdmfData是否存在指定类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecord** OH_UdmfData_GetRecords(OH_UdmfData* pThis, unsigned int* count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_UdmfData中全部的数据记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecordProvider* OH_UdmfRecordProvider_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指向统一数据提供者的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecordProvider_SetData(OH_UdmfRecordProvider* provider, void* context, const OH_UdmfRecordProvider_GetData callback, const UdmfData_Finalize finalize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置统一数据提供者的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecord_SetProvider(OH_UdmfRecord* pThis, const char* const* types, unsigned int count, OH_UdmfRecordProvider* provider)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将统一数据提供者配置到OH_UdmfRecord中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfOptions* OH_UdmfOptions_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指向数据操作选项的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_UdmfOptions_Destroy(OH_UdmfOptions* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁指向数据操作选项的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加动态链接库",
      children: "添加动态链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libudmf.so, libhilog_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用头文件",
      children: "引用头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdio>\n#include <cstring>\n#include <database/udmf/utd.h>\n#include <database/udmf/uds.h>\n#include <database/udmf/udmf.h>\n#include <database/udmf/udmf_meta.h>\n#include <database/udmf/udmf_err_code.h>\n#include <hilog/log.h>\n\n#undef LOG_TAG\n#define LOG_TAG \"MY_LOG\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用udmf写入uds数据",
      children: "使用UDMF写入UDS数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以写入超链接OH_UdsHyperlink类型数据场景为例，说明如何使用UDS与UDMF。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建hyperlink的UDS数据结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置hyperlink中的URL和描述信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfRecord对象，并向OH_UdmfRecord中添加超链接类型数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfData对象，并向OH_UdmfData中添加OH_UdmfRecord。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建数据操作选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建数据，将数据写入数据库中，得到返回的key值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用完成后销毁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t SetHyperlinkData(OH_UdsHyperlink* hyperlink, OH_UdmfRecord* record, OH_UdmfData* data)\n{\n    // 2.设置hyperlink中的URL和描述信息。\n    int ret = OH_UdsHyperlink_SetUrl(hyperlink, \"www.demo.com\");\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Hyperlink set url error!\");\n        return ret;\n    }\n    ret = OH_UdsHyperlink_SetDescription(hyperlink, \"This is the description.\");\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Hyperlink set description error!\");\n        return ret;\n    }\n    // 3. 向OH_UdmfRecord中添加超链接类型数据。\n    ret = OH_UdmfRecord_AddHyperlink(record, hyperlink);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Add hyperlink to record error!\");\n        return ret;\n    }\n    // 4. 并向OH_UdmfData中添加OH_UdmfRecord。\n    ret = OH_UdmfData_AddRecord(data, record);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Add record to data error!\");\n        return ret;\n    }\n    return UDMF_E_OK;\n}\n\nint32_t CreateDataTest()\n{\n    // 1.创建hyperlink的UDS数据结构、OH_UdmfRecord对象及OH_UdmfData对象。\n    OH_UdsHyperlink* hyperlink = OH_UdsHyperlink_Create();\n    OH_UdmfRecord* record = OH_UdmfRecord_Create();\n    OH_UdmfData* data = OH_UdmfData_Create();\n    int32_t ret = SetHyperlinkData(hyperlink, record, data);\n    if (ret != UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Create data error!\");\n        OH_UdsHyperlink_Destroy(hyperlink);\n        OH_UdmfRecord_Destroy(record);\n        OH_UdmfData_Destroy(data);\n        return ret;\n    }\n    // 构建数据操作选项。\n    OH_UdmfOptions* options = OH_UdmfOptions_Create();\n    ret = OH_UdmfOptions_SetIntention(options, Udmf_Intention::UDMF_INTENTION_DATA_HUB);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Set option error!\");\n        OH_UdsHyperlink_Destroy(hyperlink);\n        OH_UdmfRecord_Destroy(record);\n        OH_UdmfData_Destroy(data);\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    // 6. 构建数据，将数据写入数据库中，得到返回的key值。\n    char key[UDMF_KEY_BUFFER_LEN] = {0};\n    ret = OH_Udmf_SetUnifiedDataByOptions(options, data, key, sizeof(key));\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Set data error!\");\n        OH_UdsHyperlink_Destroy(hyperlink);\n        OH_UdmfRecord_Destroy(record);\n        OH_UdmfData_Destroy(data);\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    OH_LOG_INFO(LOG_APP, \"key = %{public}s\", key);\n    // 7. 使用完成后销毁指针。\n    OH_UdsHyperlink_Destroy(hyperlink);\n    OH_UdmfRecord_Destroy(record);\n    OH_UdmfData_Destroy(data);\n    OH_UdmfOptions_Destroy(options);\n    return UDMF_E_OK;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用udmf获取uds数据",
      children: "使用UDMF获取UDS数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面继续以获取超链接OH_UdsHyperlink类型数据场景为例，说明如何使用UDS与UDMF。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建数据操作选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过数据操作选项获取数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "判断OH_UdmfData是否有对应的类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取数据记录和hyperlink数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t ProcessHyperlinks(OH_UdmfRecord* record, unsigned int recordTypeIdCount, char** typeIdsFromRecord)\n{\n    for (unsigned int k = 0; k < recordTypeIdCount; k++) {\n         // 从OH_UdmfRecord中获取超链接类型数据。\n        if (strcmp(typeIdsFromRecord[k], UDMF_META_HYPERLINK) == 0) {\n             // 创建hyperlink的UDS，用来承载record中读取出来的hyperlink数据。\n            OH_UdsHyperlink* hyperlink = OH_UdsHyperlink_Create();\n            int32_t ret = OH_UdmfRecord_GetHyperlink(record, hyperlink);\n            if (ret != Udmf_ErrCode::UDMF_E_OK) {\n                OH_LOG_ERROR(LOG_APP, \"Fail get hyperlink from record!\");\n                return ret;\n            }\n            // 读取OH_UdsHyperlink中的各项信息。\n            OH_LOG_INFO(LOG_APP, \"The hyperlink type id is : %{public}s\", OH_UdsHyperlink_GetType(hyperlink));\n            OH_LOG_INFO(LOG_APP, \"The hyperlink url is : %{public}s\", OH_UdsHyperlink_GetUrl(hyperlink));\n            OH_LOG_INFO(LOG_APP, \"The hyperlink description is : %{public}s\",\n                OH_UdsHyperlink_GetDescription(hyperlink));\n            OH_UdsHyperlink_Destroy(hyperlink);\n        }\n    }\n    return UDMF_E_OK;\n}\n\nint32_t ProcessData(OH_UdmfData* data)\n{\n    unsigned int recordsCount = 0;\n    OH_UdmfRecord** records = OH_UdmfData_GetRecords(data, &recordsCount);\n    OH_LOG_INFO(LOG_APP, \"the count of records count is %{public}u\", recordsCount);\n    for (unsigned int j = 0; j < recordsCount; j++) {\n        // 获取OH_UdmfRecord类型列表。\n        unsigned int recordTypeIdCount = 0;\n        char** typeIdsFromRecord = OH_UdmfRecord_GetTypes(records[j], &recordTypeIdCount);\n        int32_t ret = ProcessHyperlinks(records[j], recordTypeIdCount, typeIdsFromRecord);\n        if (ret != Udmf_ErrCode::UDMF_E_OK) {\n            OH_LOG_ERROR(LOG_APP, \"ProcessRecordHyperlinks error!\");\n            return ret;\n        }\n    }\n    return UDMF_E_OK;\n}\n\nint32_t HandleUdmfHyperlinkData(OH_UdmfData* readData, unsigned int dataSize, OH_UdmfData** dataArray)\n{\n    for (unsigned int i = 0; i < dataSize; i++) {\n        OH_UdmfData* data = OH_UDMF_GetDataElementAt(dataArray, i);\n         // 3. 判断OH_UdmfData是否有对应的类型。\n        if (!OH_UdmfData_HasType(data, UDMF_META_HYPERLINK)) {\n            OH_LOG_INFO(LOG_APP, \"There is no hyperlink type in data[%{public}u].\", i);\n            continue;\n        }\n        // 4. 获取数据记录和hyperlink数据。\n        int32_t ret = ProcessData(data);\n        if (ret != Udmf_ErrCode::UDMF_E_OK) {\n            OH_LOG_ERROR(LOG_APP, \"Process data error!\");\n            return ret;\n        }\n    }\n    return UDMF_E_OK;\n}\n\nint32_t GetDataTest()\n{\n    // 1. 构建数据操作选项。\n    OH_UdmfOptions* options = OH_UdmfOptions_Create();\n    int32_t ret = OH_UdmfOptions_SetIntention(options, Udmf_Intention::UDMF_INTENTION_DATA_HUB);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Set option error!\");\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    // 2. 通过数据操作选项获取数据。\n    unsigned int dataSize = 0;\n    OH_UdmfData* readData = nullptr;\n    ret = OH_Udmf_GetUnifiedDataByOptions(options, &readData, &dataSize);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Get Data error!\");\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    OH_UdmfOptions_Destroy(options);\n    OH_LOG_INFO(LOG_APP, \"the size of data is %{public}u\", dataSize);\n    OH_UdmfData** dataArray = &readData;\n    ret = HandleUdmfHyperlinkData(readData, dataSize, dataArray);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Get Data error!\");\n        return ret;\n    }\n    // 5.销毁指针。\n    OH_Udmf_DestroyDataArray(dataArray, dataSize);\n    return UDMF_E_OK;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用udmf更新uds数据",
      children: "使用UDMF更新UDS数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以更新超链接OH_UdsHyperlink类型数据场景为例，说明如何使用UDS与UDMF。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建hyperlink的UDS数据结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置hyperlink中的URL和描述信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfRecord对象，并向OH_UdmfRecord中添加超链接类型数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfData对象，并向OH_UdmfData中添加OH_UdmfRecord。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建数据操作选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更新数据，将数据写入数据库中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用完成后销毁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t AddHyperlinkToUdmfRecord(OH_UdsHyperlink* hyperlink, OH_UdmfRecord* record, OH_UdmfData* data)\n{\n    // 2. 设置hyperlink中的URL和描述信息。\n    int32_t ret = OH_UdsHyperlink_SetUrl(hyperlink, \"www.demo2.com\");\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Hyperlink set url error!\");\n        return ret;\n    }\n    ret = OH_UdsHyperlink_SetDescription(hyperlink, \"This is the new description.\");\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Hyperlink set description error!\");\n        return ret;\n    }\n    // 3. 向OH_UdmfRecord中添加超链接类型数据。\n    ret = OH_UdmfRecord_AddHyperlink(record, hyperlink);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Add hyperlink to record error!\");\n        return ret;\n    }\n    // 4. 向OH_UdmfData中添加OH_UdmfRecord。\n    ret = OH_UdmfData_AddRecord(data, record);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Add record to data error!\");\n        return ret;\n    }\n    return UDMF_E_OK;\n}\n\nint32_t UpdateDataTest()\n{\n    // 1.创建hyperlink的UDS数据结构、OH_UdmfRecord对象及OH_UdmfData对象。\n    OH_UdsHyperlink* hyperlink = OH_UdsHyperlink_Create();\n    OH_UdmfRecord* record = OH_UdmfRecord_Create();\n    OH_UdmfData* data = OH_UdmfData_Create();\n    int32_t ret = AddHyperlinkToUdmfRecord(hyperlink, record, data);\n    if (ret != UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Fail to create hyperlink!\");\n        OH_UdsHyperlink_Destroy(hyperlink);\n        OH_UdmfRecord_Destroy(record);\n        OH_UdmfData_Destroy(data);\n        return ret;\n    }\n    // 5. 构建数据操作选项。\n    OH_UdmfOptions* options = OH_UdmfOptions_Create();\n    // 此处key为示例，不可直接使用，其值应与OH_Udmf_SetUnifiedDataByOptions接口中获取到的key值保持一致。\n    char key[] = \"udmf://DataHub/com.ohos.test/0123456789\";\n    ret = OH_UdmfOptions_SetIntention(options, Udmf_Intention::UDMF_INTENTION_DATA_HUB);\n    if (ret != Udmf_ErrCode::UDMF_E_OK\n        || OH_UdmfOptions_SetKey(options, key) != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Set option error!\");\n        OH_UdsHyperlink_Destroy(hyperlink);\n        OH_UdmfRecord_Destroy(record);\n        OH_UdmfData_Destroy(data);\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    // 6. 更新数据，将数据写入数据库中。\n    ret = OH_Udmf_UpdateUnifiedData(options, data);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Update data error!\");\n        OH_UdsHyperlink_Destroy(hyperlink);\n        OH_UdmfRecord_Destroy(record);\n        OH_UdmfData_Destroy(data);\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    OH_LOG_INFO(LOG_APP, \"update data success\");\n    // 7. 使用完成后销毁指针。\n    OH_UdsHyperlink_Destroy(hyperlink);\n    OH_UdmfRecord_Destroy(record);\n    OH_UdmfData_Destroy(data);\n    OH_UdmfOptions_Destroy(options);\n    return UDMF_E_OK;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用udmf删除uds数据",
      children: "使用UDMF删除UDS数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面继续以获取超链接OH_UdsHyperlink类型数据场景为例，说明如何使用UDS与UDMF。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建数据操作选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过数据操作选项删除数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "判断OH_UdmfData是否有对应的类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取数据记录和hyperlink数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取数据记录中的元素。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "销毁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t ProcessRecordHyperlinks(OH_UdmfRecord* record, unsigned int recordTypeIdCount, char** typeIdsFromRecord)\n{\n    for (unsigned int k = 0; k < recordTypeIdCount; k++) {\n        // 从OH_UdmfRecord中获取超链接类型数据。\n        if (strcmp(typeIdsFromRecord[k], UDMF_META_HYPERLINK) == 0) {\n            // 创建hyperlink的UDS，用来承载record中读取出来的hyperlink数据。\n            OH_UdsHyperlink* hyperlink = OH_UdsHyperlink_Create();\n            int32_t ret = OH_UdmfRecord_GetHyperlink(record, hyperlink);\n            if (ret != Udmf_ErrCode::UDMF_E_OK) {\n                OH_LOG_ERROR(LOG_APP, \"Fail get hyperlink from record!\");\n                OH_UdsHyperlink_Destroy(hyperlink);\n                return ret;\n            }\n            // 读取OH_UdsHyperlink中的各项信息。\n            OH_LOG_INFO(LOG_APP, \"The hyperlink type id is : %{public}s\", OH_UdsHyperlink_GetType(hyperlink));\n            OH_LOG_INFO(LOG_APP, \"The hyperlink url is : %{public}s\", OH_UdsHyperlink_GetUrl(hyperlink));\n            OH_LOG_INFO(LOG_APP, \"The hyperlink description is : %{public}s\",\n                OH_UdsHyperlink_GetDescription(hyperlink));\n            OH_UdsHyperlink_Destroy(hyperlink);\n        }\n    }\n    return UDMF_E_OK;\n}\n\nint32_t ProcessDataElement(OH_UdmfData* data)\n{\n    unsigned int recordsCount = 0;\n    OH_UdmfRecord** records = OH_UdmfData_GetRecords(data, &recordsCount);\n    OH_LOG_INFO(LOG_APP, \"the count of records count is %{public}u\", recordsCount);\n    // 5. 获取数据记录中的元素。\n    for (unsigned int j = 0; j < recordsCount; j++) {\n        // 获取OH_UdmfRecord类型列表。\n        unsigned int recordTypeIdCount = 0;\n        char** typeIdsFromRecord = OH_UdmfRecord_GetTypes(records[j], &recordTypeIdCount);\n        int32_t ret = ProcessRecordHyperlinks(records[j], recordTypeIdCount, typeIdsFromRecord);\n        if (ret != Udmf_ErrCode::UDMF_E_OK) {\n            OH_LOG_ERROR(LOG_APP, \"ProcessRecordHyperlinks error!\");\n            return ret;\n        }\n    }\n    return UDMF_E_OK;\n}\n\nint32_t ProcessHyperlinkDataFromArray(OH_UdmfData* readData, unsigned int dataSize, OH_UdmfData** dataArray)\n{\n    for (unsigned int i = 0; i < dataSize - 1; i++) {\n        OH_UdmfData* data = OH_UDMF_GetDataElementAt(dataArray, i);\n        // 3. 判断OH_UdmfData是否有对应的类型。\n        if (!OH_UdmfData_HasType(data, UDMF_META_HYPERLINK)) {\n            OH_LOG_INFO(LOG_APP, \"There is no hyperlink type in data[%{public}u].\", i);\n            continue;\n        }\n        // 4. 获取数据记录和hyperlink数据。\n        int32_t ret = ProcessDataElement(data);\n        if (ret != UDMF_E_OK) {\n            OH_LOG_ERROR(LOG_APP, \"processDataElement data error!\");\n            return ret;\n        }\n    }\n    return UDMF_E_OK;\n}\n\nint32_t DeleteDataTest()\n{\n    // 1. 构建数据操作选项。\n    OH_UdmfOptions* options = OH_UdmfOptions_Create();\n    int32_t ret = OH_UdmfOptions_SetIntention(options, Udmf_Intention::UDMF_INTENTION_DATA_HUB);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Set option error!\");\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    // 2. 通过数据操作选项删除数据。\n    unsigned int dataSize = 0;\n    OH_UdmfData* readData = nullptr;\n    ret = OH_Udmf_DeleteUnifiedData(options, &readData, &dataSize);\n    if (ret != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Data error!\");\n        OH_UdmfOptions_Destroy(options);\n        return ret;\n    }\n    OH_UdmfOptions_Destroy(options);\n    if (dataSize == 0) {\n        OH_LOG_INFO(LOG_APP, \"the size of data is %{public}u\", dataSize);\n        return UDMF_E_OK;\n    }\n    OH_LOG_INFO(LOG_APP, \"the size of data is %{public}u\", dataSize);\n    OH_UdmfData** dataArray = &readData;\n    ret = ProcessHyperlinkDataFromArray(readData, dataSize, dataArray);\n    if (ret != UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Process hyperlink data error!\");\n        return ret;\n    }\n    // 6. 销毁指针。\n    OH_Udmf_DestroyDataArray(dataArray, dataSize);\n    return UDMF_E_OK;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用udmf延迟写入uds数据",
      children: "使用UDMF延迟写入UDS数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义uds数据提供函数",
      children: "定义UDS数据提供函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以超链接hyperlink类型数据场景为例，说明如何定义一个提供UDS数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定义OH_UdmfRecordProvider的数据提供函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在数据提供函数中，创建hyperlink类型的UDS数据结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置hyperlink的URL和描述信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定义OH_UdmfRecordProvider销毁时触发的回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 为了代码可读性，代码中省略了各个步骤操作结果的校验，实际开发中需要确认每次调用的成功。\n// 1. 获取数据时触发的提供UDS数据的回调函数。\nstatic void* GetDataCallback(void* context, const char* type)\n{\n    if (strcmp(type, UDMF_META_HYPERLINK) == 0) {\n        // 2. 创建超链接hyperlink数据的UDS数据结构。\n        OH_UdsHyperlink* hyperlink = OH_UdsHyperlink_Create();\n        // 3. 设置hyperlink中的URL和描述信息。\n        OH_UdsHyperlink_SetUrl(hyperlink, \"www.demo.com\");\n        OH_UdsHyperlink_SetDescription(hyperlink, \"This is the description.\");\n        return hyperlink;\n    }\n    return nullptr;\n}\n// 4. OH_UdmfRecordProvider销毁时触发的回调函数。\nstatic void ProviderFinalizeCallback(void* context) { OH_LOG_INFO(LOG_APP, \"OH_UdmfRecordProvider finalize.\"); }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "延迟写入uds数据",
      children: "延迟写入UDS数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以延迟写入超链接类型数据为例，说明如何使用OH_UdmfRecordProvider与UDMF。此步骤完成后，超链接类型数据并未真正写入数据库。只有当数据使用者从OH_UdmfRecord中获取OH_UdsHyperlink时，才会触发上文定义的GetDataCallback数据提供函数，从中获取数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfRecordProvider对象，设置它的数据提供函数和销毁回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfRecord对象，并配置OH_UdmfRecordProvider。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfData对象，并向OH_UdmfData中添加OH_UdmfRecord。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建数据并写入数据库中，获取返回的Key值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用完成后销毁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t ProviderSetDataTest()\n{\n    // 为了代码可读性，代码中省略了各个步骤操作结果的校验，实际开发中需要确认每次调用的成功。\n    // 1. 创建一个OH_UdmfRecordProvider，设置它的数据提供函数和销毁回调函数。\n    OH_UdmfRecordProvider* provider = OH_UdmfRecordProvider_Create();\n    OH_UdmfRecordProvider_SetData(provider, (void*)provider, GetDataCallback, ProviderFinalizeCallback);\n\n    // 2. 创建OH_UdmfRecord对象，并配置OH_UdmfRecordProvider。\n    OH_UdmfRecord* record = OH_UdmfRecord_Create();\n    const char* types[1] = {UDMF_META_HYPERLINK};\n    OH_UdmfRecord_SetProvider(record, types, 1, provider);\n\n    // 3. 创建OH_UdmfData对象，并向OH_UdmfData中添加OH_UdmfRecord。\n    OH_UdmfData* data = OH_UdmfData_Create();\n    OH_UdmfData_AddRecord(data, record);\n\n    // 4. 构建数据并写入数据库中，获取返回的Key值。\n    OH_UdmfOptions* options = OH_UdmfOptions_Create();\n    if (OH_UdmfOptions_SetIntention(options, Udmf_Intention::UDMF_INTENTION_DATA_HUB) != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Set option error!\");\n        OH_UdmfOptions_Destroy(options);\n        return UDMF_ERR;\n    }\n    char key[UDMF_KEY_BUFFER_LEN] = {0};\n    if (OH_Udmf_SetUnifiedDataByOptions(options, data, key, sizeof(key)) != Udmf_ErrCode::UDMF_E_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Set data error!\");\n    }\n    OH_LOG_INFO(LOG_APP, \"key = %{public}s\", key);\n\n    // 5. 使用完成后销毁指针。\n    OH_UdmfRecord_Destroy(record);\n    OH_UdmfData_Destroy(data);\n    OH_UdmfOptions_Destroy(options);\n    return UDMF_E_OK;\n}\n"
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