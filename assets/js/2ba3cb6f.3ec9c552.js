"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["561213"], {
851776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_car_kit_guide_car_implement_navi_hop_car_address_hop_car_address_hop_md_2ba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-car-kit-guide-car-implement-navi-hop-car-address-hop-car-address-hop-md-2ba.json
var site_docs_system_hardware_car_kit_guide_car_implement_navi_hop_car_address_hop_car_address_hop_md_2ba_namespaceObject = JSON.parse('{"id":"system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop/car-address-hop","title":"地址流转至车机","description":"将手机应用的地址文本流转至车机指定地图应用的能力。","source":"@site/docs/system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop/car-address-hop.md","sourceDirName":"system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop","slug":"/system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop/","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"地址流转至车机","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-address-hop","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"导航流转至车机","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-navi-hop/"},"next":{"title":"下车步行导航流转","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/car-kit-guide/car-implement-navi-hop/car-address-hop/car-address-hop.md


const frontMatter = {
	title: '地址流转至车机',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-address-hop',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '地址流转至车机';

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
  "value": "参数value说明",
  "id": "参数value说明",
  "level": 3
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
    h3: "h3",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "地址流转至车机",
        children: "地址流转至车机"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将手机应用的地址文本流转至车机指定地图应用的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "碰一碰地址流转：用户在手机地址文本页面与车机中控屏指定区域碰一碰后，将手机上的地址数据流转至车机的地图应用，发起地址搜索。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600383)/* ["default"] */.A) + "",
        width: "795",
        height: "218"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitytexthint12",
              children: "accessibilityTextHint"
            }), "(value: string): T"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置辅助功能文本提示。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数value说明",
      children: "参数value说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "value是一个Json格式的字符串，具体属性说明如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本类型，必须是“", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "location"
              })
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "groupId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地址编组ID，用于多个Text文本分组，同一组的地址文本流转到车机后会自动拼接到一起。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地址索引，用来标识同一组地址文本的顺序。同一组的地址文本流转到车机后会按照index由小到大拼接成一个完整地址。  例如：'XXX街道' + 'XXX商场' = 'XXX街道XXX商场'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给手机地址文本（Text）设置accessibilityTextHint属性后即可使用地址流转能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "能力配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["碰一碰地址流转场景下，metadata的name取值为carHopCapability，value取值应为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "carHopAddress"
            })
          }), "，具体配置请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/car-kit-guide/car-preparations#%E9%85%8D%E7%BD%AE%E8%83%BD%E5%8A%9B",
            children: "配置能力"
          }), "。示例代码如下所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"metadata\": [\n  {\n    \"name\": \"carHopCapability\",\n    \"value\": \"carHopAddress\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义accessibilityTextHint的value值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const hintContentValue = JSON.stringify({\n   type: 'location', // 类型，必须是 'location'\n   groupId: 1, // 分组id\n   index: 2, // 索引\n });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "给地址文本设置accessibilityTextHint属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('xxx一路')\n   .fontSize(20)\n   .fontWeight(FontWeight.Bold)\n   .accessibilityTextHint(hintContentValue)\n\n// 单地址场景\nText('xxx二路')\n   .accessibilityTextHint(JSON.stringify({ type: 'location' }))\n \n// 多地址场景\nText('xxx商场')\n   .accessibilityTextHint(JSON.stringify({ type: 'location', groupId: 1, index: 1, }))\n Text('xxx街')\n   .accessibilityTextHint(JSON.stringify({ type: 'location', groupId: 1, index: 0, }))\n"
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
600383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478469-f89bc83d7bd38869aa7a2824086e5ca7.png");

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