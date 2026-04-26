"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["76983"], {
732659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_launch_overview_ide_profiler_launch_case_ide_profiler_launch_case_md_db5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-launch-overview-ide-profiler-launch-case-ide-profiler-launch-case-md-db5.json
var site_docs_ide_launch_overview_ide_profiler_launch_case_ide_profiler_launch_case_md_db5_namespaceObject = JSON.parse('{"id":"ide-launch-overview/ide-profiler-launch-case/ide-profiler-launch-case","title":"案例：应用冷启动首帧完成时延问题分析","description":"应用冷启动首帧完成时延是指从用户点击桌面应用图标离手开始，到应用进程首帧绘制结束的时间。本案例介绍如何找到应用冷启动首帧完成时延起止点，以及如何通过调用栈和trace信息分析应用运行逻辑，定位应用冷启动首帧完成时延超预期的原因。","source":"@site/docs/ide-launch-overview/ide-profiler-launch-case/ide-profiler-launch-case.md","sourceDirName":"ide-launch-overview/ide-profiler-launch-case","slug":"/ide-launch-overview/ide-profiler-launch-case/","permalink":"/harmonyos-docs-site/ide-launch-overview/ide-profiler-launch-case/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"案例：应用冷启动首帧完成时延问题分析","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-launch-case","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"Launch模板基本操作","permalink":"/harmonyos-docs-site/ide-launch-overview/ide-insight-session-launch/"},"next":{"title":"Snapshot模板基本操作","permalink":"/harmonyos-docs-site/ide-insight-session-snapshot/ide-snapshot-basic-operations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-launch-overview/ide-profiler-launch-case/ide-profiler-launch-case.md


const frontMatter = {
	title: '案例：应用冷启动首帧完成时延问题分析',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-launch-case',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '案例：应用冷启动首帧完成时延问题分析';

const assets = {

};



const toc = [{
  "value": "分析步骤",
  "id": "分析步骤",
  "level": 2
}, {
  "value": "录制Launch模板数据",
  "id": "录制launch模板数据",
  "level": 2
}, {
  "value": "分析Launch数据",
  "id": "分析launch数据",
  "level": 2
}, {
  "value": "确认首帧完成时延起止点",
  "id": "确认首帧完成时延起止点",
  "level": 3
}, {
  "value": "案例：应用首页加载耗时较长导致应用冷启动首帧完成时延不达标",
  "id": "案例应用首页加载耗时较长导致应用冷启动首帧完成时延不达标",
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
        id: "案例应用冷启动首帧完成时延问题分析",
        children: "案例：应用冷启动首帧完成时延问题分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用冷启动首帧完成时延是指从用户点击桌面应用图标离手开始，到应用进程首帧绘制结束的时间。本案例介绍如何找到应用冷启动首帧完成时延起止点，以及如何通过调用栈和trace信息分析应用运行逻辑，定位应用冷启动首帧完成时延超预期的原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用冷启动分析基础功能请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-launch-overview/ide-insight-session-launch",
        children: "Launch模板基本操作"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分析步骤",
      children: "分析步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分析冷启动首帧完成时延类问题步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认应用冷启动首帧完成时延起止点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "框选应用冷启动首帧完成时延起止点位置，查看耗时是否超预期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若超过预期，根据调用栈和trace信息进一步确认问题点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "录制launch模板数据",
      children: "录制Launch模板数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["连接设备后，点击应用选择框选择需要录制的应用，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Launch"
            })
          }), "模板，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Session"
            })
          }), "或双击Launch图标即可创建一个Launch的录制模板。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建模板后，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(958395)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "38",
            height: "34"
          }), "切换启动模式为", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(684149)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "38",
            height: "35"
          }), "手动启动。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工具控制栏中点击齿轮图标", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(371820)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "22",
            height: "20"
          }), "后勾选Hitrace > multimodalinput。用于采集多模子系统的trace信息，这部分信息会包含硬件传递过来的离屏信号，即多模子系统收到点击离手事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(906155)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1202",
            height: "647"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击三角按钮", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(410307)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "22",
            height: "21"
          }), "即开始录制。等待界面出现弹窗提示启动应用后，需要手动点击设备上的应用图标启动应用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(553646)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1540",
            height: "630"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "待右侧泳道全部显示recording则表明正在录制中，等待应用冷启动结束后可以点击下图中方块按钮或者左侧停止按钮结束录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(991072)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1871",
            height: "631"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分析launch数据",
      children: "分析Launch数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "确认首帧完成时延起止点",
      children: "确认首帧完成时延起止点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "冷启动首帧完成时延起点确认："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首帧完成时延起点是用户点击桌面应用图标离手的时刻，即多模子系统收到硬件传递过来的离屏信号的时刻。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于离屏信号对应的trace点耗时较短且不方便记忆。因此，需要优先找到桌面进程收到点击离手事件的trace点（H:DispatchTouchEvent）来辅助定位首帧完成时延的起点位置。具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["找到桌面进程收到点击离手事件的trace点（H:DispatchTouchEvent）。在Profiler面板点击搜索框选项区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search Unit Data"
            })
          }), "搜索泳道数据，在搜索框中输入H:DispatchTouchEvent后回车，通过点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(405577)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "27",
            height: "23"
          }), "或者", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(645997)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "34",
            height: "24"
          }), "按钮切换搜索结果，找到桌面进程泳道（ohos.sceneboard）中type=1（0：手指按下；1：手指抬起；2：滑动）的H:DispatchTouchEvent点并添加标记，为方便后续查找，可以通过双击标记，在弹出的标记属性框中修改标记描述为点击离手事件。该trace点就代表桌面进程收到点击离手事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(727948)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1543",
            height: "616"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["搜索多模子系统泳道（mmi_service）。点击搜索框选项区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search Units搜索泳道"
            })
          }), "，在输入框中输入mmi_service后回车，该泳道可能有多条，需要通过点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(473717)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "27",
            height: "23"
          }), "或者", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(463008)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "34",
            height: "24"
          }), "按钮切换搜索结果，找到包含trace片段的mmi_service泳道。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(662482)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1543",
            height: "320"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "借助桌面进程收到点击离手事件trace点，继续定位多模子系统收到点击离手事件的trace点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在mmi_service泳道中找到位于点击离手事件标记位置前方的CPU Running条块（此段时间表示多模子系统正在运行），在该条块下方找到H:service report touchId:{id}, type: up（或H:service report pointerId:{id}, type: button-up）的trace点并添加标记，然后修改标记描述为首帧完成时延起点。该trace点代表的是多模子系统收到点击离手事件，即冷启动首帧完成时延的起点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(304869)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1552",
            height: "562"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["冷启动", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "首帧完成"
                })
              })
            })
          }), "时延止点确认："]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首帧完成时延止点是应用进程启动后收到的首个硬件垂直同步信号的时间点，即Render Service（统一渲染服务进程）将应用首帧渲染结果呈现到屏幕上的结束点。定位首帧完成时延止点具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["找到应用进程启动后的首个垂直同步信号trace点H:ReceiveVsync，这个trace点代表应用的首帧开始绘制。选择应用进程子泳道，点击搜索框选项区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search Unit Data"
            })
          }), "搜索泳道数据，在输入框中输入H:ReceiveVsync后回车，找到第一个H:ReceiveVsync点。", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(798985)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1544",
            height: "567"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用进程启动后收到首个垂直同步信号时，会通知Render Service进程进行图形渲染，因此需要优先找到应用进程通知Render Service进程进行图形渲染的三个trace（H:FlushMessages > H:SendCommands > H:MarshRSTransactionData）。由于这三个trace耗时较短，不便查看，因此需要使用搜索功能来确定。框选H:ReceiveVsync trace点，点击搜索框选项区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search Units Data"
            })
          }), "搜索泳道数据，在输入框中输入FlushMessages后回车。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(205243)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1545",
            height: "522"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "找到trace点H:FlushMessages（代表绘制消息） 后，继续在该trace点下方逐层分析，先找到trace点H:SendCommands（代表发送绘制指令给Render Service进程进行图形渲染），在下方再找到trace点H:MarshRSTransactionData（代表发送了绘制指令），这3个trace点就代表应用进程通知Render Service进程进行图形渲染的流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(572996)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1588",
            height: "306"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接着需要找Render Service进程收到应用进程首帧渲染通知的trace点，点击H:MarshRSTransactionData条块，“Slice Detail”区域可以查看该trace详情，包括trace名称、所属进程等。点击“Slice Detail”区域中Name后方跳转按钮", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(453231)/* ["default"] */.A) + "",
            width: "16",
            height: "15"
          }), "跳转到render_service泳道的H:RSMainThread::ProcessCommandUni trace点并添加标记，然后修改标记描述为收到渲染通知。该trace点就代表Render Service进程收到应用进程首帧渲染通知。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(884925)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1544",
            height: "616"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接着找到Render Service将应用首帧提交硬件上屏的trace点，该操作在Render Service送显线程（RSHardwareThrea）中完成。点击搜索框选项区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search Units"
            })
          }), "搜索泳道，在输入框中输入RSHardwareThrea后回车，查找位于收到渲染通知标记位置后方的第一个H:CommitLayers并添加标记，然后修改标记描述为提交硬件上屏。该trace点代表Render Service将应用首帧提交硬件上屏。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(730473)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1540",
            height: "531"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["最后找到Render Service将应用首帧渲染结果呈现到屏幕上的trace点，该操作在Present Fence中完成。点击搜索框选项区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search Units"
            })
          }), "搜索泳道，在输入框中输入Present Fence后回车，查找位于提交硬件上屏标记位置后方的第一个H:Waiting for Present Fence，该trace点代表Render Service将应用首帧渲染结果呈现到屏幕上，trace点的结束位置就是冷启动首帧完成时延的止点，在此处添加标记并修改标记描述为首帧完成时延止点。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(818107)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1554",
            height: "529"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "案例应用首页加载耗时较长导致应用冷启动首帧完成时延不达标",
      children: "案例：应用首页加载耗时较长导致应用冷启动首帧完成时延不达标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(117961)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本案例基于应用进程启动过程中，在Ability的生命周期回调函数中做了耗时操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "预期冷启动首帧完成时延不超过600ms。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "框选应用冷启动首帧完成时延起止点位置，通过框选区间的时间长度看出，冷启动首帧完成时延超过800ms，比预期的600ms长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换到应用进程Process泳道，查看主线程（线程号与进程号一致）的trace。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(210678)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1554",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下方详情区展示Details信息，包括trace名称、起始时间、持续时长。将持续时间（Duration）降序排序，可以看到主要耗时在H:void OHOS::AbilityRuntime::UIAbilityThread::HandleAbilityTransaction，该阶段主要是AbilityStage/Ability的启动生命周期在执行相应的回调。从这里可以看出，是因为AbilityStage/Ability启动生命周期的回调执行时间较长。接下来需要分析调用栈，通过调用栈分析回调执行时间长的原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(456005)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1554",
        height: "628"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接着切换到ArkTS Callstack泳道分析ArkTS侧耗时函数。优先查看线程号与进程号一致的ArkVM子泳道（该泳道为主线程调用栈），可以看到ArkTS侧一些方法的耗时。从下图中可以看到ArkTS侧无函数执行，需要切换到Callstack泳道看ArkTS和Native混合函数调用栈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(698047)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1549",
        height: "637"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后切换到Callstack泳道，查看Callstack泳道的主线程（线程号与进程号一致）子泳道，查看下方Heaviest Stack区域，滑动观察权重占比最大的函数调用栈，定位到耗时主要是EntryAbility.ets文件下第79行代码引起，双击该栈帧可以直接跳转到源码文件的对应位置上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(118218)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1549",
        height: "629"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结合业务代码查看，可以看到是因为在EntryAbility.ets文件下onCreate()中做了耗时操作。耗时操作建议通过异步任务延迟处理或者放到其他线程执行，以降低主线程负载，缩短应用冷启动首帧完成时延。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(385165)/* ["default"] */.A) + "",
        width: "722",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多应用冷启动优化方案，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization",
        children: "应用冷启动时延优化"
      }), "。"]
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
798985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833023-915d88011bb45f7a058ecacec7f0a8ab.png");

},
698047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753039-5fe0b7bb820b703bee018f33cc68a4b5.png");

},
385165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753122-56ecda878958286427b3eca9fb3bd38a.png");

},
727948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753132-745dee90d008293733892981eaae35f7.png");

},
117961(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
410307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAIAAADNQonCAAAAtklEQVQ4EWP4+PkrhYiBQv0fP38d5kYcu/bVtOx7UOe3Y9cIBzb2sEiY9I0r8jsEJU7+9vglPoOwG+FcD9UPMUUy+XvPhm+44o4oIyAGqed8334Gi0EkGAExyKXh+5UHKP4i2QiuyO+mZd+RPUWWEaWUGeFcT4FH1CgJTomk7z3rscQFJESwhwVy0kqYRFbSAiXwUsoSOHKcEWRj9whBbcgKQEZ8+PQFWYhUNsiIdx8+kaoNWT0AAdWq8UcdEEAAAAAASUVORK5CYII=");

},
662482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913124-9a9c58f6d10cb6698b31cc57fe38d06b.png");

},
958395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAiCAYAAAAzrKu4AAADeklEQVRYhc2YzUsrVxiHn5mJySBMBS/Wj0U2hRJ3LhT8C0ShiAURCZaiZlmCq+yEISBCEERxWWfTICRUuwiIH7jqogs3IZZSaIMLlZFeeiud3HRumuR0kU7amHgzaceP32rOe97zzjPnnHnPhySEELxA+e4bSqUS5XKZSqXyJACKouDz+fD7/Q12yemxarWKbdtPBtQKUFVVZFkGQHYqnhMKoFKpYNt2vSxDbfieE8pRpVKhVCoBf4OVy+VnBfq3HBYZeBG95chhaforvZIQgkKhwM3NDZZlEQqF0DTNdXvPwa6urjg+PmZra6upzjAMxsbGXMWRhBDCsqz/DWRZFvF4nKOjowd9BgcHOTk5aRtL0zRveuzs7IyVlZW2fqZpuo7ZEZhlWaRSKdLpNKZpsrCwAEAymXTVfmJiwnuw/f19dF1vsLkFchQKhVz7yu1d4Pz8vAnqv2hyctK1b1swIQRLS0ttA6XTaS4uLshms0Sj0ZY+Q0ND3oFdX1+3DaLrOsPDw0BtMY5EIi19FEXxDuz29rZtkGAw2FCWJImBgYEG28zMjGsoV2D3X9Dqz9rZ2WkoW5bV8EGHh4cd9RaAouu67qzordTT00N/fz93d3cYhsHs7Cz5fJ58Pl/3MU2Ty8tLgsEguVyOaDRKoVAAakM4Pj7eEVQgEOgs89u2TTKZZHFxkVgs5iqL53I5JEnqCEzTNHfpwoGanp4mlUoBkEgk2ibMcDjcMZQjV2AOlBACwzCYmprCMAw2NjbeCxeJRBDA9M+C794+Atjm5mYdanl5GSEE8/Pz7O7usra2RjgcbmozMjJCX18f3/9RK3/5urPDmCuwWCxGJpNhe3sbIQQHBwfE43FSqRRdXV0tU4GTZL/6VfBJj+B1Gcw/PQaTZZnV1VWy2SyZTAag/lwsFpmbm2tqMzo6ypsy/GjD568kPnslkXzjMVi1WqW3t5dMJoOqqmiaxunpKaqqtlwZdF1HkiS+/q1Knw9+eichIfjWErytugPzZKO4vr7O3t4eUEvAiUQCZIVP883z6osPJSY+eH88TdO828He18nvsPOL4JuPJBTpYduTg+XfQbcMg13/2CoCfrDh44AgID9MVgcrFosv5ginKArd3d21ye/zPdoprmM5LDKA3+/vePV/DCmKUr/1qacLVVWfFc657XEk3b+4eyn3Y38BIjiRlP+ZOwcAAAAASUVORK5CYII=");

},
118218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753140-7b0902b55c745f39b0ba8dbd99b96fc8.png");

},
884925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913120-ed09b29c01f40dcd614b7c786f840b98.png");

},
730473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833013-d359a2718ac57a5c4a5c48095c24e607.png");

},
405577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAAB10lEQVRIDe2US6tBURTHr8/gAzBQjDA1oDwKZaL4ACYSX0CZIGMTA0opAwakRCZKYmQu8ogw8shAEfL43/YpIux7jtfo7snZe621/7919tpr/+CL4+eLLLwMazabmE6nrHJ+CnY4HLBcLjEYDODxeFAqlT4HWywWqFQqMJvN4PP5CIfDn4F1u12EQiFotVrIZDL4/X40Go33w2q1GtxuN3Q6HUwmE6LRKEjNVqvVe2D7/R7z+RzlchlOpxNKpRIWiwWJRIKBkPqxHdQLstlsMBqNkM1mYTAYIBaLYbPZUCwW2epfxVFh7XYbgUAAQqEQPB4PXq8XrVYLx+PxSoTtggrz+XyQSCRQq9VIJpPo9/tYr9dstW/iqLBMJgOr1Qq5XM7UiRznZDK5EWFroMLG4zFyuRzsdjtEIhEDjsVi6PV6bPWv4qgwErndbtHpdJiXgvyhRqNBMBjEcDgEualc6vcn7DK1eDwOhUIBgUAAl8vFtMRut7sMoc45wUi/FQoFOBwOSKVSprHz+TxmsxkVcnJygpFNBFitVplnSqVSwWg0MgmcBGlfzjAiRq4/qWMkEoFer0cqlaIxzr6nYOfdANLpNOr1+qXp4fxl2EPlO45/2J1D4W76BbE0NRH5SpNyAAAAAElFTkSuQmCC");

},
210678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753098-54e53ddba265bbe342e1c827899eecc1.png");

},
205243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753134-f152cb1900758a64d4b73c51f91efa64.png");

},
453231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAIAAABiEdh4AAAA4ElEQVQoFZWQMQ+CMBCF+Y0dGV39C44yMnSAxcTExcUBWcCEhcXEpAsMDDgYFhJXY6StIDUIoaVSoskNbe59d/eelubF73W7P7RRtYOo6ZXfrSkAQGa4lcQogTQvtkcKIJtvXnGGe0wJnM74EBHDrSRGBvyPSLdrAJlYDqLtkgFgeiWAbLaqTa90EPUjsg6fALLlnjvhgBU0aivgybQeRHWaFx0QZ1i368WOT4ozLM0enOSgJpAwIX0aaV74ERHzGQDtPaJa9e5O+hsIEyLaVY3npicUUovHKjVGv5drE+sbiuxvjFiqm94AAAAASUVORK5CYII=");

},
371820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAACL0lEQVQ4EbWU3U4TQRTHeagm2O7u7FBq+gBl0e4uXGEx/by27ZsAFTRGabstXimYIKX0U5tKvCLIEygiMV7/zTl2G2JXtzVycTK7M+f8Zs5/5py56+8/cBs2Nw308G0DZ+ef2A6PGlMdxBe8W65A1TSo6sg0gd1y1RfuCb68usar/QN0un3EYkvQhI543IRpmhBCR2zJ4LXX+2/w5es3z008wRubJUSjUUi5ACEELMseB5uWNcpAxWIkgs3S4/HaTVknwJ3eO+hScuprDxLI5wsYDE/R6vTYhqcf8ShfRGL9IRYjdxEMKaCYm1D6ngBnsjnMz99B1amzc7vbh2laY43pm+YouOLU2DebzfmDKXAhHIZT32P96F9RFCSTKbaQovBGpG2t/hJShhEzDH/w9s5TCF3CXl1Fs9WGoqpIptLjwGQyzXPNkzYsewVC17HlofOEFNs7TyCEhG2v4PjEA5wagVsdvlQpJegwvhqbls3pUZqfL68QNy1Q+ql0mo1koTmSguQi2Yzle/7gTCaHQCCAqlNj53anxyBF1UBGUJqb+fKePX/BRaAJAX5uhSIGww9otbts/fcD5AtFrCUS0DTBT7M7zXOjk1CBBEMh3oBOSUXhashPTxN8acFgCBtbpfGa60PjxOW5i+WKg+NmC4axzCV9P26CjF4BlflRowmntucJ/SvY3cBtQoqigowa0j83IRfqjr/a5gXOzi/w39qmC591/KPGs4J+97818E/SRa1F7yAvYAAAAABJRU5ErkJggg==");

},
553646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753100-76865c402780f44c5cffd750725c264f.png");

},
463008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYCAYAAACfpi8JAAAB7klEQVRIDe2Vv6uBURjHjf4Cg1EpsSoWyWDBaBBlIElJGezKZFImyWAQCyXJopSFpJCMFj9DBiTk1/d2Tt1y5dZ73rPc4b7Le87pOc/3c57z7TkS/JFP8kc48A/yfhNMFdnv9+j3+7hcLu95uOdMIKPRCIFAAL1eD7vdDvf7nRvgOwETSL1eh1QqhdlsRrFYxHa7/c7D/WcCmc/nSCaTMBgMMBqNiEajGA6H3BAkARMI8cZkMkE+n4fL5YLJZILf70ej0cDpdOICYgIhSs/nk5q1Wq3C6/VCp9PB6XSiXC5jsVjgdruJAmIGeVXpdrsIh8NQKBS0OplMBuPxWFR1uEBIdZbLJVKpFGQyGeRyOUKhEAaDwSuvoDEXCFG4Xq9YrVaoVCqw2+1QqVTweDyCxF+DuEFIk2s2m/D5fNQvFouFVuhVRMiYC4SYs1Qqwe12Q6PRUNPmcjnMZjMh2j9iRIE8Hg/qjWw2C5vNRs0aDAbR6XRwPp9/CAidMIMQCHIdsVgMarUaSqUSiUSCtnyhop/imEAOhwNarRa9Cq1WC4fDgUKhgM1mw/3uMIGQl9dqtdL2HolEUKvVsF6vPx2QeY0JpN1uQ6/XIx6P0xf4eDwyC/62gQlkOp0inU5Tj/yWUOw6E4hYESH7/kHeq/QFdJQ95OjryyUAAAAASUVORK5CYII=");

},
572996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753071-55ae970c585be9655a81d9e93dfbaa0d.png");

},
818107(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833011-1a0e0904cb8424c08d5cfefdfdd46d8c.png");

},
456005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913096-2f08527b4b96bf67b9589d5c85a7354c.png");

},
906155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753021-200eaadf5e7f1b2b68cb2e5e3b2e34f9.png");

},
684149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAjCAYAAAD48HgdAAADWUlEQVRYhc2YvUsjWxiHn5mJcdZlEALiR5HqFglsqZC/IGgTLERUbPy4bbAKWAhDwE4QxdapApKAFncg+IF/gU0wtzRYqMTdQoQJcQhJzi2ykzWazUz2Ztf8msk5533fefKemfecOZIQQtCH8r3tqFQqVKtVarXaHwFQFAWfz4ff72/pl5yM1et1bNv+Y0DtAFVVRZZlAGRn4COhAGq1GrZtN9syNKbvI6Ec1Wo1KpUK8B2sWq1+KNBrOSwy0BfZcuSwvHsreyUhBKVSiYeHByzLIhQKoWmaZ/+eg93d3XF2dsbe3t67McMwmJqa8hRHEkIIy7L+N5BlWSSTSU5PT39qMz4+zvn5uWssTdN6k7HLy0s2NjZc7YrFoueYXYFZlkU6nSaTyVAsFlleXgYglUp58o9Go70HOz4+Rtf1lj6vQI5CoZBnW9ndBK6urt5B/Yqmp6c927qCCSFYXV11DZTJZMjn8+RyOeLxeFubiYmJ3oHd39+7BtF1nXA4DDQW4/X19bY2iqL0Duzx8dE1SDAYbGlLksTY2FhL3+zsrGcoT2Bvb9DuzTo4OGhpW5bV8oey2WxX2QJQdF3XnRW9nYaHhxkdHeX5+RnDMJibm6NQKFAoFJo2xWKR29tbgsEg19fXxONxSqUS0JjCSCTSFdTg4GB3ld+2bVKpFCsrKyQSiY5V3DAMACYnJ5EkqSswTdO8g9m2TSwWQwjRXHY6weXz+a5g3oJ5qmOvoQzDYGZmBsMw2NnZ6VjNj54gdiP49n27l38RxG4ER0/u9/QEtru724RaW1tDCMHCwgKHh4dsb2+ztLTU0X/v6w9Qr/IElkgkME2T/f19hBCcnJyQTCZJp9MMDAy4loL8SyNL/770GEyWZba2tsjlcpimCdD8XS6XmZ+f7+g/4oOjJ8FIF1sGT2D1ep1AIIBpmqiqiqZpXFxcoKqqp5Xh7xGp5dozMEVR2NzcRFXVd2PhcLjlGYtGo2Sz2RabyGdYDEhEPnvm6t0Otp2OnhpT+M9fPzIVuxEsBiQWAz/381wuflVfPjUgXmsxIPHlk/txiSSEEOVyuW8+4RRFYWhoqJExn++3fcV1LYdFBvD7/V2v/r9DiqI0T32az5iqqh8K55z2OJLeHtz13flYv+k/aA9++Fa8fq8AAAAASUVORK5CYII=");

},
473717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAAB10lEQVRIDe2US6tBURTHr8/gAzBQjDA1oDwKZaL4ACYSX0CZIGMTA0opAwakRCZKYmQu8ogw8shAEfL43/YpIux7jtfo7snZe621/7919tpr/+CL4+eLLLwMazabmE6nrHJ+CnY4HLBcLjEYDODxeFAqlT4HWywWqFQqMJvN4PP5CIfDn4F1u12EQiFotVrIZDL4/X40Go33w2q1GtxuN3Q6HUwmE6LRKEjNVqvVe2D7/R7z+RzlchlOpxNKpRIWiwWJRIKBkPqxHdQLstlsMBqNkM1mYTAYIBaLYbPZUCwW2epfxVFh7XYbgUAAQqEQPB4PXq8XrVYLx+PxSoTtggrz+XyQSCRQq9VIJpPo9/tYr9dstW/iqLBMJgOr1Qq5XM7UiRznZDK5EWFroMLG4zFyuRzsdjtEIhEDjsVi6PV6bPWv4qgwErndbtHpdJiXgvyhRqNBMBjEcDgEualc6vcn7DK1eDwOhUIBgUAAl8vFtMRut7sMoc45wUi/FQoFOBwOSKVSprHz+TxmsxkVcnJygpFNBFitVplnSqVSwWg0MgmcBGlfzjAiRq4/qWMkEoFer0cqlaIxzr6nYOfdANLpNOr1+qXp4fxl2EPlO45/2J1D4W76BbE0NRH5SpNyAAAAAElFTkSuQmCC");

},
645997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYCAYAAACfpi8JAAAB7klEQVRIDe2Vv6uBURjHjf4Cg1EpsSoWyWDBaBBlIElJGezKZFImyWAQCyXJopSFpJCMFj9DBiTk1/d2Tt1y5dZ73rPc4b7Le87pOc/3c57z7TkS/JFP8kc48A/yfhNMFdnv9+j3+7hcLu95uOdMIKPRCIFAAL1eD7vdDvf7nRvgOwETSL1eh1QqhdlsRrFYxHa7/c7D/WcCmc/nSCaTMBgMMBqNiEajGA6H3BAkARMI8cZkMkE+n4fL5YLJZILf70ej0cDpdOICYgIhSs/nk5q1Wq3C6/VCp9PB6XSiXC5jsVjgdruJAmIGeVXpdrsIh8NQKBS0OplMBuPxWFR1uEBIdZbLJVKpFGQyGeRyOUKhEAaDwSuvoDEXCFG4Xq9YrVaoVCqw2+1QqVTweDyCxF+DuEFIk2s2m/D5fNQvFouFVuhVRMiYC4SYs1Qqwe12Q6PRUNPmcjnMZjMh2j9iRIE8Hg/qjWw2C5vNRs0aDAbR6XRwPp9/CAidMIMQCHIdsVgMarUaSqUSiUSCtnyhop/imEAOhwNarRa9Cq1WC4fDgUKhgM1mw/3uMIGQl9dqtdL2HolEUKvVsF6vPx2QeY0JpN1uQ6/XIx6P0xf4eDwyC/62gQlkOp0inU5Tj/yWUOw6E4hYESH7/kHeq/QFdJQ95OjryyUAAAAASUVORK5CYII=");

},
991072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753045-23080478aff5279fc5dc9f5535a2aa02.png");

},
304869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753061-9f52aa249ce43b25e16744184423f50c.png");

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