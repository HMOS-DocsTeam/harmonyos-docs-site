"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798563"], {
147629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_systemalbum_guidelines_photoaccesshelper_systemalbum_guidelines_md_6af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-medialibrary-kit-restricted-open-capabilities-photoaccesshelper-systemalbum-guidelines-photoaccesshelper-systemalbum-guidelines-md-6af.json
var site_docs_medialibrary_kit_restricted_open_capabilities_photoaccesshelper_systemalbum_guidelines_photoaccesshelper_systemalbum_guidelines_md_6af_namespaceObject = JSON.parse('{"id":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines/photoaccesshelper-systemalbum-guidelines","title":"系统相册资源使用指导","description":"photoAccessHelper提供对收藏夹、视频相册、截屏和录屏相册的相关操作。","source":"@site/docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines/photoaccesshelper-systemalbum-guidelines.md","sourceDirName":"medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines","slug":"/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines/","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"系统相册资源使用指导","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-systemalbum-guidelines","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户相册资源使用指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-useralbum-guidelines/"},"next":{"title":"媒体资源变更通知相关指导","permalink":"/harmonyos-docs-site/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-notify-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-systemalbum-guidelines/photoaccesshelper-systemalbum-guidelines.md


const frontMatter = {
	title: '系统相册资源使用指导',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-systemalbum-guidelines',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '系统相册资源使用指导';

const assets = {

};



const toc = [{
  "value": "收藏夹",
  "id": "收藏夹",
  "level": 2
}, {
  "value": "获取收藏夹对象",
  "id": "获取收藏夹对象",
  "level": 3
}, {
  "value": "获取收藏夹中的图片和视频",
  "id": "获取收藏夹中的图片和视频",
  "level": 3
}, {
  "value": "视频相册",
  "id": "视频相册",
  "level": 2
}, {
  "value": "获取视频相册对象",
  "id": "获取视频相册对象",
  "level": 3
}, {
  "value": "获取视频相册中的视频",
  "id": "获取视频相册中的视频",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "系统相册资源使用指导",
        children: "系统相册资源使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "photoAccessHelper提供对收藏夹、视频相册、截屏和录屏相册的相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(393855)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行功能开发前，请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
        children: "开发准备"
      }), "，了解如何获取相册管理模块实例及申请相关权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文档中使用到PhotoAccessHelper的地方，默认使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation",
        children: "开发准备"
      }), "中获取的对象，如未添加此段代码提示PhotoAccessHelper未定义的错误请自行添加。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证应用的运行效率，大部分photoAccessHelper的接口调用都是异步的。以下异步调用的API示例均采用Promise函数，更多方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper/arkts-apis-photoaccesshelper",
        children: "模块描述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如无特别说明，文档中涉及的待获取的资源均视为已经预置且在数据库中存在相应数据。如出现按照示例代码执行出现获取资源为空的情况，请确认文件是否已预置，数据库中是否存在该文件的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "收藏夹",
      children: "收藏夹"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收藏夹属于系统相册，对图片或视频设置收藏时会自动将其加入到收藏夹中，取消收藏则会从收藏夹中移除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取收藏夹对象",
      children: "获取收藏夹对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getalbums-2",
        children: "PhotoAccessHelper.getAlbums"
      }), "接口获取收藏夹对象。"]
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置获取收藏夹的参数为photoAccessHelper.AlbumType.SYSTEM和photoAccessHelper.AlbumSubtype.FAVORITE。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.getAlbums接口获取收藏夹对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.FAVORITE);\n    let album: photoAccessHelper.Album = await fetchResult.getFirstObject();\n    console.info('get favorite album successfully, albumUri: ' + album.albumUri);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('get favorite album failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取收藏夹中的图片和视频",
      children: "获取收藏夹中的图片和视频"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E6%94%B6%E8%97%8F%E5%A4%B9%E5%AF%B9%E8%B1%A1",
        children: "获取收藏夹对象"
      }), "。然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-absalbum/arkts-apis-photoaccesshelper-absalbum#getassets-1",
        children: "Album.getAssets"
      }), "接口获取收藏夹中的资源。"]
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
      children: "下面以获取收藏夹中的一张图片为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%8E%B7%E5%8F%96%E6%94%B6%E8%97%8F%E5%A4%B9%E5%AF%B9%E8%B1%A1",
          children: "获取收藏夹对象"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立图片检索条件，用于获取图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用Album.getAssets接口获取图片资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一张图片。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n\n  try {\n    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.FAVORITE);\n    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();\n    console.info('get favorite album successfully, albumUri: ' + album.albumUri);\n\n    let photoFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await album.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await photoFetchResult.getFirstObject();\n    console.info('favorite album getAssets successfully, photoAsset displayName: ' + photoAsset.displayName);\n    photoFetchResult.close();\n    albumFetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('favorite failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "视频相册",
      children: "视频相册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频相册属于系统相册，用户文件中属于视频类型的媒体文件会自动加入到视频相册中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取视频相册对象",
      children: "获取视频相册对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper/arkts-apis-photoaccesshelper-photoaccesshelper#getalbums-2",
        children: "PhotoAccessHelper.getAlbums"
      }), "接口获取视频相册对象。"]
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置获取视频相册的参数为photoAccessHelper.AlbumType.SYSTEM和photoAccessHelper.AlbumSubtype.VIDEO。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PhotoAccessHelper.getAlbums接口获取视频相册。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.VIDEO);\n    let album: photoAccessHelper.Album = await fetchResult.getFirstObject();\n    console.info('get video album successfully, albumUri: ' + album.albumUri);\n    fetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('get video album failed with err: ' + err);\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取视频相册中的视频",
      children: "获取视频相册中的视频"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E7%9B%B8%E5%86%8C%E5%AF%B9%E8%B1%A1",
        children: "获取视频相册对象"
      }), "。然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-absalbum/arkts-apis-photoaccesshelper-absalbum#getassets-1",
        children: "Album.getAssets"
      }), "接口获取视频相册对象中的视频资源。"]
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
      children: "下面以获取视频相册中的一个视频为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["先", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E7%9B%B8%E5%86%8C%E5%AF%B9%E8%B1%A1",
          children: "获取视频相册对象"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立视频检索条件，用于获取视频。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用Album.getAssets接口获取视频资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1",
          children: "FetchResult.getFirstObject"
        }), "接口获取第一个视频。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n// ...\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n\n  try {\n    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =\n      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.SYSTEM, photoAccessHelper.AlbumSubtype.VIDEO);\n    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();\n    console.info('get video album successfully, albumUri: ' + album.albumUri);\n\n    let videoFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await album.getAssets(fetchOptions);\n    let photoAsset: photoAccessHelper.PhotoAsset = await videoFetchResult.getFirstObject();\n    console.info('video album getAssets successfully, photoAsset displayName: ' + photoAsset.displayName);\n    videoFetchResult.close();\n    albumFetchResult.close();\n    // ...\n  } catch (err) {\n    console.error('video failed with err: ' + err);\n    // ...\n  }\n}\n"
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
393855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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