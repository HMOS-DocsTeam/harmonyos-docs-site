"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["755208"], {
729624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_share_access_precautions_share_access_one_step_share_access_one_step_md_a5e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-share-access-precautions-share-access-one-step-share-access-one-step-md-a5e.json
var site_docs_share_kit_guide_share_access_precautions_share_access_one_step_share_access_one_step_md_a5e_namespaceObject = JSON.parse('{"id":"share-kit-guide/share-access-precautions/share-access-one-step/share-access-one-step","title":"目标设备接收分享数据一步直达体验","description":"为保证华为分享目标设备接收体验更优，规范分享数据接收时的直达体验，目标设备接收到分享数据后，将按照如下规则处理：","source":"@site/docs/share-kit-guide/share-access-precautions/share-access-one-step/share-access-one-step.md","sourceDirName":"share-kit-guide/share-access-precautions/share-access-one-step","slug":"/share-kit-guide/share-access-precautions/share-access-one-step/","permalink":"/harmonyos-docs-site/share-kit-guide/share-access-precautions/share-access-one-step/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"目标设备接收分享数据一步直达体验","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-access-one-step","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"宿主应用发起分享需使用精细化的utd类型","permalink":"/harmonyos-docs-site/share-kit-guide/share-access-precautions/share-access-utd/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/system-share-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/share-access-precautions/share-access-one-step/share-access-one-step.md


const frontMatter = {
	title: '目标设备接收分享数据一步直达体验',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-access-one-step',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '目标设备接收分享数据一步直达体验';

const assets = {

};



const toc = [{
  "value": "指定应用直达",
  "id": "指定应用直达",
  "level": 2
}, {
  "value": "能力限制",
  "id": "能力限制",
  "level": 3
}, {
  "value": "配置示例",
  "id": "配置示例",
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
        id: "目标设备接收分享数据一步直达体验",
        children: "目标设备接收分享数据一步直达体验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保证华为分享目标设备接收体验更优，规范分享数据接收时的直达体验，目标设备接收到分享数据后，将按照如下规则处理："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接收能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存储位置"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "预览方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一步直达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体类型（仅包含图片和视频文件）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1设备：文件管理“华为分享”目录。  其他设备：图库“华为分享”相册。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1设备：文件管理界面中文件高亮显示。  其他设备：图库大图预览。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一步直达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "链接类型，  Applinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直达对应的应用。如应用未安装，拉起浏览器或应用市场（以AppLinking配置为准）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一步直达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "链接类型，Deeplink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直达对应的应用。如应用未安装，弹窗提示用户。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一步直达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "链接类型，  普通链接（除系统可识别的特殊链接外的其他http/https链接）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直达浏览器打开对应的链接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一步直达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纯文本类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件管理“华为分享”目录，以txt格式文件保存。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用文件预览打开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一步直达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件管理“华为分享”目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1设备：文件管理界面中文件高亮显示。  其他设备：单文件使用文件预览，多文件高亮显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一步直达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义类型（除系统已预置的utd类型之外）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件管理“华为分享”目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有可打开应用直接打开，无可打开应用弹出提示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "沙箱接收"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持文件类型（包含系统已预置的文件类型及自定义类型文件）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用沙箱指定目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用自行处理预览方式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定应用直达",
      children: "指定应用直达"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta3版本开始，碰一碰分享支持指定应用拉起的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除以上系统默认直达方式外，同开发者账号下应用支持以下拉起规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["同包名应用优先直达。若接收端已安装和发送端相同的应用，且支持拉起（满足", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#%E9%9A%90%E5%BC%8Fwant%E5%8C%B9%E9%85%8D%E5%8E%9F%E7%90%86",
          children: "隐式匹配原理"
        }), "）该应用，则优先拉起同包名应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["同开发者账号(developerId相同)下的应用可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
          children: "module.json5配置文件"
        }), "配置实现优先拉起指定应用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "能力限制",
      children: "能力限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持同开发者账号（developerId相同）下的应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持媒体类文件和压缩包类型的分享数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持多文件（2个及以上）的分享数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持碰一碰分享能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置示例",
      children: "配置示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过在配置文件（src/main/module.json5）中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#metadata%E6%A0%87%E7%AD%BE",
        children: "metadata"
      }), "标签实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shareType：用于分组匹配，当发送端应用和接收端应用配置相同的shareType值时，匹配规则才可生效。仅支持配置一项，配置多项时，仅第一项生效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["shareBundleName：指定打开应用的包名，可配置多项。当shareType相同时，按数组排列顺序匹配第一个已安装且支持拉起（满足", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#%E9%9A%90%E5%BC%8Fwant%E5%8C%B9%E9%85%8D%E5%8E%9F%E7%90%86",
          children: "隐式匹配原理"
        }), "）的应用，并优先拉起该应用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"startWindowIcon\": \"$media:launcher\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\",\n            ],\n            \"actions\": [\n              \"ohos.want.action.viewData\"\n            ],\n            \"uris\": [\n              {\n                \"scheme\": \"file\",\n                \"linkFeature\": \"FileOpen\",\n                \"type\": \"org.openxmlformats.wordprocessingml.document\",\n                \"maxFileSupported\": 1\n              }\n            ],\n            \"domainVerify\": true\n          }\n        ]\n      },\n    ],\n    \"metadata\": [\n      {\n        \"name\": \"shareType\",\n        \"value\": \"sharekitModel\",\n      },\n      {\n        \"name\": \"shareBundleName\",\n        \"value\": \"com.example.sharekitPhone\",\n      },\n      {\n        \"name\": \"shareBundleName\",\n        \"value\": \"com.example.sharekitPc\",\n      }\n    ]\n  }\n}\n"
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