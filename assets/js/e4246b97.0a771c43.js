"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["773995"], {
296104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_nearbytransfer_dev_gameservice_nearbytransfer_config_agc_gameservice_nearbytransfer_config_agc_md_e42_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-nearbytransfer-dev-gameservice-nearbytransfer-config-agc-gameservice-nearbytransfer-config-agc-md-e42.json
var site_docs_game_service_kit_guide_gameservice_nearbytransfer_dev_gameservice_nearbytransfer_config_agc_gameservice_nearbytransfer_config_agc_md_e42_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-config-agc/gameservice-nearbytransfer-config-agc","title":"开发准备","description":"创建游戏","source":"@site/docs/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-config-agc/gameservice-nearbytransfer-config-agc.md","sourceDirName":"game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-config-agc","slug":"/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-config-agc/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-config-agc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-nearbytransfer-config-agc","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction/"},"next":{"title":"开发指导","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-access-procedure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-config-agc/gameservice-nearbytransfer-config-agc.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-nearbytransfer-config-agc',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "创建游戏",
  "id": "创建游戏",
  "level": 2
}, {
  "value": "申请近场快传开放能力",
  "id": "申请近场快传开放能力",
  "level": 2
}, {
  "value": "生成签名证书",
  "id": "生成签名证书",
  "level": 2
}, {
  "value": "配置APP ID和相关权限",
  "id": "配置app-id和相关权限",
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
    strong: "strong",
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
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建游戏",
      children: "创建游戏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若在华为应用市场发布游戏，或使用AGC控制台提供的服务，需要前往AGC控制台创建游戏类应用，具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-project-0000002242804048",
        children: "创建项目"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
        children: "创建HarmonyOS应用"
      }), "。其中："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“应用类型”：选择“HarmonyOS应用”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“应用分类”：选择“游戏”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请近场快传开放能力",
      children: "申请近场快传开放能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于安全考虑，系统侧对近场快传功能做了权限保护处理，使用相关接口开发者需先提交“近场快传”能力开关的申请，在申请通过后，再使用该能力开关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/",
            children: "AppGallery Connect"
          }), "，点击“开发与服务”。在项目列表中找到项目，并点击选择需要申请权限的游戏。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“项目设置”页面，选择“开放能力管理”页签，开始为游戏申请近场快传开放能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(754754)/* ["default"] */.A) + "",
            width: "1267",
            height: "491"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "搜索“近场快传”，点击对应能力后面的“申请”，打开“新建业务申请”窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(406173)/* ["default"] */.A) + "",
            width: "1275",
            height: "462"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“新建业务申请”窗口填写申请信息，然后点击“提交”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(189413)/* ["default"] */.A) + "",
            width: "971",
            height: "465"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "配置项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填/选填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "申请原因"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "申请近场快传的原因，请按照模板填写相关信息，字数不超过512个字符。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "上传附件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "选填"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅可上传1个附件，大小不超过500MB。支持文本、表格、图片、视频、压缩包格式。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入互动中心页面，可以看到申请已提交的消息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(708539)/* ["default"] */.A) + "",
            width: "1160",
            height: "538"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回“开放能力管理”页面，近场快传显示“申请中”，1-3个工作日反馈申请结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(682120)/* ["default"] */.A) + "",
            width: "1258",
            height: "428"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请审批通过后，互动中心将会发送通知给您，同时近场快传的能力开关会为您自动开启，“申请中”也会变为置灰显示的“申请”。至此，游戏已成功开启近场快传开放能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(665812)/* ["default"] */.A) + "",
            width: "1264",
            height: "447"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成签名证书",
      children: "生成签名证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数字证书和Profile文件等签名信息可以确保游戏的完整性，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/application-dev-overview#section42841246144813",
        children: "配置签名信息"
      }), "完成配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置app-id和相关权限",
      children: "配置APP ID和相关权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "平台，在“开发与服务”中选择目标应用，获取“项目设置 > 常规 > 应用”的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "APP ID"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(476207)/* ["default"] */.A) + "",
            width: "1304",
            height: "544"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程的entry模块module.json5文件中，新增metadata并配置app_id，同时新增requestPermissions并配置如下权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"module\": {\n  \"name\": \"entry\",\n  \"type\": \"entry\",\n  \"description\": \"xxxx\",\n  \"mainElement\": \"xxxx\",\n  \"deviceTypes\": [\n    \"phone\"\n  ],\n  \"deliveryWithInstall\": true,\n  \"pages\": \"$profile:main_pages\",\n  \"abilities\": [],\n  \"metadata\": [ // 配置如下信息\n    {\n      \"name\": \"app_id\",\n      \"value\": \"xxxxxx\" // 配置为前面步骤中获取的APP ID\n    }\n  ],\n   \"requestPermissions\": [ // 配置权限\n     {\n       \"name\": \"ohos.permission.INTERNET\" // 允许使用Internet网络权限\n     },\n     {\n       \"name\": \"ohos.permission.GET_NETWORK_INFO\"  // 允许应用获取数据网络信息权限\n     },\n     {\n       \"name\": \"ohos.permission.SET_NETWORK_INFO\" // 允许应用配置数据网络权限\n     },\n     {\n       \"name\": \"ohos.permission.DISTRIBUTED_DATASYNC\", // 允许不同设备间的数据交换权限\n       \"reason\": \"$string:distributed_permission\",\n       \"usedScene\": {\n         \"abilities\": [\n           \"EntryAbility\"\n         ],\n         \"when\": \"inuse\"\n       }\n     }\n   ]\n}\n"
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
189413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438947-d14e8098dfa696e91dd756cab4988ec1.png");

},
708539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958902-ea5d6097c26a2e545297070aad86956a.png");

},
476207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438949-ddaaa860f28607aa7510eea5e2cde6e6.png");

},
406173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799252-74e0ab7c5f3221c952526da7812895a6.png");

},
754754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478901-bc2fae0c81e04329fc93b483a1c65fd1.png");

},
682120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478903-ca35a238bfb2163350e9a81e675b5fc7.png");

},
665812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799254-03f42fc4bcc339a28c5232c9e7d544bc.png");

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