"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["183855"], {
666096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_multimodal_awareness_kit_motion_guidelines_motion_guidelines_md_504_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-multimodal-awareness-kit-motion-guidelines-motion-guidelines-md-504.json
var site_docs_system_hardware_multimodal_awareness_kit_motion_guidelines_motion_guidelines_md_504_namespaceObject = JSON.parse('{"id":"system-hardware/multimodal-awareness-kit/motion-guidelines/motion-guidelines","title":"获取用户动作开发指导","description":"场景介绍","source":"@site/docs/system-hardware/multimodal-awareness-kit/motion-guidelines/motion-guidelines.md","sourceDirName":"system-hardware/multimodal-awareness-kit/motion-guidelines","slug":"/system-hardware/multimodal-awareness-kit/motion-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/motion-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"获取用户动作开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/motion-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Stationary开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/stationary-guidelines/"},"next":{"title":"设备状态感知开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/devicestatus-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/multimodal-awareness-kit/motion-guidelines/motion-guidelines.md


const frontMatter = {
	title: '获取用户动作开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/motion-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '获取用户动作开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "获取操作手状态开发指导",
  "id": "获取操作手状态开发指导",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "需要权限",
  "id": "需要权限",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "获取握持手状态开发指导",
  "id": "获取握持手状态开发指导",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "需要权限",
  "id": "需要权限-1",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制-1",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
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
        id: "获取用户动作开发指导",
        children: "获取用户动作开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要获取用户动作时，可以调用motion模块，例如判断用户当前是用左手还是右手操作设备屏幕。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-awareness-motion/js-apis-awareness-motion",
        children: "@ohos.multimodalAwareness.motion (动作感知能力)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，支持获取操作手状态。从API version 20开始，支持获取握持手状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取操作手状态开发指导",
      children: "获取操作手状态开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "on(type:'operatingHandChanged',callback:Callback<OperatingHandStatus>):void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅操作手感知，操作手结果通过callback返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'operatingHandChanged', callback?: Callback<OperatingHandStatus>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅操作手感知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getRecentOperatingHandStatus(): OperatingHandStatus;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最新的操作手状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "需要权限",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用motion模块获取用户操作手时，需要权限：ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE，具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.ACTIVITY_MOTION\"\n    },\n    {\n      \"name\" : \"ohos.permission.DETECT_GESTURE\"\n    }\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此功能如果设备不支持，将返回801错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指关节操作不属于使用手操作场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "窗口旋转场景，多指同时操作场景不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "能力有效范围：不包含距离屏幕边缘8mm内区域。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结果上报条件：首次订阅或切换操作手后，连续点数次触发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触控响应说明：屏幕四周边缘8mm范围内不支持触控响应。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { motion } from '@kit.MultimodalAwarenessKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义回调函数接收操作手结果"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let callback:Callback<motion.OperatingHandStatus> = (data:motion.OperatingHandStatus) => {\n  console.info('callback succeeded' + data);\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅操作手感知"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   motion.on('operatingHandChanged', callback);\n   console.info(\"on succeeded\");\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Failed on and err code is \" + error.code);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅操作手感知"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   motion.off('operatingHandChanged');\n   console.info(\"off succeeded\");\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Failed off and err code is \" + error.code);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取最新操作手状态"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   let data:motion.OperatingHandStatus = motion.getRecentOperatingHandStatus();\n   console.info('get succeeded' + data);\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Failed get and err code is \" + error.code);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取握持手状态开发指导",
      children: "获取握持手状态开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "on(type:'holdingHandChanged',callback:Callback<HoldingHandStatus>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅握持手感知，感知结果通过callback返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'holdingHandChanged', callback?: Callback<HoldingHandStatus>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅握持手感知。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "需要权限-1",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用motion模块获取用户握持手时，需要权限： ohos.permission.DETECT_GESTURE，具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.DETECT_GESTURE\"\n    }\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制-1",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此功能当前支持部分机型，若设置菜单中存在“智感握姿”开关（可在“设置-系统”中查看），则表明该设备支持此功能，若无此开关，将返回801错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备屏幕需处于亮屏且解锁状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备保护壳（若有）厚度不得超过3毫米。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需以五指自然握持设备，同时掌心区域接触设备（或拇指外的四指及掌心区域接触）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "握持时确保每根接触手指的接触面积尽可能大（理想情况下不低于30mm²）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "佩戴手套会显著降低识别准确率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "竖屏握持时，摄像头需朝上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持横屏握持，但需要注意：应用横屏时竖屏握持即握持设备长边，应用竖屏时横屏握持即握持设备短边，均属异常姿态，无法保证识别成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "握持时屏幕需朝向握持人。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "握持时不得同时接触其他物体（如桌面、其他身体部位等）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未握持的识别依赖设备状态，设备非静止时无法保证识别成功。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { motion } from '@kit.MultimodalAwarenessKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义回调函数接收握持手结果"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let callback:Callback<motion.HoldingHandStatus> = (data:motion.HoldingHandStatus) => {\n  console.info('callback succeeded' + data);\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅握持手感知"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   motion.on('holdingHandChanged', callback);\n   console.info(\"on succeeded\");\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Failed on and err code is \" + error.code);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅握持手感知"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   motion.off('holdingHandChanged');\n   console.info(\"off succeeded\");\n} catch (err) {\n   let error = err as BusinessError;\n   console.error(\"Failed off and err code is \" + error.code);\n}\n"
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