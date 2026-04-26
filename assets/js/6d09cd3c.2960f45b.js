"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["527931"], {
805983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_develop_agc_harmonyos_clouddev_cloudfunctions_agc_harmonyos_clouddev_debugfunc_agc_harmonyos_clouddev_debugfunc_md_6d0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-agc-harmonyos-clouddevguide-agc-harmonyos-clouddev-devprocess-agc-harmonyos-clouddev-develop-agc-harmonyos-clouddev-cloudfunctions-agc-harmonyos-clouddev-debugfunc-agc-harmonyos-clouddev-debugfunc-md-6d0.json
var site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_develop_agc_harmonyos_clouddev_cloudfunctions_agc_harmonyos_clouddev_debugfunc_agc_harmonyos_clouddev_debugfunc_md_6d0_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-debugfunc/agc-harmonyos-clouddev-debugfunc","title":"调试函数","description":"函数开发完成后，您可以对函数进行调试，以验证函数代码运行是否正常。","source":"@site/docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-debugfunc/agc-harmonyos-clouddev-debugfunc.md","sourceDirName":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-debugfunc","slug":"/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-debugfunc/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-debugfunc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"调试函数","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-debugfunc","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"开发函数","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-funccoding/"},"next":{"title":"部署函数","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-deployfunc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-debugfunc/agc-harmonyos-clouddev-debugfunc.md


const frontMatter = {
	title: '调试函数',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-debugfunc',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '调试函数';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "通过本地调用方式调试函数",
  "id": "通过本地调用方式调试函数",
  "level": 2
}, {
  "value": "通过远程调用方式调试函数",
  "id": "通过远程调用方式调试函数",
  "level": 2
}, {
  "value": "（可选）自定义Run/Debug配置",
  "id": "可选自定义rundebug配置",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "调试函数",
        children: "调试函数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数开发完成后，您可以对函数进行调试，以验证函数代码运行是否正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前DevEco Studio函数调试支持本地调用和远程调用，请根据实际场景选择使用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#section248615546567",
          children: "通过本地调用方式调试函数"
        }), "：在DevEco Studio调试本地开发好的函数。支持单个调试和批量调试，并支持Run和Debug两种模式，调试功能丰富，常在函数开发过程或问题定位过程中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#section123191549587",
          children: "通过远程调用方式调试函数"
        }), "：先将函数部署至AGC云端，然后直接在DevEco Studio调用云端函数。此方式主要用于测试函数在云端的运行情况、或补充测试因各种因素限制未能在本地调用方式中发现的问题。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保您已登录。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果您的工程有代码逻辑涉及云函数调用云数据库，您需在调试前先", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-deploy",
          children: "将整个云工程部署到AGC云端"
        }), "，否则云端将没有相关数据及环境变量。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过本地调用方式调试函数",
      children: "通过本地调用方式调试函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可在DevEco Studio调试本地开发好的函数，支持单个调试和批量调试，并支持Run和Debug两种模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个调试和批量调试流程相同，区别仅在于：单个调试是一次只为一个函数启动本地调试，之后只能调用该函数；批量调试是一次为“cloudfunctions”目录下所有函数启动本地调试、然后逐个调用各个函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run模式和Debug模式的区别在于：Debug模式支持使用断点来追踪函数的运行情况，Run模式则不支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文以Debug模式下调试单个函数“my-cloud-function”为例，介绍如何在DevEco Studio调试本地函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击“my-cloud-function”函数目录，选择“Debug 'my-cloud-function'”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(876292)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["直接从当前路径下Debug，使用的是默认的Debug配置，您也可", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section65830284215",
              children: "自定义Debug配置"
            }), "。自定义Debug配置后再从此路径下Debug，将优先采用自定义Debug配置。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如需批量调试多个函数，右击“cloudfunctions”目录，选择“Debug Cloud Functions”，即可启动该目录下所有函数。如“cloudfunctions”目录下同时存在云函数和云对象，将会启动所有的云函数和云对象。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(943653)/* ["default"] */.A) + "",
            width: "599",
            height: "461"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在下方通知栏“cloudfunctions”窗口，查看调试日志。如果出现“Cloud Functions loaded successfully”，表示函数成功加载到本地运行的HTTP Server中，并生成对应的Function URI。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(368198)/* ["default"] */.A) + "",
            width: "1084",
            height: "593"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如需设置断点调试，在函数代码中选定要设置断点的有效代码行，在行号（如下图行15）后单击鼠标左键设置断点（如下图的红点）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置断点后，调试能够在断点处中断，并高亮显示该行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(435855)/* ["default"] */.A) + "",
            width: "919",
            height: "564"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在菜单栏选择“View > Tool Windows > Cloud Functions Requestor”，使用事件模拟器（Cloud Functions Requestor）触发函数调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(628121)/* ["default"] */.A) + "",
            width: "676",
            height: "380"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的“Cloud Functions Requestor”面板，配置触发事件参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cloud Function：选择需要触发的云函数，此处以函数“my-cloud-function”为例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Environment：选择函数调用环境。此处选择“Local”，表示本地调用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Event：输入事件参数，内容为JSON格式请求体数据。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(521744)/* ["default"] */.A) + "",
            width: "917",
            height: "519"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）点击“Save”，可保存当前触发事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(861300)/* ["default"] */.A) + "",
            width: "915",
            height: "523"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击右上角", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(642363)/* ["default"] */.A) + "",
            width: "23",
            height: "29"
          }), "可展开保存的触发事件，后续可直接点击“Load”加载事件。对于不需要保存的触发事件，也可以点击“Delete”删除。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(68766)/* ["default"] */.A) + "",
            width: "553",
            height: "496"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Trigger”， 将会触发执行用户函数代码。执行结果将展示在“Result”框内，“cloudfunctions”窗口同时打印调试日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(626089)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["“Result”框右侧的“Logs”面板仅用于在", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section123191549587",
            children: "通过远程调用方式调试函数"
          }), "时查看日志。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(56163)/* ["default"] */.A) + "",
            width: "912",
            height: "715"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）如", (0,jsx_runtime.jsx)(_components.a, {
            href: "#li15793566149",
            children: "配置了环境变量"
          }), "，可将变量信息传入到函数执行环境中，用于函数运行时读取。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "logger.info(context.env.name);//name为环境变量名称\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图，函数“my-cloud-function”配置了环境变量“env1”，可成功访问环境变量“env1”的值“value1”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(265792)/* ["default"] */.A) + "",
            width: "914",
            height: "718"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击菜单栏", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(205761)/* ["default"] */.A) + "",
            width: "25",
            height: "20"
          }), "，可停止调试。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据调试结果修改函数代码后，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(433249)/* ["default"] */.A) + "",
            width: "20",
            height: "19"
          }), "重新以Debug模式启动调试，直至没有问题。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考步骤5~10，完成其他函数的调试。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过远程调用方式调试函数",
      children: "通过远程调用方式调试函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您还可以将函数部署至AGC云端，然后在DevEco Studio调用云端函数，以测试函数在云端的运行情况、或补充测试因各种因素限制未能在本地调试中发现的问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-deployfunc",
            children: "部署函数"
          }), "将需要调试的函数部署至AGC云端。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如函数代码涉及访问环境变量，需在AGC Portal函数列表中点击函数名称，为函数配置环境变量的值，供函数在运行时读取和使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(856698)/* ["default"] */.A) + "",
            width: "905",
            height: "736"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在菜单栏选择“View > Tool Windows > Cloud Functions Requestor”，使用事件模拟器（Cloud Functions Requestor）触发函数调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(330193)/* ["default"] */.A) + "",
            width: "676",
            height: "380"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的“Cloud Functions Requestor”面板，配置触发事件参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cloud Function：选择需要触发的云函数，此处依然以函数“my-cloud-function”为例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Environment：选择函数调用环境。此处选择“Remote”，表示远程调用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Event：输入事件参数，内容为JSON格式请求体数据。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(387024)/* ["default"] */.A) + "",
            width: "817",
            height: "447"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Trigger”， 将会触发执行用户函数代码，执行结果将展示在“Result”框内。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(101179)/* ["default"] */.A) + "",
            width: "814",
            height: "601"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Logs”页签，可查看打印的日志定位问题。修改函数代码、重新部署函数后再次执行远程调用，直至没有问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(273401)/* ["default"] */.A) + "",
            width: "543",
            height: "657"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考步骤1~5，完成其他函数的调试。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可选自定义rundebug配置",
      children: "（可选）自定义Run/Debug配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直接启动函数调试采用的是默认的Run/Debug配置。如有特殊需求，您也可使用自定义Run/Debug配置项来进行调试。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在菜单栏选择“Run > Edit Configurations”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(441978)/* ["default"] */.A) + "",
            width: "690",
            height: "409"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在“Run/Debug Configurations”窗口，点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(458065)/* ["default"] */.A) + "",
            width: "20",
            height: "16"
          }), "，选择“Cloud Functions”，新增一个Run/Debug配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(631234)/* ["default"] */.A) + "",
            width: "858",
            height: "667"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义Run/Debug配置，完成后点击“Run”或“Debug”即可立即按当前自定义配置启动本地调试。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如当前暂不使用自定义配置，可点击“OK”保存配置。后续有需要时再选择自定义配置，分别点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(271706)/* ["default"] */.A) + "",
            width: "19",
            height: "16"
          }), "或", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(516564)/* ["default"] */.A) + "",
            width: "23",
            height: "19"
          }), "进行Run或Debug。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(433416)/* ["default"] */.A) + "",
            width: "852",
            height: "664"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Name：Run/Debug配置的名称，如“functions-custom1”。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Server IP Address：HTTP服务端监听IP地址，默认为localhost，支持切换为您的局域网IP地址。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Server Port：HTTP服务端监听端口。默认为“18090”，自定义端口号建议大于1024。勾选“Auto increment”表示如当前端口被占用则端口号自动加“1”。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Environment variables：函数运行的环境变量，为key-value形式。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "点击“Edit environment variables”按钮，在“Environment Variables”弹窗中点击“+”添加一个环境变量，然后点击“OK”。添加成功后，您便可以将变量配置信息传入到函数执行环境中，用于函数运行时读取。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(839325)/* ["default"] */.A) + "",
                width: "858",
                height: "667"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
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
876292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
458065(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAARklEQVQ4jWO0sXf8z0BFwERNw4aBgcVFRQzFRUXUM5AcMPgNZEROh8SGV29fH0452roQHcBcjM9F6GDwRwp9w5AcQHUXAgAQDg+3qhh8gwAAAABJRU5ErkJggg==");

},
943653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858717-b084975ee294de887f9ce97f0154bd53.png");

},
626089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
271706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAApElEQVQ4ja2SMQ7CMAxFX0MBRaioK4IzcAIkVHbOzAFghBvABSiopLQpU7eUOBCPlvW+n+Vksy06IpWKBRqE6WKOysJzUmdzNSZd5JjLi/pcQSu7xHD8KGG61sz2Oely8iesH8gUepeJ1J2azkGBetiVPepRX0OsCUDbfdUUw5rrG3N6YEv7+2a2tJjjk+ZWewOHYR4lMUyiJIZVh3sQpK+or/EBZ4JDrTAIluwAAAAASUVORK5CYII=");

},
56163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002503613920-2a6cd1d9e048261d48a9fc3d58252172.png");

},
368198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704369-0c0adff6379b4284d948e790aea1dbee.png");

},
856698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858729-4234e4d845ce345710199eae4b3990ca.png");

},
101179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704345-cdfd2691959787f7cd8dd79b743ad1ec.png");

},
861300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498072-1fe8e2c9c4848f6c7ee2354f7a9cc489.png");

},
441978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498096-0cd28226dfe1bca8a41801fa752f497d.png");

},
435855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002533684069-a9f4e3bbd6af64d9acf2cf536d5bc2be.png");

},
433249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABSElEQVQ4Ec2TTUvDQBCG+8NqtvnYuJtIQj5a0KOoB1GvXkSw4N2iVbH9ryOz+G7TDisVevAwvJPZdx5myO5orGI6ZIwOCWNWGJgmpOcVqZn2G6ipdrVxmvja7kBBYFRpMm8t2c+O1Cx3wTnX+GwXhO8gkA1qmpNd9WS/fmLd0+Q0D8K4JwiMipSOFy3Zdb8VZtlR1GZBqADmzzVxmEWzBRqCeW34sCpUAM1LQ+ZVTjYEcm6WLbEXIKgA8sHkLPfTqWbzAzgHOL60Asa9ApjclaQfKt+Y3Z8Q1zg4B1A/1a6GyaACiIZ9FSCoAB6VGcXnxk8SWjm9KYi9AEEFkC9xfGE9MLRyclu6yw4QVAD3XRU+gKACyOtyJFfWPTs0el31lFwXzsM+gKACiANWfrP6sSLz3pL56EjPa1L95hoNvch/BcL0F/3/wG9PdMOrvj3SgQAAAABJRU5ErkJggg==");

},
839325(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338424-07f9a0e835839ce46ed44e7e803ffbeb.png");

},
273401(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002535303613-b090027028ff4a3673f70944ee7398d6.png");

},
265792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002503615754-407c2dbd8020cbd92c9af711c4093458.png");

},
205761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAPklEQVRIiWO0sXf8z0BjwERrC0YtGZyWsBBS0C3KT5RBpa8/4pQbPsE1asmoJUPcEoI5Hl9OJhYMn+CiiyUAf9gHOIRV7xAAAAAASUVORK5CYII=");

},
387024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338388-2d188dd99ae5de88114dbbbe10a25dfb.png");

},
628121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338456-31477b31e3ffd04870b1780b00484248.png");

},
631234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704341-b831a7537c589c08dca5344c1d64c04d.png");

},
433416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704377-aac2d06eb16926e27cdb373a746bab07.png");

},
516564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABiElEQVQ4jcWUMU/bQBTHf+/uHPvOiZGCRCqlK4ylYkSREAli6cfkAzCxsHWAFcpYqWKthFqRYjmJYycdnIYicsgoQrzpznf38//9792T3sHhnDcK9VbgenAj2EEL3THLT3rLYActMLIeXMUa3Ta4foLuBOhOgBsk6LZBxXo9+GxYMPqaghbcUYI7SsAI44uU2bBYV7ki6jVBFrsXJ6JeC7X5snLjW3DHSQVvKiR+rkFCwfUTZsMSgOz8T324ihVoQaw/OYkUSoDp6mr2wtPTe0w3wParDLKzIeXvymPdNrgvGwBMrkdMv49fB2/sOnTy6GmwE6JHjSor+1iC5mMDsYr8W1YfHn6yT+bBdrRaXTfAdIPXwdPTe0zHEO03Ab8t+XVGfpuv/rEPrmJFdVsL5R5b5iKoWFGmZX34v1Jcwj22hLsWsDyc/KoPH1+mAIgRwj33vI/MYXKVMR/PfAg/fPpjshwXPwvCzxb9wYAI5V1BfpNR3r38/L3w/6PqLw91tj6Jd+7na8RfvXNlQk9whkcAAAAASUVORK5CYII=");

},
330193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498140-31477b31e3ffd04870b1780b00484248.png");

},
521744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338412-1f3b279713a438b57f17481d14b5eb5b.png");

},
642363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAdCAYAAABBsffGAAAAxElEQVRIiWO0sXf8z0AjwEQrg0cNHzWcNMCCTdDWxposww4fOUqE4dZWVDGcccjmUKzBAgOsrCwM7q4uDFu27WBgYCAcF0SFOQMDA4OIiDBDoL8fg6iICMJwAnFBlOF6uroM7q7ODKysrCjibZ3deA1HBzjCnDpxjNXlly5fYXj2/Dk8WGCgqrwUr2HoPsMZ5m/evGVYsGgxg7urC1zs8NFjxDkZCoZZOicUtrgAUWFOatjiAtgNR8sM5IKhW1mMGk5/wwEXPjS6XNKB4QAAAABJRU5ErkJggg==");

},
68766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002278063192-3fb561f1f2fcad6b4b5cd729326aaa14.png");

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