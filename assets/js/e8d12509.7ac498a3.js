"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["231760"], {
525773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_transferabled_object_transferabled_object_md_e8d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-transferabled-object-transferabled-object-md-e8d.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_transferabled_object_transferabled_object_md_e8d_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object/transferabled-object","title":"Transferable对象（NativeBinding对象）","description":"Transferable对象，也称为NativeBinding对象，是指绑定C++对象的JS对象，其主要功能由C++提供，JS对象壳则分配在虚拟机的本地堆（LocalHeap）中。跨线程传输时复用同一个C++对象，相比JS对象的拷贝模式，传输效率更高。因此，可共享或转移的NativeBinding对象被称为Transferable对象。开发者可以自定义Transferable对象，详细示例请参考自定义Native Transferable对象的多线程操作场景。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object/transferabled-object.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Transferable对象（NativeBinding对象）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/transferabled-object","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SharedArrayBuffer对象","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/shared-arraybuffer-object/"},"next":{"title":"Sendable对象简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object/transferabled-object.md


const frontMatter = {
	title: 'Transferable对象（NativeBinding对象）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/transferabled-object',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Transferable对象（NativeBinding对象）';

const assets = {

};



const toc = [{
  "value": "共享模式",
  "id": "共享模式",
  "level": 2
}, {
  "value": "转移模式",
  "id": "转移模式",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "transferable对象nativebinding对象",
        children: "Transferable对象（NativeBinding对象）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Transferable对象，也称为NativeBinding对象，是指绑定C++对象的JS对象，其主要功能由C++提供，JS对象壳则分配在虚拟机的本地堆（LocalHeap）中。跨线程传输时复用同一个C++对象，相比JS对象的拷贝模式，传输效率更高。因此，可共享或转移的NativeBinding对象被称为Transferable对象。开发者可以自定义Transferable对象，详细示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object",
        children: "自定义Native Transferable对象的多线程操作场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "共享模式",
      children: "共享模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果C++实现能够确保线程安全性，则NativeBinding对象的C++部分支持跨线程共享。NativeBinding对象跨线程传输后，只需重新创建JS壳即可桥接到同一个C++对象上，实现C++对象的共享。通信过程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421735)/* ["default"] */.A) + "",
        width: "1199",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常见的共享模式NativeBinding对象包括：应用上下文（ApplicationContext）、窗口上下文（WindowContext）、组件上下文（AbilityContext或ComponentContext）等Context类型对象。这些上下文对象封装了应用程序组件的上下文信息，提供了访问系统服务和资源的能力，使得应用程序组件可以与系统进行交互。获取Context信息的方法可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage",
        children: "获取上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide#%E4%BD%BF%E7%94%A8taskpool%E8%BF%9B%E8%A1%8C%E9%A2%91%E7%B9%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%93%8D%E4%BD%9C",
        children: "使用TaskPool进行频繁数据库操作"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "转移模式",
      children: "转移模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果C++实现包含数据且无法保证线程安全性，则NativeBinding对象的C++部分需要采用转移方式传输。NativeBinding对象跨线程传输后，重新创建JS壳可桥接到C++对象上，但需移除原JS壳与C++对象的绑定关系。通信过程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(689899)/* ["default"] */.A) + "",
        width: "1199",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常见的转移模式NativeBinding对象包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreatepixelmap8",
        children: "PixelMap对象"
      }), "，它可以读取或写入图像数据，获取图像信息，常用于显示图片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里提供了一个跨线程传递PixelMap对象的示例。首先从rawfile文件夹中获取图片资源，然后在子线程中创建PixelMap对象并传递给主线程，具体实现如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\nimport { loadPixelMap } from './pixelMapTest';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  uiContext = this.getUIContext();\n  @State message: string = 'Hello World';\n  @State pixelMap: PixelMap | undefined = undefined;\n\n  private loadImageFromThread(): void {\n    const resourceMgr = this.uiContext?.getHostContext()?.resourceManager;\n    // 此处‘startIcon.png’为media下复制到rawfile文件夹中，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n    resourceMgr?.getRawFd('startIcon.png').then(rawFileDescriptor => {\n      taskpool.execute(loadPixelMap, rawFileDescriptor).then(pixelMap => {\n        if (pixelMap) {\n          this.pixelMap = pixelMap as PixelMap;\n          console.info('Succeeded in creating pixelMap.');\n          // 主线程释放pixelMap。由于子线程返回pixelMap时已调用setTransferDetached，所以此处能够立即释放pixelMap。\n          this.pixelMap.release();\n        } else {\n          console.error('Failed to create pixelMap.');\n        }\n      }).catch((e: BusinessError) => {\n        console.error('taskpool execute loadPixelMap failed. Code: ' + e.code + ', message: ' + e.message);\n      });\n    }).catch(() => {\n      console.error(`Failed to get RawFd`);\n    });\n  }\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          this.loadImageFromThread();\n          this.message = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n\n@Concurrent\nexport async function loadPixelMap(rawFileDescriptor: number): Promise<PixelMap> {\n  // 创建imageSource。\n  const imageSource = image.createImageSource(rawFileDescriptor);\n  // 创建pixelMap。\n  const pixelMap = imageSource.createPixelMapSync();\n  // 释放imageSource。\n  imageSource.release();\n  // 使pixelMap在跨线程传输完成后，脱离原线程的引用。\n  pixelMap.setTransferDetached(true);\n  // 返回pixelMap给主线程。\n  return pixelMap;\n}\n"
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
689899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437579-582c34a1f3f654202b26df8519861cd2.png");

},
421735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797884-ad11ebb54611af10981cc5b05527ad6d.png");

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