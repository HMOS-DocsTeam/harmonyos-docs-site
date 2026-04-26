"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["128515"], {
605582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkts_api_arkts_arkts_js_apis_arkts_collections_arkts_apis_arkts_collections_array_arkts_apis_arkts_collections_array_md_d32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkts-api-arkts-arkts-js-apis-arkts-collections-arkts-apis-arkts-collections-array-arkts-apis-arkts-collections-array-md-d32.json
var site_docs_ref_arkts_api_arkts_arkts_js_apis_arkts_collections_arkts_apis_arkts_collections_array_arkts_apis_arkts_collections_array_md_d32_namespaceObject = JSON.parse('{"id":"arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array","title":"Class (Array)","description":"一种线性数据结构，底层基于数组实现，可以在ArkTS上并发实例间传递。","source":"@site/docs-ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array.md","sourceDirName":"arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array","slug":"/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Class (Array)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-array","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-arkts-collections-array"},"sidebar":"ref","previous":{"title":"模块描述","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections/arkts-apis-arkts-collections"},"next":{"title":"Class (Map)","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-map/arkts-apis-arkts-collections-map"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array.md


const frontMatter = {
	title: 'Class (Array)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-array',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-arkts-collections-array'
};
const contentTitle = 'Class (Array)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor-1",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor-2",
  "level": 2
}, {
  "value": "create",
  "id": "create",
  "level": 2
}, {
  "value": "from",
  "id": "from",
  "level": 2
}, {
  "value": "from",
  "id": "from-1",
  "level": 2
}, {
  "value": "from18+",
  "id": "from18",
  "level": 2
}, {
  "value": "from18+",
  "id": "from18-1",
  "level": 2
}, {
  "value": "isArray18+",
  "id": "isarray18",
  "level": 2
}, {
  "value": "of18+",
  "id": "of18",
  "level": 2
}, {
  "value": "copyWithin18+",
  "id": "copywithin18",
  "level": 2
}, {
  "value": "lastIndexOf18+",
  "id": "lastindexof18",
  "level": 2
}, {
  "value": "some18+",
  "id": "some18",
  "level": 2
}, {
  "value": "reduceRight18+",
  "id": "reduceright18",
  "level": 2
}, {
  "value": "reduceRight18+",
  "id": "reduceright18-1",
  "level": 2
}, {
  "value": "pop",
  "id": "pop",
  "level": 2
}, {
  "value": "push",
  "id": "push",
  "level": 2
}, {
  "value": "join",
  "id": "join",
  "level": 2
}, {
  "value": "shift",
  "id": "shift",
  "level": 2
}, {
  "value": "reverse18+",
  "id": "reverse18",
  "level": 2
}, {
  "value": "unshift",
  "id": "unshift",
  "level": 2
}, {
  "value": "toString18+",
  "id": "tostring18",
  "level": 2
}, {
  "value": "slice",
  "id": "slice",
  "level": 2
}, {
  "value": "sort",
  "id": "sort",
  "level": 2
}, {
  "value": "indexOf",
  "id": "indexof",
  "level": 2
}, {
  "value": "forEach",
  "id": "foreach",
  "level": 2
}, {
  "value": "map",
  "id": "map",
  "level": 2
}, {
  "value": "filter",
  "id": "filter",
  "level": 2
}, {
  "value": "reduce",
  "id": "reduce",
  "level": 2
}, {
  "value": "reduce",
  "id": "reduce-1",
  "level": 2
}, {
  "value": "at",
  "id": "at",
  "level": 2
}, {
  "value": "entries",
  "id": "entries",
  "level": 2
}, {
  "value": "keys",
  "id": "keys",
  "level": 2
}, {
  "value": "values",
  "id": "values",
  "level": 2
}, {
  "value": "find",
  "id": "find",
  "level": 2
}, {
  "value": "includes",
  "id": "includes",
  "level": 2
}, {
  "value": "findIndex",
  "id": "findindex",
  "level": 2
}, {
  "value": "fill",
  "id": "fill",
  "level": 2
}, {
  "value": "shrinkTo",
  "id": "shrinkto",
  "level": 2
}, {
  "value": "extendTo",
  "id": "extendto",
  "level": 2
}, {
  "value": "concat",
  "id": "concat",
  "level": 2
}, {
  "value": "splice",
  "id": "splice",
  "level": 2
}, {
  "value": "every18+",
  "id": "every18",
  "level": 2
}, {
  "value": "toLocaleString18+",
  "id": "tolocalestring18",
  "level": 2
}, {
  "value": "splice",
  "id": "splice-1",
  "level": 2
}, {
  "value": "[Symbol.iterator]",
  "id": "symboliterator",
  "level": 2
}, {
  "value": "index: number",
  "id": "index-number",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    t: "t",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    u: "u",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "class-array",
        children: "Class (Array)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一种线性数据结构，底层基于数组实现，可以在ArkTS上并发实例间传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要在ArkTS上并发实例间传递Array时，可以通过传递Array引用提升传递性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863229)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文档中存在泛型的使用，涉及以下泛型标记符："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T：Type，支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
          children: "Sendable支持的数据类型"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Sendable"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array的元素个数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个ArkTS Array的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
        children: "语言基础类库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10200012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Array's constructor cannot be directly invoked."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let array = new collections.Array<number>();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor-1",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(first: T, ...left: T[])"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS Array的构造函数，通过开发者提供的元素进行初始化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化ArkTS Array的第一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化ArkTS Array的剩余元素。默认值为空数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
        children: "语言基础类库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10200012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Array's constructor cannot be directly invoked."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let array = new collections.Array<number>(1, 2, 3, 4);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constructor-2",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(...items: T[])"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS Array的构造函数，通过开发者提供的元素进行初始化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化ArkTS Array的元素。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
        children: "语言基础类库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10200012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Array's constructor cannot be directly invoked."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arrayPara  = [1,2,3];\nlet array = new collections.Array<number>(...arrayPara);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create",
      children: "create"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static create<T>(arrayLength: number, initialValue: T): Array<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成一个固定长度的Array，其中，每个元素的初始值为initialValue。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arrayLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于构造ArkTS Array的长度。取值应为非负整数，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "initialValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于填充ArkTS Array的值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新创建的ArkTS Array实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let array = collections.Array.create<number>(3, 10); // [10, 10, 10]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "from",
      children: "from"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static from<T>(arrayLike: ArrayLike<T>): Array<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从一个实现了ArrayLike接口的对象创建一个新的ArkTS Array。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arrayLike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayLike<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于构造ArkTS Array的对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新创建的ArkTS Array实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 正例\nlet array : Array<string> = ['str1', 'str2', 'str3']; // 原生Array<T>，T是Sendable数据类型。\nlet sendableArray = collections.Array.from<string>(array); // 返回Sendable Array<T>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 反例\nlet array : Array<Array<string>> = [['str1', 'str2', 'str3'], ['str4', 'str5', 'str6'], ['str7', 'str8', 'str9']]; // 原生Array<T>，T是非Sendable数据类型。\nlet sendableArray = collections.Array.from<Array<string>>(array); // 打印异常信息：Parameter error.Only accept sendable value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "from-1",
      children: "from"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static from<T>(iterable: Iterable<T>): Array<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从一个实现了Iterable接口的对象创建一个新的ArkTS Array。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iterable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterable<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于构造ArkTS Array的对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新创建的ArkTS Array实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const mapper = new Map([\n  ['1', 'a'],\n  ['2', 'b'],\n]);\nlet newArray: collections.Array<string> = collections.Array.from(mapper.values());\nconsole.info(newArray.toString()); // 预期输出： a,b\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "from18",
      children: "from18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static from<T>(arrayLike: ArrayLike<T> | Iterable<T>, mapFn: ArrayFromMapFn<T, T>): Array<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从一个实现了ArrayLike接口的对象创建一个新的ArkTS Array，并且使用自定义函数处理每个数组元素。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arrayLike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayLike<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterable<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mapFn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-types/arkts-apis-arkts-collections-types#arrayfrommapfn18",
              children: "ArrayFromMapFn"
            }), "<T,T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用数组每个元素的函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新创建的ArkTS Array实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let array : Array<number> = [1, 2, 3]; // 原生Array<T>，T是Sendable数据类型。\nlet newArray = collections.Array.from<number>(array, (value, index) => value + index); // 返回新的 Array<T>\nconsole.info(newArray.toString()); // 预期输出： 1, 3, 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "from18-1",
      children: "from18+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["static from<U, T>(arrayLike: ArrayLike", (0,jsx_runtime.jsxs)(_components.u, {
        children: [" | Iterable", (0,jsx_runtime.jsx)(_components.u, {
          children: ", mapFn: ArrayFromMapFn<U, T>): Array<T>"
        })]
      })]
    }), (0,jsx_runtime.jsx)(_components.u, {
      children: (0,jsx_runtime.jsxs)(_components.u, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从一个实现了ArrayLike接口的对象创建一个新的ArkTS Array，并且使用自定义函数处理每个数组元素，ArrayLike接口对象的元素类型可以和数组元素的类型不一样。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "arrayLike"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ArrayLike<U>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Iterable<U>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "mapFn"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-types/arkts-apis-arkts-collections-types#arrayfrommapfn18",
                  children: "ArrayFromMapFn"
                }), "<U, T>"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "调用数组每个元素的函数。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "Array<T>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新创建的ArkTS Array实例。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed."
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array : Array<number> = [1, 2, 3]; // 原生Array<T>\nlet newArray = collections.Array.from<number, string>(array, (value, index) => value + \".\" + index); // 返回新的 Array<T>\nconsole.info(newArray.toString()); // 预期输出： 1.0, 2.1, 3.2\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "isarray18",
          children: "isArray18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static isArray(value: Object | undefined | null): boolean"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查传入的参数是否是一个ArkTS Array。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "value"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "undefined"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "null"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "假如给定对象是ArkTS Array数组，返回true，否则返回false。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed."
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let arr: collections.Array<string> = new collections.Array('a', 'b', 'c', 'd');\nlet result: boolean = collections.Array.isArray(arr);\nconsole.info(result + ''); // 预期输出： true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "of18",
          children: "of18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static of<T>(...items: T[]): Array<T>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过可变数量的参数创建一个新的ArkTS Array。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "items"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T[]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于创建数组的元素集合，参数个数可以是0个、1个或者多个。默认值为空数组。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "Array<T>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新的ArkTS Array实例。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed."
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let arr: collections.Array<string> = collections.Array.of('a', 'b', 'c', 'd');\nconsole.info(arr.toString()); // 预期输出： a, b, c, d\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "copywithin18",
          children: "copyWithin18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "copyWithin(target: number, start: number, end?: number): Array<T>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从ArkTS Array指定范围内的元素依次拷贝到目标位置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "target"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标起始位置的下标，如果target < 0，则会从target + array.length位置开始。取值应为整数，当输入浮点数时会向下取整。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "start"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源起始位置下标，如果start < 0，则会从start + array.length位置开始。取值应为整数，当输入浮点数时会向下取整。拷贝过程中包含start位置下标所在的元素。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "end"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "源终止位置下标，如果end < 0，则会从end + array.length位置终止。默认为ArkTS Array的长度。取值应为整数，当输入浮点数时会向下取整。拷贝过程中不包含end位置下标所在的元素。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "Array<T>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "修改后的Array。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error: Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The copyWithin method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array: collections.Array<number> = collections.Array.from([1, 2, 3, 4, 5, 6, 7, 8]);\nlet copied: collections.Array<number> = array.copyWithin(3, 1, 3);\nconsole.info(copied.toString()); // 预期输出： 1, 2, 3, 2, 3, 6, 7, 8\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "lastindexof18",
          children: "lastIndexOf18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "lastIndexOf(searchElement: T, fromIndex?: number): number"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回ArkTS Array实例中最后一次出现searchElement的索引，如果对象不包含，则为-1。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "searchElement"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "待索引的值。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fromIndex"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "搜索的起始下标。默认值为0。如果下标大于等于ArkTS Array的长度，则返回-1。如果fromIndex < 0，则会从fromIndex + array.length位置开始搜索。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数组中元素的最后一个索引；没有找到，则返回-1。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The lastIndexOf method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array: collections.Array<number> = collections.Array.from([3, 5, 9]);\nconsole.info(array.lastIndexOf(3) + ''); // 预期输出： 0\nconsole.info(array.lastIndexOf(7) + ''); // 预期输出： -1\nconsole.info(array.lastIndexOf(9, 2) + ''); // 预期输出： 2\nconsole.info(array.lastIndexOf(9, -2) + ''); // 预期输出： -1\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "some18",
          children: "some18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "some(predicate: ArrayPredicateFn<T, Array<T>>): boolean"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "测试ArkTS Array是否存在满足指定条件的元素。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "predicate"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-types/arkts-apis-arkts-collections-types#arraypredicatefn18",
                  children: "ArrayPredicateFn"
                }), "<T, Array<T>>"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于测试的断言函数。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果存在元素满足指定条件返回true，否则返回false。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The some method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let newArray: collections.Array<number> = collections.Array.from([-10, 20, -30, 40, -50]);\nconsole.info(newArray.some((element: number) => element < 0) + ''); // 预期输出： true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "reduceright18",
          children: "reduceRight18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "reduceRight(callbackFn: ArrayReduceCallback<T, T, Array<T>>): T"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对Array中的每个元素按照从右到左顺序执行回调函数，将其结果作为累加值，并返回最终的结果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callbackFn"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-types/arkts-apis-arkts-collections-types#arrayreducecallback18",
                  children: "ArrayReduceCallback"
                }), "<T, T, Array<T>>"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "一个接受四个参数的函数，用于对每个元素执行操作，并将结果作为累加值传递给下一个元素。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数执行后的最终结果。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The reduceRight method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet reducedValue = array.reduceRight((accumulator, value) => accumulator + value); // 累加所有元素\nconsole.info(reducedValue + ''); // 预期输出： 15\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "reduceright18-1",
          children: "reduceRight18+"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["reduceRight<U = T>(callbackFn: ArrayReduceCallback<U, T, Array", (0,jsx_runtime.jsx)(_components.t, {
            children: ">, initialValue: U): U"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["与 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#reduceright18",
            children: "reduceRight"
          }), "方法类似，但它接受一个初始值作为第二个参数，用于在Array从右到左顺序遍历开始前初始化累加器。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callbackFn"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-types/arkts-apis-arkts-collections-types#arrayreducecallback18",
                  children: "ArrayReduceCallback"
                }), "<U, T, Array<T>>"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "一个接受四个参数的函数，用于对每个元素执行操作，并将结果作为累加值传递给下一个元素。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "initialValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "U"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于初始化累加器的值。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "U"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数执行后的最终结果。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The reduceRight method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 此处使用一个初始值为0的累加器，并将其与Array中的每个元素相加，最终返回累加后的总和\nlet array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet reducedValue = array.reduceRight<number>((accumulator: number, value: number) => accumulator + value, 0); // 累加所有元素，初始值为0\nconsole.info(reducedValue + ''); // 预期输出： 15\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "pop",
          children: "pop"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pop(): T | undefined"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从ArkTS Array中移除并返回最后一个元素。如果Array为空，则返回undefined，且Array不发生变化。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "undefined"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The pop method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3);\nlet lastElement = array.pop(); // 返回3，Array变为[1, 2]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "push",
          children: "push"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "push(...items: T[]): number"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkTS Array的末尾添加元素，并返回新的Array长度。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "items"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T[]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "要添加到Array末尾的元素。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回新Array的长度。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The push method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3);\nlet length = array.push(4, 5); // 返回5，Array变为[1, 2, 3, 4, 5]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "join",
          children: "join"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "join(separator?: string): string"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将ArkTS Array的所有元素连接成一个字符串，元素之间可以用指定的分隔符分隔。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "separator"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于分隔Array元素的字符串。如果省略，则使用逗号分隔。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "包含所有Array元素连接成的字符串。如果Array为空，则返回空字符串。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The join method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<string>('a', 'b', 'c');\nlet joinedString = array.join('-'); // 返回 \"a-b-c\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "shift",
          children: "shift"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "shift(): T | undefined"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从ArkTS Array中移除并返回第一个元素。如果Array为空，则返回undefined，且Array不发生变化。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "undefined"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The shift method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3);\nlet firstElement = array.shift(); // 返回1，Array变为[2, 3]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "reverse18",
          children: "reverse18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "reverse(): Array<T>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反转ArkTS Array数组中的元素，并返回同一数组的引用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "Array<T>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "反转后的ArkTS Array对象。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The reverse method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet reversed = array.reverse();\nconsole.info(array.toString()); // 预期输出： 5, 4, 3, 2, 1\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "unshift",
          children: "unshift"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "unshift(...items: T[]): number"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkTS Array的首端插入元素，并返回新的Array长度。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "items"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T[]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "要插入到Array首端的元素。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新Array的长度。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The unshift method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3);\nlet newLength = array.unshift(0); // 返回4，Array变为[0, 1, 2, 3]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "tostring18",
          children: "toString18+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "toString(): string"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS数组转换为字符串。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 18开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "一个包含数组所有元素的字符串。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The toString method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet stringArray = array.toString();\nconsole.info(stringArray); // 预期输出：1,2,3,4,5\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "slice",
          children: "slice"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "slice(start?: number, end?: number): Array<T>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回一个新的Array，该Array是原始ArkTS Array的切片。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "start"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开始索引。如果start < 0，则会从start + array.length位置开始。默认值为0。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "end"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "结束索引（不包括该元素）。如果end < 0，则会到end + array.length位置结束。默认为原始ArkTS Array的长度。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "Array<T>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "包含原始Array切片的新Array。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The slice method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet slicedArray = array.slice(1, 3); // 返回[2, 3]，Array保持不变\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "sort",
          children: "sort"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sort(compareFn?: (a: T, b: T) => number): Array<T>"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对ArkTS Array进行排序，并返回排序后的Array。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "compareFn"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "(a: T, b: T) => number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于确定元素顺序的函数。默认使用升序排序。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "Array<T>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "排序后的Array。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The sort method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<number>(1, 3, 5, 4, 2);\narray.sort((a: number, b: number) => a - b); // [1, 2, 3, 4, 5]\narray.sort((a: number, b: number) => b - a); // [5, 4, 3, 2, 1]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "indexof",
          children: "indexOf"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "indexOf(searchElement: T, fromIndex?: number): number"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回在ArkTS Array中搜索元素首次出现的索引，如果不存在则返回-1。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "searchElement"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "要搜索的值。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fromIndex"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开始搜索的索引，从0开始，默认值为0。如果下标大于等于ArkTS Array的长度，则返回-1。如果fromIndex < 0，则会从fromIndex + array.length位置开始搜索。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "返回值："
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
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "搜索元素首次出现的索引；如果不存在，则返回-1。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The indexOf method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<string>('a', 'b', 'c');\nlet index = array.indexOf('b'); // 返回1，因为'b'在索引1的位置\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "foreach",
          children: "forEach"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "forEach(callbackFn: (value: T, index: number, array: Array<T>) => void): void"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对Array中的每个元素执行提供的回调函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API"
            })
          }), "：从API version 12 开始，该接口支持在元服务中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Utils.Lang"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callbackFn"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "(value: T, index: number, array: Array<T>) => void"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于对每个元素执行的回调函数。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "错误码："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/errorcode-universal/errorcode-universal",
            children: "通用错误码"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
            children: "语言基础类库错误码"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "错误码ID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "错误信息"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "401"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Parameter error."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200011"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "The forEach method cannot be bound."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "10200201"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Concurrent modification error."
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let array = new collections.Array<string>('a', 'b', 'c');\narray.forEach((value, index, array) => {\n  console.info(`Element ${value} at index ${index}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "map",
          children: "map"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["map", (0,jsx_runtime.jsxs)(_components.u, {
            children: ["(callbackFn: (value: T, index: number, array: Array<T>) => U): Array", (0,jsx_runtime.jsx)(_components.u, {})]
          })]
        }), (0,jsx_runtime.jsx)(_components.u, {
          children: (0,jsx_runtime.jsxs)(_components.u, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对Array中的每个元素执行提供的回调函数，并返回一个新的Array，该Array包含回调函数的结果。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API"
                })
              }), "：从API version 12 开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力："
                })
              }), " SystemCapability.Utils.Lang"]
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
                    children: "参数名"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "必填"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callbackFn"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "(value: T, index: number, array: Array<T>) => U"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "用于对每个元素执行的回调函数。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "返回值："
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
                    children: "Array<U>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "包含回调函数结果的新Array。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "错误码："
                })
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                children: "语言基础类库错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "错误码ID"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "错误信息"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "401"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Parameter error."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200011"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "The map method cannot be bound."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Concurrent modification error."
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "示例："
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 此处将原始Array中的每个字符串元素转换为大写形式，并返回一个新Array，其中包含转换后的字符串\nlet array = new collections.Array<string>('a', 'b', 'c');\nlet mappedArray = array.map((value, index, array) => {\n  return value.toUpperCase(); // 将每个字符串元素转换为大写\n});\nconsole.info(\"\" + mappedArray); // 输出: A, B, C\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "filter",
              children: "filter"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "filter(predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T>"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "返回一个新Array，其中包含通过指定回调函数测试的所有元素。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API"
                })
              }), "：从API version 12 开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力："
                })
              }), " SystemCapability.Utils.Lang"]
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
                    children: "参数名"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "必填"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "predicate"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "(value: T, index: number, array: Array<T>) => boolean"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "一个接受三个参数的函数，用于测试每个元素是否应该包含在新Array中。当返回值为true时表示当前元素通过测试，需被保留在新数组中。为false时表示当前元素未通过测试，需被排除在新数组外。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "返回值："
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
                    children: "Array<T>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "包含通过测试的元素的新Array。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "错误码："
                })
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                children: "语言基础类库错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "错误码ID"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "错误信息"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "401"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Parameter error."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200011"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "The filter method cannot be bound."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Concurrent modification error."
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "示例："
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet filteredArray = array.filter((value : number) => value % 2 === 0); // 返回[2, 4]，只包含偶数\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "reduce",
              children: "reduce"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "reduce(callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T): T"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对Array中的每个元素执行回调函数，将其结果作为累加值，并返回最终的结果。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API"
                })
              }), "：从API version 12 开始，该接口支持在元服务中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力："
                })
              }), " SystemCapability.Utils.Lang"]
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
                    children: "参数名"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "必填"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callbackFn"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "(previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "一个接受四个参数的函数，用于对每个元素执行操作，并将结果作为累加值传递给下一个元素。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "返回值："
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
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数执行后的最终结果。"
                  })]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "错误码："
                })
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/errorcode-universal/errorcode-universal",
                children: "通用错误码"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                children: "语言基础类库错误码"
              }), "。"]
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "错误码ID"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "错误信息"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "401"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Parameter error."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200011"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "The reduce method cannot be bound."
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "10200201"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Concurrent modification error."
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "示例："
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet reducedValue = array.reduce((accumulator, value) => accumulator + value); // 返回15，累加所有元素\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "reduce-1",
              children: "reduce"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["reduce", (0,jsx_runtime.jsx)(_components.u, {
                children: "(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U, initialValue: U): U"
              })]
            }), (0,jsx_runtime.jsxs)(_components.u, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "与 reduce方法类似，但它接受一个初始值作为第二个参数，用于在Array遍历开始前初始化累加器。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数："
                  })
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "callbackFn"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "(previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "一个接受四个参数的函数，用于对每个元素执行操作，并将结果作为累加值传递给下一个元素。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "initialValue"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "U"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "用于初始化累加器的值。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "U"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "回调函数执行后的最终结果。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The reduce method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// 此处使用一个初始值为0的累加器，并将其与Array中的每个元素相加，最终返回累加后的总和\nlet array = new collections.Array(1, 2, 3, 4, 5);\nlet reducedValue = array.reduce<number>((accumulator: number, value: number) => accumulator + value, 0); // 返回15，累加所有元素，初始值为0\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "at",
                children: "at"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "at(index: number): T | undefined"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回Array中指定索引位置的元素。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "index"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "要返回的Array元素的索引（从零开始），取值为整数。负数索引从Array末尾开始计数，如果index < 0，则会访问index + array.length位置的元素。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "T"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "undefined"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The at method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet elementAtIndex = array.at(2); // 返回3，因为索引是从0开始的\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "entries",
                children: "entries"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "entries(): IterableIterator<[number, T]>"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回一个新的可迭代对象，该对象包含Array中每个元素的键值对。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "IterableIterator<[number, T]>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "包含Array中每个元素的键值对的迭代器。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The entries method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet iterator = array.entries();\nconsole.info(iterator.next().value); // 输出：[0, 1]，第一个元素的键值对\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "keys",
                children: "keys"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "keys(): IterableIterator<number>"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回一个新的可迭代对象，该对象包含Array中每个元素的索引。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "IterableIterator<number>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "包含Array中每个元素的索引的可迭代迭代器。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The keys method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet iterator = array.keys();\nfor (const key of iterator) {\n  console.info(\"\" + key); // 依次输出 0,1,2,3,4\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "values",
                children: "values"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "values(): IterableIterator<T>"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回一个新的可迭代对象，该对象包含Array中每个元素的值。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "IterableIterator<T>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "包含Array中每个元素的值的可迭代迭代器。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The values method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet iterator = array.values();\nfor(const value of iterator) {\n  console.info(\"\" + value); // 依次输出 1,2,3,4,5\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "find",
                children: "find"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "find(predicate: (value: T, index: number, obj: Array<T>) => boolean): T | undefined"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回Array中第一个满足指定测试函数的元素的值，如果所有元素都不满足，则返回undefined。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "predicate"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "(value: T, index: number, obj: Array<T>) => boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "一个接受三个参数的函数，用于测试每个元素是否满足条件。当返回值为true时表示元素满足条件，会立即停止遍历，并将该元素作为结果返回。为false时表示元素不满足条件，会继续检查下一个元素，直到找到符合条件的元素或遍历完整个数组。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "T"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "undefined"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The find method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet foundValue = array.find((value: number) => value % 2 === 0); // 返回2，第一个偶数元素\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "includes",
                children: "includes"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "includes(searchElement: T, fromIndex?: number): boolean"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "判断Array是否包含指定的元素，并返回一个布尔值。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数："
                  })
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "searchElement"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "T"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "要搜索的元素。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fromIndex"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "开始搜索的索引。默认值为0。如果下标大于等于ArkTS Array的长度，则返回false。如果fromIndex < 0，则会从fromIndex + array.length位置开始搜索。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "如果Array包含指定的元素，则返回true；否则返回false。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The includes method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet includesResult = array.includes(3); // 返回true，因为Array中包含3\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "findindex",
                children: "findIndex"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "findIndex(predicate: (value: T, index: number, obj: Array<T>) => boolean): number"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回Array中第一个满足指定测试函数的元素的索引，如果所有元素都不满足，则返回-1。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "predicate"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "(value: T, index: number, obj: Array<T>) => boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "一个接受三个参数的函数，用于测试每个元素是否满足条件。当返回值为true时表示当前元素满足条件，会立即停止遍历，并返回该元素的索引。为false时表示当前元素不满足条件，会继续检查下一个元素，直到找到符合条件的元素或遍历完整个数组。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "第一个满足条件的元素的索引；如果所有元素都不满足条件，则返回-1。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The findIndex method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet foundIndex = array.findIndex((value: number) => value % 2 === 0); // 返回1，因为2是第一个偶数元素\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "fill",
                children: "fill"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "fill(value: T, start?: number, end?: number): Array<T>"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "使用指定的值填充Array中指定范围的所有元素。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数："
                  })
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "value"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "T"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "要填充的值。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "开始填充的索引。默认值为0。如果start < 0，则从下标为0的元素开始。如果start > 数组长度或start > end，则不做填充。填充过程中包含start位置下标所在的元素。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "end"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "结束填充的索引（不包括该元素）。如果省略或end > 数组长度，则填充到Array的最后一个元素。如果end < 0或start > end，则不做填充。填充过程中不包含end位置下标所在的元素。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "Array<T>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "填充后的Array。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The fill method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array(1, 2, 3, 4, 5);\narray.fill(0, 1, 3); // 返回[1, 0, 0, 4, 5]，因为1到3的索引范围内的元素被替换为0\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "shrinkto",
                children: "shrinkTo"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "shrinkTo(arrayLength: number): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "使Array收缩到指定长度。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "arrayLength"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Array的新长度。如果arrayLength >= array.length，则Array不变。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The shrinkTo method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array1 = new collections.Array(1, 2, 3, 4, 5);\narray1.shrinkTo(1); // array内容变为：[1]\n\nlet array2 = new collections.Array(1, 2, 3, 4, 5);\narray2.shrinkTo(10); // array内容不变\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "extendto",
                children: "extendTo"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "extendTo(arrayLength: number, initialValue: T): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "使Array扩展到指定长度，扩展的部分使用给定值填充。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数："
                  })
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "arrayLength"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Array的新长度。如果arrayLength <= array.length，则Array不变。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "initialValue"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "T"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "扩展的部分的填充值。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The extendTo method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array1 = new collections.Array(1, 2, 3);\narray1.extendTo(5, 10); // array内容变为：[1, 2, 3, 10, 10]\n\nlet array2 = new collections.Array(1, 2, 3);\narray2.extendTo(1, 10); // array内容不变\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "concat",
                children: "concat"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "concat(...items: ConcatArray<T>[]): Array<T>"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "拼接两个或多个数组。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API："
                  })
                }), " 从API version 12开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "items"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "ConcatArray<T>[]"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "拼接两个或多个数组。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "Array<T>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "拼接后的数组。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Not a valid array."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The concat method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array(1, 2, 3);\nlet array1 = new collections.Array(4, 5, 6);\nlet array2 = new collections.Array(7, 8, 9);\n\nlet concatArray = array.concat(array1, array2); // concatArray的内容为：[1, 2, 3, 4, 5, 6, 7, 8, 9]\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "splice",
                children: "splice"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "splice(start: number): Array<T>"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "删除Array中指定位置(start)以及之后的所有元素。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "开始索引。如果-array.length =< start < 0，从start + array.length开始，如果start < -array.length，则从0开始。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "Array<T>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "返回一个新的包含被删除元素的Array对象。如果没有元素被删除，返回一个空的Array对象。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The splice method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet removeArray = array.splice(2); // array内容变为[1, 2]，返回[3, 4, 5]\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "every18",
                children: "every18+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "every(predicate: ArrayPredicateFn<T, Array<T>>): boolean"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "测试ArkTS Array中的所有元素是否满足指定条件。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API："
                  })
                }), " 从API version 18开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "predicate"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: [(0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-types/arkts-apis-arkts-collections-types#arraypredicatefn18",
                        children: "ArrayPredicateFn"
                      }), "<T, Array<T>>"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "用于测试的断言函数。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "如果所有元素都满足指定条件则返回true，否则返回false。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The every method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let newArray: collections.Array<number> = collections.Array.from([-10, 20, -30, 40, -50]);\nconsole.info(newArray.every((element: number) => element > 0) + ''); // 预期输出：false\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "tolocalestring18",
                children: "toLocaleString18+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "toLocaleString(): string"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "根据当前应用的系统地区获取符合当前文化习惯的字符串表示形式，让每个元素调用自己的toLocaleString方法转换为字符串，然后使用逗号将每个元素的结果字符串按照顺序拼接成字符串。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API："
                  })
                }), " 从API version 18开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "一个包含数组所有元素的字符串。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The toLocaleString method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// 当前应用所在系统为法国地区\nlet array = new collections.Array<number | string>(1000, 'Test', 53621);\nlet stringArray = array.toLocaleString();\nconsole.info(stringArray); // 预期输出：1,000,Test,53,621\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "splice-1",
                children: "splice"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "splice(start: number, deleteCount: number, ...items: T[]): Array<T>"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "删除Array中指定位置的元素，需要时在Array的指定位置插入新元素。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API"
                  })
                }), "：从API version 12 开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "参数："
                  })
                })
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "开始索引。如果-array.length =< start < 0，从start + array.length开始，如果start < -array.length，则从0开始。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "deleteCount"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "删除元素的个数， 如果deleteCount <= 0，则不删除任何元素。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "items"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "T[]"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "从start位置开始插入的新元素。如果省略，仅删除Array内的指定元素。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "Array<T>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "返回一个新的包含被删除元素的Array对象。如果没有元素被删除，返回一个空的Array对象。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The splice method cannot be bound."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200201"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Concurrent modification error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// 例1：\nlet array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet removeArray = array.splice(2, 2); // array内容变为[1, 2, 5]，返回[3, 4]\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// 例2：\nlet array = new collections.Array<number>(1, 2, 3, 4, 5);\nlet removeArray = array.splice(2, 2, 6, 7, 8); // array内容变为[1, 2, 6, 7, 8, 5]，返回[3, 4]\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "symboliterator",
                children: "[Symbol.iterator]"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "",
                  children: "Symbol.iterator"
                }), ": IterableIterator<T>"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回一个迭代器，迭代器的每一项都是一个 JavaScript 对象，并返回该对象。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(730767)/* ["default"] */.A) + "",
                  width: "102",
                  height: "38"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "本接口不支持在.ets文件中使用。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API："
                  })
                }), " 从API version 12开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "IterableIterator<T>"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "返回一个迭代器。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码："
                  })
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200011"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The Symbol.iterator method cannot be bound."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array= new collections.Array<number>(1, 2, 3, 4);\n\nfor (let item of array) {\n  console.info(`value : ${item}`);\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "index-number",
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "T",
                  children: "index: number"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回Array指定索引位置的元素。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API："
                  })
                }), " 从API version 12开始，该接口支持在元服务中使用。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.Utils.Lang"]
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
                      children: "参数名"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "必填"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "index"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "所需代码单元的从零开始的索引。当index<0 或者index>=length，则会抛出错误。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "返回值："
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
                      children: "T"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Array给定的元素数据类型。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
                  children: "语言基础类库错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "10200001"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The value of index is out of range."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "示例："
                  })
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "let array = new collections.Array<number>(1, 2, 4);\nconsole.info(\"Element at index 1: \", array[1]);\n"
                })
              }), "\n"]
            })]
          })
        })]
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
730767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
863229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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