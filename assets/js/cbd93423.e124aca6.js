"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["368990"], {
967101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_distributed_data_sync_data_sync_of_distributed_data_object_data_sync_of_distributed_data_object_md_cbd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-distributed-data-sync-data-sync-of-distributed-data-object-data-sync-of-distributed-data-object-md-cbd.json
var site_docs_arkdata_distributed_data_sync_data_sync_of_distributed_data_object_data_sync_of_distributed_data_object_md_cbd_namespaceObject = JSON.parse('{"id":"arkdata/distributed-data-sync/data-sync-of-distributed-data-object/data-sync-of-distributed-data-object","title":"分布式数据对象跨设备数据同步 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/distributed-data-sync/data-sync-of-distributed-data-object/data-sync-of-distributed-data-object.md","sourceDirName":"arkdata/distributed-data-sync/data-sync-of-distributed-data-object","slug":"/arkdata/distributed-data-sync/data-sync-of-distributed-data-object/","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-distributed-data-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"分布式数据对象跨设备数据同步 (ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-sync-of-distributed-data-object","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"关系型数据库跨设备数据同步 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-rdb-store/"},"next":{"title":"数据可靠性与安全性概述","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-reliability-security-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/distributed-data-sync/data-sync-of-distributed-data-object/data-sync-of-distributed-data-object.md


const frontMatter = {
	title: '分布式数据对象跨设备数据同步 (ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-sync-of-distributed-data-object',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '分布式数据对象跨设备数据同步 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "JS对象型存储与封装机制",
  "id": "js对象型存储与封装机制",
  "level": 3
}, {
  "value": "跨设备同步和数据变更通知机制",
  "id": "跨设备同步和数据变更通知机制",
  "level": 3
}, {
  "value": "同步的最小单位",
  "id": "同步的最小单位",
  "level": 3
}, {
  "value": "对象持久化缓存机制",
  "id": "对象持久化缓存机制",
  "level": 3
}, {
  "value": "资产同步机制",
  "id": "资产同步机制",
  "level": 3
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "在跨端迁移中使用分布式数据对象迁移数据",
  "id": "在跨端迁移中使用分布式数据对象迁移数据",
  "level": 3
}, {
  "value": "在多端协同中使用分布式数据对象",
  "id": "在多端协同中使用分布式数据对象",
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
        id: "分布式数据对象跨设备数据同步-arkts",
        children: "分布式数据对象跨设备数据同步 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传统方式下，设备之间的数据同步，需要开发者完成消息处理逻辑，包括：建立通信链接、消息收发处理、错误重试、数据冲突解决等操作，工作量非常大。而且设备越多，调试复杂度也将同步增加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其实设备之间的状态、消息发送进度、发送的数据等都是“变量”。如果这些变量支持“全局”访问，那么开发者跨设备访问这些变量就能像操作本地变量一样，从而能够自动高效、便捷地实现数据多端同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据对象即实现了对“变量”的“全局”访问。向应用开发者提供内存对象的创建、查询、删除、修改、订阅等基本数据对象的管理能力，同时具备分布式能力。为开发者在分布式应用场景下提供简单易用的JS接口，轻松实现多设备间同应用的数据协同，同时设备间可以监听对象的状态和数据变更。满足超级终端场景下，相同应用多设备间的数据对象协同需求。与传统方式相比，分布式数据对象大大减少了开发者的工作量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前分布式数据对象只能在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-data",
        children: "跨端迁移"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction",
        children: "通过跨设备Call调用实现多端协同"
      }), "的场景中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "分布式内存数据库"
            })
          }), "：分布式内存数据库将数据缓存在内存中，以便应用获得更快的数据存取速度，不会将数据进行持久化。若数据库关闭，则数据不会保留。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "分布式数据对象"
            })
          }), "：分布式数据对象是一个JS对象型的封装。每一个分布式数据对象实例会创建一个内存数据库中的数据表，每个应用程序创建的内存数据库相互隔离，对分布式数据对象的“读取”或“赋值”会自动映射到对应数据库的get/put操作。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分布式数据对象的生命周期包括以下状态："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "未初始化：未实例化，或已被销毁。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本地数据对象：已创建对应的数据表，但是还无法进行数据同步。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "分布式数据对象：已创建对应的数据表，设备在线且组网内设置同样sessionId的对象数>=2，可以跨设备同步数据。若设备掉线或将sessionId置为空，分布式数据对象退化为本地数据对象。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 分布式数据对象运作机制"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132588)/* ["default"] */.A) + "",
        width: "728",
        height: "434"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据对象生长在分布式内存数据库之上，在分布式内存数据库上进行了JS对象型的封装，能像操作本地变量一样操作分布式数据对象，数据的跨设备同步由系统自动完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js对象型存储与封装机制",
      children: "JS对象型存储与封装机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为每个分布式数据对象实例创建一个内存数据库，通过sessionId标识，每个应用程序创建的内存数据库相互隔离。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在分布式数据对象实例化的时候，（递归）遍历对象所有属性，使用“Object.defineProperty”定义所有属性的set和get方法，set和get中分别对应数据库一条记录的put和get操作，Key对应属性名，Value对应属性值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在开发者对分布式数据对象进行“读取”或者“赋值”的时候，都会自动调用到set和get方法，映射到对应数据库的操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 分布式数据对象和分布式数据库的对应关系"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分布式对象实例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对象实例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "属性值"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分布式内存数据库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个数据库（sessionId标识）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一条数据库记录的key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一条数据库记录的value"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "跨设备同步和数据变更通知机制",
      children: "跨设备同步和数据变更通知机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据对象，最重要的功能就是对象之间的数据同步。可信组网内的设备可以在本地创建分布式数据对象，并设置sessionId。不同设备上的分布式数据对象，通过设置相同的sessionId，建立对象之间的同步关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，设备A和设备B上的“分布式数据对象1”，其sessionId均为session1，这两个对象建立了session1的同步关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 对象的同步关系"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(252984)/* ["default"] */.A) + "",
        width: "831",
        height: "249"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个同步关系中，一个设备只能有一个对象加入。比如上图中，设备A的“分布式数据对象1”已经加入了session1的同步关系，所以设备A的“分布式数据对象2”就加入失败了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建立同步关系后，每个Session有一份共享对象数据。加入了同一个Session的对象，支持以下操作："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）读取/修改Session中的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）监听数据变更，感知其他设备对共享对象数据的修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）监听状态变更，感知其他设备的加入和退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据对象加入session时，如果它的数据与session中的数据不同，则它会更新session中的数据。如果希望分布式数据对象加入sessionId时不更新session中的数据，并且得到session中的数据，需要将对象的属性的值设置为undefined（资产类型的属性则是将它的各个属性值设置为空字符串）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "同步的最小单位",
      children: "同步的最小单位"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于分布式数据对象的数据同步，值得注意的是，同步的最小单位是“属性”。比如，下图中对象1包含三个属性：name、age和parents。当其中一个属性变更时，则数据同步时只需同步此变更的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象属性支持基本类型（数字类型、布尔类型、字符串类型）以及复杂类型（数组、基本类型嵌套）。针对复杂类型的数据修改，目前仅支持对根属性的修改，暂不支持对下级属性的修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dataObject['parents'] = {mom: \"amy\"}; // 支持的修改\ndataObject['parents']['mom'] = \"amy\"; // 不支持的修改\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 数据同步视图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(848398)/* ["default"] */.A) + "",
        width: "759",
        height: "513"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象持久化缓存机制",
      children: "对象持久化缓存机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分布式对象主要运行在应用程序的进程空间。当调用分布式对象持久化接口时，通过分布式数据库对对象进行持久化和同步，进程退出后数据也不会丢失。分布式数据库会自动实现同步，可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-distributedobject/js-apis-data-distributedobject#onchange20",
        children: "on('change')"
      }), "监听数据变更。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景是分布式对象的扩展场景，主要用于以下情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设备上创建持久化对象后APP退出，重新打开APP，创建持久化对象，加入同一个Session，数据可以恢复到APP退出前的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设备A上创建持久化对象并同步后持久化到设备B后，A设备的APP退出，设备B打开APP，创建持久化对象，加入同一个Session，数据可以恢复到A设备退出前的数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "资产同步机制",
      children: "资产同步机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在分布式对象中，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-commontype/js-apis-data-commontype#asset",
        children: "资产类型"
      }), "来描述本地实体资产文件，分布式对象跨设备同步时，该文件会和数据一起同步到其他设备上。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在API version 20之前版本，仅支持资产类型，不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-commontype/js-apis-data-commontype#assets",
        children: "资产类型数组"
      }), "。如需同步多个资产，可将每个资产作为分布式对象的一个根属性实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-commontype/js-apis-data-commontype#assets",
        children: "资产类型数组"
      }), "的同步。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目前分布式数据对象只能在", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-data",
          children: "跨端迁移"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction",
          children: "通过跨设备Call调用实现多端协同"
        }), "的场景中使用。跨端迁移场景下，每个分布式数据对象大小不超过150KB；多端协同场景下，每个分布式数据对象大小不超过500KB。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分布式数据对象的数据同步发生在同一个应用程序下，且同sessionId之间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备A修改1KB数据，设备B收到变更通知，50ms内完成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个应用程序最多只能创建16个分布式数据对象实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "考虑到性能和用户体验，最多不超过3个设备进行数据协同。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如对复杂类型的数据进行修改，仅支持修改根属性，暂不支持下级属性修改。", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%B5%84%E4%BA%A7%E5%90%8C%E6%AD%A5%E6%9C%BA%E5%88%B6",
          children: "资产同步机制"
        }), "中，资产类型的数据支持下一级属性修改。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持JS接口间的互通，与其他语言不互通。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是分布式对象跨设备数据同步功能的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-distributedobject/js-apis-data-distributedobject",
        children: "分布式数据对象"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "create(context: Context, source: object): DataObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并得到一个分布式数据对象实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "genSessionId(): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个sessionId，可作为分布式数据对象的sessionId。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setSessionId(sessionId: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置同步的sessionId，当可信组网中有多个设备时，多个设备间的对象如果设置为同一个sessionId，就能自动同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setSessionId(callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出所有已加入的session。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'change', callback: (sessionId: string, fields: Array<string>) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听分布式数据对象的数据变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'change', callback?: (sessionId: string, fields: Array<string>) => void): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听分布式数据对象的数据变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'status', callback: (sessionId: string, networkId: string, status: 'online'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'offline' ) => void): void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'status', callback?: (sessionId: string, networkId: string, status: 'online'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'offline' ) => void): void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "save(deviceId: string, callback: AsyncCallback<SaveSuccessResponse>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存分布式数据对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "revokeSave(callback: AsyncCallback<RevokeSaveSuccessResponse>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤回保存的分布式数据对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bindAssetStore(assetKey: string, bindInfo: BindInfo, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定融合资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAsset(assetKey: string, uri: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置单个资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAssets(assetKey: string, uris: Array<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置资产数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'change', callback: DataObserver<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听分布式对象的数据变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'change', callback?: DataObserver<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除分布式对象数据变更监听的回调实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'status', callback: StatusObserver<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听分布式对象的状态变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'status', callback?: StatusObserver<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除分布式对象状态变更监听的回调实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在跨端迁移中使用分布式数据对象迁移数据",
      children: "在跨端迁移中使用分布式数据对象迁移数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "迁移发起端在onContinue接口中创建分布式数据对象并保存数据到接收端："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.1 调用create接口创建并得到一个分布式数据对象实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.2 调用genSessionId接口创建一个sessionId，调用setSessionId接口设置同步的sessionId，并将这个sessionId放入wantParam。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.3 从wantParam获取接收端设备networkId，使用这个networkId调用save接口保存数据到接收端。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接收端在onCreate和onNewWant接口中创建分布式数据对象并注册恢复状态监听："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.1 调用create接口创建并得到一个分布式数据对象实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.2 注册恢复状态监听。收到状态为'restored'的回调通知时，表示接收端分布式数据对象已恢复发起端保存过来的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.3 从want.parameters中获取发起端放入的sessionId，调用setSessionId接口设置同步的sessionId。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(254481)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨端迁移时，在迁移发起端调用setSessionId接口设置同步的sessionId后，必须再调用save接口保存数据到接收端。跨端迁移过程中save接口仅在首次调用时数据可以同步到接收端（原理是：首次从发起端设备获取数据后迁移任务即已完成，后续数据以接收端设备为准，不需要再同步）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用迁移启动时，无论是冷启动还是热启动，都会在执行完onCreate()/onNewWant()后，触发", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagerestore",
          children: "onWindowStageRestore()"
        }), "生命周期函数，不执行", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
          children: "onWindowStageCreate()"
        }), "生命周期函数。开发者如果在onWindowStageCreate()中进行了一些应用启动时必要的初始化，那么迁移后需要在onWindowStageRestore()中执行同样的初始化操作，避免应用异常。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["跨端迁移需要配置continuable标签，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-data",
          children: "应用接续开发步骤"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wantParam中的\"sessionId\"字段可能被其他服务占用，建议自定义一个key存取sessionId。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以使用资产类型记录资产附件（文件、图片、视频等类型文件）的相关信息，迁移资产类型数据时，对应的资产附件会一起迁移到对端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接收端需要将业务数据的初始值设置为undefined，才能恢复发起端保存的数据，否则接收端的数据会覆盖同步到发起端。如果是资产数据，需要将资产数据的各个属性设置为空字符串而不是将整个资产数据设置为undefined。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API version 20版本之前不支持资产类型数组，如果要迁移多个文件，在业务数据中定义多条资产数据来记录。从API version 20开始，支持资产类型数组的同步。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目前仅支持迁移分布式文件目录下的文件，非分布式文件目录下的文件可以复制或移动到分布式文件目录下再进行迁移。文件的操作和URI的获取详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
          children: "文件管理"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-fileuri/js-apis-file-fileuri",
          children: "文件URI"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { commonType, distributedDataObject } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 业务数据定义\nexport class ContentInfo {\n  public mainTitle: string | undefined;\n  public textContent: string | undefined;\n  public imageUriArray: Array<ImageInfo> | undefined;\n  public isShowLocalInfo: boolean | undefined;\n  public isAddLocalInfo: boolean | undefined;\n  public selectLocalInfo: string | undefined;\n  public attachments?: commonType.Assets | undefined;\n\n  constructor(\n    mainTitle: string | undefined,\n    textContent: string | undefined,\n    imageUriArray: Array<ImageInfo> | undefined,\n    isShowLocalInfo: boolean | undefined,\n    isAddLocalInfo: boolean | undefined,\n    selectLocalInfo: string | undefined,\n    attachments?: commonType.Assets | undefined\n  ) {\n    this.mainTitle = mainTitle;\n    this.textContent = textContent;\n    this.imageUriArray = imageUriArray;\n    this.isShowLocalInfo = isShowLocalInfo;\n    this.isAddLocalInfo = isAddLocalInfo;\n    this.selectLocalInfo = selectLocalInfo;\n    this.attachments = attachments;\n  }\n\n  flatAssets(): object {\n    let obj: object = this;\n    if (!this.attachments) {\n      return obj;\n    }\n    for (let i = 0; i < this.attachments.length; i++) {\n      obj[`attachments${i}`] = this.attachments[i];\n    }\n    return obj;\n  }\n}\n\nexport interface ImageInfo {\n  /**\n   * image PixelMap.\n   */\n  imagePixelMap: PixelMap;\n\n  /**\n   * Image name.\n   */\n  imageName: string;\n}\n\nconst DOMAIN: number = 0x0000;\nconst TAG: string = '[DistributedDataObject]';\nlet dataObject: distributedDataObject.DataObject;\n\nexport default class EntryAbility extends UIAbility {\n  private imageUriArray: Array<ImageInfo> = [];\n  private distributedObject: distributedDataObject.DataObject | undefined = undefined;\n\n  // 1. 迁移发起端在onContinue接口中创建分布式数据对象并保存数据到接收端\n  async onContinue(wantParam: Record<string, Object | undefined>): Promise<AbilityConstant.OnContinueResult> {\n    // 1.1 获取需要设置的分布式对象的资产关键uri\n    try {\n      let sessionId: string = distributedDataObject.genSessionId();\n      wantParam.distributedSessionId = sessionId;\n\n      let distrUriArray: string[] = [];\n      let assetUriArray = AppStorage.get<Array<string>>('assetUriArray');\n      if (assetUriArray) {\n        distrUriArray = assetUriArray;\n      }\n      // 1.2 创建分布式数据对象\n      let contentInfo: ContentInfo = new ContentInfo(\n        AppStorage.get('mainTitle'),\n        AppStorage.get('textContent'),\n        AppStorage.get('imageUriArray'),\n        AppStorage.get('isShowLocalInfo'),\n        AppStorage.get('isAddLocalInfo'),\n        AppStorage.get('selectLocalInfo'),\n      );\n      let source = contentInfo.flatAssets();\n      this.distributedObject = distributedDataObject.create(this.context, source);\n\n      // 1.3 将需要设置的分布式对象的资产或资产数组填充完成\n      if (assetUriArray?.length === 1) {\n        this.distributedObject?.setAsset('attachments', distrUriArray[0]).then(() => {\n          hilog.info(DOMAIN, TAG, 'OnContinue setAsset');\n        })\n      } else {\n        this.distributedObject?.setAssets('attachments', distrUriArray).then(() => {\n          hilog.info(DOMAIN, TAG, 'OnContinue setAssets');\n        })\n      }\n      // 1.4 将设置的资产或资产数组保存至迁移发起端\n      this.distributedObject?.setSessionId(sessionId);\n      this.distributedObject?.save(wantParam.targetDevice as string).catch((err: BusinessError) => {\n        hilog.error(DOMAIN, TAG, 'OnContinue failed to save. code: ', err.code);\n        hilog.error(DOMAIN, TAG, 'OnContinue failed to save. message: ', err.message);\n      });\n    } catch (error) {\n      hilog.error(DOMAIN, TAG, 'OnContinue failed code: ', error.code);\n      hilog.error(DOMAIN, TAG, 'OnContinue failed message: ', error.message);\n    }\n    hilog.info(DOMAIN, TAG, 'OnContinue success!');\n    return AbilityConstant.OnContinueResult.AGREE;\n  }\n\n  // 2. 接收端在onCreate和onNewWant接口中创建分布式数据对象并加入组网进行数据恢复\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    if (launchParam.launchReason === AbilityConstant.LaunchReason.CONTINUATION) {\n      if (want.parameters && want.parameters.distributedSessionId) {\n        this.restoreDistributedObject(want);\n      }\n    }\n  }\n\n  // 2. 接收端在onCreate和onNewWant接口中创建分布式数据对象并加入组网进行数据恢复\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    if (launchParam.launchReason === AbilityConstant.LaunchReason.CONTINUATION) {\n      if (want.parameters && want.parameters.distributedSessionId) {\n        this.restoreDistributedObject(want);\n      }\n    }\n  }\n\n  async restoreDistributedObject(want: Want): Promise<void> {\n    if (!want.parameters || !want.parameters.distributedSessionId) {\n      hilog.error(DOMAIN, TAG, 'missing sessionId');\n      return;\n    }\n\n    // 2.1 调用create接口创建并得到一个分布式数据对象实例\n    let mailInfo: ContentInfo = new ContentInfo(undefined, undefined, [], undefined, undefined, undefined, undefined);\n    dataObject = distributedDataObject.create(this.context, mailInfo);\n\n    // 2.2 注册恢复状态监听。收到状态为'restored'的回调通知时，表示接收端分布式数据对象已恢复发起端保存过来的数据（有资产数据时，对应的文件也迁移过来了）\n    dataObject.on('status', (sessionId: string, networkId: string, status: string) => {\n      hilog.info(DOMAIN, TAG, `status change, sessionId:  ${sessionId}`);\n      hilog.info(DOMAIN, TAG, `status change, networkId:  ${networkId}`);\n      if (status === 'restored') { // 收到'restored'的状态通知表示已恢复发起端保存的数据\n        hilog.info(DOMAIN, TAG, `title: ${dataObject['title']}, text: ${dataObject['text']}`);\n        AppStorage.setOrCreate('mainTitle', dataObject['mainTitle']);\n        AppStorage.setOrCreate('textContent', dataObject['textContent']);\n        AppStorage.setOrCreate('imageUriArray', dataObject['imageUriArray']);\n        AppStorage.setOrCreate('isShowLocalInfo', dataObject['isShowLocalInfo']);\n        AppStorage.setOrCreate('isAddLocalInfo', dataObject['isAddLocalInfo']);\n        AppStorage.setOrCreate('selectLocalInfo', dataObject['selectLocalInfo']);\n        AppStorage.setOrCreate<Array<ImageInfo>>('imageUriArray', this.imageUriArray);\n      }\n    });\n\n    // 2.3 从want.parameters中获取发起端放入的sessionId，调用setSessionId接口设置同步的sessionId\n    let sessionId = want.parameters.distributedSessionId as string;\n    hilog.info(DOMAIN, TAG, `get sessionId: ${sessionId}`);\n    dataObject.setSessionId(sessionId);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在多端协同中使用分布式数据对象",
      children: "在多端协同中使用分布式数据对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用端调用startAbilityByCall接口拉起对端Ability："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.1 调用genSessionId接口创建一个sessionId，通过分布式设备管理接口获取对端设备networkId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.2 组装want，并将sessionId放入want。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.3 调用startAbilityByCall接口拉起对端Ability。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用端拉起对端Ability后创建分布式数据对象并加入组网："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.1 创建分布式数据对象实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.2 注册数据变更监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.3 设置同步sessionId加入组网。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "被调用端被拉起后创建和恢复分布式数据对象："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3.1 创建分布式数据对象实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3.2 注册数据变更监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3.3 从want中获取源端放入的sessionId，使用这个sessionId加入组网。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(232645)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["暂时只支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction",
          children: "通过跨设备Call调用实现多端协同"
        }), "的场景中使用分布式数据对象进行数据同步。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["跨设备Call调用实现的多端协同开发需要申请ohos.permission.DISTRIBUTED_DATASYNC权限和配置单实例启动标签，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction",
          children: "通过跨设备Call调用实现多端协同"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wantParam中的\"sessionId\"字段可能被其他服务占用，建议自定义一个key存取sessionId。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用分布式设备管理获取对端设备networkId详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/distributed-service-kit/devicemanager-guidelines#%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2%E5%BC%80%E5%8F%91%E6%8C%87%E5%AF%BC",
          children: "设备信息查询开发指导"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, Caller, UIAbility, Want } from '@kit.AbilityKit';\nimport { distributedDataObject } from '@kit.ArkData';\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { JSON } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n// 业务数据定义\nclass Data {\n  public title: string | undefined;\n  public text: string | undefined;\n\n  constructor(title: string | undefined, text: string | undefined) {\n    this.title = title;\n    this.text = text;\n  }\n}\n\nconst DOMAIN: number = 0x0000;\nconst TAG: string = '[DistributedDataObject]';\n\nlet sessionId: string;\nlet caller: Caller;\nlet dataObject: distributedDataObject.DataObject;\nconst changeCallBack: distributedDataObject.DataObserver = (sessionId: string, fields: Array<string>) => {\n  console.info(`change, sessionId: ${sessionId}, fields: ${JSON.stringify(fields)}`);\n}\n\nexport default class EntryAbility extends UIAbility {\n  // 1. 调用端调用startAbilityByCall接口拉起对端Ability\n  callRemote() {\n    if (caller) {\n      hilog.error(DOMAIN, TAG, 'call remote already');\n      return;\n    }\n\n    // 1.1 调用genSessionId接口创建一个sessionId，通过分布式设备管理接口获取对端设备networkId\n    sessionId = distributedDataObject.genSessionId();\n    hilog.info(DOMAIN, TAG, `gen sessionId: ${sessionId}`);\n    let deviceId = getRemoteDeviceId();\n    if (deviceId === '') {\n      hilog.warn(DOMAIN, TAG, 'no remote device');\n      return;\n    }\n    hilog.info(DOMAIN, TAG, `get remote deviceId: ${deviceId}`);\n\n    // 1.2 组装want，并将sessionId放入want\n    let want: Want = {\n      bundleName: 'com.example.collaboration',\n      abilityName: 'EntryAbility',\n      deviceId: deviceId,\n      parameters: {\n        'ohos.aafwk.param.callAbilityToForeground': true, // 前台启动，非必须\n        'distributedSessionId': sessionId\n      }\n    }\n    try {\n      // 1.3 调用startAbilityByCall接口拉起对端Ability\n      this.context.startAbilityByCall(want).then((res) => {\n        if (!res) {\n          hilog.error(DOMAIN, TAG, 'startAbilityByCall failed');\n        }\n        caller = res;\n      })\n    } catch (e) {\n      let err = e as BusinessError;\n      hilog.error(DOMAIN, TAG, `get remote deviceId error, error code: ${err.code}, error message: ${err.message}`);\n    }\n  }\n\n  // 2. 拉起对端Ability后创建分布式数据对象\n  createDataObject() {\n    if (!caller) {\n      hilog.error(DOMAIN, TAG, 'call remote first');\n      return;\n    }\n    if (dataObject) {\n      hilog.error(DOMAIN, TAG, 'create dataObject already');\n      return;\n    }\n\n    // 2.1 创建分布式数据对象实例\n    let data = new Data('The title', 'The text');\n    dataObject = distributedDataObject.create(this.context, data);\n\n    // 2.2 注册数据变更监听\n    dataObject.on('change', changeCallBack);\n    // 2.3 设置同步sessionId加入组网\n    dataObject.setSessionId(sessionId);\n  }\n\n  // 3. 被调用端被拉起后创建和恢复分布式数据对象\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    if (want.parameters && want.parameters.distributedSessionId) {\n      // 3.1 创建分布式数据对象实例\n      let data = new Data(undefined, undefined);\n      dataObject = distributedDataObject.create(this.context, data);\n\n      // 3.2 注册数据变更监听\n      dataObject.on('change', changeCallBack);\n      // 3.3 从want中获取源端放入的sessionId，使用这个sessionId加入组网\n      let sessionId = want.parameters.distributedSessionId as string;\n      hilog.info(DOMAIN, TAG, `onCreate get sessionId: ${sessionId}`);\n      dataObject.setSessionId(sessionId);\n    }\n  }\n}\n\n// 获取可信组网中的设备\nfunction getRemoteDeviceId() {\n  let deviceId = '';\n  try {\n    let deviceManager = distributedDeviceManager.createDeviceManager('com.example.collaboration');\n    let devices = deviceManager.getAvailableDeviceListSync();\n    if (devices[0] && devices[0].networkId) {\n      deviceId = devices[0].networkId;\n    }\n  } catch (e) {\n    let err = e as BusinessError;\n    hilog.error(DOMAIN, TAG, `get remote deviceId error, error code: ${err.code}, error message: ${err.message}`);\n  }\n  return deviceId;\n}\n"
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
132588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957526-e1ae855a3cb3381026f9a5bc29e86546.jpg");

},
232645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
252984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477527-8d44ff696f89c0792b05759411b602bc.jpg");

},
848398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797878-8956fbb29db5334317588270eaf8dde6.jpg");

},
254481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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