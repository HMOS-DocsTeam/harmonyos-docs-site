"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["448470"], {
377927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_native_common_event_publish_native_common_event_publish_md_e32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-app-events-common-event-communication-native-common-event-publish-native-common-event-publish-md-e32.json
var site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_native_common_event_publish_native_common_event_publish_md_e32_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-publish/native-common-event-publish","title":"发布公共事件（C/C++）","description":"场景介绍","source":"@site/docs/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-publish/native-common-event-publish.md","sourceDirName":"system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-publish","slug":"/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-publish/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-publish/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"发布公共事件（C/C++）","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-event-publish","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"取消订阅公共事件（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-unsubscription/"},"next":{"title":"使用Emitter进行线程间通信","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/itc-with-emitter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-publish/native-common-event-publish.md


const frontMatter = {
	title: '发布公共事件（C/C++）',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-event-publish',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '发布公共事件（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
    img: "img",
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
        id: "发布公共事件cc",
        children: "发布公共事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要发布某个公共事件时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_publish",
        children: "OH_CommonEvent_Publish"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_publishwithinfo",
        children: "OH_CommonEvent_PublishWithInfo"
      }), "方法发布事件。发布的公共事件可以携带数据，供订阅者解析并进行下一步处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h",
        children: "oh_commonevent.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-oh-commonevent-commonevent-publishinfo/capi-oh-commonevent-commonevent-publishinfo",
              children: "struct CommonEvent_PublishInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布公共事件时使用的公共事件属性对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_publish",
              children: "CommonEvent_ErrCode OH_CommonEvent_Publish(const char* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布公共事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_publishwithinfo",
              children: "CommonEvent_ErrCode OH_CommonEvent_PublishWithInfo(const char* event, const CommonEvent_PublishInfo* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发布带有指定属性的公共事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_createpublishinfo",
              children: "CommonEvent_PublishInfo* OH_CommonEvent_CreatePublishInfo(bool ordered)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建公共事件属性对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_destroypublishinfo",
              children: "void OH_CommonEvent_DestroyPublishInfo(CommonEvent_PublishInfo* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁公共事件属性对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_createparameters",
              children: "CommonEvent_Parameters* OH_CommonEvent_CreateParameters()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建公共事件附加信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_destroyparameters",
              children: "void OH_CommonEvent_DestroyParameters(CommonEvent_Parameters* param)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁公共事件附加信息对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdint>\n#include <cstring>\n#include \"hilog/log.h\"\n#include \"BasicServicesKit/oh_commonevent.h\"\n\nconst long PARAM_LONG_VALUE1 = 2147483646;\nconst long PARAM_LONG_VALUE2 = 2147483645;\nconst long PARAM_LONG_VALUE3 = 555;\nconst double PARAM_DOUBLE_VALUE1 = 11.22;\nconst double PARAM_DOUBLE_VALUE2 = 33.44;\nconst double PARAM_DOUBLE_VALUE3 = 55.66;\nconst int PARAM_INT_VALUE1 = 10;\nconst int PARAM_INT_VALUE2 = 123;\nconst int PARAM_INT_VALUE3 = 234;\nconst int PARAM_INT_VALUE4 = 567;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中添加动态链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libhilog_ndk.z.so\n    libohcommonevent.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）创建公共事件属性对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发布携带数据的公共事件时，需要通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_createpublishinfo",
            children: "OH_CommonEvent_CreatePublishInfo"
          }), "创建公共事件属性对象，并通过以下接口设置公共事件属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建并添加公共事件属性附加信息\nCommonEvent_Parameters *CreateParameters()\n{\n    int32_t ret = -1;\n    // 创建公共事件附加信息\n    CommonEvent_Parameters *param = OH_CommonEvent_CreateParameters();\n\n    // 设置int类型附加信息和key\n    ret = OH_CommonEvent_SetIntToParameters(param, \"intKey\", PARAM_INT_VALUE1);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetIntToParameters ret <%{public}d>.\", ret);\n\n    // 设置int数组类型附加信息和key\n    int intArray[] = {PARAM_INT_VALUE2, PARAM_INT_VALUE3, PARAM_INT_VALUE4};\n    size_t arraySize = sizeof(intArray) / sizeof(intArray[0]);\n    ret = OH_CommonEvent_SetIntArrayToParameters(param, \"intArrayKey\", intArray, arraySize);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetIntArrayToParameters ret <%{public}d>.\", ret);\n\n    // 设置long类型附加信息和key\n    ret = OH_CommonEvent_SetLongToParameters(param, \"longKey\", PARAM_LONG_VALUE1);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetLongToParameters ret <%{public}d>.\", ret);\n\n    // 设置long数组类型附加信息和key\n    long longArray[] = {PARAM_LONG_VALUE1, PARAM_LONG_VALUE3, PARAM_LONG_VALUE2};\n    ret = OH_CommonEvent_SetLongArrayToParameters(param, \"longArrayKey\", longArray, arraySize);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetLongArrayToParameters ret <%{public}d>.\", ret);\n\n    // 设置double类型附加信息和key\n    ret = OH_CommonEvent_SetDoubleToParameters(param, \"doubleKey\", PARAM_DOUBLE_VALUE1);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetDoubleToParameters ret <%{public}d>.\", ret);\n\n    // 设置double数组类型附加信息和key\n    double doubleArray[] = {PARAM_DOUBLE_VALUE1, PARAM_DOUBLE_VALUE2, PARAM_DOUBLE_VALUE3};\n    ret = OH_CommonEvent_SetDoubleArrayToParameters(param, \"doubleArrayKey\", doubleArray, arraySize);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetDoubleArrayToParameters ret <%{public}d>.\", ret);\n\n    // 设置boolean类型附加信息和key\n    ret = OH_CommonEvent_SetBoolToParameters(param, \"boolKey\", true);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetBoolToParameters ret <%{public}d>.\", ret);\n\n    // 设置boolean数组类型附加信息和key\n    bool boolArray[] = {true, false, true};\n    ret = OH_CommonEvent_SetBoolArrayToParameters(param, \"boolArrayKey\", boolArray, arraySize);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetBoolArrayToParameters ret <%{public}d>.\", ret);\n\n    // 设置char类型附加信息和key\n    ret = OH_CommonEvent_SetCharToParameters(param, \"charKey\", 'A');\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetCharToParameters ret <%{public}d>.\", ret);\n\n    // 设置char数组类型附加信息和key\n    const char *value = \"Char Array\";\n    size_t valueLength = strlen(value);\n    ret = OH_CommonEvent_SetCharArrayToParameters(param, \"charArrayKey\", value, valueLength);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetCharArrayToParameters ret <%{public}d>.\", ret);\n    return param;\n}\n\n// 设置公共事件属性\nvoid SetPublishInfo(const char *bundleName, const char *permissions[], int32_t num, const int32_t code,\n                    const char *data)\n{\n    int32_t ret = -1;\n    // 创建publishInfo，设置是否为有序公共事件，取值为true，表示有序公共事件；取值为false，表示无序公共事件\n    CommonEvent_PublishInfo *info = OH_CommonEvent_CreatePublishInfo(true);\n\n    // 设置公共事件包名称\n    ret = OH_CommonEvent_SetPublishInfoBundleName(info, bundleName);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetPublishInfoBundleName ret <%{public}d>.\", ret);\n\n    // 设置公共事件权限，参数为权限数组和权限的数量\n    ret = OH_CommonEvent_SetPublishInfoPermissions(info, permissions, num);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetPublishInfoPermissions ret <%{public}d>.\", ret);\n\n    // 设置公共事件结果码\n    ret = OH_CommonEvent_SetPublishInfoCode(info, code);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetPublishInfoCode ret <%{public}d>.\", ret);\n\n    // 设置公共事件结果数据\n    size_t dataLength = strlen(data);\n    ret = OH_CommonEvent_SetPublishInfoData(info, data, dataLength);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetPublishInfoData ret <%{public}d>.\", ret);\n\n    // 设置公共事件附加信息\n    CommonEvent_Parameters *param = CreateParameters();\n    ret = OH_CommonEvent_SetPublishInfoParameters(info, param);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetPublishInfoParameters ret <%{public}d>.\", ret);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布公共事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_publish",
                children: "OH_CommonEvent_Publish"
              }), "发布不携带信息的公共事件。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(159604)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "不携带信息的公共事件，只能发布为无序公共事件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void Publish(const char *event)\n{\n    int32_t ret = OH_CommonEvent_Publish(event);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_Publish ret <%{public}d>.\", ret);\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_publishwithinfo",
                children: "OH_CommonEvent_PublishWithInfo"
              }), "发布携带信息的公共事件。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void PublishWithInfo(const char *event, CommonEvent_PublishInfo *info)\n{\n    // 创建时带入公共事件属性对象\n    int32_t ret = OH_CommonEvent_PublishWithInfo(event, info);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_PublishWithInfo ret <%{public}d>.\", ret);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁公共事件对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果后续无需使用已创建的公共事件对象来发布公共事件，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_destroyparameters",
            children: "OH_CommonEvent_DestroyParameters"
          }), "销毁CommonEvent_Parameters对象，然后再通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_destroypublishinfo",
            children: "OH_CommonEvent_DestroyPublishInfo"
          }), "销毁公共事件对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void DestroyPublishInfo(CommonEvent_Parameters *param, CommonEvent_PublishInfo *info)\n{\n    // 先销毁Parameters\n    OH_CommonEvent_DestroyParameters(param);\n    param = nullptr;\n    // 销毁PublishInfo\n    OH_CommonEvent_DestroyPublishInfo(info);\n    info = nullptr;\n}\n"
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
159604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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