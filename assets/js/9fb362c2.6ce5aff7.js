"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["104253"], {
982285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_fast_kit_guide_fast_segment_map_fast_segment_map_md_9fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-fast-kit-guide-fast-segment-map-fast-segment-map-md-9fb.json
var site_docs_system_basicfun_fast_kit_guide_fast_segment_map_fast_segment_map_md_9fb_namespaceObject = JSON.parse('{"id":"system-basicfun/fast-kit-guide/fast-segment-map/fast-segment-map","title":"使用SegmentMap查询维护区间信息","description":"FAST Kit提供Segment Map用于查询维护区间信息，实现数据序列区间段的快速更新和快速查询。线段表（Segment Map）是一种用于高效处理区间段信息的数据结构，适用于需要频繁对数据序列的某个区间段进行统计或修改的场景。其典型操作包括单点修改、区间修改、区间查询等。","source":"@site/docs/system-basicfun/fast-kit-guide/fast-segment-map/fast-segment-map.md","sourceDirName":"system-basicfun/fast-kit-guide/fast-segment-map","slug":"/system-basicfun/fast-kit-guide/fast-segment-map/","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-segment-map/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用SegmentMap查询维护区间信息","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-segment-map","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"FAST Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-introduction/"},"next":{"title":"使用RectPartition求解矩形划分","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-rect-partition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/fast-kit-guide/fast-segment-map/fast-segment-map.md


const frontMatter = {
	title: '使用SegmentMap查询维护区间信息',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-segment-map',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SegmentMap查询维护区间信息';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用segmentmap查询维护区间信息",
        children: "使用SegmentMap查询维护区间信息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAST Kit提供Segment Map用于查询维护区间信息，实现数据序列区间段的快速更新和快速查询。线段表（Segment Map）是一种用于高效处理区间段信息的数据结构，适用于需要频繁对数据序列的某个区间段进行统计或修改的场景。其典型操作包括单点修改、区间修改、区间查询等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["线段表有多种实现方式，其中最常见的是使用二分树的方案，也被称为线段树（Segment Tree）。与直接遍历区间相比，线段表能将许多区间操作的时间复杂度从 ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(123550)/* ["default"] */.A) + "",
        width: "45",
        height: "23"
      }), " 优化至", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(189897)/* ["default"] */.A) + "",
        width: "76",
        height: "24"
      }), "，在处理大规模数据时优势显著，为构建高性能、响应迅速的应用程序提供数据结构基础。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
        children: "接口文档"
      }), "。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libfast_ads.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_CreateConfig生成线段表配置实例（FAST_SegmentMapConfig）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_SetQueryType设置查询类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_SetUpdateType设置更新类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_Create生成线段表实例 （FAST_SegmentMapHandle）。生成实例之后，无法再修改查询和更新类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_Query进行高效区间查询操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_Update进行高效区间更新操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_Destroy销毁线段表实例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_SegmentMap_DestroyConfig销毁线段表配置实例。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cassert>\n#include <iostream>\n#include \"FASTKit/fast_ads_segment_map.h\"\n\nFAST_ErrorCode demoSegmentMapSumSet()\n{\n    FAST_SegmentMapConfig *config = nullptr;\n    FAST_SegmentMapHandle handle = nullptr;\n    int32_t *array = nullptr;\n    FAST_ErrorCode ret;\n\n    ret = HMS_FAST_SegmentMap_CreateConfig(&config);\n    if (ret != FAST_ERROR_CODE_SUCCESS) {\n        return ret;\n    }\n\n    do {\n        // 初始化配置\n        ret = HMS_FAST_SegmentMap_SetQueryType(config, FAST_SEGMENTMAP_QUERY_TYPE_SUM);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n\n        ret = HMS_FAST_SegmentMap_SetUpdateType(config, FAST_SEGMENTMAP_UPDATE_TYPE_SET);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n\n        // 初始化数组\n        size_t size = 10;\n        array = new int32_t[size];\n        for (size_t i = 0; i < size; ++i) {\n            array[i] = i + 1;\n        }\n        // array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}\n\n        // 创建线段表实例\n        ret = HMS_FAST_SegmentMap_Create(&handle, size, array, config);\n        // 线段表初始化为 {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n\n        int32_t result;\n\n        // 第一次查询：查询区间[0, 5)的求和值\n        ret = HMS_FAST_SegmentMap_Query(handle, 0, 5, &result);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        assert(result == 15);  // 1 + 2 + 3 + 4 + 5 = 15\n\n        // 第一次更新：将区间[3, 7)的值设置为-1\n        ret = HMS_FAST_SegmentMap_Update(handle, 3, 7, -1);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        // 线段表更新为 {1, 2, 3, -1, -1, -1, -1, 8, 9, 10}\n\n        // 第二次查询：查询区间[0, 5)的求和值\n        ret = HMS_FAST_SegmentMap_Query(handle, 0, 5, &result);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        assert(result == 4);  // 1 + 2 + 3 - 1 - 1 = 4\n\n        // 第二次更新：将区间[5, 9)的值设置为2\n        ret = HMS_FAST_SegmentMap_Update(handle, 5, 9, 2);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        // 线段表更新为 {1, 2, 3, -1, -1, 2, 2, 2, 2, 10}\n\n        // 第三次查询：查询区间[0, 10)的求和值\n        ret = HMS_FAST_SegmentMap_Query(handle, 0, 10, &result);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        assert(result == 22);  // 1 + 2 + 3 -1 -1 + 2 + 2 + 2 + 2 + 10 = 22\n\n        // 第三次更新：将区间[0, 3)的值设置为0\n        ret = HMS_FAST_SegmentMap_Update(handle, 0, 3, 0);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        // 线段表更新为 {0, 0, 0, -1, -1, 2, 2, 2, 2, 10}\n\n        // 第四次查询：查询区间[3, 7)的求和值\n        ret = HMS_FAST_SegmentMap_Query(handle, 3, 7, &result);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        assert(result == 2);  // -1 -1 + 2 + 2 = 2\n\n        // 第四次更新：将区间[7, 10)的值设置为5\n        ret = HMS_FAST_SegmentMap_Update(handle, 7, 10, 5);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        // 线段表更新为 {0, 0, 0, -1, -1, 2, 2, 5, 5, 5}\n\n        // 第五次查询：查询区间[0, 10)的求和值\n        ret = HMS_FAST_SegmentMap_Query(handle, 0, 10, &result);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            break;\n        }\n        assert(result == 17);  // 0 + 0 + 0 -1 -1 + 2 + 2 + 5 + 5 + 5 = 17\n    } while (0);\n\n    // 销毁线段表实例\n    HMS_FAST_SegmentMap_Destroy(handle);\n\n    // 销毁配置\n    HMS_FAST_SegmentMap_DestroyConfig(config);\n\n    // 释放数组\n    if (array) {\n        delete[] array;\n    }\n\n    return ret;\n}\n"
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
189897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAYCAYAAABQiBvKAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE/ElEQVR42u2YbWiVZRjHf89zjmfuJXVmztLeEPJlG0nRFtTmkVoWVmIso9kwWrSiQvpQkVAhURkhRvihgqSNPmVW9qoIS8gVlRUUObQsKyOSwt7M1tyevvxvuLh5znmenXlGwm4YO8/9cl3XfV3/639f9w0TbaKdjC0AQu87o///pxaWsrHRCLcKRvQXJzMq8l3u5gITAMOejTZwbiwssI8xGZDW4aFZM898B0ArMKuEQJWznTVa8GRToGoYqACuB1qASgl/GdjmKRwBpgMdwAfqXwDcDdwBXAO8WSbUOZm3AkuAHPASsEUBHAbmAg/IxhxwBHgX6NH4mOxy6FgK9APrgXpFpR04BDwtp4dSNhV4Dmg2SKsAlsuQyzzZLkWyRTgu0Hg2Ae1u7nSgSfo+l2Mcp+Zk20FgJVANdAFPSn5QKvrdhm4H/gJWxMy5QUYtM30bgQ3GWU5Os9DXZuQHKdI8KJAV2QKE7Rw6D9gODAKL1TdJ/y8BHvV0vCpkkiIoBZ3VLofcYhQGJlrnCsYbNd4g1DUb5DhZl0pWW4xR1ykwS71NOGdVAauAbmBRykPsNlHIHuBFT+fD0hkYSloFfAVMS+KzMEbhCDAT2AS8B7ygece1aTenRr+rtfYm4BgwoHnFTp5hYLY206D5jwA7gTrDIwuAN4DzlU7PCg29wNXe5hz/VABzgF3iphXA6dJZo9+faq7T84nsuXK0h5KLwv0S1hGDCMc1KzVnjfo/FtfF1WIOYVcYGVvFd67VAb/KIW7dNqEEE5QIWC00hDHomg+sM6n5B3CvvhcDj3mZAnAq8COwOak+C2PQlQGukqI+jUXenAi4UajrE7RnasNOblQkZRYC1wKvaW4l8DPwjJDTqHnnqR9gMrBbdgXAbwX4rlGkDrBPqF2t8YXAAdlmbfwH+AU4x9tvosMioFYLvzUOiDxHNGpjW4EvgBniuKGUSK6Xkwcl77j071O/q496xInztalW2fBlzMYcXTQAH5r+54W0NiGpP2btEPC3QW1UKC2znkLHL5H4aMgIsBXxBtUwa/X9u07TWs94YngGoQPg7JgUPgZ8r771QkUP8I3S9malf2DscTbWicO+NnL7gL3AE8A7wH6zNjAUMRk4bPoT6zGb05uAf4EzY+ZtloPyHr/tAD7zaiz3+0I5v0XftUJwvyd7nfoq9d1p+CeXArmXi+d8/WsMjVibncNOA34yJVHqO6YVsAd4H7hYKbJEJ9Yuwd6/X3aLOGd7Y1XAXTL4IWCKxpcpKE/pVGtT1d1kbNkibnkbeAt4RQFr8uytUtp+JNTXSLc7oOqFsrneOmf7BUrJliSHZQo47aiO7ik6lvNCW6/qmMMxl9aDOlX3iosmiZsuUk00oIPhT6XFfp2CeTlrGvCg1mcl+6jWB8ApwBlyTLcC94PGFgH3iRNnyL4DxsYj4r0B2eTzdoec/HipV6OkOiRT4PDo1P0tSCEnKHIQBdrAWvESpnieqjTtHONF3q2rFoJbS33yIeaeV+w64jvtTlXaGcMjWW3WlxF698TABKNL1Xeczi6lmb0VFNJRrEiv0MNAe1rnn+hnFgfxvFJhdwlvTS6N8uKs73TjcDQwSwfM60k1U4KNlbqOHRJfp3oXK8e7lL2iDI5RxhzgHpUWQ6r5esWRJ+K1Naf6brwfOcsSiGCcAh2O98bK7fiMQUBkrmYT7WRo/wFVQxvtgk2ypAAAAABJRU5ErkJggg==");

},
123550(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAXCAYAAACf+8ZRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADB0lEQVR42u3W24uVVRgG8N+3t8OYo5SOqRNGYtBJKYsO2ImIisS66YBXkeCFEB1ooAi6SOYPCKIoooyiCDoQRBB0V0RFDYJQF3YRpoXSiSA0oZzZ3TxfLL72N7O3E1bQgs3+1lrv+7zPek9r8f/4b48OqhPQq6K74FGh22e92yJbDYA3iM1qIYRL5SX5zTcuw5oCYwSntBDvFntnY/N84IvmCfFsvrfiRpwWI+N4Ea9Hrhcii7ADX+GLyM7iFmzDJryKqWLvHOzC5TiIPbgAL2W/l99AHobleAPv4KpifyuOYLKRKlO4vwVrBF/jR6xqOO1CvIfTM38kWIOm05+FsBp78W4jlDXBp3AME5lvwWcYa6RVXZSb8Cx+ws4G6R24p7Axho9xU4PTXycB72V9dzxyZ2FgpgDej8VYn7VJTONogVNiXomX44SdwZiJrfNz4Lp7HMXneDgYvdLjbaTvSArsCkAXxwuAGZyZ+c/5vgafNMJZRXYUZ4TIbmzEtZFZl/29Rf5W+DR5vnEu0lUSv8K9+C653M9ri3EdDmNfQj+KbxpFUxs6N4f/BR8lt++O7BXBOF4UdQ/fYinOa+Z2p4+BNdgQrxxuVG9NejMuwgs56Nrs/9pSJxtwILq/45lEczzdY7qIYm3r+9ibaCu6kvQKLEv76RSnLy+Tqew/nfmxyIw08GejXxKDt3LAxyKzb44O9ttcpOuevD9hPqtIl5Hk5iyewNXYjkPRORi58QZ2N22sLtx6/QDexH34IWnTaeTuytg8NGi7uysA24u9dXgeX+KGRssaTypN9rn2Hwi58iBwfQhf3Oj13WA8mLxe1dI0+obldryPV0L2OTyUW7EE6RR9++1ibS2eTBSmcVvjQXQqHk1R93swvRab8xJuEu/kkplId2irhSqR+LCo9tHoLgnBZUNcbOvxQf6Hejy1veyqOYzdjMfTqoZxTjlGU6C3DuPlhbyh4ZK0s5VDeKmWW52H1aUng3DTc2PFE3aYd/HSPNKG1fvbPP5PY5ywx0+27r93/AFQkpq8HK/hsgAAAABJRU5ErkJggg==");

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