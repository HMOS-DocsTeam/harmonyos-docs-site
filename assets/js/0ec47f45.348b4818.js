"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["616734"], {
11528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_localization_api_localization_c_localization_headerfile_capi_ohresmgr_h_capi_ohresmgr_h_md_0ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-localization-api-localization-c-localization-headerfile-capi-ohresmgr-h-capi-ohresmgr-h-md-0ec.json
var site_docs_ref_localization_api_localization_c_localization_headerfile_capi_ohresmgr_h_capi_ohresmgr_h_md_0ec_namespaceObject = JSON.parse('{"id":"localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h","title":"ohresmgr.h","description":"概述","source":"@site/docs-ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h.md","sourceDirName":"localization-api/localization-c/localization-headerfile/capi-ohresmgr-h","slug":"/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ohresmgr.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohresmgr-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-ohresmgr-h"},"sidebar":"ref","previous":{"title":"i18n","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-module/capi-i18n/capi-i18n"},"next":{"title":"raw_dir.h","permalink":"/harmonyos-docs-site/ref/localization-api/localization-c/localization-headerfile/capi-raw-dir-h/capi-raw-dir-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h.md


const frontMatter = {
	title: 'ohresmgr.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohresmgr-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-ohresmgr-h'
};
const contentTitle = 'ohresmgr.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ResourceManager_GetMediaBase64()",
  "id": "oh_resourcemanager_getmediabase64",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetMediaBase64Data()",
  "id": "oh_resourcemanager_getmediabase64data",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetMediaBase64ByName()",
  "id": "oh_resourcemanager_getmediabase64byname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetMediaBase64DataByName()",
  "id": "oh_resourcemanager_getmediabase64databyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetMedia()",
  "id": "oh_resourcemanager_getmedia",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetMediaData()",
  "id": "oh_resourcemanager_getmediadata",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetMediaByName()",
  "id": "oh_resourcemanager_getmediabyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetMediaDataByName()",
  "id": "oh_resourcemanager_getmediadatabyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetDrawableDescriptor()",
  "id": "oh_resourcemanager_getdrawabledescriptor",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetDrawableDescriptorData()",
  "id": "oh_resourcemanager_getdrawabledescriptordata",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetDrawableDescriptorByName()",
  "id": "oh_resourcemanager_getdrawabledescriptorbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetDrawableDescriptorDataByName()",
  "id": "oh_resourcemanager_getdrawabledescriptordatabyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetSymbol()",
  "id": "oh_resourcemanager_getsymbol",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetSymbolByName()",
  "id": "oh_resourcemanager_getsymbolbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetLocales()",
  "id": "oh_resourcemanager_getlocales",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetLocalesData()",
  "id": "oh_resourcemanager_getlocalesdata",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetConfiguration()",
  "id": "oh_resourcemanager_getconfiguration",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetResourceConfiguration()",
  "id": "oh_resourcemanager_getresourceconfiguration",
  "level": 3
}, {
  "value": "OH_ResourceManager_ReleaseConfiguration()",
  "id": "oh_resourcemanager_releaseconfiguration",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetString()",
  "id": "oh_resourcemanager_getstring",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetStringByName()",
  "id": "oh_resourcemanager_getstringbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetStringArray()",
  "id": "oh_resourcemanager_getstringarray",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetStringArrayByName()",
  "id": "oh_resourcemanager_getstringarraybyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_ReleaseStringArray()",
  "id": "oh_resourcemanager_releasestringarray",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetPluralString()",
  "id": "oh_resourcemanager_getpluralstring",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetPluralStringByName()",
  "id": "oh_resourcemanager_getpluralstringbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetIntPluralString()",
  "id": "oh_resourcemanager_getintpluralstring",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetDoublePluralString()",
  "id": "oh_resourcemanager_getdoublepluralstring",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetIntPluralStringByName()",
  "id": "oh_resourcemanager_getintpluralstringbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetDoublePluralStringByName()",
  "id": "oh_resourcemanager_getdoublepluralstringbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetColor()",
  "id": "oh_resourcemanager_getcolor",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetColorByName()",
  "id": "oh_resourcemanager_getcolorbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetInt()",
  "id": "oh_resourcemanager_getint",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetIntByName()",
  "id": "oh_resourcemanager_getintbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetFloat()",
  "id": "oh_resourcemanager_getfloat",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetFloatByName()",
  "id": "oh_resourcemanager_getfloatbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetBool()",
  "id": "oh_resourcemanager_getbool",
  "level": 3
}, {
  "value": "OH_ResourceManager_GetBoolByName()",
  "id": "oh_resourcemanager_getboolbyname",
  "level": 3
}, {
  "value": "OH_ResourceManager_AddResource()",
  "id": "oh_resourcemanager_addresource",
  "level": 3
}, {
  "value": "OH_ResourceManager_RemoveResource()",
  "id": "oh_resourcemanager_removeresource",
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
        id: "ohresmgrh",
        children: "ohresmgr.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供资源管理native侧获取资源的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <resourcemanager/ohresmgr.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohresmgr.so"]
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
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-module/capi-resourcemanager/capi-resourcemanager",
        children: "resourcemanager"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_resourcemanager_getmediabase64",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64(const NativeResourceManager *mgr, uint32_t resId, char **resultValue, uint64_t *resultLen, uint32_t density = 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取屏幕密度对应的media资源的Base64码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getmediabase64data",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64Data(const NativeResourceManager *mgr, uint32_t resId, char **resultValue, uint64_t *resultLen, uint32_t density)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取屏幕密度对应的media资源的Base64码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getmediabase64byname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64ByName(const NativeResourceManager *mgr, const char *resName, char **resultValue, uint64_t *resultLen, uint32_t density = 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取屏幕密度对应的media资源的Base64码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getmediabase64databyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64DataByName(const NativeResourceManager *mgr, const char *resName, char **resultValue, uint64_t *resultLen, uint32_t density)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取屏幕密度对应的media资源的Base64码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getmedia",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMedia(const NativeResourceManager *mgr, uint32_t resId, uint8_t **resultValue, uint64_t *resultLen, uint32_t density = 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取屏幕密度对应的media资源的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getmediadata",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaData(const NativeResourceManager *mgr, uint32_t resId, uint8_t **resultValue, uint64_t *resultLen, uint32_t density)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取屏幕密度对应的media资源的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getmediabyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaByName(const NativeResourceManager *mgr, const char *resName, uint8_t **resultValue, uint64_t *resultLen, uint32_t density = 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取屏幕密度对应的media资源的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getmediadatabyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaDataByName(const NativeResourceManager *mgr, const char *resName, uint8_t **resultValue, uint64_t *resultLen, uint32_t density)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取屏幕密度对应的media资源的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getdrawabledescriptor",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptor(const NativeResourceManager *mgr, uint32_t resId, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density = 0, uint32_t type = 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源Id，获取屏幕密度对应的图标资源的DrawableDescriptor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getdrawabledescriptordata",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptorData(const NativeResourceManager *mgr, uint32_t resId, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density, uint32_t type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源Id，获取屏幕密度对应的图标资源的DrawableDescriptor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getdrawabledescriptorbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptorByName(const NativeResourceManager *mgr, const char *resName, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density = 0, uint32_t type = 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取屏幕密度对应的图标资源的DrawableDescriptor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getdrawabledescriptordatabyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptorDataByName(const NativeResourceManager *mgr, const char *resName, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density, uint32_t type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取屏幕密度对应的图标资源的DrawableDescriptor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getsymbol",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetSymbol(const NativeResourceManager *mgr, uint32_t resId, uint32_t *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的symbol资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getsymbolbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetSymbolByName(const NativeResourceManager *mgr, const char *resName, uint32_t *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的symbol资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getlocales",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetLocales(const NativeResourceManager *mgr, char ***resultValue, uint32_t *resultLen, bool includeSystem = false)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取语言列表。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()方法来释放locales的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getlocalesdata",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetLocalesData(const NativeResourceManager *mgr, char ***resultValue, uint32_t *resultLen, bool includeSystem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取语言列表。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()方法来释放locales的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getconfiguration",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetConfiguration(const NativeResourceManager *mgr, ResourceManager_Configuration *configuration)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取设备配置。使用此接口后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_releaseconfiguration",
              children: "OH_ResourceManager_ReleaseConfiguration"
            }), "方法来释放内存。如果使用malloc创建ResourceManager_Configuration对象，还需要调用free()方法来释放它。(API20废弃)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getresourceconfiguration",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetResourceConfiguration(const NativeResourceManager *mgr, ResourceManager_Configuration *configuration)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取设备配置。使用此接口后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_releaseconfiguration",
              children: "OH_ResourceManager_ReleaseConfiguration"
            }), "方法来释放内存。如果使用malloc创建ResourceManager_Configuration对象，还需要调用free()方法来释放它。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_releaseconfiguration",
              children: "ResourceManager_ErrorCode OH_ResourceManager_ReleaseConfiguration(ResourceManager_Configuration *configuration)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getconfiguration",
              children: "OH_ResourceManager_GetConfiguration"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getresourceconfiguration",
              children: "OH_ResourceManager_GetResourceConfiguration"
            }), "方法申请的内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getstring",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetString(const NativeResourceManager *mgr, uint32_t resId, char **resultValue, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的string资源。获取普通string资源使用OH_ResourceManager_GetString(mgr, resId, resultValue)接口。获取带有%d、%s、%f占位符的格式化资源使用OH_ResourceManager_GetString(mgr, resId, resultValue, 10, \"format\", 10.10)接口。使用此接口后，需要调用free()方法来释放字符串的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getstringbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetStringByName(const NativeResourceManager *mgr, const char *resName, char **resultValue, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的string资源。获取普通string资源使用OH_ResourceManager_GetString(mgr, resName, resultValue)接口。获取带有%d、%s、%f占位符的格式化资源使用OH_ResourceManager_GetString(mgr, resName, resultValue, 10, \"format\", 10.10)接口。使用此接口后，需要调用free()方法来释放字符串的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getstringarray",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetStringArray(const NativeResourceManager *mgr, uint32_t resId, char ***resultValue, uint32_t *resultLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取字符串数组。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()接口来释放字符串数组内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getstringarraybyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetStringArrayByName(const NativeResourceManager *mgr, const char *resName, char ***resultValue, uint32_t *resultLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取字符串数组。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()接口来释放字符串数组内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_releasestringarray",
              children: "ResourceManager_ErrorCode OH_ResourceManager_ReleaseStringArray(char ***resValue, uint32_t len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放字符串数组内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getpluralstring",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetPluralString(const NativeResourceManager *mgr, uint32_t resId, uint32_t num, char **resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。(API18废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getpluralstringbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetPluralStringByName(const NativeResourceManager *mgr, const char *resName, uint32_t num, char **resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。(API18废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getintpluralstring",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetIntPluralString(const NativeResourceManager *mgr, uint32_t resId, uint32_t num, char **resultValue, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getdoublepluralstring",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetDoublePluralString(const NativeResourceManager *mgr, uint32_t resId, double num, char **resultValue, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getintpluralstringbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetIntPluralStringByName(const NativeResourceManager *mgr, const char *resName, uint32_t num, char **resultValue, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getdoublepluralstringbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetDoublePluralStringByName(const NativeResourceManager *mgr, const char *resName, double num, char **resultValue, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getcolor",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetColor(const NativeResourceManager *mgr, uint32_t resId, uint32_t *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的颜色值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getcolorbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetColorByName(const NativeResourceManager *mgr, const char *resName, uint32_t *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的颜色值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getint",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetInt(const NativeResourceManager *mgr, uint32_t resId, int *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的int值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getintbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetIntByName(const NativeResourceManager *mgr, const char *resName, int *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的int值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getfloat",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetFloat(const NativeResourceManager *mgr, uint32_t resId, float *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的float值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getfloatbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetFloatByName(const NativeResourceManager *mgr, const char *resName, float *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的float值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getbool",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetBool(const NativeResourceManager *mgr, uint32_t resId, bool *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源ID，获取对应的bool值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_getboolbyname",
              children: "ResourceManager_ErrorCode OH_ResourceManager_GetBoolByName(const NativeResourceManager *mgr, const char *resName, bool *resultValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定资源名称，获取对应的bool值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_addresource",
              children: "ResourceManager_ErrorCode OH_ResourceManager_AddResource(const NativeResourceManager *mgr, const char *path)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用程序运行时添加overlay资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_resourcemanager_removeresource",
              children: "ResourceManager_ErrorCode OH_ResourceManager_RemoveResource(const NativeResourceManager *mgr, const char *path)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用程序运行时删除overlay资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmediabase64",
      children: "OH_ResourceManager_GetMediaBase64()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64(const NativeResourceManager *mgr, uint32_t resId, char **resultValue, uint64_t *resultLen, uint32_t density = 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取屏幕密度对应的media资源的Base64码。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，默认值为0，表示使用当前系统dpi的密度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmediabase64data",
      children: "OH_ResourceManager_GetMediaBase64Data()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64Data(const NativeResourceManager *mgr, uint32_t resId, char **resultValue, uint64_t *resultLen, uint32_t density)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取屏幕密度对应的media资源的Base64码。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，值为0表示使用当前系统dpi的密度。如果不需要此属性，请将此参数设置为0。"]
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmediabase64byname",
      children: "OH_ResourceManager_GetMediaBase64ByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64ByName(const NativeResourceManager *mgr, const char *resName, char **resultValue, uint64_t *resultLen, uint32_t density = 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取屏幕密度对应的media资源的Base64码。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，默认值为0，表示使用当前系统dpi的密度。"]
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NAME_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmediabase64databyname",
      children: "OH_ResourceManager_GetMediaBase64DataByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaBase64DataByName(const NativeResourceManager *mgr, const char *resName, char **resultValue, uint64_t *resultLen, uint32_t density)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取屏幕密度对应的media资源的Base64码。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，值为0表示使用当前系统dpi的密度。如果不需要此属性，请将此参数设置为0。"]
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NAME_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmedia",
      children: "OH_ResourceManager_GetMedia()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMedia(const NativeResourceManager *mgr, uint32_t resId, uint8_t **resultValue, uint64_t *resultLen, uint32_t density = 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取屏幕密度对应的media资源的内容。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，默认值为0，表示使用当前系统dpi的密度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmediadata",
      children: "OH_ResourceManager_GetMediaData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaData(const NativeResourceManager *mgr, uint32_t resId, uint8_t **resultValue, uint64_t *resultLen, uint32_t density)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取屏幕密度对应的media资源的内容。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，值为0表示使用当前系统dpi的密度。如果不需要此属性，请将此参数设置为0。"]
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmediabyname",
      children: "OH_ResourceManager_GetMediaByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaByName(const NativeResourceManager *mgr, const char *resName, uint8_t **resultValue, uint64_t *resultLen, uint32_t density = 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取屏幕密度对应的media资源的内容。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，默认值为0，表示使用当前系统dpi的密度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NAME_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getmediadatabyname",
      children: "OH_ResourceManager_GetMediaDataByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetMediaDataByName(const NativeResourceManager *mgr, const char *resName, uint8_t **resultValue, uint64_t *resultLen, uint32_t density)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取屏幕密度对应的media资源的内容。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的media长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，值为0表示使用当前系统dpi的密度。如果不需要此属性，请将此参数设置为0。"]
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NAME_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getdrawabledescriptor",
      children: "OH_ResourceManager_GetDrawableDescriptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptor(const NativeResourceManager *mgr, uint32_t resId, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density = 0, uint32_t type = 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源Id，获取屏幕密度对应的图标资源的DrawableDescriptor。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，默认值为0，表示使用当前系统dpi的密度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示图标类型，0表示自身图标，1表示主题图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor",
              children: "ArkUI_DrawableDescriptor"
            }), " **drawableDescriptor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入drawableDescriptor的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getdrawabledescriptordata",
      children: "OH_ResourceManager_GetDrawableDescriptorData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptorData(const NativeResourceManager *mgr, uint32_t resId, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density, uint32_t type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源Id，获取屏幕密度对应的图标资源的DrawableDescriptor。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor",
              children: "ArkUI_DrawableDescriptor"
            }), " **drawableDescriptor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入drawableDescriptor的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，值为0表示使用当前系统dpi的密度。如果不需要此属性，请将此参数设置为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示图标类型，0表示自身图标，1表示主题图标。如果该属性不是必需的，请将该参数设为0。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getdrawabledescriptorbyname",
      children: "OH_ResourceManager_GetDrawableDescriptorByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptorByName(const NativeResourceManager *mgr, const char *resName, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density = 0, uint32_t type = 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取屏幕密度对应的图标资源的DrawableDescriptor。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，默认值为0，表示使用当前系统dpi的密度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示图标类型，0表示自身图标，1表示主题图标，2表示动态图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor",
              children: "ArkUI_DrawableDescriptor"
            }), " **drawableDescriptor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入drawableDescriptor的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NAME_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getdrawabledescriptordatabyname",
      children: "OH_ResourceManager_GetDrawableDescriptorDataByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetDrawableDescriptorDataByName(const NativeResourceManager *mgr, const char *resName, ArkUI_DrawableDescriptor **drawableDescriptor, uint32_t density, uint32_t type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取屏幕密度对应的图标资源的DrawableDescriptor。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor",
              children: "ArkUI_DrawableDescriptor"
            }), " **drawableDescriptor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入drawableDescriptor的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t density"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#screendensity",
              children: "ScreenDensity"
            }), "，值为0表示使用当前系统dpi的密度。如果不需要此属性，请将此参数设置为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示图标类型，0表示自身图标，1表示主题图标。如果该属性不是必需的，请将该参数设为0。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NAME_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getsymbol",
      children: "OH_ResourceManager_GetSymbol()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetSymbol(const NativeResourceManager *mgr, uint32_t resId, uint32_t *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的symbol资源。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getsymbolbyname",
      children: "OH_ResourceManager_GetSymbolByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetSymbolByName(const NativeResourceManager *mgr, const char *resName, uint32_t *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的symbol资源。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NAME_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getlocales",
      children: "OH_ResourceManager_GetLocales()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetLocales(const NativeResourceManager *mgr, char ***resultValue, uint32_t *resultLen, bool includeSystem = false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取语言列表。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()方法来释放locales的内存。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char ***resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的locales长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool includeSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否包含系统资源，默认值为false，当只有系统资源查询locales列表时它不起作用。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getlocalesdata",
      children: "OH_ResourceManager_GetLocalesData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetLocalesData(const NativeResourceManager *mgr, char ***resultValue, uint32_t *resultLen, bool includeSystem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取语言列表。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()方法来释放locales的内存。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char ***resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的locales长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool includeSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否包含系统资源，如果不需要此属性，请将此参数设置为 false。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getconfiguration",
      children: "OH_ResourceManager_GetConfiguration()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetConfiguration(const NativeResourceManager *mgr, ResourceManager_Configuration *configuration)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取设备配置。使用此接口后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h#oh_resourcemanager_releaseconfiguration",
        children: "OH_ResourceManager_ReleaseConfiguration"
      }), "方法来释放内存。如果使用malloc创建ResourceManager_Configuration对象，还需要调用free()方法来释放它。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_resourcemanager_getresourceconfiguration",
        children: "OH_ResourceManager_GetResourceConfiguration"
      })]
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
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-resourcemanager-resourcemanager-configuration/capi-resourcemanager-resourcemanager-configuration",
              children: "ResourceManager_Configuration"
            }), " *configuration"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入获取的设备配置。其中configuration.screenDensity的返回值为设备DPI除以160取整后的值。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_SYSTEM_RES_MANAGER_GET_FAILED"
            }), " 9001009 - 无法访问系统资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getresourceconfiguration",
      children: "OH_ResourceManager_GetResourceConfiguration()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetResourceConfiguration(const NativeResourceManager *mgr, ResourceManager_Configuration *configuration)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取设备配置。使用此接口后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h#oh_resourcemanager_releaseconfiguration",
        children: "OH_ResourceManager_ReleaseConfiguration"
      }), "方法来释放内存。如果使用malloc创建ResourceManager_Configuration对象，还需要调用free()方法来释放它。"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-resourcemanager-resourcemanager-configuration/capi-resourcemanager-resourcemanager-configuration",
              children: "ResourceManager_Configuration"
            }), " *configuration"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入获取的设备配置。其中configuration.screenDensity的返回值为设备DPI。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_SYSTEM_RES_MANAGER_GET_FAILED"
            }), " 9001009 - 无法访问系统资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_releaseconfiguration",
      children: "OH_ResourceManager_ReleaseConfiguration()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_ReleaseConfiguration(ResourceManager_Configuration *configuration)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h#oh_resourcemanager_getconfiguration",
        children: "OH_ResourceManager_GetConfiguration"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h#oh_resourcemanager_getresourceconfiguration",
        children: "OH_ResourceManager_GetResourceConfiguration"
      }), "方法申请的内存。"]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-resourcemanager-resourcemanager-configuration/capi-resourcemanager-resourcemanager-configuration",
              children: "ResourceManager_Configuration"
            }), " *configuration"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要释放内存的configuration对象。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getstring",
      children: "OH_ResourceManager_GetString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetString(const NativeResourceManager *mgr, uint32_t resId, char **resultValue, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的string资源。获取普通string资源使用OH_ResourceManager_GetString(mgr, resId, resultValue)接口。获取带有%d、%s、%f占位符的格式化资源使用OH_ResourceManager_GetString(mgr, resId, resultValue, 10, \"format\", 10.10)接口。使用此接口后，需要调用free()方法来释放字符串的内存。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化字符串资源参数，可变参数，支持const char*、int、float类型。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getstringbyname",
      children: "OH_ResourceManager_GetStringByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetStringByName(const NativeResourceManager *mgr, const char *resName, char **resultValue, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的string资源。获取普通string资源使用OH_ResourceManager_GetString(mgr, resName, resultValue)接口。获取带有%d、%s、%f占位符的格式化资源使用OH_ResourceManager_GetString(mgr, resName, resultValue, 10, \"format\", 10.10)接口。使用此接口后，需要调用free()方法来释放字符串的内存。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化字符串资源参数，可变参数，支持const char*、int、float类型。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getstringarray",
      children: "OH_ResourceManager_GetStringArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetStringArray(const NativeResourceManager *mgr, uint32_t resId, char ***resultValue, uint32_t *resultLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取字符串数组。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()接口来释放字符串数组内存。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char ***resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的StringArray长度。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getstringarraybyname",
      children: "OH_ResourceManager_GetStringArrayByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetStringArrayByName(const NativeResourceManager *mgr, const char *resName, char ***resultValue, uint32_t *resultLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取字符串数组。使用此接口后，需要调用OH_ResourceManager_ReleaseStringArray()接口来释放字符串数组内存。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char ***resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultLen的StringArray长度。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_releasestringarray",
      children: "OH_ResourceManager_ReleaseStringArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_ReleaseStringArray(char ***resValue, uint32_t len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放字符串数组内存。"
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
            children: "char ***resValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要释放的字符串数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组长度。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getpluralstring",
      children: "OH_ResourceManager_GetPluralString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetPluralString(const NativeResourceManager *mgr, uint32_t resId, uint32_t num, char **resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h#oh_resourcemanager_getintpluralstring",
        children: "OH_ResourceManager_GetIntPluralString"
      })]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数量值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getpluralstringbyname",
      children: "OH_ResourceManager_GetPluralStringByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetPluralStringByName(const NativeResourceManager *mgr, const char *resName, uint32_t num, char **resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-headerfile/capi-ohresmgr-h/capi-ohresmgr-h#oh_resourcemanager_getintpluralstringbyname",
        children: "OH_ResourceManager_GetIntPluralStringByName"
      })]
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数量值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getintpluralstring",
      children: "OH_ResourceManager_GetIntPluralString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetIntPluralString(const NativeResourceManager *mgr, uint32_t resId, uint32_t num, char **resultValue, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数量值（整数）。根据当前语言的复数规则获取该数量值对应的字符串数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化字符串资源参数，可变参数，支持const char*、int、float类型。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getdoublepluralstring",
      children: "OH_ResourceManager_GetDoublePluralString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetDoublePluralString(const NativeResourceManager *mgr, uint32_t resId, double num, char **resultValue, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数量值（浮点数）。根据当前语言的复数规则获取该数量值对应的字符串数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化字符串资源参数，可变参数，支持const char*、int、float类型。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getintpluralstringbyname",
      children: "OH_ResourceManager_GetIntPluralStringByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetIntPluralStringByName(const NativeResourceManager *mgr, const char *resName, uint32_t num, char **resultValue, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数量值（整数）。根据当前语言的复数规则获取该数量值对应的字符串数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化字符串资源参数，可变参数，支持const char*、int、float类型。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getdoublepluralstringbyname",
      children: "OH_ResourceManager_GetDoublePluralStringByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetDoublePluralStringByName(const NativeResourceManager *mgr, const char *resName, double num, char **resultValue, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的单复数字符串。使用此接口后，需要调用free()方法来释放字符串的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数量值（浮点数）。根据当前语言的复数规则获取该数量值对应的字符串数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "格式化字符串资源参数，可变参数，支持const char*、int、float类型。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OUT_OF_MEMORY"
            }), " 9001100 - 内存溢出。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getcolor",
      children: "OH_ResourceManager_GetColor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetColor(const NativeResourceManager *mgr, uint32_t resId, uint32_t *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的颜色值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getcolorbyname",
      children: "OH_ResourceManager_GetColorByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetColorByName(const NativeResourceManager *mgr, const char *resName, uint32_t *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的颜色值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getint",
      children: "OH_ResourceManager_GetInt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetInt(const NativeResourceManager *mgr, uint32_t resId, int *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的int值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getintbyname",
      children: "OH_ResourceManager_GetIntByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetIntByName(const NativeResourceManager *mgr, const char *resName, int *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的int值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getfloat",
      children: "OH_ResourceManager_GetFloat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetFloat(const NativeResourceManager *mgr, uint32_t resId, float *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的float值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getfloatbyname",
      children: "OH_ResourceManager_GetFloatByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetFloatByName(const NativeResourceManager *mgr, const char *resName, float *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的float值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getbool",
      children: "OH_ResourceManager_GetBool()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetBool(const NativeResourceManager *mgr, uint32_t resId, bool *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源ID，获取对应的bool值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t resId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001001 - 无效的资源ID。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_ID"
            }), " 9001002 - 没有根据资源ID找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_getboolbyname",
      children: "OH_ResourceManager_GetBoolByName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_GetBoolByName(const NativeResourceManager *mgr, const char *resName, bool *resultValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定资源名称，获取对应的bool值。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "const NativeResourceManager"
            }), " *mgr"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *resName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *resultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入resultValue的结果。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_ID_NOT_FOUND"
            }), " 9001003 - 无效的资源名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_NOT_FOUND_BY_NAME"
            }), " 9001004 - 没有根据资源名称找到匹配的资源。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_RES_REF_TOO_MUCH"
            }), " 9001006 - 资源被循环引用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_addresource",
      children: "OH_ResourceManager_AddResource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_AddResource(const NativeResourceManager *mgr, const char *path)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用程序运行时添加overlay资源。"
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
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源路径。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OVERLAY_RES_PATH_INVALID"
            }), " 9001010 - 无效的资源路径."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_resourcemanager_removeresource",
      children: "OH_ResourceManager_RemoveResource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceManager_ErrorCode OH_ResourceManager_RemoveResource(const NativeResourceManager *mgr, const char *path)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用程序运行时删除overlay资源。"
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
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-nativeresourcemanager/capi-rawfile-nativeresourcemanager",
              children: "NativeResourceManager"
            }), "的指针，此指针通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-raw-file-manager-h/capi-raw-file-manager-h#oh_resourcemanager_initnativeresourcemanager",
              children: "OH_ResourceManager_InitNativeResourceManager"
            }), "方法获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源路径。"
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
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ResourceManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "SUCCESS"
            }), " 0 - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_INVALID_INPUT_PARAMETER"
            }), " 401 - 输入参数无效。可能的原因：1.参数类型不正确；2.参数验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-headerfile/capi-resmgr-common-h/capi-resmgr-common-h#resourcemanager_errorcode",
              children: "ERROR_CODE_OVERLAY_RES_PATH_INVALID"
            }), " 9001010 - 无效的资源路径."]
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