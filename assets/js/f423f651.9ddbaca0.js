"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["650851"], {
106129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_containers_linear_container_linear_container_md_f42_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-containers-linear-container-linear-container-md-f42.json
var site_docs_arkts_arkts_utils_containers_linear_container_linear_container_md_f42_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/containers/linear-container/linear-container","title":"线性容器","description":"线性容器实现能按顺序访问的数据结构，其底层主要通过数组实现，包括ArrayList、Vector、List、LinkedList、Deque、Queue和Stack。","source":"@site/docs/arkts/arkts-utils/containers/linear-container/linear-container.md","sourceDirName":"arkts/arkts-utils/containers/linear-container","slug":"/arkts/arkts-utils/containers/linear-container/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/linear-container/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"线性容器","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/linear-container","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"容器类库概述","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/container-overview/"},"next":{"title":"非线性容器","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/nonlinear-container/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/containers/linear-container/linear-container.md


const frontMatter = {
	title: '线性容器',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/linear-container',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '线性容器';

const assets = {

};



const toc = [{
  "value": "各线性容器类型特征对比",
  "id": "各线性容器类型特征对比",
  "level": 2
}, {
  "value": "ArrayList",
  "id": "arraylist",
  "level": 2
}, {
  "value": "List",
  "id": "list",
  "level": 2
}, {
  "value": "LinkedList",
  "id": "linkedlist",
  "level": 2
}, {
  "value": "Deque",
  "id": "deque",
  "level": 2
}, {
  "value": "Queue",
  "id": "queue",
  "level": 2
}, {
  "value": "Stack",
  "id": "stack",
  "level": 2
}, {
  "value": "Vector",
  "id": "vector",
  "level": 2
}, {
  "value": "线性容器的使用",
  "id": "线性容器的使用",
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
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "线性容器",
        children: "线性容器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线性容器实现能按顺序访问的数据结构，其底层主要通过数组实现，包括ArrayList、Vector、List、LinkedList、Deque、Queue和Stack。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线性容器优化了数据访问速度，运行时（Runtime）通过一条字节码指令即可完成增、删、改、查等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "各线性容器类型特征对比",
      children: "各线性容器类型特征对比"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特征及建议使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态数组，占用一片连续的内存空间。需要频繁读取元素时推荐使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单向链表，占用的空间可以不连续。推荐在需要频繁插入和删除元素，且需要使用单向链表时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LinkedList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双向链表，占用的空间可以不连续。推荐在需要频繁插入和删除元素，且需要使用双向链表时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双端队列，支持从头尾两端进行元素的插入和删除操作，占用连续的内存空间。推荐在需要频繁访问和操作头尾元素时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "队列，是一种从尾部插入元素、从头部移除元素的数据结构，占用连续的内存空间，适用于先进先出的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栈，只能从一端进行插入和删除操作，占用连续的内存空间。适用于先进后出的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态数组，占用连续的内存空间。已不再维护，推荐使用ArrayList。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arraylist",
      children: "ArrayList"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist",
        children: "ArrayList"
      }), "即动态数组，可用来构造全局的数组对象。需要频繁读取集合元素时，推荐使用ArrayList。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayList依据泛型定义，存储位置为连续的内存空间，初始容量为10，支持动态扩容，每次扩容为原始容量的1.5倍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayList支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在数组尾部增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert(element: T, index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定位置插入一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[index: number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "访问整个ArrayList容器的元素，其中callbackFn是forEach方法中用于处理每个元素的回调函数，它接收当前元素、索引和原列表作为参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arr[index] = xxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index位置对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除第一个匹配到的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeByRange(fromIndex: number, toIndex:number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定范围内的元素。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "list",
      children: "List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-list/js-apis-list",
        children: "List"
      }), "可用来构造一个单向链表对象，若需要查找List中某一个元素，只能从头结点开始遍历。List依据泛型定义，存储的元素在内存中的存储位置可以不连续。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-linkedlist/js-apis-linkedlist",
        children: "LinkedList"
      }), "相比，LinkedList是双向链表，支持在头部和尾部快速增删操作。List则是单向链表，不支持双向操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要频繁插入和删除元素，并且使用单向链表时，推荐使用List进行高效操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过get/set等接口修改存储的元素，List支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在数组尾部增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert(element: T, index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定位置增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index位置对应的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list[index: number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引位置的元素。若索引超出数组范围（index < 0 或 index >= list.length），或者数组是稀疏数组（存在未赋值的索引），则返回undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFirst()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取第一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLast()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOf(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取第一个匹配指定元素的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLastIndexOf(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个匹配指定元素的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackfn: (value:T, index?: number, list?: List<T>)=> void,thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个List容器中的每个元素，并执行指定的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set(index:number, element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index位置的元素值为element。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list[index] = element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index位置的元素值为element时，不会对链表中的实际节点进行任何更改，仅会在对象上添加一个属性，可能导致程序状态与链表内部数据不符，引发难以预测的行为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replaceAllElements(callbackFn:(value: T,index?: number,list?: List<T>)=>T,thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对List内元素进行逐个替换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过 === 运算符逐个比对链表中的元素，删除第一个匹配成功的节点。对于对象类型，只有当传入的对象与链表中某节点的引用完全一致时才会被删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeByIndex(index:number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除index位置对应的元素，如果index超出范围，则会报out of range错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linkedlist",
      children: "LinkedList"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-linkedlist/js-apis-linkedlist",
        children: "LinkedList"
      }), "可用于构造双向链表对象，支持在任意节点向前或向后遍历LinkedList。LinkedList依据泛型定义，其元素在内存中的存储位置可以不连续。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LinkedList和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-list/js-apis-list",
        children: "List"
      }), "相比，LinkedList是双向链表，支持快速的头尾增删操作。List是单向链表，不支持双向操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LinkedList和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist",
        children: "ArrayList"
      }), "相比，LinkedList插入数据的效率高于ArrayList，ArrayList查询效率高于LinkedList。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要频繁插入删除元素且使用双向链表时，推荐使用LinkedList。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过get/set等接口修改存储的元素。LinkedList支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在数组尾部增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert(element: T, index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定位置插入一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index位置对应的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list[index: number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index位置对应的元素，若索引超出数组范围（index < 0 或 index >= list.length），或者数组是稀疏数组（存在未赋值的索引），则返回undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFirst()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取第一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLast()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOf(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取第一个匹配指定元素的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLastIndexOf(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个匹配指定元素的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index?: number, list?: LinkedList<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个LinkedList容器的每个元素，并执行指定的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set(index:number, element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index位置的元素值为element。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list[index] = element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index位置的元素值为element，若索引超出数组范围（index < 0 或 index >= list.length），或者数组是稀疏数组（存在未赋值的索引），则可能导致未定义行为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除第一个匹配到的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeByIndex(index:number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除index位置对应的元素。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deque",
      children: "Deque"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-deque/js-apis-deque",
        children: "Deque"
      }), "可用来构造双端队列对象，存储元素遵循先进先出以及先进后出的规则，双端队列可以分别从队头或者队尾进行访问。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deque依据泛型定义，要求存储位置为连续的内存空间，初始容量为8，支持动态扩容，每次扩容为原容量的2倍。Deque底层采用循环队列实现，入队和出队操作效率高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deque和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-queue/js-apis-queue",
        children: "Queue"
      }), "相比，Deque支持在两端进行元素的增删操作，而Queue仅支持在头部删除元素，尾部增加元素。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deque和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/arkts-arkts-dep/js-apis-vector/js-apis-vector",
        children: "Vector"
      }), "相比，都支持在两端增删元素，但Deque不支持中间插入。Deque在头部插入和删除元素的效率高于Vector，而Vector访问元素的效率高于Deque。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要频繁在两端增删元素时，推荐使用Deque。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deque支持增、删、改、查操作。常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insertFront(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在头部增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insertEnd(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在尾部增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFirst()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取第一个元素，不进行出队操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLast()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个元素，不进行出队操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn:(value: T, index?: number, deque?: Deque<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个Deque容器的每个元素，并执行指定的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "popFirst()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将队首元素作为返回值进行返回，并将其出队，如果队列为空，则返回undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "popLast()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将队尾元素作为返回值进行返回，并将其出队，如果队列为空，则返回undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "queue",
      children: "Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-queue/js-apis-queue",
        children: "Queue"
      }), "可用来构造队列对象，存储元素遵循先进先出的规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queue基于泛型定义，存储位置为连续的内存空间，初始容量为8，支持动态扩容，每次扩容容量翻倍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queue底层采用循环队列实现，入队和出队操作效率高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Queue和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-deque/js-apis-deque",
        children: "Deque"
      }), "相比，Queue仅支持在头部删除元素，尾部增加元素，而Deque支持在两端进行元素的增删操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "符合先进先出的场景可以使用Queue。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queue支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在尾部增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFirst()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取队首元素，不进行出队操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index?: number, queue?: Queue<T>) => void,thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个Queue容器的每个元素，并执行指定的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将队首元素作为返回值进行返回，并将其移除。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stack",
      children: "Stack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-stack/js-apis-stack",
        children: "Stack"
      }), "可用来构造栈对象，存储元素遵循先进后出的规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack基于泛型定义，要求使用连续的内存空间存储元素，初始容量为8，并支持动态扩容，每次扩容为原容量的1.5倍。Stack底层使用数组实现，入栈和出栈操作均在数组的一端进行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stack和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-queue/js-apis-queue",
        children: "Queue"
      }), "相比，Queue基于循环队列实现，仅支持在头部删除元素，尾部增加元素，而Stack都在一端进行操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "符合先进后出的场景可以使用Stack。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push(item: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在栈顶增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "peek()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取栈顶元素，不进行出队操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "locate(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取元素对应的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index?: number, stack?: Stack<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个Stack容器的每个元素，并执行指定的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将栈顶元素作为返回值进行返回，并将其移除。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector",
      children: "Vector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392588)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 9开始，该接口不再维护，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist",
        children: "ArrayList"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/arkts-arkts-dep/js-apis-vector/js-apis-vector",
        children: "Vector"
      }), "是一种连续存储结构，用于创建全局数组对象。它基于泛型定义，要求存储在连续的内存空间中。Vector的初始容量为10，支持动态扩容，每次扩容时容量增加为原来的两倍。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vector和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist",
        children: "ArrayList"
      }), "相似，都基于数组实现，但Vector提供了更多操作数组的接口，支持操作符访问，增加get/set接口，提供更完善的校验和容错机制，满足不同的场景需求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vector支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在数组尾部增加一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "增加元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert(element: T, index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定位置插入一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index位置对应的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vec[index: number]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index位置对应的元素，通过指令获取保证访问速度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFirst()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取第一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLastElement()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOf(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取第一个匹配指定元素的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLastIndexOf(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个匹配指定元素的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index?: number, Vector?: Vector<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个Vector容器的每个元素，并执行指定的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "set(index:number, element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index位置的元素值为element。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vec[index] = element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index位置的元素值为element。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replaceAllElements(callbackFn: (value: T, index?: number, vector?: Vector<T>) => T, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "逐个替换Vector内的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setLength(newSize:number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Vector的长度大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(element: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除第一个匹配到的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeByIndex(index:number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除index位置对应的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeByRange(fromIndex:number,toIndex:number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定范围内的元素。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线性容器的使用",
      children: "线性容器的使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处列举常用的线性容器ArrayList、Deque、Stack、List的使用示例，包括导入模块、添加元素、访问元素及修改等操作。示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArrayList, Deque, Stack, List } from '@kit.ArkTS'; // 导入ArrayList，Deque，Stack，List模块\n\n  // ...\n  // ArrayList\n  let arrayList1: ArrayList<string> = new ArrayList();\n  arrayList1.add('a'); // 增加一个值为'a'的元素\n  let arrayList2: ArrayList<number> = new ArrayList();\n  arrayList2.add(1); // 增加一个值为1的元素\n  console.info(`result: ${arrayList2[0]}`); // 访问索引为0的元素。输出：result: 1\n  // ...\n  arrayList1[0] = 'one'; // 修改索引为0的元素\n  console.info(`result: ${arrayList1[0]}`); // 输出：result: one\n  // ...\n  // Deque\n  let deque1: Deque<string> = new Deque();\n  deque1.insertFront('a'); // 头部增加一个值为'a'的元素\n  let deque2: Deque<number> = new Deque();\n  deque2.insertFront(1); // 头部增加一个值为1的元素\n  console.info(`result: ${deque2.getFirst()}`); // 访问队列首部的元素。输出：result: 1\n  // ...\n  deque1.insertEnd('one'); // 尾部增加一个值为'one'的元素\n  console.info(`result: ${deque1.getLast()}`); // 访问队列尾部的元素。输出：result: one\n  // ...\n  // Stack\n  let stack1: Stack<string> = new Stack();\n  stack1.push('a'); // 向栈里增加一个值为'a'的元素\n  let stack2: Stack<number> = new Stack();\n  stack2.push(1); // 向栈里增加一个值为1的元素\n  console.info(`result: ${stack1.peek()}`); // 访问栈顶元素。输出：result: a\n  // ...\n  console.info(`result: ${stack2.pop()}`); // 删除栈顶元素并返回该删除元素。输出：result: 1\n  // ...\n  console.info(`result: ${stack2.length}`); // 输出：result: 0\n  // ...\n  // List\n  let list1: List<string> = new List();\n  list1.add('a'); // 增加一个值为'a'的元素\n  let list2: List<number> = new List();\n  list2.insert(0, 0); // 在0号位置插入（增加）一个值为0的元素\n  let list3: List<Array<number>> = new List();\n  let b2 = [1, 2, 3];\n  list3.add(b2); // 增加一个Array类型的元素\n  console.info(`result: ${list1[0]}`); // 访问索引为0的元素。输出：result: a\n  // ...\n  console.info(`result: ${list3.get(0)}`); // 访问索引为0的元素。输出：result: 1,2,3\n"
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
392588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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