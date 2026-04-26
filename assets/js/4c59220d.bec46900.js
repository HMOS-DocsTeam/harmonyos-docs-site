"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["801003"], {
528723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_localization_api_localization_c_localization_headerfile_capi_raw_dir_h_capi_raw_dir_h_md_4c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-localization-api-localization-c-localization-headerfile-capi-raw-dir-h-capi-raw-dir-h-md-4c5.json
var site_docs_ref_localization_api_localization_c_localization_headerfile_capi_raw_dir_h_capi_raw_dir_h_md_4c5_namespaceObject = JSON.parse('{"id":"localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h","title":"raw_dir.h","description":"概述","source":"@site/docs-ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h.md","sourceDirName":"localization-api/localization-c/localization-headerfile/capi-raw-dir-h","slug":"/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"raw_dir.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-raw-dir-h"},"sidebar":"ref","previous":{"title":"ohresmgr.h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h"},"next":{"title":"raw_file.h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-h/capi-raw-file-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h.md


const frontMatter = {
	title: 'raw_dir.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-raw-dir-h'
};
const contentTitle = 'raw_dir.h';

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
  "value": "OH_ResourceManager_GetRawFileName()",
  "id": "oh_resourcemanager_getrawfilename",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetRawFileCount()",
  "id": "oh_resourcemanager_getrawfilecount",
  "level": 3
}, {
  "value": "OH_ResourceManager_CloseRawDir()",
  "id": "oh_resourcemanager_closerawdir",
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
        id: "raw_dirh",
        children: "raw_dir.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供rawfile目录相关功能，包括遍历和关闭rawfile目录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <rawfile/raw_dir.h>"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RawDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供对rawfile目录的访问。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getrawfilename",
              children: "const char *OH_ResourceManager_GetRawFileName(RawDir *rawDir, int index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过索引获取rawfile文件名称。可以使用此方法遍历rawfile目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getrawfilecount",
              children: "int OH_ResourceManager_GetRawFileCount(RawDir *rawDir)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), "中的rawfile数量。通过此方法可以获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h#oh_resourcemanager_getrawfilename",
              children: "OH_ResourceManager_GetRawFileName"
            }), "中可用的索引。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_closerawdir",
              children: "void OH_ResourceManager_CloseRawDir(RawDir *rawDir)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关闭已打开的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), "并释放所有相关联资源。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getrawfilename",
      children: "OH_ResourceManager_GetRawFileName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *OH_ResourceManager_GetRawFileName(RawDir *rawDir, int index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过索引获取rawfile文件名称。可以使用此方法遍历rawfile目录。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), " *rawDir"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示文件在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), "中的索引位置。"]
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
            children: "const char *"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过索引返回文件名称，此返回值可以作为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_openrawfile",
              children: "OH_ResourceManager_OpenRawFile"
            }), "的输入参数。  如果遍历完所有文件仍未找到，则返回NULL。"]
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
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_openrawfile",
        children: "OH_ResourceManager_OpenRawFile"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getrawfilecount",
      children: "OH_ResourceManager_GetRawFileCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_ResourceManager_GetRawFileCount(RawDir *rawDir)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
        children: "RawDir"
      }), "中的rawfile数量。通过此方法可以获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h#oh_resourcemanager_getrawfilename",
        children: "OH_ResourceManager_GetRawFileName"
      }), "中可用的索引。"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), " *rawDir"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), "的指针。"]
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
            children: "返回rawDir下的文件个数。如果rawDir为空时返回0。"
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
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h#oh_resourcemanager_getrawfilename",
        children: "OH_ResourceManager_GetRawFileName"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_closerawdir",
      children: "OH_ResourceManager_CloseRawDir()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ResourceManager_CloseRawDir(RawDir *rawDir)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关闭已打开的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
        children: "RawDir"
      }), "并释放所有相关联资源。"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), " *rawDir"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawdir/capi-rawfile-rawdir",
              children: "RawDir"
            }), "的指针。"]
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
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_openrawdir",
        children: "OH_ResourceManager_OpenRawDir"
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