"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["700781"], {
754781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ndk_development_overview_ndk_development_overview_md_cac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ndk-development-overview-ndk-development-overview-md-cac.json
var site_docs_ndk_development_overview_ndk_development_overview_md_cac_namespaceObject = JSON.parse('{"id":"ndk-development-overview/ndk-development-overview","title":"NDK开发导读","description":"NDK（Native Development Kit）是HarmonyOS SDK提供的Native API、相应编译脚本和编译工具链的集合，方便开发者使用C或C++语言实现应用的关键功能。NDK只覆盖了HarmonyOS一些基础的底层能力，如C运行时基础库libc、图形库、窗口系统、多媒体、压缩库、面向ArkTS/JS与C跨语言的Node-API等，没有提供ArkTS/JS API的完整能力。","source":"@site/docs/ndk-development-overview/ndk-development-overview.md","sourceDirName":"ndk-development-overview","slug":"/ndk-development-overview/","permalink":"/harmonyos-docs-site/ndk-development-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NDK开发导读","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-development-overview","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自由流转文档路径调整","permalink":"/harmonyos-docs-site/hopping-path-change/"},"next":{"title":"创建NDK工程","permalink":"/harmonyos-docs-site/create-with-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ndk-development-overview/ndk-development-overview.md


const frontMatter = {
	title: 'NDK开发导读',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-development-overview',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'NDK开发导读';

const assets = {

};



const toc = [{
  "value": "NDK适用场景",
  "id": "ndk适用场景",
  "level": 2
}, {
  "value": "NDK必备基础知识",
  "id": "ndk必备基础知识",
  "level": 2
}, {
  "value": "前置知识",
  "id": "前置知识",
  "level": 3
}, {
  "value": "NDK目录简介",
  "id": "ndk目录简介",
  "level": 3
}, {
  "value": "NDK常用模块",
  "id": "ndk常用模块",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "ndk开发导读",
        children: "NDK开发导读"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NDK（Native Development Kit）是HarmonyOS SDK提供的Native API、相应编译脚本和编译工具链的集合，方便开发者使用C或C++语言实现应用的关键功能。NDK只覆盖了HarmonyOS一些基础的底层能力，如C运行时基础库libc、图形库、窗口系统、多媒体、压缩库、面向ArkTS/JS与C跨语言的Node-API等，没有提供ArkTS/JS API的完整能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行状态，开发者可以使用NDK中的Node-API接口，访问、创建、操作JS对象；也允许JS对象使用Native动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ndk适用场景",
      children: "NDK适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适合使用NDK的场景：应用涉及如下场景时，适合采用NDK开发"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "性能敏感的场景，如游戏、物理模拟等计算密集型场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要复用已有C或C++库的场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要针对CPU特性进行专项定制库的场景，如Neon加速。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不建议使用NDK的场景：应用涉及如下场景时，不建议采用NDK开发"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "纯C或C++的应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "希望在尽可能多的HarmonyOS设备上保持兼容的应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ndk必备基础知识",
      children: "NDK必备基础知识"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为顺利进行NDK开发，开发者需要先掌握必要的基本概念及基础知识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前置知识",
      children: "前置知识"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux C语言编程知识"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内核、libc基础库基于POSIX等标准扩展而来，掌握基本的Linux C编程知识能够更好的帮助理解HarmonyOS NDK开发。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CMake使用知识"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMake是HarmonyOS默认支持的构建系统。请先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://cmake.org/cmake/help/v3.16/guide/tutorial/",
            children: "CMake官方文档"
          }), "了解基础用法。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Node Addons开发知识"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkTS采用Node-API作为跨语言调用接口，熟悉基本的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://nodejs.org/api/addons.html",
            children: "Node Addons开发模式"
          }), "，可以更好理解NDK中Node-API的使用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clang/LLVM编译器使用知识"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "具备一定的Clang/LLVM编译器基础知识，能够帮助开发者编译出更优的Native动态库。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/coding/using-napi-interaction-with-cpp/napi-introduction",
                children: "Node-API"
              })
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "曾用名NAPI，是HarmonyOS中提供ArkTS/JS与C/C++跨语言调用的接口，该接口基于Node.js的Node-API扩展而来，但不完全兼容。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ndk目录简介",
      children: "NDK目录简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取NDK开发包，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/build-with-ndk/build-with-ndk-cmake#%E8%8E%B7%E5%8F%96ndk%E5%BC%80%E5%8F%91%E5%8C%85",
        children: "NDK开发工具目录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["build目录：放置预定义的toolchain脚本文件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/build-with-ndk/build-with-ndk-overview#hmostoolchaincmake%E7%AE%80%E4%BB%8B",
            children: "hmos.toolchain.cmake"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(82122)/* ["default"] */.A) + "",
            width: "347",
            height: "76"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMake编译时需要读取该文件中的默认值，比如编译器架构、C++库链接方式等，因此在编译时会通过CMAKE_TOOLCHAIN_FILE指出该文件的路径，便于CMake在编译时定位到该文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "build-tools文件夹：放置NDK提供的编译工具"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 键入下一行命令查看CMake的版本\ncmake -version\n# 结果\ncmake version 3.16.5\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "llvm文件夹：放置NDK提供的编译器"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(691080)/* ["default"] */.A) + "",
            width: "883",
            height: "115"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ndk常用模块",
      children: "NDK常用模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表介绍了NDK的常用模块及其功能简介。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "模块"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模块简介"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "标准C库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于musl提供的标准C库接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "标准C++库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++运行时库接口，提供C++运行时能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日志"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供向系统输出HiLog日志接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持ArkTS/JS和C/C++之间的交互接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于任务的并发编程框架。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "libuv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方异步IO库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zlib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供基础数据压缩与解压功能的zlib库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rawfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供访问应用内置资源的接口，可用于读取应用中打包的各种资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XComponent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI XComponent组件，提供surface与触屏事件等接口，便于开发高性能图形应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Drawing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统提供的2D图形库，支持在surface进行绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统提供的OpenGL 3D图形接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenSL ES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持2D、3D音频加速的接口。"
          })]
        })]
      })]
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
82122(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
691080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479355-79e8a5e65de91f9f25a7423f216e3623.png");

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