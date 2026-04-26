"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["113264"], {
348489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_appdevelop_agc_harmonyos_clouddev_invokecloudcode_agc_harmonyos_clouddev_invokecloudobj_agc_harmonyos_clouddev_invo_1fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-agc-harmonyos-clouddevguide-agc-harmonyos-clouddev-devprocess-agc-harmonyos-clouddev-appdevelop-agc-harmonyos-clouddev-invokecloudcode-agc-harmonyos-clouddev-invokecloudobj-agc-harmonyos-clouddev-invo-1fb.json
var site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_appdevelop_agc_harmonyos_clouddev_invokecloudcode_agc_harmonyos_clouddev_invokecloudobj_agc_harmonyos_clouddev_invo_1fb_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudobj/agc-harmonyos-clouddev-invokecloudobj","title":"在端侧调用云对象","description":"云对象开发完成后，您可以为其生成端侧调用接口类，供后续端侧工程调用云对象使用。","source":"@site/docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudobj/agc-harmonyos-clouddev-invokecloudobj.md","sourceDirName":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudobj","slug":"/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudobj/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudobj/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"在端侧调用云对象","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-invokecloudobj","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"在端侧调用云函数","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudfunc/"},"next":{"title":"在端侧访问云数据库","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokeclouddatabase/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudobj/agc-harmonyos-clouddev-invokecloudobj.md


const frontMatter = {
	title: '在端侧调用云对象',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-invokecloudobj',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '在端侧调用云对象';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "在端侧调用云对象",
        children: "在端侧调用云对象"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "云对象开发完成后，您可以为其生成端侧调用接口类，供后续端侧工程调用云对象使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请确保", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudobj/agc-harmonyos-clouddev-deploycloudobj",
        children: "云对象已正确开发并部署"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击云对象（以“my-cloud-object”为例），选择“Generate Invoke Interface”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(731598)/* ["default"] */.A) + "",
            width: "734",
            height: "436"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的“Generate Invoke Interface”窗口，可以看到生成的端侧调用接口类将默认存储在“Application/cloud_objects”模块目录下，点击“OK”确认。您也可以点击“...”按钮自定义存储目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(825675)/* ["default"] */.A) + "",
            width: "621",
            height: "135"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio自动打开指定的端侧调用接口类存储目录，该目录包含“ImportObject.ts”文件和“my-cloud-object”文件夹。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“ImportObject.ts”文件：定义了importObject方法，可以通过该方法来实例化一个云对象的代理。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“my-cloud-object”文件夹：包含了该云对象在端侧可能用到的所有模型。示例中只有一个“MyCloudObject.ts”文件，如果有其它的模型也将生成在该文件夹下。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“MyCloudObject.ts”文件：定义了MyCloudObject class，并且定义了add和subtract两个方法。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(593288)/* ["default"] */.A) + "",
            width: "978",
            height: "569"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在代码文件中引入云对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { MyCloudObject, importObject } from 'cloud_objects';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用云对象中的方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let myCloudObject = importObject(MyCloudObject); // 使用importObject实例化MyCloudObject的代理\nmyCloudObject.add(1, 2).then(addResult => {\n  console.log(`1 + 2 = ${addResult.result}`);\n}); // 忽略异常处理\nmyCloudObject.subtract(6, 3).then(subtractResult => {\n  console.log(`6 - 3 = ${subtractResult.result}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于“Generate Invoke Interface”时已经生成所需要的模型以及importObject方法，因此在编码时可以很方便地使用联想、自动引入等DevEco Studio提供的高阶能力，如下图所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(998300)/* ["default"] */.A) + "",
            width: "654",
            height: "141"
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
731598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498324-a978d38dc52c7c2df81ff098d2b772bf.png");

},
998300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498328-175359f6c1d935b94a7df7fb092b7a90.png");

},
593288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704573-e4f8fe968905e1d4827c177eed88a6c2.png");

},
825675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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