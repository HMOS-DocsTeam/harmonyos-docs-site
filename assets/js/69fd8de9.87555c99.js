"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["664289"], {
261006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_useralbum_guidelines_photoaccesshelper_useralbum_guidelines_md_69f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-restricted-open-capabilities-photoaccesshelper-useralbum-guidelines-photoaccesshelper-useralbum-guidelines-md-69f.json
var site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_useralbum_guidelines_photoaccesshelper_useralbum_guidelines_md_69f_namespaceObject = JSON.parse('{"id":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines/photoaccesshelper-useralbum-guidelines","title":"用户相册资源使用指导","description":"photoAccessHelper提供用户相册相关的接口，支持查询和重命名相册，以及添加和删除相册中的图片和视频资源。","source":"@site/docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines/photoaccesshelper-useralbum-guidelines.md","sourceDirName":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines","slug":"/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines/","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"用户相册资源使用指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-useralbum-guidelines","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体资源使用指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-resource-guidelines/"},"next":{"title":"系统相册资源使用指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines/photoaccesshelper-useralbum-guidelines.md


const frontMatter = {
	title: '用户相册资源使用指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-useralbum-guidelines',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '用户相册资源使用指导';

const assets = {

};



const toc = [{
  "value": "获取用户相册",
  "id": "获取用户相册",
  "level": 2
}, {
  "value": "重命名用户相册",
  "id": "重命名用户相册",
  "level": 2
}, {
  "value": "添加图片和视频到用户相册中",
  "id": "添加图片和视频到用户相册中",
  "level": 2
}, {
  "value": "获取用户相册中的图片和视频",
  "id": "获取用户相册中的图片和视频",
  "level": 2
}, {
  "value": "从用户相册中移除图片和视频",
  "id": "从用户相册中移除图片和视频",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "用户相册资源使用指导",
        children: "用户相册资源使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "photoAccessHelper提供用户相册相关的接口，支持查询和重命名相册，以及添加和删除相册中的图片和视频资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471065)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行功能开发前，请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
        children: "开发准备"
      }), "，了解如何获取相册管理模块实例和申请相关权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文档中使用到photoAccessHelper的地方默认为使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
        children: "开发准备"
      }), "中获取的对象，如未添加此段代码报photoAccessHelper未定义的错误请自行添加。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证应用的运行效率，大部分photoAccessHelper的接口调用都是异步的。以下异步调用的API示例均采用Promise函数，更多方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
        children: "模块描述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如无特别说明，文档中涉及的待获取资源均视为已预置，并且数据库中存在相应数据。如果按照示例代码执行后获取资源为空，请确认文件是否已预置，以及数据库中是否存在该文件的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取用户相册",
      children: "获取用户相册"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getalbums-2",
        children: "PhotoAccessHelper.getAlbums"
      }), "接口获取用户相册。"]
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
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以获取一个相册名为'albumName'的用户相册为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立检索条件，用于获取用户相册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.getAlbums接口获取用户相册资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一个用户相册。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;\n  predicates.equalTo(albumName, 'test');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,\n        photoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions);\n    let album: photoAccessHelper.Album = await fetchResult.getFirstObject();\n    console.info('getAlbums successfully, albumName: ' + album.albumName);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('getAlbums failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "重命名用户相册",
      children: "重命名用户相册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重命名用户相册时，修改的是相册的Album.albumName属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaalbumchangerequest/kts-apis-photoaccesshelper-mediaalbumchangerequest#setalbumname11",
        children: "MediaAlbumChangeRequest.setAlbumName"
      }), "重命名用户相册后再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11",
        children: "PhotoAccessHelper.applyChanges"
      }), "更新到数据库中完成修改。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在重命名用户相册之前，需要先获取相册对象，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult",
        children: "FetchResult"
      }), "中的接口获取对应位置的用户相册。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重命名相册时，相册名的参数规格为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相册名字符串长度为1~255。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不允许出现的非法英文字符，包括："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: ". \\ / : * ? \" ' ` < > | { } [ ]"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "英文字符大小写不敏感。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相册名不允许重名。"
        }), "\n"]
      }), "\n"]
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
      children: "下面以将一个相册名为'albumName'的用户相册重命名为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立检索条件，用于获取用户相册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.getAlbums接口获取用户相册资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一个用户相册。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用MediaAlbumChangeRequest.setAlbumName接口设置新的相册名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.applyChanges接口将修改的相册属性更新到数据库中完成修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;\n  predicates.equalTo(albumName, 'test');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,\n        photoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions);\n    let album: photoAccessHelper.Album = await fetchResult.getFirstObject();\n    console.info('getAlbums successfully, albumName: ' + album.albumName);\n    let albumChangeRequest: photoAccessHelper.MediaAlbumChangeRequest =\n      new photoAccessHelper.MediaAlbumChangeRequest(album);\n    let newAlbumName: string = 'newAlbumName';\n    albumChangeRequest.setAlbumName(newAlbumName);\n    await phAccessHelper.applyChanges(albumChangeRequest);\n    console.info('setAlbumName successfully, new albumName: ' + album.albumName);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('setAlbumName failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加图片和视频到用户相册中",
      children: "添加图片和视频到用户相册中"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E7%9B%B8%E5%86%8C",
        children: "获取用户相册"
      }), "对象和需要添加到用户相册中的图片或视频的对象数组，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaalbumchangerequest/kts-apis-photoaccesshelper-mediaalbumchangerequest#addassets11",
        children: "MediaAlbumChangeRequest.addAssets"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11",
        children: "PhotoAccessHelper.applyChanges"
      }), "接口往用户相册中添加图片或视频。"]
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
      children: "下面以将往相册名为'albumName'的用户相册中添加一张图片为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立相册检索条件，用于获取用户相册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立图片检索条件，用于获取图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.getAlbums接口获取用户相册资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一个用户相册。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getassets",
          children: "PhotoAccessHelper.getAssets"
        }), "接口获取图片资源。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一张图片。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用MediaAlbumChangeRequest.addAssets接口往用户相册中添加图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.applyChanges接口提交相册变更请求。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let albumPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;\n  albumPredicates.equalTo(albumName, 'test');\n  let albumFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: albumPredicates\n  };\n\n  let photoPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let photoFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: photoPredicates\n  };\n\n  try {\n    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,\n        photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);\n    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();\n    console.info('getAlbums successfully, albumName: ' + album.albumName);\n    let photoFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(photoFetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await photoFetchResult.getFirstObject();\n    console.info('getAssets successfully, albumName: ' + photoAsset.displayName);\n    let albumChangeRequest: photoAccessHelper.MediaAlbumChangeRequest =\n      new photoAccessHelper.MediaAlbumChangeRequest(album);\n    albumChangeRequest.addAssets([photoAsset]);\n    await phAccessHelper.applyChanges(albumChangeRequest);\n    console.info('succeed to add ' + photoAsset.displayName + ' to ' + album.albumName);\n    albumFetchResult.close();\n    photoFetchResult.close();\n    return true;\n  } catch (err) {\n    console.error('addAssets failed with err: ' + err);\n    return false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取用户相册中的图片和视频",
      children: "获取用户相册中的图片和视频"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E7%9B%B8%E5%86%8C",
        children: "获取用户相册"
      }), "对象，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-absalbum/arkts-apis-photoaccesshelper-absalbum#getassets-1",
        children: "Album.getAssets"
      }), "接口获取用户相册中的图片资源。"]
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
      children: "下面以获取相册名为'albumName'的用户相册中的一张图片为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立相册检索条件，用于获取用户相册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立图片检索条件，用于获取图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.getAlbums接口获取用户相册资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一个用户相册。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用Album.getAssets接口获取用户相册中的图片资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一张图片。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let albumPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;\n  albumPredicates.equalTo(albumName, 'test');\n  let albumFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: albumPredicates\n  };\n\n  let photoPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let photoFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: photoPredicates\n  };\n\n  try {\n    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,\n        photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);\n    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();\n    console.info('getAlbums successfully, albumName: ' + album.albumName);\n    let photoFetchResult = await album.getAssets(photoFetchOptions);\n    let photoAsset = await photoFetchResult.getFirstObject();\n    console.info('album getAssets successfully, albumName: ' + photoAsset.displayName);\n    albumFetchResult.close();\n    photoFetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('album getAssets failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "从用户相册中移除图片和视频",
      children: "从用户相册中移除图片和视频"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E7%9B%B8%E5%86%8C",
        children: "获取用户相册"
      }), "对象，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-absalbum/arkts-apis-photoaccesshelper-absalbum#getassets-1",
        children: "Album.getAssets"
      }), "接口获取用户相册中的资源。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["选择其中要移除的资源，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/kts-apis-photoaccesshelper-mediaalbumchangerequest/kts-apis-photoaccesshelper-mediaalbumchangerequest#removeassets11",
        children: "MediaAlbumChangeRequest.removeAssets"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11",
        children: "PhotoAccessHelper.applyChanges"
      }), "接口移除。"]
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
      children: "下面以从相册名为'albumName'的用户相册中移除一张图片为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立相册检索条件，用于获取用户相册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立图片检索条件，用于获取图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.getAlbums接口获取用户相册资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一个用户相册。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用Album.getAssets接口获取图片资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一张图片。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用MediaAlbumChangeRequest.removeAssets接口从用户相册中移除图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.applyChanges接口提交相册变更请求。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let albumPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;\n  albumPredicates.equalTo(albumName, 'test');\n  let albumFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: albumPredicates\n  };\n\n  let photoPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let photoFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: photoPredicates\n  };\n\n  try {\n    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,\n        photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);\n    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();\n    if (album === undefined) {\n      console.error('album is undefined');\n      albumFetchResult.close();\n      return false;\n    }\n    console.info('getAlbums successfully, albumName: ' + album.albumName);\n    let photoFetchResult = await album.getAssets(photoFetchOptions);\n    let photoAsset = await photoFetchResult.getFirstObject();\n    if (photoAsset === undefined) {\n      console.error('photoAsset is undefined');\n      photoFetchResult.close();\n      return false;\n    }\n    console.info('album getAssets successfully, albumName: ' + photoAsset.displayName);\n    let albumChangeRequest: photoAccessHelper.MediaAlbumChangeRequest =\n      new photoAccessHelper.MediaAlbumChangeRequest(album);\n    albumChangeRequest.removeAssets([photoAsset]);\n    await phAccessHelper.applyChanges(albumChangeRequest);\n    console.info('succeed to remove ' + photoAsset.displayName + ' from ' + album.albumName);\n    albumFetchResult.close();\n    photoFetchResult.close();\n    return true;\n  } catch (err) {\n    console.error('removeAssets failed with err: ' + err);\n    return false;\n  }\n}\n"
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
471065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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