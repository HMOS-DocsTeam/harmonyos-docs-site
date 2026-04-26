"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["632755"], {
354747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_component_guidelines_photoviewpicker_component_guidelines_photoviewpicker_md_316_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-component-guidelines-photoviewpicker-component-guidelines-photoviewpicker-md-316.json
var site_docs_medialibrary_kit_component_guidelines_photoviewpicker_component_guidelines_photoviewpicker_md_316_namespaceObject = JSON.parse('{"id":"medialibrary-kit/component-guidelines-photoviewpicker/component-guidelines-photoviewpicker","title":"使用PhotoPicker组件访问图片/视频","description":"当应用需要读取用户图片时，开发者可以在应用界面中嵌入PhotoPicker组件，在用户选择所需要的图片资源后，直接返回该图片资源，而不需要授予应用读取图片文件的权限，即可完成图片或视频文件的访问和读取。","source":"@site/docs/medialibrary-kit/component-guidelines-photoviewpicker/component-guidelines-photoviewpicker.md","sourceDirName":"medialibrary-kit/component-guidelines-photoviewpicker","slug":"/medialibrary-kit/component-guidelines-photoviewpicker/","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-photoviewpicker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用PhotoPicker组件访问图片/视频","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-photoviewpicker","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"保存媒体库资源","permalink":"/harmonyos-docs-site/medialibrary-kit/photoaccesshelper-savebutton/"},"next":{"title":"使用AlbumPicker组件访问相册列表","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-albumpicker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/component-guidelines-photoviewpicker/component-guidelines-photoviewpicker.md


const frontMatter = {
	title: '使用PhotoPicker组件访问图片/视频',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/component-guidelines-photoviewpicker',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用PhotoPicker组件访问图片/视频';

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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用photopicker组件访问图片视频",
        children: "使用PhotoPicker组件访问图片/视频"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要读取用户图片时，开发者可以在应用界面中嵌入PhotoPicker组件，在用户选择所需要的图片资源后，直接返回该图片资源，而不需要授予应用读取图片文件的权限，即可完成图片或视频文件的访问和读取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "界面效果如图所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "宫格页"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "大图页"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入PhotoPicker模块文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import {\n  PhotoPickerComponent,\n  PickerController,\n  PickerOptions,\n  DataType,\n  BaseItemInfo,\n  ItemInfo,\n  PhotoBrowserInfo,\n  ItemType,\n  ClickType,\n  MaxCountType,\n  PhotoBrowserRange,\n  ReminderMode,\n  photoAccessHelper\n} from '@kit.MediaLibraryKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Picker组件配置选项实例（PickerOptions）和控制实例（PickerController）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过PickerOptions，开发者可配置Picker宫格的样式（如勾选框背景色、文本颜色等）、滑动预览方向、最大选择数量等参数，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#pickeroptions",
            children: "PickerOptions API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过PickerController，应用可向Picker组件发送数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 组件初始化时设置参数信息。\npickerOptions: PickerOptions = new PickerOptions();\n\n// 组件初始化完成后，可控制组件部分行为。\n@State pickerController: PickerController = new PickerController();\n\n// 宫格图内已选择的图片uri数组。\n@State selectUris: Array<string> = new Array<string>();\n\n// 目前选择的图片uri。\n@State currentUri: string = '';\n\n// 标识当前是否显示大图页面，false表示不显示大图页面，true表示显示大图页面。\n@State isBrowserShow: boolean = false;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用界面出现时，初始化组件配置选项实例（PickerOptions）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此处仅列举实例用到的参数，当前支持的配置项及其取值范围详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#pickeroptions",
            children: "PickerOptions API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置picker宫格页可选择的媒体文件类型，这里设置图片和视频类型。\nthis.pickerOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;\n// 设置宫格页内资源的最大选择数量，示例设置为5。\nthis.pickerOptions.maxSelectNumber = 5;\n// 选择数量达到最大时的提示方式，示例设置为弹窗提示。\nthis.pickerOptions.maxSelectedReminderMode = ReminderMode.TOAST;\n// 设置picker页面内是否需要展示搜索框，false为不展示。\nthis.pickerOptions.isSearchSupported = true;\n// 将宫格页面内第一个宫格置为拍照按钮，false为不展示拍照按钮。\nthis.pickerOptions.isPhotoTakingSupported = true;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过实现以下回调事件，可在用户在界面操作时，将相关信息报给应用进行处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["进退大图、切换大图回调，上报的大图相关信息详见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#photobrowserinfo",
                children: "PhotoBrowserInfo"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "勾选图片/视频，将上报图片URI供应用使用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(82760)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["回调返回的所有URI均为只读URI，开发者可以根据结果集中的URI读取文件数据。但不能在Picker的回调中直接使用此URI打开文档，需要定义一个全局变量保存URI，样例可参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/medialibrary-kit/photoaccesshelper-photoviewpicker#%E6%8C%87%E5%AE%9Auri%E8%AF%BB%E5%8F%96%E6%96%87%E4%BB%B6%E6%95%B0%E6%8D%AE",
                  children: "指定URI读取文件数据"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/medialibrary-kit/photoaccesshelper-photoviewpicker#%E6%8C%87%E5%AE%9Auri%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87%E6%88%96%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90",
                  children: "指定URI获取图片或视频资源"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如需获取元数据，可通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
                  children: "文件管理"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/core-file-api/core-file-arkts/js-apis-file-fileuri/js-apis-file-fileuri",
                  children: "文件URI"
                }), "接口，根据uri获取部分文件属性信息，比如文件大小、访问时间、修改时间、文件名、文件路径等。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击图片（缩略图item），将上报图片/视频信息", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#iteminfo",
                children: "ItemInfo"
              }), "；"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击相机item，可默认拉起系统相机或应用自行处理。如何自行拉起相机请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/camera-api/camera-arkts/js-apis-camerapicker/js-apis-camerapicker#camerapickerpick",
                children: "cameraPicker.pick"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持的回调事件及其参数请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#photopickercomponent",
            children: "PhotoPickerComponent API参考"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 资源被选中回调，返回资源的信息，以及选中方式。\n// 应用根据自己的业务来决定，资源是否勾选或者是否进入系统相机。\nprivate onItemClicked(itemInfo: ItemInfo, clickType: ClickType): boolean {\n  if (!itemInfo) {\n    return false;\n  }\n  let type: ItemType | undefined = itemInfo.itemType;\n  let uri: string | undefined = itemInfo.uri;\n  if (type === ItemType.CAMERA) {\n    // 如果宫格页面第一个宫格的类型为ItemType.CAMERA，则是相机按钮。\n    // 返回true则拉起系统相机；如果返回false应用可以自己拉起相机。\n    return true;\n  } else {\n    // 如果是选中操作。\n    if (clickType === ClickType.SELECTED) {\n      // 应用做自己的业务处理。\n      if (uri) {\n        this.selectUris.push(uri);\n        this.pickerOptions.preselectedUris = [...this.selectUris];\n      }\n      // 返回true则该宫格响应勾选，否则不响应勾选。\n      return true;\n    } else {\n      // 如果是取消选中操作。\n      // 应用做自己的业务处理。\n      if (uri) {\n        this.selectUris = this.selectUris.filter((item: string) => {\n          return item != uri;\n        });\n        this.pickerOptions.preselectedUris = [...this.selectUris];\n      }\n      // 返回true则该宫格响应取消勾选，否则不响应取消勾选。\n      return true;\n    }\n  }\n}\n\n// 点击缩略图从宫格进入大图时产生的回调。\nprivate onEnterPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {\n  this.isBrowserShow = true;\n  return true;\n}\n\n// 退出大图时的回调。\nprivate onExitPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {\n  this.isBrowserShow = false;\n  return true;\n}\n\n// 接收到该回调后，便可通过pickerController相关接口向picker发送数据，在此之前不生效。\nprivate onPickerControllerReady(): void {\n  let elements: number[] = [PhotoBrowserUIElement.BACK_BUTTON];\n  this.pickerController.setPhotoBrowserUIElementVisibility(elements, false); // 设置大图页不显示返回按钮。\n}\n\n// 大图左右滑动的回调。\nprivate onPhotoBrowserChanged(browserItemInfo: BaseItemInfo): boolean {\n  this.currentUri = browserItemInfo.uri ?? '';\n  return true;\n}\n\n// 已勾选图片被删除时的回调。\nprivate onSelectedItemsDeleted(baseItemInfos: Array<BaseItemInfo>): void {\n}\n\n// 超过最大选择数量再次点击时的回调。\nprivate onExceedMaxSelected(exceedMaxCountType: MaxCountType): void {\n}\n\n// 当前相册被删除时的回调。\nprivate onCurrentAlbumDeleted(): void {\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#photopickercomponent",
            children: "PhotoPickerComponent"
          }), "组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PhotoPickerComponent({\n  pickerOptions: this.pickerOptions,\n  onItemClicked: (itemInfo: ItemInfo, clickType: ClickType): boolean => this.onItemClicked(itemInfo, clickType),\n  onEnterPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onEnterPhotoBrowser(photoBrowserInfo),\n  onExitPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onExitPhotoBrowser(photoBrowserInfo),\n  onPickerControllerReady: (): void => this.onPickerControllerReady(),\n  onPhotoBrowserChanged: (browserItemInfo: BaseItemInfo): boolean => this.onPhotoBrowserChanged(browserItemInfo),\n  onSelectedItemsDeleted: (BaseItemInfo: Array<BaseItemInfo>) => this.onSelectedItemsDeleted(BaseItemInfo),\n  onExceedMaxSelected: (exceedMaxCountType: MaxCountType) => this.onExceedMaxSelected(exceedMaxCountType),\n  onCurrentAlbumDeleted: () => this.onCurrentAlbumDeleted(),\n  pickerController: this.pickerController,\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过PickerController向Picker组件发送数据，实现控制PhotoPickerComponent组件行为。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["存在多种用法，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#pickercontroller",
            children: "PickerController"
          }), "API文档。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  PhotoPickerComponent,\n  PickerController,\n  PickerOptions,\n  DataType,\n  BaseItemInfo,\n  ItemInfo,\n  PhotoBrowserInfo,\n  ItemType,\n  ClickType,\n  MaxCountType,\n  PhotoBrowserRange,\n  ReminderMode,\n  photoAccessHelper\n} from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct PhotoPickerComponentDemo {\n  // 组件初始化时设置参数信息。\n  pickerOptions: PickerOptions = new PickerOptions();\n\n  // 组件初始化完成后，可控制组件部分行为。\n  @State pickerController: PickerController = new PickerController();\n\n  // 宫格图内已选择的图片uri数组。\n  @State selectUris: Array<string> = new Array<string>();\n\n  // 目前选择的图片uri。\n  @State currentUri: string = '';\n\n  // 标识当前是否显示大图页面，false表示不显示大图页面，true表示显示大图页面。\n  @State isBrowserShow: boolean = false;\n\n  aboutToAppear() {\n    // 设置picker宫格页可选择的媒体文件类型，这里设置图片和视频类型。\n    this.pickerOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;\n    // 设置宫格页内资源的最大选择数量，示例设置为5。\n    this.pickerOptions.maxSelectNumber = 5;\n    // 选择数量达到最大时的提示方式，示例设置为弹窗提示。\n    this.pickerOptions.maxSelectedReminderMode = ReminderMode.TOAST;\n    // 设置picker页面内是否需要展示搜索框，false为不展示。\n    this.pickerOptions.isSearchSupported = true;\n    // 将宫格页面内第一个宫格置为拍照按钮，false为不展示拍照按钮。\n    this.pickerOptions.isPhotoTakingSupported = true;\n  }\n\n  // 资源被选中回调，返回资源的信息，以及选中方式。\n  // 应用根据自己的业务来决定，资源是否勾选或者是否进入系统相机。\n  private onItemClicked(itemInfo: ItemInfo, clickType: ClickType): boolean {\n    if (!itemInfo) {\n      return false;\n    }\n    let type: ItemType | undefined = itemInfo.itemType;\n    let uri: string | undefined = itemInfo.uri;\n    if (type === ItemType.CAMERA) {\n      // 如果宫格页面第一个宫格的类型为ItemType.CAMERA，则是相机按钮。\n      // 返回true则拉起系统相机；如果返回false应用可以自己拉起相机。\n      return true;\n    } else {\n      // 如果是选中操作。\n      if (clickType === ClickType.SELECTED) {\n        // 应用做自己的业务处理。\n        if (uri) {\n          this.selectUris.push(uri);\n          this.pickerOptions.preselectedUris = [...this.selectUris];\n        }\n        // 返回true则该宫格响应勾选，否则不响应勾选。\n        return true;\n      } else {\n        // 如果是取消选中操作。\n        // 应用做自己的业务处理。\n        if (uri) {\n          this.selectUris = this.selectUris.filter((item: string) => {\n            return item != uri;\n          });\n          this.pickerOptions.preselectedUris = [...this.selectUris];\n        }\n        // 返回true则该宫格响应取消勾选，否则不响应取消勾选。\n        return true;\n      }\n    }\n  }\n\n  // 点击缩略图从宫格进入大图时产生的回调。\n  private onEnterPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {\n    this.isBrowserShow = true;\n    return true;\n  }\n\n  // 退出大图时的回调。\n  private onExitPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {\n    this.isBrowserShow = false;\n    return true;\n  }\n\n  // 接收到该回调后，便可通过pickerController相关接口向picker发送数据，在此之前不生效。\n  private onPickerControllerReady(): void {\n  }\n\n  // 大图左右滑动的回调。\n  private onPhotoBrowserChanged(browserItemInfo: BaseItemInfo): boolean {\n    this.currentUri = browserItemInfo.uri ?? '';\n    return true;\n  }\n\n  // 已勾选图片被删除时的回调。\n  private onSelectedItemsDeleted(baseItemInfos: Array<BaseItemInfo>): void {\n  }\n\n  // 超过最大选择数量再次点击时的回调。\n  private onExceedMaxSelected(exceedMaxCountType: MaxCountType): void {\n  }\n\n  // 当前相册被删除时的回调。\n  private onCurrentAlbumDeleted(): void {\n  }\n\n  build() {\n    Flex({\n      direction: FlexDirection.Column,\n      alignItems: ItemAlign.Start\n    }) {\n      PhotoPickerComponent({\n        pickerOptions: this.pickerOptions,\n        onItemClicked: (itemInfo: ItemInfo, clickType: ClickType): boolean => this.onItemClicked(itemInfo, clickType),\n        onEnterPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onEnterPhotoBrowser(photoBrowserInfo),\n        onExitPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onExitPhotoBrowser(photoBrowserInfo),\n        onPickerControllerReady: (): void => this.onPickerControllerReady(),\n        onPhotoBrowserChanged: (browserItemInfo: BaseItemInfo): boolean => this.onPhotoBrowserChanged(browserItemInfo),\n        onSelectedItemsDeleted: (BaseItemInfo: Array<BaseItemInfo>) => this.onSelectedItemsDeleted(BaseItemInfo),\n        onExceedMaxSelected: (exceedMaxCountType: MaxCountType) => this.onExceedMaxSelected(exceedMaxCountType),\n        onCurrentAlbumDeleted: () => this.onCurrentAlbumDeleted(),\n        pickerController: this.pickerController,\n      })\n\n      // 这里模拟应用侧底部的选择栏。\n      if (this.isBrowserShow) {\n        // 已选择的图片缩略图。\n        Row() {\n          ForEach(this.selectUris, (uri: string) => {\n            if (uri === this.currentUri) {\n              Image(uri).height(50).width(50)\n                .onClick(() => {\n                })\n                .borderWidth(1)\n                .borderColor('red')\n            } else {\n              Image(uri).height(50).width(50).onClick(() => {\n                this.pickerController.setData(DataType.SET_SELECTED_URIS, this.selectUris);\n                // 点击底部缩略图，切换大图浏览的照片为点击的缩略图；本示例设置浏览范围为全部，包括图片和视频。\n                this.pickerController.setPhotoBrowserItem(uri, PhotoBrowserRange.ALL);\n              })\n            }\n          }, (uri: string) => JSON.stringify(uri))\n        }.alignSelf(ItemAlign.Center).margin(this.selectUris.length ? 10 : 0)\n      } else {\n        // 进入大图，预览已选择的图片。\n        Button('预览').width('33%').alignSelf(ItemAlign.Start).height('5%').margin(10).onClick(() => {\n          if (this.selectUris.length > 0) {\n            // 切换picker组件至大图浏览模式浏览图片。\n            this.pickerController.setPhotoBrowserItem(this.selectUris[0], PhotoBrowserRange.SELECTED_ONLY);\n          }\n        })\n      }\n    }\n  }\n}\n"
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
82760(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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