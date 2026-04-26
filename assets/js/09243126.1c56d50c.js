"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["466485"], {
701470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_arkts_runtime_module_arkts_module_side_effects_arkts_module_side_effects_md_092_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-arkts-runtime-module-arkts-module-side-effects-arkts-module-side-effects-md-092.json
var site_docs_arkts_arkts_runtime_arkts_runtime_module_arkts_module_side_effects_arkts_module_side_effects_md_092_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects/arkts-module-side-effects","title":"模块加载副作用及优化","description":"概述","source":"@site/docs/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects/arkts-module-side-effects.md","sourceDirName":"arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects","slug":"/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"模块加载副作用及优化","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-module-side-effects","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于Node-API加载模块","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi/"},"next":{"title":"ArkTS运行时常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects/arkts-module-side-effects.md


const frontMatter = {
	title: '模块加载副作用及优化',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-module-side-effects',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '模块加载副作用及优化';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "ArkTS模块化导致副作用的场景及优化方式",
  "id": "arkts模块化导致副作用的场景及优化方式",
  "level": 2
}, {
  "value": "模块执行顶层代码",
  "id": "模块执行顶层代码",
  "level": 3
}, {
  "value": "修改全局对象",
  "id": "修改全局对象",
  "level": 3
}, {
  "value": "修改应用级ArkUI组件的状态变量信息",
  "id": "修改应用级arkui组件的状态变量信息",
  "level": 3
}, {
  "value": "修改内置全局变量或原型链（ArkTS内禁止修改对象原型与内置方法）",
  "id": "修改内置全局变量或原型链arkts内禁止修改对象原型与内置方法",
  "level": 3
}, {
  "value": "循环依赖",
  "id": "循环依赖",
  "level": 3
}, {
  "value": "延迟加载（lazy import）改变模块执行顺序，可能导致预期的全局变量未定义",
  "id": "延迟加载lazy-import改变模块执行顺序可能导致预期的全局变量未定义",
  "level": 3
}, {
  "value": "通过import路径展开优化性能",
  "id": "通过import路径展开优化性能",
  "level": 2
}, {
  "value": "原理",
  "id": "原理",
  "level": 3
}, {
  "value": "副作用",
  "id": "副作用",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模块加载副作用及优化",
        children: "模块加载副作用及优化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/module-principle",
        children: "ArkTS模块化"
      }), "时，模块的加载和执行可能会引发", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用"
        })
      }), "。副作用是指在模块导入时除了导出功能或对象之外，额外的行为或状态变化，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "这些行为可能影响程序的其他部分，并导致产生非预期的顶层代码执行、全局状态变化、原型链修改、导入内容未定义等问题"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts模块化导致副作用的场景及优化方式",
      children: "ArkTS模块化导致副作用的场景及优化方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模块执行顶层代码",
      children: "模块执行顶层代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用产生场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块在被导入时，整个模块文件中的顶层代码会立即执行，而不仅仅是导出的部分。这意味着，即使只想使用模块中的某些导出内容，任何在顶层作用域中执行的代码也会运行，从而产生副作用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartOne.ets\nconsole.info('Module loaded!'); // 这段代码在导入时会立即执行，可能会导致副作用。\nexport const data = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageOne.ets\nimport { data } from './ModulePartOne'; // 导入时，ModulePartOne.ets中的console.info会执行，产生输出。\nconsole.info('data is ', data);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Module loaded!\ndata is  1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生的副作用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["即使只需要data，console.info(\"Module loaded!\") 仍会运行，导致开发者可能预期只输出data的值，但却额外输出了“Module loaded!”，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "影响输出内容"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化方式1：去除顶层代码，只导出需要的内容，避免不必要的代码执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartTwo.ets\nexport const data = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTwo.ets\nimport { data } from './ModulePartTwo';\nconsole.info('data is ', data);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "data is  1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化方式2：将可能引发副作用的代码放在函数或方法内部，只有在需要时再执行，而不是在模块加载时立即执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartThree.ets\nexport function initialize() {\n  console.info('Module loaded!');\n}\nexport const data = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageThree.ets\nimport { data } from './ModulePartThree';\nconsole.info('data is ', data);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "data is  1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改全局对象",
      children: "修改全局对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用产生场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["顶层代码或导入的模块可能会直接", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作全局变量"
        })
      }), "，改变全局状态，引发副作用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartFour.ets\nexport let data1 = 'data from module';\nglobalThis.someGlobalVar = 100; // 改变了全局状态\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SideEffectModuleFour.ets\nexport let data2 = 'data from side effect module';\nglobalThis.someGlobalVar = 200; // 也改变了全局状态\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModuleUseGlobalVarFour.ets\nimport { data1 } from './ModulePartFour'; // 此时可能预期全局变量someGlobalVar的值为100\nexport function useGlobalVar() {\n  console.info('data1 is ', data1);\n  console.info('globalThis.someGlobalVar is ', globalThis.someGlobalVar); // 此时由于PageFour.ets中加载了SideEffectModuleFour模块，someGlobalVar的值已经被改为200\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageFour.ets（执行入口）\nimport { data1 } from './ModulePartFour'; // 将全局变量someGlobalVar的值改为100\nimport { data2 } from './SideEffectModuleFour'; // 又将全局变量someGlobalVar的值改为200\nimport { useGlobalVar } from './ModuleUseGlobalVarFour';\n\nuseGlobalVar();\nfunction maybeNotCalledAtAll() {\n  console.info('data1 is ', data1);\n  console.info('data2 is ', data2);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "data1 is  data from module\nglobalThis.someGlobalVar is  200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生的副作用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模块加载时直接修改全局变量 globalThis.someGlobalVar 的值，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "会影响其他依赖该变量的模块或代码"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将可能引发副作用的代码放在函数或方法内部，只有在需要时再执行，而不是在模块加载时立即执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartFive.ets\nexport let data1 = 'data from module';\nexport function changeGlobalVar() {\n  globalThis.someGlobalVar = 100;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SideEffectModuleFive.ets\nexport let data2 = 'data from side effect module';\nexport function changeGlobalVar() {\n  globalThis.someGlobalVar = 200;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModuleUseGlobalVarFive.ets\nimport { data1, changeGlobalVar } from './ModulePartFive';\nexport function useGlobalVar() {\n  console.info('data1 is ', data1);\n  changeGlobalVar(); // 在需要的时候执行代码，而不是模块加载时执行。\n  console.info('globalThis.someGlobalVar is ', globalThis.someGlobalVar);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageFive.ets（执行入口）\nimport { data1 } from './ModulePartFive';\nimport { data2 } from './SideEffectModuleFive';\nimport { useGlobalVar } from './ModuleUseGlobalVarFive';\n\nuseGlobalVar();\nfunction maybeNotCalledAtAll() {\n  console.info('data1 is ', data1);\n  console.info('data2 is ', data2);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "data1 is  data from module\nglobalThis.someGlobalVar is  100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改应用级arkui组件的状态变量信息",
      children: "修改应用级ArkUI组件的状态变量信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用产生场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["顶层代码或导入的模块可能会直接", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修改应用级ArkUI组件的状态变量信息"
        })
      }), "，改变全局状态，引发副作用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartSix.ets\nexport let data = 'data from module';\nAppStorage.setOrCreate('SomeAppStorageVar', 200); // 修改应用全局的UI状态\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageSix.ets\nimport { data } from './ModulePartSix'; // 将AppStorage中的SomeAppStorageVar改为200\n\n@Entry\n@Component\nstruct Index {\n  // 开发者可能预期该值为100，但是由于ModulePartSix模块导入，该值已经被修改为200，但开发者可能并不知道值已经被修改\n  @StorageLink('SomeAppStorageVar') message: number = 100;\n  build() {\n    Row() {\n      Column() {\n        Text('test' + this.message)\n          .fontSize(50)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\nfunction maybeNotCalledAtAll() {\n  console.info('data is ', data);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "test200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生的副作用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模块加载时直接修改AppStorage中SomeAppStorageVar的值，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "会影响其他依赖该变量的模块或代码"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI组件的状态变量信息可以通过一些应用级接口修改，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "ArkUI状态管理接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将可能引发副作用的代码放在函数或方法内部，只有在需要时再执行，而不是在模块加载时立即执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartSeven.ets\nexport let data = 'data from module';\nexport function initialize() {\n  AppStorage.setOrCreate('SomeAppStorageVar', 200);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageSeven.ets\nimport { data } from './ModulePartSeven';\n\n@Entry\n@Component\nstruct Index {\n  @StorageLink('SomeAppStorageVar') message: number = 100;\n  build() {\n    Row() {\n      Column() {\n        Text('test' + this.message)\n          .fontSize(50)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\nfunction maybeNotCalledAtAll() {\n  console.info('data is ', data);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "test100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改内置全局变量或原型链arkts内禁止修改对象原型与内置方法",
      children: "修改内置全局变量或原型链（ArkTS内禁止修改对象原型与内置方法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用产生场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为使现代JavaScript特性能够在旧版浏览器或运行环境中运行，第三方库或框架可能会修改内置的全局对象或原型链，从而影响其他代码的执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModifyPrototype.ts\nexport let data = 'data from modifyPrototype';\nArray.prototype.includes = function (value) {\n  return this.indexOf(value) !== -1;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageEight.ets\nimport { data } from './ModifyPrototype'; // 此时修改了Array的原型链\nlet arr = [1, 2, 3, 4];\nconsole.info('arr.includes(1) = ' + arr.includes(1)); // 此时调用的是ModifyPrototype.ts中的Array.prototype.includes方法\nfunction maybeNotCalledAtAll() {\n  console.info('data is ', data);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生的副作用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改内置的全局对象或原型链，可能会影响其他代码运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入可能会修改内置的全局对象或原型链的第三方库时，确认该第三方库的行为是符合预期的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "循环依赖",
      children: "循环依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用产生场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS模块化支持循环依赖，即模块A依赖模块B，同时模块B又依赖模块A。在这种情况下，某些导入的模块可能尚未完全加载，从而导致部分代码在执行时行为异常，产生意外的副作用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ExportA.ets\nimport { b } from './ExportB';\nconsole.info('Module A: ', b);\nexport const a = 'A';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ExportB.ets\nimport { a } from './ExportA';\nconsole.info('Module B: ', a);\nexport const b = 'B';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error message: a is not initialized\nStacktrace:\n    at func_main_0 (b.ets:2:27)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生的副作用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于模块间相互依赖，模块的执行顺序可能导致导出的内容未定义，影响代码的逻辑流，具体报错信息为：“变量名 is not initialized”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["尽量避免模块间的循环依赖，确保模块的加载顺序是明确和可控的，以避免产生意外的副作用。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-cycle",
        children: "@security/no-cycle循环依赖检查工具"
      }), " 可以辅助检查循环依赖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "延迟加载lazy-import改变模块执行顺序可能导致预期的全局变量未定义",
      children: "延迟加载（lazy import）改变模块执行顺序，可能导致预期的全局变量未定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用产生场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
        children: "延迟加载"
      }), "特性可使待加载模块在冷启动阶段不被加载，直至应用程序实际运行过程中需要用到这些模块时，才按需同步加载相关模块，从而缩短应用冷启动耗时。但这也同时会改变模块的执行顺序。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartNine.ets\nexport let data = 'data from module';\nglobalThis.someGlobalVar = 100;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModuleUseGlobalVarNine.ets\nimport lazy { data } from './ModulePartNine';\nconsole.info('globalThis.someGlobalVar', globalThis.someGlobalVar); // 此时由于lazy特性，ModulePartNine模块还未执行，someGlobalVar的值为undefined\nconsole.info('data is ', data); // 使用到ModulePartNine模块的变量，此时ModulePartNine模块执行，someGlobalVar的值变为100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "globalThis.someGlobalVar undefined\ndata is  data from module\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生的副作用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于使用到延迟加载（lazy import）特性，会导致模块变量在使用到时再执行对应的模块，模块中的一些全局变量修改行为也会延迟，可能会导致运行结果不符合预期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将可能引发副作用的代码放在函数或方法内部，只有在需要时再执行，而不是在模块加载时立即执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModulePartTen.ets\nexport let data = 'data from module';\nexport function initialize() {\n  globalThis.someGlobalVar = 100; // 延迟到函数调用时执行\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModuleUseGlobalVarTen.ets\nimport lazy { data, initialize } from './ModulePartTen';\ninitialize(); // 执行初始化函数，初始化someGlobalVar\nconsole.info('globalThis.someGlobalVar is ', globalThis.someGlobalVar); // 此时someGlobalVar一定为预期的值\nconsole.info('data is ', data);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "globalThis.someGlobalVar is  100\ndata is  data from module\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过import路径展开优化性能",
      children: "通过import路径展开优化性能"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "原理",
      children: "原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在import语句中，跳过中间的依赖路径，直接依赖变量对应的模块，即为import路径展开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文将通过示例说明import路径展开优化性能的原理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ets\nimport * as har from \"har\"\nconsole.info(\"har.One is \", har.One); // 这里的One变量是har/src/main/ets/NumberString.ets导出的\n\n// har/Index.ets\nexport * from \"./src/main/ets/OtherModule1\"\nexport * from \"./src/main/ets/OtherModule2\"\nexport * from \"./src/main/ets/Utils\"\nconsole.info(\"har Index.ets execute.\");\n\n// har/src/main/ets/Utils.ets\nexport * from \"./OtherModule3\"\nexport * from \"./OtherModule4\"\nexport * from \"./NumberString\"\nconsole.info(\"har Utils.ets execute.\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har/src/main/ets/NumberString.ets\nexport const One: string = '1';\nconsole.info('har NumberString.ets execute.');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果main.ets只需要依赖har中的NumberString模块，import xxx from \"har\"的写法会导致har整条链路上的模块被解析、执行，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "导致模块解析及执行耗时增加"
          })
        }), "。上述例子中的har/Index、OtherModule1、OtherModule2、Utils、OtherModule3、OtherModule4、NumberString模块均会被解析、执行。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在模块解析阶段会通过深度优先遍历的方式建立变量的绑定关系，main.ets中使用的har.One变量是由har/src/main/ets/NumberString.ets导出的，由于使用了export 的写法，建立变量的绑定关系时需要递归去进行变量名的匹配，从而*导致模块解析耗时增加。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述例子中，会先查找 har/Index.ets 文件。该文件中有多个 export * 语句，因此会依次检查 OtherModule1 和 OtherModule2 是否导出 One 变量。接着，找到 Utils 模块，该模块也有 export * 语句，因此会继续检查 OtherModule3 和 OtherModule4，最终确定 One 变量是从 NumberString 模块导出的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化方式：改为如下的代码写法，跳过中间的依赖路径，直接依赖变量对应的模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageEleven.ets\nimport { One } from 'staticlibrary/src/main/ets/components/NumberString';\nconsole.info('One is ', One);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har/src/main/ets/NumberString.ets\nexport const One: string = '1';\nconsole.info('har NumberString.ets execute.');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "副作用",
      children: "副作用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "副作用产生场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于import路径展开会跳过中间模块的执行，若业务依赖模块的执行顺序，修改后可能会导致业务异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTwelve.ets\nimport { serviceManager } from 'staticlibrary';\n\nserviceManager.print();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { serviceManager } from './src/main/ets/ServiceManagerPartOne';\n\nserviceManager.init();\nexport { serviceManager }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har/src/main/ets/ServiceManagerPartOne.ets\nclass ServiceManager {\n  public inited: boolean = false;\n\n  public init() {\n    this.inited = true;\n  }\n  public print() {\n    if (this.inited) {\n      console.info('ServiceManager is inited.');\n    } else {\n      console.error('ServiceManager is not inited.');\n    }\n  }\n}\nexport let serviceManager: ServiceManager = new ServiceManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行的输出为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ServiceManager is inited.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果进行import路径展开，展开后的代码为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageThirteen.ets\nimport { serviceManager } from 'staticlibrary/src/main/ets/ServiceManagerPartTwo';\n\nserviceManager.print();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har/src/main/ets/ServiceManagerPartTwo.ets\nclass ServiceManager {\n  public inited: boolean = false;\n\n  public init() {\n    this.inited = true;\n  }\n  public print() {\n    if (this.inited) {\n      console.info('ServiceManager is inited.');\n    } else {\n      console.error('ServiceManager is not inited.');\n    }\n  }\n}\nexport let serviceManager: ServiceManager = new ServiceManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行的输出为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ServiceManager is not inited.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "产生的副作用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于har/Index模块中存在顶层代码进行ServiceManager的初始化，如果在main模块中进行import路径展开，将不会执行har/Index模块，从而导致ServiceManager未初始化，可能引起业务异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优化方式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需根据业务需要排查跳过执行顶层代码的影响，并进行相应的修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于上文的示例，可以进行如下修改："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageFourteen.ets\nimport { serviceManager } from 'staticlibrary/src/main/ets/ServiceManagerPartThree';\n\nserviceManager.print();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har/src/main/ets/ServiceManagerPartThree.ets\nclass ServiceManager {\n  public inited: boolean = false;\n\n  public init() {\n    this.inited = true;\n  }\n  public print() {\n    if (this.inited) {\n      console.info('ServiceManager is inited.');\n    } else {\n      console.error('ServiceManager is not inited.');\n    }\n  }\n}\nexport let serviceManager: ServiceManager = new ServiceManager();\n// 在导出的模块执行对应的逻辑。\nserviceManager.init();\n"
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