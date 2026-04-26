"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["712338"], {
222894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_share_introduction_share_introduction_md_b2e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-share-introduction-share-introduction-md-b2e.json
var site_docs_share_kit_guide_share_introduction_share_introduction_md_b2e_namespaceObject = JSON.parse('{"id":"share-kit-guide/share-introduction/share-introduction","title":"Share Kit简介","description":"Share Kit（分享服务）为应用提供文本、图片、视频等内容跨应用、跨端分享能力。","source":"@site/docs/share-kit-guide/share-introduction/share-introduction.md","sourceDirName":"share-kit-guide/share-introduction","slug":"/share-kit-guide/share-introduction/","permalink":"/harmonyos-docs-site/share-kit-guide/share-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Share Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"解除应用访问限制","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-release-apps-restriction/"},"next":{"title":"Share Kit术语","permalink":"/harmonyos-docs-site/share-kit-guide/share-terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/share-introduction/share-introduction.md


const frontMatter = {
	title: 'Share Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Share Kit简介';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "运行机制",
  "id": "运行机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
    p: "p",
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
        id: "share-kit简介",
        children: "Share Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Share Kit（分享服务）为应用提供文本、图片、视频等内容跨应用、跨端分享能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用把需要分享的内容和预览样式配置给Share Kit，Share Kit将根据不同的场景进行使用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对应用间分享的场景，根据分享的数据类型、数量等信息构建分享面板，为用户提供内容预览、推荐分享联系人、关联应用及操作界面，便于用户快速选择分享应用或操作，将内容分发到目标应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对跨端分享的场景，根据分享的数据类型、数量等信息构建预览界面，用于跨端分享。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用需要显示在分享面板，则需要构建数据处理能力并按照配置要求在应用配置文件中声明，社交类应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/intents-kit-guide/intents-introduction",
        children: "意图框架"
      }), "接口捐献联系人信息，可以让用户一步分享到应用内的指定用户。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Share Kit（分享服务）提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/share-kit_-sample-code_-clientdemo_-arkts",
        children: "SampleCode示例工程"
      }), "体现了系统分享接入模式、文本/图片等分享示例、碰一碰分享示例及卡片模板，可参考该工程进行应用的相关内容开发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 手机分享面板效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721423)/* ["default"] */.A) + "",
        width: "320",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 手机碰一碰跨端发起华为分享效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934464)/* ["default"] */.A) + "",
        width: "480",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 手机与PC/2in1设备碰一碰分享效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(245465)/* ["default"] */.A) + "",
        width: "480",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "宿主应用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分享行为的发起者。通过调用分享接口，配置分享的内容、预览样式等信息后展示分享面板。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目标应用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分享内容的接收者。需要在应用中构建数据处理能力并按照目标应用接入指南进行能力声明，使得包管理服务可以识别应用支持的能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内容区"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "负责显示分享内容标题、预览、选择等信息，供用户选择。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推荐区"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对接华为分享和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/intents-kit-guide/intents-introduction",
            children: "意图框架"
          }), "，通过算法高效、精准推荐能够处理内容的设备和目标应用用户。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分享方式区"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过HarmonyOS的包管理服务获取支持分享内容的目标应用。支持2种跳转方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1、跳转目标应用内UIAbility组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2、跳转目标应用提供的ExtensionAbility组件（以下称为“分享详情页”）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用组件需通过在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中配置UIAbility组件和ExtensionAbility组件的描述信息，以声明支持分享的能力。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "操作区"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内容相关的操作，由系统提供的复制、保存、另存为、打印等能力。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行机制",
      children: "运行机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 分享运行机制"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(244218)/* ["default"] */.A) + "",
        width: "725",
        height: "424"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "应用类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "相关逻辑"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宿主应用"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["宿主应用需要对可分享的内容提供分享入口，在用户点击分享时，配置分享内容到分享，拉起系统分享面板。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-map-creation/share-mobilephone-app-share",
              children: "通过分享面板发起分享"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview",
              children: "碰一碰分享"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "目标应用"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. 需要在应用中构建具有数据处理能力组件，包括以下两种分享方式。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-target-application/share-interface-description",
              children: "应用内处理分享内容"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/share-kit-guide/system-share/share-target-application/share-sec-panel",
              children: "分享详情页处理分享内容"
            }), "  2. （可选）社交类应用可遵照", (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-introduction",
              children: "意图框架"
            }), "接入规范把最近分享行为联系人相关信息捐献到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-introduction",
              children: "意图框架"
            }), "，Share Kit可从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/intents-kit-guide/intents-introduction",
              children: "意图框架"
            }), "获取推荐信息，当用户选择推荐的联系人时，会把联系人信息随分享数据一起给到目标应用，目标应用可以根据联系人信息直接一步发送内容给指定用户。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备限制"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "能力"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否支持手机"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否支持平板"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否支持PC/2in1"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否支持TV"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "系统分享"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "部分支持（仅支持分享到周边设备，不支持系统操作及分享给其他应用）"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "碰一碰分享"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "隔空传送"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "支持"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不支持"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用限制"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["宿主应用和目标应用定义数据类型须遵照", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/unified-data-definition-overview",
              children: "UDMF"
            }), "（统一数据管理框架）定义的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              children: "UTD"
            }), "（统一类型描述符）规范。目标应用需要在应用配置文件中，配置支持的类型。如支持全部图片类型，可声明为：general.image。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["宿主应用单次分享可配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/share-api/share-arkts/share-system-share/share-system-share#shareddata",
              children: "分享数据描述信息"
            }), "总量不能超过200KB，且分享条目总量不能超过500条。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section38231424133213",
        children: "模拟器与真机的差异"
      }), "”。"]
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
934464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439221-e5cdbc74b3417785b65b1194b402c6f0.gif");

},
721423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799526-99487957a03963f6204ceb078dfc3fe8.png");

},
244218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479177-86b2e3a5165e1acafd780464a05a6df1.png");

},
245465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959176-76e86ebbd752876abfb6832e328500e5.gif");

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