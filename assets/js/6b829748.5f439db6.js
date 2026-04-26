"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["87206"], {
287476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_access_flow_intents_access_flow_md_6b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-access-flow-intents-access-flow-md-6b8.json
var site_docs_intents_kit_guide_intents_access_flow_intents_access_flow_md_6b8_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-access-flow/intents-access-flow","title":"Intents Kit接入流程","description":"*阶段一：意向*","source":"@site/docs/intents-kit-guide/intents-access-flow/intents-access-flow.md","sourceDirName":"intents-kit-guide/intents-access-flow","slug":"/intents-kit-guide/intents-access-flow/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-access-flow/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Intents Kit接入流程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-access-flow","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Intents Kit简介","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-introduction/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-access-flow/intents-access-flow.md


const frontMatter = {
	title: 'Intents Kit接入流程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-access-flow',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Intents Kit接入流程';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "intents-kit接入流程",
        children: "Intents Kit接入流程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614293)/* ["default"] */.A) + "",
        width: "2940",
        height: "1710"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "阶段一：意向"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "指导文档"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "选择特性确定意图"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者在已发布的特性列表中根据想达成的用户体验选择特性，根据特性来确定需实现的意图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者想实现“歌曲续听推荐”的特性，则根据智慧分发特性描述，需要实现“播放歌曲”意图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213",
              children: "歌曲续听推荐"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "阶段二：开发"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "指导文档"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "调试白名单申请"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确定开发意向后，开发者发送邮件到邮箱（", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:hagservice@huawei.com",
              children: "hagservice@huawei.com"
            }), "）或者联系华为意图框架接口同事，向华为提供测试应用的信息，用于申请调试白名单。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 应用名称：华为音乐。  2. 应用包名：com.xxxx。  3. 接入意图名称：“播放歌曲”。  4. 应用图标：jpg、png……。  5. APP ID：1234567。  6. Client ID：1234567。  7. 华为账号（UID）：1234567、7654321……。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["见各特性类型  习惯推荐：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-habit-rec/intents-habit-rec-dp-self-validation",
              children: "开发者测试"
            }), "  事件推荐：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-event-rec/intents-event-rec-dp-self-validation",
              children: "开发者测试"
            }), "  技能调用：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-dp-self-validation/intents-skill-all-rec-dp-self-validation-con",
              children: "开发者测试"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "意图声明文件中注册意图"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在DevEco Studio中开发时，注册对应的意图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册“播放歌曲”意图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-habit-rec/intents-habit-rec-access-programme#%E6%84%8F%E5%9B%BE%E6%B3%A8%E5%86%8C",
              children: "意图注册"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开发实现意图共享"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发应用/元服务的意图共享接口，使其可以通过HarmonyOS接口完成意图数据共享。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发“播放歌曲”意图中的意图共享接口。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-habit-rec/intents-habit-rec-access-programme#%E7%AB%AF%E4%BE%A7%E6%84%8F%E5%9B%BE%E5%85%B1%E4%BA%AB",
              children: "端侧意图共享"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开发实现意图调用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发应用/元服务的意图调用接口，使其可以通过HarmonyOS接口被正确调用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发“播放歌曲”意图中的意图调用接口。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-habit-rec/intents-habit-rec-access-programme#%E7%AB%AF%E4%BE%A7%E6%84%8F%E5%9B%BE%E8%B0%83%E7%94%A8",
              children: "端侧意图调用"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "阶段三：验证"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "指导文档"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "端到端验证特性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用华为侧提供的测试能力完成目标特性的端到端联调测试，联调测试完成后，提交智慧分发配置至审核。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在设备上对应入口进行“华为音乐-歌曲续听推荐”的特性端到端测试，测试完成后点击提交智慧分发配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "阶段四：上架"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "任务描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "指导文档"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用市场上架软件包（应用/元服务）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发完成并打包好软件包后，在应用市场上传软件包。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打包“华为音乐”软件包并通过应用市场上架。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-0000002235870050",
              children: "应用市场上架流程"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "意图框架注册"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在小艺开放平台进行意图注册配置并提交审核。由华为工程师审核，一般情况在3个工作日内完成。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册“播放歌曲”意图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-kit-listing-configuration/intents-kit-listing-standard-protocol",
              children: "意图标准协议上架指导"
            })
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
614293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959310-32f7191ecf6fc03e2b5a5b4861a3e94a.png");

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