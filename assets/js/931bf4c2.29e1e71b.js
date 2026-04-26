"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["708304"], {
618547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_lag_and_frame_loss_ide_insight_session_frame_ide_insight_session_frame_md_931_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-lag-and-frame-loss-ide-insight-session-frame-ide-insight-session-frame-md-931.json
var site_docs_ide_lag_and_frame_loss_ide_insight_session_frame_ide_insight_session_frame_md_931_namespaceObject = JSON.parse('{"id":"ide-lag-and-frame-loss/ide-insight-session-frame/ide-insight-session-frame","title":"Frame分析","description":"开发应用或元服务过程中，如果发现有表单滑动不顺畅、页面交互延迟、动效不流畅等卡顿现象时，可以使用DevEco Profiler提供的Frame场景分析能力，录制卡顿过程中的关键数据进行分析，从而识别出导致卡顿丢帧的原因。此外，Frame任务窗口还集成了Time、CPU、Network场景分析任务的功能，方便开发者在分析丢帧数据时同步对比同一时段的其他资源占用情况。","source":"@site/docs/ide-lag-and-frame-loss/ide-insight-session-frame/ide-insight-session-frame.md","sourceDirName":"ide-lag-and-frame-loss/ide-insight-session-frame","slug":"/ide-lag-and-frame-loss/ide-insight-session-frame/","permalink":"/harmonyos-docs-site/ide-lag-and-frame-loss/ide-insight-session-frame/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Frame分析","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-frame","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"性能问题定位：深度录制","permalink":"/harmonyos-docs-site/ide-profiler-introduction/deep-recording/"},"next":{"title":"ArkUI分析","permalink":"/harmonyos-docs-site/ide-lag-and-frame-loss/ide-arkui-analysis/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-lag-and-frame-loss/ide-insight-session-frame/ide-insight-session-frame.md


const frontMatter = {
	title: 'Frame分析',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-frame',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = 'Frame分析';

const assets = {

};



const toc = [{
  "value": "查看GPU使用情况",
  "id": "查看gpu使用情况",
  "level": 2
}, {
  "value": "查看指定时间段内所有进程的Frame数据统计信息",
  "id": "查看指定时间段内所有进程的frame数据统计信息",
  "level": 2
}, {
  "value": "查看指定Frame页面布局信息",
  "id": "查看指定frame页面布局信息",
  "level": 2
}, {
  "value": "查看指定时间段内指定进程的Frame数据统计信息",
  "id": "查看指定时间段内指定进程的frame数据统计信息",
  "level": 2
}, {
  "value": "查看指定Frame信息",
  "id": "查看指定frame信息",
  "level": 2
}, {
  "value": "查看屏幕帧率动态变化场景下丢帧和卡顿信息",
  "id": "查看屏幕帧率动态变化场景下丢帧和卡顿信息",
  "level": 2
}, {
  "value": "支持动效场景调优",
  "id": "支持动效场景调优",
  "level": 2
}, {
  "value": "查看组件动画信息",
  "id": "查看组件动画信息",
  "level": 2
}, {
  "value": "查看组件帧率信息",
  "id": "查看组件帧率信息",
  "level": 2
}, {
  "value": "查看帧率统计信息",
  "id": "查看帧率统计信息",
  "level": 2
}, {
  "value": "Anomaly泳道：查看解码过度耗时和超过阈值的序列化、反序列化操作",
  "id": "anomaly泳道查看解码过度耗时和超过阈值的序列化反序列化操作",
  "level": 2
}, {
  "value": "User Events泳道：查看用户事件耗时",
  "id": "user-events泳道查看用户事件耗时",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    del: "del",
    h1: "h1",
    h2: "h2",
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
        id: "frame分析",
        children: "Frame分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发应用或元服务过程中，如果发现有表单滑动不顺畅、页面交互延迟、动效不流畅等卡顿现象时，可以使用DevEco Profiler提供的Frame场景分析能力，录制卡顿过程中的关键数据进行分析，从而识别出导致卡顿丢帧的原因。此外，Frame任务窗口还集成了Time、CPU、Network场景分析任务的功能，方便开发者在分析丢帧数据时同步对比同一时段的其他资源占用情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(365984)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在任务分析窗口中，可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-profiler-appendix/ide-shortcut-key",
          children: "快捷键"
        }), "缩放时间轴、移动时间轴、添加时间标签等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frame分析支持离线符号解析能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-insight-session-time#section186881175012",
          children: "离线符号解析"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frame分析支持Energy泳道，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-profiler-energy#section889733410010",
          children: "定位能耗问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看gpu使用情况",
      children: "查看GPU使用情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Frame分析任务并录制相关数据，操作方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/deep-recording",
            children: "性能问题定位：深度录制"
          }), "，或在会话区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open File"
            })
          }), "，导入历史数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "“Frame”泳道显示当前设备的GPU的使用率，将其展开，子泳道显示Render Service侧帧数据和App侧帧数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(186041)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "一帧的绘制，一般需要由App侧提交渲染到Render Service侧，然后Render Service侧再提交给硬件进行合成渲染，因此App侧的帧和Render Service侧的帧存在关联的情况。并且可能多个APP侧的帧/同一APP侧的多个帧提交到同一个Render Service侧帧上，出现帧之间的一对多的关联情况。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "一帧绘制的期望耗时，与fps的大小有关，一般情况下fps为60，对应的Vsync周期为16.6ms，即App侧/Render Service侧的帧耗时，一般需要在16.6ms以内。App侧帧/Render Service侧帧判断卡顿的标准为帧的实际结束时间晚于帧的期望结束时间。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在“RS Frame”和“App Frame”标签的泳道中，正常完成渲染的帧显示为绿色，出现卡顿的帧显示为红色。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["除“RS Frame”和“App Frame”泳道外的“ArkTS Callstack”、“Callstack”、“CPU Core”等泳道信息，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-insight-session-time",
              children: "基础耗时：Time分析"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-insight-session-cpu",
              children: "CPU活动分析"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(542386)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1546",
            height: "646"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定时间段内所有进程的frame数据统计信息",
      children: "查看指定时间段内所有进程的Frame数据统计信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在时间轴上拖拽鼠标选定要查看的时间段。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "框选Frame主泳道。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "窗口下方的“Statistics”区域中会以进程维度对选定时间段内的Frame信息进行统计，包括卡顿率、卡顿次数、最大连续卡顿次数、最大卡顿耗时、平均卡顿耗时以及平均正常耗时等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(445590)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1544",
            height: "509"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Statistics”列表中任一进程的跳转按钮，在“Frame List”区域将展现该进程对应的Frame列表。体现各帧的起始时间、总耗时、GPU耗时以及卡顿丢帧类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(373419)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1541",
            height: "624"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击“Frame List”列表中任意一帧，右侧的“More”区域会中显示该帧更多关键信息。在获取该帧的预期起始时间、预期持续时间之外，您可以单击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(33030)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "18",
            height: "16"
          }), "跳转至关联的切片。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定frame页面布局信息",
      children: "查看指定Frame页面布局信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 5.1.0 Release版本开始，支持查看最新录制的Session中指定的Frame页面布局信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.1.0 Beta1版本开始，", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(641115)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "20",
        height: "21"
      }), "按钮中新增Frame Layout开关，开发者可自行设置开关状态。开关关闭时，不支持查看最新录制的Session中指定的Frame页面布局信息，默认关闭。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂不支持在Wearable设备上查看指定Frame页面布局信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击RS Frame泳道或APP Frame泳道中任意一帧，“Details”区域中会展示该帧具体信息。点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open Layout"
            })
          }), "按钮，将在ArkUI Inspector中直接打开相应arkli文件；点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Download Layout"
            })
          }), "将arkli文件下载到指定目录，之后可手动导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-arkui-inspector",
            children: "ArkUI Inspector"
          }), "查看页面布局信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(298008)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击“Download Layout”或 “Open Layout”前，需应用进程置于前台，才能正确回放全量渲染数据，获取arkli文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(851868)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1546",
            height: "678"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkUI Inspector中可查看组件树和组件属性信息，当前支持BackgroundFilter、nodeGroup、nodeGroupReuseCache组件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BackgroundFilter：背景滤波器。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "nodeGroup：节点组类型，0表示非节点组节点，1表示被动画标记的节点组，2表示被UI标记的节点组，4表示被用户标记的节点组，8表示被前景滤波器标记的节点组。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "nodeGroupReuseCache： 0表示在生成缓存或无需缓存，1表示在重用缓存。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(594211)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1355",
            height: "609"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定时间段内指定进程的frame数据统计信息",
      children: "查看指定时间段内指定进程的Frame数据统计信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在时间轴上拖拽鼠标选定要查看的时间段。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择要观察的子泳道（例如带“RS Frame”标签的泳道）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "窗口下方的“Details”区域中会显示选定时间段内的RS帧统计信息列表，体现各帧的起始时间、总耗时、GPU耗时以及卡顿丢帧类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(992551)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1545",
            height: "712"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击列表中任意一帧，右侧的“More”区域会中显示该帧更多关键信息。在获取该帧的预期起始时间、预期持续时间之外，您可以单击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(159310)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "16",
            height: "13"
          }), "跳转至关联的切片。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定frame信息",
      children: "查看指定Frame信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在子泳道（例如带“APP Frame”标签的泳道）中选中要查看的Frame，该泳道上方是耗时最长的非UI函数，下方是UI主线程泳道。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618214)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1525",
        height: "620"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口下方的“Frame”区域中会显示选定帧的关键信息，如VSync编号、开始时间、App应用侧持续时间、App应用侧业务逻辑耗时、Render Service侧持续时间、GPU持续时间、总持续时间、卡顿丢帧类型以及可能出现卡顿的原因等。“Non UI”区域中会显示非UI耗时最大的函数，如开始时间、结束时间、持续时间，函数名等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471790)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在选定观察对象后，DevEco Profiler会自动关联与其相关的切片，用箭头连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该帧是由于超出期望结束时间引起的，则显示两条线，对应期望开始时间（Expected Start）和期望结束时间（Expected End），用于关联分析同一时刻Trace或者函数采样信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将鼠标悬浮在任意帧上，会冒泡显示该帧的Jank信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡顿丢帧类型（Jank Type）：No Jank（不卡顿）、AppDeadlineMissed（App侧的卡顿）、RenderDeadlineMissed（Render Service侧的卡顿）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(167665)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1533",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看屏幕帧率动态变化场景下丢帧和卡顿信息",
      children: "查看屏幕帧率动态变化场景下丢帧和卡顿信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frame泳道下新增Lost Frames和Hitch Time两类子泳道，用于识别和优化卡顿和丢帧现象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hitch Time：展示当前时间段内卡顿时长。计算方式为渲染前后两帧的间隔减去单帧耗时，若计算结果大于单帧耗时*70%，则视为出现卡顿现象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lost Frames：展示当前时间段内丢帧数。Lost Frames计算出的结果，六舍七入统计取整。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Frame模板并录制会话，如存在卡顿和丢帧现象，会在Lost Frames和Hitch Time泳道对应时间显示矩形图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(251658)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1548",
            height: "549"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "鼠标点选某一时间点，提示信息会显示该点所属时间段内的丢帧数以及卡顿时间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(833732)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1541",
            height: "215"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持动效场景调优",
      children: "支持动效场景调优"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在开发应用时，会使用到动效，动效的卡顿影响到用户的使用体验。DevEco Profiler提供动效场景的调优，能帮助开发者优化动效场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标放置在某个动效上，显示该动效的详细信息，包括响应时延、动效持续时间、完成时延、期望帧率、FPS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96948)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "响应时延：<=85ms 绿色，85ms~150ms 浅绿色，150ms ~250ms 浅红色，>250ms深红色。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "期望帧率：当前系统运行满帧帧率，如60HZ、90HZ、120HZ。智能刷新率模式下，不展示期望帧率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动效持续时间：根据帧率展示颜色，FPS大于达标帧率即为绿色，小于则为深红色。智能刷新率模式下，帧率可变，颜色为灰色。达标帧率与期望帧率的大小有关，一般情况下期望帧率为60HZ，则达标帧率= 60HZ * 91.7%。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完成时延：响应时延和动效持续时间只要有一个为深红色，完成时延为深红色。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Launch模板中Frame泳道点击detail区启动动效详情信息，more区域展示动效帧Animation Data List信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957698)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1546",
        height: "693"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看组件动画信息",
      children: "查看组件动画信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0.828版本开始，Frame泳道下新增Component Animation子泳道，用于从组件的角度展示应用中包含的各种动画类型，包括属性动画 (animation)、显式动画 (animateTo)、关键帧动画 (keyframeAnimateTo)以及页面间转场 (pageTransition)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Details页签中，可以查看每个动画的详细信息，包括起止时间、帧率、动画曲线类型以及影响的组件属性等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单击列表中任意一动画，右侧的“More”区域会中显示该动画所影响的组件属性的具体变化过程。", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(564325)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1857",
        height: "704"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看组件帧率信息",
      children: "查看组件帧率信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frame泳道下新增两类子泳道，分别为Display Vsync与DisplaySync_cb(tid)，用于对可变帧率的检测调优。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Display Vsync：该泳道显示对应时间段的屏幕刷新率，支持对框选的时间段内的vsync进行分布统计。区分“<=30HZ”、“30", (0,jsx_runtime.jsx)(_components.del, {
            children: "60HZ”、“60"
          }), "90HZ”、“>90HZ”。统计值包括框选时间段内各区间的分布比率、最小/最大/平均时长以及平均HZ。如果某场景满足了帧率改变的要求，当底层系统根据机制进行变帧，相应的情况会展现在对应的泳道，帮助开发者了解vsync的变化情况是否符合预期。该泳道仅支持在配备硬件屏幕的设备上进行数据采集。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DisplaySync_cb(tid)：该泳道显示对应组件的帧率，如DisplaySync、XComponent两类接口组件动画对应的帧率。调测时，不同场景下由于帧率可变，系统实际表现是否符合预期，需要有实际的检测手段。尤其是由于DisplaySync的渲染均在UI主线程执行，当存在多个需要渲染的组件需要同时执行时，只能在UI主线程排队，此时任何一个组件的延迟都会对其他组件的渲染产生影响，导致UI卡顿。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图所示，vsync2和vsync4中，vsync周期内的组件由于渲染耗时长，导致以下两个vsync周期挤掉下一个vsync周期的渲染时间，导致掉帧的情况产生。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(982209)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1138",
            height: "272"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择Display Vsync泳道，在时间轴上拖拽鼠标选定要查看的时间段。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "详情区显示当前时间段的屏幕刷新率，当前帧最大持续时间、最小持续时间、平均持续时间以及该时间段内平均帧数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(30290)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1546",
            height: "559"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点选Display Vsync泳道，可以查看当前帧的耗时和帧率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(520345)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1549",
            height: "508"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "框选DisplaySync_cb泳道，可以查看应用侧对应组件的帧率，渲染时间等信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(434468)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1541",
            height: "560"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时如果组件有可能的掉帧情况，DisplaySync_cb泳道显示对应的掉帧情况并标红展示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(337488)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1542",
            height: "570"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看帧率统计信息",
      children: "查看帧率统计信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frame泳道中的App Frame泳道和RS Frame泳道在框选时新增fps标记。RS泳道新增过滤按钮，用于过滤ArkWeb数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展开Frame泳道，框选一段数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "泳道出现fps标记，展示当前框选范围内的帧率统计信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(599422)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1551",
            height: "709"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开Only ArkWeb data开关，筛选过滤出包含ArkWeb帧的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(264511)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1543",
            height: "363"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "anomaly泳道查看解码过度耗时和超过阈值的序列化反序列化操作",
      children: "Anomaly泳道：查看解码过度耗时和超过阈值的序列化、反序列化操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果工程中存在图片资源，并感知到解码绘制/渲染过程存在卡顿，可以通过Anomaly泳道查看主线程解码过程中是否存在解码过度耗时告警，并确认发生告警的时段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用中使用了worker, Taskpool工作线程等场景，通常会触发跨线程对象传递，并触发序列化和反序列化的操作。对于耗时超过阈值的序列化、反序列化操作，Anomaly也会给出对应的耗时告警，并给出发送这个操作的开始时间和耗时时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在时间轴上拖拽鼠标选定出现告警的时间段。当耗时超过VSync周期的50%时，将在Anomaly泳道中出现红色告警，提示“Image decoding has exceeded 50% of the VSync time”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "详情区给出录制时段内解码过度耗时的统计情况，包括类型，图片名，计数，总耗时，最小耗时、平均耗时、最大耗时，耗时标准差、 图源尺寸大小，目标尺寸大小等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(246800)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1544",
            height: "614"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于耗时超过阈值的序列化、反序列化操作，Anomaly也会给出对应的耗时告警。其中可以通过泳道启动配置按钮配置检测阈值，默认配置阈值为8ms。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "详情区给出录制时段内序列化、反序列化耗时情况统计信息，包括类型、计数、总耗时、最小耗时、平均耗时、最大耗时、耗时标准差等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(185805)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1542",
            height: "612"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(464898)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "已上架应用市场的应用不支持录制Anomaly泳道。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-events泳道查看用户事件耗时",
      children: "User Events泳道：查看用户事件耗时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在卡顿丢帧场景可通过User Event用户事件，查看用户事件开始时间、应用开始处理时间以及应用处理耗时等情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择User Event泳道，在时间轴上拖拽鼠标选定要查看的时间段。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "详情区列表给出录制时间段内用户事件详情，包括用户事件ID、事件开始时间Input Time、应用开始处理时间Processing Start、应用处理耗时Duration和事件类型User Event Type。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(703240)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1508",
            height: "605"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点选User Event泳道中的条块，Slice详情区展示该事件的详情信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(171210)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1546",
            height: "476"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多性能调优最佳实践，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-click-response-optimization",
        children: "点击响应时延分析"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-complete-delay-analysis",
        children: "点击完成时延分析"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-zhenlv",
        children: "帧率问题分析"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-click-response-delay-analysis",
        children: "Web点击响应时延分析"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-completion-delay-analysis",
        children: "Web加载完成时延分析"
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
96948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
167665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752829-dcbf6218f16f43ada70650455e68249c.png");

},
641115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAACEElEQVQ4EaWT3U4aQRTHfSgShPlkpeEBlrXuzOqVpc3uAtcF3gSkUNO0Agt41domVsT9wlJrekXQJygihHDfwCYCyWJbm8zFJOf8zvmfOfPfGE+mTz4bTybHk+la+PRrq9e/6fVvTs9a6xr4w0eVKkQIwvlB+KhS8+VX4Lv78ceTz7bTEcU4wkSWGWMMYyLGJdvpfDr5MhiOlquswPlCMRaLURrBGHOueHmM87kKuBWNFopv/GHbvSSUQoj2XyQymWz36tq0XdN2r65/vs7kEi9fbUWfhcLAdi8f+EXnZCodDG7WjMZ4MrWcDmPcm5kxbjmd8WRaNerB4GYqlfaBGeMRQTAazcFwxBgHAKiqpqoaAIAxPhiO6o1jSgVRknzgUvkQE6rs7bVNC0CoarqXpKo6gLB9YXFlFxNysDT2Qnap/BZjqii75xersDaHTZtzhVJaKh/6dGazmFBvHP+6u5cZDwOg6bqm6wAAeS7baDQjgiBtP/eBk8l0IBCoGfXZg9muzDiACEAkM27Z7h8e7N37DxgThPFsVdlc9/sP03JMy+l862ayuf1EAiFMKHV8VzWeTPOFYigcxpgAiBjnnrzZzhDGhIRC4fxB8UGzjzEqVeO8bUrSNsJkR2Y7MsOEiGL8rNU26s1l0gf2wp4xAIAAQIjQXxljufDckre9/u0/W3K5yiP3xSd5JGld6L/g35K+vevoQ/eLAAAAAElFTkSuQmCC");

},
464898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
298008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
185805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912896-81bde78a929230cfe700de16e097ad88.png");

},
564325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832843-8ebaca4f31b71c67ee777c2bbe493650.png");

},
337488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752871-7946231a4df6dcc43540f254e528983d.png");

},
703240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752833-1a24d94a2c655cb7ad712822f76f1b6b.png");

},
445590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832811-b22707be13827ec8395b85a0c9af0ace.png");

},
982209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABHIAAAEQCAMAAAGclpO+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFEUExURQAAAOoALukAL/Ly8kmGJP/fZIuydPX484CrZmmbS8bZuv////z9/ODr2sDVs+rx5oWubNjl0cSsUDIvIM+2VNvb20xMTJ6enj09PWpqasTExJ2+iXyoYU2JKeXJW31vOR0dGiIhG4CAgKamph4eHtTU1BcXFw8PD66urrW1tY+Pj729vVVNLMzMzOrq6i4uLiYmJmNjY+Pj43l5eVRUVFtbW5eXl4J0O0Q+J8uyUmFXMIiIiDU1NXJycrGcSdW7VvvcYkRERAgICN3p1/j69uXu4LXOplWOM1tSLiwqH1BJK5WEQfbXYb3Tr+jw5Ih5PEpEKFGLLfD17czdwufv4/fYYTczInNnNklDKI60d8GqUG2eT/n7+F6UPuHFWiYlHOzPXrnQq419P3ekW9i9V6TCkaiUR9Tjy2NZMOgALu8ALwAAAMP96A8AAABsdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJZTWVQAAAAJcEhZcwAAFxEAABcRAcom8z8AACEaSURBVHhe7Z3ti+PItcbVqDswER1mEvxpN4Smm/EHb38YejCztCFtGLKQFwI9C+GSTW4mm5vMkv//+62XI6lKlkqn5Cr5qP38xmOVqo5Kj44fH8uvXfxXFkvW0xNbuJ2qOTAdYy8UwohU9ET1ba9WDiKLQmnu2b5Bj5ulXTPXiUgwWVI9CYCeMBL1VGU5ePnhoId1eT7oYV60nlIQ0BMGesIsUM9lA3W0PbSuoR6FXX/qwY440BYK6mj1bKuiLDcb0/bR4T96G+l25XYo9KrFrl813NDy6sqOOOjw185GVk9RFtuyKN6V22JH3S4m3kAdafVYqKPVU+6qcq9r5AG0hYI62h5a11CPwq6TBA874kBbKKjD3l67cqv+l5VSdWoYfp6VKD3GNdS26Fvhz9/6t4V2KDW7uLdMBz23WkTq6e5KK7FQhyK408DQdxP0dOcjMQrqUFxWnwZ3Wpkk9EFTL9o/MwA9YSTqkQT0hIGeIIuVoyK7wb0be512o964XliR9uWrzgtztstDvxDWQXV42x3gj4UiXdq4C1ryNm2Cms0OcSbiymkJzBuCtxnkhJAnx3tZavxycdDDulwc9PRdjJwofqJlJLzNICcE5IRYnhzzLFRjV39qO9znltTT9NFLYB401EKbtBN5cjaDL4c5LzZZOf7rYwq9+rXTR8+ar66+oaWChlp0vPc6Vi1nVRT3ZbkrzIpPZ5tAdnrlONBQi47/5GzUyCmKu01RVqowHqDDDXaVeWORAg8aaqFNfDmFyUnRJ6WHiVZWjy0MGFbuIOeObl6t8ubVN8EH/3a4vLz2bkVCb2Y8aFe70FCknO965JgXbmldEZTzaliOeY0tUo7a5ECOgdYVAykYzY4x9JK9Y4CcEGcmJ5Ize2ITCeQAS77ssGYOfkqL4MRoMhxKwintVOZaXw3MPB6luuqLGR3ITjeMridhPi1nrvxZjpjykHZybzed+7gb1fPipu2mJUnupRNWx8UWIr1ZvROaoqG7noOJhXMik/Y2kAZkJwSyEwLZCYHshLDZoacVmZj4VGgiKfeG7IRAdkIgOyGQnRDITghkJ0SS7JiXzDXPtPRfW9d6qXsopIUGL/9m3hwz0IiFXuUfhcID0OwuNNJA2dHvaBXlVl/pzx6U5Wqrm3e6OQ7Nbd5yIGjE4GWnP6SFBumtQwONWOjgPdpP17dQeACa/fLyDS1Hs/P4sCnVwlwpmG8A0txps9NCIxY6eI8js2PejTXQSEMnO/fFg2ooy9xvy53CBh1J0rpDBz8KhQegjLjQSEOn7txW9hsmyjuFgfqPIml2Rkm5tyRVuQ+6NfTtMaiXbmYXGvGgiYbuix3qvdE2zK1qaBvaKm92dL1jZaepHDTiYabSRZrWw3jZ0VWO1nmYraxsRc7svDK7YmTnf2mpoBEPNYmt5bQexsnOZ/5WNSq+lq3APcuHtsmdHYfB7GQh5d6QnRDITghkJ4TNTl7wnkQIZCcEshMC2QmB7LxIkJwASE6AEyen73NfHRghuUi6ZzvZ2JS8KI2KSRgWT7JZrUJzCcx5ENUX64zoyL4QTSfMrMVjP25oG915ps45gNpRs7dhwlF6oB4zy/7ATljvJzMZ6K0oK3YGZ5ppM/bRTh448E5Ue0T+6YnqpYHQXF7YZOymRg+1Go6YtQ/edD1RB+duTGGJ9ftknTyCeU+jmSA5AZCcAEhOACQnAJITAMkJgOQEQHIC2OQ4P78TdfnhoGfq5eKgJ+fl+aCn91In59TM+/YfEyQnAJITAMkJgOQEQHICIDkBkJwASE4AJCcAkhMAyQmA5ARIkRz69LcLjTRQtwcNWerk0JgLjRD0o5+jUHgAmt6FRmrEJmfgS2wf6QsBY2RJTqEuK924XW02m3vTNwbN7EIjDdTtQUOWg+QMfJ2uJzlPfV/ci0hONfANyjo51UNZru51Zm51fjbl1nwDtFTdDGhmFxppoG4PGrIcJGfgm5i9znmipUOMc7jJKcr3RbF7rFRju9vtTpgcvnN6yZEc/evA6vKgr9jQzC400kDdHjRk4RbkUyTnHSVnU1X627CqX2ep95eLD6GZXWikgbo9aMhyyuS00EgNFWSVCpUfdbfa3Zf6PqVys9sVib4szKFOzhgnSY5CJ6e81VVHZ0eP2ZBZ4CZnVig5NZtyXZRVsTfmMQmbiSUk52ScV3LoXnxYm1uoPLj0lQqaJzRTH7TRxK3MZjmTU5mnALTeAyXk6upmTY3B5JhfU6F1JmqDN7+bslUrO69zwt+ap4QomlPcQec034lnYzZT0CoTs0ktO2tyuM55Mn8oQDOYHH1N60z0VloArTKpt8qeHDqsQSghV0/tc6O0NcdsSqtM6q2yJ8dC6z1QQlwGkvNzUwdonYnaYNpWFr2yjORYaJ0JbSQyOZHw/izLzCA5AaQkB08fAiA5AZCcAEhOACQnAJITQHByTg8+3h8AyQmA5ARAcgIgOQGQnABITgAkJwCSA14QcA6YBpwDprE45xSBn6maQKLZJGpKg/4IGzV9JIm0aEXmx8XsL4zphv1Vs/oIaMHBTqC3pWZ3LtM9it1Wb0bNadMQdgq9NTU7s9nu2XF32ijxuz1OIjKITqNdGHX2ov7ra0PTGGdsrno5wqgkO8QkPBv1zofdf7Nzajddalk3fPp7T0qtVC/q9HpHQksO4bnsNYMxSfyZNGlnOxrHs+Rp29mqaFsOvZ1y4MrjvOLBmmt8orQZY8yW/dUcrYHOZpqrpm/wvHKgWwZ8cclu8LGJ0uaLNVt257QMuaSPtJk4GcmyO+PNxEWgJA2c4wPncIFzfOAcLnCOD5zDBc7xgXO4wDk+cA4XOMcHzuEC5/jAOVzgHB84h4vjHPqqyCJJ9v1Zgd/eEfmFIu8rRdSzSJJlF87hAuf4wDlc4BwfOIcLnOMD53CBc3zgHC5wjg+cwwXO8YFzuMA5PnAOFzjHB87hAuf4wDlc4BwfOIcLnOMD53CR4hz6ieYRKPgQyi6FjWGDe+neTLTFCBScBzgnCN0EI1DwIXKdQ3/ibzrm19dbaNqjINUjUPAQYp1zbf9whw8FHzLknN5ZjnHO5/JT+7fCGii4D/O7+wx+RcsRMjnn9Y/UcKDgITznFPZv6N0X96X+k4OKR3Ndqev3xUYFaPZbsygoOg2k1iWFc3pnOcY5l5dZnPP3q74/KdlDFud8FXtQGtc5FXlh1ThHGWdzq52zedgVxVrHb2tTlXfn6Zw3eWrOKZ1zefmfxM65K/b6b1eqAfpTsKbUrLfFg2aNmlNDwX3QLT7KaZ0TeXfQhGtOeafrzO2DcUyx049Z21Vl1xQ6IhGkdgQKPmTYOX3Y4F7GndMHBfdBt/gop3XOkY9WpfaGYqMtYZxTPLwrdpX56576b1iqZbHd6wF95pMUUjsCBR+yfOcwyeScPih4CM85j/osRvXpvx5MJzOEKTBrZSkdoR+qzAMWDQqge4NPJtlENR/L5yO5oKWifP5I054ezzll9bgu6MR3o+rPnTLMflOqB6uVctNKe8l6K33NORK5zjkegZI0vnP6WNmz4+rROIqcIw04Z3bGnSMMehB20L3R2aVXZMeg6JNySudQih1o4Gyd85FOOEfgOoeUONBACrrHRntoof4c0B4caGDRzinpmaTuPdo5T79U/w+eGUc659Plq/rlIxpIQb9zni8v31CT+nNgd6Bxs21YsHPcGylJzfnyT2o0xNec5+/skgZSMFhzaptSfw7sDjQHd4mlOqe+vyl07/HOeXr7d2o5xDqn+kyNGZzzuXl1nPpzQHvoZNuwUOf8qfr++vqTbeveo53zdPPN73//Da00xDnnqz/ZpYYGUtDvnMY3MzjncyfbBpwhh8AZ8gE0AOeEgXMOoIEFOqefWOcMkuyHeNKR7NjSAuf4CLyZ4JycwDmzA+f4wDlc4BwfOIcLnOMD53CBc3zgHC5wjg+cwwXO8YFzuDjOWTL4DfbZgXN84BwucI4PnMMFzvGBc7jAOT5wDhc4xwfO4QLn+MA5XOAcHziHC5zjA+dweSHOAbMD54BpwDlgGnAOmAacA6YB54BpLM85RTrJRZK59G9tUjMNiafLxNKck/Jm0hMlmixpGkU5ZzDhkkR6eHpt23ZNyOvgXPUaj0TTEIOzpS5hxzGoRZJIgxak/htdtq0TSb2aiLzSVmYD2+7M5TQC0AYm1La709RLDrSd2cS2/dns+ux4OyUlrageTiEyjFJUJ083VVu37ELjHeIIeoLQXG0jiN42ME1kkdBTDM+mG7Y1D2bndkFtvXvqVVeDYob6T4fVbQWbdOqWzqfusE02duvBubhT2Q0Hp1G0rXHs9kOzNUNzYQTUamodjRzFgJz+3lPSpFAtTFuvOkcycCC9hOdizxSeRtO2xgnOpk9Ih+/nObAC7C5jDq6/96RQ3vTCNM1/dSQktV6yoGC9ME3zv57LjnEITqNpGhzGZmsas1B7xMjRbb2q5ZheTdty6e+dif7PDxhJdL/TV+a/uqq7zDUT2sIu6v/qynSpK+ZkJio0jR7wCXw2wkQPzUbtHAxIcvZqmub/+N2iv3cmRj950qo/nkRzcafhfaom5QGOMuQcc2WV6CvzX12ZLnVlBg4Z6J6HcefQMgWJ5uJOw3QOLWdhXFKMkWeV3mXsUFKKSzQXexqWc+bNPsM5tOQwr/YOvPvlMhF4bKOSoswA52Riic6JAs7JBJyTEzhnVuCcRQDn5ATOmRU4ZxHAOTmBc2YFzlkEcE5O4JxZgXMWAZyTEzhnVuCcRQDn5ATOmRU4ZxHAOTmBc2YFzlkEcE5O4JxZyeacqixnvlwc9Ey7/PBDt2fq5fmgZ+rl4qBn4kWgJHNxnEN/fWZGBP6J52S8+D93dFLnCP3LTUmAc3IC58wKnLMI4JycwDmzAucsAjgnJ3DOrMA5iwDOyQmcMytwziKAc3IC58wKnLMI4JycwDmzAucsAjgnJ3DOrMA5iwDOyQmcMytwziKAc3IC58wKnLMI4JycwDmzAucsAjgnJ3DOrMA5iwDOyQmcMytwziKAc3LiHMolCwoehMJGoGAOtMUYFO0C5+TkDJzzlBo77STqdJPoESh4EDgnCG0xBkW7JHPO1RU1LHbaSZyLc17/SA0HCh6EwhymzOJAWzj8vKKGC0W71M65SgucYwg453VVfU1NBwoehMIaps3iQFu0VK/zOOeX31JjhEzOeaalAwUPMuKch0Jfr3fl+tasKx7LW4I6phNwzleXbxI4Z9osDrSFSw7nfLt+e0rnXFc9B0XBg7jOeW9sovr0slib5lZf71Rbr7/Tf0m2UOMWPXQUAedcJnHOtFkcaAuXHM7599WXUzrnx76DouBBhpxTGec82p69aav/m8qYSvepCLM4hqBzPiVxzpRZHGgLlzyPVid1Tu9BUfAg4ZpTbMqdWrxfP77b2RpjhnSjWRxB0DnnVHNenHPercvbwj5E7R42esjWnJ1mn9k5/0ninCmzONAWLnCOJeScqnjYFY9VVW2bAU1ZPBgyOwePVn0sxDn7hzvTtTHXW/Vkaq1blV5LQdA5Uh+t+qBol7N2jr5W/1eP6hxH805VIXW1tmuFjTiGoHP6oOBBKGwECuZAW4xB0S6Lcs6vkzuneF+Wd0WxL1ZVqc9ztnt1xqMevqq9PnE+Gjgnmkw1pwcKHsR1Dj0HJ9OoK3WWszN96jnWqnhQy7KoVFuNwDkuFO1yVs65N6ZQD0mq0hjnqEekvXkpcL27153qpFgZaaWeWK3X6upeDx2D45wXx1k5R53F6C77oGUKT30uvCmKx1I9m7o3Jz7qedXdWl2t7OB0zsA55fPH53R8pEmnkTbdrnPKrSoy6mxYlxzrHF1mHlWVKfRD1e5OPbkyrirL5Oc5L45kx/YDLY8no3OUI5R1TH+5e69rkLbM/brY3xYr+x4WOSf5ec6LQ+CxZXWOR6XfqrpXz77Vg5aylH0QU5cG3XEMcM6szOccQ/XOLu/35oT4aLe4wDmzMrNzcgLnzMqZO4eeMzrQQBT0od5Dkn/oVxATJFGKW6hfca7OoZdHwrCdQ0paMjqH9uBAA6PAOR1oIAo4hwftoYX6FQt1zueqrOpvNdBAFAfOeXp7c3ND7YZY51xXv6NWfue8fr6mVn7nfK6+r7NN/YqFOudn6n/9/i4NRNF1jvla06+671dHOkctPtXN7M75dPkqNgGTneNkm/oVC360Sukcw8EnHSY8WjUJzu0cRf3ZIxoYZbJzNC/IOW8+U4MGouhzztPbg0pE0aOQksvLv87pnOo7u6SBUY5xTp1t6lcs1jkfmxYNRNHjnG9vDjqjneM8gOR3znXdpIFRjnBOdbivpTqn+is1UjnnywdqOMQ653NtnDmcU9U1dwbntNmmfsVCnfPRLgw0EMWBc/7RY5xY5/ypuVVncE71a2rM4Bwn29SvWKhzquvvv6+fldJAFAfO+fPbDx8+fKGVmkjnNBVnBud81VScGZzjZJv6Fcs9Q26ggSh6znN6iHWOxjazO+cXel+fbJsGRpnsHAfqV8A5AaLPkBuyO8eFBkaBczrQQBRwDg/aQwv1K+CcAHAO7aGF+hWLc05epH7oNwlpJcE5mYBzcgLnzAqcswjgnJzAObMC5ywCOCcncM6swDmLAM7JCZwzK3DOIoBzcgLnzAqcswjgnJzAObMC5ywCOCcncM6swDmLAM7JCZwzK3DOIjgn58zPBS1fIgKPLa0kOCcTcE5O4JxZgXMWAZyTEzhnVuCcRQDn5ATOmRU4ZxHAOTmBc2YFzlkEcE5O4JxZgXMWAZyTEzhnVuCcRQDn5ATOmRU4ZxHAOTmBc2YFzlkEcA4AAKQDJQcAMCMoOQCAGUHJAQDMCEoOAGBGUHJmQGaSi0KSLllqQD5wO+dG3ZcE3pusJCnKZKnpQeRtuFCQyLxop0q2qyhpYvOkKw7uKb2Y1CholQESOUadTZNWm17d0yTZdtNI09dZo1ZK6knN7GZ3psfZq/nfDNg+d03hrRxDPY+Z0OzE9DTT224aafrcNYXbTkg9rdmX3afuafZmu2mk6XPW7KBtA5/4vCCRY9Rm0wvHeG63v+JGGbrraXD36ezBk+KtuFHEYc9U3D05s3oCvBU3yqx460mpZ9YLZy9ut7/iRnXGXx71gZkjVFcap9s01P9mwPbVa00Xn/gtzg6b1fq6SZjfra9p2ImxHHSkwd316XW5O5ykprcrDe7uo7XV407Xi6I+ss6Bu93+ihul2wZa5RATe67ohLZJbRLsdNejZqheaYi7Rfj4O4vUlVyUv4tINURvZwL8HcZo07EN1PfCsMdVXzcH6XfraxruS0RMcviRZ4zKp5vSOr9tdz1qR+q1mpjbIwo1rzt1jC63nQg1pb8Hu9J216P9WVJkS5TemTt3vLZ80k6PPrT28NSR2rbTXY+aoXrFo7ezH37kGePcCiblddKaVrs0DbUwmD53g8Q0+zDLnh22S9NQC0PbUpiAFDSTmWU7c9Nql6ahFganWW+SnGZus2x31LTapWmohcH0adz2i0Mdm3t49bG23fWoHanXHGLSw498aST4Rn5Enlmk+pGAdLpSKEqcpaS/pJBGW9ofd0hClCRVMGwezLItH02rXZqGWhj8JpeY2JfF8T6JSjSHRNZNqCuBotRZSnn/TqQtpaREJJGU3OCGLJMugiNvlMjSziKFT9LqOlZRhiwlu3+n05ZMUjrSWIkaackz6xJ4oT5JC5LE4SVKyvBgQaDkCEKeJCSJAyTFgJIjCHmSkCQOkBQDSo4g5ElCkjhAUgwoOYKQJwlJ4gBJMaDkCEKeJCSJAyTFgJIjCHmSkCQOkBQDSo4g5ElCkjhAUgwoOYKQJwlJ4gBJMaDkCEKeJCSJAyTFgJIjCHmSkCQOkBQDSo4g5ElCkjhAUgwoOYKQJwlJ4gBJMaDkCEKeJCSJAyTFgJIjCHmSkCQOkBQDSo4g5ElCkjhAUgwoOYKQJwlJ4gBJMaDkCEKeJCSJAyTFgJIjCHmSkCQOkBRDb8kpz4GLZ2rIQZ6kC1oKApI4CJRUc8Ylh5aCkCfpJ1oKApI4CJRUc74lBz5hgCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciTNKLoMiU05xi43TgIlFSDkuNB7k8CTRmBL4mmSQPNGcuIc2nyNNCcY+D+zUGgpBqUHA9yfxJoygh8STRNGmjOWEacS5OngeYcw5f0JIErWvZBOueme8NRjpNAU04FJceDkpoEmjKCl1lyXpc/UisMzTlGt+RciQYl5wCUHA9Kaoi/faqqr6kdhKaMILrksLWcquS8vq4USSUurOR8JKEz82JLzmq/pVZZ7nfv1PVmZdfkM63kfK7Kr98IKTkRWk5Vcr5SJzjXyyk5//jL25t/JZ1xQWc5GR9LPYZKzv3t5t5GWG5vN7axut1QS1EUu4qa5bq4q8rNXVHoymNY3d4+7FVH8b7cqmuXBwo5IdNKjkZKydEILzmaxZSc37z98K9vUpecpZzlZH0s9egtOaqMvPfLwr0qE/b85bEo1nWZcStOudMlR6ECbvWSqsz77aqs9IoarC/rZZec64r14gRNGcGEksPUgpLD4+mbm99SMw2Lei2HeUvRlFMZOssJlRxbWnTFeU8tzfumv7zdbJsQ+8xLlRyztCy+5GS6ZSaVnKT35y4pSs7qrEvOkl7LYd5SNOVUokuOKh62tKzUUyjV2Kmqsn33sNutzUlNzUsuOdlumQklJ/H9uUuKkoOznBMwqeRkO333mFRy9PK2KB5VXblTtUSd+Ox3D3sVUdFzJ40tPYZ1pbbywFlOHxNKzgLOcs675CzpLCebsT0mn+WosxtD82xqUxTt68qGSs+inmJVVXm72+tyZAtStXfe6DoZKDkMUHKOBK/lHDD9iZUqIKq3fTVHrTxutg97W4ve6y51JmSfWG1uD/7p7pMyveQwoSkjmFByuNCcsaQoOVxozjEWVnJwltNl8hMrxQO9N1Wf8Gju9g/bjX6PSmO7dqvy/W6/05e1fgpmmu4Lz6cBJYfBuZWc5ODTxwcMlZx3/ttRuuTY1eYsZ7Uu1ma5uX3c6Fdx1CZmQJ/u6GV5V6jTnK2eyawqdu676icGJYcBSs6R4NPHBwyVHFUsmo/fKFSh2bclRy8f7SmMoi5NK1NqVnf1+ZF+R8s8sdo1HypEyQmyuJJzChZWckjn3Cyt5KiyoOpHXWQU+iTnti05pvXu4VaVEvOSMKHOZ9SoeevcTKC2p9dy9PY+9lnaKRF/b5IASs6R4CzngKGzHP3hmfq7C/pbDHXFaUtOQ/PNiI0KW5vXhd+r51h3DyqMSo4tTZU6y9FlzN/8VKDkMECSOFz8QA05CMxSzXDJsZXGst40ZaJ+YlWutu8oQFeV1YNuqTJlTl/qU5225FjEP7E6LSg5DCCJg0BJNYGSo6iqUhWbTpWwq+pEptg/mtFb3S7udFsVnrt7/QyLnjjZkrOrWRdrau12NuB0wCcMkCQOkBRDuOSw2Kva054FqXKjqF+qsSVnc7s5oH6idjLgEwZIEgdIiiFByTlAzHOnIPAJAySJAyTFkKPkLIOZbhR6lT8IheaXRL/HmwiadGZw/+YwiySybwiKdEHJyQylPgiFCis5V/T+M60eQpOmgpIRQoct7/5N4kNQZDpQcgRyniXHVpEkpP7ICSUjhA5DyeGAkiOQk5Scr6+fq+v/+47WaihURsn55Tc3Nx/+wIjEWU4NSo7m9ZuPh96mSBeUnMxQ6i3Pn9TVqzdV58aiUAkl5+lXf1Exf/zy9sN4aM6znM9VVX1/8MchdNjCS059YP6PYVFkOuYvOf3epkgXlJzMUOo93gwY7vQl54kinr7c/HY0liZNBSXD8j928ezXHB228JIzfGBJmb/kEB1vU6QLSk5mKPUur6rKP/2kUAElp+bvNzd/HC05M7yW0/lpTB228JJDdP6YAkWm41Qlp+ttinRByckMpb7l1XV1Tc0aChVTcv7x4Wb8edUcr+VcV5+pZdFhL6LkvOk5sKScpuRob/+a2haKdEHJyQylvkY9lffNpqFQGSXn6c/rm39SO0jus5zXVW9tXn7J+Vn/gSXlFCVHeft31GygSBeUnMxQ6i2fuy8cWyhURMn5DeOFY0ves5xVVf6Vmi06bOkl501VvqJmC0WmY/6S0+9tinRByckMpd7wVc8ZjoZCJZScf7/9A7VGyXmW8+rgPMCgw5ZdcgIHlpTZS86AtynSBSUnM5R6g36D1KLfUGyhUAkl5zdvb+jfF+oZJOdZjsrUdXn9vfrnZUqHLbvkqAP7XtF3YEmZveT8gpzd8TZFuqDkZIZSH4RCJZScCPDp45qIkjMARaZj9pIzAEW6oORkhlIfhEKXVnJo0lRQMkLoMJQcDig5AkHJORKc5dSg5AxCkS4oOYLIL+lj+awufC5o2cXMkxgyaQgdhpLDQWCWalByBCFP0sUzNeSA240DSo5A4BMGF7QUBG43Dig5AoFPGCBJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIigElRxDyJCFJHCApBpQcQciThCRxgKQYUHIEIU8SksQBkmJAyRGEPElIEgdIiqG35JwFF7QUhDxJSBIHSIoBJUcQ8iQhSRwgKQaUHEHIk4QkcYCkGFByBCFPEpLEAZJiQMkRhDxJSBIHSIoBJUcQ8iQhSRwgKQaUHEHIk4QkcYCkGFByBCFPEpLEAZJiQMkRhDxJSBIHSIoBJUcQ8iQhSRwgKQaUHEHIk4QkcYCkGFByBCFPEpLEAZJiQMkRhDxJSBIHSIoBJUcQ8iQhSRwgKQaUHEHIk4QkcYCkGFByBCFPEpLEAZJiQMkRhDxJSBIHSIrhfEsOAGB2/vvf/wd2rquMjANknAAAAABJRU5ErkJggg==");

},
159310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAA80lEQVQ4EZ2Ruw6CUAyGz67MEkaU/fAW4AzO6lN4WTXOxNk4i04ajatGCV6IT6LiZa/pSTjKEZMThw5t+n/t35L4/oTVevN3EFnAYDDMHCIF8Lw+EEKg0Wx9QaQAaNGy7EyINOATYttlvgm53h48EY85Xyyh2WqD61aAmiYLtIJRrdWZjpwvMQThPgVBIYqS5oKqAqWU2cjl8qze6fbegGN0gnB3YAUUlwyDTxn5Yw7PugPbAAEY2yAEx3GZWHxbUhc/kQLsDxHgijhJvAdaEMXYkwJMZ3NQFAXw7yLgV54C+P4ENE37H4Ab6HoRRP+/pmP9BQDVZzUOrC8JAAAAAElFTkSuQmCC");

},
594211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752900-6cf6919e001192a9dd11b7bd7aac78ed.png");

},
957698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912924-89a15b1c956cbe049c0180e9d2638fef.png");

},
851868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912882-e6d3aa5b22f15bbfb33e5a915923894e.png");

},
186041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
33030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAABHElEQVQ4EaXSuW7CQBAG4O2Ja5BLCL15C5waU0OegqMlSo1SW9Q4VFyiTQTGXKJGiCRKzxVI/aNZiRXYXmSgmMJrzzfHmm13//j6+cVsvrg51tsd2OZvj4/P7l0xX3wHh0yzIi0WGCqX38AYQy5f8MUCQzR6MqlLsaugU0zXn8464xBtXLbsVruDfKEIw0hDSyR40IgUmeyzyOPQcrWB7QzFIaEEUPIxKRyJQNM0Pl4o9MDPSy+vIkdA48kUzmDEXxDyGI+LqlXrXSTI9nQGEdazHaRSBkfc130897s5DzQcTUCtU2X33mg0P4S+80D1RguKooD+Gzd06dkDWVYNqqreD1FH0WgM7v1c6sZ3NFp4vdG8aiwpZPcHN0EHx9V5UOMv+ikAAAAASUVORK5CYII=");

},
373419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752841-1bf74cfe67e6cb89ceb673b99f461106.png");

},
833732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832845-6c06aa1aaab1059443dc0c4fa6f05bf0.png");

},
471790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
542386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752902-ee5806fc0684d2d5661cb313dca57c4b.png");

},
599422(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752908-c101b74fbf8a950fe8d0b57c568e2076.png");

},
434468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912902-ccc10eb4158a8f27930ad28634b8af58.png");

},
618214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752857-08a023b099dfb7961d132cd7fbe7a436.png");

},
992551(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832831-1d468da7cef412a6d22f171897ed19be.png");

},
264511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752888-2b048c60344ea9568417d3d95897a03f.png");

},
30290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752849-ee0f2d887be125a15b4729054d15f919.png");

},
246800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832799-b1be30b18173b33b4b0f3f30aaaae4fc.png");

},
251658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752821-c081bf651a174095bd0894b13f045bd9.png");

},
365984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
520345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832803-1f28fb5735945d7ce1745a7e6c014987.png");

},
171210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832853-e33efaa897f9280684db5cda294cbe74.png");

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