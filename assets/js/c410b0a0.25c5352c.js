"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["271097"], {
168200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_samplepoint_health_body_temperature_health_body_temperature_md_c41_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-data-type-health-samplepoint-health-body-temperature-health-body-temperature-md-c41.json
var site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_samplepoint_health_body_temperature_health_body_temperature_md_c41_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature/health-body-temperature","title":"体温","description":"体温","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature/health-body-temperature.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature","slug":"/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"体温","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-body-temperature","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"压力","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-pressure/"},"next":{"title":"血压","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-blood-pressure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature/health-body-temperature.md


const frontMatter = {
	title: '体温',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-body-temperature',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '体温';

const assets = {

};



const toc = [{
  "value": "体温",
  "id": "体温-1",
  "level": 2
}, {
  "value": "OAuth权限",
  "id": "oauth权限",
  "level": 3
}, {
  "value": "采样明细数据",
  "id": "采样明细数据",
  "level": 3
}, {
  "value": "采样统计数据",
  "id": "采样统计数据",
  "level": 3
}, {
  "value": "皮肤体温",
  "id": "皮肤体温",
  "level": 2
}, {
  "value": "OAuth权限",
  "id": "oauth权限-1",
  "level": 3
}, {
  "value": "采样明细数据",
  "id": "采样明细数据-1",
  "level": 3
}, {
  "value": "采样统计数据",
  "id": "采样统计数据-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
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
        id: "体温",
        children: "体温"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "体温-1",
      children: "体温"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此数据记录用户在一小段时间内的体温数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Harmony SDK类型常量：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#%E5%B8%B8%E9%87%8F-2",
        children: "samplePointHelper.bodyTemperature.DATA_TYPE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oauth权限",
      children: "OAuth权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联盟卡片申请的权限名称：健康数据 > 体温数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "采样明细数据",
      children: "采样明细数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "明细字段说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#fields-2",
          children: "samplePointHelper.bodyTemperature.Fields"
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bodyTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体温"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摄氏度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[34, 42]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据开放说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开放API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询及时性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata",
              children: "healthStore.readData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表支持"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "采样统计数据",
      children: "采样统计数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "聚合统计策略说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#aggregatefields-1",
        children: "samplePointHelper.bodyTemperature.AggregateFields"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "聚合策略"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bodyTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体温"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据开放说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开放API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询及时性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreaggregatedata",
              children: "healthStore.aggregateData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表支持"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "皮肤体温",
      children: "皮肤体温"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此数据记录用户在一小段时间内的皮肤温度数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Harmony SDK类型常量：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#%E5%B8%B8%E9%87%8F-9",
          children: "samplePointHelper.skinTemperature.DATA_TYPE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oauth权限-1",
      children: "OAuth权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联盟卡片申请的权限名称：健康数据 > 体温数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "采样明细数据-1",
      children: "采样明细数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "明细字段说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#fields-9",
          children: "samplePointHelper.skinTemperature.Fields"
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skinTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "皮肤温度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "摄氏度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[20, 42]"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据开放说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开放API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询及时性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata",
              children: "healthStore.readData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表支持"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "采样统计数据-1",
      children: "采样统计数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "聚合统计策略说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#aggregatefields-5",
        children: "samplePointHelper.skinTemperature.AggregateFields"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "聚合策略"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skinTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "皮肤温度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据开放说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开放API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询及时性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstoreaggregatedata",
              children: "healthStore.aggregateData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分手表支持"
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