"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["372729"], {
921413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_es_2_abc_faq_es_2_abc_faq_md_8e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-bytecode-es-2-abc-faq-es-2-abc-faq-md-8e7.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_es_2_abc_faq_es_2_abc_faq_md_8e7_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq/es2abc-faq","title":"方舟字节码生成常见问题","description":"字节码生成流程","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq/es2abc-faq.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq","slug":"/arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"方舟字节码生成常见问题","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/es2abc-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"编译期自定义修改方舟字节码","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation/"},"next":{"title":"Disassembler反汇编工具","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/tool-disassembler/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq/es2abc-faq.md


const frontMatter = {
	title: '方舟字节码生成常见问题',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/es2abc-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '方舟字节码生成常见问题';

const assets = {

};



const toc = [{
  "value": "字节码生成流程",
  "id": "字节码生成流程",
  "level": 2
}, {
  "value": "编译时报owns a higher api version错误",
  "id": "编译时报owns-a-higher-api-version错误",
  "level": 2
}, {
  "value": "编译时报Field {&amp;harname/Index&amp;1.0.0.moduleRecordIdx} has different value错误",
  "id": "编译时报field-harnameindex100modulerecordidx-has-different-value错误",
  "level": 2
}, {
  "value": "编译异常，无具体错误日志",
  "id": "编译异常无具体错误日志",
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
        id: "方舟字节码生成常见问题",
        children: "方舟字节码生成常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字节码生成流程",
      children: "字节码生成流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS工程的构建流程中，方舟字节码（*.abc）的生成由工具链中的es2abc编译器组件完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Hvigor构建任务中，es2abc编译器会被自动调用，用于将TypeScript/JavaScript源代码转换为方舟虚拟机能够执行的字节码文件（*.abc）。这些生成的文件随后被打包进HAP/HAR/HSP中，并由系统加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本FAQ汇总了字节码生成在实际编译中常见的异常场景，并提供原因分析与排查方式，帮助开发者更高效定位字节码编译阶段的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译时报owns-a-higher-api-version错误",
      children: "编译时报owns a higher api version错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译时报owns a higher api version错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "> hvigor ERROR: ArkTS:ERROR Failed to execute es2abc.\nError Message: Error: The input abc file '/Users/xxx/Desktop/Git/KnowChat_Harmony/oh_modules/.ohpm/wrapper@xnnuf1xhgb6dfmf+4nqatekk3somopridtvlx+rvty0=/oh_modules/wrapper/ets/modules.abc' owns a higher api version or a higher sdkReleaseType compared to current compilation process. [/Users/xxx/Desktop/Git/KnowChat_Harmony/oh_modules/.ohpm/wrapper@xnnuf1xhgb6dfmf+4nqatekk3somopridtvlx+rvty0=/oh_modules/wrapper/ets/modules.abc]\nError: The input abc file '/Users/xxx/Desktop/Git/KnowChat_Harmony/oh_modules/.ohpm/@nertc+nertc_sdk@x07imzcfiusn4dyjfe46yg2t+btahwg70+p5ft9p+7y=/oh_modules/@nertc/nertc_sdk/ets/modules.abc' owns a higher api version or a higher sdkReleaseType compared to current compilation process. [/Users/xxx/Desktop/Git/KnowChat_Harmony/oh_modules/.ohpm/@nertc+nertc_sdk@x07imzcfiusn4dyjfe46yg2t+btahwg70+p5ft9p+7y=/oh_modules/@nertc/nertc_sdk/ets/modules.abc]\nError: The input abc file '/Users/xxx/Desktop/Git/KnowChat_Harmony/oh_modules/.ohpm/wrapper@xnnuf1xhgb6dfmf+4nqatekk3somopridtvlx+rvty0=/oh_modules/wrapper/ets/modules.abc' owns a higher api version or a higher sdkReleaseType compared to current compilation process.\nThe size of programs is expected to be 434, but is 432\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码har打包的兼容版本高于工程的兼容版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看工程和har包的build-profile.json5文件中的“compatibleSdkVersionStage”字段，将工程中的“compatibleSdkVersionStage”字段调整至大于或者等于har包中的版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译时报field-harnameindex100modulerecordidx-has-different-value错误",
      children: "编译时报Field {&harname/Index&1.0.0.moduleRecordIdx} has different value错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译时报Field {&harname/Index&1.0.0.moduleRecordIdx} has different value错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigor Finished :entry:default@DoNativeStrip... after 258 ms\n> hvigor Finished :entry:default@CacheNativeLibs... after 622 ms\n> hvigor ERROR: Failed :entry:default@CompileArkTS...\n> hvigor ERROR: ArkTS:ERROR Failed to execute es2abc.\nError Message: Failed to emit /Users/DevEcoStudioProjects/FastSDKDemo/entry/build/default/intermediates/loader_out/default/ets/modules.abc, error: Field {&finesdk/Index&1.0.0.moduleRecordIdx} has different value.\nIf you're using any cache file generated by older version of SDK, please try cleaning the cache files and rebuild\nGenerateProgram Failed!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖库版本不一致导致的abc文件中Record字段冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见触发原因包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
            children: "工程级build-profile.json5文件"
          }), "中的useNormalizedOHMUrl配置为true。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当build-profile.json5中启用了该项时，工具链会对模块URL进行标准化处理；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若HAR中Record与工程实际依赖不一致，也会触发冲突。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohpm缓存或编译缓存没有清除干净，导致同一Har包存在两个不同版本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "缓存中遗留了旧版本的HAR、ABC信息，使es2abc的Record索引校验失败。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用跨模块导入方式时，build-profile.json5文件中的useNormalizedOHMUrl需配置为false。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清除ohpm和编译缓存，下载ohpm包并重新编译，操作如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击菜单Build->Clean Project，或在控制台执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-clean",
              children: "ohpm clear"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击菜单File->Invalidate Caches...，弹窗选项全选执行并重启。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在控制台执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-ohpm-common-commands/ide-ohpm-install",
              children: "ohpm install"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击菜单Build->Rebuild Project即可。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译异常无具体错误日志",
      children: "编译异常，无具体错误日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行编译时出现Failed to execute es2abc，但控制台未输出任何有效错误日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "es2abc在某些情况下会直接异常退出而不产生日志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这些触发条件与", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码结构"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "资源消耗"
        })
      }), "以及", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编译器内部行为"
        })
      }), "相关，目前常见的原因包括但不限于以下几类："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "典型表现"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "已知触发场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "栈溢出（Stack Overflow）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度递归。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度语法嵌套、复杂表达式链。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足（OOM）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无日志直接退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超大文件、海量对象/Function定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parser 未捕获异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无输出，进程被中断。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特定语法边界情况。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows：查看事件管理器中的应用程序崩溃日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按下Win + R，输入eventvwr.msc打开事件查看器（Event Viewer）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在左侧导航栏依次展开：Windows日志 → 应用程序（Application）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在右侧的日志列表中查找："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "来源（Source）为Application Error。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "故障应用程序名称（Faulting application name）为es2abc.exe。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双击该日志即可查看详情。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果异常代码（Exception Code）为0xc00000fd，说明是典型的Stack Overflow（栈溢出）导致的崩溃。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "macOS：查看Console中的Crash Report"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开Console（控制台）应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "左侧侧栏展开："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Crash Reports（崩溃报告） 或 User Reports。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在列表中找到名字包含es2abc的报告。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双击打开，即可查看崩溃堆栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果堆栈中出现某个函数被连续调用多次（如A → A → A…），则可能是形成了深度递归导致的爆栈。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(843603)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于此类异常与代码结构和运行环境相关，目前无法提供完整列表；如上述情况均无法解释，可结合崩溃日志或使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-more-functions/cannkit-gdb",
        children: "GDB"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/debugging-profiling/debug-lldb",
        children: "LLDB"
      }), "进一步定位。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "栈溢出场景示例及排查方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型可能触发栈溢出的代码结构包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "深层语法嵌套"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "多层 if/else 语句连续嵌套。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "多层数组或对象嵌套，如多重[[[[...]]]]的结构。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自动生成的深度嵌套结构（特别是 DSL 或代码生成器生成的内容）。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异常重复的字符串/符号"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "大量重复的符号行，例如连续的!!!!!!!!!!多行出现。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "超长链式表达式"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "例如大量连续的类型断言链：a as Int as Int as Int ..."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "或者其它类似的链式运算导致表达式树深度极大。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发生栈溢出时，可以查看崩溃日志是否存在大量相同的函数被反复调用。同一调用链成批次重复出现几十次甚至上百次的现象，通常说明解析器在处理某段源码时触发了异常深度的递归调用。最终，调用深度超出可分配栈空间限制，导致栈溢出并崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "进一步排查建议"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若崩溃日志指向栈溢出方向，可重点检查代码中是否存在以下结构："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["数百层或更深的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "if-else/分支嵌套"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多重", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "括号/数组/对象"
          })
        }), "深度嵌套。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["大量连续的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "类型转换链式调用"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自动生成代码中出现的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "无意义重复结构（如连续符号）"
          })
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些结构会导致解析器在构建AST过程中产生极深的递归深度，最终触发栈溢出。"
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
843603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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