"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["849850"], {
239799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_component_guidelines_albumpicker_component_guidelines_albumpicker_md_833_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-component-guidelines-albumpicker-component-guidelines-albumpicker-md-833.json
var site_docs_medialibrary_kit_component_guidelines_albumpicker_component_guidelines_albumpicker_md_833_namespaceObject = JSON.parse('{"id":"medialibrary-kit/component-guidelines-albumpicker/component-guidelines-albumpicker","title":"使用AlbumPicker组件访问相册列表","description":"开发者可以在布局中嵌入AlbumPickerComponent组件，通过此组件，应用无需申请权限，即可访问公共目录中的相册列表。","source":"@site/docs/medialibrary-kit/component-guidelines-albumpicker/component-guidelines-albumpicker.md","sourceDirName":"medialibrary-kit/component-guidelines-albumpicker","slug":"/medialibrary-kit/component-guidelines-albumpicker/","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-albumpicker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用AlbumPicker组件访问相册列表","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-albumpicker","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用PhotoPicker组件访问图片/视频","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-photoviewpicker/"},"next":{"title":"使用RecentPhoto组件获取最近一张图片","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-recentphoto/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/component-guidelines-albumpicker/component-guidelines-albumpicker.md


const frontMatter = {
	title: '使用AlbumPicker组件访问相册列表',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-albumpicker',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AlbumPicker组件访问相册列表';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "使用albumpicker组件访问相册列表",
        children: "使用AlbumPicker组件访问相册列表"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在布局中嵌入AlbumPickerComponent组件，通过此组件，应用无需申请权限，即可访问公共目录中的相册列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/component-guidelines-photoviewpicker",
        children: "使用PhotoPicker组件访问图片/视频"
      }), "一起使用，用户通过AlbumPickerComponent组件选择对应相册并通知PhotoPickerComponent组件刷新成对应相册的图片和视频。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "界面效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(385419)/* ["default"] */.A) + "",
        width: "313",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相册组件模块文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import {\n  AlbumPickerComponent,\n  AlbumPickerOptions,\n  AlbumInfo,\n  PickerColorMode,\n  PickerController,\n  DataType\n} from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建相册组件配置选项实例（AlbumPickerOptions）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过AlbumPickerOptions，开发者可配置相册页主题颜色，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-albumpickercomponent/ohos-file-albumpickercomponent#albumpickeroptions",
            children: "AlbumPickerOptions API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 用于相册组件初始化时设置参数信息。\nalbumOptions: AlbumPickerOptions = new AlbumPickerOptions();\npickerController: PickerController = new PickerController();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化组件配置选项实例（AlbumPickerOptions）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 设置相册页颜色模式， 默认AUTO。\n * AUTO：跟随系统的模式，LIGHT：浅色模式，DARK：深色模式。\n */\nthis.albumOptions.themeColorMode = PickerColorMode.AUTO;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-albumpickercomponent/ohos-file-albumpickercomponent#albumpickercomponent",
            children: "AlbumPickerComponent"
          }), "组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AlbumPickerComponent({\n  // 设置组件选择选项实例。\n  albumPickerOptions: this.albumOptions,\n\n  /**\n   *相册被选中回调，返回相册信息。\n   * AlbumInfo（uri）\n   */\n  onAlbumClick: (albumInfo: AlbumInfo): boolean => this.onAlbumClick(albumInfo),\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与PhotoPicker组件联动，将相册URI给到应用，根据相册URI更新PhotoPicker组件宫格页内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private onAlbumClick(albumInfo: AlbumInfo): boolean {\n    if (albumInfo?.uri) {\n        // 根据相册url更新宫格页内容。\n        this.pickerController.setData(DataType.SET_ALBUM_URI, albumInfo.uri);\n    }\n    return true;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  PhotoPickerComponent,\n  AlbumPickerComponent,\n  AlbumPickerOptions,\n  AlbumInfo,\n  PickerColorMode,\n  PickerController,\n  DataType\n} from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct AlbumPage {\n  @State pickerController: PickerController = new PickerController();\n  @State Width: string = '100%';\n  @State Height: string = '100%';\n  @State isShowAlbum: boolean = false;\n  @State fontColor: string = '#182431222'\n  @State selectedFontColor: string = '#007DFF'\n  @State currentIndex: number = 0\n  private controller: TabsController = new TabsController();\n  albumOptions = new AlbumPickerOptions();\n  albumOptions1 = new AlbumPickerOptions();\n  albumOptions2 = new AlbumPickerOptions();\n\n  /**\n   *相册被选中回调，返回相册信息\n   * AlbumInfo（uri）\n   */\n  private onAlbumClick(albumInfo: AlbumInfo): boolean {\n    this.isShowAlbum = false;\n    if (albumInfo?.uri) {\n      //  根据相册url更新宫格页内容。\n      this.pickerController.setData(DataType.SET_ALBUM_URI, albumInfo.uri);\n    }\n    return true;\n  }\n\n  aboutToAppear() {\n    /**\n     * 设置相册页颜色模式， 默认AUTO。\n     * AUTO：跟随系统的模式， LIGHT：浅色模式， DARK：深色模式\n     */\n    this.albumOptions.themeColorMode = PickerColorMode.AUTO;\n    this.albumOptions1.themeColorMode = PickerColorMode.LIGHT;\n    this.albumOptions2.themeColorMode = PickerColorMode.DARK;\n  }\n\n  // 设置导航栏的样式\n  @Builder\n  tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.currentIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.currentIndex === index ? 1 : 0)\n    }.width('100%')\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        Row() {\n          Button(\"全部相册\").width('95%').height('5%').onClick(() => {\n            this.isShowAlbum = true;\n          })\n        }.margin({ top: 40 })\n        Column() {\n          PhotoPickerComponent({\n            pickerController: this.pickerController,\n          }).height(this.Height).width(this.Width)\n        }.width('100%').height('100%').alignItems(HorizontalAlign.Center).visibility(this.isShowAlbum ? Visibility.None: Visibility.Visible)\n      }\n\n      if (this.isShowAlbum) {\n        Row() {\n          Column() {\n            /**\n             * 使用3个组件,以便更好展示不同效果。\n             * 需要注意的是切换tab会导致AlbumPickerComponent覆盖在PhotoPickerComponent上导致点击事件失效，\n             * 设置PhotoPickerComponent不可见可以规避点击失效。\n             */\n            Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {\n              TabContent() {\n                AlbumPickerComponent({\n                  albumPickerOptions: this.albumOptions,\n                  onAlbumClick: (albumInfo: AlbumInfo): boolean => this.onAlbumClick(albumInfo),\n                }).height('100%').width('100%')\n              }.tabBar(this.tabBuilder(0, '系统'))\n              TabContent() {\n                AlbumPickerComponent({\n                  albumPickerOptions: this.albumOptions1,\n                  onAlbumClick: (albumInfo: AlbumInfo): boolean => this.onAlbumClick(albumInfo),\n                }).height('100%').width('100%')\n              }.tabBar(this.tabBuilder(1, '浅色'))\n\n              TabContent() {\n                AlbumPickerComponent({\n                  albumPickerOptions: this.albumOptions2,\n                  onAlbumClick: (albumInfo: AlbumInfo): boolean => this.onAlbumClick(albumInfo),\n                }).height('100%').width('100%')\n              }.tabBar(this.tabBuilder(2, '深色'))\n            }\n            .vertical(false)\n            .barMode(BarMode.Fixed)\n            .barWidth('100%')\n            .barHeight(56)\n            .animationDuration(100)\n            .onChange((index: number) => {\n              this.currentIndex = index;\n            })\n            .width('100%')\n            .height('100%')\n            .backgroundColor('#F1F3F5')\n          }.width('100%').height('100%').justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)\n        }\n        .margin({ top: 40 })\n      }\n    }\n  }\n}\n"
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
385419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438651-f06e59e83309576791459d175dd6f1d0.png");

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