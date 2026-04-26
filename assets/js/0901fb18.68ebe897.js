"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["727233"], {
771138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_shared_element_transition_arkts_shared_element_transition_md_090_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-transition-arkts-shared-element-transition-arkts-shared-element-transition-md-090.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_shared_element_transition_arkts_shared_element_transition_md_090_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition/arkts-shared-element-transition","title":"共享元素转场 (一镜到底)","description":"共享元素转场是一种界面切换时对相同或者相似的两个元素做的一种位置和大小匹配的过渡动画效果，也称一镜到底动效。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition/arkts-shared-element-transition.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"共享元素转场 (一镜到底)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-shared-element-transition","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"模态转场","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition/"},"next":{"title":"旋转屏动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition/arkts-shared-element-transition.md


const frontMatter = {
	title: '共享元素转场 (一镜到底)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-shared-element-transition',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '共享元素转场 (一镜到底)';

const assets = {

};



const toc = [{
  "value": "不新建容器并直接变化原容器",
  "id": "不新建容器并直接变化原容器",
  "level": 2
}, {
  "value": "新建容器并跨容器迁移组件",
  "id": "新建容器并跨容器迁移组件",
  "level": 2
}, {
  "value": "结合Stack使用",
  "id": "结合stack使用",
  "level": 3
}, {
  "value": "结合Navigation使用",
  "id": "结合navigation使用",
  "level": 3
}, {
  "value": "结合BindSheet使用",
  "id": "结合bindsheet使用",
  "level": 3
}, {
  "value": "使用geometryTransition共享元素转场",
  "id": "使用geometrytransition共享元素转场",
  "level": 2
}, {
  "value": "geometryTransition的简单使用",
  "id": "geometrytransition的简单使用",
  "level": 3
}, {
  "value": "geometryTransition结合模态转场使用",
  "id": "geometrytransition结合模态转场使用",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
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
        id: "共享元素转场-一镜到底",
        children: "共享元素转场 (一镜到底)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "共享元素转场是一种界面切换时对相同或者相似的两个元素做的一种位置和大小匹配的过渡动画效果，也称一镜到底动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下例所示，在点击图片后，该图片消失，同时在另一个位置出现新的图片，二者之间内容相同，可以对它们添加一镜到底动效。左图为不添加一镜到底动效的效果，右图为添加一镜到底动效的效果，一镜到底的效果能够让二者的出现消失产生联动，使得内容切换过程显得灵动自然而不生硬。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "一帧切换效果"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "一镜到底效果"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一镜到底的动效有多种实现方式，在实际开发过程中，应根据具体场景选择合适的方法进行实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是不同实现方式的对比："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "一镜到底实现方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特点"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不新建容器直接变化原容器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不发生路由跳转，需要在一个组件中实现展开及关闭两种状态的布局，展开后组件层级不变。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于转场开销小的简单场景，如点开页面无需加载大量数据及组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "新建容器并跨容器迁移组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过使用NodeController，将组件从一个容器迁移到另一个容器，在开始迁移时，需要根据前后两个布局的位置大小等信息对组件添加位移及缩放，确保迁移开始时组件能够对齐初始布局，避免出现视觉上的跳变现象。之后再添加动画将位移及缩放等属性复位，实现组件从初始布局到目标布局的一镜到底过渡效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于新建对象开销大的场景，如视频直播组件点击转为全屏等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用geometryTransition共享元素转场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "利用系统能力，转场前后两个组件调用geometryTransition接口绑定同一id，同时将转场逻辑置于animateTo动画闭包内，这样系统侧会自动为二者添加一镜到底的过渡效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统将调整绑定的两个组件的宽高及位置至相同值，并切换二者的透明度，以实现一镜到底过渡效果。因此，为了实现流畅的动画效果，需要确保对绑定geometryTransition的节点添加宽高动画不会有跳变。此方式适用于创建新节点开销小的场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "不新建容器并直接变化原容器",
      children: "不新建容器并直接变化原容器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该方法不新建容器，通过在已有容器上增删组件触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component",
        children: "transition"
      }), "，搭配组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis",
        children: "属性动画"
      }), "实现一镜到底效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于同一个容器展开，容器内兄弟组件消失或者出现的场景，可通过对同一个容器展开前后进行宽高位置变化并配置属性动画，对兄弟组件配置出现消失转场动画实现一镜到底效果。基本步骤为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建需要展开的页面，并通过状态变量构建好普通状态和展开状态的界面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将需要展开的页面展开，通过状态变量控制兄弟组件消失或出现，并通过绑定出现消失转场实现兄弟组件转场效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以点击卡片后显示卡片内容详情场景为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\nclass PostData {\n  // 请将$r('app.media.flower')替换为实际资源文件\n  avatar: Resource = $r('app.media.flower');\n  name: string = '';\n  message: ResourceStr = '';\n  images: Resource[] = [];\n}\n\n@Entry\n@Component\nstruct Index {\n  @State isExpand: boolean = false;\n  @State @Watch('onItemClicked') selectedIndex: number = -1;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 数组中图片均使用Resource资源，需用户自定义\n  private allPostData: PostData[] = [\n    {\n      // 请将$r('app.media.flower')替换为实际资源文件\n      avatar: $r('app.media.flower'),\n      name: 'Alice',\n      // 请将$r('app.string.shareTransition_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"天气晴朗\"\n      message: $r('app.string.shareTransition_text1'),\n      // 请将$r('app.media.spring')替换为实际资源文件\n      // 请将$r('app.media.tall_tree')替换为实际资源文件\n      images: [$r('app.media.spring'), $r('app.media.tall_tree')]\n    },\n    {\n      // 请将$r('app.media.sunset_sky')替换为实际资源文件\n      avatar: $r('app.media.sunset_sky'),\n      name: 'Bob',\n      // 请将$r('app.string.shareTransition_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"你好世界\"\n      message: $r('app.string.shareTransition_text2'),\n      // 请将$r('app.media.island')替换为实际资源文件\n      images: [$r('app.media.island')]\n    },\n    {\n      // 请将$r('app.media.tall_tree')替换为实际资源文件\n      avatar: $r('app.media.tall_tree'),\n      name: 'Carl',\n      // 请将$r('app.string.shareTransition_text3')替换为实际资源文件，在本示例中该资源文件的value值为\"万物生长\"\n      message: $r('app.string.shareTransition_text3'),\n      // 请将$r('app.media.flower')替换为实际资源文件\n      // 请将$r('app.media.sunset_sky')替换为实际资源文件\n      // 请将$r('app.media.spring')替换为实际资源文件\n      images: [$r('app.media.flower'), $r('app.media.sunset_sky'), $r('app.media.spring')]\n    }];\n\n  private onItemClicked(): void {\n    if (this.selectedIndex < 0) {\n      return;\n    }\n    this.getUIContext()?.animateTo({\n      duration: 350,\n      curve: Curve.Friction\n    }, () => {\n      this.isExpand = !this.isExpand;\n    });\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      ForEach(this.allPostData, (postData: PostData, index: number) => {\n        // 当点击了某个post后，会使其余的post消失下树\n        if (!this.isExpand || this.selectedIndex === index) {\n          Column() {\n            Post({ data: postData, selectedIndex: this.selectedIndex, index: index })\n          }\n          .width('100%')\n          // 对出现消失的post添加透明度转场和位移转场效果\n          .transition(TransitionEffect.OPACITY\n            .combine(TransitionEffect.translate({ y: index < this.selectedIndex ? -250 : 250 }))\n            .animation({ duration: 350, curve: Curve.Friction }))\n        }\n      }, (postData: PostData, index: number) => index.toString())\n    }\n    .size({ width: '100%', height: '100%' })\n    .backgroundColor('#40808080')\n  }\n}\n\n@Component\nexport default struct Post {\n  @Link selectedIndex: number;\n  @Prop data: PostData;\n  @Prop index: number;\n  @State itemHeight: number = 250;\n  @State isExpand: boolean = false;\n  @State expandImageSize: number = 100;\n  @State avatarSize: number = 50;\n\n  build() {\n    Column({ space: 20 }) {\n      Row({ space: 10 }) {\n        Image(this.data.avatar)\n          .size({ width: this.avatarSize, height: this.avatarSize })\n          .borderRadius(this.avatarSize / 2)\n          .clip(true)\n\n        Text(this.data.name)\n      }\n      .justifyContent(FlexAlign.Start)\n\n      Text(this.data.message)\n\n      Row({ space: 15 }) {\n        ForEach(this.data.images, (imageResource: Resource, index: number) => {\n          Image(imageResource)\n            .size({ width: this.expandImageSize, height: this.expandImageSize })\n        }, (imageResource: Resource, index: number) => index.toString())\n      }\n\n      // 展开态下组件增加的内容\n      if (this.isExpand) {\n        Column() {\n          // 请将$r('app.string.shareTransition_text4')替换为实际资源文件，在本示例中该资源文件的value值为\"评论区\"\n          Text($r('app.string.shareTransition_text4'))\n          // 对评论区文本添加出现消失转场效果\n            .transition(TransitionEffect.OPACITY\n              .animation({ duration: 350, curve: Curve.Friction }))\n            .padding({ top: 10 })\n        }\n        .transition(TransitionEffect.asymmetric(\n          TransitionEffect.opacity(0.99)\n            .animation({ duration: 350, curve: Curve.Friction }),\n          TransitionEffect.OPACITY.animation({ duration: 0 })\n        ))\n        .size({ width: '100%' })\n      }\n    }\n    .backgroundColor(Color.White)\n    .size({ width: '100%', height: this.itemHeight })\n    .alignItems(HorizontalAlign.Start)\n    .padding({ left: 10, top: 10 })\n    .onClick(() => {\n      this.selectedIndex = -1;\n      this.selectedIndex = this.index;\n      this.getUIContext()?.animateTo({\n        duration: 350,\n        curve: Curve.Friction\n      }, () => {\n        // 对展开的post做宽高动画，并对头像尺寸和图片尺寸加动画\n        this.isExpand = !this.isExpand;\n        this.itemHeight = this.isExpand ? 780 : 250;\n        this.avatarSize = this.isExpand ? 75 : 50;\n        this.expandImageSize = (this.isExpand && this.data.images.length > 0)\n          ? (360 - (this.data.images.length + 1) * 15) / this.data.images.length : 100;\n      })\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(665230)/* ["default"] */.A) + "",
        width: "290",
        height: "630"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新建容器并跨容器迁移组件",
      children: "新建容器并跨容器迁移组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
        children: "NodeContainer"
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder",
        children: "自定义占位节点"
      }), "，利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
        children: "NodeController"
      }), "实现组件的跨节点迁移，配合属性动画给组件的迁移过程赋予一镜到底效果。这种一镜到底的实现方式可以结合多种转场方式使用，如导航转场（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "）、半模态转场（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
        children: "bindSheet"
      }), "）等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结合stack使用",
      children: "结合Stack使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以利用Stack内后定义组件位于最上方的特性，控制组件在跨节点迁移后的顺序位置最高。以展开收起卡片的场景为例，实现步骤为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "展开卡片时，获取被点击卡片A的位置信息，将被点击卡片A迁移到与卡片A位置一致的展开页B处，展开页B的层级高于被点击卡片A的层级。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对展开页B添加属性动画，使之展开并运动到展开后的位置，完成一镜到底的动画效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "收起卡片时，对展开页B添加属性动画，使之收起并运动到收起时的位置，即被点击卡片A的位置，实现一镜到底的动画效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在动画结束回调函数中将展开页B中的组件迁移回被点击卡片A处。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { createPostNode, getPostNode, PostNode } from './PostNode';\nimport { componentUtils, curves, UIContext } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  // 新建一镜到底动画类\n  private uiContext: UIContext = this.getUIContext();\n  @State animationProperties: AnimationProperties = new AnimationProperties(this.uiContext);\n  private listArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n  build() {\n    // 卡片折叠态，展开态的共同父组件\n    Stack() {\n      List({ space: 20 }) {\n        ForEach(this.listArray, (item: number) => {\n          ListItem() {\n            // 卡片折叠态\n            PostItem({ index: item, animationProperties: this.animationProperties })\n          }\n        })\n      }\n      .clip(false)\n      .alignListItem(ListItemAlign.Center)\n\n      if (this.animationProperties.isExpandPageShow) {\n        // 卡片展开态\n        ExpandPage({ animationProperties: this.animationProperties })\n      }\n    }\n    .key('rootStack')\n    .enabled(this.animationProperties.isEnabled)\n  }\n}\n\n@Component\nstruct PostItem {\n  @Prop index: number\n  @Link animationProperties: AnimationProperties;\n  @State nodeController: PostNode | undefined = undefined;\n  // 折叠时详细内容隐藏\n  private showDetailContent: boolean = false;\n\n  aboutToAppear(): void {\n    this.nodeController = createPostNode(this.getUIContext(), this.index.toString(), this.showDetailContent);\n    if (this.nodeController != undefined) {\n      // 设置回调，当卡片从展开态回到折叠态时触发\n      this.nodeController.setCallback(this.resetNode.bind(this));\n    }\n  }\n\n  resetNode() {\n    this.nodeController = getPostNode(this.index.toString());\n  }\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n    }\n    .width('100%')\n    .height(100)\n    .key(this.index.toString())\n    .onClick(() => {\n      if (this.nodeController != undefined) {\n        // 卡片从折叠态节点下树\n        this.nodeController.onRemove();\n      }\n      // 触发卡片从折叠到展开态的动画\n      this.animationProperties.expandAnimation(this.index);\n    })\n  }\n}\n\n@Component\nstruct ExpandPage {\n  @Link animationProperties: AnimationProperties;\n  @State nodeController: PostNode | undefined = undefined;\n  // 展开时详细内容出现\n  private showDetailContent: boolean = true;\n\n  aboutToAppear(): void {\n    // 获取对应序号的卡片组件\n    this.nodeController = getPostNode(this.animationProperties.curIndex.toString());\n    // 更新为详细内容出现\n    this.nodeController?.update(this.animationProperties.curIndex.toString(), this.showDetailContent);\n  }\n\n  build() {\n    Stack() {\n      NodeContainer(this.nodeController)\n    }\n    .width('100%')\n    .height(this.animationProperties.changedHeight ? '100%' : 100)\n    .translate({ x: this.animationProperties.translateX, y: this.animationProperties.translateY })\n    .position({ x: this.animationProperties.positionX, y: this.animationProperties.positionY })\n    .onClick(() => {\n      this.getUIContext()?.animateTo({\n        curve: curves.springMotion(0.6, 0.9),\n        onFinish: () => {\n          if (this.nodeController != undefined) {\n            // 执行回调，折叠态节点获取卡片组件\n            this.nodeController.callCallback();\n            // 当前展开态节点的卡片组件下树\n            this.nodeController.onRemove();\n          }\n          // 卡片展开态节点下树\n          this.animationProperties.isExpandPageShow = false;\n          this.animationProperties.isEnabled = true;\n        }\n      }, () => {\n        // 卡片从展开态回到折叠态\n        this.animationProperties.isEnabled = false;\n        this.animationProperties.translateX = 0;\n        this.animationProperties.translateY = 0;\n        this.animationProperties.changedHeight = false;\n        // 更新为详细内容消失\n        this.nodeController?.update(this.animationProperties.curIndex.toString(), false);\n      })\n    })\n  }\n}\n\nclass RectInfo {\n  left: number = 0;\n  top: number = 0;\n  right: number = 0;\n  bottom: number = 0;\n  width: number = 0;\n  height: number = 0;\n}\n\n// 封装的一镜到底动画类\n@Observed\nclass AnimationProperties {\n  public isExpandPageShow: boolean = false;\n  // 控制组件是否响应点击事件\n  public isEnabled: boolean = true;\n  // 展开卡片的序号\n  public curIndex: number = -1;\n  public translateX: number = 0;\n  public translateY: number = 0;\n  public positionX: number = 0;\n  public positionY: number = 0;\n  public changedHeight: boolean = false;\n  private calculatedTranslateX: number = 0;\n  private calculatedTranslateY: number = 0;\n  // 设置卡片展开后相对父组件的位置\n  private expandTranslateX: number = 0;\n  private expandTranslateY: number = 0;\n  private uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    this.uiContext = uiContext\n  }\n\n  public expandAnimation(index: number): void {\n    // 记录展开态卡片的序号\n    if (index != undefined) {\n      this.curIndex = index;\n    }\n    // 计算折叠态卡片相对父组件的位置\n    this.calculateData(index.toString());\n    // 展开态卡片上树\n    this.isExpandPageShow = true;\n    // 卡片展开的属性动画\n    this.uiContext?.animateTo({\n      curve: curves.springMotion(0.6, 0.9)\n    }, () => {\n      this.translateX = this.calculatedTranslateX;\n      this.translateY = this.calculatedTranslateY;\n      this.changedHeight = true;\n    })\n  }\n\n  // 获取需要跨节点迁移的组件的位置，及迁移前后节点的公共父节点的位置，用以计算做动画组件的动画参数\n  public calculateData(key: string): void {\n    let clickedImageInfo = this.getRectInfoById(this.uiContext, key);\n    let rootStackInfo = this.getRectInfoById(this.uiContext, 'rootStack');\n    this.positionX = this.uiContext.px2vp(clickedImageInfo.left - rootStackInfo.left);\n    this.positionY = this.uiContext.px2vp(clickedImageInfo.top - rootStackInfo.top);\n    this.calculatedTranslateX = this.uiContext.px2vp(rootStackInfo.left - clickedImageInfo.left) +\n      this.expandTranslateX;\n    this.calculatedTranslateY = this.uiContext.px2vp(rootStackInfo.top - clickedImageInfo.top) + this.expandTranslateY;\n  }\n\n  // 根据组件的id获取组件的位置信息\n  private getRectInfoById(context: UIContext, id: string): RectInfo {\n    let componentInfo: componentUtils.ComponentInfo = context.getComponentUtils().getRectangleById(id);\n\n    if (!componentInfo) {\n      throw Error('object is empty');\n    }\n\n    let rstRect: RectInfo = new RectInfo();\n    const widthScaleGap = componentInfo.size.width * (1 - componentInfo.scale.x) / 2;\n    const heightScaleGap = componentInfo.size.height * (1 - componentInfo.scale.y) / 2;\n    rstRect.left = componentInfo.translate.x + componentInfo.windowOffset.x + widthScaleGap;\n    rstRect.top = componentInfo.translate.y + componentInfo.windowOffset.y + heightScaleGap;\n    rstRect.right =\n      componentInfo.translate.x + componentInfo.windowOffset.x + componentInfo.size.width - widthScaleGap;\n    rstRect.bottom =\n      componentInfo.translate.y + componentInfo.windowOffset.y + componentInfo.size.height - heightScaleGap;\n    rstRect.width = rstRect.right - rstRect.left;\n    rstRect.height = rstRect.bottom - rstRect.top;\n\n    return {\n      left: rstRect.left,\n      right: rstRect.right,\n      top: rstRect.top,\n      bottom: rstRect.bottom,\n      width: rstRect.width,\n      height: rstRect.height\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PostNode.ets\n// 跨容器迁移能力\nimport { UIContext, curves, NodeController, BuilderNode, FrameNode } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\nclass Data {\n  public item: string | null = null;\n  public isExpand: boolean = false;\n}\nlet context: undefined | common.UIAbilityContext = undefined;\n@Builder\nfunction postBuilder(data: Data) {\n  // 跨容器迁移组件置于@Builder内\n  Column() {\n    Row() {\n      Row()\n        .backgroundColor(Color.Pink)\n        .borderRadius(20)\n        .width(80)\n        .height(80)\n      Column() {\n        // 请在resources\\base\\element\\string.json文件中配置name为'shareTransition_text5'，value为非空字符串的资源\n        Text((context as common.UIAbilityContext)?.resourceManager.getStringByNameSync('shareTransition_text5') + data.item)\n          .fontSize(20)\n        // 请将$r('app.string.shareTransition_text6')替换为实际资源文件，在本示例中该资源文件的value值为\"共享元素转场\"\n        Text($r('app.string.shareTransition_text6'))\n          .fontSize(12)\n          .fontColor(0x909399)\n      }\n      .alignItems(HorizontalAlign.Start)\n      .justifyContent(FlexAlign.SpaceAround)\n      .margin({ left: 10 })\n      .height(80)\n    }\n    .width('90%')\n    .height(100)\n\n    // 展开后显示细节内容\n    if (data.isExpand) {\n      Row() {\n        // 请将$r('app.string.shareTransition_text7')替换为实际资源文件，在本示例中该资源文件的value值为\"展开态\"\n        Text($r('app.string.shareTransition_text7'))\n          .fontSize(28)\n          .fontColor(0x909399)\n          .textAlign(TextAlign.Center)\n          .transition(TransitionEffect.OPACITY.animation({ curve: curves.springMotion(0.6, 0.9) }))\n      }\n      .width('90%')\n      .justifyContent(FlexAlign.Center)\n    }\n  }\n  .width('90%')\n  .height('100%')\n  .alignItems(HorizontalAlign.Center)\n  .borderRadius(10)\n  .margin({ top: 15 })\n  .backgroundColor(Color.White)\n  .shadow({\n    radius: 20,\n    color: 0x909399,\n    offsetX: 20,\n    offsetY: 10\n  })\n}\n\nclass InternalValue {\n  public flag: boolean = false;\n};\n\nexport class PostNode extends NodeController {\n  private node: BuilderNode<Data[]> | null = null;\n  private isRemove: InternalValue = new InternalValue();\n  private callback: Function | undefined = undefined;\n  private data: Data | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.isRemove.flag === true) {\n      return null;\n    }\n    if (this.node != null) {\n      return this.node.getFrameNode();\n    }\n\n    return null;\n  }\n\n  init(uiContext: UIContext, id: string, isExpand: boolean) {\n    if (this.node != null) {\n      return;\n    }\n    // 创建节点，需要uiContext\n    this.node = new BuilderNode(uiContext);\n    context = uiContext.getHostContext() as common.UIAbilityContext;\n    // 创建离线组件\n    this.data = { item: id, isExpand: isExpand };\n    this.node.build(wrapBuilder<Data[]>(postBuilder), this.data);\n  }\n\n  update(id: string, isExpand: boolean) {\n    if (this.node !== null) {\n      // 调用update进行更新。\n      this.data = { item: id, isExpand: isExpand };\n      this.node.update(this.data);\n    }\n  }\n\n  setCallback(callback: Function | undefined) {\n    this.callback = callback;\n  }\n\n  callCallback() {\n    if (this.callback != undefined) {\n      this.callback();\n    }\n  }\n\n  onRemove() {\n    this.isRemove.flag = true;\n    // 组件迁移出节点时触发重建\n    this.rebuild();\n    this.isRemove.flag = false;\n  }\n}\n\nlet gNodeMap: Map<string, PostNode | undefined> = new Map();\n\nexport const createPostNode =\n  (uiContext: UIContext, id: string, isExpand: boolean): PostNode | undefined => {\n    let node = new PostNode();\n    node.init(uiContext, id, isExpand);\n    gNodeMap.set(id, node);\n    return node;\n  }\n\nexport const getPostNode = (id: string): PostNode | undefined => {\n  if (!gNodeMap.has(id)) {\n    return undefined;\n  }\n  return gNodeMap.get(id);\n}\n\nexport const deleteNode = (id: string) => {\n  gNodeMap.delete(id);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812561)/* ["default"] */.A) + "",
        width: "337",
        height: "699"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结合navigation使用",
      children: "结合Navigation使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "的自定义导航转场动画能力（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#customnavcontenttransition11",
        children: "customNavContentTransition"
      }), "，可参考Navigation", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#%E7%A4%BA%E4%BE%8B3%E8%AE%BE%E7%BD%AE%E5%8F%AF%E4%BA%A4%E4%BA%92%E8%BD%AC%E5%9C%BA%E5%8A%A8%E7%94%BB",
        children: "示例3"
      }), "）实现一镜到底动效。共享元素转场期间，组件由消失页面迁移至出现页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以展开收起缩略图的场景为例，实现步骤为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过customNavContentTransition配置PageOne与PageTwo的自定义导航转场动画。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义的共享元素转场效果由属性动画实现，具体实现方式为抓取页面内组件相对窗口的位置信息从而正确匹配组件在PageOne与PageTwo的位置、缩放等，即动画开始和结束的属性信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击缩略图后共享元素组件从PageOne被迁移至PageTwo，随后触发由PageOne至PageTwo的自定义转场动画，即PageTwo的共享元素组件从原来的缩略图状态做动画到全屏状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由全屏状态返回到缩略图时，触发由PageTwo至PageOne的自定义转场动画，即PageTwo的共享元素组件从全屏状态做动画到原PageOne的缩略图状态，转场结束后共享元素组件从PageTwo被迁移回PageOne。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "├──entry/src/main/ets                 // 代码区\n│  ├──CustomTransition\n│  │  ├──AnimationProperties.ets      // 一镜到底转场动画封装\n│  │  └──CustomNavigationUtils.ets    // Navigation自定义转场动画配置\n│  ├──entryability\n│  │  └──EntryAbility.ets             // 程序入口类\n│  ├──NodeContainer\n│  │  └──CustomComponent.ets          // 自定义占位节点\n│  ├──pages\n│  │  ├──Index.ets                    // 导航页面\n│  │  ├──PageOne.ets                  // 缩略图页面\n│  │  └──PageTwo.ets                  // 全屏展开页面\n│  └──utils\n│     ├──ComponentAttrUtils.ets       // 组件位置获取\n│     └──WindowUtils.ets              // 窗口信息\n└──entry/src/main/resources           // 资源文件\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { AnimateCallback, CustomTransition } from '../../../CustomTransition/CustomNavigationUtils';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'Index';\nconst DOMAIN = 0xF811;\n\n@Entry\n@Component\nstruct Index {\n  private pageInfos: NavPathStack = new NavPathStack();\n  // 允许进行自定义转场的页面名称\n  private allowedCustomTransitionFromPageName: string[] = ['PageOne'];\n  private allowedCustomTransitionToPageName: string[] = ['PageTwo'];\n\n  aboutToAppear(): void {\n    this.pageInfos.pushPath({ name: 'PageOne' });\n  }\n\n  private isCustomTransitionEnabled(fromName: string, toName: string): boolean {\n    // 点击和返回均需要进行自定义转场，因此需要分别判断\n    if ((this.allowedCustomTransitionFromPageName.includes(fromName) &&\n      this.allowedCustomTransitionToPageName.includes(toName)) ||\n      (this.allowedCustomTransitionFromPageName.includes(toName) &&\n      this.allowedCustomTransitionToPageName.includes(fromName))) {\n      return true;\n    }\n    return false;\n  }\n\n  build() {\n    Navigation(this.pageInfos)\n      .hideNavBar(true)\n      .customNavContentTransition((from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation) => {\n        if ((!from || !to) || (!from.name || !to.name)) {\n          return undefined;\n        }\n\n        // 通过from和to的name对自定义转场路由进行管控\n        if (!this.isCustomTransitionEnabled(from.name, to.name)) {\n          return undefined;\n        }\n\n        // 需要对转场页面是否注册了animation进行判断，来决定是否进行自定义转场\n        let fromParam: AnimateCallback = CustomTransition.getInstance().getAnimateParam(from.index);\n        let toParam: AnimateCallback = CustomTransition.getInstance().getAnimateParam(to.index);\n        if (!fromParam.animation || !toParam.animation) {\n          return undefined;\n        }\n\n        // 一切判断完成后，构造customAnimation给系统侧调用，执行自定义转场动画\n        let customAnimation: NavigationAnimatedTransition = {\n          onTransitionEnd: (isSuccess: boolean) => {\n            hilog.info(DOMAIN, 'current transition result is', 'isSuccess: %s', isSuccess.toString());\n          },\n          timeout: 2000,\n          transition: (transitionProxy: NavigationTransitionProxy) => {\n            hilog.info(DOMAIN, TAG, 'trigger transition callback');\n            if (fromParam.animation) {\n              fromParam.animation(operation === NavigationOperation.PUSH, true, transitionProxy);\n            }\n            if (toParam.animation) {\n              toParam.animation(operation === NavigationOperation.PUSH, false, transitionProxy);\n            }\n          }\n        };\n        return customAnimation;\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageOne.ets\nimport { CustomTransition } from '../../../CustomTransition/CustomNavigationUtils';\nimport { MyNodeController, createMyNode, getMyNode } from '../../../NodeContainer/CustomComponent';\nimport { ComponentAttrUtils, RectInfoInPx } from '../../../utils/ComponentAttrUtils';\nimport { WindowUtils } from '../../../utils/WindowUtils';\n\n@Builder\nexport function PageOneBuilder() {\n  PageOne();\n}\n\n@Component\nexport struct PageOne {\n  private pageInfos: NavPathStack = new NavPathStack();\n  private pageId: number = -1;\n  @State myNodeController: MyNodeController | undefined = new MyNodeController(false);\n\n  aboutToAppear(): void {\n    let node = getMyNode();\n    if (node === undefined) {\n      // 新建自定义节点\n      createMyNode(this.getUIContext());\n    }\n    this.myNodeController = getMyNode();\n  }\n\n  private doFinishTransition(): void {\n    // PageTwo结束转场时将节点从PageTwo迁移回PageOne\n    this.myNodeController = getMyNode();\n  }\n\n  private registerCustomTransition(): void {\n    // 注册自定义动画协议\n    CustomTransition.getInstance().registerNavParam(this.pageId,\n      (isPush: boolean, isExit: boolean, transitionProxy: NavigationTransitionProxy) => {\n      }, 500);\n  }\n\n  private onCardClicked(): void {\n    let cardItemInfo: RectInfoInPx =\n      ComponentAttrUtils.getRectInfoById(WindowUtils.window.getUIContext(), 'card');\n    let param: Record<string, Object> = {};\n    param['cardItemInfo'] = cardItemInfo;\n    param['doDefaultTransition'] = (myController: MyNodeController) => {\n      this.doFinishTransition();\n    };\n    this.pageInfos.pushPath({ name: 'PageTwo', param: param });\n    // 自定义节点从PageOne下树\n    if (this.myNodeController != undefined) {\n      (this.myNodeController as MyNodeController).onRemove();\n    }\n  }\n\n  build() {\n    NavDestination() {\n      Stack() {\n        Column({ space: 20 }) {\n          Row({ space: 10 }) {\n            // 请将$r('app.media.avatar')替换为实际资源文件\n            Image($r('app.media.avatar'))\n              .size({ width: 50, height: 50 })\n              .borderRadius(25)\n              .clip(true)\n\n            Text('Alice')\n          }\n          .justifyContent(FlexAlign.Start)\n\n          // 请将$r('app.string.shareTransition_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"你好世界\"\n          Text($r('app.string.shareTransition_text2'))\n\n          NodeContainer(this.myNodeController)\n            .size({ width: 320, height: 250 })\n            .onClick(() => {\n              this.onCardClicked();\n            })\n        }\n        .alignItems(HorizontalAlign.Start)\n        .margin(30)\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfos = context.pathStack;\n      this.pageId = this.pageInfos.getAllPathName().length - 1;\n      this.registerCustomTransition();\n    })\n    .onDisAppear(() => {\n      CustomTransition.getInstance().unRegisterNavParam(this.pageId);\n      // 自定义节点从PageOne下树\n      if (this.myNodeController != undefined) {\n        (this.myNodeController as MyNodeController).onRemove();\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTwo.ets\nimport { CustomTransition } from '../../../CustomTransition/CustomNavigationUtils';\nimport { AnimationProperties } from '../../../CustomTransition/AnimationProperties';\nimport { RectInfoInPx } from '../../../utils/ComponentAttrUtils';\nimport { getMyNode, MyNodeController } from '../../../NodeContainer/CustomComponent';\n\n@Builder\nexport function PageTwoBuilder() {\n  PageTwo();\n}\n\n@Component\nexport struct PageTwo {\n  @State pageInfos: NavPathStack = new NavPathStack();\n  @State animationProperties: AnimationProperties = new AnimationProperties(this.getUIContext());\n  @State myNodeController: MyNodeController | undefined = new MyNodeController(false);\n  private pageId: number = -1;\n  private shouldDoDefaultTransition: boolean = false;\n  private prePageDoFinishTransition: () => void = () => {};\n  private cardItemInfo: RectInfoInPx = new RectInfoInPx();\n  @StorageProp('windowSizeChanged') @Watch('unRegisterNavParam') windowSizeChangedTime: number = 0;\n  @StorageProp('onConfigurationUpdate') @Watch('unRegisterNavParam') onConfigurationUpdateTime: number = 0;\n\n  aboutToAppear(): void {\n    // 迁移自定义节点至当前页面\n    this.myNodeController = getMyNode();\n  }\n\n  private unRegisterNavParam(): void {\n    this.shouldDoDefaultTransition = true;\n  }\n\n  private onBackPressed(): boolean {\n    if (this.shouldDoDefaultTransition) {\n      CustomTransition.getInstance().unRegisterNavParam(this.pageId);\n      this.pageInfos.pop();\n      this.prePageDoFinishTransition();\n      this.shouldDoDefaultTransition = false;\n      return true;\n    }\n    this.pageInfos.pop();\n    return true;\n  }\n\n  build() {\n    NavDestination() {\n      // Stack需要设置alignContent为TopStart，否则在高度变化过程中，截图和内容都会随高度重新布局位置\n      Stack({ alignContent: Alignment.TopStart }) {\n        Stack({ alignContent: Alignment.TopStart }) {\n          Column({ space: 20 }) {\n            NodeContainer(this.myNodeController);\n            if (this.animationProperties.showDetailContent) {\n              // 请将$r('app.string.shareTransition_text8')替换为实际资源文件，在本示例中该资源文件的value值为\"展开态内容\"\n              Text($r('app.string.shareTransition_text8'))\n                .fontSize(20)\n                .transition(TransitionEffect.OPACITY)\n                .margin(30)\n            }\n          }\n          .alignItems(HorizontalAlign.Start)\n        }\n        .position({ y: this.animationProperties.positionValue });\n      }\n      .scale({ x: this.animationProperties.scaleValue, y: this.animationProperties.scaleValue })\n      .translate({ x: this.animationProperties.translateX, y: this.animationProperties.translateY })\n      .width(this.animationProperties.clipWidth)\n      .height(this.animationProperties.clipHeight)\n      .borderRadius(this.animationProperties.radius)\n      // expandSafeArea使得Stack做沉浸式效果，向上扩到状态栏，向下扩到导航条\n      .expandSafeArea([SafeAreaType.SYSTEM])\n      // 对高度进行裁切\n      .clip(true)\n    }\n    .backgroundColor(this.animationProperties.navDestinationBgColor)\n    .hideTitleBar(true)\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfos = context.pathStack;\n      this.pageId = this.pageInfos.getAllPathName().length - 1;\n      let param = context.pathInfo?.param as Record<string, Object>;\n      this.prePageDoFinishTransition = param['doDefaultTransition'] as () => void;\n      this.cardItemInfo = param['cardItemInfo'] as RectInfoInPx;\n      CustomTransition.getInstance().registerNavParam(this.pageId,\n        (isPush: boolean, isExit: boolean, transitionProxy: NavigationTransitionProxy) => {\n          this.animationProperties.doAnimation(\n            this.cardItemInfo, isPush, isExit, transitionProxy, 0,\n            this.prePageDoFinishTransition, this.myNodeController);\n        }, 500);\n    })\n    .onBackPressed(() => {\n      return this.onBackPressed();\n    })\n    .onDisAppear(() => {\n      CustomTransition.getInstance().unRegisterNavParam(this.pageId);\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CustomNavigationUtils.ets\n// 配置Navigation自定义转场动画\nexport interface AnimateCallback {\n  animation: ((isPush: boolean, isExit: boolean, transitionProxy: NavigationTransitionProxy) => void | undefined)\n    | undefined;\n  timeout: (number | undefined) | undefined;\n}\n\nconst customTransitionMap: Map<number, AnimateCallback> = new Map();\n\nexport class CustomTransition {\n  private constructor() {\n  };\n\n  static delegate = new CustomTransition();\n\n  static getInstance() {\n    return CustomTransition.delegate;\n  }\n\n  // 注册页面的动画回调，name是注册页面的动画的回调\n  // animationCallback是需要执行的动画内容，timeout是转场结束的超时时间\n  registerNavParam(\n    name: number,\n    animationCallback: (operation: boolean, isExit: boolean, transitionProxy: NavigationTransitionProxy) => void,\n    timeout: number): void {\n    if (customTransitionMap.has(name)) {\n      let param = customTransitionMap.get(name);\n      if (param != undefined) {\n        param.animation = animationCallback;\n        param.timeout = timeout;\n        return;\n      }\n    }\n    let params: AnimateCallback = { timeout: timeout, animation: animationCallback };\n    customTransitionMap.set(name, params);\n  }\n\n  unRegisterNavParam(name: number): void {\n    customTransitionMap.delete(name);\n  }\n\n  getAnimateParam(name: number): AnimateCallback {\n    let result: AnimateCallback = {\n      animation: customTransitionMap.get(name)?.animation,\n      timeout: customTransitionMap.get(name)?.timeout,\n    };\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程配置文件module.json5中配置 {\"routerMap\": \"$profile:route_map\"}\n// route_map.json\n{\n  \"routerMap\": [\n    {\n      \"name\": \"PageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageOne.ets\",\n      \"buildFunction\": \"PageOneBuilder\"\n    },\n    {\n      \"name\": \"PageTwo\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageTwo.ets\",\n      \"buildFunction\": \"PageTwoBuilder\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// AnimationProperties.ets\n// 一镜到底转场动画封装\nimport { curves, UIContext } from '@kit.ArkUI';\nimport { RectInfoInPx } from '../utils/ComponentAttrUtils';\nimport { WindowUtils } from '../utils/WindowUtils';\nimport { MyNodeController } from '../NodeContainer/CustomComponent';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'AnimationProperties';\nconst DOMAIN = 0xF811;\nconst DEVICE_BORDER_RADIUS: number = 34;\n\n// 将自定义一镜到底转场动画进行封装，其他界面也需要做自定义一镜到底转场的话，可以直接复用，减少工作量\n@Observed\nexport class AnimationProperties {\n  public navDestinationBgColor: ResourceColor = Color.Transparent;\n  public translateX: number = 0;\n  public translateY: number = 0;\n  public scaleValue: number = 1;\n  public clipWidth: Dimension = 0;\n  public clipHeight: Dimension = 0;\n  public radius: number = 0;\n  public positionValue: number = 0;\n  public showDetailContent: boolean = false;\n  private uiContext: UIContext;\n\n  constructor(uiContext: UIContext) {\n    this.uiContext = uiContext;\n  }\n\n  public doAnimation(cardItemInfoPx: RectInfoInPx, isPush: boolean, isExit: boolean,\n    transitionProxy: NavigationTransitionProxy, extraTranslateValue: number,\n    prePageOnFinish: (index: MyNodeController) => void, myNodeController: MyNodeController | undefined): void {\n    // 首先计算卡片的宽高与窗口宽高的比例\n    let widthScaleRatio = cardItemInfoPx.width / WindowUtils.windowWidthPx;\n    let heightScaleRatio = cardItemInfoPx.height / WindowUtils.windowHeightPx;\n    let isUseWidthScale = widthScaleRatio > heightScaleRatio;\n    let initScale: number = isUseWidthScale ? widthScaleRatio : heightScaleRatio;\n\n    let initTranslateX: number = 0;\n    let initTranslateY: number = 0;\n    let initClipWidth: Dimension = 0;\n    let initClipHeight: Dimension = 0;\n    // 使得PageTwo卡片向上扩到状态栏\n    let initPositionValue: number = -this.uiContext.px2vp(WindowUtils.topAvoidAreaHeightPx + extraTranslateValue);\n\n    if (isUseWidthScale) {\n      initTranslateX = this.uiContext.px2vp(cardItemInfoPx.left -\n        (WindowUtils.windowWidthPx - cardItemInfoPx.width) / 2);\n      initClipWidth = '100%';\n      initClipHeight = this.uiContext.px2vp((cardItemInfoPx.height) / initScale);\n      initTranslateY = this.uiContext.px2vp(cardItemInfoPx.top - ((this.uiContext.vp2px(initClipHeight) -\n        this.uiContext.vp2px(initClipHeight) * initScale) / 2));\n    } else {\n      initTranslateY = this.uiContext.px2vp(cardItemInfoPx.top -\n        (WindowUtils.windowHeightPx - cardItemInfoPx.height) / 2);\n      initClipHeight = '100%';\n      initClipWidth = this.uiContext.px2vp((cardItemInfoPx.width) / initScale);\n      initTranslateX = this.uiContext.px2vp(cardItemInfoPx.left -\n        (WindowUtils.windowWidthPx / 2 - cardItemInfoPx.width / 2));\n    }\n\n    // 转场动画开始前通过计算scale、translate、position和clip height & width，确定节点迁移前后位置一致\n    hilog.info(DOMAIN, TAG, 'initScale: ' + initScale + ' initTranslateX ' + initTranslateX +\n      ' initTranslateY ' + initTranslateY + ' initClipWidth ' + initClipWidth +\n      ' initClipHeight ' + initClipHeight + ' initPositionValue ' + initPositionValue);\n\n    // 转场至新页面\n    if (isPush && !isExit) {\n      this.scaleValue = initScale;\n      this.translateX = initTranslateX;\n      this.clipWidth = initClipWidth;\n      this.clipHeight = initClipHeight;\n      this.translateY = initTranslateY;\n      this.positionValue = initPositionValue;\n\n      this.uiContext?.animateTo({\n        curve: curves.interpolatingSpring(0, 1, 328, 36),\n        onFinish: () => {\n          if (transitionProxy) {\n            transitionProxy.finishTransition();\n          }\n        }\n      }, () => {\n        this.scaleValue = 1.0;\n        this.translateX = 0;\n        this.translateY = 0;\n        this.clipWidth = '100%';\n        this.clipHeight = '100%';\n        // 页面圆角与系统圆角一致\n        this.radius = DEVICE_BORDER_RADIUS;\n        this.showDetailContent = true;\n      })\n\n      this.uiContext?.animateTo({\n        duration: 100,\n        curve: Curve.Sharp,\n      }, () => {\n        // 页面由透明逐渐变为设置背景色\n        this.navDestinationBgColor = '#00ffffff';\n      })\n\n      // 返回旧页面\n    } else if (!isPush && isExit) {\n\n      this.uiContext?.animateTo({\n        duration: 350,\n        curve: Curve.EaseInOut,\n        onFinish: () => {\n          if (transitionProxy) {\n            transitionProxy.finishTransition();\n          }\n          prePageOnFinish(myNodeController);\n          // 自定义节点从PageTwo下树\n          if (myNodeController != undefined) {\n            (myNodeController as MyNodeController).onRemove();\n          }\n        }\n      }, () => {\n        this.scaleValue = initScale;\n        this.translateX = initTranslateX;\n        this.translateY = initTranslateY;\n        this.radius = 0;\n        this.clipWidth = initClipWidth;\n        this.clipHeight = initClipHeight;\n        this.showDetailContent = false;\n      })\n\n      this.uiContext?.animateTo({\n        duration: 200,\n        delay: 150,\n        curve: Curve.Friction,\n      }, () => {\n        this.navDestinationBgColor = Color.Transparent;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ComponentAttrUtils.ets\n// 获取组件相对窗口的位置\nimport { componentUtils, UIContext } from '@kit.ArkUI';\nimport { JSON } from '@kit.ArkTS';\n\nexport class ComponentAttrUtils {\n  // 根据组件的id获取组件的位置信息\n  public static getRectInfoById(context: UIContext, id: string): RectInfoInPx {\n    if (!context || !id) {\n      throw Error('object is empty');\n    }\n    let componentInfo: componentUtils.ComponentInfo = context.getComponentUtils().getRectangleById(id);\n\n    if (!componentInfo) {\n      throw Error('object is empty');\n    }\n\n    let rstRect: RectInfoInPx = new RectInfoInPx();\n    const widthScaleGap = componentInfo.size.width * (1 - componentInfo.scale.x) / 2;\n    const heightScaleGap = componentInfo.size.height * (1 - componentInfo.scale.y) / 2;\n    rstRect.left = componentInfo.translate.x + componentInfo.windowOffset.x + widthScaleGap;\n    rstRect.top = componentInfo.translate.y + componentInfo.windowOffset.y + heightScaleGap;\n    rstRect.right =\n      componentInfo.translate.x + componentInfo.windowOffset.x + componentInfo.size.width - widthScaleGap;\n    rstRect.bottom =\n      componentInfo.translate.y + componentInfo.windowOffset.y + componentInfo.size.height - heightScaleGap;\n    rstRect.width = rstRect.right - rstRect.left;\n    rstRect.height = rstRect.bottom - rstRect.top;\n    return {\n      left: rstRect.left,\n      right: rstRect.right,\n      top: rstRect.top,\n      bottom: rstRect.bottom,\n      width: rstRect.width,\n      height: rstRect.height\n    }\n  }\n}\n\nexport class RectInfoInPx {\n  public left: number = 0;\n  public top: number = 0;\n  public right: number = 0;\n  public bottom: number = 0;\n  public width: number = 0;\n  public height: number = 0;\n}\n\nexport class RectJson {\n  public $rect: Array<number> = [];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// WindowUtils.ets\n// 窗口信息\nimport { window } from '@kit.ArkUI';\n\nexport class WindowUtils {\n  public static window: window.Window;\n  public static windowWidthPx: number;\n  public static windowHeightPx: number;\n  public static topAvoidAreaHeightPx: number;\n  public static navigationIndicatorHeightPx: number;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\n// 程序入口处的onWindowStageCreate增加对窗口宽高等的抓取\n\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { WindowUtils } from '../utils/WindowUtils';\nimport { display, window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG: string = 'EntryAbility';\n\nexport default class EntryAbility extends UIAbility {\n  private currentBreakPoint: string = '';\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onWindowStageCreate');\n    // ...\n    // 获取窗口宽高\n    WindowUtils.window = windowStage.getMainWindowSync();\n    WindowUtils.windowWidthPx = WindowUtils.window.getWindowProperties().windowRect.width;\n    WindowUtils.windowHeightPx = WindowUtils.window.getWindowProperties().windowRect.height;\n\n    this.updateBreakpoint(WindowUtils.windowWidthPx);\n\n    // 获取上方避让区(状态栏等)高度\n    let avoidArea = WindowUtils.window.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);\n    WindowUtils.topAvoidAreaHeightPx = avoidArea.topRect.height;\n\n    // 获取导航条高度\n    let navigationArea = WindowUtils.window.getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR);\n    WindowUtils.navigationIndicatorHeightPx = navigationArea.bottomRect.height;\n\n    hilog.info(DOMAIN, TAG, 'the width is ' + WindowUtils.windowWidthPx + '  ' + WindowUtils.windowHeightPx + '  ' +\n    WindowUtils.topAvoidAreaHeightPx + '  ' + WindowUtils.navigationIndicatorHeightPx);\n\n    // 监听窗口尺寸、状态栏高度及导航条高度的变化并更新\n    try {\n      WindowUtils.window.on('windowSizeChange', (data) => {\n        hilog.info(DOMAIN, TAG, 'on windowSizeChange, the width is ' + data.width + ', the height is ' + data.height);\n        WindowUtils.windowWidthPx = data.width;\n        WindowUtils.windowHeightPx = data.height;\n        this.updateBreakpoint(data.width);\n        AppStorage.setOrCreate('windowSizeChanged', Date.now());\n      })\n\n      WindowUtils.window.on('avoidAreaChange', (data) => {\n        if (data.type === window.AvoidAreaType.TYPE_SYSTEM) {\n          let topRectHeight = data.area.topRect.height;\n          hilog.info(DOMAIN, TAG, 'on avoidAreaChange, the top avoid area height is ' + topRectHeight);\n          WindowUtils.topAvoidAreaHeightPx = topRectHeight;\n        } else if (data.type === window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR) {\n          let bottomRectHeight = data.area.bottomRect.height;\n          hilog.info(DOMAIN, TAG, 'on avoidAreaChange, the navigation indicator height is ' + bottomRectHeight);\n          WindowUtils.navigationIndicatorHeightPx = bottomRectHeight;\n        }\n      })\n    } catch (exception) {\n      hilog.error(DOMAIN, TAG, `register failed. code: ${exception.code}, message: ${exception.message}`);\n    }\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(DOMAIN, TAG, 'Succeeded in loading the content.');\n    });\n  }\n\n  updateBreakpoint(width: number) {\n    let windowWidthVp = width / (display.getDefaultDisplaySync().densityDPI / 160);\n    let newBreakPoint: string = '';\n    if (windowWidthVp < 400) {\n      newBreakPoint = 'xs';\n    } else if (windowWidthVp < 600) {\n      newBreakPoint = 'sm';\n    } else if (windowWidthVp < 800) {\n      newBreakPoint = 'md';\n    } else {\n      newBreakPoint = 'lg';\n    }\n    if (this.currentBreakPoint !== newBreakPoint) {\n      this.currentBreakPoint = newBreakPoint;\n      // 使用状态变量记录当前断点值\n      AppStorage.setOrCreate('currentBreakpoint', this.currentBreakPoint);\n    }\n  }\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CustomComponent.ets\n// 自定义占位节点，跨容器迁移能力\nimport { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@Builder\nfunction cardBuilder() {\n  // 请将$r('app.media.card')替换为实际资源文件\n  Image($r('app.media.card'))\n    .width('100%')\n    .id('card')\n}\n\nexport class MyNodeController extends NodeController {\n  private cardNode: BuilderNode<[]> | null = null;\n  private wrapBuilder: WrappedBuilder<[]> = wrapBuilder(cardBuilder);\n  private needCreate: boolean = false;\n  private isRemove: boolean = false;\n\n  constructor(create: boolean) {\n    super();\n    this.needCreate = create;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.isRemove === true) {\n      return null;\n    }\n    if (this.needCreate && this.cardNode === null) {\n      this.cardNode = new BuilderNode(uiContext);\n      this.cardNode.build(this.wrapBuilder);\n    }\n    if (this.cardNode === null) {\n      return null;\n    }\n    return this.cardNode!.getFrameNode()!;\n  }\n\n  getNode(): BuilderNode<[]> | null {\n    return this.cardNode;\n  }\n\n  setNode(node: BuilderNode<[]> | null) {\n    this.cardNode = node;\n    this.rebuild();\n  }\n\n  onRemove() {\n    this.isRemove = true;\n    this.rebuild();\n    this.isRemove = false;\n  }\n\n  init(uiContext: UIContext) {\n    this.cardNode = new BuilderNode(uiContext);\n    this.cardNode.build(this.wrapBuilder);\n  }\n}\n\nlet myNode: MyNodeController | undefined;\n\nexport const createMyNode =\n  (uiContext: UIContext) => {\n    myNode = new MyNodeController(false);\n    myNode.init(uiContext);\n  }\n\nexport const getMyNode = (): MyNodeController | undefined => {\n  return myNode;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(260381)/* ["default"] */.A) + "",
        width: "364",
        height: "784"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结合bindsheet使用",
      children: "结合BindSheet使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["想实现半模态转场（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
        children: "bindSheet"
      }), "）的同时，组件从初始界面做一镜到底动画到半模态页面的效果，可以使用这样的设计思路。将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#sheetoptions",
        children: "SheetOptions"
      }), "中的mode设置为SheetMode.EMBEDDED，该模式下新起的页面可以覆盖在半模态弹窗上，页面返回后该半模态依旧存在，半模态面板内容不丢失。在半模态转场的同时设置一全模态转场（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover",
        children: "bindContentCover"
      }), "）页面无转场出现，该页面仅有需要做共享元素转场的组件，通过属性动画，展示组件从初始界面至半模态页面的一镜到底动效，并在动画结束时关闭页面，并将该组件迁移至半模态页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以点击图片展开半模态页的场景为例，实现步骤为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在初始界面挂载半模态转场和全模态转场两个页面，半模态页按需布局，全模态页面仅放置一镜到底动效需要的组件，抓取布局信息，使其初始位置为初始界面图片的位置。点击初始界面图片时，同时触发半模态和全模态页面出现，因设置为SheetMode.EMBEDDED模式，此时全模态页面层级最高。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置不可见的占位图片置于半模态页上，作为一镜到底动效结束时图片的终止位置。利用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-inspector/js-apis-arkui-inspector",
          children: "布局回调"
        }), "监听该占位图片布局完成的时候，此时执行回调抓取占位图片的位置信息，随后全模态页面上的图片利用属性动画开始进行共享元素转场。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全模态页面的动画结束时触发结束回调，关闭全模态页面，将共享元素图片的节点迁移至半模态页面，替换占位图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需注意，半模态页面的弹起高度不同，其页面起始位置也有所不同，而全模态则是全屏显示，两者存在一高度差，做一镜到底动画时，需要计算差值并进行修正，具体可见demo。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "还可以配合一镜到底动画，给初始界面图片也增加一个从透明到出现的动画，使得动效更为流畅。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "├──entry/src/main/ets                 // 代码区\n│  ├──entryability\n│  │  └──EntryAbility.ets             // 程序入口类\n│  ├──NodeContainer\n│  │  └──CustomComponent.ets          // 自定义占位节点\n│  ├──pages\n│  │  └──Index.ets                    // 进行共享元素转场的主页面\n│  └──utils\n│     ├──ComponentAttrUtils.ets       // 组件位置获取\n│     └──WindowUtils.ets              // 窗口信息\n└──entry/src/main/resources           // 资源文件\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.ets\nimport { MyNodeController, createMyNode, getMyNode } from '../NodeContainer/CustomComponent';\nimport { ComponentAttrUtils, RectInfoInPx } from '../utils/ComponentAttrUtils';\nimport { WindowUtils } from '../utils/WindowUtils';\nimport { inspector } from '@kit.ArkUI'\n\nclass AnimationInfo {\n  scale: number = 0;\n  translateX: number = 0;\n  translateY: number = 0;\n  clipWidth: Dimension = 0;\n  clipHeight: Dimension = 0;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State isShowSheet: boolean = false;\n  @State isShowImage: boolean = false;\n  @State isShowOverlay: boolean = false;\n  @State isAnimating: boolean = false;\n  @State isEnabled: boolean = true;\n\n  @State scaleValue: number = 0;\n  @State translateX: number = 0;\n  @State translateY: number = 0;\n  @State clipWidth: Dimension = 0;\n  @State clipHeight: Dimension = 0;\n  @State radius: number = 0;\n  // 原图的透明度\n  @State opacityDegree: number = 1;\n\n  // 抓取照片原位置信息\n  private originInfo: AnimationInfo = new AnimationInfo;\n  // 抓取照片在半模态页上位置信息\n  private targetInfo: AnimationInfo = new AnimationInfo;\n  // 半模态高度\n  private bindSheetHeight: number = 450;\n  // 半模态上图片圆角\n  private sheetRadius: number = 20;\n\n  // 设置半模态上图片的布局监听\n  listener:inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver('target');\n  aboutToAppear(): void {\n    // 设置半模态上图片的布局完成回调\n    let onLayoutComplete:()=>void=():void=>{\n      // 目标图片布局完成时抓取布局信息\n      this.targetInfo = this.calculateData('target');\n      // 仅半模态正确布局且此时无动画时触发一镜到底动画\n      if (this.targetInfo.scale != 0 && this.targetInfo.clipWidth != 0 && this.targetInfo.clipHeight != 0 && !this.isAnimating) {\n        this.isAnimating = true;\n        // 用于一镜到底的模态页的属性动画\n        this.getUIContext()?.animateTo({\n          duration: 1000,\n          curve: Curve.Friction,\n          onFinish: () => {\n            // 模态转场页（overlay）上的自定义节点下树\n            this.isShowOverlay = false;\n            // 半模态上的自定义节点上树，由此完成节点迁移\n            this.isShowImage = true;\n          }\n        }, () => {\n          this.scaleValue = this.targetInfo.scale;\n          this.translateX = this.targetInfo.translateX;\n          this.clipWidth = this.targetInfo.clipWidth;\n          this.clipHeight = this.targetInfo.clipHeight;\n          // 修正因半模态高度和缩放导致的高度差\n          this.translateY = this.targetInfo.translateY +\n            (this.getUIContext().px2vp(WindowUtils.windowHeight_px) - this.bindSheetHeight\n              - this.getUIContext().px2vp(WindowUtils.navigationIndicatorHeight_px) - this.getUIContext().px2vp(WindowUtils.topAvoidAreaHeight_px));\n          // 修正因缩放导致的圆角差异\n          this.radius = this.sheetRadius / this.scaleValue\n        })\n        // 原图从透明到出现的动画\n        this.getUIContext()?.animateTo({\n          duration: 2000,\n          curve: Curve.Friction,\n        }, () => {\n          this.opacityDegree = 1;\n        })\n      }\n    }\n    // 打开布局监听\n    this.listener.on('layout', onLayoutComplete)\n  }\n\n  // 获取对应id的组件相对窗口左上角的属性\n  calculateData(id: string): AnimationInfo {\n    let itemInfo: RectInfoInPx =\n      ComponentAttrUtils.getRectInfoById(WindowUtils.window.getUIContext(), id);\n    // 首先计算图片的宽高与窗口宽高的比例\n    let widthScaleRatio = itemInfo.width / WindowUtils.windowWidth_px;\n    let heightScaleRatio = itemInfo.height / WindowUtils.windowHeight_px;\n    let isUseWidthScale = widthScaleRatio > heightScaleRatio;\n    let itemScale: number = isUseWidthScale ? widthScaleRatio : heightScaleRatio;\n    let itemTranslateX: number = 0;\n    let itemClipWidth: Dimension = 0;\n    let itemClipHeight: Dimension = 0;\n    let itemTranslateY: number = 0;\n\n    if (isUseWidthScale) {\n      itemTranslateX = this.getUIContext().px2vp(itemInfo.left - (WindowUtils.windowWidth_px - itemInfo.width) / 2);\n      itemClipWidth = '100%';\n      itemClipHeight = this.getUIContext().px2vp((itemInfo.height) / itemScale);\n      itemTranslateY = this.getUIContext().px2vp(itemInfo.top - ((this.getUIContext().vp2px(itemClipHeight) - this.getUIContext().vp2px(itemClipHeight) * itemScale) / 2));\n    } else {\n      itemTranslateY = this.getUIContext().px2vp(itemInfo.top - (WindowUtils.windowHeight_px - itemInfo.height) / 2);\n      itemClipHeight = '100%';\n      itemClipWidth = this.getUIContext().px2vp((itemInfo.width) / itemScale);\n      itemTranslateX = this.getUIContext().px2vp(itemInfo.left - (WindowUtils.windowWidth_px / 2 - itemInfo.width / 2));\n    }\n\n    return {\n      scale: itemScale,\n      translateX: itemTranslateX ,\n      translateY: itemTranslateY,\n      clipWidth: itemClipWidth,\n      clipHeight: itemClipHeight,\n    }\n  }\n\n  // 照片页\n  build() {\n    Column() {\n      Text('照片')\n        .textAlign(TextAlign.Start)\n        .width('100%')\n        .fontSize(30)\n        .padding(20)\n      // 图片使用Resource资源，需用户自定义\n      Image($r(\"app.media.flower\"))\n        .opacity(this.opacityDegree)\n        .width('90%')\n        .id('origin')// 挂载半模态页\n        .enabled(this.isEnabled)\n        .onClick(() => {\n          // 获取原始图像的位置信息，将模态页上图片移动缩放至该位置\n          this.originInfo = this.calculateData('origin');\n          this.scaleValue = this.originInfo.scale;\n          this.translateX = this.originInfo.translateX;\n          this.translateY = this.originInfo.translateY;\n          this.clipWidth = this.originInfo.clipWidth;\n          this.clipHeight = this.originInfo.clipHeight;\n          this.radius = 0;\n          this.opacityDegree = 0;\n          // 启动半模态页和模态页\n          this.isShowSheet = true;\n          this.isShowOverlay = true;\n          // 设置原图为不可交互抗打断\n          this.isEnabled = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .padding({ top: 20 })\n    .alignItems(HorizontalAlign.Center)\n    .bindSheet(this.isShowSheet, this.mySheet(), {\n      // Embedded模式使得其他页面可以高于半模态页\n      mode: SheetMode.EMBEDDED,\n      height: this.bindSheetHeight,\n      onDisappear: () => {\n        // 保证半模态消失时状态正确\n        this.isShowImage = false;\n        this.isShowSheet = false;\n        // 设置一镜到底动画又进入可触发状态\n        this.isAnimating = false;\n        // 原图重新变为可交互状态\n        this.isEnabled = true;\n      }\n    }) // 挂载模态页作为一镜到底动画的实现页\n    .bindContentCover(this.isShowOverlay, this.overlayNode(), {\n      // 模态页面设置为无转场\n      transition: TransitionEffect.IDENTITY,\n    })\n  }\n\n  // 半模态页面\n  @Builder\n  mySheet() {\n    Column({space: 20}) {\n      Text('半模态页面')\n        .fontSize(30)\n      Row({space: 40}) {\n        Column({space: 20}) {\n          ForEach([1, 2, 3, 4], () => {\n            Stack()\n              .backgroundColor(Color.Pink)\n              .borderRadius(20)\n              .width(60)\n              .height(60)\n          })\n        }\n        Column() {\n          if (this.isShowImage) {\n            // 半模态页面的自定义图片节点\n            ImageNode()\n          }\n          else {\n            // 抓取布局和占位用，实际不显示\n            // 图片使用Resource资源，需用户自定义\n            Image($r(\"app.media.flower\"))\n              .visibility(Visibility.Hidden)\n          }\n        }\n        .height(300)\n        .width(200)\n        .borderRadius(20)\n        .clip(true)\n        .id('target')\n      }\n      .alignItems(VerticalAlign.Top)\n    }\n    .alignItems(HorizontalAlign.Start)\n    .height('100%')\n    .width('100%')\n    .margin(40)\n  }\n\n  @Builder\n  overlayNode() {\n    // Stack需要设置alignContent为TopStart，否则在高度变化过程中，截图和内容都会随高度重新布局位置\n    Stack({ alignContent: Alignment.TopStart }) {\n      ImageNode()\n    }\n    .scale({ x: this.scaleValue, y: this.scaleValue, centerX: undefined, centerY: undefined})\n    .translate({ x: this.translateX, y: this.translateY })\n    .width(this.clipWidth)\n    .height(this.clipHeight)\n    .borderRadius(this.radius)\n    .clip(true)\n  }\n}\n\n@Component\nstruct ImageNode {\n  @State myNodeController: MyNodeController | undefined = new MyNodeController(false);\n\n  aboutToAppear(): void {\n    // 获取自定义节点\n    let node = getMyNode();\n    if (node == undefined) {\n      // 新建自定义节点\n      createMyNode(this.getUIContext());\n    }\n    this.myNodeController = getMyNode();\n  }\n\n  aboutToDisappear(): void {\n    if (this.myNodeController != undefined) {\n      // 节点下树\n      this.myNodeController.onRemove();\n    }\n  }\n  build() {\n    NodeContainer(this.myNodeController)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CustomComponent.ets\n// 自定义占位节点，跨容器迁移能力\nimport { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';\n\n@Builder\nfunction flowerBuilder() {\n  // 请将$r('app.media.longevity_flower')替换为实际资源文件\n  Image($r('app.media.longevity_flower'))\n  // 避免第一次加载图片时图片闪烁\n    .syncLoad(true);\n}\n\nexport class MyNodeController extends NodeController {\n  private flowerNode: BuilderNode<[]> | null = null;\n  private wrapBuilder: WrappedBuilder<[]> = wrapBuilder(flowerBuilder);\n  private needCreate: boolean = false;\n  private isRemove: boolean = false;\n\n  constructor(create: boolean) {\n    super();\n    this.needCreate = create;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    if (this.isRemove === true) {\n      return null;\n    }\n    if (this.needCreate && this.flowerNode === null) {\n      this.flowerNode = new BuilderNode(uiContext);\n      this.flowerNode.build(this.wrapBuilder);\n    }\n    if (this.flowerNode === null) {\n      return null;\n    }\n    return this.flowerNode!.getFrameNode()!;\n  }\n\n  getNode(): BuilderNode<[]> | null {\n    return this.flowerNode;\n  }\n\n  setNode(node: BuilderNode<[]> | null) {\n    this.flowerNode = node;\n    this.rebuild();\n  }\n\n  onRemove() {\n    this.isRemove = true;\n    this.rebuild();\n    this.isRemove = false;\n  }\n\n  init(uiContext: UIContext) {\n    this.flowerNode = new BuilderNode(uiContext);\n    this.flowerNode.build(this.wrapBuilder);\n  }\n}\n\nlet myNode: MyNodeController | undefined;\n\nexport const createMyNode =\n  (uiContext: UIContext) => {\n    myNode = new MyNodeController(false);\n    myNode.init(uiContext);\n  }\n\nexport const getMyNode = (): MyNodeController | undefined => {\n  return myNode;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ComponentAttrUtils.ets\n// 获取组件相对窗口的位置\nimport { componentUtils, UIContext } from '@kit.ArkUI';\nimport { JSON } from '@kit.ArkTS';\n\nexport class ComponentAttrUtils {\n  // 根据组件的id获取组件的位置信息\n  public static getRectInfoById(context: UIContext, id: string): RectInfoInPx {\n    if (!context || !id) {\n      throw Error('object is empty');\n    }\n    let componentInfo: componentUtils.ComponentInfo = context.getComponentUtils().getRectangleById(id);\n\n    if (!componentInfo) {\n      throw Error('object is empty');\n    }\n\n    let rstRect: RectInfoInPx = new RectInfoInPx();\n    const widthScaleGap = componentInfo.size.width * (1 - componentInfo.scale.x) / 2;\n    const heightScaleGap = componentInfo.size.height * (1 - componentInfo.scale.y) / 2;\n    rstRect.left = componentInfo.translate.x + componentInfo.windowOffset.x + widthScaleGap;\n    rstRect.top = componentInfo.translate.y + componentInfo.windowOffset.y + heightScaleGap;\n    rstRect.right =\n      componentInfo.translate.x + componentInfo.windowOffset.x + componentInfo.size.width - widthScaleGap;\n    rstRect.bottom =\n      componentInfo.translate.y + componentInfo.windowOffset.y + componentInfo.size.height - heightScaleGap;\n    rstRect.width = rstRect.right - rstRect.left;\n    rstRect.height = rstRect.bottom - rstRect.top;\n    return {\n      left: rstRect.left,\n      right: rstRect.right,\n      top: rstRect.top,\n      bottom: rstRect.bottom,\n      width: rstRect.width,\n      height: rstRect.height\n    }\n  }\n}\n\nexport class RectInfoInPx {\n  public left: number = 0;\n  public top: number = 0;\n  public right: number = 0;\n  public bottom: number = 0;\n  public width: number = 0;\n  public height: number = 0;\n}\n\nexport class RectJson {\n  public $rect: Array<number> = [];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// WindowUtils.ets\n// 窗口信息\nimport { window } from '@kit.ArkUI';\n\nexport class WindowUtils {\n  public static window: window.Window;\n  public static windowWidthPx: number;\n  public static windowHeightPx: number;\n  public static topAvoidAreaHeightPx: number;\n  public static navigationIndicatorHeightPx: number;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\n// 程序入口处的onWindowStageCreate增加对窗口宽高等的抓取\n\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { WindowUtils } from '../utils/WindowUtils';\nimport { display, window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG: string = 'EntryAbility';\n\nexport default class EntryAbility extends UIAbility {\n  private currentBreakPoint: string = '';\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onWindowStageCreate');\n    // ...\n    // 获取窗口宽高\n    WindowUtils.window = windowStage.getMainWindowSync();\n    WindowUtils.windowWidthPx = WindowUtils.window.getWindowProperties().windowRect.width;\n    WindowUtils.windowHeightPx = WindowUtils.window.getWindowProperties().windowRect.height;\n\n    this.updateBreakpoint(WindowUtils.windowWidthPx);\n\n    // 获取上方避让区(状态栏等)高度\n    let avoidArea = WindowUtils.window.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);\n    WindowUtils.topAvoidAreaHeightPx = avoidArea.topRect.height;\n\n    // 获取导航条高度\n    let navigationArea = WindowUtils.window.getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR);\n    WindowUtils.navigationIndicatorHeightPx = navigationArea.bottomRect.height;\n\n    hilog.info(DOMAIN, TAG, 'the width is ' + WindowUtils.windowWidthPx + '  ' + WindowUtils.windowHeightPx + '  ' +\n    WindowUtils.topAvoidAreaHeightPx + '  ' + WindowUtils.navigationIndicatorHeightPx);\n\n    // 监听窗口尺寸、状态栏高度及导航条高度的变化并更新\n    try {\n      WindowUtils.window.on('windowSizeChange', (data) => {\n        hilog.info(DOMAIN, TAG, 'on windowSizeChange, the width is ' + data.width + ', the height is ' + data.height);\n        WindowUtils.windowWidthPx = data.width;\n        WindowUtils.windowHeightPx = data.height;\n        this.updateBreakpoint(data.width);\n        AppStorage.setOrCreate('windowSizeChanged', Date.now());\n      })\n\n      WindowUtils.window.on('avoidAreaChange', (data) => {\n        if (data.type === window.AvoidAreaType.TYPE_SYSTEM) {\n          let topRectHeight = data.area.topRect.height;\n          hilog.info(DOMAIN, TAG, 'on avoidAreaChange, the top avoid area height is ' + topRectHeight);\n          WindowUtils.topAvoidAreaHeightPx = topRectHeight;\n        } else if (data.type === window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR) {\n          let bottomRectHeight = data.area.bottomRect.height;\n          hilog.info(DOMAIN, TAG, 'on avoidAreaChange, the navigation indicator height is ' + bottomRectHeight);\n          WindowUtils.navigationIndicatorHeightPx = bottomRectHeight;\n        }\n      })\n    } catch (exception) {\n      hilog.error(DOMAIN, TAG, `register failed. code: ${exception.code}, message: ${exception.message}`);\n    }\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(DOMAIN, TAG, 'Succeeded in loading the content.');\n    });\n  }\n\n  updateBreakpoint(width: number) {\n    let windowWidthVp = width / (display.getDefaultDisplaySync().densityDPI / 160);\n    let newBreakPoint: string = '';\n    if (windowWidthVp < 400) {\n      newBreakPoint = 'xs';\n    } else if (windowWidthVp < 600) {\n      newBreakPoint = 'sm';\n    } else if (windowWidthVp < 800) {\n      newBreakPoint = 'md';\n    } else {\n      newBreakPoint = 'lg';\n    }\n    if (this.currentBreakPoint !== newBreakPoint) {\n      this.currentBreakPoint = newBreakPoint;\n      // 使用状态变量记录当前断点值\n      AppStorage.setOrCreate('currentBreakpoint', this.currentBreakPoint);\n    }\n  }\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(848583)/* ["default"] */.A) + "",
        width: "338",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用geometrytransition共享元素转场",
      children: "使用geometryTransition共享元素转场"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-geometrytransition/ts-transition-animation-geometrytransition",
        children: "geometryTransition"
      }), "用于组件内隐式共享元素转场，在视图状态切换过程中提供丝滑的上下文继承过渡体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "geometryTransition的使用方式为对需要添加一镜到底动效的两个组件使用geometryTransition接口绑定同一id，这样在其中一个组件消失同时另一个组件创建出现的时候，系统会对二者添加一镜到底动效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "geometryTransition绑定两个对象的实现方式使得geometryTransition区别于其他方法，最适合用于两个不同对象之间完成一镜到底。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geometrytransition的简单使用",
      children: "geometryTransition的简单使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于同一个页面中的两个元素的一镜到底效果，geometryTransition接口的简单使用示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct IfElseGeometryTransition {\n  @State isShow: boolean = false;\n\n  build() {\n    Stack({ alignContent: Alignment.Center }) {\n      if (this.isShow) {\n        // 请将$r('app.media.spring')替换为实际资源文件\n        Image($r('app.media.spring'))\n          .autoResize(false)\n          .clip(true)\n          .width(200)\n          .height(200)\n          .borderRadius(100)\n          .geometryTransition('picture')\n          .transition(TransitionEffect.OPACITY)\n          // 在打断场景下，即动画过程中点击页面触发下一次转场，如果不加id，则会出现重影\n          // 加了id之后，新建的spring图片会复用之前的spring图片节点，不会重新创建节点，也就不会有重影问题\n          // 加id的规则为加在if和else下的第一个节点上，有多个并列节点则也需要进行添加\n          .id('item1')\n      } else {\n        // geometryTransition此处绑定的是容器，那么容器内的子组件需设为相对布局跟随父容器变化，\n        // 套多层容器为了说明相对布局约束传递\n        Column() {\n          Column() {\n            // 请将$r('app.media.sunset_sky')替换为实际资源文件\n            Image($r('app.media.sunset_sky'))\n              .size({ width: '100%', height: '100%' })\n          }\n          .size({ width: '100%', height: '100%' })\n        }\n        .width(100)\n        .height(100)\n        // geometryTransition会同步圆角，但仅限于geometryTransition绑定处，此处绑定的是容器\n        // 则对容器本身有圆角同步而不会操作容器内部子组件的borderRadius\n        .borderRadius(50)\n        .clip(true)\n        .geometryTransition('picture')\n        // transition保证节点离场不被立即析构，设置通用转场效果\n        .transition(TransitionEffect.OPACITY)\n        .position({ x: 40, y: 40 })\n        .id('item2')\n      }\n    }\n    .onClick(() => {\n      this.getUIContext()?.animateTo({\n        curve: curves.springMotion()\n      }, () => {\n        this.isShow = !this.isShow;\n      })\n    })\n    .size({ width: '100%', height: '100%' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625738)/* ["default"] */.A) + "",
        width: "238",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geometrytransition结合模态转场使用",
      children: "geometryTransition结合模态转场使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更多的场景中，需要对一个页面的元素与另一个页面的元素添加一镜到底动效。可以通过geometryTransition搭配模态转场接口实现。以点击头像弹出个人信息页的demo为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\nclass PostData {\n  // 请将$r('app.media.flower')替换为实际资源文件\n  avatar: Resource = $r('app.media.flower');\n  name: string = '';\n  message: ResourceStr = '';\n  images: Resource[] = [];\n}\n\n@Entry\n@Component\nstruct Index {\n  @State isPersonalPageShow: boolean = false;\n  @State selectedIndex: number = 0;\n  @State alphaValue: number = 1;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  // 数组中图片均使用Resource资源，需用户自定义\n  private allPostData: PostData[] = [\n    {\n      // 请将$r('app.media.flower')替换为实际资源文件\n      avatar: $r('app.media.flower'),\n      name: 'Alice',\n      // 请将$r('app.string.shareTransition_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"天气晴朗\"\n      message: $r('app.string.shareTransition_text1'),\n      // 请将$r('app.media.spring')替换为实际资源文件\n      // 请将$r('app.media.tall_tree')替换为实际资源文件\n      images: [$r('app.media.spring'), $r('app.media.tall_tree')]\n    },\n    {\n      // 请将$r('app.media.sunset_sky')替换为实际资源文件\n      avatar: $r('app.media.sunset_sky'),\n      name: 'Bob',\n      // 请将$r('app.string.shareTransition_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"你好世界\"\n      message: $r('app.string.shareTransition_text2'),\n      // 请将$r('app.media.island')替换为实际资源文件\n      images: [$r('app.media.island')]\n    },\n    {\n      // 请将$r('app.media.tall_tree')替换为实际资源文件\n      avatar: $r('app.media.tall_tree'),\n      name: 'Carl',\n      // 请将$r('app.string.shareTransition_text3')替换为实际资源文件，在本示例中该资源文件的value值为\"万物生长\"\n      message: $r('app.string.shareTransition_text3'),\n      // 请将$r('app.media.flower')替换为实际资源文件\n      // 请将$r('app.media.sunset_sky')替换为实际资源文件\n      // 请将$r('app.media.spring')替换为实际资源文件\n      images: [$r('app.media.flower'), $r('app.media.sunset_sky'), $r('app.media.spring')]\n    }];\n\n  private onAvatarClicked(index: number): void {\n    this.selectedIndex = index;\n    this.getUIContext()?.animateTo({\n      duration: 350,\n      curve: Curve.Friction\n    }, () => {\n      this.isPersonalPageShow = !this.isPersonalPageShow;\n      this.alphaValue = 0;\n    });\n  }\n\n  private onPersonalPageBack(index: number): void {\n    this.getUIContext()?.animateTo({\n      duration: 350,\n      curve: Curve.Friction\n    }, () => {\n      this.isPersonalPageShow = !this.isPersonalPageShow;\n      this.alphaValue = 1;\n    });\n  }\n\n  @Builder\n  PersonalPageBuilder(index: number) {\n    Column({ space: 20 }) {\n      Image(this.allPostData[index].avatar)\n        .size({ width: 200, height: 200 })\n        .borderRadius(100)\n        // 头像配置共享元素效果，与点击的头像的id匹配\n        .geometryTransition(index.toString())\n        .clip(true)\n        .transition(TransitionEffect.opacity(0.99))\n\n      Text(this.allPostData[index].name)\n        .font({ size: 30, weight: 600 })\n        // 对文本添加出现转场效果\n        .transition(TransitionEffect.asymmetric(\n          TransitionEffect.OPACITY\n            .combine(TransitionEffect.translate({ y: 100 })),\n          TransitionEffect.OPACITY.animation({ duration: 0 })\n        ))\n\n      // 请在resources\\base\\element\\string.json文件中配置name为'shareTransition_text11'，value为非空字符串的资源\n      Text(this.context.resourceManager.getStringByNameSync('shareTransition_text11') + this.allPostData[index].name)\n      // 对文本添加出现转场效果\n        .transition(TransitionEffect.asymmetric(\n          TransitionEffect.OPACITY\n            .combine(TransitionEffect.translate({ y: 100 })),\n          TransitionEffect.OPACITY.animation({ duration: 0 })\n        ))\n    }\n    .padding({ top: 20 })\n    .size({ width: 360, height: 780 })\n    .backgroundColor(Color.White)\n    .onClick(() => {\n      this.onPersonalPageBack(index);\n    })\n    .transition(TransitionEffect.asymmetric(\n      TransitionEffect.opacity(0.99),\n      TransitionEffect.OPACITY\n    ))\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      ForEach(this.allPostData, (postData: PostData, index: number) => {\n        Column() {\n          Post({\n            data: postData, index: index, onAvatarClicked: (index: number) => {\n              this.onAvatarClicked(index);\n            }\n          })\n        }\n        .width('100%')\n      }, (postData: PostData, index: number) => index.toString())\n    }\n    .size({ width: '100%', height: '100%' })\n    .backgroundColor('#40808080')\n    .bindContentCover(this.isPersonalPageShow,\n      this.PersonalPageBuilder(this.selectedIndex), { modalTransition: ModalTransition.NONE })\n    .opacity(this.alphaValue)\n  }\n}\n\n@Component\nexport default struct Post {\n  @Prop data: PostData;\n  @Prop index: number;\n  @State expandImageSize: number = 100;\n  @State avatarSize: number = 50;\n  private onAvatarClicked: (index: number) => void = (index: number) => { };\n\n  build() {\n    Column({ space: 20 }) {\n      Row({ space: 10 }) {\n        Image(this.data.avatar)\n          .size({ width: this.avatarSize, height: this.avatarSize })\n          .borderRadius(this.avatarSize / 2)\n          .clip(true)\n          .onClick(() => {\n            this.onAvatarClicked(this.index);\n          })\n          // 对头像绑定共享元素转场的id\n          .geometryTransition(this.index.toString(), { follow: true })\n          .transition(TransitionEffect.OPACITY.animation({ duration: 350, curve: Curve.Friction }))\n\n        Text(this.data.name)\n      }\n      .justifyContent(FlexAlign.Start)\n\n      Text(this.data.message)\n\n      Row({ space: 15 }) {\n        ForEach(this.data.images, (imageResource: Resource, index: number) => {\n          Image(imageResource)\n            .size({ width: 100, height: 100 })\n        }, (imageResource: Resource, index: number) => index.toString())\n      }\n    }\n    .backgroundColor(Color.White)\n    .size({ width: '100%', height: 250 })\n    .alignItems(HorizontalAlign.Start)\n    .padding({ left: 10, top: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果为点击主页的头像后，弹出模态页面显示个人信息，并且两个页面之间的头像做一镜到底动效："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220722)/* ["default"] */.A) + "",
        width: "291",
        height: "630"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/transitions-collection",
          children: "转场动效合集"
        })
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
220722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957990-902ddaf2125a8f44d8d9e1d41865000e.gif");

},
665230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438033-eb33ec4947cf1273a23f6d6fc953dbf5.gif");

},
260381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477989-91c1d39c86f2711e3cec383e09fe1449.gif");

},
812561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957988-362b8dae2927e6d43c72924ce11f6d37.gif");

},
848583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798340-4e90ec90c73e63f60cb0ee8bd4fa30fb.gif");

},
625738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438035-e5b1079d01b1b42b42571de8a9700f55.gif");

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