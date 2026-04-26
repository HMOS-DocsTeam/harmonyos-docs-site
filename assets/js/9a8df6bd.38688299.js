"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["780348"], {
219303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_package_permission_management_ide_package_permission_management_md_9a8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-web-introduction-ide-package-permission-management-ide-package-permission-management-md-9a8.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_web_introduction_ide_package_permission_management_ide_package_permission_management_md_9a8_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management/ide-package-permission-management","title":"包权限管理","description":"ohpm-repo从5.3.0版本开始支持配置包级别的权限管理。系统支持对单个三方包配置精细化的权限控制，包含包的所有者、包的维护者和包的查看者。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management/ide-package-permission-management.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"包权限管理","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-package-permission-management","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"仓库管理","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management/"},"next":{"title":"认证管理","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-certification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-package-permission-management/ide-package-permission-management.md


const frontMatter = {
	title: '包权限管理',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-package-permission-management',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '包权限管理';

const assets = {

};



const toc = [{
  "value": "所拥有的包",
  "id": "所拥有的包",
  "level": 2
}, {
  "value": "所维护的包",
  "id": "所维护的包",
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
        id: "包权限管理",
        children: "包权限管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo从5.3.0版本开始支持配置包级别的权限管理。系统支持对单个三方包配置精细化的权限控制，包含包的所有者、包的维护者和包的查看者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统管理员在仓库管理页的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management#li183931814142614",
        children: "包的可见性配置"
      }), "，能够把包设置为授权可读，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management#li174331117117",
        children: "白名单配置"
      }), "，添加包的查看者。当用户在执行下载、上传、下架和编辑Tag标签时，需要同时具有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-web-introduction/ide-ohpm-depot-management#zh-cn_topic_0000001792256181_%E7%AE%A1%E7%90%86%E4%BB%93%E5%BA%93",
        children: "仓库的对应权限"
      }), "和包的对应权限，缺一不可。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "包权限角色"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "操作权限"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "所有者"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 下载包 - 上传新包 - 下架现有包 - 编辑包标签（Tag）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包的管理员，需要所有控制权限"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "维护者"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 下载 - 上传 - 编辑包标签（Tag）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "核心开发者，允许更新但不允许删除包（下架包）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "查看者"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 下载包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅需访问权限的成员或外部协作者"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在包权限管理页，支持对所拥有的包执行如下操作：管理所有者、管理维护者、转移所有者；对所维护的包执行如下操作：查看所有者、查看维护者。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "所拥有的包",
      children: "所拥有的包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在所拥有的包界面，支持完成如下操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "筛选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看包所有版本列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管理所有者。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "管理维护者。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "转移所有者。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(337833)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1259",
        height: "668"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域1：筛选，点击列表标题旁的漏斗图标，可以进行包数据的筛选，支持针对包名和仓库名进行模糊搜索。例如筛选出包名含有group3，仓库名为ohpma的包，数据筛选效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(206220)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域2：查看包所有版本列表，点击版本数量中的值，能够查看当前包具有多少个版本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(152167)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域3：管理所有者，包的所有者具有包的下载，上传，下架和编辑包Tag权限，支持对包所有者进行新增和删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当包仅剩唯一一个所有者用户时，禁止删除。当一个用户已经是包的维护者时，禁止被添加为包的所有者。禁止删除当前用户的所有者权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(892061)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1920",
            height: "911"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域4：管理维护者，包的维护者具有包的下载，上传和编辑Tag权限，支持对包维护者进行新增和删除。当一个用户已经是包的所有者时，禁止被添加为包的维护者。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(921836)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域5：转移所有者，支持当前用户将包的所有者转移给其他非包所有者或维护者。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(697588)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "所维护的包",
      children: "所维护的包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在所维护的包界面，支持完成如下操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "筛选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看包所有版本列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看包的所有者用户列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看包的维护者用户列表。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(492881)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1259",
        height: "668"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域1：筛选，点击列表标题旁的漏斗图标，可以进行包数据的筛选，支持针对包名和仓库名进行模糊搜索。例如筛选出包名含有a1，仓库名为ohpm的包，数据筛选效果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(272815)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域2：查看包所有版本列表，点击版本数量中的值，能够查看当前包具有多少个版本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域3：查看包的所有者用户列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(332176)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "区域4：查看包的维护者用户列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(24433)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1259",
            height: "668"
          })
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
337833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831237-6677659fe780cd4e2b3bfb4be8eb3451.png");

},
921836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911304-fa2805fd2e878ef6b82f6eee14469476.png");

},
24433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751241-1406d6b917565909b3b2ae61015b4629.png");

},
892061(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831249-74bd26c9512ef09a715bd010bca5850c.png");

},
206220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911296-7f67d280b3ff53b6f1ad5d16143f56dc.png");

},
152167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911302-86309a03eeb1ac15851e827a5492df19.png");

},
697588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561831223-be3b3983a08ecb8d1eda3e2b7b1ad4b2.png");

},
332176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751253-82256347c517ed9e2c25db2a7640cd05.png");

},
492881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561751245-ef9dd9c7f1ad9fb0b6ab0d18917741da.png");

},
272815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530751326-7be1cf386a5ab4cc2b5695807c97cfd1.png");

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