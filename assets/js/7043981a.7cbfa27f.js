"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["535153"], {
814550(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_suggest_use_effectkit_blur_ide_hp_arkui_suggest_use_effectkit_blur_md_704_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-suggest-use-effectkit-blur-ide-hp-arkui-suggest-use-effectkit-blur-md-704.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_suggest_use_effectkit_blur_ide_hp_arkui_suggest_use_effectkit_blur_md_704_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur/ide-hp-arkui-suggest-use-effectkit-blur","title":"@performance/hp-arkui-suggest-use-effectkit-blur","description":"建议使用effectKit.createEffect实现模糊效果。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur/ide-hp-arkui-suggest-use-effectkit-blur.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"title":"@performance/hp-arkui-suggest-use-effectkit-blur","sidebar_position":31,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-arkui-suggest-use-effectkit-blur","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-suggest-reuseid-for-if-else-reusable-component","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-reuseid-if-else-component/"},"next":{"title":"@performance/hp-arkui-suggest-use-get-anonymousid-async","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-sg-anonymousid-async/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-use-effectkit-blur/ide-hp-arkui-suggest-use-effectkit-blur.md


const frontMatter = {
	title: '@performance/hp-arkui-suggest-use-effectkit-blur',
	sidebar_position: 31,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-arkui-suggest-use-effectkit-blur',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-suggest-use-effectkit-blur';

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
        id: "performancehp-arkui-suggest-use-effectkit-blur",
        children: "@performance/hp-arkui-suggest-use-effectkit-blur"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议使用effectKit.createEffect实现模糊效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-suggest-use-effectkit-blur\": \"suggestion\",\n  }\n}\n"
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
        children: "// 导入图片处理模块\nimport image from '@ohos.multimedia.image';\n// 导入图像效果模块\nimport effectKit from '@ohos.effectKit';\n\n@Entry\n@Component\nstruct MyComponent {\n  // 是否显示全屏模态页面。静态模糊用\n  @State isShowStaticBlur: boolean = false;\n  // PixelMap实例\n  @State pixelMap: image.PixelMap | undefined = undefined;\n  // ImageSource实例\n  imgSource: image.ImageSource | undefined = undefined;\n\n  // 静态模糊\n  async staticBlur() {\n    // 获取resourceManager对象\n    let resourceMgr = this.getUIContext()?.getHostContext()?.resourceManager;\n    // 获rawfile目录下的图片\n    const fileData = await resourceMgr?.getRawFileContent('startIcon.png');\n    // 创建实例\n    let buffer = fileData?.buffer.slice(0);\n    if (buffer) {\n      // 创建图片源实例\n      this.imgSource = image.createImageSource(buffer);\n    }\n    // 创建像素的属性\n    let opts: image.InitializationOptions = {\n      // 是否可编辑\n      editable: true,\n      // 像素格式。3表示RGBA_8888\n      pixelFormat: 3,\n      // 创建图片大小\n      size: {\n        height: 4,\n        width: 6\n      }\n    };\n    // 创建PixelMap\n    await this.imgSource?.createPixelMap(opts).then((pixelMap: image.PixelMap) => {\n      // 模糊半径\n      const blurRadius = 1;\n      // 创建Filter实例\n      let headFilter = effectKit.createEffect(pixelMap);\n      if (headFilter != null) {\n        // 设置静态模糊。将模糊效果添加到效果链表中\n        headFilter.blur(blurRadius);\n        // 获取已添加链表效果的源图像的image.PixelMap\n        headFilter.getEffectPixelMap().then((pixelMap: image.PixelMap) => {\n          this.pixelMap = pixelMap;\n        });\n      }\n    })\n  }\n\n  // 图片设置静态模糊的模态页面\n  @Builder\n  staticBlurBuilder() {\n    Stack() {\n      Image(this.pixelMap)\n        .width('100%')\n        .height('100%')\n        .objectFit(ImageFit.Fill)\n      Button('close')\n        .fontSize(20)\n        .onClick(() => {\n          this.isShowStaticBlur = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Button('静态模糊')\n        .onClick(() => {\n          this.isShowStaticBlur = true;\n          // 设置静态模糊\n          this.staticBlur();\n        })\n        .bindContentCover(this.isShowStaticBlur, this.staticBlurBuilder(), {\n          // 全屏模态转场类型。上下切换动画\n          modalTransition: ModalTransition.DEFAULT\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MyComponent {\n  build() {\n    Column({ space: 10 }) {\n      // 对image进行模糊，未使用effectKit.createEffect\n      Text('Image blur').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      Image('resources/base/media/sss001.jpg')\n        .blur(1)\n        .border({ width: 1 })\n        .borderStyle(BorderStyle.Dashed)\n        .aspectRatio(1)\n        .width('90%')\n        .height(40)\n\n      // 对背景进行模糊，未使用effectKit.createEffect\n      Text('backdropBlur').fontSize(15).fontColor(0xCCCCCC).width('90%')\n      Text()\n        .width('90%')\n        .height(40)\n        .fontSize(16)\n        .backdropBlur(3)\n        .backgroundImage('/pages/attrs/image/image.jpg')\n        .backgroundImageSize({ width: 1200, height: 160 })\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
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