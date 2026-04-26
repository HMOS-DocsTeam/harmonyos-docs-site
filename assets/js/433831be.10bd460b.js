"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["744475"], {
242118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_photoaccesshelper_savebutton_photoaccesshelper_savebutton_md_433_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-photoaccesshelper-savebutton-photoaccesshelper-savebutton-md-433.json
var site_docs_medialibrary_kit_photoaccesshelper_savebutton_photoaccesshelper_savebutton_md_433_namespaceObject = JSON.parse('{"id":"medialibrary-kit/photoaccesshelper-savebutton/photoaccesshelper-savebutton","title":"保存媒体库资源","description":"保存图片、视频等用户文件到图库时，无需申请相册管理模块权限\'ohos.permission.WRITE\\\\_IMAGEVIDEO\'，应用可以通过安全控件或授权弹窗的方式，将用户指定的媒体资源保存到图库中。","source":"@site/docs/medialibrary-kit/photoaccesshelper-savebutton/photoaccesshelper-savebutton.md","sourceDirName":"medialibrary-kit/photoaccesshelper-savebutton","slug":"/medialibrary-kit/photoaccesshelper-savebutton/","permalink":"/harmonyos-docs-site/medialibrary-kit/photoaccesshelper-savebutton/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"保存媒体库资源","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-savebutton","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Picker选择媒体库资源","permalink":"/harmonyos-docs-site/medialibrary-kit/photoaccesshelper-photoviewpicker/"},"next":{"title":"使用PhotoPicker组件访问图片/视频","permalink":"/harmonyos-docs-site/medialibrary-kit/component-guidelines-photoviewpicker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/photoaccesshelper-savebutton/photoaccesshelper-savebutton.md


const frontMatter = {
	title: '保存媒体库资源',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-savebutton',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '保存媒体库资源';

const assets = {

};



const toc = [{
  "value": "获取支持保存的资源格式",
  "id": "获取支持保存的资源格式",
  "level": 2
}, {
  "value": "使用安全控件保存媒体库资源",
  "id": "使用安全控件保存媒体库资源",
  "level": 2
}, {
  "value": "使用弹窗授权保存媒体库资源",
  "id": "使用弹窗授权保存媒体库资源",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "保存媒体库资源",
        children: "保存媒体库资源"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["保存图片、视频等用户文件到图库时，无需申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'，应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E5%AE%89%E5%85%A8%E6%8E%A7%E4%BB%B6%E4%BF%9D%E5%AD%98%E5%AA%92%E4%BD%93%E5%BA%93%E8%B5%84%E6%BA%90",
        children: "安全控件"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E5%BC%B9%E7%AA%97%E6%8E%88%E6%9D%83%E4%BF%9D%E5%AD%98%E5%AA%92%E4%BD%93%E5%BA%93%E8%B5%84%E6%BA%90",
        children: "授权弹窗"
      }), "的方式，将用户指定的媒体资源保存到图库中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(55376)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Media Library Kit提供图片和视频的管理能力，当需要读取和保存音频文件时，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#audioviewpicker",
        children: "AudioViewPicker（音频选择器对象）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取支持保存的资源格式",
      children: "获取支持保存的资源格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以获取支持保存的图片类型资源格式为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getsupportedphotoformats18",
        children: "phAccessHelper.getSupportedPhotoFormats"
      }), "接口获取支持保存的图片类型资源格式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry({ routeName : 'Scene1' })\n@Component\nexport struct Scene1 {\n  @State outputText: string = 'Supported formats:\\n';\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        // ...\n\n        Button('example')\n          .width('80%')\n          .height(50)\n          .fontSize(16)\n          .onClick(async () => {\n            let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n            this.outputText = await example(phAccessHelper);\n          })\n\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title('Supported Formats')\n  }\n}\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper): Promise<string> {\n  try {\n    let outputText = 'Supported formats:\\n';\n    // The value 1 means the supported image formats, and 2 means the supported video formats.\n    let imageFormat = await phAccessHelper.getSupportedPhotoFormats(1);\n    let result = '';\n    for (let i = 0; i < imageFormat.length; i++) {\n      result += imageFormat[i];\n      if (i !== imageFormat.length - 1) {\n        result += ', ';\n      }\n    }\n    outputText += result;\n    console.info('getSupportedPhotoFormats success, data is ' + outputText);\n    return 'getSupportedPhotoFormats success, data is\\n' + outputText;\n  } catch (error) {\n    console.error('getSupportedPhotoFormats failed, errCode is', error);\n    return 'getSupportedPhotoFormats failed, errCode is\\n' + JSON.stringify(error);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用安全控件保存媒体库资源",
      children: "使用安全控件保存媒体库资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安全控件的介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton",
        children: "SaveButton"
      }), "。保存前可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#registerchange",
        children: "registerChange"
      }), "接口注册对默认URI（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#defaultchangeuri",
        children: "DEFAULT_PHOTO_URI"
      }), "）的监听。资源保存成功后，根据接收到该资源的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#notifytype",
        children: "NOTIFY_ADD"
      }), "通知完成后续业务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以使用安全控件创建一张图片资源为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置安全控件按钮属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建安全控件按钮。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#registerchange",
          children: "registerChange"
        }), "接口注册对默认URI（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#defaultchangeuri",
          children: "DEFAULT_PHOTO_URI"
        }), "）的监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#createimageassetrequest11",
          children: "MediaAssetChangeRequest.createImageAssetRequest"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11",
          children: "PhotoAccessHelper.applyChanges"
        }), "接口创建图片资源。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#getasset11",
          children: "getAsset"
        }), "接口获取保存的资产，并获取资产URI。在接收到资产URI的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#notifytype",
          children: "NOTIFY_ADD"
        }), "通知后，完成后续业务。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\nimport { dataSharePredicates } from '@kit.ArkData';\n// ...\n@Entry({ routeName : 'Scene2' })\n@Component\nexport struct Scene2 {\n  @State statusMessage: string = '';\n  @State imageSource: string = '';\n  uriString: string = '';\n\n  saveButtonOptions: SaveButtonOptions = {\n    icon: SaveIconStyle.FULL_FILLED,\n    text: SaveDescription.SAVE_IMAGE,\n    buttonType: ButtonType.Capsule\n  }// Set properties of SaveButton.\n\n // ...\n\n  onCallback = (changeData: photoAccessHelper.ChangeData) => {\n    for (let i = 0; i < changeData.uris.length; i++) {\n      // 保存媒体库资源成功后，会监听到类型为NOTIFY_ADD的资产URI。\n      if (changeData.uris[i] === this.uriString && changeData.type === photoAccessHelper.NotifyType.NOTIFY_ADD) {\n        let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n        predicates.equalTo(photoAccessHelper.PhotoKeys.URI, changeData.uris[i]);\n        let fetchOptions: photoAccessHelper.FetchOptions = {\n          fetchColumns: [],\n          predicates: predicates\n        };\n\n        let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n        phAccessHelper.getAssets(fetchOptions, async (err, fetchResult) => {\n          if (fetchResult !== undefined) {\n            let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n            if (photoAsset !== undefined) {\n              console.info('getAssets successfully');\n            }\n          }\n          phAccessHelper.unRegisterChange(photoAccessHelper.DefaultChangeUri.DEFAULT_PHOTO_URI);\n        });\n      }\n    }\n  }\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        // ...\n\n        SaveButton(this.saveButtonOptions) // Create a button with SaveButton.\n          .onClick(async (event, result: SaveButtonOnClickResult) => {\n            if (result == SaveButtonOnClickResult.SUCCESS) {\n              try {\n                let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n                let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n                \n                // 注册默认监听\n                phAccessHelper.registerChange(\n                  photoAccessHelper.DefaultChangeUri.DEFAULT_PHOTO_URI, true, this.onCallback);\n\n                // 需要确保fileUri对应的资源存在。\n                let fileUri = 'file://' + context.filesDir + '/test.jpg';\n                let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =\n                  photoAccessHelper.MediaAssetChangeRequest.createImageAssetRequest(context, fileUri);\n\n                await phAccessHelper.applyChanges(assetChangeRequest);\n\n                this.uriString = assetChangeRequest.getAsset().uri;\n                this.statusMessage = 'createAsset successfully, uri: ' + this.uriString;\n                console.info('createAsset successfully, uri: ' + this.uriString);\n              } catch (err) {\n                this.statusMessage = `create asset failed with error: ${err.code}, ${err.message}`;\n                console.error(`create asset failed with error: ${err.code}, ${err.message}`);\n              }\n            } else {\n              this.statusMessage = 'SaveButtonOnClickResult create asset failed';\n              console.error('SaveButtonOnClickResult create asset failed');\n            }\n          })\n\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title('SaveButton Example')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了上述通过fileUri从应用沙箱指定资源内容的方式，开发者还可以通过ArrayBuffer的方式添加资源内容，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#addresource11-1",
        children: "addResource"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用弹窗授权保存媒体库资源",
      children: "使用弹窗授权保存媒体库资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以弹窗授权的方式保存一张图片资源为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定待保存到媒体库的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
            children: "应用文件"
          }), "uri（需为应用沙箱路径）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定待保存照片的创建选项，包括文件后缀和照片类型，标题和照片子类型可选。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#showassetscreationdialog12",
            children: "showAssetsCreationDialog"
          }), "，基于弹窗授权的方式获取的目标", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/user-files/user-file-uri-intro#%E5%AA%92%E4%BD%93%E6%96%87%E4%BB%B6uri",
            children: "媒体文件"
          }), "uri。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹框需要显示应用名称，无法直接获取应用名称，依赖于配置项的label和icon，因此调用此接口时请确保module.json5文件中的abilities标签中配置了label和icon项。当传入uri为沙箱路径时，可正常保存图片/视频，但无界面预览。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将应用沙箱的照片内容写入媒体库的目标URI。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\nimport { fileIo } from '@kit.CoreFileKit';\n\n// ...\n\nasync function example(\n  phAccessHelper: photoAccessHelper.PhotoAccessHelper,\n  context: common.UIAbilityContext\n): Promise<string> {\n  try {\n    // 指定要保存到应用程序沙盒目录中的图片的URI。\n    let srcFileUri = context.filesDir + '/test.jpg';\n    let srcFileUris: string[] = [\n      srcFileUri\n    ];\n    // 设置要保存的图片的参数：文件扩展名、图片类型、标题和子类型（后两者为可选）。\n    let photoCreationConfigs: photoAccessHelper.PhotoCreationConfig[] = [\n      {\n        title: 'test', // This parameter is optional.\n        fileNameExtension: 'jpg',\n        photoType: photoAccessHelper.PhotoType.IMAGE,\n        subtype: photoAccessHelper.PhotoSubtype.DEFAULT,\n      }\n    ];\n\n    console.info('Source URI: ' + srcFileUri);\n    // 基于弹窗授权获取媒体库中的目标URI。\n    let desFileUris: string[] =\n      await phAccessHelper.showAssetsCreationDialog(srcFileUris, photoCreationConfigs);\n    console.info('Destination URIs: ' + JSON.stringify(desFileUris));\n    // 将图片从沙盒目录写入媒体库中的目标URI。\n    let desFile: fileIo.File = await fileIo.open(desFileUris[0], fileIo.OpenMode.WRITE_ONLY);\n    let srcFile: fileIo.File = await fileIo.open(srcFileUri, fileIo.OpenMode.READ_ONLY);\n    await fileIo.copyFile(srcFile.fd, desFile.fd);\n    fileIo.closeSync(srcFile);\n    fileIo.closeSync(desFile);\n    console.info('create asset by dialog successfully');\n    return 'create asset by dialog successfully';\n  } catch (err) {\n    console.error(`failed to create asset by dialog successfully errCode is: ${err.code}, ${err.message}`);\n    return `failed to create asset by dialog successfully errCode is: ${err.code}, ${err.message}`;\n  }\n}\n"
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
55376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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