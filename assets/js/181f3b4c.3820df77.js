"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["604606"], {
464911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_gif_hardware_decoding_check_ide_gif_hardware_decoding_check_md_181_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-gif-hardware-decoding-check-ide-gif-hardware-decoding-check-md-181.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_gif_hardware_decoding_check_ide_gif_hardware_decoding_check_md_181_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-gif-hardware-decoding-check/ide-gif-hardware-decoding-check","title":"@performance/gif-hardware-decoding-check","description":"在使用@ohos/gif-drawable库解码gif图片时，建议开启硬解码，提升gif加载性能。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-gif-hardware-decoding-check/ide-gif-hardware-decoding-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-gif-hardware-decoding-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-gif-hardware-decoding-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-gif-hardware-decoding-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"@performance/gif-hardware-decoding-check","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-gif-hardware-decoding-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/foreach-index-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-foreach-index-check/"},"next":{"title":"@performance/hp-arkui-avoid-update-auto-state-var-in-aboutToReuse","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-abouttoreuse/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-gif-hardware-decoding-check/ide-gif-hardware-decoding-check.md


const frontMatter = {
	title: '@performance/gif-hardware-decoding-check',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-gif-hardware-decoding-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/gif-hardware-decoding-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancegif-hardware-decoding-check",
        children: "@performance/gif-hardware-decoding-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用@ohos/gif-drawable库解码gif图片时，建议开启硬解码，提升gif加载性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/gif-hardware-decoding-check\": \"warn\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// @ohos/gif-drawable依赖可以通过'ohpm install @ohos/gif-drawable@2.1.0'下载安装\nimport { GIFComponentV2, ResourceLoader } from '@ohos/gif-drawable'\n\n@Entry\n@ComponentV2\nstruct GifDrawableNoReport0 {\n  @Local model2:GIFComponentV2.ControllerOptions = new GIFComponentV2.ControllerOptions();\n  @Local gifAutoPlay:boolean = false;\n  @Local gifReset:boolean = false;\n\n  aboutToAppear(): void {\n    this.model2.destroy();\n    let model22:GIFComponentV2.ControllerOptions = new GIFComponentV2.ControllerOptions();\n    // 调用setOpenHardware接口且值为true，开启硬解码\n    model22.setOpenHardware(true);\n    model22.setSpeedFactor(1);\n    ResourceLoader.downloadDataWithContext(this.getUIContext().getHostContext(), {\n      url: 'https://example.com/test.gif'\n    }, (sucBuffer: ArrayBuffer) => {\n      model22.loadBuffer(sucBuffer, () => {\n        console.log('网络加载解析成功回调绘制！')\n        this.gifAutoPlay = true;\n        // 给组件数据赋新的用户配置参数，达到后续gif动画效果\n        this.model2 = model22;\n      })\n    }, (err: string) => {\n      // 用户根据返回的错误信息，进行业务处理(展示一张失败占位图、再次加载一次、加载其它图片等)\n    })\n  }\n  build() {\n    Row() {\n      GIFComponentV2({model:this.model2!!, autoPlay:this.gifAutoPlay!!, resetGif: this.gifReset!!})\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// @ohos/gif-drawable依赖可以通过'ohpm install @ohos/gif-drawable@2.1.0'下载安装\nimport { GIFComponentV2, ResourceLoader } from '@ohos/gif-drawable'\n\n@Entry\n@ComponentV2\nstruct GifDrawableReport0 {\n  // 调用setOpenHardware接口且值为true，开启硬解码\n  // model0未调用setOpenHardware接口，告警\n  @Local model0: GIFComponentV2.ControllerOptions = new GIFComponentV2.ControllerOptions();\n  @Local gifAutoPlay:boolean = false;\n  @Local gifReset:boolean = false;\n\n  aboutToAppear(): void {\n    this.model0.destroy();\n    // model00未调用setOpenHardware接口，告警\n    let model00: GIFComponentV2.ControllerOptions = new GIFComponentV2.ControllerOptions();\n    model00.setSpeedFactor(1);\n    ResourceLoader.downloadDataWithContext(this.getUIContext().getHostContext(), {\n      url: 'https://example.com/test.gif'\n    }, (sucBuffer: ArrayBuffer) => {\n      model00.loadBuffer(sucBuffer, () => {\n        console.log('网络加载解析成功回调绘制！')\n        this.gifAutoPlay = true;\n        // 给组件数据赋新的用户配置参数，达到后续gif动画效果\n        this.model0 = model00;\n      })\n    }, (err: string) => {\n      // 用户根据返回的错误信息，进行业务处理(展示一张失败占位图、再次加载一次、加载其它图片等)\n    })\n  }\n  build() {\n    Row() {\n      GIFComponentV2({model:this.model0!!, autoPlay:this.gifAutoPlay!!, resetGif: this.gifReset!!})\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\nplugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
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