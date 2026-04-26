"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["749218"], {
736172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_blank_and_divider_ts_basic_components_blank_ts_basic_components_blank_md_c60_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-blank-and-divider-ts-basic-components-blank-ts-basic-components-blank-md-c60.json
var site_docs_ref_arkui_api_arkui_declarative_comp_blank_and_divider_ts_basic_components_blank_ts_basic_components_blank_md_c60_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank","title":"Blank","description":"空白填充组件，在容器主轴方向上，空白填充组件具有自动填充容器空余部分的能力。仅当父组件为Row/Column/Flex时生效。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank.md","sourceDirName":"arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank","slug":"/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Blank","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-blank"},"sidebar":"ref","previous":{"title":"信息展示公共接口","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/information-display/ts-information-display-common/ts-information-display-common"},"next":{"title":"Divider","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank.md


const frontMatter = {
	title: 'Blank',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-blank'
};
const contentTitle = 'Blank';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "color",
  "id": "color",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（占满空余空间）",
  "id": "示例1占满空余空间",
  "level": 3
}, {
  "value": "示例2（填充固定宽度）",
  "id": "示例2填充固定宽度",
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
        id: "blank",
        children: "Blank"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["空白填充组件，在容器主轴方向上，空白填充组件具有自动填充容器空余部分的能力。仅当父组件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
        children: "Row"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
        children: "Column"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
        children: "Flex"
      }), "时生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(978545)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持设置子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blank(min?: number | string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建空白填充组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Blank在父容器", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
          children: "Row"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
          children: "Column"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
          children: "Flex"
        }), "主轴方向上未设置大小时会自动拉伸、压缩，设置了大小或容器自适应子节点大小时不会自动拉伸、压缩。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blank设置主轴方向大小（size）与min时约束关系为max(min, size)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blank在父容器交叉轴上设置大小时不会撑满父容器交叉轴，交叉轴不设置大小时alignSelf默认值为ItemAlign.Stretch，会撑满容器交叉轴。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "color",
      children: "color"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "color(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置空白填充的填充颜色，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空白填充的填充颜色。  默认值：Color.Transparent  非法值：按默认值处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1占满空余空间",
      children: "示例1（占满空余空间）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blank组件在横竖屏占满空余空间效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct BlankExample {\n  build() {\n    Column() {\n      Row() {\n        Text('Bluetooth').fontSize(18)\n        Blank()\n        Toggle({ type: ToggleType.Switch }).margin({ top: 14, bottom: 14, left: 6, right: 6 })\n      }.width('100%').backgroundColor(0xFFFFFF).borderRadius(15).padding({ left: 12 })\n    }.backgroundColor(0xEFEFEF).padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "竖屏状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(143240)/* ["default"] */.A) + "",
        width: "445",
        height: "123"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "横屏状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(610116)/* ["default"] */.A) + "",
        width: "850",
        height: "126"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2填充固定宽度",
      children: "示例2（填充固定宽度）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blank组件的父组件未设置宽度时，min参数的使用效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct BlankExample {\n  build() {\n    Column({ space: 20 }) {\n      // Blank父组件不设置宽度时，Blank失效，可以通过设置min最小宽度填充固定宽度\n      Row() {\n        Text('Bluetooth').fontSize(18)\n        Blank().color(Color.Yellow)\n        Toggle({ type: ToggleType.Switch }).margin({ top: 14, bottom: 14, left: 6, right: 6 })\n      }.backgroundColor(0xFFFFFF).borderRadius(15).padding({ left: 12 })\n\n      Row() {\n        Text('Bluetooth').fontSize(18)\n        // 设置最小宽度为160\n        Blank('160').color(Color.Yellow)\n        Toggle({ type: ToggleType.Switch }).margin({ top: 14, bottom: 14, left: 6, right: 6 })\n      }.backgroundColor(0xFFFFFF).borderRadius(15).padding({ left: 12 })\n\n    }.backgroundColor(0xEFEFEF).padding(20).width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blank父组件未设置宽度时，子组件间无空白填充，使用min参数设置填充尺寸"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378661)/* ["default"] */.A) + "",
        width: "337",
        height: "145"
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
978545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
378661(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
143240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
610116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

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