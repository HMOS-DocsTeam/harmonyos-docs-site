"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["201554"], {
244657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_thread_scheduling_qos_guidelines_qos_guidelines_md_75c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-thread-scheduling-qos-guidelines-qos-guidelines-md-75c.json
var site_docs_coding_thread_scheduling_qos_guidelines_qos_guidelines_md_75c_namespaceObject = JSON.parse('{"id":"coding/thread-scheduling/qos-guidelines/qos-guidelines","title":"QoS 开发指导","description":"场景介绍","source":"@site/docs/coding/thread-scheduling/qos-guidelines/qos-guidelines.md","sourceDirName":"coding/thread-scheduling/qos-guidelines","slug":"/coding/thread-scheduling/qos-guidelines/","permalink":"/harmonyos-docs-site/coding/thread-scheduling/qos-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"QoS 开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/qos-guidelines","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Rawfile开发指导","permalink":"/harmonyos-docs-site/coding/resource-management/rawfile-guidelines/"},"next":{"title":"格物开发指导","permalink":"/harmonyos-docs-site/coding/thread-scheduling/gewu-ndk-api-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/thread-scheduling/qos-guidelines/qos-guidelines.md


const frontMatter = {
	title: 'QoS 开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/qos-guidelines',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'QoS 开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "QoS",
  "id": "qos",
  "level": 3
}, {
  "value": "QoS等级定义",
  "id": "qos等级定义",
  "level": 3
}, {
  "value": "QoS_Level声明",
  "id": "qos_level声明",
  "level": 3
}, {
  "value": "功能效果",
  "id": "功能效果",
  "level": 2
}, {
  "value": "QoS对线程执行的优化",
  "id": "qos对线程执行的优化",
  "level": 3
}, {
  "value": "QoS对RN框架的优化",
  "id": "qos对rn框架的优化",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 3
}, {
  "value": "函数介绍",
  "id": "函数介绍",
  "level": 2
}, {
  "value": "OH_QoS_SetThreadQoS",
  "id": "oh_qos_setthreadqos",
  "level": 3
}, {
  "value": "OH_QoS_ResetThreadQoS",
  "id": "oh_qos_resetthreadqos",
  "level": 3
}, {
  "value": "OH_QoS_GetThreadQoS",
  "id": "oh_qos_getthreadqos",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "1. 添加动态链接库",
  "id": "1-添加动态链接库",
  "level": 3
}, {
  "value": "2. 引用头文件",
  "id": "2-引用头文件",
  "level": 3
}, {
  "value": "3. 调用QoS接口",
  "id": "3-调用qos接口",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "qos-开发指导",
        children: "QoS 开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自多道程序及多任务操作系统问世以来，CPU、内存等有限的系统资源成为系统中所有任务的竞争对象。合理安排各个任务对系统的响应速度以及资源消耗都有非常重大的意义。相比操作系统，开发者更加清楚应用中各个任务的重要程度；根据重要程度对应用的任务进行分类，能帮助系统更好地进行任务的调度。通过本指导，开发者可以了解在HarmonyOS系统中，如何利用QoS特性及相关的接口调节任务在系统中的运行时间分配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文用于指导开发者基于QoS特性实现应用任务优先调度属性自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qos",
      children: "QoS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QoS(quality-of-service)，即服务质量，在HarmonyOS中QoS特性主要指任务的优先调度属性。开发者可以利用QoS对要执行的工作进行分类，以指示其与用户交互的关联程度；系统则可以根据任务设置的QoS安排各任务的运行时间和运行次序。例如，当系统中有多个任务需要同时执行时，一些与用户交互关联程度不高的后台下载任务可以推迟到更晚的时间执行，且每次执行时分配更少的时间；而用户感知明显的动效绘制等任务则需要立即执行，并分配更多的执行时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qos等级定义",
      children: "QoS等级定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前，HarmonyOS系统一共划分了如下6个QoS等级，从上到下与用户交互的关联程度依次递增，适用于多种不同的应用场景及负载特征情况。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "QoS等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "负载特征"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QOS_BACKGROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台且用户不可见任务，例如数据同步、备份。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务完成需要几分钟甚至几小时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QOS_UTILITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不需要立即看到响应效果的任务，例如下载或导入数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务完成需要几秒到几分钟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QOS_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务完成需要几秒钟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QOS_USER_INITIATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户触发并且可见进展的任务，例如打开文档。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务在几秒钟之内完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QOS_DEADLINE_REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "越快越好的关键任务，如页面加载。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务几乎是瞬间完成的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QOS_USER_INTERACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户交互任务（UI线程、刷新界面、动效）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务是即时的。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QoS等级定义为枚举类型QoS_Level，如上表所示；枚举值定义如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qos_level声明",
      children: "QoS_Level声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum QoS_Level {\n    /**\n     * 适用于数据同步等用户不可见的后台任务。\n     */\n    QOS_BACKGROUND,\n    /**\n     * 适用于下载等不需要立即看到响应效果的任务。\n     */\n    QOS_UTILITY,\n    /**\n     * 默认的QoS等级。\n     */\n    QOS_DEFAULT,\n    /**\n     * 适用于打开文档等用户触发并且可以看到进展的任务。\n     */\n    QOS_USER_INITIATED,\n    /**\n     * 适用于页面加载等越快越好的任务。\n     */\n    QOS_DEADLINE_REQUEST,\n    /**\n     * 适用于动效绘制等用户交互任务。\n     */\n    QOS_USER_INTERACTIVE,\n} QoS_Level;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能效果",
      children: "功能效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QoS等级更高的任务相对等级更低的可能被分配更多的CPU时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面将展示合理使用QoS对程序执行的优化效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qos对线程执行的优化",
      children: "QoS对线程执行的优化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(201983)/* ["default"] */.A) + "",
        width: "1329",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线程1和线程2是某程序的两个关键线程，线程1在运行时会触发新任务线程2，等线程2执行完后会唤醒线程1继续执行。在未标记这两个线程的QoS等级之前，其优先执行顺序低于线程3和线程4；此时线程1和线程2的执行效果如上图所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程1等待被线程2唤醒，而线程2优先级低，长时间被抢占，导致线程1长时间睡眠；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程1优先级低，它被唤醒后等待运行时间长；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程1优先级低，运行过程中长时间被其它线程抢占。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化后"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(966604)/* ["default"] */.A) + "",
        width: "1304",
        height: "511"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "合理标记线程1和线程2的QoS等级后，两个线程的执行优化效果如上图所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程2运行时间占比提高，线程1等待时间减少；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程1被线程2唤醒后，等待的时间减少；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程1运行实际占比提高，被抢占比例减少。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qos对rn框架的优化",
      children: "QoS对RN框架的优化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在RN框架中合理标记关键线程的QoS等级后，如下表所示，开源benchmark测试的性能提升了约13%。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "验证场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "验证环境"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "总渲染时间"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "benchmark  1500view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无QoS优化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "270.8 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "benchmark  1500view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用QoS优化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236.6 ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "返回值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_QoS_SetThreadQoS(QoS_Level level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前任务的QoS等级。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QoS_Level level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0或-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_QoS_ResetThreadQoS()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消当前任务设置的QoS等级。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0或-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_QoS_GetThreadQoS(QoS_Level *level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前任务的QoS等级。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QoS_Level *level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0或-1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QoS接口只能设置本任务的QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数介绍",
      children: "函数介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_qos_setthreadqos",
      children: "OH_QoS_SetThreadQoS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_QoS_SetThreadQoS(QoS_Level level);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QoS_Level level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该参数用于描述要为任务设置的QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若成功则返回0，失败则返回-1。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为某个任务设置指定的QoS等级。设置当前任务的QoS等级。开发者可以根据当前任务的重要程度，为其标记不同等级的QoS，从而获得不同的调度供给。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-thread-priority-setting",
        children: "QoS实践指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include \"qos/qos.h\"\n\nint func()\n{\n    // 设置当前任务的QoS等级为QOS_USER_INITIATED\n    int ret = OH_QoS_SetThreadQoS(QoS_Level::QOS_USER_INITIATED);\n    \n    if (!ret) { // ret等于0说明设置成功\n        printf(\"set QoS Success.\");\n    } else { // ret不等于0说明设置失败\n        printf(\"set QoS failed.\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_qos_resetthreadqos",
      children: "OH_QoS_ResetThreadQoS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_QoS_ResetThreadQoS();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若成功则返回0，失败则返回-1。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消某个任务设置的QoS等级。取消当前任务的QoS等级。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-thread-priority-setting",
        children: "QoS实践指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include \"qos/qos.h\"\n\nint func()\n{\n    // 重置当前任务的QoS等级\n    int ret = OH_QoS_ResetThreadQoS();\n    \n    if (!ret) { // ret等于0说明重置成功\n        printf(\"reset QoS Success.\");\n    } else { // ret不等于0说明重置失败\n        printf(\"reset QoS failed.\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_qos_getthreadqos",
      children: "OH_QoS_GetThreadQoS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "声明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_QoS_GetThreadQoS(QoS_Level *level);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QoS_Level *level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该参数用于存储任务已经设置的QoS等级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若成功则返回0，失败则返回-1。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取某个任务之前最近一次设置的QoS等级；如果之前未设置任何QoS等级，则返回-1。查看当前任务的QoS等级。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-thread-priority-setting",
        children: "QoS实践指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "样例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include \"qos/qos.h\"\n\nint func()\n{\n    // 获取当前任务的QoS等级\n    QoS_Level level = QoS_Level::QOS_DEFAULT;\n    int ret = OH_QoS_GetThreadQoS(&level);\n\n    if (!ret) { // ret等于0说明获取成功\n        printf(\"get QoS level %d Success.\", level);\n    } else { // ret不等于0说明获取失败\n        printf(\"get QoS level failed.\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何使用QoS特性提供的Native API接口，调整或查询任务的QoS等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-添加动态链接库",
      children: "1. 添加动态链接库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["QoS特性的使用依赖相关的动态链接库：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "libqos.so"
        })
      }), "；需要在目标应用或程序的编译环境中添加。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DevEco Studio创建的模板NDK工程，会默认生成CMakeLists.txt脚本，在其中添加QoS相关动态链接库示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(qos)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED hello.cpp)\n\n# 直接引用libqos.so原因：位于已在链接寻址路径的NDK中，无需额外声明\ntarget_link_libraries(entry PUBLIC libqos.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-引用头文件",
      children: "2. 引用头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用QoS特性的源代码中需要引用相关的头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"qos/qos.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-调用qos接口",
      children: "3. 调用QoS接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者根据自身需求调用相应的QoS接口调整任务的QoS等级，或者查询任务的QoS等级。"
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
201983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439433-c0d405175d041874989f674241fb81a3.png");

},
966604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959388-7e4f4077f8175aded59e4740e0132e5a.png");

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