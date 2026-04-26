"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["594151"], {
984081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_file_api_core_file_c_core_file_headerfile_capi_oh_file_share_h_capi_oh_file_share_h_md_786_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-file-api-core-file-c-core-file-headerfile-capi-oh-file-share-h-capi-oh-file-share-h-md-786.json
var site_docs_ref_core_file_api_core_file_c_core_file_headerfile_capi_oh_file_share_h_capi_oh_file_share_h_md_786_namespaceObject = JSON.parse('{"id":"core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h","title":"oh_file_share.h","description":"概述","source":"@site/docs-ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h.md","sourceDirName":"core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h","slug":"/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"oh_file_share.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-file-share-h"},"sidebar":"ref","previous":{"title":"oh_fileio.h","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-fileio-h/capi-oh-fileio-h"},"next":{"title":"oh_file_uri.h","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-uri-h/capi-oh-file-uri-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h.md


const frontMatter = {
	title: 'oh_file_share.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-file-share-h'
};
const contentTitle = 'oh_file_share.h';

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
  "value": "FileShare_OperationMode",
  "id": "fileshare_operationmode",
  "level": 3
}, {
  "value": "FileShare_PolicyErrorCode",
  "id": "fileshare_policyerrorcode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_FileShare_PersistPermission()",
  "id": "oh_fileshare_persistpermission",
  "level": 3
}, {
  "value": "OH_FileShare_RevokePermission()",
  "id": "oh_fileshare_revokepermission",
  "level": 3
}, {
  "value": "OH_FileShare_ActivatePermission()",
  "id": "oh_fileshare_activatepermission",
  "level": 3
}, {
  "value": "OH_FileShare_DeactivatePermission()",
  "id": "oh_fileshare_deactivatepermission",
  "level": 3
}, {
  "value": "OH_FileShare_CheckPersistentPermission()",
  "id": "oh_fileshare_checkpersistentpermission",
  "level": 3
}, {
  "value": "OH_FileShare_ReleasePolicyErrorResult()",
  "id": "oh_fileshare_releasepolicyerrorresult",
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
        id: "oh_file_shareh",
        children: "oh_file_share.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供基于URI的文件及目录授予持久化权限、权限激活、权限查询等方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <filemanagement/fileshare/oh_file_share.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohfileshare.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FileManagement.AppFileService.FolderAuthorization"]
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
        href: "/ref/core-file-api/core-file-c/core-file-module/capi-fileshare/capi-fileshare",
        children: "fileShare"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyerrorresult/capi-fileshare-fileshare-policyerrorresult",
              children: "FileShare_PolicyErrorResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授予或使能权限失败的URI策略结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyinfo/capi-fileshare-fileshare-policyinfo",
              children: "FileShare_PolicyInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要授予或使能权限URI的策略信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#fileshare_operationmode",
              children: "FileShare_OperationMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_OperationMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI操作模式枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#fileshare_policyerrorcode",
              children: "FileShare_PolicyErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授予或使能权限策略失败的URI对应的错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_fileshare_persistpermission",
              children: "FileManagement_ErrCode OH_FileShare_PersistPermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对所选择的多个文件或目录URI持久化授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_fileshare_revokepermission",
              children: "FileManagement_ErrCode OH_FileShare_RevokePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对所选择的多个文件或目录URI取消持久化授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_fileshare_activatepermission",
              children: "FileManagement_ErrCode OH_FileShare_ActivatePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能多个已经持久化授权的文件或目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_fileshare_deactivatepermission",
              children: "FileManagement_ErrCode OH_FileShare_DeactivatePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消使能持久化授权过的多个文件或目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_fileshare_checkpersistentpermission",
              children: "FileManagement_ErrCode OH_FileShare_CheckPersistentPermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, bool **result, unsigned int *resultNum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验所选择的多个文件或目录URI的持久化授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_fileshare_releasepolicyerrorresult",
              children: "void OH_FileShare_ReleasePolicyErrorResult(FileShare_PolicyErrorResult *errorResult, unsigned int resultNum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放FileShare_PolicyErrorResult指针指向的内存资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fileshare_operationmode",
      children: "FileShare_OperationMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FileShare_OperationMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URI操作模式枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "READ_MODE = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE_MODE = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入权限。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fileshare_policyerrorcode",
      children: "FileShare_PolicyErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FileShare_PolicyErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "授予或使能权限策略失败的URI对应的错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PERSISTENCE_FORBIDDEN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI禁止被持久化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_MODE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_PATH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERMISSION_NOT_PERSISTED = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限没有被持久化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_fileshare_persistpermission",
      children: "OH_FileShare_PersistPermission()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileManagement_ErrCode OH_FileShare_PersistPermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对所选择的多个文件或目录URI持久化授权。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.FILE_ACCESS_PERSIST"]
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyinfo/capi-fileshare-fileshare-policyinfo",
              children: "const FileShare_PolicyInfo"
            }), " *policies"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向FileShare_PolicyInfo实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int policyNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyInfo实例数组的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyerrorresult/capi-fileshare-fileshare-policyerrorresult",
              children: "FileShare_PolicyErrorResult"
            }), " **result"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组指针。请使用OH_FileShare_ReleasePolicyErrorResult()进行资源释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int *resultNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组大小。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回FileManagement模块错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            }), "。  ERR_INVALID_PARAMETER 401 - 输入参数无效。可能的原因有：  1. 参数policies或参数result或参数resultNum为空指针；  2. 参数policyNum值为0或者超过最大长度(500)；  3. 参数policies中携带的uri为空或者length为0或者uri的长度与length不一致。  ERR_DEVICE_NOT_SUPPORTED 801 - 当前设备类型不支持此接口。  ERR_PERMISSION_ERROR 201 - 接口权限校验失败。  ERR_ENOMEM 13900011 - 分配或者拷贝内存失败。  ERR_EPERM 13900001 - 操作不被允许。  ERR_OK 0 - 接口调用成功。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_fileshare_revokepermission",
      children: "OH_FileShare_RevokePermission()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileManagement_ErrCode OH_FileShare_RevokePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对所选择的多个文件或目录URI取消持久化授权。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.FILE_ACCESS_PERSIST"]
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyinfo/capi-fileshare-fileshare-policyinfo",
              children: "const FileShare_PolicyInfo"
            }), " *policies"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向FileShare_PolicyInfo实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int policyNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyInfo实例数组的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyerrorresult/capi-fileshare-fileshare-policyerrorresult",
              children: "FileShare_PolicyErrorResult"
            }), " **result"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组指针。请使用OH_FileShare_ReleasePolicyErrorResult()进行资源释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int *resultNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组大小。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回FileManagement模块错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            }), "。  ERR_INVALID_PARAMETER 401 - 输入参数无效。可能的原因有：1. 参数policies或参数result或参数resultNum为空指针；  2. 参数policyNum值为0或者超过最大长度(500)；3. 参数policies中携带的uri为空或者length为0或者uri的长度与length不一致。  ERR_DEVICE_NOT_SUPPORTED 801 - 当前设备类型不支持此接口。  ERR_PERMISSION_ERROR 201 - 接口权限校验失败。  ERR_ENOMEM 13900011 - 分配或者拷贝内存失败。  ERR_EPERM 13900001 - 操作不被允许。  ERR_OK 0 - 接口调用成功。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_fileshare_activatepermission",
      children: "OH_FileShare_ActivatePermission()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileManagement_ErrCode OH_FileShare_ActivatePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使能多个已经持久化授权的文件或目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.FILE_ACCESS_PERSIST"]
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyinfo/capi-fileshare-fileshare-policyinfo",
              children: "const FileShare_PolicyInfo"
            }), " *policies"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向FileShare_PolicyInfo实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int policyNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyInfo实例数组的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyerrorresult/capi-fileshare-fileshare-policyerrorresult",
              children: "FileShare_PolicyErrorResult"
            }), " **result"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组指针。请使用OH_FileShare_ReleasePolicyErrorResult()进行资源释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int *resultNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组大小。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回FileManagement模块错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            }), "。  ERR_INVALID_PARAMETER 401 - 输入参数无效。可能的原因有：  1. 参数policies或参数result或参数resultNum为空指针；  2. 参数policyNum值为0或者超过最大长度(500)；  3. 参数policies中携带的uri为空或者length为0或者uri的长度与length不一致。  ERR_DEVICE_NOT_SUPPORTED 801 - 当前设备类型不支持此接口。  ERR_PERMISSION_ERROR 201 - 接口权限校验失败。  ERR_ENOMEM 13900011 - 分配或者拷贝内存失败。  ERR_EPERM 13900001 - 操作不被允许。  ERR_OK 0 - 接口调用成功。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_fileshare_deactivatepermission",
      children: "OH_FileShare_DeactivatePermission()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileManagement_ErrCode OH_FileShare_DeactivatePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消使能持久化授权过的多个文件或目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.FILE_ACCESS_PERSIST"]
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyinfo/capi-fileshare-fileshare-policyinfo",
              children: "const FileShare_PolicyInfo"
            }), " *policies"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向FileShare_PolicyInfo实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int policyNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyInfo实例数组的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyerrorresult/capi-fileshare-fileshare-policyerrorresult",
              children: "FileShare_PolicyErrorResult"
            }), " **result"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组指针。请使用OH_FileShare_ReleasePolicyErrorResult()进行资源释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int *resultNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult数组大小。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回FileManagement模块错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            }), "。  ERR_INVALID_PARAMETER 401 - 输入参数无效。可能的原因有：  1. 参数policies或参数result或参数resultNum为空指针；  2. 参数policyNum值为0或者超过最大长度(500)；  3. 参数policies中携带的uri为空或者length为0或者uri的长度与length不一致。  ERR_DEVICE_NOT_SUPPORTED 801 - 当前设备类型不支持此接口。  ERR_PERMISSION_ERROR 201 - 接口权限校验失败。  ERR_ENOMEM 13900011 - 分配或者拷贝内存失败。  ERR_EPERM 13900001 - 操作不被允许。  ERR_OK 0 - 接口调用成功。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_fileshare_checkpersistentpermission",
      children: "OH_FileShare_CheckPersistentPermission()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileManagement_ErrCode OH_FileShare_CheckPersistentPermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, bool **result, unsigned int *resultNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验所选择的多个文件或目录URI的持久化授权。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.FILE_ACCESS_PERSIST"]
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyinfo/capi-fileshare-fileshare-policyinfo",
              children: "const FileShare_PolicyInfo"
            }), " *policies"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向FileShare_PolicyInfo实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int policyNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyInfo实例数组的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool **result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权校验结果指针。true表示有持久化授权；false表示不具有持久化授权。请引用头文件malloc.h并使用free()进行资源释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int *resultNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验结果数组的大小。"
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
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回FileManagement模块错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-error-code-h/capi-error-code-h#filemanagement_errcode",
              children: "FileManagement_ErrCode"
            }), "。  ERR_INVALID_PARAMETER 401 - 输入参数无效。可能的原因有：  1. 参数policies或参数result或参数resultNum为空指针；  2. 参数policyNum值为0或者超过最大长度(500)；  3. 参数policies中携带的uri为空或者length为0或者uri的长度与length不一致。  ERR_DEVICE_NOT_SUPPORTED 801 - 当前设备类型不支持此接口。  ERR_PERMISSION_ERROR 201 - 接口权限校验失败。  ERR_ENOMEM 13900011 - 分配或者拷贝内存失败。  ERR_EPERM 13900001 - 操作不被允许。可能的原因为policies中携带的所有uri都不符合规范或者uri转换出来的路径不存在。  ERR_OK 0 - 接口调用成功。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_fileshare_releasepolicyerrorresult",
      children: "OH_FileShare_ReleasePolicyErrorResult()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_FileShare_ReleasePolicyErrorResult(FileShare_PolicyErrorResult *errorResult, unsigned int resultNum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放FileShare_PolicyErrorResult指针指向的内存资源。"
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
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyerrorresult/capi-fileshare-fileshare-policyerrorresult",
              children: "FileShare_PolicyErrorResult"
            }), " *errorResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向FileShare_PolicyErrorResult实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int resultNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FileShare_PolicyErrorResult实例数组的大小。"
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