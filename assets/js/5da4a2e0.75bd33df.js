"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["68242"], {
687397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_exception_stack_parsing_principle_ide_exception_stack_parsing_principle_md_5da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-log-and-fault-analysis-ide-fault-analysis-ide-exception-stack-parsing-principle-ide-exception-stack-parsing-principle-md-5da.json
var site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_exception_stack_parsing_principle_ide_exception_stack_parsing_principle_md_5da_namespaceObject = JSON.parse('{"id":"ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle/ide-exception-stack-parsing-principle","title":"异常堆栈解析原理","description":"构建产物介绍","source":"@site/docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle/ide-exception-stack-parsing-principle.md","sourceDirName":"ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle","slug":"/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle/","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"异常堆栈解析原理","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-exception-stack-parsing-principle","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"堆栈轨迹分析","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis/"},"next":{"title":"使用ASan检测内存错误","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-asan/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle/ide-exception-stack-parsing-principle.md


const frontMatter = {
	title: '异常堆栈解析原理',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-exception-stack-parsing-principle',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '异常堆栈解析原理';

const assets = {

};



const toc = [{
  "value": "构建产物介绍",
  "id": "构建产物介绍",
  "level": 2
}, {
  "value": "ArkTS调试产物sourceMap",
  "id": "arkts调试产物sourcemap",
  "level": 3
}, {
  "value": "C++调试产物debug so",
  "id": "c调试产物debug-so",
  "level": 3
}, {
  "value": "代码混淆产物nameCache",
  "id": "代码混淆产物namecache",
  "level": 3
}, {
  "value": "C++堆栈解析原理",
  "id": "c堆栈解析原理",
  "level": 2
}, {
  "value": "编译选项差异",
  "id": "编译选项差异",
  "level": 3
}, {
  "value": "release编译带debug信息的so",
  "id": "release编译带debug信息的so",
  "level": 3
}, {
  "value": "C++堆栈解析流程",
  "id": "c堆栈解析流程",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 3
}, {
  "value": "ArkTS堆栈解析原理",
  "id": "arkts堆栈解析原理",
  "level": 2
}, {
  "value": "sourceMap格式",
  "id": "sourcemap格式",
  "level": 3
}, {
  "value": "sourceMap解析流程",
  "id": "sourcemap解析流程",
  "level": 3
}, {
  "value": "反混淆解析原理",
  "id": "反混淆解析原理",
  "level": 2
}, {
  "value": "代码混淆产物介绍",
  "id": "代码混淆产物介绍",
  "level": 3
}, {
  "value": "代码混淆解析",
  "id": "代码混淆解析",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
        id: "异常堆栈解析原理",
        children: "异常堆栈解析原理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建产物介绍",
      children: "构建产物介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts调试产物sourcemap",
      children: "ArkTS调试产物sourceMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release模式编译产物，产物位置：{ProjectPath}/{ModuleName}/build/{product}/cache/default/default@CompileArkTS/esmodule/release/sourceMaps.map"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(676255)/* ["default"] */.A) + "",
        width: "385",
        height: "544"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c调试产物debug-so",
      children: "C++调试产物debug so"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带debug信息的so数据，产物位置：{ProjectPath}/{ModuleName}/build/{product}/intermediates/libs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section5147812132",
        children: "release编译带debug信息的so"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435026)/* ["default"] */.A) + "",
        width: "304",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码混淆产物namecache",
      children: "代码混淆产物nameCache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反混淆映射表，release模式编译产物，产物位置：{ProjectPath}/{ModuleName}/build/{product}/cache/default/default@CompileArkTS/esmodule/release/obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924009)/* ["default"] */.A) + "",
        width: "438",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c堆栈解析原理",
      children: "C++堆栈解析原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编译选项差异",
      children: "编译选项差异"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug：不优化代码，附加调试信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release：最大化优化代码，但不包含调试信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RelWithDebInfo：近似于Release模式，既进行了代码优化，同时保留部分调试信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release编译带debug信息的so",
      children: "release编译带debug信息的so"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常release的so中的符号表、调试信息会被移除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(135323)/* ["default"] */.A) + "",
        width: "907",
        height: "342"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若需要保留so文件中的符号表、调试信息，需要在build-profile.json5的buildOption/externalNativeOptions中配置参数：\"arguments\": \"-DCMAKE_BUILD_TYPE=RelWithDebInfo\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {\n    \"externalNativeOptions\": {\n      \"path\": \"./src/main/cpp/CMakeLists.txt\",\n      \"arguments\": \"-DCMAKE_BUILD_TYPE=RelWithDebInfo\",\n      \"cppFlags\": \"\",\n    }\n  },\n  ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译后会生成2份so产物："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "libs：带debug信息的so。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stripped_native_libs：移除调试信息等冗余数据后的so。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831179)/* ["default"] */.A) + "",
        width: "350",
        height: "559"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c堆栈解析流程",
      children: "C++堆栈解析流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["llvm-addr2line（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#li11164144153",
        children: "获取llvm-addr2line工具"
      }), "）是将函数地址解析成文件名或行号的工具。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给出一个可执行文件中的地址或一个可重定位对象中的偏移部分的地址，使用调试信息来找出与之相关的文件名和行号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用参数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "用途"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以十六进制形式显示地址"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将符号名解码为用户级别的名字"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置需要转换地址的可执行文件名"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示文件名、行号和函数名信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示函数名及文件行号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取指定部分的偏移量，而不是绝对地址"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个地址信息单独占一行"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看文件名、行号和函数名相关信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "llvm-addr2line -f -e File.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查找指定的地址所对应的代码位置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "llvm-addr2line 0x00000000004005e7 -e test -f -C -s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "llvm-addr2line -e libapplication.so 00003714 -f -C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(460779)/* ["default"] */.A) + "",
        width: "731",
        height: "60"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASan堆栈解析："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(63576)/* ["default"] */.A) + "",
        width: "1027",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(452729)/* ["default"] */.A) + "",
        width: "1088",
        height: "91"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "什么是UUID？"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每一个可执行程序都有一个build UUID来唯一标识。Crash日志包含发生crash的这个应用（app）的build UUID以及crash发生时应用加载的所有库文件的build UUID。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何获取llvm-addr2line工具？"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio安装目录/deveco-studio/sdk/default/openharmony/native/llvm/bin下即可找到llvm-addr2line.exe。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts堆栈解析原理",
      children: "ArkTS堆栈解析原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sourcemap格式",
      children: "sourceMap格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 源码", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180631)/* ["default"] */.A) + "",
        width: "722",
        height: "757"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 编译后产物", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109484)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "734",
        height: "665"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实际代码行映射关系："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "70->29"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "71->30"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "72->31"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "73->32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "sourceMap结构："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(917788)/* ["default"] */.A) + "",
        width: "587",
        height: "501"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单个module构建产物sourceMaps.map为merge文件，实际包含该模块的所有文件的映射关系；每个json中key以编译构建产物的唯一路径作为主键，运行程序的abc中保留了对应的key信息，当运行时异常代码归属到该文件时输出信息为该key，sources为实际源码文件信息，用于异常堆栈还原源码；mappings为编码后的行列号映射表，每个文件有独立的映射关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["key：参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section983741193211",
          children: "sourceMap解析流程"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "version：目前source map标准的版本为3。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "file：生成的文件名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sources：源文件地址列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "names：转换前的所有变量名和属性名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mappings：记录位置信息的字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourceRoot：源文件目录地址，可以用于重新定位服务器上的源文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "entry-package-info：\"entry|1.0.0\" 对应模块本身的oh-package.json中的name及version，用于关联反混淆nameCache资源版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "package-info: \"har1|1.0.0\" 对应非模块本身的oh-package.json中的name及version，即dependencies引用的代码，可用于引用三方库二次解析sourceMap。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sourcemap解析流程",
      children: "sourceMap解析流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图是sourceMap中每个json的key的结构化处理过程，以“entry|har1|1.0.0|src/main/ets/pages/w.ts”为例，各字段含义如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以“|”为分隔符，entry是本模块oh-package.json5中的name，har1|1.0.0是依赖的har1包的oh-package.json5中的name和version（如果没有依赖包，则是本模块oh-package.json5中的name和version），src/main/ets/pages/w.ts是引用的源码文件路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " sourceMap中的key结构化处理", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664299)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1230",
        height: "350"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反混淆解析原理",
      children: "反混淆解析原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["代码混淆配置请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-obfuscation",
        children: "代码混淆"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码混淆产物介绍",
      children: "代码混淆产物介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆映射表：$ProjectPath$ModuleName\\build$product\\cache\\default\\default@CompileArkTS\\esmodule\\release\\obfuscation\\nameCache.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"home/src/main/ets/homeability/HomeAbility.ets\": {\n    \"IdentifierCache\": {\n      \"#AbilityConstant\": \"AbilityConstant\",\n      \"#hilog\": \"hilog\",\n      \"#UIAbility\": \"UIAbility\",\n      \"#Want\": \"Want\",\n      \"#window\": \"window\",\n      \"HomeAbility#onWindowStageCreate#__function\": \"i\"\n    },\n    \"MemberMethodCache\": {\n      \"onCreate:10:16\": \"onCreate\",\n      \"onDestroy:18:20\": \"onDestroy\",\n      \"onWindowStageCreate:22:33\": \"onWindowStageCreate\",\n      \"onWindowStageDestroy:35:38\": \"onWindowStageDestroy\",\n      \"onForeground:40:43\": \"onForeground\",\n      \"onBackground:45:48\": \"onBackground\"\n    },\n    \"obfName\": \"home/src/main/ets/homeability/HomeAbility.ets\"\n  },\n  \"compileSdkVersion\": \"5.0.0.25\",\n  \"entryPackageInfo\": \"home|1.0.0\",\n  \"PropertyCache\": {\n    \"integratedHsp\": \"i\",\n    \"asanClick\": \"j\",\n    \"Index_Params\": \"m\",\n    \"testNapi\": \"o\",\n    \"Index\": \"t\",\n    \"testObfuscation\": \"g2\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "originalfieldname"
            })
          }), "：该字段为每个文件的原始文件路径及名称，例如以上的\"home/src/main/ets/homeability/HomeAbility.ets\"。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ObfName"
            })
          }), "：key为固定字段，value为每个文件混淆后的名称，与", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "originalfieldname"
            })
          }), "配对。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"obfName\": \"home/src/main/ets/pages/a.ts\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IdentifierCache"
            })
          }), "：该字段对应的值为该文件下的变量名混淆前后的映射关系。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "变量名分为两类：普通变量、类方法变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通变量映射关系的格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "originalvariablename :  obfuscatedvariablename\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "originalvariablename 表示原始的变量名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "obfuscatedvariablename 表示混淆后的变量名称。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "类方法变量映射关系的格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/*--------------------------key----------------------------------  :  -----------value----------*/\noriginalmethodname: originalmethodstartline: originalmethodendline :  obfuscatedmethodname\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "originalmethodname 表示原始的方法名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "[:originalmethodstartline:originalmethodendline] 表示原始的方法起始行数与结束行数，左右都是闭区间。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "obfuscatedmethodname 表示混淆后的方法名称。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MemberMethodCache"
            })
          }), "：该字段对应的值为该文件下的成员方法名混淆前后的映射关系。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启属性混淆时，成员方法映射关系的格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/*--------------------------key---------------------------------  :  -----------value----------*/\noriginalmethodname:originalmethodstartline:originalmethodendline  :  obfuscatedmethodname\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未开启属性混淆时，成员方法映射关系的格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/*--------------------------key-------------------------------------  :  -----------value----------*/\noriginalmethodname : originalmethodstartline : originalmethodendline  :  originalmethodname\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "originalmethodname 表示原始的成员方法名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "[:originalmethodstartline :originalmethodendline] 表示原始的成员方法起始行数与结束行数，左右都是闭区间。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "obfuscatedmethodname 表示混淆后的成员方法名称。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PropertyCache"
            })
          }), "：该字段对应的值为全局所有属性名混淆前后的映射关系，只有在开启属性混淆时才会有值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性名映射关系格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/*--------key-------  :  -----------value----------*/ \noriginalpropertyname  :  obfuscatedmethodname\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "originalpropertyname 表示原始的属性名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "obfuscatedmethodname 表示混淆后的属性名称。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码混淆解析",
      children: "代码混淆解析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异常堆栈如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pid:58348\nUid:20020156\nReason:RangeError\nError name:RangeError\nError message:The number cannot be converted to a BigInt because it is not an integer\nStacktrace:\nCannot get SourceMap info, dump raw stack:\n    at g2 (home|home|1.0.0|src/main/ets/pages/a.ts:6:6)\n    at getVersion (home|home|1.0.0|src/main/ets/pages/a.ts:2:2)\n    at anonymous (home|home|1.0.0|src/main/ets/pages/Index.ts:61:61)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "经过sourceMap映射转码堆栈如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "at g2 (home/src/main/ets/pages/tool.ts:7:27)\nat getVersion (home/src/main/ets/pages/tool.ts:2:30)\nat anonymous (home/src/main/ets/pages/Index.ets:23:40)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a.ts通过sourceMap还原为tool.ts。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"home|home|1.0.0|src/main/ets/pages/a.ts\": {\n    \"version\": 3,\n    \"file\": \"tool.ts\",\n    \"sources\": [\n      \"home/src/main/ets/pages/tool.ts\"\n    ],\n    \"names\": [],\n    \"mappings\": \"AAAA,MAAM,CAAC,OAAO,UAAU,UAAU,IAAI,MAAM;IAC1C,IAAI,KAAM,IAAiB,CAAA;IAC3B,UAAW;AACb,CAAC;AAED,eAA2B,MAAM;IAC/B,IAAI,GAAG,GAAG,MAAM,CAAC,MAAM,CAAC,CAAA;IACxB,OAAO,GAAG,CAAC;AACb,CAAC\",\n    \"sourceRoot\": \"\",\n    \"entry-package-info\": \"home|1.0.0\"\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "函数级文件名映射。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看混淆映射表：$ProjectPath$ModuleName\\build$product\\cache\\default\\default@CompileArkTS\\esmodule\\release\\obfuscation\\nameCache.json"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"home/src/main/ets/pages/tool.ts\": {\n    \"IdentifierCache\": {\n      \"getVersion#res\": \"h2\",\n      \"#testObfuscation:6:9\": \"g2\"\n    },\n    \"MemberMethodCache\": {},\n    \"obfName\": \"home/src/main/ets/pages/a.ts\"\n  }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该字段的IdentifierCache与MemberMethodCache中保存了方法名混淆前后的映射关系，对应格式为：\"源码方法名:该方法起始行号:该方法结束行号\":\"混淆后方法名\"。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源码方法名中的\"源码方法名\"代表上下级关系，故匹配后可以通过\"#\"保留最后名称。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "第一条堆栈混淆后的方法名为\"g2\"，若存在多个\"g2\"则需要通过行号范围过滤，故利用上述字段对该方法名进行还原："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过key(home/src/main/ets/pages/tool.ts)查找到映射表。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在上述字段中找出所有混淆后方法名为\"g2\"的条目，该条目为："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"#testObfuscation:6:9\": \"g2\"\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "找到行号范围包含步骤一中还原后行号的条目，步骤一中得到的行号为7包含在6-9之内，因此可以得到源码对应方法名为\"#testObfuscation\"，经过字符串处理结果为\"testObfuscation\"。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "at testObfuscation (home/src/main/ets/pages/tool.ts:7:27)\nat getVersion (home/src/main/ets/pages/tool.ts:2:30)\nat anonymous (home/src/main/ets/pages/Index.ets:23:40)\n"
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
452729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912890-91e4f282ab23486f67163f1ee6147771.png");

},
460779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752868-60948b8ad152d39a2a7c4bc7c510ab21.png");

},
664299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912878-66545a544a7feef0db7a9d7ac17ff79f.png");

},
831179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912870-034950485fdc4ecd2edfd8f659928527.png");

},
435026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
676255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912872-8d4520d9ccefcaae535652ec3498e44f.png");

},
109484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752827-251f9b6576c770672e8998fc6c993f67.png");

},
924009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752886-e245b6207c83c957b96975c701c31461.png");

},
135323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832789-d90cbec5f2206dafbaabeadfe9d82034.png");

},
63576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832809-3eacd4950df07120c2099ba64103993b.png");

},
917788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752811-ae0c57d4d09ceab0258b4fe0611866e2.png");

},
180631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912876-7d44a62f5f9aeb328f1fa43c8c246688.png");

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