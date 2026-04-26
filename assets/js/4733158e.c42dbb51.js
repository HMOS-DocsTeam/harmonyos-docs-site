"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["937274"], {
452940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_preferences_value_h_capi_oh_preferences_value_h_md_473_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-oh-preferences-value-h-capi-oh-preferences-value-h-md-473.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_preferences_value_h_capi_oh_preferences_value_h_md_473_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-value-h/capi-oh-preferences-value-h","title":"oh_preferences_value.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-value-h/capi-oh-preferences-value-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-value-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-value-h/capi-oh-preferences-value-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-value-h/capi-oh-preferences-value-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"oh_preferences_value.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-preferences-value-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-preferences-value-h"},"sidebar":"ref","previous":{"title":"oh_preferences_option.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-option-h/capi-oh-preferences-option-h"},"next":{"title":"data_asset.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-data-asset-h/capi-data-asset-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-value-h/capi-oh-preferences-value-h.md


const frontMatter = {
	title: 'oh_preferences_value.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-preferences-value-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-preferences-value-h'
};
const contentTitle = 'oh_preferences_value.h';

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
  "value": "Preference_ValueType",
  "id": "preference_valuetype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_PreferencesPair_GetKey()",
  "id": "oh_preferencespair_getkey",
  "level": 3
}, {
  "value": "OH_PreferencesPair_GetPreferencesValue()",
  "id": "oh_preferencespair_getpreferencesvalue",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetValueType()",
  "id": "oh_preferencesvalue_getvaluetype",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetInt()",
  "id": "oh_preferencesvalue_getint",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetBool()",
  "id": "oh_preferencesvalue_getbool",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetString()",
  "id": "oh_preferencesvalue_getstring",
  "level": 3
}, {
  "value": "OH_PreferencesPair_Destroy()",
  "id": "oh_preferencespair_destroy",
  "level": 3
}, {
  "value": "OH_PreferencesValue_Create()",
  "id": "oh_preferencesvalue_create",
  "level": 3
}, {
  "value": "OH_PreferencesValue_Destroy()",
  "id": "oh_preferencesvalue_destroy",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetInt()",
  "id": "oh_preferencesvalue_setint",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetBool()",
  "id": "oh_preferencesvalue_setbool",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetString()",
  "id": "oh_preferencesvalue_setstring",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetInt64()",
  "id": "oh_preferencesvalue_setint64",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetInt64()",
  "id": "oh_preferencesvalue_getint64",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetDouble()",
  "id": "oh_preferencesvalue_setdouble",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetDouble()",
  "id": "oh_preferencesvalue_getdouble",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetIntArray()",
  "id": "oh_preferencesvalue_setintarray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetIntArray()",
  "id": "oh_preferencesvalue_getintarray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetBoolArray()",
  "id": "oh_preferencesvalue_setboolarray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetBoolArray()",
  "id": "oh_preferencesvalue_getboolarray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetStringArray()",
  "id": "oh_preferencesvalue_setstringarray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetStringArray()",
  "id": "oh_preferencesvalue_getstringarray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetInt64Array()",
  "id": "oh_preferencesvalue_setint64array",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetInt64Array()",
  "id": "oh_preferencesvalue_getint64array",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetDoubleArray()",
  "id": "oh_preferencesvalue_setdoublearray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetDoubleArray()",
  "id": "oh_preferencesvalue_getdoublearray",
  "level": 3
}, {
  "value": "OH_PreferencesValue_SetBlob()",
  "id": "oh_preferencesvalue_setblob",
  "level": 3
}, {
  "value": "OH_PreferencesValue_GetBlob()",
  "id": "oh_preferencesvalue_getblob",
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
        id: "oh_preferences_valueh",
        children: "oh_preferences_value.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供访问Preferences值（PreferencesValue）对象的接口、枚举类型与数据结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/preferences/oh_preferences_value.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohpreferences.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.Preferences.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-preferences/capi-preferences",
        children: "Preferences"
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PreferencesPair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Preferences使用的KV数据对象类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PreferencesValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义PreferencesValue对象类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#preference_valuetype",
              children: "Preference_ValueType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preference_ValueType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义PreferencesValue的数据类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_preferencespair_getkey",
              children: "const char *OH_PreferencesPair_GetKey(const OH_PreferencesPair *pairs, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取KV数据中索引对应数据的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencespair_getpreferencesvalue",
              children: "const OH_PreferencesValue *OH_PreferencesPair_GetPreferencesValue(const OH_PreferencesPair *pairs, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取KV数据数组中索引对应的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getvaluetype",
              children: "Preference_ValueType OH_PreferencesValue_GetValueType(const OH_PreferencesValue *object)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PreferencesValue对象的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getint",
              children: "int OH_PreferencesValue_GetInt(const OH_PreferencesValue *object, int *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从PreferencesValue对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "中获取一个整型值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getbool",
              children: "int OH_PreferencesValue_GetBool(const OH_PreferencesValue *object, bool *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从PreferencesValue对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "中获取一个布尔值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getstring",
              children: "int OH_PreferencesValue_GetString(const OH_PreferencesValue *object, char **value, uint32_t *valueLen)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从PreferencesValue对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "中获取字符串。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencespair_destroy",
              children: "void OH_PreferencesPair_Destroy(OH_PreferencesPair *pairs, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_create",
              children: "OH_PreferencesValue* OH_PreferencesValue_Create(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_destroy",
              children: "void OH_PreferencesValue_Destroy(OH_PreferencesValue *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setint",
              children: "int OH_PreferencesValue_SetInt(const OH_PreferencesValue *object, int value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置整型值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setbool",
              children: "int OH_PreferencesValue_SetBool(const OH_PreferencesValue *object, bool value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置布尔值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setstring",
              children: "int OH_PreferencesValue_SetString(const OH_PreferencesValue *object, const char *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置字符串值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setint64",
              children: "int OH_PreferencesValue_SetInt64(const OH_PreferencesValue *object, int64_t value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置int64值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getint64",
              children: "int OH_PreferencesValue_GetInt64(const OH_PreferencesValue *object, int64_t *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的int64值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setdouble",
              children: "int OH_PreferencesValue_SetDouble(const OH_PreferencesValue *object, double value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置double值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getdouble",
              children: "int OH_PreferencesValue_GetDouble(const OH_PreferencesValue *object, double *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的double值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setintarray",
              children: "int OH_PreferencesValue_SetIntArray(const OH_PreferencesValue *object, const int *value, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置整型数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getintarray",
              children: "int OH_PreferencesValue_GetIntArray(const OH_PreferencesValue *object, int **value, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的整型数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setboolarray",
              children: "int OH_PreferencesValue_SetBoolArray(const OH_PreferencesValue *object, const bool *value, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置布尔数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getboolarray",
              children: "int OH_PreferencesValue_GetBoolArray(const OH_PreferencesValue *object, bool **value, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的布尔数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setstringarray",
              children: "int OH_PreferencesValue_SetStringArray(const OH_PreferencesValue *object, const char **value, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置字符串数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getstringarray",
              children: "int OH_PreferencesValue_GetStringArray(const OH_PreferencesValue *object, char ***value, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的字符串数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setint64array",
              children: "int OH_PreferencesValue_SetInt64Array(const OH_PreferencesValue *object, const int64_t *value, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置int64数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getint64array",
              children: "int OH_PreferencesValue_GetInt64Array(const OH_PreferencesValue *object, int64_t **value, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的int64数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setdoublearray",
              children: "int OH_PreferencesValue_SetDoubleArray(const OH_PreferencesValue *object, const double *value, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置double数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getdoublearray",
              children: "int OH_PreferencesValue_GetDoubleArray(const OH_PreferencesValue *object, double **value, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的double数组值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_setblob",
              children: "int OH_PreferencesValue_SetBlob(const OH_PreferencesValue *object, const uint8_t *value, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例设置二进制值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_preferencesvalue_getblob",
              children: "int OH_PreferencesValue_GetBlob(const OH_PreferencesValue *object, uint8_t **value, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的二进制值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preference_valuetype",
      children: "Preference_ValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Preference_ValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义PreferencesValue的数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PREFERENCE_TYPE_NULL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整型类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_INT64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["64位整型类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_DOUBLE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["浮点型类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_INT_ARRAY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["整型数组。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_BOOL_ARRAY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["布尔数组。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_STRING_ARRAY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字符串数组。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_INT64_ARRAY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["64位整型数组。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_DOUBLE_ARRAY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["浮点型数组。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_BLOB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二进制数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFERENCE_TYPE_BUTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencespair_getkey",
      children: "OH_PreferencesPair_GetKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *OH_PreferencesPair_GetKey(const OH_PreferencesPair *pairs, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取KV数据中索引对应数据的键。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), " *pairs"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目标KV数据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目标KV数据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), "的索引值。"]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回获取到的键的指针。操作失败或传参不合法返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencespair_getpreferencesvalue",
      children: "OH_PreferencesPair_GetPreferencesValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const OH_PreferencesValue *OH_PreferencesPair_GetPreferencesValue(const OH_PreferencesPair *pairs, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取KV数据数组中索引对应的值。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), " *pairs"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目标KV数据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目标KV数据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), "的索引值。"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回获取到的值对象的指针。操作失败或传参不合法返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getvaluetype",
      children: "OH_PreferencesValue_GetValueType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Preference_ValueType OH_PreferencesValue_GetValueType(const OH_PreferencesValue *object)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PreferencesValue对象的数据类型。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#preference_valuetype",
              children: "Preference_ValueType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回获取到的数据类型枚举。若返回数据类型枚举为PREFERENCE_TYPE_NULL，代表传参不合法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getint",
      children: "OH_PreferencesValue_GetInt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetInt(const OH_PreferencesValue *object, int *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从PreferencesValue对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "中获取一个整型值。"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数作为出参使用，表示指向获取到的整型值的指针。"
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
            children: "返回执行的错误码。  若错误码为PREFERENCES_OK，表示操作成功。  若错误码为PREFERENCES_ERROR_INVALID_PARAM，表示参数不合法。  若错误码为PREFERENCES_ERROR_STORAGE，表示存储异常。  若错误码为PREFERENCES_ERROR_MALLOC，表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getbool",
      children: "OH_PreferencesValue_GetBool()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetBool(const OH_PreferencesValue *object, bool *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从PreferencesValue对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "中获取一个布尔值。"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数作为出参使用，表示指向获取到的布尔值的指针。"
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
            children: "返回执行的错误码。  若错误码为PREFERENCES_OK，表示操作成功。  若错误码为PREFERENCES_ERROR_INVALID_PARAM，表示参数不合法。  若错误码为PREFERENCES_ERROR_STORAGE，表示存储异常。  若错误码为PREFERENCES_ERROR_MALLOC，表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getstring",
      children: "OH_PreferencesValue_GetString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetString(const OH_PreferencesValue *object, char **value, uint32_t *valueLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从PreferencesValue对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "中获取字符串。"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数作为出参使用，表示指向获取到的字符串的二级指针，使用完毕后需要调用释放函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-preferences-h/capi-oh-preferences-h#oh_preferences_freestring",
              children: "OH_Preferences_FreeString"
            }), "释放内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *valueLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数作为出参使用，表示指向获取到的字符串长度的指针。"
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
            children: "返回执行的错误码。  若错误码为PREFERENCES_OK，表示操作成功。  若错误码为PREFERENCES_ERROR_INVALID_PARAM，表示参数不合法。  若错误码为PREFERENCES_ERROR_STORAGE，表示存储异常。  若错误码为PREFERENCES_ERROR_MALLOC，表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencespair_destroy",
      children: "OH_PreferencesPair_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_PreferencesPair_Destroy(OH_PreferencesPair *pairs, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
        children: "OH_PreferencesPair"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), " *pairs"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencespair/capi-preferences-oh-preferencespair",
              children: "OH_PreferencesPair"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要销毁的KV数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_create",
      children: "OH_PreferencesValue_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_PreferencesValue* OH_PreferencesValue_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue*"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "值对象的指针，否则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_destroy",
      children: "OH_PreferencesValue_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_PreferencesValue_Destroy(OH_PreferencesValue *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), " *value"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setint",
      children: "OH_PreferencesValue_SetInt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetInt(const OH_PreferencesValue *object, int value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置整型值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的整型值。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setbool",
      children: "OH_PreferencesValue_SetBool()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetBool(const OH_PreferencesValue *object, bool value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置布尔值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的布尔值。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setstring",
      children: "OH_PreferencesValue_SetString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetString(const OH_PreferencesValue *object, const char *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置字符串值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的字符串值。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setint64",
      children: "OH_PreferencesValue_SetInt64()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetInt64(const OH_PreferencesValue *object, int64_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置int64值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的int64值。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getint64",
      children: "OH_PreferencesValue_GetInt64()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetInt64(const OH_PreferencesValue *object, int64_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的int64值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的int64值的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setdouble",
      children: "OH_PreferencesValue_SetDouble()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetDouble(const OH_PreferencesValue *object, double value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置double值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的double值。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getdouble",
      children: "OH_PreferencesValue_GetDouble()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetDouble(const OH_PreferencesValue *object, double *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的double值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的double值的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setintarray",
      children: "OH_PreferencesValue_SetIntArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetIntArray(const OH_PreferencesValue *object, const int *value, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置整型数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的整型数组值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向需要设置的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getintarray",
      children: "OH_PreferencesValue_GetIntArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetIntArray(const OH_PreferencesValue *object, int **value, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的整型数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int **value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的整型数组值的二级指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setboolarray",
      children: "OH_PreferencesValue_SetBoolArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetBoolArray(const OH_PreferencesValue *object, const bool *value, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置布尔数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const bool *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的布尔数组值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向需要设置的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getboolarray",
      children: "OH_PreferencesValue_GetBoolArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetBoolArray(const OH_PreferencesValue *object, bool **value, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的布尔数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool **value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的布尔数组值的二级指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setstringarray",
      children: "OH_PreferencesValue_SetStringArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetStringArray(const OH_PreferencesValue *object, const char **value, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置字符串数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char **value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的字符串数组值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向需要设置的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getstringarray",
      children: "OH_PreferencesValue_GetStringArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetStringArray(const OH_PreferencesValue *object, char ***value, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的字符串数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char ***value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的字符串数组值的二级指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setint64array",
      children: "OH_PreferencesValue_SetInt64Array()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetInt64Array(const OH_PreferencesValue *object, const int64_t *value, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置int64数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int64_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的int64数组值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向需要设置的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getint64array",
      children: "OH_PreferencesValue_GetInt64Array()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetInt64Array(const OH_PreferencesValue *object, int64_t **value, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的int64数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t **value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的int64数组值的二级指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setdoublearray",
      children: "OH_PreferencesValue_SetDoubleArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetDoubleArray(const OH_PreferencesValue *object, const double *value, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置double数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const double *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的double数组值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向需要设置的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getdoublearray",
      children: "OH_PreferencesValue_GetDoubleArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetDoubleArray(const OH_PreferencesValue *object, double **value, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的double数组值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double **value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的double数组值的二级指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的数组大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_setblob",
      children: "OH_PreferencesValue_SetBlob()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_SetBlob(const OH_PreferencesValue *object, const uint8_t *value, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例设置二进制值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint8_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的二进制值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向需要设置的二进制大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_preferencesvalue_getblob",
      children: "OH_PreferencesValue_GetBlob()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PreferencesValue_GetBlob(const OH_PreferencesValue *object, uint8_t **value, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
        children: "OH_PreferencesValue"
      }), "实例的二进制值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "const OH_PreferencesValue"
            }), " *object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-preferences-oh-preferencesvalue/capi-preferences-oh-preferencesvalue",
              children: "OH_PreferencesValue"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t **value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的二进制值的二级指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取到的二进制大小的指针。"
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
            children: "返回执行的错误码。  若错误码PREFERENCES_OK表示操作成功。  若错误码PREFERENCES_ERROR_INVALID_PARAM表示参数不合法。  若错误码PREFERENCES_ERROR_STORAGE表示存储异常。  若错误码PREFERENCES_ERROR_MALLOC表示内存分配失败。"
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