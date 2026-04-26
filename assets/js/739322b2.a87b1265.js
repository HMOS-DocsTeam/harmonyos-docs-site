"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["658194"], {
268941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_sendable_guide_sendable_guide_md_739_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-sendable-object-sendable-guide-sendable-guide-md-739.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_sendable_guide_sendable_guide_md_739_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide/sendable-guide","title":"Sendable使用场景","description":"Sendable对象在不同并发实例间默认采用引用传递，这种方式比序列化更高效，且不会丢失类成员方法。因此，Sendable能够解决两个关键场景的问题：","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide/sendable-guide.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Sendable使用场景","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sendable-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Sendable对象冻结","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-freeze/"},"next":{"title":"使用TaskPool执行独立的耗时任务","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/independent-time-consuming-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide/sendable-guide.md


const frontMatter = {
	title: 'Sendable使用场景',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sendable-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Sendable使用场景';

const assets = {

};



const toc = [{
  "value": "跨并发实例传输大数据场景",
  "id": "跨并发实例传输大数据场景",
  "level": 2
}, {
  "value": "跨并发实例传递带方法的class实例对象",
  "id": "跨并发实例传递带方法的class实例对象",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "sendable使用场景",
        children: "Sendable使用场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable对象在不同并发实例间默认采用引用传递，这种方式比序列化更高效，且不会丢失类成员方法。因此，Sendable能够解决两个关键场景的问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨并发实例传输大数据（例如达到100KB以上的数据）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨并发实例传递带方法的class实例对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨并发实例传输大数据场景",
      children: "跨并发实例传输大数据场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于跨并发实例序列化的开销随数据量线性增长，因此当传输数据量较大时（100KB的数据传输耗时约为1ms），跨并发实例的拷贝开销会影响应用性能。使用引用传递方式传输对象可提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { taskpool } from '@kit.ArkTS';\nimport { testTypeA, testTypeB, Test } from './sendable';\nimport { BusinessError, emitter } from '@kit.BasicServicesKit';\n \n// 在并发函数中模拟数据处理\n@Concurrent\nasync function taskFunc(obj: Test) {\n  console.info(\"test task res1 is: \" + obj.data1.name + \" res2 is: \" + obj.data2.name);\n}\n \nasync function test() {\n  // 使用taskpool传递数据\n  let a: testTypeA = new testTypeA(\"testTypeA\");\n  let b: testTypeB = new testTypeB(\"testTypeB\");\n  let obj: Test = new Test(a, b);\n  let task: taskpool.Task = new taskpool.Task(taskFunc, obj);\n  await taskpool.execute(task);\n}\n \n@Concurrent\nfunction SensorListener() {\n  // 监听逻辑\n  // ...\n}\n \n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Text(\"Listener task\")\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          let sensorTask = new taskpool.LongTask(SensorListener);\n          emitter.on({ eventId: 0 }, (data) => {\n            // Do something here\n            console.info(`Receive ACCELEROMETER data: {${data.data?.x}, ${data.data?.y}, ${data.data?.z}}`);\n          });\n          taskpool.execute(sensorTask).then(() => {\n            console.info(\"Add listener of ACCELEROMETER success\");\n          }).catch((e: BusinessError) => {\n            // Process error\n          })\n        })\n      Text(\"Data processing task\")\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          test();\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// sendable.ets\n// 将数据量较大的数据在Sendable class中组装\n@Sendable\nexport class testTypeA {\n  name: string = \"A\";\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Sendable\nexport class testTypeB {\n  name: string = \"B\";\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Sendable\nexport class Test {\n  data1: testTypeA;\n  data2: testTypeB;\n  constructor(arg1: testTypeA, arg2: testTypeB) {\n    this.data1 = arg1;\n    this.data2 = arg2;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨并发实例传递带方法的class实例对象",
      children: "跨并发实例传递带方法的class实例对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在序列化传输实例对象时，会丢失方法。因此，若需调用实例方法，应使用引用传递。处理数据时，若需解析数据，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/ason-parsing-generation",
        children: "ASON工具"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { taskpool, ArkTSUtils } from '@kit.ArkTS';\nimport { SendableTestClass, ISendable } from './sendable';\n \n// 在并发函数中模拟数据处理\n@Concurrent\nasync function taskFunc(sendableObj: SendableTestClass) {\n  console.info(\"SendableTestClass: name is: \" + sendableObj.printName() + \", age is: \" + sendableObj.printAge() + \", sex is: \" + sendableObj.printSex());\n  sendableObj.setAge(28);\n  console.info(\"SendableTestClass: age is: \" + sendableObj.printAge());\n \n  // 解析sendableObj.arr数据生成JSON字符串\n  let str = ArkTSUtils.ASON.stringify(sendableObj.arr);\n  console.info(\"SendableTestClass: str is: \" + str);\n \n  // 解析该数据并生成ISendable数据\n  let jsonStr = '{\"name\": \"Alexa\", \"age\": 23, \"sex\": \"female\"}';\n  let obj = ArkTSUtils.ASON.parse(jsonStr) as ISendable;\n  console.info(\"SendableTestClass: type is: \" + typeof obj);\n  console.info(\"SendableTestClass: name is: \" + (obj as object)?.[\"name\"]); // 输出: 'Alexa'\n  console.info(\"SendableTestClass: age is: \" + (obj as object)?.[\"age\"]); // 输出: 23\n  console.info(\"SendableTestClass: sex is: \" + (obj as object)?.[\"sex\"]); // 输出: 'female'\n}\nasync function test() {\n  // 使用taskpool传递数据\n  let obj: SendableTestClass = new SendableTestClass();\n  let task: taskpool.Task = new taskpool.Task(taskFunc, obj);\n  await taskpool.execute(task);\n}\n \n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n \n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          test();\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// sendable.ets\n// 定义模拟类SendableTestClass，模仿开发过程中需传递带方法的class\nimport { lang, collections } from '@kit.ArkTS'\n\nexport type ISendable = lang.ISendable;\n\n@Sendable\nexport class SendableTestClass {\n  name: string = 'John';\n  age: number = 20;\n  sex: string = \"man\";\n  arr: collections.Array<number> = new collections.Array<number>(1, 2, 3);\n  constructor() {\n  }\n  setAge(age: number) : void {\n    this.age = age;\n  }\n\n  printName(): string {\n    return this.name;\n  }\n\n  printAge(): number {\n    return this.age;\n  }\n\n  printSex(): string {\n    return this.sex;\n  }\n}\n"
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