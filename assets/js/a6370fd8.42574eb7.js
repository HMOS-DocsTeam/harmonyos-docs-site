"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["425319"], {
225152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_introduction_intents_introduction_md_a63_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-introduction-intents-introduction-md-a63.json
var site_docs_intents_kit_guide_intents_introduction_intents_introduction_md_a63_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-introduction/intents-introduction","title":"Intents Kit简介","description":"Intents Kit（意图框架服务）是HarmonyOS级的意图标准体系 ，意图连接了应用/元服务内的业务功能。","source":"@site/docs/intents-kit-guide/intents-introduction/intents-introduction.md","sourceDirName":"intents-kit-guide/intents-introduction","slug":"/intents-kit-guide/intents-introduction/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Intents Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-introduction","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/core-vision-kit-guide/corevisionkit-personal-data/"},"next":{"title":"Intents Kit接入流程","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-access-flow/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-introduction/intents-introduction.md


const frontMatter = {
	title: 'Intents Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-introduction',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Intents Kit简介';

const assets = {

};



const toc = [{
  "value": "Intents Kit优势",
  "id": "intents-kit优势",
  "level": 2
}, {
  "value": "智慧分发",
  "id": "智慧分发",
  "level": 2
}, {
  "value": "意图的运行逻辑",
  "id": "意图的运行逻辑",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "intents-kit简介",
        children: "Intents Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Intents Kit（意图框架服务）是HarmonyOS级的意图标准体系 ，意图连接了应用/元服务内的业务功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图框架能帮开发者将应用/元服务内的业务功能，智能分发到各系统入口，这个过程即智慧分发。其中系统入口包括：小艺对话、小艺搜索、小艺建议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统入口、意图框架、鸿蒙生态的关系如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(176076)/* ["default"] */.A) + "",
        width: "1440",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intents-kit优势",
      children: "Intents Kit优势"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "利用HarmonyOS的大模型、多维设备感知等AI能力，准确且及时地获取到用户显性、潜在意图，从而实现个性化、多模态、精准的智慧分发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "智慧分发",
      children: "智慧分发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为方便开发者接入，智慧分发提供了多种特性类别，当前已开放习惯推荐、事件推荐、技能调用-语音、本地搜索，后续会陆续开放其他特性类别。每种特性类型支持的典型系统入口、分发逻辑见下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "特性类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统入口"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "分发逻辑"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "习惯推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小艺建议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用或元服务向系统共享意图，系统学习意图规律，在合适的时机推荐服务。比如向系统共享用户浏览资讯意图的数据，经过习惯规律性学习后，小艺建议会在合适的时机给用户推荐合适的浏览资讯服务与内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "事件推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小艺建议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用或元服务向系统共享意图，系统提取意图内容中的事件，结合时间、位置等信息向用户推荐提醒服务。比如向系统共享用户购买的电影票订单数据，由系统提取订单数据中的关键特征如时间、位置等，小艺建议会在合适的时机给用户推荐观影提醒服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "位置推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小艺建议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位置感知推荐能力基于华为意图框架与花瓣地图定位识别能力，通过小艺建议等智慧入口，适时、适需地将服务内容以卡片形式推荐给用户。位置感知基于GNSS、WLAN和基站等融合定位技术，设置圆形、多边形等地理围栏，提供室内外高精度定位能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "技能调用-语音"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小艺对话"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统基于AI大模型对理解用户显性或隐性的输入，帮用户完成应用或元服务的功能调用。比如用户在小艺对话中询问“从深圳去北京的飞机要多少钱”，可以理解用户搜索机票的意图，调用应用或元服务提供的搜索机票意图获取机票数据并向用户呈现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地搜索"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小艺搜索"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用或元服务向系统共享意图，系统对意图的实体内容构建本地索引，满足用户搜索的需求。比如向系统共享“华为开发者大会”相关报道资讯后，用户在该入口输入相关关键词，即可将应用或元服务内的资讯内容检索出来。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了满足更细粒度的分发诉求，每类特性类别下提供多个具体特性，具体特性的分发系统入口、开发依赖见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215",
        children: "各垂域的智慧分发特性列表"
      }), "。具体特性开发依赖的意图相关字段见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图的运行逻辑",
      children: "意图的运行逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS、应用/元服务的交互中，意图运行方式分为意图调用和意图共享："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(393813)/* ["default"] */.A) + "",
        width: "2172",
        height: "1161"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: ["“", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "意图”运行方式"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "发起者"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "定义"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "意图共享"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用/元服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指应用/元服务主动向HarmonyOS共享意图，可用于HarmonyOS构建本地内容索引、学习用户的行为规律，以支持本地搜索和主动建议。  意图共享包含动作和实体两个部分，动作支持完成时和将来时两种机制。  - 完成时：用户意图已执行，共享的数据可用于本地搜索和系统建议。  - 将来时：意图是基于用户行为预测的，共享的数据可用于本地搜索。  意图框架还支持开发者向系统进行辅助实体共享，例如位置信息等，用于场景推荐和其他智慧分发功能的增强。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "意图调用"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指HarmonyOS主动调用应用/元服务的功能。  用户在系统入口输入信息或者系统主动推荐后，系统可向应用/元服务发起意图调用，例如播放音乐、查看旅游攻略、搜索视频等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备限制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit仅适用于Phone、Tablet、PC/2in1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "地区限制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "操作系统限制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS 5.0及以上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
176076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799660-540066045023ce47f9f385522dbacec2.png");

},
393813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439355-3fe479c3f4f00e8be1711b9776a51edc.png");

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