"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["458109"], {
804822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_database_service_cloudfoundation_database_query_cloudfoundation_database_query_md_271_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-database-service-cloudfoundation-database-query-cloudfoundation-database-query-md-271.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_database_service_cloudfoundation_database_query_cloudfoundation_database_query_md_271_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-query/cloudfoundation-database-query","title":"查询数据","description":"云数据库通过query()方法查询对象，并提供了丰富的谓词查询，比如equalTo()、notEqualTo()、in()等。通过单个或者多个链式过滤条件，开发者可以从存储区查询到满足特定条件的对象，也可以通过排序谓词对查询结果排序，或者通过限定查询返回数量谓词限定查询结果返回的数量。详细的查询条件请参见DatabaseQuery。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-query/cloudfoundation-database-query.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-query","slug":"/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-query/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-query/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"查询数据","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-database-query","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"初始化数据库访问","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-initialize/"},"next":{"title":"写入数据","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-upsert/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-query/cloudfoundation-database-query.md


const frontMatter = {
	title: '查询数据',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-database-query',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '查询数据';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "简单查询",
  "id": "简单查询",
  "level": 2
}, {
  "value": "复合查询",
  "id": "复合查询",
  "level": 2
}, {
  "value": "数据排序",
  "id": "数据排序",
  "level": 2
}, {
  "value": "随机查询",
  "id": "随机查询",
  "level": 2
}, {
  "value": "限定数据查询返回数量",
  "id": "限定数据查询返回数量",
  "level": 2
}, {
  "value": "对查询结果进行算术计算",
  "id": "对查询结果进行算术计算",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "查询数据",
        children: "查询数据"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["云数据库通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
        children: "query()"
      }), "方法查询对象，并提供了丰富的谓词查询，比如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#equalto",
        children: "equalTo()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#notequalto",
        children: "notEqualTo()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#in",
        children: "in()"
      }), "等。通过单个或者多个链式过滤条件，开发者可以从存储区查询到满足特定条件的对象，也可以通过排序谓词对查询结果排序，或者通过限定查询返回数量谓词限定查询结果返回的数量。详细的查询条件请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#databasequery",
        children: "DatabaseQuery"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用会直接从云侧存储区服务器查询数据，本地不会缓存数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458304)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每次的查询操作仅支持查询一个对象类型下的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用查询数据方法，有两种返回方式，返回一个Promise对象或者在参数中传入一个callback对象返回，下面以Promise为例详细说明。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-initialize",
        children: "初始化数据库访问"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简单查询",
      children: "简单查询"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在无查询条件时，获取一个对象类型中所有的对象；也可以指定单个查询条件，来获取满足该条件的对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询对象类型BookInfo的所有数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync queryAll() {\n  try {\n    let resultArray = await databaseZone.query(condition);\n    hilog.info(0x0000, 'testTag', `Succeeded in querying data, result: ${JSON.stringify(resultArray)}`);\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to query data, code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(638639)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后续hilog都需要从@kit.PerformanceAnalysisKit中引入，将不在示例代码中呈现。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过异步侦听的方式查询“bookName”参数对应的书籍。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async queryBook(bookName: string): Promise<BookInfo> {\n  try {\n    condition.equalTo('bookName', bookName);\n    let resultArray = await databaseZone.query(condition);\n    let bookInfo = resultArray[0];\n    hilog.info(0x0000, 'testTag', `Succeeded in querying data, result: ${JSON.stringify(resultArray)}`);\n    return Promise.resolve(bookInfo);\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to query data, code: ${err.code}, message: ${err.message}`);\n    return Promise.reject(err);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复合查询",
      children: "复合查询"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过多个链式过滤条件，来获取满足条件的对象。多个链式条件之间默认用“与”运算。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
            children: "query()"
          }), "方法，查询“bookName”包含“数据库”，“price”大于20.0并且小于50.0的书籍。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "condition.contains('bookName', '数据库')\n  .greaterThan('price', 20.0)\n  .and()\n  .lessThan('price', 50.0);\nlet resultArray = await databaseZone.query(condition);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
            children: "query()"
          }), "方法，查询“bookName”包含“数据库”，“price”在小于20.0或者大于50.0区间的书籍。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "condition.contains('bookName', '数据库')\n  .lessThan('price', 20.0)\n  .or()\n  .greaterThan('price', 50.0);\nlet resultArray = await databaseZone.query(condition);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
            children: "query()"
          }), "方法，查询“bookName”包含“史记”，“author”是“司马迁”，“price”大于60.0的书籍。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "condition.contains('bookName', '史记')\n  .equalTo('author', '司马迁')\n  .greaterThan('price', 60.0);\nlet resultArray = await databaseZone.query(condition);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
            children: "query()"
          }), "方法，查询“bookName”包含“自传”，并且“author”是“齐白石”，或者“author”是“司马迁”，并且“price”大于60.0的书籍。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "condition.contains('bookName', '自传')\n  .beginGroup()\n  .equalTo('author', '齐白石')\n  .or()\n  .equalTo('author', '司马迁')\n  .endGroup()\n  .greaterThan('price', 60.0);\nlet resultArray = await databaseZone.query(condition);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
            children: "query()"
          }), "方法，查询“bookName”包含“数据库”，并且“borrowerTime”在特定时间段内的书籍。其中，针对Date类型构造greaterThan()、greaterThanOrEqualTo()、lessThan()、lessThanOrEqualTo()、equalTo()、notEqualTo()查询条件时，需要调用getTime()方法将Date类型转换成number类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let begin = (new Date(\"2025-12-29T08:00:00.000+08:00\")).getTime();\nlet end = (new Date(\"2025-12-31T08:00:00.000+08:00\")).getTime();\ncondition.contains('bookName', '数据库')\n  .greaterThan('borrowerTime', begin)\n  .and()\n  .lessThan('borrowerTime', end);\nlet resultArray = await databaseZone.query(condition);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据排序",
      children: "数据排序"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#orderbyasc",
        children: "orderByAsc()"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#orderbydesc",
        children: "orderByDesc()"
      }), "实现对查询结果集中的对象按某个字段进行升序或者降序排列，排序谓词需要在其它查询谓词之后且在限定数据查询数量谓词之前。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "condition.lessThan('price', 50.0)\n  .orderByDesc('price');\nlet resultArray = await databaseZone.query(condition);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "随机查询",
      children: "随机查询"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.1(21)版本开始，新增支持随机查询功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#orderbyrandom",
        children: "orderByRandom()"
      }), "按随机顺序展示查询结果集中的对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该方法适用于推荐随机内容、播放随机音视频等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "condition.orderByRandom()\n  .limit(10);\nlet resultArray = await databaseZone.query(condition);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限定数据查询返回数量",
      children: "限定数据查询返回数量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在查询数据时，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#limit",
        children: "limit()"
      }), "限定查询返回数据的起始位置和数量，实现数据的分页。例如与排序查询谓词组合使用，可以实现获取top-N条数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对查询结果中的对象限定查询返回数量时，限定数据查询返回数量谓词在所有其他谓词查询之后。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
            children: "query()"
          }), "方法，查询所有价格小于50.0的书籍，并且只显示最开始10条记录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "condition.lessThan('price', 50.0)\n  .limit(10);\nlet resultArray = await databaseZone.query(condition);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#query",
            children: "query()"
          }), "方法，查询所有价格小于50.0的书籍，并将查询结果按照降序排序，只显示价格排序从第6条开始的10条记录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "condition.lessThan('price', 50.0)\n  .orderByDesc('price')\n  .limit(10, 6);\nlet resultArray = await databaseZone.query(condition);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对查询结果进行算术计算",
      children: "对查询结果进行算术计算"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在查询数据时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#calculatequery",
        children: "calculateQuery()"
      }), "对查询结果对象中的某个字段进行算术计算并返回计算的结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构造查询条件，并调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-clouddatabase/cloudfoundation-clouddatabase#calculatequery",
        children: "calculateQuery()"
      }), "方法，查询所有价格小于50.0的书籍，并且计算所有书籍价格的平均值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async calculateQuery() {\n  try {\n    condition.lessThan('price', 50.0);\n    let resultNum = await databaseZone.calculateQuery(condition, 'price', cloudDatabase.QueryCalculate.AVERAGE);\n    hilog.info(0x0000, 'testTag', `Succeeded in calculating queried data, result: ${JSON.stringify(resultNum)}`);\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to calculate queried data, code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
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
638639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
458304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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