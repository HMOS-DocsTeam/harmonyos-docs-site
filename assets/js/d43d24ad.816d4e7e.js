"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["819832"], {
480057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_medialibrary_pickercontroller_medialibrary_pickercontroller_md_d43_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-medialibrary-pickercontroller-medialibrary-pickercontroller-md-d43.json
var site_docs_medialibrary_kit_medialibrary_pickercontroller_medialibrary_pickercontroller_md_d43_namespaceObject = JSON.parse('{"id":"medialibrary-kit/medialibrary-pickercontroller/medialibrary-pickercontroller","title":"使用PickerController将编辑后的图片替换原图","description":"替换PhotoPicker中显示的图片/视频","source":"@site/docs/medialibrary-kit/medialibrary-pickercontroller/medialibrary-pickercontroller.md","sourceDirName":"medialibrary-kit/medialibrary-pickercontroller","slug":"/medialibrary-kit/medialibrary-pickercontroller/","permalink":"/harmonyos-docs-site/medialibrary-kit/medialibrary-pickercontroller/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用PickerController将编辑后的图片替换原图","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/medialibrary-pickercontroller","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RecentPhoto组件获取最近一张图片","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-recentphoto/"},"next":{"title":"使用PhotoPicker推荐图片","permalink":"/harmonyos-docs-site/medialibrary-kit/smart-photopicker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/medialibrary-pickercontroller/medialibrary-pickercontroller.md


const frontMatter = {
	title: '使用PickerController将编辑后的图片替换原图',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/medialibrary-pickercontroller',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用PickerController将编辑后的图片替换原图';

const assets = {

};



const toc = [{
  "value": "替换PhotoPicker中显示的图片/视频",
  "id": "替换photopicker中显示的图片视频",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "将Picker上替换显示的图片/视频保存到图库",
  "id": "将picker上替换显示的图片视频保存到图库",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "使用pickercontroller将编辑后的图片替换原图",
        children: "使用PickerController将编辑后的图片替换原图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "替换photopicker中显示的图片视频",
      children: "替换PhotoPicker中显示的图片/视频"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可获得用户从Picker选择的图片、视频的访问权限，读取图片、视频后进行编辑、修改。完成编辑修改后的图片/视频缓存到应用沙箱后，可调用本API，将编辑结果文件发送给PhotoPicker，并指定替换显示的原图。Picker根据指定将接收的编辑结果文件替换原图片进行显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(53800)/* ["default"] */.A) + "",
        width: "280",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入选择器模块和文件管理模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PickerController } from '@kit.MediaLibraryKit';\nimport { fileUri } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建参数列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State pickerController: PickerController = new PickerController();\n@State originUrl: string = ''; // 原图URI\n@State replaceUrl: string = ''; // 原图编辑后的沙箱URI\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#replacephotopickerpreview15",
            children: "replacePhotoPickerPreview()"
          }), "替换图片/视频。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.pickerController.replacePhotoPickerPreview(this.originUrl, this.replaceUrl, (a, b) => {\n  console.log(\"hello this.pickerController.replaceUrl code res:\" + b)\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "将picker上替换显示的图片视频保存到图库",
      children: "将Picker上替换显示的图片/视频保存到图库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用指定保存的文件，需在替换显示的范围内。应用调用API后，PhotoPicker将在Picker上成功替换显示的图片、视频保存到图库。确保保存的内容与替换显示的图片、视频一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(299657)/* ["default"] */.A) + "",
        width: "280",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入选择器模块和文件管理模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import photoAccessHelper from '@ohos.file.photoAccessHelper';\nimport { PickerController, PickerOptions, SaveMode } from '@kit.MediaLibraryKit';\nimport { fileUri } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建参数列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State pickerController: PickerController = new PickerController();\n@State originUrl: string = ''; // 原图URI\n@State replaceUrl: string = ''; // 原图编辑后的沙箱URI\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#savetrustedphotoassets15",
            children: "saveTrustedPhotoAssets()"
          }), "保存图片/视频到图库。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.pickerController.saveTrustedPhotoAssets(this.replaceUris, (a, b) => {\n  console.log(\"hello this.pickerController.save as new code a.code:\" + a.code + \",a.message:\" + a.message + \",res:\" + b)\n}, photoCreationConfigs, SaveMode.SAVE_AS); // SaveMode: SAVE_AS = 0(另存为)，OVERWRITE = 1 （覆盖保存）\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口使用依赖", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#replacephotopickerpreview15",
            children: "pickerController.replacePhotoPickerPreview"
          }), "，需要先执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#replacephotopickerpreview15",
            children: "pickerController.replacePhotoPickerPreview"
          }), "后才能执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#savetrustedphotoassets15",
            children: "pickerController.saveTrustedPhotoAssets"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  SaveMode,\n} from '@ohos.file.PhotoPickerComponent';\nimport {\n  photoAccessHelper,\n  AlbumPickerOptions,\n  PhotoPickerComponent,\n  PickerController,\n  PickerOptions,\n  ItemInfo,\n  PhotoBrowserInfo,\n  ItemType,\n  ClickType,\n  BaseItemInfo,\n} from '@kit.MediaLibraryKit'\n\n@Entry\n@Component\nstruct Index {\n  @State pickerController: PickerController = new PickerController();\n  pickerOptions: PickerOptions = new PickerOptions();\n  albumOptions: AlbumPickerOptions = new AlbumPickerOptions();\n  // 已选择的图片uri数组。\n  @State selectedUris: Array<string> = new Array<string>();\n  @State allBackGroundColor: number = 0xf1f3f5;\n  // 是否在大图页面。\n  @State isInPhotoBrowser: boolean = false;\n  @State originUrl: string = ''; // 原图URI。\n  @State EditedUris: Array<string> = new Array<string>(); // 编辑后的URI数组。\n\n  private onEnterPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {\n    this.isInPhotoBrowser = true;\n    return false;\n  }\n\n  private onExitPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {\n    this.isInPhotoBrowser = false;\n    return false;\n  }\n\n  private onSelect(uri: string): void {\n    // 保存需要替换的图片uri信息。\n    this.originUrl = uri;\n  }\n\n  private onItemClicked(itemInfo: ItemInfo, clickType: ClickType): boolean {\n    if (!itemInfo) {\n      return false;\n    }\n    let type: ItemType | undefined = itemInfo.itemType;\n    let uri: string | undefined = itemInfo.uri;\n    if (type === ItemType.CAMERA) {\n      return true;\n    } else if (type === ItemType.THUMBNAIL) {\n      if (clickType === ClickType.SELECTED) {\n        if (uri) {\n          // 添加勾选的图片到selctedUris数组中，用于展示选中图片信息。\n          this.selectedUris.push(uri);\n        }\n      } else {\n        if (uri) {\n          // 取消勾选，且删除在selectedUris中的元素。\n          this.selectedUris = this.selectedUris.filter((item: string) => {\n            return item !== uri;\n          })\n        }\n      }\n    }\n    return true;\n  }\n\n  private onSelectedItemsDeleted(baseItemInfos: Array<BaseItemInfo>): void {\n    for (let info of baseItemInfos) {\n      if (info?.uri) {\n        // 如果元素被删除，则删除在selectedUris中的元素。\n        this.selectedUris = this.selectedUris.filter((item: string) => {\n          return info?.uri != item;\n        })\n      }\n    }\n  }\n\n  aboutToAppear() {\n    // 设置picker宫格页可选择的媒体文件类型，这里设置图片和视频类型。\n    this.pickerOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Row() {\n            Button('另存为').width('25%').height('50%').margin({ top: 10 }).onClick(() => {\n              console.log(\"----save as new:--------------------------------------------\");\n              let replaceUris: Array<string> = [];\n              this.EditedUris.forEach((uri: string) => {\n                replaceUris.push(uri);\n              });\n              // 将编辑后的图片uri数组通过saveTrustedPhotoAssets保存到图库中，SaveMode = SAVE_AS为另存为。\n              this.pickerController.saveTrustedPhotoAssets(replaceUris, (a, b) => {\n                console.log(\"this.pickerController.save as new, res:\" + b);\n              }, undefined, SaveMode.SAVE_AS);\n            }).margin(10)\n\n            Button('覆盖保存').width('25%').height('50%').margin({ top: 10 }).onClick(() => {\n              console.log(\"----save as overwrite:--------------------------------------------\");\n              let replaceUris: Array<string> = [];\n              this.EditedUris.forEach((uri: string) => {\n                replaceUris.push(uri);\n              });\n              // 将编辑后的图片uri数组通过saveTrustedPhotoAssets保存到图库中，SaveMode = OVERWRITE为覆盖保存。\n              this.pickerController.saveTrustedPhotoAssets(replaceUris, (a, b) => {\n                console.log(\"this.pickerController.save override, res:\" + b)\n              }, undefined, SaveMode.OVERWRITE);\n            }).margin(10)\n\n            Button('Replace Url').width('25%').height('50%').margin({ top: 10 }).onClick(() => {\n              // 模拟构造应用后期编辑修改后的图片uri。\n              let newLocal = this.originUrl.split('.');\n              let mediaType = newLocal[newLocal.length - 1];\n              let editUri = newLocal[0] + \"EDITED.\" + mediaType;\n              // 将编辑后的图片uri放到全局编辑数组中。\n              this.EditedUris.push(editUri);\n              // 可通过该接口，将photoPicker中用户勾选的图片替换为应用后期编辑修改后的图片。\n              this.pickerController.replacePhotoPickerPreview(this.originUrl, editUri, (a, b) => {\n                console.log(\"this.pickerController.replaceUrl code\" + JSON.stringify(a) + \", res:\" + JSON.stringify(b))\n              })\n            }).margin(10)\n          }.width('100%').height('10%')\n\n          Row() {\n            ForEach(this.selectedUris, (uri: string) => {\n              Image(uri).height('95%').width('20%').backgroundColor(this.allBackGroundColor).onClick(() => {\n              })\n            }, (uri: string) => JSON.stringify(uri))\n          }.width('100%').height('15%')\n\n          PhotoPickerComponent({\n            pickerOptions: this.pickerOptions,\n            onSelect: (uri: string): void => this.onSelect(uri),\n            onItemClicked: (itemInfo: ItemInfo, clickType: ClickType): boolean => this.onItemClicked(itemInfo,\n              clickType),\n            onEnterPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onEnterPhotoBrowser(photoBrowserInfo),\n            onExitPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onExitPhotoBrowser(photoBrowserInfo),\n            onSelectedItemsDeleted: (baseItemInfos: Array<BaseItemInfo>): void => this.onSelectedItemsDeleted(baseItemInfos),\n            pickerController: this.pickerController,\n          }).height('87%')\n            .width('100%')\n            .backgroundColor('#F1F3F5')\n        }.width('100%').height('100%')\n      }\n    }\n  }\n}\n"
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
53800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478607-07c205abc74b0d2702528a614f15f25d.gif");

},
299657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798958-15cdd8e5918c6349fa44024cbe77f644.gif");

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