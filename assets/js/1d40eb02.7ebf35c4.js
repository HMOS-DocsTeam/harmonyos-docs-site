"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["980808"], {
510656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_library_api_media_library_arkts_js_apis_photoaccesshelper_arkts_apis_photoaccesshelper_fetchresult_arkts_apis_photoaccesshelper_fetchresult_md_1d4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-library-api-media-library-arkts-js-apis-photoaccesshelper-arkts-apis-photoaccesshelper-fetchresult-arkts-apis-photoaccesshelper-fetchresult-md-1d4.json
var site_docs_ref_media_library_api_media_library_arkts_js_apis_photoaccesshelper_arkts_apis_photoaccesshelper_fetchresult_arkts_apis_photoaccesshelper_fetchresult_md_1d4_namespaceObject = JSON.parse('{"id":"media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult","title":"Interface (FetchResult)","description":"文件检索结果集。","source":"@site/docs-ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult.md","sourceDirName":"media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult","slug":"/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Interface (FetchResult)","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult","kit":"媒体","last_updated":"2026-04-22","slug":"arkts-apis-photoaccesshelper-fetchresult"},"sidebar":"ref","previous":{"title":"Interface (Album)","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-album/arkts-apis-photoaccesshelper-album"},"next":{"title":"Interface (MediaAssetDataHandler)","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-mediaassetdatahandler/arkts-apis-photoaccesshelper-mediaassetdatahandler"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-fetchresult/arkts-apis-photoaccesshelper-fetchresult.md


const frontMatter = {
	title: 'Interface (FetchResult)',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-photoaccesshelper-fetchresult'
};
const contentTitle = 'Interface (FetchResult)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "getCount",
  "id": "getcount",
  "level": 2
}, {
  "value": "isAfterLast",
  "id": "isafterlast",
  "level": 2
}, {
  "value": "close",
  "id": "close",
  "level": 2
}, {
  "value": "getFirstObject",
  "id": "getfirstobject",
  "level": 2
}, {
  "value": "getFirstObject",
  "id": "getfirstobject-1",
  "level": 2
}, {
  "value": "getNextObject",
  "id": "getnextobject",
  "level": 2
}, {
  "value": "getNextObject",
  "id": "getnextobject-1",
  "level": 2
}, {
  "value": "getLastObject",
  "id": "getlastobject",
  "level": 2
}, {
  "value": "getLastObject",
  "id": "getlastobject-1",
  "level": 2
}, {
  "value": "getObjectByPosition",
  "id": "getobjectbyposition",
  "level": 2
}, {
  "value": "getObjectByPosition",
  "id": "getobjectbyposition-1",
  "level": 2
}, {
  "value": "getAllObjects",
  "id": "getallobjects",
  "level": 2
}, {
  "value": "getAllObjects",
  "id": "getallobjects-1",
  "level": 2
}, {
  "value": "contains23+",
  "id": "contains23",
  "level": 2
}, {
  "value": "getObjectsByIndexSet23+",
  "id": "getobjectsbyindexset23",
  "level": 2
}, {
  "value": "getIndex23+",
  "id": "getindex23",
  "level": 2
}, {
  "value": "getRangeObjects23+",
  "id": "getrangeobjects23",
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
        id: "interface-fetchresult",
        children: "Interface (FetchResult)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件检索结果集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(534901)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcount",
      children: "getCount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCount(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的文件总数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getCountDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let fetchCount = fetchResult.getCount();\n  console.info('fetchCount = ', fetchCount);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "isafterlast",
      children: "isAfterLast"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isAfterLast(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查结果集是否指向最后一行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let fetchCount = fetchResult.getCount();\n  console.info('count:' + fetchCount);\n  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getLastObject();\n  if (fetchResult.isAfterLast()) {\n    console.info('photoAsset isAfterLast displayName = ', photoAsset.displayName);\n  } else {\n    console.info('photoAsset not isAfterLast.');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放FetchResult实例并使其失效，无法再调用其他方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('fetchResultCloseDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    fetchResult.close();\n    console.info('close succeed.');\n  } catch (err) {\n    console.error(`close fail. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getfirstobject",
      children: "getFirstObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFirstObject(callback: AsyncCallback<T>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的第一个文件资产。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取结果集中的第一个文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。"
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getFirstObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  fetchResult.getFirstObject((err, photoAsset) => {\n    if (photoAsset !== undefined) {\n      console.info('photoAsset displayName: ', photoAsset.displayName);\n    } else {\n      console.error(`photoAsset failed with err:${err.code}, ${err.message}`);\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getfirstobject-1",
      children: "getFirstObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFirstObject(): Promise<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的第一个文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getFirstObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n  console.info('photoAsset displayName: ', photoAsset.displayName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getnextobject",
      children: "getNextObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNextObject(callback: AsyncCallback<T>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的下一个文件资产。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用此方法之前，必须使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#isafterlast",
        children: "isAfterLast()"
      }), "来检查当前位置是否为最后一行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取结果集中的下一个文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。"
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getNextObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  await fetchResult.getFirstObject();\n  if (!fetchResult.isAfterLast()) {\n    fetchResult.getNextObject((err, photoAsset) => {\n      if (photoAsset !== undefined) {\n        console.info('photoAsset displayName: ', photoAsset.displayName);\n      } else {\n        console.error(`photoAsset failed with err: ${err.code}, ${err.message}`);\n      }\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getnextobject-1",
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
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getNextObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  await fetchResult.getFirstObject();\n  if (!fetchResult.isAfterLast()) {\n    let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getNextObject();\n    console.info('photoAsset displayName: ', photoAsset.displayName);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getlastobject",
      children: "getLastObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLastObject(callback: AsyncCallback<T>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的最后一个文件资产。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取结果集中的最后一个文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。"
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getLastObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  fetchResult.getLastObject((err, photoAsset) => {\n    if (photoAsset !== undefined) {\n      console.info('photoAsset displayName: ', photoAsset.displayName);\n    } else {\n      console.error(`photoAsset failed with err: ${err.code}, ${err.message}`);\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getlastobject-1",
      children: "getLastObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLastObject(): Promise<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的最后一个文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "Promise对象，返回结果集中的最后一个对象。"
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getLastObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getLastObject();\n  console.info('photoAsset displayName: ', photoAsset.displayName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getobjectbyposition",
      children: "getObjectByPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getObjectByPosition(index: number, callback: AsyncCallback<T>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中具有指定索引的文件资产。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取的文件的索引，从0开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取结果集中指定索引的文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。"
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getObjectByPositionDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  fetchResult.getObjectByPosition(0, (err, photoAsset) => {\n    if (photoAsset !== undefined) {\n      console.info('photoAsset displayName: ', photoAsset.displayName);\n    } else {\n      console.error(`photoAsset failed with err: ${err.code}, ${err.message}`);\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getobjectbyposition-1",
      children: "getObjectByPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getObjectByPosition(index: number): Promise<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中指定索引的文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getObjectByPositionDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  if (fetchResult === undefined) {\n    console.error('fetchResult is undefined');\n    return;\n  }\n  let photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getObjectByPosition(0);\n  console.info('photoAsset displayName: ', photoAsset.displayName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getallobjects",
      children: "getAllObjects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllObjects(callback: AsyncCallback<Array<T>>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的所有文件资产。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<Array<T>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取结果集中的所有文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。"
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getAllObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  fetchResult.getAllObjects((err, photoAssetList) => {\n    if (photoAssetList !== undefined) {\n      console.info('photoAssetList length: ', photoAssetList.length);\n    } else {\n      console.error(`photoAssetList failed with err:${err.code}, ${err.message}`);\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getallobjects-1",
      children: "getAllObjects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAllObjects(): Promise<Array<T>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中的所有文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "Promise对象，返回所有文件资产的数组。"
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
            children: "13900020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System inner fail."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getAllObjectDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n  let photoAssetList: Array<photoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();\n  console.info('photoAssetList length: ', photoAssetList.length);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contains23",
      children: "contains23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contains(object: T): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断文件检索结果中是否包含指定的文件资产。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的文件资产。"
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回true表示指定的文件资产在文件检索结果中；返回false表示指定的文件资产不在文件检索结果中。"
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('fetchResultContainsDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    let ret: boolean = await fetchResult.contains(asset);\n    console.info(`succeed. ${ret}`);\n  } catch (err) {\n    console.error(`fail. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getobjectsbyindexset23",
      children: "getObjectsByIndexSet23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getObjectsByIndexSet(indexSet: number[]): Promise<T[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件检索结果中指定索引集合对应的文件资产数组。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "indexSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的索引集合。"
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
            children: "Promise<T[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回指定索引集合所对应的文件资产数组。"
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
        href: "/ref/media-library-api/media-library-errcode/errorcode-medialibrary/errorcode-medialibrary",
        children: "媒体库错误码"
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
            children: "23800151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The scenario parameter verification fails. Possible causes: 1.The indexSet is null,undefined or empty. 2.The indexSet length is bigger than 500. 3.The max value of indexSet is equal or bigger than the fetch result length. 4.The min value of indexSet is less than 0."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('fetchResultGetObjectsByIndexSetDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    let indexSet: number[] = [0, 1];\n    let ret: photoAccessHelper.PhotoAsset[] = await fetchResult.getObjectsByIndexSet(indexSet);\n    console.info(`succeed. ${ret.length}`);\n  } catch (err) {\n    console.error(`fail. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getindex23",
      children: "getIndex23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getIndex(object: T): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定文件资产在文件检索结果中的索引。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的文件资产。"
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
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回查询结果。如果对象在文件检索结果中则返回对应的索引，不存在则返回-1。"
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('fetchResultGetIndexDemo');\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOption: photoAccessHelper.FetchOptions = {\n    fetchColumns: [],\n    predicates: predicates\n  };\n  try {\n    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);\n    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();\n    let ret: number = await fetchResult.getIndex(asset);\n    console.info(`succeed. ${ret}`);\n  } catch (err) {\n    console.error(`fail. error: ${err.code}, ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getrangeobjects23",
      children: "getRangeObjects23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRangeObjects(index: number, offset: number): Promise<T[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在文件检索结果中，从指定索引（第一个参数）开始，获取指定长度（第二个参数）的文件资产数组。使用Promise异步回调。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始获取的文件资产索引，大于等于0，小于文件检索结果中对象数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要获取的文件资产数量，大于0。  index和offset之和需要小于检索结果中的对象数量，否则抛出23800151错误码。"
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
            children: "Promise<T[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回Promise异步回调数组。"
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
        href: "/ref/media-library-api/media-library-errcode/errorcode-medialibrary/errorcode-medialibrary",
        children: "媒体库错误码"
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
            children: "23800151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The scenario parameter verification fails. Possible causes: index or offset validity check failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23800301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal system error. You are advised to retry and check the logs. Possible causes: 1. The database is corrupted. 2. The file system is abnormal."
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
        href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-f/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper",
        children: "photoAccessHelper.getPhotoAccessHelper"
      }), "的示例使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { dataSharePredicates } from '@kit.ArkData';\nimport { photoAccessHelper} from '@kit.MediaLibraryKit';\n\nasync function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {\n  console.info('getRangeObjectsDemo');\n  type PhotoAsset = photoAccessHelper.PhotoAsset;\n  let testNum: string = \"getRangeObjects_test_003\";\n  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();\n  let fetchOptions: photoAccessHelper.FetchOptions = {\n      fetchColumns: [],\n      predicates: predicates\n  };\n  let fetchResult1: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n  let fetchResult2: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =\n      await phAccessHelper.getAssets(fetchOptions);\n  let count: number = fetchResult1.getCount();\n  const half: number = Math.ceil(count / 2);\n  let promises: Promise<PhotoAsset[]>[] = [];\n  promises[0] = fetchResult1.getRangeObjects(0, half);\n  promises[1] = fetchResult2.getRangeObjects(half, count - half);\n  let photoAssetsArray: PhotoAsset[][] = await Promise.all(promises);\n  let photoAssets: PhotoAsset[] = photoAssetsArray[0].concat(photoAssetsArray[1]);\n  console.info('photoAssets length: ', photoAssets.length);\n}\n"
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
534901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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