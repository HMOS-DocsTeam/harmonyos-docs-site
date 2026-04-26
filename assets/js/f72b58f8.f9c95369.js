"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["12956"], {
748315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_text_avoid_info_capi_h_capi_inputmethod_text_avoid_info_capi_h_md_f72_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ime-api-ime-c-ime-headerfile-capi-inputmethod-text-avoid-info-capi-h-capi-inputmethod-text-avoid-info-capi-h-md-f72.json
var site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_text_avoid_info_capi_h_capi_inputmethod_text_avoid_info_capi_h_md_f72_namespaceObject = JSON.parse('{"id":"ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h/capi-inputmethod-text-avoid-info-capi-h","title":"inputmethod_text_avoid_info_capi.h","description":"概述","source":"@site/docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h/capi-inputmethod-text-avoid-info-capi-h.md","sourceDirName":"ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h","slug":"/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h/capi-inputmethod-text-avoid-info-capi-h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h/capi-inputmethod-text-avoid-info-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"inputmethod_text_avoid_info_capi.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-inputmethod-text-avoid-info-capi-h"},"sidebar":"ref","previous":{"title":"inputmethod_private_command_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h"},"next":{"title":"inputmethod_text_config_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-config-capi-h/capi-inputmethod-text-config-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h/capi-inputmethod-text-avoid-info-capi-h.md


const frontMatter = {
	title: 'inputmethod_text_avoid_info_capi.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-inputmethod-text-avoid-info-capi-h'
};
const contentTitle = 'inputmethod_text_avoid_info_capi.h';

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
  "value": "OH_TextAvoidInfo_Create()",
  "id": "oh_textavoidinfo_create",
  "level": 3
}, {
  "value": "OH_TextAvoidInfo_Destroy()",
  "id": "oh_textavoidinfo_destroy",
  "level": 3
}, {
  "value": "OH_TextAvoidInfo_SetPositionY()",
  "id": "oh_textavoidinfo_setpositiony",
  "level": 3
}, {
  "value": "OH_TextAvoidInfo_SetHeight()",
  "id": "oh_textavoidinfo_setheight",
  "level": 3
}, {
  "value": "OH_TextAvoidInfo_GetPositionY()",
  "id": "oh_textavoidinfo_getpositiony",
  "level": 3
}, {
  "value": "OH_TextAvoidInfo_GetHeight()",
  "id": "oh_textavoidinfo_getheight",
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
        id: "inputmethod_text_avoid_info_capih",
        children: "inputmethod_text_avoid_info_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供输入框避让信息对象的创建、销毁与读写方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <inputmethod/inputmethod_text_avoid_info_capi.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohinputmethod.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MiscServices.InputMethodFramework"]
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
        href: "/ref/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod",
        children: "InputMethod"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_TextAvoidInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框避让信息。输入框用于避让键盘的信息。"
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
              href: "#oh_textavoidinfo_create",
              children: "InputMethod_TextAvoidInfo *OH_TextAvoidInfo_Create(double positionY, double height)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_textavoidinfo_destroy",
              children: "void OH_TextAvoidInfo_Destroy(InputMethod_TextAvoidInfo *info)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_textavoidinfo_setpositiony",
              children: "InputMethod_ErrorCode OH_TextAvoidInfo_SetPositionY(InputMethod_TextAvoidInfo *info, double positionY)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "中的Y坐标值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_textavoidinfo_setheight",
              children: "InputMethod_ErrorCode OH_TextAvoidInfo_SetHeight(InputMethod_TextAvoidInfo *info, double height)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "中的高度值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_textavoidinfo_getpositiony",
              children: "InputMethod_ErrorCode OH_TextAvoidInfo_GetPositionY(InputMethod_TextAvoidInfo *info, double *positionY)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "获取Y坐标值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_textavoidinfo_getheight",
              children: "InputMethod_ErrorCode OH_TextAvoidInfo_GetHeight(InputMethod_TextAvoidInfo *info, double *height)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "获取高度值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_textavoidinfo_create",
      children: "OH_TextAvoidInfo_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_TextAvoidInfo *OH_TextAvoidInfo_Create(double positionY, double height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
        children: "InputMethod_TextAvoidInfo"
      }), "实例。"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double positionY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入框位置的Y坐标值，单位px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入框高度，单位px。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), " *"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果创建成功，返回一个指向新创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例的指针。  如果创建失败，对象返回NULL，可能的失败原因有应用地址空间满。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_textavoidinfo_destroy",
      children: "OH_TextAvoidInfo_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_TextAvoidInfo_Destroy(InputMethod_TextAvoidInfo *info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
        children: "InputMethod_TextAvoidInfo"
      }), "实例。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向即将被销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_textavoidinfo_setpositiony",
      children: "OH_TextAvoidInfo_SetPositionY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextAvoidInfo_SetPositionY(InputMethod_TextAvoidInfo *info, double positionY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
        children: "InputMethod_TextAvoidInfo"
      }), "中的Y坐标值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double positionY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y坐标值，即输入框顶点与物理屏幕上侧距离的绝对值，单位px。"
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
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_textavoidinfo_setheight",
      children: "OH_TextAvoidInfo_SetHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextAvoidInfo_SetHeight(InputMethod_TextAvoidInfo *info, double height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
        children: "InputMethod_TextAvoidInfo"
      }), "中的高度值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度值，单位px。"
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
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_textavoidinfo_getpositiony",
      children: "OH_TextAvoidInfo_GetPositionY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextAvoidInfo_GetPositionY(InputMethod_TextAvoidInfo *info, double *positionY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
        children: "InputMethod_TextAvoidInfo"
      }), "获取Y坐标值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被获取值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *positionY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y坐标值，即输入框顶点与物理屏幕上侧距离的绝对值，单位px。"
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
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_textavoidinfo_getheight",
      children: "OH_TextAvoidInfo_GetHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextAvoidInfo_GetHeight(InputMethod_TextAvoidInfo *info, double *height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
        children: "InputMethod_TextAvoidInfo"
      }), "获取高度值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被获取值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textavoidinfo/capi-inputmethod-inputmethod-textavoidinfo",
              children: "InputMethod_TextAvoidInfo"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框高度，单位px。"
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
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
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