"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["490162"], {
774911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_insight_session_snapshot_ide_arkts_memory_leak_analysis_ide_arkts_memory_leak_analysis_md_649_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-insight-session-snapshot-ide-arkts-memory-leak-analysis-ide-arkts-memory-leak-analysis-md-649.json
var site_docs_ide_insight_session_snapshot_ide_arkts_memory_leak_analysis_ide_arkts_memory_leak_analysis_md_649_namespaceObject = JSON.parse('{"id":"ide-insight-session-snapshot/ide-arkts-memory-leak-analysis/ide-arkts-memory-leak-analysis","title":"案例：ArkTS内存泄漏分析","description":"本案例介绍如何判断应用存在ArkTS泄漏，以及如何通过快照对比找出ArkTS内存泄漏的原因。","source":"@site/docs/ide-insight-session-snapshot/ide-arkts-memory-leak-analysis/ide-arkts-memory-leak-analysis.md","sourceDirName":"ide-insight-session-snapshot/ide-arkts-memory-leak-analysis","slug":"/ide-insight-session-snapshot/ide-arkts-memory-leak-analysis/","permalink":"/harmonyos-docs-site/ide-insight-session-snapshot/ide-arkts-memory-leak-analysis/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"案例：ArkTS内存泄漏分析","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkts-memory-leak-analysis","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"Snapshot模板基本操作","permalink":"/harmonyos-docs-site/ide-insight-session-snapshot/ide-snapshot-basic-operations/"},"next":{"title":"内存分析介绍","permalink":"/harmonyos-docs-site/ide-insight-session-allocations/ide-insight-session-allocations-memory/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-insight-session-snapshot/ide-arkts-memory-leak-analysis/ide-arkts-memory-leak-analysis.md


const frontMatter = {
	title: '案例：ArkTS内存泄漏分析',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkts-memory-leak-analysis',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '案例：ArkTS内存泄漏分析';

const assets = {

};



const toc = [{
  "value": "初步识别内存问题",
  "id": "初步识别内存问题",
  "level": 2
}, {
  "value": "使用Snapshot模板分析ArkTS内存问题",
  "id": "使用snapshot模板分析arkts内存问题",
  "level": 2
}, {
  "value": "录制模板数据",
  "id": "录制模板数据",
  "level": 3
}, {
  "value": "分析ArkTS Heap",
  "id": "分析arkts-heap",
  "level": 3
}, {
  "value": "分析Snapshot数据",
  "id": "分析snapshot数据",
  "level": 2
}, {
  "value": "常见对象介绍",
  "id": "常见对象介绍",
  "level": 3
}, {
  "value": "常见属性介绍",
  "id": "常见属性介绍",
  "level": 3
}, {
  "value": "分析方法",
  "id": "分析方法",
  "level": 3
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "案例arkts内存泄漏分析",
        children: "案例：ArkTS内存泄漏分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本案例介绍如何判断应用存在ArkTS泄漏，以及如何通过快照对比找出ArkTS内存泄漏的原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "初步识别内存问题",
      children: "初步识别内存问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/realtime-monitor",
            children: "实时监控功能"
          }), "对应用的内存资源进行监控。正常操作应用，观察运行过程中的应用内存变化情况。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监控Memory用到变化。当在一段时间内应用内存没有明显增加或者在内存上涨后又逐渐回落至正常水平，则基本可以排除应用存在内存问题；反之，在一段时间内不断上涨且无回落或者内存占用明显增长超出预期，那么则可初步判断应用可能存在内存问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(853184)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1544",
            height: "655"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当从实时监控页面初步判断应用可能存在内存问题后，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-profiler-introduction/deep-recording",
            children: "深度录制"
          }), "抓取应用内存在问题场景下的详细数据，初步定界问题出现的位置。Memory泳道存在Allocation或Snapshot模板中，使用Allocation或Snapshot模板录制均可。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以Allocation模板为例，创建模板后，将模板中的其余泳道去除勾选，仅录制Memory泳道的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(817466)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其余泳道会抓取内存分配、内存对象等数据，为避免额外开销和影响分析，建议先排除录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(990460)/* ["default"] */.A) + "",
            width: "425",
            height: "318"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击三角按钮", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(568381)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "22",
            height: "21"
          }), "即开始录制。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制过程中，不断操作应用在问题场景的功能，将问题放大，便于快速定界问题点。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击下图中方块按钮或者左侧停止按钮结束录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(104614)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1681",
            height: "565"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制完成后，展开Memory泳道，其中ArkTS Heap表示方舟虚拟机内存，这部分内存受到方舟虚拟机的管控。当ArkTS Heap有明显的上涨，说明在方舟虚拟机内的堆内存上可能存在内存泄漏，可以使用Snapshot模板进行下一步分析。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(447172)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1549",
            height: "228"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用snapshot模板分析arkts内存问题",
      children: "使用Snapshot模板分析ArkTS内存问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分析内存泄漏问题步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Snapshot模板录制数据；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在问题场景前拍摄快照；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触发问题场景后，再次拍摄快照；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对比两次快照的数据，可快速找到泄漏对象并做进一步分析；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当有多个对象在比较视图都存在时，可以重复多次触发问题场景后拍摄快照，分别和问题场景前拍摄的快照进行对比，观察是否有对象出现明显的线性变化趋势，进一步缩小泄漏对象的范围。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录制模板数据",
      children: "录制模板数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["连接设备后启动应用，点击应用选择框选择需要录制的应用，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Snapshot"
            })
          }), "模板，点击Create Session或双击Snapshot图标即可创建一个Snapshot的录制模板。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建模板后，点击三角按钮即开始录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(792383)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1555",
            height: "221"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "待右侧泳道全部显示recording后则表明正在录制中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(713807)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1873",
            height: "513"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拍摄第一次堆快照作为基准（点击图中①处拍摄按钮，待②处显示出紫色条块表示快照拍摄完成）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(596968)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方舟虚拟机提供了在获取快照前自动GC（Garbage Collection，对堆内存进行垃圾回收）的能力，因此拍摄快照之前不用主动触发GC。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(604584)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1437",
            height: "498"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多次触发内存泄漏操作。可以操作5，7，11等这种特殊的次数。比如操作了5次对比两个快照发现有很多创建了5次没释放的场景，则可能存在内存泄漏，再操作7次，如果创建了7次那就可以确认发生了泄漏。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拍摄第二次堆快照。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击下图中方块按钮或者左侧停止按钮结束录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(852181)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1873",
            height: "514"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分析arkts-heap",
      children: "分析ArkTS Heap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在每次拍摄堆快照之前，虚拟机都会触发GC，所以理论上堆快照内存在的对象都是当前虚拟机已经无法GC掉的对象。我们可以将两个堆快照进行比较，来查看哪些对象是在触发问题场景时新增了且不能释放的。切换到窗口下方详情区域的“Comparison”页签，将两次快照进行对比。图中数据的含义是以Snapshot2作为基准，Snapshot2对比Snapshot1的数据变化量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(46785)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1542",
            height: "513"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "优先寻找与触发内存泄漏操作次数强相关、与业务代码强相关的Constructor，首先来分析这些对象是否正常。主要是按照Distance逐渐减小的方式找引用链，可以从references里面一层层去寻找，排查引用链上的可疑对象（一般指与业务代码关联的对象）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(144936)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择一个实例结点，底部搜索栏的Path to GC Root按钮呈可点击状态。点击该按钮，系统会计算从GC Roots垃圾收集器根到选定实例对象的最短路径（最短路径是指Distance逐渐-1的路径，最终抵达Distance = 1的结点），并在右侧区域展示。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分析snapshot数据",
      children: "分析Snapshot数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常见对象介绍",
      children: "常见对象介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSArray"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前所有JSArray展开后为数组里的各个元素："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(66304)/* ["default"] */.A) + "",
        width: "452",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中__proto__：原型对象，所有数组的__proto__应该是一致的；length：内置属性访问器，可以访问数组长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TaggedDict"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位于(array)标签中，一般为虚拟机内部创建的字典，ArkTS代码层面不可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TaggedArray"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位于(array)标签中，一般为虚拟机内部创建的数组，ArkTS代码层面不可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "COWArray"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位于(array)标签中，一般为虚拟机内部创建的数组，ArkTS代码层面不可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSObject"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSObject展开后为内部的各个属性如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(160963)/* ["default"] */.A) + "",
        width: "445",
        height: "202"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下通过具体代码来介绍下实例化对象、声明对象、构造函数间的关系："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// HelloWorldPage.ets\nclass People {\n  old: number\n  name: string\n  constructor(old: number, name: string) {\n    this.old = old;\n    this.name = name;\n  }\n  printOld() {\n    console.log(\"old = \", this.old);\n  }\n  printName() {\n    console.log(\"name = \", this.name);\n  }\n}\n\n@Entry\n@Component\nstruct HelloWorldPage {\n  @State message: string = 'Hello World';\n  private people: People = new People(20, \"Tom\");\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采集到的snapshot数据如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(482655)/* ["default"] */.A) + "",
        width: "833",
        height: "197"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "202169对象对应的是People，其主要声明了对象的属性和方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实例化对象的__proto__属性指向声明时的对象，声明对象里则会有constructor构造函数。当实例化多个对象时，实例化对象会有多个，但是声明对象和构造函数只有一个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSFunction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前所有JSFunction都在(closure)标签中，展开即可看到所有JSFunction："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973588)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "783",
        height: "359"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个函数展开后为函数内的各个属性："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258536)/* ["default"] */.A) + "",
        width: "471",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中HomeObject表示父类对象，即该方法属于哪个对象；_proto_表示原型对象；LexicalEnv表示该函数的闭包上下文；name是内置属性访问器，可获取函数名；FunctionExtraInfo表示额外信息，比如一些napi接口会在这里记录函数地址；ProtoOrHClass表示原型或者隐藏类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果函数显示为anonymous()，则表示为匿名函数；如果函数显示为JSFunction()，则表示该函数可能为框架层函数，创建函数的时候未设置函数名。对于这两种函数名不可见的情况，可以通过查看其引用来间接确认其名称："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693967)/* ["default"] */.A) + "",
        width: "776",
        height: "144"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkInternalConstantPool"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "虚拟机创建的常量池，ArkTS代码层面不可见，涉及到的字符串常量会在(array)标签中展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(532839)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "604",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LexicalEnv"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "闭包变量上下文；闭包是一个链状结构，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(720950)/* ["default"] */.A) + "",
        width: "521",
        height: "180"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "733这个节点本身是一个闭包数组，其中0号元素是调用者（或者再往上的调用者，以此类推）的闭包；1号元素存储的是调试信息；2号及以后的元素存储的就是闭包传递的变量，上例传递了一个变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "InternalAccessor"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内置属性访问器，会有getter和setter方法，通过getter、setter可以获取、设置该属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LocalHandleRoot"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio 6.1.0 Release版本新增，位于(handle)标签中，用于管理JS对象生命周期的引用句柄（napi_value）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(776108)/* ["default"] */.A) + "",
        width: "300",
        height: "61"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GlobalHandleRoot"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio 6.1.0 Release版本新增，位于(handle)标签中，允许用户管理ArkTS/JS值的生命周期的引用句柄（napi_ref）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常见属性介绍",
      children: "常见属性介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "__proto__"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(object elements)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象元素"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(object properties)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hclass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隐藏类"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkInternalHash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS运行时内部的哈希值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProtoOrHClass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原型或隐藏类指针"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RawProfileTypeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行时类型剖析信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HomeObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "父类对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FunctionKind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数类型标识"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FunctionExtraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数附加信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构造函数或类对象关联的原型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inlineproperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内联属性"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分析方法",
      children: "分析方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看对象名称"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于声明对象，可以通过constructor属性来确定对象名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523747)/* ["default"] */.A) + "",
        width: "847",
        height: "196"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于实例化对象，一般没有constructor，则需要展开__proto__属性后查找constructor；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863758)/* ["default"] */.A) + "",
        width: "862",
        height: "298"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若对象里有一些标志性属性，可以通过在代码里搜索属性名称来找到具体是哪个对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果对象间有继承关系，则可以继续展开__proto__："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(722749)/* ["default"] */.A) + "",
        width: "859",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图则表明Man对象继承自People对象。"
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
990460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913220-896faca9f9225d00fc51168188facea6.png");

},
482655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753228-1ee4dbc5e0258fab5fa7d700b07d7b15.png");

},
532839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913204-3590984d2dd1b6328ee53da8682380c4.png");

},
817466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
973588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833131-c826c5ffa28fdfc9ebc2c9b50ae45c98.png");

},
523747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913208-b53636ba4f773de108d8165a52d63382.png");

},
160963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913202-d45023f18e421e39eccb1ff5ea5b6178.png");

},
568381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAIAAADNQonCAAAAtklEQVQ4EWP4+PkrhYiBQv0fP38d5kYcu/bVtOx7UOe3Y9cIBzb2sEiY9I0r8jsEJU7+9vglPoOwG+FcD9UPMUUy+XvPhm+44o4oIyAGqed8334Gi0EkGAExyKXh+5UHKP4i2QiuyO+mZd+RPUWWEaWUGeFcT4FH1CgJTomk7z3rscQFJESwhwVy0kqYRFbSAiXwUsoSOHKcEWRj9whBbcgKQEZ8+PQFWYhUNsiIdx8+kaoNWT0AAdWq8UcdEEAAAAAASUVORK5CYII=");

},
693967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753230-c4c268c3867849b46202fd4de9fc43ae.png");

},
258536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753234-0ab15278c86c32ca145b9a8e1b363a46.png");

},
853184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833153-e08619ea65cb055bdc4af10a7f9803c9.png");

},
596968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
776108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
863758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913216-7a1001a471b3b850a5a5eb47f57fc102.png");

},
144936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
722749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833143-3bfa7a006cc36785eb71d21cafeff5e8.png");

},
604584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833121-7c5f30b86840e934a324e570fb05dafa.png");

},
792383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833155-f83ebdbaa1eaea66e17a0f2fda1fc46c.png");

},
720950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833139-863d35ab5dd1688932e336ffa6912708.png");

},
104614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753143-4a3058d0e1d4f5dd3a593523d5e58a95.png");

},
46785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753208-805237cbe73430a62ddb48824aa3de63.png");

},
447172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753137-33d0b594359165642b800e7befd5d8de.png");

},
66304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753220-0663243fe912455d6a40d79a5f587d75.png");

},
713807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913210-cfaa342878603477eb4e0d689f5c220d.png");

},
852181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753210-f84825394307178e471ada84fb5731eb.png");

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