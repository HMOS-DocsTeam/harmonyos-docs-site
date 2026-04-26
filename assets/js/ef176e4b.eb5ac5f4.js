"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["399828"], {
191598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_test_service_deveco_testing_faq_faq_md_ef1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-test-service-deveco-testing-faq-faq-md-ef1.json
var site_docs_test_service_deveco_testing_faq_faq_md_ef1_namespaceObject = JSON.parse('{"id":"test-service/deveco-testing/faq/faq","title":"常见问题","description":"*Q1：执行过程中，设备断连重连后，任务能否继续执行？*","source":"@site/docs/test-service/deveco-testing/faq/faq.md","sourceDirName":"test-service/deveco-testing/faq","slug":"/test-service/deveco-testing/faq/","permalink":"/harmonyos-docs-site/test-service/deveco-testing/faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"常见问题","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/faq","kit":"testing","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"实用工具","permalink":"/harmonyos-docs-site/test-service/deveco-testing/tool/"},"next":{"title":"体验建议概述","permalink":"/harmonyos-docs-site/experience-suggestions-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/test-service/deveco-testing/faq/faq.md


const frontMatter = {
	title: '常见问题',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/faq',
	kit: 'testing',
	last_updated: '2026-04-20'
};
const contentTitle = '常见问题';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "常见问题",
        children: "常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q1：执行过程中，设备断连重连后，任务能否继续执行？"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A1：如果发生设备断连情况，测试会终止，并生成测试报告，由于测试执行不充分，会导致生成的报告数据不完整，请确保设备在测试的过程中正常连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q2：设备已连接，为什么设备列表中未显示该设备？"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A2：需满足以下条件，才能使用DevEco Testing识别设备并进行测试："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备系统版本为HarmonyOS 5.0及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC与本地设备通过USB连接，设备需要进入设置-系统-开发者模式，开启开发者模式和USB调试权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将 DevEco Testing 安装目录下的 hdc 路径配置至系统环境变量中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在CMD窗口中执行hdc list targets命令，可以识别到设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q3：为什么在测试任务执行过程中，结束客户端进程后手机端还会继续执行至完成？"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A3：若DevEco Testing客户端非正常关闭，有可能会出现这种情况：被测设备的测试任务依然在执行。原因是测试任务已下发到测试设备中，客户端非正常关闭后无法操作设备停止任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q4：Mac版DevEco Testing客户端使用性能基础质量测试、上架预检等卡片出现“AI模型暂未启动，请稍后再试”。为什么排查后找不到原因？"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A4：请确认Mac版DevEco Testing客户端是否按照以下步骤安装："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤1：DevEco Testing 客户端下载完成后将出现下图弹框。将下载的 DevEco_Testing_for_App 文件拖拽至 Applications 文件夹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(960162)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1181",
        height: "597"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤2：在启动台找到 DevEco Testing 图标则表示 DevEco Testing 已正常安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q5：Mac版本客户端使用覆盖安装后进入客户端后报错，如何解决？"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A5：点击取消报错弹框，进入客户端设置选项，关闭\"开启登录状态保活\"；最后点击“关于”退出登录。完成以上操作后重新登录即可恢复。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q6：Mac版本客户端如果覆盖安装后，报错"
        })
      }), "****“‘DecEco_Testing_for_App’ 已损坏，无法打开。你应该将它移到废纸篓。”********，如何解决？****"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(34934)/* ["default"] */.A) + "",
        width: "1070",
        height: "114"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多问题详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-deveco-testing",
        children: "FAQ"
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
34934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002537783290-3b6a86526915869c2948d1e45081c69a.png");

},
960162(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524623351-fcbc45834ddd10bfb6976afcdcd2cd6c.png");

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