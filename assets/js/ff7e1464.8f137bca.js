"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["547223"], {
185972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_library_api_media_library_arkts_js_apis_sendablephotoaccesshelper_js_apis_sendablephotoaccesshelper_md_ff7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-library-api-media-library-arkts-js-apis-sendablephotoaccesshelper-js-apis-sendablephotoaccesshelper-md-ff7.json
var site_docs_ref_media_library_api_media_library_arkts_js_apis_sendablephotoaccesshelper_js_apis_sendablephotoaccesshelper_md_ff7_namespaceObject = JSON.parse('{"id":"media-library-api/media-library-arkts/js-apis-sendablephotoaccesshelper/js-apis-sendablephotoaccesshelper","title":"@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)","description":"该模块基于Sendable对象，提供相册管理功能，包括创建相册和访问、修改相册中的媒体数据。","source":"@site/docs-ref/media-library-api/media-library-arkts/js-apis-sendablephotoaccesshelper/js-apis-sendablephotoaccesshelper.md","sourceDirName":"media-library-api/media-library-arkts/js-apis-sendablephotoaccesshelper","slug":"/media-library-api/media-library-arkts/js-apis-sendablephotoaccesshelper/js-apis-sendablephotoaccesshelper","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-arkts/js-apis-sendablephotoaccesshelper/js-apis-sendablephotoaccesshelper","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sendablephotoaccesshelper","kit":"媒体","last_updated":"2026-04-22","slug":"js-apis-sendablephotoaccesshelper"},"sidebar":"ref","previous":{"title":"Types","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-t/arkts-apis-photoaccesshelper-t"},"next":{"title":"@ohos.file.AlbumPickerComponent (Album Picker组件)","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-comp/ohos-file-albumpickercomponent/ohos-file-albumpickercomponent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-library-api/media-library-arkts/js-apis-sendablephotoaccesshelper/js-apis-sendablephotoaccesshelper.md


const frontMatter = {
	title: '@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sendablephotoaccesshelper',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'js-apis-sendablephotoaccesshelper'
};
const contentTitle = '@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "sendablePhotoAccessHelper.getPhotoAccessHelper",
  "id": "sendablephotoaccesshelpergetphotoaccesshelper",
  "level": 2
}, {
  "value": "PhotoAccessHelper",
  "id": "photoaccesshelper",
  "level": 2
}, {
  "value": "getAssets",
  "id": "getassets",
  "level": 3
}, {
  "value": "getBurstAssets",
  "id": "getburstassets",
  "level": 3
}, {
  "value": "createAsset",
  "id": "createasset",
  "level": 3
}, {
  "value": "getAlbums",
  "id": "getalbums",
  "level": 3
}, {
  "value": "getAlbums",
  "id": "getalbums-1",
  "level": 3
}, {
  "value": "release",
  "id": "release",
  "level": 3
}, {
  "value": "PhotoAsset",
  "id": "photoasset",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "convertToPhotoAsset",
  "id": "converttophotoasset",
  "level": 3
}, {
  "value": "get",
  "id": "get",
  "level": 3
}, {
  "value": "set",
  "id": "set",
  "level": 3
}, {
  "value": "commitModify",
  "id": "commitmodify",
  "level": 3
}, {
  "value": "getThumbnail",
  "id": "getthumbnail",
  "level": 3
}, {
  "value": "FetchResult",
  "id": "fetchresult",
  "level": 2
}, {
  "value": "getCount",
  "id": "getcount",
  "level": 3
}, {
  "value": "isAfterLast",
  "id": "isafterlast",
  "level": 3
}, {
  "value": "close",
  "id": "close",
  "level": 3
}, {
  "value": "getFirstObject",
  "id": "getfirstobject",
  "level": 3
}, {
  "value": "getNextObject",
  "id": "getnextobject",
  "level": 3
}, {
  "value": "getLastObject",
  "id": "getlastobject",
  "level": 3
}, {
  "value": "getObjectByPosition",
  "id": "getobjectbyposition",
  "level": 3
}, {
  "value": "getAllObjects",
  "id": "getallobjects",
  "level": 3
}, {
  "value": "Album",
  "id": "album",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "convertToPhotoAlbum",
  "id": "converttophotoalbum",
  "level": 3
}, {
  "value": "getAssets",
  "id": "getassets-1",
  "level": 3
}, {
  "value": "commitModify",
  "id": "commitmodify-1",
  "level": 3
}, {
  "value": "PhotoType",
  "id": "phototype",
  "level": 2
}, {
  "value": "PhotoSubtype14+",
  "id": "photosubtype14",
  "level": 2
}, {
  "value": "DynamicRangeType14+",
  "id": "dynamicrangetype14",
  "level": 2
}, {
  "value": "AlbumType",
  "id": "albumtype",
  "level": 2
}, {
  "value": "AlbumSubtype",
  "id": "albumsubtype",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohosfilesendablephotoaccesshelper-基于sendable对象的相册管理模块",
        children: "@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该模块基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable"
      }), "对象，提供相册管理功能，包括创建相册和访问、修改相册中的媒体数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894554)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablephotoaccesshelpergetphotoaccesshelper",
      children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPhotoAccessHelper(context: Context): PhotoAccessHelper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取相册管理模块的实例，用于访问和修改相册中的媒体文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入Ability实例的Context。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#photoaccesshelper",
              children: "PhotoAccessHelper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册管理模块的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处获取的phAccessHelper实例为全局对象，后续使用到phAccessHelper的地方默认为使用此处获取的对象，如未添加此段代码报phAccessHelper未定义的错误请自行添加。\n// 请在组件内获取context，确保this.getUiContext().getHostContext()返回结果为UIAbilityContext\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Button(\"example\").onClick(async () => {\n        let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        let phAccessHelper = sendablePhotoAccessHelper.getPhotoAccessHelper(context);\n      }).width('100%')\n    }\n    .height('90%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "photoaccesshelper",
      children: "PhotoAccessHelper"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getassets",
      children: "getAssets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片和视频资源。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于未申请'ohos.permission.READ_IMAGEVIDEO'权限的应用，可以通过picker的方式调用该接口来查询指定URI对应的图片或视频资源，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-photoviewpicker#%E6%8C%87%E5%AE%9Auri%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87%E6%88%96%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90",
        children: "指定URI获取图片或视频资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-i/arkts-apis-photoaccesshelper-i#fetchoptions",
              children: "photoAccessHelper.FetchOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片和视频检索选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fetchresult",
              children: "FetchResult"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#photoasset",
              children: "PhotoAsset"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回图片和视频数据结果集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getAssets');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);\n    if (fetchResult !== undefined) {\n      console.info('fetchResult success');\n      let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n      if (photoAsset !== undefined) {\n        console.info('photoAsset.displayName :' + photoAsset.displayName);\n      }\n    }\n  } catch (err) {\n    console.error(`getAssets failed, error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getburstassets",
      children: "getBurstAssets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取连拍照片资源。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "burstKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一组连拍照片的唯一标识：uuid（可传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photokeys",
              children: "PhotoKeys"
            }), "的BURST_KEY）。字符串长度为36字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-i/arkts-apis-photoaccesshelper-i#fetchoptions",
              children: "photoAccessHelper.FetchOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连拍照片检索选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fetchresult",
              children: "FetchResult"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#photoasset",
              children: "PhotoAsset"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回连拍照片数据结果集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getBurstAssets');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAssetList: Array<sendablePhotoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();\n  let photoAsset: sendablePhotoAccessHelper.PhotoAsset;\n  // burstKey为36位的uuid，可以根据photoAccessHelper.PhotoKeys获取。\n  for(photoAsset of photoAssetList){\n    let burstKey: string = photoAccessHelper.PhotoKeys.BURST_KEY.toString();\n    let photoAccessBurstKey: photoAccessHelper.MemberType = photoAsset.get(burstKey).toString();\n    try {\n      let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await\n      phAccessHelper.getBurstAssets(photoAccessBurstKey, fetchOption);\n      if (fetchResult !== undefined) {\n        console.info('fetchResult success');\n        let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n        if (photoAsset !== undefined) {\n          console.info('photoAsset.displayName :' + photoAsset.displayName);\n        }\n      }\n    } catch (err) {\n      console.error(`getBurstAssets failed, error: ${err.code}, ${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createasset",
      children: "createAsset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定文件类型、后缀和创建选项，创建图片或视频资源。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此接口在未申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'时，可以使用安全控件创建媒体资源，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "保存媒体库资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.WRITE_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "photoType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#phototype",
              children: "PhotoType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建的文件类型，IMAGE或者VIDEO类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名后缀参数，例如：'jpg'。字符串长度的取值范围为[1, 255]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-i/arkts-apis-photoaccesshelper-i#createoptions",
              children: "photoAccessHelper.CreateOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建选项，例如{title: 'testPhoto'}。  文件名中不允许出现非法英文字符。  API18开始，非法字符包括： \\ / : * ? \" < >"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的图片和视频的uri。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('createAssetDemo');\n  try {\n    let photoType: sendablePhotoAccessHelper.PhotoType = sendablePhotoAccessHelper.PhotoType.IMAGE;\n    let extension: string = 'jpg';\n    let options: photoAccessHelper.CreateOptions = {\n      title: 'testPhoto'\n    }\n    let uri: string = await phAccessHelper.createAsset(photoType, extension, options);\n    console.info('createAsset uri' + uri);\n    console.info('createAsset successfully');\n  } catch (err) {\n    console.error(`createAsset failed, error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getalbums",
      children: "getAlbums"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据检索选项和相册类型获取相册。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取相册前需先保证相册存在。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#albumtype",
              children: "AlbumType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subtype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#albumsubtype",
              children: "AlbumSubtype"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册子类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-i/arkts-apis-photoaccesshelper-i#fetchoptions",
              children: "photoAccessHelper.FetchOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索选项，不填时默认根据相册类型检索。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fetchresult",
              children: "FetchResult"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#album",
              children: "Album"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取相册的结果集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  // 示例代码中为获取相册名为newAlbumName的相册。\n  console.info('getAlbumsDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  predicates.equalTo('album_name', 'newAlbumName');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  phAccessHelper.getAlbums(sendablePhotoAccessHelper.AlbumType.USER, sendablePhotoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions).then( async (fetchResult) => {\n    if (fetchResult === undefined) {\n      console.error('getAlbumsPromise fetchResult is undefined');\n      return;\n    }\n    let album: sendablePhotoAccessHelper.Album = await fetchResult.getFirstObject();\n    console.info('getAlbumsPromise successfully, albumName: ' + album.albumName);\n    fetchResult.close();\n  }).catch((err: BusinessError) => {\n    console.error(`getAlbumsPromise failed with err: ${err.code}, ${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getalbums-1",
      children: "getAlbums"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据检索选项获取相册。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取相册前需先保证相册存在。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-i/arkts-apis-photoaccesshelper-i#fetchoptions",
              children: "photoAccessHelper.FetchOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fetchresult",
              children: "FetchResult"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#album",
              children: "Album"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取相册的结果集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  // 示例代码中为获取相册名为newAlbumName的相册。\n  console.info('getAlbumsDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  predicates.equalTo('album_name', 'newAlbumName');\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  phAccessHelper.getAlbums(fetchOptions).then( async (fetchResult) => {\n    if (fetchResult === undefined) {\n      console.error('getAlbumsPromise fetchResult is undefined');\n      return;\n    }\n    let album: sendablePhotoAccessHelper.Album = await fetchResult.getFirstObject();\n    console.info('getAlbumsPromise successfully, albumName: ' + album.albumName);\n    fetchResult.close();\n  }).catch((err: BusinessError) => {\n    console.error(`getAlbumsPromise failed with err: ${err.code}, ${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release",
      children: "release"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放PhotoAccessHelper实例，当后续不需要使用PhotoAccessHelper实例中的方法时调用。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('releaseDemo');\n  try {\n    console.info('use function...');\n  } catch (err) {\n    console.error(`function error ...`);\n  }finally{\n      try{\n          phAccessHelper?.release();\n          console.info(`release success`);\n      } catch(e){\n          console.error(`release error :${e}`);\n      }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "photoasset",
      children: "PhotoAsset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供封装文件属性的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体文件资源URI（如：file://media/Photo/1/IMG_datetime_0001/displayName.jpg），详情参见用户文件URI介绍中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/user-files/user-file-uri-intro#%E5%AA%92%E4%BD%93%E6%96%87%E4%BB%B6uri",
              children: "媒体文件URI"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "photoType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#phototype",
              children: "PhotoType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示文件名，包含后缀名。字符串长度的取值范围为[1, 255]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "converttophotoasset",
      children: "convertToPhotoAsset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertToPhotoAsset(): photoAccessHelper.PhotoAsset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Sendable类型PhotoAsset转换为非Sendable类型PhotoAsset。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "photoAccessHelper.PhotoAsset"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回非Sendable类型的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-photoasset/arkts-apis-photoaccesshelper-photoasset",
              children: "PhotoAsset"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('convertToPhotoAssetDemo');\n  try {\n    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n    let fetchOption: photoAccessHelper.FetchOptions = {\n      fetchColumns: ['title'],\n      predicates: predicates\n    };\n    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    let sendablePhotoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    let photoAsset: photoAccessHelper.PhotoAsset = sendablePhotoAsset.convertToPhotoAsset();\n    console.info(`get no sendable uri success : ${photoAsset.uri}`);\n  } catch (err) {\n    console.error(`convertToPhotoAsset failed. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get",
      children: "get"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get(member: string): photoAccessHelper.MemberType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PhotoAsset成员参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成员参数名称，在get时，除了'uri'、'media_type'、'subtype'和'display_name'四个属性之外，其他的属性都需要在fetchColumns中填入需要get的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photokeys",
              children: "PhotoKeys"
            }), "，例如：get title属性fetchColumns: ['title']。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-t/arkts-apis-photoaccesshelper-t#membertype",
              children: "photoAccessHelper.MemberType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PhotoAsset成员参数的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('photoAssetGetDemo');\n  try {\n    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n    let fetchOption: photoAccessHelper.FetchOptions = {\n      fetchColumns: ['title'],\n      predicates: predicates\n    };\n    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    if (fetchResult === undefined) {\n      console.error('photoAssetGet fetchResult is undefined');\n      return;\n    }\n    let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    let title: photoAccessHelper.PhotoKeys = photoAccessHelper.PhotoKeys.TITLE;\n    let photoAssetTitle: photoAccessHelper.MemberType = photoAsset.get(title.toString());\n    console.info('photoAsset Get photoAssetTitle = ', photoAssetTitle);\n  } catch (err) {\n    console.error(`get failed. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set",
      children: "set"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "set(member: string, value: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PhotoAsset成员参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成员参数名称例如：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photokeys",
              children: "PhotoKeys"
            }), ".TITLE。字符串长度的取值范围为[1, 255]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置成员参数名称，只能修改", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photokeys",
              children: "PhotoKeys"
            }), ".TITLE的值。title的参数规格为：  - 不应包含扩展名。  - 文件名字符串长度的取值范围为[1, 255]（资产文件名为标题+扩展名）。  - 不允许出现的非法英文字符，包括：. \\ / : * ? \" ' ` < >"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('photoAssetSetDemo');\n  try {\n    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n    let fetchOption: photoAccessHelper.FetchOptions = {\n      fetchColumns: ['title'],\n      predicates: predicates\n    };\n    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    let title: string = photoAccessHelper.PhotoKeys.TITLE.toString();\n    photoAsset.set(title, 'newTitle');\n  } catch (err) {\n    console.error(`set failed. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commitmodify",
      children: "commitModify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "commitModify(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改文件的元数据。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.WRITE_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('commitModifyDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: ['title'],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n  let title: string = photoAccessHelper.PhotoKeys.TITLE.toString();\n  let photoAssetTitle: photoAccessHelper.MemberType = photoAsset.get(title);\n  console.info('photoAsset get photoAssetTitle = ', photoAssetTitle);\n  photoAsset.set(title, 'newTitle3');\n  try {\n    await photoAsset.commitModify();\n    let newPhotoAssetTitle: photoAccessHelper.MemberType = photoAsset.get(title);\n    console.info('photoAsset get newPhotoAssetTitle = ', newPhotoAssetTitle);\n  } catch (err) {\n    console.error(`commitModify failed. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getthumbnail",
      children: "getThumbnail"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getThumbnail(size?: image.Size): Promise<image.PixelMap>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件的缩略图，传入缩略图尺寸。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#size",
              children: "image.Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩略图尺寸。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "image.PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回缩略图的PixelMap。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getThumbnailDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let size: image.Size = { width: 720, height: 720 };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let asset = await fetchResult.getFirstObject();\n  if (asset === undefined) {\n    console.error('getThumbnailPromise albums is undefined');\n    return;\n  }\n  console.info('asset displayName = ', asset.displayName);\n  asset.getThumbnail(size).then((pixelMap) => {\n    console.info('getThumbnail successful ' + pixelMap);\n  }).catch((err: BusinessError) => {\n    console.error(`getThumbnail fail with error: ${err.code}, ${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fetchresult",
      children: "FetchResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件检索结果集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getcount",
      children: "getCount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCount(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的文件总数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索到的文件总数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getCountDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let fetchCount = fetchResult.getCount();\n  console.info('fetchCount = ', fetchCount);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isafterlast",
      children: "isAfterLast"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isAfterLast(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查结果集是否指向最后一行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当读到最后一条记录后，后续没有记录返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let fetchCount = fetchResult.getCount();\n  console.info('count:' + fetchCount);\n  let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getLastObject();\n  if (fetchResult.isAfterLast()) {\n    console.info('photoAsset isAfterLast displayName = ', photoAsset.displayName);\n  } else {\n    console.info('photoAsset not isAfterLast.');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "close",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放FetchResult实例并使其失效。无法调用其他方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细错误码请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('fetchResultCloseDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    fetchResult.close();\n    console.info('close succeed.');\n  } catch (err) {\n    console.error(`close fail. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getfirstobject",
      children: "getFirstObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFirstObject(): Promise<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的第一个文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回结果集中第一个对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getFirstObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n  console.info('photoAsset displayName: ', photoAsset.displayName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getnextobject",
      children: "getNextObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNextObject(): Promise<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的下一个文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用此方法之前，必须使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#isafterlast",
        children: "isAfterLast()"
      }), "来检查当前位置是否为最后一行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回结果集中下一个对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getNextObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  await fetchResult.getFirstObject();\n  let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getNextObject();\n  console.info('photoAsset displayName: ', photoAsset.displayName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getlastobject",
      children: "getLastObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLastObject(): Promise<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的最后一个文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回结果集中最后一个对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getLastObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getLastObject();\n  console.info('photoAsset displayName: ', photoAsset.displayName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getobjectbyposition",
      children: "getObjectByPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getObjectByPosition(index: number): Promise<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中具有指定索引的文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取的文件的索引，从0开始。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回结果集中指定索引的一个对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getObjectByPositionDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getObjectByPosition(0);\n  console.info('photoAsset displayName: ', photoAsset.displayName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getallobjects",
      children: "getAllObjects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllObjects(): Promise<Array<T>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的所有文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<Array<T>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回结果集中所有文件资产数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('getAllObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAssetList: Array<sendablePhotoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();\n  console.info('photoAssetList length: ', photoAssetList.length);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "album",
      children: "Album"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实体相册"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "albumType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#albumtype",
              children: "AlbumType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "albumSubtype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#albumsubtype",
              children: "AlbumSubtype"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册子类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "albumName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户相册可写，预置相册不可写"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "albumUri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册Uri。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册中文件数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coverUri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封面文件Uri。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册中图片数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "videoCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相册中视频数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "converttophotoalbum",
      children: "convertToPhotoAlbum"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertToPhotoAlbum(): photoAccessHelper.Album"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Sendable类型Album转换为非Sendable类型Album。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-album/arkts-apis-photoaccesshelper-album",
              children: "photoAccessHelper.Album"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回非Sendable类型的Album。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('convertToPhotoAlbumDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let albumList: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.Album> = await phAccessHelper.getAlbums(sendablePhotoAccessHelper.AlbumType.USER, sendablePhotoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);\n  let sendableAlbum: sendablePhotoAccessHelper.Album = await albumList.getFirstObject();\n  let album: photoAccessHelper.Album = sendableAlbum.convertToPhotoAlbum();\n  album.getAssets(fetchOption).then((albumFetchResult) => {\n    console.info('convertToPhotoAlbum successfully, getCount: ' + albumFetchResult.getCount());\n  }).catch((err: BusinessError) => {\n    console.error(`convertToPhotoAlbum failed with error: ${err.code}, ${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getassets-1",
      children: "getAssets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取相册中的文件。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-i/arkts-apis-photoaccesshelper-i#fetchoptions",
              children: "photoAccessHelper.FetchOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fetchresult",
              children: "FetchResult"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#photoasset",
              children: "PhotoAsset"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回图片和视频数据结果集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('albumGetAssetsDemoPromise');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let albumList: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.Album> = await phAccessHelper.getAlbums(sendablePhotoAccessHelper.AlbumType.USER, sendablePhotoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);\n  let album: sendablePhotoAccessHelper.Album = await albumList.getFirstObject();\n  album.getAssets(fetchOption).then((albumFetchResult) => {\n    console.info('album getAssets successfully, getCount: ' + albumFetchResult.getCount());\n  }).catch((err: BusinessError) => {\n    console.error(`album getAssets failed with error: ${err.code}, ${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commitmodify-1",
      children: "commitModify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "commitModify(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新相册属性修改到数据库中。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.WRITE_IMAGEVIDEO"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts-errcode/errorcode-filemanagement/errorcode-filemanagement",
        children: "文件管理错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["phAccessHelper的创建请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablephotoaccesshelpergetphotoaccesshelper",
        children: "sendablePhotoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {\n  console.info('albumCommitModifyDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let albumFetchOptions: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let albumList: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.Album> = await phAccessHelper.getAlbums(sendablePhotoAccessHelper.AlbumType.USER, sendablePhotoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);\n  let album: sendablePhotoAccessHelper.Album = await albumList.getFirstObject();\n  album.albumName = 'hello';\n  album.commitModify().then(() => {\n    console.info('commitModify successfully');\n  }).catch((err: BusinessError) => {\n    console.error(`commitModify failed with error: ${err.code}, ${err.message}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phototype",
      children: "PhotoType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，媒体文件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "photosubtype14",
      children: "PhotoSubtype14+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["枚举，不同", (0,jsx_runtime.jsx)(_components.a, {
        href: "#photoasset",
        children: "PhotoAsset"
      }), "的类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认照片类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOVING_PHOTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态照片文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BURST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连拍照片文件类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dynamicrangetype14",
      children: "DynamicRangeType14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，媒体文件的动态范围类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), ": SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准动态范围类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高动态范围类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "albumtype",
      children: "AlbumType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，相册类型，表示是用户相册还是系统预置相册。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户相册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYSTEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统预置相册。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "albumsubtype",
      children: "AlbumSubtype"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，相册子类型，表示具体的相册类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.FileManagement.PhotoAccessHelper.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_GENERIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户相册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAVORITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收藏夹。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频相册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片相册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2147483647"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任意相册。"
          })]
        })]
      })]
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
894554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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