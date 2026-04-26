"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["735381"], {
559675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_interface_accessibility_h_capi_native_interface_accessibility_h_md_215_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-headerfile-capi-native-interface-accessibility-h-capi-native-interface-accessibility-h-md-215.json
var site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_interface_accessibility_h_capi_native_interface_accessibility_h_md_215_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h","title":"native_interface_accessibility.h","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h.md","sourceDirName":"arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h","slug":"/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"native_interface_accessibility.h","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-native-interface-accessibility-h"},"sidebar":"ref","previous":{"title":"native_interface.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h"},"next":{"title":"native_interface_focus.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-focus-h/capi-native-interface-focus-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h.md


const frontMatter = {
	title: 'native_interface_accessibility.h',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-native-interface-accessibility-h'
};
const contentTitle = 'native_interface_accessibility.h';

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
  "value": "ArkUI_Accessibility_ActionType",
  "id": "arkui_accessibility_actiontype",
  "level": 3
}, {
  "value": "ArkUI_AccessibilityEventType",
  "id": "arkui_accessibilityeventtype",
  "level": 3
}, {
  "value": "ArkUI_AcessbilityErrorCode",
  "id": "arkui_acessbilityerrorcode",
  "level": 3
}, {
  "value": "ArkUI_AccessibilitySearchMode",
  "id": "arkui_accessibilitysearchmode",
  "level": 3
}, {
  "value": "ArkUI_AccessibilityFocusType",
  "id": "arkui_accessibilityfocustype",
  "level": 3
}, {
  "value": "ArkUI_AccessibilityFocusMoveDirection",
  "id": "arkui_accessibilityfocusmovedirection",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ArkUI_AccessibilityProviderRegisterCallback()",
  "id": "oh_arkui_accessibilityproviderregistercallback",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance()",
  "id": "oh_arkui_accessibilityproviderregistercallbackwithinstance",
  "level": 3
}, {
  "value": "OH_ArkUI_SendAccessibilityAsyncEvent()",
  "id": "oh_arkui_sendaccessibilityasyncevent",
  "level": 3
}, {
  "value": "OH_ArkUI_AddAndGetAccessibilityElementInfo()",
  "id": "oh_arkui_addandgetaccessibilityelementinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetElementId()",
  "id": "oh_arkui_accessibilityelementinfosetelementid",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetParentId()",
  "id": "oh_arkui_accessibilityelementinfosetparentid",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetComponentType()",
  "id": "oh_arkui_accessibilityelementinfosetcomponenttype",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetContents()",
  "id": "oh_arkui_accessibilityelementinfosetcontents",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetHintText()",
  "id": "oh_arkui_accessibilityelementinfosethinttext",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetAccessibilityText()",
  "id": "oh_arkui_accessibilityelementinfosetaccessibilitytext",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetAccessibilityDescription()",
  "id": "oh_arkui_accessibilityelementinfosetaccessibilitydescription",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetChildNodeIds()",
  "id": "oh_arkui_accessibilityelementinfosetchildnodeids",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetOperationActions()",
  "id": "oh_arkui_accessibilityelementinfosetoperationactions",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetScreenRect()",
  "id": "oh_arkui_accessibilityelementinfosetscreenrect",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetCheckable()",
  "id": "oh_arkui_accessibilityelementinfosetcheckable",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetChecked()",
  "id": "oh_arkui_accessibilityelementinfosetchecked",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetFocusable()",
  "id": "oh_arkui_accessibilityelementinfosetfocusable",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetFocused()",
  "id": "oh_arkui_accessibilityelementinfosetfocused",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetVisible()",
  "id": "oh_arkui_accessibilityelementinfosetvisible",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetAccessibilityFocused()",
  "id": "oh_arkui_accessibilityelementinfosetaccessibilityfocused",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetSelected()",
  "id": "oh_arkui_accessibilityelementinfosetselected",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetClickable()",
  "id": "oh_arkui_accessibilityelementinfosetclickable",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetLongClickable()",
  "id": "oh_arkui_accessibilityelementinfosetlongclickable",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetEnabled()",
  "id": "oh_arkui_accessibilityelementinfosetenabled",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetIsPassword()",
  "id": "oh_arkui_accessibilityelementinfosetispassword",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetScrollable()",
  "id": "oh_arkui_accessibilityelementinfosetscrollable",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetEditable()",
  "id": "oh_arkui_accessibilityelementinfoseteditable",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetIsHint()",
  "id": "oh_arkui_accessibilityelementinfosetishint",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetRangeInfo()",
  "id": "oh_arkui_accessibilityelementinfosetrangeinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetGridInfo()",
  "id": "oh_arkui_accessibilityelementinfosetgridinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetGridItemInfo()",
  "id": "oh_arkui_accessibilityelementinfosetgriditeminfo",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetSelectedTextStart()",
  "id": "oh_arkui_accessibilityelementinfosetselectedtextstart",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetSelectedTextEnd()",
  "id": "oh_arkui_accessibilityelementinfosetselectedtextend",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetCurrentItemIndex()",
  "id": "oh_arkui_accessibilityelementinfosetcurrentitemindex",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetStartItemIndex()",
  "id": "oh_arkui_accessibilityelementinfosetstartitemindex",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetEndItemIndex()",
  "id": "oh_arkui_accessibilityelementinfosetenditemindex",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetItemCount()",
  "id": "oh_arkui_accessibilityelementinfosetitemcount",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetAccessibilityOffset()",
  "id": "oh_arkui_accessibilityelementinfosetaccessibilityoffset",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetAccessibilityGroup()",
  "id": "oh_arkui_accessibilityelementinfosetaccessibilitygroup",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetAccessibilityLevel()",
  "id": "oh_arkui_accessibilityelementinfosetaccessibilitylevel",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetZIndex()",
  "id": "oh_arkui_accessibilityelementinfosetzindex",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetAccessibilityOpacity()",
  "id": "oh_arkui_accessibilityelementinfosetaccessibilityopacity",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetBackgroundColor()",
  "id": "oh_arkui_accessibilityelementinfosetbackgroundcolor",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetBackgroundImage()",
  "id": "oh_arkui_accessibilityelementinfosetbackgroundimage",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetBlur()",
  "id": "oh_arkui_accessibilityelementinfosetblur",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityElementInfoSetHitTestBehavior()",
  "id": "oh_arkui_accessibilityelementinfosethittestbehavior",
  "level": 3
}, {
  "value": "OH_ArkUI_CreateAccessibilityElementInfo()",
  "id": "oh_arkui_createaccessibilityelementinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_DestoryAccessibilityElementInfo()",
  "id": "oh_arkui_destoryaccessibilityelementinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_CreateAccessibilityEventInfo()",
  "id": "oh_arkui_createaccessibilityeventinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_DestoryAccessibilityEventInfo()",
  "id": "oh_arkui_destoryaccessibilityeventinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityEventSetEventType()",
  "id": "oh_arkui_accessibilityeventseteventtype",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityEventSetTextAnnouncedForAccessibility()",
  "id": "oh_arkui_accessibilityeventsettextannouncedforaccessibility",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityEventSetRequestFocusId()",
  "id": "oh_arkui_accessibilityeventsetrequestfocusid",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityEventSetElementInfo()",
  "id": "oh_arkui_accessibilityeventsetelementinfo",
  "level": 3
}, {
  "value": "OH_ArkUI_FindAccessibilityActionArgumentByKey()",
  "id": "oh_arkui_findaccessibilityactionargumentbykey",
  "level": 3
}, {
  "value": "OH_ArkUI_NativeModule_GetNativeAccessibilityProvider()",
  "id": "oh_arkui_nativemodule_getnativeaccessibilityprovider",
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
        id: "native_interface_accessibilityh",
        children: "native_interface_accessibility.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于访问Native Accessibility的API，提供无障碍相关能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <arkui/native_interface_accessibility.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libace_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-arkui-accessibility/capi-arkui-accessibility",
        children: "ArkUI_Accessibility"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/AccessibilityCapi",
        children: "AccessibilityCapi"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessibleaction/capi-arkui-accessibility-arkui-accessibleaction",
              children: "ArkUI_AccessibleAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibleAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍操作内容结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessiblerect/capi-arkui-accessibility-arkui-accessiblerect",
              children: "ArkUI_AccessibleRect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibleRect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "节点所在坐标位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessiblerangeinfo/capi-arkui-accessibility-arkui-accessiblerangeinfo",
              children: "ArkUI_AccessibleRangeInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibleRangeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于特定组件设置组件的当前值、最大值、最小值，如Slider、Rating、Progress组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessiblegridinfo/capi-arkui-accessibility-arkui-accessiblegridinfo",
              children: "ArkUI_AccessibleGridInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibleGridInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于特定组件设置组件的行数、列数以及选择模式，如List、Flex、Select、Swiper组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessiblegriditeminfo/i-arkui-accessibility-arkui-accessiblegriditeminfo",
              children: "ArkUI_AccessibleGridItemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibleGridItemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于特定组件设置组件的属性值，如List、Flex、Select、Swiper组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/accessibility-arkui-accessibilityprovidercallbacks/accessibility-arkui-accessibilityprovidercallbacks",
              children: "ArkUI_AccessibilityProviderCallbacks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityProviderCallbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方操作provider回调函数结构定义，需要第三方平台实现的相关函数，通过OH_ArkUI_AccessibilityProviderRegisterCallback注册到系统侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance",
              children: "ArkUI_AccessibilityProviderCallbacksWithInstance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityProviderCallbacksWithInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适配多实例场景第三方操作provider回调函数结构定义，需要第三方平台实现的相关函数，通过OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance注册到系统侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityElementInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍节点信息，用于向无障碍服务、辅助应用（屏幕朗读）传递节点信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityEventInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍事件信息。当无障碍服务或辅助应用要求控件执行操作后，需要发送执行成功事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityProvider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该结构体为第三方操作提供者，用于承载回调函数的实现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-accessibility-arkui-accessibilityactionarguments/i-accessibility-arkui-accessibilityactionarguments",
              children: "ArkUI_AccessibilityActionArguments"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityActionArguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于设置无障碍操作的具体参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-accessibility-arkui-accessibilityelementinfolist/i-accessibility-arkui-accessibilityelementinfolist",
              children: "ArkUI_AccessibilityElementInfoList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityElementInfoList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供封装的ArkUI_AccessibilityElementInfo的List实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_Node*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_NodeHandle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义ArkUI native组件实例对象指针。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#arkui_accessibility_actiontype",
              children: "ArkUI_Accessibility_ActionType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_Accessibility_ActionType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility操作类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_accessibilityeventtype",
              children: "ArkUI_AccessibilityEventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityEventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility事件类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_acessbilityerrorcode",
              children: "ArkUI_AcessbilityErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AcessbilityErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility错误代码状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_accessibilitysearchmode",
              children: "ArkUI_AccessibilitySearchMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilitySearchMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility搜索类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_accessibilityfocustype",
              children: "ArkUI_AccessibilityFocusType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityFocusType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility焦点类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_accessibilityfocusmovedirection",
              children: "ArkUI_AccessibilityFocusMoveDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityFocusMoveDirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility焦点移动方向的枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_arkui_accessibilityproviderregistercallback",
              children: "int32_t OH_ArkUI_AccessibilityProviderRegisterCallback(ArkUI_AccessibilityProvider* provider, ArkUI_AccessibilityProviderCallbacks* callbacks)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方操作provider回调函数结构定义，需要第三方平台实现的相关函数，通过OH_ArkUI_AccessibilityProviderRegisterCallback注册到系统侧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityproviderregistercallbackwithinstance",
              children: "int32_t OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance(const char* instanceId,ArkUI_AccessibilityProvider* provider, ArkUI_AccessibilityProviderCallbacksWithInstance* callbacks)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍多实例场景第三方平台注册回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_sendaccessibilityasyncevent",
              children: "void OH_ArkUI_SendAccessibilityAsyncEvent(ArkUI_AccessibilityProvider* provider, ArkUI_AccessibilityEventInfo* eventInfo,void (*callback)(int32_t errorCode))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动上报事件接口，通知无障碍服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_addandgetaccessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo* OH_ArkUI_AddAndGetAccessibilityElementInfo(ArkUI_AccessibilityElementInfoList* list)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定的list中增加element成员，并返回element结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetelementid",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetElementId(ArkUI_AccessibilityElementInfo* elementInfo, int32_t elementId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置componentId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetparentid",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetParentId(ArkUI_AccessibilityElementInfo* elementInfo, int32_t parentId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置parentId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetcomponenttype",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetComponentType(ArkUI_AccessibilityElementInfo* elementInfo, const char* componentType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置组件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetcontents",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetContents(ArkUI_AccessibilityElementInfo* elementInfo, const char* contents)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置组件文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosethinttext",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetHintText(ArkUI_AccessibilityElementInfo* elementInfo, const char* hintText)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置提示文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetaccessibilitytext",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityText(ArkUI_AccessibilityElementInfo* elementInfo, const char* accessibilityText)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置Accessibility文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetaccessibilitydescription",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityDescription(ArkUI_AccessibilityElementInfo* elementInfo, const char* accessibilityDescription)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置Accessibility描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetchildnodeids",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetChildNodeIds(ArkUI_AccessibilityElementInfo* elementInfo, int32_t childCount, int64_t* childNodeIds)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置childCount和childNodeIds。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetoperationactions",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetOperationActions(ArkUI_AccessibilityElementInfo* elementInfo,int32_t operationCount, ArkUI_AccessibleAction* operationActions)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置operationActions。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetscreenrect",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetScreenRect(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleRect* screenRect)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置屏幕区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetcheckable",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetCheckable(ArkUI_AccessibilityElementInfo* elementInfo, bool checkable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否可查。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetchecked",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetChecked(ArkUI_AccessibilityElementInfo* elementInfo, bool checked)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否被检查。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetfocusable",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetFocusable(ArkUI_AccessibilityElementInfo* elementInfo, bool focusable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否可聚焦。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetfocused",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetFocused(ArkUI_AccessibilityElementInfo* elementInfo, bool isFocused)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否聚焦。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetvisible",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetVisible(ArkUI_AccessibilityElementInfo* elementInfo, bool isVisible)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否可见。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetaccessibilityfocused",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityFocused(ArkUI_AccessibilityElementInfo* elementInfo, bool accessibilityFocused)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置元素是否处于无障碍焦点状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetselected",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetSelected(ArkUI_AccessibilityElementInfo* elementInfo, bool selected)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否被选中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetclickable",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetClickable(ArkUI_AccessibilityElementInfo* elementInfo, bool clickable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否支持点击。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetlongclickable",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetLongClickable(ArkUI_AccessibilityElementInfo* elementInfo, bool longClickable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否支持长按。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetenabled",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetEnabled(ArkUI_AccessibilityElementInfo* elementInfo, bool isEnabled)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否启用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetispassword",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetIsPassword(ArkUI_AccessibilityElementInfo* elementInfo, bool isPassword)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否为密码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetscrollable",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetScrollable(ArkUI_AccessibilityElementInfo* elementInfo, bool scrollable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否支持滚动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfoseteditable",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetEditable(ArkUI_AccessibilityElementInfo* elementInfo, bool editable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置是否支持编辑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetishint",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetIsHint(ArkUI_AccessibilityElementInfo* elementInfo, bool isHint)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置提示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetrangeinfo",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetRangeInfo(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleRangeInfo* rangeInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置rangeInfo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetgridinfo",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetGridInfo(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleGridInfo* gridInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置网格信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetgriditeminfo",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetGridItemInfo(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleGridItemInfo* gridItem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置网格容器中单项内容容器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetselectedtextstart",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetSelectedTextStart(ArkUI_AccessibilityElementInfo* elementInfo, int32_t selectedTextStart)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置选中文本的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetselectedtextend",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetSelectedTextEnd(ArkUI_AccessibilityElementInfo* elementInfo, int32_t selectedTextEnd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置选中文本的结束位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetcurrentitemindex",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetCurrentItemIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t currentItemIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置当前获焦控件的位置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetstartitemindex",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetStartItemIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t startItemIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置当前屏幕中显示的第一个元素的位置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetenditemindex",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetEndItemIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t endItemIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置当前屏幕中显示的最后一个元素的位置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetitemcount",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetItemCount(ArkUI_AccessibilityElementInfo* elementInfo, int32_t itemCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置特定组件的元素总数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetaccessibilityoffset",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityOffset(ArkUI_AccessibilityElementInfo* elementInfo, int32_t offset)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置内容区相对于元素顶部坐标的滚动像素偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetaccessibilitygroup",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityGroup(ArkUI_AccessibilityElementInfo* elementInfo, bool accessibilityGroup)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置无障碍分组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetaccessibilitylevel",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityLevel(ArkUI_AccessibilityElementInfo* elementInfo, const char* accessibilityLevel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置无障碍重要性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetzindex",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetZIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t zIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置组件z序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetaccessibilityopacity",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityOpacity(ArkUI_AccessibilityElementInfo* elementInfo, float opacity)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置透明度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetbackgroundcolor",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetBackgroundColor(ArkUI_AccessibilityElementInfo* elementInfo, const char* backgroundColor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置背景色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetbackgroundimage",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetBackgroundImage(ArkUI_AccessibilityElementInfo* elementInfo, const char* backgroundImage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置背景图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosetblur",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetBlur(ArkUI_AccessibilityElementInfo* elementInfo, const char* blur)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置模糊度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityelementinfosethittestbehavior",
              children: "int32_t OH_ArkUI_AccessibilityElementInfoSetHitTestBehavior(ArkUI_AccessibilityElementInfo* elementInfo, const char* hitTestBehavior)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityElementInfo设置触摸测试的响应逻辑及节点阻塞规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_createaccessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo* OH_ArkUI_CreateAccessibilityElementInfo(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkUI_AccessibilityElementInfo对象，创建后需要调用OH_ArkUI_DestoryAccessibilityElementInfo释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_destoryaccessibilityelementinfo",
              children: "void OH_ArkUI_DestoryAccessibilityElementInfo(ArkUI_AccessibilityElementInfo* elementInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个ArkUI_AccessibilityElementInfo对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_createaccessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo* OH_ArkUI_CreateAccessibilityEventInfo(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkUI_AccessibilityEventInfo对象，创建后需要调用OH_ArkUI_DestoryAccessibilityEventInfo释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_destoryaccessibilityeventinfo",
              children: "void OH_ArkUI_DestoryAccessibilityEventInfo(ArkUI_AccessibilityEventInfo* eventInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁ArkUI_AccessibilityEventInfo对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityeventseteventtype",
              children: "int32_t OH_ArkUI_AccessibilityEventSetEventType(ArkUI_AccessibilityEventInfo* eventInfo, ArkUI_AccessibilityEventType eventType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityEventInfo设置事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityeventsettextannouncedforaccessibility",
              children: "int32_t OH_ArkUI_AccessibilityEventSetTextAnnouncedForAccessibility(ArkUI_AccessibilityEventInfo* eventInfo, const char* textAnnouncedForAccessibility)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityEventInfo设置textAnnouncedForAccessibility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityeventsetrequestfocusid",
              children: "int32_t OH_ArkUI_AccessibilityEventSetRequestFocusId(ArkUI_AccessibilityEventInfo* eventInfo, int32_t requestFocusId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityEventInfo设置请求焦点id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityeventsetelementinfo",
              children: "int32_t OH_ArkUI_AccessibilityEventSetElementInfo(ArkUI_AccessibilityEventInfo* eventInfo, ArkUI_AccessibilityElementInfo* elementInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为ArkUI_AccessibilityEventInfo设置elementInfo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_findaccessibilityactionargumentbykey",
              children: "int32_t OH_ArkUI_FindAccessibilityActionArgumentByKey(ArkUI_AccessibilityActionArguments* arguments, const char* key, char** value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI_AccessibilityActionArguments中指定key的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_nativemodule_getnativeaccessibilityprovider",
              children: "int32_t OH_ArkUI_NativeModule_GetNativeAccessibilityProvider(ArkUI_NodeHandle* node, ArkUI_AccessibilityProvider** provider)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "对象指针的二级指针变量。  其中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "对象与传入的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "的实例一一对应。  三方框架将自身UI组件映射为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
              children: "ARKUI_NODE_CUSTOM"
            }), "类型的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
              children: "RenderNode"
            }), "并得到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "。  再调用OH_ArkUI_NativeModule_GetNativeAccessibilityProvider接口获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "指针并注册无障碍回调。  最终实现ArkUI无障碍服务对三方框架UI的识别与事件触发。  仅当三方框架将自身UI组件映射为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
              children: "ARKUI_NODE_CUSTOM"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
              children: "RenderNode"
            }), "，该接口才会生效，否则会报错误码。  本接口通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
              children: "RenderNode"
            }), "实现三方框架的接入，仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
              children: "ARKUI_NODE_CUSTOM"
            }), "接入无障碍服务，可以实现无障碍控件树获取能力。  不支持多线程并发，由三方框架保证调用时的线程安全。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_accessibility_actiontype",
      children: "ArkUI_Accessibility_ActionType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_Accessibility_ActionType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accessibility操作类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_INVALID = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_CLICK = 0x00000010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到事件后，组件需要对点击做出响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_LONG_CLICK = 0x00000020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到事件后，组件需要对长点击做出响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_GAIN_ACCESSIBILITY_FOCUS = 0x00000040"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示获取辅助功能焦点的操作，特定组件已聚焦。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_CLEAR_ACCESSIBILITY_FOCUS = 0x00000080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示清除辅助功能焦点的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_SCROLL_FORWARD = 0x00000100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动组件响应向前滚动动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_SCROLL_BACKWARD = 0x00000200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动组件响应反向滚动操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_COPY = 0x00000400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制文本组件的选定内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_PASTE = 0x00000800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粘贴文本组件的选定内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_CUT = 0x00001000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪切文本组件的选定内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_SELECT_TEXT = 0x00002000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对文本组件进行选择操作。结合ArkUI_AccessibilityActionArguments使用，配置selectTextBegin（表示选择起始位置），selectTextEnd（表示选择结束位置），selectTextInForWard（true表示为前光标，false表示为后光标）进入编辑区选择一段文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_SET_TEXT = 0x00004000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本组件的文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_SET_CURSOR_POSITION = 0x00100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对文本组件设置光标位置，结合ArkUI_AccessibilityActionArguments使用，配置可输入文本控件的光标位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_NEXT_HTML_ITEM = 0x02000000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["焦点移动操作中支持查找下一个焦点。此处的HTML并不代表网页元素，仅用于表示具有可自行查找下一个可见聚焦组件的能力，与Web支持的能力相似。实现", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/accessibility-arkui-accessibilityprovidercallbacks/accessibility-arkui-accessibilityprovidercallbacks#findnextfocusaccessibilitynode",
              children: "findNextFocusAccessibilityNode"
            }), "的能力才可配置该属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_PREVIOUS_HTML_ITEM = 0x04000000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["焦点移动操作中支持查找上一个焦点。此处的HTML并不代表网页元素，仅用于表示具有可自行查找上一个可见聚焦组件的能力，与Web支持的能力相似。实现findNextFocusAccessibilityNode的能力才可配置该属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_accessibilityeventtype",
      children: "ArkUI_AccessibilityEventType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_AccessibilityEventType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accessibility事件类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_INVALID = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_CLICKED = 0x00000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击事件，在UI组件响应后发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_LONG_CLICKED = 0x00000002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长点击事件，在UI组件响应后发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_SELECTED = 0x00000004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被选中事件，控件响应完成后发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_TEXT_UPDATE = 0x00000010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本更新事件，需要在文本更新时发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_PAGE_STATE_UPDATE = 0x00000020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面更新事件，当页面跳转、切换、大小更改或移动时发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_PAGE_CONTENT_UPDATE = 0x00000800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面内容发生变化时需要发送事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_SCROLLED = 0x000001000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scrolled事件，当可滚动的组件上发生滚动事件时，会发送此事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_ACCESSIBILITY_FOCUSED = 0x00008000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility焦点事件，在UI组件响应后发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_ACCESSIBILITY_FOCUS_CLEARED = 0x00010000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility焦点清除事件，在UI组件响应后发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_REQUEST_ACCESSIBILITY_FOCUS = 0x02000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动请求指定节点聚焦。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_PAGE_OPEN = 0x20000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI组件上报页面打开事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_PAGE_CLOSE = 0x08000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI组件上报页面关闭事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_ANNOUNCE_FOR_ACCESSIBILITY = 0x10000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "广播Accessibility事件，请求主动播放指定的内容事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_FOCUS_NODE_UPDATE = 0x10000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点更新事件，用于焦点更新场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_acessbilityerrorcode",
      children: "ArkUI_AcessbilityErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_AcessbilityErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accessibility错误代码状态的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_FAILED = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER = -2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_OUT_OF_MEMORY = -3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_accessibilitysearchmode",
      children: "ArkUI_AccessibilitySearchMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_AccessibilitySearchMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accessibility搜索类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_ACCESSIBILITY_NATIVE_SEARCH_MODE_PREFETCH_CURRENT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_SEARCH_MODE_PREFETCH_PREDECESSORS = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询父节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_SEARCH_MODE_PREFETCH_SIBLINGS = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询兄弟节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_SEARCH_MODE_PREFETCH_CHILDREN = 1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询下一层孩子节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_SEARCH_MODE_PREFETCH_RECURSIVE_CHILDREN = 1 << 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询所有孩子节点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_accessibilityfocustype",
      children: "ArkUI_AccessibilityFocusType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_AccessibilityFocusType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accessibility焦点类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_ACCESSIBILITY_NATIVE_FOCUS_TYPE_INVALID = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_FOCUS_TYPE_INPUT = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入焦点类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_FOCUS_TYPE_ACCESSIBILITY = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility焦点类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_accessibilityfocusmovedirection",
      children: "ArkUI_AccessibilityFocusMoveDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_AccessibilityFocusMoveDirection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accessibility焦点移动方向的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_INVALID = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_UP = 0x00000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点向上移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_DOWN = 0x00000002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点向下移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_LEFT = 0x00000004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点向左移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_RIGHT = 0x00000008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点向右移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_FORWARD = 0x00000010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点向下一个可聚焦节点移动，基于查询请求中指定的基准节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_BACKWARD = 0x00000020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点向上一个可聚焦节点移动，基于查询请求中指定的基准节点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityproviderregistercallback",
      children: "OH_ArkUI_AccessibilityProviderRegisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityProviderRegisterCallback(ArkUI_AccessibilityProvider* provider, ArkUI_AccessibilityProviderCallbacks* callbacks)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第三方操作provider回调函数结构定义，需要第三方平台实现的相关函数，通过OH_ArkUI_AccessibilityProviderRegisterCallback注册到系统侧。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "* provider"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityProvider实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/accessibility-arkui-accessibilityprovidercallbacks/accessibility-arkui-accessibilityprovidercallbacks",
              children: "ArkUI_AccessibilityProviderCallbacks"
            }), "* callbacks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向GetAccessibilityNodeCursorPosition实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  如果参数错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityproviderregistercallbackwithinstance",
      children: "OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance(const char* instanceId, ArkUI_AccessibilityProvider* provider, ArkUI_AccessibilityProviderCallbacksWithInstance* callbacks)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无障碍多实例场景第三方平台注册回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方平台接入的实例ID，用于区分多实例场景中不同的第三方实例，ID由第三方平台指定与维护。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "* provider"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方平台接入provider句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance",
              children: "ArkUI_AccessibilityProviderCallbacksWithInstance"
            }), "* callbacks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityProviderCallbacksWithInstance实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_sendaccessibilityasyncevent",
      children: "OH_ArkUI_SendAccessibilityAsyncEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SendAccessibilityAsyncEvent(ArkUI_AccessibilityProvider* provider, ArkUI_AccessibilityEventInfo* eventInfo, void (*callback)(int32_t errorCode))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动上报事件接口，通知无障碍服务。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "* provider"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方平台接入provider句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            }), "* eventInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Accessibility事件信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(int32_t errorCode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向SendAccessibilityAsyncEvent的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_addandgetaccessibilityelementinfo",
      children: "OH_ArkUI_AddAndGetAccessibilityElementInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_AccessibilityElementInfo* OH_ArkUI_AddAndGetAccessibilityElementInfo(ArkUI_AccessibilityElementInfoList* list)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在指定的list中增加element成员，并返回element结构。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-accessibility-arkui-accessibilityelementinfolist/i-accessibility-arkui-accessibilityelementinfolist",
              children: "ArkUI_AccessibilityElementInfoList"
            }), "* list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的ArkUI_AccessibilityElementInfoList结构，新创建的ElementInfo成员加入该list后返回给函数调用方。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回创建完成的ArkUI_AccessibilityElementInfo结构指针；如果创建失败，则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetelementid",
      children: "OH_ArkUI_AccessibilityElementInfoSetElementId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetElementId(ArkUI_AccessibilityElementInfo* elementInfo, int32_t elementId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置componentId。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_AccessibilityElementInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t elementId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍元素的唯一编号。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetparentid",
      children: "OH_ArkUI_AccessibilityElementInfoSetParentId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetParentId(ArkUI_AccessibilityElementInfo* elementInfo, int32_t parentId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置parentId。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t parentId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示元素的父组件无障碍编号。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetcomponenttype",
      children: "OH_ArkUI_AccessibilityElementInfoSetComponentType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetComponentType(ArkUI_AccessibilityElementInfo* elementInfo, const char* componentType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置组件类型。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* componentType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示元素所属的组件类型。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetcontents",
      children: "OH_ArkUI_AccessibilityElementInfoSetContents()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetContents(ArkUI_AccessibilityElementInfo* elementInfo, const char* contents)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置组件文本内容。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* contents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示元素被无障碍服务所识别的文本内容。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosethinttext",
      children: "OH_ArkUI_AccessibilityElementInfoSetHintText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetHintText(ArkUI_AccessibilityElementInfo* elementInfo, const char* hintText)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置提示文本。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* hintText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示提示文本。 默认为\"\"。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetaccessibilitytext",
      children: "OH_ArkUI_AccessibilityElementInfoSetAccessibilityText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityText(ArkUI_AccessibilityElementInfo* elementInfo, const char* accessibilityText)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置Accessibility文本。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* accessibilityText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Accessibility文本。默认为\"\"。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetaccessibilitydescription",
      children: "OH_ArkUI_AccessibilityElementInfoSetAccessibilityDescription()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityDescription(ArkUI_AccessibilityElementInfo* elementInfo, const char* accessibilityDescription)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置Accessibility描述信息。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* accessibilityDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Accessibility描述信息。 默认为\"\"。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetchildnodeids",
      children: "OH_ArkUI_AccessibilityElementInfoSetChildNodeIds()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetChildNodeIds(ArkUI_AccessibilityElementInfo* elementInfo, int32_t childCount, int64_t* childNodeIds)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置ArkUI_AccessibilityElementInfo的childCount和childNodeIds。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t childCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示孩子节点数量。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t* childNodeIds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示孩子节点id集合。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetoperationactions",
      children: "OH_ArkUI_AccessibilityElementInfoSetOperationActions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetOperationActions(ArkUI_AccessibilityElementInfo* elementInfo,int32_t operationCount, ArkUI_AccessibleAction* operationActions)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置operationActions。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* operationCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件支持的action数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessibleaction/capi-arkui-accessibility-arkui-accessibleaction",
              children: "ArkUI_AccessibleAction"
            }), "* operationActions"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件支持的action。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetscreenrect",
      children: "OH_ArkUI_AccessibilityElementInfoSetScreenRect()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetScreenRect(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleRect* screenRect)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置屏幕区域。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessiblerect/capi-arkui-accessibility-arkui-accessiblerect",
              children: "ArkUI_AccessibleRect"
            }), "* screenRect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示屏幕区域。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetcheckable",
      children: "OH_ArkUI_AccessibilityElementInfoSetCheckable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetCheckable(ArkUI_AccessibilityElementInfo* elementInfo, bool checkable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否可查。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool checkable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否可查。true表示可查，false表示不可查。默认值为false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetchecked",
      children: "OH_ArkUI_AccessibilityElementInfoSetChecked()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetChecked(ArkUI_AccessibilityElementInfo* elementInfo, bool checked)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否被检查。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否被检查。true表示被检查过，false表示未被检查。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetfocusable",
      children: "OH_ArkUI_AccessibilityElementInfoSetFocusable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetFocusable(ArkUI_AccessibilityElementInfo* elementInfo, bool focusable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否可聚焦。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool focusable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否可聚焦。true表示可聚焦，false表示不可聚焦。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetfocused",
      children: "OH_ArkUI_AccessibilityElementInfoSetFocused()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetFocused(ArkUI_AccessibilityElementInfo* elementInfo, bool isFocused)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否聚焦。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isFocused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否聚焦。true表示已聚焦，false表示未聚焦。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetvisible",
      children: "OH_ArkUI_AccessibilityElementInfoSetVisible()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetVisible(ArkUI_AccessibilityElementInfo* elementInfo, bool isVisible)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否可见。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isVisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否可见。true表示可见，false表示不可见。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetaccessibilityfocused",
      children: "OH_ArkUI_AccessibilityElementInfoSetAccessibilityFocused()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityFocused(ArkUI_AccessibilityElementInfo* elementInfo, bool accessibilityFocused)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置元素是否处于无障碍焦点状态。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool accessibilityFocused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否被无障碍聚焦。true表示被无障碍聚焦，false表示未被无障碍聚焦。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetselected",
      children: "OH_ArkUI_AccessibilityElementInfoSetSelected()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetSelected(ArkUI_AccessibilityElementInfo* elementInfo, bool selected)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否被选中。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否被选中。true表示被选中，false表示未选中。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetclickable",
      children: "OH_ArkUI_AccessibilityElementInfoSetClickable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetClickable(ArkUI_AccessibilityElementInfo* elementInfo, bool clickable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否支持点击。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool clickable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持点击。true表示支持，false表示不支持。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetlongclickable",
      children: "OH_ArkUI_AccessibilityElementInfoSetLongClickable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetLongClickable(ArkUI_AccessibilityElementInfo* elementInfo, bool longClickable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否支持长按。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool longClickable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持长按。true表示支持，false表示不支持。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetenabled",
      children: "OH_ArkUI_AccessibilityElementInfoSetEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetEnabled(ArkUI_AccessibilityElementInfo* elementInfo, bool isEnabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否启用。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否启用。true表示启用，false表示未启用。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetispassword",
      children: "OH_ArkUI_AccessibilityElementInfoSetIsPassword()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetIsPassword(ArkUI_AccessibilityElementInfo* elementInfo, bool isPassword)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否为密码。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isPassword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否为密码。true表示是密码，false表示不是密码。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetscrollable",
      children: "OH_ArkUI_AccessibilityElementInfoSetScrollable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetScrollable(ArkUI_AccessibilityElementInfo* elementInfo, bool scrollable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否支持滚动。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool scrollable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持滚动。true表示支持，false表示不支持。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfoseteditable",
      children: "OH_ArkUI_AccessibilityElementInfoSetEditable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetEditable(ArkUI_AccessibilityElementInfo* elementInfo, bool editable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置是否支持编辑。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool editable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否支持编辑。true表示支持，false表示不支持。默认值false。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetishint",
      children: "OH_ArkUI_AccessibilityElementInfoSetIsHint()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetIsHint(ArkUI_AccessibilityElementInfo* elementInfo, bool isHint)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置提示状态。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isHint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否为提示状态。true表示是提示状态，false表示不是提示状态。在提示状态下才会获取hintText信息。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetrangeinfo",
      children: "OH_ArkUI_AccessibilityElementInfoSetRangeInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetRangeInfo(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleRangeInfo* rangeInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置rangeInfo。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessiblerangeinfo/capi-arkui-accessibility-arkui-accessiblerangeinfo",
              children: "ArkUI_AccessibleRangeInfo"
            }), "* rangeInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示特定组件的当前值、最大值、最小值。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetgridinfo",
      children: "OH_ArkUI_AccessibilityElementInfoSetGridInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetGridInfo(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleGridInfo* gridInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置网格信息。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-accessibility-arkui-accessiblegridinfo/capi-arkui-accessibility-arkui-accessiblegridinfo",
              children: "ArkUI_AccessibleGridInfo"
            }), "* gridInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示特定组件的行数、列数以及选择模式。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetgriditeminfo",
      children: "OH_ArkUI_AccessibilityElementInfoSetGridItemInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetGridItemInfo(ArkUI_AccessibilityElementInfo* elementInfo, ArkUI_AccessibleGridItemInfo* gridItem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置网格容器中单项内容容器。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessiblegriditeminfo/i-arkui-accessibility-arkui-accessiblegriditeminfo",
              children: "ArkUI_AccessibleGridItemInfo"
            }), "* gridItem"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示特定组件的属性值。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetselectedtextstart",
      children: "OH_ArkUI_AccessibilityElementInfoSetSelectedTextStart()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetSelectedTextStart(ArkUI_AccessibilityElementInfo* elementInfo, int32_t selectedTextStart)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置选中文本的起始位置。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t selectedTextStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本类控件使用，设置选中文本的起始位置。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetselectedtextend",
      children: "OH_ArkUI_AccessibilityElementInfoSetSelectedTextEnd()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetSelectedTextEnd(ArkUI_AccessibilityElementInfo* elementInfo, int32_t selectedTextEnd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置选中文本的结束位置。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t selectedTextEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本类控件使用，设置选中文本的结束位置。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetcurrentitemindex",
      children: "OH_ArkUI_AccessibilityElementInfoSetCurrentItemIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetCurrentItemIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t currentItemIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置当前获焦控件的位置信息。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t currentItemIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前获焦控件的位置信息。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetstartitemindex",
      children: "OH_ArkUI_AccessibilityElementInfoSetStartItemIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetStartItemIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t startItemIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置当前屏幕中显示的第一个元素的位置信息。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t startItemIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前屏幕中显示的第一个元素的位置信息。List、Select、Swiper、Tab_Bar等组件使用。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetenditemindex",
      children: "OH_ArkUI_AccessibilityElementInfoSetEndItemIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetEndItemIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t endItemIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置当前屏幕中显示的最后一个元素的位置信息。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t endItemIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前屏幕中显示的最后一个元素的位置信息。List、Select、Swiper、Tab_Bar等组件使用。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetitemcount",
      children: "OH_ArkUI_AccessibilityElementInfoSetItemCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetItemCount(ArkUI_AccessibilityElementInfo* elementInfo, int32_t itemCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置特定组件的元素总数。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t itemCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示特定组件的元素总数。如List、Select、Swiper、Tab_Bar等组件使用。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetaccessibilityoffset",
      children: "OH_ArkUI_AccessibilityElementInfoSetAccessibilityOffset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityOffset(ArkUI_AccessibilityElementInfo* elementInfo, int32_t offset)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置内容区相对于元素顶部坐标的滚动像素偏移量。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t offset"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对于可滚动类控件，如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
              children: "List"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
              children: "Grid"
            }), "，内容区相对于元素顶部坐标的滚动像素偏移量。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetaccessibilitygroup",
      children: "OH_ArkUI_AccessibilityElementInfoSetAccessibilityGroup()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityGroup(ArkUI_AccessibilityElementInfo* elementInfo, bool accessibilityGroup)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置无障碍分组。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool accessibilityGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否启用无障碍分组。true表示启用，false表示不启用。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetaccessibilitylevel",
      children: "OH_ArkUI_AccessibilityElementInfoSetAccessibilityLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityLevel(ArkUI_AccessibilityElementInfo* elementInfo, const char* accessibilityLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置无障碍重要性。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* accessibilityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示组件的无障碍重要性，用于控制某个组件是否被无障碍辅助服务所识别。  - auto：由系统根据当前组件的属性自动判断该组件是否重要，决定是否让无障碍辅助服务识别该组件。  - yes：表示该组件重要，允许无障碍辅助服务识别该组件。  - no：表示该组件不重要，不允许无障碍辅助服务识别该组件。  - no-hide-descendants：表示该组件及其子孙节点都不重要，不允许无障碍辅助服务识别该组件及其子孙节点。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetzindex",
      children: "OH_ArkUI_AccessibilityElementInfoSetZIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetZIndex(ArkUI_AccessibilityElementInfo* elementInfo, int32_t zIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置组件z序。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t zIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件z序，用于控制元素在垂直于屏幕的z轴上的位置。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest",
              children: "UiTest"
            }), "需要使用。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetaccessibilityopacity",
      children: "OH_ArkUI_AccessibilityElementInfoSetAccessibilityOpacity()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetAccessibilityOpacity(ArkUI_AccessibilityElementInfo* elementInfo, float opacity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置透明度。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float opacity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示透明度。其取值范围是0到1，其中1表示完全不透明，0表示完全透明。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest",
              children: "UiTest"
            }), "需要使用。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetbackgroundcolor",
      children: "OH_ArkUI_AccessibilityElementInfoSetBackgroundColor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetBackgroundColor(ArkUI_AccessibilityElementInfo* elementInfo, const char* backgroundColor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置背景色。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* backgroundColor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示背景色。数据为\"#ARGB\"格式，例如非透明白色，即\"#FFFFFFFF\"。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest",
              children: "UiTest"
            }), "需要使用。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetbackgroundimage",
      children: "OH_ArkUI_AccessibilityElementInfoSetBackgroundImage()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetBackgroundImage(ArkUI_AccessibilityElementInfo* elementInfo, const char* backgroundImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置背景图片。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* backgroundImage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示背景图片。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest",
              children: "UiTest"
            }), "需要使用。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosetblur",
      children: "OH_ArkUI_AccessibilityElementInfoSetBlur()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetBlur(ArkUI_AccessibilityElementInfo* elementInfo, const char* blur)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置模糊度。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* blur"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示模糊度。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest",
              children: "UiTest"
            }), "需要使用。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityelementinfosethittestbehavior",
      children: "OH_ArkUI_AccessibilityElementInfoSetHitTestBehavior()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityElementInfoSetHitTestBehavior(ArkUI_AccessibilityElementInfo* elementInfo, const char* hitTestBehavior)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityElementInfo设置触摸测试的响应逻辑及节点阻塞规则。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* hitTestBehavior"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示hitTest模式，取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
              children: "HitTestMode"
            }), "。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_createaccessibilityelementinfo",
      children: "OH_ArkUI_CreateAccessibilityElementInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_AccessibilityElementInfo* OH_ArkUI_CreateAccessibilityElementInfo(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个ArkUI_AccessibilityElementInfo对象，创建后需要调用OH_ArkUI_DestoryAccessibilityElementInfo释放。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回ArkUI_AccessibilityElementInfo对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_destoryaccessibilityelementinfo",
      children: "OH_ArkUI_DestoryAccessibilityElementInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_DestoryAccessibilityElementInfo(ArkUI_AccessibilityElementInfo* elementInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个ArkUI_AccessibilityElementInfo对象。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向ArkUI_AccessibilityElementInfo的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_createaccessibilityeventinfo",
      children: "OH_ArkUI_CreateAccessibilityEventInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_AccessibilityEventInfo* OH_ArkUI_CreateAccessibilityEventInfo(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个ArkUI_AccessibilityEventInfo对象，创建后需要调用OH_ArkUI_DestoryAccessibilityEventInfo释放。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回ArkUI_AccessibilityEventInfo对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_destoryaccessibilityeventinfo",
      children: "OH_ArkUI_DestoryAccessibilityEventInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_DestoryAccessibilityEventInfo(ArkUI_AccessibilityEventInfo* eventInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁ArkUI_AccessibilityEventInfo对象。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            }), "* eventInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要被销毁的ArkUI_AccessibilityEventInfo对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityeventseteventtype",
      children: "OH_ArkUI_AccessibilityEventSetEventType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityEventSetEventType(ArkUI_AccessibilityEventInfo* eventInfo,  ArkUI_AccessibilityEventType eventType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityEventInfo设置事件类型。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            }), "* eventInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_accessibilityeventtype",
              children: "ArkUI_AccessibilityEventType"
            }), " eventType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示事件类型。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityeventsettextannouncedforaccessibility",
      children: "OH_ArkUI_AccessibilityEventSetTextAnnouncedForAccessibility()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityEventSetTextAnnouncedForAccessibility(ArkUI_AccessibilityEventInfo* eventInfo,  const char* textAnnouncedForAccessibility)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityEventInfo设置主动播报的内容。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            }), "* eventInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* textAnnouncedForAccessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示主动播报的内容。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityeventsetrequestfocusid",
      children: "OH_ArkUI_AccessibilityEventSetRequestFocusId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityEventSetRequestFocusId(ArkUI_AccessibilityEventInfo* eventInfo,  int32_t requestFocusId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityEventInfo设置请求焦点id。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            }), "* eventInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestFocusId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示请求焦点id。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityeventsetelementinfo",
      children: "OH_ArkUI_AccessibilityEventSetElementInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AccessibilityEventSetElementInfo(ArkUI_AccessibilityEventInfo* eventInfo,  ArkUI_AccessibilityElementInfo* elementInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为ArkUI_AccessibilityEventInfo设置elementInfo。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
              children: "ArkUI_AccessibilityEventInfo"
            }), "* eventInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示ArkUI_AccessibilityElementInfo元素信息。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_findaccessibilityactionargumentbykey",
      children: "OH_ArkUI_FindAccessibilityActionArgumentByKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_FindAccessibilityActionArgumentByKey(ArkUI_AccessibilityActionArguments* arguments, const char* key, char** value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI_AccessibilityActionArguments中指定key的value值。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-accessibility-arkui-accessibilityactionarguments/i-accessibility-arkui-accessibilityactionarguments",
              children: "ArkUI_AccessibilityActionArguments"
            }), "* arguments"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示ArkUI_AccessibilityActionArguments对象信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char** value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示value。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_nativemodule_getnativeaccessibilityprovider",
      children: "OH_ArkUI_NativeModule_GetNativeAccessibilityProvider()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_NativeModule_GetNativeAccessibilityProvider(ArkUI_NodeHandle* node, ArkUI_AccessibilityProvider** provider)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "对象指针的二级指针变量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "对象与传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
        children: "ArkUI_NodeHandle"
      }), "的实例一一对应。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["三方框架将自身UI组件映射为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
        children: "ARKUI_NODE_CUSTOM"
      }), "类型的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "并得到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
        children: "ArkUI_NodeHandle"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["再调用OH_ArkUI_NativeModule_GetNativeAccessibilityProvider接口获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "指针并注册无障碍回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最终实现ArkUI无障碍服务对三方框架UI的识别与事件触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅当三方框架将自身UI组件映射为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
        children: "ARKUI_NODE_CUSTOM"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "，该接口才会生效，否则会报错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "实现三方框架的接入，仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
        children: "ARKUI_NODE_CUSTOM"
      }), "接入无障碍服务，可以实现无障碍控件树获取能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持多线程并发，由三方框架保证调用时的线程安全。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), "* node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向一个ArkUI_NodeHandle对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "** provider"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向一个ArkUI_AccessibilityProvider类型对象的指针。provider用于注册无障碍回调函数。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回状态码。  成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  参数错误：1. 传入的参数node或者provider为空指针。  2. node对应的ArkUI_NodeHandle类型不为ARKUI_NODE_CUSTOM。"]
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