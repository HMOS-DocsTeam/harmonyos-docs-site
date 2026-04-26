"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["616431"], {
699079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_questions_bytecode_obfuscation_questions_md_2d4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-bytecode-bytecode-obfuscation-questions-bytecode-obfuscation-questions-md-2d4.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_questions_bytecode_obfuscation_questions_md_2d4_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions/bytecode-obfuscation-questions","title":"ArkGuard字节码混淆常见问题","description":"字节码混淆与源码混淆差异","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions/bytecode-obfuscation-questions.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ArkGuard字节码混淆常见问题","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation-questions","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"不同包类型的字节码混淆建议","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice/"},"next":{"title":"在build-profile.json5中配置arkOptions","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkoptions-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions/bytecode-obfuscation-questions.md


const frontMatter = {
	title: 'ArkGuard字节码混淆常见问题',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation-questions',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGuard字节码混淆常见问题';

const assets = {

};



const toc = [{
  "value": "字节码混淆与源码混淆差异",
  "id": "字节码混淆与源码混淆差异",
  "level": 2
}, {
  "value": "混淆范围差异",
  "id": "混淆范围差异",
  "level": 3
}, {
  "value": "混淆选项差异",
  "id": "混淆选项差异",
  "level": 3
}, {
  "value": "混淆后文件结构差异",
  "id": "混淆后文件结构差异",
  "level": 3
}, {
  "value": "切换注意点",
  "id": "切换注意点",
  "level": 3
}, {
  "value": "如何排查功能异常",
  "id": "如何排查功能异常",
  "level": 2
}, {
  "value": "常规配置问题处理",
  "id": "常规配置问题处理",
  "level": 2
}, {
  "value": "开启enable-bytecode-obfuscation-debugging，没有生成pa文件如何处理",
  "id": "开启enable-bytecode-obfuscation-debugging没有生成pa文件如何处理",
  "level": 3
}, {
  "value": "混淆如何查看混淆效果",
  "id": "混淆如何查看混淆效果",
  "level": 3
}, {
  "value": "编译报错处理",
  "id": "编译报错处理",
  "level": 2
}, {
  "value": "运行异常处理",
  "id": "运行异常处理",
  "level": 2
}, {
  "value": "开启-enable-property-obfuscation选项可能出现的问题",
  "id": "开启-enable-property-obfuscation选项可能出现的问题",
  "level": 3
}, {
  "value": "同时开启-enable-export-obfuscation和-enable-toplevel-obfuscation选项可能出现的问题",
  "id": "同时开启-enable-export-obfuscation和-enable-toplevel-obfuscation选项可能出现的问题",
  "level": 3
}, {
  "value": "未开启-enable-string-property-obfuscation混淆选项，字符串字面量属性名却被混淆，导致字符串字面量属性名的值为undefined",
  "id": "未开启-enable-string-property-obfuscation混淆选项字符串字面量属性名却被混淆导致字符串字面量属性名的值为undefined",
  "level": 3
}, {
  "value": "开启-enable-filename-obfuscation选项后，可能会出现的问题",
  "id": "开启-enable-filename-obfuscation选项后可能会出现的问题",
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
        id: "arkguard字节码混淆常见问题",
        children: "ArkGuard字节码混淆常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字节码混淆与源码混淆差异",
      children: "字节码混淆与源码混淆差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆范围差异",
      children: "混淆范围差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "json文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码混淆在开启-enable-filename-obfuscation混淆项后，json文件名会参与混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆选项差异",
      children: "混淆选项差异"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["字节码混淆开关，默认关闭，在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide#%E5%BC%80%E5%90%AF%E6%B7%B7%E6%B7%86%E6%AD%A5%E9%AA%A4",
          children: "开启混淆功能"
        }), "后，需要额外在模块目录下obfuscation-rules.txt文件中配置-enable-bytecode-obfuscation 、-enable-bytecode-obfuscation-debugging。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字节码混淆，不支持以下混淆项-remove-comments。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆后文件结构差异",
      children: "混淆后文件结构差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "目录差异"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(200903)/* ["default"] */.A) + "",
        width: "419",
        height: "344"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101473)/* ["default"] */.A) + "",
        width: "450",
        height: "400"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字节码混淆后，obfuscation目录中多了obf、origin文件夹和config.json文件，具体详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide#%E6%9F%A5%E7%9C%8B%E6%B7%B7%E6%B7%86%E6%95%88%E6%9E%9C",
        children: "混淆效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文件内容差异"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nameCache.json文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源码混淆后："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"entry/src/main/ets/entryability/EntryAbility.ets\": {\n    \"IdentifierCache\": {\n      \"#UIAbility\": \"UIAbility\",\n      \"#testObject\": \"i\",\n      \"#EntryAbility\": \"j\"\n    },\n    \"MemberMethodCache\": {\n      \"onCreate:6:8\": \"onCreate\",\n      \"onDestroy:10:12\": \"onDestroy\",\n      \"onWindowStageCreate:14:25\": \"onWindowStageCreate\",\n      \"onWindowStageDestroy:27:30\": \"onWindowStageDestroy\",\n      \"onForeground:32:35\": \"onForeground\",\n      \"onBackground:37:40\": \"onBackground\"\n    },\n    \"obfName\": \"entry/src/main/ets/entryability/EntryAbility.ets\"\n  },\n  \"compileSdkVersion\": \"5.0.0.70\",\n  \"entryPackageInfo\": \"entry|1.0.0\",\n  \"PropertyCache\": {},\n  \"FileNameCache\": {\n    \"Hide\": \"b\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码混淆后："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"entry/src/main/ets/entryability/EntryAbility.ets\": {\n    \"IdentifierCache\": {\n      \"#EntryAbility\": \"a\",\n      \"#testObject\": \"c\"\n    },\n    \"MemberMethodCache\": {\n      \"EntryAbility:0:0\": \"a\",\n      \"onBackground:33:35\": \"onBackground\",\n      \"onCreate:7:9\": \"onCreate\",\n      \"onDestroy:10:12\": \"onDestroy\",\n      \"onForeground:29:31\": \"onForeground\",\n      \"onWindowStageCreate:14:23\": \"onWindowStageCreate\",\n      \"onWindowStageDestroy:25:27\": \"onWindowStageDestroy\"\n    },\n    \"obfName\": \"entry/src/main/ets/entryability/EntryAbility.ets\",\n    \"OriSourceFile\": \"entry|entry|1.0.0|src/main/ets/entryability/EntryAbility.ts\",\n    \"ObfSourceFile\": \"entry|entry|1.0.0|src/main/ets/entryability/EntryAbility.ts\"\n  },\n  \"entryPackageInfo\": \"entry|1.0.0\",\n  \"compileSdkVersion\": \"5.0.0.70\",\n  \"PropertyCache\": {},\n  \"FileNameCache\": {\n    \"Hide\": \"b\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IdentifierCache中，字节码混淆时差异：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不涉及函数参数名混淆。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "无匿名函数混淆名称映射。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在开启-enable-filename-obfuscation混淆项时，字节码混淆比源码混淆，多了OriSourceFile（混淆前源文件路径）和ObfSourceFile（混淆后源文件路径）字段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "切换注意点",
      children: "切换注意点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UI组件混淆差异"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码混淆不提供UI组件混淆能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于字节码中UI组件存在大量字符串的形式绑定属性、方法、类、变量等，字节码混淆已通过系统白名单扫描的机制，保证功能正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "以字符串的形式作为函数参数绑定属性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nexport struct MainPage {\n  @State messageStr: string = 'Hello World';\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "中间文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.__messageStr = new ObservedPropertySimplePU('Hello World', this, \"messageStr\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在中间文件转换过程中，message以字面量形式进行了绑定；此时，存在messageStr这个属性被混淆了，但是这个方法的字符串参数没有混淆，导致UI失效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决办法"
        })
      }), "：收集struct里所有成员，加入白名单，不参与混淆。目前由于字节码混淆不提供UI组件混淆能力，系统会自动识别添加到白名单，不需要开发者配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字节码中通过字符串绑定属性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sample.ets\nimport { Type } from '@kit.ArkUI';\n\n// 数据中心\n@ObservedV2\nclass SampleChild {\n  @Trace public p123: number = 0;\n  public p2: number = 10;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public f123: SampleChild = new SampleChild();\n}\n\n@ObservedV2\nclass Info {\n  @Trace public sample: Sample = new Sample();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tryldglobalbyname 0x136, Trace\nsta v2\nlda v0\nldobjbyname 0x137, prototype\nsta v3\nlda.str sample\nsta v4\nlda v2\ncallargs2 0x2c, v3, v4\nlda v0\nldobjbyname 0x139, prototype\nsta v2\nlda.str sample\nsta v3\nlda v1\ncallargs2 0x2e, v2, v3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码层面存在一个global对象Trace，再通过字符串sample绑定属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决办法"
        })
      }), "：字节码混淆需要收集扫描到的所有decorator节点，并且识别到Trace修饰的参数就自动加入白名单，不需要开发者配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何排查功能异常",
      children: "如何排查功能异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "排查功能异常步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "先在obfuscation-rules.txt配置-disable-obfuscation选项用于关闭混淆，确认问题是否由混淆引起。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若确认是开启混淆后功能出现的异常，请先阅读文档了解", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
            children: "混淆规则"
          }), "的能力以及哪些语法场景需要", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation#%E5%B7%B2%E6%9C%89%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9%E6%B1%87%E6%80%BB",
            children: "配置白名单"
          }), "来保证应用功能正常。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考本文已有的问题，若是相似场景可参考对应的解决方法快速解决。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若常见案例中未找到相似案例，建议依据各项配置功能正向定位（若不需要相应功能，可删除对应配置项）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用运行时崩溃分析方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a.打开应用运行日志或者点击DevEco Studio中出现的Crash弹窗，找到运行时崩溃栈。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b.应用运行时崩溃栈中的行号为编译产物的行号，方法名也可能为混淆后名称；因此排查时建议直接根据崩溃栈查看编译产物，进而分析哪些名称不能被混淆，然后将其配置进白名单中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在运行时未崩溃但出现功能异常的分析方法（比如白屏）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a.打开应用运行日志：选择HiLog，检索与功能异常直接相关的日志，定位问题发生的上下文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b.定位异常代码段：通过分析日志，找到导致功能异常的具体代码块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "c.增强日志输出：在疑似异常的功能代码中，对处理的数据字段增加日志记录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "d.分析并确定关键字段：通过对新增日志输出的分析，识别是否由于混淆导致该字段的数据异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "e.配置白名单保护关键字段：将确认在混淆后对应用功能产生直接影响的关键字段添加到白名单中。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常规配置问题处理",
      children: "常规配置问题处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启enable-bytecode-obfuscation-debugging没有生成pa文件如何处理",
      children: "开启enable-bytecode-obfuscation-debugging，没有生成pa文件如何处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先确保Build Mode设置为release，查看根目录下的build-profile.json5中，设置 \"compatibleSdkVersionStage\": \"beta3\"，再检查每个module中obfuscation-rules.txt文件里，开启字节码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆如何查看混淆效果",
      children: "混淆如何查看混淆效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在混淆结束后会将中间产物落盘，因此可以在编译产物build目录中找到混淆后的中间产物以查看混淆效果，同时可以找到混淆生成的名称映射表及系统API白名单文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "混淆后的文件目录：build/default/[...]/release/obfuscation/obf。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "混淆名称映射表及系统API白名单目录：build/default/[...]/release/obfuscation。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(676626)/* ["default"] */.A) + "",
        width: "673",
        height: "580"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "名称映射表文件：nameCache.json，该文件记录了源码名称混淆的映射关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统API白名单文件：systemApiCache.json，该文件记录了SDK中的接口与属性名称，与其重名的源码不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译报错处理",
      children: "编译报错处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例一：报错内容为 ERROR: [Class]get different name for method."
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      }), "：使用@CustomDialog，自定义对话框，内部再弹出另一个对话框，开启字节码混淆后，执行build失败，报错信息为："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Error message: ArkTSCompilerError: ArkTS:ERROR Failed to execute ByteCode Obfuscate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Error message: [Class]get different name for method:&entry/src/main/ets/pages/XXXX&.#~@0>#setController^1."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 代码1\n@CustomDialog\nexport default struct TmsDialog {\n  controller?: CustomDialogController\n  dialogController:CustomDialogController\n\n  build() {\n  }\n}\n\n// 代码2\n@CustomDialog\nstruct Index{\n  controller?: CustomDialogController\n  dialogController?:CustomDialogController\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在这个示例中，在自定义的对话框中，再弹一个对话框；如上示例中代码1，或在一个UI中定义两个CustomDialogController对象，执行时，ets代码转ts后，会生成两个相同的setController函数，从而导致字节码混淆时报错。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nexport default struct TmsDialog {\n  controller?: CustomDialogController\n  dialogController:CustomDialogController|null = null;  // 修改此处的定义声明方式\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码1中，在运行时，是无法正常弹出dialogController的，只需要在定义时改为解决方案中的代码，就可以正常弹出dialogController，同时字节码混淆功能正常；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码2中，由于我们只是使用CustomDialogController，因此不需要@CustomDialog，直接删除@CustomDialog即可，删除后功能正常，字节码混淆功能正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，上述示例代码将不能正常编译。新的版本中，一个@CustomDialog组件只能有一个未初始化的CustomDialogController。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行异常处理",
      children: "运行异常处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启-enable-property-obfuscation选项可能出现的问题",
      children: "开启-enable-property-obfuscation选项可能出现的问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例一：报错内容为 Cannot read property 'xxx' of undefined"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例JSON文件结构（ImportJson.json）：\n/*\n{\n  \"jsonObj\": {\n    \"jsonProperty\": \"value\"\n  }\n}\n */\n\n// 混淆前\nimport jsonData from './ImportJson.json';\n\nlet jsonProp = jsonData.jsonObj.jsonProperty;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\nimport jsonData from \"./test.json\";\n\nlet jsonProp = jsonData.i.j;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启属性混淆后，\"jsonProperty\"被混淆成随机字符\"j\"，但json文件中为原始名称，从而导致值为undefined。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "：使用-keep-property-name选项将json文件里的字段配置到白名单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例二：使用了数据库相关的字段，开启属性混淆后，出现报错"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报错内容为table Account has no column named a23 in 'INSERT INTO Account(a23)'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码里使用了数据库字段，混淆时该SQL语句中字段名称被混淆，但数据库中字段为原始名称，从而导致报错。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "：使用-keep-property-name选项将使用到的数据库字段配置到白名单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例三：使用Record<string, Object>作为对象的类型时，该对象里的属性被混淆，导致功能异常"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parameters的类型为Record<string, Object>，在开启属性混淆后，parameters对象中的属性linkSource被混淆，进而导致功能异常。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\nimport { Want } from '@kit.AbilityKit';\n  // ...\n  let petalMapWant: Want = {\n    bundleName: 'com.example.myapplication',\n    uri: 'maps://',\n    parameters: {\n      linkSource: 'com.other.app'\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\nimport type Want from \"@ohos:app.ability.Want\";\n\nlet petalMapWant: Want = {\n    bundleName: 'com.example.myapplication',\n    uri: 'maps://',\n    parameters: {\n        i: 'com.other.app'\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在这个示例中，所创建的对象的内容需要传递给系统来加载某个页面，因此对象中的属性名称不能被混淆，否则会造成功能异常。示例中parameters的类型为Record<string, Object>，这只是一个表示以字符串为键的对象的泛型定义，并没有详细描述其内部结构和属性类型。因此，混淆工具无法识别该对象内部哪些属性不应被混淆，从而可能导致内部属性名linkSource被混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将混淆后会出现问题的属性名配置到属性白名单中，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\nlinkSource\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例四：使用@Type和@Trace组合修饰的装饰器属性，混淆后，功能不正常"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Type和@Trace组合修饰的装饰器属性，可以正常混淆，但混淆后，功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sample.ets\nimport { Type } from '@kit.ArkUI';\n\n@ObservedV2\nclass SampleChild {\n  @Trace public p123: number = 0;\n  public p2: number = 10;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public f123: SampleChild = new SampleChild();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Call the API\n// CallDecorator.ets\nimport { PersistenceV2 } from '@kit.ArkUI';\nimport { Sample } from './SampleChild';\n\n@Entry\n@ComponentV2\nexport struct Page {\n  prop: Sample = PersistenceV2.connect(Sample, () => new Sample())!;\n\n  build() {\n    Column() {\n      Text(`Page1 add 1 to prop.p1: ${this.prop.f123.p123}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆后，p123，f123都被正常替换了，但处理Trace，Type装饰器属性时，p123，f123都被识别为字符串，不参与混淆，导致调用失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "装饰器修饰的属性名需要保留，使用@Type和@Trace组合修饰的装饰器属性同样需要被保留。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用-keep-property-name选项，将未直接导出的类型内的属性配置到属性白名单中。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\nf123\np123\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例五：同时开启-enable-property-obfuscation和-keep选项可能会出现的问题"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用如下混淆配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-property-obfuscation\n-keep\n./file1.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并且在file2.ts中导入file1.ts的接口。此时，接口中有属性的类型为对象类型，该对象类型的属性在file1.ts中被保留，在file2.ts中被混淆，从而导致调用时引发功能异常。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\n// ExportInterface.ts\nexport interface MyInfo {\n  age: number;\n  address: {\n    city1: string;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ExportCompositeInterface.ts\nimport { MyInfo } from './ExportCompositeInterface';\n  // ...\n  const person: MyInfo = {\n    age: 20,\n    address: {\n      city1: 'shanghai'\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后，file1.ts的代码被保留\n// file2.ts\nimport { MyInfo } from './file1';\n\nconst person: MyInfo = {\n    age: 20,\n    address: {\n        i: \"shanghai\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题原因"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-keep选项保留file1.ts文件时，file1.ts中代码不会被混淆。对于导出属性（如address）所属类型内的属性，不会被自动收集在属性白名单中。因此，该类型内的属性在其他文件中被使用时，会被混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方案一"
        })
      }), "：使用interface定义该属性的类型，并使用export进行导出，这样该属性会自动被收集到属性白名单中。示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ExportCompositeInterface.ts\nexport interface AddressType {\n  city1: string\n}\nexport interface MyInfo {\n  age: number;\n  address: AddressType;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方案二"
        })
      }), "：使用-keep-property-name选项，将未直接导出的类型内的属性配置到属性白名单中。示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\ncity1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "同时开启-enable-export-obfuscation和-enable-toplevel-obfuscation选项可能出现的问题",
      children: "同时开启-enable-export-obfuscation和-enable-toplevel-obfuscation选项可能出现的问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当开启这两个选项时，主模块调用其他模块方法时涉及的方法名称混淆情况如下"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "主模块"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "依赖模块"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "导入与导出的名称混淆情况"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAP/HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP和主模块是独立编译的，混淆后名称会不一致，因此都需要配置白名单"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAP/HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地HAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地HAR与主模块一起编译，混淆后名称一致"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAP/HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方库中导出的名称及其属性会被收集到白名单，因此导入和导出时都不会被混淆"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HSP需要将给其他模块用的方法配置到白名单中。因为主模块里也需要配置相同的白名单，所以推荐将HSP配置了白名单的混淆文件（假设名称为hsp-white-list.txt）添加到依赖它的模块的混淆配置项里，即下图files字段里。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56317)/* ["default"] */.A) + "",
        width: "413",
        height: "285"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例一：动态导入某个类，类定义的地方被混淆，导入类名时却没有混淆，导致报错"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\n// ExportUtils.ts\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ts\nasync function loadAndUseAdd() {\n    try {\n        const mathUtils = await import('./ExportUtils');\n        const result = mathUtils.add(2, 3);\n    } catch (error) {\n        console.error('Failure reason:', error);\n    }\n}\n\nloadAndUseAdd();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\n// utils.ts\nexport function c1(d1: number, e1: number): number {\n    return d1 + e1;\n}\n\n// main.ts\nasync function i() {\n    try {\n        const a1 = await import(\"@normalized:N&&&entry/src/main/ets/pages/utils&\");\n        const b1 = a1.add(2, 3);\n    }\n    catch (z) {\n        console.error('Failure reason:', z);\n    }\n}\ni();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数add在定义时位于顶层作用域，但通过.add访问时被视为属性。由于未开启-enable-property-obfuscation选项，导致add被使用时未进行混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案一：开启-enable-property-obfuscation选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方案二：使用-keep-global-name选项将\"add\"配置到白名单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例二：在使用namespace中的方法时，该方法定义的地方被混淆了，但使用的地方却没有被混淆，导致报错"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前\n// ExportNs.ts\nexport namespace NS {\n  export function foo() {\n    console.info(`export NS function foo is called`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// import.ts\nimport { NS } from './ExportNs';\n  // ...\n  NS.foo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\n// export.ts\nexport namespace i {\n    export function j() {}\n}\n\n// import.ts\nimport { i } from './export';\n\ni.foo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "namespace中的foo属于export元素，当通过NS.foo调用时被视为属性。由于未开启-enable-property-obfuscation选项，导致foo在使用时未被混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启-enable-property-obfuscation选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将namespace里导出的方法使用-keep-global-name选项添加到白名单。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例三：使用了declare global，混淆后报语法错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ExportInterface.ts\n// 混淆前\ndeclare global {\n  var myAge : string\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\ndeclare a2 {\n    var b2 : string\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报错内容为SyntaxError: Unexpected token。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用-keep-global-name选项将global配置到白名单中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18 开始，global 已加入系统的白名单，不需要开发者再使用 -keep-global-name 配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例四：使用Reflect.defineMetadata()，混淆后，提示找不到函数，导致程序异常"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开启-enable-toplevel-obfuscation属性混淆后，字节码混淆时，混淆正常，运行时报错，错误日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error message: is not callable\nStacktrace: Cannot get SourceMap info, dump raw stack: at anonymous (ads_service|@hw-ads/ohos-ads-model|1.0.1|src/main/ets/annotations/FieldType.ts:6:1。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// oh-package.json5\n\"dependencies\": {\n  \"reflect-metadata\": \"0.2.1\"\n}\n  \n// test.ts\nimport 'reflect-metadata';\n\n// 调用代码\nexport const FIELD_TYPE_KEY = Symbol('fieldType');\nexport function FieldType(...types: Function[]): PropertyDecorator {\n    return (target, key) => {\n        Reflect.defineMetadata(FIELD_TYPE_KEY, types, target, key);\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题分析"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开启-enable-toplevel-obfuscation属性混淆后，Reflect文件中，函数名参与混淆，exporter函数中的字符串\"defineMetadata\"不参与混淆，导致外部使用Reflect.defineMetadata时，找不到对应函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用-keep-global-name选项将defineMetadata配置到白名单中。由于Reflect文件中多次使用exporter，建议直接使用-keep选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n../xxx/xxx/xxx/Reflect.ts  // 使用文件的相对路径\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未开启-enable-string-property-obfuscation混淆选项字符串字面量属性名却被混淆导致字符串字面量属性名的值为undefined",
      children: "未开启-enable-string-property-obfuscation混淆选项，字符串字面量属性名却被混淆，导致字符串字面量属性名的值为undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ExportInterface.ts\n// 混淆前\nconst person = {\n  myAge: 18\n}\nperson[\"myAge\"] = 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// file.ts\n// 混淆后\nconst person = {\n    myAge: 18\n}\nperson[\"m\"] = 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认是否有依赖的HAR包开启了字符串属性名混淆，若开启了，则会影响主工程，需将其关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若不能关闭-enable-string-property-obfuscation选项，将属性名配置到白名单中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若依赖HAR包未开启字符串属性名混淆，同时SDK版本小于4.1.5.3，请更新SDK。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启-enable-filename-obfuscation选项后可能会出现的问题",
      children: "开启-enable-filename-obfuscation选项后，可能会出现的问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例一：报错为Error Failed to get a resolved OhmUrl for 'D:code/MyApplication/f12/library1/pages/d.ets' imported by 'undefined'"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程的目录结构如下图所示，模块library1的外层还有目录\"directory\"，开启文件名混淆后，\"directory\" 被混淆为f12，导致路径找不到。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(187917)/* ["default"] */.A) + "",
        width: "341",
        height: "201"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果工程的目录结构和报错内容都相似，请将SDK更新至最低5.0.0.26版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用-keep-file-name将模块外层的目录名\"directory\"配置到白名单中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "案例二：报错为Cannot find module 'ets/appability/AppAbility' which is application Entry Point"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于系统会在应用运行时加载ability文件，用户需要手动配置相应的白名单，防止指定文件被混淆，导致运行失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "：使用-keep-file-name选项，将src/main/module.json5文件中，'srcEntry'字段所对应的路径配置到白名单中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-file-name\nappability\nAppAbility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HAP与HSP依赖相同的本地源码HAR模块，可能会出现的问题。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若开启文件名混淆，会出现以下问题："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "问题一"
            })
          }), "：单例功能异常问题。原因是HAP与HSP独立执行构建与混淆流程，本地源码HAR模块在HAP与HSP的包中可能会出现相同的文件名被混淆成不同文件名的情况。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "问题二"
            })
          }), "：接口调用失败问题。原因是HAP与HSP独立执行构建与混淆流程，本地源码HAR模块在HAP与HSP的包中可能会出现不同的文件名被混淆成相同的文件名的情况。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若开启-enable-export-obfuscation和-enable-toplevel-obfuscation选项，在应用运行时会出现加载接口失败的问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "原因是HAP与HSP独立执行构建与混淆流程，本地源码HAR模块中暴露的接口在HAP与HSP中被混淆成不同的名称。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将HAP与HSP共同依赖的本地源码HAR改造为字节码HAR，这样此HAR在被依赖时不会被二次混淆。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将HAP与HSP共同依赖的本地源码HAR以release模式构建打包，这样此HAR在被依赖时，其文件名与对外接口不会被混淆。"
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
56317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437595-048608a119d2e0720c6ab37d65575595.png");

},
200903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477549-cc1902d6026a9f8fe2e4c7eb4e95c326.png");

},
101473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797900-67740be2e57647374aea73aa7b14d230.png");

},
187917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
676626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437593-8bde263c047b18cd1f32bb9d61e2442f.png");

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