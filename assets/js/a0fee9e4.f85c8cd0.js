"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["714127"], {
575193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_arkts_runtime_faq_arkts_runtime_faq_md_a0f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-arkts-runtime-faq-arkts-runtime-faq-md-a0f.json
var site_docs_arkts_arkts_runtime_arkts_runtime_faq_arkts_runtime_faq_md_a0f_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/arkts-runtime-faq/arkts-runtime-faq","title":"ArkTS运行时常见问题","description":"正则运算与预期输出结果不一致场景","source":"@site/docs/arkts/arkts-runtime/arkts-runtime-faq/arkts-runtime-faq.md","sourceDirName":"arkts/arkts-runtime/arkts-runtime-faq","slug":"/arkts/arkts-runtime/arkts-runtime-faq/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"ArkTS运行时常见问题","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-runtime-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"模块加载副作用及优化","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects/"},"next":{"title":"ArkTS编译工具链概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/arkts-runtime-faq/arkts-runtime-faq.md


const frontMatter = {
	title: 'ArkTS运行时常见问题',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-runtime-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS运行时常见问题';

const assets = {

};



const toc = [{
  "value": "正则运算与预期输出结果不一致场景",
  "id": "正则运算与预期输出结果不一致场景",
  "level": 2
}, {
  "value": "正则运算对于\\b处理与预期不一致",
  "id": "正则运算对于b处理与预期不一致",
  "level": 3
}, {
  "value": "正则运算对于先行断言((?=pattern)或(?!pattern)) 嵌套在后行断言((?&lt;=pattern)或(?&lt;!pattern))内部的场景与预期不一致",
  "id": "正则运算对于先行断言pattern或pattern-嵌套在后行断言pattern或pattern内部的场景与预期不一致",
  "level": 3
}, {
  "value": "正则运算对于大小写的处理与预期不一致",
  "id": "正则运算对于大小写的处理与预期不一致",
  "level": 3
}, {
  "value": "正则运算/()/ug匹配时lastIndex与预期不一致",
  "id": "正则运算ug匹配时lastindex与预期不一致",
  "level": 3
}, {
  "value": "正则运算[]内部使用&#39;-&#39;与预期不一致",
  "id": "正则运算内部使用-与预期不一致",
  "level": 3
}, {
  "value": "正则运算具名捕获组获取与预期不一致",
  "id": "正则运算具名捕获组获取与预期不一致",
  "level": 3
}, {
  "value": "正则匹配使用&#39;|&#39;与预期不一致",
  "id": "正则匹配使用与预期不一致",
  "level": 3
}, {
  "value": "TypedArray.prototype.map触发内联缓存优化后，在回调中将数值number转为浮点数number与期望不一致",
  "id": "typedarrayprototypemap触发内联缓存优化后在回调中将数值number转为浮点数number与期望不一致",
  "level": 3
}, {
  "value": "Number.parseFloat解析浮点数number类型非规格化数值与期望不一致",
  "id": "numberparsefloat解析浮点数number类型非规格化数值与期望不一致",
  "level": 3
}, {
  "value": "Set constructor入参为多维数组的解析与期望不一致",
  "id": "set-constructor入参为多维数组的解析与期望不一致",
  "level": 3
}, {
  "value": "Object.entries处理Uint8Array与Uint16Array数组结果与期望不一致",
  "id": "objectentries处理uint8array与uint16array数组结果与期望不一致",
  "level": 3
}, {
  "value": "字符串 replace 接口对于第一个参数为空字符串的场景与预期不一致",
  "id": "字符串-replace-接口对于第一个参数为空字符串的场景与预期不一致",
  "level": 3
}, {
  "value": "Async函数内部异常的处理机制",
  "id": "async函数内部异常的处理机制",
  "level": 2
}, {
  "value": "Array.flatMap()接口常见问题",
  "id": "arrayflatmap接口常见问题",
  "level": 2
}, {
  "value": "ArkTS使用场景",
  "id": "arkts使用场景",
  "level": 3
}, {
  "value": "ArkUI使用场景",
  "id": "arkui使用场景",
  "level": 3
}, {
  "value": "Array.flatMap规避方案",
  "id": "arrayflatmap规避方案",
  "level": 3
}, {
  "value": "Proxy的handler对象中key类型与EcmaScript规范定义不一致",
  "id": "proxy的handler对象中key类型与ecmascript规范定义不一致",
  "level": 3
}, {
  "value": "JSON.stringify的replacer函数中数组索引的key类型与EcmaScript规范定义不一致",
  "id": "jsonstringify的replacer函数中数组索引的key类型与ecmascript规范定义不一致",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts运行时常见问题",
        children: "ArkTS运行时常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正则运算与预期输出结果不一致场景",
      children: "正则运算与预期输出结果不一致场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果使用正则运算时结果与期望不符，请检查以下场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正则运算对于b处理与预期不一致",
      children: "正则运算对于\\b处理与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let str = '\\u2642';\nlet res = str.replace(/\\b/g, '/');\nconsole.info('res = ' + res);\n// 期望输出: res = ♂\n// 实际输出: res = /♂/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：暂无。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(942887)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正则匹配\\b（单词边界）遇到某些ASCII编码之外的字符时，会将其当成ASCII字符来处理，从而将不是单词边界匹配识别成单词边界。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正则运算对于先行断言pattern或pattern-嵌套在后行断言pattern或pattern内部的场景与预期不一致",
      children: "正则运算对于先行断言((?=pattern)或(?!pattern)) 嵌套在后行断言((?<=pattern)或(?<!pattern))内部的场景与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "console.info(`res:${'abcdef'.match(/(?<=ab(?=c)cd)ef/)}`);\n// 期望输出: res:ef\n// 实际输出: res:null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：使用/(?<=abcd)ef/代替/(?<=ab(?=c)cd)ef/。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正则运算对于大小写的处理与预期不一致",
      children: "正则运算对于大小写的处理与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let res = /\\u{10400}/ui.test('\\u{10428}');\nconsole.info('res = ' + res);\n// 期望输出: res = true\n// 实际输出: res = false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：暂无。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正则运算ug匹配时lastindex与预期不一致",
      children: "正则运算/()/ug匹配时lastIndex与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let L = '\\ud800';\nlet T = '\\udc00';\nlet u = /()/ug;\nu.lastIndex = 1;\nu.exec(L + T + L + T);\nconsole.info('u.lastIndex = ' + u.lastIndex);\n// 期望输出: u.lastIndex = 0\n// 实际输出: u.lastIndex = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：暂无。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正则运算内部使用-与预期不一致",
      children: "正则运算[]内部使用'-'与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let str = 'a-b';\nlet reg = /[+-\\s]/;\nconsole.info('reg.exec(str) = ' + reg.exec(str));\n// 期望输出: reg.exec(str) = -\n// 实际输出: reg.exec(str) = null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：使用转义后的\"-\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let str = 'a-b';\nlet reg = /[+\\-\\s]/;\nconsole.info('reg.exec(str) = ' + reg.exec(str));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正则运算具名捕获组获取与预期不一致",
      children: "正则运算具名捕获组获取与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let reg = new RegExp('(a)(?<b>b)');\nlet res = reg.exec('ab');\nconsole.info('JSON.stringify(res?.groups) = ' + JSON.stringify(res?.groups));\n// 期望输出: JSON.stringify(res?.groups) = {'b':'b'}\n// 实际输出: JSON.stringify(res?.groups) = {'b':'a'}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：计算具名捕获组位置获取具名捕获组匹配的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let reg = new RegExp('(a)(?<b>b)');\nlet res = reg.exec('ab') as Array<string>;\nconsole.info('JSON.stringify(res?.groups) = {\\'b\\':' + JSON.stringify(res[2]) + '}');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正则匹配使用与预期不一致",
      children: "正则匹配使用'|'与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用正则匹配时，如果'|'前是一个空匹配，会导致'|'后的匹配不成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let reg = /a(?:|x)$/;\nlet res = reg.exec('ax');\nconsole.info('JSON.stringify(res) = ' + JSON.stringify(res));\n// 期望输出: JSON.stringify(res) = ['ax']\n// 实际输出: JSON.stringify(res) = null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：使用reg2或reg3替换reg1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let reg1 = /a(?:|x)$/;\nlet reg2 = /a(?:x)?$/;\nlet reg3 = /a(?:x){0,1}$/;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typedarrayprototypemap触发内联缓存优化后在回调中将数值number转为浮点数number与期望不一致",
      children: "TypedArray.prototype.map触发内联缓存优化后，在回调中将数值number转为浮点数number与期望不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for(let i = 0; i < 1000; i++) {} // 触发内联缓存优化\n\nlet arr = new Int32Array([1, 2, 3, 4, 5]);\nlet result = arr.map(val => {\n  let res = (Math.pow(val, 1)) * 100;\n  return res;\n})\n\nconsole.info('result[0]:', result[0]);\n// 期望输出: result[0]:100\n// 实际输出: result[0]:104\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：使用Array.from将TypedArray先转换为普通Array，再处理number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arr = new Int32Array([1, 2, 3, 4, 5]);\n\nlet normalArr = Array.from(arr);\nlet result = normalArr.map(val => {\n  let res = (Math.pow(val, 1)) * 100;\n  return res;\n});\n\nconsole.info('result[0]:', result[0]);\n// 输出: result[0]:100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numberparsefloat解析浮点数number类型非规格化数值与期望不一致",
      children: "Number.parseFloat解析浮点数number类型非规格化数值与期望不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parseFloat接口不支持对非规格化数进行解析。当输入字符串表示一个浮点数number类型的非规格化数，一律输出0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let result = parseFloat('5e-324');\nconsole.info('testcase: ', result);\n// 期望输出: testcase: 5e-324\n// 实际输出: testcase: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：暂无，开发者应避免使用parseFloat接口对非规格化数进行解析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-constructor入参为多维数组的解析与期望不一致",
      children: "Set constructor入参为多维数组的解析与期望不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const arr1: number[] = [1, 2];\nconst arr2: number[] = [3, 4];\nconst set = new Set<number[]>([arr1, arr2]);\nlet result = JSON.stringify(Array.from(set));\nconsole.info('res: ', result);\n// 期望输出: res: [[1,2],[3,4]]\n// 实际输出: res: [2,4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：暂无，开发者应避免构造set时入参为多维数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectentries处理uint8array与uint16array数组结果与期望不一致",
      children: "Object.entries处理Uint8Array与Uint16Array数组结果与期望不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestArray.js\nconst typedArr = new Uint8Array([10, 20, 30]);\ntry {\n  const result = Object.entries(typedArr);\n  console.info('no error throw');\n} catch(e) {\n  console.info(e);\n}\n// 期望输出：no error throw\n// 实际输出: RangeError: object entries is not supported IsJSUint8Array or IsJSUint16Array\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestArrayExt.js\nconst typedArr = new Uint16Array([10, 20, 30]);\ntry {\n   const result = Object.entries(typedArr);\n   console.info('no error throw');\n} catch (e) {\n   console.info(e);\n}\n// 期望输出：no error throw\n// 实际输出: RangeError: object entries is not supported IsJSUint8Array or IsJSUint16Array\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：使用Array.from将TypedArray先转换为普通Array，再使用Object.entries。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestArray.js\nconst typedArr = new Uint8Array([10, 20, 30]);\ntry {\n  const normalArr1 = Array.from(typedArr);\n  const result = Object.entries(normalArr1);\n  console.info('no error throw');\n} catch(e) {\n  console.info(e);\n}\n// 输出：no error throw\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字符串-replace-接口对于第一个参数为空字符串的场景与预期不一致",
      children: "字符串 replace 接口对于第一个参数为空字符串的场景与预期不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用字符串replace接口时，如果第一个参数是空字符串，则直接返回原始字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let str = 'dddd';\nlet res = str.replace('', 'abc');\nconsole.info('res = ' + res);\n// 期望输出: res = abcdddd\n// 实际输出: res = dddd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：使用正则表达式 /^/ 表示字符串起始符，作为第一个参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let str = 'dddd';\nlet res = str.replace(/^/, 'abc');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "async函数内部异常的处理机制",
      children: "Async函数内部异常的处理机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在Async函数内部产生了异常，且没有使用catch捕获该异常，在ArkTS中不会导致进程退出。其本质是Async函数返回了一个rejected状态的Promise对象，没有被处理，使得Promise的rejected状态没有被捕获。Async函数内部的异常会变成 unhandledRejection，表现为异常未抛出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Async函数内部异常的捕获方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager#errormanageronerror",
            children: "errorManager.on()"
          }), "捕获到Async函数产生的unhandledrejection事件，再通过编写errorManager.on()注册的回调函数，来进行异常处理操作。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { errorManager } from '@kit.AbilityKit';\n  // ...\n  errorManager.on('unhandledRejection', (a:ESObject, b:Promise<ESObject>) => {\n    console.info('Async test', a);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Async函数内部，针对可能发生异常的代码块添加try-catch逻辑，直接捕获可能出现的异常。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(28803)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意必须在Async函数内部，外部无法捕获Async函数内部的异常，外部只能通过errorManager.on()监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看Async函数内部是否有异常的方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者仅需要查看Async函数内部是否产生异常，首先需要在DevEco Studio终端执行以下hilog命令开启debug级别日志打印："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   hilog -b D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后点击DevEco Studio下方HiLog选项卡，输入过滤条件“Throw error:”，即可查看到Async函数内产生的异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(182963)/* ["default"] */.A) + "",
        width: "1270",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arrayflatmap接口常见问题",
      children: "Array.flatMap()接口常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Array.flatMap()接口在处理包含Proxy的Array时，未正确展平嵌套的Proxy Array，导致返回结果与预期不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts使用场景",
      children: "ArkTS使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let arr1 = [0, 1];\nlet arr2 = [2, 3];\nconst emptyHandler = {} as ProxyHandler<number[]>;\nlet proxy1 = new Proxy(arr1, emptyHandler);\nlet proxy2 = new Proxy(arr2, emptyHandler);\nlet arr3 = [proxy1, proxy2];\nlet res = arr3.flatMap(x => x);\n\nconsole.info('res length:', res.length.toString());\n// 期望输出: res length: 4\n// 实际输出: res length: 2\nconsole.info('res[0] is: ', res[0].toString());\n// 期望输出: res[0] is: 0\n// 实际输出: res[0] is: 0,1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui使用场景",
      children: "ArkUI使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI状态管理框架会为使用状态变量装饰器（如@State、@Trace、@Local）装饰的Array添加一层代理，用于观测API调用产生的变化。如果状态装饰器与Array组合，并且调用Array.flatMap，会出现如下问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以状态管理V2为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local p: number[] = [0, 1];\n  @Local q: number[] = [2, 3];\n  c: number[][] = [this.p, this.q];\n  d: number[] = [];\n\n  aboutToAppear(): void {\n    this.d = this.c.flatMap(it => it);\n  }\n\n  build() {\n    Column() {\n      Text(`${this.d[0]}`); // 预期显示：0; 实际显示：0,1\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arrayflatmap规避方案",
      children: "Array.flatMap规避方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "避免使用Array.flatMap()接口，改为调用Array.map()接口后再调用深度为1的Array.flat()接口。以上文ArkTS使用场景为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用规避方案前\nlet res = arr3.flatMap(x => x);\n// ...\n// 使用规避方案后\nlet res = arr3.map(x => x).flat();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "proxy的handler对象中key类型与ecmascript规范定义不一致",
      children: "Proxy的handler对象中key类型与EcmaScript规范定义不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Proxy对象的handler函数中，对于数字类型的key，ArkTS当前实现是采用保持数字类型不变，但是按照EcmaScript规范，应当转为string类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestArray.js\n{\n  let handler = {\n    get(target, key) {\n      console.info('get', key, typeof key);\n      return Reflect.get(target, key);\n    },\n    set(target, key, value) {\n      console.info('set', key, typeof key);\n      return Reflect.set(target, key, value);\n    },\n    deleteProperty(target, key) {\n      console.info('delete', key, typeof key);\n      return Reflect.deleteProperty(target, key);\n    },\n    has(target, key) {\n      console.info('has', key, typeof key);\n      return Reflect.has(target, key);\n    }\n  }\n  let obj = {};\n  let px = new Proxy(obj, handler);\n  px[1];\n  // 实际输出：get 1 number\n  px[2] = 2;\n  // 实际输出：set 2 number\n  3 in px;\n  // 实际输出：has 3 number\n  delete px[2];\n  // 实际输出：delete 2 number\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：若业务逻辑依赖于key必须为string类型，可在handler函数内部对数字类型的key进行显式转换。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestArray.js\n{\n  let handler = {\n    get(target, key) {\n      if (typeof key === 'number') {\n        key = String(key);\n      }\n      console.info('get', key, typeof key);\n      return Reflect.get(target, key);\n    },\n    set(target, key, value) {\n      if (typeof key === 'number') {\n        key = String(key);\n      }\n      console.info('set', key, typeof key);\n      return Reflect.set(target, key, value);\n    },\n    deleteProperty(target, key) {\n      if (typeof key === 'number') {\n        key = String(key);\n      }\n      console.info('delete', key, typeof key);\n      return Reflect.deleteProperty(target, key);\n    },\n    has(target, key) {\n      if (typeof key === 'number') {\n        key = String(key);\n      }\n      console.info('has', key, typeof key);\n      return Reflect.has(target, key);\n    }\n  }\n  let obj = {};\n  let px = new Proxy(obj, handler);\n  px[1];\n  // 实际输出：get 1 string\n  px[2] = 2;\n  // 实际输出：set 2 string\n  3 in px;\n  // 实际输出：has 3 string\n  delete px[2];\n  // 实际输出：delete 2 string\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(878046)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述demo中部分语法，如 \"3 in px\", \"delete px[2]\", \"Reflect.deleteProperty\"，在ets文件中不可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsonstringify的replacer函数中数组索引的key类型与ecmascript规范定义不一致",
      children: "JSON.stringify的replacer函数中数组索引的key类型与EcmaScript规范定义不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON.stringify的replacer函数中，对于数组索引key的类型，ArkTS当前实现是采用保持数字类型不变，但是按照EcmaScript规范，应当转为string类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestArray.js\n{\n  let arr = [10, 20, 30, 40];\n  function replacer(key, value) {\n    if (key === '2') {\n        return value * 2;\n    }\n    return value;\n  }\n  console.info(JSON.stringify(arr, replacer));\n  // 实际输出：[10,20,30,40]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规避方案：若业务逻辑依赖于key必须为string类型，可在replacer函数内部对数字类型的key进行显式转换。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestArray.js\n{\n  let arr = [10, 20, 30, 40];\n  function replacer(key, value) {\n    if (typeof key === 'number') {\n      key = String(key);\n    }\n    if (key === '2') {\n        return value * 2;\n    }\n    return value;\n  }\n  console.info(JSON.stringify(arr, replacer));\n  // 实际输出：[10,20,60,40]\n}\n"
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
28803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
182963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437589-3380789e4978bff296de149ba4a4d58a.png");

},
878046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
942887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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