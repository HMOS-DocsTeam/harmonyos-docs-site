"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["394506"], {
79758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_location_services_map_site_search_map_site_search_md_293_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-location-services-map-site-search-map-site-search-md-293.json
var site_docs_map_kit_guide_map_location_services_map_site_search_map_site_search_md_293_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-location-services/map-site-search/map-site-search","title":"POI搜索","description":"场景介绍","source":"@site/docs/map-kit-guide/map-location-services/map-site-search/map-site-search.md","sourceDirName":"map-kit-guide/map-location-services/map-site-search","slug":"/map-kit-guide/map-location-services/map-site-search/","permalink":"/harmonyos-docs-site/map-kit-guide/map-location-services/map-site-search/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"POI搜索","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-site-search","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"海量点图层","permalink":"/harmonyos-docs-site/map-kit-guide/map-drawing/map-mass-point/"},"next":{"title":"地理编码","permalink":"/harmonyos-docs-site/map-kit-guide/map-location-services/map-site-geocode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-location-services/map-site-search/map-site-search.md


const frontMatter = {
	title: 'POI搜索',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-site-search',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'POI搜索';

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
}, {
  "value": "关键字搜索",
  "id": "关键字搜索",
  "level": 3
}, {
  "value": "周边搜索",
  "id": "周边搜索",
  "level": 3
}, {
  "value": "自动补全",
  "id": "自动补全",
  "level": 3
}, {
  "value": "地点详情",
  "id": "地点详情",
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
        id: "poi搜索",
        children: "POI搜索"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供多种查询POI信息的能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关键字搜索：通过用户输入的关键字，返回地点列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "周边搜索：基于用户设备位置进行地点查找。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自动补全：根据输入的关键字返回预测的输入关键字和地点查询建议。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "地点详情：查询某个地点更详细的信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是POI搜索相关接口，主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-site/map-site",
        children: "site"
      }), "命名空间下的方法提供，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/map-api/map-arkts/map-site/map-site",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbytext",
              children: "searchByText"
            }), "(searchByTextParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbytextparams",
              children: "SearchByTextParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbytextresult",
              children: "SearchByTextResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键字搜索。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbytext-1",
              children: "searchByText"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", searchByTextParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbytextparams",
              children: "SearchByTextParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbytextresult",
              children: "SearchByTextResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键字搜索。支持上传Context上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#nearbysearch",
              children: "nearbySearch"
            }), "(nearbySearchParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#nearbysearchparams",
              children: "NearbySearchParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#nearbysearchresult",
              children: "NearbySearchResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "周边搜索。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#nearbysearch-1",
              children: "nearbySearch"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", nearbySearchParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#nearbysearchparams",
              children: "NearbySearchParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#nearbysearchresult",
              children: "NearbySearchResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "周边搜索。支持上传Context上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#queryautocomplete",
              children: "queryAutoComplete"
            }), "(queryAutoCompleteParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#queryautocompleteparams",
              children: "QueryAutoCompleteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#queryautocompleteresult",
              children: "QueryAutoCompleteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动补全。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#queryautocomplete-1",
              children: "queryAutoComplete"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", queryAutoCompleteParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#queryautocompleteparams",
              children: "QueryAutoCompleteParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#queryautocompleteresult",
              children: "QueryAutoCompleteResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动补全。支持上传Context上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbyid",
              children: "searchById"
            }), "(searchByIdParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbyidparams",
              children: "SearchByIdParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbyidresult",
              children: "SearchByIdResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点详情。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbyid-1",
              children: "searchById"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            }), ", searchByIdParams: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbyidparams",
              children: "SearchByIdParams"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/map-api/map-arkts/map-site/map-site#searchbyidresult",
              children: "SearchByIdResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地点详情。支持上传Context上下文。"
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
        children: "import { site } from '@kit.MapKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关键字搜索",
      children: "关键字搜索"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定的关键字和可选的地理范围，查询诸如旅游景点、企业和学校之类的地点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let params: site.SearchByTextParams = {\n  // 根据自定义关键字进行搜索，例如：“故宫”、“夫子庙”\n  query: \"Piazzale Dante, 41, 55049 Viareggio, Tuscany, Italy\",\n  // 经纬度坐标\n  location: {\n    latitude: 31.984,\n    longitude: 118.76625\n  },\n  // 指定地理位置的范围半径\n  radius: 10000,\n  // 搜索结果的语言类型\n  language: \"en\"\n};\n// 返回关键字搜索结果\ntry {\n  const result = await site.searchByText(params);\n  console.info(`Succeeded in searching by text. result is ${JSON.stringify(result)}`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed in searching by text. Code is ${err.code}, message is ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "周边搜索",
      children: "周边搜索"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过用户传入自己的位置，可以返回周边地点列表。您可以通过提供关键字或指定要搜索的地点的类型来优化搜索结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let params: site.NearbySearchParams = {\n  location: {\n    latitude:51.50811219132287,\n    longitude:-0.07594896472392065\n  },\n  poiTypes: [\n    \"Watch_Store\",\n    \"SUBWAY\",\n    \"PRIMARY_SCHOOL\",\n    \"GENERAL_AUTO_REPAIR_SERVICE_CENTER\"\n  ]\n}\n// 返回周边搜索结果\ntry {\n  const result = await site.nearbySearch(params);\n  console.info(`Succeeded in searching nearby. result is ${JSON.stringify(result)}`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed in searching nearby. Code is ${err.code}, message is ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动补全",
      children: "自动补全"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据输入的关键字，将最有可能的搜索词呈现给用户，以减少用户输入信息，提升用户体验。如：输入“北京”，提示“北京市”、“北京站”、“北京西站”等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let params: site.QueryAutoCompleteParams = {\n  // 自定义关键字\n  query: \"hotel\",\n  // 经纬度坐标\n  location: {\n    latitude: 31.984410259206815,\n    longitude: 118.76625379397866\n  },\n  language: \"en\",\n  // 返回子节点\n  isChildren: true\n};\n// 返回自动补全结果\ntry {\n  const result = await site.queryAutoComplete(params);\n  console.info(`Succeeded in querying. result is ${JSON.stringify(result)}`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed in querying. Code is ${err.code}, message is ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "地点详情",
      children: "地点详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据地点的唯一主键地点ID（siteId）获取地点详情。地点详细信息请求返回有关指定地点的更全面的信息，如地点名称、地址详细信息、经纬度等。siteId可通过其他接口（关键字搜索、周边搜索、地点详情、自动补全、正地理编码）的返回结果中获取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let params: site.SearchByIdParams = {\n  // 指定主键地点ID\n  siteId: \"144129739873977856\",\n  language: \"en\",\n  // 返回子节点\n  isChildren: true\n};\n// 返回地点详情结果\ntry {\n  const result = await site.searchById(params);\n  console.info(`Succeeded in searching. result is ${JSON.stringify(result)}`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed in searching. Code is ${err.code}, message is ${err.message}`);\n}\n"
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