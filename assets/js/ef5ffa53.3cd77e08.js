"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["162745"], {
776581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_faq_map_faq_3_map_faq_3_md_ef5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-faq-map-faq-3-map-faq-3-md-ef5.json
var site_docs_map_kit_guide_map_faq_map_faq_3_map_faq_3_md_ef5_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-faq/map-faq-3/map-faq-3","title":"手势卡顿或者不生效","description":"*现象描述*","source":"@site/docs/map-kit-guide/map-faq/map-faq-3/map-faq-3.md","sourceDirName":"map-kit-guide/map-faq/map-faq-3","slug":"/map-kit-guide/map-faq/map-faq-3/","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"手势卡顿或者不生效","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-3","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"siteId参数如何获取","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-2/"},"next":{"title":"设置地图Logo始终显示","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-faq/map-faq-3/map-faq-3.md


const frontMatter = {
	title: '手势卡顿或者不生效',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-3',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '手势卡顿或者不生效';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "手势卡顿或者不生效",
        children: "手势卡顿或者不生效"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地图页面操作手势卡顿或者不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手势遮盖或者手势冲突。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "手势遮盖：地图组件的上层存在没有做手势穿透的组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "手势冲突：以Swiper容器组件中使用地图组件为例，Swiper容器组件和地图组件手势会存在冲突。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主线程阻塞。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用主线程处理大批量逻辑时，存在主线程阻塞，此时进行地图手势操作，手势应答会变慢甚至手势响应失败。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手势遮盖或者手势冲突。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["手势遮盖：参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior",
                children: "触摸测试控制"
              }), "做手势穿透。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "手势冲突：以Swiper容器组件和地图组件手势存在冲突为例，解决方案参考如下代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';\nimport { map, mapCommon, MapComponent } from '@kit.MapKit';\n\nclass MyDataSource implements IDataSource {\n  private list: number[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  // 获取数组长度\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  // 根据索引获取数据\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  // 注册数据变化监听器\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  // 取消注册数据变化监听器\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\n@Entry\n@Component\nstruct SwiperExample {\n  private swiperController: SwiperController = new SwiperController();\n  private data: MyDataSource = new MyDataSource([]);\n  private mapOptions?: mapCommon.MapOptions;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapController?: map.MapComponentController;\n  private mapEventManager?: map.MapEventManager;\n  @State mapPositionX: number = 0;\n  @State mapPositionY: number = 0;\n  @State mapHeight: number = 0;\n  @State mapWidth: number = 0;\n  @State index: number = 0;\n\n  // 判断坐标是否在地图矩形内\n  isMap(event: TouchEvent) {\n    if (event.changedTouches[0].displayX > this.mapPositionX\n      && event.changedTouches[0].displayX < this.mapPositionX + this.mapWidth\n      && event.changedTouches[0].displayY > this.mapPositionY\n      && event.changedTouches[0].displayY < this.mapPositionY + this.mapHeight) {\n      return true;\n    }\n    return false;\n  }\n\n  aboutToAppear(): void {\n    let list: number[] = [];\n    for (let i = 1; i <= 10; i++) {\n      list.push(i);\n    }\n    this.data = new MyDataSource(list);\n\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.98441025,\n          longitude: 118.766253\n        },\n        zoom: 10,\n        tilt: 10,\n        bearing: 90\n      },\n      scaleControlsEnabled: true\n    }\n\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        this.mapController = mapController;\n        this.mapEventManager = this.mapController.getEventManager();\n        let callback = () => {\n          console.info(`on-mapLoad`);\n        };\n        this.mapEventManager.on(\"mapLoad\", callback);\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Swiper(this.swiperController) {\n        LazyForEach(this.data, (item: string) => {\n          if (item == \"3\") {\n            Column() {\n              Text(item.toString())\n                .width('90%')\n                .height(160)\n                .backgroundColor(0xAFEEEE)\n                .textAlign(TextAlign.Center)\n                .fontSize(30)\n              MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback })\n                // 获取MapComponent的位置和长宽\n                .width('100%')\n                .height('65%')\n                .onAreaChange((_oldValue: Area, newValue: Area) => {\n                  try {\n                    if (newValue.globalPosition.x !== undefined && newValue.globalPosition.y !== undefined) {\n                      this.mapPositionX = Number(newValue.globalPosition.x);\n                      this.mapPositionY = Number(newValue.globalPosition.y);\n                      this.mapHeight = Number(newValue.height);\n                      this.mapWidth = Number(newValue.width);\n                    }\n                  } catch (error) {\n                    let e: BusinessError = error as BusinessError;\n                    console.error(\"onAreaChange error code:\" + e.code + \"message:\" + e.message);\n                  }\n                })\n            }.height(\"100%\")\n          } else {\n            Text(item.toString())\n              .width('90%')\n              .height(160)\n              .backgroundColor(0xAFEEEE)\n              .textAlign(TextAlign.Center)\n              .fontSize(30)\n          }\n        }, (item: string) => item)\n      }\n      // 手势判断 当index为存在地图页面且点击在地图矩形内时为HitTestMode.None（不响应Swiper手势，响应子组件手势）\n      .onTouchIntercept((event: TouchEvent) => {\n        if (this.index === 2 && this.isMap(event)) {\n          return HitTestMode.None;\n        }\n        return HitTestMode.Transparent;\n      })\n      .cachedCount(2)\n      .index(1)\n      .loop(true)\n      .itemSpace(0)\n      // 设置圆点导航点样式\n      .indicator(\n        new DotIndicator()\n          .itemWidth(15)\n          .itemHeight(15)\n          .selectedItemWidth(15)\n          .selectedItemHeight(15)\n          .color(Color.Gray)\n          .selectedColor(Color.Blue))\n      .displayArrow({\n        // 设置导航点箭头样式\n        showBackground: true,\n        isSidebarMiddle: true,\n        backgroundSize: 24,\n        backgroundColor: Color.White,\n        arrowSize: 18,\n        arrowColor: Color.Blue\n      }, false)\n      .curve(Curve.Linear)\n      .onChange((index: number) => {\n        this.index = index;\n      })\n      .onGestureSwipe((index: number, extraInfo: SwiperAnimationEvent) => {\n        console.info(\"index: \" + index);\n        console.info(\"current offset: \" + extraInfo.currentOffset);\n      })\n\n      Row({ space: 12 }) {\n        Button('showNext')\n          .onClick(() => {\n            this.swiperController.showNext();\n          })\n        Button('showPrevious')\n          .onClick(() => {\n            this.swiperController.showPrevious();\n          })\n      }.margin(5)\n    }.width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主线程阻塞。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请分析应用的业务逻辑，将复杂逻辑放到子线程中处理。"
        }), "\n"]
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