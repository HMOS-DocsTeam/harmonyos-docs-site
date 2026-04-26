"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["359184"], {
609670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_emulator_ide_emulator_use_ide_emulator_access_network_ide_emulator_access_network_md_59d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-emulator-ide-emulator-use-ide-emulator-access-network-ide-emulator-access-network-md-59d.json
var site_docs_ide_run_emulator_ide_emulator_use_ide_emulator_access_network_ide_emulator_access_network_md_59d_namespaceObject = JSON.parse('{"id":"ide-run-emulator/ide-emulator-use/ide-emulator-access-network/ide-emulator-access-network","title":"模拟器访问网络","description":"模拟器访问互联网","source":"@site/docs/ide-run-emulator/ide-emulator-use/ide-emulator-access-network/ide-emulator-access-network.md","sourceDirName":"ide-run-emulator/ide-emulator-use/ide-emulator-access-network","slug":"/ide-run-emulator/ide-emulator-use/ide-emulator-access-network/","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-use/ide-emulator-access-network/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"模拟器访问网络","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-access-network","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"移动和缩放模拟器","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-use/ide-emulator-move-and-zoom/"},"next":{"title":"安装应用程序包和上传文件","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-use/ide-emulator-install-upload/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-emulator/ide-emulator-use/ide-emulator-access-network/ide-emulator-access-network.md


const frontMatter = {
	title: '模拟器访问网络',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-access-network',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '模拟器访问网络';

const assets = {

};



const toc = [{
  "value": "模拟器访问互联网",
  "id": "模拟器访问互联网",
  "level": 2
}, {
  "value": "模拟器访问本机网络",
  "id": "模拟器访问本机网络",
  "level": 2
}, {
  "value": "两个模拟器实现互相访问",
  "id": "两个模拟器实现互相访问",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模拟器访问网络",
        children: "模拟器访问网络"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器访问互联网",
      children: "模拟器访问互联网"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟器可以通过本地计算机的网络直接访问互联网。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器访问互联网实际上利用的是本地计算机的以太网或者WLAN，与本地计算机共享同一网络资源。如果无法连接网络，请确认本地网络访问是否受到了限制（如使用公司内网）。如果网络访问受到限制，则需要在模拟器上配置网络代理，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-use/ide-emulator-more-features#section206461549731",
        children: "网络代理设置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果访问网络时需要安装数字证书，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-27",
        children: "使用模拟器发起https请求时如何安装数字证书"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(103395)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于模拟器的虚拟以太网一直处于连接状态，断开本地计算机的网络或模拟器内的WiFi，无法使模拟器进入网络完全断开的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器访问本机网络",
      children: "模拟器访问本机网络"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本地计算机上建立网络服务端，模拟器可以通过10.0.2.2:<localPort>访问本地计算机服务端，其中10.0.2.2为模拟器的默认网关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "两个模拟器实现互相访问",
      children: "两个模拟器实现互相访问"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果两个模拟器需要进行通信互联，请按如下步骤进行设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在本地计算机上，运行模拟器A和模拟器B，模拟器本机IP为10.0.2.15。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在模拟器B上设置服务端，使其监听10.0.2.15:<serverPort>。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在本地计算机上，设置从本地计算机localhost:<localPort>到模拟器B 10.0.2.15:<serverPort>的重定向，如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc -t 127.0.0.1:5555 fport tcp:<localPort> tcp:<serverPort>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该命令中127.0.0.1:5555为模拟器B的HDC服务端口号，可通过hdc list targets命令查询。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在模拟器A上，设置客户端连接到10.0.2.2:<localPort>，其中10.0.2.2为模拟器的默认网关。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(765720)/* ["default"] */.A) + "",
        width: "1046",
        height: "620"
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
103395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
765720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911062-f097c48476f078086c4dbe256f7e9959.png");

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