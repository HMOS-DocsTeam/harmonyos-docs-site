"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["857075"], {
383754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_insight_session_allocations_ide_insight_session_allocations_data_filtering_ide_insight_session_allocations_data_filtering_md_90d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-insight-session-allocations-ide-insight-session-allocations-data-filtering-ide-insight-session-allocations-data-filtering-md-90d.json
var site_docs_ide_insight_session_allocations_ide_insight_session_allocations_data_filtering_ide_insight_session_allocations_data_filtering_md_90d_namespaceObject = JSON.parse('{"id":"ide-insight-session-allocations/ide-insight-session-allocations-data-filtering/ide-insight-session-allocations-data-filtering","title":"内存分析数据筛选","description":"Allocation分析过程中提供多种数据筛选方式，方便开发者缩小分析范围，更精确地定位问题所在。","source":"@site/docs/ide-insight-session-allocations/ide-insight-session-allocations-data-filtering/ide-insight-session-allocations-data-filtering.md","sourceDirName":"ide-insight-session-allocations/ide-insight-session-allocations-data-filtering","slug":"/ide-insight-session-allocations/ide-insight-session-allocations-data-filtering/","permalink":"/harmonyos-docs-site/ide-insight-session-allocations/ide-insight-session-allocations-data-filtering/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"内存分析数据筛选","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations-data-filtering","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"内存分析介绍","permalink":"/harmonyos-docs-site/ide-insight-session-allocations/ide-insight-session-allocations-memory/"},"next":{"title":"启动时内存分析","permalink":"/harmonyos-docs-site/ide-insight-session-allocations/ide-insight-session-boot-memory/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-insight-session-allocations/ide-insight-session-allocations-data-filtering/ide-insight-session-allocations-data-filtering.md


const frontMatter = {
	title: '内存分析数据筛选',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations-data-filtering',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '内存分析数据筛选';

const assets = {

};



const toc = [{
  "value": "通过内存状态筛选",
  "id": "通过内存状态筛选",
  "level": 2
}, {
  "value": "通过统计方式筛选",
  "id": "通过统计方式筛选",
  "level": 2
}, {
  "value": "通过so库名筛选",
  "id": "通过so库名筛选",
  "level": 2
}, {
  "value": "通过搜索筛选",
  "id": "通过搜索筛选",
  "level": 2
}, {
  "value": "筛选内存分配堆栈",
  "id": "筛选内存分配堆栈",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "内存分析数据筛选",
        children: "内存分析数据筛选"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allocation分析过程中提供多种数据筛选方式，方便开发者缩小分析范围，更精确地定位问题所在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过内存状态筛选",
      children: "通过内存状态筛选"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1版本开始，支持对Native Allocation泳道、Graphic Memory泳道的内存状态信息进行过滤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1版本开始，支持对All Heap & Anonymous VM泳道、All Heap泳道、All Anonymous VM泳道、System Resources泳道"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graphic Memory泳道的内存状态信息进行过滤，便于开发者定位内存问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在泳道“Detail”区域左下方的下拉框中，可以选择过滤内存状态："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Allocations：详情区域展示当前框选时间段内的所有内存分配信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created & Existing：默认选中，详情区域展示当前框选时间段内分配未释放的内存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created & Released：详情区域展示当前框选时间段内分配已释放的内存。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789189)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1548",
        height: "639"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过统计方式筛选",
      children: "通过统计方式筛选"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在All Heap & Anonymous VM泳道、All Heap泳道、All Anonymous VM泳道、System Resources泳道、Graphic Memory泳道的“Statistics”页签中，可以打开“Native Size”选择统计方式以过滤统计数据："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native Size：详情区域按照对象的内存进行展示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native Library：详情区域按照对象的so库进行展示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(817939)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1543",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过so库名筛选",
      children: "通过so库名筛选"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非统计模式下，在All Heap & Anonymous VM泳道、All Heap泳道、All Anonymous VM泳道、System Resources泳道、Graphic Memory泳道的“Allocations List”页签中，可以单击“Click to choose”选择要筛选的so库以过滤出与目标so库相关的数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(19172)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "637"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过搜索筛选",
      children: "通过搜索筛选"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在All Heap & Anonymous VM泳道、All Heap泳道、All Anonymous VM泳道、System Resources泳道、Graphic Memory泳道的页签中， 根据界面提示信息输入需要搜索的项目，可定位到相关内容位置，使用搜索框的<、>按键可依次显示搜索结果的详细内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(675193)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1545",
        height: "637"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "筛选内存分配堆栈",
      children: "筛选内存分配堆栈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在All Heap & Anonymous VM泳道、All Heap泳道、All Anonymous VM泳道、System Resources泳道、Graphic Memory泳道的Call Trees页签中，可以通过底部的“Call Trees”和“Constraints”选择框筛选和过滤内存分配栈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Call Trees选择框包含两种过滤条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate by Allocated Size：在内存分配栈完全相同的情况下，会按照每次分配栈申请的内存大小将栈分开；System Resources泳道中不包含该过滤条件；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hide System Libraries：隐藏内存分配栈中的系统堆栈。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(130989)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“Category”字段表示函数调用类型，将调用栈类型归类如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS：程序正在执行ArkTS代码；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NAPI：程序正在执行的NAPI代码；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native：程序正在执行的Native代码；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native(G)：程序正在执行的Native代码所申请的Global Handle对象，DevEco Studio 6.1.0 Beta2版本新增；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native(L)：程序正在执行的Native代码所申请的Local Handle对象，DevEco Studio 6.1.0 Release版本新增；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中每一个类型的亮色和灰色分别代表开发者和系统的代码。其中，亮色代表开发者自定义的代码，灰色代表直接使用模板中代码。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555593)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "636"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constraints选择框也包含了两种过滤条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count：根据指定的内存申请次数过滤内存分配栈信息；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bytes：根据指定的内存申请大小过滤内存分配栈信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(25685)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1543",
        height: "639"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Call Trees页签的More区域，单击“Heaviest Stack”旁的隐藏按钮可以单独控制是否显示More区域最大内存分配栈中的系统堆栈。System Resources泳道中不包含Bytes字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(964606)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1546",
        height: "638"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Call Trees页签，可以通过底部的“Flame Chart”切换到火焰图视图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678423)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1547",
        height: "637"
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
25685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753788-09a9129c37eb4c8d2f6e9c9249b10acb.png");

},
678423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753725-871ab743197e3306763f936f8ca6b314.png");

},
789189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753792-af6ef82eccb5894262f8fcb77c953d2b.png");

},
964606(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913778-300306cc110e052c9c1b63549db9fd75.png");

},
555593(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913782-816c616bf691b815d83869c9cd412260.png");

},
675193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833709-25a7554fab7eb80824f2b4197434b665.png");

},
130989(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
19172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833705-eebc6af96594af002b1d9469def6aaa7.png");

},
817939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753729-6da73072c53075f0b3da823fba39c62d.png");

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