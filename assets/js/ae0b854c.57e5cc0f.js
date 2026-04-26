"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["142322"], {
362786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_passwordvault_overview_passwordvault_overview_md_ae0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-passwordvault-overview-passwordvault-overview-md-ae0.json
var site_docs_system_security_passwordvault_passwordvault_overview_passwordvault_overview_md_ae0_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/passwordvault-overview/passwordvault-overview","title":"密码自动填充服务概述","description":"功能简介","source":"@site/docs/system-security/passwordvault/passwordvault-overview/passwordvault-overview.md","sourceDirName":"system-security/passwordvault/passwordvault-overview","slug":"/system-security/passwordvault/passwordvault-overview/","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"密码自动填充服务概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用系统Picker","permalink":"/harmonyos-docs-site/system-security/access-control/use-picker/"},"next":{"title":"快速适配","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-quick-adaptation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/passwordvault-overview/passwordvault-overview.md


const frontMatter = {
	title: '密码自动填充服务概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密码自动填充服务概述';

const assets = {

};



const toc = [{
  "value": "功能简介",
  "id": "功能简介",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "架构介绍",
  "id": "架构介绍",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "密码自动填充服务概述",
        children: "密码自动填充服务概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能简介",
      children: "功能简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密码保险箱作为HarmonyOS系统安全功能，为用户提供了便捷的免密登录体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在应用或浏览器进行注册/登录操作时，可一键完成自动生成强密码、自动保存、自动填充，无需记住或手动输入繁琐的密码，由系统实现统一的安全管理密码能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户查看密码或使用密码进行自动填充，都需要经过身份认证，通过输入锁屏密码或验证指纹/人脸，确保只有用户本人才能访问密码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "面向用户，可分为三大场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "登录"
          })
        }), "：在密码保险箱已保存账号数据的情况下，提供自动填充服务，若用户手动输入账号密码进行登录，密码保险箱会主动询问用户是否同意将本次输入的账号密码保存至密码保险箱。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "注册"
          })
        }), "：用户注册新用户时，当用户设置密码时，自动为用户推荐高强度密码建议，用户可视情况决定是否需要；同样，用户成功进行注册账号时，密码保险箱同样会主动询问用户是否进行保存。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "查看账号"
          })
        }), "：密码保险箱在系统设置菜单中，提供了本机全量账号查看能力，用户可通过“设置 > 隐私和安全 > 密码保险箱”查看本机保存的全量数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在注册/登录场景产生的密码数据，均可以在密码保险箱管理界面进行查看。进入密码保险箱管理界面的步骤：“设置 > 隐私和安全 > 密码保险箱”，用户验证锁屏密码/指纹/人脸后，可以查看已保存的所有账号密码数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "架构介绍",
      children: "架构介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，密码保险箱基于关键资产存储能力，保存并保护用户的账号密码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据用户操作自动识别使用账号密码的场景（如登录、注册、修改密码），基于识别的场景，提供对应的免密登录服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在填充过程中，依托统一用户认证能力，若用户指定需要使用某条账号密码进行填充时，会进行用户身份信息认证（人脸/指纹或锁屏密码），用于保证正确的人访问了正确的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 密码保险箱功能架构图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(564487)/* ["default"] */.A) + "",
        width: "1022",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块暂不支持模拟器。"
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
564487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958360-65fd660467cc16f48230342d9992e24c.png");

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