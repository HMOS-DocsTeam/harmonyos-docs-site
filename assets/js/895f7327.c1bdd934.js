"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["650533"], {
73905(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_protection_kit_dlp_dlp_overview_dlp_overview_md_895_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-protection-kit-dlp-dlp-overview-dlp-overview-md-895.json
var site_docs_system_security_data_protection_kit_dlp_dlp_overview_dlp_overview_md_895_namespaceObject = JSON.parse('{"id":"system-security/data-protection-kit/dlp/dlp-overview/dlp-overview","title":"数据防泄漏服务简介","description":"数据防泄漏服务（Data Loss Prevention，简称为DLP），是系统提供的系统级的数据防泄漏解决方案，提供文件权限管理、加密存储、授权访问等能力，数据所有者可以基于账号认证对机密文件进行权限配置，允许设置只读、编辑、拥有者等权限，随后机密文件会通过密文存储，在支持DLP机制的设备上可以通过端云协调进行认证授权，获取对数据的访问和修改的能力。","source":"@site/docs/system-security/data-protection-kit/dlp/dlp-overview/dlp-overview.md","sourceDirName":"system-security/data-protection-kit/dlp/dlp-overview","slug":"/system-security/data-protection-kit/dlp/dlp-overview/","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"数据防泄漏服务简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dlp-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AES解密失败返回错误码17630001","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-faqs/crypto-aes-decryption-error-faq/"},"next":{"title":"数据防泄漏服务开发指导","permalink":"/harmonyos-docs-site/system-security/data-protection-kit/dlp/dlp-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-protection-kit/dlp/dlp-overview/dlp-overview.md


const frontMatter = {
	title: '数据防泄漏服务简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dlp-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '数据防泄漏服务简介';

const assets = {

};



const toc = [{
  "value": "运作流程",
  "id": "运作流程",
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
        id: "数据防泄漏服务简介",
        children: "数据防泄漏服务简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据防泄漏服务（Data Loss Prevention，简称为DLP），是系统提供的系统级的数据防泄漏解决方案，提供文件权限管理、加密存储、授权访问等能力，数据所有者可以基于账号认证对机密文件进行权限配置，允许设置只读、编辑、拥有者等权限，随后机密文件会通过密文存储，在支持DLP机制的设备上可以通过端云协调进行认证授权，获取对数据的访问和修改的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DLP是系统级别的，应用开发者只需要做少量的适配甚至无需适配，即可获得完整的数据防泄漏保护。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DLP整体解决方案由3个主要部件构成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DLP权限管理部件："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权限管理底层服务，负责沙箱应用创建和凭据管理交互。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DLP管理应用部件："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "负责实现权限在本地的设置、检验和拦截功能，是最终实现用户可感知的受控分享功能的关键载体。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "云端对接模块：（该模块当前需要开发者自行搭建）"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "负责将DLP文件的证书，发往云端完成基于账号的鉴权，证书生成及解密功能。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作流程",
      children: "运作流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(415181)/* ["default"] */.A) + "",
        width: "2512",
        height: "936"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DLP文件生成"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.文件所有者通过DLP权限管理应用给需保护的文件配置权限，添加允许访问的账号信息和相应的访问权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.DLP权限管理应用发送用户配置给DLP权限管理服务封装成策略信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.DLP权限管理服务将策略信息发送给云端对接模块。云端对接模块上传策略信息用于端云协同的认证、策略检查、生成签发凭据等工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.将签发的凭据通过DLP权限管理服务返回给DLP权限管理应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.DLP权限管理应用对原文件进行加密，并将凭据和密文打包生成DLP文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DLP文件发送"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.DLP文件可通过任何途径分享给目标用户，密文保证了其机密性不被破坏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DLP文件打开"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7.文件授权者在远端设备打开DLP文件（例如使用文件管理器打开）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "8.DLP权限管理应用解析DLP文件，获取加密凭据后，发送给DLP权限管理服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "9.DLP权限管理服务将加密凭据发送给云端对接模块。云端对接模块上传凭据到云端，作身份认证、凭据验证、策略解析。获取到授权策略和加密密钥等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "10.权限策略和加密密钥等信息通过DLP权限管理服务返回给DLP权限管理应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "11.DLP权限管理应用调用DLP权限管理服务安装应用的DLP沙箱分身，并基于授权测试限制沙箱的权限，包含但不限于网络、打印、剪切板等，防止数据被泄漏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "12.DLP权限管理应用提供一种明文和密文映射机制（link），该方案基于开源的fuse文件系统（Filesystem in Userspace）实现，通过创建虚拟的link文件，分享给应用，从而在不需要适配的情况下，应用即可通过查看编辑明文文件，来达到实时操作DLP文件的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "13.DLP权限管理应用准备就绪后，拉起沙箱中的应用，并传递文件描述符给link文件。沙箱应用启动，应用进程读取被分享的link文件，完成文件内容展示。"
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
415181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958376-932b08da0b013c9448913b78b42fb3aa.png");

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