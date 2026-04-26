"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["707104"], {
956418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_develop_agc_harmonyos_clouddev_clouddb_agc_harmonyos_clouddev_dataentry_agc_harmonyos_clouddev_dataentry_md_fb5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-agc-harmonyos-clouddevguide-agc-harmonyos-clouddev-devprocess-agc-harmonyos-clouddev-develop-agc-harmonyos-clouddev-clouddb-agc-harmonyos-clouddev-dataentry-agc-harmonyos-clouddev-dataentry-md-fb5.json
var site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_develop_agc_harmonyos_clouddev_clouddb_agc_harmonyos_clouddev_dataentry_agc_harmonyos_clouddev_dataentry_md_fb5_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dataentry/agc-harmonyos-clouddev-dataentry","title":"添加数据条目","description":"创建完对象类型后，您可在对象类型内添加数据条目（DataEntry），并配置数据所在的存储区。","source":"@site/docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dataentry/agc-harmonyos-clouddev-dataentry.md","sourceDirName":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dataentry","slug":"/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dataentry/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dataentry/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"添加数据条目","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-dataentry","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"创建对象类型","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-objecttype/"},"next":{"title":"部署云数据库","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-deploydatabase/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-clouddb/agc-harmonyos-clouddev-dataentry/agc-harmonyos-clouddev-dataentry.md


const frontMatter = {
	title: '添加数据条目',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-dataentry',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '添加数据条目';

const assets = {

};



const toc = [{
  "value": "手动创建数据条目文件",
  "id": "手动创建数据条目文件",
  "level": 2
}, {
  "value": "自动生成数据条目文件",
  "id": "自动生成数据条目文件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "添加数据条目",
        children: "添加数据条目"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建完对象类型后，您可在对象类型内添加数据条目（DataEntry），并配置数据所在的存储区。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持手动创建和自动生成数据条目文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手动创建数据条目文件",
      children: "手动创建数据条目文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击“clouddb/dataentry”目录，选择“New > Cloud DB Data Entry”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(485394)/* ["default"] */.A) + "",
            width: "697",
            height: "401"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“Associated Cloud DB Object Type”栏选择需添加数据条目的对象类型，在“Enter Cloud DB Data Entry Name”栏定义数据条目文件名，完成后点击“OK”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，选择刚刚创建的对象类型“objecttype1”，数据条目文件取默认名“d_objecttype1”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(557492)/* ["default"] */.A) + "",
            width: "417",
            height: "183"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图，“clouddb/dataentry”目录下生成并打开新建的数据条目JSON文件“d_objecttype1”，该文件中已为您预置好所属对象类型名称（“objecttype1”）与对象类型的字段名（“id”、“bookName”、“author”、“price”、“publishTime”、“shadowFlag”）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(723490)/* ["default"] */.A) + "",
            width: "943",
            height: "751"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置存储区和字段的值（即数据）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“cloudDBZoneName”：配置存储区名称。上图示例中的“default”表示添加数据条目至default存储区。支持修改，如下图“cloudDBZoneName1”。另外，在使用API访问云数据库编码时需要引用该字段。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“objects”：配置当前对象类型中所有字段的值，即写入数据。一个对象（object）即为一条数据，您可以通过新建一个对象（object）来为字段赋新值，也可以修改某个对象（object）下字段的值（主键或加密字段的值不支持修改）。如下图，写入了两条数据。"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "字段"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "数据条目1"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "数据条目2"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "author"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Nancy"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Peter"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "shadowFlag"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "true"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "false"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "bookName"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "My Favorite Book"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Your First English Book"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "id"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "20"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "price"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "10.5"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "20.5"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "publishTime"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "19961007"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "19961007"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(182884)/* ["default"] */.A) + "",
            width: "943",
            height: "733"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自动生成数据条目文件",
      children: "自动生成数据条目文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击对象类型JSON文件，选择“Generate Data Entry”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "依旧以对象类型“objecttype1”为例，其包含了“id”、“bookName”、“author”、“price”、“publishTime”、“shadowFlag”六个字段。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(560319)/* ["default"] */.A) + "",
            width: "912",
            height: "830"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的“New Cloud DB Data Entry”框内，为即将生成的数据条目文件定义名称。此处取默认值“d_objecttype1”为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(114705)/* ["default"] */.A) + "",
            width: "414",
            height: "186"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图，“clouddb/dataentry”目录下自动为对象类型“objecttype1”生成数据条目文件“d_objecttype1”，该文件中已为您预置好所属对象类型名称（“objecttype1”）与对象类型的字段名（“id”、“bookName”、“author”、“price”、“publishTime”、“shadowFlag”）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(431883)/* ["default"] */.A) + "",
            width: "943",
            height: "751"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置存储区和字段的值（即数据）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“cloudDBZoneName”：配置存储区名称。上图示例中的“default”表示添加数据条目至default存储区。支持修改，如下图“cloudDBZoneName1”。另外，在使用API访问云数据库编码时需要引用该字段。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "“objects”：配置当前对象类型中所有字段的值，即写入数据。一个对象（object）即为一条数据，您可以通过新建一个对象（object）来为字段赋新值，也可以修改某个对象（object）下字段的值（主键或加密字段的值不支持修改）。如下图，写入了两条数据。"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "字段"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "数据条目1"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "数据条目2"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "author"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Nancy"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Peter"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "shadowFlag"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "true"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "false"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "bookName"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "My Favorite Book"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Your First English Book"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "id"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "20"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "price"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "10.5"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "20.5"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "publishTime"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "19961007"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "19961007"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(953998)/* ["default"] */.A) + "",
            width: "943",
            height: "733"
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
953998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338640-73d143f30e7da7732f44921818c78659.png");

},
723490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858961-2b0670a4c4f596154fd058dc27f9e641.png");

},
431883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338636-2b0670a4c4f596154fd058dc27f9e641.png");

},
485394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002416495669-a90bcabe6218317974a72f08a7270606.png");

},
557492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
114705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
182884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338640-73d143f30e7da7732f44921818c78659.png");

},
560319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002485251140-6257361f3e4b8fef8adae3567d22181f.png");

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