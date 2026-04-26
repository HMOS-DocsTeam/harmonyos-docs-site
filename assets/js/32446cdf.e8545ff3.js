"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["911632"], {
3605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_creating_har_api_9_ide_har_ide_har_md_324_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-creating-har-api-9-ide-har-ide-har-md-324.json
var site_docs_ide_project_ide_module_management_ide_creating_har_api_9_ide_har_ide_har_md_324_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-creating-har-api9/ide-har/ide-har","title":"开发静态共享包","description":"HAR（Harmony Archive）是静态共享包，可以包含代码、C++库、资源和配置文件。通过HAR可以实现多个模块或多个工程共享ArkUI组件、资源等相关代码。HAR不同于HAP，不能独立安装运行在设备上，只能作为应用模块的依赖项被引用。","source":"@site/docs/ide-project/ide-module-management/ide-creating-har-api9/ide-har/ide-har.md","sourceDirName":"ide-project/ide-module-management/ide-creating-har-api9/ide-har","slug":"/ide-project/ide-module-management/ide-creating-har-api9/ide-har/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-creating-har-api9/ide-har/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发静态共享包","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-har","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"添加/删除模块","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-add-new-module/"},"next":{"title":"开发动态共享包","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-creating-har-api9/ide-har/ide-har.md


const frontMatter = {
	title: '开发静态共享包',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-har',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '开发静态共享包';

const assets = {

};



const toc = [{
  "value": "创建HAR模块",
  "id": "创建har模块",
  "level": 2
}, {
  "value": "编译HAR模块",
  "id": "编译har模块",
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
        id: "开发静态共享包",
        children: "开发静态共享包"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAR（Harmony Archive）是静态共享包，可以包含代码、C++库、资源和配置文件。通过HAR可以实现多个模块或多个工程共享ArkUI组件、资源等相关代码。HAR不同于HAP，不能独立安装运行在设备上，只能作为应用模块的依赖项被引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将介绍如何创建HAR模块、如何编译共享包。接下来，将简单介绍HAR模块的工程结构，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127626)/* ["default"] */.A) + "",
        width: "309",
        height: "482"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关字段的描述如下，其余字段与Entry或Feature模块相关字段相同，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-project-overview",
        children: "工程介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "libs"
          })
        }), "：用于存放.so文件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "src > main > cpp > types"
          })
        }), "：用于存放C++ API描述文件，子目录按照so维度进行划分。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "src > main > cpp > types"
          })
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "> liblibrary > Index.d.ts"
          })
        }), "：描述C++接口的方法名、入参、返回参数等信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "src > main > cpp > types"
          })
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "> liblibrary > oh-package.json5"
          })
        }), "：描述so三方包声明文件入口和so包名信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "src > main > cpp >"
          })
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CMakeLists.txt"
          })
        }), "：CMake配置文件，提供CMake构建脚本。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "src > main > cpp > napi_init.cpp"
          })
        }), "：共享包C++代码源文件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Index.ets"
          })
        }), "：共享包导出声明的入口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，创建HAR模块时支持选择C++版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建har模块",
      children: "创建HAR模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["鼠标移到工程目录顶部，单击右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New > Module"
            })
          }), "，在工程中添加模块。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Choose Your Ability Template"
            })
          }), "界面中，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Static Library"
            })
          }), "，并单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(737706)/* ["default"] */.A) + "",
            width: "951",
            height: "618"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configure New Module"
            })
          }), "界面中，设置新添加的模块信息，设置完成后，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "完成创建。从DevEco Studio 6.0.1 Beta1开始，支持选择C++版本。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Module name"
              })
            }), "：新增模块的名称。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device type"
              })
            }), "：支持的设备类型。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enable native"
              })
            }), "：创建用于调用C++代码的模块。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****C++ Standard：****C++标准库，取值包括：Toolchain Default、C++11、C++14。仅打开Enable native时需要配置。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(99531)/* ["default"] */.A) + "",
            width: "954",
            height: "607"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建完成后，会在工程目录中生成HAR模块及相关文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(171081)/* ["default"] */.A) + "",
            width: "335",
            height: "339"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译har模块",
      children: "编译HAR模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发完HAR模块后，选中模块名，然后通过DevEco Studio菜单栏的****Build > Make Module ${libraryName}****进行编译构建，生成HAR。HAR可供工程其他模块引用，或将HAR上传至ohpm仓库，供其他开发者下载使用。若部分源码文件不需要打包至HAR中，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-build-har#li5533646204511",
        children: "创建.ohpmignore文件"
      }), "，配置打包时要忽略的文件/文件夹。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(817469)/* ["default"] */.A) + "",
        width: "518",
        height: "169"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译构建的HAR可在模块下的build目录下获取，包格式为*.har。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(518459)/* ["default"] */.A) + "",
        width: "484",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编译构建HAR时，请注意以下事项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编译构建HAR的过程中，不会将模块中的C++代码直接打包进.har文件中，而是将C++代码编译成动态依赖库.so文件放置在.har文件中的libs目录下。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在编译构建HAR的过程中，会生成资源文件ResourceTable.txt，以便编辑器可以对HAR中的资源文件进行联想。因此，如果不使用DevEco Studio对HAR进行构建，则DevEco Studio的编辑器会无法联想HAR中的资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果使用的Hvigor为2.5.0-s及以上版本，在编译构建HAR的过程中，会将dependencies内处于本模块路径下的本地依赖也打包进.har文件中；如果在打包后发现缺少部分本地依赖（如cpp/types目录），请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-23",
          children: "FAQ"
        }), "。"]
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
817469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753272-790ea8839795f38d7701251cf32a4a80.png");

},
171081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
99531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753209-941feccd33ef89392b90a412d442693a.png");

},
127626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753276-6ede331b2ea1b44e85f66362c030d127.png");

},
737706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753217-4eefdef836dc8aa8330454a42b1fee0a.png");

},
518459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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