"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["92957"], {
974488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_gamelogin_gameservice_gameplayer_network_gameservice_network_introduction_gameservice_network_introduction_md_df3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-gameplayer-dev-gameservice-gameplayer-gamelogin-gameservice-gameplayer-network-gameservice-network-introduction-gameservice-network-introduction-md-df3.json
var site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_gamelogin_gameservice_gameplayer_network_gameservice_network_introduction_gameservice_network_introduction_md_df3_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-network-introduction/gameservice-network-introduction","title":"网络游戏登录概述","description":"网络游戏是指需要联网的游戏。","source":"@site/docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-network-introduction/gameservice-network-introduction.md","sourceDirName":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-network-introduction","slug":"/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-network-introduction/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-network-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"网络游戏登录概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-network-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-introduction/"},"next":{"title":"使用华为账号登录（必选）","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-huawei/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-network-introduction/gameservice-network-introduction.md


const frontMatter = {
	title: '网络游戏登录概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-network-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '网络游戏登录概述';

const assets = {

};



const toc = [{
  "value": "网络游戏登录场景介绍",
  "id": "网络游戏登录场景介绍",
  "level": 2
}, {
  "value": "使用华为账号登录",
  "id": "使用华为账号登录",
  "level": 3
}, {
  "value": "使用游戏官方账号登录",
  "id": "使用游戏官方账号登录",
  "level": 3
}, {
  "value": "账号关系总览",
  "id": "账号关系总览",
  "level": 3
}, {
  "value": "网络游戏用户体验",
  "id": "网络游戏用户体验",
  "level": 2
}, {
  "value": "首次登录",
  "id": "首次登录",
  "level": 3
}, {
  "value": "非首次登录",
  "id": "非首次登录",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "网络游戏登录概述",
        children: "网络游戏登录概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络游戏是指需要联网的游戏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入基础游戏服务后，网络游戏支持用户在联合登录面板选择华为账号登录或游戏官方账号登录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789816)/* ["default"] */.A) + "",
        width: "525",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(574988)/* ["default"] */.A) + "",
        width: "525",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络游戏登录场景介绍",
      children: "网络游戏登录场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用华为账号登录",
      children: "使用华为账号登录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络游戏必须接入华为账号登录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入后，华为平台会将HarmonyOS 4及以下游戏的玩家标识playerId/openId赋值给HarmonyOS 5.0及以上游戏的玩家标识gamePlayerId，为新老系统游戏的账号资产（角色、区服信息、游戏进度等）实现互通。互通前后，华为账号ID不会发生变化，也不涉及开发者服务器和数据库层面的变动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用华为账号登录的网络游戏，华为账号的实名认证、未成年人防沉迷由基础游戏服务实现，华为账号的支付合规控制（例如未成年人支付限额）由IAP Kit（应用内支付服务）实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用游戏官方账号登录",
      children: "使用游戏官方账号登录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若游戏有官包且有官方账号体系，网络游戏还需要接入游戏官方账号登录，且游戏开发者需要正确实现HarmonyOS 5.0及以上系统游戏包与游戏官包之间账号资产的互通。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用游戏官方账号登录的网络游戏，游戏官方账号的实名认证、未成年人防沉迷、支付合规控制需要游戏开发者自行实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(701988)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户使用游戏官方账号登录游戏时，设备上基础游戏服务也会基于设备上登录的华为账号实现实名认证、未成年人防沉迷，这属于HarmonyOS 5.0及以上设备的额外要求。游戏官方账号登录游戏时，开发者仍需要基于游戏官方账号实现实名认证、未成年人防沉迷、支付合规控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "账号关系总览",
      children: "账号关系总览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(628226)/* ["default"] */.A) + "",
        width: "1070",
        height: "293"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络游戏用户体验",
      children: "网络游戏用户体验"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "玩家侧的游戏登录体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "首次登录",
      children: "首次登录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首次启动游戏时，向用户展示联合登录面板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758285)/* ["default"] */.A) + "",
        width: "525",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击游戏官方账号，弹出游戏官方账号的登录界面，用户正确输入账号后进入游戏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击华为账号，用户使用华为账号进入游戏，顶部展示欢迎横幅。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非首次登录",
      children: "非首次登录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户非首次启动游戏时，游戏会沿用之前的登录账号。涉及切换账号再登录等特殊场景的接入方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-network/gameservice-gameplayer-official#%E6%B8%B8%E6%88%8F%E5%86%85%E5%88%87%E6%8D%A2%E8%B4%A6%E5%8F%B7",
        children: "游戏内切换账号"
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
789816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438929-8a09e4f6cb3a0e28f86d897f6d5f297e.png");

},
574988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958884-0bb1c9381e61465b291be08f32aa85b3.png");

},
758285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958884-0bb1c9381e61465b291be08f32aa85b3.png");

},
701988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
628226(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478885-7750ba66ef86a59ff3c93abe0655f185.png");

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