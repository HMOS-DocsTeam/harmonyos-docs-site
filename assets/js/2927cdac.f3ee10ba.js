"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["956185"], {
122278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_resource_guidelines_photoaccesshelper_resource_guidelines_md_292_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-restricted-open-capabilities-photoaccesshelper-resource-guidelines-photoaccesshelper-resource-guidelines-md-292.json
var site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_resource_guidelines_photoaccesshelper_resource_guidelines_md_292_namespaceObject = JSON.parse('{"id":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines/photoaccesshelper-resource-guidelines","title":"媒体资源使用指导","description":"应用可以通过photoAccessHelper的接口，对媒体资源（图片、视频）进行相关操作。","source":"@site/docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines/photoaccesshelper-resource-guidelines.md","sourceDirName":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines","slug":"/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines/","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"媒体资源使用指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-resource-guidelines","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation/"},"next":{"title":"用户相册资源使用指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines/photoaccesshelper-resource-guidelines.md


const frontMatter = {
	title: '媒体资源使用指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-resource-guidelines',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体资源使用指导';

const assets = {

};



const toc = [{
  "value": "获取指定媒体资源",
  "id": "获取指定媒体资源",
  "level": 2
}, {
  "value": "指定媒体文件名获取图片或视频资源",
  "id": "指定媒体文件名获取图片或视频资源",
  "level": 3
}, {
  "value": "获取图片和视频缩略图",
  "id": "获取图片和视频缩略图",
  "level": 2
}, {
  "value": "重命名媒体资源",
  "id": "重命名媒体资源",
  "level": 2
}, {
  "value": "将文件放入回收站",
  "id": "将文件放入回收站",
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
        id: "媒体资源使用指导",
        children: "媒体资源使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过photoAccessHelper的接口，对媒体资源（图片、视频）进行相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(723238)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在进行功能开发前，请查阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
          children: "开发准备"
        }), "，了解如何获取相册管理模块实例和如何申请相册管理模块功能开发相关权限。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["文档中使用到photoAccessHelper的地方，默认为使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
          children: "开发准备"
        }), "中获取的对象，如果未添加此段代码，报photoAccessHelper未定义的错误，请自行添加。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证应用的运行效率，大部分photoAccessHelper的接口调用都是异步的。示例采用Promise函数，更多方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
        children: "模块描述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取指定媒体资源",
      children: "获取指定媒体资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据特定条件查询媒体资源，如类型、日期、相册等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets-1",
        children: "PhotoAccessHelper.getAssets"
      }), "获取媒体资源，并传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-i/arkts-apis-photoaccesshelper-i#fetchoptions",
        children: "FetchOptions"
      }), "对象指定检索条件。如无特别说明，文档中涉及的待获取的资源均视为已经预置且在数据库中存在相应数据。如出现获取资源为空的情况，请确认文件是否已预置，数据库中是否存在该文件的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(561055)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photokeys",
        children: "PhotoAccessHelper.PhotoKeys"
      }), ".URI做查询条件时，仅支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-datasharepredicates/js-apis-data-datasharepredicates#equalto10",
        children: "DataSharePredicates.equalTo"
      }), "的方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果只想获取某个位置的对象（如第一个、最后一个、指定索引等），可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult",
        children: "FetchResult"
      }), "中的接口获取。"]
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
        }), "'ohos.permission.READ_IMAGEVIDEO'。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-datasharepredicates/js-apis-data-datasharepredicates",
          children: "dataSharePredicates"
        }), "模块。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定媒体文件名获取图片或视频资源",
      children: "指定媒体文件名获取图片或视频资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以查询文件名为'test.jpg'的图片资源为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  predicates.equalTo(photoAccessHelper.PhotoKeys.DISPLAY_NAME, 'test.jpg');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    console.info('getAssets photoAsset.displayName : ' + photoAsset.displayName);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('getAssets failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取图片和视频缩略图",
      children: "获取图片和视频缩略图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相册展示图片和视频、编辑预览时，应用需要获取图片和视频的缩略图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset#getthumbnail-2",
        children: "PhotoAsset.getThumbnail"
      }), "，传入缩略图尺寸，可以获取图片和视频缩略图。缩略图常用于UI界面展示。"]
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
        }), "'ohos.permission.READ_IMAGEVIDEO'。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-datasharepredicates/js-apis-data-datasharepredicates",
          children: "dataSharePredicates"
        }), "模块。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考以下示例，获取图片的文件描述符fd后，需要解码为统一的PixelMap，以便在应用中进行图片显示或图片处理，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
        children: "图片解码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以获取一张图片的缩略图为例，缩略图尺寸为720*720。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立检索条件，用于获取图片资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets-1",
          children: "PhotoAccessHelper.getAssets"
        }), "接口获取图片资源。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一张图片。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用PhotoAsset.getThumbnail获取图片的缩略图的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
          children: "PixelMap"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { image } from '@kit.ImageKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    console.info('getAssets photoAsset.displayName : ' + photoAsset.displayName);\n    let size: image.Size = { width: 720, height: 720 };\n    let pixelMap: image.PixelMap =  await photoAsset.getThumbnail(size);\n    let imageInfo: image.ImageInfo = await pixelMap.getImageInfo()\n    console.info('getThumbnail successful, pixelMap ImageInfo size: ' + JSON.stringify(imageInfo.size));\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('getThumbnail failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "重命名媒体资源",
      children: "重命名媒体资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重命名修改的是文件的PhotoAsset.displayName属性，即文件的显示文件名，包含文件后缀。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#settitle11",
        children: "MediaAssetChangeRequest.setTitle"
      }), "重命名后，再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11",
        children: "PhotoAccessHelper.applyChanges"
      }), "更新到数据库中完成修改。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在重命名文件之前，需要先获取文件对象，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult",
        children: "FetchResult"
      }), "中的接口获取对应位置的文件。"]
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
        }), "'ohos.permission.WRITE_IMAGEVIDEO'和'ohos.permission.READ_IMAGEVIDEO'。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以重命名标题为'oldTestPhoto'的图片为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立检索条件，获取标题为'oldTestPhoto'的图片资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets-1",
          children: "PhotoAccessHelper.getAssets"
        }), "接口获取目标图片资源。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取要重命名的图片对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#settitle11",
          children: "MediaAssetChangeRequest.setTitle"
        }), "接口将图片重命名。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11",
          children: "PhotoAccessHelper.applyChanges"
        }), "接口将修改的图片属性更新到数据库中完成修改。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  predicates.equalTo(photoAccessHelper.PhotoKeys.TITLE, 'test')\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: ['title'],\n    predicates: predicates\n  };\n  let newTitle: string = 'newTestPhoto';\n\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest =\n      new photoAccessHelper.MediaAssetChangeRequest(photoAsset);\n    assetChangeRequest.setTitle(newTitle);\n    await phAccessHelper.applyChanges(assetChangeRequest);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error(`rename failed with error: ${err.code}, ${err.message}`);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "将文件放入回收站",
      children: "将文件放入回收站"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#deleteassets11",
        children: "MediaAssetChangeRequest.deleteAssets"
      }), "可以将文件放入回收站。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "放入回收站的文件将保存30天，到期后自动彻底删除。在此期间，用户可以通过系统应用“文件管理”或“图库”恢复文件。"
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
        }), "'ohos.permission.WRITE_IMAGEVIDEO'和'ohos.permission.READ_IMAGEVIDEO'。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以将文件检索结果中第一个文件放入回收站为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立检索条件，用于获取图片资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets-1",
          children: "PhotoAccessHelper.getAssets"
        }), "接口获取目标图片资源。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一张图片，即要放入回收站的图片对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaassetchangerequest/kts-apis-photoaccesshelper-mediaassetchangerequest#deleteassets11",
          children: "MediaAssetChangeRequest.deleteAssets"
        }), "接口将文件放入回收站。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper, context: Context) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    await photoAccessHelper.MediaAssetChangeRequest.deleteAssets(context, [photoAsset]);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error(`deleteAssets failed with error: ${err.code}, ${err.message}`);\n    // ...\n  }\n}\n"
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
561055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
723238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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