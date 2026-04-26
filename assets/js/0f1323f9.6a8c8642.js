"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["422460"], {
3674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_insight_session_time_ide_insight_session_time_md_0f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-insight-session-time-ide-insight-session-time-md-0f1.json
var site_docs_ide_insight_session_time_ide_insight_session_time_md_0f1_namespaceObject = JSON.parse('{"id":"ide-insight-session-time/ide-insight-session-time","title":"基础耗时：Time分析","description":"函数耗时分析及优化","source":"@site/docs/ide-insight-session-time/ide-insight-session-time.md","sourceDirName":"ide-insight-session-time","slug":"/ide-insight-session-time/","permalink":"/harmonyos-docs-site/ide-insight-session-time/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"基础耗时：Time分析","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-time","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"GPU活动分析","permalink":"/harmonyos-docs-site/ide-profiler-gpu/"},"next":{"title":"CPU活动分析","permalink":"/harmonyos-docs-site/ide-insight-session-cpu/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-insight-session-time/ide-insight-session-time.md


const frontMatter = {
	title: '基础耗时：Time分析',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-time',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '基础耗时：Time分析';

const assets = {

};



const toc = [{
  "value": "函数耗时分析及优化",
  "id": "函数耗时分析及优化",
  "level": 2
}, {
  "value": "多实例函数热点分析",
  "id": "多实例函数热点分析",
  "level": 2
}, {
  "value": "离线符号解析",
  "id": "离线符号解析",
  "level": 2
}, {
  "value": "查询自定义打点信息",
  "id": "查询自定义打点信息",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "基础耗时time分析",
        children: "基础耗时：Time分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数耗时分析及优化",
      children: "函数耗时分析及优化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发应用或元服务过程中，如果遇到卡顿、加载耗时等性能问题，开发者通常会关注相关函数执行的耗时情况。DevEco Profiler提供的Time场景分析任务，可在应用/元服务运行时，展示热点区域内基于CPU和进程耗时分析的调用栈情况，并提供跳转至相关代码的能力，使开发者更便捷地进行代码优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备连接完成后，可按照如下方法查看耗时分析结果："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构建应用前请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile",
            children: "模块级build-profile.json5文件"
          }), "，增加strip字段并赋值为false（strip：是否移除当前模块.so文件中的符号表、调试信息，配置为false代表不移除）。采集函数栈解析符号需要附带符号表信息，无符号表信息可能采集不到函数名称，或ArkTS Callstack泳道无法关联到Native调用栈，因此请按照下图进行配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(302488)/* ["default"] */.A) + "",
            width: "415",
            height: "558"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Time任务并录制相关数据，操作方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/deep-recording",
            children: "性能问题定位：深度录制"
          }), "。或在会话区选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open File"
            })
          }), "，导入历史数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Time分析任务支持在录制前单击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(322421)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "23",
            height: "22"
          }), "指定要录制的泳道："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "User Trace"
                })
              }), "：用户自定义打点泳道，基于时间轴展示当前时段内用户使用hiTraceMeter接口自定义的打点任务的具体运行情况。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "ArkTS Callstack"
                })
              }), "：方舟运行时函数调用泳道，基于时间轴展示CPU使用率和虚拟机的执行状态，以及当前调用栈名称和调用类型。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用栈分类从语言层面分为ArkTS、NAPI以及Native，从归属层面分为开发者代码以及系统代码。从这两个方面可以将调用栈类型归类如下："
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
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "其中每一个类型的亮色和灰色分别代表开发者和系统的代码。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Callstack"
                })
              }), "：ArkTS和Native混合函数调用泳道。基于时间轴展示各线程的CPU使用率，以及在一段时间内的混合调用栈。调用栈类型会分为开发者或系统的ArkTS以及Native代码两类。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Callstack基于采样模式采集数据，默认采样间隔是500微秒。耗时小于500微秒的函数，Details区域时间相关数据可能存在误差，可通过录制过程中多次触发该函数，根据其耗时百分比判断是否为热点函数。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(959011)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴。或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将鼠标悬停在泳道任意位置，可以通过M键添加单点的时间标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段的时间标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在任务分析窗口，可以通过“Ctrl+, ”向前选中单点的时间标签，通过“Ctrl+. ”向后选中单点的时间标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段的时间标签，通过“Ctrl+]”向后选中时间段的时间标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将鼠标置于ArkTS Callstack泳道和Callstack泳道任意位置，可查看到对应时间点的CPU使用率。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["单击任意泳道名称后方的", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(628406)/* ["default"] */.A) + "",
              title: "点击放大",
              width: "21",
              height: "20"
            }), "可将其置顶。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Time分析支持Energy泳道，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-profiler-energy",
              children: "能耗诊断：Energy分析"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“ArkTS Callstack”泳道和“ArkTS Callstack”子泳道上长按鼠标左键并拖拽，框选要分析的时间段。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Details"
            })
          }), "区域会显示所选时间段内的函数栈耗时分布情况，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heaviest Stack"
            })
          }), "区域会展示出“Details”区域选择节点所处的耗时最长的完整调用栈。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中函数栈耗时分布有三种展现方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "默认为Call Tree方式，其中“Weight”字段表示当前函数的总执行时间，“Self”字段表示函数自身的执行时间，两者之差为当前函数所调用的子函数执行时间之和，“Average Duration”字段表示函数自身的平均执行时间，“Category”字段表示函数调用类型。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["打开页面下方的", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Flame Chart"
                })
              }), "开关，函数调用栈将以火焰图的形式展示。其中，横轴表示函数的执行时长，纵轴表示调用栈的深度。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(775898)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "火焰图条块支持搜索，搜索结果不匹配的条块会被置灰。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["“Ctrl+鼠标滚轮”的操作，或单击该区域右上角的", (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(302332)/* ["default"] */.A) + "",
                  width: "18",
                  height: "16"
                }), "、", (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(410890)/* ["default"] */.A) + "",
                  width: "18",
                  height: "18"
                }), "可放大和缩小火焰图的时间轴比例，单击", (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(855368)/* ["default"] */.A) + "",
                  width: "16",
                  height: "18"
                }), "可恢复时间轴比例为初始状态。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“Shift+鼠标滚轮”的操作可左右横向调整可视区间，单独操作滚轮可上下纵向调整可视区间。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["选中节点，单击该区域右上角的", (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(379746)/* ["default"] */.A) + "",
                  title: "点击放大",
                  width: "25",
                  height: "24"
                }), "，点击添加面包屑。添加面包屑后，该节点成为根节点，耗时占比为100%，子节点的耗时占比相对于该节点重新计算。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在火焰图中选中任一节点，使用“Alt+鼠标左键”可将该节点左置底并将其占比放大到100%，其上从属节点按同比例放大显示。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(594117)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1553",
                height: "597"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在“ArkTS Callstack”子泳道或“Callstack”子泳道上点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Unfold CallStack"
                })
              }), "按钮，可以在时间轴上将函数调用栈以冰锥图的形式展示。其中调用栈的先后顺序与实际调用时序保持一致。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(380091)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "1556",
                height: "493"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Callstack"
            })
          }), "泳道上长按鼠标左键并拖拽，框选要分析的时间段。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Summary"
              })
            }), "列表展示框选时段内，所有Native线程的CPU占用率的峰值、谷值、平均值。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Callstack"
              })
            }), "列表展示框选时段内，所有Native线程的函数热点。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(447910)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1543",
            height: "335"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "悬浮到节点，显示以此节点为根节点，点击添加面包屑。添加面包屑后，该节点成为根节点，耗时占比为100%，子节点的耗时占比相对于该节点重新计算。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(100069)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1534",
            height: "677"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Callstack"
            })
          }), "子泳道上长按鼠标左键并拖拽，框选要展示分析的时间段。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Top Down"
              })
            }), "页签显示所选时间段内的函数栈耗时分布情况，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Heaviest Stack"
              })
            }), "区域会展示出“Details”区域选择节点所处的耗时最长的完整调用栈。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Bottom UP"
              })
            }), "页签显示函数列表，展开任一函数节点可查看其调用方及每个调用方的耗时。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(119335)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "2151",
            height: "911"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Details"
            })
          }), "中双击需要优化的节点（例如耗时超过预期），可快速跳转至对应工程源码，为开发者节省定位代码路径的时间。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(803323)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release应用暂不支持跳转到用户侧Native代码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "静态链接的系统库无法支持源码跳转。如libunwind.a，在编译过程中该系统库会以静态链接的方式集成。该系统库的符号信息在调用栈中会被识别成用户侧定义的函数，实际上无法跳转到源码。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多实例函数热点分析",
      children: "多实例函数热点分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，可能存在一些耗时操作，则需要引入Worker线程或者TaskPool任务池来协同处理。这些线程也可能会像主线程一样存在性能问题，所以需要同时对这些子线程进行性能调优。其中，主线程以及每一个Work线程或者TaskPool工作线程，都会对应一个方舟实例，通过连接这些方舟实例，开启性能采样，从而可以获取更全面的采样信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父泳道内可以看到被选择进程的CPU使用率，框选后展示此时段内录制到的所有方舟实例的函数调用栈信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子泳道框选后展示此时段内录制到的该方舟实例的函数调用栈信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(26012)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1546",
        height: "622"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离线符号解析",
      children: "离线符号解析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler提供离线符号解析能力，基于携带符号表信息的so库进行分析，可把符号地址解析为具体函数名称，便于定位函数位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于有so库路径和偏移地址的采样数据，如图所示，通过导入对应的携带符号表信息的so库进行解析，补充release so库中缺失的符号表信息（包括系统so库，用户自编译的so库，三方库）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(936898)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1563",
        height: "727"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您可以通过点击工具栏", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912521)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "19",
        height: "19"
      }), "按钮，导入包含debug信息的so库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840582)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离线导入携带符号表信息的so库，需要严格保证与release版本的so库保持同一优化等级（如-O1, -O2, -O3等）。可以在CMakeLists.txt文件中查看或配置编译优化等级。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离线导入携带符号表信息的so库，需要尽可能与release版本的so库编译选项保持一致，防止so库起始地址不一致，影响解析正确性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(918180)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1560",
        height: "723"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询自定义打点信息",
      children: "查询自定义打点信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较于异步调度，DevEco Profiler当前基于采样分析的Time任务更善于分析同步性能问题。如开发者需要分析异步调度延时等问题，可先在ArkTS代码中进行自定义打点，当应用/元服务在Time分析过程中触发打点后，DevEco Profiler会将这些打点的Trace数据解析后，以任务方块形式呈现在“User Trace”泳道中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以在“User Trace”子泳道上长按鼠标左键并拖拽，框选要展示分析的时间段，获取该时间段内的用户打点信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单击User Trace泳道的“options”下拉列表，可以设置是按照Task Name维度还是Thread ID维度显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(521809)/* ["default"] */.A) + "",
        width: "397",
        height: "99"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Statistics页签：显示当前任务泳道在所选时间段内的打点任务统计信息，包括任务的名称、同一任务执行的次数、平均持续时长、最长持续时间和最短持续时间。通过这些统计信息，开发者可直观地了解打点任务的执行频率、持续时间偏差等，方便定位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User Trace页签：将所选时间段内的所有任务都一一列举出来，包括任务的ID、名称、起始/结束时间、持续时长等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，您也可以单击“User Trace”子泳道中的任意一个任务块，“Details”区域将展示该任务块的详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(254385)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，用户自定义打点信息，还可以在Frame分析、Network分析任务中查看到。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(906487)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1355",
        height: "466"
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
912521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABRklEQVQ4EbWTPU8CQRCG+aPScXRKBVIJVgiVWgnaGK00VhobY2yMVEQrjY0xNvj1G8Y8m7yb3b0NEnMWk7m7mX3mnZnb2vzjy6qw989vq1UBEuP/YFfXNzYYjqzX33R2cnpWGsHt3dTGkwMXP7+4jOKRssHW0FbXWrbR6zsLk19e3xxgpV63RtEsxWk1gqn31D8+PVtRNB0kLJDmedjh0bFhaQLvKEXN7P4hG9cZD1NrCsgDoLVUEfNN4b/CUAtMcPlc8SxMw6YyS2l3uk4FWyYGcCGMNpBOIgeYEUNnu5gWsBRM8uVRBZAW9TuEM0Lx3mQ/at+3mdumgMtsEhEelpsBCfxjmBTLL9wmsjvr3dIhHU49ard3dqN8r4xKzEb3kXnojuK5kwD5zkLITRV7GImhdKqqdbw2zXdM76HiCBYG/vJcKewHc8PYEvzD/00AAAAASUVORK5CYII=");

},
840582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
855368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAA+0lEQVQ4Ed2SvQ8BQRDF799Fh86diqjQcVSocCqiETqiEiqiEtEQlYh65G0yk9sPcolOsZnNzOzvvZ1d7/F80S/L++UwziYCNMIWZXN5Op0vllsLsFytraaCHyjAIBpZNQ0wmy8Iaua1NtudUu90e9QM21pdALAHpevtrjWYsGqtTgByXgDjyZTggAufIoQA4boAYD1ORkOpXFGLmzlioLwXAJr3h6MU0JBKZ9TiZo7I814A/WFE5gvArvl0mBHELADU4wVuMCOEMC/OiwMkMIdvg3SJaADYw4Tx3nHryOMTueakAdgWXACEaftBUf0P2Hb9ESeAQUniHwDeCbgf7RT9vs4AAAAASUVORK5CYII=");

},
322421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAABGElEQVRIDdXTzwsBQRQH8P1DudkbbrjhvxAlRO7iJE7kIrmIi+QiFrF+nZ++U0/T2hkTKzlMY+e9/bzXeGudLjf61rIYPp4utNnuabV2PlowYMEVOB4+Rb3vwxR4EB17cZgC9waCev4N3usPKJ3JGq3haOz7nyk7L1eqhDVfLAmFVFeFnFy+4BtX4pPpjKKxONXqdYrYNjWarScAZ8hBrl9xJY5kdJ1IpqhYKotdBgAjhhz5XP6txeUCcucmMN59iXOBUCj86BDXoOuYuzfCkSzjuGcGdPtbuFzof/B2pytGU9cxx4yvBbPOX6xqrhnl3RjHVyqPIwO63RjXIarYd3H3fKWNszOaW1WHfucwrYN7pv3BDRyHeQf1YSO1iEiUNQAAAABJRU5ErkJggg==");

},
594117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753572-5ade3d22cc7a638659d1872c0b93678f.png");

},
803323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
26012(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753517-7e712685784ace6a5d617804f6cc2880.png");

},
447910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753556-a52d2cbef2078d75400f2d6ea4b77090.png");

},
100069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753570-868ba9bbf3706ead33e58de49d98a3b3.png");

},
379746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAIAAACA18GRAAAB40lEQVRIDdWUv27iQBDG8zhE8gmkNWtBkcNDSxojkYa8Q+iNKRxHwFOAMbwA0GXPXZIXwGBEE+zd7GOcyOZG4c/d+VCaW20xXvn7+ZvZGV9wIb9qX3wViAv5P7IW0Wo6m/ujwB8F09l8Ea3+XJDTOUbLuNvrX119p4ahvS9qGADVbq8fLePfEU+wnp5fLKtOiG4CuK4XjCfBeOK6nglAiG5Z9afnl5O4Q1a0jC2rTim1bSdebz5r4vXGth1KqWXVT7o7ZHV7fUJ023aQwljIfoT4aNsOIXq318cTDPZYi2gFACYAOmIszOcL+UIBcfF6Y8JuHV/FHms6m1NquK6nPvXIwlKpXKtd12rXpXKZsQ93badDqTGdzdGRCvZY/ijQNC0YT7iQjyzM5S6LRdps3jabt8UizeUuFS4YTzRN80dBVhYX8t57uGu1KhWzUjHvWq1770GJM7EOcuRCDoa+Yg2GPrrIlONx7QdD/9v7QlbW2nMhj3tiMPQRxIXM2hNcyAy9ajQaN5l6lQuJMwRQbTsdNUNtpwNQJURvNG6yzpAqsJptAKD012xTAwD+ebbxvs7556T8DfVnBCjf9f024WcgUILyHStJ+TbhiMeX/hqk/G2b8CT9sLJjqaPXbXrG/mziJ2E7homgDRmqAAAAAElFTkSuQmCC");

},
410890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABIElEQVQ4Ea2TPU8CQRCG+btyVkjnHT9BreC0Air1rDQ0ClYSKoIVxooQG40VMdZDnk1mc7e3YyS5YrJf7zzzsbut3c+vNGGtJiAwTND67V3uHyYyyK+c3RR3stl+mNnXQJ9f386xc9KV4Wgsj9OZM+bsnZ1fCJqwkgoIQZr1HCAmxhngcvX6N6ifXwoWRoutybS87zOiJ6RuZVJ2Yn7UTio98yAaS9qhg7VGe31beL0HUZKmy8gtxUw1YWATRLSYvcwXLgsTFB5YJek+peGja5/RIc3mQriY8gP1IMj0iZesUawx9kwqICKdppmDxZ4BewRCE55XQGSAgIj6RZ5mz4LRk3Zy7M5CCH41kJZD/TRTy2Be7onqdDRBKvjv2BhoDwMXkY3nMoxGAAAAAElFTkSuQmCC");

},
302332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAABHklEQVQ4Ea2TvU7DMBSF87LARrY2nUh4A+jUlC60LBCYWrFU8AQVbFQsVcVC1Ycw+iwdy3biqpUYrvyTc797ru1kv7u9+Y/IUpDVx6d5al7Mze3QxnT2YL7W38miLdBm+2MTL/PcjOo7M1+82mDOHmA0sYEAhKBfDCygS0yy4AdBasMXyZG/R9v301ngyjniI9ZjJyTESWjOzi+CM3Ogx+bZ2vYrM+8CsU+LfgEHoi3aQMTILRFldW1Da2niwkmQnFyVlSG0Xr6922JJUPxBLQqgtUZaI0dr5+jUw+Zi/AfqQJBT1692VL1LF4C41l6/SL5evgNBEz+TAERFibFejyfuF2HO2wEUQ8hrgWSf/jlMtcHcPxPpNCZBEhw7/gEfx959uYx8dgAAAABJRU5ErkJggg==");

},
959011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
906487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753566-8f515c54e4fdc340cf61b70f0a728592.png");

},
918180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753574-0b33f8e8eddf69b2c7b8be707dbc668b.png");

},
628406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAABF0lEQVQ4Ea2UMQ+CMBCF+9NZcNAYNBIHBwcnFx1wcCAO6qCD0RB0kOCicSC6GeczDy1p2gKNMBxce9evr48GFt/fFN1edLw8KYgSCs5/RpSkDLAYHpVgsogoIZYqlAsVx6xWlT8xzNTDzT4mhEm/MbTZahOiNuhsviTLstJAXgY2UgqFHGqiVguFd4v1gaaeT8PROANyMOZQQ4/OZwU68XwFwmF5b6wRLVGg2Nm2G8Zg9MpqFSh2XG1PRmAA0SuqRK6FcrD4geSjo7YLrwqwEIqi0+nl2uB0XS2wFCqrk8cA6KLw+CLE7Q8IIc7p/CxUijsIAEDIuSLkHC7O83ohFEX5qogL81R+oVX+9nmehvEjO5qopEr+AbGOfw3umcf3AAAAAElFTkSuQmCC");

},
302488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833503-5fb873048d1a1ac55a9b929fe544d0f4.png");

},
380091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753560-d0db6aa240c4d6c2c2b7284eb646d0c3.png");

},
119335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833467-1650fc296400ef33225b68c4dbcc96d1.png");

},
254385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
936898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833499-eb3837791e7029aa597d3db3fd1e1955.png");

},
775898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
521809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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