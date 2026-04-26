"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["112195"], {
437382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_c_ability_headerfile_capi_ability_resource_info_h_capi_ability_resource_info_h_md_38e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-c-ability-headerfile-capi-ability-resource-info-h-capi-ability-resource-info-h-md-38e.json
var site_docs_ref_ability_api_ability_c_ability_headerfile_capi_ability_resource_info_h_capi_ability_resource_info_h_md_38e_namespaceObject = JSON.parse('{"id":"ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h/capi-ability-resource-info-h","title":"ability_resource_info.h","description":"概述","source":"@site/docs-ref/ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h/capi-ability-resource-info-h.md","sourceDirName":"ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h","slug":"/ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h/capi-ability-resource-info-h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h/capi-ability-resource-info-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"ability_resource_info.h","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-resource-info-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-ability-resource-info-h"},"sidebar":"ref","previous":{"title":"want.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-want-h/capi-want-h"},"next":{"title":"bundle_manager_common.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h/capi-ability-resource-info-h.md


const frontMatter = {
	title: 'ability_resource_info.h',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-resource-info-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-ability-resource-info-h'
};
const contentTitle = 'ability_resource_info.h';

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
  "value": "OH_NativeBundle_GetBundleName()",
  "id": "oh_nativebundle_getbundlename",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetModuleName()",
  "id": "oh_nativebundle_getmodulename",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetAbilityName()",
  "id": "oh_nativebundle_getabilityname",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetDrawableDescriptor()",
  "id": "oh_nativebundle_getdrawabledescriptor",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetLabel()",
  "id": "oh_nativebundle_getlabel",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetAppIndex()",
  "id": "oh_nativebundle_getappindex",
  "level": 3
}, {
  "value": "OH_NativeBundle_CheckDefaultApp()",
  "id": "oh_nativebundle_checkdefaultapp",
  "level": 3
}, {
  "value": "OH_AbilityResourceInfo_Destroy()",
  "id": "oh_abilityresourceinfo_destroy",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetSize()",
  "id": "oh_nativebundle_getsize",
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
        id: "ability_resource_infoh",
        children: "ability_resource_info.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供组件资源信息的接口，用于获取组件的以下信息：包名、模块名、组件名、图标、分身索引、是否为默认应用等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <bundle/ability_resource_info.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libbundle_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.BundleManager.BundleFramework.Core"]
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
        href: "/ref/ability-api/ability-c/ability-module/capi-native-bundle/capi-native-bundle",
        children: "Native_Bundle"
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
              href: "/ref/ability-api/ability-c/ability-struct/x-native-bundle-oh-nativebundle-abilityresourceinfo/x-native-bundle-oh-nativebundle-abilityresourceinfo",
              children: "OH_NativeBundle_AbilityResourceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBundle_AbilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示组件资源信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativebundle_getbundlename",
              children: "BundleManager_ErrorCode OH_NativeBundle_GetBundleName(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** bundleName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取组件的包名。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getmodulename",
              children: "BundleManager_ErrorCode OH_NativeBundle_GetModuleName(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** moduleName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取组件的模块名。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getabilityname",
              children: "BundleManager_ErrorCode OH_NativeBundle_GetAbilityName(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** abilityName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取组件名。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getdrawabledescriptor",
              children: "BundleManager_ErrorCode OH_NativeBundle_GetDrawableDescriptor(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, ArkUI_DrawableDescriptor** drawableIcon)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取组件图标资源对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor",
              children: "DrawableDescriptor"
            }), "对象。在使用该接口之后，为了防止内存泄漏，需要手动调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityresourceinfo_destroy",
              children: "OH_AbilityResourceInfo_Destroy"
            }), "释放接口返回的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getlabel",
              children: "BundleManager_ErrorCode OH_NativeBundle_GetLabel(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** label)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取组件的应用名称。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getappindex",
              children: "BundleManager_ErrorCode OH_NativeBundle_GetAppIndex(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, int* appIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取组件的分身索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_checkdefaultapp",
              children: "BundleManager_ErrorCode OH_NativeBundle_CheckDefaultApp(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, bool* isDefault)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询组件所属的应用是否为默认应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_abilityresourceinfo_destroy",
              children: "BundleManager_ErrorCode OH_AbilityResourceInfo_Destroy(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, size_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该接口应在对", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getabilityresourceinfo",
              children: "OH_NativeBundle_GetAbilityResourceInfo"
            }), "的使用完成后调用，以避免内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getsize",
              children: "int OH_NativeBundle_GetSize()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取单个结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/x-native-bundle-oh-nativebundle-abilityresourceinfo/x-native-bundle-oh-nativebundle-abilityresourceinfo",
              children: "OH_NativeBundle_AbilityResourceInfo"
            }), "的大小。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getbundlename",
      children: "OH_NativeBundle_GetBundleName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_GetBundleName(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** bundleName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取组件的包名。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char** bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的包名。"
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getmodulename",
      children: "OH_NativeBundle_GetModuleName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_GetModuleName(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** moduleName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取组件的模块名。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char** moduleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的模块名。"
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getabilityname",
      children: "OH_NativeBundle_GetAbilityName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_GetAbilityName(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** abilityName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取组件名。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char** abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的组件名。"
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getdrawabledescriptor",
      children: "OH_NativeBundle_GetDrawableDescriptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_GetDrawableDescriptor(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, ArkUI_DrawableDescriptor** drawableIcon)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取组件图标资源对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor",
        children: "DrawableDescriptor"
      }), "对象。在使用该接口之后，为了防止内存泄漏，需要手动调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_abilityresourceinfo_destroy",
        children: "OH_AbilityResourceInfo_Destroy"
      }), "释放接口返回的指针。"]
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_DrawableDescriptor** drawableIcon"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件图标资源对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-drawabledescriptor/capi-arkui-nativemodule-arkui-drawabledescriptor",
              children: "DrawableDescriptor"
            }), "对象。"]
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getlabel",
      children: "OH_NativeBundle_GetLabel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_GetLabel(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, char** label)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取组件的应用名称。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char** label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的应用名称。"
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getappindex",
      children: "OH_NativeBundle_GetAppIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_GetAppIndex(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, int* appIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取组件的分身索引。"
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int* appIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的分身索引。"
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_checkdefaultapp",
      children: "OH_NativeBundle_CheckDefaultApp()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_CheckDefaultApp(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, bool* isDefault)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询组件所属的应用是否为默认应用。"
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isDefault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件所属的应用是否为默认应用，默认应用是指用户为特定文件类型或操作设定的首选应用。取值true为默认应用，false为非默认应用。"
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果查询成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果查询失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_abilityresourceinfo_destroy",
      children: "OH_AbilityResourceInfo_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_AbilityResourceInfo_Destroy(OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo, size_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放组件资源信息的内存。"
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
            children: "OH_NativeBundle_AbilityResourceInfo* abilityResourceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的组件资源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示组件资源信息数组的大小。"
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
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BundleManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  如果释放成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果释放失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PARAM_INVALID"
            }), "，这是由于abilityResourceInfo为空指针所致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getsize",
      children: "OH_NativeBundle_GetSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_NativeBundle_GetSize()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取单个结构体", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-struct/x-native-bundle-oh-nativebundle-abilityresourceinfo/x-native-bundle-oh-nativebundle-abilityresourceinfo",
        children: "OH_NativeBundle_AbilityResourceInfo"
      }), "的大小。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回单个结构体", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/x-native-bundle-oh-nativebundle-abilityresourceinfo/x-native-bundle-oh-nativebundle-abilityresourceinfo",
              children: "OH_NativeBundle_AbilityResourceInfo"
            }), "的大小。"]
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