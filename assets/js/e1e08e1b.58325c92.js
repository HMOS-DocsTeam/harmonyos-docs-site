"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["972027"], {
281146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_optimized_ide_hvigor_build_analyzer_ide_hvigor_build_analyzer_md_e1e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-optimized-ide-hvigor-build-analyzer-ide-hvigor-build-analyzer-md-e1e.json
var site_docs_ide_build_optimized_ide_hvigor_build_analyzer_ide_hvigor_build_analyzer_md_e1e_namespaceObject = JSON.parse('{"id":"ide-build-optimized/ide-hvigor-build-analyzer/ide-hvigor-build-analyzer","title":"分析构建过程","description":"Build Analyzer可以展示编译构建过程的重要信息，开发者能够通过Build Analyzer的可视化分析来排查构建过程中的性能和内存问题。","source":"@site/docs/ide-build-optimized/ide-hvigor-build-analyzer/ide-hvigor-build-analyzer.md","sourceDirName":"ide-build-optimized/ide-hvigor-build-analyzer","slug":"/ide-build-optimized/ide-hvigor-build-analyzer/","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-build-analyzer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"分析构建过程","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-analyzer","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"实践说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample/"},"next":{"title":"守护进程","permalink":"/harmonyos-docs-site/ide-build-optimized/ide-hvigor-daemon/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-optimized/ide-hvigor-build-analyzer/ide-hvigor-build-analyzer.md


const frontMatter = {
	title: '分析构建过程',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-analyzer',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '分析构建过程';

const assets = {

};



const toc = [{
  "value": "进入Build Analyzer",
  "id": "进入build-analyzer",
  "level": 2
}, {
  "value": "查看构建历史记录",
  "id": "查看构建历史记录",
  "level": 2
}, {
  "value": "查看构建任务时间图谱",
  "id": "查看构建任务时间图谱",
  "level": 2
}, {
  "value": "查看构建任务占比图谱",
  "id": "查看构建任务占比图谱",
  "level": 2
}, {
  "value": "查看构建过程内存消耗曲线图",
  "id": "查看构建过程内存消耗曲线图",
  "level": 2
}, {
  "value": "导出日志",
  "id": "导出日志",
  "level": 2
}, {
  "value": "导入日志",
  "id": "导入日志",
  "level": 2
}, {
  "value": "设置构建分析模式",
  "id": "设置构建分析模式",
  "level": 2
}, {
  "value": "生成构建可视化html文件",
  "id": "生成构建可视化html文件",
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
        id: "分析构建过程",
        children: "分析构建过程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build Analyzer可以展示编译构建过程的重要信息，开发者能够通过Build Analyzer的可视化分析来排查构建过程中的性能和内存问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "进入build-analyzer",
      children: "进入Build Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build Analyzer会在每次构建应用时默认生成一份报告，并在Build Analyzer窗口进行展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在构建完成后通过以下方式打开Build Analyzer窗口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build > Build Analyzer"
          })
        }), "进行查看。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在Build窗口中的Build Output页签，点击左侧边栏", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(282885)/* ["default"] */.A) + "",
          width: "23",
          height: "23"
        }), "，打开Build Analyzer页签。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建成功且使用构建分析能力时，在Build窗口Build Output页签下的日志下方点击链接，跳转至Build Analyzer页签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看构建历史记录",
      children: "查看构建历史记录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build Analyzer左侧的Build History窗口中按时间顺序显示构建历史记录，包括本工程的构建历史数据和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section26761217305",
        children: "导入的日志数据"
      }), "。点击构建历史记录可以显示对应概览和可视化图谱界面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577051)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本工程的构建历史数据保存在./hvigor/report目录下，超过10条记录后，最久的历史数据将会被自动清理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(15908)/* ["default"] */.A) + "",
        width: "255",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看构建任务时间图谱",
      children: "查看构建任务时间图谱"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成构建后首次打开Build Analyzer 时，窗口会显示构建分析概览，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(852462)/* ["default"] */.A) + "",
        width: "1881",
        height: "371"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需查看构建任务时间图谱，请从下拉菜单中点击Tasks，默认进入时间图谱界面。该界面会分块显示构建历史记录、构建任务时长图谱、构建日志以及对应的日志详情信息，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(69975)/* ["default"] */.A) + "",
        width: "1882",
        height: "380"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图谱中的构建任务展示按照各个任务总时长占比，以相对长度进行展示。可以对时间块进行缩小放大，查看具体的任务名称及耗时信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图谱中构建子任务默认是折叠的，可点击Build TimeLine的节点信息，展开查看子任务的构建时长图谱。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图谱与日志信息是联动的，可点击图谱中的任务信息，即可联动对应的日志以及日志详情；相同的，点击日志时，也可联动对应的上方图谱信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(794194)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build Analyzer不会全部显示构建操作中的所有任务，而是重点显示决定构建总时长的任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图谱下方日志模块，展示每次构建的所有日志信息，并按日志级别（Info、Debug、Warn、Error）进行区分，并提供日志搜索功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击日志，可与上方图谱和右侧Details模块，进行联动显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789057)/* ["default"] */.A) + "",
        width: "1880",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看构建任务占比图谱",
      children: "查看构建任务占比图谱"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需查看决定构建时长的任务的占比细分数据，请点击概览页面上的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Common views into this build"
        })
      }), "下方链接 ，您也可以从下拉菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tasks"
        })
      }), "并确认您要的任务分组类别。任务以模块、业务类别、Target以及同一模块下的Target、同一模块下的业务类别和同一Target下的业务类别进行分组。图表中任务按照时间占比从大到小排列，点击子任务可详细了解其执行情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(256401)/* ["default"] */.A) + "",
        width: "1881",
        height: "377"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(828998)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于并行线程的存在，分类任务计算时间可能会比实际总时间长；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "饼图中Configuration代表未记录的任务占比。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看构建过程内存消耗曲线图",
      children: "查看构建过程内存消耗曲线图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果要分析构建过程的内存消耗情况，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section207890565217",
        children: "设置构建分析模式为Advanced"
      }), "，启用内存监测，构建后会生成内存消耗曲线图。从DevEco Studio 5.1.1 Beta1版本开始支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击概览页面上", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Common views into this build"
        })
      }), "下方的链接", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory Usage During Build"
        })
      }), "，也可以从下拉菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tasks"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory Usage"
        })
      }), "分组，查看内存消耗曲线图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(546479)/* ["default"] */.A) + "",
        width: "1913",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导出日志",
      children: "导出日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需查看本次构建日志，您可以点击导出按钮进行日志导出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(821256)/* ["default"] */.A) + "",
        width: "1881",
        height: "349"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导出内容有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分析统计本次构建的html文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "记录构建日志的build.log文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "记录构建daemon日志的daemon.log文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "记录构建任务耗时的report.json文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "记录构建过程内存消耗的report-monitor.json文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入日志",
      children: "导入日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需查看历史或其他工程的构建日志，您可以点击导入按钮导入report.json文件，导入的文件保存在工程./hvigor/report/upload目录下，导入后可在Build Analyzer左侧的Build History窗口中查看。upload目录下最多保存10条记录，超过10条记录后，最久的历史数据将会被自动清理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941372)/* ["default"] */.A) + "",
        width: "1882",
        height: "346"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置构建分析模式",
      children: "设置构建分析模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Settings"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Build, Execution, Deployment > Build Tools > Hvigor"
        })
      }), "下，查看", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use build analysis mode"
        })
      }), "选项："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["勾选此项：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "模式选择为Normal，即为普通模式（默认选项），记录简单打点数据进行分析。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "模式选择为Advanced，即为高级模式，记录详细打点数据进行分析（此模式下，建议搭配使用node 18版本）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "模式选择为Ultrafine，即超精细化模式，与Advanced模式相比，在ArkTS编译阶段记录更详细的打点数据，但开启后可能导致编译构建时间更长。从DevEco Studio 6.0.0 Beta1版本开始支持。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消勾选，即为不记录该次构建数据，不进行分析。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(337299)/* ["default"] */.A) + "",
        width: "916",
        height: "486"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成构建可视化html文件",
      children: "生成构建可视化html文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过命令行方式生成构建可视化html文件。如生成HAP模块的构建可视化html文件，命令如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw assembleHap --analyze=normal --config properties.hvigor.analyzeHtml=true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
            children: "hvigor-config.json5"
          }), "配置文件中properties.hvigor.analyzeHtml字段生成构建可视化html文件："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"modelVersion\": \"6.1.0\",\n  \"dependencies\": {\n  },\n  \"execution\": {\n  },\n  \"logging\": {\n  },\n  \"debugging\": {\n  },\n  \"nodeOptions\": {\n  },\n  \"properties\": {\n    \"hvigor.analyzeHtml\": true  // 生成构建可视化html文件\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "再执行构建，例如执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw assembleHap --analyze=normal\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行以上命令后，在工程的.hvigor/report目录下生成对应的html文件，该文件可直接在浏览器中打开。"
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
789057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752651-f7a82001d4ec90860bfaf02e3674a8f6.png");

},
546479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912708-5d37c8585a70d20b4c17e3888db1929b.png");

},
821256(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832637-07e9b4723c0cb6cdde112dd4fae62079.png");

},
15908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912714-3d9d538121905a28d5aaefa362c27d00.png");

},
794194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
282885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACuSURBVEhL7dAxDoQgEEDRPTG1CZU2XsCaM1ByIBoLMHCB2YzJEMVZg7PZbEPxE3Wch/GVc4Zf1XE2EW6tBaXUpfo98ZdzB9TviHHvPQzDIMePi5gxBlJKOzyO4/5Ma13m9X4zzsHzPMO6ruUX1ftNON2HEGCaphNMMzyArqlHOOacK3CM8TSre4xj27bt8LIsl9kxEY4h/GlGifG7GdWE38XtUf/Dv63jbB1nyvAGSCeBbJGreKEAAAAASUVORK5CYII=");

},
852462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752716-bb094e2240aa3688ade9c5462e1b4b19.png");

},
69975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752649-cf49761ca4a302241bd3cf3dd632f085.png");

},
828998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
941372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752643-6e443c5fc337b6ffa0848c8b05753e2f.png");

},
577051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
256401(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912700-39bb45f750b19ae0c613aa6e4293c9cd.png");

},
337299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912698-1bc9d9446d291c802a245ada215b2c9f.png");

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