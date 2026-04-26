"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["493751"], {
778176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_arraybuffer_object_arraybuffer_object_md_857_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-arraybuffer-object-arraybuffer-object-md-857.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_arraybuffer_object_arraybuffer_object_md_857_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object/arraybuffer-object","title":"ArrayBuffer对象","description":"ArrayBuffer包含两部分：底层存储数据的Native内存区域，以及封装操作的JS对象壳。JS对象壳分配在虚拟机的本地堆（LocalHeap）中。跨线程传递时，JS对象壳需要序列化和反序列化拷贝传递，而Native内存区域可以通过拷贝或转移的方式传递。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object/arraybuffer-object.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ArrayBuffer对象","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arraybuffer-object","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"普通对象","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/normal-object/"},"next":{"title":"SharedArrayBuffer对象","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/shared-arraybuffer-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object/arraybuffer-object.md


const frontMatter = {
	title: 'ArrayBuffer对象',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arraybuffer-object',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArrayBuffer对象';

const assets = {

};



const toc = [{
  "value": "ArrayBuffer拷贝传输方式",
  "id": "arraybuffer拷贝传输方式",
  "level": 2
}, {
  "value": "ArrayBuffer转移传输方式",
  "id": "arraybuffer转移传输方式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arraybuffer对象",
        children: "ArrayBuffer对象"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayBuffer包含两部分：底层存储数据的Native内存区域，以及封装操作的JS对象壳。JS对象壳分配在虚拟机的本地堆（LocalHeap）中。跨线程传递时，JS对象壳需要序列化和反序列化拷贝传递，而Native内存区域可以通过拷贝或转移的方式传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native内存使用拷贝方式（递归遍历）传输时，传输后两个线程可以独立访问ArrayBuffer。此方式需要重建JS壳和拷贝Native内存，传输效率较低。通信过程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(161581)/* ["default"] */.A) + "",
        width: "944",
        height: "393"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native内存使用转移方式传输时，传输后原线程将无法使用此ArrayBuffer对象。跨线程时只需重建JS壳，Native内存无需拷贝，从而提高效率。通信过程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273692)/* ["default"] */.A) + "",
        width: "944",
        height: "366"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayBuffer可以用来表示图片等资源，在应用开发中，处理图片（如调整亮度、饱和度、大小等）会比较耗时，为了避免长时间阻塞UI主线程，可以将图片传递到子线程中进行处理。采用转移方式传递ArrayBuffer可提高传输性能，但原线程将无法再访问该ArrayBuffer对象。如果两个线程都需要访问该对象，只能采用拷贝方式。反之，建议采用转移方式以提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下将通过具体的代码案例分别介绍拷贝和转移两种方式，实现图片跨ArkTS线程传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arraybuffer拷贝传输方式",
      children: "ArrayBuffer拷贝传输方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，TaskPool传递ArrayBuffer数据时，默认采用转移方式。通过调用setTransferList()接口，可以指定部分数据的传递方式为转移方式，其他部分数据可以切换为拷贝方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先，实现一个处理ArrayBuffer的接口，该接口在Task中执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后，通过拷贝方式将ArrayBuffer数据传递到Task中，并进行处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后，UI主线程接收到Task执行完毕后返回的ArrayBuffer数据，进行拼接并展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 在Task执行的处理函数，用于处理ArrayBuffer数据\n@Concurrent\nfunction adjustImageValue(arrayBuffer: ArrayBuffer): ArrayBuffer {\n  // 对arrayBuffer进行操作，返回值默认转移\n  return arrayBuffer;\n}\n\n/*\n * 创建一个Task，用于将ArrayBuffer传入Task执行\n * isParamsByTransfer用于控制ArrayBuffer是“拷贝”还是“转移”传递\n */\nfunction createImageTask(arrayBuffer: ArrayBuffer, isParamsByTransfer: boolean): taskpool.Task {\n  let task: taskpool.Task = new taskpool.Task(adjustImageValue, arrayBuffer);\n  if (!isParamsByTransfer) {\n    // 传递空数组[]，全部arrayBuffer参数传递均采用拷贝方式\n    task.setTransferList([]);\n  }\n  return task;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // 创建待处理的ArrayBuffer，并按taskNum进行切分\n          let taskNum = 4;\n          let arrayBuffer = new ArrayBuffer(1024 * 1024);\n          let taskPoolGroup = new taskpool.TaskGroup();\n          // 创建taskNum个Task\n          for (let i: number = 0; i < taskNum; i++) {\n            let arrayBufferSlice: ArrayBuffer =\n              arrayBuffer.slice(arrayBuffer.byteLength / taskNum * i, arrayBuffer.byteLength / taskNum * (i + 1));\n            // 使用拷贝方式传入ArrayBuffer，所以isParamsByTransfer为false\n            taskPoolGroup.addTask(createImageTask(arrayBufferSlice, false));\n          }\n          // 执行Task，UI主线程接收处理完成后的结果\n          taskpool.execute(taskPoolGroup).then((data) => {\n            // 将各Task返回的ArrayBuffer数据进行拼接\n          }).catch((e: BusinessError) => {\n            console.error(e.message);\n          })\n          // ...\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arraybuffer转移传输方式",
      children: "ArrayBuffer转移传输方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在TaskPool中，传递ArrayBuffer数据时，默认使用转移方式，原线程将无法再使用已传输给子线程的ArrayBuffer。 在上文示例的基础上去除task.setTransferList接口调用，即在createImageTask的第二个参数传入true，就可以实现转移方式的传输。"
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
161581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437577-f398d0c88db7bf4d072a1f4bb54b8a81.png");

},
273692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957532-49dcd770a410ebe348c08905da7618c7.png");

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