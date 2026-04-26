"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["689569"], {
536986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_weex_scenario_fusion_weex_md_95c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-tripartiteframework-scenario-fusion-weex-scenario-fusion-weex-md-95c.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_weex_scenario_fusion_weex_md_95c_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-weex/scenario-fusion-weex","title":"Weex框架+H5接入智能填充","description":"目前仅支持已适配HarmonyOS的三方框架应用使用。","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-weex/scenario-fusion-weex.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-weex","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-weex/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-weex/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Weex框架+H5接入智能填充","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-weex","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Taro框架+H5接入智能填充","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-taro/"},"next":{"title":"mPaas框架+H5接入智能填充","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mpass/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-weex/scenario-fusion-weex.md


const frontMatter = {
	title: 'Weex框架+H5接入智能填充',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-weex',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Weex框架+H5接入智能填充';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "效果图",
  "id": "效果图",
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
    img: "img",
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
        id: "weex框架h5接入智能填充",
        children: "Weex框架+H5接入智能填充"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729426)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前仅支持已适配HarmonyOS的三方框架应用使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备智能填充开关必须处于打开状态，请前往“设置 > 隐私和安全 > 智能填充”页面开启开关。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备已连接互联网并且登录华为账号。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该应用需已接入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill#%E7%94%B3%E8%AF%B7%E6%8E%A5%E5%85%A5%E6%99%BA%E8%83%BD%E5%A1%AB%E5%85%85%E6%9C%8D%E5%8A%A1",
          children: "智能填充服务"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置Weex已适配HarmonyOS的工程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "效果图",
      children: "效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(44602)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Weex的form表单中给input输入框（form表单的子节点）配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship#h5-autocomplete%E5%92%8Charmonyos%E7%9A%84contenttype%E7%9A%84%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",
        children: "autocomplete"
      }), "属性以实现智能填充，代码中action需要配置表单提交接口链接，当form表单提交后，页面导航发生变化时，满足历史表单输入保存的条件时会触发对应弹窗。代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<template>\n  <div class=\"text-auto-fill\">\n    <text class=\"header\">Weex H5表单验证</text>\n    <form action=\"\">\n      <div class=\"form-item\">\n        <label for=\"nickname\" class=\"label\">昵称</label>\n        <div class=\"input\">\n          <input id=\"nickname\" type=\"text\" class=\"form-value\" name=\"nickname\" autocomplete=\"nickname\">\n        </div>\n      </div>\n      <div class=\"form-item\">\n        <label for=\"name\" class=\"label\">姓名</label>\n        <div class=\"input\">\n          <input id=\"name\" type=\"text\" class=\"form-value\" name=\"name\" autocomplete=\"name\">\n        </div>\n      </div>\n      <div class=\"form-item\">\n        <label for=\"tel-national\" class=\"label\">手机号</label>\n        <div class=\"input\">\n          <input id=\"tel-national\" type=\"number\" class=\"form-value\" name=\"tel-national\" autocomplete=\"tel-national\">\n        </div>\n      </div>\n      <div class=\"form-item\">\n        <label for=\"email\" class=\"label\">邮件地址</label>\n        <div class=\"input\">\n          <input id=\"email\" type=\"text\" class=\"form-value\" name=\"email\" autocomplete=\"email\">\n        </div>\n      </div>\n      <div class=\"form-item\">\n        <label for=\"id-card-number\" class=\"label\">身份证</label>\n        <div class=\"input\">\n          <input id=\"id-card-number\" type=\"number\" class=\"form-value\" name=\"id-card-number\" autocomplete=\"id-card-number\">\n        </div>\n      </div>\n      <div class=\"form-item\">\n        <label for=\"street-address\" class=\"label\">带街道地址</label>\n        <div class=\"input\">\n          <input id=\"street-address\" type=\"text\" class=\"form-value\" name=\"street-address\" autocomplete=\"street-address\">\n        </div>\n      </div>\n      <div class=\"form-button\">\n        <button class=\"button\" type=\"submit\">提交</button>\n      </div>\n    </form>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {};\n  }\n};\n</script>\n<style scoped>\n.header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  font-size: 40px;\n}\n.form-item {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 20px;\n  .label {\n    width: 30%;\n    line-height: 1.6;\n    text-align: right;\n  }\n  .input {\n    width: 50%;\n    .form-value {\n      width: 100%;\n      line-height: 1.6;\n      border-style: solid;\n      border-width: 1px;\n      border-color: #333333;\n    }\n  }\n}\n.form-button {\n  width: 100%;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  .button {\n    background-color:  blue;\n    color: white;\n    height: 47px;\n    border: 0;\n    font-size: 30px;\n    border-radius: 15px;\n    width: 200px;\n    text-align: center;\n  }\n}\n</style>\n"
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
44602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479161-9f398b3055ecf24c543fc408a003c1d7.png");

},
729426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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