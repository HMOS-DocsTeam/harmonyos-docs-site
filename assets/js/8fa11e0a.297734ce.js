"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["127705"], {
158317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_cyber_security_privacy_web_secure_shield_mode_web_secure_shield_mode_md_8fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-cyber-security-privacy-web-secure-shield-mode-web-secure-shield-mode-md-8fa.json
var site_docs_arkweb_web_manage_cyber_security_privacy_web_secure_shield_mode_web_secure_shield_mode_md_8fa_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode/web-secure-shield-mode","title":"坚盾守护模式","description":"坚盾守护模式提供给高安全需求用户的系统级别安全模式。该模式通过限制设备基础功能，增强安全性，有效抵御远程攻击面的针对性攻击。","source":"@site/docs/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode/web-secure-shield-mode.md","sourceDirName":"arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode","slug":"/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode/","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"坚盾守护模式","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-secure-shield-mode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件的广告过滤功能","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-adsblock/"},"next":{"title":"使用Web组件加载页面","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode/web-secure-shield-mode.md


const frontMatter = {
	title: '坚盾守护模式',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-secure-shield-mode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '坚盾守护模式';

const assets = {

};



const toc = [{
  "value": "ArkWeb限制的HTML5特性",
  "id": "arkweb限制的html5特性",
  "level": 2
}, {
  "value": "评估对应用的影响",
  "id": "评估对应用的影响",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "坚盾守护模式",
        children: "坚盾守护模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "坚盾守护模式提供给高安全需求用户的系统级别安全模式。该模式通过限制设备基础功能，增强安全性，有效抵御远程攻击面的针对性攻击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkweb限制的html5特性",
      children: "ArkWeb限制的HTML5特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "坚盾守护模式开启时，ArkWeb通过限制以下HTML5特性减少攻击面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用WebAssembly能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用WebGL、WebGL2能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用PDF Viewer预览功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用MathML能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用Web Speech API语音识别能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用RTCDataChannel接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用MediaDevices.getUserMedia接口提示用户允许访问媒体输入设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用Service Worker能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止使用非代理UDP流量，防止WebRTC泄露真实源IP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止即时编译（JIT）能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "评估对应用的影响",
      children: "评估对应用的影响"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要评估应用在坚盾守护模式下的受影响程度及兼容性，可前往“设置 > 隐私和安全 > 坚盾守护模式”开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(259458)/* ["default"] */.A) + "",
        width: "389",
        height: "806"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(642595)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果需要评估调试版本（未上架应用市场）应用的兼容性，先开启开发者选项，然后开启坚盾守护模式。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以采用Device Security Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-security-kit-guide/devicesecurity-securitymode",
          children: "查询设备安全模式(C/C++)能力"
        }), "，判断坚盾守护模式是否开启。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行应用的相应功能后，可通过以下方式确认是否受影响："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查前端代码是否存在WebAssembly相关接口调用，WebAssembly用于在Web上运行C/C++等低级语言编译代码，坚盾守护模式下无法调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查前端代码是否存在WebGL相关接口调用，WebGL提供3D图形绘制能力。在坚盾守护模式下，相关接口无法调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查是否有在线显示PDF的功能场景，坚盾守护模式下无法在线显示PDF，例如通过loadUrl加载PDF链接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查HTML页面是否存在<math>标签嵌入的MathML语法，坚盾守护模式下，MathML语法无法解析，导致显示异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查前端代码是否存在SpeechRecognition（语音识别）、SpeechSynthesis（语音合成）等接口调用，坚盾守护模式下，相关接口无法调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查前端代码是否存在RTCDataChannel/createDataChannel等接口调用，该类接口属于WebRTC API，用于建立双向数据通道，实现对等端之间的实时数据交换。坚盾守护模式下，相关接口无法调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查前端代码是否存在MediaDevices.getUserMedia接口调用，该接口用于请求访问流媒体设备，如摄像头和麦克风。在坚盾守护模式下，相关接口调用会抛出异常：“can't use getUserMedia on advancedSecurityMode!”"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查前端代码是否存在Service Worker相关接口调用，该机制实现离线缓存、网络请求拦截和推送通知等功能，在坚盾守护模式下无法创建。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在坚盾守护模式下，WebRTC禁止使用非代理UDP传输。应用需验证WebRTC场景下的网络功能和性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "坚盾守护模式下应用需评估JS性能。"
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
259458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798576-10f4227b8a86713b2e066cc214d78074.png");

},
642595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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