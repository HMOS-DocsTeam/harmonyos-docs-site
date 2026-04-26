"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["720769"], {
448877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_ohpm_system_settings_ide_ohpm_system_settings_md_1f7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-web-introduction-ide-ohpm-system-settings-ide-ohpm-system-settings-md-1f7.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_ohpm_system_settings_ide_ohpm_system_settings_md_1f7_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings/ide-ohpm-system-settings","title":"系统设置","description":"系统设置是ohpm-repo系统层面的管理，当前支持\\"oh-package.json5检查规则\\"和\\"系统安全\\"两大功能。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings/ide-ohpm-system-settings.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"系统设置","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-system-settings","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"操作日志","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-repo-operation-log/"},"next":{"title":"安全配置指南","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings/ide-ohpm-system-settings.md


const frontMatter = {
	title: '系统设置',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-system-settings',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '系统设置';

const assets = {

};



const toc = [{
  "value": "oh-package.json5检查规则",
  "id": "oh-packagejson5检查规则",
  "level": 2
}, {
  "value": "系统安全",
  "id": "系统安全",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "系统设置",
        children: "系统设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统设置是ohpm-repo系统层面的管理，当前支持\"oh-package.json5检查规则\"和\"系统安全\"两大功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oh-packagejson5检查规则",
      children: "oh-package.json5检查规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "oh-package.json5检查规则是ohpm-repo对上传包的oh-package.json5文件进行校验的规则管理。当前主要针对category，repository和name三个字段设定规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****category白名单：****若其为空，系统将不会对category字段进行校验。若配置了值，则category字段的值就必须存在于白名单中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "repository是否必填"
        })
      }), "：决定repository字段在oh-package.json5文件中是否必须存在。如果设置为是，那么在上传包时，oh-package.json5文件中就必须包含repository字段。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "name********字段是否必须包含组织名"
        })
      }), "：oh-package.json5文件中name字段是否必须包含组织名，如果设置为是，则上传包时，则name字段必须包含组织名，无组织包名将会上传失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67592)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1461",
        height: "796"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统安全",
      children: "系统安全"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统安全页面中有两部分配置项：重置系统密钥和配置是否支持匿名访问。页面效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402320)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1461",
        height: "796"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重置系统密钥"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统密钥用于重新加密ohpm-repo服务中用户上传的公钥和uplinks的网络代理口令信息。多实例部署ohpm-repo时不支持重置系统密钥。点击重置系统密钥，将出现重置提示，如果确定重置，需要点击按钮“是”，将出现密码输入框，由于重置系统密钥是敏感操作，故需要输入当前登录账户的密码进行再次认证，页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(408501)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1461",
            height: "796"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm-repo匿名访问配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm-repo从5.0.5版本开始支持配置匿名访问功能。默认情况下，ohpm-repo支持匿名访问。如果需要配置不支持匿名访问，需要点击按钮“否”后提交，页面效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(301108)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1461",
            height: "796"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当配置禁用匿名访问后，用户未登录状态下，不能够访问ohpm-repo管理界面首页中的包列表页面和包详情页面，只有登录后才能正常访问；首页也不能注册用户，只有登录选项。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(403396)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1461",
                height: "796"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置禁用匿名访问后，当没有在.ohpmrc文件中正确配置AccessToken认证信息时，ohpm没有权限执行需要读权限的install，info和update命令。必须在.ohpmrc文件中正确配置读写/只读AccessToken认证信息。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["配置禁用匿名访问后，如果使用ohpm-repo5.0.5版本以前的", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-auth-plugin",
                children: "认证插件"
              }), "模板，必须升级认证插件内容，额外添加方法authWithReadOnly，实现只读AccessToken认证方法。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
301108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831205-2a9bc1971c8e256c9ed762d3f8e6bbc6.png");

},
67592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751227-b27dd2aa5ecb0071f52c440d1c18f398.png");

},
408501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831211-1cd819237ef986ac6df905669a79ac8f.png");

},
403396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751233-8a16e672ba20762d61fb5fd8525a62be.png");

},
402320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751290-6347099f844d1edb83d45c1a461bad7c.png");

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