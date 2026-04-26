"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["692344"], {
636227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_calculation_tool_map_convert_coordinate_map_convert_coordinate_md_d07_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-calculation-tool-map-convert-coordinate-map-convert-coordinate-md-d07.json
var site_docs_map_kit_guide_map_calculation_tool_map_convert_coordinate_map_convert_coordinate_md_d07_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-calculation-tool/map-convert-coordinate/map-convert-coordinate","title":"坐标纠偏","description":"坐标系知识介绍","source":"@site/docs/map-kit-guide/map-calculation-tool/map-convert-coordinate/map-convert-coordinate.md","sourceDirName":"map-kit-guide/map-calculation-tool/map-convert-coordinate","slug":"/map-kit-guide/map-calculation-tool/map-convert-coordinate/","permalink":"/harmonyos-docs-site/map-kit-guide/map-calculation-tool/map-convert-coordinate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"坐标纠偏","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-convert-coordinate","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过地图应用实现导航等能力","permalink":"/harmonyos-docs-site/map-kit-guide/map-petalmaps/"},"next":{"title":"距离计算","permalink":"/harmonyos-docs-site/map-kit-guide/map-calculation-tool/map-calculate-distance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-calculation-tool/map-convert-coordinate/map-convert-coordinate.md


const frontMatter = {
	title: '坐标纠偏',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-convert-coordinate',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '坐标纠偏';

const assets = {

};



const toc = [{
  "value": "坐标系知识介绍",
  "id": "坐标系知识介绍",
  "level": 2
}, {
  "value": "华为地图使用的坐标类型",
  "id": "华为地图使用的坐标类型",
  "level": 2
}, {
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
}, {
  "value": "坐标纠偏",
  "id": "坐标纠偏-1",
  "level": 3
}, {
  "value": "坐标转换",
  "id": "坐标转换",
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
    img: "img",
    li: "li",
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
        id: "坐标纠偏",
        children: "坐标纠偏"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "坐标系知识介绍",
      children: "坐标系知识介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为地图涉及2种坐标系："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WGS84：一种大地坐标系，也是目前广泛使用的GPS全球卫星定位系统使用的坐标系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GCJ02：由中国国家测绘局制定的地理信息系统的坐标系统，是由WGS84坐标系经过加密后的坐标系。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "华为地图使用的坐标类型",
      children: "华为地图使用的坐标类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "中国大陆使用GCJ02坐标系，中国台湾和海外使用WGS84坐标系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为地图在中国大陆使用GCJ02坐标系，若使用WGS84坐标系直接叠加在华为地图上，因坐标值不同，展示位置会有偏移。所以，在中国大陆如果使用WGS84坐标调用Map Kit服务，需要先将其转换为GCJ02坐标系再访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是坐标纠偏功能相关接口，主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-module-desc/map-module-desc",
        children: "map"
      }), "命名空间下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-convertcoordinatesync/map-map-convertcoordinatesync",
        children: "convertCoordinateSync"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-rectifycoordinate/map-map-rectifycoordinate",
        children: "rectifyCoordinate"
      }), "方法提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-convertcoordinatesync/map-map-convertcoordinatesync",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/map-api/map-arkts/map-common/map-common#coordinatetype",
              children: "mapCommon.CoordinateType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "坐标系类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-convertcoordinatesync/map-map-convertcoordinatesync",
              children: "convertCoordinateSync"
            }), "(fromType: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#coordinatetype",
              children: "mapCommon.CoordinateType"
            }), ", toType: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#coordinatetype",
              children: "mapCommon.CoordinateType"
            }), ", location: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlng",
              children: "mapCommon.LatLng"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlng",
              children: "mapCommon.LatLng"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "坐标转换，将WGS84坐标系转换为GCJ02坐标系。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-map/map-map-rectifycoordinate/map-map-rectifycoordinate",
              children: "rectifyCoordinate"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", locations: Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#coordinatelatlng",
              children: "mapCommon.CoordinateLatLng"
            }), ">): Promise<Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#coordinatelatlng",
              children: "mapCommon.CoordinateLatLng"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "坐标纠偏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-common/map-common#latlng",
              children: "mapCommon.LatLng"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "经纬度对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入相关模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { map, mapCommon } from '@kit.MapKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "坐标纠偏-1",
      children: "坐标纠偏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-rectifycoordinate/map-map-rectifycoordinate",
        children: "rectifyCoordinate"
      }), "接口根据用户输入的坐标系和坐标以及获取当前的路由地，判断是否需要修正坐标。如果需要修正，则返回修正后的坐标系和坐标。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812202)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-rectifycoordinate/map-map-rectifycoordinate",
          children: "rectifyCoordinate"
        }), "接口仅为解决原始坐标与华为地图展示偏转的问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/map-api/map-arkts/map-map/map-map-rectifycoordinate/map-map-rectifycoordinate",
          children: "rectifyCoordinate"
        }), "接口仅支持WGS84坐标系转为GCJ02坐标系。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let locations: Array<mapCommon.CoordinateLatLng> = [\n  {\n    // 输入香港坐标和WGS84坐标系，若当前地图站点使用GCJ02坐标系，返回GCJ02坐标系和转换后的香港坐标（输入的坐标转换为GCJ02坐标系）\n    coordinateType: mapCommon.CoordinateType.WGS84,\n    location: {\n      latitude: 22.280556,\n      longitude: 114.984000\n    }\n  }\n];\n// 包含await的外层方法需要添加async关键字\nlet arr: Array<mapCommon.CoordinateLatLng> = await map.rectifyCoordinate(this.getUIContext().getHostContext(), locations);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "坐标转换",
      children: "坐标转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化需要转换的坐标，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-map/map-map-convertcoordinatesync/map-map-convertcoordinatesync",
        children: "convertCoordinateSync"
      }), "方法转换坐标。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let wgs84Position: mapCommon.LatLng = {\n  latitude: 30,\n  longitude: 118\n};\n// 转换经纬度坐标\nlet gcj02Position: mapCommon.LatLng =\n  map.convertCoordinateSync(mapCommon.CoordinateType.WGS84, mapCommon.CoordinateType.GCJ02, wgs84Position);\n"
      })
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
812202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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