"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["733773"], {
225913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_multi_level_gesture_arkts_gesture_events_multi_level_gesture_md_b3e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-support-gesture-arkts-gesture-events-multi-level-gesture-arkts-gesture-events-multi-level-gesture-md-b3e.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_multi_level_gesture_arkts_gesture_events_multi_level_gesture_md_b3e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture/arkts-gesture-events-multi-level-gesture","title":"多层级手势事件","description":"多层级手势事件指父子组件嵌套时，父子组件均绑定了手势或事件。在该场景下，手势或者事件的响应受到多个因素的影响，相互之间发生传递和竞争，容易出现预期外的响应。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture/arkts-gesture-events-multi-level-gesture.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"多层级手势事件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-multi-level-gesture","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组合手势","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures/"},"next":{"title":"手势冲突处理","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture/arkts-gesture-events-multi-level-gesture.md


const frontMatter = {
	title: '多层级手势事件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-multi-level-gesture',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '多层级手势事件';

const assets = {

};



const toc = [{
  "value": "默认多层级手势事件",
  "id": "默认多层级手势事件",
  "level": 2
}, {
  "value": "触摸事件",
  "id": "触摸事件",
  "level": 3
}, {
  "value": "手势与事件",
  "id": "手势与事件",
  "level": 3
}, {
  "value": "自定义控制的多层级手势事件",
  "id": "自定义控制的多层级手势事件",
  "level": 2
}, {
  "value": "触摸热区对手势和事件的控制",
  "id": "触摸热区对手势和事件的控制",
  "level": 3
}, {
  "value": "触摸测试对手势和事件的控制",
  "id": "触摸测试对手势和事件的控制",
  "level": 3
}, {
  "value": "绑定手势方法对手势的控制",
  "id": "绑定手势方法对手势的控制",
  "level": 3
}, {
  "value": "OverlayManager的事件透传",
  "id": "overlaymanager的事件透传",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "多层级手势事件",
        children: "多层级手势事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多层级手势事件指父子组件嵌套时，父子组件均绑定了手势或事件。在该场景下，手势或者事件的响应受到多个因素的影响，相互之间发生传递和竞争，容易出现预期外的响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章主要介绍了多层级手势事件的默认响应顺序，以及如何通过设置相关属性影响多层级手势事件的响应顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "默认多层级手势事件",
      children: "默认多层级手势事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸事件",
      children: "触摸事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch",
        children: "触摸事件"
      }), "（onTouch事件）是所有手势组成的基础，包括Down、Move、Up、Cancel四种类型。手势均由触摸事件组成，例如，点击为Down和Up，滑动为Down和一系列Move及Up。触摸事件具有以下特殊性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.监听了onTouch事件的组件，在手指落下被触摸时均会收到onTouch事件的回调，被触摸受到触摸热区和触摸控制影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.onTouch事件的回调是闭环的。若一个组件收到了手指Id为0的Down事件，后续也会收到手指Id为0的Move事件和Up事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.onTouch事件的回调是一致的。若一个组件收到了手指Id为0的Down事件，但未收到手指Id为1的Down事件，则后续只会收到手指Id为0的touch事件，不会收到手指Id为1的后续touch事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于一般的容器组件（例如：Column），父子组件之间onTouch事件能够同时触发，兄弟组件之间onTouch事件根据布局进行触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column().id('ComponentB').onTouch(() => {})\n  Column().id('ComponentC').onTouch(() => {})\n}.id('ComponentA').onTouch(() => {})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件B和组件C作为组件A的子组件，当触摸到组件B或者组件C时，组件A也会被触摸到。onTouch事件允许多个组件同时触发，因此，当触摸组件B时，会触发组件A和组件B的onTouch回调，不会触发组件C的onTouch回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当触摸组件C时，会触发组件A和组件C的onTouch回调，不触发组件B的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特殊的容器组件，如Stack等组件，由于子组件之间存在着堆叠关系，子组件的布局也存在相互遮盖关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所以，父子组件之间onTouch事件能够同时触发，兄弟组件之间onTouch事件会存在遮盖关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack() {\n  Column().id('ComponentB').onTouch(() => {})\n  Column().id('ComponentC').onTouch(() => {})\n}.id('Stack A').onTouch(() => {})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件B和组件C作为Stack A的子组件，组件C覆盖在组件B上。当触摸到组件B或者组件C时，Stack A也会被触摸到。onTouch事件允许多个组件同时触发，因此，当触摸组件B和组件C的重叠区域时，会触发Stack A和组件C的onTouch回调，不会触发组件B的onTouch回调（组件B被组件C遮盖）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手势与事件",
      children: "手势与事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了触摸事件（onTouch事件）外的所有手势与事件，均是通过基础手势或者组合手势实现的。例如，拖拽事件是由长按手势和滑动手势组成的一个顺序手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在未显式声明的情况下，同一时间，一根手指对应的手势组中只会有一个手势获得成功从而触发所设置的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，除非显式声明允许多个手势同时成功，同一时间只会有一个手势响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应优先级遵循以下条件："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.当父子组件均绑定同一类手势时，子组件优先于父组件触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.当一个组件绑定多个手势时，先达到手势触发条件的手势优先触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column().id('ComponentB').gesture(TapGesture({ count: 1 }))\n}.id('ComponentA').gesture(TapGesture({ count: 1 }))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当父组件和子组件均绑定点击手势时，子组件的优先级高于父组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，当在B组件上进行点击时，组件B所绑定的TapGesture的回调会被触发，而组件A所绑定的TapGesture的回调不会被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column()\n  .id('ComponentA')\n  .gesture(\n    GestureGroup(\n      GestureMode.Exclusive,\n      TapGesture({count: 1}),\n      PanGesture({distance: 5})\n    )\n  )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件A上绑定了由点击和滑动手势组成的互斥手势组时，先达到触发条件的手势触发对应的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若使用者做了一次点击操作，则响应点击对应的回调。若使用者进行了一次滑动操作并且滑动距离达到了阈值，则响应滑动对应的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义控制的多层级手势事件",
      children: "自定义控制的多层级手势事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过设置属性，控制默认的多层级手势事件竞争流程，更好地实现手势事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前，通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target",
        children: "触摸热区"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior",
        children: "触摸测试"
      }), "可以控制Touch事件的分发，从而可以影响到onTouch事件和手势的响应。而绑定手势方法属性可以控制手势的竞争从而影响手势的响应，但不能影响到onTouch事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸热区对手势和事件的控制",
      children: "触摸热区对手势和事件的控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target#responseregion",
        children: "responseRegion"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target#mouseresponseregion10",
        children: "mouseResponseRegion"
      }), "属性可以设置组件的触摸热区。从API version 22开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-touch-target/ts-universal-attributes-touch-target#responseregionlist22",
        children: "responseRegionList"
      }), "设置组件的触摸热区。触摸热区范围可以超出或者小于组件的布局范围。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column()\n    .id('ComponentB')\n    .onTouch(() => {})\n    .gesture(TapGesture({count: 1}))\n    .responseRegion([rect1, rect2, rect3])\n}\n.id('ComponentA')\n.onTouch(() => {})\n.gesture(TapGesture({count: 1}))\n.responseRegion([rect4])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件A绑定了.responseRegion({Rect4})的属性后，所有落在Rect4区域范围的触摸事件和手势可被组件A对应的回调响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件B绑定了.responseRegion({Rect1, Rect2, Rect3})的属性后，所有落在Rect1,Rect2和Rect3区域范围的触摸事件和手势可被组件B对应的回调响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当绑定了responseRegion后，手势与事件的响应区域范围将以所绑定的区域范围为准，而不是以布局区域为准，可能出现布局相关区域不响应手势与事件的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，responseRegion属性支持由多个Rect组成的数组作为入参，以支持更多开发需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触摸测试对手势和事件的控制",
      children: "触摸测试对手势和事件的控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior#hittestbehavior",
        children: "hitTestBehavior"
      }), "属性可以实现在复杂的多层级场景下，一些组件能够响应手势和事件，而一些组件不能响应手势和事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column()\n    .id('ComponentB')\n    .onTouch(() => {})\n    .gesture(TapGesture({count: 1}))\n\n  Column() {\n    Column()\n      .id('ComponentD')\n      .onTouch(() => {})\n      .gesture(TapGesture({count: 1}))\n  }\n  .id('ComponentC')\n  .onTouch(() => {})\n  .gesture(TapGesture({count: 1}))\n  .hitTestBehavior(HitTestMode.Block)\n}\n.id('ComponentA')\n.onTouch(() => {})\n.gesture(TapGesture({count: 1}))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HitTestMode.Block自身会响应触摸测试，阻塞子节点和兄弟节点的触摸测试，从而导致子节点和兄弟节点的onTouch事件和手势均无法触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件C未设置hitTestBehavior时，点击组件D区域，组件A、组件C和组件D的onTouch事件会触发，组件D的点击手势会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件C设置了hitTestBehavior为HitTestMode.Block时，点击组件D区域，组件A和组件C的onTouch事件会触发，组件D的onTouch事件未触发。同时，由于组件D的点击手势因为被阻塞而无法触发，组件C的点击手势会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack() {\n  Column()\n    .id('ComponentB')\n    .onTouch(() => {})\n    .gesture(TapGesture({count: 1}))\n\n  Column()\n    .id('ComponentC')\n    .onTouch(() => {})\n    .gesture(TapGesture({count: 1}))\n    .hitTestBehavior(HitTestMode.Transparent)\n}\n.id('Stack A')\n.onTouch(() => {})\n.gesture(TapGesture({count: 1}))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HitTestMode.Transparent自身响应触摸测试，不会阻塞兄弟节点的触摸测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件C未设置hitTestBehavior时，点击组件B和组件C的重叠区域时，Stack A和组件C的onTouch事件会触发，组件C的点击事件会触发，组件B的onTouch事件和点击手势均不触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "而当组件C设置hitTestBehavior为HitTestMode.Transparent时，点击组件B和组件C的重叠区域，组件A和组件C不受到影响与之前一致，组件A和组件C的onTouch事件会触发，组件C的点击手势会触发。而组件B因为组件C设置了HitTestMode.Transparent，组件B也收到了Touch事件，从而组件B的onTouch事件触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column()\n    .id('ComponentB')\n    .onTouch(() => {})\n    .gesture(TapGesture({count: 1}))\n}\n.id('ComponentA')\n.onTouch(() => {})\n.gesture(TapGesture({count: 1}))\n.hitTestBehavior(HitTestMode.None)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HitTestMode.None自身不响应触摸测试，不会阻塞子节点和兄弟节点的触摸控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件A未设置hitTestBehavior时，点击组件B区域时，组件A和组件B的onTouch事件均会触发，组件B的点击手势会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件A设置hitTestBehavior为HitTestMode.None时，点击组件B区域时，组件B的onTouch事件触发，而组件A的onTouch事件无法触发，组件B的点击手势触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack() {\n  Column()\n    .id('ComponentB')\n    .onTouch(() => {})\n    .gesture(TapGesture({count: 1}))\n  Column() {\n    Column()\n      .id('ComponentD')\n      .onTouch(() => {})\n      .gesture(TapGesture({count: 1}))\n  }\n  .id('ComponentC')\n  .onTouch(() => {})\n  .gesture(TapGesture({count: 1}))\n  .hitTestBehavior(HitTestMode.BLOCK_HIERARCHY)\n}\n.id('Stack A')\n.onTouch(() => {})\n.gesture(TapGesture({count: 1}))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，HitTestMode.BLOCK_HIERARCHY自身和子节点响应触摸测试，阻止所有优先级较低的兄弟节点和父节点参与触摸测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件C未设置hitTestBehavior时，点击组件B和组件D的重叠区域时，组件A，组件C和组件D的onTouch事件均会触发，组件D的点击手势会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件C设置hitTestBehavior为HitTestMode.BLOCK_HIERARCHY时，点击组件B和组件D的重叠区域时，组件C和组件D的onTouch事件触发，组件A和组件B的onTouch事件无法触发，组件D的点击手势会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack() {\n  Column()\n    .id('ComponentB')\n    .onTouch(() => {})\n    .gesture(TapGesture({count: 1}))\n  Column() {\n    Column()\n      .id('ComponentD')\n      .onTouch(() => {})\n      .gesture(TapGesture({count: 1}))\n  }\n  .id('ComponentC')\n  .onTouch(() => {})\n  .gesture(TapGesture({count: 1}))\n  .hitTestBehavior(HitTestMode.BLOCK_DESCENDANTS)\n}\n.id('Stack A')\n.onTouch(() => {})\n.gesture(TapGesture({count: 1}))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#hittestmode9",
        children: "HitTestMode"
      }), ".BLOCK_DESCENDANTS自身不响应触摸测试，并且所有的后代（孩子，孙子等）也不响应触摸测试，不会影响祖先节点的触摸测试。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若组件C未设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior#hittestbehavior",
        children: "hitTestBehavior"
      }), "，点击组件B和组件D的重叠区域时，组件A、组件C和组件D都会触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "事件，同时组件D的点击手势也会被触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件C设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior#hittestbehavior",
        children: "hitTestBehavior"
      }), "为HitTestMode.BLOCK_DESCENDANTS时，点击组件B和组件D的重叠区域时，组件A和组件B的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "事件触发，组件C和组件D的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "事件无法触发，组件B的点击手势会触发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对简单的场景，建议在单个组件上绑定hitTestBehavior。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对复杂场景，建议在多个组件上绑定不同的hitTestBehavior来控制Touch事件的分发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "绑定手势方法对手势的控制",
      children: "绑定手势方法对手势的控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置绑定手势的方法可以实现在多层级场景下，当父组件与子组件绑定了相同的手势时，设置不同的绑定手势方法有不同的响应优先级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当父组件使用.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#gesture",
        children: "gesture"
      }), "绑定手势，父子组件所绑定手势类型相同时，子组件优先于父组件响应。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column()\n    .id('ComponentB')\n    .gesture(TapGesture({count: 1}))\n}\n.id('ComponentA')\n.gesture(TapGesture({count: 1}))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当父子组件均正常绑定点击手势时，子组件优先于父组件响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时，单击组件B区域范围，组件B的点击手势会触发，组件A的点击手势不会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果以带优先级的方式绑定手势，则可使得父组件所绑定手势的响应优先级高于子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column()\n    .id('ComponentB')\n    .gesture(TapGesture({count: 1}))\n}\n.id('ComponentA')\n.priorityGesture(TapGesture({count: 1}))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当父组件以.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#prioritygesture",
        children: "priorityGesture"
      }), "的形式绑定手势时，父组件所绑定的手势优先级高于子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时，单击组件B区域范围，组件A的点击手势会触发，组件B的点击手势不会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要父子组件所绑定的手势不发生冲突，均可响应，则可以使用并行的方式在父组件绑定手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column() {\n  Column()\n    .id('ComponentB')\n    .gesture(TapGesture({count: 1}))\n}\n.id('ComponentA')\n.parallelGesture(TapGesture({count: 1}))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当父组件以.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#parallelgesture",
        children: "parallelGesture"
      }), "的形式绑定手势时，父组件和子组件所绑定的手势均可触发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时，单击组件B区域范围，组件A和组件B的点击手势均会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overlaymanager的事件透传",
      children: "OverlayManager的事件透传"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-overlaymanager/arkts-apis-uicontext-overlaymanager",
        children: "OverlayManager"
      }), "事件机制，默认优先被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-wrapbuilder/ts-universal-wrapbuilder#wrappedbuilder",
        children: "WrappedBuilder"
      }), "内组件先接收，不会向下传递。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若希望OverlayManager下方的页面也能感应到事件，可采用hitTestBehavior(HitTestMode.Transparent)来传递事件，参考以下伪代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction builderOverlay(params: Params) {\n  Component1().hitTestBehavior(HitTestMode.Transparent)\n}\n\n// ···\n\n  aboutToAppear(): void {\n    // ···\n    let componentContent = new ComponentContent(\n      this.context, wrapBuilder<[Params]>(builderOverlay),\n      new Params(uiContext, {x:0, y: 100})\n    );\n    this.overlayManager.addComponentContent(componentContent, 0);\n  }\n"
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