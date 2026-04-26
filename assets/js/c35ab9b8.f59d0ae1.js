"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["32923"], {
360885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_ide_customized_multi_targets_and_products_ide_customized_multi_targets_and_products_sample_ide_customized_multi_targets_and_products_sample_md_c35_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-ide-customized-multi-targets-and-products-ide-customized-multi-targets-and-products-sample-ide-customized-multi-targets-and-products-sample-md-c35.json
var site_docs_ide_hvigor_configuration_ide_customized_multi_targets_and_products_ide_customized_multi_targets_and_products_sample_ide_customized_multi_targets_and_products_sample_md_c35_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-sample/ide-customized-multi-targets-and-products-sample","title":"实践说明","description":"某对外发布应用共有两个版本：","source":"@site/docs/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-sample/ide-customized-multi-targets-and-products-sample.md","sourceDirName":"ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-sample","slug":"/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-sample/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-sample/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"实践说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products-sample","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"能力说明","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides/"},"next":{"title":"构建HAR","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-build-har/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-sample/ide-customized-multi-targets-and-products-sample.md


const frontMatter = {
	title: '实践说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products-sample',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '实践说明';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "实践说明",
        children: "实践说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某对外发布应用共有两个版本："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Community社区版本，免费，向个人开发者用户提供该应用绝大部分基础功能，但是不提供部分定制化限定功能及技术支持。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ultimate终极版本，收费，向个人、政企等开发者用户提供该应用全部基础功能，同时提供定制化限定功能及技术支持。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以看出在Community版本与Ultimate版本之间，部分功能存在重合，同时也存在某些特定功能，所以期望通过一次开发以实现差异化，根据不同配置完成多种特定运行环境的开发、预览、打包、调试等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348328)/* ["default"] */.A) + "",
        width: "1345",
        height: "925"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "两个不同版本的软件，可能存在差异：如不同的应用标题、应用图标、版本声明。我们可以在工程级build-profile.json5->app{}->products[]中，可以对两种不同的外发版本进行差异化定制，新增两个product：Community和Ultimate。根据已支持的字段进行定制修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"Ultimate\",\n  // ultimate版本签名\n  \"signingConfig\": \"Ultimate\",\n  // ultimate版本包名\n  \"bundleName\": \"com.example.ultimate.app\",\n  // ultimate版本应用图标\n  \"icon\": \"$media:app_icon\",\n  // ultimate版本应用标签\n  \"label\": \"$string:app_name\",\n  \"versionCode\": 10000,\n  \"versionName\": \"1.0.0\",\n  // ultimate版本指定资源目录\n  \"resource\": {\n    \"directories\": [\n      \"./AppScope/ultimateRes\"\n    ]\n  },\n  // ultimate版本指定输出产物名\n  \"output\": {\n    \"artifactName\": \"ultimate_version\"\n  },\n  \"bundleType\": \"app\",\n  \"compatibleSdkVersion\": \"6.1.0(23)\",\n  \"runtimeOS\": \"HarmonyOS\"\n},\n{\n  \"name\": \"Community\",\n  \"signingConfig\": \"Community\",\n  // community版本签名\n  \"bundleName\": \"com.example.community.app\",\n  // community版本包名\n  \"icon\": \"$media:app_icon\",\n  // community版本应用图标\n  \"label\": \"$string:app_name\",\n  // community版本应用标签\n  \"versionCode\": 10000,\n  \"versionName\": \"1.0.0\",\n  // community版本指定资源目录\n  \"resource\": {\n    \"directories\": [\n      \"./AppScope/communityRes\"\n    ]\n  },\n  // community版本指定输出产物名\n  \"output\": {\n    \"artifactName\": \"community_version\"\n  },\n  \"bundleType\": \"app\",\n  \"compatibleSdkVersion\": \"6.1.0(23)\",\n  \"runtimeOS\": \"HarmonyOS\",\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用软件部分功能可能针对特定场景存在定制场景：如ultimate版本的功能A在phone设备类型上免费，在TV设备类型上需要收费；再如community版本的功能B在2in1设备类型上的启动页与在wearable设备类型上呈现效果存在差异。在模块级build-profile.json5->targets[]中新增2个 target：vip和free。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"vip\",\n  // 定制vip包输出产物名\n  \"output\": {\n    \"artifactName\": \"vipVersion\"\n  },\n  // 定制vip包源码指定页面\n  \"source\": {\n    \"pages\": [\n      \"pages/vipIndex\"\n    ]\n  },\n  // 指定vip包资源目录\n  \"resource\": {\n    \"directories\": [\n      \"./src/main/ultimateRes\"\n    ]\n  },\n  \"config\": {\n    // 指定vip包适用设备类型\n    \"deviceType\": [\n      \"phone\",\n      \"tablet\",\n      \"2in1\"\n    ]\n  }\n},\n{\n  \"name\": \"free\",\n  // 定制free包输出产物名\n  \"output\": {\n    \"artifactName\": \"freeVersion\"\n  },\n  // 定制free包源码指定页面\n  \"source\": {\n    \"pages\": [\n      \"pages/freeIndex\"\n    ]\n  },\n  // 指定free包资源目录\n  \"resource\": {\n    \"directories\": [\n      \"./src/main/communityRes\"\n    ]\n  },\n  \"config\": {\n    // 指定free包适用设备类型\n    \"deviceType\": [\n      \"phone\",\n      \"tablet\"\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新增product、target后，需要在工程级build-profile.json5->modules[]->targets[]->applyToProducts中，指定关联关系。此处表示当前模块的target具体应用到工程product的配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"targets\": [\n  {\n    \"name\": \"default\",\n    \"applyToProducts\": [\n      \"default\",\n      \"Community\",\n      \"Ultimate\"\n    ]\n  },\n  {\n    \"name\": \"free\",\n    \"applyToProducts\": [\n      \"default\",\n      \"Community\"\n    ]\n  },\n  {\n    \"name\": \"vip\",\n    \"applyToProducts\": [\n      \"default\",\n      \"Ultimate\"\n    ]\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由上配置："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "target：default被应用至product：default、Ultimate、Community中；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "target：vip被应用至product：default、Ultimate中；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "target：free被应用至product：default、Community中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在实际构建中，可通过可视化窗口灵活选择product-target的关联关系以构建出需要的APP/HAP包。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例：用户需要构建Ultimate版本的且具有vip特性的应用，可以选择product：Ultimate，target：vip，apply之后执行构建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(107742)/* ["default"] */.A) + "",
        width: "524",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看构建产物"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(744333)/* ["default"] */.A) + "",
        width: "306",
        height: "244"
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
107742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753063-dae37479c0456fa35200784ab9af4291.png");

},
348328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913126-f94e39c9c7b4d8dd4f57787a24ed4641.png");

},
744333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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