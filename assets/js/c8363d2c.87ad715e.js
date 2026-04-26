"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["372394"], {
667925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_fast_kit_guide_fast_rect_partition_fast_rect_partition_md_c83_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-fast-kit-guide-fast-rect-partition-fast-rect-partition-md-c83.json
var site_docs_system_basicfun_fast_kit_guide_fast_rect_partition_fast_rect_partition_md_c83_namespaceObject = JSON.parse('{"id":"system-basicfun/fast-kit-guide/fast-rect-partition/fast-rect-partition","title":"使用RectPartition求解矩形划分","description":"矩形划分求解器（Rectangular Partition Solver）用于解决矩形划分问题。其接收若干个彼此不相交的矩形作为输入（主要关注这些矩形共同定义的区域的并集），计算出覆盖相同区域的矩形划分方案，并使输出的矩形数量尽可能少（但不保证最优）。形如下方示意图。","source":"@site/docs/system-basicfun/fast-kit-guide/fast-rect-partition/fast-rect-partition.md","sourceDirName":"system-basicfun/fast-kit-guide/fast-rect-partition","slug":"/system-basicfun/fast-kit-guide/fast-rect-partition/","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-rect-partition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用RectPartition求解矩形划分","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-rect-partition","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SegmentMap查询维护区间信息","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-segment-map/"},"next":{"title":"Function Flow Runtime Kit概述","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/fast-kit-guide/fast-rect-partition/fast-rect-partition.md


const frontMatter = {
	title: '使用RectPartition求解矩形划分',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-rect-partition',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RectPartition求解矩形划分';

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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用rectpartition求解矩形划分",
        children: "使用RectPartition求解矩形划分"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩形划分求解器（Rectangular Partition Solver）用于解决矩形划分问题。其接收若干个彼此不相交的矩形作为输入（主要关注这些矩形共同定义的区域的并集），计算出覆盖相同区域的矩形划分方案，并使输出的矩形数量尽可能少（但不保证最优）。形如下方示意图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(231042)/* ["default"] */.A) + "",
        width: "643",
        height: "166"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其相关定义如下：一个矩形", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(125761)/* ["default"] */.A) + "",
        width: "165",
        height: "22"
      }), "为二维网格内横纵坐标满足", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(845883)/* ["default"] */.A) + "",
        width: "207",
        height: "24"
      }), "的所有单元矩形构成的集合（坐标系说明：X轴从左到右递增，Y轴从上到下递增）。两个矩形相交，当且仅当它们共享至少一个公共的单元矩形。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在矩形划分问题（Rectangular Partition Problem）中，给定N个彼此不相交的矩形，要求输出M个矩形，使其满足如下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输出的M个矩形彼此不相交。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输出的M个矩形的并集与输入的N个矩形的并集完全相同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输出的矩形数量M尽可能少。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["矩形划分求解器运行的时间复杂度为 ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914076)/* ["default"] */.A) + "",
        width: "71",
        height: "19"
      }), "，可以高效处理大规模输入数据。在网格数据处理和空间几何计算等优化场景中，可以使用矩形划分求解器提升区域处理效率，减少冗余空间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
        children: "接口文档"
      }), "。"]
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
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_createconfig",
              children: "HMS_FAST_RectPartition_CreateConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " **config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建矩形划分求解器的不透明配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_destroyconfig",
              children: "HMS_FAST_RectPartition_DestroyConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " *config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁矩形划分求解器的不透明配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_setalgo",
              children: "HMS_FAST_RectPartition_SetAlgo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " *config, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置矩形划分求解器使用的算法。目前仅支持扫描线算法“SweepLineAlgo”，输出数量尽可能少（不保证最优性）的不相交矩形集合，复杂度为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_solve",
              children: "HMS_FAST_RectPartition_Solve"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " *config, size_t size, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect",
              children: "FAST_Rect"
            }), " *origin, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect",
              children: "FAST_Rect"
            }), " *result, size_t *resultSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在指定不透明配置下解决矩形划分问题。函数接收若干个彼此不相交的矩形作为输入，计算出覆盖相同区域的矩形划分方案，并使输出的矩形数量尽可能少。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  1. 输入须保证矩形两两不相交（即任意两个矩形满足： 或 或或 ），否则函数返回FAST_ERROR_CODE_ILLEGAL_INPUT。  2. 函数能保证输出矩形的数量小于等于输入矩形的数量。"]
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
          children: "调用HMS_FAST_RectPartition_CreateConfig生成矩形划分求解器配置实例（FAST_RectPartitionConfig）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_RectPartition_SetAlgo设置求解算法为“SweepLineAlgo”（扫描线算法）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_RectPartition_Solve计算矩形划分方案。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用HMS_FAST_RectPartition_DestroyConfig销毁矩形划分求解器配置实例。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdio>\n#include <cstdlib>\n#include \"FASTKit/fast_solver_rect_partition.h\"\n\n// 定义一个函数来打印矩形\nvoid print_rect(const FAST_Rect* rect) {\n    printf(\"Rect: left=%d, top=%d, right=%d, bottom=%d\\n\",\n           rect->left, rect->top, rect->right, rect->bottom);\n}\n\nFAST_ErrorCode rect_partition_demo() {\n    // 定义输入矩形\n    FAST_Rect origin[] = {\n        {1, 4, 1, 6},\n        {2, 1, 2, 6},\n        {3, 1, 3, 3}\n    };\n    size_t size = sizeof(origin) / sizeof(FAST_Rect);\n\n    // 定义输出矩形\n    FAST_Rect* result = (FAST_Rect*)malloc(size * sizeof(FAST_Rect));\n    size_t result_size = 0;\n\n    FAST_RectPartitionConfig* config = nullptr;\n    FAST_ErrorCode ret;\n\n    do {\n        // 创建配置\n        ret = HMS_FAST_RectPartition_CreateConfig(&config);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            printf(\"Failed to create config: %d\\n\", ret);\n            break;\n        }\n\n        // 设置算法\n        ret = HMS_FAST_RectPartition_SetAlgo(config, \"SweepLineAlgo\");\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            printf(\"Failed to set algorithm: %d\\n\", ret);\n            break;\n        }\n\n        // 计算矩形划分方案\n        ret = HMS_FAST_RectPartition_Solve(config, size, origin, result, &result_size);\n        if (ret != FAST_ERROR_CODE_SUCCESS) {\n            printf(\"Failed to solve: %d\\n\", ret);\n            break;\n        }\n\n        // 打印结果\n        printf(\"Resulting rectangles(result_size=%ld):\\n\", result_size);\n        for (size_t i = 0; i < result_size; ++i) {\n            print_rect(&result[i]);\n        }\n        /*\n            Resulting rectangles(result_size=2):\n            Rect: left=1, top=4, right=2, bottom=6\n            Rect: left=2, top=1, right=3, bottom=3\n        */\n\n    } while (0);\n\n\n    // 销毁配置\n    HMS_FAST_RectPartition_DestroyConfig(config);\n\n    // 释放数组\n    free(result);\n\n    return ret;\n}\n"
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
845883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
914076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAATCAYAAADCrxD+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEY0lEQVR42u2YW4ydUxTHf993ZqZhZsSdtoyW6o10gkFc4hK3uqUEE5eGpBpqSB9KSBNqojwQ8cAD4lKRqXigHjw06hJN6gHVIKOaxqVCqPttWqaZc46X32627XznTMeZerGTyZdv733WWnut//+/9jfw/ygcpSbZyfwb68j/o/P/q7jzJPC8xkGyOo5LBTaz3ZiAvCD5+SjOMCpUpRnOEgedwMRRJqyWjWOASWMNtAEy6o1DgfaivaU62a4A04DrgfOBC4ALgUHgt2jPkcBcYDOw3fmFwB3AGcDqyPF1wAPAWcDHwI/AxcBLwIfAR8ZUbYCwLFqvFiRkojEsBUaMOwf2BZY7fzhwGPCTf9loEXMD8DpwrkZLwDJgE3Cwc4cATwAHJUED9Bv47MhpBzAATIn8tWnz8sh/XqeI6VpLnSJnFuH9hOZnA49E6HnaZP6NIXkNxJSBmzzcAmCNa2XgXuAA4ApRsxT4HPjWIKvOtwNfAW8Ct0TVnQO8DWxJDlSNggo2ZgInA3vrO6xXnDsFmCoqygV6MhN41njO8bcAs4DntPkl8AlwexLHP8S2AkwHHgZuA74AWqPD7emeTlFwkejKnA+GjwC2AXcB84D9ne+RPlmdrlHR92Xuf0VUhcBPBx4Hjgbus+p3SpdUO06QsquBG7XRIdI3RjbfAC4RPZVaAh4mnrSybVHQJZ89GjwTOBX4tYBSV1n1TB3pc365VY8PEWh1ZaRLa6K4rgGG1AeA99QSFPIh4ykliWkDlvg8HvhO1Hc7HyiJzeB3tXUnjfMo0IqbT5MOOyLBC88FOnlLIR5WhGN6lKzAZ74PAFcDMxS9Xwpaa0DntepEbjwvGvg817d5SBT0P6R1OUFgl5TbAay34PNN8geJzyHPMYkG4tahXmRSqkUn3ULzVh2WXW9L7hNT3L/V+ZXSqh9YW6cBhO6zB7BfpA8jJmfY90XASaLnbuAhO2UocBD0bpMckvAYsBg4Fng3SU4AyHCjW+pTwIZkbY7C2x/N9YiE6cnv50opTB7AM8CnEYxTbRi0pSMFY3R0SaVpvi9Wg2YBk+vcxfosdBjtwPfAgzW64lTgBzWq5o09GN8HeAFYIcSXWP1Lkwq3AOuA3kise9WYewwm6MB5inNKZTxoGVjlnaNklV/T//2KZRgr1LqNImODGhdsd+l/k35jdC7zjpVF15PMs62zmDuTXKtrBKidCOxlIO8kHS08e70HLQQmKHxhfT3wZxRca/Qej+MiOm1WP5AWB5rsr7VRMZktwM/Sb7JtfRHwjQ3iKLVou/oSzjlBmo4k53lUyj8fze3Sx1ipgIY3R5Ro1pU/hXVrRNmXa/xmvrqW7aIf7HR9tfxmDT7YsuhSVuSgauW2qksh85U6qCz6EK1Ee/Lk/lRV+wbsUoMROlYlCMmTC2UaQ3jO8La/tlZ8WZMqXW0Exyb66bCtdyqir0r9ouQ3+mIfz5ib/iU9Fj/ZeMS+O/+v0swElRLaVMfD0V/0QAJy0ZT5EQAAAABJRU5ErkJggg==");

},
231042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
125761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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