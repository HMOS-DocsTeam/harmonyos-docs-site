"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["987408"], {
109283(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_example_cpp_ffrt_concurrency_graph_cpp_ffrt_concurrency_graph_cpp_md_3bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-example-cpp-ffrt-concurrency-graph-cpp-ffrt-concurrency-graph-cpp-md-3bd.json
var site_docs_system_basicfun_ffrt_kit_ffrt_example_cpp_ffrt_concurrency_graph_cpp_ffrt_concurrency_graph_cpp_md_3bd_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp/ffrt-concurrency-graph-cpp","title":"Function Flow Runtime图依赖并发(C++)","description":"概述","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp/ffrt-concurrency-graph-cpp.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp","slug":"/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Function Flow Runtime图依赖并发(C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-graph-cpp","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Function Flow Runtime并发队列(C++)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-concurrent-queue-cpp/"},"next":{"title":"Function Flow Runtime任务伙伴(C++)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp/ffrt-concurrency-graph-cpp.md


const frontMatter = {
	title: 'Function Flow Runtime图依赖并发(C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-graph-cpp',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime图依赖并发(C++)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "任务依赖",
  "id": "任务依赖",
  "level": 3
}, {
  "value": "数据依赖",
  "id": "数据依赖",
  "level": 3
}, {
  "value": "示例：流媒体视频处理",
  "id": "示例流媒体视频处理",
  "level": 2
}, {
  "value": "示例：斐波那契数列",
  "id": "示例斐波那契数列",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
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
    p: "p",
    pre: "pre",
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
        id: "function-flow-runtime图依赖并发c",
        children: "Function Flow Runtime图依赖并发(C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT图依赖并发范式支持任务依赖和数据依赖两种方式构建任务依赖图。任务依赖图中每个节点表示一个任务，边表示任务之间的依赖关系。任务依赖分为输入依赖in_deps和输出依赖out_deps。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建任务依赖图的两种不同方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用任务依赖方式构建任务依赖图时，使用任务句柄handle来对应一个任务对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用数据依赖方式构建任务依赖图时，数据对象表达抽象为数据签名，每个数据签名唯一对应一个数据对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "任务依赖",
      children: "任务依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721769)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当任务句柄出现在一个任务的in_deps中时，任务句柄对应的任务是该任务的前置任务；当任务句柄出现在一个任务的out_deps中时，任务句柄对应的任务是该任务的后继任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务依赖适用于任务之间有明确顺序或逻辑流程要求的场景，例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "顺序执行的任务，例如：先进行数据预处理任务，然后再进行模型训练任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "逻辑流程控制，例如：商品交易过程中，通常是先下单，然后是制作，最后是物流运输。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多级任务链，例如：流媒体视频处理过程中，视频解析后可以进行视频转码和视频生成缩略图，然后是视频添加水印，最后是视频发布。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据依赖",
      children: "数据依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(637946)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当数据对象的签名出现在一个任务的in_deps中时，该任务称为数据对象的消费者任务，消费者任务执行不改变其输入数据对象的内容；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当数据对象的签名出现在任务的out_deps中时，该任务称为数据对象的生产者任务，生产者任务执行改变其输出数据对象的内容，从而生成该数据对象的一个新的版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据依赖适用于任务之间通过数据生产和消费关系来触发执行的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个数据对象可能存在多个版本，每个版本对应一个生产者任务和零个，一个或多个消费者任务，根据生产者任务和消费者任务的下发顺序定义数据对象的多个版本的顺序，以及每个版本所对应的生产者和消费者任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据依赖解除的任务进入就绪状态允许被调度执行，依赖解除状态指任务所有输入数据对象版本的生产者任务执行完成，且所有输出数据对象版本的所有消费者任务执行完成的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT在运行时可动态构建任务之间的基于生产者/消费者的数据依赖关系并遵循任务数据依赖状态执行调度，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Producer-Consumer依赖"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一个数据对象版本的生产者任务和该数据对象版本的消费者任务之间形成的依赖关系，也称为Read-after-Write依赖。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Consumer-Producer依赖"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一个数据对象版本的消费者任务和该数据对象的下一个版本的生产者任务之间形成的依赖关系，也称为Write-after-Read依赖。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Producer-Producer依赖"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一个数据对象版本的生产者任务和该数据对象的下一个版本的生产者任务之间形成的依赖关系，也称为Write-after-Write依赖。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，存在一组任务与数据A的关系表述为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "task1(OUT A);\ntask2(IN A);\ntask3(IN A);\ntask4(OUT A);\ntask5(OUT A);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(279319)/* ["default"] */.A) + "",
        width: "548",
        height: "1138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为表述方便，本文中的数据流图均以圆圈表示Task，方块表示数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以得出以下结论："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "task1与task2/task3构成Producer-Consumer依赖，即：task2/task3需要等到task1写完A之后才能读A。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "task2/task3与task4构成Consumer-Producer依赖，即：task4需要等到task2/task3读完A之后才能写A。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "task4与task5构成Producer-Producer依赖，即：task5需要等到task4写完A之后才能写A。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例流媒体视频处理",
      children: "示例：流媒体视频处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户上传视频到流媒体平台，处理步骤包含：视频解析A、视频转码B、视频缩略图生成C、视频水印添加D和视频发布E，其中步骤B和步骤C可以并行执行。任务流程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(71937)/* ["default"] */.A) + "",
        width: "872",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "借助FFRT提供了图依赖并发范式，可以描述任务依赖关系，同时并行化上述视频处理流程，代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include \"hilog/log.h\"\n#include \"ffrt/ffrt.h\" // 来自 OpenHarmony 第三方库 \"@ppd/ffrt\"\n\n#undef LOG_TAG\n#define LOG_TAG \"ParallelCppTag\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const int FIB_NUM = 5;\n\nint DependenceCppExec()\n{\n    // 提交任务\n    auto handle_A = ffrt::submit_h([] () { OH_LOG_INFO(LOG_APP, \"视频解析\"); });\n    auto handle_B = ffrt::submit_h([] () { OH_LOG_INFO(LOG_APP, \"视频转码\"); }, {handle_A});\n    auto handle_C = ffrt::submit_h([] () { OH_LOG_INFO(LOG_APP, \"视频生成缩略图\"); }, {handle_A});\n    auto handle_D = ffrt::submit_h([] () { OH_LOG_INFO(LOG_APP, \"视频添加水印\"); }, {handle_B, handle_C});\n    ffrt::submit([] () { OH_LOG_INFO(LOG_APP, \"视频发布\"); }, {handle_D});\n\n    // 等待所有任务完成\n    ffrt::wait();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出可能为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "视频解析\n视频转码\n视频生成缩略图\n视频添加水印\n视频发布\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例斐波那契数列",
      children: "示例：斐波那契数列"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "斐波那契数列中每个数字是前两个数字之和，计算斐波那契数的过程可以很好地通过数据对象来表达任务依赖关系。使用FFRT并发编程框架计算斐波那契数的代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\n#include \"hilog/log.h\"\n#include \"ffrt/ffrt.h\" // 来自 OpenHarmony 第三方库 \"@ppd/ffrt\"\n\n#undef LOG_TAG\n#define LOG_TAG \"ParallelCppTag\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void Fib(int x, int& y)\n{\n    if (x <= 1) {\n        y = x;\n    } else {\n        int y1;\n        int y2;\n\n        // 提交任务并构建数据依赖\n        ffrt::submit([&]() { Fib(x - 1, y1); }, {&x}, {&y1});\n        // 斐波那契数列所需递归-2\n        ffrt::submit([&]() { Fib(x - 2, y2); }, {&x}, {&y2});\n\n        // 等待任务完成\n        ffrt::wait({&y1, &y2});\n        y = y1 + y2;\n    }\n}\n\nint FibCppExec()\n{\n    int y;\n    Fib(FIB_NUM, y);\n    std::cout << \"Fibonacci(5) is \" << y << std::endl;\n    OH_LOG_INFO(LOG_APP, \"Fibonacci(5) is %{pubilc}d\", y);\n    return y;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fibonacci(5) is 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中将fibonacci(x-1)和fibonacci(x-2)作为两个任务提交给FFRT，在两个任务完成之后将结果进行累加。虽然单个任务只是拆分成两个子任务，但是子任务又可以继续进行拆分，因此整个计算图的并行度是非常高的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各个任务在FFRT内部形成了一棵调用树："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(405133)/* ["default"] */.A) + "",
        width: "1104",
        height: "998"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述样例中涉及到主要的FFRT的接口包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#submit",
              children: "submit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务调度执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#submit_h",
              children: "submit_h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交任务调度执行并返回任务句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#wait",
              children: "wait"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待上下文所有任务完成。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(868225)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如何使用FFRT C++ API详见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/ffrt-kit/ffrt-development-guideline#using-ffrt-c-api-1",
          children: "FFRT C++接口三方库使用指导"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用FFRT C接口或C++接口时，都可以通过FFRT C++接口三方库简化头文件包含，即使用#include \"ffrt/ffrt.h\"头文件包含语句。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用submit接口进行任务提交时，每个任务的输入依赖和输出依赖的数量之和不能超过8个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用submit_h接口进行任务提交时，每个任务的输入依赖和输出依赖的数量之和不能超过7个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数既作为输入依赖又作为输出依赖的时候，统计依赖数量时只统计一次，如输入依赖是{&x}，输出依赖也是{&x}，实际依赖的数量是 1。"
      }), "\n"]
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
279319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438503-06f4f14ebbfe977e2b2c32a4df737900.png");

},
868225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
721769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
637946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
405133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478459-d83eb3bf27da401ff3cbf7424141b7be.png");

},
71937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958458-e01983d84dd71f45a1bee200c4d13d0d.png");

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