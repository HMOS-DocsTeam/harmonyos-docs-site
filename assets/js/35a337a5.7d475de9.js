"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["555812"], {
310468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_fault_log_ide_fault_log_md_35a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-log-and-fault-analysis-ide-fault-analysis-ide-fault-log-ide-fault-log-md-35a.json
var site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_fault_log_ide_fault_log_md_35a_namespaceObject = JSON.parse('{"id":"ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log/ide-fault-log","title":"FaultLog","description":"当应用运行发生错误导致应用进程终止时，应用将会抛出错误日志以通知应用崩溃的原因，开发者可通过查看错误日志分析应用崩溃的原因及引起崩溃的代码位置。","source":"@site/docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log/ide-fault-log.md","sourceDirName":"ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log","slug":"/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log/","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"FaultLog","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-fault-log","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"日志分析","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-setup-hilog/"},"next":{"title":"堆栈轨迹分析","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log/ide-fault-log.md


const frontMatter = {
	title: 'FaultLog',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-fault-log',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'FaultLog';

const assets = {

};



const toc = [{
  "value": "查看FaultLog日志",
  "id": "查看faultlog日志",
  "level": 2
}, {
  "value": "查看设备历史抛出的FaultLog日志",
  "id": "查看设备历史抛出的faultlog日志",
  "level": 3
}, {
  "value": "查看设备实时抛出的FaultLog日志",
  "id": "查看设备实时抛出的faultlog日志",
  "level": 3
}, {
  "value": "跳转至引起错误的代码行",
  "id": "跳转至引起错误的代码行",
  "level": 3
}, {
  "value": "导出日志",
  "id": "导出日志",
  "level": 2
}, {
  "value": "查看cppcrash结构化日志",
  "id": "查看cppcrash结构化日志",
  "level": 2
}, {
  "value": "字段说明",
  "id": "字段说明",
  "level": 3
}, {
  "value": "查看堆栈信息",
  "id": "查看堆栈信息",
  "level": 3
}, {
  "value": "查看HiLog日志",
  "id": "查看hilog日志",
  "level": 3
}, {
  "value": "查看appfreeze结构化日志",
  "id": "查看appfreeze结构化日志",
  "level": 2
}, {
  "value": "字段说明",
  "id": "字段说明-1",
  "level": 3
}, {
  "value": "查看堆栈信息",
  "id": "查看堆栈信息-1",
  "level": 3
}, {
  "value": "查看HiLog日志",
  "id": "查看hilog日志-1",
  "level": 3
}, {
  "value": "查看高负载CPU/内存日志信息",
  "id": "查看高负载cpu内存日志信息",
  "level": 3
}, {
  "value": "查看3s/6s堆栈日志",
  "id": "查看3s6s堆栈日志",
  "level": 3
}, {
  "value": "查看应用终止日志",
  "id": "查看应用终止日志",
  "level": 2
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
        id: "faultlog",
        children: "FaultLog"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用运行发生错误导致应用进程终止时，应用将会抛出错误日志以通知应用崩溃的原因，开发者可通过查看错误日志分析应用崩溃的原因及引起崩溃的代码位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FaultLog由系统自动从设备进行收集，包括如下几类故障信息："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "App Freeze"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPP Crash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JS Crash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System Freeze"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-asan",
          children: "ASan"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan",
          children: "HWASan"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-tsan",
          children: "TSan"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-ubsan",
          children: "UBSan"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(285222)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试模式（debug和attach）下，DevEco Studio会屏蔽当前工程的App Freeze和System Freeze等超时检测，避免调试过程出现超时检测影响开发者调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持屏蔽的App Freeze故障类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "THREAD_BLOCK_3S/THREAD_BLOCK_6S：应用主线程卡死检测，卡住3秒/6秒。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "APP_INPUT_BLOCK：输入响应超时。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持屏蔽的System Freeze故障类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LIFECYCLE_TIMEOUT：app、ability生命周期切换超时。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看faultlog日志",
      children: "查看FaultLog日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看设备历史抛出的faultlog日志",
      children: "查看设备历史抛出的FaultLog日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开FaultLog窗口，将显示当前选中设备抛出的所有FaultLog日志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FaultLog故障信息左侧按照", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用/元服务包名 > 故障类型 > 故障时间"
        })
      }), "结构组成，选中具体的故障日期，则会在右侧展示详细的故障信息，并对部分关键信息进行高亮展示，便于开发者进行故障定位。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809709)/* ["default"] */.A) + "",
        width: "1897",
        height: "574"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看设备实时抛出的faultlog日志",
      children: "查看设备实时抛出的FaultLog日志"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当设备抛出FaultLog日志时，DevEco Studio将会弹出消息提示框，开发者点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Jump to Log"
        })
      }), "即可跳转至FaultLog窗口查看日志信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(548710)/* ["default"] */.A) + "",
        width: "550",
        height: "154"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "跳转至引起错误的代码行",
      children: "跳转至引起错误的代码行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若抛出的FaultLog中的堆栈信息中的链接或偏移地址指向的是当前工程中的某行代码，该段信息将会被转换为超链接形式，点击后可跳转至对应代码行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170327)/* ["default"] */.A) + "",
        width: "1879",
        height: "930"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导出日志",
      children: "导出日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可将当前显示的日志信息保存到本地，以便后续的进一步分析。开发者可根据需要选择保存当前选中节点的日志或保存所有日志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["保存当前选中节点的日志：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在当前选中节点右键点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Export FaultLog"
                })
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(484298)/* ["default"] */.A) + "",
                width: "1816",
                height: "353"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击Export FaultLog按钮", (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(622269)/* ["default"] */.A) + "",
                width: "17",
                height: "15"
              }), "，弹出子选项后进一步点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Export Selected FaultLog"
                })
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(658073)/* ["default"] */.A) + "",
                width: "1138",
                height: "189"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["保存所有日志：点击Export FaultLog按钮", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(540388)/* ["default"] */.A) + "",
          width: "17",
          height: "15"
        }), "，弹出子选项后进一步点击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Export All FaultLog"
          })
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看cppcrash结构化日志",
      children: "查看cppcrash结构化日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta1版本开始，支持对Cpp Crash类型的FaultLog，进行结构化展示和日志过滤。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["双击cppcrash日志，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault Info"
            })
          }), "右侧会出现", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault Analysis"
            })
          }), "页签。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(164451)/* ["default"] */.A) + "",
            width: "1575",
            height: "479"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault Analysis"
            })
          }), "页签，会展示结构化的日志信息。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["页面上方的字段对应了FaultLog中的字段，具体对应关系请查看", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section1983219211210",
              children: "字段说明"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["页面下方包含Stacks和Logs两个页签。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Stacks"
                  })
                }), "：展示线程的堆栈信息，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section459581010138",
                  children: "查看堆栈信息"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Logs"
                  })
                }), "：展示FaultLog中的HiLog日志，具体请查看", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section13361239195113",
                  children: "查看HiLog日志"
                }), "。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(406147)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1680",
            height: "725"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字段说明",
      children: "字段说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fault Analysis"
        })
      }), "页签中的字段和FaultLog的字段对应关系如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fault Analysis"
              })
            }), "的字段"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Occurrence time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FaultLog发生的时间，对应FaultLog中的Timestamp字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analysis time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发日志结构化展示的时间，即双击日志文件的时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否是前台应用，对应FaultLog中的Foreground字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名，对应FaultLog中的Module name字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App build number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用构建号，对应FaultLog中的VersionCode字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用版本，对应FaultLog中的Version字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备信息，对应FaultLog中的Device info字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统镜像版本，对应FaultLog中的Build info字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abnormal signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常信号，对应FaultLog中的Reason字段"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看堆栈信息",
      children: "查看堆栈信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stacks页面包含了FaultLog中的堆栈信息，并以线程为单元进行折叠，点击展开按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(246103)/* ["default"] */.A) + "",
        width: "17",
        height: "19"
      }), "，可以展开对应线程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(369316)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1803",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图中标注1的勾选框是展开应用堆栈，标注2的勾选框是展开系统堆栈，两个勾选框一共组成了四种状态，具体如下表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "勾选框勾选状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1、2都不勾选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示所有线程，线程处于折叠状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1、2都勾选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示所有线程，线程处于展开状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "只勾选1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只展示应用线程，线程处于展开状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "只勾选2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只展示系统线程，线程处于展开状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看hilog日志",
      children: "查看HiLog日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logs页面展示了FaultLog中的HiLog日志，支持日志级别的过滤和搜索。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(201319)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1739",
        height: "665"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看appfreeze结构化日志",
      children: "查看appfreeze结构化日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta2版本开始，支持对AppFreeze类型的FaultLog，进行结构化展示和日志过滤。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["双击appfreeze日志，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault Info"
            })
          }), "右侧会出现", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault Analysis"
            })
          }), "页签。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(872067)/* ["default"] */.A) + "",
            width: "1339",
            height: "378"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault Analysis"
            })
          }), "页签，会展示结构化的日志信息。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["页面上方的字段对应了FaultLog中的字段，具体对应关系请查看", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section15864144624712",
              children: "字段说明"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["页面下方包含Stacks、Logs、System、3s/6s Compare四个页签。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Stacks"
                  })
                }), "：展示线程的堆栈信息，使用方式和cppcrash日志相同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section459581010138",
                  children: "查看堆栈信息"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Logs"
                  })
                }), "：展示FaultLog中的HiLog日志，使用方式和cppcrash日志相同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section13361239195113",
                  children: "查看HiLog日志"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "System"
                  })
                }), "：从DevEco Studio 6.0.0 Beta3版本开始，新增System页签，用于在高负载场景下，展示设备CPU/内存的日志信息，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section179717814915",
                  children: "查看高负载CPU/内存日志信息"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "3s/6s Compare"
                  })
                }), "：从DevEco Studio 6.0.2 Beta1版本开始，新增3s/6s Compare页签，用于对", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines#thread_block_6s-%E5%BA%94%E7%94%A8%E4%B8%BB%E7%BA%BF%E7%A8%8B%E5%8D%A1%E6%AD%BB%E8%B6%85%E6%97%B6",
                  children: "THREAD_BLOCK_6S"
                }), "类型的AppFreeze问题，展示3s和6s时间点的主线程堆栈日志，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section76467955514",
                  children: "查看3s/6s堆栈日志"
                }), "。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(280165)/* ["default"] */.A) + "",
            width: "1262",
            height: "253"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字段说明-1",
      children: "字段说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fault Analysis"
        })
      }), "页签中的字段和FaultLog的字段对应关系如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fault Analysis"
              })
            }), "的字段"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Occurrence time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FaultLog发生的时间，对应FaultLog中的Timestamp字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analysis time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发日志结构化展示的时间，即双击日志文件的时间"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否是前台应用，对应FaultLog中的Foreground字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包名，对应FaultLog中的Module name字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App build number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用构建号，对应FaultLog中的VersionCode字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用版本，对应FaultLog中的Version字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备信息，对应FaultLog中的Device info字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统镜像版本，对应FaultLog中的Build info字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freeze type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结类型，对应FaultLog中的Reason字段"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看堆栈信息-1",
      children: "查看堆栈信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stacks页签用于查看appfreeze中的堆栈信息，使用方式和cppcrash日志相同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section459581010138",
        children: "查看堆栈信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看hilog日志-1",
      children: "查看HiLog日志"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Logs页签用于查看appfreeze中的HiLog，使用方式和cppcrash日志相同，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section13361239195113",
        children: "查看HiLog日志"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看高负载cpu内存日志信息",
      children: "查看高负载CPU/内存日志信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta3版本开始，新增System页签，用于在高负载场景下，展示设备CPU/内存的日志信息，有助于分析高负载和appfreeze之间的关联关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下是CPU的相关日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "①：柱状图表示对应时间点的CPU使用情况（百分比）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "②：鼠标悬浮在柱状图上，会显示CPU总使用率、CPU使用率top5的进程号（Pid）和对应的CPU使用率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "③：选中柱状图后，显示相关的日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388526)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1719",
        height: "789"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下是内存的相关日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "①：柱状图表示对应时间点的内存使用情况（百分比）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "②：鼠标悬浮在柱状图上，会显示内存使用率、内存占用top5的进程和对应的内存大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "③：选中柱状图后，显示相关的日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(989544)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1746",
        height: "727"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看3s6s堆栈日志",
      children: "查看3s/6s堆栈日志"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.2 Beta1版本开始，新增3s/6s Compare页签，用于对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines#thread_block_6s-%E5%BA%94%E7%94%A8%E4%B8%BB%E7%BA%BF%E7%A8%8B%E5%8D%A1%E6%AD%BB%E8%B6%85%E6%97%B6",
        children: "THREAD_BLOCK_6S"
      }), "类型的AppFreeze问题，展示3s和6s时间点的主线程堆栈日志，并标识栈帧中可能的故障处。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390990)/* ["default"] */.A) + "",
        width: "1352",
        height: "399"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不是THREAD_BLOCK_6S类型的AppFreeze问题，不会展示3s/6s Compare页签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看应用终止日志",
      children: "查看应用终止日志"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.2 Beta1版本开始，提供", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AppKilled"
        })
      }), "窗口，用于查看设备上应用终止的相关信息，包括应用异常退出的时间、进程名、是否前台应用、异常退出原因，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "recordId"
        })
      }), "可以查看详细的FaultLog信息。支持按设备、应用和异常原因对信息进行过滤。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppKilled窗口中支持查看的异常退出原因请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper#reason%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "reason字段说明"
      }), "，如需对问题进行排查处理，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines",
        children: "App Killed（应用终止）检测"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513995)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2in1、Tablet设备不支持查看APP_INPUT_BLOCK和THREAD_BLOCK_6S类型的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465354)/* ["default"] */.A) + "",
        width: "1870",
        height: "653"
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
388526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833271-a3f3e45f332896a168d91559d4254673.png");

},
369316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833275-1acc8cb35f5f2f3ef8c045c46b718229.png");

},
465354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753307-9764cc6d5198683072967f9891026ffa.png");

},
809709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913384-25ec0afe1731f56ad017602277e6f619.png");

},
658073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753299-43fb14e6af6ed462d8199204ee1bf09e.png");

},
390990(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753295-f8fb41ec0ff11ffe1e2ce0d73fd661cc.png");

},
872067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753321-0d26d38312fee6851215ad9ad4a9f51d.png");

},
989544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913348-a6d6df11dc0968b0186d5b72b99b79a0.png");

},
513995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
622269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAwklEQVQ4EdWTvQqEMBCEfeLUlhYpbCzTWVtok0okkDLgzwvEn1KsRMEXmGOFEwQNZ3FwV3wpNuwws9l427Zhmib0ff+YZVlA/R4dWZaBMfaYtm2/JBJFEay1Towxh+NLJ0KI3R5FvKPrun8RCcMQZVk6KYrCHefpM18O9rdEgiC4XX+l1DEPcn0bh3MO+hNxHIP25o3WGnVdfy4yzzN83z81JEniFmmaBmma7uR5jnVdIaU8anRXVRWGYTjVxnHcN/sFVggBPEKPNk8AAAAASUVORK5CYII=");

},
285222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
280165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753323-782983b7872829d751168c2afcc92925.png");

},
406147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753372-6da567f932310ed0c70b941ac11a5a12.png");

},
548710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833305-5020ad419f6e7fb706bcc4737f09b1dc.png");

},
484298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833285-64d763d1461479f330f4aa5b10290ca8.png");

},
540388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAwklEQVQ4EdWTvQqEMBCEfeLUlhYpbCzTWVtok0okkDLgzwvEn1KsRMEXmGOFEwQNZ3FwV3wpNuwws9l427Zhmib0ff+YZVlA/R4dWZaBMfaYtm2/JBJFEay1Towxh+NLJ0KI3R5FvKPrun8RCcMQZVk6KYrCHefpM18O9rdEgiC4XX+l1DEPcn0bh3MO+hNxHIP25o3WGnVdfy4yzzN83z81JEniFmmaBmma7uR5jnVdIaU8anRXVRWGYTjVxnHcN/sFVggBPEKPNk8AAAAASUVORK5CYII=");

},
246103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAIAAAD5x3GmAAAAhElEQVQ4EcXSuwqAMAwFUP//gywWHAqCu+KDquDiA3VsScjkLjEQF6FLh0Nuc5sAkvYkWgBIf5kQMXflflxCZiabH2djncAYA0hdPxnr1v1kp/EGkOp2SF/YqwGkqvGpdct2PKZJpulHozLqbOodqHcdImZ5IZTz4397VMFepX5Y8PE9Ny9AoEcT4A1UAAAAAElFTkSuQmCC");

},
164451(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913356-777404ec39ff807f4f9b524f6921e84d.png");

},
201319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753301-25d7ce190d78eace205967dbb6b2180c.png");

},
170327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833313-ca338dcf77184edc65df7d5113cc03c8.png");

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