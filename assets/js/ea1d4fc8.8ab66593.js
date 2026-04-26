"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["950770"], {
764525(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_set_navigation_routing_arkts_routing_arkts_routing_md_ea1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-set-navigation-routing-arkts-routing-arkts-routing-md-ea1.json
var site_docs_arkui_arkts_ui_development_arkts_set_navigation_routing_arkts_routing_arkts_routing_md_ea1_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing/arkts-routing","title":"页面路由 (@ohos.router)(不推荐)","description":"页面路由指在应用程序中实现不同页面之间的跳转和数据传递。Router模块通过不同的url地址，可以方便地进行页面路由，轻松地访问不同的页面。本文将从页面跳转、页面返回、页面返回前增加一个询问框和命名路由这几个方面，介绍如何通过Router模块实现页面路由。","source":"@site/docs/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing/arkts-routing.md","sourceDirName":"arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing","slug":"/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"页面路由 (@ohos.router)(不推荐)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-routing","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件导航(Navigation) (推荐)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/"},"next":{"title":"Router切换Navigation","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing/arkts-routing.md


const frontMatter = {
	title: '页面路由 (@ohos.router)(不推荐)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-routing',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '页面路由 (@ohos.router)(不推荐)';

const assets = {

};



const toc = [{
  "value": "页面跳转",
  "id": "页面跳转",
  "level": 2
}, {
  "value": "页面返回",
  "id": "页面返回",
  "level": 2
}, {
  "value": "生命周期",
  "id": "生命周期",
  "level": 2
}, {
  "value": "自定义转场",
  "id": "自定义转场",
  "level": 2
}, {
  "value": "页面返回前增加一个询问框",
  "id": "页面返回前增加一个询问框",
  "level": 2
}, {
  "value": "系统默认询问框",
  "id": "系统默认询问框",
  "level": 3
}, {
  "value": "自定义询问框",
  "id": "自定义询问框",
  "level": 3
}, {
  "value": "命名路由",
  "id": "命名路由",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "页面路由-ohosrouter不推荐",
        children: "页面路由 (@ohos.router)(不推荐)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面路由指在应用程序中实现不同页面之间的跳转和数据传递。Router模块通过不同的url地址，可以方便地进行页面路由，轻松地访问不同的页面。本文将从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC",
        children: "页面跳转"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A1%B5%E9%9D%A2%E8%BF%94%E5%9B%9E",
        children: "页面返回"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A1%B5%E9%9D%A2%E8%BF%94%E5%9B%9E%E5%89%8D%E5%A2%9E%E5%8A%A0%E4%B8%80%E4%B8%AA%E8%AF%A2%E9%97%AE%E6%A1%86",
        children: "页面返回前增加一个询问框"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1",
        children: "命名路由"
      }), "这几个方面，介绍如何通过Router模块实现页面路由。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907233)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
        children: "组件导航 (Navigation)"
      }), "具有更强的功能和自定义能力，推荐使用该组件作为应用的路由框架。Navigation和Router的差异可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation",
        children: "Router切换Navigation"
      }), "指导。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面跳转",
      children: "页面跳转"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面跳转是开发过程中的一个重要组成部分。在使用应用程序时，通常需要在不同的页面之间跳转，有时还需要将数据从一个页面传递到另一个页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 页面跳转"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311368)/* ["default"] */.A) + "",
        width: "411",
        height: "389"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Router模块提供了两种跳转模式，分别是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#pushurl",
        children: "pushUrl"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#replaceurl",
        children: "replaceUrl"
      }), "。这两种模式决定了目标页面是否会替换当前页。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pushUrl：目标页面不会替换当前页，而是压入页面栈。这样可以保留当前页的状态，并且可以通过返回键或者调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#back",
          children: "back"
        }), "方法返回到当前页。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "replaceUrl：目标页面会替换当前页，并销毁当前页。这样可以释放当前页的资源，并且无法返回到当前页。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(252385)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建新页面时，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/quick-start/start-with-ets-stage#section47459107221",
          children: "构建第二个页面"
        }), "配置第二个页面的路由。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["页面栈的最大容量为32个页面。如果超过这个限制，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#clear",
          children: "clear"
        }), "方法清空历史页面栈，释放内存空间。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，Router模块提供了两种实例模式，分别是Standard和Single。这两种模式决定了目标url是否会对应多个实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Standard：多实例模式，也是默认情况下的跳转模式。目标页面会被添加到页面栈顶，无论栈中是否存在相同url的页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Single：单实例模式。如果目标页面的url已经存在于页面栈中，则会将离栈顶最近的同url页面移动到栈顶，该页面成为新建页。如果目标页面的url在页面栈中不存在同url页面，则按照默认的多实例模式进行跳转。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景一：有一个主页（Home）和一个详情页（Detail），希望从主页点击一个商品，跳转到详情页。同时，需要保留主页在页面栈中，以便返回时恢复状态。这种场景下，可以使用pushUrl方法，并且使用Standard实例模式（或者省略）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { router } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Entry\n@Component\nstruct Index {\n  // 在Home页面中\n  onJumpClick(): void {\n    this.getUIContext().getRouter().pushUrl({\n      url: 'pages/pageRouter/jumpPage/Detail' // 目标url\n    }, router.RouterMode.Standard, (err) => {\n      if (err) {\n        hilog.error(DOMAIN, TAG,`Invoke pushUrl failed, code is ${err.code}, message is ${err.message}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG,'Invoke pushUrl succeeded.');\n    });\n  }\n\n  build() {\n    // ···\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(753338)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多实例模式下，router.RouterMode.Standard参数可以省略。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景二：有一个登录页（Login）和一个个人中心页（Profile），希望从登录页成功登录后，跳转到个人中心页。同时，销毁登录页，在返回时直接退出应用。这种场景下，可以使用replaceUrl方法，并且使用Standard实例模式（或者省略）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { router } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Entry\n@Component\nstruct Login {\n  // 在Login页面中\n  onJumpClick(): void {\n    this.getUIContext().getRouter().replaceUrl({\n      url: 'pages/pageRouter/jumpPage/Profile' // 目标url\n    }, router.RouterMode.Standard, (err) => {\n      if (err) {\n        hilog.error(DOMAIN, TAG,`Invoke replaceUrl failed, code is ${err.code}, message is ${err.message}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG,'Invoke replaceUrl succeeded.');\n    });\n  }\n\n  build() {\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(781921)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多实例模式下，router.RouterMode.Standard参数可以省略。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景三：有一个设置页（Setting）和一个主题切换页（Theme），希望从设置页点击主题选项，跳转到主题切换页。同时，需要保证每次只有一个主题切换页存在于页面栈中，在返回时直接回到设置页。这种场景下，可以使用pushUrl方法，并且使用Single实例模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { router } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Entry\n@Component\nstruct Login {\n  // 在Setting页面中\n  onJumpClick(): void {\n    this.getUIContext().getRouter().pushUrl({\n      url: 'pages/pageRouter/jumpPage/SetTheme' // 目标url\n    }, router.RouterMode.Single, (err) => {\n      if (err) {\n        hilog.error(DOMAIN, TAG, `Invoke pushUrl failed, code is ${err.code}, message is ${err.message}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG, 'Invoke pushUrl succeeded.');\n    });\n  }\n\n  build() {\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景四：有一个搜索结果列表页（SearchResult）和一个搜索结果详情页（SearchDetail），希望从搜索结果列表页点击某一项结果，跳转到搜索结果详情页。同时，如果该结果已经被查看过，则不需要再新建一个详情页，而是直接跳转到已经存在的详情页。这种场景下，可以使用replaceUrl方法，并且使用Single实例模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { router } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Entry\n@Component\nstruct SearchResult {\n  // 在SearchResult页面中\n  onJumpClick(): void {\n    this.getUIContext().getRouter().replaceUrl({\n      url: 'pages/pageRouter/jumpPage/SearchDetail' // 目标url\n    }, router.RouterMode.Single, (err) => {\n      if (err) {\n        hilog.error(DOMAIN, TAG, `Invoke replaceUrl failed, code is ${err.code}, message is ${err.message}`);\n        return;\n      }\n      hilog.error(DOMAIN, TAG, 'Invoke replaceUrl succeeded.');\n    });\n  }\n\n  build() {\n    // ...\n  }\n\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上是不带参数传递的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要在跳转时传递一些数据给目标页面，则可以在调用Router模块的方法时，添加一个params属性，并指定一个对象作为参数。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class DataModelInfo {\n  public age: number = 0;\n}\n\nclass DataModel {\n  public id: number = 0;\n  public info: DataModelInfo | null = null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onJumpClick(): void {\n  // 在Home页面中\n  let paramsInfo: DataModel = {\n    id: 123,\n    info: {\n      age: 20\n    }\n  };\n\n  this.getUIContext().getRouter().pushUrl({\n    url: 'pages/pageRouter/jumpPage/DetailPara', // 目标url\n    params: paramsInfo // 添加params属性，传递自定义参数\n  }, (err) => {\n    if (err) {\n      hilog.error(DOMAIN, TAG,`Invoke pushUrl failed, code is ${err.code}, message is ${err.message}`);\n      return;\n    }\n    hilog.info(DOMAIN, TAG,'Invoke pushUrl succeeded.');\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在目标页面中，可以通过调用Router模块的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#getparams",
        children: "getParams"
      }), "方法来获取传递过来的参数。例如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class InfoTmp {\n  public age: number = 0;\n}\n\nclass RouTmp {\n  // id: object = () => {\n  // };\n  public id: number = 0;\n  public info: InfoTmp = new InfoTmp();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private params: RouTmp = (this.getUIContext().getRouter().getParams()) as RouTmp; // 获取传递过来的参数对象\n// private id: number = this.params.id; // 获取id属性的值\nprivate age: number = this.params.info.age; // 获取age属性的值\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面返回",
      children: "页面返回"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户在一个页面完成操作后，通常需要返回到上一个页面或者指定页面，这就需要用到页面返回功能。在返回的过程中，可能需要将数据传递给目标页面，这就需要用到数据传递功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 页面返回"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(91893)/* ["default"] */.A) + "",
        width: "411",
        height: "389"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接使用router可能导致", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "的问题，建议使用getUIContext()获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "实例，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getrouter",
        children: "getRouter"
      }), "获取绑定实例的router。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用以下几种方式返回页面："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式一：返回到上一个页面。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.getUIContext().getRouter().back();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种方式会返回到上一个页面，即上一个页面在页面栈中的位置。但是，上一个页面必须存在于页面栈中才能够返回，否则该方法将无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：返回到指定页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回普通页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.getUIContext().getRouter().back({\n  url: 'pages/pageRouter/jumpPage/BackHome'\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回命名路由页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.getUIContext().getRouter().back({\n  url: 'myPage' // myPage为返回的命名路由页面别名\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这种方式可以返回到指定页面，需要指定目标页面的路径。目标页面必须存在于页面栈中才能够返回。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式三：返回到指定页面，并传递自定义参数信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回到普通页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.getUIContext().getRouter().back({\n  url: 'pages/pageRouter/jumpPage/BackHome',\n  params: {\n    // 请将$r('app.string.pageRouter_jump_text7_fromHome')替换为实际资源文件，在本示例中该资源文件的value值为\"来自Home页\"\n    info: $r('app.string.pageRouter_jump_text7_fromHome')\n  }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回命名路由页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.getUIContext().getRouter().back({\n  url: 'myPage', // myPage为返回的命名路由页面别名\n  params: {\n    // 请将$r('app.string.pageRouter_jump_text7_fromHome')替换为实际资源文件，在本示例中该资源文件的value值为\"来自Home页\"\n    info: $r('app.string.pageRouter_jump_text7_fromHome')\n  }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["这种方式不仅可以返回到指定页面，还可以在返回的同时传递自定义参数信息。这些参数信息可以在目标页面中通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#getparams",
            children: "getParams"
          }), "方法进行获取和解析。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在目标页面中，在需要获取参数的位置调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#getparams",
        children: "getParams"
      }), "方法即可，例如在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpageshow",
        children: "onPageShow"
      }), "生命周期回调中："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672416)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接使用router可能导致", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "的问题，建议使用getUIContext()获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "实例，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getrouter",
        children: "getRouter"
      }), "获取绑定实例的router。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Home {\n  @State message: string = 'Hello World';\n\n  onPageShow() {\n    const params = this.getUIContext().getRouter().getParams() as Record<string, string>; // 获取传递过来的参数对象\n    if (params) {\n      const info: string = params.info as string; // 获取info属性的值\n    }\n  }\n\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(420458)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用back方法返回到指定页面时，原栈顶页面（包括）到指定页面（不包括）之间的所有页面栈都将从栈中弹出并销毁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，如果使用back方法返回到原来的页面，原页面不会被重复创建，因此使用@State声明的变量不会重复声明，也不会触发页面的aboutToAppear生命周期回调。如果需要在原页面中使用返回页面传递的自定义参数，可以在需要的位置进行参数解析。例如，在onPageShow生命周期回调中进行参数解析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-router/js-apis-router",
        children: "router"
      }), "页面生命周期，即被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#entry",
        children: "@Entry"
      }), "装饰的组件生命周期，提供以下生命周期接口，其中onPageShow和onPageHide的生命周期时序图可参考Router切换Navigation中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
        children: "生命周期"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpageshow",
          children: "onPageShow"
        }), "：页面每次显示时触发一次，包括路由过程、应用进入前台等场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onpagehide",
          children: "onPageHide"
        }), "：页面每次隐藏时触发一次，包括路由过程、应用进入后台等场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onbackpress",
          children: "onBackPress"
        }), "：当用户点击返回按钮时触发。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n// Index.ets\n@Entry\n@Component\nstruct MyComponent {\n  // 只有被@Entry装饰的组件才可以调用页面的生命周期\n  onPageShow() {\n    hilog.info(DOMAIN, TAG, 'Index onPageShow');\n  }\n\n  // 只有被@Entry装饰的组件才可以调用页面的生命周期\n  onPageHide() {\n    hilog.info(DOMAIN, TAG, 'Index onPageHide');\n  }\n\n  // 只有被@Entry装饰的组件才可以调用页面的生命周期\n  onBackPress() {\n    hilog.info(DOMAIN, TAG, 'Index onBackPress');\n    // 返回true表示页面自己处理返回逻辑，不进行页面路由；返回false表示使用默认的路由返回逻辑，不设置返回值按照false处理\n    return true;\n  }\n\n  build() {\n    Column() {\n      // push到Page页面，执行onPageHide\n      Button('push to next page')\n        .onClick(() => {\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/pageRouter/lifeCycle/Page' });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page.ets\n@Entry\n@Component\nstruct Page {\n  @State textColor: Color = Color.Black;\n  @State num: number = 0;\n\n  // 只有被@Entry装饰的组件才可以调用页面的生命周期\n  onPageShow() {\n    console.info('Page onPageShow');\n    this.num = 5;\n  }\n\n  // 只有被@Entry装饰的组件才可以调用页面的生命周期\n  onPageHide() {\n    console.info('Page onPageHide');\n  }\n\n  // 只有被@Entry装饰的组件才可以调用页面的生命周期\n  onBackPress() { // 不设置返回值按照false处理\n    console.info('Page onBackPress');\n    this.textColor = Color.Grey;\n    this.num = 0;\n  }\n\n  build() {\n    Column() {\n      Text(`num is：${this.num}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .fontColor(this.textColor)\n        .margin(20)\n        .onClick(() => {\n          this.num += 5;\n        })\n      Button('pop to previous page')\n        .onClick(() => {\n          this.getUIContext().getRouter().back();\n        })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902748)/* ["default"] */.A) + "",
        width: "227",
        height: "261"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义转场",
      children: "自定义转场"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["router自定义转场可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#pagetransition9",
        children: "pageTransition"
      }), "实现，具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-page-transition-animation/ts-page-transition-animation",
        children: "页面间转场 (pageTransition)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面返回前增加一个询问框",
      children: "页面返回前增加一个询问框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发应用时，为了避免用户误操作或者丢失数据，有时候需要在用户从一个页面返回到另一个页面之前，弹出一个询问框，让用户确认是否要执行这个操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文将从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%B3%BB%E7%BB%9F%E9%BB%98%E8%AE%A4%E8%AF%A2%E9%97%AE%E6%A1%86",
        children: "系统默认询问框"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%A2%E9%97%AE%E6%A1%86",
        children: "自定义询问框"
      }), "两个方面来介绍如何实现页面返回前增加一个询问框的功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 页面返回前增加一个询问框"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930536)/* ["default"] */.A) + "",
        width: "411",
        height: "389"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统默认询问框",
      children: "系统默认询问框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了实现这个功能，可以使用页面路由Router模块提供的两个方法：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#showalertbeforebackpage",
        children: "showAlertBeforeBackPage"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#back",
        children: "back"
      }), "来实现这个功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接使用router可能导致", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "的问题，建议使用getUIContext()获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "实例，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getrouter",
        children: "getRouter"
      }), "获取绑定实例的router。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果想要在目标界面开启页面返回询问框，需要在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#back",
        children: "back"
      }), "方法之前，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#showalertbeforebackpage",
        children: "showAlertBeforeBackPage"
      }), "方法设置返回询问框的信息。例如，在支付页面中定义一个返回按钮的点击事件处理函数："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义一个返回按钮的点击事件处理函数\nonBackClick(): void {\n  // 调用this.getUIContext().getRouter().showAlertBeforeBackPage方法，设置返回询问框的信息\n  try {\n    this.getUIContext().getRouter().showAlertBeforeBackPage({\n      // 请在resources\\base\\element\\string.json文件中配置name为'pageRouter_dialog_context'，value为非空字符串的资源\n      message: this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('pageRouter_dialog_context') as string, // 设置询问框的内容\n    });\n  } catch (err) {\n    let message = (err as BusinessError).message;\n    let code = (err as BusinessError).code;\n    hilog.error(DOMAIN, TAG,`Invoke showAlertBeforeBackPage failed, code is ${code}, message is ${message}`);\n  }\n\n  // 调用this.getUIContext().getRouter().back()方法，返回上一个页面\n  this.getUIContext().getRouter().back();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，this.getUIContext().getRouter().showAlertBeforeBackPage方法接收一个对象作为参数，该对象包含以下属性："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "message：string类型，表示询问框的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果调用成功，则会在目标界面开启页面返回询问框；如果调用失败，则会抛出异常，并通过err.code和err.message获取错误码和错误信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户点击“返回”按钮时，会弹出确认对话框，询问用户是否确认返回。选择“取消”将停留在当前页目标页面；选择“确认”将触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#back",
        children: "back"
      }), "方法，并根据参数决定如何执行跳转。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义询问框",
      children: "自定义询问框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义询问框的方式，可以使用弹窗", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#showdialog-1",
        children: "showDialog"
      }), "或者自定义弹窗实现。这样可以让应用界面与系统默认询问框有所区别，提高应用的用户体验度。本文以弹窗为例，介绍如何实现自定义询问框。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接使用router可能导致", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "的问题，建议使用getUIContext()获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "实例，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getrouter",
        children: "getRouter"
      }), "获取绑定实例的router。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在事件回调中，调用弹窗的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#showdialog-1",
        children: "showDialog"
      }), "方法："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { promptAction} from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onBackClick() {\n  // 弹出自定义的询问框\n  this.getUIContext().getPromptAction().showDialog({\n    // 您还没有完成支付，确定要返回吗？\n    // 请将$r('app.string.pageRouter_dialog_context')替换为实际资源文件，在本示例中该资源文件的value值为\"您还没有完成支付，确定要返回吗？\"\n    message: $r('app.string.pageRouter_dialog_context'),\n    buttons: [\n      {\n        // 请将$r('app.string.pageRouter_dialog_canceled')替换为实际资源文件，在本示例中该资源文件的value值为\"取消\"\n        text: $r('app.string.pageRouter_dialog_canceled'),\n        color: '#FF0000'\n      },\n      {\n        // 请将$r('app.string.pageRouter_dialog_confirmed')替换为实际资源文件，在本示例中该资源文件的value值为\"确认\"\n        text: $r('app.string.pageRouter_dialog_confirmed'),\n        color: '#0099FF'\n      }\n    ]\n  }).then((result: promptAction.ShowDialogSuccessResponse) => {\n    if (result.index === 0) {\n      // 用户点击了“取消”按钮\n      hilog.info(DOMAIN, TAG, 'User canceled the operation.');\n    } else if (result.index === 1) {\n      // 用户点击了“确认”按钮\n      hilog.info(DOMAIN, TAG, 'User confirmed the operation.');\n      // 调用this.getUIContext().getRouter().back()方法，返回上一个页面\n      this.getUIContext().getRouter().back();\n    }\n  }).catch((err: Error) => {\n    let message = (err as BusinessError).message;\n    let code = (err as BusinessError).code;\n    hilog.error(DOMAIN, TAG, `Invoke showDialog failed, code is ${code}, message is ${message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户点击“返回”按钮时，会弹出自定义的询问框，询问用户是否确认返回。选择“取消”将停留在当前页目标页面；选择“确认”将触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#back",
        children: "back"
      }), "方法，并根据参数决定如何执行跳转。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命名路由",
      children: "命名路由"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发中为了跳转到共享包", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
        children: "HAR"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "HSP"
      }), "中的页面（即共享包中路由跳转），可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-router/arkts-apis-uicontext-router#pushnamedroute",
        children: "pushNamedRoute"
      }), "来实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 命名路由跳转"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(686475)/* ["default"] */.A) + "",
        width: "530",
        height: "708"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在想要跳转到的共享包", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
        children: "HAR"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "HSP"
      }), "页面里，给", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#entry",
        children: "@Entry"
      }), "修饰的自定义组件EntryOptions命名："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// library/src/main/ets/pages/Index.ets\n// library为新建共享包自定义的名字\n@Entry({ routeName: 'myPage' })\n@Component\nexport struct MyComponent {\n  build() {\n    Row() {\n      Column() {\n        Text('Library Page')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置成功后需要在跳转的页面中引入命名路由的页面："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(138076)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用命名路由方式跳转时，需要在当前应用包的oh-package.json5文件中配置依赖。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"dependencies\": {\n   \"library\": \"file:../library\",\n   // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport 'library/src/main/ets/pages/Index'; // 引入共享包中的命名路由页面\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_ArkTSRouter]';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Text('Hello World')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .margin({ top: 20 })\n        .backgroundColor('#ccc')\n        .onClick(() => { // 点击跳转到其他共享包中的页面\n          try {\n            this.getUIContext().getRouter().pushNamedRoute({\n              name: 'myPage',\n              params: {\n                data1: 'message',\n                data2: {\n                  data3: [123, 456, 789]\n                }\n              }\n            });\n          } catch (err) {\n            let message = (err as BusinessError).message;\n            let code = (err as BusinessError).code;\n            hilog.error(DOMAIN, TAG,`pushNamedRoute failed, code is ${code}, message is ${message}`);\n          }\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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
672416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
907233(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
311368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437735-16d10847c30bddc4c2ecbf91b3959cef.gif");

},
420458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
138076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
753338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
781921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
930536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798042-e5a4e216bd24ea671f61fc96c29f6d10.gif");

},
91893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957690-5f6c457533a2e9d2098505bf6b6a9e0b.gif");

},
252385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
902748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477691-067f0ec59abbb994856498656866098f.gif");

},
686475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437737-dec0256eeda3e782af344eaf6f7601b7.gif");

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