"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["67615"], {
840191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_configuration_guide_ide_ohpm_repo_configuration_guide_md_631_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-repo-configuration-guide-ide-ohpm-repo-configuration-guide-md-631.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_configuration_guide_ide_ohpm_repo_configuration_guide_md_631_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide/ide-ohpm-repo-configuration-guide","title":"安全配置指南","description":"为了保障用户在使用ohpm-repo过程中更加安全可靠，我们收集如下推荐安全配置项，用户可以根据自己的需要采纳配置。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide/ide-ohpm-repo-configuration-guide.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"安全配置指南","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration-guide","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"系统设置","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-system-settings/"},"next":{"title":"常见问题FAQ","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration-guide/ide-ohpm-repo-configuration-guide.md


const frontMatter = {
	title: '安全配置指南',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-configuration-guide',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '安全配置指南';

const assets = {

};



const toc = [{
  "value": "最小权限启动",
  "id": "最小权限启动",
  "level": 2
}, {
  "value": "加密连接和监听具体地址",
  "id": "加密连接和监听具体地址",
  "level": 2
}, {
  "value": "多实例部署",
  "id": "多实例部署",
  "level": 2
}, {
  "value": "禁止匿名访问",
  "id": "禁止匿名访问",
  "level": 2
}, {
  "value": "用户访问频率控制",
  "id": "用户访问频率控制",
  "level": 2
}, {
  "value": "用户上传次数控制",
  "id": "用户上传次数控制",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "安全配置指南",
        children: "安全配置指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保障用户在使用ohpm-repo过程中更加安全可靠，我们收集如下推荐安全配置项，用户可以根据自己的需要采纳配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "最小权限启动",
      children: "最小权限启动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为降低风险，提高系统的稳定性和可维护性，ohpm-repo必须使用非root权限进行启动部署。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加密连接和监听具体地址",
      children: "加密连接和监听具体地址"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认情况下，listen的配置值为", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8088，即使用HTTP协议，监听地址为localhost。为了数据传输更加安全"
      }), "，我们建议listen配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#li146761718065",
        children: "监听地址"
      }), "使用具体机器ip，通信协议使用更安全的HTTPS，或者在ohpm-repo之上使用HTTPS", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#li1128831818389",
        children: "反向代理"
      }), " ；当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-custom-auth-plugin",
        children: "自定义认证插件"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-storageplugin",
        children: "自定义存储插件"
      }), "时，如果存在网络通信，通信协议也建议使用HTTPS。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "listen: https://<ohpm-repo部署机器ip>:8088\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多实例部署",
      children: "多实例部署"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohpm-repo用于存储私有仓库三方包数据，为了避免数据丢失，且保证ohpm-repo的高可用性，推荐", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_db",
        children: "元数据存储"
      }), "使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_li1552633682171146",
        children: "mysql"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_store",
        children: "包数据存储"
      }), "使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#li620610378133",
        children: "自定义存储插件"
      }), "，通过使用负载均衡，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-deploy-guide/ide-ohpm-deploy-multiple-instances",
        children: "部署ohpm-repo多个实例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "mysql存储"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type: 插件名称，配置为mysql。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["config: 插件配置，具体为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "host: 数据库主机地址。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "port: 数据库端口。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "username: 数据库的用户名。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "password: 数据库的用户密码（请配置明文，最终在部署目录中会转换为密文）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "database: 数据库名。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "db:                         \n  type: mysql\n  config:\n    host: \"localhost\"\n    port: 3306\n    username: \"tctAdmin\"\n    password: \"password\"\n    database: \"repo\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自定义存储"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用自定义插件存储，具体配置为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["type: 插件名称，为custom，是", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-storageplugin",
          children: "自定义存储插件"
        }), "类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["config: 插件配置，具体为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "export_name：待书写插件export的类名。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "plugin_path：插件的绝对路径或者相对于ohpm-repo软件包的路径，建议将插件放在软件包的plugins目录下。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "custom_field：自定义字段，通过引入ohpm-repo解压包中libs/common/getStorageConfigInfo.js的getStorageConfigInfo方法获取自定义字段的值。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["server: 本地仓库下载地址。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration",
                  children: "listen"
                }), "的host不为0.0.0.0时，则默认取listen的完整格式，例如listen为127.0.0.1:8088，故server默认值为", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://127.0.0.1:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果配置项", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration",
                  children: "listen"
                }), "的host为0.0.0.0，则server中的host默认为localhost，如", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://localhost:8088。建议手动修改host为本机的ip/域名，例如listen为0.0.0.0:8088，故server需配置为https://<本机ip/域名>:8088"
                }), "；"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果需要通过反向代理来访问ohpm-repo服务，则该字段须配置为反向代理服务器的域名地址。多实例部署ohpm-repo时必须配置反向代理服务器，且需要配置", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#section1074004784011",
                  children: "use_reverse_proxy"
                }), "值为true。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "store:\n  type: custom                                            \n  config:\n    export_name: \"MyStorage\"                              \n    plugin_path: \"plugins/storagePlugin/MyStorage\"        \n    custom_field: \"test\"                                  \n    #server: https://localhost:8088\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "禁止匿名访问",
      children: "禁止匿名访问"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在默认设置下，ohpm-repo仓库中的所有包信息均可供任意用户自由查看，且包文件也支持任意用户下载。为了避免不相关的人访问ohpm-repo，我们建议在ohpm-repo管理界面的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统设置>系统安全"
        })
      }), "页面，关闭匿名访问功能（默认保持开启）。关闭后，只有在.ohpmrc文件中正确", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-certification#li168806431480",
        children: "配置仓库只读或读写AccessToken"
      }), "的用户才能够通过ohpm工具下载三方包，只有登录ohpm-repo账户，才能够访问ohpm-repo管理界面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(297659)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1461",
        height: "796"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户访问频率控制",
      children: "用户访问频率控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了避免恶意用户频繁对仓库进行访问操作，我们在配置文件中设置配置项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_server",
        children: "user_rate_limit"
      }), "，默认单个用户访问接口的频率为100次/秒，配置范围为 (0, 10000]。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "user_rate_limit: 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户上传次数控制",
      children: "用户上传次数控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了避免恶意用户频繁发布三方包，我们在配置文件中设置配置项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_server",
        children: "upload_max_times"
      }), "，默认单个用户24小时内上传次数限制为100次，配置范围为 (0, 100000]，用户可以根据自身业务需要修改此配置值，如改为1000次。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "upload_max_times: 1000\n"
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
297659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751207-3ccb540784e322ea1b3ec21b07154862.png");

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