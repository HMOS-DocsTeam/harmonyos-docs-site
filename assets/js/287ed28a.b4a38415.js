"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["171967"], {
631592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_package_fundamentals_application_package_dev_hap_package_hap_package_md_287_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-package-fundamentals-application-package-dev-hap-package-hap-package-md-287.json
var site_docs_development_fundamentals_application_package_fundamentals_application_package_dev_hap_package_hap_package_md_287_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-package-fundamentals/application-package-dev/hap-package/hap-package","title":"HAP","description":"HAP（Harmony Ability Package）是应用安装和运行的基本单元。HAP包是由代码、资源、三方库、配置文件等打包生成的模块包，其主要分为两种类型：entry和feature。","source":"@site/docs/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package/hap-package.md","sourceDirName":"development-fundamentals/application-package-fundamentals/application-package-dev/hap-package","slug":"/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package/","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HAP","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-package","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"FA模型应用程序包结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-structure/application-package-structure-fa/"},"next":{"title":"HAR","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-fundamentals/application-package-dev/har-package/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package/hap-package.md


const frontMatter = {
	title: 'HAP',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-package',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'HAP';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "创建",
  "id": "创建",
  "level": 2
}, {
  "value": "开发",
  "id": "开发",
  "level": 2
}, {
  "value": "调试",
  "id": "调试",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "hap",
        children: "HAP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP（Harmony Ability Package）是应用安装和运行的基本单元。HAP包是由代码、资源、三方库、配置文件等打包生成的模块包，其主要分为两种类型：entry和feature。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "entry：应用的主模块，作为应用的入口，提供了应用的基础功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "feature：应用的动态特性模块，作为应用能力的扩展，可以根据用户的需求和设备类型进行选择性安装。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序包可以只包含一个基础的entry包，也可以包含一个基础的entry包和多个功能性的feature包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单HAP场景：如果只包含UIAbility组件，无需使用ExtensionAbility组件，优先采用单HAP（即一个entry包）来实现应用开发。虽然一个HAP中可以包含一个或多个UIAbility组件，为了避免不必要的资源加载，推荐采用“一个UIAbility+多个页面”的方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多HAP场景：如果应用的功能比较复杂，需要使用ExtensionAbility组件，可以采用多HAP（即一个entry包+多个feature包）来实现应用开发，每个HAP中包含一个UIAbility组件或者一个ExtensionAbility组件。在这种场景下，多个HAP引用相同的库文件，可能导致重复打包的问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持导出接口和ArkUI组件，给其他模块使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多HAP场景下，App Pack包中同一设备类型的所有HAP中最多只能包含一个Entry类型的HAP，也可以不包含；可以包含一个或者多个Feature类型的HAP，也可以不包含。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多HAP场景下，在安装或更新时，存在一致性校验，详情参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-install/install-and-update-consistency-verification",
          children: "应用安装与更新一致性校验"
        }), "。使用打包工具进行打包成APP时，也会进行合法性校验，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool#app%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
          children: "打包工具"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多HAP场景下，同一应用的所有HAP、HSP的签名证书要保持一致。上架应用市场是以App Pack形式上架，应用市场分发时会将所有HAP从App Pack中拆分出来，同时对所有HAP进行重签名，以保证签名证书的一致性。在调试阶段，开发者通过命令行或DevEco Studio将HAP安装到设备上时，要保证所有HAP签名证书一致，否则会出现安装失败的问题，签名操作请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing",
          children: "应用/元服务签名"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建",
      children: "创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面简要介绍如何通过DevEco Studio新建一个HAP模块。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建工程，构建第一个ArkTS应用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在工程目录上单击右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "New > Module"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在弹出的对话框中选择", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Empty Ability"
          })
        }), "模板，单击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在Module配置界面，配置", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Module name"
          })
        }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Module Type"
          })
        }), "和", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Type"
          })
        }), "，然后单击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在Ability配置界面，配置", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ability name"
          })
        }), "，然后单击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finish"
          })
        }), "完成创建。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发",
      children: "开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HAP中支持添加UIAbility组件或ExtensionAbility组件，以及pages页面。具体操作可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-add-new-ability",
          children: "在模块中添加Ability"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-add-page",
          children: "添加Page"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HAP中支持引用HAR或HSP共享包，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package#%E4%BD%BF%E7%94%A8",
          children: "HAR的使用"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp#%E4%BD%BF%E7%94%A8",
          children: "HSP的使用"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调试",
      children: "调试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过DevEco Studio编译打包，生成单个或者多个HAP，即可基于HAP进行调试。如需根据不同的部署环境、目标人群、运行环境等，将同一个HAP定制编译为不同版本，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides#section1011341611469",
        children: "定制编译指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用DevEco Studio或者hdc工具进行调试："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法一："
            })
          }), " 使用DevEco Studio进行调试，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-run-debug-configurations",
            children: "应用程序包调试方法"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法二："
            })
          }), " 使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hdc",
            children: "hdc工具"
          }), "进行调试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在调试前，需要先安装或更新HAP，此处有两种方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "直接使用hdc安装、更新HAP。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HAP的路径为开发平台上的文件路径，以Windows开发平台为例，命令参考如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 安装、更新，多HAP可以指定多个文件路径\nhdc install entry.hap feature.hap\n# 执行结果\ninstall bundle successfully.\n# 卸载\nhdc uninstall com.example.myapplication\n# 执行结果\nuninstall bundle successfully.\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "先执行hdc shell，再使用bm工具安装、更新HAP。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HAP的文件路径为真机上的文件路径，命令参考如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 先执行hdc shell才能使用bm工具\nhdc shell\n# 安装、更新，多HAP可以指定多个文件路径\nbm install -p /data/app/entry.hap /data/app/feature.hap\n# 执行结果\ninstall bundle successfully.\n# 卸载\nbm uninstall -n com.example.myapplication\n# 执行结果\nuninstall bundle successfully.\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完成HAP安装或更新后，即可参考相关调试命令进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/aa-tool#%E8%BF%9B%E5%85%A5%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F%E5%91%BD%E4%BB%A4attach",
            children: "调试"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/multi-hap",
          children: "多HAP"
        })
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