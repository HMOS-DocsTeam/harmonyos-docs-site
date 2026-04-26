"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["722196"], {
202880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_localization_api_localization_c_localization_headerfile_capi_raw_file_manager_h_capi_raw_file_manager_h_md_e7c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-localization-api-localization-c-localization-headerfile-capi-raw-file-manager-h-capi-raw-file-manager-h-md-e7c.json
var site_docs_ref_localization_api_localization_c_localization_headerfile_capi_raw_file_manager_h_capi_raw_file_manager_h_md_e7c_namespaceObject = JSON.parse('{"id":"localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h","title":"raw_file_manager.h","description":"概述","source":"@site/docs-ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h.md","sourceDirName":"localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h","slug":"/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"raw_file_manager.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-raw-file-manager-h"},"sidebar":"ref","previous":{"title":"raw_file.h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h"},"next":{"title":"resmgr_common.h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h.md


const frontMatter = {
	title: 'raw_file_manager.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-raw-file-manager-h'
};
const contentTitle = 'raw_file_manager.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ResourceManager_InitNativeResourceManager()",
  "id": "oh_resourcemanager_initnativeresourcemanager",
  "level": 3
}, {
  "value": "OH_ResourceManager_ReleaseNativeResourceManager()",
  "id": "oh_resourcemanager_releasenativeresourcemanager",
  "level": 3
}, {
  "value": "OH_ResourceManager_OpenRawDir()",
  "id": "oh_resourcemanager_openrawdir",
  "level": 3
}, {
  "value": "OH_ResourceManager_OpenRawFile()",
  "id": "oh_resourcemanager_openrawfile",
  "level": 3
}, {
  "value": "OH_ResourceManager_OpenRawFile64()",
  "id": "oh_resourcemanager_openrawfile64",
  "level": 3
}, {
  "value": "OH_ResourceManager_IsRawDir()",
  "id": "oh_resourcemanager_israwdir",
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
        id: "raw_file_managerh",
        children: "raw_file_manager.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供资源管理rawfile相关功能，可以使用ResourceManager打开rawfile进行后续相关操作，像搜索和读取等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <rawfile/raw_file_manager.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " librawfile.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Global.ResourceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-module/capi-rawfile/capi-rawfile",
        children: "rawfile"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeResourceManager"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["代表native侧的ResourceManager。此类封装了JavaScript resource manager的native实现，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ResourceManager"
              })
            }), "指针可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        })
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
              href: "#oh_resourcemanager_initnativeresourcemanager",
              children: "NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于JavaScript侧的ResourceManager获取native侧的ResourceManager，用来完成rawfile相关功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_releasenativeresourcemanager",
              children: "void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放native侧ResourceManager。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_openrawdir",
              children: "RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开rawfile目录，打开后可以遍历对应目录下的rawfile文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_openrawfile",
              children: "RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开rawfile文件，打开后可以读取它的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_openrawfile64",
              children: "RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开较大的rawfile文件，打开后可以读取它的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_israwdir",
              children: "bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断路径是否是rawfile下的目录。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_initnativeresourcemanager",
      children: "OH_ResourceManager_InitNativeResourceManager()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于JavaScript侧的ResourceManager获取native侧的ResourceManager，用来完成rawfile相关功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JavaScript Native Interface（napi）环境指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value jsResMgr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示JavaScript resource manager。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "指针，如果失败返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_releasenativeresourcemanager",
      children: "OH_ResourceManager_ReleaseNativeResourceManager()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放native侧ResourceManager。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), " *resMgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_openrawdir",
      children: "OH_ResourceManager_OpenRawDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开rawfile目录，打开后可以遍历对应目录下的rawfile文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针是通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *dirName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要打开的rawfile目录名称，当传递一个空字符串时表示打开rawfile根目录。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), "指针。使用完此指针后，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h#oh_resourcemanager_closerawdir",
              children: "OH_ResourceManager_CloseRawDir"
            }), "释放。如果失败或者mgr为空时返回空指针。"]
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
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
        children: "OH_ResourceManager_InitNativeResourceManager"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h#oh_resourcemanager_closerawdir",
        children: "OH_ResourceManager_CloseRawDir"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_openrawfile",
      children: "OH_ResourceManager_OpenRawFile()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开rawfile文件，打开后可以读取它的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *fileName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示基于rawfile根目录的相对路径下的文件名称。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile/capi-rawfile-rawfile",
              children: "RawFile *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile/capi-rawfile-rawfile",
              children: "RawFile"
            }), "指针。当使用完此指针，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile",
              children: "OH_ResourceManager_CloseRawFile"
            }), "释放。如果失败或者mgr和fileName为空时返回空指针。"]
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
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
        children: "OH_ResourceManager_InitNativeResourceManager"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile",
        children: "OH_ResourceManager_CloseRawFile"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_openrawfile64",
      children: "OH_ResourceManager_OpenRawFile64()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开较大的rawfile文件，打开后可以读取它的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *fileName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示基于rawfile根目录的相对路径下的文件名称。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile64/capi-rawfile-rawfile64",
              children: "RawFile64 *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfile64/capi-rawfile-rawfile64",
              children: "RawFile64"
            }), "指针。当使用完此指针，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile64",
              children: "OH_ResourceManager_CloseRawFile64"
            }), "释放。如果失败或者mgr和fileName为空时返回空指针。"]
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
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
        children: "OH_ResourceManager_InitNativeResourceManager"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h#oh_resourcemanager_closerawfile64",
        children: "OH_ResourceManager_CloseRawFile64"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_israwdir",
      children: "OH_ResourceManager_IsRawDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断路径是否是rawfile下的目录。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rawfile路径。"
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
            children: "返回true表示是rawfile下的目录，返回false表示不是rawfile下的目录。"
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