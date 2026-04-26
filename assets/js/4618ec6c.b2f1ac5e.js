"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["412592"], {
557021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_fast_api_fast_c_fast_kit_total_fast_kit_files_fast_kit_fast_ads_segment_map_8_h_fast_kit_fast_ads_segment_map_8_h_md_461_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-fast-api-fast-c-fast-kit-total-fast-kit-files-fast-kit-fast-ads-segment-map-8-h-fast-kit-fast-ads-segment-map-8-h-md-461.json
var site_docs_ref_system_basicfun_api_fast_api_fast_c_fast_kit_total_fast_kit_files_fast_kit_fast_ads_segment_map_8_h_fast_kit_fast_ads_segment_map_8_h_md_461_namespaceObject = JSON.parse('{"id":"system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-ads-segment-map-8h/fast-kit-fast-ads-segment-map-8h","title":"fast_ads_segment_map.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-ads-segment-map-8h/fast-kit-fast-ads-segment-map-8h.md","sourceDirName":"system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-ads-segment-map-8h","slug":"/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-ads-segment-map-8h/fast-kit-fast-ads-segment-map-8h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-ads-segment-map-8h/fast-kit-fast-ads-segment-map-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"fast_ads_segment_map.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-ads-segment-map-8h","kit":"系统","last_updated":"2026-04-22","slug":"fast-kit-fast-ads-segment-map-8h"},"sidebar":"ref","previous":{"title":"FAST","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast"},"next":{"title":"fast_common_def.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-common-def-8h/fast-kit-fast-common-def-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-ads-segment-map-8h/fast-kit-fast-ads-segment-map-8h.md


const frontMatter = {
	title: 'fast_ads_segment_map.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-ads-segment-map-8h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'fast-kit-fast-ads-segment-map-8h'
};
const contentTitle = 'fast_ads_segment_map.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "fast_ads_segment_maph",
        children: "fast_ads_segment_map.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线段表相关数据结构及函数定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <FASTKit/fast_ads_segment_map.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libfast_ads.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FAST.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
        children: "FAST"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype-1",
              children: "FAST_SegmentMapQueryType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype",
              children: "FAST_SegmentMapQueryType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段表支持的查询操作类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype-1",
              children: "FAST_SegmentMapUpdateType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype",
              children: "FAST_SegmentMapUpdateType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段表支持的更新操作类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig",
              children: "FAST_SegmentMapConfig"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig",
              children: "FAST_SegmentMapConfig"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段表的不透明配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle",
              children: "FAST_SegmentMapHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段表的句柄。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype-1",
              children: "FAST_SegmentMapQueryType"
            }), " { ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
              children: "FAST_SEGMENTMAP_QUERY_TYPE_SUM"
            }), " = 0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
              children: "FAST_SEGMENTMAP_QUERY_TYPE_MIN"
            }), " = 1, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
              children: "FAST_SEGMENTMAP_QUERY_TYPE_MAX"
            }), " = 2 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段表支持的查询操作类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype-1",
              children: "FAST_SegmentMapUpdateType"
            }), " { ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
              children: "FAST_SEGMENTMAP_UPDATE_TYPE_SET"
            }), " = 0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
              children: "FAST_SEGMENTMAP_UPDATE_TYPE_ADD"
            }), " = 1, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
              children: "FAST_SEGMENTMAP_UPDATE_TYPE_SUB"
            }), " = 2 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线段表支持的更新操作类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_createconfig",
              children: "HMS_FAST_SegmentMap_CreateConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig",
              children: "FAST_SegmentMapConfig"
            }), " **config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线段表的不透明配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_destroyconfig",
              children: "HMS_FAST_SegmentMap_DestroyConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig",
              children: "FAST_SegmentMapConfig"
            }), " *config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁线段表的不透明配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_setquerytype",
              children: "HMS_FAST_SegmentMap_SetQueryType"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig",
              children: "FAST_SegmentMapConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapquerytype-1",
              children: "FAST_SegmentMapQueryType"
            }), " type)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置线段表不透明配置中的查询类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_setupdatetype",
              children: "HMS_FAST_SegmentMap_SetUpdateType"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig",
              children: "FAST_SegmentMapConfig"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapupdatetype-1",
              children: "FAST_SegmentMapUpdateType"
            }), " type)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置线段表不透明配置中的更新类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_create",
              children: "HMS_FAST_SegmentMap_Create"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle",
              children: "FAST_SegmentMapHandle"
            }), " *handle, size_t size, const int32_t *array, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmapconfig",
              children: "FAST_SegmentMapConfig"
            }), " *config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线段表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_destroy",
              children: "HMS_FAST_SegmentMap_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle",
              children: "FAST_SegmentMapHandle"
            }), " handle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁线段表实例，释放内存，再次调用为未定义行为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_update",
              children: "HMS_FAST_SegmentMap_Update"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle",
              children: "FAST_SegmentMapHandle"
            }), " handle, size_t left, size_t right, int32_t value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新线段表的区间，根据配置按照赋值、加法、减法等操作更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_segmentmap_query",
              children: "HMS_FAST_SegmentMap_Query"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_segmentmaphandle",
              children: "FAST_SegmentMapHandle"
            }), " handle, size_t left, size_t right, int32_t *result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询线段表的区间，根据配置返回最大值、最小值、求和等数据。"
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