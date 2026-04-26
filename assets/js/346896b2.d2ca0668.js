"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["816794"], {
354298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_application_state_arkts_new_appstoragev_2_arkts_new_appstoragev_2_md_346_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-application-state-arkts-new-appstoragev-2-arkts-new-appstoragev-2-md-346.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_application_state_arkts_new_appstoragev_2_arkts_new_appstoragev_2_md_346_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2/arkts-new-appstoragev2","title":"AppStorageV2: 应用全局UI状态存储","description":"为了增强状态管理框架对应用全局UI状态变量的共享能力，开发者可以使用AppStorageV2存储应用全局UI的状态变量数据。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2/arkts-new-appstoragev2.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"AppStorageV2: 应用全局UI状态存储","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-appstoragev2","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Type装饰器：标记类属性的类型","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-type/"},"next":{"title":"PersistenceV2: 持久化存储UI状态","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2/arkts-new-appstoragev2.md


const frontMatter = {
	title: 'AppStorageV2: 应用全局UI状态存储',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-appstoragev2',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'AppStorageV2: 应用全局UI状态存储';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "使用AppStorageV2",
  "id": "使用appstoragev2",
  "level": 3
}, {
  "value": "在两个页面之间存储数据",
  "id": "在两个页面之间存储数据",
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
        id: "appstoragev2-应用全局ui状态存储",
        children: "AppStorageV2: 应用全局UI状态存储"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强状态管理框架对应用全局UI状态变量的共享能力，开发者可以使用AppStorageV2存储应用全局UI的状态变量数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStorageV2提供应用级全局共享状态变量的能力，开发者可以通过connect绑定同一个key，进行跨ability的数据共享。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2和@Trace"
      }), "，配合阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#appstoragev2",
        children: "AppStorageV2-API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(69423)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStorageV2从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStorageV2是在应用UI启动时会被创建的单例。它用于提供应用状态数据的中心存储，这些状态数据在应用级别都是可访问的。AppStorageV2将在应用运行过程保留其数据。数据通过唯一的键字符串值访问。需要注意的是，AppStorage与AppStorageV2之间的数据互不共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStorageV2可以修改connect的返回值，实现与UI组件的同步。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorageV2支持应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/thread-model-stage",
        children: "主线程"
      }), "内多个UIAbility实例间的状态共享。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "connect：创建或获取存储的数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608987)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、若未指定key，使用第二个参数作为默认构造器；否则使用第三个参数作为默认构造器（第二个参数非法也使用第三个参数作为默认构造器）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、确保数据已经存储在AppStorageV2中，可省略默认构造器，获取存储的数据；否则必须指定默认构造器，不指定将导致应用异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、同一个key，connect不同类型的数据会导致应用异常，应用需要确保类型匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、key建议使用有意义的值，可由字母、数字、下划线组成，长度不超过255，使用非法字符或空字符的行为是未定义的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["5、关联", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "对象时，由于该类型的name属性未定义，需要指定key或者自定义name属性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "remove：删除指定key的存储数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(107410)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除AppStorageV2中不存在的key会报警告。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keys：返回所有AppStorageV2中的key。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以上接口详细描述请参考状态管理API文档中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#appstoragev2",
        children: "AppStorageV2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1、只支持class类型，否则会抛出运行时报错，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140103-appstoragev2%E5%92%8Cpersistencev2%E4%BD%BF%E7%94%A8%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
        children: "140103"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2、需要配合UI使用（UI线程），不能在其他线程使用，如不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "@Sendable"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3、不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-set/arkts-apis-arkts-collections-set",
        children: "collections.Set"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-map/arkts-apis-arkts-collections-map",
        children: "collections.Map"
      }), "等类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["4、不支持非built-in类型，如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "、NativePointer、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist",
        children: "ArrayList"
      }), "等Native类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5、不支持存储基本类型，如string、number、boolean等。注意：不支持存储基本类型意味着connect接口传入的类型不能是基本类型，但connect传入的class中可以包含基本类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用appstoragev2",
      children: "使用AppStorageV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStorageV2使用connect接口即可实现对AppStorageV2中数据的修改和同步，如果修改的数据被@Trace装饰，该数据的修改会同步更新UI。需要注意的是，使用remove接口只会将数据从AppStorageV2中删除，不影响组件中已创建的数据，详见以下示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AppStorageV2 } from '@kit.ArkUI';\n\n@ObservedV2\nclass Message {\n  @Trace public userID: number;\n  public userName: string;\n\n  constructor(userID?: number, userName?: string) {\n    this.userID = userID ?? 1;\n    this.userName = userName ?? 'Jack';\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用connect在AppStorageV2中创建一个key为Message的对象\n  // 修改connect的返回值即可同步回AppStorageV2\n  @Local message: Message = AppStorageV2.connect<Message>(Message, () => new Message())!;\n\n  build() {\n    Column() {\n      // 修改@Trace装饰的类属性，UI能同步刷新\n      Button(`Index userID: ${this.message.userID}`)\n        .onClick(() => {\n          this.message.userID += 1;\n        })\n      // 修改非@Trace装饰的类属性，UI不会同步刷新，但修改的类属性已同步回AppStorageV2\n      Button(`Index userName: ${this.message.userName}`)\n        .onClick(() => {\n          this.message.userName += 'suf';\n        })\n      // remove key Message, 会从AppStorageV2中删除key为Message的对象\n      // remove之后，修改父组件的userId，子组件能同步变化，因为remove只是从AppStorageV2删除，不会影响组件中已存在的数据\n      Button('remove key: Message')\n        .onClick(() => {\n          AppStorageV2.remove<Message>(Message);\n        })\n      // connect key Message, 会从AppStorageV2中添加key为Message的对象\n      // remove之后，重新添加，修改父子组件的userID，可以发现数据已经不同步，子组件重新connect之后，数据一致\n      Button('connect key: Message')\n        .onClick(() => {\n          this.message = AppStorageV2.connect<Message>(Message, () => new Message(5, 'Rose'))!;\n        })\n      Divider()\n      Child()\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@ComponentV2\nstruct Child {\n  // 使用connect在AppStorageV2中取出一个key为Message的对象，已在父组件中创建\n  @Local message: Message = AppStorageV2.connect<Message>(Message, () => new Message())!;\n  @Local name: string = this.message.userName;\n\n  build() {\n    Column() {\n      // 修改@Trace装饰的类属性，UI同步刷新，父组件能感知该变化\n      Button(`Child userID: ${this.message.userID}`)\n        .onClick(() => {\n          this.message.userID += 5;\n        })\n      // 修改父组件中的userName属性，点击name可以同步父组件的类属性修改\n      Button(`Child name: ${this.name}`)\n        .onClick(() => {\n          this.name = this.message.userName;\n        })\n      // remove key Message, 会从AppStorageV2中删除key为Message的对象\n      Button('remove key: Message')\n        .onClick(() => {\n          AppStorageV2.remove<Message>(Message);\n        })\n      // connect key Message, 会从AppStorageV2中添加key为Message的对象\n      Button('connect key: Message')\n        .onClick(() => {\n          this.message = AppStorageV2.connect<Message>(Message, () => new Message(10, 'Lucy'))!;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在两个页面之间存储数据",
      children: "在两个页面之间存储数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 数据中心\n// Sample.ets\n@ObservedV2\nexport class Sample {\n  @Trace public p1: number = 0;\n  public p2: number = 10;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面1"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AppStorageV2 } from '@kit.ArkUI';\nimport { Sample } from './Sample';\n\n@Entry\n@ComponentV2\nstruct PageOne {\n  // 在AppStorageV2中创建一个key为Sample的键值对（如果存在，则返回AppStorageV2中的数据），并且和prop关联\n  @Local prop: Sample = AppStorageV2.connect(Sample, () => new Sample())!;\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pageStack) {\n      Column() {\n        Button('Go to pageTwo')\n          .onClick(() => {\n            this.pageStack.pushPathByName('PageTwo', null);\n          })\n\n        Button('PageOne connect the key Sample')\n          .onClick(() => {\n            // 在AppStorageV2中创建一个key为Sample的键值对（如果存在，则返回AppStorageV2中的数据），并且和prop关联\n            this.prop = AppStorageV2.connect(Sample, 'Sample', () => new Sample())!;\n          })\n\n        Button('PageOne remove the key Sample')\n          .onClick(() => {\n            // 从AppStorageV2中删除后，prop将不会再与key为Sample的值关联\n            AppStorageV2.remove(Sample);\n          })\n\n        Text(`PageOne add 1 to prop.p1: ${this.prop.p1}`)\n          .fontSize(30)\n          .onClick(() => {\n            this.prop.p1++;\n          })\n\n        Text(`PageOne add 1 to prop.p2: ${this.prop.p2}`)\n          .fontSize(30)\n          .onClick(() => {\n            // 页面不刷新，但是p2的值改变了\n            this.prop.p2++;\n          })\n\n        // 获取当前AppStorageV2里面的所有key\n        Text(`all keys in AppStorage: ${AppStorageV2.keys()}`)\n          .fontSize(30)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AppStorageV2 } from '@kit.ArkUI';\nimport { Sample } from './Sample';\n\n@Builder\nexport function PageTwoBuilder() {\n  PageTwo()\n}\n\n@ComponentV2\nstruct PageTwo {\n  // 在AppStorageV2中创建一个key为Sample的键值对（如果存在，则返回AppStorageV2中的数据），并且和prop关联\n  @Local prop: Sample = AppStorageV2.connect(Sample, () => new Sample())!;\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('PageTwo connect the key Sample1')\n          .onClick(() => {\n            // 在AppStorageV2中创建一个key为Sample1的键值对（如果存在，则返回AppStorageV2中的数据），并且和prop关联\n            this.prop = AppStorageV2.connect(Sample, 'Sample1', () => new Sample())!;\n          })\n\n        Text(`PageTwo add 1 to prop.p1: ${this.prop.p1}`)\n          .fontSize(30)\n          .onClick(() => {\n            this.prop.p1++;\n          })\n\n        Text(`PageTwo add 1 to prop.p2: ${this.prop.p2}`)\n          .fontSize(30)\n          .onClick(() => {\n            // 页面不刷新，但是p2的值改变了；只有重新初始化才会改变\n            this.prop.p2++;\n          })\n\n        // 获取当前AppStorageV2里面的所有key\n        Text(`all keys in AppStorage: ${AppStorageV2.keys()}`)\n          .fontSize(30)\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation时，需要添加配置系统路由表文件src/main/resources/base/profile/route_map.json，并替换pageSourceFile为PageTwo页面的路径，并且在module.json5中添加：\"routerMap\": \"$profile:route_map\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"PageTwo\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageTwo.ets\",\n      \"buildFunction\": \"PageTwoBuilder\",\n      \"data\": {\n        \"description\" : \"AppStorageV2 example\"\n      }\n    }\n  ]\n}\n"
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
608987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
107410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
69423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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