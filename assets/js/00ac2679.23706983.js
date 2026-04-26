"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["740680"], {
113867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_oh_display_manager_h_capi_oh_display_manager_h_md_00a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-headerfile-capi-oh-display-manager-h-capi-oh-display-manager-h-md-00a.json
var site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_oh_display_manager_h_capi_oh_display_manager_h_md_00a_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h","title":"oh_display_manager.h","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h.md","sourceDirName":"arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h","slug":"/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"oh_display_manager.h","sidebar_position":24,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-display-manager-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-display-manager-h"},"sidebar":"ref","previous":{"title":"oh_display_info.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h"},"next":{"title":"ArkUI_NodeEvent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodeevent/capi-arkui-nativemodule-arkui-nodeevent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h.md


const frontMatter = {
	title: 'oh_display_manager.h',
	sidebar_position: 24,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-display-manager-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-display-manager-h'
};
const contentTitle = 'oh_display_manager.h';

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
  "value": "OH_NativeDisplayManager_GetDefaultDisplayId()",
  "id": "oh_nativedisplaymanager_getdefaultdisplayid",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayWidth()",
  "id": "oh_nativedisplaymanager_getdefaultdisplaywidth",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayHeight()",
  "id": "oh_nativedisplaymanager_getdefaultdisplayheight",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayRotation()",
  "id": "oh_nativedisplaymanager_getdefaultdisplayrotation",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayOrientation()",
  "id": "oh_nativedisplaymanager_getdefaultdisplayorientation",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayVirtualPixelRatio()",
  "id": "oh_nativedisplaymanager_getdefaultdisplayvirtualpixelratio",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayRefreshRate()",
  "id": "oh_nativedisplaymanager_getdefaultdisplayrefreshrate",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayDensityDpi()",
  "id": "oh_nativedisplaymanager_getdefaultdisplaydensitydpi",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayDensityPixels()",
  "id": "oh_nativedisplaymanager_getdefaultdisplaydensitypixels",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayScaledDensity()",
  "id": "oh_nativedisplaymanager_getdefaultdisplayscaleddensity",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayDensityXdpi()",
  "id": "oh_nativedisplaymanager_getdefaultdisplaydensityxdpi",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDefaultDisplayDensityYdpi()",
  "id": "oh_nativedisplaymanager_getdefaultdisplaydensityydpi",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo()",
  "id": "oh_nativedisplaymanager_createdefaultdisplaycutoutinfo",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_DestroyDefaultDisplayCutoutInfo()",
  "id": "oh_nativedisplaymanager_destroydefaultdisplaycutoutinfo",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_IsFoldable()",
  "id": "oh_nativedisplaymanager_isfoldable",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetFoldDisplayMode()",
  "id": "oh_nativedisplaymanager_getfolddisplaymode",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_DisplayChangeCallback()",
  "id": "oh_nativedisplaymanager_displaychangecallback",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_RegisterDisplayChangeListener()",
  "id": "oh_nativedisplaymanager_registerdisplaychangelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_UnregisterDisplayChangeListener()",
  "id": "oh_nativedisplaymanager_unregisterdisplaychangelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_FoldDisplayModeChangeCallback()",
  "id": "oh_nativedisplaymanager_folddisplaymodechangecallback",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener()",
  "id": "oh_nativedisplaymanager_registerfolddisplaymodechangelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener()",
  "id": "oh_nativedisplaymanager_unregisterfolddisplaymodechangelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_CreateAllDisplays()",
  "id": "oh_nativedisplaymanager_createalldisplays",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_DestroyAllDisplays()",
  "id": "oh_nativedisplaymanager_destroyalldisplays",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_CreateDisplayById()",
  "id": "oh_nativedisplaymanager_createdisplaybyid",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_DestroyDisplay()",
  "id": "oh_nativedisplaymanager_destroydisplay",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_CreatePrimaryDisplay()",
  "id": "oh_nativedisplaymanager_createprimarydisplay",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_AvailableAreaChangeCallback()",
  "id": "oh_nativedisplaymanager_availableareachangecallback",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_RegisterAvailableAreaChangeListener()",
  "id": "oh_nativedisplaymanager_registeravailableareachangelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_UnregisterAvailableAreaChangeListener()",
  "id": "oh_nativedisplaymanager_unregisteravailableareachangelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_CreateAvailableArea()",
  "id": "oh_nativedisplaymanager_createavailablearea",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_DestroyAvailableArea()",
  "id": "oh_nativedisplaymanager_destroyavailablearea",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_DisplayAddCallback()",
  "id": "oh_nativedisplaymanager_displayaddcallback",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_RegisterDisplayAddListener()",
  "id": "oh_nativedisplaymanager_registerdisplayaddlistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_UnregisterDisplayAddListener()",
  "id": "oh_nativedisplaymanager_unregisterdisplayaddlistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_DisplayRemoveCallback()",
  "id": "oh_nativedisplaymanager_displayremovecallback",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_RegisterDisplayRemoveListener()",
  "id": "oh_nativedisplaymanager_registerdisplayremovelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_UnregisterDisplayRemoveListener()",
  "id": "oh_nativedisplaymanager_unregisterdisplayremovelistener",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDisplaySourceMode()",
  "id": "oh_nativedisplaymanager_getdisplaysourcemode",
  "level": 3
}, {
  "value": "OH_NativeDisplayManager_GetDisplayPosition()",
  "id": "oh_nativedisplaymanager_getdisplayposition",
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
        id: "oh_display_managerh",
        children: "oh_display_manager.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供屏幕管理的一些基础能力，包括获取默认显示设备的信息，以及监听显示设备的旋转、折叠、展开等状态变化的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <window_manager/oh_display_manager.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_display_manager.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.WindowManager.WindowManager.Core"]
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
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-displaymanager/capi-oh-displaymanager",
        children: "OH_DisplayManager"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativedisplaymanager_getdefaultdisplayid",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayId(uint64_t *displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的id号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplaywidth",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayWidth(int32_t *displayWidth)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplayheight",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayHeight(int32_t *displayHeight)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplayrotation",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayRotation(NativeDisplayManager_Rotation *displayRotation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的顺时针旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplayorientation",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayOrientation(NativeDisplayManager_Orientation *displayOrientation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的旋转方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplayvirtualpixelratio",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayVirtualPixelRatio(float *virtualPixels)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的虚拟像素密度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplayrefreshrate",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayRefreshRate(uint32_t *refreshRate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的刷新率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplaydensitydpi",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityDpi(int32_t *densityDpi)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取屏幕的物理像素密度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplaydensitypixels",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityPixels(float *densityPixels)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取屏幕逻辑像素的密度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplayscaleddensity",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayScaledDensity(float *scaledDensity)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取屏幕显示字体的缩放因子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplaydensityxdpi",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityXdpi(float *xDpi)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取屏幕X方向中每英寸屏幕的物理像素值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdefaultdisplaydensityydpi",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityYdpi(float *yDpi)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Y方向中每英寸屏幕的物理像素值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_createdefaultdisplaycutoutinfo",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo(NativeDisplayManager_CutoutInfo **cutoutInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_destroydefaultdisplaycutoutinfo",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_DestroyDefaultDisplayCutoutInfo(NativeDisplayManager_CutoutInfo *cutoutInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_isfoldable",
              children: "bool OH_NativeDisplayManager_IsFoldable()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备是否可折叠。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getfolddisplaymode",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetFoldDisplayMode(NativeDisplayManager_FoldDisplayMode *displayMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取可折叠设备的显示模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_displaychangecallback",
              children: "typedef void (*OH_NativeDisplayManager_DisplayChangeCallback)(uint64_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_DisplayChangeCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕状态变化的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_registerdisplaychangelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterDisplayChangeListener(OH_NativeDisplayManager_DisplayChangeCallback displayChangeCallback, uint32_t *listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕状态变化监听（如旋转变化、刷新率、DPI、分辨率等变化）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_unregisterdisplaychangelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterDisplayChangeListener(uint32_t listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消屏幕状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_folddisplaymodechangecallback",
              children: "typedef void (*OH_NativeDisplayManager_FoldDisplayModeChangeCallback)(NativeDisplayManager_FoldDisplayMode displayMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_FoldDisplayModeChangeCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕展开、折叠状态变化的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_registerfolddisplaymodechangelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener(OH_NativeDisplayManager_FoldDisplayModeChangeCallback displayModeChangeCallback, uint32_t *listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕展开、折叠状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_unregisterfolddisplaymodechangelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener(uint32_t listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消屏幕展开、折叠状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_createalldisplays",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateAllDisplays(NativeDisplayManager_DisplaysInfo **allDisplays)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前所有屏幕信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_destroyalldisplays",
              children: "void OH_NativeDisplayManager_DestroyAllDisplays(NativeDisplayManager_DisplaysInfo *allDisplays)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁所有屏幕的信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_createdisplaybyid",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateDisplayById(uint32_t displayId,NativeDisplayManager_DisplayInfo **displayInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定屏幕的信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_destroydisplay",
              children: "void OH_NativeDisplayManager_DestroyDisplay(NativeDisplayManager_DisplayInfo *displayInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁指定屏幕的信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_createprimarydisplay",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreatePrimaryDisplay(NativeDisplayManager_DisplayInfo **displayInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取主屏信息对象。除2in1之外的设备获取的是设备自带屏幕的屏幕信息；2in1设备外接屏幕时获取的是当前主屏幕的屏幕信息；2in1设备没有外接屏幕时获取的是自带屏幕的屏幕信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_availableareachangecallback",
              children: "typedef void (*OH_NativeDisplayManager_AvailableAreaChangeCallback)(uint64_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_AvailableAreaChangeCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕可用区域变化的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_registeravailableareachangelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterAvailableAreaChangeListener(OH_NativeDisplayManager_AvailableAreaChangeCallback availableAreaChangeCallback, uint32_t *listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕可用区域变化监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_unregisteravailableareachangelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterAvailableAreaChangeListener(uint32_t listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消屏幕可用区域变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_createavailablearea",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateAvailableArea(uint64_t displayId, NativeDisplayManager_Rect **availableArea)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取屏幕的可用区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_destroyavailablearea",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_DestroyAvailableArea(NativeDisplayManager_Rect *availableArea)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁屏幕的可用区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_displayaddcallback",
              children: "typedef void (*OH_NativeDisplayManager_DisplayAddCallback)(uint64_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_DisplayAddCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕连接的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_registerdisplayaddlistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterDisplayAddListener(OH_NativeDisplayManager_DisplayAddCallback displayAddCallback, uint32_t *listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕连接变化监听（如插入显示器）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_unregisterdisplayaddlistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterDisplayAddListener(uint32_t listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消屏幕连接的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_displayremovecallback",
              children: "typedef void (*OH_NativeDisplayManager_DisplayRemoveCallback)(uint64_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_DisplayRemoveCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕移除的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_registerdisplayremovelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterDisplayRemoveListener(OH_NativeDisplayManager_DisplayRemoveCallback displayRemoveCallback, uint32_t *listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕移除变化监听（如移除显示器）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_unregisterdisplayremovelistener",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterDisplayRemoveListener(uint32_t listenerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消屏幕移除的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdisplaysourcemode",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDisplaySourceMode(uint64_t displayId, NativeDisplayManager_SourceMode *sourceMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取屏幕的显示模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativedisplaymanager_getdisplayposition",
              children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDisplayPosition(uint64_t displayId, int32_t *x, int32_t *y)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取屏幕的位置信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplayid",
      children: "OH_NativeDisplayManager_GetDefaultDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayId(uint64_t *displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认屏幕的id号。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认屏幕的id号，非负整数，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplaywidth",
      children: "OH_NativeDisplayManager_GetDefaultDisplayWidth()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayWidth(int32_t *displayWidth)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认屏幕的宽度。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *displayWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认屏幕的宽度，单位为px，该参数应为整数，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplayheight",
      children: "OH_NativeDisplayManager_GetDefaultDisplayHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayHeight(int32_t *displayHeight)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认屏幕的高度。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *displayHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认屏幕的高度，单位为px，该参数应为整数，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplayrotation",
      children: "OH_NativeDisplayManager_GetDefaultDisplayRotation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayRotation(NativeDisplayManager_Rotation *displayRotation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认屏幕的顺时针旋转角度。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "NativeDisplayManager_Rotation"
            }), " *displayRotation"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认屏幕的顺时针旋转角度，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "NativeDisplayManager_Rotation"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplayorientation",
      children: "OH_NativeDisplayManager_GetDefaultDisplayOrientation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayOrientation(NativeDisplayManager_Orientation *displayOrientation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认屏幕的旋转方向。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_orientation",
              children: "NativeDisplayManager_Orientation"
            }), " *displayOrientation"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕当前显示的方向，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_orientation",
              children: "NativeDisplayManager_Orientation"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplayvirtualpixelratio",
      children: "OH_NativeDisplayManager_GetDefaultDisplayVirtualPixelRatio()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayVirtualPixelRatio(float *virtualPixels)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认屏幕的虚拟像素密度。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *virtualPixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕的虚拟像素密度，该参数为浮点数，通常与densityPixels相同，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplayrefreshrate",
      children: "OH_NativeDisplayManager_GetDefaultDisplayRefreshRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayRefreshRate(uint32_t *refreshRate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取默认屏幕的刷新率。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *refreshRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕的刷新率，该参数应为整数，单位为Hz，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplaydensitydpi",
      children: "OH_NativeDisplayManager_GetDefaultDisplayDensityDpi()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityDpi(int32_t *densityDpi)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取屏幕的物理像素密度。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *densityDpi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕的物理像素密度，表示每英寸上的像素点数。该参数为整数，单位为px，实际能取到的值取决于不同设备设置里提供的可选值。此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplaydensitypixels",
      children: "OH_NativeDisplayManager_GetDefaultDisplayDensityPixels()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityPixels(float *densityPixels)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取屏幕逻辑像素的密度。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *densityPixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备逻辑像素的密度，代表物理像素与逻辑像素的缩放系数，该参数为浮点数，受densityDPI范围限制，取值范围在[0.5，4.0]。一般取值1.0、3.0等，实际取值取决于不同设备提供的densityDpi。此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplayscaleddensity",
      children: "OH_NativeDisplayManager_GetDefaultDisplayScaledDensity()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayScaledDensity(float *scaledDensity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取屏幕显示字体的缩放因子。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *scaledDensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示字体的缩放因子，该参数为浮点数，通常与densityPixels相同，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplaydensityxdpi",
      children: "OH_NativeDisplayManager_GetDefaultDisplayDensityXdpi()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityXdpi(float *xDpi)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取屏幕X方向中每英寸屏幕的物理像素值。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *xDpi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X方向中每英寸屏幕的物理像素值，该参数为浮点数，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdefaultdisplaydensityydpi",
      children: "OH_NativeDisplayManager_GetDefaultDisplayDensityYdpi()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDefaultDisplayDensityYdpi(float *yDpi)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取Y方向中每英寸屏幕的物理像素值。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *yDpi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Y方向中每英寸屏幕的物理像素值，该参数为浮点数，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_createdefaultdisplaycutoutinfo",
      children: "OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo(NativeDisplayManager_CutoutInfo **cutoutInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-cutoutinfo/capi-nativedisplaymanager-cutoutinfo",
              children: "NativeDisplayManager_CutoutInfo"
            }), " **cutoutInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-cutoutinfo/capi-nativedisplaymanager-cutoutinfo",
              children: "NativeDisplayManager_CutoutInfo"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_destroydefaultdisplaycutoutinfo",
      children: "OH_NativeDisplayManager_DestroyDefaultDisplayCutoutInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_DestroyDefaultDisplayCutoutInfo(NativeDisplayManager_CutoutInfo *cutoutInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-cutoutinfo/capi-nativedisplaymanager-cutoutinfo",
              children: "NativeDisplayManager_CutoutInfo"
            }), " *cutoutInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_createdefaultdisplaycutoutinfo",
              children: "OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo"
            }), "接口获取的挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息对象，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-cutoutinfo/capi-nativedisplaymanager-cutoutinfo",
              children: "NativeDisplayManager_CutoutInfo"
            }), "。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_isfoldable",
      children: "OH_NativeDisplayManager_IsFoldable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_NativeDisplayManager_IsFoldable()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询设备是否可折叠。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "返回查询设备是否可折叠的结果。true表示设备可折叠，false表示设备不可折叠。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getfolddisplaymode",
      children: "OH_NativeDisplayManager_GetFoldDisplayMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetFoldDisplayMode(NativeDisplayManager_FoldDisplayMode *displayMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取可折叠设备的显示模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在2in1设备、非折叠设备中返回0，在其他设备中可正常调用。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_folddisplaymode",
              children: "NativeDisplayManager_FoldDisplayMode"
            }), " *displayMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["折叠设备当前的显示模式，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_folddisplaymode",
              children: "NativeDisplayManager_FoldDisplayMode"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_displaychangecallback",
      children: "OH_NativeDisplayManager_DisplayChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NativeDisplayManager_DisplayChangeCallback)(uint64_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕状态变化的回调函数。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕状态发生变化的编号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_registerdisplaychangelistener",
      children: "OH_NativeDisplayManager_RegisterDisplayChangeListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterDisplayChangeListener(OH_NativeDisplayManager_DisplayChangeCallback displayChangeCallback, uint32_t *listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕状态变化监听（如旋转变化、刷新率、DPI、分辨率等变化）。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_displaychangecallback",
              children: "OH_NativeDisplayManager_DisplayChangeCallback"
            }), " displayChangeCallback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕状态变化后触发的回调函数，回调函数定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_displaychangecallback",
              children: "OH_NativeDisplayManager_DisplayChangeCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册成功后返回的监听编号，调用取消注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_unregisterdisplaychangelistener",
              children: "OH_NativeDisplayManager_UnregisterDisplayChangeListener"
            }), "时作为入参使用，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_unregisterdisplaychangelistener",
      children: "OH_NativeDisplayManager_UnregisterDisplayChangeListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterDisplayChangeListener(uint32_t listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消屏幕状态变化的监听。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_registerdisplaychangelistener",
              children: "OH_NativeDisplayManager_RegisterDisplayChangeListener"
            }), "时获取到的监听编号。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_folddisplaymodechangecallback",
      children: "OH_NativeDisplayManager_FoldDisplayModeChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NativeDisplayManager_FoldDisplayModeChangeCallback)(NativeDisplayManager_FoldDisplayMode displayMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕展开、折叠状态变化的回调函数。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_folddisplaymode",
              children: "NativeDisplayManager_FoldDisplayMode"
            }), " displayMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["折叠/展开动作执行后屏幕的状态，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_folddisplaymode",
              children: "NativeDisplayManager_FoldDisplayMode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_registerfolddisplaymodechangelistener",
      children: "OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener(OH_NativeDisplayManager_FoldDisplayModeChangeCallback displayModeChangeCallback, uint32_t *listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕展开、折叠状态变化的监听。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_folddisplaymodechangecallback",
              children: "OH_NativeDisplayManager_FoldDisplayModeChangeCallback"
            }), " displayModeChangeCallback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕展开和折叠变化后触发的回调函数，回调函数定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_folddisplaymodechangecallback",
              children: "OH_NativeDisplayManager_FoldDisplayModeChangeCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册成功后返回的监听编号，调用取消注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_unregisterfolddisplaymodechangelistener",
              children: "OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener"
            }), "时作为入参使用，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_unregisterfolddisplaymodechangelistener",
      children: "OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener(uint32_t listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消屏幕展开、折叠状态变化的监听。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_registerfolddisplaymodechangelistener",
              children: "OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener"
            }), "时获取到的监听编号。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_createalldisplays",
      children: "OH_NativeDisplayManager_CreateAllDisplays()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateAllDisplays(NativeDisplayManager_DisplaysInfo **allDisplays)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前所有屏幕信息对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displaysinfo/capi-nativedisplaymanager-displaysinfo",
              children: "NativeDisplayManager_DisplaysInfo"
            }), " **allDisplays"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前所有的屏幕信息，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displaysinfo/capi-nativedisplaymanager-displaysinfo",
              children: "NativeDisplayManager_DisplaysInfo"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_destroyalldisplays",
      children: "OH_NativeDisplayManager_DestroyAllDisplays()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeDisplayManager_DestroyAllDisplays(NativeDisplayManager_DisplaysInfo *allDisplays)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁所有屏幕的信息对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displaysinfo/capi-nativedisplaymanager-displaysinfo",
              children: "NativeDisplayManager_DisplaysInfo"
            }), " *allDisplays"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_createalldisplays",
              children: "OH_NativeDisplayManager_CreateAllDisplays"
            }), "接口获取的所有的屏幕信息，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displaysinfo/capi-nativedisplaymanager-displaysinfo",
              children: "NativeDisplayManager_DisplaysInfo"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_createdisplaybyid",
      children: "OH_NativeDisplayManager_CreateDisplayById()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateDisplayById(uint32_t displayId,NativeDisplayManager_DisplayInfo **displayInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定屏幕的信息对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
            children: "uint32_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定屏幕的id编号，该值为非负整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displayinfo/capi-nativedisplaymanager-displayinfo",
              children: "NativeDisplayManager_DisplayInfo"
            }), " **displayInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的屏幕信息对象，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displayinfo/capi-nativedisplaymanager-displayinfo",
              children: "NativeDisplayManager_DisplayInfo"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_destroydisplay",
      children: "OH_NativeDisplayManager_DestroyDisplay()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeDisplayManager_DestroyDisplay(NativeDisplayManager_DisplayInfo *displayInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁指定屏幕的信息对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displayinfo/capi-nativedisplaymanager-displayinfo",
              children: "NativeDisplayManager_DisplayInfo"
            }), " *displayInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_createdisplaybyid",
              children: "OH_NativeDisplayManager_CreateDisplayById"
            }), "或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_createprimarydisplay",
              children: "OH_NativeDisplayManager_CreatePrimaryDisplay"
            }), "接口获取到的屏幕信息，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displayinfo/capi-nativedisplaymanager-displayinfo",
              children: "NativeDisplayManager_DisplayInfo"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_createprimarydisplay",
      children: "OH_NativeDisplayManager_CreatePrimaryDisplay()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreatePrimaryDisplay(NativeDisplayManager_DisplayInfo **displayInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取主屏信息对象。除2in1之外的设备获取的是设备自带屏幕的屏幕信息；2in1设备外接屏幕时获取的是当前主屏幕的屏幕信息；2in1设备没有外接屏幕时获取的是自带屏幕的屏幕信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displayinfo/capi-nativedisplaymanager-displayinfo",
              children: "NativeDisplayManager_DisplayInfo"
            }), " **displayInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主屏的屏幕信息对象，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-displayinfo/capi-nativedisplaymanager-displayinfo",
              children: "NativeDisplayManager_DisplayInfo"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_availableareachangecallback",
      children: "OH_NativeDisplayManager_AvailableAreaChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NativeDisplayManager_AvailableAreaChangeCallback)(uint64_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕可用区域变化的回调函数。"
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
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕的id号，非负整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_registeravailableareachangelistener",
      children: "OH_NativeDisplayManager_RegisterAvailableAreaChangeListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterAvailableAreaChangeListener(OH_NativeDisplayManager_AvailableAreaChangeCallback availableAreaChangeCallback, uint32_t *listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕可用区域变化监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在2in1设备、Tablet设备中可正常调用，在其他设备中不生效也不报错。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_availableareachangecallback",
              children: "OH_NativeDisplayManager_AvailableAreaChangeCallback"
            }), " availableAreaChangeCallback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕可用区域变化后触发的回调函数，  回调函数定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_availableareachangecallback",
              children: "OH_NativeDisplayManager_AvailableAreaChangeCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册成功后返回的监听编号，  调用取消注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_unregisteravailableareachangelistener",
              children: "OH_NativeDisplayManager_UnregisterAvailableAreaChangeListener"
            }), "时作为入参使用，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_unregisteravailableareachangelistener",
      children: "OH_NativeDisplayManager_UnregisterAvailableAreaChangeListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterAvailableAreaChangeListener(uint32_t listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消屏幕可用区域变化的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在2in1设备、Tablet设备中可正常调用，在其他设备中不生效也不报错。"]
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
            children: "uint32_t listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用注册函数  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_registeravailableareachangelistener",
              children: "OH_NativeDisplayManager_RegisterAvailableAreaChangeListener"
            }), "时获取到的监听编号。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_createavailablearea",
      children: "OH_NativeDisplayManager_CreateAvailableArea()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_CreateAvailableArea(uint64_t displayId, NativeDisplayManager_Rect **availableArea)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取屏幕的可用区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在2in1设备、Tablet设备中可正常调用；在其他设备中不可用，请通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativedisplaymanager_getdefaultdisplaywidth",
        children: "OH_NativeDisplayManager_GetDefaultDisplayWidth()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativedisplaymanager_getdefaultdisplayheight",
        children: "OH_NativeDisplayManager_GetDefaultDisplayHeight()"
      }), "获取当前设备屏幕的可用区域。"]
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
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询屏幕的id号，非负整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-rect/capi-nativedisplaymanager-rect",
              children: "NativeDisplayManager_Rect"
            }), " **availableArea"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕可用区域，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-rect/capi-nativedisplaymanager-rect",
              children: "NativeDisplayManager_Rect"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_destroyavailablearea",
      children: "OH_NativeDisplayManager_DestroyAvailableArea()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_DestroyAvailableArea(NativeDisplayManager_Rect *availableArea)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁屏幕的可用区域。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-rect/capi-nativedisplaymanager-rect",
              children: "NativeDisplayManager_Rect"
            }), " *availableArea"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_createavailablearea",
              children: "OH_NativeDisplayManager_CreateAvailableArea"
            }), "获取的屏幕可用区域，  可用区域定义具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-nativedisplaymanager-rect/capi-nativedisplaymanager-rect",
              children: "NativeDisplayManager_Rect"
            }), "。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_displayaddcallback",
      children: "OH_NativeDisplayManager_DisplayAddCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NativeDisplayManager_DisplayAddCallback)(uint64_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕连接的回调函数。"
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
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增屏幕的id号，非负整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_registerdisplayaddlistener",
      children: "OH_NativeDisplayManager_RegisterDisplayAddListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterDisplayAddListener(OH_NativeDisplayManager_DisplayAddCallback displayAddCallback, uint32_t *listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕连接变化监听（如插入显示器）。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_displayaddcallback",
              children: "OH_NativeDisplayManager_DisplayAddCallback"
            }), " displayAddCallback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕连接后触发的回调函数，回调函数定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_displayaddcallback",
              children: "OH_NativeDisplayManager_DisplayAddCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册成功后返回的监听编号，  调用取消注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_unregisterdisplayaddlistener",
              children: "OH_NativeDisplayManager_UnregisterDisplayAddListener"
            }), "时作为入参使用，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_unregisterdisplayaddlistener",
      children: "OH_NativeDisplayManager_UnregisterDisplayAddListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterDisplayAddListener(uint32_t listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消屏幕连接的监听。"
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
            children: "uint32_t listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_registerdisplayaddlistener",
              children: "OH_NativeDisplayManager_RegisterDisplayAddListener"
            }), "时获取到的监听编号。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_displayremovecallback",
      children: "OH_NativeDisplayManager_DisplayRemoveCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NativeDisplayManager_DisplayRemoveCallback)(uint64_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕移除的回调函数。"
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
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被移除屏幕的id号，非负整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_registerdisplayremovelistener",
      children: "OH_NativeDisplayManager_RegisterDisplayRemoveListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_RegisterDisplayRemoveListener(OH_NativeDisplayManager_DisplayRemoveCallback displayRemoveCallback, uint32_t *listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册屏幕移除变化监听（如移除显示器）。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_displayremovecallback",
              children: "OH_NativeDisplayManager_DisplayRemoveCallback"
            }), " displayRemoveCallback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕移除后触发的回调函数，回调函数定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_displayremovecallback",
              children: "OH_NativeDisplayManager_DisplayRemoveCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册成功后返回的监听编号，  调用取消注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_unregisterdisplayremovelistener",
              children: "OH_NativeDisplayManager_UnregisterDisplayRemoveListener"
            }), "时作为入参使用，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_unregisterdisplayremovelistener",
      children: "OH_NativeDisplayManager_UnregisterDisplayRemoveListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_UnregisterDisplayRemoveListener(uint32_t listenerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消屏幕移除的监听。"
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
            children: "uint32_t listenerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["调用注册函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_registerdisplayremovelistener",
              children: "OH_NativeDisplayManager_RegisterDisplayRemoveListener"
            }), "时获取到的监听编号。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdisplaysourcemode",
      children: "OH_NativeDisplayManager_GetDisplaySourceMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDisplaySourceMode(uint64_t displayId, NativeDisplayManager_SourceMode *sourceMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取屏幕的显示模式，默认值为DisplaySourceMode.None。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询屏幕的id号，非负整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_sourcemode",
              children: "NativeDisplayManager_SourceMode"
            }), " *sourceMode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["屏幕当前的显示模式，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_sourcemode",
              children: "NativeDisplayManager_SourceMode"
            }), "，此处作为出参返回。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativedisplaymanager_getdisplayposition",
      children: "OH_NativeDisplayManager_GetDisplayPosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeDisplayManager_ErrorCode OH_NativeDisplayManager_GetDisplayPosition(uint64_t displayId, int32_t *x, int32_t *y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取屏幕的位置信息，即相对于原点（主屏左上角）的x坐标和y坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅当屏幕当前的显示模式为DISPLAY_SOURCE_MODE_MAIN或DISPLAY_SOURCE_MODE_EXTEND时返回实际值，其余默认返回0。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["屏幕的显示模式可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativedisplaymanager_getdisplaysourcemode",
        children: "OH_NativeDisplayManager_GetDisplaySourceMode()"
      }), "接口获取。"]
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
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询屏幕的id号，非负整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对于主屏左上角的x方向坐标，单位为px，该参数应为整数，此处作为出参返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对于主屏左上角的y方向坐标，单位为px，该参数应为整数，此处作为出参返回。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回屏幕管理接口的通用状态码，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_errorcode",
              children: "NativeDisplayManager_ErrorCode"
            }), "。  当前仅支持主屏幕和扩展屏幕查询屏幕位置信息，其他屏幕查询会返回DISPLAY_MANAGER_ERROR_ILLEGAL_PARAM。"]
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