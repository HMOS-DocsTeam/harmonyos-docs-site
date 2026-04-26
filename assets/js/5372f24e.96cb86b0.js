"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["660402"], {
789636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_file_api_core_file_c_core_file_headerfile_capi_oh_cloud_disk_manager_h_capi_oh_cloud_disk_manager_h_md_537_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-file-api-core-file-c-core-file-headerfile-capi-oh-cloud-disk-manager-h-capi-oh-cloud-disk-manager-h-md-537.json
var site_docs_ref_core_file_api_core_file_c_core_file_headerfile_capi_oh_cloud_disk_manager_h_capi_oh_cloud_disk_manager_h_md_537_namespaceObject = JSON.parse('{"id":"core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h","title":"oh_cloud_disk_manager.h","description":"概述","source":"@site/docs-ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h.md","sourceDirName":"core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h","slug":"/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"oh_cloud_disk_manager.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-cloud-disk-manager-h"},"sidebar":"ref","previous":{"title":"oh_file_uri.h","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-uri-h/capi-oh-file-uri-h"},"next":{"title":"cloud_disk_error_code.h","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h.md


const frontMatter = {
	title: 'oh_cloud_disk_manager.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-cloud-disk-manager-h'
};
const contentTitle = 'oh_cloud_disk_manager.h';

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
  "value": "CloudDisk_SyncState",
  "id": "clouddisk_syncstate",
  "level": 3
}, {
  "value": "CloudDisk_OperationType",
  "id": "clouddisk_operationtype",
  "level": 3
}, {
  "value": "CloudDisk_ErrorReason",
  "id": "clouddisk_errorreason",
  "level": 3
}, {
  "value": "CloudDisk_SyncFolderState",
  "id": "clouddisk_syncfolderstate",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_CloudDisk_RegisterSyncFolderChanges()",
  "id": "oh_clouddisk_registersyncfolderchanges",
  "level": 3
}, {
  "value": "OH_CloudDisk_UnregisterSyncFolderChanges()",
  "id": "oh_clouddisk_unregistersyncfolderchanges",
  "level": 3
}, {
  "value": "OH_CloudDisk_GetSyncFolderChanges()",
  "id": "oh_clouddisk_getsyncfolderchanges",
  "level": 3
}, {
  "value": "OH_CloudDisk_SetFileSyncStates()",
  "id": "oh_clouddisk_setfilesyncstates",
  "level": 3
}, {
  "value": "OH_CloudDisk_GetFileSyncStates()",
  "id": "oh_clouddisk_getfilesyncstates",
  "level": 3
}, {
  "value": "OH_CloudDisk_RegisterSyncFolder()",
  "id": "oh_clouddisk_registersyncfolder",
  "level": 3
}, {
  "value": "OH_CloudDisk_UnregisterSyncFolder()",
  "id": "oh_clouddisk_unregistersyncfolder",
  "level": 3
}, {
  "value": "OH_CloudDisk_ActiveSyncFolder()",
  "id": "oh_clouddisk_activesyncfolder",
  "level": 3
}, {
  "value": "OH_CloudDisk_DeactiveSyncFolder()",
  "id": "oh_clouddisk_deactivesyncfolder",
  "level": 3
}, {
  "value": "OH_CloudDisk_GetSyncFolders()",
  "id": "oh_clouddisk_getsyncfolders",
  "level": 3
}, {
  "value": "OH_CloudDisk_UpdateCustomAlias()",
  "id": "oh_clouddisk_updatecustomalias",
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
        id: "oh_cloud_disk_managerh",
        children: "oh_cloud_disk_manager.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "云盘管理模块的接口定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <filemanagement/clouddiskmanager/oh_cloud_disk_manager.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohclouddiskmanager.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.CloudDiskManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-module/capi-clouddisk/capi-clouddisk",
        children: "CloudDisk"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_PathInfo/CloudDisk_FileIdInfo/CloudDisk_SyncFolderPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_PathInfo：文件路径信息。  CloudDisk_FileIdInfo：定义的文件ID。  CloudDisk_SyncFolderPath：定义的同步根路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-filesyncstate/capi-clouddisk-clouddisk-filesyncstate",
              children: "CloudDisk_FileSyncState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_FileSyncState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件的同步状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata/capi-clouddisk-clouddisk-changedata",
              children: "CloudDisk_ChangeData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_ChangeData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了同步根路径下单个文件变更事件的数据结构。该结构包含有关文件变更的详细信息，包括唯一ID、父目录的唯一ID、相对路径、变更类型、文件大小和时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changesresult/capi-clouddisk-clouddisk-changesresult",
              children: "CloudDisk_ChangesResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_ChangesResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询同步根路径中文件变更的结果。该结构体包含同步根路径中文件的变更数据，包括下一个更新序列号、结尾标志以及变更数据项数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-failedlist/capi-clouddisk-clouddisk-failedlist",
              children: "CloudDisk_FailedList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_FailedList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步操作中失败的文件列表信息。该结构包含文件路径信息以及失败的具体错误原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist",
              children: "CloudDisk_ResultList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_ResultList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一个文件同步操作的结果。该结构体包含文件的绝对路径、同步结果，以及同步状态或失败原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-displaynameinfo/capi-clouddisk-clouddisk-displaynameinfo",
              children: "CloudDisk_DisplayNameInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_DisplayNameInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义同步根路径的显示名称信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-syncfolder/capi-clouddisk-clouddisk-syncfolder",
              children: "CloudDisk_SyncFolder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_SyncFolder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步根属性信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#clouddisk_syncstate",
              children: "CloudDisk_SyncState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_SyncState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件同步状态的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#clouddisk_operationtype",
              children: "CloudDisk_OperationType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_OperationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件变更类型枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#clouddisk_errorreason",
              children: "CloudDisk_ErrorReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_ErrorReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件同步失败原因的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#clouddisk_syncfolderstate",
              children: "CloudDisk_SyncFolderState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_SyncFolderState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步根路径状态的枚举值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_clouddisk_registersyncfolderchanges",
              children: "CloudDisk_ErrorCode OH_CloudDisk_RegisterSyncFolderChanges(const CloudDisk_SyncFolderPath syncFolderPath, void (*callback)(const CloudDisk_SyncFolderPath syncFolderPath, const CloudDisk_ChangeData changeDatas[], size_t bufferLength))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册一个回调函数，用于获取同步根路径下文件的变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_unregistersyncfolderchanges",
              children: "CloudDisk_ErrorCode OH_CloudDisk_UnregisterSyncFolderChanges(const CloudDisk_SyncFolderPath syncFolderPath)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用取消注册同步根路径下文件变更的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_getsyncfolderchanges",
              children: "CloudDisk_ErrorCode OH_CloudDisk_GetSyncFolderChanges(const CloudDisk_SyncFolderPath syncFolderPath, uint64_t startUsn, size_t count, CloudDisk_ChangesResult **changesResult)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取同步根路径下的历史操作记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_setfilesyncstates",
              children: "CloudDisk_ErrorCode OH_CloudDisk_SetFileSyncStates(const CloudDisk_SyncFolderPath syncFolderPath, const CloudDisk_FileSyncState fileSyncStates[], size_t bufferLength, CloudDisk_FailedList **failedLists, size_t *failedCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用设置同步根路径下文件的同步状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_getfilesyncstates",
              children: "CloudDisk_ErrorCode OH_CloudDisk_GetFileSyncStates(const CloudDisk_SyncFolderPath syncFolderPath, const CloudDisk_PathInfo paths[], size_t bufferLength, CloudDisk_ResultList **resultLists, size_t *resultCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用查询同步根路径下文件同步状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_registersyncfolder",
              children: "CloudDisk_ErrorCode OH_CloudDisk_RegisterSyncFolder(const CloudDisk_SyncFolder *syncFolder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册同步根。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_unregistersyncfolder",
              children: "CloudDisk_ErrorCode OH_CloudDisk_UnregisterSyncFolder(const CloudDisk_SyncFolderPath syncFolderPath)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用取消注册同步根。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_activesyncfolder",
              children: "CloudDisk_ErrorCode OH_CloudDisk_ActiveSyncFolder(const CloudDisk_SyncFolderPath syncFolderPath)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用激活同步根。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_deactivesyncfolder",
              children: "CloudDisk_ErrorCode OH_CloudDisk_DeactiveSyncFolder(const CloudDisk_SyncFolderPath syncFolderPath)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用取消激活同步根。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_getsyncfolders",
              children: "CloudDisk_ErrorCode OH_CloudDisk_GetSyncFolders(CloudDisk_SyncFolder **syncFolders, size_t *count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用获取所有同步根。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_clouddisk_updatecustomalias",
              children: "CloudDisk_ErrorCode OH_CloudDisk_UpdateCustomAlias(const CloudDisk_SyncFolderPath syncFolderPath, const char *customAlias, size_t customAliasLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用更新同步根别名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clouddisk_syncstate",
      children: "CloudDisk_SyncState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum CloudDisk_SyncState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件同步状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "IDLE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目前处于空闲状态，未执行任何同步操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNCING = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件正在同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_SUCCEEDED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件同步成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_FAILED = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件同步失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_CANCELED = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件同步取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_CONFLICTED = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件同步冲突。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clouddisk_operationtype",
      children: "CloudDisk_OperationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum CloudDisk_OperationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件变更类型枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "CREATE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建文件或目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除文件或目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOVE_FROM = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动此文件或目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOVE_TO = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动到此文件或目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOSE_WRITE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在写入操作后关闭文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_FOLDER_INVALID = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步根路径无效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clouddisk_errorreason",
      children: "CloudDisk_ErrorReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum CloudDisk_ErrorReason\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件同步失败原因的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "INVALID_ARGUMENT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入的参数无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_SUCH_FILE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作的文件或目录不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_SPACE_LEFT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备上的剩余空间不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OUT_OF_RANGE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超出有效范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_SYNC_STATE = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步状态未设置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clouddisk_syncfolderstate",
      children: "CloudDisk_SyncFolderState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum CloudDisk_SyncFolderState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步根路径状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "INACTIVE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示同步根路径的状态是未激活的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示同步根路径的状态是激活的。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_registersyncfolderchanges",
      children: "OH_CloudDisk_RegisterSyncFolderChanges()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_RegisterSyncFolderChanges(const CloudDisk_SyncFolderPath syncFolderPath, void (*callback)(const CloudDisk_SyncFolderPath syncFolderPath, const CloudDisk_ChangeData changeDatas[], size_t bufferLength))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用注册一个回调函数，用于获取同步根路径下文件的变更。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册的回调函数。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_unregistersyncfolderchanges",
      children: "OH_CloudDisk_UnregisterSyncFolderChanges()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_UnregisterSyncFolderChanges(const CloudDisk_SyncFolderPath syncFolderPath)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用取消注册同步根路径下文件变更的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_getsyncfolderchanges",
      children: "OH_CloudDisk_GetSyncFolderChanges()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_GetSyncFolderChanges(const CloudDisk_SyncFolderPath syncFolderPath, uint64_t startUsn, size_t count, CloudDisk_ChangesResult **changesResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取同步根路径下的历史操作记录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t startUsn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询起始的变更序列，范围：[0, 2^64 - 1]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询文件变更的数量，范围：[1, 100]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changesresult/capi-clouddisk-clouddisk-changesresult",
              children: "CloudDisk_ChangesResult"
            }), " **changesResult"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示查询文件变更的结果。详情请参阅", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changesresult/capi-clouddisk-clouddisk-changesresult",
              children: "CloudDisk_ChangesResult"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_setfilesyncstates",
      children: "OH_CloudDisk_SetFileSyncStates()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_SetFileSyncStates(const CloudDisk_SyncFolderPath syncFolderPath, const CloudDisk_FileSyncState fileSyncStates[], size_t bufferLength, CloudDisk_FailedList **failedLists, size_t *failedCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用设置同步根路径下文件的同步状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待设置的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-filesyncstate/capi-clouddisk-clouddisk-filesyncstate",
              children: "const CloudDisk_FileSyncState"
            }), " fileSyncStates[]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定文件路径及其目标同步状态的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-filesyncstate/capi-clouddisk-clouddisk-filesyncstate",
              children: "CloudDisk_FileSyncState"
            }), "数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t bufferLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待设置同步状态数组的长度，范围：[1, 100]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-failedlist/capi-clouddisk-clouddisk-failedlist",
              children: "CloudDisk_FailedList"
            }), " **failedLists"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数。返回一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-failedlist/capi-clouddisk-clouddisk-failedlist",
              children: "CloudDisk_FailedList"
            }), "数组的指针，该数组包含设置失败的文件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *failedCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数。设置同步状态失败的文件列表数组长度。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_getfilesyncstates",
      children: "OH_CloudDisk_GetFileSyncStates()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_GetFileSyncStates(const CloudDisk_SyncFolderPath syncFolderPath, const CloudDisk_PathInfo paths[], size_t bufferLength, CloudDisk_ResultList **resultLists, size_t *resultCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用查询同步根路径下文件同步状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待查询的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "const CloudDisk_PathInfo"
            }), " paths[]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待查询同步状态", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), "的数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t bufferLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待查询同步状态的数组的长度，范围：[1, 100]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist",
              children: "CloudDisk_ResultList"
            }), " **resultLists"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数。返回一个查询到的文件同步操作结果，详情可参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist",
              children: "CloudDisk_ResultList"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *resultCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数。返回失败的文件数量。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_registersyncfolder",
      children: "OH_CloudDisk_RegisterSyncFolder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_RegisterSyncFolder(const CloudDisk_SyncFolder *syncFolder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用注册同步根。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-syncfolder/capi-clouddisk-clouddisk-syncfolder",
              children: "const CloudDisk_SyncFolder"
            }), " *syncFolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待注册的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-syncfolder/capi-clouddisk-clouddisk-syncfolder",
              children: "CloudDisk_SyncFolder"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_unregistersyncfolder",
      children: "OH_CloudDisk_UnregisterSyncFolder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_UnregisterSyncFolder(const CloudDisk_SyncFolderPath syncFolderPath)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用取消注册同步根。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要取消注册的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_activesyncfolder",
      children: "OH_CloudDisk_ActiveSyncFolder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_ActiveSyncFolder(const CloudDisk_SyncFolderPath syncFolderPath)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用激活同步根。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要激活监听的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_deactivesyncfolder",
      children: "OH_CloudDisk_DeactiveSyncFolder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_DeactiveSyncFolder(const CloudDisk_SyncFolderPath syncFolderPath)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用取消激活同步根。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消激活监听的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_getsyncfolders",
      children: "OH_CloudDisk_GetSyncFolders()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_GetSyncFolders(CloudDisk_SyncFolder **syncFolders, size_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用获取所有同步根。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-syncfolder/capi-clouddisk-clouddisk-syncfolder",
              children: "CloudDisk_SyncFolder"
            }), " **syncFolders"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数。返回同步根路径数组", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-syncfolder/capi-clouddisk-clouddisk-syncfolder",
              children: "CloudDisk_SyncFolder"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数。当前网盘注册的所有同步根的数量。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_clouddisk_updatecustomalias",
      children: "OH_CloudDisk_UpdateCustomAlias()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisk_ErrorCode OH_CloudDisk_UpdateCustomAlias(const CloudDisk_SyncFolderPath syncFolderPath, const char *customAlias, size_t customAliasLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用更新同步根别名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
            children: "const CloudDisk_SyncFolderPath syncFolderPath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待更新别名的同步根路径，参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *customAlias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的别名，不能包含字符：/*?<>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t customAliasLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的别名长度，范围：[0, 255]。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果接口调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CLOUD_DISK_OK"
            }), "；否则返回云盘管理模块的错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-cloud-disk-error-code-h/capi-cloud-disk-error-code-h#clouddisk_errorcode",
              children: "CloudDisk_ErrorCode"
            }), "。"]
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