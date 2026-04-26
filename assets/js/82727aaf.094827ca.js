"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["956992"], {
817080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_appendix_ide_operation_and_services_ide_operation_and_services_md_827_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-appendix-ide-operation-and-services-ide-operation-and-services-md-827.json
var site_docs_ide_appendix_ide_operation_and_services_ide_operation_and_services_md_827_namespaceObject = JSON.parse('{"id":"ide-appendix/ide-operation-and-services/ide-operation-and-services","title":"运维服务","description":"DevEco Studio支持对崩溃问题进行定位以及对崩溃，卡顿，丢帧，能耗等异常进行数据分析。","source":"@site/docs/ide-appendix/ide-operation-and-services/ide-operation-and-services.md","sourceDirName":"ide-appendix/ide-operation-and-services","slug":"/ide-appendix/ide-operation-and-services/","permalink":"/harmonyos-docs-site/ide-appendix/ide-operation-and-services/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"运维服务","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-operation-and-services","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"Terminal环境变量说明","permalink":"/harmonyos-docs-site/ide-appendix/ide-environment-variable/"},"next":{"title":"DevEco Studio配置参数列表","permalink":"/harmonyos-docs-site/ide-appendix/ide-configuration-parameter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-appendix/ide-operation-and-services/ide-operation-and-services.md


const frontMatter = {
	title: '运维服务',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-operation-and-services',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '运维服务';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "页面布局",
  "id": "页面布局",
  "level": 2
}, {
  "value": "Reports",
  "id": "reports",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics",
  "level": 2
}, {
  "value": "Crash分析",
  "id": "crash分析",
  "level": 3
}, {
  "value": "Frame Loss分析",
  "id": "frame-loss分析",
  "level": 3
}, {
  "value": "Launch分析",
  "id": "launch分析",
  "level": 3
}, {
  "value": "Battery Usage分析",
  "id": "battery-usage分析",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "运维服务",
        children: "运维服务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持对崩溃问题进行定位以及对崩溃，卡顿，丢帧，能耗等异常进行数据分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面布局",
      children: "页面布局"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在DevEco Studio菜单栏点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "View > Tool Windows > Operation Analyzer"
        })
      }), "，进入运维服务页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(960435)/* ["default"] */.A) + "",
        width: "634",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add account"
        })
      }), "按钮，登录华为账号并授权后，可以查看当前账号下应用异常情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(4921)/* ["default"] */.A) + "",
        width: "1873",
        height: "907"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前页面共分为两个部分。页面左侧为菜单栏，右侧为数据内容展示区："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["菜单栏：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "1号区域：可选择当前账号下存在的应用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "2号区域：Reports展示数据详情，用于定位具体问题。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3号区域：Metrics区域展示Crash，Frame Loss，Launch， Battery Usage异常数据的变化趋势****。****"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["内容展示区顶部可选择配置项包含：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "时间：通过时间维度过滤当天到最近三个月的异常情况和数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用版本：当前存在异常数据的应用版本。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统版本：当前存在异常数据的系统版本。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设备类型：展示当前应用支持的设备类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "手机型号：当前存在异常数据的手机型号。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315128)/* ["default"] */.A) + "",
        width: "1897",
        height: "852"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reports",
      children: "Reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示具体的崩溃详情。Stack页签支持混淆的代码还原，并可跳转到具体的代码行查找问题。System load页签展示崩溃的CPU和内存信息。FaultLog页签展示崩溃的故障日志信息，添加符号表后支持还原日志的堆栈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1号区域：展示崩溃问题列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2号区域：通过tab切换展示堆栈、系统内存的具体信息、故障日志信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3号区域：当前选中的问题有多个不同的异常点，通过分页切换具体定位****。****"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["4号区域：符号表配置按钮。点击按钮将当前选中的堆栈还原为原始代码，选中带有路径的代码行，然后可以点击最右侧的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open in project"
          })
        }), "按钮跳转到应用中问题所在位置。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5号区域：展示当前设备信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6号区域：可以切换不同设备型号及时间段查看崩溃发生的分布情况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7号区域：展示崩溃日志的CPU以及内存信息。该功能从DevEco Studio 5.1.0 Release版本开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["8号区域：展示故障日志的所有信息。支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-publish-app#section97874500234",
          children: "上传符号表"
        }), "后将现有堆栈信息还原为源码的堆栈。该功能从DevEco Studio 5.1.0 Release版本开始支持。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46943)/* ["default"] */.A) + "",
        width: "1874",
        height: "904"
      }), (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(320968)/* ["default"] */.A) + "",
        width: "983",
        height: "331"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(281038)/* ["default"] */.A) + "",
        width: "1016",
        height: "475"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crash分析",
      children: "Crash分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示应用崩溃次数和崩溃率情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1号区域：通过tab页签可切换All，JsError（JavaScript崩溃错误），CppCrash（C++崩溃错误），OOM（内存导致的崩溃），ProcessKill（系统被强制终止），查看不同维度的崩溃次数、崩溃率进行分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2号区域：通过柱状图展示不同维度在所有的崩溃异常中的占比。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(508015)/* ["default"] */.A) + "",
        width: "1870",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(536169)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ProcessKill将通过柱状图和饼图联动，点击柱状图，通过饼图展示具体某个时间段的ProcessKill的类型分布。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frame-loss分析",
      children: "Frame Loss分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对连续丢帧情况进行多维度统计，便于迅速的定位问题所在位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1号区域：丢帧总览是统计最大维度的连续丢帧率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "<6：连续低于6帧的丢帧率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6-15：连续大于6帧，小于15帧的丢帧率。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "15：连续大于15帧的连续丢帧率。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2号区域：按照Page，Scenes两个维度展示丢帧异常率TOP N的页面或者场景。点击饼图上的某个区域，将展示具体页面或者场景的连续丢帧率情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(336643)/* ["default"] */.A) + "",
        width: "1865",
        height: "920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "launch分析",
      children: "Launch分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统计设备启动在不同维度的情况，帮助分析异常问题的分布情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1号区域：通过页签可切换查看启动整体耗时（All）、冷启动（Cold Launch）耗时、热启动（Hot Launch）耗时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2号区域：通过折线图形式展示整体耗时趋势。以下图为例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AVG表示当前时间节点下各启动阶段的平均耗时。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P50表示当前时间节点下，50%的启动阶段耗时低于纵坐标显示的579ms。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P75表示当前时间节点下，75%的启动阶段耗时低于纵坐标显示的582ms。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P90表示当前时间节点下，90%的启动阶段耗时低于纵坐标显示的585ms。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P99表示当前时间节点下，99%的启动阶段耗时低于纵坐标显示的585ms。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "柱状图展示耗时异常的上报量（Reported Quantity）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3号区域：展示各启动阶段的耗时，通过点击阶段名可查看各时间段具体耗时情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4号区域：展示启动当前阶段在不同时间段的耗时趋势。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721014)/* ["default"] */.A) + "",
        width: "1867",
        height: "908"
      }), (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283286)/* ["default"] */.A) + "",
        width: "1532",
        height: "523"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "battery-usage分析",
      children: "Battery Usage分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于统计设备的总能耗以及前后台的能耗和耗电时长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1号区域：能耗概览。通过折线图展示总能耗，前台能耗，后台能耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2号区域：展示前台能耗和耗电时长随Top 5设备器件分布情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3号区域：展示后台能耗和耗电时长随Top 5设备器件分布情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153784)/* ["default"] */.A) + "",
        width: "1869",
        height: "919"
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
721014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833529-7af0f56d2dd70e5584a4907a3052c4b3.png");

},
281038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753610-1799067e95b2b26d57887c5776595008.png");

},
46943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753555-6857cbf8d476c2fcc92d6384a9ee51fb.png");

},
508015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753547-1f0720c4b6e8cb6521a46e998443bdf2.png");

},
336643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833525-1d685fe8bf9cedce09d3ff583604e98c.png");

},
536169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
960435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753600-928bbfccb2bde87f7a49fcb085498f8e.png");

},
320968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833521-3cb275cc320854829f89792ffd5ad70d.png");

},
153784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753596-37169f9d01c62acec09b75c93b5eaa48.png");

},
283286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753553-b0145c19de840fd9874e86bdc7c5ff67.png");

},
4921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753535-7f92896226b5de586c67018de5cf81c6.png");

},
315128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833519-53282e8b59daba4688d1b5e95fea6bb0.png");

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