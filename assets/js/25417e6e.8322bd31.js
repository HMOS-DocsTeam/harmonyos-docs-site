"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["772483"], {
206190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_scenes_ide_app_analyzer_scenes_md_254_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-app-analyzer-appendix-ide-app-analyzer-scenes-ide-app-analyzer-scenes-md-254.json
var site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_scenes_ide_app_analyzer_scenes_md_254_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-scenes/ide-app-analyzer-scenes","title":"场景化体检","description":"场景化体检支持页面滑动、页面间转场、冷启动等多种测试场景，开发者可以基于实际的应用场景进行测试。","source":"@site/docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-scenes/ide-app-analyzer-scenes.md","sourceDirName":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-scenes","slug":"/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-scenes/","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-scenes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"场景化体检","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-app-analyzer-scenes","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"启动加载完成快","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot/"},"next":{"title":"配置代理","permalink":"/harmonyos-docs-site/ide-appendix/ide-environment-config/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-scenes/ide-app-analyzer-scenes.md


const frontMatter = {
	title: '场景化体检',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-app-analyzer-scenes',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '场景化体检';

const assets = {

};



const toc = [{
  "value": "前置操作",
  "id": "前置操作",
  "level": 2
}, {
  "value": "进行体检",
  "id": "进行体检",
  "level": 2
}, {
  "value": "DevEco Studio 6.0.1 Beta1及以上版本",
  "id": "deveco-studio-601-beta1及以上版本",
  "level": 3
}, {
  "value": "DevEco Studio 6.0.1 Beta1以下版本",
  "id": "deveco-studio-601-beta1以下版本",
  "level": 3
}, {
  "value": "体检场景",
  "id": "体检场景",
  "level": 2
}, {
  "value": "性能",
  "id": "性能",
  "level": 3
}, {
  "value": "功能兼容性",
  "id": "功能兼容性",
  "level": 3
}, {
  "value": "多设备",
  "id": "多设备",
  "level": 3
}, {
  "value": "功耗",
  "id": "功耗",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "场景化体检",
        children: "场景化体检"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景化体检支持页面滑动、页面间转场、冷启动等多种测试场景，开发者可以基于实际的应用场景进行测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前置操作",
      children: "前置操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过以下任意一种方式，打开AppAnalyzer。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["单击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Tools >"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AppAnalyzer"
              })
            }), "，打开AppAnalyzer页面。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在编辑窗口右侧的工具栏，点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AppAnalyzer"
              })
            }), "或", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(374891)/* ["default"] */.A) + "",
              width: "22",
              height: "22"
            }), "，打开AppAnalyzer页面。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["连接设备或启动模拟器，并对应用进行", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing",
          children: "签名"
        }), "。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["真机：参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-run-device",
              children: "使用本地真机运行应用"
            }), "连接真机。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["模拟器：在AppAnalyzer首页创建或启动模拟器，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-management",
              children: "管理模拟器"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果使用DevEco Studio 6.0.1版本，未配置Python环境时，请根据界面提示，下载Python及三方库。或者点击AppAnalyzer底部", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Python 配置"
          })
        }), "按钮进行配置。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果使用DevEco Studio 6.0.0 Beta2之前的版本，需要先编译生成HAP或HSP。使用Beta2及以上的版本，无需提前编译。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "进行体检",
      children: "进行体检"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio-601-beta1及以上版本",
      children: "DevEco Studio 6.0.1 Beta1及以上版本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击右上角", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(466881)/* ["default"] */.A) + "",
            width: "14",
            height: "14"
          }), "图标选择Product、Target和构建模式，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apply"
            })
          }), "后，在AppAnalyzer的首页中可查看对应的编译产物和构建模式。关于Product、Target、构建模式的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides",
            children: "配置多目标产物"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
            children: "指定构建模式"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(58957)/* ["default"] */.A) + "",
            width: "467",
            height: "310"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AppAnalyzer"
            })
          }), "页面，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景化体检"
            })
          }), "，选择预置的体检卡片，或根据需要自定义卡片。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击预置的体检卡片开始体检，如需查看卡片包含的体检场景，请点击卡片右上角的", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(187734)/* ["default"] */.A) + "",
              width: "14",
              height: "16"
            }), "按钮，不同场景对应的检测指标请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section578981218613",
              children: "体检场景"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果需要自定义体检场景，点击****+****，选择自动/手动测试和体检场景，部分场景可修改单次录制时长/测试总时长，请根据界面提示进行修改。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始体检后，请等待AppAnalyzer完成构建、签名、安装等操作。如果本次体检依赖Python三方库并且本地未安装，AppAnalyzer会同步下载安装三方库。在测试过程中，请保持连接的设备为解锁亮屏状态。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果是自动测试，根据界面提示，登录应用账号后点击继续按钮", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(629910)/* ["default"] */.A) + "",
              width: "20",
              height: "16"
            }), "，继续测试；或者无需登录账号，直接点击", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(941761)/* ["default"] */.A) + "",
              width: "20",
              height: "16"
            }), "按钮继续测试。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果是手动测试，根据界面提示，点击开始按钮", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(17801)/* ["default"] */.A) + "",
              width: "15",
              height: "16"
            }), "开始录制，并手动遍历应用/元服务的功能。如果在录制时间范围内未遍历完成，可继续点击", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(466420)/* ["default"] */.A) + "",
              width: "15",
              height: "16"
            }), "按钮，进行多次遍历，遍历完成后点击结束按钮", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(435571)/* ["default"] */.A) + "",
              width: "20",
              height: "18"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看测试报告，包含以下内容。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "源文件、调优文件（包含trace文件和调用栈文件）或snapshot文件、时间戳等"
              })
            }), "：点击源文件可跳转到问题源码，点击调优文件或snapshot文件支持直接拉起性能分析工具Profiler并导入性能检测的问题数据进行调优分析，点击时间戳可以打开Profiler并定位到问题发生的时间范围。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "分析文档"
              })
            }), "：点击链接可跳转至官网文档，参考文档对检测出来的问题进行分析。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "优化建议"
              })
            }), "：针对可能的故障原因，给出对应的最佳实践，点击链接可跳转至官网文档。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从DevEco Studio 6.0.2 Beta1版本开始，如果在体检中遇到问题，可点击报告右上角的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "用户反馈"
            })
          }), "向我们反馈。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从DevEco Studio 6.1.0 Release版本开始，支持导出报告，以实现报告的共享，具体可查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-app-analyzer-history-reports#section78017171818",
            children: "导出报告"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(221356)/* ["default"] */.A) + "",
            width: "1187",
            height: "800"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio-601-beta1以下版本",
      children: "DevEco Studio 6.0.1 Beta1以下版本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果使用DevEco Studio 6.0.0 Beta2及以上的版本，支持在体检过程中自动编译构建打包。点击右上角", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(143443)/* ["default"] */.A) + "",
            width: "14",
            height: "14"
          }), "图标选择Product、Target和构建模式，关于Product、Target、构建模式的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides",
            children: "配置多目标产物"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
            children: "指定构建模式"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AppAnalyzer"
            })
          }), "页面，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景化体检"
            })
          }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自动"
            })
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "手动"
            })
          }), "方式，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "模块"
            })
          }), "选择框选择HarmonyOS应用/元服务工程模块。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自动方式：体检时无需手动遍历，AppAnalyzer会自动检测。自动方式下还需要选择具体的运行时长。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "手动方式：体检时需要根据提示手动遍历HarmonyOS应用/元服务的功能。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(777723)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果使用DevEco Studio 6.0.0 Beta2之前的版本，只有已经完成签名编译打包的模块才能被选中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持同时添加多个模块，要求所有模块的“bundleName”相同，且多个模块中只能包含一个entry。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(969682)/* ["default"] */.A) + "",
            width: "689",
            height: "313"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["勾选体检场景，不同场景对应的检测指标请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section578981218613",
            children: "体检场景"
          }), "，然后在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AppAnalyzer"
            })
          }), "页面底部单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "开始"
            })
          }), "按钮，开始测试。首次测试时，请根据AppAnalyzer的指引，下载Python及三方库，或者登录开发者账号并自动签名音频辅助检测APP。在测试过程中，请保持连接的设备为解锁亮屏状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(275624)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "请勿在测试完成前点击结束，如果提前结束测试会导致测试结果不准确。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持Python 3.9~3.12版本，推荐使用Python 3.11.7版本。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果是手动方式，在安装应用/元服务完成后，需要根据提示手动遍历HarmonyOS应用/元服务的功能。手动遍历完成后点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "结束"
            })
          }), "按钮停止测试任务，等待数据解析完成后，查看测试结果如下。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["测试报告：检测结果的汇总信息，默认展示告警和失败的检测结果，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "详情链接"
                })
              }), "可跳转到对应场景的详情报告。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(608577)/* ["default"] */.A) + "",
                width: "689",
                height: "428"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "详情报告：给出详细的测试结果、相关的定位文件和对应的优化建议。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "开始/结束页面、时间戳、调优文件（包含trace文件和调用栈文件）或snapshot文件等"
                  })
                }), "：点击开始/结束页面可跳转到问题源码，点击时间戳可以打开性能分析工具Profiler并定位到问题发生的时间范围，点击调优文件或snapshot文件支持直接拉起Profiler并导入性能检测的问题数据进行调优分析。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "分析文档"
                  })
                }), "：点击链接可跳转至官网文档，参考文档对检测出来的问题进行分析。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "优化建议"
                  })
                }), "：针对可能的故障原因，给出对应的最佳实践，点击链接可跳转至官网文档。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(311733)/* ["default"] */.A) + "",
                width: "827",
                height: "792"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "体检场景",
      children: "体检场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "性能",
      children: "性能"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "检测指标/检测项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "应用或元服务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自动或手动方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面间转场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "router或者navigation页面跳转"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section118706211961",
              children: "点击响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用，元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动，手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section2406192820717",
              children: "点击完成时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-frame-rate#section1591383182619",
              children: "转场卡顿率"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section1140562816186",
              children: "起播时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面滑动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面滑动（仅支持List、Grid、WaterFlow这三个组件实现的页面滑动）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section1767913186810",
              children: "滑动响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用，元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动，手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-frame-rate#section159268494256",
              children: "滑动卡顿率"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "冷启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冷启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section58771582411",
              children: "完成时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用，元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动，手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面内转场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swiper滑动转场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section1767913186810",
              children: "滑动响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用，元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动，手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-frame-rate#section159268494256",
              children: "滑动卡顿率"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section1140562816186",
              children: "起播时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tabs点击转场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section118706211961",
              children: "点击响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section2406192820717",
              children: "点击完成时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-frame-rate#section1591383182619",
              children: "转场卡顿率"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tabs滑动转场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section1767913186810",
              children: "滑动响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-frame-rate#section159268494256",
              children: "滑动卡顿率"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section1140562816186",
              children: "起播时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swiper点击转场  （从DevEco Studio 6.0.2 Beta1版本开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section118706211961",
              children: "点击响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section2406192820717",
              children: "点击完成时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-frame-rate#section1591383182619",
              children: "转场卡顿率"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "web场景  （从DevEco Studio 6.0.0 Beta2版本开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "web页面跳转"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section118706211961",
              children: "点击响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用，元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动，手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section2406192820717",
              children: "点击完成时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "web页面滑动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-delay#section1767913186810",
              children: "滑动响应时延"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/performance-experience-suggestions/performance-frame-rate#section159268494256",
              children: "滑动卡顿率"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能兼容性",
      children: "功能兼容性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "检测指标/检测项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "应用或元服务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自动或手动方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频播控服务  （从DevEco Studio 5.1.0 Release版本开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播控中心音频控制场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "播控中心控制音频播放检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "播控中心控制音频暂停检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "播控中心控制歌曲切换上一首检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "播控中心控制歌曲切换下一首检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "播控中心控制歌曲播放进度条拖动检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "播控中心控制歌曲循环播放检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "播控中心控制歌曲收藏检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频焦点切换  （从DevEco Studio 5.1.0 Release版本开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "来电接听场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section256142914530",
              children: "音频焦点变化事件响应检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VoIP通话场景"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "闹钟场景"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "导航场景"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语音助手播报场景"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "静音播放场景"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非静音播放场景"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "普通录音场景"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频设备控制  （从DevEco Studio 5.1.0 Release版本开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "耳机控制音频场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "耳机控制音频播放检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "耳机控制音频暂停检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "耳机控制歌曲切换上一首检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section12303131815311",
              children: "耳机控制歌曲切换下一首检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "耳机断开场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/experience-suggestions-compatibility/system-features-functions/audio-specification#section256142914530",
              children: "耳机断开事件响应检测"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "运行异常  （从DevEco Studio 6.1.0 Beta1版本开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-app-analyzer-all-rules#section202813103565",
              children: "运行无兼容性问题"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用，元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-compatibility/ide-api-compatibility-check",
              children: "API兼容性问题"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多设备",
      children: "多设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多设备测试支持以下设备："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API 20及以上的双折叠、三折叠手机和模拟器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API 20及以上的Pura X Max手机和模拟器。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "检测指标/检测项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "应用或元服务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自动或手动方式"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "折叠开合  （从DevEco Studio 6.0.2 Beta1版本开始支持）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-app-analyzer-all-rules#section68461625141414",
              children: "UX规则"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用，元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手动"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功耗",
      children: "功耗"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "检测指标/检测项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "应用或元服务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自动或手动方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "前台静置  （从DevEco Studio 6.1.0 Beta1版本开始支持）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前台静置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/app-power-experience-standards/standard-foreground-power/standard-foreground-render#section12791152171",
              children: "前台不可见动效"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动，手动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/app-power-experience-standards/standard-foreground-power/standard-foreground-resource#section169882223810",
              children: "UI空跑"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/app-power-experience-standards/standard-foreground-power/standard-foreground-render#section18911148816",
              children: "未使用硬件合成"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/app-power-experience-standards/standard-foreground-power/standard-foreground-resource#section177973203218",
              children: "CPU负载异常"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
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
17801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAIAAABGNLJTAAACgUlEQVR4ASxRSWhUQRCtrv7zZzI/LkRxi8soLsE9LgfRqMQliIKiXgQ3DC4o6sWDV0Hx6EkUCaKGaFzxoAQTg4YQlGjMTUwMqOCWZTIhk8n/0/93lZXBoqhumqrX771C4wf5ID8amBETZk2UMTQYUtpSxkRDYy8mF+R9P5AMggBJQcbP3mpvOP/gWk3Ls1w+jRC4YFzOuxzGyCKzUgpRikIi/j7U/3Xg17Zlq7v+/DhRc6Xly4d0bjAKDQIhMBSSWS6ADAqU8ly9KrXg6oGTZ6v2v/jUerPp6cffPWkzErGVbkEECVbIiIbyFo2rdYzUuoVLL+4+nJpS+uTtq6a2lq6+npAtgSLpFjoEyoI14MuHJozIwsTk+F1rKg5V7gxtdLut9t77+2l/iABzJkCFioQOCB1ABAlWoB09a2Zp1eYt1eur+4Z7L7+81P6tPbK2IFUJLqsx/mMzQlQkaXTibmLO5NSpzac3zK+40XI9mx/6jyadIsVaS0RSoDBvyY6a0e6/3ZlcZnZJqjjhISsmxVAIJTpQMVvBYKbewb7HHY8aPzeWFE86V3k64SRlO8yspFmYaK0ZxCeMKOzo7Kyrr/ONv698b9WSKtdJKNRoQxuEOExeNjAsExH09vdffXintv3N8QPVRyuOLZ5Z5mHcw6S2jAN+ViN6sYQA/xzov9vacKP5+dp5ZbeOXJg+rsRLFBGRGOc4jpJjglfkJRLD+aC27XX9u2YvXnRm6/6dKzcUR5gMQBuCkIiJZEXM6CpnwcSpB5duWl66aMeKjXvKt8+YMEsrzzjxwIlZVsQsLok/4hdqgGTMLZ+Wqly0qmz6XAfjAA6wQ6glldKSWNgKAP8DAAD//wvyalkAAAAGSURBVAMAAxlUG+OSDcMAAAAASUVORK5CYII=");

},
466881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAApUlEQVQoFZWRsQ3EIAxFMzESosWdV/AmHuHo6C33ZAA8wSk44qIkOiW/+vp6WMZ/scdaruRn6JqfURGhIRE50T9UVRExHISIqjof7KiqppQO2G5TSpPe0N67z4sxMvM6xMwxxhACIvbezWxDRcSHMHOtFQByzrVWZvbc915KKUTkUWsNANwDQGvNPRGVUt6gtwsAwM0C775lZk+P5Ud+WsGs5E+xX3bdrN1jJVssAAAAAElFTkSuQmCC");

},
969682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752916-88772f920cbb8b53bb99bd5e4320a6fa.png");

},
466420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAIAAABGNLJTAAACgUlEQVR4ASxRSWhUQRCtrv7zZzI/LkRxi8soLsE9LgfRqMQliIKiXgQ3DC4o6sWDV0Hx6EkUCaKGaFzxoAQTg4YQlGjMTUwMqOCWZTIhk8n/0/93lZXBoqhumqrX771C4wf5ID8amBETZk2UMTQYUtpSxkRDYy8mF+R9P5AMggBJQcbP3mpvOP/gWk3Ls1w+jRC4YFzOuxzGyCKzUgpRikIi/j7U/3Xg17Zlq7v+/DhRc6Xly4d0bjAKDQIhMBSSWS6ADAqU8ly9KrXg6oGTZ6v2v/jUerPp6cffPWkzErGVbkEECVbIiIbyFo2rdYzUuoVLL+4+nJpS+uTtq6a2lq6+npAtgSLpFjoEyoI14MuHJozIwsTk+F1rKg5V7gxtdLut9t77+2l/iABzJkCFioQOCB1ABAlWoB09a2Zp1eYt1eur+4Z7L7+81P6tPbK2IFUJLqsx/mMzQlQkaXTibmLO5NSpzac3zK+40XI9mx/6jyadIsVaS0RSoDBvyY6a0e6/3ZlcZnZJqjjhISsmxVAIJTpQMVvBYKbewb7HHY8aPzeWFE86V3k64SRlO8yspFmYaK0ZxCeMKOzo7Kyrr/ONv698b9WSKtdJKNRoQxuEOExeNjAsExH09vdffXintv3N8QPVRyuOLZ5Z5mHcw6S2jAN+ViN6sYQA/xzov9vacKP5+dp5ZbeOXJg+rsRLFBGRGOc4jpJjglfkJRLD+aC27XX9u2YvXnRm6/6dKzcUR5gMQBuCkIiJZEXM6CpnwcSpB5duWl66aMeKjXvKt8+YMEsrzzjxwIlZVsQsLok/4hdqgGTMLZ+Wqly0qmz6XAfjAA6wQ6glldKSWNgKAP8DAAD//wvyalkAAAAGSURBVAMAAxlUG+OSDcMAAAAASUVORK5CYII=");

},
608577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752869-913e07105682867b46d05ec3e5dffa66.png");

},
941761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAACyUlEQVR4ATRQW0hUURTdjztZZin1YykVQdETjaSIslBDkj7UJCME8yPJJOvDsMAcIz8kjaksS0wriqAkURHFDzEo0SAjAx+Q42NGxxd+JGpYyr2tO9Zm3Xv2Y+219zniHfW193QV1rucdfcKakvvN1cNuId/DAyVP6mIi48/nZHS0vEBoXtwxD3oGRr2eLyjHu+Yx+sDhJnLOl92T/Z2T/Z1T/W6Oir7ZwZEJCYu7lfcmp97zcymG7X9zaCJMPJEcOGwqoiKLlm/HyQ5HyYDhSRssiUiI3O+sfmJ6nMlebGXKrpeuzqrGFS1zTAUBPuDjsWWKlawIWLrq+qS+UegLJKwK9aVWNDmac9tubOwvIjJZDFIcNCAPQgGFbJdFtvwZ5NMuMgf2LyvMqV4fH4qsyFvYn4a+uQ3SKiwQwTDxOFQxCJqqIrAZWyothlbN4RXp5aEBAZn1Of2zbgJ4qqYzMQWMyKB4cLYiVhUDHQLq6oAKIUErnucfDt6+6GshvzP498YLfiICWWChsUkJGKH6CBmw8D5D+h3qMN5MudsZELpp6doFAIFwHhEAGJi8IRFWdgPC08KXeIVM9lkIQEDscUm8uCqwSauILaiRRaSzCAR+0VAwBMWtZW9+96UdyyL/GliEssi06T/xjBcYpmWydbxR0xziwvZdc6PQ1+eJd49uuUwWuwFwcOhausbbGAj+CK4CbF/qIj4ZqfTa67PLi68TS0/GLYfBDyHPRMDGUw/7GlEUEUSKnBQ+jrWc6EmNzwo9NUZV9j6UJRWgJdEE3wmYhh+ABwVBxwkG/par9Q7T+04UZFUHLwmCBuhCqCEO1GArr5cWwBkvS/ANIcoM+3cuC1wVcD5NzlFrY+uHbmYf/yqsk3GLiuvAw7W5pvR2VFhEVFhkfjfismJ2LSHmYMC1jamvUjcHd+Y9jw9MgUZjALgKGQEJ/8FAAD//yIjnvUAAAAGSURBVAMAoDrmouIJhIMAAAAASUVORK5CYII=");

},
221356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752926-4ab25736be03b6c4fed5fcf4c49a85e4.png");

},
143443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAApUlEQVQoFZWRsQ3EIAxFMzESosWdV/AmHuHo6C33ZAA8wSk44qIkOiW/+vp6WMZ/scdaruRn6JqfURGhIRE50T9UVRExHISIqjof7KiqppQO2G5TSpPe0N67z4sxMvM6xMwxxhACIvbezWxDRcSHMHOtFQByzrVWZvbc915KKUTkUWsNANwDQGvNPRGVUt6gtwsAwM0C775lZk+P5Ud+WsGs5E+xX3bdrN1jJVssAAAAAElFTkSuQmCC");

},
374891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAIAAABL1vtsAAADGUlEQVQ4EW1UbU8aQRDmD3u7dwcf1Kua1DSprFIPqS/9UCtCGuW0H72CSioYr2CbiuAdVji4Hdaf0ezO8WLbzX6Y3WSemXnmmUkAAOcjzkegDufyCTBSBkgjEjx6xgv8GbhQ91nZ8plQjtIHIf55jtBhBmUKoT4VBGbBuXTHLPDn4SHY3d3b3fngP3THMWVYHonZZ5yF8onzwEK63e7aWppSnVJ97W26GzyN3SQEj/5XCGYBAPf3rVxui1JCiEbwaESnRm5r577VVv5TCB7NcIEQFxcXqVRyYyPjeY1G43ZFnUbj1rtpbqy/S5qpi/PqhM4pF4pL2YJarabr5PT0i6pFALy8XJyefNGpUbu6Hhc17Yhk4empZ1lWsVgEEEHw2On4nY7f6w16vQHaQfAIIIqFz9biq6ff/QlKAkBwLqM5zsnS0lIUAYBgjBFCKNVdt+K6FSSEMQYghkNYXl5xnFPOpSPnIjGmR6y+flMqnWDyCEEIcd2y65YRjrF1jFcqOaurq0p+UpMJ1MxwAJTo3s0tio+xdYz8FwTqxfM8SrXhcIgKTqiSROB3iUZVz1DLcZITRlWxUsGcy64TMuf7vmriSELwSIT9iGi02fiJiPmDAkszxli9fl2vX0uLpfP5AxyoZvMHpSQMBzgNWIiIhqOFeWv7/V6/NwQuWJoRjRIt5oLKQxhbA4B+P9ze3l5YmI8iPs0CuHBKJ0SjlBiZDZtHMQQluntWdt2vY4g0AGQyGaXaOcdxXkDYm1lKDKJR00gCF/XatXtWcc/O261Ou9121anXawBgmgZC2Pbmi0Kql99MI0WJoVPDu2nMDLiYrBIA8LzvhqFTSk3TqFYvkRrJBTbSf3i8+9XOHxQN3Tw+csJ+hNTiKgnD8Pj4SNdJPn94d9cKAj+ea1C6QIiJYCvlc2vRSpqprJ0rHBYLhWI2m02lkpa1UKmUcaDG/nLFTbNAjWHksB9VL6/2Px7Ym7Ztb+7vf6pWq4NB3EVcLqgrCRFnK3eRFBXKZGxPJnWySl8s2ikXapFNd9msPw6S0miMgjsNC8Et+QfVqHKjlEItNAAAAABJRU5ErkJggg==");

},
777723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
435571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIiSURBVDhPjZTPaxNBFMfzJ/YPkOLVQ22LJ5PUgj/SHBRBiOKlFhL1YqSCipIIWg+WgKlgSxusVtJsuk2zu9nN7k62jX7lzfbtzm5C8fBh5g2Zz7w387IZX5xCjE5Boy8CuEMB3/HgOy48O4Zjd6Dg+BCjQO71/JBMHATwbA+DL030Vp/juLQacVRag156EiHjh2uw3n+EsIcQIpQSGTaLoQfjWRW/L13B4eIytKUiuvkVCc+PcoWYbAEHM7PQiw/g28NYyBkOv+2gM5eF+bSKs76Jv76I+OOFQITwut9o4ufMZVifNidLNuuf0c0V4DW2EjIW0sgyjseGhc58Hr1KNaxydC4kzNqGFNKpnAnB2aWzJcaGic58DiflF7GQUzWUDFUBkz5gmlCWTFaChe65ME36/mTJ/QuEZn0D2pQM1ZJVKa3R47Fwom2MGpfcTGxOZ6UeRMLDhSWcVJQM2UzCTr44kSFvTs/pIHmHC3kpTPQhC7XcSiTkjeo9TgotmWGvXJWOqG1oYtXDtlGF08pWhWd9C+3FG+hVXsZCqpsCe/MrtGvLsN/UMB44E0JVynHQ2sfB7ByM1x+SQommQ7/3CFr2jvz7WevvMHiVhNYIe/2tRL95F52r1+H+aidfObQHcHZ/4PhxGd3b9y9EuxWO9GGwG1vysxe9ciwMpZ7eh7O7D/t7C872HmxJK8FAjntw292ELNGH3OC0qK5xKf8D/f4fhoAjq6+oDvsAAAAASUVORK5CYII=");

},
629910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAACyUlEQVR4ATRQW0hUURTdjztZZin1YykVQdETjaSIslBDkj7UJCME8yPJJOvDsMAcIz8kjaksS0wriqAkURHFDzEo0SAjAx+Q42NGxxd+JGpYyr2tO9Zm3Xv2Y+219zniHfW193QV1rucdfcKakvvN1cNuId/DAyVP6mIi48/nZHS0vEBoXtwxD3oGRr2eLyjHu+Yx+sDhJnLOl92T/Z2T/Z1T/W6Oir7ZwZEJCYu7lfcmp97zcymG7X9zaCJMPJEcOGwqoiKLlm/HyQ5HyYDhSRssiUiI3O+sfmJ6nMlebGXKrpeuzqrGFS1zTAUBPuDjsWWKlawIWLrq+qS+UegLJKwK9aVWNDmac9tubOwvIjJZDFIcNCAPQgGFbJdFtvwZ5NMuMgf2LyvMqV4fH4qsyFvYn4a+uQ3SKiwQwTDxOFQxCJqqIrAZWyothlbN4RXp5aEBAZn1Of2zbgJ4qqYzMQWMyKB4cLYiVhUDHQLq6oAKIUErnucfDt6+6GshvzP498YLfiICWWChsUkJGKH6CBmw8D5D+h3qMN5MudsZELpp6doFAIFwHhEAGJi8IRFWdgPC08KXeIVM9lkIQEDscUm8uCqwSauILaiRRaSzCAR+0VAwBMWtZW9+96UdyyL/GliEssi06T/xjBcYpmWydbxR0xziwvZdc6PQ1+eJd49uuUwWuwFwcOhausbbGAj+CK4CbF/qIj4ZqfTa67PLi68TS0/GLYfBDyHPRMDGUw/7GlEUEUSKnBQ+jrWc6EmNzwo9NUZV9j6UJRWgJdEE3wmYhh+ABwVBxwkG/par9Q7T+04UZFUHLwmCBuhCqCEO1GArr5cWwBkvS/ANIcoM+3cuC1wVcD5NzlFrY+uHbmYf/yqsk3GLiuvAw7W5pvR2VFhEVFhkfjfismJ2LSHmYMC1jamvUjcHd+Y9jw9MgUZjALgKGQEJ/8FAAD//yIjnvUAAAAGSURBVAMAoDrmouIJhIMAAAAASUVORK5CYII=");

},
311733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752920-afc773543e5c7071c8c9551481166590.png");

},
187734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAIAAACp9tltAAACR0lEQVR4AVyQbWtSYRzGz7nXcLoadmwPFIs2Pbq2mcd0y9WSmS0ZlGuxsPoKEUREEUURBMGg3gR9A5mNWq0YezE3TDMzXeosnU9rsDRJ5/ZClxnMLhFWBL9zP1zX/b/u87/Jj8xGJvuX/7b/WoSiqHK5AhbA9tZ5/8FjYLO7qvr2SGiaAjgEstncgi9468aVm9cve7z+3PoGRIADoJK6FIlbJqZmrQ6zZVKvO15bW8vj8fS6fvP4C+uc3TLxKhpbRgEpFDanZ+Y4RVd9vWDIcELJdSEAHFbKDYMD9TsFsN5MzxYKP4kv8FnKijtkkj6NSsq2r66mXk7NgGQqLWXFfUfUHTKWlbQvBsOkQyaJxhKl0i8krax8e/b8dUtLU3Nzo3l8MvU9DbFYLMYTX6VsGxExDCtpQxH+JhyJafs1ml7VUY0ahMJRiIvBkEwqZpjdlbZomoYEdtTUbJW3qjtCCE3ReCnoFEVTFEUymSwalHcfhNqj5jzegNvjc7734NV6eziUHZJ3RqLxtbV1Eo0vS9n2ujoe6oTCBtN5YzKZzmRzly6MNDTsQj2fXycRH0AcUSq6MYWXYi63F4umRtHI8NBZo0HECCPRhMu9AAs6p+gkAoFg9NxpfyCUz2/aHR/8gS+4FDd88gXfOT/m8wVYplEjn8+vtLW/dd9F0/Cpk1rjGYN13lEq/S4WS/M2J+IH9VpYra17UU/wAcSAxj0iJSd/OPZk7NFTtYpjGOG2BbeSigmgA4x63bF7d67dvX11QKvBFkCv8gcAAP//y53ewQAAAAZJREFUAwDeRB4I3eA3NQAAAABJRU5ErkJggg==");

},
58957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752865-c2aca7a0bd06bc7d69a807dc74abe72b.png");

},
275624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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