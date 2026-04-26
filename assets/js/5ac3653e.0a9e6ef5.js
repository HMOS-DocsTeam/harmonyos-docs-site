"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["148053"], {
691187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_manage_components_visibility_arkts_manage_components_visibility_md_5ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-system-scenarization-capability-arkts-manage-components-visibility-arkts-manage-components-visibility-md-5ac.json
var site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_manage_components_visibility_arkts_manage_components_visibility_md_5ac_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility/arkts-manage-components-visibility","title":"感知组件可见性","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility/arkts-manage-components-visibility.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility","slug":"/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"感知组件可见性","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-manage-components-visibility","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用组件截图（ComponentSnapshot）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot/"},"next":{"title":"检查页面布局","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility/arkts-manage-components-visibility.md


const frontMatter = {
	title: '感知组件可见性',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-manage-components-visibility',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '感知组件可见性';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "组件曝光统计与分析",
  "id": "组件曝光统计与分析",
  "level": 2
}, {
  "value": "资源按需加载与释放",
  "id": "资源按需加载与释放",
  "level": 2
}, {
  "value": "感知复杂视图切换",
  "id": "感知复杂视图切换",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "可见性计算与实际视觉不符",
  "id": "可见性计算与实际视觉不符",
  "level": 3
}, {
  "value": "高频回调导致性能下降",
  "id": "高频回调导致性能下降",
  "level": 3
}, {
  "value": "RenderState监听数量超限",
  "id": "renderstate监听数量超限",
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
        id: "感知组件可见性",
        children: "感知组件可见性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件可见性是指组件在屏幕上的显示状态，通过感知可见性，应用能够实现以下典型场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件曝光统计与分析（例如，统计广告组件在屏幕上的显示时长）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "资源按需加载与释放（例如，组件不可见时，释放组件使用的图片、视频等资源）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "感知复杂视图切换（例如，在多层视图嵌套情况下，依据组件的显示状态，处理相关逻辑）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对上述场景，建议按照以下策略进行选择："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BB%84%E4%BB%B6%E6%9B%9D%E5%85%89%E7%BB%9F%E8%AE%A1%E4%B8%8E%E5%88%86%E6%9E%90",
              children: "组件曝光统计与分析"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "onVisibleAreaApproximateChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要监控的组件数量多，需要低频计算降低开销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%B5%84%E6%BA%90%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD%E4%B8%8E%E9%87%8A%E6%94%BE",
              children: "资源按需加载与释放"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "onVisibleAreaChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要监控的组件数量少，希望每帧检测确保状态及时更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%84%9F%E7%9F%A5%E5%A4%8D%E6%9D%82%E8%A7%86%E5%9B%BE%E5%88%87%E6%8D%A2",
              children: "感知复杂视图切换"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nodeRenderState监听"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适合感知页面或页切换导致的可见性变化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用也可自行遍历计算组件可见性，但由于组件存在复杂的层次关系，自行计算涉及大量运算，通常不被推荐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件曝光统计与分析",
      children: "组件曝光统计与分析"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareaapproximatechange17",
        children: "onVisibleAreaApproximateChange"
      }), "监控关键组件（如广告、商品卡片）的曝光时长，用于用户行为分析和运营统计。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口比onVisibleAreaChange性能更优，支持通过设置计算周期减少检测频率，适用于组件数量多、层级深的场景，可显著降低性能消耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273187)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力从API version 17开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ListDataSource implements IDataSource {\n  private list: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  public deleteItem(index: number): void {\n    this.list.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  public insertItem(index: number, data: number): void {\n    this.list.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n}\n\nclass ExposureTrackingData {\n  // 使用一个map记录当前正在展示的广告位，以及它开始被展示的时间戳，以便在它不可见时可以计算在屏幕上的展示时长\n  private visibleAdvertisingInfos = new Map<string, number>();\n  // 使用一个map记录每个广告位的展示总时长\n  private exposureData = new Map<string, number>();\n\n  constructor() {\n  }\n\n  notifyAdvertisingSlotIsAppearing(slot: string): void {\n    // 广告位开始展示，记录起始时间戳\n    let startTimestamp = Date.now()\n    this.visibleAdvertisingInfos.set(slot, startTimestamp)\n  }\n\n  notifyAdvertisingSlotIsDisappearing(slot: string): void {\n    // 广告位开始消失，计算本次展示时长，并累加到总时长数据中\n    let endTimestamp: number = Date.now()\n    let advertisingInfo = this.visibleAdvertisingInfos.get(slot)\n    let duration: number = 0\n    if (advertisingInfo) {\n      duration = endTimestamp - advertisingInfo.valueOf()\n    }\n    // 刷新展示总时长\n    this.updateExposureData(slot, duration)\n    // 从当前可见的map中删除这个广告位信息\n    this.visibleAdvertisingInfos.delete(slot)\n  }\n\n  notifyPageHiding(): void {\n    // 页面正在退出，上报统计数据\n    this.reportData()\n  }\n\n  updateExposureData(slot: string, duration: number) {\n    if (duration <= 0) {\n      return\n    }\n    let oldDuration = 0\n    let dataItem = this.exposureData.get(slot)\n    if (dataItem) {\n      oldDuration = dataItem.valueOf()\n    }\n    this.exposureData.set(slot, oldDuration + duration)\n  }\n\n  consumeAllCurrentVisibleSlots(): void {\n    this.visibleAdvertisingInfos.forEach((value: number, key: string) => {\n      this.notifyAdvertisingSlotIsDisappearing(key)\n    });\n    this.visibleAdvertisingInfos.clear()\n  }\n\n  reportData(): void {\n    // 上报之前先将当前正在展示的广告位统计信息刷新到总时长\n    this.consumeAllCurrentVisibleSlots()\n    // 发送数据到分析平台\n    console.info(`曝光数据上报: ` + Array.from(this.exposureData))\n    // 上报后清空\n    this.exposureData.clear()\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ExposureTrackingPage {\n  private data: ListDataSource =\n    new ListDataSource([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);\n  private exposureData = new ExposureTrackingData()\n\n  onPageHide(): void {\n    // 在页面退出时，上报统计数据到分析平台\n    this.exposureData.notifyPageHiding()\n  }\n\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0 }) {\n        LazyForEach(this.data, (item: number) => {\n          ListItem() {\n            Text(this.getAdvertisingSlotInfo(item))\n              .width('100%')\n              .height(100)\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(this.calculateItemBackgroundColor(item))\n          }\n          // 为每一个列表条目都增加一个可见性监听回调，给定阈值0.5，即如果广告位在屏幕上显示超过自身一半，就认为已经曝光；\n          // 尽管这里代码只写了一行，但实际会为每个显示出来的列表项都绑定一个回调，因此这里我们使用可控制计算频率的回调接口。\n          .onVisibleAreaApproximateChange({ ratios: [0.5], expectedUpdateInterval: 500 },\n            (isExpanding: boolean, currentRatio: number) => {\n              this.handleExposureTracking(item, isExpanding, currentRatio)\n            })\n        }, (item: number) => item.toString())\n      }\n      .listDirection(Axis.Vertical)\n      .scrollBar(BarState.Off)\n      .edgeEffect(EdgeEffect.Spring)\n      .width('90%')\n      .margin(5)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n\n  private isAdvertisingSlot(index: number): boolean {\n    // 假设每隔5个组件就是一个广告位\n    return (index % 5 == 0)\n  }\n\n  private calculateAdvertisingSlot(index: number): number | null {\n    if (this.isAdvertisingSlot(index)) {\n      return (index / 5)\n    }\n    return null\n  }\n\n  private calculateItemBackgroundColor(index: number): Color {\n    if (this.isAdvertisingSlot(index)) {\n      return Color.Green\n    }\n\n    return Color.Gray\n  }\n\n  private getAdvertisingSlotInfo(index: number): string {\n    let advertisingSlot = this.calculateAdvertisingSlot(index)\n    if (advertisingSlot) {\n      return advertisingSlot + \" 号广告位\"\n    }\n    return '普通内容 ' + index\n  }\n\n  private handleExposureTracking(index: number, isExpanding: boolean, currentRatio: number): void {\n    if (!this.isAdvertisingSlot(index)) {\n      // 不处理非广告位\n      return\n    }\n    let slot = this.getAdvertisingSlotInfo(index)\n    if (isExpanding) {\n      // 可见比例正在增大，说明组件正在出现\n      this.exposureData.notifyAdvertisingSlotIsAppearing(slot)\n      return\n    }\n    // 可见比例正在减小，说明组件正在消失\n    this.exposureData.notifyAdvertisingSlotIsDisappearing(slot)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "资源按需加载与释放",
      children: "资源按需加载与释放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange",
        children: "onVisibleAreaChange"
      }), "监听组件可见面积占比的精细变化，当可见比例接近预设阈值时触发回调，根据可见比例的变化加载或释放资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(342697)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力从API version 9开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可见面积以父组件边界为限，超出父组件的部分不会被计入可见面积比值计算;"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于存在浮点数比较，系统会在计算结果接近所设置的阈值时触发回调；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为确保可见性变化通知的及时性，系统在每帧进行计算可见比例的变化检测，为了减小系统负载，应尽可能少的使用这个接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n\nclass ListDataSource implements IDataSource {\n  private list: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  public deleteItem(index: number): void {\n    this.list.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  public insertItem(index: number, data: number): void {\n    this.list.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local headerImage: PixelMap | null = null\n  private data: ListDataSource =\n    new ListDataSource([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);\n\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0 }) {\n        ListItem() {\n          Image(this.headerImage)\n            .width('100%')\n            .height(300)\n            // 整个页面上只有这一个组件需要监听可见性，并且需要及时感知状态进行资源的及时加载\n            .onVisibleAreaChange([0.1], (isExpanding: boolean, currentRatio: number) => {\n              this.loadOrReleaseHeaderImage(isExpanding)\n            })\n        }\n\n        LazyForEach(this.data, (item: number) => {\n          ListItem() {\n            Text('' + item)\n              .width('100%')\n              .height(50)\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(Color.Grey)\n          }\n        }, (item: number) => item.toString())\n      }\n      .listDirection(Axis.Vertical)\n      .scrollBar(BarState.Off)\n      .edgeEffect(EdgeEffect.Spring)\n      .width('90%')\n      .margin(5)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xDCDCDC)\n    .padding({ top: 5 })\n  }\n\n  private loadOrReleaseHeaderImage(isExpanding: boolean): void {\n    if (!isExpanding) {\n      // 马上就不可见了，释放掉图片\n      this.headerImage = null\n      console.info('图片释放完成')\n      return\n    }\n\n    try {\n      this.getUIContext().getHostContext()!.resourceManager.getMediaContent($r('app.media.startIcon').id,\n        (error, value: ArrayBuffer) => {\n          let opts: image.InitializationOptions = {\n            editable: true,\n            pixelFormat: 3,\n            size: { height: 4, width: 6 }\n          };\n          let uint8Array: Uint8Array = new Uint8Array(value);\n          let buffer: ArrayBuffer = uint8Array.buffer.slice(0);\n\n          image.createPixelMap(buffer, opts).then((pixelMap) => {\n            this.headerImage = pixelMap\n            console.info('图片加载完成')\n          })\n        });\n    } catch (error) {\n      console.error(`callback getMediaContent failed, error code: ${error.code}, message: ${error.message}.`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "感知复杂视图切换",
      children: "感知复杂视图切换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过UIObserver提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uiobserver/arkts-apis-uicontext-uiobserver#onnoderenderstate20",
        children: "on('nodeRenderState')"
      }), "方法，可以监听指定组件的渲染状态。此接口需要传入一个组件标识，以指定需要观察的组件，因此不适用于组件频繁创建和销毁的场景，适用于因页面变化导致的组件显隐变化，例如页面跳转、组件所在页面被压栈，如Swiper/Tabs组件当前显示页被划出的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染状态有两种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ABOUT_TO_RENDER_IN：组件已挂载到渲染树，下一帧将被渲染；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ABOUT_TO_RENDER_OUT：组件已从渲染树移除，下一帧不再渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(889728)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该能力从API version 20开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，ABOUT_TO_RENDER_IN仅表示组件进入渲染流程，下一帧将由系统送显到屏幕上，但组件可能因被其他组件遮挡而无法被看到，因此渲染状态并不完全等同于可见性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例将一个被观测的Column组件置于Tabs、Navigation和Swiper的嵌套布局中，无论切换Tab页、页面跳转或Swiper页，均能准确感知组件是否显示于屏幕上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127785)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鉴于on('nodeRenderState')接口的特点，不建议将其用于列表项这种划出屏幕区域外节点就会被回收下树的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { NodeRenderState } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  private childNavStack: NavPathStack = new NavPathStack();\n  private tabController: TabsController = new TabsController();\n\n  build() {\n    Tabs({ barPosition: BarPosition.End, controller: this.tabController }) {\n      TabContent() {\n        Navigation() {\n          Stack({ alignContent: Alignment.Center }) {\n            Swiper() {\n              // swiper 第一页为一个子navigation\n              Navigation(this.childNavStack) {\n                Column() {\n                  Text('被监听的组件')\n                    .width('100%')\n                    .height('100%')\n                    .fontSize(26)\n                    .fontColor(Color.White)\n                    .textAlign(TextAlign.Center)\n                }\n                .width('90%')\n                .height(300)\n                .backgroundColor(Color.Blue)\n                .id('component_to_be_monitor')\n                .onAttach(() => {\n                  // 10ms后再注册监听回调，避免挂载还未完全完成\n                  setTimeout(()=>{\n                    // 在被监听的组件挂载的时候开启对该组件的状态监听\n                    this.getUIContext()\n                      .getUIObserver()\n                      .on('nodeRenderState', 'component_to_be_monitor', (state: NodeRenderState, node?: FrameNode) => {\n                        if (state == NodeRenderState.ABOUT_TO_RENDER_IN) {\n                          console.info('组件将显示')\n                        } else {\n                          console.info('组件将消失')\n                        }\n                      })\n                  }, 10)\n                })\n                .onDetach(() => {\n                  // 在被监听的组件从组件树上下树时取消监听\n                  this.getUIContext().getUIObserver().off('nodeRenderState', 'component_to_be_monitor')\n                })\n\n                Button('跳转下一页', { stateEffect: true, type: ButtonType.Capsule })\n                  .width('80%')\n                  .height(40)\n                  .margin(20)\n                  .onClick(() => {\n                    let parentStack = this.childNavStack.getParent();\n                    parentStack?.pushPath({ name: \"pageTwo\" });\n                  })\n              }\n              .clip(true)\n              .backgroundColor(Color.Orange)\n              .width('90%')\n              .height('90%')\n              .title('ChildNavigation')\n\n              // swiper 第二页\n              Text('swiper 第二页')\n                .width('90%')\n                .height('90%')\n                .fontSize(20)\n                .fontColor(Color.Black)\n                .backgroundColor(Color.Orange)\n                .textAlign(TextAlign.Center)\n              // swiper 第三页\n              Text('swiper 第三页')\n                .width('90%')\n                .height('90%')\n                .fontSize(20)\n                .fontColor(Color.Black)\n                .backgroundColor(Color.Orange)\n                .textAlign(TextAlign.Center)\n            }\n            .itemSpace(10)\n          }\n          .width('100%')\n          .height('100%')\n        }\n        .backgroundColor(Color.Green)\n        .width('100%')\n        .height('100%')\n        .title('ParentNavigation')\n      }.tabBar('首页')\n\n      TabContent() {\n        Text('推荐')\n          .width('100%')\n          .height('100%')\n          .fontSize(20)\n          .fontColor(Color.Black)\n          .backgroundColor(Color.Pink)\n          .textAlign(TextAlign.Center)\n      }.tabBar('推荐')\n\n      TabContent() {\n        Text('我的')\n          .width('100%')\n          .height('100%')\n          .fontSize(20)\n          .fontColor(Color.Black)\n          .backgroundColor(Color.Yellow)\n          .textAlign(TextAlign.Center)\n      }.tabBar('我的')\n    }\n    .backgroundColor(Color.Gray)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTwo.ets\n@Builder\nexport function PageTwoBuilder(name: string) {\n  NavDestination() {\n    Text(\"this is \" + name)\n      .width('100%')\n      .height('100%')\n      .textAlign(TextAlign.Center)\n      .fontSize(20)\n      .fontColor(Color.White)\n      .backgroundColor(Color.Red)\n  }\n  .title(name)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在resources/base/profile中创建route_map.json文件，并添加以下配置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"pageTwo\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageTwo.ets\",\n      \"buildFunction\": \"PageTwoBuilder\",\n      \"data\": {\n        \"description\": \"this is pageTwo\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在module.json5配置文件的module标签中定义routerMap字段，指向路由表配置文件route_map.json。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"routerMap\": \"$profile:route_map\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可见性计算与实际视觉不符",
      children: "可见性计算与实际视觉不符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件已进入屏幕但回调未触发，或可见比例与视觉感知不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查父组件是否设置clip属性，裁剪可能导致可见面积计算偏差。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "考虑组件透明度影响，即使 opacity为0也会被计入可见面积。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结合nodeRenderState监听交叉验证。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["尝试将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange22",
          children: "measureFromViewport"
        }), "设置为true进行验证。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "高频回调导致性能下降",
      children: "高频回调导致性能下降"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滚动时界面卡顿，日志显示可见性回调频繁执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "切换到onVisibleAreaApproximateChange并将expectedUpdateInterval设置为一个更大的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "减少注册可见性回调的组件数量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "renderstate监听数量超限",
      children: "RenderState监听数量超限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nodeRenderState监听失败，日志提示超出最大监听数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "替换为使用局部监听接口onVisibleAreaApproximateChange。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "替换为对显示范围较大的父容器组件进行监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "及时移除不再需要的监听off方法。"
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
273187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
127785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
889728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
342697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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