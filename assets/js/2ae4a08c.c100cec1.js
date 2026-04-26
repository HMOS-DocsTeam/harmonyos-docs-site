"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["534956"], {
958246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_movingphoto_photoaccesshelper_movingphoto_photoaccesshelper_movingphoto_md_2ae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-movingphoto-photoaccesshelper-movingphoto-photoaccesshelper-movingphoto-md-2ae.json
var site_docs_medialibrary_kit_movingphoto_photoaccesshelper_movingphoto_photoaccesshelper_movingphoto_md_2ae_namespaceObject = JSON.parse('{"id":"medialibrary-kit/movingphoto/photoaccesshelper-movingphoto/photoaccesshelper-movingphoto","title":"访问和管理动态照片资源","description":"动态照片是一种结合了图片和视频的照片形式，可以显示一小段时间的动态画面和声音。可以帮助用户捕捉精彩的动态瞬间，提升创作空间，同时令拍照的容错率更高。","source":"@site/docs/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto/photoaccesshelper-movingphoto.md","sourceDirName":"medialibrary-kit/movingphoto/photoaccesshelper-movingphoto","slug":"/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto/","permalink":"/harmonyos-docs-site/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"访问和管理动态照片资源","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-movingphoto","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用PhotoPicker推荐图片","permalink":"/harmonyos-docs-site/medialibrary-kit/smart-photopicker/"},"next":{"title":"使用MovingPhotoView播放动态照片","permalink":"/harmonyos-docs-site/medialibrary-kit/movingphoto/movingphotoview-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto/photoaccesshelper-movingphoto.md


const frontMatter = {
	title: '访问和管理动态照片资源',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-movingphoto',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '访问和管理动态照片资源';

const assets = {

};



const toc = [{
  "value": "保存动态照片资源",
  "id": "保存动态照片资源",
  "level": 2
}, {
  "value": "获取动态照片对象",
  "id": "获取动态照片对象",
  "level": 2
}, {
  "value": "获取媒体库动态照片对象",
  "id": "获取媒体库动态照片对象",
  "level": 3
}, {
  "value": "获取应用沙箱动态照片对象",
  "id": "获取应用沙箱动态照片对象",
  "level": 3
}, {
  "value": "读取动态照片资源",
  "id": "读取动态照片资源",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "访问和管理动态照片资源",
        children: "访问和管理动态照片资源"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态照片是一种结合了图片和视频的照片形式，可以显示一小段时间的动态画面和声音。可以帮助用户捕捉精彩的动态瞬间，提升创作空间，同时令拍照的容错率更高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体库提供访问和管理动态照片资源的能力，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BF%9D%E5%AD%98%E5%8A%A8%E6%80%81%E7%85%A7%E7%89%87%E8%B5%84%E6%BA%90",
          children: "使用安全控件保存动态照片资源"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%8E%B7%E5%8F%96%E5%8A%A8%E6%80%81%E7%85%A7%E7%89%87%E5%AF%B9%E8%B1%A1",
          children: "获取动态照片对象（MovingPhoto）"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/movingphoto/movingphotoview-guidelines",
          children: "使用MovingPhotoView播放动态照片"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%AF%BB%E5%8F%96%E5%8A%A8%E6%80%81%E7%85%A7%E7%89%87%E8%B5%84%E6%BA%90",
          children: "读取动态照片资源"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拍摄动态照片的能力由Camera Kit提供，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-moving-photo",
        children: "动态照片拍摄(ArkTS)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保存动态照片资源",
      children: "保存动态照片资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用安全控件保存动态照片资源后，可用于获取MovingPhoto对象，从而完成播放动态照片等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用安全控件保存动态照片资源，无需申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'，允许用户通过点击按钮临时获取存储权限，并将资源直接保存到指定的媒体库路径，使得操作更为便捷。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton",
        children: "SaveButton"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置安全控件按钮属性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建安全控件按钮。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#createassetrequest11",
            children: "MediaAssetChangeRequest.createAssetRequest"
          }), "接口新建一个创建资产的变更请求，指定待创建资产的子类型为动态照片。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#addresource11",
            children: "MediaAssetChangeRequest.addResource"
          }), "接口指定动态照片的图片和视频内容，动态照片的视频时长不能超过10s。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下示例以从应用沙箱的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
            children: "应用文件"
          }), "fileUri指定动态照片的图片和视频内容为例。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者可根据实际情况，通过ArrayBuffer的方式指定资源内容，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#addresource11-1",
            children: "MediaAssetChangeRequest.addResource(type: ResourceType, data: ArrayBuffer)"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11",
            children: "PhotoAccessHelper.applyChanges"
          }), "接口提交创建资产的变更请求。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\n// ...\n\n@Entry({ routeName : 'Scene1' })\n@Component\nexport struct Scene1 {\n  @State statusMessage: string = '';\n  @State imageSource: string = '';\n\n  saveButtonOptions: SaveButtonOptions = {\n    icon: SaveIconStyle.FULL_FILLED,\n    text: SaveDescription.SAVE_IMAGE,\n    buttonType: ButtonType.Capsule\n  }// Set properties of SaveButton.\n\n  // ...\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        // ...\n\n        SaveButton(this.saveButtonOptions) // Create a button with SaveButton.\n          .onClick(async (event, result: SaveButtonOnClickResult) => {\n            if (result == SaveButtonOnClickResult.SUCCESS) {\n              try {\n                let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n                let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n                // Ensure that the assets specified by imageFileUri and videoFileUri exist.\n                let imageFileUri = 'file://' + context.filesDir + '/create_moving_photo.jpg';\n                let videoFileUri = 'file://' + context.filesDir + '/create_moving_photo.mp4';\n\n                let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =\n                  photoAccessHelper.MediaAssetChangeRequest.createAssetRequest(context,\n                    photoAccessHelper.PhotoType.IMAGE, 'jpg', {\n                      title: 'moving_photo',\n                      subtype: photoAccessHelper.PhotoSubtype.MOVING_PHOTO\n                    });\n\n                assetChangeRequest.addResource(photoAccessHelper.ResourceType.IMAGE_RESOURCE, imageFileUri);\n                assetChangeRequest.addResource(photoAccessHelper.ResourceType.VIDEO_RESOURCE, videoFileUri);\n\n                await phAccessHelper.applyChanges(assetChangeRequest);\n\n                this.statusMessage = 'create moving photo successfully, uri: ' + assetChangeRequest.getAsset().uri;\n                console.info('create moving photo successfully, uri: ' + assetChangeRequest.getAsset().uri);\n              } catch (err) {\n                this.statusMessage = `create moving photo failed with error: ${err.code}, ${err.message}`;\n                console.error(`create moving photo failed with error: ${err.code}, ${err.message}`);\n              }\n            } else {\n              this.statusMessage = 'SaveButtonOnClickResult create moving photo failed';\n              console.error('SaveButtonOnClickResult create moving photo failed');\n            }\n          })\n\n        // ...\n\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title('Save Moving Photo')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取动态照片对象",
      children: "获取动态照片对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用可以通过Picker的方式获取用户媒体库里的动态照片对象，后续可用于在应用内播放动态照片，或是读取动态照片资源进行其他操作（如上传到应用共享给他人浏览等）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用也可以通过传入应用沙箱的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
          children: "应用文件"
        }), "图片和视频fileUri的方式构造应用本地的动态照片对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取到动态照片对象后，如需播放动态照片请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/movingphoto/movingphotoview-guidelines",
        children: "使用MovingPhotoView播放动态照片"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取媒体库动态照片对象",
      children: "获取媒体库动态照片对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过Picker选择动态照片的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/user-file-uri-intro#%E5%AA%92%E4%BD%93%E6%96%87%E4%BB%B6uri",
          children: "媒体文件URI"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets-1",
          children: "PhotoAccessHelper.getAssets"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取URI对应的PhotoAsset资产。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-mediaassetmanager/arkts-apis-photoaccesshelper-mediaassetmanager#requestmovingphoto12",
          children: "MediaAssetManager.requestMovingPhoto"
        }), "获取PhotoAsset对应的动态照片对象（MovingPhoto）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { dataSharePredicates } from '@kit.ArkData';\nimport { common } from '@kit.AbilityKit';\n\n\n@Entry({ routeName : 'Scene2' })\n@Component\nexport struct Scene2 {\n\n  @State statusMessage: string = '';\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n\n        Button('example')\n          .width('80%')\n          .height(50)\n          .fontSize(16)\n          .onClick(async () => {\n            let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n            this.statusMessage = await example(phAccessHelper, context);\n          })\n\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title('Get from Media Library')\n  }\n}\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context): Promise<string> {\n  try {\n    // Use Picker to select the URI of the moving photo.\n    let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n    photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.MOVING_PHOTO_IMAGE_TYPE;\n    photoSelectOptions.maxSelectNumber = 9;\n    let photoViewPicker = new photoAccessHelper.PhotoViewPicker();\n    let photoSelectResult = await photoViewPicker.select(photoSelectOptions);\n    let uris = photoSelectResult.photoUris;\n\n    let resultMessage = 'Selected ' + uris.length + ' moving photo(s)\\n\\n';\n\n    for (let i = 0; i < uris.length; i++) {\n      // Obtain the photo asset corresponding to the URI.\n      let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n      predicates.equalTo(photoAccessHelper.PhotoKeys.URI, uris[i]);\n      let fetchOption: photoAccessHelper.FetchOptions = {\n        fetchColumns: [],\n        predicates: predicates\n      };\n      let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n        await phAccessHelper.getAssets(fetchOption);\n      let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n\n      let movingPhotoUri = await new Promise<string>((resolve) => {\n        // Obtain the moving photo object corresponding to the photo asset.\n        photoAccessHelper.MediaAssetManager.requestMovingPhoto(context, photoAsset, {\n          deliveryMode: photoAccessHelper.DeliveryMode.FAST_MODE\n        }, {\n          async onDataPrepared(movingPhoto: photoAccessHelper.MovingPhoto) {\n            if (movingPhoto !== undefined) {\n              // Customize the logic for processing the moving photo.\n              console.info('request moving photo successfully, uri: ' + movingPhoto.getUri());\n              resolve(movingPhoto.getUri());\n            }\n          }\n        })\n      });\n\n      resultMessage += (i + 1) + '. request moving photo successfully, uri: ' + movingPhotoUri + '\\n';\n    }\n\n    return resultMessage;\n  } catch (err) {\n    console.error(`request moving photo failed with error: ${err.code}, ${err.message}`);\n    return `request moving photo failed with error: ${err.code}, ${err.message}`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取应用沙箱动态照片对象",
      children: "获取应用沙箱动态照片对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-mediaassetmanager/arkts-apis-photoaccesshelper-mediaassetmanager#loadmovingphoto12",
        children: "MediaAssetManager.loadMovingPhoto"
      }), "加载应用沙箱的动态照片对象（MovingPhoto）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\n// ...\n@Entry({ routeName : 'Scene3' })\n@Component\nexport struct Scene3 {\n  @State statusMessage: string = '';\n  @State imageSource: string = '';\n\n  // ...\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        // ...\n\n        Button('example')\n          .width('80%')\n          .height(50)\n          .fontSize(16)\n          .onClick(async () => {\n            let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            this.statusMessage = await example(context);\n          })\n\n        // ...\n\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title('Load from Sandbox')\n  }\n}\n\nasync function example(context: Context): Promise<string> {\n  try {\n    let imageFileUri = 'file://' + context.filesDir + '/local_moving_photo.jpg';\n    let videoFileUri = 'file://' + context.filesDir + '/local_moving_photo.mp4';\n    let movingPhoto = await photoAccessHelper.MediaAssetManager.loadMovingPhoto(context, imageFileUri, videoFileUri);\n    console.info('load moving photo successfully');\n    return 'load moving photo successfully';\n  } catch (err) {\n    console.error(`load moving photo failed with error: ${err.code}, ${err.message}`);\n    return `load moving photo failed with error: ${err.code}, ${err.message}`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "读取动态照片资源",
      children: "读取动态照片资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于一个动态照片对象，应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-movingphoto/arkts-apis-photoaccesshelper-movingphoto#requestcontent12",
        children: "MovingPhoto.requestContent"
      }), "导出图片和视频到应用沙箱，或者读取图片或视频的ArrayBuffer内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { common } from '@kit.AbilityKit';\n// ...\n@Entry({ routeName : 'Scene4' })\n@Component\nexport struct Scene4 {\n  @State movingPhotoObj: photoAccessHelper.MovingPhoto | null = null;\n  @State statusMessage: string = '';\n  // ...\n\n  build() {\n    NavDestination() {\n      Column({ space: 20 }) {\n        // ...\n        Button('example')\n          .width('80%')\n          .height(50)\n          .fontSize(16)\n          .onClick(async () => {\n            if (this.movingPhotoObj) {\n              let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n              this.statusMessage = await example(this.movingPhotoObj, context);\n            } else {\n              this.statusMessage = 'Please prepare and load moving photo first!';\n            }\n          })\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n    }\n    // ...\n  }\n}\n\nasync function example(movingPhoto: photoAccessHelper.MovingPhoto, context: Context): Promise<string> {\n  try {\n    let imageFileUri = context.filesDir + '/request_moving_photo.jpg';\n    let videoFileUri = context.filesDir + '/request_moving_photo.mp4';\n    await movingPhoto.requestContent(imageFileUri, videoFileUri);\n    let imageData = await movingPhoto.requestContent(photoAccessHelper.ResourceType.IMAGE_RESOURCE);\n    let videoData = await movingPhoto.requestContent(photoAccessHelper.ResourceType.VIDEO_RESOURCE);\n\n    return 'Exported to:\\n' + imageFileUri + '\\n' + videoFileUri + '\\n\\nImage data size: ' + imageData.byteLength + ' bytes\\nVideo data size: ' + videoData.byteLength + ' bytes';\n  } catch (err) {\n    console.error(`request content of moving photo failed with error: ${err.code}, ${err.message}`);\n    return `request content of moving photo failed with error: ${err.code}, ${err.message}`;\n  }\n}\n"
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