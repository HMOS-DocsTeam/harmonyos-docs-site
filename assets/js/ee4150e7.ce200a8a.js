"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["559516"], {
171239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_notify_guidelines_photoaccesshelper_notify_guidelines_md_ee4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-restricted-open-capabilities-photoaccesshelper-notify-guidelines-photoaccesshelper-notify-guidelines-md-ee4.json
var site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_notify_guidelines_photoaccesshelper_notify_guidelines_md_ee4_namespaceObject = JSON.parse('{"id":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines/photoaccesshelper-notify-guidelines","title":"媒体资源变更通知相关指导","description":"photoAccessHelper提供监听指定媒体资源变更的接口。","source":"@site/docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines/photoaccesshelper-notify-guidelines.md","sourceDirName":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines","slug":"/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines/","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"媒体资源变更通知相关指导","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-notify-guidelines","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"系统相册资源使用指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines/"},"next":{"title":"使用MediaAssetManager请求媒体资源(C/C++)","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/using-ndk-mediaassetmanager-for-request-resource/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines/photoaccesshelper-notify-guidelines.md


const frontMatter = {
	title: '媒体资源变更通知相关指导',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-notify-guidelines',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体资源变更通知相关指导';

const assets = {

};



const toc = [{
  "value": "监听指定URI",
  "id": "监听指定uri",
  "level": 2
}, {
  "value": "对指定PhotoAsset注册监听",
  "id": "对指定photoasset注册监听",
  "level": 3
}, {
  "value": "对指定Album注册监听",
  "id": "对指定album注册监听",
  "level": 3
}, {
  "value": "模糊监听",
  "id": "模糊监听",
  "level": 2
}, {
  "value": "对所有PhotoAsset注册监听",
  "id": "对所有photoasset注册监听",
  "level": 3
}, {
  "value": "取消对指定URI的监听",
  "id": "取消对指定uri的监听",
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
    img: "img",
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
        id: "媒体资源变更通知相关指导",
        children: "媒体资源变更通知相关指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "photoAccessHelper提供监听指定媒体资源变更的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392417)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行功能开发前，请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
        children: "开发准备"
      }), "，了解如何获取相册管理模块实例和如何申请相册管理模块功能开发相关权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文档中使用到photoAccessHelper的地方默认为使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
        children: "开发准备"
      }), "中获取的对象，如未添加此段代码报photoAccessHelper未定义的错误请自行添加。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["媒体资源变更通知相关接口的异步调用仅支持使用callback方式。以下只列出部分接口使用方式，其他使用方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
        children: "模块描述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如无特别说明，文档中涉及的待获取资源均视为已预置且数据库中存在相应数据。若按示例代码执行后资源为空，请确认文件是否已预置，以及数据库中是否存在该文件的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听指定uri",
      children: "监听指定URI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#registerchange",
        children: "registerChange"
      }), "接口监听指定uri。当被监听对象发生变更时返回监听器回调函数的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对指定photoasset注册监听",
      children: "对指定PhotoAsset注册监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对指定PhotoAsset注册监听，当监听的PhotoAsset发生变更时，返回回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "前提条件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取相册管理模块photoAccessHelper实例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation#%E7%94%B3%E8%AF%B7%E7%9B%B8%E5%86%8C%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%9B%B8%E5%85%B3%E6%9D%83%E9%99%90",
          children: "申请相册管理模块功能相关权限"
        }), "'ohos.permission.READ_IMAGEVIDEO'和'ohos.permission.WRITE_IMAGEVIDEO'。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以对一张图片注册监听为例，通过删除图片触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines#%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E5%AA%92%E4%BD%93%E8%B5%84%E6%BA%90",
          children: "获取指定媒体资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定PhotoAsset注册监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将指定媒体资源删除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  predicates.equalTo(photoAccessHelper.PhotoKeys.DISPLAY_NAME, 'test.jpg');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    console.info('getAssets photoAsset.uri : ' + photoAsset.uri);\n    let onCallback = (changeData: photoAccessHelper.ChangeData) => {\n      console.info('onCallback successfully, changeData: ' + JSON.stringify(changeData));\n    }\n    phAccessHelper.registerChange(photoAsset.uri, false, onCallback);\n    await photoAccessHelper.MediaAssetChangeRequest.deleteAssets(context, [photoAsset]);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('onCallback failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对指定album注册监听",
      children: "对指定Album注册监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对指定Album注册监听，当Album发生变更时，触发监听回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "前提条件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取相册管理模块photoAccessHelper实例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation#%E7%94%B3%E8%AF%B7%E7%9B%B8%E5%86%8C%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%9B%B8%E5%85%B3%E6%9D%83%E9%99%90",
          children: "申请相册管理模块功能相关权限"
        }), "'ohos.permission.READ_IMAGEVIDEO'和'ohos.permission.WRITE_IMAGEVIDEO'。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以对一个用户相册注册监听为例，通过重命名相册触发回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E7%9B%B8%E5%86%8C",
          children: "获取用户相册"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对指定Album注册监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将指定用户相册重命名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;\n  predicates.equalTo(albumName, 'test');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(\n        photoAccessHelper.AlbumType.USER,\n        photoAccessHelper.AlbumSubtype.USER_GENERIC,\n        fetchOptions);\n        \n    let album: photoAccessHelper.Album = await fetchResult.getFirstObject();\n    console.info('getAlbums successfully, albumUri: ' + album.albumUri);\n\n    let onCallback = (changeData: photoAccessHelper.ChangeData) => {\n      console.info('onCallback successfully, changeData: ' + JSON.stringify(changeData));\n    }\n    phAccessHelper.registerChange(album.albumUri, false, onCallback);\n    album.albumName = 'newAlbumName' + Date.now();\n    await album.commitModify();\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('onCallback failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模糊监听",
      children: "模糊监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过设置forChildUris值为true来注册模糊监听，uri为相册uri时，forChildUris为true能监听到相册中文件的变化，如果是false只能监听相册本身变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uri为photoAsset时，forChildUris为true、false没有区别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uri为DefaultChangeUri时，forChildUris必须为true，如果为false将找不到该uri，收不到任何消息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对所有photoasset注册监听",
      children: "对所有PhotoAsset注册监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对所有PhotoAsset注册监听，当被监听的PhotoAsset发生变更时，返回监听回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "前提条件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取相册管理模块photoAccessHelper实例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation#%E7%94%B3%E8%AF%B7%E7%9B%B8%E5%86%8C%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%9B%B8%E5%85%B3%E6%9D%83%E9%99%90",
          children: "申请相册管理模块功能相关权限"
        }), "'ohos.permission.READ_IMAGEVIDEO'和'ohos.permission.WRITE_IMAGEVIDEO'。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以对所有PhotoAsset注册监听，通过将被监听的PhotoAsset删除触发监听回调为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对所有PhotoAsset注册监听。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines#%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E5%AA%92%E4%BD%93%E8%B5%84%E6%BA%90",
          children: "获取指定媒体资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将指定媒体资源删除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {\n  let onCallback = (changeData: photoAccessHelper.ChangeData) => {\n    console.info('onCallback successfully, changeData: ' + JSON.stringify(changeData));\n  }\n  phAccessHelper.registerChange(photoAccessHelper.DefaultChangeUri.DEFAULT_PHOTO_URI, true, onCallback);\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    console.info('getAssets photoAsset.uri : ' + photoAsset.uri);\n    await photoAccessHelper.MediaAssetChangeRequest.deleteAssets(context, [photoAsset]);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('onCallback failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "取消对指定uri的监听",
      children: "取消对指定URI的监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消对指定uri的监听，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#unregisterchange",
        children: "unRegisterChange"
      }), "接口取消对指定uri的监听。一个uri可以注册多个监听，存在多个callback监听时，可以取消指定注册的callback的监听；不指定callback时取消该uri的所有监听。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "前提条件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取相册管理模块photoAccessHelper实例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation#%E7%94%B3%E8%AF%B7%E7%9B%B8%E5%86%8C%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%9B%B8%E5%85%B3%E6%9D%83%E9%99%90",
          children: "申请相册管理模块功能相关权限"
        }), "'ohos.permission.READ_IMAGEVIDEO'和'ohos.permission.WRITE_IMAGEVIDEO'。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以取消对图片指定的监听为例，取消监听后，删除图片不再触发对应的监听回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines#%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E5%AA%92%E4%BD%93%E8%B5%84%E6%BA%90",
          children: "获取指定媒体资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消对指定媒体资源uri的监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将指定媒体资源删除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  predicates.equalTo(photoAccessHelper.PhotoKeys.DISPLAY_NAME, 'test.jpg');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    console.info('getAssets photoAsset.uri : ' + photoAsset.uri);\n    let onCallback1 = (changeData: photoAccessHelper.ChangeData) => {\n      console.info('onCallback1, changeData: ' + JSON.stringify(changeData));\n    }\n    let onCallback2 = (changeData: photoAccessHelper.ChangeData) => {\n      console.info('onCallback2, changeData: ' + JSON.stringify(changeData));\n    }\n    phAccessHelper.registerChange(photoAsset.uri, false, onCallback1);\n    phAccessHelper.registerChange(photoAsset.uri, false, onCallback2);\n    phAccessHelper.unRegisterChange(photoAsset.uri, onCallback1);\n    await photoAccessHelper.MediaAssetChangeRequest.deleteAssets(context, [photoAsset]);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('onCallback failed with err: ' + err);\n    // ...\n  }\n}\n"
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
392417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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