"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["345543"], {
768466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_access_token_overview_access_token_overview_md_ba5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-access-token-overview-access-token-overview-md-ba5.json
var site_docs_system_security_access_control_access_token_overview_access_token_overview_md_ba5_namespaceObject = JSON.parse('{"id":"system-security/access-control/access-token-overview/access-token-overview","title":"访问控制概述","description":"访问控制是一种限制应用访问系统资源的机制。默认情况下，应用只能访问有限的系统资源。若需扩展功能，应用必须通过系统提供的接口访问额外的系统数据和功能。","source":"@site/docs/system-security/access-control/access-token-overview/access-token-overview.md","sourceDirName":"system-security/access-control/access-token-overview","slug":"/system-security/access-control/access-token-overview/","permalink":"/harmonyos-docs-site/system-security/access-control/access-token-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"访问控制概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-token-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"怎么获取layeredDrawableDescriptor对象信息？","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-faq/ui-design-faq1/"},"next":{"title":"应用权限管控概述","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/access-token-overview/access-token-overview.md


const frontMatter = {
	title: '访问控制概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-token-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '访问控制概述';

const assets = {

};



const toc = [{
  "value": "应用沙箱",
  "id": "应用沙箱",
  "level": 2
}, {
  "value": "应用权限",
  "id": "应用权限",
  "level": 2
}, {
  "value": "安全访问机制",
  "id": "安全访问机制",
  "level": 2
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
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "访问控制概述",
        children: "访问控制概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "访问控制是一种限制应用访问系统资源的机制。默认情况下，应用只能访问有限的系统资源。若需扩展功能，应用必须通过系统提供的接口访问额外的系统数据和功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统通过访问控制机制避免数据或功能被不当或恶意使用。当前机制涉及多方面，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1",
        children: "应用沙箱"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E6%9D%83%E9%99%90",
        children: "应用权限"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%89%E5%85%A8%E8%AE%BF%E9%97%AE%E6%9C%BA%E5%88%B6",
        children: "安全访问机制"
      }), "等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用沙箱",
      children: "应用沙箱"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统上运行的应用程序均部署在受保护的沙箱中。系统通过沙箱的安全隔离机制限制不当行为，如非法访问数据、篡改设备等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用沙箱限定了只有目标应用才能访问应用内的数据，同时限定应用可访问的数据范围。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory",
        children: "应用沙箱目录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用权限",
      children: "应用权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统根据应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E6%9C%BA%E5%88%B6%E4%B8%AD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "APL等级"
      }), "设置进程域和数据域标签。通过访问控制机制，限制数据访问范围，从机制上减少数据泄露风险。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同APL等级的应用可申请的权限等级不同，通过严格的分层权限保护抵御恶意攻击，确保系统安全可靠。除了系统资源（如通讯录）、系统能力（如访问摄像头、麦克风）受不同的应用权限保护外，还有一些内核中的资源（如可执行匿名内存的申请）也受到权限保护。这类权限被称为KernelPermission。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["有关应用权限管控的详细信息，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview",
        children: "应用权限管控概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安全访问机制",
      children: "安全访问机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS推出安全访问机制，改变了应用获取隐私数据的方式，让用户从管理“权限”到管理“数据”，按需访问系统数据。例如，当用户更换社交平台头像时，应用无法获取整个图库的访问权限。系统根据用户选择的图片范围，有限地开放图片访问权限，管控应用对用户隐私数据的访问，全面守护用户隐私。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体来说，安全访问机制主要由系统Picker和安全控件两种系统机制组成。在特定场景中，应用可临时访问受限资源，无需向用户申请权限，从而实现精准化权限管控，更好地保护用户隐私。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/system-app-startup",
            children: "系统Picker"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统独立进程实现应用拉起Picker，用户操作Picker后，应用可获取返回的资源或结果。例如，应用需要读取用户图片时，可使用图片Picker，在用户选择所需图片后，直接返回该图片资源，无需授予应用读取图片文件的权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/security-components/security-component-overview",
            children: "安全控件"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统提供UI控件，应用在界面内集成对应控件，用户点击控件后，应用获得临时授权，继而可以执行相关操作。例如，应用需要读取剪贴板数据时，可使用粘贴控件。用户点击后，应用直接读取剪贴板数据，无需弹窗提示。这适用于任何需要读取剪贴板的场景，避免对用户造成干扰。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块支持模拟器。"
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