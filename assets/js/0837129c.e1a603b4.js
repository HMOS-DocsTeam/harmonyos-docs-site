"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["409385"], {
677191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_live_view_kit_guide_liveview_scenes_liveview_create_locally_liveview_create_locally_md_083_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-live-view-kit-guide-liveview-scenes-liveview-create-locally-liveview-create-locally-md-083.json
var site_docs_live_view_kit_guide_liveview_scenes_liveview_create_locally_liveview_create_locally_md_083_namespaceObject = JSON.parse('{"id":"live-view-kit-guide/liveview-scenes/liveview-create-locally/liveview-create-locally","title":"构建本地实况窗","description":"简介","source":"@site/docs/live-view-kit-guide/liveview-scenes/liveview-create-locally/liveview-create-locally.md","sourceDirName":"live-view-kit-guide/liveview-scenes/liveview-create-locally","slug":"/live-view-kit-guide/liveview-scenes/liveview-create-locally/","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-scenes/liveview-create-locally/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"构建本地实况窗","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-create-locally","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发实况窗须知","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-scenes/liveview-scenes-intro/"},"next":{"title":"通过Push Kit更新实况窗","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-scenes/liveview-update-by-push/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/live-view-kit-guide/liveview-scenes/liveview-create-locally/liveview-create-locally.md


const frontMatter = {
	title: '构建本地实况窗',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-create-locally',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '构建本地实况窗';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "导入liveViewManager",
  "id": "导入liveviewmanager",
  "level": 2
}, {
  "value": "创建实况窗",
  "id": "创建实况窗",
  "level": 2
}, {
  "value": "进度可视化模板",
  "id": "进度可视化模板",
  "level": 3
}, {
  "value": "强调文本模板",
  "id": "强调文本模板",
  "level": 3
}, {
  "value": "左右文本模板",
  "id": "左右文本模板",
  "level": 3
}, {
  "value": "赛事比分模板",
  "id": "赛事比分模板",
  "level": 3
}, {
  "value": "导航模板",
  "id": "导航模板",
  "level": 3
}, {
  "value": "基于地理位置的实况窗提醒",
  "id": "基于地理位置的实况窗提醒",
  "level": 3
}, {
  "value": "实况胶囊",
  "id": "实况胶囊",
  "level": 3
}, {
  "value": "小折叠外屏实况窗",
  "id": "小折叠外屏实况窗",
  "level": 3
}, {
  "value": "实况窗计时器",
  "id": "实况窗计时器",
  "level": 3
}, {
  "value": "点击实况窗动作",
  "id": "点击实况窗动作",
  "level": 3
}, {
  "value": "本地更新和结束实况窗",
  "id": "本地更新和结束实况窗",
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
        id: "构建本地实况窗",
        children: "构建本地实况窗"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager",
        children: "liveViewManager"
      }), "模块构建本地实况窗，完成实况窗的整个生命周期流程（包括创建、更新与结束）。请注意，只有应用在前台运行，即用户实际使用应用并且产生了服务合约的情况下，开发者才可以创建实况窗；与此同时，本地更新或结束实况窗依赖于开发者的应用进程，所以我们更推荐开发者在本地创建实况窗后使用Push Kit更新或结束实况窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(70775)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Live View Kit提供了“出行打车/即时配送/航班/高铁火车/排队叫号/取餐/赛事比分/共享租赁/计时/运动锻炼/导航/打卡/快递”共13个场景的包含实况窗整个生命周期流程的示例代码，如开发者想在正式开发实况窗前先行体验效果，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/live-view-kit_-sample-code_-clientdemo_-arkts",
        children: "实况窗SampleCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中打卡和快递场景基于地理位置的实况窗提醒，从6.1.0(23)开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入liveviewmanager",
      children: "导入liveViewManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在项目中导入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager",
        children: "liveViewManager"
      }), "，并新建实况窗控制类（例如LiveViewController），构造isLiveViewEnabled()方法，用于校验实况窗开关（设置>应用和元服务>应用名>实况窗）是否打开。打开实况窗开关是创建实况窗的前提条件。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\n\nexport class LiveViewController {\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建实况窗",
      children: "创建实况窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗根据扩展区不同共有5种样式模板：进度可视化模板、强调文本模板、左右文本模板、赛事比分模板和导航模板。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerstartliveview",
        children: "liveViewManager.startLiveView"
      }), "创建实况窗，该API接口传入参数为实况窗实例（liveViewManager.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
        children: "LiveView"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进度可视化模板",
      children: "进度可视化模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度可视化模板适用于打车、外卖等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(4654)/* ["default"] */.A) + "",
        width: "525",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"DELIVERY\", // 实况窗的应用场景。DELIVERY：即时配送（外卖、生鲜）\n      liveViewData: {\n        primary: {\n          title: \"骑手已接单\",\n          content: [\n            { text: \"距商家 \" },\n            { text: \"300 \", textColor: \"#FF0A59F7\" },\n            { text: \"米 | \" },\n            { text: \"3 \", textColor: \"#FF0A59F7\" },\n            { text: \"分钟到店\" }\n          ], // 设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色，不设置textColor时，默认展示#FF000000\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PROGRESS,\n            progress: 40,\n            color: \"#FF317AF7\",\n            backgroundColor: \"#f7819ae0\",\n            indicatorType: liveViewManager.IndicatorType.INDICATOR_TYPE_UP,\n            indicatorIcon: \"indicator.png\", // 进度条指示器图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            lineType: liveViewManager.LineType.LINE_TYPE_DOTTED_LINE,\n            nodeIcons: [\"icon_1.png\", \"icon_2.png\", \"icon_3.png\"] // 进度条每个节点图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.2(22)开始，实况窗卡片进度可视化模板支持显示雨、雪天气动效背景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(814872)/* ["default"] */.A) + "",
        width: "448",
        height: "190"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58923)/* ["default"] */.A) + "",
        width: "449",
        height: "192"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView() : Promise < liveViewManager.LiveView > {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"DELIVERY\", // 实况窗的应用场景。DELIVERY：即时配送（外卖、生鲜）\n      liveViewData: {\n        primary: {\n          title: \"骑手已接单\",\n          content: [\n            { text: \"距商家 \" },\n            { text: \"300 \", textColor: \"#FF0A59F7\" },\n            { text: \"米 | \" },\n            { text: \"3 \", textColor: \"#FF0A59F7\" },\n            { text: \"分钟到店\" }\n          ], // 设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色，不设置textColor时，默认展示#FF000000\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PROGRESS,\n            weatherInfo : {\n              weatherType : liveViewManager.WeatherType.WEATHER_TYPE_LIGHT_RAIN,\n              locationType : liveViewManager.WeatherLocationType.LOCATION_TYPE_LOCAL,\n            },\n            progress: 40,\n            color: \"#FF317AF7\",\n            backgroundColor: \"#f7819ae0\",\n            indicatorType: liveViewManager.IndicatorType.INDICATOR_TYPE_UP,\n            indicatorIcon: \"indicator.png\", // 进度条指示器图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            lineType: liveViewManager.LineType.LINE_TYPE_DOTTED_LINE,\n            nodeIcons: [\"icon_1.png\", \"icon_2.png\", \"icon_3.png\"] // 进度条每个节点图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  public static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "强调文本模板",
      children: "强调文本模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "强调文本模板适用于取餐、排队等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520721)/* ["default"] */.A) + "",
        width: "1496",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"PICK_UP\", // 实况窗的应用场景。PICK_UP：取餐。\n      liveViewData: {\n        primary: {\n          title: \"餐品已备好\",\n          content: [\n            { text: \"请前往\" },\n            { text: \" XXX店 \", textColor: \"#FF0A59F7\" },\n            { text: \"取餐\" },\n          ],\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"取餐码\",\n            content: \"72988\",\n            underlineColor: \"#FF0A59F7\",\n            descPic: \"coffee.png\" // 扩展区右侧产品描述图，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.2(22)开始，实况窗卡片强调文本模板支持显示雨、雪天气动效背景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(394746)/* ["default"] */.A) + "",
        width: "450",
        height: "193"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487985)/* ["default"] */.A) + "",
        width: "450",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView() : Promise < liveViewManager.LiveView > {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"PICK_UP\", // 实况窗的应用场景。PICK_UP：取餐。\n      liveViewData: {\n        primary: {\n          title: \"餐品已备好\",\n          content: [\n            { text: \"请前往\" },\n            { text: \" XXX店 \", textColor: \"#FF0A59F7\" },\n            { text: \"取餐\" },\n          ],\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            weatherInfo: {\n              weatherType:liveViewManager.WeatherType.WEATHER_TYPE_HAZY,\n              locationType:liveViewManager.WeatherLocationType.LOCATION_TYPE_LOCAL,\n            },\n            title: \"取餐码\",\n            content: \"72988\",\n            underlineColor: \"#FF0A59F7\",\n            descPic: \"coffee.png\" // 扩展区右侧产品描述图，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  public static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "左右文本模板",
      children: "左右文本模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "左右文本模板适用于高铁、航班等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272855)/* ["default"] */.A) + "",
        width: "525",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"TRAIN\", // 实况窗的应用场景。TRAIN：高铁/火车。\n      liveViewData: {\n        primary: {\n          title: \"列车检票提醒\",\n          content: [\n            { text: \"检票口 \" },\n            { text: \"6B \", textColor: \"#FF0A59F7\" },\n            { text: \"| 座位 \" },\n            { text: \"03车 12F\", textColor: \"#FF0A59F7\" }\n          ], // 设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色，不设置textColor时，默认展示#FF000000\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(), // 点击实况窗默认动作。\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_FLIGHT,\n            firstTitle: \"09:00\",\n            firstContent: \"上海虹桥\",\n            lastTitle: \"14:20\",\n            lastContent: \"汉口\",\n            spaceIcon: \"icon.png\", // 扩展区中间间隔图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            isHorizontalLineDisplayed: true,\n            additionalText: \"以上信息仅供参考\" // 扩展区底部内容，仅可用于左右文本模板。\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)开始，实况窗卡片左右文本模板支持显示雨、雪天气动效背景或夕阳、赏月氛围背景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(503584)/* ["default"] */.A) + "",
        width: "901",
        height: "440"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView() : Promise < liveViewManager.LiveView > {\n    return {\n      id : 6, //liveView ID, generated by the developer\n      event : \"FLIGHT\", // application scenarios of liveView：FLIGHT。\n      liveViewData : {\n        primary : {\n          title : \"计划出发\",\n          content : [\n            {text : \"登机口\"},\n              {text : \"32\", textColor: \"#FF0A59F7\" },\n            {text : \"| 座位\"},\n            {text : \" 17H\", textColor: \"#FF0A59F7\" }\n          ], // 设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色，不设置textColor时，默认展示#FF000000\n          keepTime : 15,\n          clickAction : await LiveViewController.buildWantAgent(),\n          backgroundType : liveViewManager.BackgroundType.SYS_BACKGROUND_FLIGHT_SUNSET,  //当传入实况窗卡片的背景氛围类型参数backgroundType值为赏月航班或夕阳航班时，且同时传入天气类型(WeatherInfo)为雨、雪特殊天气，卡片上优先展示天气背景，其余非特殊天气在卡片上展示赏月航班或夕阳航班背景氛围。\n          layoutData : {\n            layoutType : liveViewManager.LayoutType.LAYOUT_TYPE_FLIGHT,\n            weatherInfo : {\n              weatherType : liveViewManager.WeatherType.WEATHER_TYPE_LIGHT_RAIN,\n                    locationType : liveViewManager.WeatherLocationType.LOCATION_TYPE_DESTINATION,\n              highTemperature : 30,\n                    lowTemperature : -10\n              },\n            firstTitle: \"09:00\",\n                  firstContent: \"上海虹桥\",\n            lastTitle: \"14:20\",\n            lastContent: \"汉口\",\n            spaceIcon : \"icon_plane.png\",// 扩展区中间间隔图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            isHorizontalLineDisplayed : false,\n            additionalText : \"以上信息仅供参考\" // 扩展区底部内容，仅可用于左右文本模板。\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "赛事比分模板",
      children: "赛事比分模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "赛事比分模板适用于赛事场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672893)/* ["default"] */.A) + "",
        width: "1496",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"SCORE\", // 实况窗的应用场景。SCORE：赛事比分。\n      liveViewData: {\n        primary: {\n          title: \"第四节比赛中\",\n          content: [\n            { text: \"XX\", textColor:\"#FF0A59F7\" },\n            { text: \" VS \" },\n            { text: \"XX\", textColor:\"#FF0A59F7\" },\n            { text: \" | \" },\n            { text: \"小组赛 第五场\", textColor:\"#FF0A59F7\" }\n          ],\n          keepTime: 1,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_SCORE,\n            hostName: \"队名A\",\n            hostIcon: \"host.png\", // 扩展区左侧图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            hostScore: \"110\",\n            guestName: \"队名B\",\n            guestIcon: \"guest.png\", // 扩展区右侧图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            guestScore: \"102\",\n            competitionDesc: [\n              { text: \"●\", textColor: \"#FFFF0000\" },\n              { text: \"Q4\" }\n            ],\n            competitionTime: \"02:16\",\n            isHorizontalLineDisplayed: true\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导航模板",
      children: "导航模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航模板适用于出行导航场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(528179)/* ["default"] */.A) + "",
        width: "501",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"NAVIGATION\", // 实况窗的应用场景。NAVIGATION：导航。\n      liveViewData: {\n        primary: {\n          title: \"178米后左转\",\n          content: [\n            { text: \"去往\"},\n            { text: \" 南京东路\", textColor: \"#FF0A59F7\" }\n          ],\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_NAVIGATION,\n            currentNavigationIcon: \"navigation.png\", // 当前导航方向，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            navigationIcons: [\"left.png\",\"straight.png\",\"straight.png\",\"right.png\"] // 导航方向的箭头集合图片，每个元素取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基于地理位置的实况窗提醒",
      children: "基于地理位置的实况窗提醒"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于地理位置的实况窗提醒适用于打卡、快递等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0(23)开始，支持基于地理位置的实况窗提醒，在添加由地理围栏条件触发的实况窗后，满足以下条件可以触发创建或结束实况窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进入地理围栏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离开地理围栏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进入地理围栏并持续时间大于延迟触发时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "离开地理围栏并持续时间大于延迟触发时间。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveViewByTrigger()方法添加由地理围栏条件触发创建的实况窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\nimport { geoLocationManager } from '@kit.LocationKit';\n\nexport class LiveViewController {\n  public async startLiveViewByTrigger(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 校验实况窗地理围栏开关是否打开\n    if (!await LiveViewController.isGeofenceTriggerEnabled()) {\n      throw new Error(\"Live view geofence trigger is disabled.\");\n    }\n    // 校验GPS开关是否打开\n    if (!geoLocationManager.isLocationEnabled()) {\n      throw new Error(\"Live view geofence trigger is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    const trigger = await LiveViewController.buildTrigger();\n    return await liveViewManager.startLiveViewByTrigger(defaultView, trigger);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"EXPRESS\", // 实况窗的应用场景。EXPRESS：快递。\n      liveViewData: {\n        primary: {\n          title: \"快递已送达\",\n          content: [\n            { text: \"请前往\" },\n            { text: \" XXX店 \", textColor: \"#FF0A59F7\" },\n            { text: \"取快递\" },\n          ],\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"快递码\",\n            content: \"72988\",\n            underlineColor: \"#FF0A59F7\",\n            descPic: \"express.png\" // 扩展区右侧产品描述图，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async buildTrigger(): Promise<liveViewManager.Trigger> {\n    return {\n      // 构造基于地理位置的实况窗提醒的触发条件\n      type: liveViewManager.TriggerType.TRIGGER_TYPE_GEOFENCE,\n      displayTime: 15,\n      condition: {\n        // 触发条件：设备进入坐标点半径2000米范围内\n        longitude: 116.3971356415625,\n        latitude: 39.91800603311188,\n        coordinateSystemType: liveViewManager.CoordinateSystemType.COORDINATE_TYPE_GCJ02,\n        monitorEvent: liveViewManager.MonitorEvent.MONITOR_TYPE_ENTRY,\n        radius: 2000,\n        delayTime: 0\n      }\n    }\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async isGeofenceTriggerEnabled(): Promise<boolean> {\n    return await liveViewManager.isGeofenceTriggerEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用LiveViewController.stopLiveViewByTrigger()方法添加由地理围栏条件触发结束的实况窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\nimport { geoLocationManager } from '@kit.LocationKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  public async stopLiveViewByTrigger(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 校验实况窗地理围栏开关是否打开\n    if (!await LiveViewController.isGeofenceTriggerEnabled()) {\n      throw new Error(\"Live view geofence trigger is disabled.\");\n    }\n    // 校验GPS开关是否打开\n    if (!geoLocationManager.isLocationEnabled()) {\n      throw new Error(\"Live view geofence trigger is disabled.\");\n    }\n    // 本地结束地理围栏延时实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    defaultView.liveViewData.primary.title = '快递已取完';\n    defaultView.liveViewData.primary.content = [\n      {text: '感谢您的认可'}\n    ];\n    const trigger = await LiveViewController.buildTrigger();\n    trigger.condition.monitorEvent = liveViewManager.MonitorEvent.MONITOR_TYPE_LEAVE;\n    return await liveViewManager.stopLiveViewByTrigger(defaultView, trigger);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"EXPRESS\", // 实况窗的应用场景。EXPRESS：快递。\n      liveViewData: {\n        primary: {\n          title: \"快递已送达\",\n          content: [\n            { text: \"请前往\" },\n            { text: \" XXX店 \", textColor: \"#FF0A59F7\" },\n            { text: \"取快递\" },\n          ],\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"快递码\",\n            content: \"72988\",\n            underlineColor: \"#FF0A59F7\",\n            descPic: \"express.png\" // 扩展区右侧产品描述图，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async buildTrigger(): Promise<liveViewManager.Trigger> {\n    return {\n      // 构造基于地理位置的实况窗提醒的触发条件\n      type: liveViewManager.TriggerType.TRIGGER_TYPE_GEOFENCE,\n      displayTime: 15,\n      condition: {\n        // 触发条件：设备进入坐标点半径2000米范围内\n        longitude: 116.3971356415625,\n        latitude: 39.91800603311188,\n        coordinateSystemType: liveViewManager.CoordinateSystemType.COORDINATE_TYPE_GCJ02,\n        monitorEvent: liveViewManager.MonitorEvent.MONITOR_TYPE_ENTRY,\n        radius: 2000,\n        delayTime: 0\n      }\n    }\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async isGeofenceTriggerEnabled(): Promise<boolean> {\n    return await liveViewManager.isGeofenceTriggerEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170174)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结束地理围栏实况消息，复用原有stopLiveView接口，支持结束所有实况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更新地理围栏实况消息，复用原有updateLiveView接口，已经调用stopLiveViewByTrigger后实况不支持调用updateLiveView更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询地理围栏实况消息，复用原有getActiveLiveView接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实况胶囊",
      children: "实况胶囊"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710443)/* ["default"] */.A) + "",
        width: "525",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(34913)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["胶囊形态各模板参数固定，与创建实况窗时的模板类型无关。可创建的胶囊类型有：文本胶囊、计时器胶囊、进度胶囊，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#capsuledata",
        children: "CapsuleData"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了实况窗卡片形态，开发者还需考虑实况窗胶囊形态的展示效果。若开发者创建实况窗时还想同步创建实况窗胶囊，则需在liveViewManager.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
        children: "LiveView"
      }), "（结构体）中携带胶囊所需的参数liveViewData.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewdata",
        children: "capsule"
      }), "（不同胶囊类型携带不同的参数）。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"TAXI\", // 实况窗的应用场景。TAXI：出行打车。\n      liveViewData: {\n        primary: {\n          title: \"司机预计5分钟后到达\",\n          content: [\n            { text: \"白\", textColor: \"#FF0A59F7\" },\n            { text: \"●\" },\n            { text: \"沪AXXXXXX\", textColor: \"#FF0A59F7\" }\n          ],\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PROGRESS,\n            progress: 30,\n            color: \"#ff0959F8\",\n            backgroundColor: \"#ffc9d7e4\",\n            indicatorType: liveViewManager.IndicatorType.INDICATOR_TYPE_UP,\n            indicatorIcon: \"indicator.png\", // 进度条指示器图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            lineType: liveViewManager.LineType.LINE_TYPE_NORMAL_SOLID_LINE,\n            nodeIcons: [\"icon_1.png\", \"icon_2.png\", \"icon_3.png\"] // 进度条节点图标集合，每个元素取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        },\n        // 实况胶囊相关参数\n        capsule: {\n          type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n          status: 1,\n          icon: \"capsule_store.png\", // 胶囊图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          backgroundColor: \"#ff0959F8\",\n          title: \"5分钟\"\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "小折叠外屏实况窗",
      children: "小折叠外屏实况窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758474)/* ["default"] */.A) + "",
        width: "236",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外屏实况窗适用于在小折叠屏的外屏显示实况窗的简要信息，方便用户可以在折叠状态便捷查看。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若开发者创建实况窗时需要同步创建，则需在liveViewManager.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
        children: "LiveView"
      }), "（结构体）中携带外屏所需的参数liveViewData.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewdata",
        children: "external"
      }), "。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"FLIGHT\", // 实况窗的应用场景。FLIGHT：航班\n      liveViewData: {\n        primary: {\n          title: \"航班XXX 已值机\",\n          content: [\n            { text: '登机口', },\n            { text: '27 17:45', textColor: '#FFFF9C4F' },\n            { text: '开始登机' }\n          ], // 设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色，不设置textColor时，默认展示#FF000000\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_FLIGHT,\n            firstTitle: \"18:15\",\n            firstContent: \"上海\",\n            lastTitle: \"20:30\",\n            lastContent: \"成都\",\n            spaceIcon: \"icon.png\", // 扩展区中间间隔图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            isHorizontalLineDisplayed: true,\n            additionalText: \"以上信息仅供参考\" // 扩展区底部内容，仅可用于左右文本模板\n          }\n        },\n        external: {\n          title: \"已值机\",\n          content: [\n            { text: '登机口' },\n            { text: '27\\n', textColor: '#FFFF9C4F' },\n            { text: '17:45', textColor: '#FFFF9C4F' },\n            { text: '开始登机' }\n          ],\n          type: liveViewManager.ExternalType.BACKGROUND_PICTURE, // 外屏实况的背景样式类型\n          backgroundPicture: 'airplane.png' // 外屏实况的背景图片，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实况窗计时器",
      children: "实况窗计时器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗计时器适用于排队、抢票等场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者若需要使用实况窗计时器，则需在liveViewManager.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
        children: "LiveView"
      }), "（结构体）中配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
        children: "timer"
      }), "字段，并在当前支持的字段中使用占位符：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "${placeholder.timer}"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：固定区的文本内容中使用占位符，系统将替代占位符为实况窗计时器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802616)/* ["default"] */.A) + "",
        width: "411",
        height: "179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建LiveViewController后，请在代码中初始化LiveViewController并调用LiveViewController.startLiveView()方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"QUEUE\", // 实况窗的应用场景。QUEUE：排队\n      timer: {\n        time: 620000,\n        isCountdown: false,\n        isPaused: false\n      },\n      liveViewData: {\n        primary: {\n          title: \"大桌4人等位  32桌\",\n          content: [\n            { text: \"已等待 \" },\n            { text: \"${placeholder.timer}\", textColor:\"#ff10c1f7\" },\n            { text: \" | 预计还需>30分钟\" }\n          ], // 设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色，不设置textColor时，默认展示#FF000000\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PROGRESS,\n            progress: 0,\n            color: \"#FFFF0000\",\n            backgroundColor: \"#FF000000\",\n            indicatorType: liveViewManager.IndicatorType.INDICATOR_TYPE_OVERLAY,\n            indicatorIcon: \"indicator.png\", // 进度条指示器图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n            lineType: liveViewManager.LineType.LINE_TYPE_DOTTED_LINE,\n            nodeIcons: [\"icon_1.png\",\"icon_2.png\"] // 进度条节点图标集合，每个元素取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "点击实况窗动作",
      children: "点击实况窗动作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请调用wantAgent.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagentgetwantagent-1",
        children: "getWantAgent"
      }), "()构造点击动作字段所需的参数值，当前实况窗支持的点击动作如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击实况窗的默认动作：在liveViewManager.", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
          children: "LiveView"
        }), "（结构体）中携带胶囊所需的参数liveViewData.primary.", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#primarydata",
          children: "clickAction"
        }), "字段。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击辅助区的跳转动作：在liveViewManager.", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
          children: "LiveView"
        }), "（结构体）中携带胶囊所需的参数liveViewData.primary.extensionData.", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#extensiondata",
          children: "clickAction"
        }), "字段。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "本地更新和结束实况窗",
      children: "本地更新和结束实况窗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerisliveviewenabled",
        children: "liveViewManager.isLiveViewEnabled"
      }), "()确认实况窗开关打开后，调用liveViewManager的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerupdateliveview",
        children: "updateLiveView"
      }), "更新实况窗，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerstopliveview",
        children: "stopLiveView"
      }), "结束实况窗。更新时需要修改请求体中对应的参数。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nexport class LiveViewController {\n  private static contentColor: string = '#FF000000';\n  private static capsuleColor: string = '#FF308977';\n\n  public async startLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 创建实况窗\n    const defaultView = await LiveViewController.buildDefaultView();\n    return await liveViewManager.startLiveView(defaultView);\n  }\n\n  public async updateLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 修改实况窗内容\n    const defaultView = await LiveViewController.buildDefaultView();\n    defaultView.liveViewData.primary.title = \"预计23:49送达\";\n    defaultView.liveViewData.primary.content = [\n      { text: \"等待商家接单， \" },\n      { text: \"03:20\", textColor: \"#FFFF9C4F\" },\n      { text: \" 未接单自动取消\" },\n    ];\n    defaultView.liveViewData.primary.layoutData = {\n      layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PROGRESS,\n      progress: 0,\n      lineType: 0,\n      nodeIcons: [\n        'icon_store_white.png',\n        'icon_finish.png'\n      ] // 进度条节点图标集合，每个元素取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n    };\n    defaultView.liveViewData.capsule = {\n      type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n      status: 1,\n      icon: 'capsule_store.png', // 实况胶囊的图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n      backgroundColor: LiveViewController.capsuleColor,\n      title: \"待接单\"\n    };\n    // 更新实况窗\n    return await liveViewManager.updateLiveView(defaultView);\n  }\n\n  public async stopLiveView(): Promise<liveViewManager.LiveViewResult> {\n    // 校验实况窗开关是否打开\n    if (!await LiveViewController.isLiveViewEnabled()) {\n      throw new Error(\"Live view is disabled.\");\n    }\n    // 修改实况窗内容\n    const defaultView = await LiveViewController.buildDefaultView();\n    defaultView.liveViewData.primary.title = '商品已送达';\n    defaultView.liveViewData.primary.content = [\n      { text: '感谢您的认可,' },\n      { text: '期待下一次光临' }\n    ];\n    defaultView.liveViewData.primary.layoutData = {\n      layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PROGRESS,\n      progress: 100,\n      lineType: 0,\n      nodeIcons: [\n        'icon_order.png',\n        'icon_finish.png'\n      ] // 进度条节点图标集合，每个元素取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n    };\n    defaultView.liveViewData.capsule = {\n      type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n      status: 1,\n      icon: 'capsule_gps.png', // 实况胶囊的图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n      backgroundColor: LiveViewController.capsuleColor,\n      title: '已送达'\n    };\n    // 结束实况窗\n    return await liveViewManager.stopLiveView(defaultView);\n  }\n\n  private static async buildDefaultView(): Promise<liveViewManager.LiveView> {\n    return {\n      // 构造实况窗请求体\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"DELIVERY\", // 实况窗的应用场景。DELIVERY：即时配送（外卖、生鲜）\n      liveViewData: {\n        primary: {\n          title: \"餐品待支付\",\n          content: [\n            { text: \"咖啡 \", textColor: \"#FF0A59F7\" },\n            { text: \"等2件商品\" }\n          ],\n          keepTime: 15,\n          clickAction: await LiveViewController.buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"待支付金额\",\n            content: \"25.5元\",\n            underlineColor: \"#FF0A59F7\",\n            descPic: \"coffee.png\" // 扩展区右侧产品描述图，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        },\n        // 实况胶囊相关参数\n        capsule: {\n          type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n          status: 1,\n          icon: \"capsule_store.png\", // 实况胶囊的图标，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          backgroundColor: \"#FF308977\",\n          title: \"待支付\"\n        }\n      }\n    };\n  }\n\n  private static async isLiveViewEnabled(): Promise<boolean> {\n    return await liveViewManager.isLiveViewEnabled();\n  }\n\n  private static async buildWantAgent(): Promise<Want> {\n    const wantAgentInfo: wantAgent.WantAgentInfo = {\n      wants: [\n        {\n          bundleName: 'xxx.xxx.xxx', // 应用实际bundleName\n          abilityName: 'EntryAbility'\n        } as Want\n      ],\n      actionType: wantAgent.OperationType.START_ABILITIES,\n      requestCode: 0,\n      actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n    };\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更详细的参数请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager",
        children: "Live View Kit ArkTS API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790093)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以上是应用在本地创建、更新和结束实况窗通知的全部流程。此外，应用也可以通过Push Kit实现远程", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-scenes/push-update-liveview",
        children: "创建、更新和结束实况窗消息"
      }), "。"]
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
758474(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478985-4d6bbcd77e54bde8cf74ad735badefe8.png");

},
4654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799330-3bfa4d619ef5a10b06be53c7ca1fe879.png");

},
672893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799334-1544b918f6de3497caf8dcbbd1393425.png");

},
394746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799332-e6b9ccfdd473bd7df037ab988a198caf.png");

},
58923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958980-369d71d7382050f9aa776cc50c2b3ce3.png");

},
790093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
70775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
710443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958984-51805ab028d3b8e12d56e50d22ef92e2.png");

},
34913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
528179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439029-c57d4e764c0d5a5dd5c0cc71e12f595a.png");

},
170174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
802616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799336-b5b9d0f862716e71afd17b59bba76f69.png");

},
487985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439027-f88fe6835eb52f57afad0a83a394faa0.png");

},
520721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478981-36010f39bb7c327f2aa884ac72acaea5.png");

},
503584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478983-2737b37351793361e0e4ed98a09681a9.gif");

},
272855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958982-ec61e7d465be2ae711f783cc1fda2503.png");

},
814872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439025-4f2046918fde38d404cc446611433652.png");

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