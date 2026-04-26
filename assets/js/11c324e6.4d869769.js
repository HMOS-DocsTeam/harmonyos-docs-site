"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["483229"], {
484645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_customization_ide_hvigor_get_build_profile_para_ide_hvigor_get_build_profile_para_sample_ide_hvigor_get_build_profile_para_sample_md_11c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-customization-ide-hvigor-get-build-profile-para-ide-hvigor-get-build-profile-para-sample-ide-hvigor-get-build-profile-para-sample-md-11c.json
var site_docs_ide_build_customization_ide_hvigor_get_build_profile_para_ide_hvigor_get_build_profile_para_sample_ide_hvigor_get_build_profile_para_sample_md_11c_namespaceObject = JSON.parse('{"id":"ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample/ide-hvigor-get-build-profile-para-sample","title":"实践说明","description":"示例：配置工程级和模块级的自定义参数并通过切换product来展示不同的message。","source":"@site/docs/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample/ide-hvigor-get-build-profile-para-sample.md","sourceDirName":"ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample","slug":"/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample/","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"实践说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-get-build-profile-para-sample","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"能力说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-guide/"},"next":{"title":"能力说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample/ide-hvigor-get-build-profile-para-sample.md


const frontMatter = {
	title: '实践说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-get-build-profile-para-sample',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '实践说明';

const assets = {

};



const toc = [{
  "value": "新建工程并创建一个har模块",
  "id": "新建工程并创建一个har模块",
  "level": 2
}, {
  "value": "执行预览或签名后推包到设备调试",
  "id": "执行预览或签名后推包到设备调试",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
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
      children: "示例：配置工程级和模块级的自定义参数并通过切换product来展示不同的message。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新建工程并创建一个har模块",
      children: "新建工程并创建一个har模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级别的build-profile.json5使用以下配置，目的是为了实现在所有模块中都可以使用到productMessage自定义参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过切换不同的product从而使用到对应的productMessage值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"products\": [\n      {\n        \"name\": \"default\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"buildOption\": {\n          \"arkOptions\": {\n            // 工程级自定义参数\n            \"buildProfileFields\": {\n              \"productMessage\": 'defaultMessage'\n            }\n          }\n        }\n      },\n      {\n        \"name\": \"mirror\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"buildOption\": {\n          \"arkOptions\": {\n            // 工程级自定义参数\n            \"buildProfileFields\": {\n              \"productMessage\": 'mirrorMessage'\n            }\n          }\n        }\n      },\n      {\n        \"name\": \"product\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"buildOption\": {\n          \"arkOptions\": {\n            // 工程级自定义参数\n            \"buildProfileFields\": {\n              \"productMessage\": 'productMessage'\n            }\n          }\n        }\n      }\n    ],\n    \"buildModeSet\": [\n      {\n        \"name\": \"debug\",\n      },\n      {\n        \"name\": \"release\"\n      }\n    ]\n  },\n  \"modules\": [\n    {\n      \"name\": \"entry\",\n      \"srcPath\": \"./entry\",\n      \"targets\": [\n        {\n          \"name\": \"default\",\n          \"applyToProducts\": [\n            // 关联到多个product\n            \"default\",\n            \"product\",\n            \"mirror\"\n          ]\n        }\n      ]\n    },\n    {\n      \"name\": \"har\",\n      \"srcPath\": \"./har\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在har模块的build-profile.json5使用以下配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {\n    \"arkOptions\": {\n      // har模块的自定义参数\n      \"buildProfileFields\": {\n        \"targetMessage1\": 'this is target buildProfileValue1',\n        \"targetMessage2\": 'this is target buildProfileValue2'\n      }\n    }\n  },\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": true,\n            \"files\": [\n              \"./obfuscation-rules.txt\"\n            ]\n          },\n          \"consumerFiles\": [\n            \"./consumer-rules.txt\"\n          ]\n        }\n      },\n    },\n  ],\n  \"targets\": [\n    {\n      \"name\": \"default\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在har模块的MainPage.ets中添加以下代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import BuildProfile from \"../../../../BuildProfile\"\n\n@Preview\n@Component\nexport struct MainPage {\n  // 默认赋值为工程级别BuildProfile自定义参数配置的productMessage\n  @State message: string = BuildProfile.productMessage\n  build() {\n    Row() {\n      Column() {\n        Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceAround }) {\n          Button(\"Button 1\").width(\"40%\")\n            .onClick(() => {\n              // 点击展示自定义字段targetMessage1\n              this.message = BuildProfile.targetMessage1;\n            })\n          Button(\"Button 2\").width(\"40%\")\n            .onClick(() => {\n              // 点击展示自定义字段targetMessage2\n              this.message = BuildProfile.targetMessage2;\n            })\n        }.margin(20)\n        .width(315)\n        Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceBetween }) {\n          Text(this.message)\n            .textAlign(TextAlign.Start)\n            .fontSize(12)\n            .border({ width: 1 })\n            .padding(10)\n            .width('100%')\n        }.height(600).width(350).padding({ left: 35, right: 35})\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hap的oh-package.json5中引用本地的har模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"\",\n  \"author\": \"\",\n  \"license\": \"\",\n  \"dependencies\": {\n    \"har\": \"file:../har\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hap的Index.ets文件中引用该har包并且使用MainPage方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MainPage } from \"har\"\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      MainPage()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行预览或签名后推包到设备调试",
      children: "执行预览或签名后推包到设备调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击har模块执行以下按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934262)/* ["default"] */.A) + "",
        width: "497",
        height: "466"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "default模式下初始化的message为defaultMessage。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(994582)/* ["default"] */.A) + "",
        width: "527",
        height: "350"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(660817)/* ["default"] */.A) + "",
        width: "408",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过切换不同的product可以使用不同的自定义参数用来初始化message。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换product为mirror。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(71469)/* ["default"] */.A) + "",
        width: "527",
        height: "323"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以观察到初始化参数为mirrorMessage："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(889478)/* ["default"] */.A) + "",
        width: "409",
        height: "810"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击不同的Button可以改变message为对应的自定义参数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 点击Button1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(646746)/* ["default"] */.A) + "",
        width: "405",
        height: "803"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 点击Button2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(363316)/* ["default"] */.A) + "",
        width: "418",
        height: "806"
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
889478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913400-426bfba71bace9e544b5642e1bc60ad8.png");

},
71469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913396-296bc745e46151e792559900e211a549.png");

},
994582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833325-b2acb498ea39cb889561c0c3783605b9.png");

},
363316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753351-d47cadaee079220bc2c5c0e6c863ab8e.png");

},
646746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913398-cfca45206bf3d345702f46339855ad76.png");

},
934262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753414-30b75509b68f1b84abee77b14108443e.png");

},
660817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753410-12c92027dd8d388c2581a507df9bd5df.png");

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