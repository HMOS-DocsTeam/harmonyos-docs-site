"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["700007"], {
417635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_insight_session_snapshot_ide_snapshot_basic_operations_ide_snapshot_basic_operations_md_2be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-insight-session-snapshot-ide-snapshot-basic-operations-ide-snapshot-basic-operations-md-2be.json
var site_docs_ide_insight_session_snapshot_ide_snapshot_basic_operations_ide_snapshot_basic_operations_md_2be_namespaceObject = JSON.parse('{"id":"ide-insight-session-snapshot/ide-snapshot-basic-operations/ide-snapshot-basic-operations","title":"Snapshot模板基本操作","description":"针对方舟虚拟机，DevEco Profiler提供了内存快照分析能力，结合Memory实时占用情况，分析不同时刻的方舟虚拟机内存对象占用情况及差异。","source":"@site/docs/ide-insight-session-snapshot/ide-snapshot-basic-operations/ide-snapshot-basic-operations.md","sourceDirName":"ide-insight-session-snapshot/ide-snapshot-basic-operations","slug":"/ide-insight-session-snapshot/ide-snapshot-basic-operations/","permalink":"/harmonyos-docs-site/ide-insight-session-snapshot/ide-snapshot-basic-operations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Snapshot模板基本操作","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-snapshot-basic-operations","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"案例：应用冷启动首帧完成时延问题分析","permalink":"/harmonyos-docs-site/ide-launch-overview/ide-profiler-launch-case/"},"next":{"title":"案例：ArkTS内存泄漏分析","permalink":"/harmonyos-docs-site/ide-insight-session-snapshot/ide-arkts-memory-leak-analysis/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-insight-session-snapshot/ide-snapshot-basic-operations/ide-snapshot-basic-operations.md


const frontMatter = {
	title: 'Snapshot模板基本操作',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-snapshot-basic-operations',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = 'Snapshot模板基本操作';

const assets = {

};



const toc = [{
  "value": "查看快照详情",
  "id": "查看快照详情",
  "level": 2
}, {
  "value": "应用对象名称解析",
  "id": "应用对象名称解析",
  "level": 2
}, {
  "value": "节点属性与引用链",
  "id": "节点属性与引用链",
  "level": 2
}, {
  "value": "节点跳转",
  "id": "节点跳转",
  "level": 2
}, {
  "value": "历史节点前进/后退",
  "id": "历史节点前进后退",
  "level": 2
}, {
  "value": "比较快照差异",
  "id": "比较快照差异",
  "level": 2
}, {
  "value": "引用链向最小引用距离展开",
  "id": "引用链向最小引用距离展开",
  "level": 2
}, {
  "value": "DevEco Studio 6.1.0 Beta2及之后版本",
  "id": "deveco-studio-610-beta2及之后版本",
  "level": 3
}, {
  "value": "DevEco Studio 6.1.0 Beta2之前版本",
  "id": "deveco-studio-610-beta2之前版本",
  "level": 3
}, {
  "value": "引用链可视化",
  "id": "引用链可视化",
  "level": 2
}, {
  "value": "离线导入内存快照",
  "id": "离线导入内存快照",
  "level": 2
}, {
  "value": "解析内存对象",
  "id": "解析内存对象",
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
        id: "snapshot模板基本操作",
        children: "Snapshot模板基本操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对方舟虚拟机，DevEco Profiler提供了内存快照分析能力，结合Memory实时占用情况，分析不同时刻的方舟虚拟机内存对象占用情况及差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio 6.0.2及之前版本，Memory泳道统计时支持选择PSS/RSS/USS中的一个或多个，可以从多维度度量当前进程的物理内存使用情况。从DevEco Studio 6.1.0 Beta1开始，Memory泳道统计时固定为PSS、GL、Graph总和，在会话区不支持选择PSS/GL/Graph。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看快照详情",
      children: "查看快照详情"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Snapshot场景调优分析任务，操作方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/deep-recording",
            children: "性能问题定位：深度录制"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置Snapshot泳道。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击任务左上角的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(402512)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "15",
            height: "15"
          }), "进行泳道的筛选，再次单击此按钮可关闭设置并生效。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击ArkTS Snapshot泳道的“options”下拉列表，可以设置是否需要抓取基础类型number的数据。默认不抓取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(471257)/* ["default"] */.A) + "",
            width: "512",
            height: "115"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开始录制后可观察Memory泳道的内存使用情况，在需要定位的时刻单击任务左上角的", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(47311)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "18",
            height: "18"
          }), "启动一次快照。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "“ArkTS Snapshot”泳道的紫色区块表示一次快照完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(37295)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在任务录制过程中，单击分析窗口左上角的", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(279786)/* ["default"] */.A) + "",
              title: "点击放大",
              width: "17",
              height: "16"
            }), "可启动内存回收机制。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当方舟虚拟机的调优对象的某个程序/进程占用的部分内存空间在后续的操作中不再被该对象访问时，内存回收机制会自动将这部分空间归还给系统，降低程序错误概率，减少不必要的内存损耗。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(400653)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1553",
            height: "257"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“Statistics”页签中显示当前快照的详细信息："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Constructor：构造器。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Count：该对象的数量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Distance：从GC Root到这个对象的距离。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shallow Size：该对象的实际大小。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Retained Size：当前对象释放时，总共可以释放的内存大小。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Native Size：该对象所引用的Native内存大小。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Retained Native Size：当前对象释放时，总共可以释放的Native内存大小。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["带", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(361897)/* ["default"] */.A) + "",
              title: "点击放大",
              width: "14",
              height: "11"
            }), "标识的对象，表示其为全局对象，可以通过全局window对象直接访问。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(178361)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1545",
            height: "603"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(312928)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴；或使用快捷键W/S缩放时间轴，使用A键/D键可以左右移动时间轴。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将鼠标悬停在泳道任意位置，可以通过M键添加单点的时间标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段的时间标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在任务分析窗口，可以通过“Ctrl+, ”向前选中单点的时间标签，通过“Ctrl+. ”向后选中单点的时间标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段的时间标签，通过“Ctrl+]”向后选中时间段的时间标签。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用对象名称解析",
      children: "应用对象名称解析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟系统目前有方舟应用对象、系统内部框架对象、其他JS对象三类对象，从DevEco Studio 6.0.0 Beta1版本开始，支持对应用对象类的名称进行解析，帮助开发者快速定位问题所在的源码位置，从而提升问题定位效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统内部框架对象：用于描述HarmonyOS操作系统底层框架的核心对象，提供基础系统能力。为方便开发者查看，当前在Statistics中此类对象均归类到（framework）构造器节点下。此类对象均以_GLOBAL开头。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方舟应用对象：用于表示HarmonyOS应用中的具体组件、模块或资源。方舟应用对象需按照以下格式命名展示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "com.example.app/MainModule@1.0.0/src/main/ets/MainPage.ets#MainPage(line: 10)[MainModule] //格式为BundleName/SelfModule@Version/FilePath/File#Class(line: xx)[RefModule]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他JS对象：用于描述方舟运行时中与JavaScript引擎相关的对象，提供JS语言层面的基础能力。例如：JSArray、JSSharedObject等。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 Snapshot分析模板中，支持在Attributes页签点击方舟应用对象名称查看当前所选方舟应用对象的解析结果，便于确认问题出现的位置。各参数含义如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module：模块信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Class：属性名称。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Path：编译后的源码路径。支持通过点击属性名称旁边的", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(818646)/* ["default"] */.A) + "",
          width: "23",
          height: "19"
        }), "图标直接跳转至工程中的代码位置，方便开发者快速调试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(918699)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1543",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若应用编译模式是release，且启用了源码混淆，方舟应用对象将展示混淆后的数据。支持在Attributes页签查看当前所选应用对象的源码信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(586623)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1547",
        height: "441"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333417)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保工程代码路径与解析信息匹配，否则跳转可能失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统内部框架对象（framework）仅提供基本信息，不支持跳转。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对象名称后的line=0时表示无效行号，不支持跳转。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点属性与引用链",
      children: "节点属性与引用链"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Snapshot”的“Statistics”页签和“Comparison”页签中，所有实例对象节点展开后会显示\"<fields>\"以及\"<references>\"，这两项节点分别代表该实例对象的属性以及该实例对象的引用链信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Snapshot”的More区域则展示“Fields”和“References”两个页签，分别代表Detail区域所选择对象的属性以及引用链信息，方便快捷查看所选中对象的属性等详细信息，而不需要跳转至对应对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(738348)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1546",
        height: "607"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点跳转",
      children: "节点跳转"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Snapshot”的“Comparison”页签中，查看内存对象、对象属性及其引用链时，若要查看某一对象的详细信息，可以单击该对象所在行行尾的跳转图标跳转至该对象所在的“Statistics”页签并定位至该对象所在的位置，以查看该对象的详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(642972)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "608"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "历史节点前进后退",
      children: "历史节点前进/后退"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当在“Comparison”和“Statistics”之间进行节点跳转后，单击详情区域左下角的左右箭头可以前进或者后退至下一个或上一个历史节点，以便快速在多个历史节点之间跳转查看。当箭头为激活状态时，表示前进/后退功能可用，当箭头为灰色状态时则代表无法使用该功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139405)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "比较快照差异",
      children: "比较快照差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Snapshot”的“Comparison”页签中，以当前选择的快照为base，下拉框选择的快照为Target，即可得到两次快照信息的比较结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(846268)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1545",
        height: "604"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Snapshot”的“Comparison”页签中，可进行两次快照的差异比较，比较内容包括新增数、删除数、个数增量、分配大小、释放大小、大小增量等等。通过不断对比，可快速分析和定位内存问题的具体位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155275)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1549",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用链向最小引用距离展开",
      children: "引用链向最小引用距离展开"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Snapshot分析支持一键向引用链最小的引用距离方向展开。系统会计算从GC Roots垃圾收集器根到选定实例对象的最短路径（最短路径是指Distance逐渐-1的路径，最终抵达Distance = 1的节点），通过最短路径，能够清晰地看到该对象的句柄被哪些对象持有，快速定位问题产生的根源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio-610-beta2及之后版本",
      children: "DevEco Studio 6.1.0 Beta2及之后版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择一个实例节点，系统会计算从GC Roots到选定对象的最短路径，并在右侧Shortest Paths页签实时切换和展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(999592)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1547",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio-610-beta2之前版本",
      children: "DevEco Studio 6.1.0 Beta2之前版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择一个实例节点，底部搜索栏的Path to GC Root按钮呈可点击状态。点击该按钮选择搜索模式并确认，系统会计算从GC Roots到选定对象的最短路径，并在右侧Shortest Paths页签展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(568553)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1543",
        height: "554"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持单根路径搜索、指定数量的根路径搜索和展示所有根路径三种搜索模式，默认为单根搜索。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(784079)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1549",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置完搜索模式后点击OK，右侧more区域会自动跳转至Shortest Paths页面展示搜索结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768527)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用链可视化",
      children: "引用链可视化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta1版本开始，Snapshot模板支持将所有引用链以图表形式展示。系统会计算该节点周边的引用节点，并以关系图的形式清晰展示该对象的引用关系，便于定位问题产生的根源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["选择一个实例结点或reference引用关系节点后，底部搜索栏的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Visualization"
        })
      }), "按钮呈可点击状态。点击该按钮，配置搜索模式后，系统会计算该节点周边的引用节点，并跳转到Graph页签进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(612656)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "606"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持最多展示30个周边节点，默认展示20个。当前支持以下两种优先级的引用链展开方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retained Size：按照Retained Size从大到小展示周边节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distance：按照Distance从小到大展示周边节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93298)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1554",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置完搜索模式后点击OK，底部页签会自动跳转至Graph页面展示搜索结果，红色标示的是中心节点，线段展示连接的两个节点之间的引用关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(592474)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1545",
        height: "426"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持选中节点，右侧的More区域将展示该节点的详细信息，包括Fields、References和Shortest Paths三个页签。当鼠标悬浮在图形上的节点或线段时，悬浮框将展示对应的详细信息。图形区域支持拖动查看，使用Ctrl+鼠标滚轮可对图形进行缩放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当在节点点击右键，展示的菜单列表包括以下选项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show More References"
          })
        }), "：展示当前节点更多的引用链。配置搜索模式后，重新生成以该节点为中心的引用链图形。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Path to GC Root"
          })
        }), "：展示当前节点到GC Root的路径。选择搜索模式后，重新生成以该节点为中心到GC Root的引用链图形。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Redraw with this node"
          })
        }), "：以该节点为中心重绘。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reveal in Statistics"
          })
        }), "：在Statistics页面中显示该节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clear Diagram"
          })
        }), "：清空当前图表中的所有内容。且清空底部栏的激活状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(190964)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1548",
        height: "424"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Show More References"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Show Path to GC Root"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Redraw with this node"
        })
      }), "选项后，单击详情区域左下角的左右箭头，可以前进或者后退至下一个或上一个历史图形，以便在多个（最多三个）可视化图形之间跳转查看。当箭头为激活状态时，表示可用，当箭头为灰色状态时则代表无法使用该功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513359)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1546",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离线导入内存快照",
      children: "离线导入内存快照"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler支持离线导入内存快照功能，可导入一个或多个.heapsnapshot及.rawheap文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以在DevEco Profiler主界面的“Create Session”区域中，单击“Open File”，导入.heapsnapshot或.rawheap文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211799)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入的单个文件大小不超过1.5G。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "批量导入的文件数量不超过10个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".rawheap文件是应用发生Out of Memory现象时产生的原始内存文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840769)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "516"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "离线导入内存快照成功后，可以导入与.heapsnapshot或.rawheap文件匹配的.jsleaklist文件，展示jsleakwatcher监控采集到的内存泄漏对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(50930)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入的单个jsleaklist文件大小不超过30M。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入的jsleaklist文件通过文件中的hash值与已导入的heapsnapshot文件匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可多次导入不同的jsleaklist文件，也可同时导入多个不同的jsleaklist文件，重复导入不会覆盖已导入的匹配上的jsleaklist文件。总的导入匹配成功的文件数量不超过导入的heapsnapshot文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(918306)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1545",
        height: "510"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解析内存对象",
      children: "解析内存对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.1.0 Beta2开始，DevEco Profiler支持导入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle#section19215122372720",
        children: "代码混淆产物nameCache"
      }), "文件和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle#section666114451518",
        children: "ArkTS调试产物sourceMap"
      }), "文件，还原文件名称和文件路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以nameCache文件为例，文件导入前，Class为d8，"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(994151)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1546",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击工具栏", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(391700)/* ["default"] */.A) + "",
        width: "23",
        height: "23"
      }), "按钮，导入nameCache文件，Class显示为文件名称MyAbilityStage。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507845)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1544",
        height: "511"
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
507845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753368-49d3160e5e3783288c61a8c22ff6dc14.png");

},
586623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913346-2f7d44c10163ebb9f2187bd18e13cc76.png");

},
37295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
178361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753358-2babcee850ee397923b3869ddb696d90.png");

},
846268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913354-c9d59be6b3b06eabf27b8c510dfafa98.png");

},
93298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753362-c19fe166a688c684977bfd3caca7577d.png");

},
840769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913322-df568e322431d3364a2bf59617c0338e.png");

},
190964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753265-3a39451d01481b035759934be344ceb4.png");

},
818646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAIAAAD02QHhAAAAt0lEQVQ4EWP4+Pkr5YiBciM+fv46mE05fffrkuMItPTENwj34+ev915+XXICRGIGArqPTt/9GjH3Gxpachyk8/RdkPjpu98Im4KpAi5Cd1NO3/1atxmKIB75+BkUTKT5CNOUzh2kmwIPBQijcwcosOs2gWJn4j4Qm+TQPXADFllzYAwiTYHHNMQtEIPgAYTmUjgXS3qBpDS4igM3QAkPzsXKQDcFq6JT2FIaskqiTEHWgJU9/EwBAM1js3cee985AAAAAElFTkSuQmCC");

},
592474(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753263-10611fe9beae208e87b3dfd9edd28fd0.png");

},
211799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
391700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAABgElEQVR4AdRTPU4CQRjdWRKx0FBAITcw4QpqoOFHK7kCNhq4wALGYOIVFjkBPwfARhGllLg23EAFCwNBpXB38cmXTBgZcEEbNi9f3jfvJzPFqr3++9+hKv/xLVHLg3FvGMavj571outaTdMyaS0DMrtoaguSun6+srrudq/pegHrjCJ5S6Vc0vMFy7J7r51ut2NaZj5fKJdL04rkLR6P57Z+lUwden0+r9eXSh7d1C9xOF9LOBJ9fG4HgyGKBUOhp/ZLJBKldXLK7wIfYwzTIaa2OMyTTWh56/cvqlVM0iYnJKlBaGk0GrnTM0ye39reAfgK6YeBJKGFjsZnILAJjJ9IudAyGHzA1Gze4doE89MEiGNCgoFsIBxCS6vVglAsVnBtKSDBQDYQDqElkTjY2w3ncifHWU0KSDDAxvNEhJYNvz+dye7H49FYTApIMMBGYT7V4XDIlwUIxVXbthcI8wjFv19kWRZVcs0JQQRBcqqu0cfYHH8NJRljo6hLUZQvAAAA///MepGXAAAABklEQVQDAJGxAb3byYf4AAAAAElFTkSuQmCC");

},
994151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753285-ba1c474722401a1af4b2bf59b24b0a02.png");

},
279786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAA+klEQVQ4EWP4+Pnrf0oxAzYDtp/59t+l4TscH7uG3yKshjjXf//fs/7bf5BhIDqo8xte1+I0BGQAyJUgGmQoNhfDxKhniGnpd7BtIBthGBYOIBomBqNB6mGuANFgl3BFogoiK8DGRldPPUMSJn37DzKdWJw/BzW24AEL8icsRrB5ASSGK6bghiD7E2TTlQeQBAaiYTY/fvn1v0QSZviBDQHFAHKIg2IB5ip029VyvsMtgLkYbMisnd/+g8IFJojPEFDqXXkYoRakB2wIyLmgvFK37BsYq+d8/584GcIG0SA+TA6krnYZFkNAJoMkiMUwr8JcDg9YmAA5NADWRrpRUnSrKgAAAABJRU5ErkJggg==");

},
738348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833277-8b773b67d9159342865d6eff11f4670a.png");

},
400653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753281-9dfa7967700c9b301524111cd6bad4da.png");

},
918306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753340-4d2f4b97b8cec828805e2cb343ee8109.png");

},
784079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913328-3d8380830b4cd09db1c76ee0dc4abc9d.png");

},
612656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753370-2bfe390d83b64db6efb8b302b5d4c118.png");

},
50930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
402512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA00lEQVQ4Eb2SPw8BQRDF76OiQ4cOnTsfQyj8DdETFVERlVCJaEQ0IuqRt8mb7K29kCsUm8nOvN+82cwGj+dL0p4gLQjOwJvtTsKo+dPZH446qYH7w5HgXG93QaOkaaBptTtaN/DpfJFSuSLjyVTyhaLM5gsVsBFy0EDLnL4ZrtVaXbq9gYkUIAJEDRo7rzCSbGA7J4HQx2A2yGRz6oAxXUe6f8Ao2DDeSbEbv8J2o//By9XarM515N07NnaNH9cIo9heCTF6Yfwye10Uu9ELu6Kk+xuTgSidIR+AfAAAAABJRU5ErkJggg==");

},
999592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753348-1168a01e8e507dad0a2326b4e8b6b827.png");

},
768527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753354-053d5c108628a436f6728fbab2d76495.png");

},
139405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833241-af585c3c6488f9cebf1f3a51cd1dd501.png");

},
361897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAAM0lEQVQoFWO4dOXafxBesWo10RiknmFgNcJsx0eDvIThVHwaYHIjViOxiQAlVGGhRiwNAHRw/EbkcbRSAAAAAElFTkSuQmCC");

},
568553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753293-00d63e9b138f51da0d0e7bf855c9f72a.png");

},
642972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913334-85ce9556834d58868df2a5148e2a0b5f.png");

},
155275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833269-4a17a6279fc118ef461eabd2385237dd.png");

},
513359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753346-27ef3aa3b39e1b2be7402dca60771230.png");

},
312928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
918699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753257-9d02a28707d7a40cf077ef654fd06cd3.png");

},
333417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
47311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA3klEQVQ4EWN4+vzlf2pgBmoYAjJjiBjUuvL9/4oFHzDw9XuvcIYnhtdAirkiv2PFIAtwhSnYIL/Wz/8dayFYNfsrVkNAhkskfYOr82/7jGIo2CBcLiAkjuw6nAbF9H36D/ImCIPYMENPXX2N4hKYYTgNgimA0TCDQF6HBQNMDkSTbBDIwHWH34IxUQbh8hrIIOOSL2BXEWUQzCvo9IJdENeAXEWRQTDXgMIJwyDVrK//yxd8IAmD9KAY9OTZi/+7T7/+v/bQGzgun//+PyE8f+eb/yC9MMwAY1BKU80gAPccGBfIQNX6AAAAAElFTkSuQmCC");

},
471257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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