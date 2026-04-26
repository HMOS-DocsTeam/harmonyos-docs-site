"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["196568"], {
289201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ut_generation_ide_ut_generation_md_4cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ut-generation-ide-ut-generation-md-4cb.json
var site_docs_ide_ut_generation_ide_ut_generation_md_4cb_namespaceObject = JSON.parse('{"id":"ide-ut-generation/ide-ut-generation","title":"单元测试用例生成","description":"根据选中的ArkTS方法名称，CodeGenie支持自动生成对应单元测试用例，提升测试覆盖率。","source":"@site/docs/ide-ut-generation/ide-ut-generation.md","sourceDirName":"ide-ut-generation","slug":"/ide-ut-generation/","permalink":"/harmonyos-docs-site/ide-ut-generation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"单元测试用例生成","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ut-generation","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"万能卡片生成","permalink":"/harmonyos-docs-site/ide-codegenie-service-widget/"},"next":{"title":"代码智能解读","permalink":"/harmonyos-docs-site/ide-explain-code/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ut-generation/ide-ut-generation.md


const frontMatter = {
	title: '单元测试用例生成',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ut-generation',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '单元测试用例生成';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "单元测试用例生成",
        children: "单元测试用例生成"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据选中的ArkTS方法名称，CodeGenie支持自动生成对应单元测试用例，提升测试覆盖率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该功能最多支持解读30000字符以内的代码片段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkUI代码、生命周期函数、@Extend/@Styles/@Builder修饰的函数、private修饰的私有函数不支持生成单元测试用例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单元测试用例生成时使用HarmonyOS Ask智能体。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击页面右侧菜单栏CodeGenie图标，完成登录后，在ArkTS文档中，光标放置于方法名称上或框选完整的待测试方法代码块，右键选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CodeGenie > Generate UT"
            })
          }), "，开始生成单元测试用例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(507635)/* ["default"] */.A) + "",
            width: "813",
            height: "686"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在问答对话区生成单元测试用例后，点击Code Genie问答区中", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(948425)/* ["default"] */.A) + "",
            width: "25",
            height: "19"
          }), "可复制生成的代码，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(512028)/* ["default"] */.A) + "",
            width: "28",
            height: "21"
          }), "将生成的代码插入到代码文件，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(541731)/* ["default"] */.A) + "",
            width: "22",
            height: "23"
          }), "弹出文件另存为框，填写文件名称后点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "按钮保存。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(197393)/* ["default"] */.A) + "",
            width: "1378",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成的单元测试用例文件被保存在待测函数所在模块下的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ohosTest/ets/test"
            })
          }), "目录，目录结构和待测函数保持一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(649867)/* ["default"] */.A) + "",
            width: "432",
            height: "394"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["运行单元测试用例，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-app-test/ide-test/ide-code-test/ide-instrument-test#section14415226122419",
            children: "运行测试用例"
          }), "。"]
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
649867(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832699-c77c975e65e715b5677dad156aec4ba1.png");

},
507635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752715-e1e9aeb40bee94b73c04570378722a81.png");

},
512028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAIAAADaYBkLAAACjElEQVR4AYSUvVITYRSGz/slmaGQyuFCbLSHgtDZ0VpqIwjYMI7DOIydEOy8C+0SCkyjN2AiPVF67FKtzzlns4ZlHM48Od97fnc3f2X26xom08vJ9OcS0x+T+5lMp5NbU5dXs99Xs+tiJpBMaZxOKSpuUsn8svAa+SKDRdlP8xGqriUzpXEGJMxNIlSYC3/JTFbhTQUQjsIocbJapVgpaKcUC9Pe/lvYPzhqINw78CRi//UR2thuVvRv3NzkO6pKVeVRvFSKbx+cHp+eHJ98eNdABkgCSTR9ZqpitZmxJDLGUkSb3JtZNKDNcErtavFqZQjz8b2VGVh06ubmT5RJmCiYlVILUstQbIXFbhuPkAwGn8bjb1GUKTD3zcNGqXaMoOouM3//IlaYSUQOw5+/DMfj7wTD0cXo/AI/HH0dnSceUgJGFvgwunARqf6gEFD4osW10PP5HG/m3eZW8Xn4WWco1hifGEXPi2lrGZchU0rnyeNH/f46YX9zvb+5AVv9jWB9qw8baq7FpXwjc0bS7xSJwjMPKV48f7a9/RSdJTwQtshkTqGBBu7UL6cwHpyU5FdbW3tYin+MOUA+IbyLpOKbRI9MPibJA3em/5sZHe0yu8AWj0+ZLl9Kapm8kSYj2c7u4cudQzzsvnqDTyhlGwJyEO9LORI6qDUQAqWzwfuPZzX8OpuQKtAAiIRx3gnjyPiub7oRQAPNgCBM0EmT9zslJTdOJ1vxHsRLvJkhWo58Q5Qk+S36V4r5TqeLj0LtKKPwkAKf0AnoxqfIJej68VdWVix+EqTYAhZGGKf/raVY9tmWvqoUS7xeP36321ldfdDt9iR5Or4iVfxI0mcyPS1Jhmbq9Xox3sn8XwAAAP//dddZ+gAAAAZJREFUAwB3xznWtV6J1QAAAABJRU5ErkJggg==");

},
541731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAIAAACAiijJAAABsklEQVR4AXySS1LCUBBFOynLfYh8yipWggNhpYQBrISBVFAHlgOxWEM8/W7SvETEOunc2z/yEsvTz1l8n845eVKaqAaEwH5+nUrL/orCgqYxyIoXSR7wNN/flb0VKlADykSQoARoIBkUpbUrKCsbAks3IAYoSSeYscTaBy66U1jKUN7vXwF7A9pKLjqYJw6oj+8QSfVEPxao+kGkqAEpkZKNP9D/71WdvkIqzUj6d2nVtRu/BKow5SvwgqyEollhZjQJ80citNAjVUYZn2ssIyl60IAaInrBuo+Kqeu3dbWFarNN7A6HI5BZV7tqs5Oojx80B6z2L8ItpYosInmXRFA+rP8TdCNU7XKQ6XS0Wj4vXxZEMZuNZ7MJGVBmtVyMHx90EJ9OV5liL/AL0KUaBjrtd9mswXxF7r2rf6mq2K+4Y6O/C5fdRQpwf2fIBHnD5V1QpiC0JTR2gEqMgB8Erw6EoICYjEeAwAr0AAb9IFEOob75/AnQ9Am0kCVi/SDcBqimjURVEUJWkYwfhAEgpYgAdIC9ga+gzLI8YoFMDhuxiggaAOsrUKQADwhBPlDmavwFAAD//z/DLusAAAAGSURBVAMAk/cc0ie2rtQAAAAASUVORK5CYII=");

},
948425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAIAAADqEDFSAAACOklEQVR4AWyTwW7aQBRF8bRVFnWWLZVKFyhOPwEpiRTUXQSfQDx8G5B8giEbQpfpmrbfkKQmjYREidrinplrjAuJjp/ve+/O+E1szP2Pmbi7nxVQKWtSUAUhfJr66BZSNBX/l2WVIPBqHbbSdTm/4/cqCAK3kEia76VEkaoghfUy1TaRFhQ5NsNFroigDfP5fDQaXgz6/X5vMCBC7/LyYnI9XiwW2MqwFqjkc6GUIyAM98/OWp1za23XWhvHhG6nc/6+9uHLzY2ciph5tjDcyEFiufw1Go6YxdPr9x3oq6vR09Myig5ub+8wi2I7pZu5lI/H11EU+UHcLNZ24xhsvV7/PJkYY/78/c1TBUuK7RDbez08zA6iCJPAIXF4+DFNU1Lemypbkd03e+HzZMYE+JIk4YCcbjhMnM+YVbaiDtiKiABV8veIm1IBabvd9ge0COpyI8pgg6Li5pJvXXVDUUmSIR8CczEgbnV9zHx0nyh1wKzo9kIJb8qkW61WHLuvQXP5YsCyFy9foRGAKGCt4SJXw0c3F0X+TQwFmsu3MFZqtZq7lS7MZBj+m4sSjdXKjcY45bmyLOOxdBuNBrZn2d7r7Zvq929fd63T6bRafRcEwd7e3m43cIep5O9RbUonJ8fpLOVrAA4ICF7C4+PPo+Mj2TiOxFY0rBc0ML0O95vNT7H71t3nHvtforX29LQZhiEewE8E/CBBzM9ICcgLH0JQ3EUtoloIcGcsdiGnp4gAtRCAFugyFJX+AwAA//823w3eAAAABklEQVQDAIC0SBJSdT/cAAAAAElFTkSuQmCC");

},
197393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752719-bc8b0594d8ed02e5973e07d1ca1fd132.png");

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