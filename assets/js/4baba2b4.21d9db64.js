"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["816216"], {
956743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_functions_cannkit_more_functions_cannkit_gdb_cannkit_gdb_md_4ba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-usage-of-the-commissioning-tool-cannkit-commissioning-functions-cannkit-more-functions-cannkit-gdb-cannkit-gdb-md-4ba.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_commissioning_functions_cannkit_more_functions_cannkit_gdb_cannkit_gdb_md_4ba_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb/cannkit-gdb","title":"gdb调试","description":"功能介绍","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb/cannkit-gdb.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"gdb调试","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gdb","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"assert功能","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-commissioning-function-assert/"},"next":{"title":"算子入图概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-overview-of-operators-into-the-graph/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb/cannkit-gdb.md


const frontMatter = {
	title: 'gdb调试',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gdb',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'gdb调试';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "使用方法（命令行）",
  "id": "使用方法命令行",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "gdb调试",
        children: "gdb调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用gdb单步调试算子计算精度。由于cpu调测已转为多进程调试，每个核都会拉起独立的子进程，故gdb需要转换成子进程调试的方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方法命令行",
      children: "使用方法（命令行）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调试单独一个子进程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在gdb启动后，首先设置跟踪子进程，之后再打断点，就会停留在子进程中，设置的命令为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "set follow-fork-mode child\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "但是这种方式只会停留在遇到断点的第一个子进程中，其余子进程和主进程会继续执行直到退出。涉及到核间同步的算子无法使用这种方法进行调试。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调试多个子进程"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果涉及到核间同步，那么需要能同时调试多个子进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在gdb启动后，首先设置调试模式为只调试一个进程，挂起其他进程。设置的命令如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(gdb) set detach-on-fork off\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看当前调试模式的命令为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(gdb) show detach-on-fork\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "中断gdb程序的方式要使用捕捉事件的方式，即gdb程序监控fork这一事件并中断。这样在每一次起子进程时就可以中断gdb程序。设置的命令为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(gdb) catch fork\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当执行r后，可以查看当前的进程信息："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(gdb) info inferiors\nNum Description\n* 1 process 19613\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以看到，当第一次执行fork的时候，程序断在了主进程fork的位置，子进程还未生成。 执行c后，再次查看info inferiors，可以看到此时第一个子进程已经启动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(gdb) info inferiors\nNum Description\n* 1 process 19613\n2 process 19626\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这个时候可以使用切换到第二个进程，也就是第一个子进程，再打上断点进行调试，此时主进程是暂停状态："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(gdb) inferior 2\n[Switching to inferior 2 [process 19626] ($HOME/demo)]\n(gdb) info inferiors\nNum Description\n1 process 19613\n* 2 process 19626\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请注意，inferior后跟的数字是进程的序号，而不是进程号。 如果遇到同步阻塞，可以切换回主进程继续生成子进程，然后再切换到新的子进程进行调试，等到同步条件完成后，再切回第一个子进程继续执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下是调试一个单独子进程的调试命令样例："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["add_custom_cpu获取方法见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-cpu-twin-debugging",
            children: "CPU孪生调试功能"
          }), "，位于调试工作路径debug_workspace下的AddCustom/cpu/build/add_custom_cpu。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "gdb --args add_custom_cpu\nset follow-fork-mode child\nbreak add_custom.cpp:45\nrun\nlist\nbacktrace\nprint i\nbreak add_custom.cpp:56\ncontinue\ndisplay xLocal\nquit\n"
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