"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["551640"], {
736394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_c_ability_headerfile_capi_native_interface_bundle_h_capi_native_interface_bundle_h_md_ad0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-c-ability-headerfile-capi-native-interface-bundle-h-capi-native-interface-bundle-h-md-ad0.json
var site_docs_ref_ability_api_ability_c_ability_headerfile_capi_native_interface_bundle_h_capi_native_interface_bundle_h_md_ad0_namespaceObject = JSON.parse('{"id":"ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h","title":"native_interface_bundle.h","description":"概述","source":"@site/docs-ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h.md","sourceDirName":"ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h","slug":"/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"native_interface_bundle.h","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-bundle-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-native-interface-bundle-h"},"sidebar":"ref","previous":{"title":"native_child_process.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h"},"next":{"title":"start_options.h","permalink":"/harmonyos-docs-site/ref/ability-api/ability-c/ability-headerfile/capi-start-options-h/capi-start-options-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h.md


const frontMatter = {
	title: 'native_interface_bundle.h',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-bundle-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-native-interface-bundle-h'
};
const contentTitle = 'native_interface_bundle.h';

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
  "value": "OH_NativeBundle_GetCurrentApplicationInfo()",
  "id": "oh_nativebundle_getcurrentapplicationinfo",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetAppId()",
  "id": "oh_nativebundle_getappid",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetAppIdentifier()",
  "id": "oh_nativebundle_getappidentifier",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetMainElementName()",
  "id": "oh_nativebundle_getmainelementname",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetCompatibleDeviceType()",
  "id": "oh_nativebundle_getcompatibledevicetype",
  "level": 3
}, {
  "value": "OH_NativeBundle_IsDebugMode()",
  "id": "oh_nativebundle_isdebugmode",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetModuleMetadata()",
  "id": "oh_nativebundle_getmodulemetadata",
  "level": 3
}, {
  "value": "OH_NativeBundle_GetAbilityResourceInfo()",
  "id": "oh_nativebundle_getabilityresourceinfo",
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
        id: "native_interface_bundleh",
        children: "native_interface_bundle.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供查询应用包信息的功能，包括应用包名、应用指纹、应用appId等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <bundle/native_interface_bundle.h>"]
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
      }), " 9"]
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-applicationinfo/capi-native-bundle-oh-nativebundle-applicationinfo",
              children: "OH_NativeBundle_ApplicationInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBundle_ApplicationInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用包信息数据结构，包含应用包名和应用指纹信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-elementname/capi-native-bundle-oh-nativebundle-elementname",
              children: "OH_NativeBundle_ElementName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBundle_ElementName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "elementName信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-metadata/capi-native-bundle-oh-nativebundle-metadata",
              children: "OH_NativeBundle_Metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBundle_Metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-modulemetadata/capi-native-bundle-oh-nativebundle-modulemetadata",
              children: "OH_NativeBundle_ModuleMetadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBundle_ModuleMetadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块元数据的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativebundle_getcurrentapplicationinfo",
              children: "OH_NativeBundle_ApplicationInfo OH_NativeBundle_GetCurrentApplicationInfo()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用信息，包含应用包名和应用指纹信息。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回对象下的字段的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getappid",
              children: "char* OH_NativeBundle_GetAppId()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用的appId。appId是应用的唯一标识，由应用包名和签名信息决定。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getappidentifier",
              children: "char* OH_NativeBundle_GetAppIdentifier()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用的应用程序标识符。该应用程序标识符在应用的整个生命周期中不会发生变化，包括版本更新、证书更改、公钥和私钥更改以及应用程序迁移。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getmainelementname",
              children: "OH_NativeBundle_ElementName OH_NativeBundle_GetMainElementName()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用入口元素mainElement的信息，包括包名、模块名和组件名。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回对象下的字段的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getcompatibledevicetype",
              children: "char* OH_NativeBundle_GetCompatibleDeviceType()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用适用的设备类型。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_isdebugmode",
              children: "bool OH_NativeBundle_IsDebugMode(bool* isDebugMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前应用的调试模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getmodulemetadata",
              children: "OH_NativeBundle_ModuleMetadata* OH_NativeBundle_GetModuleMetadata(size_t* size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用程序的模块元数据数组。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebundle_getabilityresourceinfo",
              children: "BundleManager_ErrorCode OH_NativeBundle_GetAbilityResourceInfo(char* fileType, OH_NativeBundle_AbilityResourceInfo** abilityResourceInfo, size_t* size)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取支持打开特定文件类型的组件资源信息列表。在使用完该接口之后，为了防止内存泄漏，需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h/capi-ability-resource-info-h#oh_abilityresourceinfo_destroy",
              children: "OH_AbilityResourceInfo_Destroy"
            }), "进行释放。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getcurrentapplicationinfo",
      children: "OH_NativeBundle_GetCurrentApplicationInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeBundle_ApplicationInfo OH_NativeBundle_GetCurrentApplicationInfo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用信息，包含应用包名和应用指纹信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-applicationinfo/capi-native-bundle-oh-nativebundle-applicationinfo",
              children: "OH_NativeBundle_ApplicationInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回新创建的OH_NativeBundle_ApplicationInfo对象。如果返回的对象为NULL，则表示创建失败。  失败的可能原因是应用程序地址空间已满，导致空间分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getappid",
      children: "OH_NativeBundle_GetAppId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* OH_NativeBundle_GetAppId()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用的appId。appId是应用的唯一标识，由应用包名和签名信息决定。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个新创建的字符串，用于指示appID信息。如果返回的对象为NULL，则表示创建失败。  失败的可能原因是应用程序地址空间已满，导致空间分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getappidentifier",
      children: "OH_NativeBundle_GetAppIdentifier()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* OH_NativeBundle_GetAppIdentifier()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用的应用程序标识符。该应用程序标识符在应用的整个生命周期中不会发生变化，包括版本更新、证书更改、公钥和私钥更改以及应用程序迁移。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个新创建的字符串，用于指示应用程序标识符信息。如果返回的对象为NULL，则表示创建失败。  失败的可能原因是应用程序地址空间已满，导致空间分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getmainelementname",
      children: "OH_NativeBundle_GetMainElementName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeBundle_ElementName OH_NativeBundle_GetMainElementName()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用入口元素mainElement的信息，包括包名、模块名和组件名，在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-elementname/capi-native-bundle-oh-nativebundle-elementname",
              children: "OH_NativeBundle_ElementName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回新创建的OH_NativeBundle_ElementName对象。如果返回的对象为NULL，则表示创建失败。  失败的可能原因是应用程序地址空间已满，导致空间分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getcompatibledevicetype",
      children: "OH_NativeBundle_GetCompatibleDeviceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* OH_NativeBundle_GetCompatibleDeviceType()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用适用的设备类型。用于将手机应用分发到平板/2in1设备时，合理适配布局和字体大小。在使用此接口后，为了避免内存泄漏，需要手动释放接口返回的指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
            children: "char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个新创建的字符串，用于指示兼容设备类型。如果返回的对象为NULL，则表示创建失败。  失败的可能原因是应用程序地址空间已满，导致空间分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_isdebugmode",
      children: "OH_NativeBundle_IsDebugMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_NativeBundle_IsDebugMode(bool* isDebugMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前应用是否处于调试模式。"
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
            children: "bool* isDebugMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示应用是否处于调试模式，取值为true表示可调试模式，取值为false表示不可调试模式。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果调用成功，则返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getmodulemetadata",
      children: "OH_NativeBundle_GetModuleMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeBundle_ModuleMetadata* OH_NativeBundle_GetModuleMetadata(size_t* size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用程序的模块元数据数组。在使用该接口之后，为了防止内存泄漏，需要手动释放接口返回的指针。"
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
            children: "size_t* size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示模块元数据数组大小。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/capi-native-bundle-oh-nativebundle-modulemetadata/capi-native-bundle-oh-nativebundle-modulemetadata",
              children: "OH_NativeBundle_ModuleMetadata"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回模块元数据数组，如果返回的对象为NULL，则表示获取失败。  失败的可能原因是应用程序地址空间已满，导致空间分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebundle_getabilityresourceinfo",
      children: "OH_NativeBundle_GetAbilityResourceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BundleManager_ErrorCode OH_NativeBundle_GetAbilityResourceInfo(char* fileType, OH_NativeBundle_AbilityResourceInfo** abilityResourceInfo, size_t* size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取支持打开特定文件类型的组件资源信息列表。在使用完该接口之后，为了防止内存泄漏，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-ability-resource-info-h/capi-ability-resource-info-h#oh_abilityresourceinfo_destroy",
        children: "OH_AbilityResourceInfo_Destroy"
      }), "进行释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.GET_ABILITY_INFO"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回201错误码。"]
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
            children: "char* fileType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示待查询的特定文件类型，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "UTD类型"
            }), "，比如：'general.plain-text'、'general.image'。目前也可以兼容使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.iana.org/assignments/media-types/media-types.xhtml?utm_source=ld246.com",
              children: "MIME type类型"
            }), "和文件后缀名称，如：'text/xml' 、 '.png'等。文件后缀与文件类型的映射关系参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-list",
              children: "UTD预置列表"
            }), "。不支持传'*/*'。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-struct/x-native-bundle-oh-nativebundle-abilityresourceinfo/x-native-bundle-oh-nativebundle-abilityresourceinfo",
              children: "OH_NativeBundle_AbilityResourceInfo"
            }), "** abilityResourceInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示返回的组件资源信息列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t* size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示返回的组件资源信息列表大小。"
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
            children: ["如果调用成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_NO_ERROR"
            }), "。  如果调用方没有正确的权限，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-bundle-manager-common-h/capi-bundle-manager-common-h#bundlemanager_errorcode",
              children: "BUNDLE_MANAGER_ERROR_CODE_PERMISSION_DENIED"
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