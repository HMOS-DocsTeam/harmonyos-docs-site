"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["678595"], {
402137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_test_service_deveco_testing_exploratory_testing_exploratory_testing_md_2e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-test-service-deveco-testing-exploratory-testing-exploratory-testing-md-2e8.json
var site_docs_test_service_deveco_testing_exploratory_testing_exploratory_testing_md_2e8_namespaceObject = JSON.parse('{"id":"test-service/deveco-testing/exploratory-testing/exploratory-testing","title":"探索测试","description":"应用探索测试","source":"@site/docs/test-service/deveco-testing/exploratory-testing/exploratory-testing.md","sourceDirName":"test-service/deveco-testing/exploratory-testing","slug":"/test-service/deveco-testing/exploratory-testing/","permalink":"/harmonyos-docs-site/test-service/deveco-testing/exploratory-testing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"探索测试","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/exploratory-testing","kit":"testing","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"上架预检","permalink":"/harmonyos-docs-site/test-service/deveco-testing/publish-testing/"},"next":{"title":"回归测试","permalink":"/harmonyos-docs-site/test-service/deveco-testing/regression-test/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/test-service/deveco-testing/exploratory-testing/exploratory-testing.md


const frontMatter = {
	title: '探索测试',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/exploratory-testing',
	kit: 'testing',
	last_updated: '2026-04-20'
};
const contentTitle = '探索测试';

const assets = {

};



const toc = [{
  "value": "应用探索测试",
  "id": "应用探索测试",
  "level": 2
}, {
  "value": "<strong><strong>探索测试********模式</strong></strong>",
  "id": "探索测试模式",
  "level": 3
}, {
  "value": "<strong><strong>场景压测********模式</strong></strong>",
  "id": "场景压测模式",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "探索测试",
        children: "探索测试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185335)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1352",
        height: "850"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用探索测试",
      children: "应用探索测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****应用探索测试：****通过在测试过程中结合专家经验与AI技术，对测试数据持续学习，实现场景智能感知和控件语义分析，以不断优化遍历策略，帮助用户高效识别和定位应用中潜在异常、崩溃、泄漏等稳定性问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "创建任务"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进入DevEco Testing客户端，在左侧菜单栏选择“探索测试”，点击“应用探索测试”卡片，进入任务创建界面。按需配置任务参数，点击创建任务开始测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(725346)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1378",
        height: "854"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务名称：用于标识任务，系统会根据时间生成默认任务名，支持用户自定义修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "备注信息：填写任务备注信息，便于快速筛选报告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试设备：待测设备，支持 HarmonyOS 5.0及以上版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择应用：选择测试设备上已安装的应用，或在测试设备上安装新的应用包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试时长：任务总时长，建议时长不低于1小时，时长过低的测试结果不具备代表性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模式类型：可选探索测试模式或者场景压测模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "探索测试 ：基于智能遍历算法，通过模拟用户的操作，对应用进行长时间、高频率操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景压测 ：基于应用探索测试生成的应用图谱，在图谱管理工具中进行自定义场景，对指定页面进行压测。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "探索测试模式",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "探索测试********模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图谱选择（非必选项）：选择应用后，将提供该应用在应用图谱管理工具中的图谱以供选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(188548)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "646",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(599671)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不选择图谱文件：探索测试将进行随机遍历，在设置的时间内遍历应用页面，并生成图谱文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择图谱文件：探索测试将优先遍历图谱文件中的各个节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["关于图谱文件的介绍，可查看", (0,jsx_runtime.jsx)(_components.a, {
          href: "/test-service/deveco-testing/tool#section167931627183613",
          children: "应用图谱管理工具 -> 创建图谱"
        }), "指导文档。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景压测模式",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景压测********模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图谱选择：选择应用后，将提供该应用在应用图谱管理工具中的图谱以供选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景选择：选择在应用图谱管理工具中创建的场景路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775180)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "643",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(433836)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建场景压测任务前需要自定义创建场景路径，可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/test-service/deveco-testing/tool#section1567145619114",
        children: "应用图谱工具场景路径管理"
      }), "指导文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "高级配置"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重启切换场景：场景压测中场景切换是否通过重启应用完成。当不勾选时，正常执行需要场景的开始和结束都为首页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "截屏间隔：步骤执行完成操作后到页面截图的时间间隔。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跳过预处理：预处理流程会授予待测应用定位、通知、网络等权限，并自动跳过引导页、登录华为账号。如果前述操作未实施，建议取消勾选。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数配置完成后，点击“创建任务”即开始测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(589697)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "832",
        height: "174"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试执行"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务创建后进入测试执行页面。创建任务时，如未选择跳过预处理，则会在遍历开始前，进行应用预处理，如同意隐私声明，自动授予待测应用定位、通知、网络等权限，并自动跳过引导页、登录华为账号。在测试过程中，页面显示测试进度、遍历路径地图、设备截图及语义分析过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "探索测试执行页面："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(337999)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1004",
        height: "579"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景压测执行页面："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(526181)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "898",
        height: "525"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI语义分析：智能AI结合用户操作习惯，为界面控件归类排序，测试过程参照排序执行。测试过程中支持用户暂停或启动语义分析，语义分析暂停时，任务会继续计时，直至任务时间结束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控件色块颜色说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绿色：下一步即将操作的控件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "黄色：鼠标悬停在控件语义识别列表时关联的控件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝色：已覆盖遍历的控件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "灰色：黑名单被屏蔽的控件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试过程中，会优先覆盖核心功能区域，如底部菜单栏、顶部频道栏、应用功能集入口等，探索出应用的主要功能页面；完成核心功能区域覆盖后执行常见的测试操作，如扫码、关注、点赞、收藏等，保障应用关键事件覆盖完全；最后补充遍历非核心功能页面和控件，补全应用图谱。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试过程中可实时查看故障数据，点击页面上故障红色提示数字，查看问题列表与详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(540669)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1695",
        height: "948"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行过程中如果发生设备断连、重启等情况，遍历暂停，但任务会继续计时；当设备重新连接（或重启完毕），遍历任务继续执行，断连（或重启）前的测试信息依然存在；若设备断连，且在测试任务完成前都未重新连接，则会导致生成的报告数据不完整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试报告"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "探索测试报告页面:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(373062)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1689",
        height: "933"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景压测报告页面："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(849314)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1797",
        height: "904"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务信息：在报告的最上方可查看本次任务的应用信息，运行时间，环境参数和执行日志，点击打开目录按钮可导出html格式报告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用信息：获取待测试应用的包名、版本、API版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环境参数：展示测试设备信息和参数配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "概览：本次任务的主要数据概览及本次任务模型包存放路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "遍历路径地图：本次任务遍历的页面地图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "压测详情：选择场景压测模式，压测的节点以及次数等信息可显示在报告页。点击失败次数显示失败的页面截图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["问题列表：对测试过程中产生问题信息的分类统计。点击列表中", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(477899)/* ["default"] */.A) + "",
        width: "22",
        height: "23"
      }), "符号能够对指定列的数据进行筛选，点击列表中", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(822757)/* ["default"] */.A) + "",
        width: "25",
        height: "25"
      }), "三角符号可以对指定列进行正序或倒序的排序，默认按照发生时间的正序排序。点击概要信息列查看按钮对应故障的概要信息，点击定位日志列查看按钮跳转到存放faultlog日志及故障发生时段hilog日志的文件夹。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "问题详情："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(89939)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1004",
        height: "253"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障概要信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473912)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "831",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定位日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464065)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1698",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*更多应用稳定性体验优化建议及问题定位，请查阅：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/experience-suggestions-stability",
        children: "应用稳定性体验建议"
      }), " 及 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-overview",
        children: "稳定性概览"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "测试********故障说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Testing探索测试服务会发现并收集测试过程中发生的故障，故障类型包含以下几种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-crash-js-way",
          children: "JS_CRASH"
        }), "：应用异常，应用程序在JS层发生了崩溃。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-runtime-freeze-detection",
          children: "APP_FREEZE"
        }), "：应用无响应，前台应用无法及时响应用户操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-crash-cpp-way",
          children: "CPP_CRASH"
        }), "：进程崩溃，C++编写的Native进程（包含c++应用进程和统服务进程）发生崩溃。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-file-handle-detection",
          children: "FD_LEAK"
        }), "：句柄泄漏故障，是由于进程句柄数过高且持续增长，以此判定该进程可能存在句柄泄漏。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-thread-leak-detection",
          children: "THREAD_LEAK"
        }), "：线程泄漏故障，是由于进程的线程数过高且持续增长，以此判定该进程可能存在线程泄漏。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-memleak-detection-overview",
          children: "MEMORY_LEAK"
        }), "：内存泄漏故障，是由于进程的PSS内存大小过高且持续增长，以此判定该进程可能存在内存泄漏。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
          children: "HiAppEvent"
        }), "：HiAppEvent故障是来自应用开发者在应用内预埋的HiAppEvent故障类打点事件，每一个HiAppEvent故障类事件会生成一个对应的故障记录。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80487)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更多测试服务详情，请前往DevEco Testing客户端 -> 探索测试 -> 应用探索测试 -> 任务创建页 -> 测试指南中查询。"
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
822757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAAXNSR0IArs4c6QAAAJFJREFUSEvt1EsKgDAMBFDrLRT83P9UfkCPUUfiohDTiVDEhdJl+kjHpiHGWBX66kLOyfzWszBfz2taNizaJO8LyrzuWJQjlkDSEeVyVgp5ONPSEOXCR+fR7Ms6I046dM3Yt/qKmHmhGnv0Bgsi74TmMhB/c1IuD8Fy/Ue58bcZpSG4LDqJUsDn0Qn9lj+oq/IAh0ZMFQwILZsAAAAASUVORK5CYII=");

},
80487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
185335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503674-12106485afb67e2b34245eaed4ab0805.png");

},
464065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503650-5aba1f457bc42dedff339a84887c1932.png");

},
725346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524503387-d346c444d414d72beb2e19b8f1c13d2a.png");

},
599671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
373062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524503397-e6cdc34f32e8fb8823b3f8c977eafb3e.png");

},
775180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524623363-1cad1142e22071de9c208d2ab444ecd3.png");

},
337999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524503391-e1ac7ff15988c080d250366e2608cf82.png");

},
188548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002524623357-ab1f085b589cbe3f9ffcfa380215c94f.png");

},
433836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
89939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503662-b04b120cec684a927f5138be41f63801.png");

},
473912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503678-28bcc1eb3a3f5303102bc629f71ccb05.png");

},
540669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503676-2545ac9d2acbb0bcca8c503c571a02b8.png");

},
526181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503670-48d6c0618f1927b95e38dcbf273e0c88.png");

},
589697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503672-8eb7de1b9e6cd48fc6abf3d13c4c1e3b.png");

},
477899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAIAAACAiijJAAAAAXNSR0IArs4c6QAAAZRJREFUOE/NVDGOgkAUFbExtNYkHsAGUQvoaIyNiSfwEBzASGy0ltAg3MDEwsrESisrCipt6Cg4ACq4T2czQWDRrFvsFBOY/977f97/wNxut9Jnq/wZ/c7+HxJMygu8RlFUbFD5sRiGISY8SYDpOI5lWWEYFnhUrVaHw2Gj0SAqTxLIr6oq9m63G8cxECzLprSQZrvdAjOdTr+jOKILAdM0ZVne7XaKoiwWC3KpJOBwOAAAGA2Vkgg8n89nTdNardZqtRIEQdd1lEMw1+v1dDq12+3xeAwYJaYlQEB4Pp83m83RaDSbzS6XC9DYN5tNp9NBCACqezc+VQVeEUZC27aRENcmANd1JUmC0wgl+fkStOzJZNLr9cidPc/b7/fgZ1P+OJ1wu1argYOOgEbyZxv07oCjEJRwPB5zh+Xdb4TU/0sJMIkddKJTQq+rQDuXy2UQBDzP50991mF6gr6KojgYDNDd9XpNBiS70l9qMo/v+4ZhcBzX7/fr9XqlUsmtokiCJsztJZUrknjzn/jazpdCfyDxBXA5yXiaCPfLAAAAAElFTkSuQmCC");

},
849314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002492503658-4a59eefe25e24ede5feac91350c8ff66.png");

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