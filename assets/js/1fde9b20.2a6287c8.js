"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["824485"], {
367981(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_database_service_cloudfoundation_database_add_object_cloudfoundation_database_add_object_md_1fd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-database-service-cloudfoundation-database-add-object-cloudfoundation-database-add-object-md-1fd.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_database_service_cloudfoundation_database_add_object_cloudfoundation_database_add_object_md_1fd_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object/cloudfoundation-database-add-object","title":"新增对象类型","description":"开发者需要基于AGC控制台创建对象类型。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object/cloudfoundation-database-add-object.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object","slug":"/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"新增对象类型","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-database-add-object","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"调用本地云函数","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-call-local-function/"},"next":{"title":"新增存储区","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-zone/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object/cloudfoundation-database-add-object.md


const frontMatter = {
	title: '新增对象类型',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-database-add-object',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '新增对象类型';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "新增对象类型",
        children: "新增对象类型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要基于AGC控制台创建对象类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cloud-foundation-kit-guide/cloudfoundation-preparations/cloudfoundation-enable-database",
        children: "开通云数据库服务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "，点击“开发与服务”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目列表中点击需要创建对象类型的项目。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在左侧导航栏选择“云开发（Serverless）> 云数据库”，进入云数据库页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“新增”，创建新的对象类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(727972)/* ["default"] */.A) + "",
            width: "1306",
            height: "438"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入“对象类型名”为“BookInfo”后，点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(637222)/* ["default"] */.A) + "",
            width: "1166",
            height: "753"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“+新增字段”，新增如下表字段后，点击“下一步”。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "主键"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "非空"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "加密"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "默认值"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Integer"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bookName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "author"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "price"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Double"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "borrowerId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Integer"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "borrowerName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "borrowerTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Date"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "–"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“+”新增索引，设置“索引名”为“bookName”，点击“下一步”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(456212)/* ["default"] */.A) + "",
            width: "1166",
            height: "760"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照如下要求设置各角色权限后，点击“确定”。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "角色"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "query"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "upsert"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "delete"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "所有人"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["代表所有用户，包含认证和非认证用户。  该角色默认拥有query权限，可自定义配置upsert和delete权限。如：角色勾选了upsert权限，该角色可在本对象类型中写入数据。  但是，不建议将upsert和delete权限配置给所有人角色。  当对象类型中设置了加密字段之后，表示开启全程加密功能，此时", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "所有人"
                  })
                }), "角色将不会拥有query、upsert和delete权限，且不允许修改。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "认证用户"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["经过AGC登录认证的用户。  该角色默认拥有query权限，可自定义配置upsert和delete权限。如：角色勾选了upsert权限，该角色可在本对象类型中写入数据。  当对象类型中设置了加密字段之后，表示开启全程加密功能，此时", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "认证用户"
                  })
                }), "角色将不会拥有query、upsert和delete权限，且不允许修改。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "数据创建者"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "经过认证的数据创建用户。  该角色默认拥有所有权限，且可自定义配置所有权限。如：角色勾选了upsert权限，该角色可在本对象类型中写入数据。  每条数据都有其对应的数据创建人（即应用用户），每个数据创建者仅可以upsert或者delete自己创建的数据，不能upsert或者delete他人创建的数据。  数据创建者的信息保存在数据记录的系统表中。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "管理员"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "✓"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用开发者，主要是指通过AGC控制台或FaaS（Function as a Service，函数即服务）侧访问云数据库的角色。  该角色默认拥有所有权限，且可自定义配置所有权限。如：角色勾选了upsert权限，该角色可在本对象类型中写入数据。  管理员可以管理并配置其他角色的权限。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建完成后返回对象类型列表，可以查看已创建的对象类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "勾选创建的BookInfo对象类型，点击“导出”。若不勾选对象类型，默认导出所有对象类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(693161)/* ["default"] */.A) + "",
            width: "1331",
            height: "501"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导出“json格式”文件，点击“确定”。后续", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-file",
            children: "引入对象类型文件"
          }), "时，需要使用此文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(428342)/* ["default"] */.A) + "",
            width: "743",
            height: "458"
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
428342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799214-51f43c82e1cd652e3bbefc00ade0a982.png");

},
693161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478863-1cbac407057dc10408e79ac4b61b9aae.png");

},
637222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438907-f6594b38601236f289334eafc14ceaa4.png");

},
727972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799212-bac6124d3afa35baa02a6329e41d8819.png");

},
456212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958862-034d002e326425ac0ec8cffa2530ece1.png");

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