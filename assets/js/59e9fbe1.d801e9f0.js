"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["922138"], {
198666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_reactnative_scenario_fusion_reactnative_md_59e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-tripartiteframework-scenario-fusion-reactnative-scenario-fusion-reactnative-md-59e.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_tripartiteframework_scenario_fusion_reactnative_scenario_fusion_reactnative_md_59e_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-reactnative/scenario-fusion-reactnative","title":"React Native框架+H5接入智能填充","description":"目前仅支持已适配HarmonyOS的三方框架应用使用。","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-reactnative/scenario-fusion-reactnative.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-reactnative","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-reactnative/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-reactnative/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"React Native框架+H5接入智能填充","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-reactnative","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"H5接入智能填充","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5/"},"next":{"title":"Flutter框架+H5接入智能填充","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-flutter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-reactnative/scenario-fusion-reactnative.md


const frontMatter = {
	title: 'React Native框架+H5接入智能填充',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-reactnative',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'React Native框架+H5接入智能填充';

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
  "value": "React Native输入框效果图",
  "id": "react-native输入框效果图",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}, {
  "value": "React Native框架中加载的H5页面效果图",
  "id": "react-native框架中加载的h5页面效果图",
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
        id: "react-native框架h5接入智能填充",
        children: "React Native框架+H5接入智能填充"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(960660)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前仅支持已适配HarmonyOS的三方框架应用使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS版React Native环境搭建请参考官方文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-sig/ohos_react_native?source_module=search_result_repo",
        children: "React Native环境搭建指导"
      }), "。"]
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
      children: "配置React Native已适配HarmonyOS的工程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "react-native输入框效果图",
      children: "React Native输入框效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(676520)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在React Native输入框TextInput需要配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship#react-native-textcontenttype%E5%92%8Charmonyos%E7%9A%84contenttype%E7%9A%84%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",
        children: "textContentType"
      }), "属性来支持智能填充，代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import React from 'react';\nimport { Text, TextInput, View, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  default: {\n    borderWidth: StyleSheet.hairlineWidth,\n    borderColor: '#0f0f0f',\n    flex: 1,\n    fontSize: 13,\n    padding: 4,\n    height: 80,\n    width: 200,\n  },\n  labelContainer: {\n    flexDirection: 'row',\n    marginVertical: 2,\n  },\n  label: {\n    width: 140,\n    textAlign: 'right',\n    marginRight: 10,\n    paddingTop: 2,\n    fontSize: 15,\n  },\n  inputContainer: {\n    flex: 1,\n  }\n});\nclass WithLabel extends React.Component<$FlowFixMeProps> {\n  render(): React.Node {\n    return (\n      <View style={styles.labelContainer}>\n        <Text style={styles.label}>{this.props.label}</Text>\n        <View style={styles.inputContainer}>{this.props.children}</View>\n      </View>\n    );\n  }\n}\nconst RNTesterApp = () => {\n  return (\n    <View style={{width: '100%', height: '100%'}}>\n      <WithLabel label=\"昵称\">\n        <TextInput textContentType=\"nickname\" style={styles.default} />\n      </WithLabel>\n      <WithLabel label=\"姓名\">\n        <TextInput textContentType=\"name\" style={styles.default} />\n      </WithLabel>\n      <WithLabel label=\"手机号\">\n        <TextInput textContentType=\"telephoneNumber\" style={styles.default} />\n      </WithLabel>\n      <WithLabel label=\"邮件\">\n        <TextInput textContentType=\"emailAddress\" style={styles.default} />\n      </WithLabel>\n      <WithLabel label=\"身份证号\">\n        <TextInput textContentType=\"idCardNumber\" style={styles.default} />\n      </WithLabel>\n      <WithLabel label=\"全部地址\">\n        <TextInput textContentType=\"formatAddress\" style={styles.default} />\n      </WithLabel>\n      <WithLabel label=\"带街道的详细地址\">\n        <TextInput textContentType=\"fullStreetAddress\" style={styles.default}  />\n      </WithLabel>\n      <WithLabel label=\"不带街道的详细地址\">\n        <TextInput textContentType=\"detailInfoWithoutStreet\" style={styles.default} />\n      </WithLabel>\n    </View>\n  );\n};\nexport default RNTesterApp;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "react-native框架中加载的h5页面效果图",
      children: "React Native框架中加载的H5页面效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(98695)/* ["default"] */.A) + "",
        width: "331",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Native框架加载H5页面场景，通过给form表单的input输入框（form表单的子节点）配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-mappingrelationship#h5-autocomplete%E5%92%8Charmonyos%E7%9A%84contenttype%E7%9A%84%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",
        children: "autocomplete"
      }), "属性来支持智能填充，代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import React from 'react';\nimport { View } from 'react-native';\nimport { WebView } from 'react-native-webview';\n\nconst RNTesterApp = () => {\n  return (\n    <View style={{width: '100%', height: '100%'}}>\n      <WebView\n        source={require('./autofill_h5.html')}\n        style={{flex: 1, paddingTop: 50}}\n      />\n    </View>\n  );\n};\n\nexport default RNTesterApp;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["autofill_h5.html实现参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-tripartiteframework/scenario-fusion-h5#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81%E4%BA%8C",
        children: "示例代码二"
      }), "。"]
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
960660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
98695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439205-e3f3522f09f7b9fc520d1ba53c26478d.png");

},
676520(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799510-40757e34aa0915a817286588b9004b8d.png");

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