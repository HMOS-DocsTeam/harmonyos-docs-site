"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["387465"], {
256676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_uinput_uinput_md_0dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-uinput-uinput-md-0dc.json
var site_docs_system_debug_optimize_debugging_commands_uinput_uinput_md_0dc_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/uinput/uinput","title":"uinput","description":"uinput 可模拟用户操作，例如鼠标、键盘、触控板等设备，适用于稳定性等压力测试。","source":"@site/docs/system-debug-optimize/debugging-commands/uinput/uinput.md","sourceDirName":"system-debug-optimize/debugging-commands/uinput","slug":"/system-debug-optimize/debugging-commands/uinput/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/uinput/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"uinput","sidebar_position":21,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uinput","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"hiprofiler","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hiprofiler/"},"next":{"title":"toybox","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/toybox/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/uinput/uinput.md


const frontMatter = {
	title: 'uinput',
	sidebar_position: 21,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uinput',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'uinput';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "uinput功能",
  "id": "uinput功能",
  "level": 2
}, {
  "value": "帮助命令",
  "id": "帮助命令",
  "level": 2
}, {
  "value": "鼠标事件",
  "id": "鼠标事件",
  "level": 2
}, {
  "value": "鼠标移动事件",
  "id": "鼠标移动事件",
  "level": 3
}, {
  "value": "鼠标按键按下事件",
  "id": "鼠标按键按下事件",
  "level": 3
}, {
  "value": "鼠标按键抬起事件",
  "id": "鼠标按键抬起事件",
  "level": 3
}, {
  "value": "鼠标按键单击事件",
  "id": "鼠标按键单击事件",
  "level": 3
}, {
  "value": "双击鼠标按键事件",
  "id": "双击鼠标按键事件",
  "level": 3
}, {
  "value": "鼠标滚轴滚动事件",
  "id": "鼠标滚轴滚动事件",
  "level": 3
}, {
  "value": "鼠标拖拽事件",
  "id": "鼠标拖拽事件",
  "level": 3
}, {
  "value": "设置鼠标事件间隔",
  "id": "设置鼠标事件间隔",
  "level": 3
}, {
  "value": "鼠标按键",
  "id": "鼠标按键",
  "level": 3
}, {
  "value": "查询鼠标光标信息",
  "id": "查询鼠标光标信息",
  "level": 3
}, {
  "value": "键盘事件",
  "id": "键盘事件",
  "level": 2
}, {
  "value": "键盘按键按下事件",
  "id": "键盘按键按下事件",
  "level": 3
}, {
  "value": "键盘按键抬起事件",
  "id": "键盘按键抬起事件",
  "level": 3
}, {
  "value": "键盘按键长按事件",
  "id": "键盘按键长按事件",
  "level": 3
}, {
  "value": "键盘按键持续输入事件",
  "id": "键盘按键持续输入事件",
  "level": 3
}, {
  "value": "设置键盘事件间隔",
  "id": "设置键盘事件间隔",
  "level": 3
}, {
  "value": "键盘文本输入事件",
  "id": "键盘文本输入事件",
  "level": 3
}, {
  "value": "控制注入的修饰键状态",
  "id": "控制注入的修饰键状态",
  "level": 2
}, {
  "value": "启用控制注入的修饰键状态能力",
  "id": "启用控制注入的修饰键状态能力",
  "level": 3
}, {
  "value": "禁用控制注入的修饰键状态能力",
  "id": "禁用控制注入的修饰键状态能力",
  "level": 3
}, {
  "value": "触控笔事件",
  "id": "触控笔事件",
  "level": 2
}, {
  "value": "触控笔按下事件",
  "id": "触控笔按下事件",
  "level": 3
}, {
  "value": "触控笔抬起事件",
  "id": "触控笔抬起事件",
  "level": 3
}, {
  "value": "触控笔移动事件",
  "id": "触控笔移动事件",
  "level": 3
}, {
  "value": "触控笔单击事件",
  "id": "触控笔单击事件",
  "level": 3
}, {
  "value": "触控笔拖拽事件",
  "id": "触控笔拖拽事件",
  "level": 3
}, {
  "value": "设置触控笔事件间隔",
  "id": "设置触控笔事件间隔",
  "level": 3
}, {
  "value": "触摸事件",
  "id": "触摸事件",
  "level": 2
}, {
  "value": "触摸按下事件",
  "id": "触摸按下事件",
  "level": 3
}, {
  "value": "触摸抬起事件",
  "id": "触摸抬起事件",
  "level": 3
}, {
  "value": "触摸移动事件",
  "id": "触摸移动事件",
  "level": 3
}, {
  "value": "触摸单击事件",
  "id": "触摸单击事件",
  "level": 3
}, {
  "value": "触摸拖拽事件",
  "id": "触摸拖拽事件",
  "level": 3
}, {
  "value": "设置触摸事件间隔",
  "id": "设置触摸事件间隔",
  "level": 3
}, {
  "value": "触摸屏单指关节双击事件",
  "id": "触摸屏单指关节双击事件",
  "level": 3
}, {
  "value": "触摸屏双指关节双击事件",
  "id": "触摸屏双指关节双击事件",
  "level": 3
}, {
  "value": "触控板事件",
  "id": "触控板事件",
  "level": 2
}, {
  "value": "触控板捏合事件",
  "id": "触控板捏合事件",
  "level": 3
}, {
  "value": "触控板滑动事件",
  "id": "触控板滑动事件",
  "level": 3
}, {
  "value": "触控板旋转事件",
  "id": "触控板旋转事件",
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
        id: "uinput",
        children: "uinput"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "uinput 可模拟用户操作，例如鼠标、键盘、触控板等设备，适用于稳定性等压力测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据hdc命令行工具指导，完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "环境准备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保设备已成功连接，并执行hdc shell。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uinput功能",
      children: "uinput功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "用法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput <option> <command> <arg> ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持能力"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令简写"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "命令全写"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--mouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--keyboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入键盘事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--stylus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入触控笔事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--touch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--touchpad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入触控板事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable_key_status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enable_key_status"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%8E%A7%E5%88%B6%E6%B3%A8%E5%85%A5%E7%9A%84%E4%BF%AE%E9%A5%B0%E9%94%AE%E7%8A%B6%E6%80%81",
              children: "控制注入的修饰键状态"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(739025)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令中与坐标相关的参数，单位均为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
        children: "px(屏幕物理像素单位)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "帮助命令",
      children: "帮助命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示uinput工具支持的命令信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -?\nuinput --help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\nuinput -?\n\n# 执行结果\nUsage: uinput <option> <command> <arg>...\nThe option are:\n-K  --keyboard\ncommands for keyboard:\n-d <key>                   --down   <key>     -press down a key\n-u <key>                   --up     <key>     -release a key\n-l <key> [long press time] --long_press <key> [long press time] -press and hold the key\n-r <key> [repeat output time] --repeat output <key> [repeat output time] -press and hold the key\n-i <time>                  --interval <time>  -the program interval for the (time) milliseconds\n\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "鼠标事件",
      children: "鼠标事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟鼠标移动、点击等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标移动事件",
      children: "鼠标移动事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟鼠标移动到以指定屏幕左上角为原点的相对坐标系的位置(dx, dy)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -m <dx> <dy>\nuinput --mouse --move <dx> <dy>\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟鼠标移动到以指定屏幕左上角为原点的相对坐标系的位置(100, 100)。\nuinput -M -m 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "扩展命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -m <dx1> <dy1> <dx2> <dy2> [smooth time] --trace\nuinput --mouse --move <dx1> <dy1> <dx2> <dy2> [smooth time] --trace\n\n# <dx1> <dy1>鼠标移动起点以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>鼠标移动终点以屏幕左上角为原点的相对坐标系的位置坐标。\n# 补充选项 --trace 可以模拟鼠标移动到以指定屏幕左上角为原点的相对坐标系的位置及过程。\n# [smooth time]移动时间，单位：ms，默认值：1000，取值范围：[1,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟鼠标从(100, 100)花费1500ms移动到(200, 200)。\nuinput -M -m 100 100 200 200 1500 --trace\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标按键按下事件",
      children: "鼠标按键按下事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟鼠标按下按键，建议与鼠标按键抬起事件搭配使用，确保事件闭环。buttonId：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%BC%A0%E6%A0%87%E6%8C%89%E9%94%AE",
        children: "鼠标按键"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -d <buttonId>\nuinput --mouse --down <buttonId>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标按键抬起事件",
      children: "鼠标按键抬起事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟鼠标抬起按键，建议与鼠标按键按下事件搭配使用，确保事件闭环。buttonId：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%BC%A0%E6%A0%87%E6%8C%89%E9%94%AE",
        children: "鼠标按键"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -u <buttonId>\nuinput --mouse --up <buttonId>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟按下鼠标左键并抬起。\nuinput -M -d 0 -u 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标按键单击事件",
      children: "鼠标按键单击事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟鼠标单击按键。buttonId：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%BC%A0%E6%A0%87%E6%8C%89%E9%94%AE",
        children: "鼠标按键"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -c <buttonId>\nuinput --mouse --click <buttonId>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟单击鼠标左键。\nuinput -M -c 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "双击鼠标按键事件",
      children: "双击鼠标按键事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟双击鼠标按键。buttonId：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%BC%A0%E6%A0%87%E6%8C%89%E9%94%AE",
        children: "鼠标按键"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -b <dx> <dy> <buttonId> [press time] [click interval time]\nuinput --mouse --double_click <dx> <dy> <buttonId> [press time] [click interval time]\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n# [press time]首次按压时间，可选参数，单位：ms，默认时间为：50，取值范围：[1,300]，仅支持整数。\n# [click interval time]点击间隔时间，可选参数，单位：ms，默认时间为：300，取值范围：[1,450]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟在（100, 150）位置双击鼠标左键。\nuinput -M -b 100 150 0 10 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标滚轴滚动事件",
      children: "鼠标滚轴滚动事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟鼠标滚轴向前/向后滚动，需与鼠标移动事件搭配使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -m <dx1> <dy1> -s <number>\nuinput --mouse --move <dx1> <dy1> --scroll <number>\n\n# <dx1> <dy1>以屏幕左上角为原点的相对坐标系的位置坐标。\n# <number>鼠标滚动刻度数，正数向后滚动，负数向前滚动，一个刻度是15，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟鼠标移动到以指定屏幕左上角为原点的相对坐标系的位置(100, 200)，鼠标滚轴向后滚动三个刻度。\nuinput -M -m 100 200 -s 45\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标拖拽事件",
      children: "鼠标拖拽事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟鼠标拖拽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -g <dx1> <dy1> <dx2> <dy2> [total time]\nuinput --mouse --drag <dx1> <dy1> <dx2> <dy2> [total time]\n\n# <dx1> <dy1>鼠标拖拽起点以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>鼠标拖拽终点以屏幕左上角为原点的相对坐标系的位置坐标。\n# [total time]拖拽总耗时，可选参数，单位：ms，默认值为1000，取值范围：[1,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟按下鼠标左键从(200, 650)耗时15000ms拖动到(500, 300)后释放鼠标左键。\nuinput -M -g 200 650 500 300 15000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置鼠标事件间隔",
      children: "设置鼠标事件间隔"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件的程序间隔，以ms为单位。需与其它鼠标事件命令搭配使用，否则此命令无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -i <time>\nuinput --mouse --interval <time>\n\n# <time>鼠标事件间隔时间，单位：ms，取值范围：[1,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟单击鼠标左键间隔500ms后再次单击鼠标左键。\nuinput -M -c 0 -i 500 -c 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "鼠标按键",
      children: "鼠标按键"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "buttonId"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标左键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标右键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标中键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标侧边键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标扩展键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标前进键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标后退键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标任务键"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询鼠标光标信息",
      children: "查询鼠标光标信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前鼠标光标信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果鼠标光标处于显示状态，将输出鼠标光标显示状态及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-pointer/js-apis-pointer#pointerstyle",
        children: "鼠标光标样式"
      }), "。若传入filePath参数且鼠标光标为第三方自定义光标（样式枚举值为-100），会将鼠标光标样式图以二进制形式保存到指定文件中。需要自行创建filePath文件。若未传入filePath参数，将不会保存样式图。当鼠标光标处于隐藏状态时，不会输出样式信息，也不会保存样式图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -M -q [filePath]\n\n# [filePath] 鼠标光标的样式图文件保存路径，可选参数，当前版本仅支持“/data/local/tmp/”目录下的文件保存路径，例如：/data/local/tmp/testfile。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 查询当前鼠标光标的显示/隐藏状态和样式ID。\nuinput -M -q\n\n# 查询当前鼠标光标的显示/隐藏状态和样式ID，并将鼠标光标样式图以二进制形式写入“/data/local/tmp/testfile”文件中。\ntouch /data/local/tmp/testfile\nuinput -M -q /data/local/tmp/testfile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "键盘事件",
      children: "键盘事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟键盘按键输入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键盘按键按下事件",
      children: "键盘按键按下事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟键盘按下按键，建议与键盘按键抬起事件搭配使用，确保事件闭环。keyCode：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode",
        children: "键值定义说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -K -d <keyCode>\nuinput --keyboard --down <keyCode>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键盘按键抬起事件",
      children: "键盘按键抬起事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟键盘抬起按键，必须与键盘按键按下事件搭配使用，确保事件闭环。keyCode：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode",
        children: "键值定义说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -K -u <keyCode>\nuinput --keyboard --up <keyCode>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟按下\"A\"键并抬起。\nuinput -K -d 2017 -u 2017\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键盘按键长按事件",
      children: "键盘按键长按事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟键盘按下一个按键并保持设定的时长后抬起，无需再次注入键盘按键抬起事件。长按期间不会重复注入按键按下事件。keyCode：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode",
        children: "键值定义说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -K -l <keyCode> [long press time]\nuinput --keyboard --long_press <keyCode> [long press time]\n\n# [long press time]长按时间，可选参数，单位：ms，默认值为3000，取值范围：[3000,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟按下\"A\"键并保持6000ms后抬起。\nuinput -K -l 2017 6000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键盘按键持续输入事件",
      children: "键盘按键持续输入事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟键盘按下一个按键并在设定的时长内持续输入按下事件后抬起，无需再次注入键盘按键抬起事件。长按期间会重复注入按键按下事件。keyCode：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode",
        children: "键值定义说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -K -r <keyCode> [repeat output time]\nuinput --keyboard --repeat <keyCode> [repeat output time]\n\n# [repeat output time]重复上报按键按下事件的持续时间，可选参数，单位：ms，默认值为3000，取值范围：[3000,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟按下\"A\"键并在4000ms内重复输入。\nuinput -K -r 2017 4000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置键盘事件间隔",
      children: "设置键盘事件间隔"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置键盘事件的程序间隔，以ms为单位。需与其它键盘事件命令搭配使用，否则此命令无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -K -i <time>\nuinput --keyboard --interval <time>\n\n# <time>键盘事件间隔时间，单位：ms，取值范围：[1,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟按下键盘\"A\"键间隔500ms后释放。\nuinput -K -d 2017 -i 500 -u 2017\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "键盘文本输入事件",
      children: "键盘文本输入事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟键盘输入文本。不支持与其它命令组合使用。只支持ASCII字符，最大支持输入字符2000个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -K -t <text>\nuinput --keyboard --text <text>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟输入一段文本\"Hello,World!\"\nuinput -K -t Hello,World!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制注入的修饰键状态",
      children: "控制注入的修饰键状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，支持启用或禁用控制注入的修饰键状态能力，支持的修饰键包括：KEYCODE_ALT_LEFT、KEYCODE_ALT_RIGHT、KEYCODE_SHIFT_LEFT、KEYCODE_SHIFT_RIGHT、KEYCODE_CTRL_LEFT、KEYCODE_CTRL_RIGHT、KEYCODE_META_LEFT、KEYCODE_META_RIGHT，具体请参考keyCode：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode",
        children: "键值定义说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启用控制注入的修饰键状态能力",
      children: "启用控制注入的修饰键状态能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用控制注入的修饰键状态能力并设置维持时间。需要与uinput键盘按键按下事件配合使用，启用后再注入指定修饰键的按下事件，可维持指定时间的按下状态，维持时间结束后自动触发该修饰键抬起事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput enable_key_status <enable> [duration]\n\n# <enable> 控制注入的修饰键状态能力，取值为1或0，取值为1表示启用控制注入的修饰键状态能力，0表示禁用控制注入的修饰键状态能力。\n# [duration] 控制注入的修饰键状态持续时间，可选参数，单位：s，默认值为10，取值范围：[1,10]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 启用控制注入的修饰键状态能力，未设置修饰键状态维持时间。注入KEYCODE_SHIFT_LEFT按键（取值为2047）按下事件，可维持10s按下状态。\nuinput enable_key_status 1\nuinput -K -d 2047\n\n# 启用控制注入的修饰键状态能力并设置修饰键状态维持时间为5s。注入KEYCODE_SHIFT_LEFT按键（取值为2047）按下事件，可维持5s按下状态。\nuinput enable_key_status 1 5\nuinput -K -d 2047\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "禁用控制注入的修饰键状态能力",
      children: "禁用控制注入的修饰键状态能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁用控制注入的修饰键状态能力，直到下次启用恢复该能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# <enable> 控制注入的修饰键状态能力，取值为1或0，取值为1表示启用控制注入的修饰键状态能力，0表示禁用控制注入的修饰键状态能力。\nuinput enable_key_status <enable>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 禁用控制注入的修饰键状态能力。\nuinput enable_key_status 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触控笔事件",
      children: "触控笔事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟触控笔点击、滑动等。实际注入效果与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6",
        children: "触摸事件"
      }), "一致，建议优先使用触摸事件命令。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控笔按下事件",
      children: "触控笔按下事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控笔在（dx dy）按下，建议与触控笔抬起事件搭配使用，确保事件闭环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -S -d <dx> <dy>\nuinput --stylus --down <dx> <dy>\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控笔抬起事件",
      children: "触控笔抬起事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控笔在（dx dy）抬起，建议与触控笔按下事件搭配使用，确保事件闭环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -S -u <dx> <dy>\nuinput --stylus --up <dx> <dy>\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟在（100, 100）位置按下并抬起。\nuinput -S -d 100 100 -u 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控笔移动事件",
      children: "触控笔移动事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控笔从（dx1, dy1）按下在指定时间内移动到（dx2, dy2）后抬起。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -S -m <dx1> <dy1> <dx2> <dy2> [smooth time] [-k keep time]\nuinput --stylus --move <dx1> <dy1> <dx2> <dy2> [smooth time] [-k keep time]\n\n# <dx1> <dy1>触控笔移动起点以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>触控笔移动终点以屏幕左上角为原点的相对坐标系的位置坐标。\n# [smooth time]移动时间，可选参数，单位：ms，默认值为1000，取值范围：[1,15000]，仅支持整数。\n# [-k keep time]移动至目标位置后抬起前的停留时间，可选参数，单位：ms，默认值为0，取值范围：[0,60000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟触控笔从(100, 1000)按下，花费1000ms移动到(100, 2000)后，保持按下1000ms后抬起。\nuinput -S -m 100 1000 100 2000 1000 -k 1000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控笔单击事件",
      children: "触控笔单击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控笔在(dx, dy)位置单击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -S -c <dx> <dy> [click interval]\nuinput --stylus --click <dx> <dy> [click interval]\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n# [click interval]点击间隔时间，可选参数，单位：ms，默认值为100，取值范围：[1,450]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟触控笔在(100, 100)位置单击。\nuinput -S -c 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控笔拖拽事件",
      children: "触控笔拖拽事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控笔拖拽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -S -g <dx1> <dy1> <dx2> <dy2> [press time] [total time]\nuinput --stylus --drag <dx1> <dy1> <dx2> <dy2> [press time] [total time]\n\n# <dx1> <dy1>触控笔拖拽起点以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>触控笔拖拽终点以屏幕左上角为原点的相对坐标系的位置坐标。\n# [press time]按压时间，可选参数，需要与total time配合使用，如果有任一缺省，则命令不生效。同时缺省，命令生效。单位：ms，默认值为500，取值范围：[500,14500]，仅支持整数。\n# [total time]拖动时间，可选参数，需要与press time配合使用，如果有任一缺省，则命令不生效。同时缺省，命令生效。单位：ms，默认值为1000，取值范围：[1000,15000]，仅支持整数。[total time] - [press time]不能少于500，否则命令报错：total time input is error。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟触控笔从(100, 150)长按500ms后开始拖拽并在1100ms后拖动到(500, 300)释放。\nuinput -S -g 100 150 500 300 500 1100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置触控笔事件间隔",
      children: "设置触控笔事件间隔"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触控笔事件的程序间隔，以ms为单位。需与其它触控笔事件命令搭配使用，否则此命令无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -S -i <time>\nuinput --stylus --interval <time>\n\n# <time>间隔时间，单位：ms，取值范围：[1,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟触控笔在(100, 100)位置按下后，间隔500ms后在(100, 100)位置抬起。\nuinput -S -d 100 100 -i 500 -u 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触摸事件",
      children: "触摸事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟手指触摸点击、滑动等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸按下事件",
      children: "触摸按下事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟手指触摸在（dx dy）按下，建议与触摸抬起事件搭配使用，确保事件闭环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -d <dx> <dy>\nuinput --touch --down <dx> <dy>\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸抬起事件",
      children: "触摸抬起事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟手指触摸在（dx dy）抬起，建议与触摸按下事件搭配使用，确保事件闭环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -u <dx> <dy>\nuinput --touch --up <dx> <dy>\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟手指触摸在（100, 100）位置按下并抬起。\nuinput -T -d 100 100 -u 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸移动事件",
      children: "触摸移动事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟手指触摸从(dx1, dy1)按下在指定时间内移动到(dx2, dy2)后抬起，最多支持三指同时移动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -m <dx1> <dy1> <dx2> <dy2> [-k keep time] [smooth time]\nuinput --touch --move <dx1> <dy1> <dx2> <dy2> [-k keep time] [smooth time]\n\n# <dx1> <dy1>触摸移动起点以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>触摸移动终点以屏幕左上角为原点的相对坐标系的位置坐标。\n# [-k keep time]按下保持时间，可选参数，单位：ms，默认值为0，取值范围：[0,60000]，仅支持整数。\n# [smooth time]移动时间，可选参数，单位：ms，默认值为1000，取值范围：[1,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟手指触摸从(100, 1000)按下，花费1000ms移动到(100, 2000)后，保持按下1000ms后抬起。\nuinput -T -m 100 1000 100 2000 -k 1000 1000\n\n# 模拟三指滑动，第一根手指触摸按下从（300, 900）移动到（300, 2000），第二根手指触摸按下从（600, 900）移动到（600, 2000），第三根手指触摸按下从（900, 900）移动到（900, 2000），移动总时长为200ms，移动结束后手指在屏幕停顿1000m后再抬起。\nuinput -T -m 300 900 300 2000 600 900 600 2000 900 900 900 2000 -k 1000 200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸单击事件",
      children: "触摸单击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟手指触摸在(dx, dy)位置单击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -c <dx> <dy> [click interval]\nuinput --touch --click <dx> <dy> [click interval]\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n# [click interval]点击间隔时间，可选参数，单位：ms，默认值为100，取值范围：[1,450]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟手指触摸在(100, 100)位置单击。\nuinput -T -c 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸拖拽事件",
      children: "触摸拖拽事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟手指触摸拖拽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -g <dx1> <dy1> <dx2> <dy2> [press time] [total time]\nuinput --touch --drag <dx1> <dy1> <dx2> <dy2> [press time] [total time]\n\n# <dx1> <dy1>触摸拖拽起点以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>触摸拖拽终点以屏幕左上角为原点的相对坐标系的位置坐标。\n# [press time]按压时间，可选参数，需要与total time配合使用，如果有任一缺省，则命令不生效。同时缺省，命令生效。单位：ms，默认值为500，取值范围：[500,14500]，仅支持整数。\n# [total time]拖动时间，可选参数，需要与press time配合使用，如果有任一缺省，则命令不生效。同时缺省，命令生效。单位：ms，默认值为1000，取值范围：[1000,15000]，仅支持整数。[total time] - [press time]不能少于500，否则命令报错：total time input is error。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟手指按下从(100, 150)在1100ms拖动到(500, 300)后释放。\nuinput -T -g 100 150 500 300 500 1100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置触摸事件间隔",
      children: "设置触摸事件间隔"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触摸事件的程序间隔，以ms为单位。需与其它触摸事件命令搭配使用，否则此命令无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -i <time>\nuinput --touch --interval <time>\n\n# <time>间隔时间，单位：ms，取值范围：[1,15000]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟手指在(100, 100)位置按下后，间隔500ms后在(100, 100)位置抬起。\nuinput -T -d 100 100 -i 500 -u 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸屏单指关节双击事件",
      children: "触摸屏单指关节双击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触摸屏单指关节双击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -k -s <dx1> <dy1> <dx2> <dy2> [interval time]\nuinput --touch --knuckle --single <dx1> <dy1> <dx2> <dy2> [interval time]\n\n# <dx1> <dy1>单指关节第一次敲击以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>单指关节第二次敲击以屏幕左上角为原点的相对坐标系的位置坐标。\n# [interval time]间隔时间，可选参数，单位：ms，默认值200，取值范围：[1,250]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟单指关节在(100, 100)、(100, 130)位置间隔200ms敲击。\nuinput -T -k -s 100 100 100 130\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸屏双指关节双击事件",
      children: "触摸屏双指关节双击事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触摸屏双指关节双击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -T -k -d <dx1> <dy1> <dx2> <dy2> [interval time]\nuinput --touch --knuckle --double <dx1> <dy1> <dx2> <dy2> [interval time]\n\n# <dx1> <dy1>第一个指关节以屏幕左上角为原点的相对坐标系的位置坐标。\n# <dx2> <dy2>第二个指关节以屏幕左上角为原点的相对坐标系的位置坐标。\n# [interval time]间隔时间，可选参数，单位：ms，默认值200，取值范围：[1,250]，仅支持整数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟双指关节分别在(100, 100)、(100, 130)位置间隔200ms敲击2次。\nuinput -T -k -d 100 100 100 130\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触控板事件",
      children: "触控板事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控板捏合事件",
      children: "触控板捏合事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控板手指捏合。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -P -p <dx> <dy> scalePercent\nuinput --touchpad --pinch <dx> <dy> scalePercent\n\n# <dx> <dy>以屏幕左上角为原点的相对坐标系的位置坐标。\n# scalePercent收缩百分比，取值范围：[1,500]。小于100是缩小，大于100是放大。设置时要求dx大于0，dy大于等于200。此场景只支持图片缩放，调用该命令时，确保桌面上有一张图片。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟触控板手指捏合。\nuinput -P -p 100 300 89\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控板滑动事件",
      children: "触控板滑动事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控板滑动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -P -s <startX> <startY> <endX> <endY>\nuinput --touchpad --swipe <startX> <startY> <endX> <endY>\n\n# <startX> <startY>触控板上报滑动手势事件的起点以屏幕左上角为原点的相对坐标系的位置坐标。\n# <endX> <endY>触控板上报滑动手势事件的终点以屏幕左上角为原点的相对坐标系的位置坐标。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟触控板三指滑动手势。\nuinput -P -s 100 1100 100 300\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触控板旋转事件",
      children: "触控板旋转事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟触控板旋转。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前触摸板旋转事件执行无效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uinput -P -r <rotateValue>\nuinput --touchpad --rotate <rotateValue>\n\n# <rotateValue>旋转值，单位：度（°），取值范围：[-359,359]，仅支持整数。旋转角度为正值时，顺时针旋转，旋转角度为负值时，逆时针旋转。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 模拟触控板双指旋转180°。\nuinput -P -r 180\n"
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
739025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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