"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["796246"], {
908864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_preferences_guidelines_preferences_guidelines_md_f64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-preferences-guidelines-preferences-guidelines-md-f64.json
var site_docs_arkdata_app_data_persistence_preferences_guidelines_preferences_guidelines_md_f64_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/preferences-guidelines/preferences-guidelines","title":"通过用户首选项实现数据持久化 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/app-data-persistence/preferences-guidelines/preferences-guidelines.md","sourceDirName":"arkdata/app-data-persistence/preferences-guidelines","slug":"/arkdata/app-data-persistence/preferences-guidelines/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/preferences-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"通过用户首选项实现数据持久化 (C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preferences-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过用户首选项实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-preferences/"},"next":{"title":"通过键值型数据库实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-kv-store/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/preferences-guidelines/preferences-guidelines.md


const frontMatter = {
	title: '通过用户首选项实现数据持久化 (C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preferences-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过用户首选项实现数据持久化 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
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
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "通过用户首选项实现数据持久化-cc",
        children: "通过用户首选项实现数据持久化 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户首选项（Preferences）模块主要提供轻量级Key-Value操作，支持本地存储少量数据，数据存储在文件和内存中，访问速度快。如果存在大量数据场景，请考虑使用键值型数据库或关系型数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 18之前：ArkTS API仅支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkdata/app-data-persistence/data-persistence-by-preferences#xml%E5%AD%98%E5%82%A8",
          children: "XML存储模式"
        }), "；C API仅支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkdata/app-data-persistence/data-persistence-by-preferences#gskv%E5%AD%98%E5%82%A8",
          children: "GSKV存储模式"
        }), "；存储模式互不兼容，不支持ArkTS和C API操作同一个Preferences实例。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API version 18及之后：ArkTS和C API均支持XML和GSKV双模式；ArkTS和C API使用相同的存储模式时，可以正常操作同一Preferences实例；禁止ArkTS和C API选择不同的存储模式，来操作同一个Preferences实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key的最大长度限制为1024个字节，Value的最大长度限制为16MB。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-preferences/capi-preferences",
        children: "Preferences接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Preferences * OH_Preferences_Open (OH_PreferencesOption *option, int *errCode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个Preferences实例对象并创建指向它的指针。 当不再需要使用指针时，请使用OH_Preferences_Close关闭实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_Close (OH_Preferences *preference)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭一个Preferences实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_GetInt (OH_Preferences *preference, const char *key, int *value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Preferences实例对象中Key对应的整型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_GetBool (OH_Preferences *preference, const char *key, bool *value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Preferences实例对象中Key对应的布尔值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_GetString (OH_Preferences *preference, const char *key, char **value, uint32_t *valueLen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Preferences实例对象中Key对应的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Preferences_FreeString (char *string)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放从Preferences实例对象中获取的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_SetInt (OH_Preferences *preference, const char *key, int value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Key设置Preferences实例对象中的整型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_SetBool (OH_Preferences *preference, const char *key, bool value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Key设置Preferences实例对象中的布尔值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_SetString (OH_Preferences *preference, const char *key, const char *value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Key设置Preferences实例对象中的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_Delete (OH_Preferences *preference, const char *key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Preferences实例对象中删除Key对应的KV数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_RegisterDataObserver (OH_Preferences *preference, void *context, OH_PreferencesDataObserver observer, const char *keys[], uint32_t keyCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对选取的Key注册数据变更订阅。订阅的Key的值发生变更后，在调用OH_Preferences_Close()后触发回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_UnregisterDataObserver (OH_Preferences *preference, void *context, OH_PreferencesDataObserver observer, const char *keys[], uint32_t keyCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册选取Key的数据变更订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Preferences_IsStorageTypeSupported (Preferences_StorageType type, bool *isSupported)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查当前平台是否支持对应的存储模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PreferencesOption * OH_PreferencesOption_Create (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Preferences配置选项的OH_PreferencesOption实例对象以及指向它的指针。 当不再需要使用指针时，请使用OH_PreferencesOption_Destroy销毁实例对象，否则会导致内存泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesOption_SetFileName (OH_PreferencesOption *option, const char *fileName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Preferences配置选项OH_PreferencesOption实例对象的文件名称。名称长度为0到255字节，其中不能包含'/'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesOption_SetBundleName (OH_PreferencesOption *option, const char *bundleName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Preferences配置选项OH_PreferencesOption实例对象的包名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesOption_SetDataGroupId (OH_PreferencesOption *option, const char *dataGroupId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Preferences配置选项OH_PreferencesOption实例对象的应用组ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesOption_SetStorageType (OH_PreferencesOption *option, Preferences_StorageType type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Preferences配置选项 OH_PreferencesOption实例对象的存储模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesOption_Destroy (OH_PreferencesOption *option)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁Preferences配置选项OH_PreferencesOption实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PreferencesPair_GetKey (const OH_PreferencesPair *pairs, uint32_t index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取KV数据中索引对应数据的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const OH_PreferencesValue * OH_PreferencesPair_GetPreferencesValue (const OH_PreferencesPair *pairs, uint32_t index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取KV数据数组中索引对应的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preference_ValueType OH_PreferencesValue_GetValueType (const OH_PreferencesValue *object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PreferencesValue对象的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesValue_GetInt (const OH_PreferencesValue *object, int *value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从PreferencesValue对象OH_PreferencesValue中获取一个整型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesValue_GetBool (const OH_PreferencesValue *object, bool *value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从PreferencesValue对象OH_PreferencesValue中获取一个布尔值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PreferencesValue_GetString (const OH_PreferencesValue *object, char **value, uint32_t *valueLen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从PreferencesValue对象OH_PreferencesValue中获取字符串。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加动态链接库",
      children: "添加动态链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libohpreferences.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用头文件",
      children: "引用头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <database/preferences/oh_preferences.h>\n#include <database/preferences/oh_preferences_err_code.h>\n#include <database/preferences/oh_preferences_option.h>\n#include <database/preferences/oh_preferences_value.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下列实例展示如何通过Preferences实现对键值数据的修改与持久化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Preferences配置选项（PreferencesOption）对象并设置配置选项成员（名称、应用组ID、包名、存储模式）。使用完毕后，调用OH_PreferencesOption_Destroy销毁配置选项实例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Preferences_Open打开一个Preferences实例，该实例使用完后需要调用OH_Preferences_Close关闭。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1. 创建Preferences配置选项。\nOH_PreferencesOption *option = OH_PreferencesOption_Create();\nif (option == nullptr) {\n    // 错误处理\n}\n// 设置Preferences配置选项的文件名称。\nint ret = OH_PreferencesOption_SetFileName(option, \"testdb\");\nif (ret != PREFERENCES_OK) {\n    (void)OH_PreferencesOption_Destroy(option);\n    // 错误处理\n}\n// 设置Preferences配置选项的应用组ID。\nret = OH_PreferencesOption_SetDataGroupId(option, \"\");\nif (ret != PREFERENCES_OK) {\n    (void)OH_PreferencesOption_Destroy(option);\n    // 错误处理\n}\n// 设置Preferences配置选项的包名称。\nret = OH_PreferencesOption_SetBundleName(option, \"com.example\");\nif (ret != PREFERENCES_OK) {\n    (void)OH_PreferencesOption_Destroy(option);\n    // 错误处理\n}\n// 设置Preferences配置选项的存储模式，需要注意的是，设置之前需要调用OH_Preferences_IsStorageTypeSupported接口判断当前平台是否支持需要选择的模式。\nbool isGskvSupported = false;\nret = OH_Preferences_IsStorageTypeSupported(Preferences_StorageType::PREFERENCES_STORAGE_GSKV, &isGskvSupported);\nif (ret != PREFERENCES_OK) {\n    (void)OH_PreferencesOption_Destroy(option);\n    // 错误处理\n}\nif (isGskvSupported) {\n    ret = OH_PreferencesOption_SetStorageType(option, Preferences_StorageType::PREFERENCES_STORAGE_GSKV);\n    if (ret != PREFERENCES_OK) {\n        (void)OH_PreferencesOption_Destroy(option);\n        // 错误处理\n    }\n} else {\n    ret = OH_PreferencesOption_SetStorageType(option, Preferences_StorageType::PREFERENCES_STORAGE_XML);\n    if (ret != PREFERENCES_OK) {\n        (void)OH_PreferencesOption_Destroy(option);\n        // 错误处理\n    }\n}\n// 2. 打开一个Preferences实例。\nint errCode = PREFERENCES_OK;\nOH_Preferences *preference = OH_Preferences_Open(option, &errCode);\n// option使用完毕后可直接释放，释放后需要将指针置空。\n(void)OH_PreferencesOption_Destroy(option);\noption = nullptr;\nif (preference == nullptr || errCode != PREFERENCES_OK) {\n    // 错误处理\n}\n// option使用完毕后删除配置选项\nerrCode = OH_Preferences_DeletePreferences(option);\nif (errCode != PREFERENCES_OK) {\n    // 错误处理\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅回调函数为DataChangeObserverCallback。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 数据变更回调函数\nvoid DataChangeObserverCallback(void *context, const OH_PreferencesPair *pairs, uint32_t count)\n{\n    for (uint32_t i = 0; i < count; i++) {\n        // 获取索引i对应的PreferencesValue\n        const OH_PreferencesValue *pValue = OH_PreferencesPair_GetPreferencesValue(pairs, i);\n        // 获取PreferencesValue的数据类型\n        Preference_ValueType type = OH_PreferencesValue_GetValueType(pValue);\n        int ret = PREFERENCES_OK;\n        if (type == PREFERENCE_TYPE_INT) {\n            int intValue = 0;\n            ret = OH_PreferencesValue_GetInt(pValue, &intValue);\n            if (ret == PREFERENCES_OK) {\n                // 业务逻辑\n            }\n        } else if (type == PREFERENCE_TYPE_BOOL) {\n            bool boolValue = true;\n            ret = OH_PreferencesValue_GetBool(pValue, &boolValue);\n            if (ret == PREFERENCES_OK) {\n                // 业务逻辑\n            }\n        } else if (type == PREFERENCE_TYPE_STRING) {\n            char *stringValue = nullptr;\n            uint32_t valueLen = 0;\n            ret = OH_PreferencesValue_GetString(pValue, &stringValue, &valueLen);\n            if (ret == PREFERENCES_OK) {\n                // 业务逻辑\n                OH_Preferences_FreeString(stringValue);\n            }\n        } else {\n            // 无效类型\n        }\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Preferences_RegisterDataObserver注册3个Key的数据变更订阅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 3. 对key_int、key_bool和key_string注册数据变更订阅。\nconst char *keys[] = {\"key_int\", \"key_bool\", \"key_string\"};\nint ret = OH_Preferences_RegisterDataObserver(preference, nullptr, DataChangeObserverCallback, keys, 3);\nif (ret != PREFERENCES_OK) {\n    (void)OH_Preferences_Close(preference);\n    // 错误处理\n}\n// 兼容多种类型的注册数据变更订阅。\nint contextData = 42;\nret = OH_Preferences_RegisterMultiProcessDataObserver(preference, &contextData, DataChangeObserverCallback);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\n// 取消兼容多种类型的注册数据变更订阅。\nret = OH_Preferences_UnregisterMultiProcessDataObserver(preference, &contextData, DataChangeObserverCallback);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置Preferences实例中的键值数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 4. 设置Preferences实例中的KV数据。\nret = OH_Preferences_SetInt(preference, keys[0], 0);\nif (ret != PREFERENCES_OK) {\n    (void)OH_Preferences_Close(preference);\n    // 错误处理\n}\nret = OH_Preferences_SetBool(preference, keys[1], true);\nif (ret != PREFERENCES_OK) {\n    (void)OH_Preferences_Close(preference);\n    // 错误处理\n}\nint32_t stringIndex = 2;\nret = OH_Preferences_SetString(preference, keys[stringIndex], \"string value\");\nif (ret != PREFERENCES_OK) {\n    (void)OH_Preferences_Close(preference);\n    // 错误处理\n}\nret = OH_Preferences_Flush(preference);\nif (ret != PREFERENCES_OK) {\n    (void)OH_Preferences_Close(preference);\n    // 错误处理\n}\nOH_PreferencesValue* setIntValue = OH_PreferencesValue_Create();\nif (setIntValue  == nullptr) {\n    // 错误处理\n}\nconst int value = 456;\nret = OH_PreferencesValue_SetInt(setIntValue, value);\nif (ret != PREFERENCES_OK) {\n    (void)OH_PreferencesValue_Destroy(setIntValue);\n    // 错误处理\n}\nret = OH_Preferences_SetValue(preference, \"int_key\", setIntValue);\nif (ret != PREFERENCES_OK) {\n    (void)OH_Preferences_Close(preference);\n    // 错误处理\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Preferences实例中的键值数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 5. 获取Preferences实例中的KV数据。\nint intValue = 0;\nint ret = PREFERENCES_OK;\nconst char *keys[] = {\"key_int\", \"key_bool\", \"key_string\"};\nret = OH_Preferences_GetInt(preference, keys[0], &intValue);\nif (ret == PREFERENCES_OK) {\n    // 业务逻辑\n}\n    \nbool boolValue = false;\nret = OH_Preferences_GetBool(preference, keys[1], &boolValue);\nif (ret == PREFERENCES_OK) {\n    // 业务逻辑\n}\n    \nchar *stringValue = nullptr;\nuint32_t valueLen = 0;\nint32_t stringIndex = 2;\nret = OH_Preferences_GetString(preference, keys[stringIndex], &stringValue, &valueLen);\nif (ret == PREFERENCES_OK) {\n    // 业务逻辑\n    // 使用完OH_Preferences_GetString接口后，需要对字符串进行释放。\n    OH_Preferences_FreeString(stringValue);\n    stringValue = nullptr;\n}\n\nOH_PreferencesValue* getIntValue = OH_PreferencesValue_Create();\nif (getIntValue  == nullptr) {\n    // 错误处理\n}\nret = OH_Preferences_GetValue(preference, \"int_key\", &getIntValue);\nif (ret == PREFERENCES_OK) {\n    // 业务逻辑\n}\n\nOH_PreferencesPair* pairs = nullptr;\nuint32_t count = 0;\nret = OH_Preferences_GetAll(preference, &pairs, &count);\nif (ret == PREFERENCES_OK) {\n    // 业务逻辑\n    if (pairs != nullptr) {\n        // 销毁例对象中所有的KV数据。\n        OH_PreferencesPair_Destroy(pairs, count);\n    }\n}\n\n// 查询Preferences实例中的Key是否有数据\nbool result = OH_Preferences_HasKey(preference, \"int_key\");\nif (result == true) {\n    // 有数据 业务逻辑\n}\n\n// 清理缓存数据\nret = OH_Preferences_ClearCache(preference);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Preferences_Close关闭Preferences实例，关闭后需要将实例指针置空。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 6. 使用完Preferences实例后需要关闭实例，关闭后需要将指针置空。\n(void)OH_Preferences_Close(preference);\npreference = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置和获取OH_PreferencesValue数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const int arg5 = 5;\nconst int arg4 = 4;\nconst int arg3 = 3;\nint ret = PREFERENCES_OK;\nOH_PreferencesValue* setValue = OH_PreferencesValue_Create();\nbool boolArray[] = {true, false, true, false};\nret = OH_PreferencesValue_SetBoolArray(setValue, boolArray, arg4);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\nuint32_t count = 0;\nbool* outBoolArray = nullptr;\nret = OH_PreferencesValue_GetBoolArray(setValue, &outBoolArray, &count);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\n\nconst char* strArray[] = {\"hello\", \"world\", \"test\"};\nret = OH_PreferencesValue_SetStringArray(setValue, strArray, arg3);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\nchar** outStrArray = nullptr;\nret = OH_PreferencesValue_GetStringArray(setValue, &outStrArray, &count);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\n\nint64_t int64Array[] = {1234567890LL, 9876543210LL, -1234567890LL};\nret = OH_PreferencesValue_SetInt64Array(setValue, int64Array, arg3);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\nint64_t* outArrayInt64 = nullptr;\nret = OH_PreferencesValue_GetInt64Array(setValue, &outArrayInt64, &count);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\n\ndouble doubleArray[] = {1.1, 2.2, 3.3, 4.4};\nret = OH_PreferencesValue_SetDoubleArray(setValue, doubleArray, arg4);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\ndouble* outDoubleArray = nullptr;\nret = OH_PreferencesValue_GetDoubleArray(setValue, &outDoubleArray, &count);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\n\nuint8_t blobData[] = {0x01, 0x02, 0x03, 0x04, 0x05};\nret = OH_PreferencesValue_SetBlob(setValue, blobData, arg5);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\nuint8_t* outBlob = nullptr;\nret = OH_PreferencesValue_GetBlob(setValue, &outBlob, &count);\nif (ret != PREFERENCES_OK) {\n    // 错误处理\n}\n"
          })
        }), "\n"]
      }), "\n"]
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