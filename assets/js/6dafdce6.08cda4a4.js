"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["771303"], {
538123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_command_line_utilities_rawheap_translator_rawheap_translator_md_6da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-command-line-utilities-rawheap-translator-rawheap-translator-md-6da.json
var site_docs_system_debug_optimize_debugging_commands_command_line_utilities_rawheap_translator_rawheap_translator_md_6da_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator/rawheap-translator","title":"rawheap-translator工具","description":"使用场景","source":"@site/docs/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator/rawheap-translator.md","sourceDirName":"system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator","slug":"/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"rawheap-translator工具","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rawheap-translator","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"devicedebug工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/devicedebug-tool/"},"next":{"title":"netcopilot工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-utilities/network-netcopilot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/command-line-utilities/rawheap-translator/rawheap-translator.md


const frontMatter = {
	title: 'rawheap-translator工具',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/rawheap-translator',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'rawheap-translator工具';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "使用指导",
  "id": "使用指导",
  "level": 2
}, {
  "value": "工具获取",
  "id": "工具获取",
  "level": 3
}, {
  "value": "环境配置",
  "id": "环境配置",
  "level": 3
}, {
  "value": "使用方法",
  "id": "使用方法",
  "level": 2
}, {
  "value": "解析命令",
  "id": "解析命令",
  "level": 3
}, {
  "value": "参数列表",
  "id": "参数列表",
  "level": 3
}, {
  "value": "解析命令示例",
  "id": "解析命令示例",
  "level": 2
}, {
  "value": "解析示例",
  "id": "解析示例",
  "level": 3
}, {
  "value": "文件参考规格",
  "id": "文件参考规格",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "工具版本不匹配",
  "id": "工具版本不匹配",
  "level": 3
}, {
  "value": "文件无法打开",
  "id": "文件无法打开",
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
        id: "rawheap-translator工具",
        children: "rawheap-translator工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为方便开发者定位问题，应用在ArkTS内存OOM（Out of Memory）时会自动进行HeapDump。此操作会将虚拟机当前堆上的所有对象信息保存在后缀为.rawheap的二进制文件中。开发者可使用rawheap_translator工具解析.rawheap文件，生成.heapsnapshot文件。该文件可通过DevEco Studio的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-snapshot/ide-snapshot-basic-operations#section6760173514388",
        children: "Heap Snapshot离线导入"
      }), "或Chrome浏览器的开发者工具中的内存工具导入并查看。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用指导",
      children: "使用指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工具获取",
      children: "工具获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此工具支持OHOS、Windows、Linux和MacOS平台，获取方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备内获取：/bin/rawheap_translator，仅适用于OHOS设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDK中获取：sdk/default/openharmony/toolchains/rawheap_translator，适用于各平台。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境配置",
      children: "环境配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于OHOS平台，由于其已在系统路径下内置了rawheap_translator工具，因此可以在终端中直接使用此工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于非OHOS平台，建议将从SDK中获取的rawheap_translator工具放置在稳定的路径下，并将该路径配置为系统环境变量。这样可以在终端中直接使用工具，无需每次指定路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在不同系统中，环境变量的配置方法存在差异。以下提供一些配置示例，供开发者参考。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows环境变量设置方法（以Windows 10某版本为例）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "右键点击“此电脑”选择“属性”选项。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在弹出的窗口中，找到并点击“高级系统设置”标签。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在弹出的窗口中，找到并点击“高级”页签下的“环境变量”按钮。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在弹出的窗口中，找到并双击“系统变量”框中的“Path”变量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在弹出的窗口中，找到并点击“新建”按钮。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将本地存放rawheap_translator工具的文件路径填至新建的文本框中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击“确定”按钮关闭所有弹出的窗口。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "重启终端。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MacOS环境变量设置方法（以MacOS 15某版本为例）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "打开终端工具，执行以下命令。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "echo $SHELL\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "根据步骤1的返回结果做如下对应处理。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "a. 如果返回结果为/bin/bash，则执行以下命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "echo 'export PATH=$PATH:/path/to/your/rawheap_translator' >> ~/.bash_profile\nsource ~/.bash_profile\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "b. 如果返回结果为/bin/zsh，则执行以下命令："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "echo 'export PATH=$PATH:/path/to/your/rawheap_translator' >> ~/.zshrc\nsource ~/.zshrc\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方法",
      children: "使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解析命令",
      children: "解析命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "rawheap_translator [rawheap_file] [heapsnapshot_file]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数列表",
      children: "参数列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[rawheap_file]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要解析的应用OOM时生成的.rawheap文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[heapsnapshot_file]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析生成的heapsnapshot文件路径，路径必须具有读写权限。  参数缺省时，默认为当前执行命令的路径。  参数给定时，文件的后缀名必须是heapsnapshot。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解析命令示例",
      children: "解析命令示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解析示例",
      children: "解析示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHOS设备中解析示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHOS设备内工具路径：/bin/rawheap_translator，推荐指定生成heapsnapshot文件路径为/data/local/tmp，其他路径可能面临没有写权限问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> /bin/rawheap_translator /data/log/reliability/resource_leak/memory_leak/memleak-js-com.example.myapplication-7979-7979-20241215191332.rawheap /data/local/tmp/myapplication-7979-7979.heapsnapshot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows系统中解析示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开cmd并进入rawheap文件路径，调用解析工具命令，指定在当前路径下生成heapsnapshot文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> rawheap_translator.exe memleak-js-com.example.myapplication-7979-7979-20241215191332.rawheap myapplication-7979-7979.heapsnapshot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux系统中解析示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进入rawheap文件路径，调用解析工具命令，指定在当前路径下生成heapsnapshot文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> ./rawheap_translator memory_leak/memleak-js-com.example.myapplication-7979-7979-20241215191332.rawheap myapplication-7979-7979.heapsnapshot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MacOS系统中解析示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开终端并进入rawheap文件路径，调用解析工具命令，指定在当前路径下生成heapsnapshot文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> rawheap_translator memory_leak/memleak-js-com.example.myapplication-7979-7979-20241215191332.rawheap myapplication-7979-7979.heapsnapshot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考输出"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[INFO ] ParseVersion            current metadata version is 1.0.0\n[INFO ] ParseTypeEnums          total JSType count 214\n[INFO ] ParseTypeList           total metadata count 220\n[INFO ] SetBitField             set BitField offset 8\n[INFO ] SetBitField             set BindingSize offset 32\n[INFO ] SetBitField             set Length offset 8\n[INFO ] SetBitField             set Data offset 16\n[INFO ] ReadVersion             current rawheap version is 1.0.0\n[INFO ] RawHeap                 start to translate rawheap\n[INFO ] ReadRootTable           root node count 6244\n[INFO ] ReadStringTable         string table count 11208\n[INFO ] ReadObjTable            section objects count 96432\n[INFO ] Translate               success\n[INFO ] Serialize               start to serialize\n[INFO ] Translate               file save to /data/local/tmp/myapplication-7979-7979.heapsnapshot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件参考规格",
      children: "文件参考规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["rawheap文件的大小和生成耗时与当前ArkTS堆内存大小及存活对象数量呈强正相关。当ArkTS堆内存占用较大、存活对象数量较多时，生成的rawheap文件会更大，耗时也会更长。开发者可以订阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events",
        children: "资源泄漏事件"
      }), "，自定义事件处理逻辑。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，虚拟机支持两种规格的HeapDump，具体切换操作可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug#hidebugsetjsrawheaptrimlevel20",
        children: "设置当前进程转储虚拟机原始堆快照的裁剪级别"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，TRIM_LEVEL_1模式新增对象属性名解析能力，生成的rawheap文件相对于原先会变大，具体增长大小与对象属性名数量和字符串大小有关。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特点"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dump速度快，生成的rawheap文件大。  API version 20之前版本，虚拟机默认为TRIM_LEVEL_1规格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dump速度稍慢，生成的rawheap文件大小相比TRIM_LEVEL_1缩小40%左右。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了方便开发者了解上报rawheap文件到服务器所带来的性能和流量开销，下表给出了在不同的堆大小下，不同规格的HeapDump生成的rawheap文件大小、生成耗时、解析耗时的示例，仅供开发者参考。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "堆大小（MB）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rawheap文件（MB）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "生成耗时（s）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解析耗时（s）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "690"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "629"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "690"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "376"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "653"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "618"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "653"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "347"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "576"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "563"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIM_LEVEL_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "576"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "294"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工具版本不匹配",
      children: "工具版本不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具解析时会提示：原始堆文件的版本 2.0.0 与当前的原始堆文件翻译器不匹配，请使用最新版本的翻译器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[INFO ] ParseVersion            current metadata version is 1.0.0\n[INFO ] ParseTypeEnums          total JSType count 214\n[INFO ] ParseTypeList           total metadata count 220\n[INFO ] SetBitField             set BitField offset 8\n[INFO ] SetBitField             set BindingSize offset 32\n[INFO ] SetBitField             set Length offset 8\n[INFO ] SetBitField             set Data offset 16\n[INFO ] ReadVersion             current rawheap version is 2.0.0\n[ERROR] ParseRawheap            The rawheap file's version 2.0.0 is not matched the current rawheap translator, please use the newest version of the translator!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前工具版本低于rawheap文件版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "升级工具版本至2.0.0可解决此问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件无法打开",
      children: "文件无法打开"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具解析时，提示：open file failed"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[INFO ] ParseVersion            current metadata version is 1.0.0\n[INFO ] ParseTypeEnums          total JSType count 214\n[INFO ] ParseTypeList           total metadata count 220\n[INFO ] SetBitField             set BitField offset 8\n[INFO ] SetBitField             set BindingSize offset 32\n[INFO ] SetBitField             set Length offset 8\n[INFO ] SetBitField             set Data offset 16\n[INFO ] ReadVersion             current rawheap version is 1.0.0\n[INFO ] RawHeap                 start to translate rawheap\n[INFO ] ReadRootTable           root node count 6244\n[INFO ] ReadStringTable         string table count 11208\n[INFO ] ReadObjTable            section objects count 96432\n[INFO ] Translate               success\n[ERROR] Initialize              open file failed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定的生成文件路径没有写入权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更改到有写权限的路径可以解决。"
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