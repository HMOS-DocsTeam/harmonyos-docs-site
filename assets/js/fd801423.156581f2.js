"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["358200"], {
386998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_private_command_capi_h_capi_inputmethod_private_command_capi_h_md_fd8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ime-api-ime-c-ime-headerfile-capi-inputmethod-private-command-capi-h-capi-inputmethod-private-command-capi-h-md-fd8.json
var site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_private_command_capi_h_capi_inputmethod_private_command_capi_h_md_fd8_namespaceObject = JSON.parse('{"id":"ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h","title":"inputmethod_private_command_capi.h","description":"概述","source":"@site/docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h.md","sourceDirName":"ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h","slug":"/ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"inputmethod_private_command_capi.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-inputmethod-private-command-capi-h"},"sidebar":"ref","previous":{"title":"inputmethod_inputmethod_proxy_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h/capi-inputmethod-inputmethod-proxy-capi-h"},"next":{"title":"inputmethod_text_avoid_info_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-avoid-info-capi-h/capi-inputmethod-text-avoid-info-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h.md


const frontMatter = {
	title: 'inputmethod_private_command_capi.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-inputmethod-private-command-capi-h'
};
const contentTitle = 'inputmethod_private_command_capi.h';

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
  "value": "OH_PrivateCommand_Create()",
  "id": "oh_privatecommand_create",
  "level": 3
}, {
  "value": "OH_PrivateCommand_Destroy()",
  "id": "oh_privatecommand_destroy",
  "level": 3
}, {
  "value": "OH_PrivateCommand_SetKey()",
  "id": "oh_privatecommand_setkey",
  "level": 3
}, {
  "value": "OH_PrivateCommand_SetBoolValue()",
  "id": "oh_privatecommand_setboolvalue",
  "level": 3
}, {
  "value": "OH_PrivateCommand_SetIntValue()",
  "id": "oh_privatecommand_setintvalue",
  "level": 3
}, {
  "value": "OH_PrivateCommand_SetStrValue()",
  "id": "oh_privatecommand_setstrvalue",
  "level": 3
}, {
  "value": "OH_PrivateCommand_GetKey()",
  "id": "oh_privatecommand_getkey",
  "level": 3
}, {
  "value": "OH_PrivateCommand_GetValueType()",
  "id": "oh_privatecommand_getvaluetype",
  "level": 3
}, {
  "value": "OH_PrivateCommand_GetBoolValue()",
  "id": "oh_privatecommand_getboolvalue",
  "level": 3
}, {
  "value": "OH_PrivateCommand_GetIntValue()",
  "id": "oh_privatecommand_getintvalue",
  "level": 3
}, {
  "value": "OH_PrivateCommand_GetStrValue()",
  "id": "oh_privatecommand_getstrvalue",
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
        id: "inputmethod_private_command_capih",
        children: "inputmethod_private_command_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供私有数据对象的创建、销毁与读写方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <inputmethod/inputmethod_private_command_capi.h>"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_PrivateCommand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示私有数据的结构体类型。输入框和输入法应用之间交互的私有数据。"
          })]
        })
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
              href: "#oh_privatecommand_create",
              children: "InputMethod_PrivateCommand *OH_PrivateCommand_Create(char key[], size_t keyLength)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_destroy",
              children: "void OH_PrivateCommand_Destroy(InputMethod_PrivateCommand *command)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_setkey",
              children: "InputMethod_ErrorCode OH_PrivateCommand_SetKey(InputMethod_PrivateCommand *command, char key[], size_t keyLength)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "的key值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_setboolvalue",
              children: "InputMethod_ErrorCode OH_PrivateCommand_SetBoolValue(InputMethod_PrivateCommand *command, bool value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "的布尔类型value值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_setintvalue",
              children: "InputMethod_ErrorCode OH_PrivateCommand_SetIntValue(InputMethod_PrivateCommand *command, int32_t value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "的整数类型value值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_setstrvalue",
              children: "InputMethod_ErrorCode OH_PrivateCommand_SetStrValue(InputMethod_PrivateCommand *command, char value[], size_t valueLength)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "的字符串类型value值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_getkey",
              children: "InputMethod_ErrorCode OH_PrivateCommand_GetKey(InputMethod_PrivateCommand *command, const char **key, size_t *keyLength)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "获取key值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_getvaluetype",
              children: "InputMethod_ErrorCode OH_PrivateCommand_GetValueType(InputMethod_PrivateCommand *command, InputMethod_CommandValueType *type)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "获取value的数据类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_getboolvalue",
              children: "InputMethod_ErrorCode OH_PrivateCommand_GetBoolValue(InputMethod_PrivateCommand *command, bool *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "获取布尔类型的value的值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_getintvalue",
              children: "InputMethod_ErrorCode OH_PrivateCommand_GetIntValue(InputMethod_PrivateCommand *command, int32_t *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "获取整数类型的value的值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_privatecommand_getstrvalue",
              children: "InputMethod_ErrorCode OH_PrivateCommand_GetStrValue(InputMethod_PrivateCommand *command, const char **value, size_t *valueLength)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "获取字符串类型的value的值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_privatecommand_create",
      children: "OH_PrivateCommand_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_PrivateCommand *OH_PrivateCommand_Create(char key[], size_t keyLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
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
            children: "char key[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私有数据的key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t keyLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key长度，单次所有私有数据与key值的大小限制32KB。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果创建成功，返回一个指向新创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。  如果创建失败，对象返回NULL，可能的失败原因有应用地址空间满。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_privatecommand_destroy",
      children: "OH_PrivateCommand_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_PrivateCommand_Destroy(InputMethod_PrivateCommand *command)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_privatecommand_setkey",
      children: "OH_PrivateCommand_SetKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_SetKey(InputMethod_PrivateCommand *command, char key[], size_t keyLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "的key值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char key[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t keyLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key长度。"
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
      id: "oh_privatecommand_setboolvalue",
      children: "OH_PrivateCommand_SetBoolValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_SetBoolValue(InputMethod_PrivateCommand *command, bool value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "的布尔类型value值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型value值。"
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
      id: "oh_privatecommand_setintvalue",
      children: "OH_PrivateCommand_SetIntValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_SetIntValue(InputMethod_PrivateCommand *command, int32_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "的整数类型value值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数类型的value的值。"
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
      id: "oh_privatecommand_setstrvalue",
      children: "OH_PrivateCommand_SetStrValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_SetStrValue(InputMethod_PrivateCommand *command, char value[], size_t valueLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "的字符串类型value值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char value[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t valueLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示字符串数据值的长度。"
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
      id: "oh_privatecommand_getkey",
      children: "OH_PrivateCommand_GetKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_GetKey(InputMethod_PrivateCommand *command, const char **key, size_t *keyLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "获取key值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被获取key值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char **key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key的生命周期和command一致。不要直接保存key地址，或者直接写key。建议拷贝后使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *keyLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key长度。"
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
      id: "oh_privatecommand_getvaluetype",
      children: "OH_PrivateCommand_GetValueType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_GetValueType(InputMethod_PrivateCommand *command, InputMethod_CommandValueType *type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "获取value的数据类型。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被获取value值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_commandvaluetype",
              children: "InputMethod_CommandValueType"
            }), " *type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_commandvaluetype",
              children: "InputMethod_CommandValueType"
            }), " 实例的指针。 用于value值的数据类型。"]
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
      id: "oh_privatecommand_getboolvalue",
      children: "OH_PrivateCommand_GetBoolValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_GetBoolValue(InputMethod_PrivateCommand *command, bool *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "获取布尔类型的value的值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被获取value值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型的value的值。"
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
            }), " - 非预期的空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_QUERY_FAILED"
            }), " - 查询失败，命令中没有布尔值。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_privatecommand_getintvalue",
      children: "OH_PrivateCommand_GetIntValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_GetIntValue(InputMethod_PrivateCommand *command, int32_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "获取整数类型的value的值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被获取value值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数类型的value的值。"
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
            }), " - 非预期的空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_QUERY_FAILED"
            }), " - 查询失败，命令中没有整数值。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_privatecommand_getstrvalue",
      children: "OH_PrivateCommand_GetStrValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_PrivateCommand_GetStrValue(InputMethod_PrivateCommand *command, const char **value, size_t *valueLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
        children: "InputMethod_PrivateCommand"
      }), "获取字符串类型的value的值。"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *command"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被获取value值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char **value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型的value的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *valueLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value的生命周期和command一致。不要直接保存value地址，或者直接写value。建议拷贝后使用。"
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
            }), " - 非预期的空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_QUERY_FAILED"
            }), " - 查询失败，命令中没有字符串值。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
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