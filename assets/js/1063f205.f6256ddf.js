"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["249765"], {
765162(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_collections_introduction_arkts_collections_introduction_md_106_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-sendable-object-arkts-collections-introduction-arkts-collections-introduction-md-106.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_collections_introduction_arkts_collections_introduction_md_106_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction/arkts-collections-introduction","title":"共享容器","description":"ArkTS容器集","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction/arkts-collections-introduction.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"共享容器","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-collections-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ASON解析与生成","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/ason-parsing-generation/"},"next":{"title":"共享模块","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction/arkts-collections-introduction.md


const frontMatter = {
	title: '共享容器',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-collections-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '共享容器';

const assets = {

};



const toc = [{
  "value": "ArkTS容器集",
  "id": "arkts容器集",
  "level": 2
}, {
  "value": "共享容器与原生API方法的行为差异对比",
  "id": "共享容器与原生api方法的行为差异对比",
  "level": 2
}, {
  "value": "Array",
  "id": "array",
  "level": 3
}, {
  "value": "ArrayBuffer",
  "id": "arraybuffer",
  "level": 3
}, {
  "value": "TypedArray（以Int8Array为例）",
  "id": "typedarray以int8array为例",
  "level": 3
}, {
  "value": "Map",
  "id": "map",
  "level": 3
}, {
  "value": "Set",
  "id": "set",
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
    p: "p",
    pre: "pre",
    t: "t",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "共享容器",
        children: "共享容器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts容器集",
      children: "ArkTS容器集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS共享容器（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections/arkts-apis-arkts-collections",
        children: "@arkts.collections (ArkTS容器集)"
      }), "）是一种在并发实例间共享传输的容器类，用于并发场景下的高性能数据传递。它的功能与ECMAScript 262规范定义的容器类似，但存在部分差异，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%85%B1%E4%BA%AB%E5%AE%B9%E5%99%A8%E4%B8%8E%E5%8E%9F%E7%94%9Fapi%E6%96%B9%E6%B3%95%E7%9A%84%E8%A1%8C%E4%B8%BA%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94",
        children: "共享容器与原生API方法的行为差异对比"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS共享容器在多个并发实例间传递时，默认采用引用传递，允许多个并发实例操作同一容器实例。此外，还支持拷贝传递，即每个并发实例拥有独立的ArkTS容器实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS共享容器不是线程安全的，内部使用了fail-fast（快速失败）机制，即当检测到多个并发实例同时对容器进行结构性修改时，会触发异常。因此，在多线程场景下修改容器内属性时，开发者需要使用ArkTS提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction",
        children: "异步锁"
      }), "机制保证ArkTS容器的安全访问。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS共享容器包含如下几种：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array",
        children: "Array"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-map/arkts-apis-arkts-collections-map",
        children: "Map"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-set/arkts-apis-arkts-collections-set",
        children: "Set"
      }), "、TypedArray（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int8array/arkts-apis-arkts-collections-int8array",
        children: "Int8Array"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint8array/arkts-apis-arkts-collections-uint8array",
        children: "Uint8Array"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int16array/arkts-apis-arkts-collections-int16array",
        children: "Int16Array"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint16array/arkts-apis-arkts-collections-uint16array",
        children: "Uint16Array"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int32array/arkts-apis-arkts-collections-int32array",
        children: "Int32Array"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint32array/arkts-apis-arkts-collections-uint32array",
        children: "Uint32Array"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint8clampedarray/arkts-apis-arkts-collections-uint8clampedarray",
        children: "Uint8ClampedArray"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-float32array/arkts-apis-arkts-collections-float32array",
        children: "Float32Array"
      }), "）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-arraybuffer/arkts-apis-arkts-collections-arraybuffer",
        children: "ArrayBuffer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-bitvector/arkts-apis-arkts-collections-bitvector",
        children: "BitVector"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-concatarray/arkts-apis-arkts-collections-concatarray",
        children: "ConcatArray"
      }), "，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections/arkts-apis-arkts-collections",
        children: "@arkts.collections (ArkTS容器集)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "容器集使用示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArkTSUtils, collections, taskpool } from '@kit.ArkTS';\n\n@Concurrent\nasync function add(arr: collections.Array<number>, lock: ArkTSUtils.locks.AsyncLock) {\n await lock.lockAsync(() => {  // 如果不添加异步锁，任务会因为数据竞争冲突，导致抛异常失败\n   arr[0]++;\n })\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let taskGroup = new taskpool.TaskGroup();\n          let lock = new ArkTSUtils.locks.AsyncLock();\n          let arr = collections.Array.create<number>(1, 0);\n          let count = 1000;\n          let num = count;\n          while (num--) {\n            taskGroup.addTask(add, arr, lock);\n          }\n          taskpool.execute(taskGroup).then(() => {\n            console.info(`Return success: ${arr[0]} === ${count}`);\n          }).catch((e: Error) => {\n            console.error(\"Return error.\");\n          })\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "共享容器与原生api方法的行为差异对比",
      children: "共享容器与原生API方法的行为差异对比"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS提供了Sendable数据相关的共享容器集，接口行为与原生API存在部分差异，具体见下文对比。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(138392)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS共享容器的类型与ECMAScript 262规范定义的原生容器类型不同，因此使用原生容器Array的isArray()方法判断collections.Array实例对象会返回false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS共享容器采用引用传递方式跨线程传递，与原生容器相比效率更高。如果需要跨线程传输大量数据，建议使用ArkTS共享容器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "array",
      children: "Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array#from",
        children: "collections.Array.from"
      }), "方法将原生容器Array转换为ArkTS Array容器；支持通过原生容器Array的from方法将 ArkTS Array容器转换为原生容器Array。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原生API方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS容器集方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否有行为差异"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "在ArkTS容器中的差异表现"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly length: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为了防止undefined扩散，不允许设置length。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new(arrayLength ?: number): any[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static create(arrayLength: number, initialValue: T): Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为了防止undefined扩散，构造函数中必须提供一个初始值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["new ", (0,jsx_runtime.jsx)(_components.t, {
              children: "(arrayLength: number): T[]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构造时传入的数据必须为Sendable类型，否则将导致编译错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["new ", (0,jsx_runtime.jsx)(_components.t, {
              children: "(...items: T[]): T[]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor(first: T, ...left: T[])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为了防止undefined扩散，构造函数中必须提供一个初始值，继承场景下，无法调用该函数进行对象构造。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from<T>(arrayLike: ArrayLike<T>): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static from<T>(arrayLike: ArrayLike<T>): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from<T, U>(iterable: Iterable<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static from<U, T>(arrayLike: ArrayLike<U>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterable<U>, mapFn: ArrayFromMapFn<U, T>): Array<T>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop(): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop(): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(...items: T[]): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(...items: T[]): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "concat(...items: ConcatArray<T>[]): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "concat(...items: ConcatArray<T>[]): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "concat(...items: (T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ConcatArray<T>)[]): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "concat(...items: ConcatArray<T>[]): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "join(separator?: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "join(separator?: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shift(): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shift(): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slice(start?: number, end?: number): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "slice(start?: number, end?: number): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sort(compareFn?: (a: T, b: T) => number): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sort(compareFn?: (a: T, b: T) => number): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. 继承场景下，无法获得实际类型的返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unshift(...items: T[]): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unshift(...items: T[]): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indexOf(searchElement: T, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "indexOf(searchElement: T, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index: number, array: Array<T>) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map<U>(callbackFn: (value: T, index: number, array: Array<T>) => U): Array<U>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "filter(predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduce(callbackFn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduce<U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[n: number]: T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[index: number]: T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "findIndex(predicate: (value: T, index: number, obj: Array<T>) => boolean): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill(value: T, start?: number, end?: number): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fill(value: T, start?: number, end?: number): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. 继承场景下，无法获得实际类型的返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[number, T]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[number, T]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includes(searchElement: T, fromIndex?: number): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "includes(searchElement: T, fromIndex?: number): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "at(index: number): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "at(index: number): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isArray(arg: any): arg is any[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static isArray(value: Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null): boolean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "of<T>(...items: T[]): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static of<T>(...items: T[]): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyWithin(target: number, start: number, end?: number): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copyWithin(target: number, start: number, end?: number): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastIndexOf(searchElement: T, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lastIndexOf(searchElement: T, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "some(predicate: ArrayPredicateFn<T, Array<T>>): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2.ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight(callbackFn: ArrayReduceCallback<T, T, Array<T>>): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight<U = T>(callbackFn: ArrayReduceCallback<U, T, Array<T>>, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reverse(): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reverse(): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "toString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(predicate: (value: T, index: number, obj: Array<T>) => boolean): T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "splice(start: number, deleteCount: number, ...items: T[]): T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "splice(start: number, deleteCount: number, ...items: T[]): Array<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "every(predicate: ArrayPredicateFn<T, Array<T>>): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toLocaleString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "toLocaleString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arraybuffer",
      children: "ArrayBuffer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原生API方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS容器集方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否有行为差异"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "在ArkTS容器中的差异表现"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly byteLength: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly byteLength: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slice(begin: number, end?: number): ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "slice(begin: number, end?: number): ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new(byteLength: number): ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor(byteLength: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typedarray以int8array为例",
      children: "TypedArray（以Int8Array为例）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int8array/arkts-apis-arkts-collections-int8array#from-1",
        children: "collections.Int8Array.from"
      }), "方法将原生容器Int8Array转换为ArkTS Int8Array容器；也支持通过原生容器 Int8Array的from方法将ArkTS Int8Array容器转换为原生容器Int8Array。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原生API方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS容器集方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否有行为差异"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "在ArkTS容器中的差异表现"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly buffer: ArrayBufferLike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly buffer: ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly byteLength: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly byteLength: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly byteOffset: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly byteOffset: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly length: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly length: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly BYTES_PER_ELEMENT: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static readonly BYTES_PER_ELEMENT: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyWithin(target: number, start: number, end?: number): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copyWithin(target: number, start: number, end?: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "every(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "every(predicate: TypedArrayPredicateFn<number, Int8Array>): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill(value: number, start?: number, end?: number): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fill(value: number, start?: number, end?: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter(predicate: (value: number, index: number, array: Int8Array) => any, thisArg?: any): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "filter(predicate: TypedArrayPredicateFn<number, Int8Array>): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find(predicate: TypedArrayPredicateFn<number, Int8Array>): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "findIndex(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "findIndex(predicate: TypedArrayPredicateFn<number, Int8Array>): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: number, index: number, array: Int8Array) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indexOf(searchElement: number, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "indexOf(searchElement: number, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "join(separator?: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "join(separator?: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "map(callbackfn: (value: number, index: number, array: Int8Array) => number, thisArg?: any): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map(callbackFn: TypedArrayForEachCallback<number, Int8Array>): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduce(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduce(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>, initialValue: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Int8Array>, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reverse(): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reverse(): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set(array: ArrayLike<number>, offset?: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set(array: ArrayLike<number>, offset?: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slice(start?: number, end?: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "slice(start?: number, end?: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "some(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "some(predicate: TypedArrayPredicateFn<number, Int8Array>): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sort(compareFn?: (a: number, b: number) => number): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sort(compareFn?: TypedArrayCompareFn<number>): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. 继承场景下，无法获得实际类型的返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subarray(begin?: number, end?: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "subarray(begin?: number, end?: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[index: number]: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[index: number]: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[number, number]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[number, number]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includes(searchElement: number, fromIndex?: number): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "includes(searchElement: number, fromIndex?: number): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "at(index: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "at(index: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new(length: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor(length: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new(array: ArrayLike<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBufferLike): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor(array: ArrayLike<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from(arrayLike: ArrayLike<number>): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static from(arrayLike: ArrayLike<number>): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "of(...items: number[]): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static of(...items: number[]): Int8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "toString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toLocaleString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "toLocaleString(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastIndexOf(searchElement: number, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lastIndexOf(searchElement: number, fromIndex?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Int8Array>): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Int8Array>, initialValue: U): U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "map",
      children: "Map"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原生API方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS容器集方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否有行为差异"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "在ArkTS容器中的差异表现"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly size: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly size: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历或访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clear(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历或访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete(key: K): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete(key: K): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历或访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: K): V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: K): V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "has(key: K): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "has(key: K): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set(key: K, value: V): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set(key: K, value: V): Map<K, V>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[K, V]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[K, V]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<K>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<K>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<V>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<V>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new <K, V>(entries?: readonly (readonly [K, V])[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null): Map<K, V>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor(entries?: readonly (readonly [K, V])[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set",
      children: "Set"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原生API方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS容器集方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否有行为差异"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "在ArkTS容器中的差异表现"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readonly size: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readonly size: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sendable类和接口中不允许使用计算属性名称(arkts-sendable-computed-prop-name)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "add(value: T): this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add(value: T): Set<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clear(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete(value: T): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete(value: T): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, value2: T, set: Set<T>) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。  2. ArkTS不支持this，因此不支持thisArg参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "has(value: T): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "has(value: T): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许在遍历、访问过程中进行元素的增、删、改操作，否则会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[T, T]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries(): IterableIterator<[T, T]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys(): IterableIterator<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values(): IterableIterator<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sendable类和接口中不允许使用计算属性名称(arkts-sendable-computed-prop-name)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "new <T = any>(values?: readonly T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null): Set<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constructor(values?: readonly T[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null)"
          })]
        })]
      })]
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
138392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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