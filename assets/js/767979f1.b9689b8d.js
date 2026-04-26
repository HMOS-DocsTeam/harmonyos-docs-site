"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["105224"], {
165476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_concurrency_worker_introduction_worker_introduction_md_767_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-concurrency-worker-introduction-worker-introduction-md-767.json
var site_docs_arkts_arkts_concurrency_multithread_concurrency_worker_introduction_worker_introduction_md_767_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-concurrency/worker-introduction/worker-introduction","title":"Worker简介","description":"Worker的主要作用是为应用程序提供一个多线程的运行环境，实现应用程序执行过程与宿主线程分离。通过在后台线程运行脚本处理耗时操作，避免计算密集型或高延迟任务阻塞宿主线程。具体接口信息及使用方法详情请见Worker。","source":"@site/docs/arkts/arkts-concurrency/multithread-concurrency/worker-introduction/worker-introduction.md","sourceDirName":"arkts/arkts-concurrency/multithread-concurrency/worker-introduction","slug":"/arkts/arkts-concurrency/multithread-concurrency/worker-introduction/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/worker-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Worker简介","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TaskPool简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction/"},"next":{"title":"TaskPool和Worker的对比 (TaskPool和Worker)","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-concurrency/worker-introduction/worker-introduction.md


const frontMatter = {
	title: 'Worker简介',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Worker简介';

const assets = {

};



const toc = [{
  "value": "Worker运作机制",
  "id": "worker运作机制",
  "level": 2
}, {
  "value": "创建Worker的注意事项",
  "id": "创建worker的注意事项",
  "level": 2
}, {
  "value": "文件路径注意事项",
  "id": "文件路径注意事项",
  "level": 2
}, {
  "value": "Stage模型下的文件路径规则",
  "id": "stage模型下的文件路径规则",
  "level": 3
}, {
  "value": "FA模型下的文件路径规则",
  "id": "fa模型下的文件路径规则",
  "level": 3
}, {
  "value": "生命周期注意事项",
  "id": "生命周期注意事项",
  "level": 2
}, {
  "value": "其他注意事项",
  "id": "其他注意事项",
  "level": 2
}, {
  "value": "Worker基本用法示例",
  "id": "worker基本用法示例",
  "level": 2
}, {
  "value": "多级Worker生命周期管理",
  "id": "多级worker生命周期管理",
  "level": 2
}, {
  "value": "推荐使用示例",
  "id": "推荐使用示例",
  "level": 3
}, {
  "value": "不推荐使用示例",
  "id": "不推荐使用示例",
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
        id: "worker简介",
        children: "Worker简介"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Worker的主要作用是为应用程序提供一个多线程的运行环境，实现应用程序执行过程与宿主线程分离。通过在后台线程运行脚本处理耗时操作，避免计算密集型或高延迟任务阻塞宿主线程。具体接口信息及使用方法详情请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker",
        children: "Worker"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "worker运作机制",
      children: "Worker运作机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Worker运作机制示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(347610)/* ["default"] */.A) + "",
        width: "858",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Worker的线程称为宿主线程（不局限于主线程，Worker线程也支持创建Worker子线程）。Worker子线程（或Actor线程、工作线程）是Worker自身运行的线程。每个Worker子线程和宿主线程拥有独立的实例，包含独立执行环境、对象、代码段等。因此，启动每个Worker存在一定的内存开销，需要限制Worker子线程的数量。Worker子线程和宿主线程通过消息传递机制通信，利用序列化、引用传递或转移所有权的机制完成命令和数据的交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建worker的注意事项",
      children: "创建Worker的注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker线程文件需要放在\"{moduleName}/src/main/ets/\"目录层级之下，否则不会被打包到应用中。有手动和自动两种创建Worker线程目录及文件的方式，推荐使用自动创建方式。手动创建Worker线程目录及文件时，需同步进行相关配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手动创建：开发者手动创建相关目录及文件，通常是在ets目录下创建一个workers文件夹，用于存放worker.ets文件，需要配置build-profile.json5的相关字段信息，确保Worker线程文件被打包到应用中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage模型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"sourceOption\": {\n    \"workers\": [\n      './src/main/ets/workers/worker.ets'\n    ]\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FA模型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"sourceOption\": {\n    \"workers\": [\n      \"./src/main/ets/MainAbility/workers/worker.ets\"\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自动创建：DevEco Studio支持一键生成Worker，在对应的{moduleName}目录下任意位置，单击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息，无需再手动在build-profile.json5中进行相关配置。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件路径注意事项",
      children: "文件路径注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Worker模块的具体功能时，需先构造Worker实例对象。构造函数与API版本相关，且需传入Worker线程文件的路径（scriptURL）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\n\nconst worker1: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/worker.ets');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage模型下的文件路径规则",
      children: "Stage模型下的文件路径规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对scriptURL的路径有以下三种写法："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写法一：以{moduleName}/ets/{relativePath}的方式加载Worker线程文件。relativePath是Worker线程文件相对于\"{moduleName}/src/main/ets/\"目录的相对路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径规则：{moduleName}/ets/{relativePath}。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\n// worker线程文件所在路径：\"entry/src/main/ets/workers/worker.ets\"\nconst workerInstance1: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/worker.ets');\n// worker线程文件所在路径：\"testworkers/src/main/ets/ThreadFile/workers/worker.ets\"\nconst workerInstance2: worker.ThreadWorker = new worker.ThreadWorker('testworkers/ets/ThreadFile/workers/worker.ets');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写法二：以@{moduleName}/ets/{relativePath}的方式加载Worker线程文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径规则：@{moduleName}/ets/{relativePath}。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\n// @标识路径加载形式：\n// worker线程文件所在路径: \"har/src/main/ets/workers/worker.ets\"\nconst workerInstance3: worker.ThreadWorker = new worker.ThreadWorker('@har/ets/workers/worker.ets');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写法三：以相对路径的方式加载Worker线程文件（仅支持包内加载，不支持跨包加载）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径规则：../../{relativePath}。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\n// 相对路径加载形式：\n// worker线程文件所在路径: \"har/src/main/ets/workers/worker.ets\"\n// 创建Worker对象的文件所在路径：\"har/src/main/ets/components/mainpage/MainPage.ets\"\nconst workerInstance4: worker.ThreadWorker = new worker.ThreadWorker('../../workers/worker.ets');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "详细文件路径加载规则如下表："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表第一列各行表示加载Worker线程文件的所在位置，第一行各列表示被加载的Worker线程文件的所在位置。其余表格内容表示是否支持此类加载及对应路径规则的写法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，下表第二行第四列表示entry模块可以通过写法一加载应用内hsp模块内的Worker线程文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(107161)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当开发者加载entry、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
          children: "feature"
        }), "及hsp包的Worker线程文件时，不建议采用写法三，推荐使用写法一，此写法无需拼接路径，可实现Worker的快速创建。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worker线程文件的路径后缀（.ets/.ts）可以省略。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["跨源码HSP/HAR的场景下，需在创建Worker的模块包对应的oh-package.json5文件中，配置所需HSP/HAR包的依赖项，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/ide-har-import",
          children: "引用共享包"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当feature模块需加载其他模块的Worker线程文件时，应先完成对feature模块的调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当开启useNormalizedOHMUrl（在工程目录中与entry同级别的应用级build-profile.json5文件中，将strictMode属性下的useNormalizedOHMUrl字段配置为true）或HAR包被打包成三方包使用时，HAR包中使用Worker仅支持通过相对路径的加载形式创建。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "entry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "应用内hsp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "跨工程hsp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "源码har"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "三方har"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法一、三）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法一）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法一）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法二）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "feature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨包支持（写法一），包内场景支持（写法一、三）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法一）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法二）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用内hsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法一）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨包支持（写法一），包内场景支持（写法一、三）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法二）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跨工程hsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "源码har"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法一）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（写法一）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨包支持（写法二），包内场景支持（写法二、三）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "三方har"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持包内场景（写法三）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以entry模块加载源码har包的Worker线程文件为例，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建HAR详情参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
            children: "开发静态共享包"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HAR中创建Worker线程文件相关内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workerPort.onmessage = (e: MessageEvents) => {\n  console.info('worker thread receive message: ', e.data);\n  workerPort.postMessage('worker thread post message to main thread');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry模块的oh-package.json5文件中配置HAR包的依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"entry\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\",\n  \"main\": \"\",\n  \"author\": \"\",\n  \"license\": \"\",\n  \"dependencies\": {\n    \"har\": \"file:../har\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry模块中加载HAR包中的Worker线程文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { worker } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 通过@标识路径加载形式，加载har中Worker线程文件\n          let workerInstance = new worker.ThreadWorker('@har/ets/workers/worker.ets');\n          workerInstance.onmessage = () => {\n            console.info('main thread onmessage');\n          };\n          workerInstance.postMessage('hello world');\n          this.message = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fa模型下的文件路径规则",
      children: "FA模型下的文件路径规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造函数中的scriptURL为：Worker线程文件与\"{moduleName}/src/main/ets/MainAbility\"的相对路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker } from '@kit.ArkTS';\n\n// 主要说明以下三种场景：\n\n// 场景1： Worker线程文件所在路径：\"{moduleName}/src/main/ets/MainAbility/workers/worker.ets\"\nconst workerFA1: worker.ThreadWorker = new worker.ThreadWorker('workers/worker.ets', {name:'first worker in FA model'});\n\n// 场景2： Worker线程文件所在路径：\"{moduleName}/src/main/ets/workers/worker.ets\"\nconst workerFA2: worker.ThreadWorker = new worker.ThreadWorker('../workers/worker.ets');\n\n// 场景3： Worker线程文件所在路径：\"{moduleName}/src/main/ets/MainAbility/ThreadFile/workers/worker.ets\"\nconst workerFA3: worker.ThreadWorker = new worker.ThreadWorker('ThreadFile/workers/worker.ets');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期注意事项",
      children: "生命周期注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Worker创建后需要手动管理生命周期。Worker的创建和销毁会消耗较多的系统资源，建议开发者合理管理并重复使用已创建的Worker。Worker空闲时仍会占用资源，当不需要Worker时，可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#terminate9",
          children: "terminate()"
        }), "接口或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#close9",
          children: "close()"
        }), "方法主动销毁Worker。需要注意的是，调用完terminate()接口或close()方法后，worker线程的退出是异步的。若开发者注册", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#threadworker9",
          children: "onexit()"
        }), "，则线程真正退出的时机是在onexit()回调完成之后。若Worker处于已销毁或正在销毁等非运行状态时，调用其功能接口，会抛出相应的错误。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Worker的数量由内存管理策略决定，设定的内存阈值为1.5GB和设备物理内存的60%中的较小值。在内存允许的情况下，系统最多可以同时运行64个Worker，并且与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/napi/napi#napi_create_ark_runtime",
          children: "napi_create_ark_runtime"
        }), "创建的runtime总数不超过80。尝试创建的Worker数量超出上限时，系统将抛出错误：“Worker initialization failure, the number of workers exceeds the maximum.”。实际运行的Worker数量会根据当前内存使用情况实时调整。当所有Worker和主线程的累积内存占用超过设定的阈值时，系统将触发内存溢出（OOM）错误，导致应用程序崩溃。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他注意事项",
      children: "其他注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同线程中上下文对象是不同的，因此Worker线程只能使用线程安全的库，例如UI相关的非线程安全库不能在Worker子线程中使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单次序列化传输的数据量大小限制为16MB。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持在Worker工作线程中使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
          children: "AppStorage"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在Worker文件中禁止使用export语法导出任何内容，否则会导致jscrash问题。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用挂起后，该应用的Worker线程会", (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/background-task-overview",
          children: "暂停运行"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["除上述注意事项外，使用Worker时还需注意", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview#%E5%B9%B6%E5%8F%91%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
          children: "并发注意事项"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "worker基本用法示例",
      children: "Worker基本用法示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio支持一键生成Worker，在对应的{moduleName}目录下任意位置，单击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息。本文以创建“worker”为例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持手动创建Worker文件，具体方式和注意事项请参阅", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BAworker%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
            children: "创建Worker的注意事项"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Worker模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { ErrorEvent, MessageEvents, worker } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在宿主线程中，通过调用ThreadWorker的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker#constructor9",
            children: "constructor()"
          }), "方法创建Worker对象，并注册回调函数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 创建Worker对象\n          let workerInstance = new worker.ThreadWorker('entry/ets/workers/worker.ets');\n\n          // 注册onmessage回调，捕获宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息。该回调在宿主线程执行\n          workerInstance.onmessage = (e: MessageEvents) => {\n            let data: string = e.data;\n            console.info('workerInstance onmessage is: ', data);\n          }\n\n          // 注册onAllErrors回调，捕获Worker线程的onmessage回调、timer回调以及文件执行等流程产生的全局异常。该回调在宿主线程执行\n          workerInstance.onAllErrors = (err: ErrorEvent) => {\n            console.error('workerInstance onAllErrors message is: ' + err.message);\n          }\n\n          // 注册onmessageerror回调，当Worker对象接收到无法序列化的消息时被调用，在宿主线程执行\n          workerInstance.onmessageerror = () => {\n            console.error('workerInstance onmessageerror');\n          }\n\n          // 注册onexit回调，当Worker销毁时被调用，在宿主线程执行\n          workerInstance.onexit = (e: number) => {\n            // Worker正常退出时，code为0；异常退出时，code为1\n            console.info('workerInstance onexit code is: ', e);\n          }\n\n          // 发送消息给Worker线程\n          workerInstance.postMessage('1');\n          // ...\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Worker文件中注册回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// worker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\n// 注册onmessage回调，当Worker线程收到来自其宿主线程通过postMessage接口发送的消息时被调用，在Worker线程执行\nworkerPort.onmessage = (e: MessageEvents) => {\n  let data: string = e.data;\n  console.info('workerPort onmessage is: ', data);\n\n  // 向宿主线程发送消息\n  workerPort.postMessage('2');\n}\n\n// 注册onmessageerror回调，当Worker对象接收到一条无法被序列化的消息时被调用，在Worker线程执行\nworkerPort.onmessageerror = () => {\n  console.error('workerPort onmessageerror');\n}\n\n// 注册onerror回调，捕获Worker在执行过程中发生的异常，在Worker线程执行\nworkerPort.onerror = (err: ErrorEvent) => {\n  console.error('workerPort onerror err is: ', err.message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多级worker生命周期管理",
      children: "多级Worker生命周期管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持创建多级Worker，即父Worker可以创建子Worker，形成层级线程关系。由于Worker线程的生命周期由开发者管理，因此需要正确管理多级Worker的生命周期。当销毁父Worker时未能终止其子Worker的运行，可能会导致不可预期的结果。所以需要确保子Worker的生命周期在父Worker生命周期范围内，销毁父Worker前，先销毁所有子Worker，以防止不可预期的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "推荐使用示例",
      children: "推荐使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在宿主线程中创建Worker线程（父Worker），在worker线程中再次创建Worker线程（子Worker）\nimport { worker, MessageEvents, ErrorEvent } from '@kit.ArkTS';\n\n// 宿主线程中创建父Worker对象\nconst parentWorker = new worker.ThreadWorker('entry/ets/workers/ParentWorker.ets');\n\n// 接收父Worker返回的消息\nparentWorker.onmessage = (e: MessageEvents) => {\n  console.info('宿主线程收到父worker线程信息 ' + e.data);\n}\n\n// 父Worker正常退出后的回调\nparentWorker.onexit = () => {\n  console.info('父worker退出');\n}\n\n// 父Worker运行过程中发生未被捕获的异常或运行错误时的回调\nparentWorker.onAllErrors = (err: ErrorEvent) => {\n  console.error('宿主线程接收到父worker报错 ' + err.message);\n}\n\n// 向父Worker发送启动消息，用于触发其onmessage中的处理逻辑\nparentWorker.postMessage('宿主线程发送消息给父worker-推荐示例');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ParentWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n\n// 父Worker线程中与宿主线程通信的对象\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e : MessageEvents) => {\n  // 收到宿主线程指令后，创建子Worker\n  if (e.data == '宿主线程发送消息给父worker-推荐示例') {\n    let childWorker = new worker.ThreadWorker('entry/ets/workers/ChildWorker.ets');\n\n    // 接收子Worker的执行结果\n    childWorker.onmessage = (e: MessageEvents) => {\n      console.info('父Worker收到子Worker的信息 ' + e.data);\n      if (e.data == '子Worker向父Worker发送信息') {\n        // 子Worker任务完成后，通知宿主线程\n        workerPort.postMessage('父Worker向宿主线程发送信息');\n      }\n    }\n\n    // 子Worker退出后再销毁父Worker\n    childWorker.onexit = () => {\n      console.info('子Worker退出');\n      workerPort.close();\n    }\n\n    // 子Worker运行过程中发生未被捕获的异常或运行错误时的回调\n    childWorker.onAllErrors = (err: ErrorEvent) => {\n      console.error('子Worker发生报错 ' + err.message);\n    }\n\n    // 向子Worker发送启动消息，用于触发其onmessage中的处理逻辑\n    childWorker.postMessage('父Worker向子Worker发送信息-推荐示例');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ChildWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n\n// 子Worker线程中与父Worker线程通信的对象\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  if (e.data == '父Worker向子Worker发送信息-推荐示例') {\n    // 子Worker线程业务逻辑...\n    console.info('业务执行结束，然后子Worker销毁');\n    // 子Worker任务完成后退出\n    workerPort.close();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不推荐使用示例",
      children: "不推荐使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议在父Worker销毁后，子Worker继续向父Worker发送消息。因为父Worker已被销毁，消息无法被正确处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker, MessageEvents, ErrorEvent } from '@kit.ArkTS';\n\n// 宿主线程中创建父Worker对象\nconst parentWorker = new worker.ThreadWorker('entry/ets/workers/ParentWorker.ets');\n\n// 接收父Worker返回的消息\nparentWorker.onmessage = (e: MessageEvents) => {\n  console.info('宿主线程收到父Worker信息' + e.data);\n}\n\n// 父Worker正常退出后的回调\nparentWorker.onexit = () => {\n  console.info('父Worker退出');\n}\n\n// 父Worker运行过程中发生未被捕获的异常或运行错误时的回调\nparentWorker.onAllErrors = (err: ErrorEvent) => {\n  console.error('宿主线程接收到父Worker报错 ' + err.message);\n}\n\n// 向父Worker发送启动消息，用于触发其onmessage中的处理逻辑\nparentWorker.postMessage('宿主线程发送消息给父Worker');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ParentWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n\n// 父Worker线程中与宿主线程通信的对象\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e : MessageEvents) => {\n  console.info('父Worker收到宿主线程的信息 ' + e.data);\n\n  // 收到宿主线程指令后，创建子Worker\n  let childWorker = new worker.ThreadWorker('entry/ets/workers/ChildWorker.ets')\n\n  // 接收子Worker的执行结果\n  childWorker.onmessage = (e: MessageEvents) => {\n    console.info('父Worker收到子Worker的信息 ' + e.data);\n  }\n\n  // 子Worker正常退出后的回调\n  childWorker.onexit = () => {\n    console.info('子Worker退出');\n    // 父Worker已经或即将退出时，再次通过父Worker端口发送消息\n    workerPort.postMessage('父Worker向宿主线程发送信息');\n  }\n\n  // 子Worker运行过程中发生未被捕获的异常或运行错误时的回调\n  childWorker.onAllErrors = (err: ErrorEvent) => {\n    console.error('子Worker发生报错 ' + err.message);\n  }\n\n  // 向子Worker发送启动消息，用于触发其onmessage中的处理逻辑\n  childWorker.postMessage('父Worker向子Worker发送信息');\n\n  // 创建子Worker后，销毁父Worker\n  workerPort.close();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ChildWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n\n// 子Worker与父Worker通信的对象\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  console.info('子Worker收到信息 ' + e.data);\n\n  // 父Worker销毁后，子Worker向父Worker发送信息\n  workerPort.postMessage('子Worker向父Worker发送信息');\n\n  // 延迟再次发送\n  setTimeout(() => {\n    workerPort.postMessage('子Worker向父Worker发送信息');\n  }, 1000);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议在父Worker发起销毁操作的执行阶段创建子Worker。在创建子Worker线程之前，需确保父Worker线程始终处于存活状态，建议在确定父Worker未发起销毁操作的情况下创建子Worker。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { worker, MessageEvents, ErrorEvent } from '@kit.ArkTS';\n\n// 宿主线程中创建父Worker对象\nconst parentWorker = new worker.ThreadWorker('entry/ets/workers/ParentWorker.ets');\n\n// 接收父Worker返回的消息\nparentWorker.onmessage = (e: MessageEvents) => {\n  console.info('宿主线程收到父Worker信息' + e.data);\n}\n\n// 父Worker正常退出后的回调\nparentWorker.onexit = () => {\n  console.info('父Worker退出');\n}\n\n// 父Worker运行过程中发生未被捕获的异常或运行错误时的回调\nparentWorker.onAllErrors = (err: ErrorEvent) => {\n  console.error('宿主线程接收到父Worker报错 ' + err.message);\n}\n\n// 向父Worker发送启动消息，用于触发其onmessage中的处理逻辑\nparentWorker.postMessage('宿主线程发送消息给父Worker');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ParentWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n\n// 父Worker线程中与宿主线程通信的对象\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e : MessageEvents) => {\n  console.info('父Worker收到宿主线程的信息 ' + e.data);\n\n  // 父Worker销毁后创建子Worker\n  workerPort.close();\n  let childWorker = new worker.ThreadWorker('entry/ets/workers/ChildWorker.ets');\n\n  // 子Worker线程未确认创建成功前销毁父Worker\n  // let childWorker = new worker.ThreadWorker('entry/ets/workers/ChildWorker.ets');\n  // workerPort.close();\n\n  // 接收子Worker返回的消息\n  childWorker.onmessage = (e: MessageEvents) => {\n    console.info('父Worker收到子Worker的信息 ' + e.data);\n  }\n\n  // 子Worker正常退出后的回调\n  childWorker.onexit = () => {\n    console.info('子Worker退出');\n    // 父Worker已经或即将退出时，再次通过父Worker端口发送消息\n    workerPort.postMessage('父Worker向宿主线程发送信息');\n  }\n\n  // 子Worker运行过程中发生未被捕获的异常或运行错误时的回调\n  childWorker.onAllErrors = (err: ErrorEvent) => {\n    console.error('子Worker发生报错 ' + err.message);\n  }\n\n  // 向子Worker发送启动消息\n  childWorker.postMessage('父Worker向子Worker发送信息');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ChildWorker.ets\nimport { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  console.info('子Worker收到信息 ' + e.data);\n}\n"
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
107161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
347610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957530-36d4a12494018bdd7c5661802df0b135.png");

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