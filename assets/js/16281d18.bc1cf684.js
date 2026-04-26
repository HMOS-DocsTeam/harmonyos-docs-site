"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["109857"], {
222363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_update_difference_arkts_v_1_v_2_update_difference_md_162_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-update-difference-arkts-v-1-v-2-update-difference-md-162.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_update_difference_arkts_v_1_v_2_update_difference_md_162_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference/arkts-v1-v2-update-difference","title":"状态管理V1和V2更新机制差异","description":"V1状态管理演进到V2状态管理背景","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference/arkts-v1-v2-update-difference.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"状态管理V1和V2更新机制差异","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-update-difference","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"状态管理原理介绍","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce/"},"next":{"title":"MVVM模式（V1）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference/arkts-v1-v2-update-difference.md


const frontMatter = {
	title: '状态管理V1和V2更新机制差异',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-update-difference',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '状态管理V1和V2更新机制差异';

const assets = {

};



const toc = [{
  "value": "V1状态管理演进到V2状态管理背景",
  "id": "v1状态管理演进到v2状态管理背景",
  "level": 2
}, {
  "value": "状态变量变化自动触发UI更新",
  "id": "状态变量变化自动触发ui更新",
  "level": 2
}, {
  "value": "V1的@Watch和V2的@Monitor差异",
  "id": "v1的watch和v2的monitor差异",
  "level": 2
}, {
  "value": "@Watch同步执行",
  "id": "watch同步执行",
  "level": 3
}, {
  "value": "@Monitor异步执行",
  "id": "monitor异步执行",
  "level": 3
}, {
  "value": "V1状态变量更新和V2状态变量更新差异",
  "id": "v1状态变量更新和v2状态变量更新差异",
  "level": 2
}, {
  "value": "V1组件的更新",
  "id": "v1组件的更新",
  "level": 3
}, {
  "value": "V2组件的更新",
  "id": "v2组件的更新",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "状态管理v1和v2更新机制差异",
        children: "状态管理V1和V2更新机制差异"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1状态管理演进到v2状态管理背景",
      children: "V1状态管理演进到V2状态管理背景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V1使用代理观察数据，创建状态变量时，会同时创建一个数据代理观察者。该观察者可以感知代理变化，但无法精准观测到实际数据变化，V1状态管理存在以下限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态变量不能独立于UI存在，同一个数据被多个视图代理时，其中一个视图的更改不会通知其他视图更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只能感知对象属性第一层的变化，无法做到深度观测和深度监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在更改对象中属性场景下存在冗余更新的问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "装饰器间配合使用限制多，不易用。组件中没有明确状态变量的输入与输出，不利于组件化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述原因，状态管理V2增强了数据的观察能力，使数据本身可观察。更改数据时，会触发相应视图的更新。相较于状态管理V1，状态管理V2有如下优点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态变量独立于UI，更改数据会触发相应视图的更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持对象的深度观测和深度监听，且深度观测机制不影响观测性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持对象中属性级精准更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "装饰器易用性高、拓展性强，在组件中明确输入与输出，有利于组件化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态变量变化自动触发ui更新",
      children: "状态变量变化自动触发UI更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理框架检测到状态变化时会触发UI更新， 状态变量变化包含观察的对象属性或观察到的数组（或其他内置类型）项的变化："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于V1，具有一层观察能力，可观察第一层对象属性的变化、第一层数据项的变化；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于V2，具有深度观察能力，能观察到嵌套对象属性或数组项变化；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面举例说明状态变量在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
        children: "@Component"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "中的修改，触发UI刷新时，V1和V2的差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 如下示例代码以@ObservedV2为例，如果是V1，则对应的是@Observed和@Track。\n@ObservedV2\nclass ObsObjA {\n  @Trace propA: string = 'propA';\n  @Trace obsObjB: ObsObjB = new ObsObjB();\n  constructor(propA: string) {\n    this.propA = propA;\n  }\n}\n\n@ObservedV2\nclass ObsObjB {\n  @Trace propB: string = 'propB';\n}\n\n@ObservedV2\nclass ObsObjC {\n  @Trace propC: string = 'propC';\n  constructor(propC: string) {\n    this.propC = propC;\n  }\n}\n\n// 如下代码是写在@Component或@ComponentV2中。\n// 其中simple是被V1或V2装饰器装饰的状态变量，obsObjA是被V1或V2装饰器装饰的复杂状态变量，arr是被V1或V2装饰器装饰的数组状态变量。\nbuild() {\n  Column() {\n    Text(this.simple);  // 第1行使用简单类型状态变量绑定Text组件\n    Text(JSON.stringify(this.obsObjA));  // 第2行使用复杂对象类型状态变量绑定Text组件\n    Text(this.obsObjA.propA); // 第3行使用复杂对象属性状态变量绑定Text组件\n    Text(this.obsObjA.obsObjB.propB); // 第4行使用嵌套复杂对象属性状态变量绑定Text组件\n    Text(JSON.stringify(this.arr)); // 第5行使用数组类型的状态变量绑定Text组件\n    Text(JSON.stringify(this.arr[0])); // 第6行使用数组第0项的状态变量绑定Text组件\n    Text(JSON.stringify(this.arr[0].propC)); // 第7行使用数组第0项元素的状态变量属性绑定Text组件\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1和V2状态管理框架通过观察状态变量的赋值来触发对应的UI更新，通过如下代码说明V1和V2状态变量更新差异："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('Change state variable')\n  .onClick(() => {\n    // this.simple是V1装饰器或V2装饰器装饰的简单变量，给该变量赋值，不论是V1装饰器变量还是V2装饰器变量，都会触发第1行Text的更新。\n    this.simple = 'Welcome';\n    // this.obsObjA是V1装饰器或V2装饰器装饰的复杂对象变量，给该变量赋值，不论是V1装饰器变量还是V2装饰器变量，都会触发第2、3和4行Text的更新。\n    this.obsObjA = new ObsObjA('obsObjA++');\n    // this.arr是V1装饰器或V2装饰器装饰的数组类型变量，给该变量赋值，不论是V1装饰器变量还是V2装饰器变量，都会触发第5、6和7行Text的更新。\n    this.arr = [new ObsObjC('propC1'), new ObsObjC('propC2')];\n    // 对于V1，如果this.obsObjA是V1装饰器装饰的变量（obsObjA中的属性没有被@Track装饰或者this.obsObjA.propA被@Track装饰），\n    // 给该变量赋值，则第3行的Text会更新； 对于V2，this.obsObjA.propA必须要被V2装饰器（如@Trace）装饰，给该变量赋值，第3行的Text才会更新。\n    this.obsObjA.propA = 'propA3';\n    // 对于V1，只能观察一层的变化，即使this.obsObjA.obsObjB.propB被V1装饰器装饰（@Track），第4行Text不更新;\n    // 对于V2，只要this.obsObjA.obsObjB.propB被V2装饰器装饰（@Trace），第4行的Text就能更新。\n    this.obsObjA.obsObjB.propB = 'propB3';\n    // this.arr被V1装饰器或V2装饰器装饰，给该变量赋值，不论是V1装饰器变量还是V2装饰器变量，都会触发第5和6行的Text更新。\n    this.arr[0] = new ObsObjC('propC3');\n    // 对于V1，this.arr被V1装饰器装饰，由于V1只能观察一层的变化，数组项的属性赋值是第二层的修改，第7行的Text不会更新；\n    // 对于V2，this.arr被V2装饰器装饰，且propC被V2装饰器装饰（@Trace），给该变量赋值，第7行的Text会更新。\n    this.arr[0].propC = 'propC4';\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1的watch和v2的monitor差异",
      children: "V1的@Watch和V2的@Monitor差异"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V1的@Watch和V2的@Monitor详细差异参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor#monitor%E4%B8%8Ewatch%E5%AF%B9%E6%AF%94",
        children: "@Watch与@Monitor的对比"
      }), "。下面通过例子介绍两者差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "watch同步执行",
      children: "@Watch同步执行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1装饰变量赋值，对象属性或数组（Map、Set）项变化，会触发@Watch的同步执行。如果状态变量被修改多次，则@Watch函数会同步执行多次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@State @Watch('onVarNameChange') obsObjA: ObsObjA = new ObsObjA('propANew');\n\nonVarNameChange() {  // @Watch函数在被监听的V1装饰变量obsObjA发生变化时同步执行。\n  console.info('obsObjA.propA change callback'); // 执行顺序3\n}\n\nButton('Change state variable')\n  .onClick(() => {\n    console.info('1'); // 执行顺序1\n    this.obsObjA.propA = 'propA3'; // 执行顺序2\n    console.info('2'); // 执行顺序4\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码中，给this.obsObjA.propA赋值，执行顺序是：打印日志'1'，状态变量赋值，打印日志'obsObjA.propA change callback'，最后打印日志'2'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitor异步执行",
      children: "@Monitor异步执行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2装饰变量赋值，对象属性或数组（Map、Set）项变化，会触发@Monitor的异步执行。如果状态变量被修改多次，则@Monitor函数只会执行一次。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Local arr: Array<ObsObjC> = [new ObsObjC('propC1')];\n\n@Monitor('obsObjA.propA') onChange(mon : IMonitor) { // @Monitor函数在被监听的V2装饰变量obsObjA发生变化时异步执行\n  console.info(`${mon.dirty[0]}`); // 执行顺序4（onClick相关逻辑执行完后，才执行onChange回调）\n}\n\nButton('Change state variable')\n  .onClick(() => {\n    console.info('1'); // 执行顺序1\n    this.obsObjA.propA = 'propA3'; // 执行顺序2\n    console.info('2'); // 执行顺序3\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码中，需要当前事件逻辑执行完成，如onClick执行后，才会执行@Monitor函数。给this.obsObjA.propA赋值，执行顺序是：打印日志'1', 进行状态变量赋值，打印日志'2', 最后执行@Monitor的'onChange'，打印'obsObjA.propA'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1状态变量更新和v2状态变量更新差异",
      children: "V1状态变量更新和V2状态变量更新差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，展示V1组件和V2状态变量更新差异的流程图，相比V1状态管理，V2状态管理在状态变量变化时，会异步标脏组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(202720)/* ["default"] */.A) + "",
        width: "1206",
        height: "757"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "v1组件的更新",
      children: "V1组件的更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤1：事件触发修改V1状态变量，观察V1状态变量的变化；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤2：执行@Watch回调，执行事件中其他逻辑，如修改其他变量；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤3：执行节点标脏，将脏节点放在脏节点列表中，并请求Vsync信号；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤4：更新脏节点列表，更新顺序是，先更新父组件，再更新子组件；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤5: 如果状态变量再次发生变化，就会执行步骤4，步骤4在一个Vsync周期内的迭代次数不会超过3次，第3次迭代后，标脏的节点会加到脏节点列表中，在下一个Vsync到来时进行脏节点更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "v2组件的更新",
      children: "V2组件的更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2状态管理相比V1状态管理，新增异步执行@Computed，@Monitor和节点标脏步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["步骤1：事件触发修改V2状态变量， 抛", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/async-concurrency-overview#promise",
        children: "Promise"
      }), "异步任务；"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤2：执行事件中其他剩余逻辑，如修改其他变量。等待事件逻辑执行完成后（如onClick事件），执行Promise回调；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤3：执行@Computed变量更新；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤4：在@Computed变量更新时，如果@Computed观察到状态变量变化，进入步骤3，否则进入步骤5；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤5：执行@Monitor回调函数；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤6：@Monitor函数回调中如果有状态变量的变化，则进入步骤3， 否则进入步骤7；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤7：执行节点标脏，将脏节点放在脏节点列表中，并请求Vsync信号；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤8：更新脏节点列表，更新顺序是，先更新父组件，再更新子组件；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤9: 在更新过程中，如果状态变量再次发生变化，就会执行步骤8，步骤8在一个Vsync周期中迭代次数不会超过3次，第3次迭代后，标脏的节点会加到脏节点列表中，在下一个Vsync到来时进行脏节点更新。"
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
202720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797942-2df31dda92cceab2f20d7254d86a0731.png");

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