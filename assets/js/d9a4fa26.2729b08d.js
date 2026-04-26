"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["421947"], {
906044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_guard_kit_guide_dataguard_introduction_dataguard_introduction_md_d9a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-guard-kit-guide-dataguard-introduction-dataguard-introduction-md-d9a.json
var site_docs_system_security_data_guard_kit_guide_dataguard_introduction_dataguard_introduction_md_d9a_namespaceObject = JSON.parse('{"id":"system-security/data-guard-kit-guide/dataguard-introduction/dataguard-introduction","title":"Enterprise Data Guard Kit简介","description":"Enterprise Data Guard Kit（企业数据保护服务）为企业安全管控类MDM应用提供关键信息资产（KIA）文件的识别、外发管控以及企业恢复密钥的管理能力，支撑企业构建完整的数据防泄漏解决方案，实现企业数据资产可知、可控、可追溯。","source":"@site/docs/system-security/data-guard-kit-guide/dataguard-introduction/dataguard-introduction.md","sourceDirName":"system-security/data-guard-kit-guide/dataguard-introduction","slug":"/system-security/data-guard-kit-guide/dataguard-introduction/","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Enterprise Data Guard Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataguard-introduction","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持的国家/地区","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-appendix/devicesecurity-appendix-region/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-guard-kit-guide/dataguard-introduction/dataguard-introduction.md


const frontMatter = {
	title: 'Enterprise Data Guard Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataguard-introduction',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'Enterprise Data Guard Kit简介';

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
  "value": "访问限制",
  "id": "访问限制",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
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
        id: "enterprise-data-guard-kit简介",
        children: "Enterprise Data Guard Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enterprise Data Guard Kit（企业数据保护服务）为企业安全管控类", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit",
        children: "MDM"
      }), "应用提供关键信息资产（KIA）文件的识别、外发管控以及企业恢复密钥的管理能力，支撑企业构建完整的数据防泄漏解决方案，实现企业数据资产可知、可控、可追溯。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前Enterprise Data Guard Kit提供了两种能力，包括文件分级管控和恢复密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供文件扫描和分级标识功能。企业应用获取当前扫描的文件内容，并且自主解析识别文件内容后，对文件进行安全等级标识，构建企业级资产地图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供管控策略配置能力，支持企业下发分级管控策略、灵活管控敏感文件的外发权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于已配置的策略和敏感文件清单，对文件外发等非法行为进行管控，打开时进行水印保护。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供企业恢复密钥的管理能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问限制",
      children: "访问限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前文件分级管控服务仅支持对用户数据进行文件扫描和分级标识。文件扫描仅限于默认路径范围内的子目录，且", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-get-file-url",
        children: "获取文件URI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file",
        children: "删除指定路径下的文件"
      }), "以及以只写模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-openfile",
        children: "打开文件"
      }), "的功能仅适用于用户个人数据目录下的绝对路径子集。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "文件路径"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/service/el2/  /data/app/el1/bundle/public/  /mnt/hmdfs/  /data/app/el1/  /data/app/el2/  /data/app/el3/  /data/app/el4/  /data/app/el5/"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认路径范围内的子目录。文件路径与物理路径对应的关系及不同加密分区的差异，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/app-file/app-sandbox-directory#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E8%B7%AF%E5%BE%84%E5%92%8C%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E8%B7%AF%E5%BE%84%E7%9A%84%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB",
              children: "应用沙箱路径和真实物理路径的对应关系"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8A%A0%E5%AF%86%E5%88%86%E5%8C%BA",
              children: "获取和修改加密分区"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/service/el2/{account_id}/hmdfs/account/files/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应用户的个人数据目录。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备类型仅支持PC/2in1，支持的设备详见下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "设备型号"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为擎云系列"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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