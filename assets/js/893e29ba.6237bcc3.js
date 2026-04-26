"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["7407"], {
725739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_advanced_controls_map_location_division_map_location_division_md_893_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-advanced-controls-map-location-division-map-location-division-md-893.json
var site_docs_map_kit_guide_map_advanced_controls_map_location_division_map_location_division_md_893_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-advanced-controls/map-location-division/map-location-division","title":"区划选择","description":"场景介绍","source":"@site/docs/map-kit-guide/map-advanced-controls/map-location-division/map-location-division.md","sourceDirName":"map-kit-guide/map-advanced-controls/map-location-division","slug":"/map-kit-guide/map-advanced-controls/map-location-division/","permalink":"/harmonyos-docs-site/map-kit-guide/map-advanced-controls/map-location-division/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"区划选择","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-division","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"地点选取","permalink":"/harmonyos-docs-site/map-kit-guide/map-advanced-controls/map-location-selecting/"},"next":{"title":"通过地图应用实现导航等能力","permalink":"/harmonyos-docs-site/map-kit-guide/map-petalmaps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-advanced-controls/map-location-division/map-location-division.md


const frontMatter = {
	title: '区划选择',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-division',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '区划选择';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "区划选择",
        children: "区划选择"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将介绍如何集成区划选择控件。该控件不支持在智能表设备中调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "区划选择控件可加载全球或指定国家的区划信息，支持以树状结构化选择，支持功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持查看选中区划的下级区划。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持推荐热门区划。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持子窗拉起区划控件，适合宽屏设备使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 选择国家"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758619)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 选择省市"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74034)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 搜索地区"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(121805)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "2688"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 子窗拉起区划控件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664147)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1600",
        height: "2560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用该功能需满足以下条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持手机、平板和2in1设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["区划选择控件功能主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap",
        children: "sceneMap"
      }), "命名空间下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#selectdistrict",
        children: "selectDistrict"
      }), "方法提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap",
        children: "接口文档"
      }), "。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectoptions",
              children: "DistrictSelectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区划选择页面初始选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#selectdistrict",
              children: "selectDistrict"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectoptions",
              children: "DistrictSelectOptions"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectresult",
              children: "DistrictSelectResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调出区划选择页面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#districtselectresult",
              children: "DistrictSelectResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "区划选择结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { sceneMap } from '@kit.MapKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建区划选择请求参数，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/map-api/map-arkts/map-scenemap/map-scenemap#selectdistrict",
            children: "selectDistrict"
          }), "方法拉起区划选择页。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let districtSelectOptions: sceneMap.DistrictSelectOptions = {\n  countryCode: \"CN\",\n  // 使用子窗拉起方式\n  subWindowEnabled: true\n};\n// 拉起区划选择页\nsceneMap.selectDistrict(this.getUIContext().getHostContext(), districtSelectOptions).then((data) => {\n  console.info(\"SelectDistrict\", \"Succeeded in selecting district.\");\n}).catch((err: BusinessError) => {\n  console.error(\"SelectDistrict\", `Failed to select district, code: ${err.code}, message: ${err.message}`);\n});\n"
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
758619(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799400-8a9950e1c018263550e190c74766cf58.jpg");

},
121805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959050-055cf3c16f80138d6ed861f46f885b53.jpg");

},
74034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439095-0e1e08aa20d957a2008d8ec0b764998b.jpg");

},
664147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479051-10c48edfff438afac539ac3bd527fc9e.jpg");

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