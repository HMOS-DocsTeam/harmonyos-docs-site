"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["740848"], {
350893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_emulator_ide_emulator_use_ide_emulator_install_upload_ide_emulator_install_upload_md_5e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-emulator-ide-emulator-use-ide-emulator-install-upload-ide-emulator-install-upload-md-5e9.json
var site_docs_ide_run_emulator_ide_emulator_use_ide_emulator_install_upload_ide_emulator_install_upload_md_5e9_namespaceObject = JSON.parse('{"id":"ide-run-emulator/ide-emulator-use/ide-emulator-install-upload/ide-emulator-install-upload","title":"安装应用程序包和上传文件","description":"- 安装应用程序包","source":"@site/docs/ide-run-emulator/ide-emulator-use/ide-emulator-install-upload/ide-emulator-install-upload.md","sourceDirName":"ide-run-emulator/ide-emulator-use/ide-emulator-install-upload","slug":"/ide-run-emulator/ide-emulator-use/ide-emulator-install-upload/","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-use/ide-emulator-install-upload/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"安装应用程序包和上传文件","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-install-upload","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"模拟器访问网络","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-use/ide-emulator-access-network/"},"next":{"title":"更多的扩展能力","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-use/ide-emulator-more-features/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-emulator/ide-emulator-use/ide-emulator-install-upload/ide-emulator-install-upload.md


const frontMatter = {
	title: '安装应用程序包和上传文件',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-install-upload',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '安装应用程序包和上传文件';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "安装应用程序包和上传文件",
        children: "安装应用程序包和上传文件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装应用程序包"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "您可以将本地的HAP包安装到模拟器上，只需要将本地的HAP包拖动到屏幕上即可进行安装，支持一次性拖拽安装多个HAP包。模拟器也支持安装包含HSP文件的应用，只需要将HSP和HAP一起拖动到屏幕上即可进行安装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "您也可以在命令行窗口进入DevEco Studio安装目录的sdk\\default\\openharmony\\toolchains目录下，使用hdc app install命令安装包。安装完成后，可在应用列表里查看已安装的应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上传文件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您可以将本地文件上传到模拟器中，只需要将文件拖动至模拟器屏幕上即可。模拟器支持批量上传文件，上传的文件存放在虚拟设备的/storage/media/100/local/files/Docs/Download/目录下。您可以在模拟器上打开", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "文件管理 > 我的手机 > 下载"
            })
          }), "查看上传的文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此外，您也可以在命令行窗口进入DevEco Studio安装目录的sdk\\default\\openharmony\\toolchains目录下，使用hdc file send命令上传文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从DevEco Studio 6.1.0 Beta2版本开始，使用API 21及以上的镜像时，上传的图片类文件将保存在图库中。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10362)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "689",
        height: "756"
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
10362(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530911066-4a24d217f79fee9e97599bcd724e52d6.gif");

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