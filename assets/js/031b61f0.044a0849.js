"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["961129"], {
40707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_text_image_layout_arkts_text_image_layout_md_031_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-text-image-layout-arkts-text-image-layout-md-031.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_text_image_layout_arkts_text_image_layout_md_031_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout/arkts-text-image-layout","title":"图文混排","description":"图文混排是指图片与文字混合排列，文字可展示于图片四周。此排列方式能够直观呈现页面信息，增强视觉冲击力，使页面展示效果更加多样化。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout/arkts-text-image-layout.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"图文混排","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-text-image-layout","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"属性字符串（StyledString/MutableStyledString）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string/"},"next":{"title":"管理软键盘","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout/arkts-text-image-layout.md


const frontMatter = {
	title: '图文混排',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-text-image-layout',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '图文混排';

const assets = {

};



const toc = [{
  "value": "使用Span和ImageSpan实现图文混排",
  "id": "使用span和imagespan实现图文混排",
  "level": 2
}, {
  "value": "使用属性字符串实现图文混排",
  "id": "使用属性字符串实现图文混排",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图文混排",
        children: "图文混排"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图文混排是指图片与文字混合排列，文字可展示于图片四周。此排列方式能够直观呈现页面信息，增强视觉冲击力，使页面展示效果更加多样化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用span和imagespan实现图文混排",
      children: "使用Span和ImageSpan实现图文混排"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textverticalalign20",
        children: "textVerticalAlign"
      }), "属性和设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
        children: "ImageSpan"
      }), "组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan#verticalalign",
        children: "verticalAlign"
      }), "为ImageSpanAlignment.FOLLOW_PARAGRAPH，实现商品价格优惠信息展示的应用场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text() {\n  // 请将$r('app.media.hot_sale')替换为实际资源文件\n  ImageSpan($r('app.media.hot_sale'))\n    .width(50)\n    .height(30)\n    .borderRadius(5)\n    .verticalAlign(ImageSpanAlignment.FOLLOW_PARAGRAPH)\n  // 请将$r('app.string.surprise_price')替换为实际资源文件，在本示例中该资源文件的value值为\"惊喜价 ￥1299\"\n  Span($r('app.string.surprise_price'))\n    .fontSize(25)\n    .fontColor(Color.Red)\n  Span('1599')\n    .decoration({\n      type: TextDecorationType.LineThrough,\n      color: Color.Grey,\n      style: TextDecorationStyle.SOLID\n    })\n    .fontSize(16)\n}.textVerticalAlign(TextVerticalAlign.CENTER)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147372)/* ["default"] */.A) + "",
        width: "485",
        height: "107"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用属性字符串实现图文混排",
      children: "使用属性字符串实现图文混排"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#imageattachment",
        children: "ImageAttachment"
      }), "添加图片，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#textstyle",
        children: "TextStyle"
      }), "设置多种文本样式，实现商品详情信息展示的应用场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// resourceGetString封装工具，从资源中获取字符串\nimport resourceGetString from '../../common/resource';\nimport { image } from '@kit.ImageKit';\nimport { LengthMetrics } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Textcomponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'Textcomponent_';\n\n@Entry\n@Component\nstruct styled_string_demo {\n  @State message: string = 'Hello World';\n  imagePixelMap: image.PixelMap | undefined = undefined;\n  @State imagePixelMap3: image.PixelMap | undefined = undefined;\n  mutableStr: MutableStyledString = new MutableStyledString('123');\n  controller: TextController = new TextController();\n  mutableStr2: MutableStyledString = new MutableStyledString('This is set decoration line style to the mutableStr2', [{\n    start: 0,\n    length: 15,\n    styledKey: StyledStringKey.DECORATION,\n    styledValue: new DecorationStyle({\n      type: TextDecorationType.Overline,\n      color: Color.Orange,\n      style: TextDecorationStyle.DOUBLE\n    })\n  }]);\n\n  async aboutToAppear() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'aboutToAppear initial imagePixelMap');\n    // $r('app.media.sky')需要替换为开发者所需的资源文件。\n    this.imagePixelMap = await this.getPixmapFromMedia($r('app.media.sky'));\n  }\n\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array = await this.getUIContext().getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer?.slice(0, unit8Array?.buffer?.byteLength));\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n\n  leadingMarginValue: ParagraphStyle = new ParagraphStyle({\n    leadingMargin: LengthMetrics.vp(5),\n    maxLines: 2,\n    overflow: TextOverflow.Ellipsis,\n    textVerticalAlign: TextVerticalAlign.BASELINE\n  });\n  //行高样式对象\n  lineHeightStyle1: LineHeightStyle = new LineHeightStyle(new LengthMetrics(24));\n  //Bold样式\n  boldTextStyle: TextStyle = new TextStyle({ fontWeight: FontWeight.Bold });\n  //创建含段落样式的对象paragraphStyledString1\n  paragraphStyledString1: MutableStyledString =\n    // 请将$r('app.string.print_photo')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n高质量冲洗照片，高清冲印3/4/5/6寸包邮塑封，品质保证，\"\n    new MutableStyledString(resourceGetString.resourceToString($r('app.string.print_photo')), [\n      {\n        start: 0,\n        length: 28,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.leadingMarginValue\n      },\n      {\n        start: 11,\n        length: 4,\n        styledKey: StyledStringKey.LINE_HEIGHT,\n        styledValue: this.lineHeightStyle1\n      }\n    ]);\n  // 请将$r('app.string.limited_time_discount')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n限时直降5.15元 限量增送\"\n  paragraphStyledString2: MutableStyledString = new MutableStyledString(resourceGetString.resourceToString($r('app.string.limited_time_discount')), [\n    {\n      start: 0,\n      length: 5,\n      styledKey: StyledStringKey.PARAGRAPH_STYLE,\n      styledValue: this.leadingMarginValue\n    },\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.LINE_HEIGHT,\n      styledValue: new LineHeightStyle(new LengthMetrics(40))\n    },\n    {\n      start: 0,\n      length: 9,\n      styledKey: StyledStringKey.FONT,\n      styledValue: this.boldTextStyle\n    },\n    {\n      start: 1,\n      length: 9,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(20), fontColor: Color.Red })\n    },\n    {\n      start: 11,\n      length: 4,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Grey, fontSize: LengthMetrics.vp(14) })\n    }\n  ]);\n  // 请将$r('app.string.sales_volume')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n￥22.50 销量400万+\"\n  paragraphStyledString3: MutableStyledString = new MutableStyledString(resourceGetString.resourceToString($r('app.string.sales_volume')), [\n    {\n      start: 0,\n      length: 15,\n      styledKey: StyledStringKey.PARAGRAPH_STYLE,\n      styledValue: this.leadingMarginValue\n    },\n    {\n      start: 0,\n      length: 7,\n      styledKey: StyledStringKey.LINE_HEIGHT,\n      styledValue: new LineHeightStyle(new LengthMetrics(40))\n    },\n    {\n      start: 0,\n      length: 7,\n      styledKey: StyledStringKey.FONT,\n      styledValue: this.boldTextStyle\n    },\n    {\n      start: 1,\n      length: 1,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(18), fontColor: Color.Red })\n    },\n    {\n      start: 2,\n      length: 2,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(36), fontColor: Color.Red })\n    },\n    {\n      start: 4,\n      length: 3,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontSize: LengthMetrics.vp(20), fontColor: Color.Red })\n    },\n    {\n      start: 7,\n      length: 9,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Grey, fontSize: LengthMetrics.vp(14) })\n    }\n  ]);\n\n  build() {\n    Row() {\n      Column({ space: 10 }) {\n        Text(undefined, { controller: this.controller })\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .backgroundColor('#FFFFFF')\n          .borderRadius(5)\n          .width(210)\n        // 请将$r('app.string.textImageMixedLayout_content')替换为实际资源文件，在本示例中该资源文件的value值为\"点击查看商品详情\"\n        Button($r('app.string.textImageMixedLayout_content'))\n          .onClick(() => {\n            if (this.imagePixelMap !== undefined) {\n              this.mutableStr = new MutableStyledString(new ImageAttachment({\n                value: this.imagePixelMap,\n                size: { width: 210, height: 190 },\n                verticalAlign: ImageSpanAlignment.BASELINE,\n                objectFit: ImageFit.Fill,\n                layoutStyle: {\n                  borderRadius: LengthMetrics.vp(5)\n                }\n              }));\n              this.paragraphStyledString1.appendStyledString(this.paragraphStyledString2);\n              this.paragraphStyledString1.appendStyledString(this.paragraphStyledString3);\n              this.mutableStr.appendStyledString(this.paragraphStyledString1);\n              this.controller.setStyledString(this.mutableStr);\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n    .backgroundColor('#F8F8FF')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(276855)/* ["default"] */.A) + "",
        width: "295",
        height: "485"
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
147372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437895-f211e7b57705b332b709a3d88e0d2d85.png");

},
276855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957850-b6e9c3dbc7bb551e1384081a2824e3ed.png");

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