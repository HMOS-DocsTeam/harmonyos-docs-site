"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["714803"], {
544968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_test_service_indev_cmd_wukong_guidelines_wukong_guidelines_md_02b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-test-service-indev-cmd-wukong-guidelines-wukong-guidelines-md-02b.json
var site_docs_test_service_indev_cmd_wukong_guidelines_wukong_guidelines_md_02b_namespaceObject = JSON.parse('{"id":"test-service/indev_cmd/wukong-guidelines/wukong-guidelines","title":"wukong稳定性工具使用指导","description":"功能介绍","source":"@site/docs/test-service/indev_cmd/wukong-guidelines/wukong-guidelines.md","sourceDirName":"test-service/indev_cmd/wukong-guidelines","slug":"/test-service/indev_cmd/wukong-guidelines/","permalink":"/harmonyos-docs-site/test-service/indev_cmd/wukong-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"wukong稳定性工具使用指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wukong-guidelines","kit":"testing","last_updated":"2026-04-21"},"sidebar":"docs","previous":{"title":"HiSmartPerf Device性能使用指导","permalink":"/harmonyos-docs-site/test-service/indev_cmd/smartperf-guidelines/"},"next":{"title":"快速上手","permalink":"/harmonyos-docs-site/test-service/deveco-testing/get-familiar/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/test-service/indev_cmd/wukong-guidelines/wukong-guidelines.md


const frontMatter = {
	title: 'wukong稳定性工具使用指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wukong-guidelines',
	kit: 'testing',
	last_updated: '2026-04-21'
};
const contentTitle = 'wukong稳定性工具使用指导';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "功能特性及命令说明",
  "id": "功能特性及命令说明",
  "level": 2
}, {
  "value": "执行命令",
  "id": "执行命令",
  "level": 3
}, {
  "value": "随机测试",
  "id": "随机测试",
  "level": 2
}, {
  "value": "命令参数",
  "id": "命令参数",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 3
}, {
  "value": "专项测试",
  "id": "专项测试",
  "level": 2
}, {
  "value": "命令参数",
  "id": "命令参数-1",
  "level": 3
}, {
  "value": "测试命令",
  "id": "测试命令",
  "level": 3
}, {
  "value": "专注测试",
  "id": "专注测试",
  "level": 2
}, {
  "value": "命令参数",
  "id": "命令参数-2",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-1",
  "level": 3
}, {
  "value": "查看测试结果",
  "id": "查看测试结果",
  "level": 2
}, {
  "value": "测试结果输出路径",
  "id": "测试结果输出路径",
  "level": 3
}, {
  "value": "测试报告文件目录",
  "id": "测试报告文件目录",
  "level": 3
}, {
  "value": "查看操作日志",
  "id": "查看操作日志",
  "level": 3
}, {
  "value": "测试报告解析",
  "id": "测试报告解析",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "failed to connect to AAMS",
  "id": "failed-to-connect-to-aams",
  "level": 3
}, {
  "value": "Errorcode:(4005)",
  "id": "errorcode4005",
  "level": 3
}, {
  "value": "Errorcode:(4007)",
  "id": "errorcode4007",
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
        id: "wukong稳定性工具使用指导",
        children: "wukong稳定性工具使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wukong是系统自带的一种命令行工具，支持Ability的随机事件注入、控件注入、异常捕获、报告生成和对Ability数据遍历截图等特性。通过模拟用户行为，对系统或应用进行稳定性压力测试。wukong分为随机测试、专项测试和专注测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随机测试是指随机测试界面内容，支持的能力包括：shell启动、拉起整机应用、多种注入方式、设置随机种子、打印运行日志和生成报告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "专项测试主要提供对指定应用控件进行测试，支持的能力包括：shell启动、顺序遍历及截图、测试休眠唤醒、录制回放、打印运行日志和生成报告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "专注测试主要提供对指定控件的注入测试，支持的能力包括：shell启动、拉起整机应用、多种注入方式、设置随机种子、设置专注控件类型、设置注入控件次数、打印运行日志和生成报告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wukong部件架构图以及部件内子模块职责如下所述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(938307)/* ["default"] */.A) + "",
        width: "946",
        height: "295"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令行解析：支持命令行获取参数并解析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "运行环境管理：根据命令行初始化wukong整体运行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统接口管理：检查并获取指定的mgr，注册controller和dfx的faultlog的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "随机事件生成：通过random函数生成指定种子数的随机序列，生成事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "事件注入：根据支持的事件类型向系统注入事件，依赖窗口、多模、安全等子系统。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "异常捕获处理/报告生成：通过DFX子系统获取运行中的异常信息并记录log，生成报告。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wukong测试工具在API 9版本开始预置使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["所有命令执行前需完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc",
          children: "hdc环境配置"
        }), "，并进入shell模式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能特性及命令说明",
      children: "功能特性及命令说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-v/--version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取wukong版本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取wukong帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appinfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询支持拉起应用bundleName和对应的mainAbility名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "special"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wukong专项测试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wukong随机测试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wukong专注测试。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行命令",
      children: "执行命令"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入shell模式"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#若连接单个设备，则直接输入如下命令进入shell模式\nC:\\Users>hdc shell\n$\n#若同时连接多个设备，则需先获取sn号，先输入hdc list targets获取sn号，然后进入shell模式\nC:\\Users>hdc list targets\n15xxx424axxxx345209d94xxxx8fxx900\nC:\\Users>hdc -t 15xxx424axxxx345209d94xxxx8fxx900 shell\n$\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取应用的bundle name和ability name"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ wukong appinfo\nBundleName:  com.ohos.adminprovisioning\nAbilityName:  com.ohos.adminprovisioning.MainAbility\nBundleName:  com.ohos.callui\nAbilityName:  com.ohos.callui.MainAbility\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行查看帮助命令"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users>hdc shell\n$ wukong help        #wukong帮助菜单\nusage: wukong <command> [<arguments>]\nThese are common wukong command list:\n  help                       wukong help information\n  -v/--version               wukong version\n  exec                       run random test\n  special                    run special test\n  focus                      run focus test\n  appinfo                    show all app information\n$ wukong exec -help   #wukong随机测试帮助菜单\nusage: wukong exec [<arguments>]\nThese are wukong exec arguments list:\n  -h, --help                 random test help\n  -a, --appswitch            appswitch event percent\n  -b, --bundle               the bundle name of allowlist\n  -p, --prohibit             the bundle name of blocklist\n  -d, --page                 block page list\n  -t, --touch                touch event percent\n  -c, --count                test count\n  -i, --interval             interval\n  -s, --seed                 random seed\n  -m, --mouse                mouse event percent\n  -k, --keyboard             keyboard event percent\n  -H, --hardkey              hardkey event percent\n  -S, --swap                 swap event percent\n  -T, --time                 test time\n  -C, --component            component event percent\n  -r, --rotate               rotate event percent\n  -e, --allow ability        the ability name of allowlist\n  -E, --block ability        the ability name of blocklist\n  -Y, --blockCompId          the id list of block component\n  -y, --blockCompType        the type list of block component\n  -I, --screenshot           get screenshot(only in random input)\n  -B, --checkBWScreen        black and white screen detection\n  -U, --Uri                  set Uri pages\n  -x, --Uri-type             set Uri-type\n  -K, --knuckle              set percent of knuckle event\n  -f, --finger               set the number of fingers and proportions for tests such as swipe and knuckle gesture\n  -P, --pinch                set percent of pinch-to-zoom event\n  -D, --direction            set the swipe directions and proportions\n  -o, --pause                pause swiping for 1 second\n  -w, --crown                set percent of watch crown rotation event\n  -g, --gestures             set percent of watch gesture recognition events\n  -l, --idle                 set percent of watch idle event\n  -j, --keypress             set percent of watch physical button press event\n  -F, --float                set percent of float and split event\n  -W, --browser              set percent of browser operation event\n$ wukong special -help    #wukong专项测试帮助菜单\nusage: wukong special [<arguments>]\nThese are wukong special arguments list:\n  -h, --help                 special test help\n  -t, --touch[x,y]           touch event\n  -c, --count                total count of test\n  -i, --interval             interval\n  -S, --swap[option]         swap event\n                              option is -s| -e| -b\n                              -s, --start: the start point of swap\n                              -e, --end: the end point of swap\n                              -b, --bilateral: swap go and back\n  -k, --spec_insomnia        power on/off event\n  -T, --time                 total time of test\n  -C, --component            component event\n  -p, --screenshot           get screenshot(only in componment input)\n  -r, --record               record user operation\n  -R, --replay               replay user operation\n  -u, --uitest               uitest dumpLayout\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "随机测试",
      children: "随机测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令参数",
      children: "命令参数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h,--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前测试的帮助信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c,--count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置执行次数，与测试总时间-T冲突。二者取其一。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位次数，默认值为10次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i,--interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置执行间隔。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位ms，默认值为1500ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s,--seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机种子。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置相同随机种子，会生成相同随机事件序列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b,--bundle[bundlename,……,bundlename]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本次测试的允许应用名单，与-p冲突。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认测试当前设备所有应用（应用名称用英文逗号隔开）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p,--prohibit[bundlename,……,bundlename]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本次测试的禁止应用名单，与-b冲突。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认不禁止任何应用（应用名称用英文逗号隔开）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d,--page[page,……,page]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本次测试的禁止页面名单。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统默认禁止pages/system页面（页面名称用逗号隔开）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a,--appswitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置应用随机拉起测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为10%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t,--touch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机触摸测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为10%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-S,--swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机移动测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为3%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m,--mouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机鼠标测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为1%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k,--keyboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机键盘操作测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为2%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-H,--hardkey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机物理按键测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为2%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r,--rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机屏幕旋转测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为2%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-C, --component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机控件测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为70%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-I, --screenshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控件测试截图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-T,--time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置测试总时间，与设置执行次数-c冲突。二者取其一。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位分钟，默认值为10分钟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e, --allow ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置允许测试的ability。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-E, --block ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置禁止测试的ability。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-Y, --blockCompId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置不进行注入的CompId。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-y, --blockCompType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置不进行注入的CompType。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-B, --checkBWScreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置启用黑白屏检测。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-U, --Uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置应用拉起页面的URI。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-x, --UriType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置应用拉起页面的URIType（统一资源标识符类型）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-K, --knuckle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指关节敲击测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f, --finger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动和指关节敲击测试的参与手指数量及比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持配置1-4个手指，格式：-f <手指数1,比例>,<手指数2,比例>,<手指数3,比例>,<手指数4,比例>，例如:-f 1,0.25,2,0.25,3,0.25,4,0.25。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-P, --pinch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置双指捏合测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-D, --direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动方向及比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持配置上(u)、下(d)、左(l)、右(r)四个方向，格式：-D <方向1,比例>,<方向2,比例>,<方向3,比例>,<方向4,比例>，例如:u,0.25,r,0.25,d,0.25,l,0.25。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o, --pause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动过程中支持暂停。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数缺省则不支持暂停。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w, --crown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置表冠操作测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Wearable设备支持，取值范围0到1，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-g, --gestures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置手势（如上滑、下滑、左滑、右滑等）操作测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Wearable设备支持，取值范围0到1，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l, --idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置待机状态下的操作测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Wearable设备支持，取值范围0到1，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-j, --keypress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键（电源键、智感窗按键）操作测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅Wearable设备支持，取值范围0到1，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-F, --float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置应用分屏模式和悬浮窗模式的测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-W, --browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置浏览器操作测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值范围0到1，默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(980771)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上述参数的测试比例表示在当前测试中的操作，所有参数的测试比例之和需小于等于1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-K，-f，-P，-D，-o，-w，-g，-l，-j，-F，-W参数从API version 23开始支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置100次事件注入"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ wukong exec -s 10 -i 1000 -a 0.28 -t 0.72 -c 100\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令中各参数含义："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "命令"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "wukong exec"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "主命令。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-s"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "10"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "参数设置随机种子，10为种子值。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-i"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "参数设置应用拉起间隔为1000ms。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-a"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0.28"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "参数设置应用随机拉起测试比例28%。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-t"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0.72"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "参数设置屏幕随机touch测试比例为72%。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-c"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "100"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "参数设置执行次数为100次。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定页面压测"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "> 显示启动\n> hdc_std shell\n$ wukong exec -b bundlename -e abilityname -U uri\n\n> 隐式启动\n> hdc_std shell\n$ wukong exec -b bundlename -U uri -x uriType\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置允许测试和禁止测试的ability"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ wukong exec -b com.ohos.settings -e com.ohos.settings.MainAbility -E com.ohos.settings.AppInfoAbility\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(398581)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若配置-e、-E则须配置-b来指定应用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "专项测试",
      children: "专项测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令参数-1",
      children: "命令参数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h, --help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前专项测试的帮助信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k, --spec_insomnia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "休眠唤醒专项测试。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c, --count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置执行次数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位次数，默认值为10次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i, --interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置执行间隔。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位ms，默认值为1500ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-S, --swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动测试。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s, --start[x,y]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动测试起点坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "坐标均为正值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e, --end[x,y]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置滑动测试终点坐标。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "坐标均为正值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b, --bilateral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置往返滑动。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认不往返滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t, --touch[x,y]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击测试。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-T, --time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置测试总时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位分钟，默认值为10分钟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-C, --component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控件顺序遍历测试。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置测试应用名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r, --record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要指定录制文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-R, --replay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回放。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要指定回放文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p, --screenshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控件测试截图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "测试命令",
      children: "测试命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ wukong special -C [bundlename] -p\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "专注测试",
      children: "专注测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令参数-2",
      children: "命令参数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n,--numberfocus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置每个控件注入的次数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位次数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f, --focustypes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置需要专注的控件类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以英文逗号隔开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h,--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前测试的帮助信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c,--count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置执行次数，与设置执行时间-T冲突。二者取其一。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位次数，默认值为10次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i,--interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置执行间隔。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位ms，默认值为1500ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s,--seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机种子。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置相同随机种子，会生成相同随机事件序列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b,--bundle[bundlename,……,bundlename]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本次测试的允许应用名单，与-p冲突。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认测试当前设备所有应用（应用名称用英文逗号隔开）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p,--prohibit[bundlename,……,bundlename]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本次测试的禁止应用名单，与-b冲突。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认不禁止任何应用（应用名称用英文逗号隔开）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d,--page[page,……,page]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本次测试的禁止页面名单。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统默认禁止pages/system页面（页面名称用逗号隔开）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a,--appswitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置应用随机拉起测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为10%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t,--touch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机触摸测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为10%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-S,--swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机移动测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为3%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m,--mouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机鼠标测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为1%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k,--keyboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕随机键盘操作测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为2%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-H,--hardkey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机物理按键测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为2%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r,--rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机屏幕旋转测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为2%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-C, --component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置随机控件测试比例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为70%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-I, --screenshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控件测试截图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-T,--time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置测试总时间，与设置执行次数-c冲突。二者取其一。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位分钟，默认值为10分钟。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e, --allow ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置允许测试的ability。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-E, --block ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置禁止测试的ability。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-Y, --blockCompId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置不进行注入的CompId。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-y, --blockCompType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置不进行注入的CompType。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-B, --checkBWScreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置启用黑白屏检测。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-1",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ wukong focus -s 10 -i 1000 -a 0.28 -t 0.72 -c 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令中各参数含义："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wukong focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数设置随机种子，10为种子值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数设置应用拉起间隔为1000ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数设置应用随机拉起测试比例28%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数设置屏幕随机touch测试比例为72%。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数设置执行次数为100次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看测试结果",
      children: "查看测试结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "测试结果输出路径",
      children: "测试结果输出路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行完测试指令后，会自动生成测试结果，测试结果输出根路径如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2022/9/22之前的DevEco Studio版本，结果存放路径为：/data/local/wukong/report/xxxxxxxx_xxxxxx/"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2022/9/22之后的DevEco Studio版本，结果存放路径为：/data/local/tmp/wukong/report/xxxxxxxx_xxxxxx/"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "测试报告文件目录",
      children: "测试报告文件目录"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exception/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放本次测试产生的异常文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "screenshot/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放测试遍历的截图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wukong_report.csv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试报告统计汇总。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wukong.log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试操作历程。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看操作日志",
      children: "查看操作日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wukong支持通过hdc命令将日志获取到本地，查看操作历程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# wukong.log文件对应路径如下\n/data/local/tmp/wukong/report/xxxxxxxx_xxxxxx/wukong.log\n\n# 查看wukong测试报告文件目录操作如下\n$ cd /data/local/tmp/wukong/report/20170805_170053\n$ ls\ndata.js  exception  wukong.log  wukong_report.csv\n\n# 开启shell窗口，用hdc file recv获取wukong日志\nC:\\Users\\xxx>hdc file recv /data/local/tmp/wukong/report/20170805_170053/wukong.log C:\\Users\\xxx\\Desktop\\log\n[I][2024-01-03 20:08:02] HdcFile::TransferSummary success\nFileTransfer finish, Size:76492, File count = 1, time:16ms rate:4780.75kB/s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "测试报告解析",
      children: "测试报告解析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含基本信息、事件注入统计、Ability统计、故障统计。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基本信息（Base Info）"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "task status"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "任务状态。success表示成功，fail表示失败。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "task time"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "任务执行时间。单位：秒。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "seed"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "随机种子。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "task count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "事件注入总次数。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "故障注入统计（Input Message Statistics）"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["事件或控件注入的类型，事件注入类型范围请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E9%9A%8F%E6%9C%BA%E6%B5%8B%E8%AF%95",
                  children: "随机测试命令参数"
                }), "，控件注入类型范围请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp",
                  children: "ArkTS组件"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "execTimes"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "事件或者控件注入执行次数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "proportion"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前事件操作在事件注入执行总次数里的占比。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "inputedTimes"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "遍历的控件类型个数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "expectInputTimes"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用控件类型总数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "coverage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "控件遍历覆盖率。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ability统计（ability Statistics）"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bundleName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用的bundleName。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "inputedAbilityCount"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "遍历的Ability数量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "abilitiesCount"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用的Ability总数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "coverage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ability遍历覆盖率。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "故障统计（Exception Message Statistics）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(555617)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "故障日志路径：/data/log/faultlog/faultlogger/"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "故障类型，故障类型包含：CPP_CRASH、JS_CRASH、SYS_FREEZE、APP_FREEZE等。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "times"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "故障次数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "proportion"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前故障在故障总数里的占比。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failed-to-connect-to-aams",
      children: "failed to connect to AAMS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "failed to connect to AAMS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AAMS被hypium或者dev testing的UIViewer占用了，AAMS同一时间只能被一个程序连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结束占用AAMS的进程，或直接重启设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "errorcode4005",
      children: "Errorcode:(4005)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Errorcode:(4005)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因屏幕显示区域大小变化，导致无障碍获取页面信息失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误不影响测试流程，无需处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "errorcode4007",
      children: "Errorcode:(4007)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Errorcode:(4007)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因屏幕显示区域大小变化，导致无障碍获取页面信息失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误不影响测试流程，无需处理。"
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
938307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002550617950-46f3ab7206affe3f637530399f0a7dbf.png");

},
398581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
980771(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
555617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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