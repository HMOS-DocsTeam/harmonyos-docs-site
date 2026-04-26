"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["846711"], {
198316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_sendable_arkts_sendable_md_3fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-sendable-object-arkts-sendable-arkts-sendable-md-3fb.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_sendable_arkts_sendable_md_3fb_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable/arkts-sendable","title":"Sendable对象简介","description":"在传统JS引擎中，要优化对象的并发通信开销，唯一的方法是将实现下沉到Native侧，通过Transferable对象的转移或共享来降低开销。然而，开发者仍有大量对象并发通信的需求，这个问题在业界JS引擎中尚未解决。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable/arkts-sendable.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Sendable对象简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Transferable对象（NativeBinding对象）","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object/"},"next":{"title":"Sendable使用规则与约束","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable/arkts-sendable.md


const frontMatter = {
	title: 'Sendable对象简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Sendable对象简介';

const assets = {

};



const toc = [{
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "Sendable协议",
  "id": "sendable协议",
  "level": 3
}, {
  "value": "ISendable",
  "id": "isendable",
  "level": 3
}, {
  "value": "Sendable class",
  "id": "sendable-class",
  "level": 3
}, {
  "value": "Sendable function",
  "id": "sendable-function",
  "level": 3
}, {
  "value": "Sendable interface",
  "id": "sendable-interface",
  "level": 3
}, {
  "value": "Sendable支持的数据类型",
  "id": "sendable支持的数据类型",
  "level": 3
}, {
  "value": "Sendable的实现原理",
  "id": "sendable的实现原理",
  "level": 2
}, {
  "value": "@Sendable装饰器",
  "id": "sendable装饰器",
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
        id: "sendable对象简介",
        children: "Sendable对象简介"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在传统JS引擎中，要优化对象的并发通信开销，唯一的方法是将实现下沉到Native侧，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object",
        children: "Transferable对象"
      }), "的转移或共享来降低开销。然而，开发者仍有大量对象并发通信的需求，这个问题在业界JS引擎中尚未解决。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS提供了Sendable对象类型，它是一种可在ArkTS并发实例间安全共享和传递的数据类型，它支持引用传递来减少通信成本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable对象可共享，跨线程前后指向同一个JS对象。如果Sendable对象通过调用Napi接口与一个Native对象绑定，当共享传递Sendable对象时，其绑定的Native对象也会一并共享传递。通信过程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768335)/* ["default"] */.A) + "",
        width: "1951",
        height: "1307"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与其它ArkTS数据对象不同，符合Sendable协议的数据对象在运行时应为类型固定的对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当多个并发实例尝试同时更新Sendable数据时，会发生数据竞争，例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction",
        children: "ArkTS共享容器"
      }), "的多线程操作。因此，ArkTS提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction",
        children: "异步锁"
      }), "机制来避免不同并发实例间的数据竞争，并提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction",
        children: "异步等待"
      }), "机制来控制多线程处理数据的时序。同时，还可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-freeze",
        children: "对象冻结接口"
      }), "将对象冻结为只读，从而避免数据竞争。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sendable对象提供了并发实例间高效的通信能力，即引用传递，适用于开发者自定义大对象需要线程间通信的场景，例如子线程读取数据库数据并返回给宿主线程，具体代码实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide#%E8%B7%A8%E5%B9%B6%E5%8F%91%E5%AE%9E%E4%BE%8B%E4%BC%A0%E8%BE%93%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%9C%BA%E6%99%AF",
        children: "跨并发实例传输大数据场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable协议",
      children: "Sendable协议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable协议定义了ArkTS的可共享对象体系及其规格约束。符合Sendable协议的数据（以下简称Sendable数据）可以在ArkTS并发实例间传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，Sendable数据在ArkTS并发实例间（包括UI主线程、TaskPool线程、Worker线程）采用引用传递方式，同时还支持拷贝传递方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isendable",
      children: "ISendable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在ArkTS语言基础库", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-lang/js-apis-arkts-lang",
        children: "@arkts.lang"
      }), "中引入了interface ISendable，没有任何方法或属性。ISendable是所有Sendable类型（除了null和undefined）的父类型。ISendable主要用于开发者自定义Sendable数据结构的场景中。类装饰器", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
        children: "@Sendable装饰器"
      }), "是implement ISendable的语法糖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable-class",
      children: "Sendable class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550006)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，支持使用@Sendable装饰器校验Sendable class。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable class需同时满足以下两个规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["针对API version 22以前的工程，当且仅当被标注了", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
          children: "@Sendable装饰器"
        }), "。从API version 22开始，Sendable class除了必须标注@Sendable装饰器之外，开发者可根据需要在Sendable class上叠加使用其他自定义装饰器，具体操作可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints#%E6%94%AF%E6%8C%81%E5%9C%A8sendable-class%E4%B8%8A%E5%8F%A0%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A3%85%E9%A5%B0%E5%99%A8",
          children: "在Sendable class上叠加其他自定义装饰器"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需满足Sendable约束，详情可查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints",
          children: "Sendable使用规则"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable-function",
      children: "Sendable function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(911372)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 12开始，支持使用@Sendable装饰器校验Sendable function。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["针对API version 12的工程，开发者使用@Sendable装饰器校验Sendable function时，需在工程中配置\"compatibleSdkVersionStage\": \"beta3\"，否则其Sendable特性将不生效。参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-hvigor-build-profile-V5",
          children: "build-profile.json5配置文件说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "针对API version大于12的工程，可直接使用@Sendable装饰器校验Sendable function，无需再进行其他配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable function需同时满足以下两个规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当且仅当被标注了", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
          children: "@Sendable装饰器"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需满足Sendable约束，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints",
          children: "Sendable使用规则"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable-interface",
      children: "Sendable interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sendable interface需同时满足以下两个规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当且仅当是", (0,jsx_runtime.jsx)(_components.a, {
          href: "#isendable",
          children: "ISendable"
        }), "或者继承了ISendable。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需满足Sendable约束，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints",
          children: "Sendable使用规则"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendable支持的数据类型",
      children: "Sendable支持的数据类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS基本数据类型：boolean、number、string、bigint、null、undefined。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS数据类型：const enum（常量枚举）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkTS语言标准库中定义的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction",
            children: "容器类型数据"
          }), "（须显式引入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections/arkts-apis-arkts-collections",
            children: "@arkts.collections"
          }), "）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkTS语言标准库中定义的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction",
            children: "异步锁对象"
          }), "（须显式引入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils/arkts-apis-arkts-utils",
            children: "@arkts.utils"
          }), "）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkTS语言标准库中定义的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction",
            children: "异步等待对象"
          }), "（须显式引入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils/arkts-apis-arkts-utils",
            children: "@arkts.utils"
          }), "）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkTS语言标准库中定义的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-sendablelrucache/arkts-apis-arkts-utils-sendablelrucache",
            children: "SendableLruCache对象"
          }), "（须显式引入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils/arkts-apis-arkts-utils",
            children: "@arkts.utils"
          }), "）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["继承了", (0,jsx_runtime.jsx)(_components.a, {
            href: "#isendable",
            children: "ISendable"
          }), "的interface。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["标注了", (0,jsx_runtime.jsx)(_components.a, {
            href: "#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
            children: "@Sendable装饰器"
          }), "的class。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["标注了", (0,jsx_runtime.jsx)(_components.a, {
            href: "#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
            children: "@Sendable装饰器"
          }), "的function。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接入Sendable的系统对象："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-sendablepreferences/js-apis-data-sendablepreferences",
              children: "共享用户首选项"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-sendablecolorspacemanager/js-apis-sendablecolorspacemanager",
              children: "可共享的色彩管理"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-sendableimage/js-apis-sendableimage",
              children: "基于Sendable对象的图片处理"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-arkts/js-apis-sendable-resource-manager/js-apis-sendable-resource-manager",
              children: "资源管理"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-sendablecontextmanager/js-apis-app-ability-sendablecontextmanager",
              children: "SendableContext对象管理"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "元素均为Sendable类型的union type数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者自定义的Native Sendable对象。ArkTS支持开发者自定义Native Sendable对象，详情参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object",
            children: "自定义Native Sendable对象的多线程操作场景"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(463583)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JS内置对象在并发实例间传递时遵循结构化克隆算法，跨线程行为是拷贝传递。因此，JS内置对象的实例不是Sendable类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对象字面量和数组字面量在并发实例间传递时遵循结构化克隆算法，跨线程行为是拷贝传递。因此，对象字面量和数组字面量不是Sendable类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sendable支持const enum类型使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Test.ets\nexport const enum ModelState {\n  ACTIVE,\n  INACTIVE\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { taskpool } from \"@kit.ArkTS\";\nimport { ModelState } from \"./Test\";\n\n@Sendable\nclass Model {\n  state: ModelState = ModelState.ACTIVE;\n\n  getState() {\n    console.info(\"model state is \" + this.state);\n  }\n\n  setState(state: ModelState) {\n    this.state = state;\n  }\n}\n\n@Concurrent\nfunction setModelState(model: Model) {\n  model.setState(ModelState.INACTIVE);\n  model.getState();\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  @State num: number = 0;\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(async () => {\n          let model = new Model();\n          model.getState();\n          let task = new taskpool.Task(setModelState, model);\n          await taskpool.execute(task);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable的实现原理",
      children: "Sendable的实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendable%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
        children: "Sendable数据"
      }), "在不同并发实例间的引用传递，Sendable共享对象分配在共享堆中，实现跨并发实例的内存共享。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "共享堆（SharedHeap）是进程级别的堆空间，与虚拟机本地堆（LocalHeap）不同，LocalHeap仅限单个并发实例访问，而SharedHeap可被所有线程访问。Sendable对象的跨线程行为为引用传递，因此，一个Sendable对象可能被多个并发实例引用。判断该Sendable对象是否存活，取决于所有并发实例是否存在对此Sendable对象的引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "SharedHeap与LocalHeap关系图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220907)/* ["default"] */.A) + "",
        width: "592",
        height: "348"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各个并发实例的LocalHeap是隔离的。SharedHeap是进程级别的堆，可以被所有并发实例共享，但SharedHeap不能引用LocalHeap中的对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable装饰器",
      children: "@Sendable装饰器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明并校验Sendable class和Sendable function。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Sendable装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用场景限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持在Stage模型的.ets文件中使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的函数类型限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅支持装饰普通function和Async function类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的类继承关系限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sendable class只能继承Sendable class，普通Class不可继承Sendable class。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的对象内的属性类型限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 支持string、number、boolean、bigint、null、undefined、const enum、Sendable class、collections容器集、ArkTSUtils.locks.AsyncLock、ArkTSUtils.SendableLruCache、ArkTSUtils.locks.ConditionVariable以及自定义的Sendable函数类型。  2. 禁止使用闭包变量，定义在顶层的Sendable class和Sendable function除外。  3. 不支持通过#定义私有属性，需用private。  4. 不支持计算属性。  5. 不支持类型别名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的对象内的属性的其他限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 成员属性必须显式初始化，不能使用感叹号。  2. 不支持增加或删除属性，允许修改属性，修改前后属性的类型必须一致，不支持修改方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰的函数或类对象内的方法参数限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许使用local变量、入参和通过import引入的变量。禁止使用闭包变量，但定义在顶层的Sendable class和Sendable function除外。从API version 18开始，支持访问本文件导出的变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "适用场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 在TaskPool或Worker中使用类方法或Sendable函数。  2. 传输对象数据量较大的场景。序列化耗时会随着数据量增大而增大，使用Sendable对数据进行改造后，传输100KB数据效率提升约20倍，传输1M数据效率提升约100倍。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器修饰Class使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass SendableTestClass {\n  desc: string = \"sendable: this is SendableTestClass \";\n  num: number = 5;\n  printName() {\n    console.info(\"sendable: SendableTestClass desc is: \" + this.desc);\n  }\n  getNum(): number {\n    return this.num;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器修饰Function使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\ntype SendableFuncType = () => void;\n\n@Sendable\nclass TopLevelSendableClass {\n  num: number = 1;\n  PrintNum() {\n    console.info(\"Top level sendable class\");\n  }\n}\n\n@Sendable\nfunction TopLevelSendableFunction() {\n  console.info(\"Top level sendable function\");\n}\n\n@Sendable\nfunction SendableTestFunction() {\n  const topClass = new TopLevelSendableClass(); // 顶层sendable class\n  topClass.PrintNum();\n  TopLevelSendableFunction(); // 顶层sendable function\n  console.info(\"Sendable test function\");\n}\n\n@Sendable\nclass SendableTestClass {\n  constructor(func: SendableFuncType) {\n    this.callback = func;\n  }\n  callback: SendableFuncType; // 顶层sendable function\n\n  CallSendableFunc() {\n    SendableTestFunction(); // 顶层sendable function\n  }\n}\n\nlet sendableClass = new SendableTestClass(SendableTestFunction);\nsendableClass.callback();\nsendableClass.CallSendableFunc();\n"
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
550006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
911372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
768335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957534-a4f855f80971122f5404f3141d046c17.png");

},
463583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
220907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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nQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIRQHipMLERBCAAAQhknQDCy3oFyR8CEIAABFIR+H9w6m8TT9yhKAAAAABJRU5ErkJggg==");

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